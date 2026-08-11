goog.provide('sprog.input.mouse');
if((typeof sprog !== 'undefined') && (typeof sprog.input !== 'undefined') && (typeof sprog.input.mouse !== 'undefined') && (typeof sprog.input.mouse.mouse_atom !== 'undefined')){
} else {
sprog.input.mouse.mouse_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.Keyword(null,"down?","down?",1701019493),false,new cljs.core.Keyword(null,"present?","present?",843821978),false], null));
}
if((typeof sprog !== 'undefined') && (typeof sprog.input !== 'undefined') && (typeof sprog.input.mouse !== 'undefined') && (typeof sprog.input.mouse.mouse_callbacks_atom !== 'undefined')){
} else {
sprog.input.mouse.mouse_callbacks_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
sprog.input.mouse.add_mouse_down_callback = (function sprog$input$mouse$add_mouse_down_callback(callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_callbacks_atom,cljs.core.update,new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback], 0));
});
sprog.input.mouse.add_mouse_up_callback = (function sprog$input$mouse$add_mouse_up_callback(callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_callbacks_atom,cljs.core.update,new cljs.core.Keyword(null,"up","up",-269712113),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback], 0));
});
sprog.input.mouse.add_scroll_x_callback = (function sprog$input$mouse$add_scroll_x_callback(callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_callbacks_atom,cljs.core.update,new cljs.core.Keyword(null,"scroll-x","scroll-x",-250872445),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback], 0));
});
sprog.input.mouse.add_scroll_y_callback = (function sprog$input$mouse$add_scroll_y_callback(callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_callbacks_atom,cljs.core.update,new cljs.core.Keyword(null,"scroll-y","scroll-y",-1381960567),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback], 0));
});
sprog.input.mouse.mouse_pos = (function sprog$input$mouse$mouse_pos(){
return new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_atom));
});
sprog.input.mouse.mouse_down_QMARK_ = (function sprog$input$mouse$mouse_down_QMARK_(){
return new cljs.core.Keyword(null,"down?","down?",1701019493).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_atom));
});
sprog.input.mouse.mouse_present_QMARK_ = (function sprog$input$mouse$mouse_present_QMARK_(){
return new cljs.core.Keyword(null,"present?","present?",843821978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_atom));
});
(document.onmousemove = (function (event){
var x = event.clientX;
var y = event.clientY;
var w = window.innerWidth;
var h = window.innerHeight;
var s = (function (){var x__5131__auto__ = w;
var y__5132__auto__ = h;
return ((x__5131__auto__ < y__5132__auto__) ? x__5131__auto__ : y__5132__auto__);
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x - ((w - s) / (2))) / s),((y - ((h - s) / (2))) / s)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"present?","present?",843821978),true], 0));
}));
(document.onmousedown = (function (_){
var seq__31337_31386 = cljs.core.seq(new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_callbacks_atom)));
var chunk__31338_31387 = null;
var count__31339_31388 = (0);
var i__31340_31389 = (0);
while(true){
if((i__31340_31389 < count__31339_31388)){
var callback_31390 = chunk__31338_31387.cljs$core$IIndexed$_nth$arity$2(null,i__31340_31389);
(callback_31390.cljs$core$IFn$_invoke$arity$0 ? callback_31390.cljs$core$IFn$_invoke$arity$0() : callback_31390.call(null));


var G__31391 = seq__31337_31386;
var G__31392 = chunk__31338_31387;
var G__31393 = count__31339_31388;
var G__31394 = (i__31340_31389 + (1));
seq__31337_31386 = G__31391;
chunk__31338_31387 = G__31392;
count__31339_31388 = G__31393;
i__31340_31389 = G__31394;
continue;
} else {
var temp__5804__auto___31395 = cljs.core.seq(seq__31337_31386);
if(temp__5804__auto___31395){
var seq__31337_31396__$1 = temp__5804__auto___31395;
if(cljs.core.chunked_seq_QMARK_(seq__31337_31396__$1)){
var c__5565__auto___31397 = cljs.core.chunk_first(seq__31337_31396__$1);
var G__31398 = cljs.core.chunk_rest(seq__31337_31396__$1);
var G__31399 = c__5565__auto___31397;
var G__31400 = cljs.core.count(c__5565__auto___31397);
var G__31401 = (0);
seq__31337_31386 = G__31398;
chunk__31338_31387 = G__31399;
count__31339_31388 = G__31400;
i__31340_31389 = G__31401;
continue;
} else {
var callback_31404 = cljs.core.first(seq__31337_31396__$1);
(callback_31404.cljs$core$IFn$_invoke$arity$0 ? callback_31404.cljs$core$IFn$_invoke$arity$0() : callback_31404.call(null));


var G__31406 = cljs.core.next(seq__31337_31396__$1);
var G__31407 = null;
var G__31408 = (0);
var G__31409 = (0);
seq__31337_31386 = G__31406;
chunk__31338_31387 = G__31407;
count__31339_31388 = G__31408;
i__31340_31389 = G__31409;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_atom,cljs.core.assoc,new cljs.core.Keyword(null,"down?","down?",1701019493),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"present?","present?",843821978),true], 0));
}));
(document.onmouseup = (function (_){
var seq__31353_31410 = cljs.core.seq(new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_callbacks_atom)));
var chunk__31354_31411 = null;
var count__31355_31412 = (0);
var i__31356_31413 = (0);
while(true){
if((i__31356_31413 < count__31355_31412)){
var callback_31414 = chunk__31354_31411.cljs$core$IIndexed$_nth$arity$2(null,i__31356_31413);
(callback_31414.cljs$core$IFn$_invoke$arity$0 ? callback_31414.cljs$core$IFn$_invoke$arity$0() : callback_31414.call(null));


var G__31415 = seq__31353_31410;
var G__31416 = chunk__31354_31411;
var G__31417 = count__31355_31412;
var G__31418 = (i__31356_31413 + (1));
seq__31353_31410 = G__31415;
chunk__31354_31411 = G__31416;
count__31355_31412 = G__31417;
i__31356_31413 = G__31418;
continue;
} else {
var temp__5804__auto___31419 = cljs.core.seq(seq__31353_31410);
if(temp__5804__auto___31419){
var seq__31353_31420__$1 = temp__5804__auto___31419;
if(cljs.core.chunked_seq_QMARK_(seq__31353_31420__$1)){
var c__5565__auto___31421 = cljs.core.chunk_first(seq__31353_31420__$1);
var G__31422 = cljs.core.chunk_rest(seq__31353_31420__$1);
var G__31423 = c__5565__auto___31421;
var G__31424 = cljs.core.count(c__5565__auto___31421);
var G__31425 = (0);
seq__31353_31410 = G__31422;
chunk__31354_31411 = G__31423;
count__31355_31412 = G__31424;
i__31356_31413 = G__31425;
continue;
} else {
var callback_31426 = cljs.core.first(seq__31353_31420__$1);
(callback_31426.cljs$core$IFn$_invoke$arity$0 ? callback_31426.cljs$core$IFn$_invoke$arity$0() : callback_31426.call(null));


var G__31427 = cljs.core.next(seq__31353_31420__$1);
var G__31428 = null;
var G__31429 = (0);
var G__31430 = (0);
seq__31353_31410 = G__31427;
chunk__31354_31411 = G__31428;
count__31355_31412 = G__31429;
i__31356_31413 = G__31430;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sprog.input.mouse.mouse_atom,cljs.core.assoc,new cljs.core.Keyword(null,"down?","down?",1701019493),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"present?","present?",843821978),true], 0));
}));
(document.onmousewheel = (function (event){
var seq__31363_31431 = cljs.core.seq(new cljs.core.Keyword(null,"scroll-x","scroll-x",-250872445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_callbacks_atom)));
var chunk__31364_31432 = null;
var count__31365_31433 = (0);
var i__31366_31434 = (0);
while(true){
if((i__31366_31434 < count__31365_31433)){
var callback_31435 = chunk__31364_31432.cljs$core$IIndexed$_nth$arity$2(null,i__31366_31434);
(callback_31435.cljs$core$IFn$_invoke$arity$1 ? callback_31435.cljs$core$IFn$_invoke$arity$1(event.deltaX) : callback_31435.call(null,event.deltaX));


var G__31436 = seq__31363_31431;
var G__31437 = chunk__31364_31432;
var G__31438 = count__31365_31433;
var G__31439 = (i__31366_31434 + (1));
seq__31363_31431 = G__31436;
chunk__31364_31432 = G__31437;
count__31365_31433 = G__31438;
i__31366_31434 = G__31439;
continue;
} else {
var temp__5804__auto___31440 = cljs.core.seq(seq__31363_31431);
if(temp__5804__auto___31440){
var seq__31363_31441__$1 = temp__5804__auto___31440;
if(cljs.core.chunked_seq_QMARK_(seq__31363_31441__$1)){
var c__5565__auto___31442 = cljs.core.chunk_first(seq__31363_31441__$1);
var G__31443 = cljs.core.chunk_rest(seq__31363_31441__$1);
var G__31444 = c__5565__auto___31442;
var G__31445 = cljs.core.count(c__5565__auto___31442);
var G__31446 = (0);
seq__31363_31431 = G__31443;
chunk__31364_31432 = G__31444;
count__31365_31433 = G__31445;
i__31366_31434 = G__31446;
continue;
} else {
var callback_31447 = cljs.core.first(seq__31363_31441__$1);
(callback_31447.cljs$core$IFn$_invoke$arity$1 ? callback_31447.cljs$core$IFn$_invoke$arity$1(event.deltaX) : callback_31447.call(null,event.deltaX));


var G__31448 = cljs.core.next(seq__31363_31441__$1);
var G__31449 = null;
var G__31450 = (0);
var G__31451 = (0);
seq__31363_31431 = G__31448;
chunk__31364_31432 = G__31449;
count__31365_31433 = G__31450;
i__31366_31434 = G__31451;
continue;
}
} else {
}
}
break;
}

var seq__31371 = cljs.core.seq(new cljs.core.Keyword(null,"scroll-y","scroll-y",-1381960567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sprog.input.mouse.mouse_callbacks_atom)));
var chunk__31372 = null;
var count__31373 = (0);
var i__31374 = (0);
while(true){
if((i__31374 < count__31373)){
var callback = chunk__31372.cljs$core$IIndexed$_nth$arity$2(null,i__31374);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(event.deltaY) : callback.call(null,event.deltaY));


var G__31454 = seq__31371;
var G__31455 = chunk__31372;
var G__31456 = count__31373;
var G__31457 = (i__31374 + (1));
seq__31371 = G__31454;
chunk__31372 = G__31455;
count__31373 = G__31456;
i__31374 = G__31457;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31371);
if(temp__5804__auto__){
var seq__31371__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31371__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__31371__$1);
var G__31459 = cljs.core.chunk_rest(seq__31371__$1);
var G__31460 = c__5565__auto__;
var G__31461 = cljs.core.count(c__5565__auto__);
var G__31462 = (0);
seq__31371 = G__31459;
chunk__31372 = G__31460;
count__31373 = G__31461;
i__31374 = G__31462;
continue;
} else {
var callback = cljs.core.first(seq__31371__$1);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(event.deltaY) : callback.call(null,event.deltaY));


var G__31463 = cljs.core.next(seq__31371__$1);
var G__31464 = null;
var G__31465 = (0);
var G__31466 = (0);
seq__31371 = G__31463;
chunk__31372 = G__31464;
count__31373 = G__31465;
i__31374 = G__31466;
continue;
}
} else {
return null;
}
}
break;
}
}));
(document.onmouseenter = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sprog.input.mouse.mouse_atom,(function (p1__31378_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31378_SHARP_,new cljs.core.Keyword(null,"present?","present?",843821978),true);
}));
}));
(document.onmouseleave = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sprog.input.mouse.mouse_atom,(function (p1__31379_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31379_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null)),new cljs.core.Keyword(null,"down?","down?",1701019493),false),new cljs.core.Keyword(null,"present?","present?",843821978),false);
}));
}));

//# sourceMappingURL=sprog.input.mouse.js.map
