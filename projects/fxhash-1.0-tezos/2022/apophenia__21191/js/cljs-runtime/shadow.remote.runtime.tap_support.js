goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__40314,p__40315){
var map__40316 = p__40314;
var map__40316__$1 = cljs.core.__destructure_map(map__40316);
var svc = map__40316__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40316__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40316__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40316__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40317 = p__40315;
var map__40317__$1 = cljs.core.__destructure_map(map__40317);
var msg = map__40317__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40317__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40317__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40317__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40317__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__40318,p__40319){
var map__40320 = p__40318;
var map__40320__$1 = cljs.core.__destructure_map(map__40320);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40320__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__40321 = p__40319;
var map__40321__$1 = cljs.core.__destructure_map(map__40321);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40321__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__40326,p__40327){
var map__40328 = p__40326;
var map__40328__$1 = cljs.core.__destructure_map(map__40328);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40328__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40328__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__40329 = p__40327;
var map__40329__$1 = cljs.core.__destructure_map(map__40329);
var msg = map__40329__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40329__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__40333,tid){
var map__40334 = p__40333;
var map__40334__$1 = cljs.core.__destructure_map(map__40334);
var svc = map__40334__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40334__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__40343 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__40344 = null;
var count__40345 = (0);
var i__40346 = (0);
while(true){
if((i__40346 < count__40345)){
var vec__40358 = chunk__40344.cljs$core$IIndexed$_nth$arity$2(null,i__40346);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40358,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40358,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40381 = seq__40343;
var G__40382 = chunk__40344;
var G__40383 = count__40345;
var G__40384 = (i__40346 + (1));
seq__40343 = G__40381;
chunk__40344 = G__40382;
count__40345 = G__40383;
i__40346 = G__40384;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40343);
if(temp__5804__auto__){
var seq__40343__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40343__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40343__$1);
var G__40385 = cljs.core.chunk_rest(seq__40343__$1);
var G__40386 = c__5565__auto__;
var G__40387 = cljs.core.count(c__5565__auto__);
var G__40388 = (0);
seq__40343 = G__40385;
chunk__40344 = G__40386;
count__40345 = G__40387;
i__40346 = G__40388;
continue;
} else {
var vec__40363 = cljs.core.first(seq__40343__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40363,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40363,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__40389 = cljs.core.next(seq__40343__$1);
var G__40390 = null;
var G__40391 = (0);
var G__40392 = (0);
seq__40343 = G__40389;
chunk__40344 = G__40390;
count__40345 = G__40391;
i__40346 = G__40392;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__40337_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__40337_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__40338_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__40338_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__40339_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__40339_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__40340_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__40340_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__40371){
var map__40372 = p__40371;
var map__40372__$1 = cljs.core.__destructure_map(map__40372);
var svc = map__40372__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40372__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40372__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
