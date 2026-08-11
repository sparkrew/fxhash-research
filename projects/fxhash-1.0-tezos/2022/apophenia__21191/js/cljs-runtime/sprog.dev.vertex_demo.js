goog.provide('sprog.dev.vertex_demo');
sprog.dev.vertex_demo.pos_buffer_data = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(0),(1)], null);
sprog.dev.vertex_demo.color_buffer_data = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(0),(1),(0),(0),(0),(1)], null);
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.vertex_demo !== 'undefined') && (typeof sprog.dev.vertex_demo.gl_atom !== 'undefined')){
} else {
sprog.dev.vertex_demo.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.vertex_demo !== 'undefined') && (typeof sprog.dev.vertex_demo.pos_boj_atom !== 'undefined')){
} else {
sprog.dev.vertex_demo.pos_boj_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.vertex_demo !== 'undefined') && (typeof sprog.dev.vertex_demo.color_boj_atom !== 'undefined')){
} else {
sprog.dev.vertex_demo.color_boj_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
sprog.dev.vertex_demo.vert_source = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"vertexPos","vertexPos",-1434110990,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"vertexColor","vertexColor",1654669002,null),new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"rotation","rotation",-87520117,null),new cljs.core.Symbol(null,"mat2","mat2",1878955890,null)], null),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"vertexColor","vertexColor",1654669002,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"gl_Position","gl_Position",-773510725,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"vertexPos","vertexPos",-1434110990,null),new cljs.core.Symbol(null,"rotation","rotation",-87520117,null)),(0),(1))))], null);
sprog.dev.vertex_demo.frag_source = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"vec3","vec3",-1537755281,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),new cljs.core.Symbol(null,"color","color",-1642760596,null),(1))))], null);
sprog.dev.vertex_demo.update_page_BANG_ = (function sprog$dev$vertex_demo$update_page_BANG_(){
sprog.dom.canvas.square_maximize_gl_canvas(cljs.core.deref(sprog.dev.vertex_demo.gl_atom));

sprog.webgl.shaders.run_shaders_BANG_(cljs.core.deref(sprog.dev.vertex_demo.gl_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprog.dev.vertex_demo.vert_source,sprog.dev.vertex_demo.frag_source], null),sprog.dom.canvas.canvas_resolution(cljs.core.deref(sprog.dev.vertex_demo.gl_atom)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"matrices","matrices",-1129858261),new cljs.core.PersistentArrayMap(null, 1, ["rotation",(function (){var angle = sprog.util.seconds_since_startup();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(angle),(- Math.sin(angle)),Math.sin(angle),Math.cos(angle)], null);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 2, ["vertexPos",cljs.core.deref(sprog.dev.vertex_demo.pos_boj_atom),"vertexColor",cljs.core.deref(sprog.dev.vertex_demo.color_boj_atom)], null),(0),(3));

return requestAnimationFrame(sprog.dev.vertex_demo.update_page_BANG_);
});

sprog.dev.vertex_demo.init = (function sprog$dev$vertex_demo$init(){
cljs.core.reset_BANG_(sprog.dev.vertex_demo.gl_atom,sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));

cljs.core.reset_BANG_(sprog.dev.vertex_demo.pos_boj_atom,sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(sprog.dev.vertex_demo.gl_atom),(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),(new Float32Array(sprog.dev.vertex_demo.pos_buffer_data))], null)], 0)));

cljs.core.reset_BANG_(sprog.dev.vertex_demo.color_boj_atom,sprog.webgl.attributes.create_boj_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(sprog.dev.vertex_demo.gl_atom),(3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),(new Float32Array(sprog.dev.vertex_demo.color_buffer_data))], null)], 0)));

return sprog.dev.vertex_demo.update_page_BANG_();
});

//# sourceMappingURL=sprog.dev.vertex_demo.js.map
