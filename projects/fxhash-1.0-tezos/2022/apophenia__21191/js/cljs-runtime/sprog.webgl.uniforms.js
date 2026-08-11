goog.provide('sprog.webgl.uniforms');
sprog.webgl.uniforms.ensure_uniform_present_BANG_ = (function sprog$webgl$uniforms$ensure_uniform_present_BANG_(gl,p__30950,uniform_name_str){
var map__30955 = p__30950;
var map__30955__$1 = cljs.core.__destructure_map(map__30955);
var program = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30955__$1,new cljs.core.Keyword(null,"program","program",781564284));
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30955__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
if(cljs.core.not((function (){var fexpr__30957 = cljs.core.deref(uniforms_atom);
return (fexpr__30957.cljs$core$IFn$_invoke$arity$1 ? fexpr__30957.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__30957.call(null,uniform_name_str));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(uniforms_atom,cljs.core.assoc,uniform_name_str,gl.getUniformLocation(program,uniform_name_str));
} else {
return null;
}
});
sprog.webgl.uniforms.set_sprog_uniform_1i_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_1i_BANG_(gl,p__30964,uniform_name,value){
var map__30966 = p__30964;
var map__30966__$1 = cljs.core.__destructure_map(map__30966);
var sprog__$1 = map__30966__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30966__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniform1i((function (){var fexpr__30967 = cljs.core.deref(uniforms_atom);
return (fexpr__30967.cljs$core$IFn$_invoke$arity$1 ? fexpr__30967.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__30967.call(null,uniform_name_str));
})(),value);
});
sprog.webgl.uniforms.set_sprog_uniform_2iv_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_2iv_BANG_(gl,p__30968,uniform_name,value){
var map__30969 = p__30968;
var map__30969__$1 = cljs.core.__destructure_map(map__30969);
var sprog__$1 = map__30969__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30969__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniform2iv((function (){var fexpr__30970 = cljs.core.deref(uniforms_atom);
return (fexpr__30970.cljs$core$IFn$_invoke$arity$1 ? fexpr__30970.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__30970.call(null,uniform_name_str));
})(),value);
});
sprog.webgl.uniforms.set_sprog_uniform_3iv_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_3iv_BANG_(gl,p__30979,uniform_name,value){
var map__30983 = p__30979;
var map__30983__$1 = cljs.core.__destructure_map(map__30983);
var sprog__$1 = map__30983__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30983__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniform3iv((function (){var fexpr__30984 = cljs.core.deref(uniforms_atom);
return (fexpr__30984.cljs$core$IFn$_invoke$arity$1 ? fexpr__30984.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__30984.call(null,uniform_name_str));
})(),value);
});
sprog.webgl.uniforms.set_sprog_uniform_4iv_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_4iv_BANG_(gl,p__30986,uniform_name,value){
var map__30991 = p__30986;
var map__30991__$1 = cljs.core.__destructure_map(map__30991);
var sprog__$1 = map__30991__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30991__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniform4iv((function (){var fexpr__30992 = cljs.core.deref(uniforms_atom);
return (fexpr__30992.cljs$core$IFn$_invoke$arity$1 ? fexpr__30992.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__30992.call(null,uniform_name_str));
})(),value);
});
sprog.webgl.uniforms.set_sprog_uniform_1f_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_1f_BANG_(gl,p__30993,uniform_name,value){
var map__30995 = p__30993;
var map__30995__$1 = cljs.core.__destructure_map(map__30995);
var sprog__$1 = map__30995__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30995__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniform1f((function (){var fexpr__30998 = cljs.core.deref(uniforms_atom);
return (fexpr__30998.cljs$core$IFn$_invoke$arity$1 ? fexpr__30998.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__30998.call(null,uniform_name_str));
})(),value);
});
sprog.webgl.uniforms.set_sprog_uniform_2fv_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_2fv_BANG_(gl,p__31003,uniform_name,value){
var map__31004 = p__31003;
var map__31004__$1 = cljs.core.__destructure_map(map__31004);
var sprog__$1 = map__31004__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31004__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniform2fv((function (){var fexpr__31011 = cljs.core.deref(uniforms_atom);
return (fexpr__31011.cljs$core$IFn$_invoke$arity$1 ? fexpr__31011.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__31011.call(null,uniform_name_str));
})(),value);
});
sprog.webgl.uniforms.set_sprog_uniform_3fv_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_3fv_BANG_(gl,p__31013,uniform_name,value){
var map__31014 = p__31013;
var map__31014__$1 = cljs.core.__destructure_map(map__31014);
var sprog__$1 = map__31014__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31014__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniform3fv((function (){var fexpr__31015 = cljs.core.deref(uniforms_atom);
return (fexpr__31015.cljs$core$IFn$_invoke$arity$1 ? fexpr__31015.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__31015.call(null,uniform_name_str));
})(),value);
});
sprog.webgl.uniforms.set_sprog_uniform_4fv_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_4fv_BANG_(gl,p__31017,uniform_name,value){
var map__31021 = p__31017;
var map__31021__$1 = cljs.core.__destructure_map(map__31021);
var sprog__$1 = map__31021__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31021__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniform4fv((function (){var fexpr__31025 = cljs.core.deref(uniforms_atom);
return (fexpr__31025.cljs$core$IFn$_invoke$arity$1 ? fexpr__31025.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__31025.call(null,uniform_name_str));
})(),value);
});
sprog.webgl.uniforms.set_sprog_uniform_mat2_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_mat2_BANG_(gl,p__31029,uniform_name,value){
var map__31030 = p__31029;
var map__31030__$1 = cljs.core.__destructure_map(map__31030);
var sprog__$1 = map__31030__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31030__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniformMatrix2fv((function (){var fexpr__31031 = cljs.core.deref(uniforms_atom);
return (fexpr__31031.cljs$core$IFn$_invoke$arity$1 ? fexpr__31031.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__31031.call(null,uniform_name_str));
})(),false,value);
});
sprog.webgl.uniforms.set_sprog_uniform_mat3_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_mat3_BANG_(gl,p__31035,uniform_name,value){
var map__31036 = p__31035;
var map__31036__$1 = cljs.core.__destructure_map(map__31036);
var sprog__$1 = map__31036__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31036__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniformMatrix3fv((function (){var fexpr__31037 = cljs.core.deref(uniforms_atom);
return (fexpr__31037.cljs$core$IFn$_invoke$arity$1 ? fexpr__31037.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__31037.call(null,uniform_name_str));
})(),false,value);
});
sprog.webgl.uniforms.set_sprog_uniform_mat4_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniform_mat4_BANG_(gl,p__31045,uniform_name,value){
var map__31046 = p__31045;
var map__31046__$1 = cljs.core.__destructure_map(map__31046);
var sprog__$1 = map__31046__$1;
var uniforms_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31046__$1,new cljs.core.Keyword(null,"uniforms-atom","uniforms-atom",1401359916));
var uniform_name_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uniform_name);
sprog.webgl.uniforms.ensure_uniform_present_BANG_(gl,sprog__$1,uniform_name_str);

return gl.uniformMatrix4fv((function (){var fexpr__31047 = cljs.core.deref(uniforms_atom);
return (fexpr__31047.cljs$core$IFn$_invoke$arity$1 ? fexpr__31047.cljs$core$IFn$_invoke$arity$1(uniform_name_str) : fexpr__31047.call(null,uniform_name_str));
})(),false,value);
});
sprog.webgl.uniforms.set_sprog_float_uniform_BANG_ = (function sprog$webgl$uniforms$set_sprog_float_uniform_BANG_(gl,sprog__$1,uniform_name,value){
var fexpr__31051 = ((typeof value === 'number')?sprog.webgl.uniforms.set_sprog_uniform_1f_BANG_:(((cljs.core.count(value) === (2)))?sprog.webgl.uniforms.set_sprog_uniform_2fv_BANG_:(((cljs.core.count(value) === (3)))?sprog.webgl.uniforms.set_sprog_uniform_3fv_BANG_:(((cljs.core.count(value) === (4)))?sprog.webgl.uniforms.set_sprog_uniform_4fv_BANG_:null))));
return (fexpr__31051.cljs$core$IFn$_invoke$arity$4 ? fexpr__31051.cljs$core$IFn$_invoke$arity$4(gl,sprog__$1,uniform_name,value) : fexpr__31051.call(null,gl,sprog__$1,uniform_name,value));
});
sprog.webgl.uniforms.set_sprog_float_uniforms_BANG_ = (function sprog$webgl$uniforms$set_sprog_float_uniforms_BANG_(gl,sprog__$1,name_value_map){
var seq__31059 = cljs.core.seq(name_value_map);
var chunk__31060 = null;
var count__31061 = (0);
var i__31062 = (0);
while(true){
if((i__31062 < count__31061)){
var vec__31073 = chunk__31060.cljs$core$IIndexed$_nth$arity$2(null,i__31062);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31073,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31073,(1),null);
sprog.webgl.uniforms.set_sprog_float_uniform_BANG_(gl,sprog__$1,name,value);


var G__31225 = seq__31059;
var G__31226 = chunk__31060;
var G__31227 = count__31061;
var G__31228 = (i__31062 + (1));
seq__31059 = G__31225;
chunk__31060 = G__31226;
count__31061 = G__31227;
i__31062 = G__31228;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31059);
if(temp__5804__auto__){
var seq__31059__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31059__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31059__$1);
var G__31229 = cljs.core.chunk_rest(seq__31059__$1);
var G__31230 = c__5565__auto__;
var G__31231 = cljs.core.count(c__5565__auto__);
var G__31232 = (0);
seq__31059 = G__31229;
chunk__31060 = G__31230;
count__31061 = G__31231;
i__31062 = G__31232;
continue;
} else {
var vec__31076 = cljs.core.first(seq__31059__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31076,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31076,(1),null);
sprog.webgl.uniforms.set_sprog_float_uniform_BANG_(gl,sprog__$1,name,value);


var G__31233 = cljs.core.next(seq__31059__$1);
var G__31234 = null;
var G__31235 = (0);
var G__31236 = (0);
seq__31059 = G__31233;
chunk__31060 = G__31234;
count__31061 = G__31235;
i__31062 = G__31236;
continue;
}
} else {
return null;
}
}
break;
}
});
sprog.webgl.uniforms.set_sprog_int_uniform_BANG_ = (function sprog$webgl$uniforms$set_sprog_int_uniform_BANG_(gl,sprog__$1,uniform_name,value){
var fexpr__31089 = ((typeof value === 'number')?sprog.webgl.uniforms.set_sprog_uniform_1i_BANG_:(((cljs.core.count(value) === (2)))?sprog.webgl.uniforms.set_sprog_uniform_2iv_BANG_:(((cljs.core.count(value) === (3)))?sprog.webgl.uniforms.set_sprog_uniform_3iv_BANG_:(((cljs.core.count(value) === (4)))?sprog.webgl.uniforms.set_sprog_uniform_4iv_BANG_:null))));
return (fexpr__31089.cljs$core$IFn$_invoke$arity$4 ? fexpr__31089.cljs$core$IFn$_invoke$arity$4(gl,sprog__$1,uniform_name,value) : fexpr__31089.call(null,gl,sprog__$1,uniform_name,value));
});
sprog.webgl.uniforms.set_sprog_int_uniforms_BANG_ = (function sprog$webgl$uniforms$set_sprog_int_uniforms_BANG_(gl,sprog__$1,name_value_map){
var seq__31090 = cljs.core.seq(name_value_map);
var chunk__31091 = null;
var count__31092 = (0);
var i__31093 = (0);
while(true){
if((i__31093 < count__31092)){
var vec__31123 = chunk__31091.cljs$core$IIndexed$_nth$arity$2(null,i__31093);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31123,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31123,(1),null);
sprog.webgl.uniforms.set_sprog_int_uniform_BANG_(gl,sprog__$1,name,value);


var G__31237 = seq__31090;
var G__31238 = chunk__31091;
var G__31239 = count__31092;
var G__31240 = (i__31093 + (1));
seq__31090 = G__31237;
chunk__31091 = G__31238;
count__31092 = G__31239;
i__31093 = G__31240;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31090);
if(temp__5804__auto__){
var seq__31090__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31090__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31090__$1);
var G__31241 = cljs.core.chunk_rest(seq__31090__$1);
var G__31242 = c__5565__auto__;
var G__31243 = cljs.core.count(c__5565__auto__);
var G__31244 = (0);
seq__31090 = G__31241;
chunk__31091 = G__31242;
count__31092 = G__31243;
i__31093 = G__31244;
continue;
} else {
var vec__31131 = cljs.core.first(seq__31090__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31131,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31131,(1),null);
sprog.webgl.uniforms.set_sprog_int_uniform_BANG_(gl,sprog__$1,name,value);


var G__31246 = cljs.core.next(seq__31090__$1);
var G__31247 = null;
var G__31248 = (0);
var G__31249 = (0);
seq__31090 = G__31246;
chunk__31091 = G__31247;
count__31092 = G__31248;
i__31093 = G__31249;
continue;
}
} else {
return null;
}
}
break;
}
});
sprog.webgl.uniforms.set_sprog_mat_uniform_BANG_ = (function sprog$webgl$uniforms$set_sprog_mat_uniform_BANG_(gl,sprog__$1,uniform_name,value){
var fexpr__31139 = ((typeof value === 'number')?sprog.webgl.uniforms.set_sprog_uniform_1f_BANG_:(((cljs.core.count(value) === (4)))?sprog.webgl.uniforms.set_sprog_uniform_mat2_BANG_:(((cljs.core.count(value) === (9)))?sprog.webgl.uniforms.set_sprog_uniform_mat3_BANG_:(((cljs.core.count(value) === (16)))?sprog.webgl.uniforms.set_sprog_uniform_mat4_BANG_:null))));
return (fexpr__31139.cljs$core$IFn$_invoke$arity$4 ? fexpr__31139.cljs$core$IFn$_invoke$arity$4(gl,sprog__$1,uniform_name,value) : fexpr__31139.call(null,gl,sprog__$1,uniform_name,value));
});
sprog.webgl.uniforms.set_sprog_mat_uniforms_BANG_ = (function sprog$webgl$uniforms$set_sprog_mat_uniforms_BANG_(gl,sprog__$1,name_mat_map){
var seq__31140 = cljs.core.seq(name_mat_map);
var chunk__31141 = null;
var count__31142 = (0);
var i__31143 = (0);
while(true){
if((i__31143 < count__31142)){
var vec__31153 = chunk__31141.cljs$core$IIndexed$_nth$arity$2(null,i__31143);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31153,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31153,(1),null);
sprog.webgl.uniforms.set_sprog_mat_uniform_BANG_(gl,sprog__$1,name,value);


var G__31256 = seq__31140;
var G__31257 = chunk__31141;
var G__31258 = count__31142;
var G__31259 = (i__31143 + (1));
seq__31140 = G__31256;
chunk__31141 = G__31257;
count__31142 = G__31258;
i__31143 = G__31259;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31140);
if(temp__5804__auto__){
var seq__31140__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31140__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31140__$1);
var G__31263 = cljs.core.chunk_rest(seq__31140__$1);
var G__31264 = c__5565__auto__;
var G__31265 = cljs.core.count(c__5565__auto__);
var G__31266 = (0);
seq__31140 = G__31263;
chunk__31141 = G__31264;
count__31142 = G__31265;
i__31143 = G__31266;
continue;
} else {
var vec__31157 = cljs.core.first(seq__31140__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31157,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31157,(1),null);
sprog.webgl.uniforms.set_sprog_mat_uniform_BANG_(gl,sprog__$1,name,value);


var G__31267 = cljs.core.next(seq__31140__$1);
var G__31268 = null;
var G__31269 = (0);
var G__31270 = (0);
seq__31140 = G__31267;
chunk__31141 = G__31268;
count__31142 = G__31269;
i__31143 = G__31270;
continue;
}
} else {
return null;
}
}
break;
}
});
sprog.webgl.uniforms.set_sprog_tex_uniforms_BANG_ = (function sprog$webgl$uniforms$set_sprog_tex_uniforms_BANG_(gl,sprog__$1,name_tex_2d_map,name_tex_3d_map){
var name_tex_2d_vec = cljs.core.vec(name_tex_2d_map);
var name_tex_3d_vec = cljs.core.vec(name_tex_3d_map);
var seq__31160_31271 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(name_tex_2d_vec)));
var chunk__31161_31272 = null;
var count__31162_31273 = (0);
var i__31163_31274 = (0);
while(true){
if((i__31163_31274 < count__31162_31273)){
var i_31275 = chunk__31161_31272.cljs$core$IIndexed$_nth$arity$2(null,i__31163_31274);
var vec__31176_31276 = (name_tex_2d_vec.cljs$core$IFn$_invoke$arity$1 ? name_tex_2d_vec.cljs$core$IFn$_invoke$arity$1(i_31275) : name_tex_2d_vec.call(null,i_31275));
var name_31277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31176_31276,(0),null);
var tex_31278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31176_31276,(1),null);
gl.activeTexture((gl.TEXTURE0 + i_31275));

gl.bindTexture(gl.TEXTURE_2D,tex_31278);

sprog.webgl.uniforms.set_sprog_uniform_1i_BANG_(gl,sprog__$1,name_31277,i_31275);


var G__31279 = seq__31160_31271;
var G__31280 = chunk__31161_31272;
var G__31281 = count__31162_31273;
var G__31282 = (i__31163_31274 + (1));
seq__31160_31271 = G__31279;
chunk__31161_31272 = G__31280;
count__31162_31273 = G__31281;
i__31163_31274 = G__31282;
continue;
} else {
var temp__5804__auto___31283 = cljs.core.seq(seq__31160_31271);
if(temp__5804__auto___31283){
var seq__31160_31285__$1 = temp__5804__auto___31283;
if(cljs.core.chunked_seq_QMARK_(seq__31160_31285__$1)){
var c__5565__auto___31290 = cljs.core.chunk_first(seq__31160_31285__$1);
var G__31291 = cljs.core.chunk_rest(seq__31160_31285__$1);
var G__31292 = c__5565__auto___31290;
var G__31293 = cljs.core.count(c__5565__auto___31290);
var G__31294 = (0);
seq__31160_31271 = G__31291;
chunk__31161_31272 = G__31292;
count__31162_31273 = G__31293;
i__31163_31274 = G__31294;
continue;
} else {
var i_31295 = cljs.core.first(seq__31160_31285__$1);
var vec__31179_31296 = (name_tex_2d_vec.cljs$core$IFn$_invoke$arity$1 ? name_tex_2d_vec.cljs$core$IFn$_invoke$arity$1(i_31295) : name_tex_2d_vec.call(null,i_31295));
var name_31297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31179_31296,(0),null);
var tex_31298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31179_31296,(1),null);
gl.activeTexture((gl.TEXTURE0 + i_31295));

gl.bindTexture(gl.TEXTURE_2D,tex_31298);

sprog.webgl.uniforms.set_sprog_uniform_1i_BANG_(gl,sprog__$1,name_31297,i_31295);


var G__31299 = cljs.core.next(seq__31160_31285__$1);
var G__31300 = null;
var G__31301 = (0);
var G__31302 = (0);
seq__31160_31271 = G__31299;
chunk__31161_31272 = G__31300;
count__31162_31273 = G__31301;
i__31163_31274 = G__31302;
continue;
}
} else {
}
}
break;
}

var seq__31182 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(name_tex_3d_vec)));
var chunk__31183 = null;
var count__31184 = (0);
var i__31185 = (0);
while(true){
if((i__31185 < count__31184)){
var i = chunk__31183.cljs$core$IIndexed$_nth$arity$2(null,i__31185);
var vec__31202_31309 = (name_tex_3d_vec.cljs$core$IFn$_invoke$arity$1 ? name_tex_3d_vec.cljs$core$IFn$_invoke$arity$1(i) : name_tex_3d_vec.call(null,i));
var name_31310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31202_31309,(0),null);
var tex_31311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31202_31309,(1),null);
var index_31312 = (i + cljs.core.count(name_tex_2d_vec));
gl.activeTexture((gl.TEXTURE0 + index_31312));

gl.bindTexture(gl.TEXTURE_3D,tex_31311);

sprog.webgl.uniforms.set_sprog_uniform_1i_BANG_(gl,sprog__$1,name_31310,index_31312);


var G__31313 = seq__31182;
var G__31314 = chunk__31183;
var G__31315 = count__31184;
var G__31316 = (i__31185 + (1));
seq__31182 = G__31313;
chunk__31183 = G__31314;
count__31184 = G__31315;
i__31185 = G__31316;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31182);
if(temp__5804__auto__){
var seq__31182__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31182__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31182__$1);
var G__31317 = cljs.core.chunk_rest(seq__31182__$1);
var G__31318 = c__5565__auto__;
var G__31319 = cljs.core.count(c__5565__auto__);
var G__31320 = (0);
seq__31182 = G__31317;
chunk__31183 = G__31318;
count__31184 = G__31319;
i__31185 = G__31320;
continue;
} else {
var i = cljs.core.first(seq__31182__$1);
var vec__31208_31321 = (name_tex_3d_vec.cljs$core$IFn$_invoke$arity$1 ? name_tex_3d_vec.cljs$core$IFn$_invoke$arity$1(i) : name_tex_3d_vec.call(null,i));
var name_31322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31208_31321,(0),null);
var tex_31323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31208_31321,(1),null);
var index_31324 = (i + cljs.core.count(name_tex_2d_vec));
gl.activeTexture((gl.TEXTURE0 + index_31324));

gl.bindTexture(gl.TEXTURE_3D,tex_31323);

sprog.webgl.uniforms.set_sprog_uniform_1i_BANG_(gl,sprog__$1,name_31322,index_31324);


var G__31330 = cljs.core.next(seq__31182__$1);
var G__31331 = null;
var G__31332 = (0);
var G__31333 = (0);
seq__31182 = G__31330;
chunk__31183 = G__31331;
count__31184 = G__31332;
i__31185 = G__31333;
continue;
}
} else {
return null;
}
}
break;
}
});
sprog.webgl.uniforms.set_sprog_uniforms_BANG_ = (function sprog$webgl$uniforms$set_sprog_uniforms_BANG_(gl,sprog__$1,p__31214){
var map__31215 = p__31214;
var map__31215__$1 = cljs.core.__destructure_map(map__31215);
var floats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31215__$1,new cljs.core.Keyword(null,"floats","floats",-1126940417));
var ints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31215__$1,new cljs.core.Keyword(null,"ints","ints",893195924));
var textures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31215__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var textures_3d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31215__$1,new cljs.core.Keyword(null,"textures-3d","textures-3d",420930416));
var matrices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31215__$1,new cljs.core.Keyword(null,"matrices","matrices",-1129858261));
sprog.webgl.uniforms.set_sprog_float_uniforms_BANG_(gl,sprog__$1,floats);

sprog.webgl.uniforms.set_sprog_int_uniforms_BANG_(gl,sprog__$1,ints);

sprog.webgl.uniforms.set_sprog_tex_uniforms_BANG_(gl,sprog__$1,textures,textures_3d);

return sprog.webgl.uniforms.set_sprog_mat_uniforms_BANG_(gl,sprog__$1,matrices);
});

//# sourceMappingURL=sprog.webgl.uniforms.js.map
