// Compiled by ClojureScript 0.0-2227
goog.provide('balls.canvas');
goog.require('cljs.core');
balls.canvas.select_canvas_BANG_ = (function select_canvas_BANG_(canvas){return balls.canvas._STAR_canvas_ctx_STAR_ = canvas.getContext("2d");
});
balls.canvas.draw_with_props = (function draw_with_props(p__9407,draw){var map__9409 = p__9407;var map__9409__$1 = ((cljs.core.seq_QMARK_.call(null,map__9409))?cljs.core.apply.call(null,cljs.core.hash_map,map__9409):map__9409);var color = cljs.core.get.call(null,map__9409__$1,new cljs.core.Keyword(null,"color","color",1108746965));return balls.canvas.clear_draw.call(null,((function (map__9409,map__9409__$1,color){
return (function (){if(cljs.core.truth_(color))
{balls.canvas._STAR_canvas_ctx_STAR_.fillStyle = color;
balls.canvas._STAR_canvas_ctx_STAR_.strokeStyle = color;
} else
{}
return draw.call(null);
});})(map__9409,map__9409__$1,color))
);
});
balls.canvas.draw_item = (function (){var method_table__8795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8797__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8798__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8799__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("draw-item",cljs.core.first,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__8799__auto__,method_table__8795__auto__,prefer_table__8796__auto__,method_cache__8797__auto__,cached_hierarchy__8798__auto__));
})();
cljs.core._add_method.call(null,balls.canvas.draw_item,new cljs.core.Keyword(null,"rect","rect",1017400662),(function (p__9410){var vec__9411 = p__9410;var rect = cljs.core.nth.call(null,vec__9411,0,null);var w = cljs.core.nth.call(null,vec__9411,1,null);var h = cljs.core.nth.call(null,vec__9411,2,null);var props = cljs.core.nth.call(null,vec__9411,3,null);var hw = (- (w / 2));var hh = (- (h / 2));return balls.canvas.draw_with_props.call(null,props,((function (hw,hh,vec__9411,rect,w,h,props){
return (function (){return balls.canvas._STAR_canvas_ctx_STAR_.fillRect(hw,hh,w,h);
});})(hw,hh,vec__9411,rect,w,h,props))
);
}));
cljs.core._add_method.call(null,balls.canvas.draw_item,new cljs.core.Keyword(null,"circle","circle",3948654658),(function (p__9412){var vec__9413 = p__9412;var circle = cljs.core.nth.call(null,vec__9413,0,null);var radius = cljs.core.nth.call(null,vec__9413,1,null);var props = cljs.core.nth.call(null,vec__9413,2,null);return balls.canvas.draw_with_props.call(null,props,((function (vec__9413,circle,radius,props){
return (function (){var G__9414 = balls.canvas._STAR_canvas_ctx_STAR_;G__9414.beginPath();
G__9414.arc(0,0,radius,0,(2 * Math.PI),balls.canvas.True);
G__9414.fill();
return G__9414;
});})(vec__9413,circle,radius,props))
);
}));
cljs.core._add_method.call(null,balls.canvas.draw_item,new cljs.core.Keyword(null,"text","text",1017460895),(function (p__9415){var vec__9416 = p__9415;var text = cljs.core.nth.call(null,vec__9416,0,null);var text__$1 = cljs.core.nth.call(null,vec__9416,1,null);var x = cljs.core.nth.call(null,vec__9416,2,null);var y = cljs.core.nth.call(null,vec__9416,3,null);var props = cljs.core.nth.call(null,vec__9416,4,null);return balls.canvas._STAR_canvas_ctx_STAR_.fillText(text__$1,x,y);
}));
cljs.core._add_method.call(null,balls.canvas.draw_item,new cljs.core.Keyword(null,"at","at",1013907365),(function (p__9417){var vec__9418 = p__9417;var at = cljs.core.nth.call(null,vec__9418,0,null);var vec__9419 = cljs.core.nth.call(null,vec__9418,1,null);var x = cljs.core.nth.call(null,vec__9419,0,null);var y = cljs.core.nth.call(null,vec__9419,1,null);var item = cljs.core.nth.call(null,vec__9418,2,null);return balls.canvas.clear_draw.call(null,((function (vec__9418,at,vec__9419,x,y,item){
return (function (){balls.canvas._STAR_canvas_ctx_STAR_.translate(x,y);
return balls.canvas.draw_item.call(null,item);
});})(vec__9418,at,vec__9419,x,y,item))
);
}));
/**
* @param {...*} var_args
*/
balls.canvas.draw_items = (function() { 
var draw_items__delegate = function (items){var seq__9424 = cljs.core.seq.call(null,items);var chunk__9425 = null;var count__9426 = 0;var i__9427 = 0;while(true){
if((i__9427 < count__9426))
{var item = cljs.core._nth.call(null,chunk__9425,i__9427);balls.canvas.draw_item.call(null,item);
{
var G__9428 = seq__9424;
var G__9429 = chunk__9425;
var G__9430 = count__9426;
var G__9431 = (i__9427 + 1);
seq__9424 = G__9428;
chunk__9425 = G__9429;
count__9426 = G__9430;
i__9427 = G__9431;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9424);if(temp__4126__auto__)
{var seq__9424__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9424__$1))
{var c__8685__auto__ = cljs.core.chunk_first.call(null,seq__9424__$1);{
var G__9432 = cljs.core.chunk_rest.call(null,seq__9424__$1);
var G__9433 = c__8685__auto__;
var G__9434 = cljs.core.count.call(null,c__8685__auto__);
var G__9435 = 0;
seq__9424 = G__9432;
chunk__9425 = G__9433;
count__9426 = G__9434;
i__9427 = G__9435;
continue;
}
} else
{var item = cljs.core.first.call(null,seq__9424__$1);balls.canvas.draw_item.call(null,item);
{
var G__9436 = cljs.core.next.call(null,seq__9424__$1);
var G__9437 = null;
var G__9438 = 0;
var G__9439 = 0;
seq__9424 = G__9436;
chunk__9425 = G__9437;
count__9426 = G__9438;
i__9427 = G__9439;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var draw_items = function (var_args){
var items = null;if (arguments.length > 0) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return draw_items__delegate.call(this,items);};
draw_items.cljs$lang$maxFixedArity = 0;
draw_items.cljs$lang$applyTo = (function (arglist__9440){
var items = cljs.core.seq(arglist__9440);
return draw_items__delegate(items);
});
draw_items.cljs$core$IFn$_invoke$arity$variadic = draw_items__delegate;
return draw_items;
})()
;
balls.canvas.clear_draw = (function clear_draw(draw){balls.canvas._STAR_canvas_ctx_STAR_.save();
draw.call(null);
return balls.canvas._STAR_canvas_ctx_STAR_.restore();
});
balls.canvas.clear_frame = (function clear_frame(){var canvas = balls.canvas._STAR_canvas_ctx_STAR_.canvas;var vec__9442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__9442,0,null);var h = cljs.core.nth.call(null,vec__9442,1,null);return balls.canvas._STAR_canvas_ctx_STAR_.clearRect(0,0,w,h);
});
balls.canvas.draw_frame = (function draw_frame(frame){return requestAnimationFrame((function (){balls.canvas.clear_frame.call(null);
return balls.canvas.clear_draw.call(null,frame);
}));
});

//# sourceMappingURL=canvas.js.map