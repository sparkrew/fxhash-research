goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___41230 = arguments.length;
var i__5767__auto___41231 = (0);
while(true){
if((i__5767__auto___41231 < len__5766__auto___41230)){
args__5772__auto__.push((arguments[i__5767__auto___41231]));

var G__41232 = (i__5767__auto___41231 + (1));
i__5767__auto___41231 = G__41232;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40731){
var G__40732 = cljs.core.first(seq40731);
var seq40731__$1 = cljs.core.next(seq40731);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40732,seq40731__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40737 = cljs.core.seq(sources);
var chunk__40738 = null;
var count__40739 = (0);
var i__40740 = (0);
while(true){
if((i__40740 < count__40739)){
var map__40752 = chunk__40738.cljs$core$IIndexed$_nth$arity$2(null,i__40740);
var map__40752__$1 = cljs.core.__destructure_map(map__40752);
var src = map__40752__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40752__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40752__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40752__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40752__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40753){var e_41234 = e40753;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41234);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41234.message)].join('')));
}

var G__41235 = seq__40737;
var G__41236 = chunk__40738;
var G__41237 = count__40739;
var G__41238 = (i__40740 + (1));
seq__40737 = G__41235;
chunk__40738 = G__41236;
count__40739 = G__41237;
i__40740 = G__41238;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40737);
if(temp__5804__auto__){
var seq__40737__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40737__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40737__$1);
var G__41239 = cljs.core.chunk_rest(seq__40737__$1);
var G__41240 = c__5565__auto__;
var G__41241 = cljs.core.count(c__5565__auto__);
var G__41242 = (0);
seq__40737 = G__41239;
chunk__40738 = G__41240;
count__40739 = G__41241;
i__40740 = G__41242;
continue;
} else {
var map__40754 = cljs.core.first(seq__40737__$1);
var map__40754__$1 = cljs.core.__destructure_map(map__40754);
var src = map__40754__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40754__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40754__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40754__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40754__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40755){var e_41243 = e40755;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41243);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41243.message)].join('')));
}

var G__41244 = cljs.core.next(seq__40737__$1);
var G__41245 = null;
var G__41246 = (0);
var G__41247 = (0);
seq__40737 = G__41244;
chunk__40738 = G__41245;
count__40739 = G__41246;
i__40740 = G__41247;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40758 = cljs.core.seq(js_requires);
var chunk__40759 = null;
var count__40760 = (0);
var i__40761 = (0);
while(true){
if((i__40761 < count__40760)){
var js_ns = chunk__40759.cljs$core$IIndexed$_nth$arity$2(null,i__40761);
var require_str_41251 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41251);


var G__41252 = seq__40758;
var G__41253 = chunk__40759;
var G__41254 = count__40760;
var G__41255 = (i__40761 + (1));
seq__40758 = G__41252;
chunk__40759 = G__41253;
count__40760 = G__41254;
i__40761 = G__41255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40758);
if(temp__5804__auto__){
var seq__40758__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40758__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40758__$1);
var G__41256 = cljs.core.chunk_rest(seq__40758__$1);
var G__41257 = c__5565__auto__;
var G__41258 = cljs.core.count(c__5565__auto__);
var G__41259 = (0);
seq__40758 = G__41256;
chunk__40759 = G__41257;
count__40760 = G__41258;
i__40761 = G__41259;
continue;
} else {
var js_ns = cljs.core.first(seq__40758__$1);
var require_str_41260 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41260);


var G__41263 = cljs.core.next(seq__40758__$1);
var G__41264 = null;
var G__41265 = (0);
var G__41266 = (0);
seq__40758 = G__41263;
chunk__40759 = G__41264;
count__40760 = G__41265;
i__40761 = G__41266;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40767){
var map__40768 = p__40767;
var map__40768__$1 = cljs.core.__destructure_map(map__40768);
var msg = map__40768__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40768__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40768__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40769(s__40770){
return (new cljs.core.LazySeq(null,(function (){
var s__40770__$1 = s__40770;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40770__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__40775 = cljs.core.first(xs__6360__auto__);
var map__40775__$1 = cljs.core.__destructure_map(map__40775);
var src = map__40775__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40775__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40775__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__40770__$1,map__40775,map__40775__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40768,map__40768__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40769_$_iter__40771(s__40772){
return (new cljs.core.LazySeq(null,((function (s__40770__$1,map__40775,map__40775__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40768,map__40768__$1,msg,info,reload_info){
return (function (){
var s__40772__$1 = s__40772;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__40772__$1);
if(temp__5804__auto____$1){
var s__40772__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40772__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__40772__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__40774 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__40773 = (0);
while(true){
if((i__40773 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__40773);
cljs.core.chunk_append(b__40774,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41270 = (i__40773 + (1));
i__40773 = G__41270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40774),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40769_$_iter__40771(cljs.core.chunk_rest(s__40772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40774),null);
}
} else {
var warning = cljs.core.first(s__40772__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40769_$_iter__40771(cljs.core.rest(s__40772__$2)));
}
} else {
return null;
}
break;
}
});})(s__40770__$1,map__40775,map__40775__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40768,map__40768__$1,msg,info,reload_info))
,null,null));
});})(s__40770__$1,map__40775,map__40775__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40768,map__40768__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40769(cljs.core.rest(s__40770__$1)));
} else {
var G__41272 = cljs.core.rest(s__40770__$1);
s__40770__$1 = G__41272;
continue;
}
} else {
var G__41273 = cljs.core.rest(s__40770__$1);
s__40770__$1 = G__41273;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40777_41274 = cljs.core.seq(warnings);
var chunk__40778_41275 = null;
var count__40779_41276 = (0);
var i__40780_41277 = (0);
while(true){
if((i__40780_41277 < count__40779_41276)){
var map__40783_41278 = chunk__40778_41275.cljs$core$IIndexed$_nth$arity$2(null,i__40780_41277);
var map__40783_41279__$1 = cljs.core.__destructure_map(map__40783_41278);
var w_41280 = map__40783_41279__$1;
var msg_41281__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40783_41279__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40783_41279__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40783_41279__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40783_41279__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41284)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41282),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41283),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41281__$1)].join(''));


var G__41290 = seq__40777_41274;
var G__41291 = chunk__40778_41275;
var G__41292 = count__40779_41276;
var G__41293 = (i__40780_41277 + (1));
seq__40777_41274 = G__41290;
chunk__40778_41275 = G__41291;
count__40779_41276 = G__41292;
i__40780_41277 = G__41293;
continue;
} else {
var temp__5804__auto___41294 = cljs.core.seq(seq__40777_41274);
if(temp__5804__auto___41294){
var seq__40777_41295__$1 = temp__5804__auto___41294;
if(cljs.core.chunked_seq_QMARK_(seq__40777_41295__$1)){
var c__5565__auto___41296 = cljs.core.chunk_first(seq__40777_41295__$1);
var G__41297 = cljs.core.chunk_rest(seq__40777_41295__$1);
var G__41298 = c__5565__auto___41296;
var G__41299 = cljs.core.count(c__5565__auto___41296);
var G__41300 = (0);
seq__40777_41274 = G__41297;
chunk__40778_41275 = G__41298;
count__40779_41276 = G__41299;
i__40780_41277 = G__41300;
continue;
} else {
var map__40784_41302 = cljs.core.first(seq__40777_41295__$1);
var map__40784_41303__$1 = cljs.core.__destructure_map(map__40784_41302);
var w_41304 = map__40784_41303__$1;
var msg_41305__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40784_41303__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40784_41303__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40784_41303__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40784_41303__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41308)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41306),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41307),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41305__$1)].join(''));


var G__41309 = cljs.core.next(seq__40777_41295__$1);
var G__41310 = null;
var G__41311 = (0);
var G__41312 = (0);
seq__40777_41274 = G__41309;
chunk__40778_41275 = G__41310;
count__40779_41276 = G__41311;
i__40780_41277 = G__41312;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40766_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40766_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40785){
var map__40786 = p__40785;
var map__40786__$1 = cljs.core.__destructure_map(map__40786);
var msg = map__40786__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40786__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40786__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40787 = cljs.core.seq(updates);
var chunk__40789 = null;
var count__40790 = (0);
var i__40791 = (0);
while(true){
if((i__40791 < count__40790)){
var path = chunk__40789.cljs$core$IIndexed$_nth$arity$2(null,i__40791);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40991_41315 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40996_41316 = null;
var count__40997_41317 = (0);
var i__40998_41318 = (0);
while(true){
if((i__40998_41318 < count__40997_41317)){
var node_41320 = chunk__40996_41316.cljs$core$IIndexed$_nth$arity$2(null,i__40998_41318);
if(cljs.core.not(node_41320.shadow$old)){
var path_match_41321 = shadow.cljs.devtools.client.browser.match_paths(node_41320.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41321)){
var new_link_41322 = (function (){var G__41040 = node_41320.cloneNode(true);
G__41040.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41321),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41040;
})();
(node_41320.shadow$old = true);

(new_link_41322.onload = ((function (seq__40991_41315,chunk__40996_41316,count__40997_41317,i__40998_41318,seq__40787,chunk__40789,count__40790,i__40791,new_link_41322,path_match_41321,node_41320,path,map__40786,map__40786__$1,msg,updates,reload_info){
return (function (e){
var seq__41045_41323 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41047_41324 = null;
var count__41048_41325 = (0);
var i__41049_41326 = (0);
while(true){
if((i__41049_41326 < count__41048_41325)){
var map__41053_41327 = chunk__41047_41324.cljs$core$IIndexed$_nth$arity$2(null,i__41049_41326);
var map__41053_41328__$1 = cljs.core.__destructure_map(map__41053_41327);
var task_41329 = map__41053_41328__$1;
var fn_str_41330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41053_41328__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41053_41328__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41332 = goog.getObjectByName(fn_str_41330,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41331)].join(''));

(fn_obj_41332.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41332.cljs$core$IFn$_invoke$arity$2(path,new_link_41322) : fn_obj_41332.call(null,path,new_link_41322));


var G__41333 = seq__41045_41323;
var G__41334 = chunk__41047_41324;
var G__41335 = count__41048_41325;
var G__41336 = (i__41049_41326 + (1));
seq__41045_41323 = G__41333;
chunk__41047_41324 = G__41334;
count__41048_41325 = G__41335;
i__41049_41326 = G__41336;
continue;
} else {
var temp__5804__auto___41337 = cljs.core.seq(seq__41045_41323);
if(temp__5804__auto___41337){
var seq__41045_41338__$1 = temp__5804__auto___41337;
if(cljs.core.chunked_seq_QMARK_(seq__41045_41338__$1)){
var c__5565__auto___41339 = cljs.core.chunk_first(seq__41045_41338__$1);
var G__41340 = cljs.core.chunk_rest(seq__41045_41338__$1);
var G__41341 = c__5565__auto___41339;
var G__41342 = cljs.core.count(c__5565__auto___41339);
var G__41343 = (0);
seq__41045_41323 = G__41340;
chunk__41047_41324 = G__41341;
count__41048_41325 = G__41342;
i__41049_41326 = G__41343;
continue;
} else {
var map__41066_41344 = cljs.core.first(seq__41045_41338__$1);
var map__41066_41345__$1 = cljs.core.__destructure_map(map__41066_41344);
var task_41346 = map__41066_41345__$1;
var fn_str_41347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41066_41345__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41066_41345__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41349 = goog.getObjectByName(fn_str_41347,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41348)].join(''));

(fn_obj_41349.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41349.cljs$core$IFn$_invoke$arity$2(path,new_link_41322) : fn_obj_41349.call(null,path,new_link_41322));


var G__41350 = cljs.core.next(seq__41045_41338__$1);
var G__41351 = null;
var G__41352 = (0);
var G__41353 = (0);
seq__41045_41323 = G__41350;
chunk__41047_41324 = G__41351;
count__41048_41325 = G__41352;
i__41049_41326 = G__41353;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41320);
});})(seq__40991_41315,chunk__40996_41316,count__40997_41317,i__40998_41318,seq__40787,chunk__40789,count__40790,i__40791,new_link_41322,path_match_41321,node_41320,path,map__40786,map__40786__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41321], 0));

goog.dom.insertSiblingAfter(new_link_41322,node_41320);


var G__41355 = seq__40991_41315;
var G__41356 = chunk__40996_41316;
var G__41357 = count__40997_41317;
var G__41358 = (i__40998_41318 + (1));
seq__40991_41315 = G__41355;
chunk__40996_41316 = G__41356;
count__40997_41317 = G__41357;
i__40998_41318 = G__41358;
continue;
} else {
var G__41359 = seq__40991_41315;
var G__41360 = chunk__40996_41316;
var G__41361 = count__40997_41317;
var G__41362 = (i__40998_41318 + (1));
seq__40991_41315 = G__41359;
chunk__40996_41316 = G__41360;
count__40997_41317 = G__41361;
i__40998_41318 = G__41362;
continue;
}
} else {
var G__41363 = seq__40991_41315;
var G__41364 = chunk__40996_41316;
var G__41365 = count__40997_41317;
var G__41366 = (i__40998_41318 + (1));
seq__40991_41315 = G__41363;
chunk__40996_41316 = G__41364;
count__40997_41317 = G__41365;
i__40998_41318 = G__41366;
continue;
}
} else {
var temp__5804__auto___41367 = cljs.core.seq(seq__40991_41315);
if(temp__5804__auto___41367){
var seq__40991_41368__$1 = temp__5804__auto___41367;
if(cljs.core.chunked_seq_QMARK_(seq__40991_41368__$1)){
var c__5565__auto___41369 = cljs.core.chunk_first(seq__40991_41368__$1);
var G__41370 = cljs.core.chunk_rest(seq__40991_41368__$1);
var G__41371 = c__5565__auto___41369;
var G__41372 = cljs.core.count(c__5565__auto___41369);
var G__41373 = (0);
seq__40991_41315 = G__41370;
chunk__40996_41316 = G__41371;
count__40997_41317 = G__41372;
i__40998_41318 = G__41373;
continue;
} else {
var node_41374 = cljs.core.first(seq__40991_41368__$1);
if(cljs.core.not(node_41374.shadow$old)){
var path_match_41375 = shadow.cljs.devtools.client.browser.match_paths(node_41374.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41375)){
var new_link_41376 = (function (){var G__41067 = node_41374.cloneNode(true);
G__41067.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41375),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41067;
})();
(node_41374.shadow$old = true);

(new_link_41376.onload = ((function (seq__40991_41315,chunk__40996_41316,count__40997_41317,i__40998_41318,seq__40787,chunk__40789,count__40790,i__40791,new_link_41376,path_match_41375,node_41374,seq__40991_41368__$1,temp__5804__auto___41367,path,map__40786,map__40786__$1,msg,updates,reload_info){
return (function (e){
var seq__41069_41377 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41071_41378 = null;
var count__41072_41379 = (0);
var i__41073_41380 = (0);
while(true){
if((i__41073_41380 < count__41072_41379)){
var map__41077_41381 = chunk__41071_41378.cljs$core$IIndexed$_nth$arity$2(null,i__41073_41380);
var map__41077_41382__$1 = cljs.core.__destructure_map(map__41077_41381);
var task_41383 = map__41077_41382__$1;
var fn_str_41384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41077_41382__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41077_41382__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41386 = goog.getObjectByName(fn_str_41384,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41385)].join(''));

(fn_obj_41386.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41386.cljs$core$IFn$_invoke$arity$2(path,new_link_41376) : fn_obj_41386.call(null,path,new_link_41376));


var G__41387 = seq__41069_41377;
var G__41388 = chunk__41071_41378;
var G__41389 = count__41072_41379;
var G__41390 = (i__41073_41380 + (1));
seq__41069_41377 = G__41387;
chunk__41071_41378 = G__41388;
count__41072_41379 = G__41389;
i__41073_41380 = G__41390;
continue;
} else {
var temp__5804__auto___41391__$1 = cljs.core.seq(seq__41069_41377);
if(temp__5804__auto___41391__$1){
var seq__41069_41392__$1 = temp__5804__auto___41391__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41069_41392__$1)){
var c__5565__auto___41393 = cljs.core.chunk_first(seq__41069_41392__$1);
var G__41398 = cljs.core.chunk_rest(seq__41069_41392__$1);
var G__41399 = c__5565__auto___41393;
var G__41400 = cljs.core.count(c__5565__auto___41393);
var G__41401 = (0);
seq__41069_41377 = G__41398;
chunk__41071_41378 = G__41399;
count__41072_41379 = G__41400;
i__41073_41380 = G__41401;
continue;
} else {
var map__41078_41402 = cljs.core.first(seq__41069_41392__$1);
var map__41078_41403__$1 = cljs.core.__destructure_map(map__41078_41402);
var task_41404 = map__41078_41403__$1;
var fn_str_41405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41078_41403__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41078_41403__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41413 = goog.getObjectByName(fn_str_41405,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41406)].join(''));

(fn_obj_41413.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41413.cljs$core$IFn$_invoke$arity$2(path,new_link_41376) : fn_obj_41413.call(null,path,new_link_41376));


var G__41414 = cljs.core.next(seq__41069_41392__$1);
var G__41415 = null;
var G__41416 = (0);
var G__41417 = (0);
seq__41069_41377 = G__41414;
chunk__41071_41378 = G__41415;
count__41072_41379 = G__41416;
i__41073_41380 = G__41417;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41374);
});})(seq__40991_41315,chunk__40996_41316,count__40997_41317,i__40998_41318,seq__40787,chunk__40789,count__40790,i__40791,new_link_41376,path_match_41375,node_41374,seq__40991_41368__$1,temp__5804__auto___41367,path,map__40786,map__40786__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41375], 0));

goog.dom.insertSiblingAfter(new_link_41376,node_41374);


var G__41418 = cljs.core.next(seq__40991_41368__$1);
var G__41419 = null;
var G__41420 = (0);
var G__41421 = (0);
seq__40991_41315 = G__41418;
chunk__40996_41316 = G__41419;
count__40997_41317 = G__41420;
i__40998_41318 = G__41421;
continue;
} else {
var G__41422 = cljs.core.next(seq__40991_41368__$1);
var G__41423 = null;
var G__41424 = (0);
var G__41425 = (0);
seq__40991_41315 = G__41422;
chunk__40996_41316 = G__41423;
count__40997_41317 = G__41424;
i__40998_41318 = G__41425;
continue;
}
} else {
var G__41426 = cljs.core.next(seq__40991_41368__$1);
var G__41427 = null;
var G__41428 = (0);
var G__41429 = (0);
seq__40991_41315 = G__41426;
chunk__40996_41316 = G__41427;
count__40997_41317 = G__41428;
i__40998_41318 = G__41429;
continue;
}
}
} else {
}
}
break;
}


var G__41430 = seq__40787;
var G__41431 = chunk__40789;
var G__41432 = count__40790;
var G__41433 = (i__40791 + (1));
seq__40787 = G__41430;
chunk__40789 = G__41431;
count__40790 = G__41432;
i__40791 = G__41433;
continue;
} else {
var G__41434 = seq__40787;
var G__41435 = chunk__40789;
var G__41436 = count__40790;
var G__41437 = (i__40791 + (1));
seq__40787 = G__41434;
chunk__40789 = G__41435;
count__40790 = G__41436;
i__40791 = G__41437;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40787);
if(temp__5804__auto__){
var seq__40787__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40787__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40787__$1);
var G__41438 = cljs.core.chunk_rest(seq__40787__$1);
var G__41439 = c__5565__auto__;
var G__41440 = cljs.core.count(c__5565__auto__);
var G__41441 = (0);
seq__40787 = G__41438;
chunk__40789 = G__41439;
count__40790 = G__41440;
i__40791 = G__41441;
continue;
} else {
var path = cljs.core.first(seq__40787__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41080_41445 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41084_41446 = null;
var count__41085_41447 = (0);
var i__41086_41448 = (0);
while(true){
if((i__41086_41448 < count__41085_41447)){
var node_41452 = chunk__41084_41446.cljs$core$IIndexed$_nth$arity$2(null,i__41086_41448);
if(cljs.core.not(node_41452.shadow$old)){
var path_match_41453 = shadow.cljs.devtools.client.browser.match_paths(node_41452.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41453)){
var new_link_41454 = (function (){var G__41130 = node_41452.cloneNode(true);
G__41130.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41453),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41130;
})();
(node_41452.shadow$old = true);

(new_link_41454.onload = ((function (seq__41080_41445,chunk__41084_41446,count__41085_41447,i__41086_41448,seq__40787,chunk__40789,count__40790,i__40791,new_link_41454,path_match_41453,node_41452,path,seq__40787__$1,temp__5804__auto__,map__40786,map__40786__$1,msg,updates,reload_info){
return (function (e){
var seq__41131_41455 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41133_41456 = null;
var count__41134_41457 = (0);
var i__41135_41458 = (0);
while(true){
if((i__41135_41458 < count__41134_41457)){
var map__41145_41462 = chunk__41133_41456.cljs$core$IIndexed$_nth$arity$2(null,i__41135_41458);
var map__41145_41463__$1 = cljs.core.__destructure_map(map__41145_41462);
var task_41464 = map__41145_41463__$1;
var fn_str_41465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41145_41463__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41145_41463__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41467 = goog.getObjectByName(fn_str_41465,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41466)].join(''));

(fn_obj_41467.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41467.cljs$core$IFn$_invoke$arity$2(path,new_link_41454) : fn_obj_41467.call(null,path,new_link_41454));


var G__41468 = seq__41131_41455;
var G__41469 = chunk__41133_41456;
var G__41470 = count__41134_41457;
var G__41471 = (i__41135_41458 + (1));
seq__41131_41455 = G__41468;
chunk__41133_41456 = G__41469;
count__41134_41457 = G__41470;
i__41135_41458 = G__41471;
continue;
} else {
var temp__5804__auto___41472__$1 = cljs.core.seq(seq__41131_41455);
if(temp__5804__auto___41472__$1){
var seq__41131_41473__$1 = temp__5804__auto___41472__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41131_41473__$1)){
var c__5565__auto___41474 = cljs.core.chunk_first(seq__41131_41473__$1);
var G__41475 = cljs.core.chunk_rest(seq__41131_41473__$1);
var G__41476 = c__5565__auto___41474;
var G__41477 = cljs.core.count(c__5565__auto___41474);
var G__41478 = (0);
seq__41131_41455 = G__41475;
chunk__41133_41456 = G__41476;
count__41134_41457 = G__41477;
i__41135_41458 = G__41478;
continue;
} else {
var map__41150_41482 = cljs.core.first(seq__41131_41473__$1);
var map__41150_41483__$1 = cljs.core.__destructure_map(map__41150_41482);
var task_41484 = map__41150_41483__$1;
var fn_str_41485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41150_41483__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41150_41483__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41490 = goog.getObjectByName(fn_str_41485,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41486)].join(''));

(fn_obj_41490.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41490.cljs$core$IFn$_invoke$arity$2(path,new_link_41454) : fn_obj_41490.call(null,path,new_link_41454));


var G__41491 = cljs.core.next(seq__41131_41473__$1);
var G__41492 = null;
var G__41493 = (0);
var G__41494 = (0);
seq__41131_41455 = G__41491;
chunk__41133_41456 = G__41492;
count__41134_41457 = G__41493;
i__41135_41458 = G__41494;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41452);
});})(seq__41080_41445,chunk__41084_41446,count__41085_41447,i__41086_41448,seq__40787,chunk__40789,count__40790,i__40791,new_link_41454,path_match_41453,node_41452,path,seq__40787__$1,temp__5804__auto__,map__40786,map__40786__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41453], 0));

goog.dom.insertSiblingAfter(new_link_41454,node_41452);


var G__41495 = seq__41080_41445;
var G__41496 = chunk__41084_41446;
var G__41497 = count__41085_41447;
var G__41498 = (i__41086_41448 + (1));
seq__41080_41445 = G__41495;
chunk__41084_41446 = G__41496;
count__41085_41447 = G__41497;
i__41086_41448 = G__41498;
continue;
} else {
var G__41499 = seq__41080_41445;
var G__41500 = chunk__41084_41446;
var G__41501 = count__41085_41447;
var G__41502 = (i__41086_41448 + (1));
seq__41080_41445 = G__41499;
chunk__41084_41446 = G__41500;
count__41085_41447 = G__41501;
i__41086_41448 = G__41502;
continue;
}
} else {
var G__41503 = seq__41080_41445;
var G__41504 = chunk__41084_41446;
var G__41505 = count__41085_41447;
var G__41506 = (i__41086_41448 + (1));
seq__41080_41445 = G__41503;
chunk__41084_41446 = G__41504;
count__41085_41447 = G__41505;
i__41086_41448 = G__41506;
continue;
}
} else {
var temp__5804__auto___41507__$1 = cljs.core.seq(seq__41080_41445);
if(temp__5804__auto___41507__$1){
var seq__41080_41508__$1 = temp__5804__auto___41507__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41080_41508__$1)){
var c__5565__auto___41509 = cljs.core.chunk_first(seq__41080_41508__$1);
var G__41510 = cljs.core.chunk_rest(seq__41080_41508__$1);
var G__41511 = c__5565__auto___41509;
var G__41512 = cljs.core.count(c__5565__auto___41509);
var G__41513 = (0);
seq__41080_41445 = G__41510;
chunk__41084_41446 = G__41511;
count__41085_41447 = G__41512;
i__41086_41448 = G__41513;
continue;
} else {
var node_41514 = cljs.core.first(seq__41080_41508__$1);
if(cljs.core.not(node_41514.shadow$old)){
var path_match_41518 = shadow.cljs.devtools.client.browser.match_paths(node_41514.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41518)){
var new_link_41519 = (function (){var G__41153 = node_41514.cloneNode(true);
G__41153.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41518),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41153;
})();
(node_41514.shadow$old = true);

(new_link_41519.onload = ((function (seq__41080_41445,chunk__41084_41446,count__41085_41447,i__41086_41448,seq__40787,chunk__40789,count__40790,i__40791,new_link_41519,path_match_41518,node_41514,seq__41080_41508__$1,temp__5804__auto___41507__$1,path,seq__40787__$1,temp__5804__auto__,map__40786,map__40786__$1,msg,updates,reload_info){
return (function (e){
var seq__41154_41520 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41156_41521 = null;
var count__41157_41522 = (0);
var i__41158_41523 = (0);
while(true){
if((i__41158_41523 < count__41157_41522)){
var map__41162_41525 = chunk__41156_41521.cljs$core$IIndexed$_nth$arity$2(null,i__41158_41523);
var map__41162_41526__$1 = cljs.core.__destructure_map(map__41162_41525);
var task_41527 = map__41162_41526__$1;
var fn_str_41528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41162_41526__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41162_41526__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41530 = goog.getObjectByName(fn_str_41528,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41529)].join(''));

(fn_obj_41530.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41530.cljs$core$IFn$_invoke$arity$2(path,new_link_41519) : fn_obj_41530.call(null,path,new_link_41519));


var G__41531 = seq__41154_41520;
var G__41532 = chunk__41156_41521;
var G__41533 = count__41157_41522;
var G__41534 = (i__41158_41523 + (1));
seq__41154_41520 = G__41531;
chunk__41156_41521 = G__41532;
count__41157_41522 = G__41533;
i__41158_41523 = G__41534;
continue;
} else {
var temp__5804__auto___41535__$2 = cljs.core.seq(seq__41154_41520);
if(temp__5804__auto___41535__$2){
var seq__41154_41536__$1 = temp__5804__auto___41535__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41154_41536__$1)){
var c__5565__auto___41537 = cljs.core.chunk_first(seq__41154_41536__$1);
var G__41538 = cljs.core.chunk_rest(seq__41154_41536__$1);
var G__41539 = c__5565__auto___41537;
var G__41540 = cljs.core.count(c__5565__auto___41537);
var G__41541 = (0);
seq__41154_41520 = G__41538;
chunk__41156_41521 = G__41539;
count__41157_41522 = G__41540;
i__41158_41523 = G__41541;
continue;
} else {
var map__41164_41545 = cljs.core.first(seq__41154_41536__$1);
var map__41164_41546__$1 = cljs.core.__destructure_map(map__41164_41545);
var task_41547 = map__41164_41546__$1;
var fn_str_41548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41164_41546__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41164_41546__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41550 = goog.getObjectByName(fn_str_41548,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41549)].join(''));

(fn_obj_41550.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41550.cljs$core$IFn$_invoke$arity$2(path,new_link_41519) : fn_obj_41550.call(null,path,new_link_41519));


var G__41551 = cljs.core.next(seq__41154_41536__$1);
var G__41552 = null;
var G__41553 = (0);
var G__41554 = (0);
seq__41154_41520 = G__41551;
chunk__41156_41521 = G__41552;
count__41157_41522 = G__41553;
i__41158_41523 = G__41554;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41514);
});})(seq__41080_41445,chunk__41084_41446,count__41085_41447,i__41086_41448,seq__40787,chunk__40789,count__40790,i__40791,new_link_41519,path_match_41518,node_41514,seq__41080_41508__$1,temp__5804__auto___41507__$1,path,seq__40787__$1,temp__5804__auto__,map__40786,map__40786__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41518], 0));

goog.dom.insertSiblingAfter(new_link_41519,node_41514);


var G__41555 = cljs.core.next(seq__41080_41508__$1);
var G__41556 = null;
var G__41557 = (0);
var G__41558 = (0);
seq__41080_41445 = G__41555;
chunk__41084_41446 = G__41556;
count__41085_41447 = G__41557;
i__41086_41448 = G__41558;
continue;
} else {
var G__41559 = cljs.core.next(seq__41080_41508__$1);
var G__41560 = null;
var G__41561 = (0);
var G__41562 = (0);
seq__41080_41445 = G__41559;
chunk__41084_41446 = G__41560;
count__41085_41447 = G__41561;
i__41086_41448 = G__41562;
continue;
}
} else {
var G__41563 = cljs.core.next(seq__41080_41508__$1);
var G__41564 = null;
var G__41565 = (0);
var G__41566 = (0);
seq__41080_41445 = G__41563;
chunk__41084_41446 = G__41564;
count__41085_41447 = G__41565;
i__41086_41448 = G__41566;
continue;
}
}
} else {
}
}
break;
}


var G__41571 = cljs.core.next(seq__40787__$1);
var G__41572 = null;
var G__41573 = (0);
var G__41574 = (0);
seq__40787 = G__41571;
chunk__40789 = G__41572;
count__40790 = G__41573;
i__40791 = G__41574;
continue;
} else {
var G__41575 = cljs.core.next(seq__40787__$1);
var G__41576 = null;
var G__41577 = (0);
var G__41578 = (0);
seq__40787 = G__41575;
chunk__40789 = G__41576;
count__40790 = G__41577;
i__40791 = G__41578;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__41176){
var map__41177 = p__41176;
var map__41177__$1 = cljs.core.__destructure_map(map__41177);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41177__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__41197){
var map__41198 = p__41197;
var map__41198__$1 = cljs.core.__destructure_map(map__41198);
var _ = map__41198__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41198__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41201,done,error){
var map__41202 = p__41201;
var map__41202__$1 = cljs.core.__destructure_map(map__41202);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41202__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41205,done,error){
var map__41206 = p__41205;
var map__41206__$1 = cljs.core.__destructure_map(map__41206);
var msg = map__41206__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41206__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41206__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41206__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41209){
var map__41210 = p__41209;
var map__41210__$1 = cljs.core.__destructure_map(map__41210);
var src = map__41210__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41210__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41212 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41212) : done.call(null,G__41212));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41213){
var map__41214 = p__41213;
var map__41214__$1 = cljs.core.__destructure_map(map__41214);
var msg__$1 = map__41214__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41214__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41219){var ex = e41219;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41221){
var map__41222 = p__41221;
var map__41222__$1 = cljs.core.__destructure_map(map__41222);
var env = map__41222__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41222__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41224){
var map__41225 = p__41224;
var map__41225__$1 = cljs.core.__destructure_map(map__41225);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41225__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41225__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__41226){
var map__41227 = p__41226;
var map__41227__$1 = cljs.core.__destructure_map(map__41227);
var svc = map__41227__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41227__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
