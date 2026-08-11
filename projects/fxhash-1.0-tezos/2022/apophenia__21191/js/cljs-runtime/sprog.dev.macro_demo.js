goog.provide('sprog.dev.macro_demo');
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.macro_demo !== 'undefined') && (typeof sprog.dev.macro_demo.gl_atom !== 'undefined')){
} else {
sprog.dev.macro_demo.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
sprog.dev.macro_demo.frag_source = sprog.iglu.core.iglu__GT_glsl.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rand","rand",908504774),(function() {
var G__28235 = null;
var G__28235__0 = (function (){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
});
var G__28235__2 = (function (minimum,maximum){
return (minimum + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((maximum - minimum)));
});
G__28235 = function(minimum,maximum){
switch(arguments.length){
case 0:
return G__28235__0.call(this);
case 2:
return G__28235__2.call(this,minimum,maximum);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28235.cljs$core$IFn$_invoke$arity$0 = G__28235__0;
G__28235.cljs$core$IFn$_invoke$arity$2 = G__28235__2;
return G__28235;
})()
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"mouse","mouse",2119160499,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=float","=float",-549173165,null),new cljs.core.Symbol(null,"dist","dist",238694383,null),cljs.core.list(new cljs.core.Symbol(null,"distance","distance",-31362367,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),cljs.core.list(new cljs.core.Keyword(null,"rand","rand",908504774)),cljs.core.list(new cljs.core.Keyword(null,"rand","rand",908504774))))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"dist","dist",238694383,null),cljs.core.list(new cljs.core.Keyword(null,"rand","rand",908504774))),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),(0),(0),(0),(1)))))], null)], 0));
sprog.dev.macro_demo.update_page_BANG_ = (function sprog$dev$macro_demo$update_page_BANG_(){
sprog.dom.canvas.square_maximize_gl_canvas(cljs.core.deref(sprog.dev.macro_demo.gl_atom));

sprog.webgl.shaders.run_purefrag_shader_BANG_(cljs.core.deref(sprog.dev.macro_demo.gl_atom),sprog.dev.macro_demo.frag_source,sprog.dom.canvas.canvas_resolution(cljs.core.deref(sprog.dev.macro_demo.gl_atom)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",sprog.dom.canvas.canvas_resolution(cljs.core.deref(sprog.dev.macro_demo.gl_atom))], null)], null));

return requestAnimationFrame(sprog.dev.macro_demo.update_page_BANG_);
});
sprog.dev.macro_demo.init = (function sprog$dev$macro_demo$init(){
cljs.core.reset_BANG_(sprog.dev.macro_demo.gl_atom,sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));

return sprog.dev.macro_demo.update_page_BANG_();
});

//# sourceMappingURL=sprog.dev.macro_demo.js.map
