(defproject balls "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2227"]
                 [com.cemerick/piggieback "0.1.3"]
                 [figwheel "0.1.3-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.3-SNAPSHOT"]]

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :source-paths ["src"]

  :cljsbuild {:builds [{:id "balls"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/balls.js"
                                   :output-dir "resources/public"
                                   :optimizations :none
                                   :source-map true}}]})
