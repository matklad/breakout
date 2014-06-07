// Compiled by ClojureScript 0.0-2227
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
figwheel.client.log_style = "color:rgb(0,128,0);";
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__13165,args){var map__13167 = p__13165;var map__13167__$1 = ((cljs.core.seq_QMARK_.call(null,map__13167))?cljs.core.apply.call(null,cljs.core.hash_map,map__13167):map__13167);var debug = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"debug","debug",1109363141));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__13165,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__13165,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__13168){
var p__13165 = cljs.core.first(arglist__13168);
var args = cljs.core.rest(arglist__13168);
return log__delegate(p__13165,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__13169){var map__13171 = p__13169;var map__13171__$1 = ((cljs.core.seq_QMARK_.call(null,map__13171))?cljs.core.apply.call(null,cljs.core.hash_map,map__13171):map__13171);var websocket_url = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__13172,callback){var map__13174 = p__13172;var map__13174__$1 = ((cljs.core.seq_QMARK_.call(null,map__13174))?cljs.core.apply.call(null,cljs.core.hash_map,map__13174):map__13174);var msg = map__13174__$1;var dependency_file = cljs.core.get.call(null,map__13174__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",2750516784));var namespace = cljs.core.get.call(null,map__13174__$1,new cljs.core.Keyword(null,"namespace","namespace",2266122445));var request_url = cljs.core.get.call(null,map__13174__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));if(cljs.core.truth_((function (){var or__7929__auto__ = dependency_file;if(cljs.core.truth_(or__7929__auto__))
{return or__7929__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__13174,map__13174__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__13174,map__13174__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__13175,p__13176){var map__13179 = p__13175;var map__13179__$1 = ((cljs.core.seq_QMARK_.call(null,map__13179))?cljs.core.apply.call(null,cljs.core.hash_map,map__13179):map__13179);var opts = map__13179__$1;var url_rewriter = cljs.core.get.call(null,map__13179__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174));var map__13180 = p__13176;var map__13180__$1 = ((cljs.core.seq_QMARK_.call(null,map__13180))?cljs.core.apply.call(null,cljs.core.hash_map,map__13180):map__13180);var d = map__13180__$1;var file = cljs.core.get.call(null,map__13180__$1,new cljs.core.Keyword(null,"file","file",1017047278));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2162835619),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__13181,p__13182){var map__13223 = p__13181;var map__13223__$1 = ((cljs.core.seq_QMARK_.call(null,map__13223))?cljs.core.apply.call(null,cljs.core.hash_map,map__13223):map__13223);var opts = map__13223__$1;var on_jsload = cljs.core.get.call(null,map__13223__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103));var before_jsload = cljs.core.get.call(null,map__13223__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831));var map__13224 = p__13182;var map__13224__$1 = ((cljs.core.seq_QMARK_.call(null,map__13224))?cljs.core.apply.call(null,cljs.core.hash_map,map__13224):map__13224);var files = cljs.core.get.call(null,map__13224__$1,new cljs.core.Keyword(null,"files","files",1111338473));var c__10530__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto__,map__13223,map__13223__$1,opts,on_jsload,before_jsload,map__13224,map__13224__$1,files){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto__,map__13223,map__13223__$1,opts,on_jsload,before_jsload,map__13224,map__13224__$1,files){
return (function (state_13246){var state_val_13247 = (state_13246[1]);if((state_val_13247 === 6))
{var inst_13229 = (state_13246[7]);var inst_13238 = (state_13246[2]);var inst_13239 = [inst_13229];var inst_13240 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_13239,null));var inst_13241 = cljs.core.apply.call(null,on_jsload,inst_13240);var state_13246__$1 = (function (){var statearr_13248 = state_13246;(statearr_13248[8] = inst_13238);
return statearr_13248;
})();var statearr_13249_13263 = state_13246__$1;(statearr_13249_13263[2] = inst_13241);
(statearr_13249_13263[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13247 === 5))
{var inst_13244 = (state_13246[2]);var state_13246__$1 = state_13246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13246__$1,inst_13244);
} else
{if((state_val_13247 === 4))
{var state_13246__$1 = state_13246;var statearr_13250_13264 = state_13246__$1;(statearr_13250_13264[2] = null);
(statearr_13250_13264[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13247 === 3))
{var inst_13229 = (state_13246[7]);var inst_13232 = console.log("%cFigwheel: loaded these files",figwheel.client.log_style);var inst_13233 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),inst_13229);var inst_13234 = cljs.core.prn_str.call(null,inst_13233);var inst_13235 = console.log(inst_13234);var inst_13236 = cljs.core.async.timeout.call(null,10);var state_13246__$1 = (function (){var statearr_13251 = state_13246;(statearr_13251[9] = inst_13232);
(statearr_13251[10] = inst_13235);
return statearr_13251;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13246__$1,6,inst_13236);
} else
{if((state_val_13247 === 2))
{var inst_13229 = (state_13246[7]);var inst_13229__$1 = (state_13246[2]);var inst_13230 = cljs.core.not_empty.call(null,inst_13229__$1);var state_13246__$1 = (function (){var statearr_13252 = state_13246;(statearr_13252[7] = inst_13229__$1);
return statearr_13252;
})();if(cljs.core.truth_(inst_13230))
{var statearr_13253_13265 = state_13246__$1;(statearr_13253_13265[1] = 3);
} else
{var statearr_13254_13266 = state_13246__$1;(statearr_13254_13266[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13247 === 1))
{var inst_13225 = before_jsload.call(null,files);var inst_13226 = figwheel.client.add_request_urls.call(null,opts,files);var inst_13227 = figwheel.client.load_all_js_files.call(null,inst_13226);var state_13246__$1 = (function (){var statearr_13255 = state_13246;(statearr_13255[11] = inst_13225);
return statearr_13255;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13246__$1,2,inst_13227);
} else
{return null;
}
}
}
}
}
}
});})(c__10530__auto__,map__13223,map__13223__$1,opts,on_jsload,before_jsload,map__13224,map__13224__$1,files))
;return ((function (switch__10465__auto__,c__10530__auto__,map__13223,map__13223__$1,opts,on_jsload,before_jsload,map__13224,map__13224__$1,files){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_13259 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13259[0] = state_machine__10466__auto__);
(statearr_13259[1] = 1);
return statearr_13259;
});
var state_machine__10466__auto____1 = (function (state_13246){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_13246);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e13260){if((e13260 instanceof Object))
{var ex__10469__auto__ = e13260;var statearr_13261_13267 = state_13246;(statearr_13261_13267[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13260;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13268 = state_13246;
state_13246 = G__13268;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_13246){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_13246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto__,map__13223,map__13223__$1,opts,on_jsload,before_jsload,map__13224,map__13224__$1,files))
})();var state__10532__auto__ = (function (){var statearr_13262 = f__10531__auto__.call(null);(statearr_13262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto__);
return statearr_13262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto__,map__13223,map__13223__$1,opts,on_jsload,before_jsload,map__13224,map__13224__$1,files))
);
return c__10530__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__13269,link_href){var map__13271 = p__13269;var map__13271__$1 = ((cljs.core.seq_QMARK_.call(null,map__13271))?cljs.core.apply.call(null,cljs.core.hash_map,map__13271):map__13271);var request_url = cljs.core.get.call(null,map__13271__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__13271__$1,new cljs.core.Keyword(null,"file","file",1017047278));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[0]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__10530__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto__,parent){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto__,parent){
return (function (state_13292){var state_val_13293 = (state_13292[1]);if((state_val_13293 === 2))
{var inst_13289 = (state_13292[2]);var inst_13290 = parent.removeChild(orig_link);var state_13292__$1 = (function (){var statearr_13294 = state_13292;(statearr_13294[7] = inst_13289);
return statearr_13294;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13292__$1,inst_13290);
} else
{if((state_val_13293 === 1))
{var inst_13287 = cljs.core.async.timeout.call(null,200);var state_13292__$1 = state_13292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13292__$1,2,inst_13287);
} else
{return null;
}
}
});})(c__10530__auto__,parent))
;return ((function (switch__10465__auto__,c__10530__auto__,parent){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_13298 = [null,null,null,null,null,null,null,null];(statearr_13298[0] = state_machine__10466__auto__);
(statearr_13298[1] = 1);
return statearr_13298;
});
var state_machine__10466__auto____1 = (function (state_13292){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_13292);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e13299){if((e13299 instanceof Object))
{var ex__10469__auto__ = e13299;var statearr_13300_13302 = state_13292;(statearr_13300_13302[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13292);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13303 = state_13292;
state_13292 = G__13303;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_13292){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_13292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto__,parent))
})();var state__10532__auto__ = (function (){var statearr_13301 = f__10531__auto__.call(null);(statearr_13301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto__);
return statearr_13301;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto__,parent))
);
return c__10530__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__13304){var map__13306 = p__13304;var map__13306__$1 = ((cljs.core.seq_QMARK_.call(null,map__13306))?cljs.core.apply.call(null,cljs.core.hash_map,map__13306):map__13306);var f_data = map__13306__$1;var request_url = cljs.core.get.call(null,map__13306__$1,new cljs.core.Keyword(null,"request-url","request-url",2162835619));var file = cljs.core.get.call(null,map__13306__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__13307,files_msg){var map__13329 = p__13307;var map__13329__$1 = ((cljs.core.seq_QMARK_.call(null,map__13329))?cljs.core.apply.call(null,cljs.core.hash_map,map__13329):map__13329);var opts = map__13329__$1;var on_cssload = cljs.core.get.call(null,map__13329__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789));var seq__13330_13350 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__13331_13351 = null;var count__13332_13352 = 0;var i__13333_13353 = 0;while(true){
if((i__13333_13353 < count__13332_13352))
{var f_13354 = cljs.core._nth.call(null,chunk__13331_13351,i__13333_13353);figwheel.client.reload_css_file.call(null,f_13354);
{
var G__13355 = seq__13330_13350;
var G__13356 = chunk__13331_13351;
var G__13357 = count__13332_13352;
var G__13358 = (i__13333_13353 + 1);
seq__13330_13350 = G__13355;
chunk__13331_13351 = G__13356;
count__13332_13352 = G__13357;
i__13333_13353 = G__13358;
continue;
}
} else
{var temp__4126__auto___13359 = cljs.core.seq.call(null,seq__13330_13350);if(temp__4126__auto___13359)
{var seq__13330_13360__$1 = temp__4126__auto___13359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13330_13360__$1))
{var c__8685__auto___13361 = cljs.core.chunk_first.call(null,seq__13330_13360__$1);{
var G__13362 = cljs.core.chunk_rest.call(null,seq__13330_13360__$1);
var G__13363 = c__8685__auto___13361;
var G__13364 = cljs.core.count.call(null,c__8685__auto___13361);
var G__13365 = 0;
seq__13330_13350 = G__13362;
chunk__13331_13351 = G__13363;
count__13332_13352 = G__13364;
i__13333_13353 = G__13365;
continue;
}
} else
{var f_13366 = cljs.core.first.call(null,seq__13330_13360__$1);figwheel.client.reload_css_file.call(null,f_13366);
{
var G__13367 = cljs.core.next.call(null,seq__13330_13360__$1);
var G__13368 = null;
var G__13369 = 0;
var G__13370 = 0;
seq__13330_13350 = G__13367;
chunk__13331_13351 = G__13368;
count__13332_13352 = G__13369;
i__13333_13353 = G__13370;
continue;
}
}
} else
{}
}
break;
}
var c__10530__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10530__auto__,map__13329,map__13329__$1,opts,on_cssload){
return (function (){var f__10531__auto__ = (function (){var switch__10465__auto__ = ((function (c__10530__auto__,map__13329,map__13329__$1,opts,on_cssload){
return (function (state_13340){var state_val_13341 = (state_13340[1]);if((state_val_13341 === 2))
{var inst_13336 = (state_13340[2]);var inst_13337 = new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_13338 = on_cssload.call(null,inst_13337);var state_13340__$1 = (function (){var statearr_13342 = state_13340;(statearr_13342[7] = inst_13336);
return statearr_13342;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13340__$1,inst_13338);
} else
{if((state_val_13341 === 1))
{var inst_13334 = cljs.core.async.timeout.call(null,100);var state_13340__$1 = state_13340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13340__$1,2,inst_13334);
} else
{return null;
}
}
});})(c__10530__auto__,map__13329,map__13329__$1,opts,on_cssload))
;return ((function (switch__10465__auto__,c__10530__auto__,map__13329,map__13329__$1,opts,on_cssload){
return (function() {
var state_machine__10466__auto__ = null;
var state_machine__10466__auto____0 = (function (){var statearr_13346 = [null,null,null,null,null,null,null,null];(statearr_13346[0] = state_machine__10466__auto__);
(statearr_13346[1] = 1);
return statearr_13346;
});
var state_machine__10466__auto____1 = (function (state_13340){while(true){
var ret_value__10467__auto__ = (function (){try{while(true){
var result__10468__auto__ = switch__10465__auto__.call(null,state_13340);if(cljs.core.keyword_identical_QMARK_.call(null,result__10468__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10468__auto__;
}
break;
}
}catch (e13347){if((e13347 instanceof Object))
{var ex__10469__auto__ = e13347;var statearr_13348_13371 = state_13340;(statearr_13348_13371[5] = ex__10469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13340);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10467__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13372 = state_13340;
state_13340 = G__13372;
continue;
}
} else
{return ret_value__10467__auto__;
}
break;
}
});
state_machine__10466__auto__ = function(state_13340){
switch(arguments.length){
case 0:
return state_machine__10466__auto____0.call(this);
case 1:
return state_machine__10466__auto____1.call(this,state_13340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10466__auto____0;
state_machine__10466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10466__auto____1;
return state_machine__10466__auto__;
})()
;})(switch__10465__auto__,c__10530__auto__,map__13329,map__13329__$1,opts,on_cssload))
})();var state__10532__auto__ = (function (){var statearr_13349 = f__10531__auto__.call(null);(statearr_13349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10530__auto__);
return statearr_13349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10532__auto__);
});})(c__10530__auto__,map__13329,map__13329__$1,opts,on_cssload))
);
return c__10530__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",3979112649)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__13373){var map__13378 = p__13373;var map__13378__$1 = ((cljs.core.seq_QMARK_.call(null,map__13378))?cljs.core.apply.call(null,cljs.core.hash_map,map__13378):map__13378);var opts = map__13378__$1;var on_compile_fail = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160));var jsload_callback = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989));var websocket_url = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131));var retry_count = cljs.core.get.call(null,map__13378__$1,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212));console.log("%cFigwheel: trying to open cljs reload socket",figwheel.client.log_style);
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__13379 = cljs.core._EQ_;var expr__13380 = new cljs.core.Keyword(null,"msg-name","msg-name",3979112649).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__13379.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",2807270608),expr__13380)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13379.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",1058553478),expr__13380)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__13379.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",630802569),expr__13380)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.log("%cFigwheel: socket connection established",figwheel.client.log_style);
});})(socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > 0))
{return window.setTimeout(((function (socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),(retry_count - 1)));
});})(socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,2000);
} else
{return null;
}
});})(socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__13378,map__13378__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj13385 = {"detail":url};return obj13385;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"class","class",1108647146)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",1108338651).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__13386){var map__13388 = p__13386;var map__13388__$1 = ((cljs.core.seq_QMARK_.call(null,map__13388))?cljs.core.apply.call(null,cljs.core.hash_map,map__13388):map__13388);var class$ = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"class","class",1108647146));var message = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"message","message",1968829305));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__13389){var map__13395 = p__13389;var map__13395__$1 = ((cljs.core.seq_QMARK_.call(null,map__13395))?cljs.core.apply.call(null,cljs.core.hash_map,map__13395):map__13395);var ed = map__13395__$1;var exception_data = cljs.core.get.call(null,map__13395__$1,new cljs.core.Keyword(null,"exception-data","exception-data",922291674));var formatted_exception = cljs.core.get.call(null,map__13395__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",1408867312));console.log("%cFigwheel: Compile Exception",figwheel.client.log_style);
var seq__13396_13400 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__13397_13401 = null;var count__13398_13402 = 0;var i__13399_13403 = 0;while(true){
if((i__13399_13403 < count__13398_13402))
{var msg_13404 = cljs.core._nth.call(null,chunk__13397_13401,i__13399_13403);console.log(msg_13404);
{
var G__13405 = seq__13396_13400;
var G__13406 = chunk__13397_13401;
var G__13407 = count__13398_13402;
var G__13408 = (i__13399_13403 + 1);
seq__13396_13400 = G__13405;
chunk__13397_13401 = G__13406;
count__13398_13402 = G__13407;
i__13399_13403 = G__13408;
continue;
}
} else
{var temp__4126__auto___13409 = cljs.core.seq.call(null,seq__13396_13400);if(temp__4126__auto___13409)
{var seq__13396_13410__$1 = temp__4126__auto___13409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13396_13410__$1))
{var c__8685__auto___13411 = cljs.core.chunk_first.call(null,seq__13396_13410__$1);{
var G__13412 = cljs.core.chunk_rest.call(null,seq__13396_13410__$1);
var G__13413 = c__8685__auto___13411;
var G__13414 = cljs.core.count.call(null,c__8685__auto___13411);
var G__13415 = 0;
seq__13396_13400 = G__13412;
chunk__13397_13401 = G__13413;
count__13398_13402 = G__13414;
i__13399_13403 = G__13415;
continue;
}
} else
{var msg_13416 = cljs.core.first.call(null,seq__13396_13410__$1);console.log(msg_13416);
{
var G__13417 = cljs.core.next.call(null,seq__13396_13410__$1);
var G__13418 = null;
var G__13419 = 0;
var G__13420 = 0;
seq__13396_13400 = G__13417;
chunk__13397_13401 = G__13418;
count__13398_13402 = G__13419;
i__13399_13403 = G__13420;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.log("%cFigwheel: loading files",figwheel.client.log_style);
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.log("%cFigwheel: loaded CSS files",figwheel.client.log_style);
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",1017047278),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",2949373212),100,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",817745103),(function (){var or__7929__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__7929__auto__))
{return or__7929__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1611735789),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",3705046831),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",846779160),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",538861174),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",633671131),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__13421){var map__13423 = p__13421;var map__13423__$1 = ((cljs.core.seq_QMARK_.call(null,map__13423))?cljs.core.apply.call(null,cljs.core.hash_map,map__13423):map__13423);var opts = map__13423__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__13421 = null;if (arguments.length > 0) {
  p__13421 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__13421);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__13424){
var p__13421 = cljs.core.seq(arglist__13424);
return watch_and_reload__delegate(p__13421);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map