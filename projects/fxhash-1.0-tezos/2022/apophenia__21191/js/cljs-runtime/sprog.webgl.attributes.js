goog.provide('sprog.webgl.attributes');
sprog.webgl.attributes.set_boj_data_BANG_ = (function sprog$webgl$attributes$set_boj_data_BANG_(gl,p__31507,data){
var map__31512 = p__31507;
var map__31512__$1 = cljs.core.__destructure_map(map__31512);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31512__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31512__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

return gl.bufferData(gl.ARRAY_BUFFER,data,usage);
});
sprog.webgl.attributes.create_boj_BANG_ = (function sprog$webgl$attributes$create_boj_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31597 = arguments.length;
var i__5767__auto___31598 = (0);
while(true){
if((i__5767__auto___31598 < len__5766__auto___31597)){
args__5772__auto__.push((arguments[i__5767__auto___31598]));

var G__31599 = (i__5767__auto___31598 + (1));
i__5767__auto___31598 = G__31599;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,num_components,p__31530){
var vec__31532 = p__31530;
var map__31535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31532,(0),null);
var map__31535__$1 = cljs.core.__destructure_map(map__31535);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31535__$1,new cljs.core.Keyword(null,"type","type",1174270348),gl.FLOAT);
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31535__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),false);
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31535__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435),(0));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31535__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31535__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910),gl.STATIC_DRAW);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31535__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var boj = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"buffer","buffer",617295198),gl.createBuffer(),new cljs.core.Keyword(null,"num-components","num-components",1755475190),num_components,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),normalized,new cljs.core.Keyword(null,"stride","stride",-1172818435),stride,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"usage","usage",-1583752910),usage], null);
if(cljs.core.truth_(initial_data)){
sprog.webgl.attributes.set_boj_data_BANG_(gl,boj,initial_data);
} else {
}

return boj;
}));

(sprog.webgl.attributes.create_boj_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.attributes.create_boj_BANG_.cljs$lang$applyTo = (function (seq31520){
var G__31521 = cljs.core.first(seq31520);
var seq31520__$1 = cljs.core.next(seq31520);
var G__31522 = cljs.core.first(seq31520__$1);
var seq31520__$2 = cljs.core.next(seq31520__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31521,G__31522,seq31520__$2);
}));

sprog.webgl.attributes.ensure_attribute_present_BANG_ = (function sprog$webgl$attributes$ensure_attribute_present_BANG_(gl,p__31552,attrib_name_str){
var map__31553 = p__31552;
var map__31553__$1 = cljs.core.__destructure_map(map__31553);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31553__$1,new cljs.core.Keyword(null,"program","program",781564284));
var attributes_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31553__$1,new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177));
if(cljs.core.not((function (){var fexpr__31555 = cljs.core.deref(attributes_atom);
return (fexpr__31555.cljs$core$IFn$_invoke$arity$1 ? fexpr__31555.cljs$core$IFn$_invoke$arity$1(attrib_name_str) : fexpr__31555.call(null,attrib_name_str));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attributes_atom,cljs.core.assoc,attrib_name_str,gl.getAttribLocation(program,attrib_name_str));
} else {
return null;
}
});
sprog.webgl.attributes.set_sprog_attribute_BANG_ = (function sprog$webgl$attributes$set_sprog_attribute_BANG_(gl,p__31564,attrib_name,p__31565){
var map__31566 = p__31564;
var map__31566__$1 = cljs.core.__destructure_map(map__31566);
var sprog__$1 = map__31566__$1;
var attributes_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31566__$1,new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177));
var map__31567 = p__31565;
var map__31567__$1 = cljs.core.__destructure_map(map__31567);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var num_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567__$1,new cljs.core.Keyword(null,"num-components","num-components",1755475190));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567__$1,new cljs.core.Keyword(null,"normalized","normalized",-1887621663));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31567__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var attrib_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(attrib_name);
sprog.webgl.attributes.ensure_attribute_present_BANG_(gl,sprog__$1,attrib_name_str);

var location__$1 = (function (){var fexpr__31571 = cljs.core.deref(attributes_atom);
return (fexpr__31571.cljs$core$IFn$_invoke$arity$1 ? fexpr__31571.cljs$core$IFn$_invoke$arity$1(attrib_name) : fexpr__31571.call(null,attrib_name));
})();
gl.bindBuffer(gl.ARRAY_BUFFER,buffer);

gl.enableVertexAttribArray(location__$1);

return gl.vertexAttribPointer(location__$1,num_components,type,normalized,stride,offset);
});
sprog.webgl.attributes.set_sprog_attributes_BANG_ = (function sprog$webgl$attributes$set_sprog_attributes_BANG_(gl,sprog__$1,attrib_boj_map){
var seq__31572 = cljs.core.seq(attrib_boj_map);
var chunk__31573 = null;
var count__31574 = (0);
var i__31575 = (0);
while(true){
if((i__31575 < count__31574)){
var vec__31589 = chunk__31573.cljs$core$IIndexed$_nth$arity$2(null,i__31575);
var attrib_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31589,(0),null);
var boj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31589,(1),null);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,attrib_name,boj);


var G__31602 = seq__31572;
var G__31603 = chunk__31573;
var G__31604 = count__31574;
var G__31605 = (i__31575 + (1));
seq__31572 = G__31602;
chunk__31573 = G__31603;
count__31574 = G__31604;
i__31575 = G__31605;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31572);
if(temp__5804__auto__){
var seq__31572__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31572__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31572__$1);
var G__31606 = cljs.core.chunk_rest(seq__31572__$1);
var G__31607 = c__5565__auto__;
var G__31608 = cljs.core.count(c__5565__auto__);
var G__31609 = (0);
seq__31572 = G__31606;
chunk__31573 = G__31607;
count__31574 = G__31608;
i__31575 = G__31609;
continue;
} else {
var vec__31593 = cljs.core.first(seq__31572__$1);
var attrib_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31593,(0),null);
var boj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31593,(1),null);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,attrib_name,boj);


var G__31610 = cljs.core.next(seq__31572__$1);
var G__31611 = null;
var G__31612 = (0);
var G__31613 = (0);
seq__31572 = G__31610;
chunk__31573 = G__31611;
count__31574 = G__31612;
i__31575 = G__31613;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=sprog.webgl.attributes.js.map
