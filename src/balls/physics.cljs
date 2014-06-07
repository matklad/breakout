(ns balls.physics)

(def z [0 0])
(def i [1 0])
(def j [0 1])

(defn +v [& vecs]
  (reduce #(mapv + %1 %2) z vecs))

(defn -v [vec & vecs]
  (reduce #(mapv - %1 %2) vec vecs))

(defn *v [vec & scalars]
  (reduce (fn [v s] (mapv #(* % s) v)) vec scalars))

(defn dot [v1 v2]
  (reduce + (map * v1 v2)))

(defn cross [[a b]
             [c d]]
  (- (* a d) (* b c)))

(defn seg [x1 y1 x2 y2]
  [[x1 y1] [x2 y2]])

(defn norm [v]
  (.sqrt js/Math (dot v v)))

(defn direction [v]
  (*v v (/ (norm v))))


(defn- reflect-vec-vec [v1 v2]
  (let [d (direction v2)
        n (-v v1 (*v d (dot d v1)))]
    (-v v1 (*v n 2))))

(defn reflect-vec-seg [v1 [p1 p2]]
  (reflect-vec-vec v1 (-v p2 p1)))

(defn reflect-seg-seg [[p1 p2] [p3 p4]]
  (+v p4 (reflect-vec-seg (-v p2 p4) [p3 p4])))

(defn- turn-direction [p1 p2 p3]
  (cross (-v p2 p1) (-v p3 p2)))

(defn- segment-line-intersects? [[p1 p2] [p3 p4]]
  (let [d1 (turn-direction p3 p4 p1)
        d2 (turn-direction p3 p4 p2)]
    (or (and (pos? d1) (neg? d2))
        (and (neg? d1) (pos? d2)))))

(defn segments-intersect? [seg1 seg2]
  (and (segment-line-intersects? seg1 seg2)
       (segment-line-intersects? seg2 seg1)))

(defn move [{:keys [pos dir vel]} time]
  (+v pos (*v dir vel time)))

(defn move-with-obstacles
  [{:keys [pos dir] :as point} obstacles time]
  (let [end (move point time)
        collisions (filter #(segments-intersect? % [pos end])
                           obstacles)]
    (if (empty? collisions) {:pos end}
        (let [c (first collisions)
              dir (reflect-vec-seg dir c)
              pos (reflect-seg-seg [pos end] c)]
          {:pos pos
           :dir dir}))))

(defn transform [[x y]
                 [[m11 m12]
                  [m21 m22]]]
  [(+ (* m11 x) (* m12 y))
   (+ (* m21 x) (* m22 y))])

(enable-console-print!)
(defn rotate-point [alpha center point]
  (let [[c s] [(.cos js/Math alpha) (.sin js/Math alpha)]
        matrix [[c (- s)]
                [s c]]]
    (print (.cos js/Math alpha) (.sin js/Math alpha))
    (+v center (transform (-v point center) matrix))))

(def pi (.-PI js/Math))

(defn rotate-seg [alpha center seg]
  (mapv (partial rotate-point alpha center) seg))
