goog.provide('sprog.util');
sprog.util.now = (function sprog$util$now(){
return Date.now();
});
sprog.util.startup_time = sprog.util.now();
sprog.util.seconds_since_startup = (function sprog$util$seconds_since_startup(){
return ((sprog.util.now() - sprog.util.startup_time) / (1000));
});
sprog.util.log = (function sprog$util$log(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27928 = arguments.length;
var i__5767__auto___27929 = (0);
while(true){
if((i__5767__auto___27929 < len__5766__auto___27928)){
args__5772__auto__.push((arguments[i__5767__auto___27929]));

var G__27933 = (i__5767__auto___27929 + (1));
i__5767__auto___27929 = G__27933;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
var seq__27834_27934 = cljs.core.seq(vals);
var chunk__27835_27935 = null;
var count__27836_27936 = (0);
var i__27837_27937 = (0);
while(true){
if((i__27837_27937 < count__27836_27936)){
var val_27941 = chunk__27835_27935.cljs$core$IIndexed$_nth$arity$2(null,i__27837_27937);
console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_27941));


var G__27942 = seq__27834_27934;
var G__27943 = chunk__27835_27935;
var G__27944 = count__27836_27936;
var G__27945 = (i__27837_27937 + (1));
seq__27834_27934 = G__27942;
chunk__27835_27935 = G__27943;
count__27836_27936 = G__27944;
i__27837_27937 = G__27945;
continue;
} else {
var temp__5804__auto___27946 = cljs.core.seq(seq__27834_27934);
if(temp__5804__auto___27946){
var seq__27834_27947__$1 = temp__5804__auto___27946;
if(cljs.core.chunked_seq_QMARK_(seq__27834_27947__$1)){
var c__5565__auto___27948 = cljs.core.chunk_first(seq__27834_27947__$1);
var G__27949 = cljs.core.chunk_rest(seq__27834_27947__$1);
var G__27950 = c__5565__auto___27948;
var G__27951 = cljs.core.count(c__5565__auto___27948);
var G__27952 = (0);
seq__27834_27934 = G__27949;
chunk__27835_27935 = G__27950;
count__27836_27936 = G__27951;
i__27837_27937 = G__27952;
continue;
} else {
var val_27953 = cljs.core.first(seq__27834_27947__$1);
console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_27953));


var G__27954 = cljs.core.next(seq__27834_27947__$1);
var G__27955 = null;
var G__27956 = (0);
var G__27957 = (0);
seq__27834_27934 = G__27954;
chunk__27835_27935 = G__27955;
count__27836_27936 = G__27956;
i__27837_27937 = G__27957;
continue;
}
} else {
}
}
break;
}

return cljs.core.last(vals);
}));

(sprog.util.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.util.log.cljs$lang$applyTo = (function (seq27833){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27833));
}));

sprog.util.log_tables = (function sprog$util$log_tables(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27958 = arguments.length;
var i__5767__auto___27959 = (0);
while(true){
if((i__5767__auto___27959 < len__5766__auto___27958)){
args__5772__auto__.push((arguments[i__5767__auto___27959]));

var G__27963 = (i__5767__auto___27959 + (1));
i__5767__auto___27959 = G__27963;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.util.log_tables.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.util.log_tables.cljs$core$IFn$_invoke$arity$variadic = (function (tables){
var seq__27869_27964 = cljs.core.seq(tables);
var chunk__27870_27965 = null;
var count__27871_27966 = (0);
var i__27872_27967 = (0);
while(true){
if((i__27872_27967 < count__27871_27966)){
var table_27970 = chunk__27870_27965.cljs$core$IIndexed$_nth$arity$2(null,i__27872_27967);
console.table(cljs.core.clj__GT_js(table_27970));


var G__27971 = seq__27869_27964;
var G__27972 = chunk__27870_27965;
var G__27973 = count__27871_27966;
var G__27974 = (i__27872_27967 + (1));
seq__27869_27964 = G__27971;
chunk__27870_27965 = G__27972;
count__27871_27966 = G__27973;
i__27872_27967 = G__27974;
continue;
} else {
var temp__5804__auto___27975 = cljs.core.seq(seq__27869_27964);
if(temp__5804__auto___27975){
var seq__27869_27976__$1 = temp__5804__auto___27975;
if(cljs.core.chunked_seq_QMARK_(seq__27869_27976__$1)){
var c__5565__auto___27977 = cljs.core.chunk_first(seq__27869_27976__$1);
var G__27978 = cljs.core.chunk_rest(seq__27869_27976__$1);
var G__27979 = c__5565__auto___27977;
var G__27980 = cljs.core.count(c__5565__auto___27977);
var G__27981 = (0);
seq__27869_27964 = G__27978;
chunk__27870_27965 = G__27979;
count__27871_27966 = G__27980;
i__27872_27967 = G__27981;
continue;
} else {
var table_27983 = cljs.core.first(seq__27869_27976__$1);
console.table(cljs.core.clj__GT_js(table_27983));


var G__27991 = cljs.core.next(seq__27869_27976__$1);
var G__27992 = null;
var G__27993 = (0);
var G__27994 = (0);
seq__27869_27964 = G__27991;
chunk__27870_27965 = G__27992;
count__27871_27966 = G__27993;
i__27872_27967 = G__27994;
continue;
}
} else {
}
}
break;
}

return cljs.core.last(tables);
}));

(sprog.util.log_tables.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.util.log_tables.cljs$lang$applyTo = (function (seq27863){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27863));
}));

sprog.util.scale = (function sprog$util$scale(var_args){
var G__27884 = arguments.length;
switch (G__27884) {
case 5:
return sprog.util.scale.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return sprog.util.scale.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return sprog.util.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return sprog.util.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.util.scale.cljs$core$IFn$_invoke$arity$5 = (function (from_min,from_max,to_min,to_max,value){
return ((((value - from_min) / (from_max - from_min)) * (to_max - to_min)) + to_min);
}));

(sprog.util.scale.cljs$core$IFn$_invoke$arity$4 = (function (from_min,from_max,to_min,to_max){
return (function (p1__27880_SHARP_){
return ((((p1__27880_SHARP_ - from_min) / (from_max - from_min)) * (to_max - to_min)) + to_min);
});
}));

(sprog.util.scale.cljs$core$IFn$_invoke$arity$3 = (function (to_min,to_max,value){
return sprog.util.scale.cljs$core$IFn$_invoke$arity$5((0),(1),to_min,to_max,value);
}));

(sprog.util.scale.cljs$core$IFn$_invoke$arity$2 = (function (to_min,to_max){
return sprog.util.scale.cljs$core$IFn$_invoke$arity$4((0),(1),to_min,to_max);
}));

(sprog.util.scale.cljs$lang$maxFixedArity = 5);

sprog.util.prange = (function sprog$util$prange(var_args){
var args__5772__auto__ = [];
var len__5766__auto___27998 = arguments.length;
var i__5767__auto___27999 = (0);
while(true){
if((i__5767__auto___27999 < len__5766__auto___27998)){
args__5772__auto__.push((arguments[i__5767__auto___27999]));

var G__28000 = (i__5767__auto___27999 + (1));
i__5767__auto___27999 = G__28000;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.util.prange.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.util.prange.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__27902){
var vec__27903 = p__27902;
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(0),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27899_SHARP_){
return (p1__27899_SHARP_ / (cljs.core.truth_(open_QMARK_)?n:(n - (1))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
}));

(sprog.util.prange.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.util.prange.cljs$lang$applyTo = (function (seq27900){
var G__27901 = cljs.core.first(seq27900);
var seq27900__$1 = cljs.core.next(seq27900);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27901,seq27900__$1);
}));

sprog.util.clamp = (function sprog$util$clamp(var_args){
var G__27912 = arguments.length;
switch (G__27912) {
case 3:
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sprog.util.clamp.cljs$core$IFn$_invoke$arity$3 = (function (bottom,top,value){
var x__5131__auto__ = top;
var y__5132__auto__ = (function (){var x__5128__auto__ = bottom;
var y__5129__auto__ = value;
return ((x__5128__auto__ > y__5129__auto__) ? x__5128__auto__ : y__5129__auto__);
})();
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
}));

(sprog.util.clamp.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (function (p1__27910_SHARP_){
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$3(min,max,p1__27910_SHARP_);
});
}));

(sprog.util.clamp.cljs$core$IFn$_invoke$arity$1 = (function (value){
return sprog.util.clamp.cljs$core$IFn$_invoke$arity$3((0),(1),value);
}));

(sprog.util.clamp.cljs$lang$maxFixedArity = 3);

sprog.util.sigmoid = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core._SLASH_,cljs.core.inc,(function (p1__27918_SHARP_){
return Math.exp(p1__27918_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._], 0));
sprog.util.TAU = (Math.PI * (2));

//# sourceMappingURL=sprog.util.js.map
