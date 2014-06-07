// Compiled by ClojureScript 0.0-2227
goog.provide('balls.physics');
goog.require('cljs.core');
balls.physics.z = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null);
balls.physics.i = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null);
balls.physics.j = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null);
/**
* @param {...*} var_args
*/
balls.physics._PLUS_v = (function() { 
var _PLUS_v__delegate = function (vecs){return cljs.core.reduce.call(null,(function (p1__16579_SHARP_,p2__16580_SHARP_){return cljs.core.mapv.call(null,cljs.core._PLUS_,p1__16579_SHARP_,p2__16580_SHARP_);
}),balls.physics.z,vecs);
};
var _PLUS_v = function (var_args){
var vecs = null;if (arguments.length > 0) {
  vecs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _PLUS_v__delegate.call(this,vecs);};
_PLUS_v.cljs$lang$maxFixedArity = 0;
_PLUS_v.cljs$lang$applyTo = (function (arglist__16581){
var vecs = cljs.core.seq(arglist__16581);
return _PLUS_v__delegate(vecs);
});
_PLUS_v.cljs$core$IFn$_invoke$arity$variadic = _PLUS_v__delegate;
return _PLUS_v;
})()
;
/**
* @param {...*} var_args
*/
balls.physics._v = (function() { 
var _v__delegate = function (vec,vecs){return cljs.core.reduce.call(null,(function (p1__16582_SHARP_,p2__16583_SHARP_){return cljs.core.mapv.call(null,cljs.core._,p1__16582_SHARP_,p2__16583_SHARP_);
}),vec,vecs);
};
var _v = function (vec,var_args){
var vecs = null;if (arguments.length > 1) {
  vecs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return _v__delegate.call(this,vec,vecs);};
_v.cljs$lang$maxFixedArity = 1;
_v.cljs$lang$applyTo = (function (arglist__16584){
var vec = cljs.core.first(arglist__16584);
var vecs = cljs.core.rest(arglist__16584);
return _v__delegate(vec,vecs);
});
_v.cljs$core$IFn$_invoke$arity$variadic = _v__delegate;
return _v;
})()
;
/**
* @param {...*} var_args
*/
balls.physics._STAR_v = (function() { 
var _STAR_v__delegate = function (vec,scalars){return cljs.core.reduce.call(null,(function (v,s){return cljs.core.mapv.call(null,(function (p1__16585_SHARP_){return (p1__16585_SHARP_ * s);
}),v);
}),vec,scalars);
};
var _STAR_v = function (vec,var_args){
var scalars = null;if (arguments.length > 1) {
  scalars = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return _STAR_v__delegate.call(this,vec,scalars);};
_STAR_v.cljs$lang$maxFixedArity = 1;
_STAR_v.cljs$lang$applyTo = (function (arglist__16586){
var vec = cljs.core.first(arglist__16586);
var scalars = cljs.core.rest(arglist__16586);
return _STAR_v__delegate(vec,scalars);
});
_STAR_v.cljs$core$IFn$_invoke$arity$variadic = _STAR_v__delegate;
return _STAR_v;
})()
;
balls.physics.dot = (function dot(v1,v2){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,v1,v2));
});
balls.physics.cross = (function cross(p__16587,p__16588){var vec__16591 = p__16587;var a = cljs.core.nth.call(null,vec__16591,0,null);var b = cljs.core.nth.call(null,vec__16591,1,null);var vec__16592 = p__16588;var c = cljs.core.nth.call(null,vec__16592,0,null);var d = cljs.core.nth.call(null,vec__16592,1,null);return ((a * d) - (b * c));
});
balls.physics.seg = (function seg(x1,y1,x2,y2){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null);
});
balls.physics.norm = (function norm(v){return Math.sqrt(balls.physics.dot.call(null,v,v));
});
balls.physics.direction = (function direction(v){return balls.physics._STAR_v.call(null,v,(1 / balls.physics.norm.call(null,v)));
});
balls.physics.reflect_vec_vec = (function reflect_vec_vec(v1,v2){var d = balls.physics.direction.call(null,v2);var n = balls.physics._v.call(null,v1,balls.physics._STAR_v.call(null,d,balls.physics.dot.call(null,d,v1)));return balls.physics._v.call(null,v1,balls.physics._STAR_v.call(null,n,2));
});
balls.physics.reflect_vec_seg = (function reflect_vec_seg(v1,p__16593){var vec__16595 = p__16593;var p1 = cljs.core.nth.call(null,vec__16595,0,null);var p2 = cljs.core.nth.call(null,vec__16595,1,null);return balls.physics.reflect_vec_vec.call(null,v1,balls.physics._v.call(null,p2,p1));
});
balls.physics.reflect_seg_seg = (function reflect_seg_seg(p__16596,p__16597){var vec__16600 = p__16596;var p1 = cljs.core.nth.call(null,vec__16600,0,null);var p2 = cljs.core.nth.call(null,vec__16600,1,null);var vec__16601 = p__16597;var p3 = cljs.core.nth.call(null,vec__16601,0,null);var p4 = cljs.core.nth.call(null,vec__16601,1,null);return balls.physics._PLUS_v.call(null,p4,balls.physics.reflect_vec_seg.call(null,balls.physics._v.call(null,p2,p4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p3,p4], null)));
});
balls.physics.turn_direction = (function turn_direction(p1,p2,p3){return balls.physics.cross.call(null,balls.physics._v.call(null,p2,p1),balls.physics._v.call(null,p3,p2));
});
balls.physics.segment_line_intersects_QMARK_ = (function segment_line_intersects_QMARK_(p__16602,p__16603){var vec__16606 = p__16602;var p1 = cljs.core.nth.call(null,vec__16606,0,null);var p2 = cljs.core.nth.call(null,vec__16606,1,null);var vec__16607 = p__16603;var p3 = cljs.core.nth.call(null,vec__16607,0,null);var p4 = cljs.core.nth.call(null,vec__16607,1,null);var d1 = balls.physics.turn_direction.call(null,p3,p4,p1);var d2 = balls.physics.turn_direction.call(null,p3,p4,p2);return (((d1 > 0)) && ((d2 < 0))) || (((d1 < 0)) && ((d2 > 0)));
});
balls.physics.segments_intersect_QMARK_ = (function segments_intersect_QMARK_(seg1,seg2){return (balls.physics.segment_line_intersects_QMARK_.call(null,seg1,seg2)) && (balls.physics.segment_line_intersects_QMARK_.call(null,seg2,seg1));
});
balls.physics.move = (function move(p__16608,time){var map__16610 = p__16608;var map__16610__$1 = ((cljs.core.seq_QMARK_.call(null,map__16610))?cljs.core.apply.call(null,cljs.core.hash_map,map__16610):map__16610);var vel = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"vel","vel",1014020879));var dir = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"dir","dir",1014003711));var pos = cljs.core.get.call(null,map__16610__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));return balls.physics._PLUS_v.call(null,pos,balls.physics._STAR_v.call(null,dir,vel,time));
});
balls.physics.move_with_obstacles = (function move_with_obstacles(p__16612,obstacles,time){var map__16614 = p__16612;var map__16614__$1 = ((cljs.core.seq_QMARK_.call(null,map__16614))?cljs.core.apply.call(null,cljs.core.hash_map,map__16614):map__16614);var point = map__16614__$1;var dir = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"dir","dir",1014003711));var pos = cljs.core.get.call(null,map__16614__$1,new cljs.core.Keyword(null,"pos","pos",1014015430));var end = balls.physics.move.call(null,point,time);var collisions = cljs.core.filter.call(null,((function (end,map__16614,map__16614__$1,point,dir,pos){
return (function (p1__16611_SHARP_){return balls.physics.segments_intersect_QMARK_.call(null,p1__16611_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,end], null));
});})(end,map__16614,map__16614__$1,point,dir,pos))
,obstacles);if(cljs.core.empty_QMARK_.call(null,collisions))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",1014015430),end], null);
} else
{var c = cljs.core.first.call(null,collisions);var dir__$1 = balls.physics.reflect_vec_seg.call(null,dir,c);var pos__$1 = balls.physics.reflect_seg_seg.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,end], null),c);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",1014015430),pos__$1,new cljs.core.Keyword(null,"dir","dir",1014003711),dir__$1], null);
}
});
balls.physics.transform = (function transform(p__16615,p__16616){var vec__16621 = p__16615;var x = cljs.core.nth.call(null,vec__16621,0,null);var y = cljs.core.nth.call(null,vec__16621,1,null);var vec__16622 = p__16616;var vec__16623 = cljs.core.nth.call(null,vec__16622,0,null);var m11 = cljs.core.nth.call(null,vec__16623,0,null);var m12 = cljs.core.nth.call(null,vec__16623,1,null);var vec__16624 = cljs.core.nth.call(null,vec__16622,1,null);var m21 = cljs.core.nth.call(null,vec__16624,0,null);var m22 = cljs.core.nth.call(null,vec__16624,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((m11 * x) + (m12 * y)),((m21 * x) + (m22 * y))], null);
});
cljs.core.enable_console_print_BANG_.call(null);
balls.physics.rotate_point = (function rotate_point(alpha,center,point){var vec__16626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(alpha),Math.sin(alpha)], null);var c = cljs.core.nth.call(null,vec__16626,0,null);var s = cljs.core.nth.call(null,vec__16626,1,null);var matrix = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(- s)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,c], null)], null);cljs.core.print.call(null,Math.cos(alpha),Math.sin(alpha));
return balls.physics._PLUS_v.call(null,center,balls.physics.transform.call(null,balls.physics._v.call(null,point,center),matrix));
});
balls.physics.pi = Math.PI;
balls.physics.rotate_seg = (function rotate_seg(alpha,center,seg){return cljs.core.mapv.call(null,cljs.core.partial.call(null,balls.physics.rotate_point,alpha,center),seg);
});

//# sourceMappingURL=physics.js.map