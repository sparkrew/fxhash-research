goog.provide('sprog.dev.multi_texture_output_demo');
sprog.dev.multi_texture_output_demo.texture_resolution = (8);
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo.gl_atom !== 'undefined')){
} else {
sprog.dev.multi_texture_output_demo.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo.texture_1_atom !== 'undefined')){
} else {
sprog.dev.multi_texture_output_demo.texture_1_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo !== 'undefined') && (typeof sprog.dev.multi_texture_output_demo.texture_2_atom !== 'undefined')){
} else {
sprog.dev.multi_texture_output_demo.texture_2_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
sprog.dev.multi_texture_output_demo.render_frag_source = sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"texture-resolution-f","texture-resolution-f",-2100344727),sprog.dev.multi_texture_output_demo.texture_resolution.toFixed((1))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"fragColor0","fragColor0",-18826409,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),new cljs.core.Symbol(null,"fragColor1","fragColor1",1007455246,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"fragColor0","fragColor0",-18826409,null),(0),new cljs.core.Symbol(null,"fragColor1","fragColor1",1007455246,null),(1)], null),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Keyword(null,"texture-resolution-f","texture-resolution-f",-2100344727))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor0","fragColor0",-18826409,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),(0),(1))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor1","fragColor1",1007455246,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),(0),new cljs.core.Symbol(null,"pos","pos",775924307,null),(1))))], null)], 0));
sprog.dev.multi_texture_output_demo.draw_frag_source = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"tex1","tex1",241795155,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null),new cljs.core.Symbol(null,"tex2","tex2",1272526367,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"pos.x","pos.x",708553529,null),0.5),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex1","tex1",241795155,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),(2),(1)))),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex2","tex2",1272526367,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),0.5,(0))),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),(2),(1)))))))], null);
sprog.dev.multi_texture_output_demo.update_page_BANG_ = (function sprog$dev$multi_texture_output_demo$update_page_BANG_(){
sprog.dom.canvas.maximize_gl_canvas(cljs.core.deref(sprog.dev.multi_texture_output_demo.gl_atom));

sprog.webgl.shaders.run_purefrag_shader_BANG_(cljs.core.deref(sprog.dev.multi_texture_output_demo.gl_atom),sprog.dev.multi_texture_output_demo.draw_frag_source,sprog.dom.canvas.canvas_resolution(cljs.core.deref(sprog.dev.multi_texture_output_demo.gl_atom)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",sprog.dom.canvas.canvas_resolution(cljs.core.deref(sprog.dev.multi_texture_output_demo.gl_atom))], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 2, ["tex1",cljs.core.deref(sprog.dev.multi_texture_output_demo.texture_1_atom),"tex2",cljs.core.deref(sprog.dev.multi_texture_output_demo.texture_2_atom)], null)], null));

return requestAnimationFrame(sprog.dev.multi_texture_output_demo.update_page_BANG_);
});

sprog.dev.multi_texture_output_demo.init = (function sprog$dev$multi_texture_output_demo$init(){
cljs.core.reset_BANG_(sprog.dev.multi_texture_output_demo.gl_atom,sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));

var seq__28194_28201 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprog.dev.multi_texture_output_demo.texture_1_atom,sprog.dev.multi_texture_output_demo.texture_2_atom], null));
var chunk__28195_28202 = null;
var count__28196_28203 = (0);
var i__28197_28204 = (0);
while(true){
if((i__28197_28204 < count__28196_28203)){
var tex_atom_28205 = chunk__28195_28202.cljs$core$IIndexed$_nth$arity$2(null,i__28197_28204);
cljs.core.reset_BANG_(tex_atom_28205,sprog.webgl.textures.create_tex.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(sprog.dev.multi_texture_output_demo.gl_atom),new cljs.core.Keyword(null,"f8","f8",-2141475484),sprog.dev.multi_texture_output_demo.texture_resolution,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349),new cljs.core.Keyword(null,"nearest","nearest",1176353890)], null)], 0)));


var G__28206 = seq__28194_28201;
var G__28207 = chunk__28195_28202;
var G__28208 = count__28196_28203;
var G__28209 = (i__28197_28204 + (1));
seq__28194_28201 = G__28206;
chunk__28195_28202 = G__28207;
count__28196_28203 = G__28208;
i__28197_28204 = G__28209;
continue;
} else {
var temp__5804__auto___28210 = cljs.core.seq(seq__28194_28201);
if(temp__5804__auto___28210){
var seq__28194_28211__$1 = temp__5804__auto___28210;
if(cljs.core.chunked_seq_QMARK_(seq__28194_28211__$1)){
var c__5565__auto___28212 = cljs.core.chunk_first(seq__28194_28211__$1);
var G__28213 = cljs.core.chunk_rest(seq__28194_28211__$1);
var G__28214 = c__5565__auto___28212;
var G__28215 = cljs.core.count(c__5565__auto___28212);
var G__28216 = (0);
seq__28194_28201 = G__28213;
chunk__28195_28202 = G__28214;
count__28196_28203 = G__28215;
i__28197_28204 = G__28216;
continue;
} else {
var tex_atom_28217 = cljs.core.first(seq__28194_28211__$1);
cljs.core.reset_BANG_(tex_atom_28217,sprog.webgl.textures.create_tex.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(sprog.dev.multi_texture_output_demo.gl_atom),new cljs.core.Keyword(null,"f8","f8",-2141475484),sprog.dev.multi_texture_output_demo.texture_resolution,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349),new cljs.core.Keyword(null,"nearest","nearest",1176353890)], null)], 0)));


var G__28218 = cljs.core.next(seq__28194_28211__$1);
var G__28219 = null;
var G__28220 = (0);
var G__28221 = (0);
seq__28194_28201 = G__28218;
chunk__28195_28202 = G__28219;
count__28196_28203 = G__28220;
i__28197_28204 = G__28221;
continue;
}
} else {
}
}
break;
}

sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(sprog.dev.multi_texture_output_demo.gl_atom),sprog.dev.multi_texture_output_demo.render_frag_source,sprog.dev.multi_texture_output_demo.texture_resolution,cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(sprog.dev.multi_texture_output_demo.texture_1_atom),cljs.core.deref(sprog.dev.multi_texture_output_demo.texture_2_atom)], null)], null)], 0));

return sprog.dev.multi_texture_output_demo.update_page_BANG_();
});

//# sourceMappingURL=sprog.dev.multi_texture_output_demo.js.map
