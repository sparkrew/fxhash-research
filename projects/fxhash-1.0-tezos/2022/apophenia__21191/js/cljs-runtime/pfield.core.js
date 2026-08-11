goog.provide('pfield.core');
pfield.core.field_resolution = (512);
pfield.core.particle_amount = (512);
pfield.core.radius = ((1) / (2048));
if((typeof pfield !== 'undefined') && (typeof pfield.core !== 'undefined') && (typeof pfield.core.gl_atom !== 'undefined')){
} else {
pfield.core.gl_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pfield !== 'undefined') && (typeof pfield.core !== 'undefined') && (typeof pfield.core.location_texs_atom !== 'undefined')){
} else {
pfield.core.location_texs_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pfield !== 'undefined') && (typeof pfield.core !== 'undefined') && (typeof pfield.core.field_tex_atom !== 'undefined')){
} else {
pfield.core.field_tex_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pfield !== 'undefined') && (typeof pfield.core !== 'undefined') && (typeof pfield.core.field2_tex_atom !== 'undefined')){
} else {
pfield.core.field2_tex_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pfield !== 'undefined') && (typeof pfield.core !== 'undefined') && (typeof pfield.core.trail_texs_atom !== 'undefined')){
} else {
pfield.core.trail_texs_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pfield !== 'undefined') && (typeof pfield.core !== 'undefined') && (typeof pfield.core.html_image_atom !== 'undefined')){
} else {
pfield.core.html_image_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
pfield.core.frame_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
pfield.core.max_texture_size = (function pfield$core$max_texture_size(){
var gl = cljs.core.deref(pfield.core.gl_atom);
var max_tex_size = gl.getParameter(gl.MAX_TEXTURE_SIZE);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.min,max_tex_size),sprog.dom.canvas.canvas_resolution(gl));
});
pfield.core.expand_canvas = (function pfield$core$expand_canvas(){
var gl = cljs.core.deref(pfield.core.gl_atom);
return sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic(gl.canvas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561),(2)], null)], 0));
});
pfield.core.resize_handler_BANG_ = (function pfield$core$resize_handler_BANG_(_){
var gl = cljs.core.deref(pfield.core.gl_atom);
pfield.core.expand_canvas();

var resolution = pfield.core.max_texture_size();
var temp_texs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"f8","f8",-2141475484),resolution),sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"f8","f8",-2141475484),resolution)], null);
sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,sprog.iglu.chunks.misc.identity_frag_source(new cljs.core.Keyword(null,"f8","f8",-2141475484)),resolution,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",resolution], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, ["tex",cljs.core.first(cljs.core.deref(pfield.core.trail_texs_atom))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),cljs.core.first(temp_texs)], null)], 0));

sprog.webgl.textures.delete_tex(cljs.core.deref(pfield.core.trail_texs_atom));

return cljs.core.reset_BANG_(pfield.core.trail_texs_atom,temp_texs);
});
pfield.core.update_page_BANG_ = (function pfield$core$update_page_BANG_(){
var gl = cljs.core.deref(pfield.core.gl_atom);
pfield.core.expand_canvas();

sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,pfield.shaders.logic_frag_source,pfield.core.particle_amount,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 3, ["size",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pfield.core.particle_amount,pfield.core.particle_amount], null),"mouse",(cljs.core.truth_(sprog.input.mouse.mouse_present_QMARK_())?sprog.input.mouse.mouse_pos():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),"now",sprog.util.seconds_since_startup()], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 3, ["locationTex",cljs.core.first(cljs.core.deref(pfield.core.location_texs_atom)),"fieldTex",cljs.core.deref(pfield.core.field_tex_atom),"field2Tex",cljs.core.deref(pfield.core.field2_tex_atom)], null),new cljs.core.Keyword(null,"ints","ints",893195924),new cljs.core.PersistentArrayMap(null, 1, ["frame",cljs.core.deref(pfield.core.frame_atom)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),cljs.core.second(cljs.core.deref(pfield.core.location_texs_atom))], null)], 0));

sprog.webgl.shaders.run_shaders_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pfield.shaders.particle_vert_source_u16,pfield.shaders.particle_frag_source_f8], null),pfield.core.max_texture_size(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 2, ["particleTex",cljs.core.first(cljs.core.deref(pfield.core.location_texs_atom)),"tex",cljs.core.deref(pfield.core.html_image_atom)], null),new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 2, ["size",pfield.core.max_texture_size(),"radius",pfield.core.radius], null)], null),cljs.core.PersistentArrayMap.EMPTY,(0),(((6) * pfield.core.particle_amount) * pfield.core.particle_amount),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),cljs.core.first(cljs.core.deref(pfield.core.trail_texs_atom))], null)], 0));

sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,pfield.shaders.trail_frag_source,pfield.core.max_texture_size(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",pfield.core.max_texture_size()], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, ["tex",cljs.core.first(cljs.core.deref(pfield.core.trail_texs_atom))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),cljs.core.second(cljs.core.deref(pfield.core.trail_texs_atom))], null)], 0));

sprog.webgl.shaders.run_purefrag_shader_BANG_(gl,pfield.shaders.render_frag_source,pfield.core.max_texture_size(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",pfield.core.max_texture_size()], null),new cljs.core.Keyword(null,"textures","textures",560681081),new cljs.core.PersistentArrayMap(null, 1, ["tex",cljs.core.second(cljs.core.deref(pfield.core.trail_texs_atom))], null)], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pfield.core.frame_atom),(120))){
fxpreview();
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pfield.core.location_texs_atom,cljs.core.reverse);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pfield.core.trail_texs_atom,cljs.core.reverse);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pfield.core.frame_atom,cljs.core.inc);

return requestAnimationFrame(pfield.core.update_page_BANG_);
});
pfield.core.init = (function pfield$core$init(){
var gl = sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
cljs.core.reset_BANG_(pfield.core.gl_atom,gl);

pfield.core.expand_canvas();

console.log("(=^v^=)");

console.log("follow me on social media! \n    IG: @faycarsons \n    twitter: @hangedgirl23");

console.log("(=u.u=)");

cljs.core.reset_BANG_(pfield.core.field_tex_atom,sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u16","u16",-818464124),pfield.core.field_resolution));

cljs.core.reset_BANG_(pfield.core.field2_tex_atom,sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u16","u16",-818464124),pfield.core.field_resolution));

cljs.core.reset_BANG_(pfield.core.location_texs_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u16","u16",-818464124),pfield.core.particle_amount),sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"u16","u16",-818464124),pfield.core.particle_amount)], null));

cljs.core.reset_BANG_(pfield.core.trail_texs_atom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"f8","f8",-2141475484),pfield.core.max_texture_size()),sprog.webgl.textures.create_tex(gl,new cljs.core.Keyword(null,"f8","f8",-2141475484),pfield.core.max_texture_size())], null));

cljs.core.reset_BANG_(pfield.core.html_image_atom,sprog.webgl.textures.html_image_tex(gl,pfield.shaders.img_id));

sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,pfield.shaders.init_frag_source,pfield.core.particle_amount,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pfield.core.particle_amount,pfield.core.particle_amount], null)], null),new cljs.core.Keyword(null,"ints","ints",893195924),new cljs.core.PersistentArrayMap(null, 1, ["seed",pfield.fxhash_utils.fxrand_int.cljs$core$IFn$_invoke$arity$1((1000))], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),cljs.core.first(cljs.core.deref(pfield.core.location_texs_atom))], null)], 0));

sprog.webgl.shaders.run_purefrag_shader_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,pfield.shaders.field_frag_source,pfield.core.field_resolution,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"floats","floats",-1126940417),new cljs.core.PersistentArrayMap(null, 1, ["size",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pfield.core.field_resolution,pfield.core.field_resolution], null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(pfield.core.field_tex_atom),cljs.core.deref(pfield.core.field2_tex_atom)], null)], null)], 0));

return cljs.core.reset_BANG_(pfield.core.frame_atom,(0));
});
pfield.core.restart_BANG_ = (function pfield$core$restart_BANG_(){
document.body.removeChild(cljs.core.deref(pfield.core.gl_atom).canvas);

return pfield.core.init();
});
pfield.core.pre_init = (function pfield$core$pre_init(){
window.addEventListener("load",(function (_){
pfield.core.init();

return pfield.core.update_page_BANG_();
}));

return window.addEventListener("resize",pfield.core.resize_handler_BANG_);
});

//# sourceMappingURL=pfield.core.js.map
