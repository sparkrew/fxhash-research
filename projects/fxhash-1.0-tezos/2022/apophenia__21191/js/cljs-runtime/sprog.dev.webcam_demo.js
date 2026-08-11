goog.provide('sprog.dev.webcam_demo');
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.webcam_demo !== 'undefined') && (typeof sprog.dev.webcam_demo.gl_atom !== 'undefined')){
} else {
sprog.dev.webcam_demo.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.webcam_demo !== 'undefined') && (typeof sprog.dev.webcam_demo.tex_atom !== 'undefined')){
} else {
sprog.dev.webcam_demo.tex_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.webcam_demo !== 'undefined') && (typeof sprog.dev.webcam_demo.video_element_atom !== 'undefined')){
} else {
sprog.dev.webcam_demo.video_element_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof sprog !== 'undefined') && (typeof sprog.dev !== 'undefined') && (typeof sprog.dev.webcam_demo !== 'undefined') && (typeof sprog.dev.webcam_demo.time_updated_QMARK__atom !== 'undefined')){
} else {
sprog.dev.webcam_demo.time_updated_QMARK__atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
sprog.dev.webcam_demo.update_page_BANG_ = (function sprog$dev$webcam_demo$update_page_BANG_(){
sprog.dom.canvas.square_maximize_gl_canvas(cljs.core.deref(sprog.dev.webcam_demo.gl_atom));

if(cljs.core.truth_(cljs.core.deref(sprog.dev.webcam_demo.time_updated_QMARK__atom))){
sprog.webgl.textures.copy_html_image_data_BANG_(cljs.core.deref(sprog.dev.webcam_demo.gl_atom),cljs.core.deref(sprog.dev.webcam_demo.tex_atom),cljs.core.deref(sprog.dev.webcam_demo.video_element_atom));
} else {
}

sprog.webgl.shaders.run_purefrag_shader_BANG_(cljs.core.deref(sprog.dev.webcam_demo.gl_atom),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"version","version",425292698),"300 es",new cljs.core.Keyword(null,"precision","precision",-1175707478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"highp","highp",-1632036408,null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),new cljs.core.Symbol(null,"sampler2D","sampler2D",-466781117,null)], null),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null)], null),new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"=vec2","=vec2",1201686179,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"gl_FragCoord.xy","gl_FragCoord.xy",1439409866,null),new cljs.core.Symbol(null,"size","size",-1555742762,null))),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"fragColor","fragColor",-1080026643,null),cljs.core.list(new cljs.core.Symbol(null,"vec4","vec4",-2023253643,null),cljs.core.list(new cljs.core.Symbol(null,".xyz",".xyz",1277607205,null),cljs.core.list(new cljs.core.Symbol(null,"texture","texture",1374239876,null),new cljs.core.Symbol(null,"tex","tex",-1347377810,null),cljs.core.list(new cljs.core.Symbol(null,"vec2","vec2",878272887,null),new cljs.core.Symbol(null,"pos.x","pos.x",708553529,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(1),new cljs.core.Symbol(null,"pos.y","pos.y",-1968888282,null))))),(1))))], null),sprog.dom.canvas.canvas_resolution(cljs.core.deref(sprog.dev.webcam_demo.gl_atom)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",sprog.dom.canvas.canvas_resolution(cljs.core.deref(sprog.dev.webcam_demo.gl_atom))], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, ["tex",cljs.core.deref(sprog.dev.webcam_demo.tex_atom)], null)], null));

return requestAnimationFrame(sprog.dev.webcam_demo.update_page_BANG_);
});

sprog.dev.webcam_demo.init = (function sprog$dev$webcam_demo$init(){
return sprog.webgl.textures.create_webcam_video_element((function (video){
cljs.core.reset_BANG_(sprog.dev.webcam_demo.gl_atom,sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));

cljs.core.reset_BANG_(sprog.dev.webcam_demo.tex_atom,sprog.webgl.textures.create_tex(cljs.core.deref(sprog.dev.webcam_demo.gl_atom),new cljs.core.Keyword(null,"f8","f8",-2141475484),(1)));

video.addEventListener("timeupdate",(function (){
return cljs.core.reset_BANG_(sprog.dev.webcam_demo.time_updated_QMARK__atom,true);
}));

cljs.core.reset_BANG_(sprog.dev.webcam_demo.video_element_atom,video);

return sprog.dev.webcam_demo.update_page_BANG_();
}));
});

//# sourceMappingURL=sprog.dev.webcam_demo.js.map
