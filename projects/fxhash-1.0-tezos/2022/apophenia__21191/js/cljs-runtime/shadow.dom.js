goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38603 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38603(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38609 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38609(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36990 = coll;
var G__36991 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36990,G__36991) : shadow.dom.lazy_native_coll_seq.call(null,G__36990,G__36991));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37006 = arguments.length;
switch (G__37006) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37019 = arguments.length;
switch (G__37019) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37032 = arguments.length;
switch (G__37032) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37040 = arguments.length;
switch (G__37040) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37054 = arguments.length;
switch (G__37054) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37082 = arguments.length;
switch (G__37082) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37092){if((e37092 instanceof Object)){
var e = e37092;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37092;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37103 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37104 = null;
var count__37105 = (0);
var i__37106 = (0);
while(true){
if((i__37106 < count__37105)){
var el = chunk__37104.cljs$core$IIndexed$_nth$arity$2(null,i__37106);
var handler_38650__$1 = ((function (seq__37103,chunk__37104,count__37105,i__37106,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37103,chunk__37104,count__37105,i__37106,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38650__$1);


var G__38651 = seq__37103;
var G__38652 = chunk__37104;
var G__38653 = count__37105;
var G__38654 = (i__37106 + (1));
seq__37103 = G__38651;
chunk__37104 = G__38652;
count__37105 = G__38653;
i__37106 = G__38654;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37103);
if(temp__5804__auto__){
var seq__37103__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37103__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37103__$1);
var G__38655 = cljs.core.chunk_rest(seq__37103__$1);
var G__38656 = c__5565__auto__;
var G__38657 = cljs.core.count(c__5565__auto__);
var G__38658 = (0);
seq__37103 = G__38655;
chunk__37104 = G__38656;
count__37105 = G__38657;
i__37106 = G__38658;
continue;
} else {
var el = cljs.core.first(seq__37103__$1);
var handler_38662__$1 = ((function (seq__37103,chunk__37104,count__37105,i__37106,el,seq__37103__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37103,chunk__37104,count__37105,i__37106,el,seq__37103__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38662__$1);


var G__38663 = cljs.core.next(seq__37103__$1);
var G__38664 = null;
var G__38665 = (0);
var G__38666 = (0);
seq__37103 = G__38663;
chunk__37104 = G__38664;
count__37105 = G__38665;
i__37106 = G__38666;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37130 = arguments.length;
switch (G__37130) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37155 = cljs.core.seq(events);
var chunk__37156 = null;
var count__37157 = (0);
var i__37158 = (0);
while(true){
if((i__37158 < count__37157)){
var vec__37179 = chunk__37156.cljs$core$IIndexed$_nth$arity$2(null,i__37158);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37179,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38677 = seq__37155;
var G__38678 = chunk__37156;
var G__38679 = count__37157;
var G__38680 = (i__37158 + (1));
seq__37155 = G__38677;
chunk__37156 = G__38678;
count__37157 = G__38679;
i__37158 = G__38680;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37155);
if(temp__5804__auto__){
var seq__37155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37155__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37155__$1);
var G__38685 = cljs.core.chunk_rest(seq__37155__$1);
var G__38686 = c__5565__auto__;
var G__38687 = cljs.core.count(c__5565__auto__);
var G__38688 = (0);
seq__37155 = G__38685;
chunk__37156 = G__38686;
count__37157 = G__38687;
i__37158 = G__38688;
continue;
} else {
var vec__37189 = cljs.core.first(seq__37155__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38689 = cljs.core.next(seq__37155__$1);
var G__38690 = null;
var G__38691 = (0);
var G__38692 = (0);
seq__37155 = G__38689;
chunk__37156 = G__38690;
count__37157 = G__38691;
i__37158 = G__38692;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37195 = cljs.core.seq(styles);
var chunk__37196 = null;
var count__37197 = (0);
var i__37198 = (0);
while(true){
if((i__37198 < count__37197)){
var vec__37221 = chunk__37196.cljs$core$IIndexed$_nth$arity$2(null,i__37198);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37221,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38693 = seq__37195;
var G__38694 = chunk__37196;
var G__38695 = count__37197;
var G__38696 = (i__37198 + (1));
seq__37195 = G__38693;
chunk__37196 = G__38694;
count__37197 = G__38695;
i__37198 = G__38696;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37195);
if(temp__5804__auto__){
var seq__37195__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37195__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37195__$1);
var G__38697 = cljs.core.chunk_rest(seq__37195__$1);
var G__38698 = c__5565__auto__;
var G__38699 = cljs.core.count(c__5565__auto__);
var G__38700 = (0);
seq__37195 = G__38697;
chunk__37196 = G__38698;
count__37197 = G__38699;
i__37198 = G__38700;
continue;
} else {
var vec__37232 = cljs.core.first(seq__37195__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37232,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37232,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38701 = cljs.core.next(seq__37195__$1);
var G__38702 = null;
var G__38703 = (0);
var G__38704 = (0);
seq__37195 = G__38701;
chunk__37196 = G__38702;
count__37197 = G__38703;
i__37198 = G__38704;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37240_38705 = key;
var G__37240_38706__$1 = (((G__37240_38705 instanceof cljs.core.Keyword))?G__37240_38705.fqn:null);
switch (G__37240_38706__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38714 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_38714,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_38714,"aria-");
}
})())){
el.setAttribute(ks_38714,value);
} else {
(el[ks_38714] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37257){
var map__37258 = p__37257;
var map__37258__$1 = cljs.core.__destructure_map(map__37258);
var props = map__37258__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37258__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37269 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37269,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37269,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37269,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37287 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37287,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37287;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37289 = arguments.length;
switch (G__37289) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37306){
var vec__37308 = p__37306;
var seq__37309 = cljs.core.seq(vec__37308);
var first__37310 = cljs.core.first(seq__37309);
var seq__37309__$1 = cljs.core.next(seq__37309);
var nn = first__37310;
var first__37310__$1 = cljs.core.first(seq__37309__$1);
var seq__37309__$2 = cljs.core.next(seq__37309__$1);
var np = first__37310__$1;
var nc = seq__37309__$2;
var node = vec__37308;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37314 = nn;
var G__37315 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37314,G__37315) : create_fn.call(null,G__37314,G__37315));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37319 = nn;
var G__37320 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37319,G__37320) : create_fn.call(null,G__37319,G__37320));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37328 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328,(1),null);
var seq__37333_38730 = cljs.core.seq(node_children);
var chunk__37334_38731 = null;
var count__37335_38732 = (0);
var i__37336_38733 = (0);
while(true){
if((i__37336_38733 < count__37335_38732)){
var child_struct_38735 = chunk__37334_38731.cljs$core$IIndexed$_nth$arity$2(null,i__37336_38733);
var children_38736 = shadow.dom.dom_node(child_struct_38735);
if(cljs.core.seq_QMARK_(children_38736)){
var seq__37389_38737 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38736));
var chunk__37391_38738 = null;
var count__37392_38739 = (0);
var i__37393_38740 = (0);
while(true){
if((i__37393_38740 < count__37392_38739)){
var child_38741 = chunk__37391_38738.cljs$core$IIndexed$_nth$arity$2(null,i__37393_38740);
if(cljs.core.truth_(child_38741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38741);


var G__38742 = seq__37389_38737;
var G__38743 = chunk__37391_38738;
var G__38744 = count__37392_38739;
var G__38745 = (i__37393_38740 + (1));
seq__37389_38737 = G__38742;
chunk__37391_38738 = G__38743;
count__37392_38739 = G__38744;
i__37393_38740 = G__38745;
continue;
} else {
var G__38746 = seq__37389_38737;
var G__38747 = chunk__37391_38738;
var G__38748 = count__37392_38739;
var G__38749 = (i__37393_38740 + (1));
seq__37389_38737 = G__38746;
chunk__37391_38738 = G__38747;
count__37392_38739 = G__38748;
i__37393_38740 = G__38749;
continue;
}
} else {
var temp__5804__auto___38750 = cljs.core.seq(seq__37389_38737);
if(temp__5804__auto___38750){
var seq__37389_38751__$1 = temp__5804__auto___38750;
if(cljs.core.chunked_seq_QMARK_(seq__37389_38751__$1)){
var c__5565__auto___38752 = cljs.core.chunk_first(seq__37389_38751__$1);
var G__38753 = cljs.core.chunk_rest(seq__37389_38751__$1);
var G__38754 = c__5565__auto___38752;
var G__38755 = cljs.core.count(c__5565__auto___38752);
var G__38756 = (0);
seq__37389_38737 = G__38753;
chunk__37391_38738 = G__38754;
count__37392_38739 = G__38755;
i__37393_38740 = G__38756;
continue;
} else {
var child_38757 = cljs.core.first(seq__37389_38751__$1);
if(cljs.core.truth_(child_38757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38757);


var G__38758 = cljs.core.next(seq__37389_38751__$1);
var G__38759 = null;
var G__38760 = (0);
var G__38761 = (0);
seq__37389_38737 = G__38758;
chunk__37391_38738 = G__38759;
count__37392_38739 = G__38760;
i__37393_38740 = G__38761;
continue;
} else {
var G__38762 = cljs.core.next(seq__37389_38751__$1);
var G__38763 = null;
var G__38764 = (0);
var G__38765 = (0);
seq__37389_38737 = G__38762;
chunk__37391_38738 = G__38763;
count__37392_38739 = G__38764;
i__37393_38740 = G__38765;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38736);
}


var G__38766 = seq__37333_38730;
var G__38767 = chunk__37334_38731;
var G__38768 = count__37335_38732;
var G__38769 = (i__37336_38733 + (1));
seq__37333_38730 = G__38766;
chunk__37334_38731 = G__38767;
count__37335_38732 = G__38768;
i__37336_38733 = G__38769;
continue;
} else {
var temp__5804__auto___38770 = cljs.core.seq(seq__37333_38730);
if(temp__5804__auto___38770){
var seq__37333_38771__$1 = temp__5804__auto___38770;
if(cljs.core.chunked_seq_QMARK_(seq__37333_38771__$1)){
var c__5565__auto___38772 = cljs.core.chunk_first(seq__37333_38771__$1);
var G__38773 = cljs.core.chunk_rest(seq__37333_38771__$1);
var G__38774 = c__5565__auto___38772;
var G__38775 = cljs.core.count(c__5565__auto___38772);
var G__38776 = (0);
seq__37333_38730 = G__38773;
chunk__37334_38731 = G__38774;
count__37335_38732 = G__38775;
i__37336_38733 = G__38776;
continue;
} else {
var child_struct_38777 = cljs.core.first(seq__37333_38771__$1);
var children_38782 = shadow.dom.dom_node(child_struct_38777);
if(cljs.core.seq_QMARK_(children_38782)){
var seq__37400_38783 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38782));
var chunk__37402_38784 = null;
var count__37403_38785 = (0);
var i__37404_38786 = (0);
while(true){
if((i__37404_38786 < count__37403_38785)){
var child_38787 = chunk__37402_38784.cljs$core$IIndexed$_nth$arity$2(null,i__37404_38786);
if(cljs.core.truth_(child_38787)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38787);


var G__38788 = seq__37400_38783;
var G__38789 = chunk__37402_38784;
var G__38790 = count__37403_38785;
var G__38791 = (i__37404_38786 + (1));
seq__37400_38783 = G__38788;
chunk__37402_38784 = G__38789;
count__37403_38785 = G__38790;
i__37404_38786 = G__38791;
continue;
} else {
var G__38795 = seq__37400_38783;
var G__38796 = chunk__37402_38784;
var G__38797 = count__37403_38785;
var G__38798 = (i__37404_38786 + (1));
seq__37400_38783 = G__38795;
chunk__37402_38784 = G__38796;
count__37403_38785 = G__38797;
i__37404_38786 = G__38798;
continue;
}
} else {
var temp__5804__auto___38799__$1 = cljs.core.seq(seq__37400_38783);
if(temp__5804__auto___38799__$1){
var seq__37400_38800__$1 = temp__5804__auto___38799__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37400_38800__$1)){
var c__5565__auto___38801 = cljs.core.chunk_first(seq__37400_38800__$1);
var G__38802 = cljs.core.chunk_rest(seq__37400_38800__$1);
var G__38803 = c__5565__auto___38801;
var G__38804 = cljs.core.count(c__5565__auto___38801);
var G__38805 = (0);
seq__37400_38783 = G__38802;
chunk__37402_38784 = G__38803;
count__37403_38785 = G__38804;
i__37404_38786 = G__38805;
continue;
} else {
var child_38806 = cljs.core.first(seq__37400_38800__$1);
if(cljs.core.truth_(child_38806)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38806);


var G__38807 = cljs.core.next(seq__37400_38800__$1);
var G__38808 = null;
var G__38809 = (0);
var G__38810 = (0);
seq__37400_38783 = G__38807;
chunk__37402_38784 = G__38808;
count__37403_38785 = G__38809;
i__37404_38786 = G__38810;
continue;
} else {
var G__38811 = cljs.core.next(seq__37400_38800__$1);
var G__38812 = null;
var G__38813 = (0);
var G__38814 = (0);
seq__37400_38783 = G__38811;
chunk__37402_38784 = G__38812;
count__37403_38785 = G__38813;
i__37404_38786 = G__38814;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38782);
}


var G__38815 = cljs.core.next(seq__37333_38771__$1);
var G__38816 = null;
var G__38817 = (0);
var G__38818 = (0);
seq__37333_38730 = G__38815;
chunk__37334_38731 = G__38816;
count__37335_38732 = G__38817;
i__37336_38733 = G__38818;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37412 = cljs.core.seq(node);
var chunk__37413 = null;
var count__37414 = (0);
var i__37415 = (0);
while(true){
if((i__37415 < count__37414)){
var n = chunk__37413.cljs$core$IIndexed$_nth$arity$2(null,i__37415);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38819 = seq__37412;
var G__38820 = chunk__37413;
var G__38821 = count__37414;
var G__38822 = (i__37415 + (1));
seq__37412 = G__38819;
chunk__37413 = G__38820;
count__37414 = G__38821;
i__37415 = G__38822;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37412);
if(temp__5804__auto__){
var seq__37412__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37412__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37412__$1);
var G__38826 = cljs.core.chunk_rest(seq__37412__$1);
var G__38827 = c__5565__auto__;
var G__38828 = cljs.core.count(c__5565__auto__);
var G__38829 = (0);
seq__37412 = G__38826;
chunk__37413 = G__38827;
count__37414 = G__38828;
i__37415 = G__38829;
continue;
} else {
var n = cljs.core.first(seq__37412__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38830 = cljs.core.next(seq__37412__$1);
var G__38831 = null;
var G__38832 = (0);
var G__38833 = (0);
seq__37412 = G__38830;
chunk__37413 = G__38831;
count__37414 = G__38832;
i__37415 = G__38833;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37432 = arguments.length;
switch (G__37432) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37438 = arguments.length;
switch (G__37438) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37444 = arguments.length;
switch (G__37444) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38840 = arguments.length;
var i__5767__auto___38841 = (0);
while(true){
if((i__5767__auto___38841 < len__5766__auto___38840)){
args__5772__auto__.push((arguments[i__5767__auto___38841]));

var G__38842 = (i__5767__auto___38841 + (1));
i__5767__auto___38841 = G__38842;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37474_38843 = cljs.core.seq(nodes);
var chunk__37475_38844 = null;
var count__37476_38845 = (0);
var i__37477_38846 = (0);
while(true){
if((i__37477_38846 < count__37476_38845)){
var node_38847 = chunk__37475_38844.cljs$core$IIndexed$_nth$arity$2(null,i__37477_38846);
fragment.appendChild(shadow.dom._to_dom(node_38847));


var G__38848 = seq__37474_38843;
var G__38849 = chunk__37475_38844;
var G__38850 = count__37476_38845;
var G__38851 = (i__37477_38846 + (1));
seq__37474_38843 = G__38848;
chunk__37475_38844 = G__38849;
count__37476_38845 = G__38850;
i__37477_38846 = G__38851;
continue;
} else {
var temp__5804__auto___38852 = cljs.core.seq(seq__37474_38843);
if(temp__5804__auto___38852){
var seq__37474_38853__$1 = temp__5804__auto___38852;
if(cljs.core.chunked_seq_QMARK_(seq__37474_38853__$1)){
var c__5565__auto___38854 = cljs.core.chunk_first(seq__37474_38853__$1);
var G__38855 = cljs.core.chunk_rest(seq__37474_38853__$1);
var G__38856 = c__5565__auto___38854;
var G__38857 = cljs.core.count(c__5565__auto___38854);
var G__38858 = (0);
seq__37474_38843 = G__38855;
chunk__37475_38844 = G__38856;
count__37476_38845 = G__38857;
i__37477_38846 = G__38858;
continue;
} else {
var node_38859 = cljs.core.first(seq__37474_38853__$1);
fragment.appendChild(shadow.dom._to_dom(node_38859));


var G__38863 = cljs.core.next(seq__37474_38853__$1);
var G__38864 = null;
var G__38865 = (0);
var G__38866 = (0);
seq__37474_38843 = G__38863;
chunk__37475_38844 = G__38864;
count__37476_38845 = G__38865;
i__37477_38846 = G__38866;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37467){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37467));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37506_38867 = cljs.core.seq(scripts);
var chunk__37507_38868 = null;
var count__37508_38869 = (0);
var i__37509_38870 = (0);
while(true){
if((i__37509_38870 < count__37508_38869)){
var vec__37520_38872 = chunk__37507_38868.cljs$core$IIndexed$_nth$arity$2(null,i__37509_38870);
var script_tag_38873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37520_38872,(0),null);
var script_body_38874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37520_38872,(1),null);
eval(script_body_38874);


var G__38875 = seq__37506_38867;
var G__38876 = chunk__37507_38868;
var G__38877 = count__37508_38869;
var G__38878 = (i__37509_38870 + (1));
seq__37506_38867 = G__38875;
chunk__37507_38868 = G__38876;
count__37508_38869 = G__38877;
i__37509_38870 = G__38878;
continue;
} else {
var temp__5804__auto___38880 = cljs.core.seq(seq__37506_38867);
if(temp__5804__auto___38880){
var seq__37506_38881__$1 = temp__5804__auto___38880;
if(cljs.core.chunked_seq_QMARK_(seq__37506_38881__$1)){
var c__5565__auto___38882 = cljs.core.chunk_first(seq__37506_38881__$1);
var G__38883 = cljs.core.chunk_rest(seq__37506_38881__$1);
var G__38884 = c__5565__auto___38882;
var G__38885 = cljs.core.count(c__5565__auto___38882);
var G__38886 = (0);
seq__37506_38867 = G__38883;
chunk__37507_38868 = G__38884;
count__37508_38869 = G__38885;
i__37509_38870 = G__38886;
continue;
} else {
var vec__37525_38887 = cljs.core.first(seq__37506_38881__$1);
var script_tag_38888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37525_38887,(0),null);
var script_body_38889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37525_38887,(1),null);
eval(script_body_38889);


var G__38890 = cljs.core.next(seq__37506_38881__$1);
var G__38891 = null;
var G__38892 = (0);
var G__38893 = (0);
seq__37506_38867 = G__38890;
chunk__37507_38868 = G__38891;
count__37508_38869 = G__38892;
i__37509_38870 = G__38893;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37528){
var vec__37529 = p__37528;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37529,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37529,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37545 = arguments.length;
switch (G__37545) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37605 = cljs.core.seq(style_keys);
var chunk__37606 = null;
var count__37607 = (0);
var i__37608 = (0);
while(true){
if((i__37608 < count__37607)){
var it = chunk__37606.cljs$core$IIndexed$_nth$arity$2(null,i__37608);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38905 = seq__37605;
var G__38906 = chunk__37606;
var G__38907 = count__37607;
var G__38908 = (i__37608 + (1));
seq__37605 = G__38905;
chunk__37606 = G__38906;
count__37607 = G__38907;
i__37608 = G__38908;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37605);
if(temp__5804__auto__){
var seq__37605__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37605__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37605__$1);
var G__38909 = cljs.core.chunk_rest(seq__37605__$1);
var G__38910 = c__5565__auto__;
var G__38911 = cljs.core.count(c__5565__auto__);
var G__38912 = (0);
seq__37605 = G__38909;
chunk__37606 = G__38910;
count__37607 = G__38911;
i__37608 = G__38912;
continue;
} else {
var it = cljs.core.first(seq__37605__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38913 = cljs.core.next(seq__37605__$1);
var G__38914 = null;
var G__38915 = (0);
var G__38916 = (0);
seq__37605 = G__38913;
chunk__37606 = G__38914;
count__37607 = G__38915;
i__37608 = G__38916;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k37626,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__37683 = k37626;
var G__37683__$1 = (((G__37683 instanceof cljs.core.Keyword))?G__37683.fqn:null);
switch (G__37683__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37626,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__37700){
var vec__37703 = p__37700;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37625){
var self__ = this;
var G__37625__$1 = this;
return (new cljs.core.RecordIter((0),G__37625__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37627,other37628){
var self__ = this;
var this37627__$1 = this;
return (((!((other37628 == null)))) && ((((this37627__$1.constructor === other37628.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37627__$1.x,other37628.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37627__$1.y,other37628.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37627__$1.__extmap,other37628.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k37626){
var self__ = this;
var this__5347__auto____$1 = this;
var G__37813 = k37626;
var G__37813__$1 = (((G__37813 instanceof cljs.core.Keyword))?G__37813.fqn:null);
switch (G__37813__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37626);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__37625){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__37822 = cljs.core.keyword_identical_QMARK_;
var expr__37823 = k__5349__auto__;
if(cljs.core.truth_((pred__37822.cljs$core$IFn$_invoke$arity$2 ? pred__37822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37823) : pred__37822.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37823)))){
return (new shadow.dom.Coordinate(G__37625,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37822.cljs$core$IFn$_invoke$arity$2 ? pred__37822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37823) : pred__37822.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37823)))){
return (new shadow.dom.Coordinate(self__.x,G__37625,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__37625),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__37625){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37625,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37631){
var extmap__5382__auto__ = (function (){var G__37854 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37631,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37631)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37854);
} else {
return G__37854;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37631),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37631),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k37876,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__37883 = k37876;
var G__37883__$1 = (((G__37883 instanceof cljs.core.Keyword))?G__37883.fqn:null);
switch (G__37883__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37876,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__37891){
var vec__37892 = p__37891;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37892,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37892,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37875){
var self__ = this;
var G__37875__$1 = this;
return (new cljs.core.RecordIter((0),G__37875__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37877,other37878){
var self__ = this;
var this37877__$1 = this;
return (((!((other37878 == null)))) && ((((this37877__$1.constructor === other37878.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37877__$1.w,other37878.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37877__$1.h,other37878.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37877__$1.__extmap,other37878.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k37876){
var self__ = this;
var this__5347__auto____$1 = this;
var G__37986 = k37876;
var G__37986__$1 = (((G__37986 instanceof cljs.core.Keyword))?G__37986.fqn:null);
switch (G__37986__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37876);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__37875){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__38012 = cljs.core.keyword_identical_QMARK_;
var expr__38013 = k__5349__auto__;
if(cljs.core.truth_((pred__38012.cljs$core$IFn$_invoke$arity$2 ? pred__38012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38013) : pred__38012.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38013)))){
return (new shadow.dom.Size(G__37875,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38012.cljs$core$IFn$_invoke$arity$2 ? pred__38012.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38013) : pred__38012.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38013)))){
return (new shadow.dom.Size(self__.w,G__37875,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__37875),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__37875){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37875,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37879){
var extmap__5382__auto__ = (function (){var G__38044 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37879,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37879)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38044);
} else {
return G__38044;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37879),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37879),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__38934 = (i + (1));
var G__38935 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38934;
ret = G__38935;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38151){
var vec__38153 = p__38151;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38162 = arguments.length;
switch (G__38162) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38941 = ps;
var G__38942 = (i + (1));
el__$1 = G__38941;
i = G__38942;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38308 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38308,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38308,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38308,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38318_38944 = cljs.core.seq(props);
var chunk__38319_38945 = null;
var count__38320_38946 = (0);
var i__38321_38947 = (0);
while(true){
if((i__38321_38947 < count__38320_38946)){
var vec__38348_38948 = chunk__38319_38945.cljs$core$IIndexed$_nth$arity$2(null,i__38321_38947);
var k_38949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38348_38948,(0),null);
var v_38950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38348_38948,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38949);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38949),v_38950);


var G__38951 = seq__38318_38944;
var G__38952 = chunk__38319_38945;
var G__38953 = count__38320_38946;
var G__38954 = (i__38321_38947 + (1));
seq__38318_38944 = G__38951;
chunk__38319_38945 = G__38952;
count__38320_38946 = G__38953;
i__38321_38947 = G__38954;
continue;
} else {
var temp__5804__auto___38955 = cljs.core.seq(seq__38318_38944);
if(temp__5804__auto___38955){
var seq__38318_38956__$1 = temp__5804__auto___38955;
if(cljs.core.chunked_seq_QMARK_(seq__38318_38956__$1)){
var c__5565__auto___38957 = cljs.core.chunk_first(seq__38318_38956__$1);
var G__38958 = cljs.core.chunk_rest(seq__38318_38956__$1);
var G__38959 = c__5565__auto___38957;
var G__38960 = cljs.core.count(c__5565__auto___38957);
var G__38961 = (0);
seq__38318_38944 = G__38958;
chunk__38319_38945 = G__38959;
count__38320_38946 = G__38960;
i__38321_38947 = G__38961;
continue;
} else {
var vec__38353_38962 = cljs.core.first(seq__38318_38956__$1);
var k_38963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38353_38962,(0),null);
var v_38964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38353_38962,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38963);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38963),v_38964);


var G__38965 = cljs.core.next(seq__38318_38956__$1);
var G__38966 = null;
var G__38967 = (0);
var G__38968 = (0);
seq__38318_38944 = G__38965;
chunk__38319_38945 = G__38966;
count__38320_38946 = G__38967;
i__38321_38947 = G__38968;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38367 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38367,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38367,(1),null);
var seq__38371_38969 = cljs.core.seq(node_children);
var chunk__38373_38970 = null;
var count__38374_38971 = (0);
var i__38375_38972 = (0);
while(true){
if((i__38375_38972 < count__38374_38971)){
var child_struct_38973 = chunk__38373_38970.cljs$core$IIndexed$_nth$arity$2(null,i__38375_38972);
if((!((child_struct_38973 == null)))){
if(typeof child_struct_38973 === 'string'){
var text_38974 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38974),child_struct_38973].join(''));
} else {
var children_38975 = shadow.dom.svg_node(child_struct_38973);
if(cljs.core.seq_QMARK_(children_38975)){
var seq__38419_38977 = cljs.core.seq(children_38975);
var chunk__38421_38978 = null;
var count__38422_38979 = (0);
var i__38423_38980 = (0);
while(true){
if((i__38423_38980 < count__38422_38979)){
var child_38981 = chunk__38421_38978.cljs$core$IIndexed$_nth$arity$2(null,i__38423_38980);
if(cljs.core.truth_(child_38981)){
node.appendChild(child_38981);


var G__38982 = seq__38419_38977;
var G__38983 = chunk__38421_38978;
var G__38984 = count__38422_38979;
var G__38985 = (i__38423_38980 + (1));
seq__38419_38977 = G__38982;
chunk__38421_38978 = G__38983;
count__38422_38979 = G__38984;
i__38423_38980 = G__38985;
continue;
} else {
var G__38986 = seq__38419_38977;
var G__38987 = chunk__38421_38978;
var G__38988 = count__38422_38979;
var G__38989 = (i__38423_38980 + (1));
seq__38419_38977 = G__38986;
chunk__38421_38978 = G__38987;
count__38422_38979 = G__38988;
i__38423_38980 = G__38989;
continue;
}
} else {
var temp__5804__auto___38990 = cljs.core.seq(seq__38419_38977);
if(temp__5804__auto___38990){
var seq__38419_38991__$1 = temp__5804__auto___38990;
if(cljs.core.chunked_seq_QMARK_(seq__38419_38991__$1)){
var c__5565__auto___39000 = cljs.core.chunk_first(seq__38419_38991__$1);
var G__39001 = cljs.core.chunk_rest(seq__38419_38991__$1);
var G__39002 = c__5565__auto___39000;
var G__39003 = cljs.core.count(c__5565__auto___39000);
var G__39004 = (0);
seq__38419_38977 = G__39001;
chunk__38421_38978 = G__39002;
count__38422_38979 = G__39003;
i__38423_38980 = G__39004;
continue;
} else {
var child_39005 = cljs.core.first(seq__38419_38991__$1);
if(cljs.core.truth_(child_39005)){
node.appendChild(child_39005);


var G__39006 = cljs.core.next(seq__38419_38991__$1);
var G__39007 = null;
var G__39008 = (0);
var G__39009 = (0);
seq__38419_38977 = G__39006;
chunk__38421_38978 = G__39007;
count__38422_38979 = G__39008;
i__38423_38980 = G__39009;
continue;
} else {
var G__39010 = cljs.core.next(seq__38419_38991__$1);
var G__39011 = null;
var G__39012 = (0);
var G__39013 = (0);
seq__38419_38977 = G__39010;
chunk__38421_38978 = G__39011;
count__38422_38979 = G__39012;
i__38423_38980 = G__39013;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38975);
}
}


var G__39014 = seq__38371_38969;
var G__39015 = chunk__38373_38970;
var G__39016 = count__38374_38971;
var G__39017 = (i__38375_38972 + (1));
seq__38371_38969 = G__39014;
chunk__38373_38970 = G__39015;
count__38374_38971 = G__39016;
i__38375_38972 = G__39017;
continue;
} else {
var G__39018 = seq__38371_38969;
var G__39019 = chunk__38373_38970;
var G__39020 = count__38374_38971;
var G__39021 = (i__38375_38972 + (1));
seq__38371_38969 = G__39018;
chunk__38373_38970 = G__39019;
count__38374_38971 = G__39020;
i__38375_38972 = G__39021;
continue;
}
} else {
var temp__5804__auto___39022 = cljs.core.seq(seq__38371_38969);
if(temp__5804__auto___39022){
var seq__38371_39023__$1 = temp__5804__auto___39022;
if(cljs.core.chunked_seq_QMARK_(seq__38371_39023__$1)){
var c__5565__auto___39024 = cljs.core.chunk_first(seq__38371_39023__$1);
var G__39025 = cljs.core.chunk_rest(seq__38371_39023__$1);
var G__39026 = c__5565__auto___39024;
var G__39027 = cljs.core.count(c__5565__auto___39024);
var G__39028 = (0);
seq__38371_38969 = G__39025;
chunk__38373_38970 = G__39026;
count__38374_38971 = G__39027;
i__38375_38972 = G__39028;
continue;
} else {
var child_struct_39029 = cljs.core.first(seq__38371_39023__$1);
if((!((child_struct_39029 == null)))){
if(typeof child_struct_39029 === 'string'){
var text_39030 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39030),child_struct_39029].join(''));
} else {
var children_39031 = shadow.dom.svg_node(child_struct_39029);
if(cljs.core.seq_QMARK_(children_39031)){
var seq__38451_39032 = cljs.core.seq(children_39031);
var chunk__38453_39033 = null;
var count__38454_39034 = (0);
var i__38455_39035 = (0);
while(true){
if((i__38455_39035 < count__38454_39034)){
var child_39036 = chunk__38453_39033.cljs$core$IIndexed$_nth$arity$2(null,i__38455_39035);
if(cljs.core.truth_(child_39036)){
node.appendChild(child_39036);


var G__39037 = seq__38451_39032;
var G__39038 = chunk__38453_39033;
var G__39039 = count__38454_39034;
var G__39040 = (i__38455_39035 + (1));
seq__38451_39032 = G__39037;
chunk__38453_39033 = G__39038;
count__38454_39034 = G__39039;
i__38455_39035 = G__39040;
continue;
} else {
var G__39041 = seq__38451_39032;
var G__39042 = chunk__38453_39033;
var G__39043 = count__38454_39034;
var G__39044 = (i__38455_39035 + (1));
seq__38451_39032 = G__39041;
chunk__38453_39033 = G__39042;
count__38454_39034 = G__39043;
i__38455_39035 = G__39044;
continue;
}
} else {
var temp__5804__auto___39045__$1 = cljs.core.seq(seq__38451_39032);
if(temp__5804__auto___39045__$1){
var seq__38451_39046__$1 = temp__5804__auto___39045__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38451_39046__$1)){
var c__5565__auto___39047 = cljs.core.chunk_first(seq__38451_39046__$1);
var G__39052 = cljs.core.chunk_rest(seq__38451_39046__$1);
var G__39053 = c__5565__auto___39047;
var G__39054 = cljs.core.count(c__5565__auto___39047);
var G__39055 = (0);
seq__38451_39032 = G__39052;
chunk__38453_39033 = G__39053;
count__38454_39034 = G__39054;
i__38455_39035 = G__39055;
continue;
} else {
var child_39056 = cljs.core.first(seq__38451_39046__$1);
if(cljs.core.truth_(child_39056)){
node.appendChild(child_39056);


var G__39057 = cljs.core.next(seq__38451_39046__$1);
var G__39058 = null;
var G__39059 = (0);
var G__39060 = (0);
seq__38451_39032 = G__39057;
chunk__38453_39033 = G__39058;
count__38454_39034 = G__39059;
i__38455_39035 = G__39060;
continue;
} else {
var G__39061 = cljs.core.next(seq__38451_39046__$1);
var G__39062 = null;
var G__39063 = (0);
var G__39064 = (0);
seq__38451_39032 = G__39061;
chunk__38453_39033 = G__39062;
count__38454_39034 = G__39063;
i__38455_39035 = G__39064;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39031);
}
}


var G__39066 = cljs.core.next(seq__38371_39023__$1);
var G__39067 = null;
var G__39068 = (0);
var G__39069 = (0);
seq__38371_38969 = G__39066;
chunk__38373_38970 = G__39067;
count__38374_38971 = G__39068;
i__38375_38972 = G__39069;
continue;
} else {
var G__39070 = cljs.core.next(seq__38371_39023__$1);
var G__39071 = null;
var G__39072 = (0);
var G__39073 = (0);
seq__38371_38969 = G__39070;
chunk__38373_38970 = G__39071;
count__38374_38971 = G__39072;
i__38375_38972 = G__39073;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___39074 = arguments.length;
var i__5767__auto___39075 = (0);
while(true){
if((i__5767__auto___39075 < len__5766__auto___39074)){
args__5772__auto__.push((arguments[i__5767__auto___39075]));

var G__39077 = (i__5767__auto___39075 + (1));
i__5767__auto___39075 = G__39077;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38489){
var G__38490 = cljs.core.first(seq38489);
var seq38489__$1 = cljs.core.next(seq38489);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38490,seq38489__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38499 = arguments.length;
switch (G__38499) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__33808__auto___39079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_38552){
var state_val_38553 = (state_38552[(1)]);
if((state_val_38553 === (1))){
var state_38552__$1 = state_38552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38552__$1,(2),once_or_cleanup);
} else {
if((state_val_38553 === (2))){
var inst_38548 = (state_38552[(2)]);
var inst_38550 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38552__$1 = (function (){var statearr_38560 = state_38552;
(statearr_38560[(7)] = inst_38548);

return statearr_38560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38552__$1,inst_38550);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33626__auto__ = null;
var shadow$dom$state_machine__33626__auto____0 = (function (){
var statearr_38563 = [null,null,null,null,null,null,null,null];
(statearr_38563[(0)] = shadow$dom$state_machine__33626__auto__);

(statearr_38563[(1)] = (1));

return statearr_38563;
});
var shadow$dom$state_machine__33626__auto____1 = (function (state_38552){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_38552);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e38565){var ex__33629__auto__ = e38565;
var statearr_38566_39080 = state_38552;
(statearr_38566_39080[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_38552[(4)]))){
var statearr_38567_39081 = state_38552;
(statearr_38567_39081[(1)] = cljs.core.first((state_38552[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39082 = state_38552;
state_38552 = G__39082;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
shadow$dom$state_machine__33626__auto__ = function(state_38552){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33626__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33626__auto____1.call(this,state_38552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33626__auto____0;
shadow$dom$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33626__auto____1;
return shadow$dom$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_38569 = f__33809__auto__();
(statearr_38569[(6)] = c__33808__auto___39079);

return statearr_38569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
