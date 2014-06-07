(ns balls.core
  (:require [balls.canvas :as canvas]
            [balls.physics :as ph]
            [clojure.browser.repl :as repl]
            [figwheel.client :as fw :include-macros true]))

(enable-console-print!)
(print "Clojure Balls!")

(repl/connect "http://localhost:9000/repl")

(declare start)
(declare end)
(fw/watch-and-reload
 :jsload-callback (fn []
                    (end)
                    (start)))

;;;;;;;;;;;;;;;;;;;
;;  App Logic
;;;;;;;;;;;;;;;;;;;

(def board-width 640)
(def board-height 480)
(def tick-length (/ 1000 30))

(def initial-state
  (let  [center (/ board-width 2)
         paddle-width 80
         paddle-height 4
         paddle-padding 4
         paddle-y (- board-height paddle-padding (/ paddle-height 2))]

    {:time 0
     :pos 10
     :ball {:radius 4
            :pos [center 20]
            :vel 250  ;; px / s
            :dir (ph/direction [1 1])}
     :paddle {:width paddle-width
              :height paddle-height
              :padding paddle-padding
              :pos [center paddle-y]}}))

(defn state-validator [{:keys [ball]}]
  (let [[x y] (:pos ball)]
    (and (< 0 x board-width) (< 0 y board-height))))

;; :validator state-validator
(def app-state (atom initial-state))

(defn paddle-seg [{width :width height :height [x y] :pos}]
  (let [top (- y (/ height 2))
        half-width (/ width 2)]
    (ph/seg (- x half-width) top (+ x half-width) top)))

(defn get-obstacles [{:keys [paddle]}]
  [(ph/seg 0 0 0 board-height)
   (ph/seg board-width board-height board-width 0)
   (ph/seg board-width 0 0 0)
   (paddle-seg paddle)])

(defn collide-ball-paddle [ball transition paddle]
  (let [top (paddle-seg paddle)
        ball-x (get-in ball [:pos 0])]
    (when (ph/segments-intersect? transition top)
      (let [[[l _] [r y]] top
            d (/ (- ball-x (/ (+ r l) 2))
                 (/ (- r l) 2))
            sin (max (min d 0.9) -0.9)
            alpha (.asin js/Math sin)
            rot (ph/rotate-seg alpha [ball-x l] top)]
        {:dir (ph/reflect-vec-seg (:dir ball) rot)
         :pos (ph/reflect-seg-seg transition top)}))))

(defn collide-ball-wall [ball transition wall]
  (when (ph/segments-intersect? transition wall)
    {:dir (ph/reflect-vec-seg (:dir ball) wall)
     :pos (ph/reflect-seg-seg transition wall)}))

(def walls
  [(ph/seg 0 0 0 board-height)
   (ph/seg board-width board-height board-width 0)
   (ph/seg board-width 0 0 0)])

(defn move-ball [ball paddle time]
  (let [end (ph/move ball time)
        transition [(:pos ball) end]
        [w1 w2 w3] walls]
    (or (collide-ball-paddle ball transition paddle)
        (collide-ball-wall ball transition w1)
        (collide-ball-wall ball transition w2)
        (collide-ball-wall ball transition w3)
        {:pos end})))

(defn handle-tick [[:tick dt] state]
  (if (> (get-in state [:ball :pos 1]) board-height) initial-state
      (let [obst (get-obstacles state)
            movement (fn [ball]
                       (merge ball
                              (move-ball ball
                                         (:paddle state)
                                         (/ dt 1000))))]
        (-> state
            (update-in [:time] + dt)
            (update-in [:ball] movement)))))

(defn handle-paddle-move-to
  [[:paddle-move-to x]
   {{padding :padding paddle-width :width} :paddle :as state}]
  (let [edge (+ padding (/ paddle-width 2))
        min-x edge
        max-x (- board-width edge)
        new-x (max (min x max-x) min-x)]
    (assoc-in state [:paddle :pos 0] new-x)))

(def handlers {:tick handle-tick
               :paddle-move-to handle-paddle-move-to})

(defn send [[event-key & _ :as event]]
  {:pre [(event-key handlers)]}
  (swap! app-state (partial (event-key handlers) event)))

;;;;;;;;;;;;;;;;;;;;;;;
;;  App View         ;;
;;;;;;;;;;;;;;;;;;;;;;;

(defn paddle-sprite [{:keys [width height]}]
  [:rect width height {:color "black"}])

(defn ball-sprite [{:keys [radius]}]
  [:circle radius {:color "blue"}])

(defn draw-app
  [{:keys [paddle ball]}]
  (canvas/draw-items [:at (:pos paddle) (paddle-sprite paddle)]
                     [:at (:pos ball) (ball-sprite ball)]))

;;;;;;;;;;;;;;;;;;;;;;;
;;  Canvas Bindings  ;;
;;;;;;;;;;;;;;;;;;;;;;;

(defn on-tick []
  (send [:tick tick-length]))

(defn on-mousemove [e]
  (let [abs-cord (.-clientX e)
        target-offset (.. e -currentTarget -offsetLeft)]
    (send [:paddle-move-to (- abs-cord target-offset)])))

(defn now []
  (.now js/performance))

(defn redraw []
  (canvas/draw-frame (partial draw-app @app-state)))


(declare end)
(defn start []
  (let [canvas (.querySelector js/document ".main__canvas")
        listener (.addEventListener canvas "mousemove" on-mousemove)
        interval (js/setInterval on-tick tick-length)]
    (canvas/select-canvas! canvas)
    (add-watch app-state :redraw redraw)
    (swap! app-state (constantly initial-state))

    (set! end (fn []
                (.removeEventListener canvas listener)
                (js/clearInterval interval)
                (remove-watch app-state :redraw)))))

(set! (.-onload js/window) start)
