goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36053,res){
var map__36054 = p__36053;
var map__36054__$1 = cljs.core.__destructure_map(map__36054);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36054__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36054__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__36056 = res;
var G__36056__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36056,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__36056);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36056__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__36056__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__36062 = arguments.length;
switch (G__36062) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__36066,msg,handlers,timeout_after_ms){
var map__36067 = p__36066;
var map__36067__$1 = cljs.core.__destructure_map(map__36067);
var runtime = map__36067__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___36246 = arguments.length;
var i__5767__auto___36247 = (0);
while(true){
if((i__5767__auto___36247 < len__5766__auto___36246)){
args__5772__auto__.push((arguments[i__5767__auto___36247]));

var G__36248 = (i__5767__auto___36247 + (1));
i__5767__auto___36247 = G__36248;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__36088,ev,args){
var map__36090 = p__36088;
var map__36090__$1 = cljs.core.__destructure_map(map__36090);
var runtime = map__36090__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36090__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__36107 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36110 = null;
var count__36111 = (0);
var i__36112 = (0);
while(true){
if((i__36112 < count__36111)){
var ext = chunk__36110.cljs$core$IIndexed$_nth$arity$2(null,i__36112);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36254 = seq__36107;
var G__36255 = chunk__36110;
var G__36256 = count__36111;
var G__36257 = (i__36112 + (1));
seq__36107 = G__36254;
chunk__36110 = G__36255;
count__36111 = G__36256;
i__36112 = G__36257;
continue;
} else {
var G__36258 = seq__36107;
var G__36259 = chunk__36110;
var G__36260 = count__36111;
var G__36261 = (i__36112 + (1));
seq__36107 = G__36258;
chunk__36110 = G__36259;
count__36111 = G__36260;
i__36112 = G__36261;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36107);
if(temp__5804__auto__){
var seq__36107__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36107__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36107__$1);
var G__36262 = cljs.core.chunk_rest(seq__36107__$1);
var G__36263 = c__5565__auto__;
var G__36264 = cljs.core.count(c__5565__auto__);
var G__36265 = (0);
seq__36107 = G__36262;
chunk__36110 = G__36263;
count__36111 = G__36264;
i__36112 = G__36265;
continue;
} else {
var ext = cljs.core.first(seq__36107__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36267 = cljs.core.next(seq__36107__$1);
var G__36268 = null;
var G__36269 = (0);
var G__36270 = (0);
seq__36107 = G__36267;
chunk__36110 = G__36268;
count__36111 = G__36269;
i__36112 = G__36270;
continue;
} else {
var G__36271 = cljs.core.next(seq__36107__$1);
var G__36272 = null;
var G__36273 = (0);
var G__36274 = (0);
seq__36107 = G__36271;
chunk__36110 = G__36272;
count__36111 = G__36273;
i__36112 = G__36274;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq36072){
var G__36073 = cljs.core.first(seq36072);
var seq36072__$1 = cljs.core.next(seq36072);
var G__36074 = cljs.core.first(seq36072__$1);
var seq36072__$2 = cljs.core.next(seq36072__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36073,G__36074,seq36072__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__36149,p__36150){
var map__36151 = p__36149;
var map__36151__$1 = cljs.core.__destructure_map(map__36151);
var runtime = map__36151__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36152 = p__36150;
var map__36152__$1 = cljs.core.__destructure_map(map__36152);
var msg = map__36152__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36152__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__36153 = cljs.core.deref(state_ref);
var map__36153__$1 = cljs.core.__destructure_map(map__36153);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36153__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36153__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__36158){
var map__36160 = p__36158;
var map__36160__$1 = cljs.core.__destructure_map(map__36160);
var runtime = map__36160__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36160__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__36163,msg){
var map__36170 = p__36163;
var map__36170__$1 = cljs.core.__destructure_map(map__36170);
var runtime = map__36170__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36170__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__36177,key,p__36178){
var map__36179 = p__36177;
var map__36179__$1 = cljs.core.__destructure_map(map__36179);
var state = map__36179__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36179__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__36180 = p__36178;
var map__36180__$1 = cljs.core.__destructure_map(map__36180);
var spec = map__36180__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36180__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__36196,key,spec){
var map__36197 = p__36196;
var map__36197__$1 = cljs.core.__destructure_map(map__36197);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36197__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__36199_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__36199_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__36200_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__36200_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__36201_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__36201_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__36202_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__36202_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__36203_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__36203_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__36206,key){
var map__36207 = p__36206;
var map__36207__$1 = cljs.core.__destructure_map(map__36207);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36207__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__36209,msg){
var map__36210 = p__36209;
var map__36210__$1 = cljs.core.__destructure_map(map__36210);
var runtime = map__36210__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36218,p__36219){
var map__36220 = p__36218;
var map__36220__$1 = cljs.core.__destructure_map(map__36220);
var runtime = map__36220__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36220__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36221 = p__36219;
var map__36221__$1 = cljs.core.__destructure_map(map__36221);
var msg = map__36221__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36221__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36221__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__36231 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36233 = null;
var count__36234 = (0);
var i__36235 = (0);
while(true){
if((i__36235 < count__36234)){
var map__36242 = chunk__36233.cljs$core$IIndexed$_nth$arity$2(null,i__36235);
var map__36242__$1 = cljs.core.__destructure_map(map__36242);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36242__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36311 = seq__36231;
var G__36312 = chunk__36233;
var G__36313 = count__36234;
var G__36314 = (i__36235 + (1));
seq__36231 = G__36311;
chunk__36233 = G__36312;
count__36234 = G__36313;
i__36235 = G__36314;
continue;
} else {
var G__36315 = seq__36231;
var G__36316 = chunk__36233;
var G__36317 = count__36234;
var G__36318 = (i__36235 + (1));
seq__36231 = G__36315;
chunk__36233 = G__36316;
count__36234 = G__36317;
i__36235 = G__36318;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36231);
if(temp__5804__auto__){
var seq__36231__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36231__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36231__$1);
var G__36320 = cljs.core.chunk_rest(seq__36231__$1);
var G__36321 = c__5565__auto__;
var G__36322 = cljs.core.count(c__5565__auto__);
var G__36323 = (0);
seq__36231 = G__36320;
chunk__36233 = G__36321;
count__36234 = G__36322;
i__36235 = G__36323;
continue;
} else {
var map__36243 = cljs.core.first(seq__36231__$1);
var map__36243__$1 = cljs.core.__destructure_map(map__36243);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36243__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36327 = cljs.core.next(seq__36231__$1);
var G__36328 = null;
var G__36329 = (0);
var G__36330 = (0);
seq__36231 = G__36327;
chunk__36233 = G__36328;
count__36234 = G__36329;
i__36235 = G__36330;
continue;
} else {
var G__36331 = cljs.core.next(seq__36231__$1);
var G__36332 = null;
var G__36333 = (0);
var G__36334 = (0);
seq__36231 = G__36331;
chunk__36233 = G__36332;
count__36234 = G__36333;
i__36235 = G__36334;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
