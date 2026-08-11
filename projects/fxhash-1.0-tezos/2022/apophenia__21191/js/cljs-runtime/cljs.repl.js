goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39873){
var map__39874 = p__39873;
var map__39874__$1 = cljs.core.__destructure_map(map__39874);
var m = map__39874__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39874__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39874__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39875_40078 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39876_40079 = null;
var count__39877_40080 = (0);
var i__39878_40081 = (0);
while(true){
if((i__39878_40081 < count__39877_40080)){
var f_40084 = chunk__39876_40079.cljs$core$IIndexed$_nth$arity$2(null,i__39878_40081);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40084], 0));


var G__40087 = seq__39875_40078;
var G__40088 = chunk__39876_40079;
var G__40089 = count__39877_40080;
var G__40090 = (i__39878_40081 + (1));
seq__39875_40078 = G__40087;
chunk__39876_40079 = G__40088;
count__39877_40080 = G__40089;
i__39878_40081 = G__40090;
continue;
} else {
var temp__5804__auto___40091 = cljs.core.seq(seq__39875_40078);
if(temp__5804__auto___40091){
var seq__39875_40092__$1 = temp__5804__auto___40091;
if(cljs.core.chunked_seq_QMARK_(seq__39875_40092__$1)){
var c__5565__auto___40093 = cljs.core.chunk_first(seq__39875_40092__$1);
var G__40094 = cljs.core.chunk_rest(seq__39875_40092__$1);
var G__40095 = c__5565__auto___40093;
var G__40096 = cljs.core.count(c__5565__auto___40093);
var G__40097 = (0);
seq__39875_40078 = G__40094;
chunk__39876_40079 = G__40095;
count__39877_40080 = G__40096;
i__39878_40081 = G__40097;
continue;
} else {
var f_40098 = cljs.core.first(seq__39875_40092__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40098], 0));


var G__40099 = cljs.core.next(seq__39875_40092__$1);
var G__40100 = null;
var G__40101 = (0);
var G__40102 = (0);
seq__39875_40078 = G__40099;
chunk__39876_40079 = G__40100;
count__39877_40080 = G__40101;
i__39878_40081 = G__40102;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40103 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40103], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40103)))?cljs.core.second(arglists_40103):arglists_40103)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39883_40113 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39884_40114 = null;
var count__39885_40115 = (0);
var i__39886_40116 = (0);
while(true){
if((i__39886_40116 < count__39885_40115)){
var vec__39897_40117 = chunk__39884_40114.cljs$core$IIndexed$_nth$arity$2(null,i__39886_40116);
var name_40118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39897_40117,(0),null);
var map__39900_40119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39897_40117,(1),null);
var map__39900_40120__$1 = cljs.core.__destructure_map(map__39900_40119);
var doc_40121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39900_40120__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39900_40120__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40118], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40122], 0));

if(cljs.core.truth_(doc_40121)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40121], 0));
} else {
}


var G__40123 = seq__39883_40113;
var G__40124 = chunk__39884_40114;
var G__40125 = count__39885_40115;
var G__40126 = (i__39886_40116 + (1));
seq__39883_40113 = G__40123;
chunk__39884_40114 = G__40124;
count__39885_40115 = G__40125;
i__39886_40116 = G__40126;
continue;
} else {
var temp__5804__auto___40127 = cljs.core.seq(seq__39883_40113);
if(temp__5804__auto___40127){
var seq__39883_40128__$1 = temp__5804__auto___40127;
if(cljs.core.chunked_seq_QMARK_(seq__39883_40128__$1)){
var c__5565__auto___40129 = cljs.core.chunk_first(seq__39883_40128__$1);
var G__40130 = cljs.core.chunk_rest(seq__39883_40128__$1);
var G__40131 = c__5565__auto___40129;
var G__40132 = cljs.core.count(c__5565__auto___40129);
var G__40133 = (0);
seq__39883_40113 = G__40130;
chunk__39884_40114 = G__40131;
count__39885_40115 = G__40132;
i__39886_40116 = G__40133;
continue;
} else {
var vec__39902_40134 = cljs.core.first(seq__39883_40128__$1);
var name_40135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39902_40134,(0),null);
var map__39905_40136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39902_40134,(1),null);
var map__39905_40137__$1 = cljs.core.__destructure_map(map__39905_40136);
var doc_40138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39905_40137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39905_40137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40135], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40139], 0));

if(cljs.core.truth_(doc_40138)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40138], 0));
} else {
}


var G__40141 = cljs.core.next(seq__39883_40128__$1);
var G__40142 = null;
var G__40143 = (0);
var G__40144 = (0);
seq__39883_40113 = G__40141;
chunk__39884_40114 = G__40142;
count__39885_40115 = G__40143;
i__39886_40116 = G__40144;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39906 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39907 = null;
var count__39908 = (0);
var i__39909 = (0);
while(true){
if((i__39909 < count__39908)){
var role = chunk__39907.cljs$core$IIndexed$_nth$arity$2(null,i__39909);
var temp__5804__auto___40145__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40145__$1)){
var spec_40147 = temp__5804__auto___40145__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40147)], 0));
} else {
}


var G__40151 = seq__39906;
var G__40152 = chunk__39907;
var G__40153 = count__39908;
var G__40154 = (i__39909 + (1));
seq__39906 = G__40151;
chunk__39907 = G__40152;
count__39908 = G__40153;
i__39909 = G__40154;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__39906);
if(temp__5804__auto____$1){
var seq__39906__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39906__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__39906__$1);
var G__40155 = cljs.core.chunk_rest(seq__39906__$1);
var G__40156 = c__5565__auto__;
var G__40157 = cljs.core.count(c__5565__auto__);
var G__40158 = (0);
seq__39906 = G__40155;
chunk__39907 = G__40156;
count__39908 = G__40157;
i__39909 = G__40158;
continue;
} else {
var role = cljs.core.first(seq__39906__$1);
var temp__5804__auto___40159__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___40159__$2)){
var spec_40160 = temp__5804__auto___40159__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40160)], 0));
} else {
}


var G__40161 = cljs.core.next(seq__39906__$1);
var G__40162 = null;
var G__40163 = (0);
var G__40164 = (0);
seq__39906 = G__40161;
chunk__39907 = G__40162;
count__39908 = G__40163;
i__39909 = G__40164;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40165 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40166 = cljs.core.ex_cause(t);
via = G__40165;
t = G__40166;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39941 = datafied_throwable;
var map__39941__$1 = cljs.core.__destructure_map(map__39941);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39941__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39941__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39941__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39942 = cljs.core.last(via);
var map__39942__$1 = cljs.core.__destructure_map(map__39942);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39942__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39942__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39942__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39943 = data;
var map__39943__$1 = cljs.core.__destructure_map(map__39943);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39943__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39943__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39943__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39944 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39944__$1 = cljs.core.__destructure_map(map__39944);
var top_data = map__39944__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39944__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39959 = phase;
var G__39959__$1 = (((G__39959 instanceof cljs.core.Keyword))?G__39959.fqn:null);
switch (G__39959__$1) {
case "read-source":
var map__39968 = data;
var map__39968__$1 = cljs.core.__destructure_map(map__39968);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39968__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39968__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39976 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39976__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39976,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39976);
var G__39976__$2 = (cljs.core.truth_((function (){var fexpr__39986 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39986.cljs$core$IFn$_invoke$arity$1 ? fexpr__39986.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39986.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39976__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39976__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39976__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39976__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39991 = top_data;
var G__39991__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39991,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39991);
var G__39991__$2 = (cljs.core.truth_((function (){var fexpr__39995 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39995.cljs$core$IFn$_invoke$arity$1 ? fexpr__39995.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39995.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39991__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39991__$1);
var G__39991__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39991__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39991__$2);
var G__39991__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39991__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39991__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39991__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39991__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40010 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40010,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40010,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40010,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40010,(3),null);
var G__40017 = top_data;
var G__40017__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40017,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40017);
var G__40017__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40017__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40017__$1);
var G__40017__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40017__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40017__$2);
var G__40017__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40017__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40017__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40017__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40017__$4;
}

break;
case "execution":
var vec__40026 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40026,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40026,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40026,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40026,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39933_SHARP_){
var or__5043__auto__ = (p1__39933_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__40029 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40029.cljs$core$IFn$_invoke$arity$1 ? fexpr__40029.cljs$core$IFn$_invoke$arity$1(p1__39933_SHARP_) : fexpr__40029.call(null,p1__39933_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__40031 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40031__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40031,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40031);
var G__40031__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40031__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40031__$1);
var G__40031__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40031__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40031__$2);
var G__40031__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40031__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40031__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40031__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40031__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39959__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40035){
var map__40036 = p__40035;
var map__40036__$1 = cljs.core.__destructure_map(map__40036);
var triage_data = map__40036__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40038 = phase;
var G__40038__$1 = (((G__40038 instanceof cljs.core.Keyword))?G__40038.fqn:null);
switch (G__40038__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40039 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40040 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40041 = loc;
var G__40042 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40044_40175 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40045_40176 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40046_40177 = true;
var _STAR_print_fn_STAR__temp_val__40047_40178 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40046_40177);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40047_40178);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40033_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40033_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40045_40176);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40044_40175);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40039,G__40040,G__40041,G__40042) : format.call(null,G__40039,G__40040,G__40041,G__40042));

break;
case "macroexpansion":
var G__40049 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40050 = cause_type;
var G__40051 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40052 = loc;
var G__40053 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40049,G__40050,G__40051,G__40052,G__40053) : format.call(null,G__40049,G__40050,G__40051,G__40052,G__40053));

break;
case "compile-syntax-check":
var G__40054 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40055 = cause_type;
var G__40056 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40057 = loc;
var G__40058 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40054,G__40055,G__40056,G__40057,G__40058) : format.call(null,G__40054,G__40055,G__40056,G__40057,G__40058));

break;
case "compilation":
var G__40059 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40060 = cause_type;
var G__40061 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40062 = loc;
var G__40063 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40059,G__40060,G__40061,G__40062,G__40063) : format.call(null,G__40059,G__40060,G__40061,G__40062,G__40063));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40064 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40065 = symbol;
var G__40066 = loc;
var G__40067 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40068_40181 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40069_40182 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40070_40183 = true;
var _STAR_print_fn_STAR__temp_val__40071_40184 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40070_40183);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40071_40184);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40034_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40034_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40069_40182);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40068_40181);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40064,G__40065,G__40066,G__40067) : format.call(null,G__40064,G__40065,G__40066,G__40067));
} else {
var G__40073 = "Execution error%s at %s(%s).\n%s\n";
var G__40074 = cause_type;
var G__40075 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40076 = loc;
var G__40077 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40073,G__40074,G__40075,G__40076,G__40077) : format.call(null,G__40073,G__40074,G__40075,G__40076,G__40077));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40038__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
