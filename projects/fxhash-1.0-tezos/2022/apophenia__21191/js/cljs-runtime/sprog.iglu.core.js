goog.provide('sprog.iglu.core');
sprog.iglu.core.merge_chunks = (function sprog$iglu$core$merge_chunks(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27966 = arguments.length;
var i__5767__auto___27967 = (0);
while(true){
if((i__5767__auto___27967 < len__5766__auto___27966)){
args__5772__auto__.push((arguments[i__5767__auto___27967]));

var G__27968 = (i__5767__auto___27967 + (1));
i__5767__auto___27967 = G__27968;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.iglu.core.merge_chunks.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.iglu.core.merge_chunks.cljs$core$IFn$_invoke$arity$variadic = (function (chunks){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27927_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27927_SHARP_,new cljs.core.Keyword(null,"version","version",425292698));
}),chunks)),new cljs.core.Keyword(null,"version","version",425292698),"300 es");
}));

(sprog.iglu.core.merge_chunks.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.iglu.core.merge_chunks.cljs$lang$applyTo = (function (seq27928){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27928));
}));

sprog.iglu.core.iglu__GT_glsl = (function sprog$iglu$core$iglu__GT_glsl(var_args){
var G__27945 = arguments.length;
switch (G__27945) {
case 1:
return sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___27972 = arguments.length;
var i__5767__auto___27973 = (0);
while(true){
if((i__5767__auto___27973 < len__5766__auto___27972)){
args_arr__5791__auto__.push((arguments[i__5767__auto___27973]));

var G__27974 = (i__5767__auto___27973 + (1));
i__5767__auto___27973 = G__27974;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((1)),(0),null));
return sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5792__auto__);

}
});

(sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1 = (function (shader){
return sprog.iglu.glsl.parsed_iglu__GT_glsl(sprog.iglu.parse.parse(sprog.iglu.macros.apply_macros(sprog.iglu.macros.default_macros,shader)));
}));

(sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$variadic = (function (replacement_and_macro_map,chunks){
var map__27959 = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.fn_QMARK_,cljs.core.second),replacement_and_macro_map);
var map__27959__$1 = cljs.core.__destructure_map(map__27959);
var macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,true);
var replacements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27959__$1,false);
return sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk_replace(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,replacements),sprog.iglu.macros.apply_macros(cljs.core.into.cljs$core$IFn$_invoke$arity$2(sprog.iglu.macros.default_macros,macros),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sprog.iglu.core.merge_chunks,chunks))));
}));

/** @this {Function} */
(sprog.iglu.core.iglu__GT_glsl.cljs$lang$applyTo = (function (seq27943){
var G__27944 = cljs.core.first(seq27943);
var seq27943__$1 = cljs.core.next(seq27943);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27944,seq27943__$1);
}));

(sprog.iglu.core.iglu__GT_glsl.cljs$lang$maxFixedArity = (1));


//# sourceMappingURL=sprog.iglu.core.js.map
