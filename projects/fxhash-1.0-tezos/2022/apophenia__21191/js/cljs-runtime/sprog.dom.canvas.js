goog.provide('sprog.dom.canvas');
sprog.dom.canvas.create_gl_canvas = (function sprog$dom$canvas$create_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28051 = arguments.length;
var i__5767__auto___28052 = (0);
while(true){
if((i__5767__auto___28052 < len__5766__auto___28051)){
args__5772__auto__.push((arguments[i__5767__auto___28052]));

var G__28053 = (i__5767__auto___28052 + (1));
i__5767__auto___28052 = G__28053;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sprog.dom.canvas.create_gl_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (p__27982){
var vec__27988 = p__27982;
var append_to_body_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27988,(0),null);
var canvas = document.createElement("canvas");
var gl = canvas.getContext("webgl2");
if(cljs.core.truth_(append_to_body_QMARK_)){
(canvas.style.position = "absolute");

document.body.appendChild(canvas);
} else {
}

return gl;
}));

(sprog.dom.canvas.create_gl_canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sprog.dom.canvas.create_gl_canvas.cljs$lang$applyTo = (function (seq27961){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27961));
}));

sprog.dom.canvas.maximize_canvas = (function sprog$dom$canvas$maximize_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28054 = arguments.length;
var i__5767__auto___28055 = (0);
while(true){
if((i__5767__auto___28055 < len__5766__auto___28054)){
args__5772__auto__.push((arguments[i__5767__auto___28055]));

var G__28056 = (i__5767__auto___28055 + (1));
i__5767__auto___28055 = G__28056;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.maximize_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__28004){
var map__28005 = p__28004;
var map__28005__$1 = cljs.core.__destructure_map(map__28005);
var max_pixel_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28005__$1,new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561));
var raw_width = window.innerWidth;
var raw_height = window.innerHeight;
var pixel_ratio = (cljs.core.truth_(max_pixel_ratio)?(function (){var x__5131__auto__ = window.devicePixelRatio;
var y__5132__auto__ = max_pixel_ratio;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():window.devicePixelRatio);
var style = canvas.style;
var vec__28006 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,pixel_ratio),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_width,raw_height], null));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(1),null);
(style.left = (0));

(style.top = (0));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_width),"px"].join(''));

(style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_height),"px"].join(''));

(canvas.width = width);

return (canvas.height = height);
}));

(sprog.dom.canvas.maximize_canvas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.dom.canvas.maximize_canvas.cljs$lang$applyTo = (function (seq27996){
var G__27997 = cljs.core.first(seq27996);
var seq27996__$1 = cljs.core.next(seq27996);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27997,seq27996__$1);
}));

sprog.dom.canvas.maximize_gl_canvas = (function sprog$dom$canvas$maximize_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28070 = arguments.length;
var i__5767__auto___28071 = (0);
while(true){
if((i__5767__auto___28071 < len__5766__auto___28070)){
args__5772__auto__.push((arguments[i__5767__auto___28071]));

var G__28073 = (i__5767__auto___28071 + (1));
i__5767__auto___28071 = G__28073;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (gl,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.dom.canvas.maximize_canvas,gl.canvas),options);
}));

(sprog.dom.canvas.maximize_gl_canvas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.dom.canvas.maximize_gl_canvas.cljs$lang$applyTo = (function (seq28017){
var G__28018 = cljs.core.first(seq28017);
var seq28017__$1 = cljs.core.next(seq28017);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28018,seq28017__$1);
}));

sprog.dom.canvas.square_maximize_canvas = (function sprog$dom$canvas$square_maximize_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28088 = arguments.length;
var i__5767__auto___28089 = (0);
while(true){
if((i__5767__auto___28089 < len__5766__auto___28088)){
args__5772__auto__.push((arguments[i__5767__auto___28089]));

var G__28090 = (i__5767__auto___28089 + (1));
i__5767__auto___28089 = G__28090;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.square_maximize_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.square_maximize_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__28024){
var map__28025 = p__28024;
var map__28025__$1 = cljs.core.__destructure_map(map__28025);
var max_pixel_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28025__$1,new cljs.core.Keyword(null,"max-pixel-ratio","max-pixel-ratio",1910246561));
var raw_width = window.innerWidth;
var raw_height = window.innerHeight;
var raw_size = (function (){var x__5131__auto__ = raw_width;
var y__5132__auto__ = raw_height;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
var pixel_ratio = (cljs.core.truth_(max_pixel_ratio)?(function (){var x__5131__auto__ = window.devicePixelRatio;
var y__5132__auto__ = max_pixel_ratio;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})():window.devicePixelRatio);
var style = canvas.style;
var size = (raw_size * pixel_ratio);
(style.left = ((raw_width - raw_size) * 0.5));

(style.top = ((raw_height - raw_size) * 0.5));

(style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_size),"px"].join(''));

(style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_size),"px"].join(''));

(canvas.width = size);

return (canvas.height = size);
}));

(sprog.dom.canvas.square_maximize_canvas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.dom.canvas.square_maximize_canvas.cljs$lang$applyTo = (function (seq28022){
var G__28023 = cljs.core.first(seq28022);
var seq28022__$1 = cljs.core.next(seq28022);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28023,seq28022__$1);
}));

sprog.dom.canvas.canvas_resolution = (function sprog$dom$canvas$canvas_resolution(gl){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gl.canvas.width,gl.canvas.height], null);
});
sprog.dom.canvas.square_maximize_gl_canvas = (function sprog$dom$canvas$square_maximize_gl_canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28097 = arguments.length;
var i__5767__auto___28098 = (0);
while(true){
if((i__5767__auto___28098 < len__5766__auto___28097)){
args__5772__auto__.push((arguments[i__5767__auto___28098]));

var G__28099 = (i__5767__auto___28098 + (1));
i__5767__auto___28098 = G__28099;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sprog.dom.canvas.square_maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sprog.dom.canvas.square_maximize_gl_canvas.cljs$core$IFn$_invoke$arity$variadic = (function (gl,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sprog.dom.canvas.square_maximize_canvas,gl.canvas),options);
}));

(sprog.dom.canvas.square_maximize_gl_canvas.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sprog.dom.canvas.square_maximize_gl_canvas.cljs$lang$applyTo = (function (seq28035){
var G__28036 = cljs.core.first(seq28035);
var seq28035__$1 = cljs.core.next(seq28035);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28036,seq28035__$1);
}));

sprog.dom.canvas.save_image = (function sprog$dom$canvas$save_image(canvas,name){
return canvas.toBlob((function (blob){
var a = document.createElement("a");
document.body.appendChild(a);

var url_28102 = window.URL.createObjectURL(blob);
(a.href = url_28102);

(a.download = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".png"].join(''));

a.click();

return document.body.removeChild(a);
}));
});
sprog.dom.canvas.set_page_background_color = (function sprog$dom$canvas$set_page_background_color(color){
return (document.body.style.backgroundColor = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28050_SHARP_){
var hex = p1__28050_SHARP_.toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(hex),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
} else {
return hex;
}
}),color)));
});

//# sourceMappingURL=sprog.dom.canvas.js.map
