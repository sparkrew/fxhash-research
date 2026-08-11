goog.provide('sprog.iglu.chunks.postprocessing');
sprog.iglu.chunks.postprocessing.gaussian_chunk = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"gaussian","gaussian",1370580692,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"float","float",-91857841,null)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"sigma","sigma",1576815824,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"scaledOffset","scaledOffset",-515913962,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"sigma","sigma",1576815824,null))),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"exp","exp",1378825265,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),-0.5,cljs.core.list(new cljs.core.Symbol(null,"dot","dot",-1211726368,null),new cljs.core.Symbol(null,"scaledOffset","scaledOffset",-515913962,null),new cljs.core.Symbol(null,"scaledOffset","scaledOffset",-515913962,null)))),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),6.28,cljs.core.list(new cljs.core.Symbol(null,"pow","pow",196526960,null),new cljs.core.Symbol(null,"sigma","sigma",1576815824,null),(2)))))], null)], null)], null);
sprog.iglu.chunks.postprocessing.plus_neighborhood = (function sprog$iglu$chunks$postprocessing$plus_neighborhood(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28106 = arguments.length;
var i__5767__auto___28107 = (0);
while(true){
if((i__5767__auto___28107 < len__5766__auto___28106)){
args__5772__auto__.push((arguments[i__5767__auto___28107]));

var G__28108 = (i__5767__auto___28107 + (1));
i__5767__auto___28107 = G__28108;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.chunks.postprocessing.plus_neighborhood.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.chunks.postprocessing.plus_neighborhood.cljs$core$IFn$_invoke$arity$variadic = (function (radius,p__27986){
var vec__27987 = p__27986;
var skip_factor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27987,(0),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (r){
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),r], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(0)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- r)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- r),(0)], null),null,(1),null)),(2),null)),(3),null)),(4),null));
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(function (){var or__5043__auto__ = skip_factor;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(radius + (1)))], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}));

(sprog.iglu.chunks.postprocessing.plus_neighborhood.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.chunks.postprocessing.plus_neighborhood.cljs$lang$applyTo = (function (seq27977){
var G__27979 = cljs.core.first(seq27977);
var seq27977__$1 = cljs.core.next(seq27977);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27979,seq27977__$1);
}));

sprog.iglu.chunks.postprocessing.star_neighborhood = (function sprog$iglu$chunks$postprocessing$star_neighborhood(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28112 = arguments.length;
var i__5767__auto___28113 = (0);
while(true){
if((i__5767__auto___28113 < len__5766__auto___28112)){
args__5772__auto__.push((arguments[i__5767__auto___28113]));

var G__28114 = (i__5767__auto___28113 + (1));
i__5767__auto___28113 = G__28114;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.chunks.postprocessing.star_neighborhood.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.chunks.postprocessing.star_neighborhood.cljs$core$IFn$_invoke$arity$variadic = (function (radius,p__28016){
var vec__28017 = p__28016;
var skip_factor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28017,(0),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (r){
return (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),r], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,r], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(0)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(- r)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- r)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- r),(- r)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- r),(0)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- r),r], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null));
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(function (){var or__5043__auto__ = skip_factor;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(radius + (1)))], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}));

(sprog.iglu.chunks.postprocessing.star_neighborhood.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.chunks.postprocessing.star_neighborhood.cljs$lang$applyTo = (function (seq28011){
var G__28012 = cljs.core.first(seq28011);
var seq28011__$1 = cljs.core.next(seq28011);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28012,seq28011__$1);
}));

sprog.iglu.chunks.postprocessing.square_neighborhood = (function sprog$iglu$chunks$postprocessing$square_neighborhood(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28120 = arguments.length;
var i__5767__auto___28121 = (0);
while(true){
if((i__5767__auto___28121 < len__5766__auto___28120)){
args__5772__auto__.push((arguments[i__5767__auto___28121]));

var G__28122 = (i__5767__auto___28121 + (1));
i__5767__auto___28121 = G__28122;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.iglu.chunks.postprocessing.square_neighborhood.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.iglu.chunks.postprocessing.square_neighborhood.cljs$core$IFn$_invoke$arity$variadic = (function (radius,p__28032){
var vec__28033 = p__28032;
var skip_factor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28033,(0),null);
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(function (){var or__5043__auto__ = skip_factor;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})())),(function (){var iter__5520__auto__ = (function sprog$iglu$chunks$postprocessing$iter__28038(s__28039){
return (new cljs.core.LazySeq(null,(function (){
var s__28039__$1 = s__28039;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28039__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__28039__$1,x,xs__6360__auto__,temp__5804__auto__,vec__28033,skip_factor){
return (function sprog$iglu$chunks$postprocessing$iter__28038_$_iter__28043(s__28044){
return (new cljs.core.LazySeq(null,((function (s__28039__$1,x,xs__6360__auto__,temp__5804__auto__,vec__28033,skip_factor){
return (function (){
var s__28044__$1 = s__28044;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__28044__$1);
if(temp__5804__auto____$1){
var s__28044__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28044__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__28044__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__28046 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__28045 = (0);
while(true){
if((i__28045 < size__5519__auto__)){
var y = cljs.core._nth(c__5518__auto__,i__28045);
cljs.core.chunk_append(b__28046,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__28126 = (i__28045 + (1));
i__28045 = G__28126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28046),sprog$iglu$chunks$postprocessing$iter__28038_$_iter__28043(cljs.core.chunk_rest(s__28044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28046),null);
}
} else {
var y = cljs.core.first(s__28044__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),sprog$iglu$chunks$postprocessing$iter__28038_$_iter__28043(cljs.core.rest(s__28044__$2)));
}
} else {
return null;
}
break;
}
});})(s__28039__$1,x,xs__6360__auto__,temp__5804__auto__,vec__28033,skip_factor))
,null,null));
});})(s__28039__$1,x,xs__6360__auto__,temp__5804__auto__,vec__28033,skip_factor))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- radius),(radius + (1)))));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,sprog$iglu$chunks$postprocessing$iter__28038(cljs.core.rest(s__28039__$1)));
} else {
var G__28131 = cljs.core.rest(s__28039__$1);
s__28039__$1 = G__28131;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((- radius),(radius + (1))));
})()));
}));

(sprog.iglu.chunks.postprocessing.square_neighborhood.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.iglu.chunks.postprocessing.square_neighborhood.cljs$lang$applyTo = (function (seq28027){
var G__28028 = cljs.core.first(seq28027);
var seq28027__$1 = cljs.core.next(seq28027);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28028,seq28027__$1);
}));

sprog.iglu.chunks.postprocessing.prescaled_gaussian_sample_expression = (function sprog$iglu$chunks$postprocessing$prescaled_gaussian_sample_expression(value_expression,neighborhood,sigma){
var factors = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28083){
var vec__28084 = p__28083;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28084,(1),null);
return Math.exp(((- ((x * x) + (y * y))) / (((2) * sigma) * sigma)));
}),neighborhood);
var factor_sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,factors);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__28088,factor){
var vec__28089 = p__28088;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,(factor / factor_sum),(new cljs.core.List(null,clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),value_expression),null,(1),null)),(2),null)),(3),null));
}),neighborhood,factors),new cljs.core.Symbol(null,"+","+",-740910886,null));
});
sprog.iglu.chunks.postprocessing.create_gaussian_sample_chunk = (function sprog$iglu$chunks$postprocessing$create_gaussian_sample_chunk(texture_type,neighborhood){
return sprog.iglu.core.merge_chunks.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sprog.iglu.chunks.postprocessing.gaussian_chunk,clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sampler-type","sampler-type",-1545133456),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(texture_type,new cljs.core.Keyword(null,"f8","f8",-2141475484)))?new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null):new cljs.core.Symbol(null,"usampler2D","usampler2D",-1675415451,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"gaussianSample","gaussianSample",-269591724,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler-type","sampler-type",-1545133456),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"offsetFactor","offsetFactor",1170385119,null),new cljs.core.Symbol(null,"sigma","sigma",1576815824,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=vec4","=vec4",-1088093579,null),new cljs.core.Symbol(null,"sampleSum","sampleSum",-1013086259,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"factorSum","factorSum",-462622485,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"factor","factor",-462641221,null),(0))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__28092){
var vec__28096 = p__28092;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28096,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28096,(1),null);
return clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"factor","factor",-462641221,null),cljs.core.list(new cljs.core.Symbol(null,"gaussian","gaussian",1370580692,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"sigma","sigma",1576815824,null))),cljs.core.list(new cljs.core.Symbol(null,"+=","+=",1039293914,null),new cljs.core.Symbol(null,"factorSum","factorSum",-462622485,null),new cljs.core.Symbol(null,"factor","factor",-462641221,null)),cljs.core.list(new cljs.core.Symbol(null,"+=","+=",1039293914,null),new cljs.core.Symbol(null,"sampleSum","sampleSum",-1013086259,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"factor","factor",-462641221,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"offsetFactor","offsetFactor",1170385119,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)))))))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([neighborhood], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"sampleSum","sampleSum",-1013086259,null),new cljs.core.Symbol(null,"factorSum","factorSum",-462622485,null)))], 0))], null)], null)], null))], 0));
});
sprog.iglu.chunks.postprocessing.get_bloom_chunk = (function sprog$iglu$chunks$postprocessing$get_bloom_chunk(texture_type,neighborhood,sigma){
return clojure.walk.postwalk_replace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"divisor","divisor",-25029120),(function (){var fexpr__28103 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"f8","f8",-2141475484),(1),new cljs.core.Keyword(null,"u8","u8",1415967369),(Math.pow((2),(8)) - (1)),new cljs.core.Keyword(null,"u16","u16",-818464124),(Math.pow((2),(16)) - (1)),new cljs.core.Keyword(null,"u32","u32",1815761749),(Math.pow((2),(32)) - (1))], null);
return (fexpr__28103.cljs$core$IFn$_invoke$arity$1 ? fexpr__28103.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__28103.call(null,texture_type));
})().toFixed((1)),new cljs.core.Keyword(null,"sampler-type","sampler-type",-1545133456),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(texture_type,new cljs.core.Keyword(null,"f8","f8",-2141475484)))?new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null):new cljs.core.Symbol(null,"usampler2D","usampler2D",-1675415451,null)),new cljs.core.Keyword(null,"gaussian-expresion","gaussian-expresion",-673751988),sprog.iglu.chunks.postprocessing.prescaled_gaussian_sample_expression(cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),new cljs.core.Symbol(null,"step","step",-1365547645,null))))),neighborhood,sigma)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"bloom","bloom",-1232870872,null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler-type","sampler-type",-1545133456),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"float","float",-91857841,null)], null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"step","step",-1365547645,null),new cljs.core.Symbol(null,"intensity","intensity",-1511664906,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=vec4","=vec4",-1088093579,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Keyword(null,"gaussian-expresion","gaussian-expresion",-673751988)),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"intensity","intensity",-1511664906,null)),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)))),new cljs.core.Keyword(null,"divisor","divisor",-25029120))))], null)], null)], null));
});

//# sourceMappingURL=sprog.iglu.chunks.postprocessing.js.map
