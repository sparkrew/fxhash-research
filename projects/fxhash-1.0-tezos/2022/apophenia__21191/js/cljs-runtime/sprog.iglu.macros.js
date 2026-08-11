goog.provide('sprog.iglu.macros');
sprog.iglu.macros.apply_macros = (function sprog$iglu$macros$apply_macros(macro_map,expression){
return clojure.walk.prewalk((function (subexp){
if(cljs.core.list_QMARK_(subexp)){
var macro_fn = (function (){var G__30985 = cljs.core.first(subexp);
return (macro_map.cljs$core$IFn$_invoke$arity$1 ? macro_map.cljs$core$IFn$_invoke$arity$1(G__30985) : macro_map.call(null,G__30985));
})();
if(cljs.core.truth_(macro_fn)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(macro_fn,cljs.core.rest(subexp));
} else {
return subexp;
}
} else {
return subexp;
}
}),expression);
});
sprog.iglu.macros.thread_first = (function sprog$iglu$macros$thread_first(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31015 = arguments.length;
var i__5767__auto___31016 = (0);
while(true){
if((i__5767__auto___31016 < len__5766__auto___31015)){
args__5772__auto__.push((arguments[i__5767__auto___31016]));

var G__31017 = (i__5767__auto___31016 + (1));
i__5767__auto___31016 = G__31017;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.macros.thread_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.macros.thread_first.cljs$core$IFn$_invoke$arity$variadic = (function (x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first(form),(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)),cljs.core.next(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__31019 = threaded;
var G__31020 = cljs.core.next(forms__$1);
x__$1 = G__31019;
forms__$1 = G__31020;
continue;
} else {
return x__$1;
}
break;
}
}));

(sprog.iglu.macros.thread_first.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.macros.thread_first.cljs$lang$applyTo = (function (seq30986){
var G__30989 = cljs.core.first(seq30986);
var seq30986__$1 = cljs.core.next(seq30986);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30989,seq30986__$1);
}));

sprog.iglu.macros.thread_last = (function sprog$iglu$macros$thread_last(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31025 = arguments.length;
var i__5767__auto___31026 = (0);
while(true){
if((i__5767__auto___31026 < len__5766__auto___31025)){
args__5772__auto__.push((arguments[i__5767__auto___31026]));

var G__31027 = (i__5767__auto___31026 + (1));
i__5767__auto___31026 = G__31027;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.macros.thread_last.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.macros.thread_last.cljs$core$IFn$_invoke$arity$variadic = (function (x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(form),null,(1),null)),cljs.core.next(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x__$1,null,(1),null))], 0)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__31033 = threaded;
var G__31034 = cljs.core.next(forms__$1);
x__$1 = G__31033;
forms__$1 = G__31034;
continue;
} else {
return x__$1;
}
break;
}
}));

(sprog.iglu.macros.thread_last.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.macros.thread_last.cljs$lang$applyTo = (function (seq31004){
var G__31005 = cljs.core.first(seq31004);
var seq31004__$1 = cljs.core.next(seq31004);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31005,seq31004__$1);
}));

sprog.iglu.macros.default_macros = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"->","->",-2139605430,null),sprog.iglu.macros.thread_first,new cljs.core.Symbol(null,"->>","->>",-1874332161,null),sprog.iglu.macros.thread_last], null);

//# sourceMappingURL=sprog.iglu.macros.js.map
