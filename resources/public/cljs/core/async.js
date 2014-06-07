// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13545 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13545 = (function (f,fn_handler,meta13546){
this.f = f;
this.fn_handler = fn_handler;
this.meta13546 = meta13546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13545.cljs$lang$type = true;
cljs.core.async.t13545.cljs$lang$ctorStr = "cljs.core.async/t13545";
cljs.core.async.t13545.cljs$lang$ctorPrWriter = (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t13545");
});
cljs.core.async.t13545.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13547){var self__ = this;
var _13547__$1 = this;return self__.meta13546;
});
cljs.core.async.t13545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13547,meta13546__$1){var self__ = this;
var _13547__$1 = this;return (new cljs.core.async.t13545(self__.f,self__.fn_handler,meta13546__$1));
});
cljs.core.async.__GT_t13545 = (function __GT_t13545(f__$1,fn_handler__$1,meta13546){return (new cljs.core.async.t13545(f__$1,fn_handler__$1,meta13546));
});
}
return (new cljs.core.async.t13545(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13549 = buff;if(G__13549)
{var bit__8579__auto__ = null;if(cljs.core.truth_((function (){var or__7929__auto__ = bit__8579__auto__;if(cljs.core.truth_(or__7929__auto__))
{return or__7929__auto__;
} else
{return G__13549.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13549.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13549);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13549);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13550 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13550);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13550,ret){
return (function (){return fn1.call(null,val_13550);
});})(val_13550,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8785__auto___13551 = n;var x_13552 = 0;while(true){
if((x_13552 < n__8785__auto___13551))
{(a[x_13552] = 0);
{
var G__13553 = (x_13552 + 1);
x_13552 = G__13553;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13554 = (i + 1);
i = G__13554;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13558 = (function (flag,alt_flag,meta13559){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13559 = meta13559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13558.cljs$lang$type = true;
cljs.core.async.t13558.cljs$lang$ctorStr = "cljs.core.async/t13558";
cljs.core.async.t13558.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t13558");
});})(flag))
;
cljs.core.async.t13558.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t13558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t13558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13560){var self__ = this;
var _13560__$1 = this;return self__.meta13559;
});})(flag))
;
cljs.core.async.t13558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13560,meta13559__$1){var self__ = this;
var _13560__$1 = this;return (new cljs.core.async.t13558(self__.flag,self__.alt_flag,meta13559__$1));
});})(flag))
;
cljs.core.async.__GT_t13558 = ((function (flag){
return (function __GT_t13558(flag__$1,alt_flag__$1,meta13559){return (new cljs.core.async.t13558(flag__$1,alt_flag__$1,meta13559));
});})(flag))
;
}
return (new cljs.core.async.t13558(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13564 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13564 = (function (cb,flag,alt_handler,meta13565){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13565 = meta13565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13564.cljs$lang$type = true;
cljs.core.async.t13564.cljs$lang$ctorStr = "cljs.core.async/t13564";
cljs.core.async.t13564.cljs$lang$ctorPrWriter = (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t13564");
});
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13566){var self__ = this;
var _13566__$1 = this;return self__.meta13565;
});
cljs.core.async.t13564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13566,meta13565__$1){var self__ = this;
var _13566__$1 = this;return (new cljs.core.async.t13564(self__.cb,self__.flag,self__.alt_handler,meta13565__$1));
});
cljs.core.async.__GT_t13564 = (function __GT_t13564(cb__$1,flag__$1,alt_handler__$1,meta13565){return (new cljs.core.async.t13564(cb__$1,flag__$1,alt_handler__$1,meta13565));
});
}
return (new cljs.core.async.t13564(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13567_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13567_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13568_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13568_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7929__auto__ = wport;if(cljs.core.truth_(or__7929__auto__))
{return or__7929__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13569 = (i + 1);
i = G__13569;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7929__auto__ = ret;if(cljs.core.truth_(or__7929__auto__))
{return or__7929__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__7917__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7917__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7917__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__13570){var map__13572 = p__13570;var map__13572__$1 = ((cljs.core.seq_QMARK_.call(null,map__13572))?cljs.core.apply.call(null,cljs.core.hash_map,map__13572):map__13572);var opts = map__13572__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13570 = null;if (arguments.length > 1) {
  p__13570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13570);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13573){
var ports = cljs.core.first(arglist__13573);
var p__13570 = cljs.core.rest(arglist__13573);
return alts_BANG___delegate(ports,p__13570);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13581 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13581 = (function (ch,f,map_LT_,meta13582){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13582 = meta13582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13581.cljs$lang$type = true;
cljs.core.async.t13581.cljs$lang$ctorStr = "cljs.core.async/t13581";
cljs.core.async.t13581.cljs$lang$ctorPrWriter = (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t13581");
});
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13584 = (function (fn1,_,meta13582,ch,f,map_LT_,meta13585){
this.fn1 = fn1;
this._ = _;
this.meta13582 = meta13582;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13585 = meta13585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13584.cljs$lang$type = true;
cljs.core.async.t13584.cljs$lang$ctorStr = "cljs.core.async/t13584";
cljs.core.async.t13584.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t13584");
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13574_SHARP_){return f1.call(null,(((p1__13574_SHARP_ == null))?null:self__.f.call(null,p1__13574_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13586){var self__ = this;
var _13586__$1 = this;return self__.meta13585;
});})(___$1))
;
cljs.core.async.t13584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13586,meta13585__$1){var self__ = this;
var _13586__$1 = this;return (new cljs.core.async.t13584(self__.fn1,self__._,self__.meta13582,self__.ch,self__.f,self__.map_LT_,meta13585__$1));
});})(___$1))
;
cljs.core.async.__GT_t13584 = ((function (___$1){
return (function __GT_t13584(fn1__$1,___$2,meta13582__$1,ch__$2,f__$2,map_LT___$2,meta13585){return (new cljs.core.async.t13584(fn1__$1,___$2,meta13582__$1,ch__$2,f__$2,map_LT___$2,meta13585));
});})(___$1))
;
}
return (new cljs.core.async.t13584(fn1,___$1,self__.meta13582,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7917__auto__ = ret;if(cljs.core.truth_(and__7917__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7917__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13581.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13583){var self__ = this;
var _13583__$1 = this;return self__.meta13582;
});
cljs.core.async.t13581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13583,meta13582__$1){var self__ = this;
var _13583__$1 = this;return (new cljs.core.async.t13581(self__.ch,self__.f,self__.map_LT_,meta13582__$1));
});
cljs.core.async.__GT_t13581 = (function __GT_t13581(ch__$1,f__$1,map_LT___$1,meta13582){return (new cljs.core.async.t13581(ch__$1,f__$1,map_LT___$1,meta13582));
});
}
return (new cljs.core.async.t13581(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13590 = (function (ch,f,map_GT_,meta13591){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13591 = meta13591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13590.cljs$lang$type = true;
cljs.core.async.t13590.cljs$lang$ctorStr = "cljs.core.async/t13590";
cljs.core.async.t13590.cljs$lang$ctorPrWriter = (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t13590");
});
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13592){var self__ = this;
var _13592__$1 = this;return self__.meta13591;
});
cljs.core.async.t13590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13592,meta13591__$1){var self__ = this;
var _13592__$1 = this;return (new cljs.core.async.t13590(self__.ch,self__.f,self__.map_GT_,meta13591__$1));
});
cljs.core.async.__GT_t13590 = (function __GT_t13590(ch__$1,f__$1,map_GT___$1,meta13591){return (new cljs.core.async.t13590(ch__$1,f__$1,map_GT___$1,meta13591));
});
}
return (new cljs.core.async.t13590(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13596 = (function (ch,p,filter_GT_,meta13597){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13597 = meta13597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13596.cljs$lang$type = true;
cljs.core.async.t13596.cljs$lang$ctorStr = "cljs.core.async/t13596";
cljs.core.async.t13596.cljs$lang$ctorPrWriter = (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t13596");
});
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13596.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13598){var self__ = this;
var _13598__$1 = this;return self__.meta13597;
});
cljs.core.async.t13596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13598,meta13597__$1){var self__ = this;
var _13598__$1 = this;return (new cljs.core.async.t13596(self__.ch,self__.p,self__.filter_GT_,meta13597__$1));
});
cljs.core.async.__GT_t13596 = (function __GT_t13596(ch__$1,p__$1,filter_GT___$1,meta13597){return (new cljs.core.async.t13596(ch__$1,p__$1,filter_GT___$1,meta13597));
});
}
return (new cljs.core.async.t13596(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10530__auto___13681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___13681,out){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___13681,out){
return (function (state_13660){var state_val_13661 = (state_13660[1]);if((state_val_13661 === 7))
{var inst_13656 = (state_13660[2]);var state_13660__$1 = state_13660;var statearr_13662_13682 = state_13660__$1;(statearr_13662_13682[2] = inst_13656);
(statearr_13662_13682[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13661 === 1))
{var state_13660__$1 = state_13660;var statearr_13663_13683 = state_13660__$1;(statearr_13663_13683[2] = null);
(statearr_13663_13683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13661 === 4))
{var inst_13642 = (state_13660[7]);var inst_13642__$1 = (state_13660[2]);var inst_13643 = (inst_13642__$1 == null);var state_13660__$1 = (function (){var statearr_13664 = state_13660;(statearr_13664[7] = inst_13642__$1);
return statearr_13664;
})();if(cljs.core.truth_(inst_13643))
{var statearr_13665_13684 = state_13660__$1;(statearr_13665_13684[1] = 5);
} else
{var statearr_13666_13685 = state_13660__$1;(statearr_13666_13685[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13661 === 6))
{var inst_13642 = (state_13660[7]);var inst_13647 = p.call(null,inst_13642);var state_13660__$1 = state_13660;if(cljs.core.truth_(inst_13647))
{var statearr_13667_13686 = state_13660__$1;(statearr_13667_13686[1] = 8);
} else
{var statearr_13668_13687 = state_13660__$1;(statearr_13668_13687[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13661 === 3))
{var inst_13658 = (state_13660[2]);var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13660__$1,inst_13658);
} else
{if((state_val_13661 === 2))
{var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13660__$1,4,ch);
} else
{if((state_val_13661 === 11))
{var inst_13650 = (state_13660[2]);var state_13660__$1 = state_13660;var statearr_13669_13688 = state_13660__$1;(statearr_13669_13688[2] = inst_13650);
(statearr_13669_13688[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13661 === 9))
{var state_13660__$1 = state_13660;var statearr_13670_13689 = state_13660__$1;(statearr_13670_13689[2] = null);
(statearr_13670_13689[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13661 === 5))
{var inst_13645 = cljs.core.async.close_BANG_.call(null,out);var state_13660__$1 = state_13660;var statearr_13671_13690 = state_13660__$1;(statearr_13671_13690[2] = inst_13645);
(statearr_13671_13690[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13661 === 10))
{var inst_13653 = (state_13660[2]);var state_13660__$1 = (function (){var statearr_13672 = state_13660;(statearr_13672[8] = inst_13653);
return statearr_13672;
})();var statearr_13673_13691 = state_13660__$1;(statearr_13673_13691[2] = null);
(statearr_13673_13691[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13661 === 8))
{var inst_13642 = (state_13660[7]);var state_13660__$1 = state_13660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13660__$1,11,out,inst_13642);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___13681,out))
;return ((function (switch__10465__auto__,c__10530__auto___13681,out){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_13677 = [null,null,null,null,null,null,null,null,null];(statearr_13677[0] = state_machine__10466__auto__);
(statearr_13677[1] = 1);
return statearr_13677;
});
var state_machine__10466__auto____1 = (function (state_13660){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_13660);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e13678){if((e13678 instanceof Object))
{var ex__10469__auto__ = e13678;var statearr_13679_13692 = state_13660;(statearr_13679_13692[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13660);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13693 = state_13660;
state_13660 = G__13693;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_13660){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_13660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___13681,out))
})();var state__10532__auto__ = (function (){var statearr_13680 = f__10531__auto__.call(null);(statearr_13680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___13681);
return statearr_13680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___13681,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10530__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto__){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto__){
return (function (state_13859){var state_val_13860 = (state_13859[1]);if((state_val_13860 === 7))
{var inst_13855 = (state_13859[2]);var state_13859__$1 = state_13859;var statearr_13861_13902 = state_13859__$1;(statearr_13861_13902[2] = inst_13855);
(statearr_13861_13902[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 20))
{var inst_13825 = (state_13859[7]);var inst_13836 = (state_13859[2]);var inst_13837 = cljs.core.next.call(null,inst_13825);var inst_13811 = inst_13837;var inst_13812 = null;var inst_13813 = 0;var inst_13814 = 0;var state_13859__$1 = (function (){var statearr_13862 = state_13859;(statearr_13862[8] = inst_13836);
(statearr_13862[9] = inst_13814);
(statearr_13862[10] = inst_13813);
(statearr_13862[11] = inst_13811);
(statearr_13862[12] = inst_13812);
return statearr_13862;
})();var statearr_13863_13903 = state_13859__$1;(statearr_13863_13903[2] = null);
(statearr_13863_13903[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 1))
{var state_13859__$1 = state_13859;var statearr_13864_13904 = state_13859__$1;(statearr_13864_13904[2] = null);
(statearr_13864_13904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 4))
{var inst_13800 = (state_13859[13]);var inst_13800__$1 = (state_13859[2]);var inst_13801 = (inst_13800__$1 == null);var state_13859__$1 = (function (){var statearr_13865 = state_13859;(statearr_13865[13] = inst_13800__$1);
return statearr_13865;
})();if(cljs.core.truth_(inst_13801))
{var statearr_13866_13905 = state_13859__$1;(statearr_13866_13905[1] = 5);
} else
{var statearr_13867_13906 = state_13859__$1;(statearr_13867_13906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 15))
{var state_13859__$1 = state_13859;var statearr_13871_13907 = state_13859__$1;(statearr_13871_13907[2] = null);
(statearr_13871_13907[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 21))
{var state_13859__$1 = state_13859;var statearr_13872_13908 = state_13859__$1;(statearr_13872_13908[2] = null);
(statearr_13872_13908[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 13))
{var inst_13814 = (state_13859[9]);var inst_13813 = (state_13859[10]);var inst_13811 = (state_13859[11]);var inst_13812 = (state_13859[12]);var inst_13821 = (state_13859[2]);var inst_13822 = (inst_13814 + 1);var tmp13868 = inst_13813;var tmp13869 = inst_13811;var tmp13870 = inst_13812;var inst_13811__$1 = tmp13869;var inst_13812__$1 = tmp13870;var inst_13813__$1 = tmp13868;var inst_13814__$1 = inst_13822;var state_13859__$1 = (function (){var statearr_13873 = state_13859;(statearr_13873[14] = inst_13821);
(statearr_13873[9] = inst_13814__$1);
(statearr_13873[10] = inst_13813__$1);
(statearr_13873[11] = inst_13811__$1);
(statearr_13873[12] = inst_13812__$1);
return statearr_13873;
})();var statearr_13874_13909 = state_13859__$1;(statearr_13874_13909[2] = null);
(statearr_13874_13909[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 22))
{var state_13859__$1 = state_13859;var statearr_13875_13910 = state_13859__$1;(statearr_13875_13910[2] = null);
(statearr_13875_13910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 6))
{var inst_13800 = (state_13859[13]);var inst_13809 = f.call(null,inst_13800);var inst_13810 = cljs.core.seq.call(null,inst_13809);var inst_13811 = inst_13810;var inst_13812 = null;var inst_13813 = 0;var inst_13814 = 0;var state_13859__$1 = (function (){var statearr_13876 = state_13859;(statearr_13876[9] = inst_13814);
(statearr_13876[10] = inst_13813);
(statearr_13876[11] = inst_13811);
(statearr_13876[12] = inst_13812);
return statearr_13876;
})();var statearr_13877_13911 = state_13859__$1;(statearr_13877_13911[2] = null);
(statearr_13877_13911[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 17))
{var inst_13825 = (state_13859[7]);var inst_13829 = cljs.core.chunk_first.call(null,inst_13825);var inst_13830 = cljs.core.chunk_rest.call(null,inst_13825);var inst_13831 = cljs.core.count.call(null,inst_13829);var inst_13811 = inst_13830;var inst_13812 = inst_13829;var inst_13813 = inst_13831;var inst_13814 = 0;var state_13859__$1 = (function (){var statearr_13878 = state_13859;(statearr_13878[9] = inst_13814);
(statearr_13878[10] = inst_13813);
(statearr_13878[11] = inst_13811);
(statearr_13878[12] = inst_13812);
return statearr_13878;
})();var statearr_13879_13912 = state_13859__$1;(statearr_13879_13912[2] = null);
(statearr_13879_13912[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 3))
{var inst_13857 = (state_13859[2]);var state_13859__$1 = state_13859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13859__$1,inst_13857);
} else
{if((state_val_13860 === 12))
{var inst_13845 = (state_13859[2]);var state_13859__$1 = state_13859;var statearr_13880_13913 = state_13859__$1;(statearr_13880_13913[2] = inst_13845);
(statearr_13880_13913[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 2))
{var state_13859__$1 = state_13859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13859__$1,4,in$);
} else
{if((state_val_13860 === 23))
{var inst_13853 = (state_13859[2]);var state_13859__$1 = state_13859;var statearr_13881_13914 = state_13859__$1;(statearr_13881_13914[2] = inst_13853);
(statearr_13881_13914[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 19))
{var inst_13840 = (state_13859[2]);var state_13859__$1 = state_13859;var statearr_13882_13915 = state_13859__$1;(statearr_13882_13915[2] = inst_13840);
(statearr_13882_13915[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 11))
{var inst_13825 = (state_13859[7]);var inst_13811 = (state_13859[11]);var inst_13825__$1 = cljs.core.seq.call(null,inst_13811);var state_13859__$1 = (function (){var statearr_13883 = state_13859;(statearr_13883[7] = inst_13825__$1);
return statearr_13883;
})();if(inst_13825__$1)
{var statearr_13884_13916 = state_13859__$1;(statearr_13884_13916[1] = 14);
} else
{var statearr_13885_13917 = state_13859__$1;(statearr_13885_13917[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 9))
{var inst_13847 = (state_13859[2]);var inst_13848 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13859__$1 = (function (){var statearr_13886 = state_13859;(statearr_13886[15] = inst_13847);
return statearr_13886;
})();if(cljs.core.truth_(inst_13848))
{var statearr_13887_13918 = state_13859__$1;(statearr_13887_13918[1] = 21);
} else
{var statearr_13888_13919 = state_13859__$1;(statearr_13888_13919[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 5))
{var inst_13803 = cljs.core.async.close_BANG_.call(null,out);var state_13859__$1 = state_13859;var statearr_13889_13920 = state_13859__$1;(statearr_13889_13920[2] = inst_13803);
(statearr_13889_13920[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 14))
{var inst_13825 = (state_13859[7]);var inst_13827 = cljs.core.chunked_seq_QMARK_.call(null,inst_13825);var state_13859__$1 = state_13859;if(inst_13827)
{var statearr_13890_13921 = state_13859__$1;(statearr_13890_13921[1] = 17);
} else
{var statearr_13891_13922 = state_13859__$1;(statearr_13891_13922[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 16))
{var inst_13843 = (state_13859[2]);var state_13859__$1 = state_13859;var statearr_13892_13923 = state_13859__$1;(statearr_13892_13923[2] = inst_13843);
(statearr_13892_13923[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13860 === 10))
{var inst_13814 = (state_13859[9]);var inst_13812 = (state_13859[12]);var inst_13819 = cljs.core._nth.call(null,inst_13812,inst_13814);var state_13859__$1 = state_13859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13859__$1,13,out,inst_13819);
} else
{if((state_val_13860 === 18))
{var inst_13825 = (state_13859[7]);var inst_13834 = cljs.core.first.call(null,inst_13825);var state_13859__$1 = state_13859;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13859__$1,20,out,inst_13834);
} else
{if((state_val_13860 === 8))
{var inst_13814 = (state_13859[9]);var inst_13813 = (state_13859[10]);var inst_13816 = (inst_13814 < inst_13813);var inst_13817 = inst_13816;var state_13859__$1 = state_13859;if(cljs.core.truth_(inst_13817))
{var statearr_13893_13924 = state_13859__$1;(statearr_13893_13924[1] = 10);
} else
{var statearr_13894_13925 = state_13859__$1;(statearr_13894_13925[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto__))
;return ((function (switch__10465__auto__,c__10530__auto__){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_13898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13898[0] = state_machine__10466__auto__);
(statearr_13898[1] = 1);
return statearr_13898;
});
var state_machine__10466__auto____1 = (function (state_13859){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_13859);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e13899){if((e13899 instanceof Object))
{var ex__10469__auto__ = e13899;var statearr_13900_13926 = state_13859;(statearr_13900_13926[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13859);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13927 = state_13859;
state_13859 = G__13927;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_13859){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_13859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto__))
})();var state__10532__auto__ = (function (){var statearr_13901 = f__10531__auto__.call(null);(statearr_13901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto__);
return statearr_13901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto__))
);
return c__10530__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10530__auto___14022 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___14022){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___14022){
return (function (state_13998){var state_val_13999 = (state_13998[1]);if((state_val_13999 === 7))
{var inst_13994 = (state_13998[2]);var state_13998__$1 = state_13998;var statearr_14000_14023 = state_13998__$1;(statearr_14000_14023[2] = inst_13994);
(statearr_14000_14023[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 1))
{var state_13998__$1 = state_13998;var statearr_14001_14024 = state_13998__$1;(statearr_14001_14024[2] = null);
(statearr_14001_14024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 4))
{var inst_13977 = (state_13998[7]);var inst_13977__$1 = (state_13998[2]);var inst_13978 = (inst_13977__$1 == null);var state_13998__$1 = (function (){var statearr_14002 = state_13998;(statearr_14002[7] = inst_13977__$1);
return statearr_14002;
})();if(cljs.core.truth_(inst_13978))
{var statearr_14003_14025 = state_13998__$1;(statearr_14003_14025[1] = 5);
} else
{var statearr_14004_14026 = state_13998__$1;(statearr_14004_14026[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 13))
{var state_13998__$1 = state_13998;var statearr_14005_14027 = state_13998__$1;(statearr_14005_14027[2] = null);
(statearr_14005_14027[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 6))
{var inst_13977 = (state_13998[7]);var state_13998__$1 = state_13998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13998__$1,11,to,inst_13977);
} else
{if((state_val_13999 === 3))
{var inst_13996 = (state_13998[2]);var state_13998__$1 = state_13998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13998__$1,inst_13996);
} else
{if((state_val_13999 === 12))
{var state_13998__$1 = state_13998;var statearr_14006_14028 = state_13998__$1;(statearr_14006_14028[2] = null);
(statearr_14006_14028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 2))
{var state_13998__$1 = state_13998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13998__$1,4,from);
} else
{if((state_val_13999 === 11))
{var inst_13987 = (state_13998[2]);var state_13998__$1 = state_13998;if(cljs.core.truth_(inst_13987))
{var statearr_14007_14029 = state_13998__$1;(statearr_14007_14029[1] = 12);
} else
{var statearr_14008_14030 = state_13998__$1;(statearr_14008_14030[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 9))
{var state_13998__$1 = state_13998;var statearr_14009_14031 = state_13998__$1;(statearr_14009_14031[2] = null);
(statearr_14009_14031[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 5))
{var state_13998__$1 = state_13998;if(cljs.core.truth_(close_QMARK_))
{var statearr_14010_14032 = state_13998__$1;(statearr_14010_14032[1] = 8);
} else
{var statearr_14011_14033 = state_13998__$1;(statearr_14011_14033[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 14))
{var inst_13992 = (state_13998[2]);var state_13998__$1 = state_13998;var statearr_14012_14034 = state_13998__$1;(statearr_14012_14034[2] = inst_13992);
(statearr_14012_14034[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 10))
{var inst_13984 = (state_13998[2]);var state_13998__$1 = state_13998;var statearr_14013_14035 = state_13998__$1;(statearr_14013_14035[2] = inst_13984);
(statearr_14013_14035[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13999 === 8))
{var inst_13981 = cljs.core.async.close_BANG_.call(null,to);var state_13998__$1 = state_13998;var statearr_14014_14036 = state_13998__$1;(statearr_14014_14036[2] = inst_13981);
(statearr_14014_14036[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___14022))
;return ((function (switch__10465__auto__,c__10530__auto___14022){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_14018 = [null,null,null,null,null,null,null,null];(statearr_14018[0] = state_machine__10466__auto__);
(statearr_14018[1] = 1);
return statearr_14018;
});
var state_machine__10466__auto____1 = (function (state_13998){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_13998);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e14019){if((e14019 instanceof Object))
{var ex__10469__auto__ = e14019;var statearr_14020_14037 = state_13998;(statearr_14020_14037[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14038 = state_13998;
state_13998 = G__14038;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_13998){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_13998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___14022))
})();var state__10532__auto__ = (function (){var statearr_14021 = f__10531__auto__.call(null);(statearr_14021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___14022);
return statearr_14021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___14022))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10530__auto___14139 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___14139,tc,fc){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___14139,tc,fc){
return (function (state_14114){var state_val_14115 = (state_14114[1]);if((state_val_14115 === 7))
{var inst_14110 = (state_14114[2]);var state_14114__$1 = state_14114;var statearr_14116_14140 = state_14114__$1;(statearr_14116_14140[2] = inst_14110);
(statearr_14116_14140[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 1))
{var state_14114__$1 = state_14114;var statearr_14117_14141 = state_14114__$1;(statearr_14117_14141[2] = null);
(statearr_14117_14141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 4))
{var inst_14091 = (state_14114[7]);var inst_14091__$1 = (state_14114[2]);var inst_14092 = (inst_14091__$1 == null);var state_14114__$1 = (function (){var statearr_14118 = state_14114;(statearr_14118[7] = inst_14091__$1);
return statearr_14118;
})();if(cljs.core.truth_(inst_14092))
{var statearr_14119_14142 = state_14114__$1;(statearr_14119_14142[1] = 5);
} else
{var statearr_14120_14143 = state_14114__$1;(statearr_14120_14143[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 13))
{var state_14114__$1 = state_14114;var statearr_14121_14144 = state_14114__$1;(statearr_14121_14144[2] = null);
(statearr_14121_14144[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 6))
{var inst_14091 = (state_14114[7]);var inst_14097 = p.call(null,inst_14091);var state_14114__$1 = state_14114;if(cljs.core.truth_(inst_14097))
{var statearr_14122_14145 = state_14114__$1;(statearr_14122_14145[1] = 9);
} else
{var statearr_14123_14146 = state_14114__$1;(statearr_14123_14146[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 3))
{var inst_14112 = (state_14114[2]);var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14114__$1,inst_14112);
} else
{if((state_val_14115 === 12))
{var state_14114__$1 = state_14114;var statearr_14124_14147 = state_14114__$1;(statearr_14124_14147[2] = null);
(statearr_14124_14147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 2))
{var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14114__$1,4,ch);
} else
{if((state_val_14115 === 11))
{var inst_14091 = (state_14114[7]);var inst_14101 = (state_14114[2]);var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14114__$1,8,inst_14101,inst_14091);
} else
{if((state_val_14115 === 9))
{var state_14114__$1 = state_14114;var statearr_14125_14148 = state_14114__$1;(statearr_14125_14148[2] = tc);
(statearr_14125_14148[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 5))
{var inst_14094 = cljs.core.async.close_BANG_.call(null,tc);var inst_14095 = cljs.core.async.close_BANG_.call(null,fc);var state_14114__$1 = (function (){var statearr_14126 = state_14114;(statearr_14126[8] = inst_14094);
return statearr_14126;
})();var statearr_14127_14149 = state_14114__$1;(statearr_14127_14149[2] = inst_14095);
(statearr_14127_14149[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 14))
{var inst_14108 = (state_14114[2]);var state_14114__$1 = state_14114;var statearr_14128_14150 = state_14114__$1;(statearr_14128_14150[2] = inst_14108);
(statearr_14128_14150[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 10))
{var state_14114__$1 = state_14114;var statearr_14129_14151 = state_14114__$1;(statearr_14129_14151[2] = fc);
(statearr_14129_14151[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 8))
{var inst_14103 = (state_14114[2]);var state_14114__$1 = state_14114;if(cljs.core.truth_(inst_14103))
{var statearr_14130_14152 = state_14114__$1;(statearr_14130_14152[1] = 12);
} else
{var statearr_14131_14153 = state_14114__$1;(statearr_14131_14153[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___14139,tc,fc))
;return ((function (switch__10465__auto__,c__10530__auto___14139,tc,fc){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_14135 = [null,null,null,null,null,null,null,null,null];(statearr_14135[0] = state_machine__10466__auto__);
(statearr_14135[1] = 1);
return statearr_14135;
});
var state_machine__10466__auto____1 = (function (state_14114){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_14114);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e14136){if((e14136 instanceof Object))
{var ex__10469__auto__ = e14136;var statearr_14137_14154 = state_14114;(statearr_14137_14154[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14114);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14155 = state_14114;
state_14114 = G__14155;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_14114){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_14114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___14139,tc,fc))
})();var state__10532__auto__ = (function (){var statearr_14138 = f__10531__auto__.call(null);(statearr_14138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___14139);
return statearr_14138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___14139,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10530__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto__){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto__){
return (function (state_14202){var state_val_14203 = (state_14202[1]);if((state_val_14203 === 7))
{var inst_14198 = (state_14202[2]);var state_14202__$1 = state_14202;var statearr_14204_14220 = state_14202__$1;(statearr_14204_14220[2] = inst_14198);
(statearr_14204_14220[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14203 === 6))
{var inst_14188 = (state_14202[7]);var inst_14191 = (state_14202[8]);var inst_14195 = f.call(null,inst_14188,inst_14191);var inst_14188__$1 = inst_14195;var state_14202__$1 = (function (){var statearr_14205 = state_14202;(statearr_14205[7] = inst_14188__$1);
return statearr_14205;
})();var statearr_14206_14221 = state_14202__$1;(statearr_14206_14221[2] = null);
(statearr_14206_14221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14203 === 5))
{var inst_14188 = (state_14202[7]);var state_14202__$1 = state_14202;var statearr_14207_14222 = state_14202__$1;(statearr_14207_14222[2] = inst_14188);
(statearr_14207_14222[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14203 === 4))
{var inst_14191 = (state_14202[8]);var inst_14191__$1 = (state_14202[2]);var inst_14192 = (inst_14191__$1 == null);var state_14202__$1 = (function (){var statearr_14208 = state_14202;(statearr_14208[8] = inst_14191__$1);
return statearr_14208;
})();if(cljs.core.truth_(inst_14192))
{var statearr_14209_14223 = state_14202__$1;(statearr_14209_14223[1] = 5);
} else
{var statearr_14210_14224 = state_14202__$1;(statearr_14210_14224[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14203 === 3))
{var inst_14200 = (state_14202[2]);var state_14202__$1 = state_14202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14202__$1,inst_14200);
} else
{if((state_val_14203 === 2))
{var state_14202__$1 = state_14202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14202__$1,4,ch);
} else
{if((state_val_14203 === 1))
{var inst_14188 = init;var state_14202__$1 = (function (){var statearr_14211 = state_14202;(statearr_14211[7] = inst_14188);
return statearr_14211;
})();var statearr_14212_14225 = state_14202__$1;(statearr_14212_14225[2] = null);
(statearr_14212_14225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10530__auto__))
;return ((function (switch__10465__auto__,c__10530__auto__){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_14216 = [null,null,null,null,null,null,null,null,null];(statearr_14216[0] = state_machine__10466__auto__);
(statearr_14216[1] = 1);
return statearr_14216;
});
var state_machine__10466__auto____1 = (function (state_14202){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_14202);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e14217){if((e14217 instanceof Object))
{var ex__10469__auto__ = e14217;var statearr_14218_14226 = state_14202;(statearr_14218_14226[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14202);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14227 = state_14202;
state_14202 = G__14227;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_14202){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_14202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto__))
})();var state__10532__auto__ = (function (){var statearr_14219 = f__10531__auto__.call(null);(statearr_14219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto__);
return statearr_14219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto__))
);
return c__10530__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10530__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto__){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto__){
return (function (state_14301){var state_val_14302 = (state_14301[1]);if((state_val_14302 === 7))
{var inst_14283 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14303_14326 = state_14301__$1;(statearr_14303_14326[2] = inst_14283);
(statearr_14303_14326[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 1))
{var inst_14277 = cljs.core.seq.call(null,coll);var inst_14278 = inst_14277;var state_14301__$1 = (function (){var statearr_14304 = state_14301;(statearr_14304[7] = inst_14278);
return statearr_14304;
})();var statearr_14305_14327 = state_14301__$1;(statearr_14305_14327[2] = null);
(statearr_14305_14327[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 4))
{var inst_14278 = (state_14301[7]);var inst_14281 = cljs.core.first.call(null,inst_14278);var state_14301__$1 = state_14301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14301__$1,7,ch,inst_14281);
} else
{if((state_val_14302 === 13))
{var inst_14295 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14306_14328 = state_14301__$1;(statearr_14306_14328[2] = inst_14295);
(statearr_14306_14328[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 6))
{var inst_14286 = (state_14301[2]);var state_14301__$1 = state_14301;if(cljs.core.truth_(inst_14286))
{var statearr_14307_14329 = state_14301__$1;(statearr_14307_14329[1] = 8);
} else
{var statearr_14308_14330 = state_14301__$1;(statearr_14308_14330[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 3))
{var inst_14299 = (state_14301[2]);var state_14301__$1 = state_14301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14301__$1,inst_14299);
} else
{if((state_val_14302 === 12))
{var state_14301__$1 = state_14301;var statearr_14309_14331 = state_14301__$1;(statearr_14309_14331[2] = null);
(statearr_14309_14331[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 2))
{var inst_14278 = (state_14301[7]);var state_14301__$1 = state_14301;if(cljs.core.truth_(inst_14278))
{var statearr_14310_14332 = state_14301__$1;(statearr_14310_14332[1] = 4);
} else
{var statearr_14311_14333 = state_14301__$1;(statearr_14311_14333[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 11))
{var inst_14292 = cljs.core.async.close_BANG_.call(null,ch);var state_14301__$1 = state_14301;var statearr_14312_14334 = state_14301__$1;(statearr_14312_14334[2] = inst_14292);
(statearr_14312_14334[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 9))
{var state_14301__$1 = state_14301;if(cljs.core.truth_(close_QMARK_))
{var statearr_14313_14335 = state_14301__$1;(statearr_14313_14335[1] = 11);
} else
{var statearr_14314_14336 = state_14301__$1;(statearr_14314_14336[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 5))
{var inst_14278 = (state_14301[7]);var state_14301__$1 = state_14301;var statearr_14315_14337 = state_14301__$1;(statearr_14315_14337[2] = inst_14278);
(statearr_14315_14337[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 10))
{var inst_14297 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14316_14338 = state_14301__$1;(statearr_14316_14338[2] = inst_14297);
(statearr_14316_14338[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 8))
{var inst_14278 = (state_14301[7]);var inst_14288 = cljs.core.next.call(null,inst_14278);var inst_14278__$1 = inst_14288;var state_14301__$1 = (function (){var statearr_14317 = state_14301;(statearr_14317[7] = inst_14278__$1);
return statearr_14317;
})();var statearr_14318_14339 = state_14301__$1;(statearr_14318_14339[2] = null);
(statearr_14318_14339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto__))
;return ((function (switch__10465__auto__,c__10530__auto__){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_14322 = [null,null,null,null,null,null,null,null];(statearr_14322[0] = state_machine__10466__auto__);
(statearr_14322[1] = 1);
return statearr_14322;
});
var state_machine__10466__auto____1 = (function (state_14301){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_14301);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e14323){if((e14323 instanceof Object))
{var ex__10469__auto__ = e14323;var statearr_14324_14340 = state_14301;(statearr_14324_14340[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14341 = state_14301;
state_14301 = G__14341;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_14301){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_14301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto__))
})();var state__10532__auto__ = (function (){var statearr_14325 = f__10531__auto__.call(null);(statearr_14325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto__);
return statearr_14325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto__))
);
return c__10530__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14343 = {};return obj14343;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7917__auto__ = _;if(and__7917__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7917__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8556__auto__ = (((_ == null))?null:_);return (function (){var or__7929__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14345 = {};return obj14345;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7917__auto__ = m;if(and__7917__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7917__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8556__auto__ = (((m == null))?null:m);return (function (){var or__7929__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7917__auto__ = m;if(and__7917__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7917__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8556__auto__ = (((m == null))?null:m);return (function (){var or__7929__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7917__auto__ = m;if(and__7917__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7917__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8556__auto__ = (((m == null))?null:m);return (function (){var or__7929__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14567 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14567 = (function (cs,ch,mult,meta14568){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14568 = meta14568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14567.cljs$lang$type = true;
cljs.core.async.t14567.cljs$lang$ctorStr = "cljs.core.async/t14567";
cljs.core.async.t14567.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t14567");
});})(cs))
;
cljs.core.async.t14567.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14567.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14567.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14567.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14567.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14569){var self__ = this;
var _14569__$1 = this;return self__.meta14568;
});})(cs))
;
cljs.core.async.t14567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14569,meta14568__$1){var self__ = this;
var _14569__$1 = this;return (new cljs.core.async.t14567(self__.cs,self__.ch,self__.mult,meta14568__$1));
});})(cs))
;
cljs.core.async.__GT_t14567 = ((function (cs){
return (function __GT_t14567(cs__$1,ch__$1,mult__$1,meta14568){return (new cljs.core.async.t14567(cs__$1,ch__$1,mult__$1,meta14568));
});})(cs))
;
}
return (new cljs.core.async.t14567(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10530__auto___14788 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___14788,cs,m,dchan,dctr,done){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___14788,cs,m,dchan,dctr,done){
return (function (state_14700){var state_val_14701 = (state_14700[1]);if((state_val_14701 === 7))
{var inst_14696 = (state_14700[2]);var state_14700__$1 = state_14700;var statearr_14702_14789 = state_14700__$1;(statearr_14702_14789[2] = inst_14696);
(statearr_14702_14789[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 20))
{var inst_14601 = (state_14700[7]);var inst_14611 = cljs.core.first.call(null,inst_14601);var inst_14612 = cljs.core.nth.call(null,inst_14611,0,null);var inst_14613 = cljs.core.nth.call(null,inst_14611,1,null);var state_14700__$1 = (function (){var statearr_14703 = state_14700;(statearr_14703[8] = inst_14612);
return statearr_14703;
})();if(cljs.core.truth_(inst_14613))
{var statearr_14704_14790 = state_14700__$1;(statearr_14704_14790[1] = 22);
} else
{var statearr_14705_14791 = state_14700__$1;(statearr_14705_14791[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 27))
{var inst_14643 = (state_14700[9]);var inst_14641 = (state_14700[10]);var inst_14572 = (state_14700[11]);var inst_14648 = (state_14700[12]);var inst_14648__$1 = cljs.core._nth.call(null,inst_14641,inst_14643);var inst_14649 = cljs.core.async.put_BANG_.call(null,inst_14648__$1,inst_14572,done);var state_14700__$1 = (function (){var statearr_14706 = state_14700;(statearr_14706[12] = inst_14648__$1);
return statearr_14706;
})();if(cljs.core.truth_(inst_14649))
{var statearr_14707_14792 = state_14700__$1;(statearr_14707_14792[1] = 30);
} else
{var statearr_14708_14793 = state_14700__$1;(statearr_14708_14793[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 1))
{var state_14700__$1 = state_14700;var statearr_14709_14794 = state_14700__$1;(statearr_14709_14794[2] = null);
(statearr_14709_14794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 24))
{var inst_14601 = (state_14700[7]);var inst_14618 = (state_14700[2]);var inst_14619 = cljs.core.next.call(null,inst_14601);var inst_14581 = inst_14619;var inst_14582 = null;var inst_14583 = 0;var inst_14584 = 0;var state_14700__$1 = (function (){var statearr_14710 = state_14700;(statearr_14710[13] = inst_14583);
(statearr_14710[14] = inst_14618);
(statearr_14710[15] = inst_14584);
(statearr_14710[16] = inst_14581);
(statearr_14710[17] = inst_14582);
return statearr_14710;
})();var statearr_14711_14795 = state_14700__$1;(statearr_14711_14795[2] = null);
(statearr_14711_14795[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 39))
{var state_14700__$1 = state_14700;var statearr_14715_14796 = state_14700__$1;(statearr_14715_14796[2] = null);
(statearr_14715_14796[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 4))
{var inst_14572 = (state_14700[11]);var inst_14572__$1 = (state_14700[2]);var inst_14573 = (inst_14572__$1 == null);var state_14700__$1 = (function (){var statearr_14716 = state_14700;(statearr_14716[11] = inst_14572__$1);
return statearr_14716;
})();if(cljs.core.truth_(inst_14573))
{var statearr_14717_14797 = state_14700__$1;(statearr_14717_14797[1] = 5);
} else
{var statearr_14718_14798 = state_14700__$1;(statearr_14718_14798[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 15))
{var inst_14583 = (state_14700[13]);var inst_14584 = (state_14700[15]);var inst_14581 = (state_14700[16]);var inst_14582 = (state_14700[17]);var inst_14597 = (state_14700[2]);var inst_14598 = (inst_14584 + 1);var tmp14712 = inst_14583;var tmp14713 = inst_14581;var tmp14714 = inst_14582;var inst_14581__$1 = tmp14713;var inst_14582__$1 = tmp14714;var inst_14583__$1 = tmp14712;var inst_14584__$1 = inst_14598;var state_14700__$1 = (function (){var statearr_14719 = state_14700;(statearr_14719[13] = inst_14583__$1);
(statearr_14719[18] = inst_14597);
(statearr_14719[15] = inst_14584__$1);
(statearr_14719[16] = inst_14581__$1);
(statearr_14719[17] = inst_14582__$1);
return statearr_14719;
})();var statearr_14720_14799 = state_14700__$1;(statearr_14720_14799[2] = null);
(statearr_14720_14799[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 21))
{var inst_14622 = (state_14700[2]);var state_14700__$1 = state_14700;var statearr_14724_14800 = state_14700__$1;(statearr_14724_14800[2] = inst_14622);
(statearr_14724_14800[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 31))
{var inst_14648 = (state_14700[12]);var inst_14652 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14653 = cljs.core.async.untap_STAR_.call(null,m,inst_14648);var state_14700__$1 = (function (){var statearr_14725 = state_14700;(statearr_14725[19] = inst_14652);
return statearr_14725;
})();var statearr_14726_14801 = state_14700__$1;(statearr_14726_14801[2] = inst_14653);
(statearr_14726_14801[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 32))
{var inst_14642 = (state_14700[20]);var inst_14643 = (state_14700[9]);var inst_14641 = (state_14700[10]);var inst_14640 = (state_14700[21]);var inst_14655 = (state_14700[2]);var inst_14656 = (inst_14643 + 1);var tmp14721 = inst_14642;var tmp14722 = inst_14641;var tmp14723 = inst_14640;var inst_14640__$1 = tmp14723;var inst_14641__$1 = tmp14722;var inst_14642__$1 = tmp14721;var inst_14643__$1 = inst_14656;var state_14700__$1 = (function (){var statearr_14727 = state_14700;(statearr_14727[20] = inst_14642__$1);
(statearr_14727[9] = inst_14643__$1);
(statearr_14727[10] = inst_14641__$1);
(statearr_14727[21] = inst_14640__$1);
(statearr_14727[22] = inst_14655);
return statearr_14727;
})();var statearr_14728_14802 = state_14700__$1;(statearr_14728_14802[2] = null);
(statearr_14728_14802[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 40))
{var inst_14668 = (state_14700[23]);var inst_14672 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14673 = cljs.core.async.untap_STAR_.call(null,m,inst_14668);var state_14700__$1 = (function (){var statearr_14729 = state_14700;(statearr_14729[24] = inst_14672);
return statearr_14729;
})();var statearr_14730_14803 = state_14700__$1;(statearr_14730_14803[2] = inst_14673);
(statearr_14730_14803[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 33))
{var inst_14659 = (state_14700[25]);var inst_14661 = cljs.core.chunked_seq_QMARK_.call(null,inst_14659);var state_14700__$1 = state_14700;if(inst_14661)
{var statearr_14731_14804 = state_14700__$1;(statearr_14731_14804[1] = 36);
} else
{var statearr_14732_14805 = state_14700__$1;(statearr_14732_14805[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 13))
{var inst_14591 = (state_14700[26]);var inst_14594 = cljs.core.async.close_BANG_.call(null,inst_14591);var state_14700__$1 = state_14700;var statearr_14733_14806 = state_14700__$1;(statearr_14733_14806[2] = inst_14594);
(statearr_14733_14806[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 22))
{var inst_14612 = (state_14700[8]);var inst_14615 = cljs.core.async.close_BANG_.call(null,inst_14612);var state_14700__$1 = state_14700;var statearr_14734_14807 = state_14700__$1;(statearr_14734_14807[2] = inst_14615);
(statearr_14734_14807[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 36))
{var inst_14659 = (state_14700[25]);var inst_14663 = cljs.core.chunk_first.call(null,inst_14659);var inst_14664 = cljs.core.chunk_rest.call(null,inst_14659);var inst_14665 = cljs.core.count.call(null,inst_14663);var inst_14640 = inst_14664;var inst_14641 = inst_14663;var inst_14642 = inst_14665;var inst_14643 = 0;var state_14700__$1 = (function (){var statearr_14735 = state_14700;(statearr_14735[20] = inst_14642);
(statearr_14735[9] = inst_14643);
(statearr_14735[10] = inst_14641);
(statearr_14735[21] = inst_14640);
return statearr_14735;
})();var statearr_14736_14808 = state_14700__$1;(statearr_14736_14808[2] = null);
(statearr_14736_14808[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 41))
{var inst_14659 = (state_14700[25]);var inst_14675 = (state_14700[2]);var inst_14676 = cljs.core.next.call(null,inst_14659);var inst_14640 = inst_14676;var inst_14641 = null;var inst_14642 = 0;var inst_14643 = 0;var state_14700__$1 = (function (){var statearr_14737 = state_14700;(statearr_14737[20] = inst_14642);
(statearr_14737[9] = inst_14643);
(statearr_14737[27] = inst_14675);
(statearr_14737[10] = inst_14641);
(statearr_14737[21] = inst_14640);
return statearr_14737;
})();var statearr_14738_14809 = state_14700__$1;(statearr_14738_14809[2] = null);
(statearr_14738_14809[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 43))
{var state_14700__$1 = state_14700;var statearr_14739_14810 = state_14700__$1;(statearr_14739_14810[2] = null);
(statearr_14739_14810[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 29))
{var inst_14684 = (state_14700[2]);var state_14700__$1 = state_14700;var statearr_14740_14811 = state_14700__$1;(statearr_14740_14811[2] = inst_14684);
(statearr_14740_14811[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 44))
{var inst_14693 = (state_14700[2]);var state_14700__$1 = (function (){var statearr_14741 = state_14700;(statearr_14741[28] = inst_14693);
return statearr_14741;
})();var statearr_14742_14812 = state_14700__$1;(statearr_14742_14812[2] = null);
(statearr_14742_14812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 6))
{var inst_14632 = (state_14700[29]);var inst_14631 = cljs.core.deref.call(null,cs);var inst_14632__$1 = cljs.core.keys.call(null,inst_14631);var inst_14633 = cljs.core.count.call(null,inst_14632__$1);var inst_14634 = cljs.core.reset_BANG_.call(null,dctr,inst_14633);var inst_14639 = cljs.core.seq.call(null,inst_14632__$1);var inst_14640 = inst_14639;var inst_14641 = null;var inst_14642 = 0;var inst_14643 = 0;var state_14700__$1 = (function (){var statearr_14743 = state_14700;(statearr_14743[20] = inst_14642);
(statearr_14743[9] = inst_14643);
(statearr_14743[29] = inst_14632__$1);
(statearr_14743[30] = inst_14634);
(statearr_14743[10] = inst_14641);
(statearr_14743[21] = inst_14640);
return statearr_14743;
})();var statearr_14744_14813 = state_14700__$1;(statearr_14744_14813[2] = null);
(statearr_14744_14813[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 28))
{var inst_14659 = (state_14700[25]);var inst_14640 = (state_14700[21]);var inst_14659__$1 = cljs.core.seq.call(null,inst_14640);var state_14700__$1 = (function (){var statearr_14745 = state_14700;(statearr_14745[25] = inst_14659__$1);
return statearr_14745;
})();if(inst_14659__$1)
{var statearr_14746_14814 = state_14700__$1;(statearr_14746_14814[1] = 33);
} else
{var statearr_14747_14815 = state_14700__$1;(statearr_14747_14815[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 25))
{var inst_14642 = (state_14700[20]);var inst_14643 = (state_14700[9]);var inst_14645 = (inst_14643 < inst_14642);var inst_14646 = inst_14645;var state_14700__$1 = state_14700;if(cljs.core.truth_(inst_14646))
{var statearr_14748_14816 = state_14700__$1;(statearr_14748_14816[1] = 27);
} else
{var statearr_14749_14817 = state_14700__$1;(statearr_14749_14817[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 34))
{var state_14700__$1 = state_14700;var statearr_14750_14818 = state_14700__$1;(statearr_14750_14818[2] = null);
(statearr_14750_14818[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 17))
{var state_14700__$1 = state_14700;var statearr_14751_14819 = state_14700__$1;(statearr_14751_14819[2] = null);
(statearr_14751_14819[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 3))
{var inst_14698 = (state_14700[2]);var state_14700__$1 = state_14700;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14700__$1,inst_14698);
} else
{if((state_val_14701 === 12))
{var inst_14627 = (state_14700[2]);var state_14700__$1 = state_14700;var statearr_14752_14820 = state_14700__$1;(statearr_14752_14820[2] = inst_14627);
(statearr_14752_14820[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 2))
{var state_14700__$1 = state_14700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14700__$1,4,ch);
} else
{if((state_val_14701 === 23))
{var state_14700__$1 = state_14700;var statearr_14753_14821 = state_14700__$1;(statearr_14753_14821[2] = null);
(statearr_14753_14821[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 35))
{var inst_14682 = (state_14700[2]);var state_14700__$1 = state_14700;var statearr_14754_14822 = state_14700__$1;(statearr_14754_14822[2] = inst_14682);
(statearr_14754_14822[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 19))
{var inst_14601 = (state_14700[7]);var inst_14605 = cljs.core.chunk_first.call(null,inst_14601);var inst_14606 = cljs.core.chunk_rest.call(null,inst_14601);var inst_14607 = cljs.core.count.call(null,inst_14605);var inst_14581 = inst_14606;var inst_14582 = inst_14605;var inst_14583 = inst_14607;var inst_14584 = 0;var state_14700__$1 = (function (){var statearr_14755 = state_14700;(statearr_14755[13] = inst_14583);
(statearr_14755[15] = inst_14584);
(statearr_14755[16] = inst_14581);
(statearr_14755[17] = inst_14582);
return statearr_14755;
})();var statearr_14756_14823 = state_14700__$1;(statearr_14756_14823[2] = null);
(statearr_14756_14823[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 11))
{var inst_14601 = (state_14700[7]);var inst_14581 = (state_14700[16]);var inst_14601__$1 = cljs.core.seq.call(null,inst_14581);var state_14700__$1 = (function (){var statearr_14757 = state_14700;(statearr_14757[7] = inst_14601__$1);
return statearr_14757;
})();if(inst_14601__$1)
{var statearr_14758_14824 = state_14700__$1;(statearr_14758_14824[1] = 16);
} else
{var statearr_14759_14825 = state_14700__$1;(statearr_14759_14825[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 9))
{var inst_14629 = (state_14700[2]);var state_14700__$1 = state_14700;var statearr_14760_14826 = state_14700__$1;(statearr_14760_14826[2] = inst_14629);
(statearr_14760_14826[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 5))
{var inst_14579 = cljs.core.deref.call(null,cs);var inst_14580 = cljs.core.seq.call(null,inst_14579);var inst_14581 = inst_14580;var inst_14582 = null;var inst_14583 = 0;var inst_14584 = 0;var state_14700__$1 = (function (){var statearr_14761 = state_14700;(statearr_14761[13] = inst_14583);
(statearr_14761[15] = inst_14584);
(statearr_14761[16] = inst_14581);
(statearr_14761[17] = inst_14582);
return statearr_14761;
})();var statearr_14762_14827 = state_14700__$1;(statearr_14762_14827[2] = null);
(statearr_14762_14827[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 14))
{var state_14700__$1 = state_14700;var statearr_14763_14828 = state_14700__$1;(statearr_14763_14828[2] = null);
(statearr_14763_14828[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 45))
{var inst_14690 = (state_14700[2]);var state_14700__$1 = state_14700;var statearr_14764_14829 = state_14700__$1;(statearr_14764_14829[2] = inst_14690);
(statearr_14764_14829[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 26))
{var inst_14632 = (state_14700[29]);var inst_14686 = (state_14700[2]);var inst_14687 = cljs.core.seq.call(null,inst_14632);var state_14700__$1 = (function (){var statearr_14765 = state_14700;(statearr_14765[31] = inst_14686);
return statearr_14765;
})();if(inst_14687)
{var statearr_14766_14830 = state_14700__$1;(statearr_14766_14830[1] = 42);
} else
{var statearr_14767_14831 = state_14700__$1;(statearr_14767_14831[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 16))
{var inst_14601 = (state_14700[7]);var inst_14603 = cljs.core.chunked_seq_QMARK_.call(null,inst_14601);var state_14700__$1 = state_14700;if(inst_14603)
{var statearr_14768_14832 = state_14700__$1;(statearr_14768_14832[1] = 19);
} else
{var statearr_14769_14833 = state_14700__$1;(statearr_14769_14833[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 38))
{var inst_14679 = (state_14700[2]);var state_14700__$1 = state_14700;var statearr_14770_14834 = state_14700__$1;(statearr_14770_14834[2] = inst_14679);
(statearr_14770_14834[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 30))
{var state_14700__$1 = state_14700;var statearr_14771_14835 = state_14700__$1;(statearr_14771_14835[2] = null);
(statearr_14771_14835[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 10))
{var inst_14584 = (state_14700[15]);var inst_14582 = (state_14700[17]);var inst_14590 = cljs.core._nth.call(null,inst_14582,inst_14584);var inst_14591 = cljs.core.nth.call(null,inst_14590,0,null);var inst_14592 = cljs.core.nth.call(null,inst_14590,1,null);var state_14700__$1 = (function (){var statearr_14772 = state_14700;(statearr_14772[26] = inst_14591);
return statearr_14772;
})();if(cljs.core.truth_(inst_14592))
{var statearr_14773_14836 = state_14700__$1;(statearr_14773_14836[1] = 13);
} else
{var statearr_14774_14837 = state_14700__$1;(statearr_14774_14837[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 18))
{var inst_14625 = (state_14700[2]);var state_14700__$1 = state_14700;var statearr_14775_14838 = state_14700__$1;(statearr_14775_14838[2] = inst_14625);
(statearr_14775_14838[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 42))
{var state_14700__$1 = state_14700;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14700__$1,45,dchan);
} else
{if((state_val_14701 === 37))
{var inst_14668 = (state_14700[23]);var inst_14659 = (state_14700[25]);var inst_14572 = (state_14700[11]);var inst_14668__$1 = cljs.core.first.call(null,inst_14659);var inst_14669 = cljs.core.async.put_BANG_.call(null,inst_14668__$1,inst_14572,done);var state_14700__$1 = (function (){var statearr_14776 = state_14700;(statearr_14776[23] = inst_14668__$1);
return statearr_14776;
})();if(cljs.core.truth_(inst_14669))
{var statearr_14777_14839 = state_14700__$1;(statearr_14777_14839[1] = 39);
} else
{var statearr_14778_14840 = state_14700__$1;(statearr_14778_14840[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14701 === 8))
{var inst_14583 = (state_14700[13]);var inst_14584 = (state_14700[15]);var inst_14586 = (inst_14584 < inst_14583);var inst_14587 = inst_14586;var state_14700__$1 = state_14700;if(cljs.core.truth_(inst_14587))
{var statearr_14779_14841 = state_14700__$1;(statearr_14779_14841[1] = 10);
} else
{var statearr_14780_14842 = state_14700__$1;(statearr_14780_14842[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___14788,cs,m,dchan,dctr,done))
;return ((function (switch__10465__auto__,c__10530__auto___14788,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_14784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14784[0] = state_machine__10466__auto__);
(statearr_14784[1] = 1);
return statearr_14784;
});
var state_machine__10466__auto____1 = (function (state_14700){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_14700);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e14785){if((e14785 instanceof Object))
{var ex__10469__auto__ = e14785;var statearr_14786_14843 = state_14700;(statearr_14786_14843[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14844 = state_14700;
state_14700 = G__14844;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_14700){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_14700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___14788,cs,m,dchan,dctr,done))
})();var state__10532__auto__ = (function (){var statearr_14787 = f__10531__auto__.call(null);(statearr_14787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___14788);
return statearr_14787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___14788,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj14846 = {};return obj14846;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7917__auto__ = m;if(and__7917__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7917__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8556__auto__ = (((m == null))?null:m);return (function (){var or__7929__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7917__auto__ = m;if(and__7917__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7917__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8556__auto__ = (((m == null))?null:m);return (function (){var or__7929__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7917__auto__ = m;if(and__7917__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7917__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8556__auto__ = (((m == null))?null:m);return (function (){var or__7929__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7917__auto__ = m;if(and__7917__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7917__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8556__auto__ = (((m == null))?null:m);return (function (){var or__7929__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7917__auto__ = m;if(and__7917__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7917__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8556__auto__ = (((m == null))?null:m);return (function (){var or__7929__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14966 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14967){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14967 = meta14967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14966.cljs$lang$type = true;
cljs.core.async.t14966.cljs$lang$ctorStr = "cljs.core.async/t14966";
cljs.core.async.t14966.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t14966");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14966.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14966.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14966.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14966.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14966.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14966.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14966.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14966.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14968){var self__ = this;
var _14968__$1 = this;return self__.meta14967;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14968,meta14967__$1){var self__ = this;
var _14968__$1 = this;return (new cljs.core.async.t14966(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14967__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14966 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14966(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14967){return (new cljs.core.async.t14966(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14967));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14966(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__10530__auto___15085 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___15085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___15085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15038){var state_val_15039 = (state_15038[1]);if((state_val_15039 === 7))
{var inst_14982 = (state_15038[7]);var inst_14987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14982);var state_15038__$1 = state_15038;var statearr_15040_15086 = state_15038__$1;(statearr_15040_15086[2] = inst_14987);
(statearr_15040_15086[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 20))
{var inst_14997 = (state_15038[8]);var state_15038__$1 = state_15038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15038__$1,23,out,inst_14997);
} else
{if((state_val_15039 === 1))
{var inst_14972 = (state_15038[9]);var inst_14972__$1 = calc_state.call(null);var inst_14973 = cljs.core.seq_QMARK_.call(null,inst_14972__$1);var state_15038__$1 = (function (){var statearr_15041 = state_15038;(statearr_15041[9] = inst_14972__$1);
return statearr_15041;
})();if(inst_14973)
{var statearr_15042_15087 = state_15038__$1;(statearr_15042_15087[1] = 2);
} else
{var statearr_15043_15088 = state_15038__$1;(statearr_15043_15088[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 24))
{var inst_14990 = (state_15038[10]);var inst_14982 = inst_14990;var state_15038__$1 = (function (){var statearr_15044 = state_15038;(statearr_15044[7] = inst_14982);
return statearr_15044;
})();var statearr_15045_15089 = state_15038__$1;(statearr_15045_15089[2] = null);
(statearr_15045_15089[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 4))
{var inst_14972 = (state_15038[9]);var inst_14978 = (state_15038[2]);var inst_14979 = cljs.core.get.call(null,inst_14978,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14980 = cljs.core.get.call(null,inst_14978,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14981 = cljs.core.get.call(null,inst_14978,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14982 = inst_14972;var state_15038__$1 = (function (){var statearr_15046 = state_15038;(statearr_15046[7] = inst_14982);
(statearr_15046[11] = inst_14980);
(statearr_15046[12] = inst_14979);
(statearr_15046[13] = inst_14981);
return statearr_15046;
})();var statearr_15047_15090 = state_15038__$1;(statearr_15047_15090[2] = null);
(statearr_15047_15090[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 15))
{var state_15038__$1 = state_15038;var statearr_15048_15091 = state_15038__$1;(statearr_15048_15091[2] = null);
(statearr_15048_15091[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 21))
{var inst_14990 = (state_15038[10]);var inst_14982 = inst_14990;var state_15038__$1 = (function (){var statearr_15049 = state_15038;(statearr_15049[7] = inst_14982);
return statearr_15049;
})();var statearr_15050_15092 = state_15038__$1;(statearr_15050_15092[2] = null);
(statearr_15050_15092[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 13))
{var inst_15034 = (state_15038[2]);var state_15038__$1 = state_15038;var statearr_15051_15093 = state_15038__$1;(statearr_15051_15093[2] = inst_15034);
(statearr_15051_15093[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 22))
{var inst_15032 = (state_15038[2]);var state_15038__$1 = state_15038;var statearr_15052_15094 = state_15038__$1;(statearr_15052_15094[2] = inst_15032);
(statearr_15052_15094[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 6))
{var inst_15036 = (state_15038[2]);var state_15038__$1 = state_15038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15038__$1,inst_15036);
} else
{if((state_val_15039 === 25))
{var state_15038__$1 = state_15038;var statearr_15053_15095 = state_15038__$1;(statearr_15053_15095[2] = null);
(statearr_15053_15095[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 17))
{var inst_15012 = (state_15038[14]);var state_15038__$1 = state_15038;var statearr_15054_15096 = state_15038__$1;(statearr_15054_15096[2] = inst_15012);
(statearr_15054_15096[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 3))
{var inst_14972 = (state_15038[9]);var state_15038__$1 = state_15038;var statearr_15055_15097 = state_15038__$1;(statearr_15055_15097[2] = inst_14972);
(statearr_15055_15097[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 12))
{var inst_14998 = (state_15038[15]);var inst_15012 = (state_15038[14]);var inst_14993 = (state_15038[16]);var inst_15012__$1 = inst_14993.call(null,inst_14998);var state_15038__$1 = (function (){var statearr_15056 = state_15038;(statearr_15056[14] = inst_15012__$1);
return statearr_15056;
})();if(cljs.core.truth_(inst_15012__$1))
{var statearr_15057_15098 = state_15038__$1;(statearr_15057_15098[1] = 17);
} else
{var statearr_15058_15099 = state_15038__$1;(statearr_15058_15099[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 2))
{var inst_14972 = (state_15038[9]);var inst_14975 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14972);var state_15038__$1 = state_15038;var statearr_15059_15100 = state_15038__$1;(statearr_15059_15100[2] = inst_14975);
(statearr_15059_15100[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 23))
{var inst_15023 = (state_15038[2]);var state_15038__$1 = state_15038;if(cljs.core.truth_(inst_15023))
{var statearr_15060_15101 = state_15038__$1;(statearr_15060_15101[1] = 24);
} else
{var statearr_15061_15102 = state_15038__$1;(statearr_15061_15102[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 19))
{var inst_15020 = (state_15038[2]);var state_15038__$1 = state_15038;if(cljs.core.truth_(inst_15020))
{var statearr_15062_15103 = state_15038__$1;(statearr_15062_15103[1] = 20);
} else
{var statearr_15063_15104 = state_15038__$1;(statearr_15063_15104[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 11))
{var inst_14997 = (state_15038[8]);var inst_15003 = (inst_14997 == null);var state_15038__$1 = state_15038;if(cljs.core.truth_(inst_15003))
{var statearr_15064_15105 = state_15038__$1;(statearr_15064_15105[1] = 14);
} else
{var statearr_15065_15106 = state_15038__$1;(statearr_15065_15106[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 9))
{var inst_14990 = (state_15038[10]);var inst_14990__$1 = (state_15038[2]);var inst_14991 = cljs.core.get.call(null,inst_14990__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14992 = cljs.core.get.call(null,inst_14990__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14993 = cljs.core.get.call(null,inst_14990__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15038__$1 = (function (){var statearr_15066 = state_15038;(statearr_15066[10] = inst_14990__$1);
(statearr_15066[16] = inst_14993);
(statearr_15066[17] = inst_14992);
return statearr_15066;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15038__$1,10,inst_14991);
} else
{if((state_val_15039 === 5))
{var inst_14982 = (state_15038[7]);var inst_14985 = cljs.core.seq_QMARK_.call(null,inst_14982);var state_15038__$1 = state_15038;if(inst_14985)
{var statearr_15067_15107 = state_15038__$1;(statearr_15067_15107[1] = 7);
} else
{var statearr_15068_15108 = state_15038__$1;(statearr_15068_15108[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 14))
{var inst_14998 = (state_15038[15]);var inst_15005 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14998);var state_15038__$1 = state_15038;var statearr_15069_15109 = state_15038__$1;(statearr_15069_15109[2] = inst_15005);
(statearr_15069_15109[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 26))
{var inst_15028 = (state_15038[2]);var state_15038__$1 = state_15038;var statearr_15070_15110 = state_15038__$1;(statearr_15070_15110[2] = inst_15028);
(statearr_15070_15110[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 16))
{var inst_15008 = (state_15038[2]);var inst_15009 = calc_state.call(null);var inst_14982 = inst_15009;var state_15038__$1 = (function (){var statearr_15071 = state_15038;(statearr_15071[7] = inst_14982);
(statearr_15071[18] = inst_15008);
return statearr_15071;
})();var statearr_15072_15111 = state_15038__$1;(statearr_15072_15111[2] = null);
(statearr_15072_15111[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 10))
{var inst_14998 = (state_15038[15]);var inst_14997 = (state_15038[8]);var inst_14996 = (state_15038[2]);var inst_14997__$1 = cljs.core.nth.call(null,inst_14996,0,null);var inst_14998__$1 = cljs.core.nth.call(null,inst_14996,1,null);var inst_14999 = (inst_14997__$1 == null);var inst_15000 = cljs.core._EQ_.call(null,inst_14998__$1,change);var inst_15001 = (inst_14999) || (inst_15000);var state_15038__$1 = (function (){var statearr_15073 = state_15038;(statearr_15073[15] = inst_14998__$1);
(statearr_15073[8] = inst_14997__$1);
return statearr_15073;
})();if(cljs.core.truth_(inst_15001))
{var statearr_15074_15112 = state_15038__$1;(statearr_15074_15112[1] = 11);
} else
{var statearr_15075_15113 = state_15038__$1;(statearr_15075_15113[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 18))
{var inst_14998 = (state_15038[15]);var inst_14993 = (state_15038[16]);var inst_14992 = (state_15038[17]);var inst_15015 = cljs.core.empty_QMARK_.call(null,inst_14993);var inst_15016 = inst_14992.call(null,inst_14998);var inst_15017 = cljs.core.not.call(null,inst_15016);var inst_15018 = (inst_15015) && (inst_15017);var state_15038__$1 = state_15038;var statearr_15076_15114 = state_15038__$1;(statearr_15076_15114[2] = inst_15018);
(statearr_15076_15114[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 8))
{var inst_14982 = (state_15038[7]);var state_15038__$1 = state_15038;var statearr_15077_15115 = state_15038__$1;(statearr_15077_15115[2] = inst_14982);
(statearr_15077_15115[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___15085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10465__auto__,c__10530__auto___15085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_15081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15081[0] = state_machine__10466__auto__);
(statearr_15081[1] = 1);
return statearr_15081;
});
var state_machine__10466__auto____1 = (function (state_15038){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_15038);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e15082){if((e15082 instanceof Object))
{var ex__10469__auto__ = e15082;var statearr_15083_15116 = state_15038;(statearr_15083_15116[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15038);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15082;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15117 = state_15038;
state_15038 = G__15117;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_15038){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_15038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___15085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10532__auto__ = (function (){var statearr_15084 = f__10531__auto__.call(null);(statearr_15084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___15085);
return statearr_15084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___15085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15119 = {};return obj15119;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7917__auto__ = p;if(and__7917__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7917__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8556__auto__ = (((p == null))?null:p);return (function (){var or__7929__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7917__auto__ = p;if(and__7917__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7917__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8556__auto__ = (((p == null))?null:p);return (function (){var or__7929__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7917__auto__ = p;if(and__7917__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7917__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8556__auto__ = (((p == null))?null:p);return (function (){var or__7929__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7917__auto__ = p;if(and__7917__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7917__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8556__auto__ = (((p == null))?null:p);return (function (){var or__7929__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8556__auto__)]);if(or__7929__auto__)
{return or__7929__auto__;
} else
{var or__7929__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7929__auto____$1)
{return or__7929__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7929__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7929__auto__))
{return or__7929__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7929__auto__,mults){
return (function (p1__15120_SHARP_){if(cljs.core.truth_(p1__15120_SHARP_.call(null,topic)))
{return p1__15120_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15120_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7929__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15235 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15235 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15236){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15236 = meta15236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15235.cljs$lang$type = true;
cljs.core.async.t15235.cljs$lang$ctorStr = "cljs.core.async/t15235";
cljs.core.async.t15235.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8496__auto__,writer__8497__auto__,opt__8498__auto__){return cljs.core._write.call(null,writer__8497__auto__,"cljs.core.async/t15235");
});})(mults,ensure_mult))
;
cljs.core.async.t15235.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15235.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15235.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15235.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15235.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15235.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15235.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15237){var self__ = this;
var _15237__$1 = this;return self__.meta15236;
});})(mults,ensure_mult))
;
cljs.core.async.t15235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15237,meta15236__$1){var self__ = this;
var _15237__$1 = this;return (new cljs.core.async.t15235(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15236__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15235 = ((function (mults,ensure_mult){
return (function __GT_t15235(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15236){return (new cljs.core.async.t15235(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15236));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15235(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10530__auto___15349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___15349,mults,ensure_mult,p){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___15349,mults,ensure_mult,p){
return (function (state_15305){var state_val_15306 = (state_15305[1]);if((state_val_15306 === 7))
{var inst_15301 = (state_15305[2]);var state_15305__$1 = state_15305;var statearr_15307_15350 = state_15305__$1;(statearr_15307_15350[2] = inst_15301);
(statearr_15307_15350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 20))
{var state_15305__$1 = state_15305;var statearr_15308_15351 = state_15305__$1;(statearr_15308_15351[2] = null);
(statearr_15308_15351[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 1))
{var state_15305__$1 = state_15305;var statearr_15309_15352 = state_15305__$1;(statearr_15309_15352[2] = null);
(statearr_15309_15352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 4))
{var inst_15240 = (state_15305[7]);var inst_15240__$1 = (state_15305[2]);var inst_15241 = (inst_15240__$1 == null);var state_15305__$1 = (function (){var statearr_15310 = state_15305;(statearr_15310[7] = inst_15240__$1);
return statearr_15310;
})();if(cljs.core.truth_(inst_15241))
{var statearr_15311_15353 = state_15305__$1;(statearr_15311_15353[1] = 5);
} else
{var statearr_15312_15354 = state_15305__$1;(statearr_15312_15354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 15))
{var inst_15282 = (state_15305[2]);var state_15305__$1 = state_15305;var statearr_15313_15355 = state_15305__$1;(statearr_15313_15355[2] = inst_15282);
(statearr_15313_15355[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 21))
{var inst_15288 = (state_15305[8]);var inst_15296 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15288);var state_15305__$1 = state_15305;var statearr_15314_15356 = state_15305__$1;(statearr_15314_15356[2] = inst_15296);
(statearr_15314_15356[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 13))
{var inst_15264 = (state_15305[9]);var inst_15266 = cljs.core.chunked_seq_QMARK_.call(null,inst_15264);var state_15305__$1 = state_15305;if(inst_15266)
{var statearr_15315_15357 = state_15305__$1;(statearr_15315_15357[1] = 16);
} else
{var statearr_15316_15358 = state_15305__$1;(statearr_15316_15358[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 22))
{var inst_15298 = (state_15305[2]);var state_15305__$1 = (function (){var statearr_15317 = state_15305;(statearr_15317[10] = inst_15298);
return statearr_15317;
})();var statearr_15318_15359 = state_15305__$1;(statearr_15318_15359[2] = null);
(statearr_15318_15359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 6))
{var inst_15288 = (state_15305[8]);var inst_15240 = (state_15305[7]);var inst_15288__$1 = topic_fn.call(null,inst_15240);var inst_15289 = cljs.core.deref.call(null,mults);var inst_15290 = cljs.core.get.call(null,inst_15289,inst_15288__$1);var inst_15291 = cljs.core.async.muxch_STAR_.call(null,inst_15290);var state_15305__$1 = (function (){var statearr_15319 = state_15305;(statearr_15319[8] = inst_15288__$1);
return statearr_15319;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15305__$1,19,inst_15291,inst_15240);
} else
{if((state_val_15306 === 17))
{var inst_15264 = (state_15305[9]);var inst_15273 = cljs.core.first.call(null,inst_15264);var inst_15274 = cljs.core.async.muxch_STAR_.call(null,inst_15273);var inst_15275 = cljs.core.async.close_BANG_.call(null,inst_15274);var inst_15276 = cljs.core.next.call(null,inst_15264);var inst_15250 = inst_15276;var inst_15251 = null;var inst_15252 = 0;var inst_15253 = 0;var state_15305__$1 = (function (){var statearr_15320 = state_15305;(statearr_15320[11] = inst_15250);
(statearr_15320[12] = inst_15275);
(statearr_15320[13] = inst_15252);
(statearr_15320[14] = inst_15253);
(statearr_15320[15] = inst_15251);
return statearr_15320;
})();var statearr_15321_15360 = state_15305__$1;(statearr_15321_15360[2] = null);
(statearr_15321_15360[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 3))
{var inst_15303 = (state_15305[2]);var state_15305__$1 = state_15305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15305__$1,inst_15303);
} else
{if((state_val_15306 === 12))
{var inst_15284 = (state_15305[2]);var state_15305__$1 = state_15305;var statearr_15322_15361 = state_15305__$1;(statearr_15322_15361[2] = inst_15284);
(statearr_15322_15361[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 2))
{var state_15305__$1 = state_15305;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15305__$1,4,ch);
} else
{if((state_val_15306 === 19))
{var inst_15293 = (state_15305[2]);var state_15305__$1 = state_15305;if(cljs.core.truth_(inst_15293))
{var statearr_15323_15362 = state_15305__$1;(statearr_15323_15362[1] = 20);
} else
{var statearr_15324_15363 = state_15305__$1;(statearr_15324_15363[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 11))
{var inst_15250 = (state_15305[11]);var inst_15264 = (state_15305[9]);var inst_15264__$1 = cljs.core.seq.call(null,inst_15250);var state_15305__$1 = (function (){var statearr_15325 = state_15305;(statearr_15325[9] = inst_15264__$1);
return statearr_15325;
})();if(inst_15264__$1)
{var statearr_15326_15364 = state_15305__$1;(statearr_15326_15364[1] = 13);
} else
{var statearr_15327_15365 = state_15305__$1;(statearr_15327_15365[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 9))
{var inst_15286 = (state_15305[2]);var state_15305__$1 = state_15305;var statearr_15328_15366 = state_15305__$1;(statearr_15328_15366[2] = inst_15286);
(statearr_15328_15366[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 5))
{var inst_15247 = cljs.core.deref.call(null,mults);var inst_15248 = cljs.core.vals.call(null,inst_15247);var inst_15249 = cljs.core.seq.call(null,inst_15248);var inst_15250 = inst_15249;var inst_15251 = null;var inst_15252 = 0;var inst_15253 = 0;var state_15305__$1 = (function (){var statearr_15329 = state_15305;(statearr_15329[11] = inst_15250);
(statearr_15329[13] = inst_15252);
(statearr_15329[14] = inst_15253);
(statearr_15329[15] = inst_15251);
return statearr_15329;
})();var statearr_15330_15367 = state_15305__$1;(statearr_15330_15367[2] = null);
(statearr_15330_15367[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 14))
{var state_15305__$1 = state_15305;var statearr_15334_15368 = state_15305__$1;(statearr_15334_15368[2] = null);
(statearr_15334_15368[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 16))
{var inst_15264 = (state_15305[9]);var inst_15268 = cljs.core.chunk_first.call(null,inst_15264);var inst_15269 = cljs.core.chunk_rest.call(null,inst_15264);var inst_15270 = cljs.core.count.call(null,inst_15268);var inst_15250 = inst_15269;var inst_15251 = inst_15268;var inst_15252 = inst_15270;var inst_15253 = 0;var state_15305__$1 = (function (){var statearr_15335 = state_15305;(statearr_15335[11] = inst_15250);
(statearr_15335[13] = inst_15252);
(statearr_15335[14] = inst_15253);
(statearr_15335[15] = inst_15251);
return statearr_15335;
})();var statearr_15336_15369 = state_15305__$1;(statearr_15336_15369[2] = null);
(statearr_15336_15369[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 10))
{var inst_15250 = (state_15305[11]);var inst_15252 = (state_15305[13]);var inst_15253 = (state_15305[14]);var inst_15251 = (state_15305[15]);var inst_15258 = cljs.core._nth.call(null,inst_15251,inst_15253);var inst_15259 = cljs.core.async.muxch_STAR_.call(null,inst_15258);var inst_15260 = cljs.core.async.close_BANG_.call(null,inst_15259);var inst_15261 = (inst_15253 + 1);var tmp15331 = inst_15250;var tmp15332 = inst_15252;var tmp15333 = inst_15251;var inst_15250__$1 = tmp15331;var inst_15251__$1 = tmp15333;var inst_15252__$1 = tmp15332;var inst_15253__$1 = inst_15261;var state_15305__$1 = (function (){var statearr_15337 = state_15305;(statearr_15337[11] = inst_15250__$1);
(statearr_15337[13] = inst_15252__$1);
(statearr_15337[14] = inst_15253__$1);
(statearr_15337[15] = inst_15251__$1);
(statearr_15337[16] = inst_15260);
return statearr_15337;
})();var statearr_15338_15370 = state_15305__$1;(statearr_15338_15370[2] = null);
(statearr_15338_15370[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 18))
{var inst_15279 = (state_15305[2]);var state_15305__$1 = state_15305;var statearr_15339_15371 = state_15305__$1;(statearr_15339_15371[2] = inst_15279);
(statearr_15339_15371[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 8))
{var inst_15252 = (state_15305[13]);var inst_15253 = (state_15305[14]);var inst_15255 = (inst_15253 < inst_15252);var inst_15256 = inst_15255;var state_15305__$1 = state_15305;if(cljs.core.truth_(inst_15256))
{var statearr_15340_15372 = state_15305__$1;(statearr_15340_15372[1] = 10);
} else
{var statearr_15341_15373 = state_15305__$1;(statearr_15341_15373[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___15349,mults,ensure_mult,p))
;return ((function (switch__10465__auto__,c__10530__auto___15349,mults,ensure_mult,p){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_15345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15345[0] = state_machine__10466__auto__);
(statearr_15345[1] = 1);
return statearr_15345;
});
var state_machine__10466__auto____1 = (function (state_15305){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_15305);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e15346){if((e15346 instanceof Object))
{var ex__10469__auto__ = e15346;var statearr_15347_15374 = state_15305;(statearr_15347_15374[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15305);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15375 = state_15305;
state_15305 = G__15375;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_15305){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_15305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___15349,mults,ensure_mult,p))
})();var state__10532__auto__ = (function (){var statearr_15348 = f__10531__auto__.call(null);(statearr_15348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___15349);
return statearr_15348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___15349,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10530__auto___15512 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___15512,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___15512,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15482){var state_val_15483 = (state_15482[1]);if((state_val_15483 === 7))
{var state_15482__$1 = state_15482;var statearr_15484_15513 = state_15482__$1;(statearr_15484_15513[2] = null);
(statearr_15484_15513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 1))
{var state_15482__$1 = state_15482;var statearr_15485_15514 = state_15482__$1;(statearr_15485_15514[2] = null);
(statearr_15485_15514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 4))
{var inst_15446 = (state_15482[7]);var inst_15448 = (inst_15446 < cnt);var state_15482__$1 = state_15482;if(cljs.core.truth_(inst_15448))
{var statearr_15486_15515 = state_15482__$1;(statearr_15486_15515[1] = 6);
} else
{var statearr_15487_15516 = state_15482__$1;(statearr_15487_15516[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 15))
{var inst_15478 = (state_15482[2]);var state_15482__$1 = state_15482;var statearr_15488_15517 = state_15482__$1;(statearr_15488_15517[2] = inst_15478);
(statearr_15488_15517[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 13))
{var inst_15471 = cljs.core.async.close_BANG_.call(null,out);var state_15482__$1 = state_15482;var statearr_15489_15518 = state_15482__$1;(statearr_15489_15518[2] = inst_15471);
(statearr_15489_15518[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 6))
{var state_15482__$1 = state_15482;var statearr_15490_15519 = state_15482__$1;(statearr_15490_15519[2] = null);
(statearr_15490_15519[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 3))
{var inst_15480 = (state_15482[2]);var state_15482__$1 = state_15482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15482__$1,inst_15480);
} else
{if((state_val_15483 === 12))
{var inst_15468 = (state_15482[8]);var inst_15468__$1 = (state_15482[2]);var inst_15469 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15468__$1);var state_15482__$1 = (function (){var statearr_15491 = state_15482;(statearr_15491[8] = inst_15468__$1);
return statearr_15491;
})();if(cljs.core.truth_(inst_15469))
{var statearr_15492_15520 = state_15482__$1;(statearr_15492_15520[1] = 13);
} else
{var statearr_15493_15521 = state_15482__$1;(statearr_15493_15521[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 2))
{var inst_15445 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15446 = 0;var state_15482__$1 = (function (){var statearr_15494 = state_15482;(statearr_15494[7] = inst_15446);
(statearr_15494[9] = inst_15445);
return statearr_15494;
})();var statearr_15495_15522 = state_15482__$1;(statearr_15495_15522[2] = null);
(statearr_15495_15522[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 11))
{var inst_15446 = (state_15482[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15482,10,Object,null,9);var inst_15455 = chs__$1.call(null,inst_15446);var inst_15456 = done.call(null,inst_15446);var inst_15457 = cljs.core.async.take_BANG_.call(null,inst_15455,inst_15456);var state_15482__$1 = state_15482;var statearr_15496_15523 = state_15482__$1;(statearr_15496_15523[2] = inst_15457);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15482__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 9))
{var inst_15446 = (state_15482[7]);var inst_15459 = (state_15482[2]);var inst_15460 = (inst_15446 + 1);var inst_15446__$1 = inst_15460;var state_15482__$1 = (function (){var statearr_15497 = state_15482;(statearr_15497[7] = inst_15446__$1);
(statearr_15497[10] = inst_15459);
return statearr_15497;
})();var statearr_15498_15524 = state_15482__$1;(statearr_15498_15524[2] = null);
(statearr_15498_15524[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 5))
{var inst_15466 = (state_15482[2]);var state_15482__$1 = (function (){var statearr_15499 = state_15482;(statearr_15499[11] = inst_15466);
return statearr_15499;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15482__$1,12,dchan);
} else
{if((state_val_15483 === 14))
{var inst_15468 = (state_15482[8]);var inst_15473 = cljs.core.apply.call(null,f,inst_15468);var state_15482__$1 = state_15482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15482__$1,16,out,inst_15473);
} else
{if((state_val_15483 === 16))
{var inst_15475 = (state_15482[2]);var state_15482__$1 = (function (){var statearr_15500 = state_15482;(statearr_15500[12] = inst_15475);
return statearr_15500;
})();var statearr_15501_15525 = state_15482__$1;(statearr_15501_15525[2] = null);
(statearr_15501_15525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 10))
{var inst_15450 = (state_15482[2]);var inst_15451 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15482__$1 = (function (){var statearr_15502 = state_15482;(statearr_15502[13] = inst_15450);
return statearr_15502;
})();var statearr_15503_15526 = state_15482__$1;(statearr_15503_15526[2] = inst_15451);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15482__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 8))
{var inst_15464 = (state_15482[2]);var state_15482__$1 = state_15482;var statearr_15504_15527 = state_15482__$1;(statearr_15504_15527[2] = inst_15464);
(statearr_15504_15527[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___15512,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10465__auto__,c__10530__auto___15512,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_15508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15508[0] = state_machine__10466__auto__);
(statearr_15508[1] = 1);
return statearr_15508;
});
var state_machine__10466__auto____1 = (function (state_15482){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_15482);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e15509){if((e15509 instanceof Object))
{var ex__10469__auto__ = e15509;var statearr_15510_15528 = state_15482;(statearr_15510_15528[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15482);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15509;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15529 = state_15482;
state_15482 = G__15529;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_15482){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_15482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___15512,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10532__auto__ = (function (){var statearr_15511 = f__10531__auto__.call(null);(statearr_15511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___15512);
return statearr_15511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___15512,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10530__auto___15637 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___15637,out){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___15637,out){
return (function (state_15613){var state_val_15614 = (state_15613[1]);if((state_val_15614 === 7))
{var inst_15593 = (state_15613[7]);var inst_15592 = (state_15613[8]);var inst_15592__$1 = (state_15613[2]);var inst_15593__$1 = cljs.core.nth.call(null,inst_15592__$1,0,null);var inst_15594 = cljs.core.nth.call(null,inst_15592__$1,1,null);var inst_15595 = (inst_15593__$1 == null);var state_15613__$1 = (function (){var statearr_15615 = state_15613;(statearr_15615[9] = inst_15594);
(statearr_15615[7] = inst_15593__$1);
(statearr_15615[8] = inst_15592__$1);
return statearr_15615;
})();if(cljs.core.truth_(inst_15595))
{var statearr_15616_15638 = state_15613__$1;(statearr_15616_15638[1] = 8);
} else
{var statearr_15617_15639 = state_15613__$1;(statearr_15617_15639[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15614 === 1))
{var inst_15584 = cljs.core.vec.call(null,chs);var inst_15585 = inst_15584;var state_15613__$1 = (function (){var statearr_15618 = state_15613;(statearr_15618[10] = inst_15585);
return statearr_15618;
})();var statearr_15619_15640 = state_15613__$1;(statearr_15619_15640[2] = null);
(statearr_15619_15640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15614 === 4))
{var inst_15585 = (state_15613[10]);var state_15613__$1 = state_15613;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15613__$1,7,inst_15585);
} else
{if((state_val_15614 === 6))
{var inst_15609 = (state_15613[2]);var state_15613__$1 = state_15613;var statearr_15620_15641 = state_15613__$1;(statearr_15620_15641[2] = inst_15609);
(statearr_15620_15641[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15614 === 3))
{var inst_15611 = (state_15613[2]);var state_15613__$1 = state_15613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15613__$1,inst_15611);
} else
{if((state_val_15614 === 2))
{var inst_15585 = (state_15613[10]);var inst_15587 = cljs.core.count.call(null,inst_15585);var inst_15588 = (inst_15587 > 0);var state_15613__$1 = state_15613;if(cljs.core.truth_(inst_15588))
{var statearr_15622_15642 = state_15613__$1;(statearr_15622_15642[1] = 4);
} else
{var statearr_15623_15643 = state_15613__$1;(statearr_15623_15643[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15614 === 11))
{var inst_15585 = (state_15613[10]);var inst_15602 = (state_15613[2]);var tmp15621 = inst_15585;var inst_15585__$1 = tmp15621;var state_15613__$1 = (function (){var statearr_15624 = state_15613;(statearr_15624[10] = inst_15585__$1);
(statearr_15624[11] = inst_15602);
return statearr_15624;
})();var statearr_15625_15644 = state_15613__$1;(statearr_15625_15644[2] = null);
(statearr_15625_15644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15614 === 9))
{var inst_15593 = (state_15613[7]);var state_15613__$1 = state_15613;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15613__$1,11,out,inst_15593);
} else
{if((state_val_15614 === 5))
{var inst_15607 = cljs.core.async.close_BANG_.call(null,out);var state_15613__$1 = state_15613;var statearr_15626_15645 = state_15613__$1;(statearr_15626_15645[2] = inst_15607);
(statearr_15626_15645[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15614 === 10))
{var inst_15605 = (state_15613[2]);var state_15613__$1 = state_15613;var statearr_15627_15646 = state_15613__$1;(statearr_15627_15646[2] = inst_15605);
(statearr_15627_15646[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15614 === 8))
{var inst_15594 = (state_15613[9]);var inst_15585 = (state_15613[10]);var inst_15593 = (state_15613[7]);var inst_15592 = (state_15613[8]);var inst_15597 = (function (){var c = inst_15594;var v = inst_15593;var vec__15590 = inst_15592;var cs = inst_15585;return ((function (c,v,vec__15590,cs,inst_15594,inst_15585,inst_15593,inst_15592,state_val_15614,c__10530__auto___15637,out){
return (function (p1__15530_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15530_SHARP_);
});
;})(c,v,vec__15590,cs,inst_15594,inst_15585,inst_15593,inst_15592,state_val_15614,c__10530__auto___15637,out))
})();var inst_15598 = cljs.core.filterv.call(null,inst_15597,inst_15585);var inst_15585__$1 = inst_15598;var state_15613__$1 = (function (){var statearr_15628 = state_15613;(statearr_15628[10] = inst_15585__$1);
return statearr_15628;
})();var statearr_15629_15647 = state_15613__$1;(statearr_15629_15647[2] = null);
(statearr_15629_15647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___15637,out))
;return ((function (switch__10465__auto__,c__10530__auto___15637,out){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_15633 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15633[0] = state_machine__10466__auto__);
(statearr_15633[1] = 1);
return statearr_15633;
});
var state_machine__10466__auto____1 = (function (state_15613){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_15613);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e15634){if((e15634 instanceof Object))
{var ex__10469__auto__ = e15634;var statearr_15635_15648 = state_15613;(statearr_15635_15648[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15613);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15649 = state_15613;
state_15613 = G__15649;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_15613){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_15613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___15637,out))
})();var state__10532__auto__ = (function (){var statearr_15636 = f__10531__auto__.call(null);(statearr_15636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___15637);
return statearr_15636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___15637,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10530__auto___15742 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___15742,out){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___15742,out){
return (function (state_15719){var state_val_15720 = (state_15719[1]);if((state_val_15720 === 7))
{var inst_15701 = (state_15719[7]);var inst_15701__$1 = (state_15719[2]);var inst_15702 = (inst_15701__$1 == null);var inst_15703 = cljs.core.not.call(null,inst_15702);var state_15719__$1 = (function (){var statearr_15721 = state_15719;(statearr_15721[7] = inst_15701__$1);
return statearr_15721;
})();if(inst_15703)
{var statearr_15722_15743 = state_15719__$1;(statearr_15722_15743[1] = 8);
} else
{var statearr_15723_15744 = state_15719__$1;(statearr_15723_15744[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15720 === 1))
{var inst_15696 = 0;var state_15719__$1 = (function (){var statearr_15724 = state_15719;(statearr_15724[8] = inst_15696);
return statearr_15724;
})();var statearr_15725_15745 = state_15719__$1;(statearr_15725_15745[2] = null);
(statearr_15725_15745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15720 === 4))
{var state_15719__$1 = state_15719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15719__$1,7,ch);
} else
{if((state_val_15720 === 6))
{var inst_15714 = (state_15719[2]);var state_15719__$1 = state_15719;var statearr_15726_15746 = state_15719__$1;(statearr_15726_15746[2] = inst_15714);
(statearr_15726_15746[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15720 === 3))
{var inst_15716 = (state_15719[2]);var inst_15717 = cljs.core.async.close_BANG_.call(null,out);var state_15719__$1 = (function (){var statearr_15727 = state_15719;(statearr_15727[9] = inst_15716);
return statearr_15727;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15719__$1,inst_15717);
} else
{if((state_val_15720 === 2))
{var inst_15696 = (state_15719[8]);var inst_15698 = (inst_15696 < n);var state_15719__$1 = state_15719;if(cljs.core.truth_(inst_15698))
{var statearr_15728_15747 = state_15719__$1;(statearr_15728_15747[1] = 4);
} else
{var statearr_15729_15748 = state_15719__$1;(statearr_15729_15748[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15720 === 11))
{var inst_15696 = (state_15719[8]);var inst_15706 = (state_15719[2]);var inst_15707 = (inst_15696 + 1);var inst_15696__$1 = inst_15707;var state_15719__$1 = (function (){var statearr_15730 = state_15719;(statearr_15730[8] = inst_15696__$1);
(statearr_15730[10] = inst_15706);
return statearr_15730;
})();var statearr_15731_15749 = state_15719__$1;(statearr_15731_15749[2] = null);
(statearr_15731_15749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15720 === 9))
{var state_15719__$1 = state_15719;var statearr_15732_15750 = state_15719__$1;(statearr_15732_15750[2] = null);
(statearr_15732_15750[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15720 === 5))
{var state_15719__$1 = state_15719;var statearr_15733_15751 = state_15719__$1;(statearr_15733_15751[2] = null);
(statearr_15733_15751[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15720 === 10))
{var inst_15711 = (state_15719[2]);var state_15719__$1 = state_15719;var statearr_15734_15752 = state_15719__$1;(statearr_15734_15752[2] = inst_15711);
(statearr_15734_15752[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15720 === 8))
{var inst_15701 = (state_15719[7]);var state_15719__$1 = state_15719;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15719__$1,11,out,inst_15701);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___15742,out))
;return ((function (switch__10465__auto__,c__10530__auto___15742,out){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_15738 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15738[0] = state_machine__10466__auto__);
(statearr_15738[1] = 1);
return statearr_15738;
});
var state_machine__10466__auto____1 = (function (state_15719){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_15719);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e15739){if((e15739 instanceof Object))
{var ex__10469__auto__ = e15739;var statearr_15740_15753 = state_15719;(statearr_15740_15753[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15719);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15754 = state_15719;
state_15719 = G__15754;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_15719){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_15719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___15742,out))
})();var state__10532__auto__ = (function (){var statearr_15741 = f__10531__auto__.call(null);(statearr_15741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___15742);
return statearr_15741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___15742,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10530__auto___15851 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___15851,out){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___15851,out){
return (function (state_15826){var state_val_15827 = (state_15826[1]);if((state_val_15827 === 7))
{var inst_15821 = (state_15826[2]);var state_15826__$1 = state_15826;var statearr_15828_15852 = state_15826__$1;(statearr_15828_15852[2] = inst_15821);
(statearr_15828_15852[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15827 === 1))
{var inst_15803 = null;var state_15826__$1 = (function (){var statearr_15829 = state_15826;(statearr_15829[7] = inst_15803);
return statearr_15829;
})();var statearr_15830_15853 = state_15826__$1;(statearr_15830_15853[2] = null);
(statearr_15830_15853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15827 === 4))
{var inst_15806 = (state_15826[8]);var inst_15806__$1 = (state_15826[2]);var inst_15807 = (inst_15806__$1 == null);var inst_15808 = cljs.core.not.call(null,inst_15807);var state_15826__$1 = (function (){var statearr_15831 = state_15826;(statearr_15831[8] = inst_15806__$1);
return statearr_15831;
})();if(inst_15808)
{var statearr_15832_15854 = state_15826__$1;(statearr_15832_15854[1] = 5);
} else
{var statearr_15833_15855 = state_15826__$1;(statearr_15833_15855[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15827 === 6))
{var state_15826__$1 = state_15826;var statearr_15834_15856 = state_15826__$1;(statearr_15834_15856[2] = null);
(statearr_15834_15856[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15827 === 3))
{var inst_15823 = (state_15826[2]);var inst_15824 = cljs.core.async.close_BANG_.call(null,out);var state_15826__$1 = (function (){var statearr_15835 = state_15826;(statearr_15835[9] = inst_15823);
return statearr_15835;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15826__$1,inst_15824);
} else
{if((state_val_15827 === 2))
{var state_15826__$1 = state_15826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15826__$1,4,ch);
} else
{if((state_val_15827 === 11))
{var inst_15806 = (state_15826[8]);var inst_15815 = (state_15826[2]);var inst_15803 = inst_15806;var state_15826__$1 = (function (){var statearr_15836 = state_15826;(statearr_15836[7] = inst_15803);
(statearr_15836[10] = inst_15815);
return statearr_15836;
})();var statearr_15837_15857 = state_15826__$1;(statearr_15837_15857[2] = null);
(statearr_15837_15857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15827 === 9))
{var inst_15806 = (state_15826[8]);var state_15826__$1 = state_15826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15826__$1,11,out,inst_15806);
} else
{if((state_val_15827 === 5))
{var inst_15806 = (state_15826[8]);var inst_15803 = (state_15826[7]);var inst_15810 = cljs.core._EQ_.call(null,inst_15806,inst_15803);var state_15826__$1 = state_15826;if(inst_15810)
{var statearr_15839_15858 = state_15826__$1;(statearr_15839_15858[1] = 8);
} else
{var statearr_15840_15859 = state_15826__$1;(statearr_15840_15859[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15827 === 10))
{var inst_15818 = (state_15826[2]);var state_15826__$1 = state_15826;var statearr_15841_15860 = state_15826__$1;(statearr_15841_15860[2] = inst_15818);
(statearr_15841_15860[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15827 === 8))
{var inst_15803 = (state_15826[7]);var tmp15838 = inst_15803;var inst_15803__$1 = tmp15838;var state_15826__$1 = (function (){var statearr_15842 = state_15826;(statearr_15842[7] = inst_15803__$1);
return statearr_15842;
})();var statearr_15843_15861 = state_15826__$1;(statearr_15843_15861[2] = null);
(statearr_15843_15861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___15851,out))
;return ((function (switch__10465__auto__,c__10530__auto___15851,out){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_15847 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15847[0] = state_machine__10466__auto__);
(statearr_15847[1] = 1);
return statearr_15847;
});
var state_machine__10466__auto____1 = (function (state_15826){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_15826);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e15848){if((e15848 instanceof Object))
{var ex__10469__auto__ = e15848;var statearr_15849_15862 = state_15826;(statearr_15849_15862[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15826);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15863 = state_15826;
state_15826 = G__15863;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_15826){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_15826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___15851,out))
})();var state__10532__auto__ = (function (){var statearr_15850 = f__10531__auto__.call(null);(statearr_15850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___15851);
return statearr_15850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___15851,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10530__auto___15998 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___15998,out){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___15998,out){
return (function (state_15968){var state_val_15969 = (state_15968[1]);if((state_val_15969 === 7))
{var inst_15964 = (state_15968[2]);var state_15968__$1 = state_15968;var statearr_15970_15999 = state_15968__$1;(statearr_15970_15999[2] = inst_15964);
(statearr_15970_15999[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 1))
{var inst_15931 = (new Array(n));var inst_15932 = inst_15931;var inst_15933 = 0;var state_15968__$1 = (function (){var statearr_15971 = state_15968;(statearr_15971[7] = inst_15933);
(statearr_15971[8] = inst_15932);
return statearr_15971;
})();var statearr_15972_16000 = state_15968__$1;(statearr_15972_16000[2] = null);
(statearr_15972_16000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 4))
{var inst_15936 = (state_15968[9]);var inst_15936__$1 = (state_15968[2]);var inst_15937 = (inst_15936__$1 == null);var inst_15938 = cljs.core.not.call(null,inst_15937);var state_15968__$1 = (function (){var statearr_15973 = state_15968;(statearr_15973[9] = inst_15936__$1);
return statearr_15973;
})();if(inst_15938)
{var statearr_15974_16001 = state_15968__$1;(statearr_15974_16001[1] = 5);
} else
{var statearr_15975_16002 = state_15968__$1;(statearr_15975_16002[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 15))
{var inst_15958 = (state_15968[2]);var state_15968__$1 = state_15968;var statearr_15976_16003 = state_15968__$1;(statearr_15976_16003[2] = inst_15958);
(statearr_15976_16003[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 13))
{var state_15968__$1 = state_15968;var statearr_15977_16004 = state_15968__$1;(statearr_15977_16004[2] = null);
(statearr_15977_16004[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 6))
{var inst_15933 = (state_15968[7]);var inst_15954 = (inst_15933 > 0);var state_15968__$1 = state_15968;if(cljs.core.truth_(inst_15954))
{var statearr_15978_16005 = state_15968__$1;(statearr_15978_16005[1] = 12);
} else
{var statearr_15979_16006 = state_15968__$1;(statearr_15979_16006[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 3))
{var inst_15966 = (state_15968[2]);var state_15968__$1 = state_15968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15968__$1,inst_15966);
} else
{if((state_val_15969 === 12))
{var inst_15932 = (state_15968[8]);var inst_15956 = cljs.core.vec.call(null,inst_15932);var state_15968__$1 = state_15968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15968__$1,15,out,inst_15956);
} else
{if((state_val_15969 === 2))
{var state_15968__$1 = state_15968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15968__$1,4,ch);
} else
{if((state_val_15969 === 11))
{var inst_15948 = (state_15968[2]);var inst_15949 = (new Array(n));var inst_15932 = inst_15949;var inst_15933 = 0;var state_15968__$1 = (function (){var statearr_15980 = state_15968;(statearr_15980[7] = inst_15933);
(statearr_15980[10] = inst_15948);
(statearr_15980[8] = inst_15932);
return statearr_15980;
})();var statearr_15981_16007 = state_15968__$1;(statearr_15981_16007[2] = null);
(statearr_15981_16007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 9))
{var inst_15932 = (state_15968[8]);var inst_15946 = cljs.core.vec.call(null,inst_15932);var state_15968__$1 = state_15968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15968__$1,11,out,inst_15946);
} else
{if((state_val_15969 === 5))
{var inst_15933 = (state_15968[7]);var inst_15941 = (state_15968[11]);var inst_15936 = (state_15968[9]);var inst_15932 = (state_15968[8]);var inst_15940 = (inst_15932[inst_15933] = inst_15936);var inst_15941__$1 = (inst_15933 + 1);var inst_15942 = (inst_15941__$1 < n);var state_15968__$1 = (function (){var statearr_15982 = state_15968;(statearr_15982[12] = inst_15940);
(statearr_15982[11] = inst_15941__$1);
return statearr_15982;
})();if(cljs.core.truth_(inst_15942))
{var statearr_15983_16008 = state_15968__$1;(statearr_15983_16008[1] = 8);
} else
{var statearr_15984_16009 = state_15968__$1;(statearr_15984_16009[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 14))
{var inst_15961 = (state_15968[2]);var inst_15962 = cljs.core.async.close_BANG_.call(null,out);var state_15968__$1 = (function (){var statearr_15986 = state_15968;(statearr_15986[13] = inst_15961);
return statearr_15986;
})();var statearr_15987_16010 = state_15968__$1;(statearr_15987_16010[2] = inst_15962);
(statearr_15987_16010[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 10))
{var inst_15952 = (state_15968[2]);var state_15968__$1 = state_15968;var statearr_15988_16011 = state_15968__$1;(statearr_15988_16011[2] = inst_15952);
(statearr_15988_16011[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15969 === 8))
{var inst_15941 = (state_15968[11]);var inst_15932 = (state_15968[8]);var tmp15985 = inst_15932;var inst_15932__$1 = tmp15985;var inst_15933 = inst_15941;var state_15968__$1 = (function (){var statearr_15989 = state_15968;(statearr_15989[7] = inst_15933);
(statearr_15989[8] = inst_15932__$1);
return statearr_15989;
})();var statearr_15990_16012 = state_15968__$1;(statearr_15990_16012[2] = null);
(statearr_15990_16012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___15998,out))
;return ((function (switch__10465__auto__,c__10530__auto___15998,out){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_15994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15994[0] = state_machine__10466__auto__);
(statearr_15994[1] = 1);
return statearr_15994;
});
var state_machine__10466__auto____1 = (function (state_15968){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_15968);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e15995){if((e15995 instanceof Object))
{var ex__10469__auto__ = e15995;var statearr_15996_16013 = state_15968;(statearr_15996_16013[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16014 = state_15968;
state_15968 = G__16014;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_15968){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_15968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___15998,out))
})();var state__10532__auto__ = (function (){var statearr_15997 = f__10531__auto__.call(null);(statearr_15997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___15998);
return statearr_15997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___15998,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10530__auto___16157 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto___16157,out){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto___16157,out){
return (function (state_16127){var state_val_16128 = (state_16127[1]);if((state_val_16128 === 7))
{var inst_16123 = (state_16127[2]);var state_16127__$1 = state_16127;var statearr_16129_16158 = state_16127__$1;(statearr_16129_16158[2] = inst_16123);
(statearr_16129_16158[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 1))
{var inst_16086 = [];var inst_16087 = inst_16086;var inst_16088 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16127__$1 = (function (){var statearr_16130 = state_16127;(statearr_16130[7] = inst_16087);
(statearr_16130[8] = inst_16088);
return statearr_16130;
})();var statearr_16131_16159 = state_16127__$1;(statearr_16131_16159[2] = null);
(statearr_16131_16159[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 4))
{var inst_16091 = (state_16127[9]);var inst_16091__$1 = (state_16127[2]);var inst_16092 = (inst_16091__$1 == null);var inst_16093 = cljs.core.not.call(null,inst_16092);var state_16127__$1 = (function (){var statearr_16132 = state_16127;(statearr_16132[9] = inst_16091__$1);
return statearr_16132;
})();if(inst_16093)
{var statearr_16133_16160 = state_16127__$1;(statearr_16133_16160[1] = 5);
} else
{var statearr_16134_16161 = state_16127__$1;(statearr_16134_16161[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 15))
{var inst_16117 = (state_16127[2]);var state_16127__$1 = state_16127;var statearr_16135_16162 = state_16127__$1;(statearr_16135_16162[2] = inst_16117);
(statearr_16135_16162[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 13))
{var state_16127__$1 = state_16127;var statearr_16136_16163 = state_16127__$1;(statearr_16136_16163[2] = null);
(statearr_16136_16163[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 6))
{var inst_16087 = (state_16127[7]);var inst_16112 = inst_16087.length;var inst_16113 = (inst_16112 > 0);var state_16127__$1 = state_16127;if(cljs.core.truth_(inst_16113))
{var statearr_16137_16164 = state_16127__$1;(statearr_16137_16164[1] = 12);
} else
{var statearr_16138_16165 = state_16127__$1;(statearr_16138_16165[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 3))
{var inst_16125 = (state_16127[2]);var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16127__$1,inst_16125);
} else
{if((state_val_16128 === 12))
{var inst_16087 = (state_16127[7]);var inst_16115 = cljs.core.vec.call(null,inst_16087);var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16127__$1,15,out,inst_16115);
} else
{if((state_val_16128 === 2))
{var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16127__$1,4,ch);
} else
{if((state_val_16128 === 11))
{var inst_16095 = (state_16127[10]);var inst_16091 = (state_16127[9]);var inst_16105 = (state_16127[2]);var inst_16106 = [];var inst_16107 = inst_16106.push(inst_16091);var inst_16087 = inst_16106;var inst_16088 = inst_16095;var state_16127__$1 = (function (){var statearr_16139 = state_16127;(statearr_16139[7] = inst_16087);
(statearr_16139[8] = inst_16088);
(statearr_16139[11] = inst_16105);
(statearr_16139[12] = inst_16107);
return statearr_16139;
})();var statearr_16140_16166 = state_16127__$1;(statearr_16140_16166[2] = null);
(statearr_16140_16166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 9))
{var inst_16087 = (state_16127[7]);var inst_16103 = cljs.core.vec.call(null,inst_16087);var state_16127__$1 = state_16127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16127__$1,11,out,inst_16103);
} else
{if((state_val_16128 === 5))
{var inst_16095 = (state_16127[10]);var inst_16091 = (state_16127[9]);var inst_16088 = (state_16127[8]);var inst_16095__$1 = f.call(null,inst_16091);var inst_16096 = cljs.core._EQ_.call(null,inst_16095__$1,inst_16088);var inst_16097 = cljs.core.keyword_identical_QMARK_.call(null,inst_16088,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16098 = (inst_16096) || (inst_16097);var state_16127__$1 = (function (){var statearr_16141 = state_16127;(statearr_16141[10] = inst_16095__$1);
return statearr_16141;
})();if(cljs.core.truth_(inst_16098))
{var statearr_16142_16167 = state_16127__$1;(statearr_16142_16167[1] = 8);
} else
{var statearr_16143_16168 = state_16127__$1;(statearr_16143_16168[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 14))
{var inst_16120 = (state_16127[2]);var inst_16121 = cljs.core.async.close_BANG_.call(null,out);var state_16127__$1 = (function (){var statearr_16145 = state_16127;(statearr_16145[13] = inst_16120);
return statearr_16145;
})();var statearr_16146_16169 = state_16127__$1;(statearr_16146_16169[2] = inst_16121);
(statearr_16146_16169[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 10))
{var inst_16110 = (state_16127[2]);var state_16127__$1 = state_16127;var statearr_16147_16170 = state_16127__$1;(statearr_16147_16170[2] = inst_16110);
(statearr_16147_16170[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16128 === 8))
{var inst_16087 = (state_16127[7]);var inst_16095 = (state_16127[10]);var inst_16091 = (state_16127[9]);var inst_16100 = inst_16087.push(inst_16091);var tmp16144 = inst_16087;var inst_16087__$1 = tmp16144;var inst_16088 = inst_16095;var state_16127__$1 = (function (){var statearr_16148 = state_16127;(statearr_16148[7] = inst_16087__$1);
(statearr_16148[8] = inst_16088);
(statearr_16148[14] = inst_16100);
return statearr_16148;
})();var statearr_16149_16171 = state_16127__$1;(statearr_16149_16171[2] = null);
(statearr_16149_16171[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10530__auto___16157,out))
;return ((function (switch__10465__auto__,c__10530__auto___16157,out){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_16153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16153[0] = state_machine__10466__auto__);
(statearr_16153[1] = 1);
return statearr_16153;
});
var state_machine__10466__auto____1 = (function (state_16127){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_16127);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e16154){if((e16154 instanceof Object))
{var ex__10469__auto__ = e16154;var statearr_16155_16172 = state_16127;(statearr_16155_16172[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16127);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16173 = state_16127;
state_16127 = G__16173;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_16127){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_16127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto___16157,out))
})();var state__10532__auto__ = (function (){var statearr_16156 = f__10531__auto__.call(null);(statearr_16156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto___16157);
return statearr_16156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto___16157,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map