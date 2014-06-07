(ns balls.canvas)

(declare ^:dynamic *canvas-ctx*)

(defn select-canvas! [canvas]
  (set! *canvas-ctx* (.getContext canvas "2d")))

(defn draw-with-props [{:keys [color]} draw]
  (clear-draw (fn []
                (when color
                  (set! (.-fillStyle *canvas-ctx*) color)
                  (set! (.-strokeStyle *canvas-ctx*) color))
                (draw))))

(defmulti draw-item first)

(defmethod draw-item :rect [[:rect w h props]]
  (let [hw (- (/ w 2))
        hh (- (/ h 2))]
    (draw-with-props props #(.fillRect *canvas-ctx* hw hh w h))))

(defmethod draw-item :circle [[:circle radius props]]
  (draw-with-props props #(doto *canvas-ctx*
                            .beginPath
                            (.arc 0 0 radius 0 (* 2 (.-PI js/Math)) True)
                            .fill)))

(defmethod draw-item :text [[:text text x y props]]
  (.fillText *canvas-ctx* text x y))

(defmethod draw-item :at [[:at [x y] item]]
  (clear-draw (fn []
                (.translate *canvas-ctx* x y)
                (draw-item item))))

(defn draw-items [& items]
  ;; (log "draw-items")
  (doseq [item items]
    (draw-item item)))

(defn clear-draw [draw]
  (.save *canvas-ctx*)
  (draw)
  (.restore *canvas-ctx*))

(defn clear-frame []
  (let [canvas (.-canvas *canvas-ctx*)
        [w h] [(.-width canvas) (.-height canvas)]]
    (.clearRect *canvas-ctx* 0 0 w h)))

(defn draw-frame [frame]
  (js/requestAnimationFrame
   (fn [] (clear-frame)
     (clear-draw frame))))
