goog.provide('sprog.webgl.shaders');
sprog.webgl.shaders.create_shader = (function sprog$webgl$shaders$create_shader(gl,shader_type,source){
var source_glsl = ((typeof source === 'string')?source:sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(source));
var shader = gl.createShader((function (){var or__5043__auto__ = (function (){var fexpr__28083 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frag","frag",1474317943),gl.FRAGMENT_SHADER,new cljs.core.Keyword(null,"vert","vert",-360932977),gl.VERTEX_SHADER], null);
return (fexpr__28083.cljs$core$IFn$_invoke$arity$1 ? fexpr__28083.cljs$core$IFn$_invoke$arity$1(shader_type) : fexpr__28083.call(null,shader_type));
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return shader_type;
}
})());

gl.shaderSource(shader,source_glsl);

gl.compileShader(shader);

if(cljs.core.truth_(gl.getShaderParameter(shader,gl.COMPILE_STATUS))){
return shader;
} else {
sprog.util.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28065_SHARP_,p2__28064_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28064_SHARP_),":\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28065_SHARP_)].join('');
}),clojure.string.split_lines(source_glsl),cljs.core.rest(cljs.core.range.cljs$core$IFn$_invoke$arity$0())))], 0));

throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getShaderInfoLog(shader))));
}
});
sprog.webgl.shaders.create_program = (function sprog$webgl$shaders$create_program(gl,vert_shader,frag_shader){
var program = gl.createProgram();
gl.attachShader(program,vert_shader);

gl.attachShader(program,frag_shader);

gl.linkProgram(program);

if(cljs.core.truth_(gl.getProgramParameter(program,gl.LINK_STATUS))){
return program;
} else {
throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(gl.getProgramInfoLog(program))));
}
});
sprog.webgl.shaders.create_sprog = (function sprog$webgl$shaders$create_sprog(gl,vert_source,frag_source){
var program = sprog.webgl.shaders.create_program(gl,sprog.webgl.shaders.create_shader(gl,new cljs.core.Keyword(null,"vert","vert",-360932977),vert_source),sprog.webgl.shaders.create_shader(gl,new cljs.core.Keyword(null,"frag","frag",1474317943),frag_source));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"program","program",781564284),program,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"attributes-atom","attributes-atom",1302491177),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null);
});
sprog.webgl.shaders.purefrag_vert_glsl = sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$1(sprog.iglu.chunks.misc.trivial_vert_source);
sprog.webgl.shaders.create_purefrag_sprog = (function sprog$webgl$shaders$create_purefrag_sprog(gl,frag_source){
var sprog__$1 = sprog.webgl.shaders.create_sprog(gl,sprog.webgl.shaders.purefrag_vert_glsl,frag_source);
sprog.webgl.attributes.set_sprog_attribute_BANG_(gl,sprog__$1,"vertPos",sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),(new Float32Array(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(-1),(3),(3),(-1)], null))))], null)], 0)));

return sprog__$1;
});
sprog.webgl.shaders.use_sprog_BANG_ = (function sprog$webgl$shaders$use_sprog_BANG_(gl,p__28103,uniform_map,attribute_map){
var map__28104 = p__28103;
var map__28104__$1 = cljs.core.__destructure_map(map__28104);
var sprog__$1 = map__28104__$1;
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28104__$1,new cljs.core.Keyword(null,"program","program",781564284));
gl.useProgram(program);

sprog.webgl.uniforms.set_sprog_uniforms_BANG_(gl,sprog__$1,uniform_map);

return sprog.webgl.attributes.set_sprog_attributes_BANG_(gl,sprog__$1,attribute_map);
});
sprog.webgl.shaders.run_sprog_BANG_ = (function sprog$webgl$shaders$run_sprog_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28191 = arguments.length;
var i__5767__auto___28192 = (0);
while(true){
if((i__5767__auto___28192 < len__5766__auto___28191)){
args__5772__auto__.push((arguments[i__5767__auto___28192]));

var G__28193 = (i__5767__auto___28192 + (1));
i__5767__auto___28192 = G__28193;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((7) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((7)),(0),null)):null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sprog__$1,size,uniform_map,attribute_map,start,length,p__28119){
var vec__28120 = p__28119;
var map__28123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28120,(0),null);
var map__28123__$1 = cljs.core.__destructure_map(map__28123);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28123__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
if(cljs.core.coll_QMARK_(target)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.webgl.textures.target_textures_BANG_,gl),target);
} else {
sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target], 0));
}
} else {
sprog.webgl.textures.target_screen_BANG_(gl);
}

var vec__28128 = ((typeof size === 'number')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),size,size], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(2)))?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),size)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(4)))?cljs.core.vec(size):null)));
var offset_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(0),null);
var offset_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(3),null);
gl.viewport(offset_x,offset_y,width,height);

sprog.webgl.shaders.use_sprog_BANG_(gl,sprog__$1,uniform_map,attribute_map);

return gl.drawArrays(gl.TRIANGLES,start,length);
}));

(sprog.webgl.shaders.run_sprog_BANG_.cljs$lang$maxFixedArity = (7));

/** @this {Function} */
(sprog.webgl.shaders.run_sprog_BANG_.cljs$lang$applyTo = (function (seq28108){
var G__28109 = cljs.core.first(seq28108);
var seq28108__$1 = cljs.core.next(seq28108);
var G__28110 = cljs.core.first(seq28108__$1);
var seq28108__$2 = cljs.core.next(seq28108__$1);
var G__28111 = cljs.core.first(seq28108__$2);
var seq28108__$3 = cljs.core.next(seq28108__$2);
var G__28112 = cljs.core.first(seq28108__$3);
var seq28108__$4 = cljs.core.next(seq28108__$3);
var G__28113 = cljs.core.first(seq28108__$4);
var seq28108__$5 = cljs.core.next(seq28108__$4);
var G__28114 = cljs.core.first(seq28108__$5);
var seq28108__$6 = cljs.core.next(seq28108__$5);
var G__28115 = cljs.core.first(seq28108__$6);
var seq28108__$7 = cljs.core.next(seq28108__$6);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28109,G__28110,G__28111,G__28112,G__28113,G__28114,G__28115,seq28108__$7);
}));

sprog.webgl.shaders.run_purefrag_sprog_BANG_ = (function sprog$webgl$shaders$run_purefrag_sprog_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28198 = arguments.length;
var i__5767__auto___28199 = (0);
while(true){
if((i__5767__auto___28199 < len__5766__auto___28198)){
args__5772__auto__.push((arguments[i__5767__auto___28199]));

var G__28200 = (i__5767__auto___28199 + (1));
i__5767__auto___28199 = G__28200;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sprog__$1,size,uniform_map,p__28154){
var vec__28155 = p__28154;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(0),null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog__$1,size,uniform_map,null,(0),(3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$lang$applyTo = (function (seq28141){
var G__28142 = cljs.core.first(seq28141);
var seq28141__$1 = cljs.core.next(seq28141);
var G__28143 = cljs.core.first(seq28141__$1);
var seq28141__$2 = cljs.core.next(seq28141__$1);
var G__28144 = cljs.core.first(seq28141__$2);
var seq28141__$3 = cljs.core.next(seq28141__$2);
var G__28145 = cljs.core.first(seq28141__$3);
var seq28141__$4 = cljs.core.next(seq28141__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28142,G__28143,G__28144,G__28145,seq28141__$4);
}));

if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.autosprog_cache_atom !== 'undefined')){
} else {
sprog.webgl.shaders.autosprog_cache_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.get_autosprog = (function sprog$webgl$shaders$get_autosprog(gl,shader_sources){
var autosprog_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,shader_sources], null);
var temp__5802__auto__ = (function (){var fexpr__28162 = cljs.core.deref(sprog.webgl.shaders.autosprog_cache_atom);
return (fexpr__28162.cljs$core$IFn$_invoke$arity$1 ? fexpr__28162.cljs$core$IFn$_invoke$arity$1(autosprog_key) : fexpr__28162.call(null,autosprog_key));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var autosprog = temp__5802__auto__;
return autosprog;
} else {
var autosprog = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.webgl.shaders.create_sprog,gl),shader_sources);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.shaders.autosprog_cache_atom,cljs.core.assoc,autosprog_key,autosprog);

return autosprog;
}
});
sprog.webgl.shaders.run_shaders_BANG_ = (function sprog$webgl$shaders$run_shaders_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28223 = arguments.length;
var i__5767__auto___28224 = (0);
while(true){
if((i__5767__auto___28224 < len__5766__auto___28223)){
args__5772__auto__.push((arguments[i__5767__auto___28224]));

var G__28225 = (i__5767__auto___28224 + (1));
i__5767__auto___28224 = G__28225;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((7) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((7)),(0),null)):null);
return sprog.webgl.shaders.run_shaders_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_shaders_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,sources,size,uniform_map,attribute_map,start,length,p__28174){
var vec__28175 = p__28174;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28175,(0),null);
return sprog.webgl.shaders.run_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog.webgl.shaders.get_autosprog(gl,sources),size,uniform_map,attribute_map,start,length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_shaders_BANG_.cljs$lang$maxFixedArity = (7));

/** @this {Function} */
(sprog.webgl.shaders.run_shaders_BANG_.cljs$lang$applyTo = (function (seq28163){
var G__28164 = cljs.core.first(seq28163);
var seq28163__$1 = cljs.core.next(seq28163);
var G__28165 = cljs.core.first(seq28163__$1);
var seq28163__$2 = cljs.core.next(seq28163__$1);
var G__28166 = cljs.core.first(seq28163__$2);
var seq28163__$3 = cljs.core.next(seq28163__$2);
var G__28167 = cljs.core.first(seq28163__$3);
var seq28163__$4 = cljs.core.next(seq28163__$3);
var G__28168 = cljs.core.first(seq28163__$4);
var seq28163__$5 = cljs.core.next(seq28163__$4);
var G__28169 = cljs.core.first(seq28163__$5);
var seq28163__$6 = cljs.core.next(seq28163__$5);
var G__28170 = cljs.core.first(seq28163__$6);
var seq28163__$7 = cljs.core.next(seq28163__$6);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28164,G__28165,G__28166,G__28167,G__28168,G__28169,G__28170,seq28163__$7);
}));

if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.shaders !== 'undefined') && (typeof sprog.webgl.shaders.purefrag_autosprog_cache_atom !== 'undefined')){
} else {
sprog.webgl.shaders.purefrag_autosprog_cache_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.shaders.get_purefrag_autosprog = (function sprog$webgl$shaders$get_purefrag_autosprog(gl,shader_source){
var autosprog_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,shader_source], null);
var temp__5802__auto__ = (function (){var fexpr__28181 = cljs.core.deref(sprog.webgl.shaders.purefrag_autosprog_cache_atom);
return (fexpr__28181.cljs$core$IFn$_invoke$arity$1 ? fexpr__28181.cljs$core$IFn$_invoke$arity$1(autosprog_key) : fexpr__28181.call(null,autosprog_key));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var autosprog = temp__5802__auto__;
return autosprog;
} else {
var autosprog = sprog.webgl.shaders.create_purefrag_sprog(gl,shader_source);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.shaders.purefrag_autosprog_cache_atom,cljs.core.assoc,autosprog_key,autosprog);

return autosprog;
}
});
sprog.webgl.shaders.run_purefrag_shader_BANG_ = (function sprog$webgl$shaders$run_purefrag_shader_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28226 = arguments.length;
var i__5767__auto___28227 = (0);
while(true){
if((i__5767__auto___28227 < len__5766__auto___28226)){
args__5772__auto__.push((arguments[i__5767__auto___28227]));

var G__28228 = (i__5767__auto___28227 + (1));
i__5767__auto___28227 = G__28228;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,source,size,uniform_map,p__28187){
var vec__28188 = p__28187;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28188,(0),null);
return sprog.webgl.shaders.run_purefrag_sprog_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog.webgl.shaders.get_purefrag_autosprog(gl,source),size,uniform_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0));
}));

(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$lang$applyTo = (function (seq28182){
var G__28183 = cljs.core.first(seq28182);
var seq28182__$1 = cljs.core.next(seq28182);
var G__28184 = cljs.core.first(seq28182__$1);
var seq28182__$2 = cljs.core.next(seq28182__$1);
var G__28185 = cljs.core.first(seq28182__$2);
var seq28182__$3 = cljs.core.next(seq28182__$2);
var G__28186 = cljs.core.first(seq28182__$3);
var seq28182__$4 = cljs.core.next(seq28182__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28183,G__28184,G__28185,G__28186,seq28182__$4);
}));


//# sourceMappingURL=sprog.webgl.shaders.js.map
