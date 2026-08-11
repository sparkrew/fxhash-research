goog.provide('sprog.dev.basic_demo');
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.basic_demo !== 'undefined') && (typeof sprog.dev.basic_demo.gl_atom !== 'undefined')){
} else {
sprog.dev.basic_demo.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
sprog.dev.basic_demo.update_page_BANG_ = (function sprog$dev$basic_demo$update_page_BANG_(){
sprog.dom.canvas.maximize_gl_canvas(cljs.core.deref(sprog.dev.basic_demo.gl_atom));

sprog.webgl.shaders.run_purefrag_shader_BANG_(cljs.core.deref(sprog.dev.basic_demo.gl_atom),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),(0),(1))))], null),sprog.dom.canvas.canvas_resolution(cljs.core.deref(sprog.dev.basic_demo.gl_atom)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",sprog.dom.canvas.canvas_resolution(cljs.core.deref(sprog.dev.basic_demo.gl_atom))], null)], null));

return requestAnimationFrame(sprog.dev.basic_demo.update_page_BANG_);
});
sprog.dev.basic_demo.init = (function sprog$dev$basic_demo$init(){
cljs.core.reset_BANG_(sprog.dev.basic_demo.gl_atom,sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));

return sprog.dev.basic_demo.update_page_BANG_();
});

//# sourceMappingURL=sprog.dev.basic_demo.js.map
