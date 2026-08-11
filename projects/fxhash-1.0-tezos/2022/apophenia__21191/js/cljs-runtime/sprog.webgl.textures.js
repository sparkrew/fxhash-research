goog.provide('sprog.webgl.textures');
if((typeof sprog !== 'undefined') && (typeof sprog.webgl !== 'undefined') && (typeof sprog.webgl.textures !== 'undefined') && (typeof sprog.webgl.textures.framebuffer_map_atom !== 'undefined')){
} else {
sprog.webgl.textures.framebuffer_map_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.webgl.textures.get_framebuffer = (function sprog$webgl$textures$get_framebuffer(gl,textures){
var temp__5802__auto__ = (function (){var G__27839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,textures], null);
var fexpr__27838 = cljs.core.deref(sprog.webgl.textures.framebuffer_map_atom);
return (fexpr__27838.cljs$core$IFn$_invoke$arity$1 ? fexpr__27838.cljs$core$IFn$_invoke$arity$1(G__27839) : fexpr__27838.call(null,G__27839));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var framebuffer = temp__5802__auto__;
return framebuffer;
} else {
var framebuffer = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);

var seq__27842_28057 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,textures,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__27843_28058 = null;
var count__27844_28059 = (0);
var i__27845_28060 = (0);
while(true){
if((i__27845_28060 < count__27844_28059)){
var vec__27873_28061 = chunk__27843_28058.cljs$core$IIndexed$_nth$arity$2(null,i__27845_28060);
var texture_28062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27873_28061,(0),null);
var index_28063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27873_28061,(1),null);
if(cljs.core.vector_QMARK_(texture_28062)){
gl.framebufferTextureLayer(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_28063),cljs.core.first(texture_28062),(0),cljs.core.second(texture_28062));
} else {
gl.framebufferTexture2D(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_28063),gl.TEXTURE_2D,texture_28062,(0));
}


var G__28066 = seq__27842_28057;
var G__28067 = chunk__27843_28058;
var G__28068 = count__27844_28059;
var G__28069 = (i__27845_28060 + (1));
seq__27842_28057 = G__28066;
chunk__27843_28058 = G__28067;
count__27844_28059 = G__28068;
i__27845_28060 = G__28069;
continue;
} else {
var temp__5804__auto___28072 = cljs.core.seq(seq__27842_28057);
if(temp__5804__auto___28072){
var seq__27842_28074__$1 = temp__5804__auto___28072;
if(cljs.core.chunked_seq_QMARK_(seq__27842_28074__$1)){
var c__5565__auto___28075 = cljs.core.chunk_first(seq__27842_28074__$1);
var G__28076 = cljs.core.chunk_rest(seq__27842_28074__$1);
var G__28077 = c__5565__auto___28075;
var G__28078 = cljs.core.count(c__5565__auto___28075);
var G__28079 = (0);
seq__27842_28057 = G__28076;
chunk__27843_28058 = G__28077;
count__27844_28059 = G__28078;
i__27845_28060 = G__28079;
continue;
} else {
var vec__27876_28080 = cljs.core.first(seq__27842_28074__$1);
var texture_28081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27876_28080,(0),null);
var index_28082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27876_28080,(1),null);
if(cljs.core.vector_QMARK_(texture_28081)){
gl.framebufferTextureLayer(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_28082),cljs.core.first(texture_28081),(0),cljs.core.second(texture_28081));
} else {
gl.framebufferTexture2D(gl.FRAMEBUFFER,(gl.COLOR_ATTACHMENT0 + index_28082),gl.TEXTURE_2D,texture_28081,(0));
}


var G__28084 = cljs.core.next(seq__27842_28074__$1);
var G__28085 = null;
var G__28086 = (0);
var G__28087 = (0);
seq__27842_28057 = G__28084;
chunk__27843_28058 = G__28085;
count__27844_28059 = G__28086;
i__27845_28060 = G__28087;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sprog.webgl.textures.framebuffer_map_atom,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl,textures], null),framebuffer);

return framebuffer;
}
});
sprog.webgl.textures.target_screen_BANG_ = (function sprog$webgl$textures$target_screen_BANG_(gl){
return gl.bindFramebuffer(gl.FRAMEBUFFER,null);
});
sprog.webgl.textures.target_textures_BANG_ = (function sprog$webgl$textures$target_textures_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28091 = arguments.length;
var i__5767__auto___28092 = (0);
while(true){
if((i__5767__auto___28092 < len__5766__auto___28091)){
args__5772__auto__.push((arguments[i__5767__auto___28092]));

var G__28093 = (i__5767__auto___28092 + (1));
i__5767__auto___28092 = G__28093;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl,textures){
gl.bindFramebuffer(gl.FRAMEBUFFER,sprog.webgl.textures.get_framebuffer(gl,textures));

return gl.drawBuffers(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27879_SHARP_){
return (gl.COLOR_ATTACHMENT0 + p1__27879_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(textures))));
}));

(sprog.webgl.textures.target_textures_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.textures.target_textures_BANG_.cljs$lang$applyTo = (function (seq27881){
var G__27882 = cljs.core.first(seq27881);
var seq27881__$1 = cljs.core.next(seq27881);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27882,seq27881__$1);
}));

sprog.webgl.textures.set_tex_parameters = (function sprog$webgl$textures$set_tex_parameters(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28094 = arguments.length;
var i__5767__auto___28095 = (0);
while(true){
if((i__5767__auto___28095 < len__5766__auto___28094)){
args__5772__auto__.push((arguments[i__5767__auto___28095]));

var G__28096 = (i__5767__auto___28095 + (1));
i__5767__auto___28095 = G__28096;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((4) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((4)),(0),null)):null);
return sprog.webgl.textures.set_tex_parameters.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5773__auto__);
});

(sprog.webgl.textures.set_tex_parameters.cljs$core$IFn$_invoke$arity$variadic = (function (gl,texture,filter_mode,wrap_mode,p__27890){
var vec__27891 = p__27890;
var three_d_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27891,(0),null);
var texture_target = (cljs.core.truth_(three_d_QMARK_)?gl.TEXTURE_3D:gl.TEXTURE_2D);
gl.bindTexture(texture_target,texture);

var gl_filter_mode_28100 = (function (){var fexpr__27894 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linear","linear",872268697),gl.LINEAR,new cljs.core.Keyword(null,"nearest","nearest",1176353890),gl.NEAREST], null);
return (fexpr__27894.cljs$core$IFn$_invoke$arity$1 ? fexpr__27894.cljs$core$IFn$_invoke$arity$1(filter_mode) : fexpr__27894.call(null,filter_mode));
})();
gl.texParameteri(texture_target,gl.TEXTURE_MIN_FILTER,gl_filter_mode_28100);

gl.texParameteri(texture_target,gl.TEXTURE_MAG_FILTER,gl_filter_mode_28100);

var wrap_mode__GT_gl_enum = (function (mode){
var G__27898 = mode;
var G__27898__$1 = (((G__27898 instanceof cljs.core.Keyword))?G__27898.fqn:null);
switch (G__27898__$1) {
case "clamp":
return gl.CLAMP_TO_EDGE;

break;
case "repeat":
return gl.REPEAT;

break;
case "mirror":
return gl.MIRRORED_REPEAT;

break;
default:
return mode;

}
});
var vec__27895 = ((cljs.core.coll_QMARK_(wrap_mode))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(wrap_mode__GT_gl_enum,wrap_mode):cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(wrap_mode__GT_gl_enum(wrap_mode)));
var gl_wrap_s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895,(0),null);
var gl_wrap_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895,(1),null);
var gl_wrap_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895,(2),null);
gl.texParameteri(texture_target,gl.TEXTURE_WRAP_S,gl_wrap_s);

gl.texParameteri(texture_target,gl.TEXTURE_WRAP_T,gl_wrap_t);

if(cljs.core.truth_(three_d_QMARK_)){
return gl.texParameteri(texture_target,gl.TEXTURE_WRAP_R,gl_wrap_r);
} else {
return null;
}
}));

(sprog.webgl.textures.set_tex_parameters.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sprog.webgl.textures.set_tex_parameters.cljs$lang$applyTo = (function (seq27885){
var G__27886 = cljs.core.first(seq27885);
var seq27885__$1 = cljs.core.next(seq27885);
var G__27887 = cljs.core.first(seq27885__$1);
var seq27885__$2 = cljs.core.next(seq27885__$1);
var G__27888 = cljs.core.first(seq27885__$2);
var seq27885__$3 = cljs.core.next(seq27885__$2);
var G__27889 = cljs.core.first(seq27885__$3);
var seq27885__$4 = cljs.core.next(seq27885__$3);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27886,G__27887,G__27888,G__27889,seq27885__$4);
}));

sprog.webgl.textures.create_tex = (function sprog$webgl$textures$create_tex(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28105 = arguments.length;
var i__5767__auto___28106 = (0);
while(true){
if((i__5767__auto___28106 < len__5766__auto___28105)){
args__5772__auto__.push((arguments[i__5767__auto___28106]));

var G__28107 = (i__5767__auto___28106 + (1));
i__5767__auto___28106 = G__28107;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return sprog.webgl.textures.create_tex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(sprog.webgl.textures.create_tex.cljs$core$IFn$_invoke$arity$variadic = (function (gl,texture_type,resolution,p__27913){
var vec__27914 = p__27913;
var map__27917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27914,(0),null);
var map__27917__$1 = cljs.core.__destructure_map(map__27917);
var three_d_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27917__$1,new cljs.core.Keyword(null,"3d","3d",-1024035737));
var wrap_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27917__$1,new cljs.core.Keyword(null,"wrap-mode","wrap-mode",1729516312),new cljs.core.Keyword(null,"repeat","repeat",832692087));
var filter_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27917__$1,new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349));
var channels = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27917__$1,new cljs.core.Keyword(null,"channels","channels",1132759174),(4));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27917__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var texture_target = (cljs.core.truth_(three_d_QMARK_)?gl.TEXTURE_3D:gl.TEXTURE_2D);
var tex = gl.createTexture(texture_target);
gl.bindTexture(texture_target,tex);

var internal_format_28116 = (function (){var G__27921 = (channels - (1));
var fexpr__27920 = (function (){var fexpr__27922 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.R8,gl.RG8,gl.RGB8,gl.RGBA], null),new cljs.core.Keyword(null,"u16","u16",-818464124),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.R16UI,gl.RG16UI,gl.RGB16UI,gl.RGBA16UI], null),new cljs.core.Keyword(null,"u32","u32",1815761749),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.R32UI,gl.RG32UI,gl.RGB32UI,gl.RGBA32UI], null)], null);
return (fexpr__27922.cljs$core$IFn$_invoke$arity$1 ? fexpr__27922.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__27922.call(null,texture_type));
})();
return (fexpr__27920.cljs$core$IFn$_invoke$arity$1 ? fexpr__27920.cljs$core$IFn$_invoke$arity$1(G__27921) : fexpr__27920.call(null,G__27921));
})();
var format_28117 = (function (){var G__27925 = (channels - (1));
var fexpr__27924 = (function (){var fexpr__27926 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f8","f8",-2141475484),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.RED,gl.RG,gl.RGB,gl.RGBA], null),new cljs.core.Keyword(null,"u16","u16",-818464124),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.RED_INTEGER,gl.RG_INTEGER,gl.RGB_INTEGER,gl.RGBA_INTEGER], null),new cljs.core.Keyword(null,"u32","u32",1815761749),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.RED_INTEGER,gl.RG_INTEGER,gl.RGB_INTEGER,gl.RGBA_INTEGER], null)], null);
return (fexpr__27926.cljs$core$IFn$_invoke$arity$1 ? fexpr__27926.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__27926.call(null,texture_type));
})();
return (fexpr__27924.cljs$core$IFn$_invoke$arity$1 ? fexpr__27924.cljs$core$IFn$_invoke$arity$1(G__27925) : fexpr__27924.call(null,G__27925));
})();
var webgl_type_28118 = (function (){var fexpr__27927 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f8","f8",-2141475484),gl.UNSIGNED_BYTE,new cljs.core.Keyword(null,"u16","u16",-818464124),gl.UNSIGNED_SHORT,new cljs.core.Keyword(null,"u32","u32",1815761749),gl.UNSIGNED_INT], null);
return (fexpr__27927.cljs$core$IFn$_invoke$arity$1 ? fexpr__27927.cljs$core$IFn$_invoke$arity$1(texture_type) : fexpr__27927.call(null,texture_type));
})();
if(cljs.core.truth_(three_d_QMARK_)){
var vec__27930_28124 = ((typeof resolution === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolution,resolution,resolution], null):resolution);
var width_28125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930_28124,(0),null);
var height_28126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930_28124,(1),null);
var depth_28127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930_28124,(2),null);
gl.texImage3D(gl.TEXTURE_3D,(0),internal_format_28116,width_28125,height_28126,depth_28127,(0),format_28117,webgl_type_28118,data);
} else {
var vec__27938_28131 = ((typeof resolution === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolution,resolution], null):resolution);
var width_28132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27938_28131,(0),null);
var height_28133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27938_28131,(1),null);
gl.texImage2D(gl.TEXTURE_2D,(0),internal_format_28116,width_28132,height_28133,(0),format_28117,webgl_type_28118,data);
}

sprog.webgl.textures.set_tex_parameters.cljs$core$IFn$_invoke$arity$variadic(gl,tex,(function (){var or__5043__auto__ = filter_mode;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(texture_type,new cljs.core.Keyword(null,"f8","f8",-2141475484))){
return new cljs.core.Keyword(null,"linear","linear",872268697);
} else {
return new cljs.core.Keyword(null,"nearest","nearest",1176353890);
}
}
})(),wrap_mode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([three_d_QMARK_], 0));

return tex;
}));

(sprog.webgl.textures.create_tex.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sprog.webgl.textures.create_tex.cljs$lang$applyTo = (function (seq27906){
var G__27907 = cljs.core.first(seq27906);
var seq27906__$1 = cljs.core.next(seq27906);
var G__27908 = cljs.core.first(seq27906__$1);
var seq27906__$2 = cljs.core.next(seq27906__$1);
var G__27909 = cljs.core.first(seq27906__$2);
var seq27906__$3 = cljs.core.next(seq27906__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27907,G__27908,G__27909,seq27906__$3);
}));

sprog.webgl.textures.delete_tex = (function sprog$webgl$textures$delete_tex(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28134 = arguments.length;
var i__5767__auto___28135 = (0);
while(true){
if((i__5767__auto___28135 < len__5766__auto___28134)){
args__5772__auto__.push((arguments[i__5767__auto___28135]));

var G__28136 = (i__5767__auto___28135 + (1));
i__5767__auto___28135 = G__28136;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.textures.delete_tex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.textures.delete_tex.cljs$core$IFn$_invoke$arity$variadic = (function (gl,textures){
var seq__27984 = cljs.core.seq(cljs.core.flatten(textures));
var chunk__27985 = null;
var count__27986 = (0);
var i__27987 = (0);
while(true){
if((i__27987 < count__27986)){
var tex = chunk__27985.cljs$core$IIndexed$_nth$arity$2(null,i__27987);
gl.deleteTexture(tex);


var G__28137 = seq__27984;
var G__28138 = chunk__27985;
var G__28139 = count__27986;
var G__28140 = (i__27987 + (1));
seq__27984 = G__28137;
chunk__27985 = G__28138;
count__27986 = G__28139;
i__27987 = G__28140;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27984);
if(temp__5804__auto__){
var seq__27984__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27984__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__27984__$1);
var G__28146 = cljs.core.chunk_rest(seq__27984__$1);
var G__28147 = c__5565__auto__;
var G__28148 = cljs.core.count(c__5565__auto__);
var G__28149 = (0);
seq__27984 = G__28146;
chunk__27985 = G__28147;
count__27986 = G__28148;
i__27987 = G__28149;
continue;
} else {
var tex = cljs.core.first(seq__27984__$1);
gl.deleteTexture(tex);


var G__28150 = cljs.core.next(seq__27984__$1);
var G__28151 = null;
var G__28152 = (0);
var G__28153 = (0);
seq__27984 = G__28150;
chunk__27985 = G__28151;
count__27986 = G__28152;
i__27987 = G__28153;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sprog.webgl.textures.delete_tex.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.textures.delete_tex.cljs$lang$applyTo = (function (seq27960){
var G__27962 = cljs.core.first(seq27960);
var seq27960__$1 = cljs.core.next(seq27960);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27962,seq27960__$1);
}));

sprog.webgl.textures.tex_data_array = (function sprog$webgl$textures$tex_data_array(gl,texture,texture_type,size){
sprog.webgl.textures.target_textures_BANG_.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([texture], 0));

var vec__28013 = ((typeof size === 'number')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),size,size], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(2)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),size):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(size),(4)))?size:null)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28013,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28013,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28013,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28013,(3),null);
var array = (function (){var G__28019 = texture_type;
var G__28019__$1 = (((G__28019 instanceof cljs.core.Keyword))?G__28019.fqn:null);
switch (G__28019__$1) {
case "f8":
return (new Uint8Array(((width * height) * (4))));

break;
case "u16":
return (new Uint16Array(((width * height) * (4))));

break;
case "u32":
return (new Uint32Array(((width * height) * (4))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28019__$1)].join('')));

}
})();
var G__28021_28159 = texture_type;
var G__28021_28160__$1 = (((G__28021_28159 instanceof cljs.core.Keyword))?G__28021_28159.fqn:null);
switch (G__28021_28160__$1) {
case "f8":
gl.readPixels(x,y,width,height,gl.RGBA,gl.UNSIGNED_BYTE,array);

break;
case "u16":
gl.readPixels(x,y,width,height,gl.RGBA_INTEGER,gl.UNSIGNED_SHORT,array);

break;
case "u32":
gl.readPixels(x,y,width,height,gl.RGBA_INTEGER,gl.UNSIGNED_INT,array);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28021_28160__$1)].join('')));

}

return array;
});
sprog.webgl.textures.copy_html_image_data_BANG_ = (function sprog$webgl$textures$copy_html_image_data_BANG_(gl,tex,element_or_id){
var element = ((typeof element_or_id === 'string')?document.getElementById(element_or_id):element_or_id);
gl.bindTexture(gl.TEXTURE_2D,tex);

return gl.texImage2D(gl.TEXTURE_2D,(0),gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,element);
});
sprog.webgl.textures.html_image_tex = (function sprog$webgl$textures$html_image_tex(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28171 = arguments.length;
var i__5767__auto___28172 = (0);
while(true){
if((i__5767__auto___28172 < len__5766__auto___28171)){
args__5772__auto__.push((arguments[i__5767__auto___28172]));

var G__28173 = (i__5767__auto___28172 + (1));
i__5767__auto___28172 = G__28173;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sprog.webgl.textures.html_image_tex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sprog.webgl.textures.html_image_tex.cljs$core$IFn$_invoke$arity$variadic = (function (gl,element_or_id,p__28029){
var vec__28030 = p__28029;
var map__28033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28030,(0),null);
var map__28033__$1 = cljs.core.__destructure_map(map__28033);
var wrap_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28033__$1,new cljs.core.Keyword(null,"wrap-mode","wrap-mode",1729516312),new cljs.core.Keyword(null,"repeat","repeat",832692087));
var filter_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28033__$1,new cljs.core.Keyword(null,"filter-mode","filter-mode",-84440349),new cljs.core.Keyword(null,"linear","linear",872268697));
var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D,texture);

sprog.webgl.textures.set_tex_parameters(gl,texture,filter_mode,wrap_mode);

sprog.webgl.textures.copy_html_image_data_BANG_(gl,texture,element_or_id);

return texture;
}));

(sprog.webgl.textures.html_image_tex.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sprog.webgl.textures.html_image_tex.cljs$lang$applyTo = (function (seq28026){
var G__28027 = cljs.core.first(seq28026);
var seq28026__$1 = cljs.core.next(seq28026);
var G__28028 = cljs.core.first(seq28026__$1);
var seq28026__$2 = cljs.core.next(seq28026__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28027,G__28028,seq28026__$2);
}));

sprog.webgl.textures.create_webcam_video_element = (function sprog$webgl$textures$create_webcam_video_element(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28178 = arguments.length;
var i__5767__auto___28179 = (0);
while(true){
if((i__5767__auto___28179 < len__5766__auto___28178)){
args__5772__auto__.push((arguments[i__5767__auto___28179]));

var G__28180 = (i__5767__auto___28179 + (1));
i__5767__auto___28179 = G__28180;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.webgl.textures.create_webcam_video_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.webgl.textures.create_webcam_video_element.cljs$core$IFn$_invoke$arity$variadic = (function (callback,p__28043){
var vec__28044 = p__28043;
var map__28047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28044,(0),null);
var map__28047__$1 = cljs.core.__destructure_map(map__28047);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28047__$1,new cljs.core.Keyword(null,"width","width",-384071477),(1024));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28047__$1,new cljs.core.Keyword(null,"height","height",1025178622),(1024));
var brightness = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28047__$1,new cljs.core.Keyword(null,"brightness","brightness",1067055820),(2));
var media_constraints = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio","audio",1819127321),false,new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"brightness","brightness",1067055820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ideal","ideal",755816607),brightness], null)], null)], null));
var video = document.createElement("video");
return navigator.mediaDevices.getUserMedia(media_constraints).then((function (media_stream){
(video.srcObject = media_stream);

video.setAttribute("playsinline",true);

return (video.onloadedmetadata = (function (e){
video.play();

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(video) : callback.call(null,video));
}));
}));
}));

(sprog.webgl.textures.create_webcam_video_element.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.webgl.textures.create_webcam_video_element.cljs$lang$applyTo = (function (seq28037){
var G__28038 = cljs.core.first(seq28037);
var seq28037__$1 = cljs.core.next(seq28037);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28038,seq28037__$1);
}));


//# sourceMappingURL=sprog.webgl.textures.js.map
