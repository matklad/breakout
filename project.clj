(defproject balls "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2227"]
                 [com.cemerick/piggieback "0.1.3"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "balls"
              :source-paths ["src"]
              :compiler {
                :output-to "balls.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
