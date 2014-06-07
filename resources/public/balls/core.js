// Compiled by ClojureScript 0.0-2227
goog.provide('balls.core');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('clojure.browser.repl');
goog.require('clojure.browser.repl');
goog.require('balls.physics');
goog.require('balls.physics');
goog.require('balls.canvas');
goog.require('balls.canvas');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.print.call(null,"Clojure Balls!");
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){balls.core.end.call(null);
return balls.core.start.call(null);
}));
balls.core.board_width = 640;
balls.core.board_height = 480;
balls.core.tick_length = (1000 / 30);
balls.core.initial_state = (function (){var center = (balls.core.board_width / 2);var paddle_width = 80;var paddle_height = 4;var paddle_padding = 4;var paddle_y = ((balls.core.board_height - paddle_padding) - (paddle_height / 2));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1017464383),0,new cljs.core.Keyword(null,"pos","pos",1014015430),10,new cljs.core.Keyword(null,"ball","ball",1016920433),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"radius","radius",4370292740),4,new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center,20], null),new cljs.core.Keyword(null,"vel","vel",1014020879),250,new cljs.core.Keyword(null,"dir","dir",1014003711),balls.physics.direction.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null))], null),new cljs.core.Keyword(null,"paddle","paddle",4313029340),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",1127031096),paddle_width,new cljs.core.Keyword(null,"height","height",4087841945),paddle_height,new cljs.core.Keyword(null,"padding","padding",4502531971),paddle_padding,new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center,paddle_y], null)], null)], null);
})();
balls.core.state_validator = (function state_validator(p__17660){var map__17663 = p__17660;var map__17663__$1 = ((cljs.core.seq_QMARK_.call(null,map__17663))?cljs.core.apply.call(null,cljs.core.hash_map,map__17663):map__17663);var ball = cljs.core.get.call(null,map__17663__$1,new cljs.core.Keyword(null,"ball","ball",1016920433));var vec__17664 = new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(ball);var x = cljs.core.nth.call(null,vec__17664,0,null);var y = cljs.core.nth.call(null,vec__17664,1,null);return (((0 < x)) && ((x < balls.core.board_width))) && (((0 < y)) && ((y < balls.core.board_height)));
});
balls.core.app_state = cljs.core.atom.call(null,balls.core.initial_state);
balls.core.paddle_seg = (function paddle_seg(p__17665){var map__17668 = p__17665;var map__17668__$1 = ((cljs.core.seq_QMARK_.call(null,map__17668))?cljs.core.apply.call(null,cljs.core.hash_map,map__17668):map__17668);var width = cljs.core.get.call(null,map__17668__$1,new cljs.core.Keyword(null,"width","width",1127031096));var height = cljs.core.get.call(null,map__17668__$1,new cljs.core.Keyword(null,"height","height",4087841945));var vec__17669 = cljs.core.get.call(null,map__17668__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var x = cljs.core.nth.call(null,vec__17669,0,null);var y = cljs.core.nth.call(null,vec__17669,1,null);var top = (y - (height / 2));var half_width = (width / 2);return balls.physics.seg.call(null,(x - half_width),top,(x + half_width),top);
});
balls.core.get_obstacles = (function get_obstacles(p__17670){var map__17672 = p__17670;var map__17672__$1 = ((cljs.core.seq_QMARK_.call(null,map__17672))?cljs.core.apply.call(null,cljs.core.hash_map,map__17672):map__17672);var paddle = cljs.core.get.call(null,map__17672__$1,new cljs.core.Keyword(null,"paddle","paddle",4313029340));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [balls.physics.seg.call(null,0,0,0,balls.core.board_height),balls.physics.seg.call(null,balls.core.board_width,balls.core.board_height,balls.core.board_width,0),balls.physics.seg.call(null,balls.core.board_width,0,0,0),balls.core.paddle_seg.call(null,paddle)], null);
});
balls.core.collide_ball_paddle = (function collide_ball_paddle(ball,transition,paddle){var top = balls.core.paddle_seg.call(null,paddle);var ball_x = cljs.core.get_in.call(null,ball,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",1014015430),0], null));if(balls.physics.segments_intersect_QMARK_.call(null,transition,top))
{var vec__17676 = top;var vec__17677 = cljs.core.nth.call(null,vec__17676,0,null);var l = cljs.core.nth.call(null,vec__17677,0,null);var _ = cljs.core.nth.call(null,vec__17677,1,null);var vec__17678 = cljs.core.nth.call(null,vec__17676,1,null);var r = cljs.core.nth.call(null,vec__17678,0,null);var y = cljs.core.nth.call(null,vec__17678,1,null);var d = ((ball_x - ((r + l) / 2)) / ((r - l) / 2));var sin = (function (){var x__8236__auto__ = (function (){var x__8243__auto__ = d;var y__8244__auto__ = 0.9;return ((x__8243__auto__ < y__8244__auto__) ? x__8243__auto__ : y__8244__auto__);
})();var y__8237__auto__ = -0.9;return ((x__8236__auto__ > y__8237__auto__) ? x__8236__auto__ : y__8237__auto__);
})();var alpha = Math.asin(sin);var rot = balls.physics.rotate_seg.call(null,alpha,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ball_x,l], null),top);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1014003711),balls.physics.reflect_vec_seg.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ball),rot),new cljs.core.Keyword(null,"pos","pos",1014015430),balls.physics.reflect_seg_seg.call(null,transition,top)], null);
} else
{return null;
}
});
balls.core.collide_ball_wall = (function collide_ball_wall(ball,transition,wall){if(balls.physics.segments_intersect_QMARK_.call(null,transition,wall))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1014003711),balls.physics.reflect_vec_seg.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ball),wall),new cljs.core.Keyword(null,"pos","pos",1014015430),balls.physics.reflect_seg_seg.call(null,transition,wall)], null);
} else
{return null;
}
});
balls.core.walls = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [balls.physics.seg.call(null,0,0,0,balls.core.board_height),balls.physics.seg.call(null,balls.core.board_width,balls.core.board_height,balls.core.board_width,0),balls.physics.seg.call(null,balls.core.board_width,0,0,0)], null);
balls.core.move_ball = (function move_ball(ball,paddle,time){var end = balls.physics.move.call(null,ball,time);var transition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(ball),end], null);var vec__17680 = balls.core.walls;var w1 = cljs.core.nth.call(null,vec__17680,0,null);var w2 = cljs.core.nth.call(null,vec__17680,1,null);var w3 = cljs.core.nth.call(null,vec__17680,2,null);var or__7929__auto__ = balls.core.collide_ball_paddle.call(null,ball,transition,paddle);if(cljs.core.truth_(or__7929__auto__))
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = balls.core.collide_ball_wall.call(null,ball,transition,w1);if(cljs.core.truth_(or__7929__auto____$1))
{return or__7929__auto____$1;
} else
{var or__7929__auto____$2 = balls.core.collide_ball_wall.call(null,ball,transition,w2);if(cljs.core.truth_(or__7929__auto____$2))
{return or__7929__auto____$2;
} else
{var or__7929__auto____$3 = balls.core.collide_ball_wall.call(null,ball,transition,w3);if(cljs.core.truth_(or__7929__auto____$3))
{return or__7929__auto____$3;
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",1014015430),end], null);
}
}
}
}
});
balls.core.handle_tick = (function handle_tick(p__17681,state){var vec__17683 = p__17681;var tick = cljs.core.nth.call(null,vec__17683,0,null);var dt = cljs.core.nth.call(null,vec__17683,1,null);if((cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",1016920433),new cljs.core.Keyword(null,"pos","pos",1014015430),1], null)) > balls.core.board_height))
{return balls.core.initial_state;
} else
{var obst = balls.core.get_obstacles.call(null,state);var movement = ((function (obst,vec__17683,tick,dt){
return (function (ball){return cljs.core.merge.call(null,ball,balls.core.move_ball.call(null,ball,new cljs.core.Keyword(null,"paddle","paddle",4313029340).cljs$core$IFn$_invoke$arity$1(state),(dt / 1000)));
});})(obst,vec__17683,tick,dt))
;return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1017464383)], null),cljs.core._PLUS_,dt),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ball","ball",1016920433)], null),movement);
}
});
balls.core.handle_paddle_move_to = (function handle_paddle_move_to(p__17684,p__17685){var vec__17689 = p__17684;var paddle_move_to = cljs.core.nth.call(null,vec__17689,0,null);var x = cljs.core.nth.call(null,vec__17689,1,null);var map__17690 = p__17685;var map__17690__$1 = ((cljs.core.seq_QMARK_.call(null,map__17690))?cljs.core.apply.call(null,cljs.core.hash_map,map__17690):map__17690);var state = map__17690__$1;var map__17691 = cljs.core.get.call(null,map__17690__$1,new cljs.core.Keyword(null,"paddle","paddle",4313029340));var map__17691__$1 = ((cljs.core.seq_QMARK_.call(null,map__17691))?cljs.core.apply.call(null,cljs.core.hash_map,map__17691):map__17691);var padding = cljs.core.get.call(null,map__17691__$1,new cljs.core.Keyword(null,"padding","padding",4502531971));var paddle_width = cljs.core.get.call(null,map__17691__$1,new cljs.core.Keyword(null,"width","width",1127031096));var edge = (padding + (paddle_width / 2));var min_x = edge;var max_x = (balls.core.board_width - edge);var new_x = (function (){var x__8236__auto__ = (function (){var x__8243__auto__ = x;var y__8244__auto__ = max_x;return ((x__8243__auto__ < y__8244__auto__) ? x__8243__auto__ : y__8244__auto__);
})();var y__8237__auto__ = min_x;return ((x__8236__auto__ > y__8237__auto__) ? x__8236__auto__ : y__8237__auto__);
})();return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paddle","paddle",4313029340),new cljs.core.Keyword(null,"pos","pos",1014015430),0], null),new_x);
});
balls.core.handlers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tick","tick",1017464079),balls.core.handle_tick,new cljs.core.Keyword(null,"paddle-move-to","paddle-move-to",2995130886),balls.core.handle_paddle_move_to], null);
balls.core.send = (function send(p__17692){var vec__17694 = p__17692;var event_key = cljs.core.nth.call(null,vec__17694,0,null);var _ = cljs.core.nthnext.call(null,vec__17694,1);var event = vec__17694;if(cljs.core.truth_(event_key.call(null,balls.core.handlers)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"event-key","event-key",-1610276251,null),new cljs.core.Symbol(null,"handlers","handlers",-1638462430,null)))))));
}
return cljs.core.swap_BANG_.call(null,balls.core.app_state,cljs.core.partial.call(null,event_key.call(null,balls.core.handlers),event));
});
balls.core.paddle_sprite = (function paddle_sprite(p__17695){var map__17697 = p__17695;var map__17697__$1 = ((cljs.core.seq_QMARK_.call(null,map__17697))?cljs.core.apply.call(null,cljs.core.hash_map,map__17697):map__17697);var height = cljs.core.get.call(null,map__17697__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__17697__$1,new cljs.core.Keyword(null,"width","width",1127031096));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),width,height,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"black"], null)], null);
});
balls.core.ball_sprite = (function ball_sprite(p__17698){var map__17700 = p__17698;var map__17700__$1 = ((cljs.core.seq_QMARK_.call(null,map__17700))?cljs.core.apply.call(null,cljs.core.hash_map,map__17700):map__17700);var radius = cljs.core.get.call(null,map__17700__$1,new cljs.core.Keyword(null,"radius","radius",4370292740));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),radius,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"blue"], null)], null);
});
balls.core.draw_app = (function draw_app(p__17701){var map__17703 = p__17701;var map__17703__$1 = ((cljs.core.seq_QMARK_.call(null,map__17703))?cljs.core.apply.call(null,cljs.core.hash_map,map__17703):map__17703);var ball = cljs.core.get.call(null,map__17703__$1,new cljs.core.Keyword(null,"ball","ball",1016920433));var paddle = cljs.core.get.call(null,map__17703__$1,new cljs.core.Keyword(null,"paddle","paddle",4313029340));return balls.canvas.draw_items.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at","at",1013907365),new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(paddle),balls.core.paddle_sprite.call(null,paddle)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at","at",1013907365),new cljs.core.Keyword(null,"pos","pos",1014015430).cljs$core$IFn$_invoke$arity$1(ball),balls.core.ball_sprite.call(null,ball)], null));
});
balls.core.on_tick = (function on_tick(){return balls.core.send.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",1017464079),balls.core.tick_length], null));
});
balls.core.on_mousemove = (function on_mousemove(e){var abs_cord = e.clientX;var target_offset = e.currentTarget.offsetLeft;return balls.core.send.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paddle-move-to","paddle-move-to",2995130886),(abs_cord - target_offset)], null));
});
balls.core.now = (function now(){return performance.now();
});
balls.core.redraw = (function redraw(){return balls.canvas.draw_frame.call(null,cljs.core.partial.call(null,balls.core.draw_app,cljs.core.deref.call(null,balls.core.app_state)));
});
balls.core.start = (function start(){var canvas = document.querySelector(".main__canvas");var listener = canvas.addEventListener("mousemove",balls.core.on_mousemove);var interval = setInterval(balls.core.on_tick,balls.core.tick_length);balls.canvas.select_canvas_BANG_.call(null,canvas);
cljs.core.add_watch.call(null,balls.core.app_state,new cljs.core.Keyword(null,"redraw","redraw",4373994857),balls.core.redraw);
cljs.core.swap_BANG_.call(null,balls.core.app_state,cljs.core.constantly.call(null,balls.core.initial_state));
return balls.core.end = ((function (canvas,listener,interval){
return (function (){canvas.removeEventListener(listener);
clearInterval(interval);
return cljs.core.remove_watch.call(null,balls.core.app_state,new cljs.core.Keyword(null,"redraw","redraw",4373994857));
});})(canvas,listener,interval))
;
});
window.onload = balls.core.start;

//# sourceMappingURL=core.js.map