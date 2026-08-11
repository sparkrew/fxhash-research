goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33908 = arguments.length;
switch (G__33908) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33911 = (function (f,blockable,meta33912){
this.f = f;
this.blockable = blockable;
this.meta33912 = meta33912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33913,meta33912__$1){
var self__ = this;
var _33913__$1 = this;
return (new cljs.core.async.t_cljs$core$async33911(self__.f,self__.blockable,meta33912__$1));
}));

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33913){
var self__ = this;
var _33913__$1 = this;
return self__.meta33912;
}));

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33912","meta33912",780797330,null)], null);
}));

(cljs.core.async.t_cljs$core$async33911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33911");

(cljs.core.async.t_cljs$core$async33911.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async33911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33911.
 */
cljs.core.async.__GT_t_cljs$core$async33911 = (function cljs$core$async$__GT_t_cljs$core$async33911(f__$1,blockable__$1,meta33912){
return (new cljs.core.async.t_cljs$core$async33911(f__$1,blockable__$1,meta33912));
});

}

return (new cljs.core.async.t_cljs$core$async33911(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33958 = arguments.length;
switch (G__33958) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33975 = arguments.length;
switch (G__33975) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33998 = arguments.length;
switch (G__33998) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36981 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36981) : fn1.call(null,val_36981));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36981) : fn1.call(null,val_36981));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34013 = arguments.length;
switch (G__34013) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___36986 = n;
var x_36987 = (0);
while(true){
if((x_36987 < n__5633__auto___36986)){
(a[x_36987] = x_36987);

var G__36989 = (x_36987 + (1));
x_36987 = G__36989;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34035 = (function (flag,meta34036){
this.flag = flag;
this.meta34036 = meta34036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34037,meta34036__$1){
var self__ = this;
var _34037__$1 = this;
return (new cljs.core.async.t_cljs$core$async34035(self__.flag,meta34036__$1));
}));

(cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34037){
var self__ = this;
var _34037__$1 = this;
return self__.meta34036;
}));

(cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34036","meta34036",-925309629,null)], null);
}));

(cljs.core.async.t_cljs$core$async34035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34035");

(cljs.core.async.t_cljs$core$async34035.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async34035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34035.
 */
cljs.core.async.__GT_t_cljs$core$async34035 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34035(flag__$1,meta34036){
return (new cljs.core.async.t_cljs$core$async34035(flag__$1,meta34036));
});

}

return (new cljs.core.async.t_cljs$core$async34035(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34038 = (function (flag,cb,meta34039){
this.flag = flag;
this.cb = cb;
this.meta34039 = meta34039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34040,meta34039__$1){
var self__ = this;
var _34040__$1 = this;
return (new cljs.core.async.t_cljs$core$async34038(self__.flag,self__.cb,meta34039__$1));
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34040){
var self__ = this;
var _34040__$1 = this;
return self__.meta34039;
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34039","meta34039",-221063598,null)], null);
}));

(cljs.core.async.t_cljs$core$async34038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34038");

(cljs.core.async.t_cljs$core$async34038.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async34038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34038.
 */
cljs.core.async.__GT_t_cljs$core$async34038 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34038(flag__$1,cb__$1,meta34039){
return (new cljs.core.async.t_cljs$core$async34038(flag__$1,cb__$1,meta34039));
});

}

return (new cljs.core.async.t_cljs$core$async34038(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34044_SHARP_){
var G__34055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34044_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34055) : fret.call(null,G__34055));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34045_SHARP_){
var G__34057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34045_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34057) : fret.call(null,G__34057));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36996 = (i + (1));
i = G__36996;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___36997 = arguments.length;
var i__5767__auto___36999 = (0);
while(true){
if((i__5767__auto___36999 < len__5766__auto___36997)){
args__5772__auto__.push((arguments[i__5767__auto___36999]));

var G__37000 = (i__5767__auto___36999 + (1));
i__5767__auto___36999 = G__37000;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34067){
var map__34070 = p__34067;
var map__34070__$1 = cljs.core.__destructure_map(map__34070);
var opts = map__34070__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34062){
var G__34063 = cljs.core.first(seq34062);
var seq34062__$1 = cljs.core.next(seq34062);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34063,seq34062__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34084 = arguments.length;
switch (G__34084) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33808__auto___37005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_34144){
var state_val_34146 = (state_34144[(1)]);
if((state_val_34146 === (7))){
var inst_34138 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
var statearr_34161_37007 = state_34144__$1;
(statearr_34161_37007[(2)] = inst_34138);

(statearr_34161_37007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (1))){
var state_34144__$1 = state_34144;
var statearr_34163_37011 = state_34144__$1;
(statearr_34163_37011[(2)] = null);

(statearr_34163_37011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (4))){
var inst_34115 = (state_34144[(7)]);
var inst_34115__$1 = (state_34144[(2)]);
var inst_34121 = (inst_34115__$1 == null);
var state_34144__$1 = (function (){var statearr_34165 = state_34144;
(statearr_34165[(7)] = inst_34115__$1);

return statearr_34165;
})();
if(cljs.core.truth_(inst_34121)){
var statearr_34168_37012 = state_34144__$1;
(statearr_34168_37012[(1)] = (5));

} else {
var statearr_34169_37013 = state_34144__$1;
(statearr_34169_37013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (13))){
var state_34144__$1 = state_34144;
var statearr_34176_37014 = state_34144__$1;
(statearr_34176_37014[(2)] = null);

(statearr_34176_37014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (6))){
var inst_34115 = (state_34144[(7)]);
var state_34144__$1 = state_34144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34144__$1,(11),to,inst_34115);
} else {
if((state_val_34146 === (3))){
var inst_34141 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34144__$1,inst_34141);
} else {
if((state_val_34146 === (12))){
var state_34144__$1 = state_34144;
var statearr_34195_37018 = state_34144__$1;
(statearr_34195_37018[(2)] = null);

(statearr_34195_37018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (2))){
var state_34144__$1 = state_34144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34144__$1,(4),from);
} else {
if((state_val_34146 === (11))){
var inst_34131 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
if(cljs.core.truth_(inst_34131)){
var statearr_34199_37020 = state_34144__$1;
(statearr_34199_37020[(1)] = (12));

} else {
var statearr_34200_37021 = state_34144__$1;
(statearr_34200_37021[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (9))){
var state_34144__$1 = state_34144;
var statearr_34201_37022 = state_34144__$1;
(statearr_34201_37022[(2)] = null);

(statearr_34201_37022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (5))){
var state_34144__$1 = state_34144;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34203_37024 = state_34144__$1;
(statearr_34203_37024[(1)] = (8));

} else {
var statearr_34204_37026 = state_34144__$1;
(statearr_34204_37026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (14))){
var inst_34136 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
var statearr_34209_37033 = state_34144__$1;
(statearr_34209_37033[(2)] = inst_34136);

(statearr_34209_37033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (10))){
var inst_34128 = (state_34144[(2)]);
var state_34144__$1 = state_34144;
var statearr_34210_37034 = state_34144__$1;
(statearr_34210_37034[(2)] = inst_34128);

(statearr_34210_37034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (8))){
var inst_34125 = cljs.core.async.close_BANG_(to);
var state_34144__$1 = state_34144;
var statearr_34212_37035 = state_34144__$1;
(statearr_34212_37035[(2)] = inst_34125);

(statearr_34212_37035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_34218 = [null,null,null,null,null,null,null,null];
(statearr_34218[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_34218[(1)] = (1));

return statearr_34218;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_34144){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34144);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34219){var ex__33629__auto__ = e34219;
var statearr_34220_37041 = state_34144;
(statearr_34220_37041[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34144[(4)]))){
var statearr_34222_37042 = state_34144;
(statearr_34222_37042[(1)] = cljs.core.first((state_34144[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37043 = state_34144;
state_34144 = G__37043;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_34144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_34144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_34227 = f__33809__auto__();
(statearr_34227[(6)] = c__33808__auto___37005);

return statearr_34227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__34235){
var vec__34236 = p__34235;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34236,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34236,(1),null);
var job = vec__34236;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33808__auto___37047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_34247){
var state_val_34248 = (state_34247[(1)]);
if((state_val_34248 === (1))){
var state_34247__$1 = state_34247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34247__$1,(2),res,v);
} else {
if((state_val_34248 === (2))){
var inst_34244 = (state_34247[(2)]);
var inst_34245 = cljs.core.async.close_BANG_(res);
var state_34247__$1 = (function (){var statearr_34249 = state_34247;
(statearr_34249[(7)] = inst_34244);

return statearr_34249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34247__$1,inst_34245);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0 = (function (){
var statearr_34253 = [null,null,null,null,null,null,null,null];
(statearr_34253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__);

(statearr_34253[(1)] = (1));

return statearr_34253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1 = (function (state_34247){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34247);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34255){var ex__33629__auto__ = e34255;
var statearr_34257_37050 = state_34247;
(statearr_34257_37050[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34247[(4)]))){
var statearr_34258_37051 = state_34247;
(statearr_34258_37051[(1)] = cljs.core.first((state_34247[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37053 = state_34247;
state_34247 = G__37053;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = function(state_34247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1.call(this,state_34247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_34260 = f__33809__auto__();
(statearr_34260[(6)] = c__33808__auto___37047);

return statearr_34260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34263){
var vec__34264 = p__34263;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34264,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34264,(1),null);
var job = vec__34264;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___37056 = n;
var __37057 = (0);
while(true){
if((__37057 < n__5633__auto___37056)){
var G__34272_37058 = type;
var G__34272_37059__$1 = (((G__34272_37058 instanceof cljs.core.Keyword))?G__34272_37058.fqn:null);
switch (G__34272_37059__$1) {
case "compute":
var c__33808__auto___37061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37057,c__33808__auto___37061,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async){
return (function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = ((function (__37057,c__33808__auto___37061,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async){
return (function (state_34289){
var state_val_34290 = (state_34289[(1)]);
if((state_val_34290 === (1))){
var state_34289__$1 = state_34289;
var statearr_34291_37066 = state_34289__$1;
(statearr_34291_37066[(2)] = null);

(statearr_34291_37066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34290 === (2))){
var state_34289__$1 = state_34289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34289__$1,(4),jobs);
} else {
if((state_val_34290 === (3))){
var inst_34287 = (state_34289[(2)]);
var state_34289__$1 = state_34289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34289__$1,inst_34287);
} else {
if((state_val_34290 === (4))){
var inst_34279 = (state_34289[(2)]);
var inst_34280 = process__$1(inst_34279);
var state_34289__$1 = state_34289;
if(cljs.core.truth_(inst_34280)){
var statearr_34299_37072 = state_34289__$1;
(statearr_34299_37072[(1)] = (5));

} else {
var statearr_34300_37073 = state_34289__$1;
(statearr_34300_37073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34290 === (5))){
var state_34289__$1 = state_34289;
var statearr_34305_37075 = state_34289__$1;
(statearr_34305_37075[(2)] = null);

(statearr_34305_37075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34290 === (6))){
var state_34289__$1 = state_34289;
var statearr_34306_37076 = state_34289__$1;
(statearr_34306_37076[(2)] = null);

(statearr_34306_37076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34290 === (7))){
var inst_34285 = (state_34289[(2)]);
var state_34289__$1 = state_34289;
var statearr_34311_37077 = state_34289__$1;
(statearr_34311_37077[(2)] = inst_34285);

(statearr_34311_37077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37057,c__33808__auto___37061,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async))
;
return ((function (__37057,switch__33625__auto__,c__33808__auto___37061,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0 = (function (){
var statearr_34312 = [null,null,null,null,null,null,null];
(statearr_34312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__);

(statearr_34312[(1)] = (1));

return statearr_34312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1 = (function (state_34289){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34289);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34313){var ex__33629__auto__ = e34313;
var statearr_34314_37083 = state_34289;
(statearr_34314_37083[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34289[(4)]))){
var statearr_34316_37084 = state_34289;
(statearr_34316_37084[(1)] = cljs.core.first((state_34289[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37085 = state_34289;
state_34289 = G__37085;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = function(state_34289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1.call(this,state_34289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__;
})()
;})(__37057,switch__33625__auto__,c__33808__auto___37061,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async))
})();
var state__33810__auto__ = (function (){var statearr_34320 = f__33809__auto__();
(statearr_34320[(6)] = c__33808__auto___37061);

return statearr_34320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
});})(__37057,c__33808__auto___37061,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async))
);


break;
case "async":
var c__33808__auto___37086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37057,c__33808__auto___37086,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async){
return (function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = ((function (__37057,c__33808__auto___37086,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async){
return (function (state_34333){
var state_val_34334 = (state_34333[(1)]);
if((state_val_34334 === (1))){
var state_34333__$1 = state_34333;
var statearr_34337_37087 = state_34333__$1;
(statearr_34337_37087[(2)] = null);

(statearr_34337_37087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (2))){
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34333__$1,(4),jobs);
} else {
if((state_val_34334 === (3))){
var inst_34331 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34333__$1,inst_34331);
} else {
if((state_val_34334 === (4))){
var inst_34323 = (state_34333[(2)]);
var inst_34324 = async(inst_34323);
var state_34333__$1 = state_34333;
if(cljs.core.truth_(inst_34324)){
var statearr_34342_37088 = state_34333__$1;
(statearr_34342_37088[(1)] = (5));

} else {
var statearr_34343_37089 = state_34333__$1;
(statearr_34343_37089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (5))){
var state_34333__$1 = state_34333;
var statearr_34344_37091 = state_34333__$1;
(statearr_34344_37091[(2)] = null);

(statearr_34344_37091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (6))){
var state_34333__$1 = state_34333;
var statearr_34346_37093 = state_34333__$1;
(statearr_34346_37093[(2)] = null);

(statearr_34346_37093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34334 === (7))){
var inst_34329 = (state_34333[(2)]);
var state_34333__$1 = state_34333;
var statearr_34347_37096 = state_34333__$1;
(statearr_34347_37096[(2)] = inst_34329);

(statearr_34347_37096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37057,c__33808__auto___37086,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async))
;
return ((function (__37057,switch__33625__auto__,c__33808__auto___37086,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0 = (function (){
var statearr_34352 = [null,null,null,null,null,null,null];
(statearr_34352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__);

(statearr_34352[(1)] = (1));

return statearr_34352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1 = (function (state_34333){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34333);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34353){var ex__33629__auto__ = e34353;
var statearr_34354_37097 = state_34333;
(statearr_34354_37097[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34333[(4)]))){
var statearr_34355_37098 = state_34333;
(statearr_34355_37098[(1)] = cljs.core.first((state_34333[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37099 = state_34333;
state_34333 = G__37099;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = function(state_34333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1.call(this,state_34333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__;
})()
;})(__37057,switch__33625__auto__,c__33808__auto___37086,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async))
})();
var state__33810__auto__ = (function (){var statearr_34359 = f__33809__auto__();
(statearr_34359[(6)] = c__33808__auto___37086);

return statearr_34359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
});})(__37057,c__33808__auto___37086,G__34272_37058,G__34272_37059__$1,n__5633__auto___37056,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34272_37059__$1)].join('')));

}

var G__37100 = (__37057 + (1));
__37057 = G__37100;
continue;
} else {
}
break;
}

var c__33808__auto___37101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_34382){
var state_val_34383 = (state_34382[(1)]);
if((state_val_34383 === (7))){
var inst_34378 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
var statearr_34384_37102 = state_34382__$1;
(statearr_34384_37102[(2)] = inst_34378);

(statearr_34384_37102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (1))){
var state_34382__$1 = state_34382;
var statearr_34388_37107 = state_34382__$1;
(statearr_34388_37107[(2)] = null);

(statearr_34388_37107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (4))){
var inst_34363 = (state_34382[(7)]);
var inst_34363__$1 = (state_34382[(2)]);
var inst_34364 = (inst_34363__$1 == null);
var state_34382__$1 = (function (){var statearr_34389 = state_34382;
(statearr_34389[(7)] = inst_34363__$1);

return statearr_34389;
})();
if(cljs.core.truth_(inst_34364)){
var statearr_34390_37110 = state_34382__$1;
(statearr_34390_37110[(1)] = (5));

} else {
var statearr_34391_37111 = state_34382__$1;
(statearr_34391_37111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (6))){
var inst_34368 = (state_34382[(8)]);
var inst_34363 = (state_34382[(7)]);
var inst_34368__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34370 = [inst_34363,inst_34368__$1];
var inst_34371 = (new cljs.core.PersistentVector(null,2,(5),inst_34369,inst_34370,null));
var state_34382__$1 = (function (){var statearr_34394 = state_34382;
(statearr_34394[(8)] = inst_34368__$1);

return statearr_34394;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34382__$1,(8),jobs,inst_34371);
} else {
if((state_val_34383 === (3))){
var inst_34380 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34382__$1,inst_34380);
} else {
if((state_val_34383 === (2))){
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34382__$1,(4),from);
} else {
if((state_val_34383 === (9))){
var inst_34375 = (state_34382[(2)]);
var state_34382__$1 = (function (){var statearr_34405 = state_34382;
(statearr_34405[(9)] = inst_34375);

return statearr_34405;
})();
var statearr_34407_37112 = state_34382__$1;
(statearr_34407_37112[(2)] = null);

(statearr_34407_37112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (5))){
var inst_34366 = cljs.core.async.close_BANG_(jobs);
var state_34382__$1 = state_34382;
var statearr_34409_37113 = state_34382__$1;
(statearr_34409_37113[(2)] = inst_34366);

(statearr_34409_37113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (8))){
var inst_34368 = (state_34382[(8)]);
var inst_34373 = (state_34382[(2)]);
var state_34382__$1 = (function (){var statearr_34410 = state_34382;
(statearr_34410[(10)] = inst_34373);

return statearr_34410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34382__$1,(9),results,inst_34368);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0 = (function (){
var statearr_34412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__);

(statearr_34412[(1)] = (1));

return statearr_34412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1 = (function (state_34382){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34382);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34416){var ex__33629__auto__ = e34416;
var statearr_34417_37116 = state_34382;
(statearr_34417_37116[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34382[(4)]))){
var statearr_34418_37117 = state_34382;
(statearr_34418_37117[(1)] = cljs.core.first((state_34382[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37118 = state_34382;
state_34382 = G__37118;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = function(state_34382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1.call(this,state_34382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_34428 = f__33809__auto__();
(statearr_34428[(6)] = c__33808__auto___37101);

return statearr_34428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


var c__33808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_34495){
var state_val_34496 = (state_34495[(1)]);
if((state_val_34496 === (7))){
var inst_34489 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34507_37120 = state_34495__$1;
(statearr_34507_37120[(2)] = inst_34489);

(statearr_34507_37120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (20))){
var state_34495__$1 = state_34495;
var statearr_34511_37121 = state_34495__$1;
(statearr_34511_37121[(2)] = null);

(statearr_34511_37121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (1))){
var state_34495__$1 = state_34495;
var statearr_34512_37122 = state_34495__$1;
(statearr_34512_37122[(2)] = null);

(statearr_34512_37122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (4))){
var inst_34440 = (state_34495[(7)]);
var inst_34440__$1 = (state_34495[(2)]);
var inst_34444 = (inst_34440__$1 == null);
var state_34495__$1 = (function (){var statearr_34514 = state_34495;
(statearr_34514[(7)] = inst_34440__$1);

return statearr_34514;
})();
if(cljs.core.truth_(inst_34444)){
var statearr_34515_37124 = state_34495__$1;
(statearr_34515_37124[(1)] = (5));

} else {
var statearr_34516_37125 = state_34495__$1;
(statearr_34516_37125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (15))){
var inst_34469 = (state_34495[(8)]);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34495__$1,(18),to,inst_34469);
} else {
if((state_val_34496 === (21))){
var inst_34484 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34521_37127 = state_34495__$1;
(statearr_34521_37127[(2)] = inst_34484);

(statearr_34521_37127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (13))){
var inst_34486 = (state_34495[(2)]);
var state_34495__$1 = (function (){var statearr_34522 = state_34495;
(statearr_34522[(9)] = inst_34486);

return statearr_34522;
})();
var statearr_34523_37129 = state_34495__$1;
(statearr_34523_37129[(2)] = null);

(statearr_34523_37129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (6))){
var inst_34440 = (state_34495[(7)]);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34495__$1,(11),inst_34440);
} else {
if((state_val_34496 === (17))){
var inst_34478 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
if(cljs.core.truth_(inst_34478)){
var statearr_34524_37131 = state_34495__$1;
(statearr_34524_37131[(1)] = (19));

} else {
var statearr_34525_37132 = state_34495__$1;
(statearr_34525_37132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (3))){
var inst_34491 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34495__$1,inst_34491);
} else {
if((state_val_34496 === (12))){
var inst_34460 = (state_34495[(10)]);
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34495__$1,(14),inst_34460);
} else {
if((state_val_34496 === (2))){
var state_34495__$1 = state_34495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34495__$1,(4),results);
} else {
if((state_val_34496 === (19))){
var state_34495__$1 = state_34495;
var statearr_34531_37133 = state_34495__$1;
(statearr_34531_37133[(2)] = null);

(statearr_34531_37133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (11))){
var inst_34460 = (state_34495[(2)]);
var state_34495__$1 = (function (){var statearr_34532 = state_34495;
(statearr_34532[(10)] = inst_34460);

return statearr_34532;
})();
var statearr_34533_37138 = state_34495__$1;
(statearr_34533_37138[(2)] = null);

(statearr_34533_37138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (9))){
var state_34495__$1 = state_34495;
var statearr_34535_37140 = state_34495__$1;
(statearr_34535_37140[(2)] = null);

(statearr_34535_37140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (5))){
var state_34495__$1 = state_34495;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34538_37143 = state_34495__$1;
(statearr_34538_37143[(1)] = (8));

} else {
var statearr_34539_37147 = state_34495__$1;
(statearr_34539_37147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (14))){
var inst_34471 = (state_34495[(11)]);
var inst_34469 = (state_34495[(8)]);
var inst_34469__$1 = (state_34495[(2)]);
var inst_34470 = (inst_34469__$1 == null);
var inst_34471__$1 = cljs.core.not(inst_34470);
var state_34495__$1 = (function (){var statearr_34542 = state_34495;
(statearr_34542[(11)] = inst_34471__$1);

(statearr_34542[(8)] = inst_34469__$1);

return statearr_34542;
})();
if(inst_34471__$1){
var statearr_34543_37149 = state_34495__$1;
(statearr_34543_37149[(1)] = (15));

} else {
var statearr_34544_37150 = state_34495__$1;
(statearr_34544_37150[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (16))){
var inst_34471 = (state_34495[(11)]);
var state_34495__$1 = state_34495;
var statearr_34545_37151 = state_34495__$1;
(statearr_34545_37151[(2)] = inst_34471);

(statearr_34545_37151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (10))){
var inst_34451 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34547_37152 = state_34495__$1;
(statearr_34547_37152[(2)] = inst_34451);

(statearr_34547_37152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (18))){
var inst_34475 = (state_34495[(2)]);
var state_34495__$1 = state_34495;
var statearr_34553_37153 = state_34495__$1;
(statearr_34553_37153[(2)] = inst_34475);

(statearr_34553_37153[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34496 === (8))){
var inst_34448 = cljs.core.async.close_BANG_(to);
var state_34495__$1 = state_34495;
var statearr_34555_37154 = state_34495__$1;
(statearr_34555_37154[(2)] = inst_34448);

(statearr_34555_37154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0 = (function (){
var statearr_34557 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__);

(statearr_34557[(1)] = (1));

return statearr_34557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1 = (function (state_34495){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34495);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34560){var ex__33629__auto__ = e34560;
var statearr_34563_37165 = state_34495;
(statearr_34563_37165[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34495[(4)]))){
var statearr_34564_37175 = state_34495;
(statearr_34564_37175[(1)] = cljs.core.first((state_34495[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37176 = state_34495;
state_34495 = G__37176;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__ = function(state_34495){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1.call(this,state_34495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33626__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_34565 = f__33809__auto__();
(statearr_34565[(6)] = c__33808__auto__);

return statearr_34565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));

return c__33808__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34571 = arguments.length;
switch (G__34571) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34578 = arguments.length;
switch (G__34578) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34598 = arguments.length;
switch (G__34598) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33808__auto___37207 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_34641){
var state_val_34642 = (state_34641[(1)]);
if((state_val_34642 === (7))){
var inst_34637 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
var statearr_34644_37208 = state_34641__$1;
(statearr_34644_37208[(2)] = inst_34637);

(statearr_34644_37208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (1))){
var state_34641__$1 = state_34641;
var statearr_34647_37209 = state_34641__$1;
(statearr_34647_37209[(2)] = null);

(statearr_34647_37209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (4))){
var inst_34618 = (state_34641[(7)]);
var inst_34618__$1 = (state_34641[(2)]);
var inst_34619 = (inst_34618__$1 == null);
var state_34641__$1 = (function (){var statearr_34650 = state_34641;
(statearr_34650[(7)] = inst_34618__$1);

return statearr_34650;
})();
if(cljs.core.truth_(inst_34619)){
var statearr_34652_37213 = state_34641__$1;
(statearr_34652_37213[(1)] = (5));

} else {
var statearr_34653_37214 = state_34641__$1;
(statearr_34653_37214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (13))){
var state_34641__$1 = state_34641;
var statearr_34656_37216 = state_34641__$1;
(statearr_34656_37216[(2)] = null);

(statearr_34656_37216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (6))){
var inst_34618 = (state_34641[(7)]);
var inst_34624 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34618) : p.call(null,inst_34618));
var state_34641__$1 = state_34641;
if(cljs.core.truth_(inst_34624)){
var statearr_34664_37218 = state_34641__$1;
(statearr_34664_37218[(1)] = (9));

} else {
var statearr_34665_37220 = state_34641__$1;
(statearr_34665_37220[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (3))){
var inst_34639 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34641__$1,inst_34639);
} else {
if((state_val_34642 === (12))){
var state_34641__$1 = state_34641;
var statearr_34669_37226 = state_34641__$1;
(statearr_34669_37226[(2)] = null);

(statearr_34669_37226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (2))){
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34641__$1,(4),ch);
} else {
if((state_val_34642 === (11))){
var inst_34618 = (state_34641[(7)]);
var inst_34628 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34641__$1,(8),inst_34628,inst_34618);
} else {
if((state_val_34642 === (9))){
var state_34641__$1 = state_34641;
var statearr_34670_37228 = state_34641__$1;
(statearr_34670_37228[(2)] = tc);

(statearr_34670_37228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (5))){
var inst_34621 = cljs.core.async.close_BANG_(tc);
var inst_34622 = cljs.core.async.close_BANG_(fc);
var state_34641__$1 = (function (){var statearr_34671 = state_34641;
(statearr_34671[(8)] = inst_34621);

return statearr_34671;
})();
var statearr_34672_37230 = state_34641__$1;
(statearr_34672_37230[(2)] = inst_34622);

(statearr_34672_37230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (14))){
var inst_34635 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
var statearr_34673_37239 = state_34641__$1;
(statearr_34673_37239[(2)] = inst_34635);

(statearr_34673_37239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (10))){
var state_34641__$1 = state_34641;
var statearr_34674_37249 = state_34641__$1;
(statearr_34674_37249[(2)] = fc);

(statearr_34674_37249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34642 === (8))){
var inst_34630 = (state_34641[(2)]);
var state_34641__$1 = state_34641;
if(cljs.core.truth_(inst_34630)){
var statearr_34675_37252 = state_34641__$1;
(statearr_34675_37252[(1)] = (12));

} else {
var statearr_34676_37253 = state_34641__$1;
(statearr_34676_37253[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_34677 = [null,null,null,null,null,null,null,null,null];
(statearr_34677[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_34677[(1)] = (1));

return statearr_34677;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_34641){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34641);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34678){var ex__33629__auto__ = e34678;
var statearr_34679_37290 = state_34641;
(statearr_34679_37290[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34641[(4)]))){
var statearr_34680_37291 = state_34641;
(statearr_34680_37291[(1)] = cljs.core.first((state_34641[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37293 = state_34641;
state_34641 = G__37293;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_34641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_34641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_34685 = f__33809__auto__();
(statearr_34685[(6)] = c__33808__auto___37207);

return statearr_34685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_34711){
var state_val_34712 = (state_34711[(1)]);
if((state_val_34712 === (7))){
var inst_34707 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
var statearr_34714_37299 = state_34711__$1;
(statearr_34714_37299[(2)] = inst_34707);

(statearr_34714_37299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (1))){
var inst_34690 = init;
var inst_34691 = inst_34690;
var state_34711__$1 = (function (){var statearr_34720 = state_34711;
(statearr_34720[(7)] = inst_34691);

return statearr_34720;
})();
var statearr_34721_37301 = state_34711__$1;
(statearr_34721_37301[(2)] = null);

(statearr_34721_37301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (4))){
var inst_34694 = (state_34711[(8)]);
var inst_34694__$1 = (state_34711[(2)]);
var inst_34695 = (inst_34694__$1 == null);
var state_34711__$1 = (function (){var statearr_34724 = state_34711;
(statearr_34724[(8)] = inst_34694__$1);

return statearr_34724;
})();
if(cljs.core.truth_(inst_34695)){
var statearr_34725_37302 = state_34711__$1;
(statearr_34725_37302[(1)] = (5));

} else {
var statearr_34727_37303 = state_34711__$1;
(statearr_34727_37303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (6))){
var inst_34698 = (state_34711[(9)]);
var inst_34694 = (state_34711[(8)]);
var inst_34691 = (state_34711[(7)]);
var inst_34698__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34691,inst_34694) : f.call(null,inst_34691,inst_34694));
var inst_34699 = cljs.core.reduced_QMARK_(inst_34698__$1);
var state_34711__$1 = (function (){var statearr_34728 = state_34711;
(statearr_34728[(9)] = inst_34698__$1);

return statearr_34728;
})();
if(inst_34699){
var statearr_34729_37304 = state_34711__$1;
(statearr_34729_37304[(1)] = (8));

} else {
var statearr_34730_37305 = state_34711__$1;
(statearr_34730_37305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (3))){
var inst_34709 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34711__$1,inst_34709);
} else {
if((state_val_34712 === (2))){
var state_34711__$1 = state_34711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34711__$1,(4),ch);
} else {
if((state_val_34712 === (9))){
var inst_34698 = (state_34711[(9)]);
var inst_34691 = inst_34698;
var state_34711__$1 = (function (){var statearr_34735 = state_34711;
(statearr_34735[(7)] = inst_34691);

return statearr_34735;
})();
var statearr_34736_37307 = state_34711__$1;
(statearr_34736_37307[(2)] = null);

(statearr_34736_37307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (5))){
var inst_34691 = (state_34711[(7)]);
var state_34711__$1 = state_34711;
var statearr_34738_37311 = state_34711__$1;
(statearr_34738_37311[(2)] = inst_34691);

(statearr_34738_37311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (10))){
var inst_34705 = (state_34711[(2)]);
var state_34711__$1 = state_34711;
var statearr_34744_37312 = state_34711__$1;
(statearr_34744_37312[(2)] = inst_34705);

(statearr_34744_37312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34712 === (8))){
var inst_34698 = (state_34711[(9)]);
var inst_34701 = cljs.core.deref(inst_34698);
var state_34711__$1 = state_34711;
var statearr_34745_37313 = state_34711__$1;
(statearr_34745_37313[(2)] = inst_34701);

(statearr_34745_37313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33626__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33626__auto____0 = (function (){
var statearr_34748 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34748[(0)] = cljs$core$async$reduce_$_state_machine__33626__auto__);

(statearr_34748[(1)] = (1));

return statearr_34748;
});
var cljs$core$async$reduce_$_state_machine__33626__auto____1 = (function (state_34711){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34711);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34749){var ex__33629__auto__ = e34749;
var statearr_34750_37316 = state_34711;
(statearr_34750_37316[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34711[(4)]))){
var statearr_34751_37317 = state_34711;
(statearr_34751_37317[(1)] = cljs.core.first((state_34711[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37318 = state_34711;
state_34711 = G__37318;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33626__auto__ = function(state_34711){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33626__auto____1.call(this,state_34711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33626__auto____0;
cljs$core$async$reduce_$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33626__auto____1;
return cljs$core$async$reduce_$_state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_34754 = f__33809__auto__();
(statearr_34754[(6)] = c__33808__auto__);

return statearr_34754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));

return c__33808__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_34767){
var state_val_34768 = (state_34767[(1)]);
if((state_val_34768 === (1))){
var inst_34762 = cljs.core.async.reduce(f__$1,init,ch);
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34767__$1,(2),inst_34762);
} else {
if((state_val_34768 === (2))){
var inst_34764 = (state_34767[(2)]);
var inst_34765 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34764) : f__$1.call(null,inst_34764));
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34767__$1,inst_34765);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33626__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33626__auto____0 = (function (){
var statearr_34769 = [null,null,null,null,null,null,null];
(statearr_34769[(0)] = cljs$core$async$transduce_$_state_machine__33626__auto__);

(statearr_34769[(1)] = (1));

return statearr_34769;
});
var cljs$core$async$transduce_$_state_machine__33626__auto____1 = (function (state_34767){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34767);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34770){var ex__33629__auto__ = e34770;
var statearr_34772_37321 = state_34767;
(statearr_34772_37321[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34767[(4)]))){
var statearr_34773_37322 = state_34767;
(statearr_34773_37322[(1)] = cljs.core.first((state_34767[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37323 = state_34767;
state_34767 = G__37323;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33626__auto__ = function(state_34767){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33626__auto____1.call(this,state_34767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33626__auto____0;
cljs$core$async$transduce_$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33626__auto____1;
return cljs$core$async$transduce_$_state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_34775 = f__33809__auto__();
(statearr_34775[(6)] = c__33808__auto__);

return statearr_34775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));

return c__33808__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34777 = arguments.length;
switch (G__34777) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_34824){
var state_val_34825 = (state_34824[(1)]);
if((state_val_34825 === (7))){
var inst_34794 = (state_34824[(2)]);
var state_34824__$1 = state_34824;
var statearr_34838_37325 = state_34824__$1;
(statearr_34838_37325[(2)] = inst_34794);

(statearr_34838_37325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (1))){
var inst_34781 = cljs.core.seq(coll);
var inst_34782 = inst_34781;
var state_34824__$1 = (function (){var statearr_34840 = state_34824;
(statearr_34840[(7)] = inst_34782);

return statearr_34840;
})();
var statearr_34841_37326 = state_34824__$1;
(statearr_34841_37326[(2)] = null);

(statearr_34841_37326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (4))){
var inst_34782 = (state_34824[(7)]);
var inst_34792 = cljs.core.first(inst_34782);
var state_34824__$1 = state_34824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34824__$1,(7),ch,inst_34792);
} else {
if((state_val_34825 === (13))){
var inst_34811 = (state_34824[(2)]);
var state_34824__$1 = state_34824;
var statearr_34844_37327 = state_34824__$1;
(statearr_34844_37327[(2)] = inst_34811);

(statearr_34844_37327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (6))){
var inst_34797 = (state_34824[(2)]);
var state_34824__$1 = state_34824;
if(cljs.core.truth_(inst_34797)){
var statearr_34845_37331 = state_34824__$1;
(statearr_34845_37331[(1)] = (8));

} else {
var statearr_34846_37332 = state_34824__$1;
(statearr_34846_37332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (3))){
var inst_34815 = (state_34824[(2)]);
var state_34824__$1 = state_34824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34824__$1,inst_34815);
} else {
if((state_val_34825 === (12))){
var state_34824__$1 = state_34824;
var statearr_34849_37343 = state_34824__$1;
(statearr_34849_37343[(2)] = null);

(statearr_34849_37343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (2))){
var inst_34782 = (state_34824[(7)]);
var state_34824__$1 = state_34824;
if(cljs.core.truth_(inst_34782)){
var statearr_34850_37344 = state_34824__$1;
(statearr_34850_37344[(1)] = (4));

} else {
var statearr_34851_37345 = state_34824__$1;
(statearr_34851_37345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (11))){
var inst_34808 = cljs.core.async.close_BANG_(ch);
var state_34824__$1 = state_34824;
var statearr_34852_37346 = state_34824__$1;
(statearr_34852_37346[(2)] = inst_34808);

(statearr_34852_37346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (9))){
var state_34824__$1 = state_34824;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34855_37347 = state_34824__$1;
(statearr_34855_37347[(1)] = (11));

} else {
var statearr_34860_37348 = state_34824__$1;
(statearr_34860_37348[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (5))){
var inst_34782 = (state_34824[(7)]);
var state_34824__$1 = state_34824;
var statearr_34863_37353 = state_34824__$1;
(statearr_34863_37353[(2)] = inst_34782);

(statearr_34863_37353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (10))){
var inst_34813 = (state_34824[(2)]);
var state_34824__$1 = state_34824;
var statearr_34864_37356 = state_34824__$1;
(statearr_34864_37356[(2)] = inst_34813);

(statearr_34864_37356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34825 === (8))){
var inst_34782 = (state_34824[(7)]);
var inst_34799 = cljs.core.next(inst_34782);
var inst_34782__$1 = inst_34799;
var state_34824__$1 = (function (){var statearr_34870 = state_34824;
(statearr_34870[(7)] = inst_34782__$1);

return statearr_34870;
})();
var statearr_34875_37362 = state_34824__$1;
(statearr_34875_37362[(2)] = null);

(statearr_34875_37362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_34890 = [null,null,null,null,null,null,null,null];
(statearr_34890[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_34890[(1)] = (1));

return statearr_34890;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_34824){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_34824);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e34895){var ex__33629__auto__ = e34895;
var statearr_34896_37363 = state_34824;
(statearr_34896_37363[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_34824[(4)]))){
var statearr_34897_37366 = state_34824;
(statearr_34897_37366[(1)] = cljs.core.first((state_34824[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37368 = state_34824;
state_34824 = G__37368;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_34824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_34824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_34905 = f__33809__auto__();
(statearr_34905[(6)] = c__33808__auto__);

return statearr_34905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));

return c__33808__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34944 = arguments.length;
switch (G__34944) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37399 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37399(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37407 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37407(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37409 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37409(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37411 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37411(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34992 = (function (ch,cs,meta34993){
this.ch = ch;
this.cs = cs;
this.meta34993 = meta34993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34994,meta34993__$1){
var self__ = this;
var _34994__$1 = this;
return (new cljs.core.async.t_cljs$core$async34992(self__.ch,self__.cs,meta34993__$1));
}));

(cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34994){
var self__ = this;
var _34994__$1 = this;
return self__.meta34993;
}));

(cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34992.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34993","meta34993",1535045745,null)], null);
}));

(cljs.core.async.t_cljs$core$async34992.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34992");

(cljs.core.async.t_cljs$core$async34992.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async34992");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34992.
 */
cljs.core.async.__GT_t_cljs$core$async34992 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34992(ch__$1,cs__$1,meta34993){
return (new cljs.core.async.t_cljs$core$async34992(ch__$1,cs__$1,meta34993));
});

}

return (new cljs.core.async.t_cljs$core$async34992(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33808__auto___37429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_35161){
var state_val_35162 = (state_35161[(1)]);
if((state_val_35162 === (7))){
var inst_35157 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
var statearr_35164_37448 = state_35161__$1;
(statearr_35164_37448[(2)] = inst_35157);

(statearr_35164_37448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (20))){
var inst_35054 = (state_35161[(7)]);
var inst_35068 = cljs.core.first(inst_35054);
var inst_35069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35068,(0),null);
var inst_35070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35068,(1),null);
var state_35161__$1 = (function (){var statearr_35168 = state_35161;
(statearr_35168[(8)] = inst_35069);

return statearr_35168;
})();
if(cljs.core.truth_(inst_35070)){
var statearr_35169_37454 = state_35161__$1;
(statearr_35169_37454[(1)] = (22));

} else {
var statearr_35170_37455 = state_35161__$1;
(statearr_35170_37455[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (27))){
var inst_35107 = (state_35161[(9)]);
var inst_35021 = (state_35161[(10)]);
var inst_35098 = (state_35161[(11)]);
var inst_35100 = (state_35161[(12)]);
var inst_35107__$1 = cljs.core._nth(inst_35098,inst_35100);
var inst_35108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35107__$1,inst_35021,done);
var state_35161__$1 = (function (){var statearr_35171 = state_35161;
(statearr_35171[(9)] = inst_35107__$1);

return statearr_35171;
})();
if(cljs.core.truth_(inst_35108)){
var statearr_35172_37456 = state_35161__$1;
(statearr_35172_37456[(1)] = (30));

} else {
var statearr_35173_37457 = state_35161__$1;
(statearr_35173_37457[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (1))){
var state_35161__$1 = state_35161;
var statearr_35174_37460 = state_35161__$1;
(statearr_35174_37460[(2)] = null);

(statearr_35174_37460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (24))){
var inst_35054 = (state_35161[(7)]);
var inst_35075 = (state_35161[(2)]);
var inst_35076 = cljs.core.next(inst_35054);
var inst_35030 = inst_35076;
var inst_35031 = null;
var inst_35032 = (0);
var inst_35033 = (0);
var state_35161__$1 = (function (){var statearr_35177 = state_35161;
(statearr_35177[(13)] = inst_35033);

(statearr_35177[(14)] = inst_35032);

(statearr_35177[(15)] = inst_35030);

(statearr_35177[(16)] = inst_35075);

(statearr_35177[(17)] = inst_35031);

return statearr_35177;
})();
var statearr_35178_37463 = state_35161__$1;
(statearr_35178_37463[(2)] = null);

(statearr_35178_37463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (39))){
var state_35161__$1 = state_35161;
var statearr_35182_37464 = state_35161__$1;
(statearr_35182_37464[(2)] = null);

(statearr_35182_37464[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (4))){
var inst_35021 = (state_35161[(10)]);
var inst_35021__$1 = (state_35161[(2)]);
var inst_35022 = (inst_35021__$1 == null);
var state_35161__$1 = (function (){var statearr_35185 = state_35161;
(statearr_35185[(10)] = inst_35021__$1);

return statearr_35185;
})();
if(cljs.core.truth_(inst_35022)){
var statearr_35186_37465 = state_35161__$1;
(statearr_35186_37465[(1)] = (5));

} else {
var statearr_35187_37466 = state_35161__$1;
(statearr_35187_37466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (15))){
var inst_35033 = (state_35161[(13)]);
var inst_35032 = (state_35161[(14)]);
var inst_35030 = (state_35161[(15)]);
var inst_35031 = (state_35161[(17)]);
var inst_35049 = (state_35161[(2)]);
var inst_35050 = (inst_35033 + (1));
var tmp35179 = inst_35032;
var tmp35180 = inst_35030;
var tmp35181 = inst_35031;
var inst_35030__$1 = tmp35180;
var inst_35031__$1 = tmp35181;
var inst_35032__$1 = tmp35179;
var inst_35033__$1 = inst_35050;
var state_35161__$1 = (function (){var statearr_35190 = state_35161;
(statearr_35190[(13)] = inst_35033__$1);

(statearr_35190[(14)] = inst_35032__$1);

(statearr_35190[(15)] = inst_35030__$1);

(statearr_35190[(17)] = inst_35031__$1);

(statearr_35190[(18)] = inst_35049);

return statearr_35190;
})();
var statearr_35191_37470 = state_35161__$1;
(statearr_35191_37470[(2)] = null);

(statearr_35191_37470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (21))){
var inst_35079 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
var statearr_35201_37472 = state_35161__$1;
(statearr_35201_37472[(2)] = inst_35079);

(statearr_35201_37472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (31))){
var inst_35107 = (state_35161[(9)]);
var inst_35111 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35107);
var state_35161__$1 = state_35161;
var statearr_35204_37473 = state_35161__$1;
(statearr_35204_37473[(2)] = inst_35111);

(statearr_35204_37473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (32))){
var inst_35097 = (state_35161[(19)]);
var inst_35098 = (state_35161[(11)]);
var inst_35099 = (state_35161[(20)]);
var inst_35100 = (state_35161[(12)]);
var inst_35113 = (state_35161[(2)]);
var inst_35114 = (inst_35100 + (1));
var tmp35198 = inst_35097;
var tmp35199 = inst_35098;
var tmp35200 = inst_35099;
var inst_35097__$1 = tmp35198;
var inst_35098__$1 = tmp35199;
var inst_35099__$1 = tmp35200;
var inst_35100__$1 = inst_35114;
var state_35161__$1 = (function (){var statearr_35207 = state_35161;
(statearr_35207[(21)] = inst_35113);

(statearr_35207[(19)] = inst_35097__$1);

(statearr_35207[(11)] = inst_35098__$1);

(statearr_35207[(20)] = inst_35099__$1);

(statearr_35207[(12)] = inst_35100__$1);

return statearr_35207;
})();
var statearr_35208_37478 = state_35161__$1;
(statearr_35208_37478[(2)] = null);

(statearr_35208_37478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (40))){
var inst_35130 = (state_35161[(22)]);
var inst_35134 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35130);
var state_35161__$1 = state_35161;
var statearr_35209_37479 = state_35161__$1;
(statearr_35209_37479[(2)] = inst_35134);

(statearr_35209_37479[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (33))){
var inst_35117 = (state_35161[(23)]);
var inst_35120 = cljs.core.chunked_seq_QMARK_(inst_35117);
var state_35161__$1 = state_35161;
if(inst_35120){
var statearr_35211_37480 = state_35161__$1;
(statearr_35211_37480[(1)] = (36));

} else {
var statearr_35212_37481 = state_35161__$1;
(statearr_35212_37481[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (13))){
var inst_35043 = (state_35161[(24)]);
var inst_35046 = cljs.core.async.close_BANG_(inst_35043);
var state_35161__$1 = state_35161;
var statearr_35213_37482 = state_35161__$1;
(statearr_35213_37482[(2)] = inst_35046);

(statearr_35213_37482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (22))){
var inst_35069 = (state_35161[(8)]);
var inst_35072 = cljs.core.async.close_BANG_(inst_35069);
var state_35161__$1 = state_35161;
var statearr_35214_37483 = state_35161__$1;
(statearr_35214_37483[(2)] = inst_35072);

(statearr_35214_37483[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (36))){
var inst_35117 = (state_35161[(23)]);
var inst_35125 = cljs.core.chunk_first(inst_35117);
var inst_35126 = cljs.core.chunk_rest(inst_35117);
var inst_35127 = cljs.core.count(inst_35125);
var inst_35097 = inst_35126;
var inst_35098 = inst_35125;
var inst_35099 = inst_35127;
var inst_35100 = (0);
var state_35161__$1 = (function (){var statearr_35219 = state_35161;
(statearr_35219[(19)] = inst_35097);

(statearr_35219[(11)] = inst_35098);

(statearr_35219[(20)] = inst_35099);

(statearr_35219[(12)] = inst_35100);

return statearr_35219;
})();
var statearr_35222_37488 = state_35161__$1;
(statearr_35222_37488[(2)] = null);

(statearr_35222_37488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (41))){
var inst_35117 = (state_35161[(23)]);
var inst_35136 = (state_35161[(2)]);
var inst_35137 = cljs.core.next(inst_35117);
var inst_35097 = inst_35137;
var inst_35098 = null;
var inst_35099 = (0);
var inst_35100 = (0);
var state_35161__$1 = (function (){var statearr_35223 = state_35161;
(statearr_35223[(19)] = inst_35097);

(statearr_35223[(11)] = inst_35098);

(statearr_35223[(20)] = inst_35099);

(statearr_35223[(25)] = inst_35136);

(statearr_35223[(12)] = inst_35100);

return statearr_35223;
})();
var statearr_35224_37489 = state_35161__$1;
(statearr_35224_37489[(2)] = null);

(statearr_35224_37489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (43))){
var state_35161__$1 = state_35161;
var statearr_35228_37490 = state_35161__$1;
(statearr_35228_37490[(2)] = null);

(statearr_35228_37490[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (29))){
var inst_35145 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
var statearr_35229_37491 = state_35161__$1;
(statearr_35229_37491[(2)] = inst_35145);

(statearr_35229_37491[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (44))){
var inst_35154 = (state_35161[(2)]);
var state_35161__$1 = (function (){var statearr_35231 = state_35161;
(statearr_35231[(26)] = inst_35154);

return statearr_35231;
})();
var statearr_35232_37492 = state_35161__$1;
(statearr_35232_37492[(2)] = null);

(statearr_35232_37492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (6))){
var inst_35089 = (state_35161[(27)]);
var inst_35088 = cljs.core.deref(cs);
var inst_35089__$1 = cljs.core.keys(inst_35088);
var inst_35090 = cljs.core.count(inst_35089__$1);
var inst_35091 = cljs.core.reset_BANG_(dctr,inst_35090);
var inst_35096 = cljs.core.seq(inst_35089__$1);
var inst_35097 = inst_35096;
var inst_35098 = null;
var inst_35099 = (0);
var inst_35100 = (0);
var state_35161__$1 = (function (){var statearr_35238 = state_35161;
(statearr_35238[(19)] = inst_35097);

(statearr_35238[(11)] = inst_35098);

(statearr_35238[(20)] = inst_35099);

(statearr_35238[(27)] = inst_35089__$1);

(statearr_35238[(28)] = inst_35091);

(statearr_35238[(12)] = inst_35100);

return statearr_35238;
})();
var statearr_35240_37493 = state_35161__$1;
(statearr_35240_37493[(2)] = null);

(statearr_35240_37493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (28))){
var inst_35097 = (state_35161[(19)]);
var inst_35117 = (state_35161[(23)]);
var inst_35117__$1 = cljs.core.seq(inst_35097);
var state_35161__$1 = (function (){var statearr_35241 = state_35161;
(statearr_35241[(23)] = inst_35117__$1);

return statearr_35241;
})();
if(inst_35117__$1){
var statearr_35242_37503 = state_35161__$1;
(statearr_35242_37503[(1)] = (33));

} else {
var statearr_35243_37505 = state_35161__$1;
(statearr_35243_37505[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (25))){
var inst_35099 = (state_35161[(20)]);
var inst_35100 = (state_35161[(12)]);
var inst_35102 = (inst_35100 < inst_35099);
var inst_35103 = inst_35102;
var state_35161__$1 = state_35161;
if(cljs.core.truth_(inst_35103)){
var statearr_35244_37513 = state_35161__$1;
(statearr_35244_37513[(1)] = (27));

} else {
var statearr_35245_37514 = state_35161__$1;
(statearr_35245_37514[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (34))){
var state_35161__$1 = state_35161;
var statearr_35246_37518 = state_35161__$1;
(statearr_35246_37518[(2)] = null);

(statearr_35246_37518[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (17))){
var state_35161__$1 = state_35161;
var statearr_35247_37519 = state_35161__$1;
(statearr_35247_37519[(2)] = null);

(statearr_35247_37519[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (3))){
var inst_35159 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35161__$1,inst_35159);
} else {
if((state_val_35162 === (12))){
var inst_35084 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
var statearr_35252_37523 = state_35161__$1;
(statearr_35252_37523[(2)] = inst_35084);

(statearr_35252_37523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (2))){
var state_35161__$1 = state_35161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35161__$1,(4),ch);
} else {
if((state_val_35162 === (23))){
var state_35161__$1 = state_35161;
var statearr_35256_37532 = state_35161__$1;
(statearr_35256_37532[(2)] = null);

(statearr_35256_37532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (35))){
var inst_35143 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
var statearr_35257_37533 = state_35161__$1;
(statearr_35257_37533[(2)] = inst_35143);

(statearr_35257_37533[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (19))){
var inst_35054 = (state_35161[(7)]);
var inst_35060 = cljs.core.chunk_first(inst_35054);
var inst_35061 = cljs.core.chunk_rest(inst_35054);
var inst_35062 = cljs.core.count(inst_35060);
var inst_35030 = inst_35061;
var inst_35031 = inst_35060;
var inst_35032 = inst_35062;
var inst_35033 = (0);
var state_35161__$1 = (function (){var statearr_35258 = state_35161;
(statearr_35258[(13)] = inst_35033);

(statearr_35258[(14)] = inst_35032);

(statearr_35258[(15)] = inst_35030);

(statearr_35258[(17)] = inst_35031);

return statearr_35258;
})();
var statearr_35259_37535 = state_35161__$1;
(statearr_35259_37535[(2)] = null);

(statearr_35259_37535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (11))){
var inst_35054 = (state_35161[(7)]);
var inst_35030 = (state_35161[(15)]);
var inst_35054__$1 = cljs.core.seq(inst_35030);
var state_35161__$1 = (function (){var statearr_35260 = state_35161;
(statearr_35260[(7)] = inst_35054__$1);

return statearr_35260;
})();
if(inst_35054__$1){
var statearr_35261_37538 = state_35161__$1;
(statearr_35261_37538[(1)] = (16));

} else {
var statearr_35262_37539 = state_35161__$1;
(statearr_35262_37539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (9))){
var inst_35086 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
var statearr_35264_37540 = state_35161__$1;
(statearr_35264_37540[(2)] = inst_35086);

(statearr_35264_37540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (5))){
var inst_35028 = cljs.core.deref(cs);
var inst_35029 = cljs.core.seq(inst_35028);
var inst_35030 = inst_35029;
var inst_35031 = null;
var inst_35032 = (0);
var inst_35033 = (0);
var state_35161__$1 = (function (){var statearr_35265 = state_35161;
(statearr_35265[(13)] = inst_35033);

(statearr_35265[(14)] = inst_35032);

(statearr_35265[(15)] = inst_35030);

(statearr_35265[(17)] = inst_35031);

return statearr_35265;
})();
var statearr_35266_37541 = state_35161__$1;
(statearr_35266_37541[(2)] = null);

(statearr_35266_37541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (14))){
var state_35161__$1 = state_35161;
var statearr_35271_37542 = state_35161__$1;
(statearr_35271_37542[(2)] = null);

(statearr_35271_37542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (45))){
var inst_35151 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
var statearr_35273_37544 = state_35161__$1;
(statearr_35273_37544[(2)] = inst_35151);

(statearr_35273_37544[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (26))){
var inst_35089 = (state_35161[(27)]);
var inst_35147 = (state_35161[(2)]);
var inst_35148 = cljs.core.seq(inst_35089);
var state_35161__$1 = (function (){var statearr_35274 = state_35161;
(statearr_35274[(29)] = inst_35147);

return statearr_35274;
})();
if(inst_35148){
var statearr_35275_37547 = state_35161__$1;
(statearr_35275_37547[(1)] = (42));

} else {
var statearr_35280_37549 = state_35161__$1;
(statearr_35280_37549[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (16))){
var inst_35054 = (state_35161[(7)]);
var inst_35058 = cljs.core.chunked_seq_QMARK_(inst_35054);
var state_35161__$1 = state_35161;
if(inst_35058){
var statearr_35281_37550 = state_35161__$1;
(statearr_35281_37550[(1)] = (19));

} else {
var statearr_35282_37551 = state_35161__$1;
(statearr_35282_37551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (38))){
var inst_35140 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
var statearr_35283_37552 = state_35161__$1;
(statearr_35283_37552[(2)] = inst_35140);

(statearr_35283_37552[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (30))){
var state_35161__$1 = state_35161;
var statearr_35284_37553 = state_35161__$1;
(statearr_35284_37553[(2)] = null);

(statearr_35284_37553[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (10))){
var inst_35033 = (state_35161[(13)]);
var inst_35031 = (state_35161[(17)]);
var inst_35042 = cljs.core._nth(inst_35031,inst_35033);
var inst_35043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35042,(0),null);
var inst_35044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35042,(1),null);
var state_35161__$1 = (function (){var statearr_35287 = state_35161;
(statearr_35287[(24)] = inst_35043);

return statearr_35287;
})();
if(cljs.core.truth_(inst_35044)){
var statearr_35290_37558 = state_35161__$1;
(statearr_35290_37558[(1)] = (13));

} else {
var statearr_35291_37561 = state_35161__$1;
(statearr_35291_37561[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (18))){
var inst_35082 = (state_35161[(2)]);
var state_35161__$1 = state_35161;
var statearr_35292_37562 = state_35161__$1;
(statearr_35292_37562[(2)] = inst_35082);

(statearr_35292_37562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (42))){
var state_35161__$1 = state_35161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35161__$1,(45),dchan);
} else {
if((state_val_35162 === (37))){
var inst_35130 = (state_35161[(22)]);
var inst_35021 = (state_35161[(10)]);
var inst_35117 = (state_35161[(23)]);
var inst_35130__$1 = cljs.core.first(inst_35117);
var inst_35131 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35130__$1,inst_35021,done);
var state_35161__$1 = (function (){var statearr_35293 = state_35161;
(statearr_35293[(22)] = inst_35130__$1);

return statearr_35293;
})();
if(cljs.core.truth_(inst_35131)){
var statearr_35296_37565 = state_35161__$1;
(statearr_35296_37565[(1)] = (39));

} else {
var statearr_35298_37566 = state_35161__$1;
(statearr_35298_37566[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35162 === (8))){
var inst_35033 = (state_35161[(13)]);
var inst_35032 = (state_35161[(14)]);
var inst_35035 = (inst_35033 < inst_35032);
var inst_35036 = inst_35035;
var state_35161__$1 = state_35161;
if(cljs.core.truth_(inst_35036)){
var statearr_35299_37571 = state_35161__$1;
(statearr_35299_37571[(1)] = (10));

} else {
var statearr_35304_37574 = state_35161__$1;
(statearr_35304_37574[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33626__auto__ = null;
var cljs$core$async$mult_$_state_machine__33626__auto____0 = (function (){
var statearr_35307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35307[(0)] = cljs$core$async$mult_$_state_machine__33626__auto__);

(statearr_35307[(1)] = (1));

return statearr_35307;
});
var cljs$core$async$mult_$_state_machine__33626__auto____1 = (function (state_35161){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_35161);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e35308){var ex__33629__auto__ = e35308;
var statearr_35309_37579 = state_35161;
(statearr_35309_37579[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_35161[(4)]))){
var statearr_35310_37580 = state_35161;
(statearr_35310_37580[(1)] = cljs.core.first((state_35161[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37581 = state_35161;
state_35161 = G__37581;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33626__auto__ = function(state_35161){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33626__auto____1.call(this,state_35161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33626__auto____0;
cljs$core$async$mult_$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33626__auto____1;
return cljs$core$async$mult_$_state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_35313 = f__33809__auto__();
(statearr_35313[(6)] = c__33808__auto___37429);

return statearr_35313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35319 = arguments.length;
switch (G__35319) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37586 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37586(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37597 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37597(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37598 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37598(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37599 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37599(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37619 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37619(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___37622 = arguments.length;
var i__5767__auto___37623 = (0);
while(true){
if((i__5767__auto___37623 < len__5766__auto___37622)){
args__5772__auto__.push((arguments[i__5767__auto___37623]));

var G__37624 = (i__5767__auto___37623 + (1));
i__5767__auto___37623 = G__37624;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35353){
var map__35354 = p__35353;
var map__35354__$1 = cljs.core.__destructure_map(map__35354);
var opts = map__35354__$1;
var statearr_35364_37629 = state;
(statearr_35364_37629[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35365_37630 = state;
(statearr_35365_37630[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_35370_37632 = state;
(statearr_35370_37632[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35349){
var G__35350 = cljs.core.first(seq35349);
var seq35349__$1 = cljs.core.next(seq35349);
var G__35351 = cljs.core.first(seq35349__$1);
var seq35349__$2 = cljs.core.next(seq35349__$1);
var G__35352 = cljs.core.first(seq35349__$2);
var seq35349__$3 = cljs.core.next(seq35349__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35350,G__35351,G__35352,seq35349__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35377 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35378){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35378 = meta35378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35379,meta35378__$1){
var self__ = this;
var _35379__$1 = this;
return (new cljs.core.async.t_cljs$core$async35377(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35378__$1));
}));

(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35379){
var self__ = this;
var _35379__$1 = this;
return self__.meta35378;
}));

(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35377.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35378","meta35378",955517225,null)], null);
}));

(cljs.core.async.t_cljs$core$async35377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35377");

(cljs.core.async.t_cljs$core$async35377.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async35377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35377.
 */
cljs.core.async.__GT_t_cljs$core$async35377 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35377(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35378){
return (new cljs.core.async.t_cljs$core$async35377(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35378));
});

}

return (new cljs.core.async.t_cljs$core$async35377(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33808__auto___37663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_35465){
var state_val_35466 = (state_35465[(1)]);
if((state_val_35466 === (7))){
var inst_35420 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
if(cljs.core.truth_(inst_35420)){
var statearr_35468_37666 = state_35465__$1;
(statearr_35468_37666[(1)] = (8));

} else {
var statearr_35469_37667 = state_35465__$1;
(statearr_35469_37667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (20))){
var inst_35412 = (state_35465[(7)]);
var state_35465__$1 = state_35465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35465__$1,(23),out,inst_35412);
} else {
if((state_val_35466 === (1))){
var inst_35386 = calc_state();
var inst_35387 = cljs.core.__destructure_map(inst_35386);
var inst_35388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35387,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35387,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35387,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35391 = inst_35386;
var state_35465__$1 = (function (){var statearr_35472 = state_35465;
(statearr_35472[(8)] = inst_35391);

(statearr_35472[(9)] = inst_35389);

(statearr_35472[(10)] = inst_35388);

(statearr_35472[(11)] = inst_35390);

return statearr_35472;
})();
var statearr_35474_37673 = state_35465__$1;
(statearr_35474_37673[(2)] = null);

(statearr_35474_37673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (24))){
var inst_35403 = (state_35465[(12)]);
var inst_35391 = inst_35403;
var state_35465__$1 = (function (){var statearr_35479 = state_35465;
(statearr_35479[(8)] = inst_35391);

return statearr_35479;
})();
var statearr_35481_37676 = state_35465__$1;
(statearr_35481_37676[(2)] = null);

(statearr_35481_37676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (4))){
var inst_35412 = (state_35465[(7)]);
var inst_35414 = (state_35465[(13)]);
var inst_35411 = (state_35465[(2)]);
var inst_35412__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35411,(0),null);
var inst_35413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35411,(1),null);
var inst_35414__$1 = (inst_35412__$1 == null);
var state_35465__$1 = (function (){var statearr_35486 = state_35465;
(statearr_35486[(14)] = inst_35413);

(statearr_35486[(7)] = inst_35412__$1);

(statearr_35486[(13)] = inst_35414__$1);

return statearr_35486;
})();
if(cljs.core.truth_(inst_35414__$1)){
var statearr_35488_37681 = state_35465__$1;
(statearr_35488_37681[(1)] = (5));

} else {
var statearr_35489_37682 = state_35465__$1;
(statearr_35489_37682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (15))){
var inst_35439 = (state_35465[(15)]);
var inst_35404 = (state_35465[(16)]);
var inst_35439__$1 = cljs.core.empty_QMARK_(inst_35404);
var state_35465__$1 = (function (){var statearr_35490 = state_35465;
(statearr_35490[(15)] = inst_35439__$1);

return statearr_35490;
})();
if(inst_35439__$1){
var statearr_35491_37709 = state_35465__$1;
(statearr_35491_37709[(1)] = (17));

} else {
var statearr_35492_37711 = state_35465__$1;
(statearr_35492_37711[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (21))){
var inst_35403 = (state_35465[(12)]);
var inst_35391 = inst_35403;
var state_35465__$1 = (function (){var statearr_35494 = state_35465;
(statearr_35494[(8)] = inst_35391);

return statearr_35494;
})();
var statearr_35495_37713 = state_35465__$1;
(statearr_35495_37713[(2)] = null);

(statearr_35495_37713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (13))){
var inst_35432 = (state_35465[(2)]);
var inst_35433 = calc_state();
var inst_35391 = inst_35433;
var state_35465__$1 = (function (){var statearr_35502 = state_35465;
(statearr_35502[(8)] = inst_35391);

(statearr_35502[(17)] = inst_35432);

return statearr_35502;
})();
var statearr_35504_37720 = state_35465__$1;
(statearr_35504_37720[(2)] = null);

(statearr_35504_37720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (22))){
var inst_35459 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
var statearr_35505_37722 = state_35465__$1;
(statearr_35505_37722[(2)] = inst_35459);

(statearr_35505_37722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (6))){
var inst_35413 = (state_35465[(14)]);
var inst_35418 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35413,change);
var state_35465__$1 = state_35465;
var statearr_35506_37729 = state_35465__$1;
(statearr_35506_37729[(2)] = inst_35418);

(statearr_35506_37729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (25))){
var state_35465__$1 = state_35465;
var statearr_35507_37732 = state_35465__$1;
(statearr_35507_37732[(2)] = null);

(statearr_35507_37732[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (17))){
var inst_35413 = (state_35465[(14)]);
var inst_35405 = (state_35465[(18)]);
var inst_35441 = (inst_35405.cljs$core$IFn$_invoke$arity$1 ? inst_35405.cljs$core$IFn$_invoke$arity$1(inst_35413) : inst_35405.call(null,inst_35413));
var inst_35442 = cljs.core.not(inst_35441);
var state_35465__$1 = state_35465;
var statearr_35509_37736 = state_35465__$1;
(statearr_35509_37736[(2)] = inst_35442);

(statearr_35509_37736[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (3))){
var inst_35463 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35465__$1,inst_35463);
} else {
if((state_val_35466 === (12))){
var state_35465__$1 = state_35465;
var statearr_35515_37738 = state_35465__$1;
(statearr_35515_37738[(2)] = null);

(statearr_35515_37738[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (2))){
var inst_35403 = (state_35465[(12)]);
var inst_35391 = (state_35465[(8)]);
var inst_35403__$1 = cljs.core.__destructure_map(inst_35391);
var inst_35404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35403__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35403__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35403__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35465__$1 = (function (){var statearr_35521 = state_35465;
(statearr_35521[(12)] = inst_35403__$1);

(statearr_35521[(16)] = inst_35404);

(statearr_35521[(18)] = inst_35405);

return statearr_35521;
})();
return cljs.core.async.ioc_alts_BANG_(state_35465__$1,(4),inst_35406);
} else {
if((state_val_35466 === (23))){
var inst_35450 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
if(cljs.core.truth_(inst_35450)){
var statearr_35522_37749 = state_35465__$1;
(statearr_35522_37749[(1)] = (24));

} else {
var statearr_35523_37752 = state_35465__$1;
(statearr_35523_37752[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (19))){
var inst_35445 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
var statearr_35524_37757 = state_35465__$1;
(statearr_35524_37757[(2)] = inst_35445);

(statearr_35524_37757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (11))){
var inst_35413 = (state_35465[(14)]);
var inst_35429 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35413);
var state_35465__$1 = state_35465;
var statearr_35525_37762 = state_35465__$1;
(statearr_35525_37762[(2)] = inst_35429);

(statearr_35525_37762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (9))){
var inst_35436 = (state_35465[(19)]);
var inst_35413 = (state_35465[(14)]);
var inst_35404 = (state_35465[(16)]);
var inst_35436__$1 = (inst_35404.cljs$core$IFn$_invoke$arity$1 ? inst_35404.cljs$core$IFn$_invoke$arity$1(inst_35413) : inst_35404.call(null,inst_35413));
var state_35465__$1 = (function (){var statearr_35526 = state_35465;
(statearr_35526[(19)] = inst_35436__$1);

return statearr_35526;
})();
if(cljs.core.truth_(inst_35436__$1)){
var statearr_35527_37772 = state_35465__$1;
(statearr_35527_37772[(1)] = (14));

} else {
var statearr_35528_37777 = state_35465__$1;
(statearr_35528_37777[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (5))){
var inst_35414 = (state_35465[(13)]);
var state_35465__$1 = state_35465;
var statearr_35529_37778 = state_35465__$1;
(statearr_35529_37778[(2)] = inst_35414);

(statearr_35529_37778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (14))){
var inst_35436 = (state_35465[(19)]);
var state_35465__$1 = state_35465;
var statearr_35534_37780 = state_35465__$1;
(statearr_35534_37780[(2)] = inst_35436);

(statearr_35534_37780[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (26))){
var inst_35455 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
var statearr_35535_37786 = state_35465__$1;
(statearr_35535_37786[(2)] = inst_35455);

(statearr_35535_37786[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (16))){
var inst_35447 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
if(cljs.core.truth_(inst_35447)){
var statearr_35536_37792 = state_35465__$1;
(statearr_35536_37792[(1)] = (20));

} else {
var statearr_35537_37793 = state_35465__$1;
(statearr_35537_37793[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (10))){
var inst_35461 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
var statearr_35538_37802 = state_35465__$1;
(statearr_35538_37802[(2)] = inst_35461);

(statearr_35538_37802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (18))){
var inst_35439 = (state_35465[(15)]);
var state_35465__$1 = state_35465;
var statearr_35539_37817 = state_35465__$1;
(statearr_35539_37817[(2)] = inst_35439);

(statearr_35539_37817[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (8))){
var inst_35412 = (state_35465[(7)]);
var inst_35423 = (inst_35412 == null);
var state_35465__$1 = state_35465;
if(cljs.core.truth_(inst_35423)){
var statearr_35541_37827 = state_35465__$1;
(statearr_35541_37827[(1)] = (11));

} else {
var statearr_35542_37829 = state_35465__$1;
(statearr_35542_37829[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33626__auto__ = null;
var cljs$core$async$mix_$_state_machine__33626__auto____0 = (function (){
var statearr_35548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35548[(0)] = cljs$core$async$mix_$_state_machine__33626__auto__);

(statearr_35548[(1)] = (1));

return statearr_35548;
});
var cljs$core$async$mix_$_state_machine__33626__auto____1 = (function (state_35465){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_35465);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e35549){var ex__33629__auto__ = e35549;
var statearr_35550_37831 = state_35465;
(statearr_35550_37831[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_35465[(4)]))){
var statearr_35553_37833 = state_35465;
(statearr_35553_37833[(1)] = cljs.core.first((state_35465[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37835 = state_35465;
state_35465 = G__37835;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33626__auto__ = function(state_35465){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33626__auto____1.call(this,state_35465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33626__auto____0;
cljs$core$async$mix_$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33626__auto____1;
return cljs$core$async$mix_$_state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_35559 = f__33809__auto__();
(statearr_35559[(6)] = c__33808__auto___37663);

return statearr_35559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37839 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37839(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37845 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37845(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37859 = (function() {
var G__37860 = null;
var G__37860__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37860__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37860 = function(p,v){
switch(arguments.length){
case 1:
return G__37860__1.call(this,p);
case 2:
return G__37860__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37860.cljs$core$IFn$_invoke$arity$1 = G__37860__1;
G__37860.cljs$core$IFn$_invoke$arity$2 = G__37860__2;
return G__37860;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35575 = arguments.length;
switch (G__35575) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37859(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37859(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35590 = arguments.length;
switch (G__35590) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35585_SHARP_){
if(cljs.core.truth_((p1__35585_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35585_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35585_SHARP_.call(null,topic)))){
return p1__35585_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35585_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35593 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35594){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35594 = meta35594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35595,meta35594__$1){
var self__ = this;
var _35595__$1 = this;
return (new cljs.core.async.t_cljs$core$async35593(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35594__$1));
}));

(cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35595){
var self__ = this;
var _35595__$1 = this;
return self__.meta35594;
}));

(cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35594","meta35594",705482815,null)], null);
}));

(cljs.core.async.t_cljs$core$async35593.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35593");

(cljs.core.async.t_cljs$core$async35593.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async35593");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35593.
 */
cljs.core.async.__GT_t_cljs$core$async35593 = (function cljs$core$async$__GT_t_cljs$core$async35593(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35594){
return (new cljs.core.async.t_cljs$core$async35593(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35594));
});

}

return (new cljs.core.async.t_cljs$core$async35593(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33808__auto___37919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_35678){
var state_val_35679 = (state_35678[(1)]);
if((state_val_35679 === (7))){
var inst_35674 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35684_37920 = state_35678__$1;
(statearr_35684_37920[(2)] = inst_35674);

(statearr_35684_37920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (20))){
var state_35678__$1 = state_35678;
var statearr_35685_37922 = state_35678__$1;
(statearr_35685_37922[(2)] = null);

(statearr_35685_37922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (1))){
var state_35678__$1 = state_35678;
var statearr_35686_37925 = state_35678__$1;
(statearr_35686_37925[(2)] = null);

(statearr_35686_37925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (24))){
var inst_35657 = (state_35678[(7)]);
var inst_35666 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35657);
var state_35678__$1 = state_35678;
var statearr_35690_37928 = state_35678__$1;
(statearr_35690_37928[(2)] = inst_35666);

(statearr_35690_37928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (4))){
var inst_35605 = (state_35678[(8)]);
var inst_35605__$1 = (state_35678[(2)]);
var inst_35608 = (inst_35605__$1 == null);
var state_35678__$1 = (function (){var statearr_35698 = state_35678;
(statearr_35698[(8)] = inst_35605__$1);

return statearr_35698;
})();
if(cljs.core.truth_(inst_35608)){
var statearr_35699_37930 = state_35678__$1;
(statearr_35699_37930[(1)] = (5));

} else {
var statearr_35700_37931 = state_35678__$1;
(statearr_35700_37931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (15))){
var inst_35651 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35709_37933 = state_35678__$1;
(statearr_35709_37933[(2)] = inst_35651);

(statearr_35709_37933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (21))){
var inst_35671 = (state_35678[(2)]);
var state_35678__$1 = (function (){var statearr_35714 = state_35678;
(statearr_35714[(9)] = inst_35671);

return statearr_35714;
})();
var statearr_35715_37937 = state_35678__$1;
(statearr_35715_37937[(2)] = null);

(statearr_35715_37937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (13))){
var inst_35633 = (state_35678[(10)]);
var inst_35635 = cljs.core.chunked_seq_QMARK_(inst_35633);
var state_35678__$1 = state_35678;
if(inst_35635){
var statearr_35718_37944 = state_35678__$1;
(statearr_35718_37944[(1)] = (16));

} else {
var statearr_35719_37945 = state_35678__$1;
(statearr_35719_37945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (22))){
var inst_35663 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
if(cljs.core.truth_(inst_35663)){
var statearr_35720_37946 = state_35678__$1;
(statearr_35720_37946[(1)] = (23));

} else {
var statearr_35721_37951 = state_35678__$1;
(statearr_35721_37951[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (6))){
var inst_35659 = (state_35678[(11)]);
var inst_35605 = (state_35678[(8)]);
var inst_35657 = (state_35678[(7)]);
var inst_35657__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35605) : topic_fn.call(null,inst_35605));
var inst_35658 = cljs.core.deref(mults);
var inst_35659__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35658,inst_35657__$1);
var state_35678__$1 = (function (){var statearr_35725 = state_35678;
(statearr_35725[(11)] = inst_35659__$1);

(statearr_35725[(7)] = inst_35657__$1);

return statearr_35725;
})();
if(cljs.core.truth_(inst_35659__$1)){
var statearr_35727_37952 = state_35678__$1;
(statearr_35727_37952[(1)] = (19));

} else {
var statearr_35731_37957 = state_35678__$1;
(statearr_35731_37957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (25))){
var inst_35668 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35732_37961 = state_35678__$1;
(statearr_35732_37961[(2)] = inst_35668);

(statearr_35732_37961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (17))){
var inst_35633 = (state_35678[(10)]);
var inst_35642 = cljs.core.first(inst_35633);
var inst_35643 = cljs.core.async.muxch_STAR_(inst_35642);
var inst_35644 = cljs.core.async.close_BANG_(inst_35643);
var inst_35645 = cljs.core.next(inst_35633);
var inst_35617 = inst_35645;
var inst_35618 = null;
var inst_35619 = (0);
var inst_35620 = (0);
var state_35678__$1 = (function (){var statearr_35741 = state_35678;
(statearr_35741[(12)] = inst_35617);

(statearr_35741[(13)] = inst_35644);

(statearr_35741[(14)] = inst_35618);

(statearr_35741[(15)] = inst_35620);

(statearr_35741[(16)] = inst_35619);

return statearr_35741;
})();
var statearr_35742_37976 = state_35678__$1;
(statearr_35742_37976[(2)] = null);

(statearr_35742_37976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (3))){
var inst_35676 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35678__$1,inst_35676);
} else {
if((state_val_35679 === (12))){
var inst_35653 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35745_37977 = state_35678__$1;
(statearr_35745_37977[(2)] = inst_35653);

(statearr_35745_37977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (2))){
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35678__$1,(4),ch);
} else {
if((state_val_35679 === (23))){
var state_35678__$1 = state_35678;
var statearr_35747_37981 = state_35678__$1;
(statearr_35747_37981[(2)] = null);

(statearr_35747_37981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (19))){
var inst_35659 = (state_35678[(11)]);
var inst_35605 = (state_35678[(8)]);
var inst_35661 = cljs.core.async.muxch_STAR_(inst_35659);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35678__$1,(22),inst_35661,inst_35605);
} else {
if((state_val_35679 === (11))){
var inst_35617 = (state_35678[(12)]);
var inst_35633 = (state_35678[(10)]);
var inst_35633__$1 = cljs.core.seq(inst_35617);
var state_35678__$1 = (function (){var statearr_35748 = state_35678;
(statearr_35748[(10)] = inst_35633__$1);

return statearr_35748;
})();
if(inst_35633__$1){
var statearr_35753_37999 = state_35678__$1;
(statearr_35753_37999[(1)] = (13));

} else {
var statearr_35754_38002 = state_35678__$1;
(statearr_35754_38002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (9))){
var inst_35655 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35756_38010 = state_35678__$1;
(statearr_35756_38010[(2)] = inst_35655);

(statearr_35756_38010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (5))){
var inst_35614 = cljs.core.deref(mults);
var inst_35615 = cljs.core.vals(inst_35614);
var inst_35616 = cljs.core.seq(inst_35615);
var inst_35617 = inst_35616;
var inst_35618 = null;
var inst_35619 = (0);
var inst_35620 = (0);
var state_35678__$1 = (function (){var statearr_35764 = state_35678;
(statearr_35764[(12)] = inst_35617);

(statearr_35764[(14)] = inst_35618);

(statearr_35764[(15)] = inst_35620);

(statearr_35764[(16)] = inst_35619);

return statearr_35764;
})();
var statearr_35765_38019 = state_35678__$1;
(statearr_35765_38019[(2)] = null);

(statearr_35765_38019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (14))){
var state_35678__$1 = state_35678;
var statearr_35769_38020 = state_35678__$1;
(statearr_35769_38020[(2)] = null);

(statearr_35769_38020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (16))){
var inst_35633 = (state_35678[(10)]);
var inst_35637 = cljs.core.chunk_first(inst_35633);
var inst_35638 = cljs.core.chunk_rest(inst_35633);
var inst_35639 = cljs.core.count(inst_35637);
var inst_35617 = inst_35638;
var inst_35618 = inst_35637;
var inst_35619 = inst_35639;
var inst_35620 = (0);
var state_35678__$1 = (function (){var statearr_35770 = state_35678;
(statearr_35770[(12)] = inst_35617);

(statearr_35770[(14)] = inst_35618);

(statearr_35770[(15)] = inst_35620);

(statearr_35770[(16)] = inst_35619);

return statearr_35770;
})();
var statearr_35771_38024 = state_35678__$1;
(statearr_35771_38024[(2)] = null);

(statearr_35771_38024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (10))){
var inst_35617 = (state_35678[(12)]);
var inst_35618 = (state_35678[(14)]);
var inst_35620 = (state_35678[(15)]);
var inst_35619 = (state_35678[(16)]);
var inst_35626 = cljs.core._nth(inst_35618,inst_35620);
var inst_35627 = cljs.core.async.muxch_STAR_(inst_35626);
var inst_35628 = cljs.core.async.close_BANG_(inst_35627);
var inst_35630 = (inst_35620 + (1));
var tmp35766 = inst_35617;
var tmp35767 = inst_35618;
var tmp35768 = inst_35619;
var inst_35617__$1 = tmp35766;
var inst_35618__$1 = tmp35767;
var inst_35619__$1 = tmp35768;
var inst_35620__$1 = inst_35630;
var state_35678__$1 = (function (){var statearr_35774 = state_35678;
(statearr_35774[(12)] = inst_35617__$1);

(statearr_35774[(14)] = inst_35618__$1);

(statearr_35774[(17)] = inst_35628);

(statearr_35774[(15)] = inst_35620__$1);

(statearr_35774[(16)] = inst_35619__$1);

return statearr_35774;
})();
var statearr_35778_38033 = state_35678__$1;
(statearr_35778_38033[(2)] = null);

(statearr_35778_38033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (18))){
var inst_35648 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35779_38034 = state_35678__$1;
(statearr_35779_38034[(2)] = inst_35648);

(statearr_35779_38034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (8))){
var inst_35620 = (state_35678[(15)]);
var inst_35619 = (state_35678[(16)]);
var inst_35622 = (inst_35620 < inst_35619);
var inst_35623 = inst_35622;
var state_35678__$1 = state_35678;
if(cljs.core.truth_(inst_35623)){
var statearr_35782_38038 = state_35678__$1;
(statearr_35782_38038[(1)] = (10));

} else {
var statearr_35783_38039 = state_35678__$1;
(statearr_35783_38039[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_35786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35786[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_35786[(1)] = (1));

return statearr_35786;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_35678){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_35678);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e35789){var ex__33629__auto__ = e35789;
var statearr_35791_38045 = state_35678;
(statearr_35791_38045[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_35678[(4)]))){
var statearr_35793_38046 = state_35678;
(statearr_35793_38046[(1)] = cljs.core.first((state_35678[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38048 = state_35678;
state_35678 = G__38048;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_35678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_35678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_35798 = f__33809__auto__();
(statearr_35798[(6)] = c__33808__auto___37919);

return statearr_35798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35800 = arguments.length;
switch (G__35800) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35806 = arguments.length;
switch (G__35806) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35810 = arguments.length;
switch (G__35810) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33808__auto___38088 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_35869){
var state_val_35870 = (state_35869[(1)]);
if((state_val_35870 === (7))){
var state_35869__$1 = state_35869;
var statearr_35874_38090 = state_35869__$1;
(statearr_35874_38090[(2)] = null);

(statearr_35874_38090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (1))){
var state_35869__$1 = state_35869;
var statearr_35875_38091 = state_35869__$1;
(statearr_35875_38091[(2)] = null);

(statearr_35875_38091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (4))){
var inst_35817 = (state_35869[(7)]);
var inst_35818 = (state_35869[(8)]);
var inst_35820 = (inst_35818 < inst_35817);
var state_35869__$1 = state_35869;
if(cljs.core.truth_(inst_35820)){
var statearr_35876_38093 = state_35869__$1;
(statearr_35876_38093[(1)] = (6));

} else {
var statearr_35877_38094 = state_35869__$1;
(statearr_35877_38094[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (15))){
var inst_35850 = (state_35869[(9)]);
var inst_35857 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35850);
var state_35869__$1 = state_35869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35869__$1,(17),out,inst_35857);
} else {
if((state_val_35870 === (13))){
var inst_35850 = (state_35869[(9)]);
var inst_35850__$1 = (state_35869[(2)]);
var inst_35851 = cljs.core.some(cljs.core.nil_QMARK_,inst_35850__$1);
var state_35869__$1 = (function (){var statearr_35881 = state_35869;
(statearr_35881[(9)] = inst_35850__$1);

return statearr_35881;
})();
if(cljs.core.truth_(inst_35851)){
var statearr_35883_38102 = state_35869__$1;
(statearr_35883_38102[(1)] = (14));

} else {
var statearr_35884_38103 = state_35869__$1;
(statearr_35884_38103[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (6))){
var state_35869__$1 = state_35869;
var statearr_35885_38109 = state_35869__$1;
(statearr_35885_38109[(2)] = null);

(statearr_35885_38109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (17))){
var inst_35859 = (state_35869[(2)]);
var state_35869__$1 = (function (){var statearr_35900 = state_35869;
(statearr_35900[(10)] = inst_35859);

return statearr_35900;
})();
var statearr_35901_38152 = state_35869__$1;
(statearr_35901_38152[(2)] = null);

(statearr_35901_38152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (3))){
var inst_35864 = (state_35869[(2)]);
var state_35869__$1 = state_35869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35869__$1,inst_35864);
} else {
if((state_val_35870 === (12))){
var _ = (function (){var statearr_35908 = state_35869;
(statearr_35908[(4)] = cljs.core.rest((state_35869[(4)])));

return statearr_35908;
})();
var state_35869__$1 = state_35869;
var ex35897 = (state_35869__$1[(2)]);
var statearr_35914_38158 = state_35869__$1;
(statearr_35914_38158[(5)] = ex35897);


if((ex35897 instanceof Object)){
var statearr_35919_38159 = state_35869__$1;
(statearr_35919_38159[(1)] = (11));

(statearr_35919_38159[(5)] = null);

} else {
throw ex35897;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (2))){
var inst_35816 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35817 = cnt;
var inst_35818 = (0);
var state_35869__$1 = (function (){var statearr_35925 = state_35869;
(statearr_35925[(7)] = inst_35817);

(statearr_35925[(8)] = inst_35818);

(statearr_35925[(11)] = inst_35816);

return statearr_35925;
})();
var statearr_35927_38161 = state_35869__$1;
(statearr_35927_38161[(2)] = null);

(statearr_35927_38161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (11))){
var inst_35829 = (state_35869[(2)]);
var inst_35830 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35869__$1 = (function (){var statearr_35928 = state_35869;
(statearr_35928[(12)] = inst_35829);

return statearr_35928;
})();
var statearr_35929_38164 = state_35869__$1;
(statearr_35929_38164[(2)] = inst_35830);

(statearr_35929_38164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (9))){
var inst_35818 = (state_35869[(8)]);
var _ = (function (){var statearr_35930 = state_35869;
(statearr_35930[(4)] = cljs.core.cons((12),(state_35869[(4)])));

return statearr_35930;
})();
var inst_35836 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35818) : chs__$1.call(null,inst_35818));
var inst_35837 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35818) : done.call(null,inst_35818));
var inst_35838 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35836,inst_35837);
var ___$1 = (function (){var statearr_35935 = state_35869;
(statearr_35935[(4)] = cljs.core.rest((state_35869[(4)])));

return statearr_35935;
})();
var state_35869__$1 = state_35869;
var statearr_35938_38179 = state_35869__$1;
(statearr_35938_38179[(2)] = inst_35838);

(statearr_35938_38179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (5))){
var inst_35848 = (state_35869[(2)]);
var state_35869__$1 = (function (){var statearr_35942 = state_35869;
(statearr_35942[(13)] = inst_35848);

return statearr_35942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35869__$1,(13),dchan);
} else {
if((state_val_35870 === (14))){
var inst_35855 = cljs.core.async.close_BANG_(out);
var state_35869__$1 = state_35869;
var statearr_35943_38182 = state_35869__$1;
(statearr_35943_38182[(2)] = inst_35855);

(statearr_35943_38182[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (16))){
var inst_35862 = (state_35869[(2)]);
var state_35869__$1 = state_35869;
var statearr_35952_38186 = state_35869__$1;
(statearr_35952_38186[(2)] = inst_35862);

(statearr_35952_38186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (10))){
var inst_35818 = (state_35869[(8)]);
var inst_35841 = (state_35869[(2)]);
var inst_35842 = (inst_35818 + (1));
var inst_35818__$1 = inst_35842;
var state_35869__$1 = (function (){var statearr_35955 = state_35869;
(statearr_35955[(8)] = inst_35818__$1);

(statearr_35955[(14)] = inst_35841);

return statearr_35955;
})();
var statearr_35958_38191 = state_35869__$1;
(statearr_35958_38191[(2)] = null);

(statearr_35958_38191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (8))){
var inst_35846 = (state_35869[(2)]);
var state_35869__$1 = state_35869;
var statearr_35959_38192 = state_35869__$1;
(statearr_35959_38192[(2)] = inst_35846);

(statearr_35959_38192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_35972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35972[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_35972[(1)] = (1));

return statearr_35972;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_35869){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_35869);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e35974){var ex__33629__auto__ = e35974;
var statearr_35975_38196 = state_35869;
(statearr_35975_38196[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_35869[(4)]))){
var statearr_35977_38198 = state_35869;
(statearr_35977_38198[(1)] = cljs.core.first((state_35869[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38200 = state_35869;
state_35869 = G__38200;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_35869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_35869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_35979 = f__33809__auto__();
(statearr_35979[(6)] = c__33808__auto___38088);

return statearr_35979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35983 = arguments.length;
switch (G__35983) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33808__auto___38208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_36032){
var state_val_36033 = (state_36032[(1)]);
if((state_val_36033 === (7))){
var inst_36012 = (state_36032[(7)]);
var inst_36011 = (state_36032[(8)]);
var inst_36011__$1 = (state_36032[(2)]);
var inst_36012__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36011__$1,(0),null);
var inst_36013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36011__$1,(1),null);
var inst_36014 = (inst_36012__$1 == null);
var state_36032__$1 = (function (){var statearr_36038 = state_36032;
(statearr_36038[(7)] = inst_36012__$1);

(statearr_36038[(9)] = inst_36013);

(statearr_36038[(8)] = inst_36011__$1);

return statearr_36038;
})();
if(cljs.core.truth_(inst_36014)){
var statearr_36039_38213 = state_36032__$1;
(statearr_36039_38213[(1)] = (8));

} else {
var statearr_36040_38214 = state_36032__$1;
(statearr_36040_38214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (1))){
var inst_36000 = cljs.core.vec(chs);
var inst_36001 = inst_36000;
var state_36032__$1 = (function (){var statearr_36041 = state_36032;
(statearr_36041[(10)] = inst_36001);

return statearr_36041;
})();
var statearr_36043_38221 = state_36032__$1;
(statearr_36043_38221[(2)] = null);

(statearr_36043_38221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (4))){
var inst_36001 = (state_36032[(10)]);
var state_36032__$1 = state_36032;
return cljs.core.async.ioc_alts_BANG_(state_36032__$1,(7),inst_36001);
} else {
if((state_val_36033 === (6))){
var inst_36028 = (state_36032[(2)]);
var state_36032__$1 = state_36032;
var statearr_36045_38223 = state_36032__$1;
(statearr_36045_38223[(2)] = inst_36028);

(statearr_36045_38223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (3))){
var inst_36030 = (state_36032[(2)]);
var state_36032__$1 = state_36032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36032__$1,inst_36030);
} else {
if((state_val_36033 === (2))){
var inst_36001 = (state_36032[(10)]);
var inst_36004 = cljs.core.count(inst_36001);
var inst_36005 = (inst_36004 > (0));
var state_36032__$1 = state_36032;
if(cljs.core.truth_(inst_36005)){
var statearr_36047_38231 = state_36032__$1;
(statearr_36047_38231[(1)] = (4));

} else {
var statearr_36048_38233 = state_36032__$1;
(statearr_36048_38233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (11))){
var inst_36001 = (state_36032[(10)]);
var inst_36021 = (state_36032[(2)]);
var tmp36046 = inst_36001;
var inst_36001__$1 = tmp36046;
var state_36032__$1 = (function (){var statearr_36049 = state_36032;
(statearr_36049[(10)] = inst_36001__$1);

(statearr_36049[(11)] = inst_36021);

return statearr_36049;
})();
var statearr_36050_38240 = state_36032__$1;
(statearr_36050_38240[(2)] = null);

(statearr_36050_38240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (9))){
var inst_36012 = (state_36032[(7)]);
var state_36032__$1 = state_36032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36032__$1,(11),out,inst_36012);
} else {
if((state_val_36033 === (5))){
var inst_36026 = cljs.core.async.close_BANG_(out);
var state_36032__$1 = state_36032;
var statearr_36051_38242 = state_36032__$1;
(statearr_36051_38242[(2)] = inst_36026);

(statearr_36051_38242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (10))){
var inst_36024 = (state_36032[(2)]);
var state_36032__$1 = state_36032;
var statearr_36052_38245 = state_36032__$1;
(statearr_36052_38245[(2)] = inst_36024);

(statearr_36052_38245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36033 === (8))){
var inst_36012 = (state_36032[(7)]);
var inst_36013 = (state_36032[(9)]);
var inst_36001 = (state_36032[(10)]);
var inst_36011 = (state_36032[(8)]);
var inst_36016 = (function (){var cs = inst_36001;
var vec__36007 = inst_36011;
var v = inst_36012;
var c = inst_36013;
return (function (p1__35980_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35980_SHARP_);
});
})();
var inst_36017 = cljs.core.filterv(inst_36016,inst_36001);
var inst_36001__$1 = inst_36017;
var state_36032__$1 = (function (){var statearr_36055 = state_36032;
(statearr_36055[(10)] = inst_36001__$1);

return statearr_36055;
})();
var statearr_36057_38253 = state_36032__$1;
(statearr_36057_38253[(2)] = null);

(statearr_36057_38253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_36058 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36058[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_36058[(1)] = (1));

return statearr_36058;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_36032){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_36032);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e36059){var ex__33629__auto__ = e36059;
var statearr_36061_38256 = state_36032;
(statearr_36061_38256[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_36032[(4)]))){
var statearr_36063_38260 = state_36032;
(statearr_36063_38260[(1)] = cljs.core.first((state_36032[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38262 = state_36032;
state_36032 = G__38262;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_36032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_36032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_36065 = f__33809__auto__();
(statearr_36065[(6)] = c__33808__auto___38208);

return statearr_36065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36069 = arguments.length;
switch (G__36069) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33808__auto___38271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_36105){
var state_val_36106 = (state_36105[(1)]);
if((state_val_36106 === (7))){
var inst_36083 = (state_36105[(7)]);
var inst_36083__$1 = (state_36105[(2)]);
var inst_36086 = (inst_36083__$1 == null);
var inst_36087 = cljs.core.not(inst_36086);
var state_36105__$1 = (function (){var statearr_36115 = state_36105;
(statearr_36115[(7)] = inst_36083__$1);

return statearr_36115;
})();
if(inst_36087){
var statearr_36116_38275 = state_36105__$1;
(statearr_36116_38275[(1)] = (8));

} else {
var statearr_36117_38277 = state_36105__$1;
(statearr_36117_38277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (1))){
var inst_36078 = (0);
var state_36105__$1 = (function (){var statearr_36118 = state_36105;
(statearr_36118[(8)] = inst_36078);

return statearr_36118;
})();
var statearr_36119_38278 = state_36105__$1;
(statearr_36119_38278[(2)] = null);

(statearr_36119_38278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (4))){
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36105__$1,(7),ch);
} else {
if((state_val_36106 === (6))){
var inst_36100 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36122_38285 = state_36105__$1;
(statearr_36122_38285[(2)] = inst_36100);

(statearr_36122_38285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (3))){
var inst_36102 = (state_36105[(2)]);
var inst_36103 = cljs.core.async.close_BANG_(out);
var state_36105__$1 = (function (){var statearr_36124 = state_36105;
(statearr_36124[(9)] = inst_36102);

return statearr_36124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36105__$1,inst_36103);
} else {
if((state_val_36106 === (2))){
var inst_36078 = (state_36105[(8)]);
var inst_36080 = (inst_36078 < n);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36080)){
var statearr_36125_38293 = state_36105__$1;
(statearr_36125_38293[(1)] = (4));

} else {
var statearr_36128_38297 = state_36105__$1;
(statearr_36128_38297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (11))){
var inst_36078 = (state_36105[(8)]);
var inst_36092 = (state_36105[(2)]);
var inst_36093 = (inst_36078 + (1));
var inst_36078__$1 = inst_36093;
var state_36105__$1 = (function (){var statearr_36129 = state_36105;
(statearr_36129[(10)] = inst_36092);

(statearr_36129[(8)] = inst_36078__$1);

return statearr_36129;
})();
var statearr_36130_38299 = state_36105__$1;
(statearr_36130_38299[(2)] = null);

(statearr_36130_38299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (9))){
var state_36105__$1 = state_36105;
var statearr_36132_38300 = state_36105__$1;
(statearr_36132_38300[(2)] = null);

(statearr_36132_38300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (5))){
var state_36105__$1 = state_36105;
var statearr_36133_38302 = state_36105__$1;
(statearr_36133_38302[(2)] = null);

(statearr_36133_38302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (10))){
var inst_36097 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36135_38304 = state_36105__$1;
(statearr_36135_38304[(2)] = inst_36097);

(statearr_36135_38304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (8))){
var inst_36083 = (state_36105[(7)]);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36105__$1,(11),out,inst_36083);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_36148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36148[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_36148[(1)] = (1));

return statearr_36148;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_36105){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_36105);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e36155){var ex__33629__auto__ = e36155;
var statearr_36156_38317 = state_36105;
(statearr_36156_38317[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_36105[(4)]))){
var statearr_36157_38322 = state_36105;
(statearr_36157_38322[(1)] = cljs.core.first((state_36105[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38329 = state_36105;
state_36105 = G__38329;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_36105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_36105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_36159 = f__33809__auto__();
(statearr_36159[(6)] = c__33808__auto___38271);

return statearr_36159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36167 = (function (f,ch,meta36168){
this.f = f;
this.ch = ch;
this.meta36168 = meta36168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36169,meta36168__$1){
var self__ = this;
var _36169__$1 = this;
return (new cljs.core.async.t_cljs$core$async36167(self__.f,self__.ch,meta36168__$1));
}));

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36169){
var self__ = this;
var _36169__$1 = this;
return self__.meta36168;
}));

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36181 = (function (f,ch,meta36168,_,fn1,meta36182){
this.f = f;
this.ch = ch;
this.meta36168 = meta36168;
this._ = _;
this.fn1 = fn1;
this.meta36182 = meta36182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36183,meta36182__$1){
var self__ = this;
var _36183__$1 = this;
return (new cljs.core.async.t_cljs$core$async36181(self__.f,self__.ch,self__.meta36168,self__._,self__.fn1,meta36182__$1));
}));

(cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36183){
var self__ = this;
var _36183__$1 = this;
return self__.meta36182;
}));

(cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36162_SHARP_){
var G__36204 = (((p1__36162_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36162_SHARP_) : self__.f.call(null,p1__36162_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36204) : f1.call(null,G__36204));
});
}));

(cljs.core.async.t_cljs$core$async36181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36168","meta36168",-1936919302,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36167","cljs.core.async/t_cljs$core$async36167",487593451,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36182","meta36182",-1243560380,null)], null);
}));

(cljs.core.async.t_cljs$core$async36181.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36181");

(cljs.core.async.t_cljs$core$async36181.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36181");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36181.
 */
cljs.core.async.__GT_t_cljs$core$async36181 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36181(f__$1,ch__$1,meta36168__$1,___$2,fn1__$1,meta36182){
return (new cljs.core.async.t_cljs$core$async36181(f__$1,ch__$1,meta36168__$1,___$2,fn1__$1,meta36182));
});

}

return (new cljs.core.async.t_cljs$core$async36181(self__.f,self__.ch,self__.meta36168,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36205 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36205) : self__.f.call(null,G__36205));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36168","meta36168",-1936919302,null)], null);
}));

(cljs.core.async.t_cljs$core$async36167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36167");

(cljs.core.async.t_cljs$core$async36167.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36167.
 */
cljs.core.async.__GT_t_cljs$core$async36167 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36167(f__$1,ch__$1,meta36168){
return (new cljs.core.async.t_cljs$core$async36167(f__$1,ch__$1,meta36168));
});

}

return (new cljs.core.async.t_cljs$core$async36167(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36211 = (function (f,ch,meta36212){
this.f = f;
this.ch = ch;
this.meta36212 = meta36212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36213,meta36212__$1){
var self__ = this;
var _36213__$1 = this;
return (new cljs.core.async.t_cljs$core$async36211(self__.f,self__.ch,meta36212__$1));
}));

(cljs.core.async.t_cljs$core$async36211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36213){
var self__ = this;
var _36213__$1 = this;
return self__.meta36212;
}));

(cljs.core.async.t_cljs$core$async36211.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36211.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36211.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36212","meta36212",-1610139491,null)], null);
}));

(cljs.core.async.t_cljs$core$async36211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36211");

(cljs.core.async.t_cljs$core$async36211.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36211.
 */
cljs.core.async.__GT_t_cljs$core$async36211 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36211(f__$1,ch__$1,meta36212){
return (new cljs.core.async.t_cljs$core$async36211(f__$1,ch__$1,meta36212));
});

}

return (new cljs.core.async.t_cljs$core$async36211(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36228 = (function (p,ch,meta36229){
this.p = p;
this.ch = ch;
this.meta36229 = meta36229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36230,meta36229__$1){
var self__ = this;
var _36230__$1 = this;
return (new cljs.core.async.t_cljs$core$async36228(self__.p,self__.ch,meta36229__$1));
}));

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36230){
var self__ = this;
var _36230__$1 = this;
return self__.meta36229;
}));

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36229","meta36229",697508311,null)], null);
}));

(cljs.core.async.t_cljs$core$async36228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36228");

(cljs.core.async.t_cljs$core$async36228.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async36228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36228.
 */
cljs.core.async.__GT_t_cljs$core$async36228 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36228(p__$1,ch__$1,meta36229){
return (new cljs.core.async.t_cljs$core$async36228(p__$1,ch__$1,meta36229));
});

}

return (new cljs.core.async.t_cljs$core$async36228(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36253 = arguments.length;
switch (G__36253) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33808__auto___38386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_36296){
var state_val_36297 = (state_36296[(1)]);
if((state_val_36297 === (7))){
var inst_36292 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
var statearr_36298_38387 = state_36296__$1;
(statearr_36298_38387[(2)] = inst_36292);

(statearr_36298_38387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (1))){
var state_36296__$1 = state_36296;
var statearr_36300_38388 = state_36296__$1;
(statearr_36300_38388[(2)] = null);

(statearr_36300_38388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (4))){
var inst_36278 = (state_36296[(7)]);
var inst_36278__$1 = (state_36296[(2)]);
var inst_36279 = (inst_36278__$1 == null);
var state_36296__$1 = (function (){var statearr_36301 = state_36296;
(statearr_36301[(7)] = inst_36278__$1);

return statearr_36301;
})();
if(cljs.core.truth_(inst_36279)){
var statearr_36302_38389 = state_36296__$1;
(statearr_36302_38389[(1)] = (5));

} else {
var statearr_36303_38390 = state_36296__$1;
(statearr_36303_38390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (6))){
var inst_36278 = (state_36296[(7)]);
var inst_36283 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36278) : p.call(null,inst_36278));
var state_36296__$1 = state_36296;
if(cljs.core.truth_(inst_36283)){
var statearr_36304_38391 = state_36296__$1;
(statearr_36304_38391[(1)] = (8));

} else {
var statearr_36305_38392 = state_36296__$1;
(statearr_36305_38392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (3))){
var inst_36294 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36296__$1,inst_36294);
} else {
if((state_val_36297 === (2))){
var state_36296__$1 = state_36296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36296__$1,(4),ch);
} else {
if((state_val_36297 === (11))){
var inst_36286 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
var statearr_36306_38393 = state_36296__$1;
(statearr_36306_38393[(2)] = inst_36286);

(statearr_36306_38393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (9))){
var state_36296__$1 = state_36296;
var statearr_36307_38394 = state_36296__$1;
(statearr_36307_38394[(2)] = null);

(statearr_36307_38394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (5))){
var inst_36281 = cljs.core.async.close_BANG_(out);
var state_36296__$1 = state_36296;
var statearr_36308_38395 = state_36296__$1;
(statearr_36308_38395[(2)] = inst_36281);

(statearr_36308_38395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (10))){
var inst_36289 = (state_36296[(2)]);
var state_36296__$1 = (function (){var statearr_36309 = state_36296;
(statearr_36309[(8)] = inst_36289);

return statearr_36309;
})();
var statearr_36310_38396 = state_36296__$1;
(statearr_36310_38396[(2)] = null);

(statearr_36310_38396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (8))){
var inst_36278 = (state_36296[(7)]);
var state_36296__$1 = state_36296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36296__$1,(11),out,inst_36278);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_36335 = [null,null,null,null,null,null,null,null,null];
(statearr_36335[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_36335[(1)] = (1));

return statearr_36335;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_36296){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_36296);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e36336){var ex__33629__auto__ = e36336;
var statearr_36338_38397 = state_36296;
(statearr_36338_38397[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_36296[(4)]))){
var statearr_36340_38398 = state_36296;
(statearr_36340_38398[(1)] = cljs.core.first((state_36296[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38399 = state_36296;
state_36296 = G__38399;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_36296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_36296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_36344 = f__33809__auto__();
(statearr_36344[(6)] = c__33808__auto___38386);

return statearr_36344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36347 = arguments.length;
switch (G__36347) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_36430){
var state_val_36431 = (state_36430[(1)]);
if((state_val_36431 === (7))){
var inst_36425 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
var statearr_36432_38407 = state_36430__$1;
(statearr_36432_38407[(2)] = inst_36425);

(statearr_36432_38407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (20))){
var inst_36390 = (state_36430[(7)]);
var inst_36405 = (state_36430[(2)]);
var inst_36406 = cljs.core.next(inst_36390);
var inst_36376 = inst_36406;
var inst_36377 = null;
var inst_36378 = (0);
var inst_36379 = (0);
var state_36430__$1 = (function (){var statearr_36433 = state_36430;
(statearr_36433[(8)] = inst_36405);

(statearr_36433[(9)] = inst_36378);

(statearr_36433[(10)] = inst_36376);

(statearr_36433[(11)] = inst_36377);

(statearr_36433[(12)] = inst_36379);

return statearr_36433;
})();
var statearr_36434_38408 = state_36430__$1;
(statearr_36434_38408[(2)] = null);

(statearr_36434_38408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (1))){
var state_36430__$1 = state_36430;
var statearr_36435_38409 = state_36430__$1;
(statearr_36435_38409[(2)] = null);

(statearr_36435_38409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (4))){
var inst_36364 = (state_36430[(13)]);
var inst_36364__$1 = (state_36430[(2)]);
var inst_36365 = (inst_36364__$1 == null);
var state_36430__$1 = (function (){var statearr_36439 = state_36430;
(statearr_36439[(13)] = inst_36364__$1);

return statearr_36439;
})();
if(cljs.core.truth_(inst_36365)){
var statearr_36440_38412 = state_36430__$1;
(statearr_36440_38412[(1)] = (5));

} else {
var statearr_36442_38413 = state_36430__$1;
(statearr_36442_38413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (15))){
var state_36430__$1 = state_36430;
var statearr_36446_38414 = state_36430__$1;
(statearr_36446_38414[(2)] = null);

(statearr_36446_38414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (21))){
var state_36430__$1 = state_36430;
var statearr_36447_38415 = state_36430__$1;
(statearr_36447_38415[(2)] = null);

(statearr_36447_38415[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (13))){
var inst_36378 = (state_36430[(9)]);
var inst_36376 = (state_36430[(10)]);
var inst_36377 = (state_36430[(11)]);
var inst_36379 = (state_36430[(12)]);
var inst_36386 = (state_36430[(2)]);
var inst_36387 = (inst_36379 + (1));
var tmp36443 = inst_36378;
var tmp36444 = inst_36376;
var tmp36445 = inst_36377;
var inst_36376__$1 = tmp36444;
var inst_36377__$1 = tmp36445;
var inst_36378__$1 = tmp36443;
var inst_36379__$1 = inst_36387;
var state_36430__$1 = (function (){var statearr_36448 = state_36430;
(statearr_36448[(14)] = inst_36386);

(statearr_36448[(9)] = inst_36378__$1);

(statearr_36448[(10)] = inst_36376__$1);

(statearr_36448[(11)] = inst_36377__$1);

(statearr_36448[(12)] = inst_36379__$1);

return statearr_36448;
})();
var statearr_36449_38416 = state_36430__$1;
(statearr_36449_38416[(2)] = null);

(statearr_36449_38416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (22))){
var state_36430__$1 = state_36430;
var statearr_36451_38417 = state_36430__$1;
(statearr_36451_38417[(2)] = null);

(statearr_36451_38417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (6))){
var inst_36364 = (state_36430[(13)]);
var inst_36374 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36364) : f.call(null,inst_36364));
var inst_36375 = cljs.core.seq(inst_36374);
var inst_36376 = inst_36375;
var inst_36377 = null;
var inst_36378 = (0);
var inst_36379 = (0);
var state_36430__$1 = (function (){var statearr_36452 = state_36430;
(statearr_36452[(9)] = inst_36378);

(statearr_36452[(10)] = inst_36376);

(statearr_36452[(11)] = inst_36377);

(statearr_36452[(12)] = inst_36379);

return statearr_36452;
})();
var statearr_36453_38418 = state_36430__$1;
(statearr_36453_38418[(2)] = null);

(statearr_36453_38418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (17))){
var inst_36390 = (state_36430[(7)]);
var inst_36398 = cljs.core.chunk_first(inst_36390);
var inst_36399 = cljs.core.chunk_rest(inst_36390);
var inst_36400 = cljs.core.count(inst_36398);
var inst_36376 = inst_36399;
var inst_36377 = inst_36398;
var inst_36378 = inst_36400;
var inst_36379 = (0);
var state_36430__$1 = (function (){var statearr_36454 = state_36430;
(statearr_36454[(9)] = inst_36378);

(statearr_36454[(10)] = inst_36376);

(statearr_36454[(11)] = inst_36377);

(statearr_36454[(12)] = inst_36379);

return statearr_36454;
})();
var statearr_36456_38425 = state_36430__$1;
(statearr_36456_38425[(2)] = null);

(statearr_36456_38425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (3))){
var inst_36428 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36430__$1,inst_36428);
} else {
if((state_val_36431 === (12))){
var inst_36414 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
var statearr_36457_38426 = state_36430__$1;
(statearr_36457_38426[(2)] = inst_36414);

(statearr_36457_38426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (2))){
var state_36430__$1 = state_36430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36430__$1,(4),in$);
} else {
if((state_val_36431 === (23))){
var inst_36423 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
var statearr_36458_38428 = state_36430__$1;
(statearr_36458_38428[(2)] = inst_36423);

(statearr_36458_38428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (19))){
var inst_36409 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
var statearr_36461_38430 = state_36430__$1;
(statearr_36461_38430[(2)] = inst_36409);

(statearr_36461_38430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (11))){
var inst_36390 = (state_36430[(7)]);
var inst_36376 = (state_36430[(10)]);
var inst_36390__$1 = cljs.core.seq(inst_36376);
var state_36430__$1 = (function (){var statearr_36468 = state_36430;
(statearr_36468[(7)] = inst_36390__$1);

return statearr_36468;
})();
if(inst_36390__$1){
var statearr_36474_38431 = state_36430__$1;
(statearr_36474_38431[(1)] = (14));

} else {
var statearr_36481_38434 = state_36430__$1;
(statearr_36481_38434[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (9))){
var inst_36416 = (state_36430[(2)]);
var inst_36418 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36430__$1 = (function (){var statearr_36483 = state_36430;
(statearr_36483[(15)] = inst_36416);

return statearr_36483;
})();
if(cljs.core.truth_(inst_36418)){
var statearr_36488_38435 = state_36430__$1;
(statearr_36488_38435[(1)] = (21));

} else {
var statearr_36489_38436 = state_36430__$1;
(statearr_36489_38436[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (5))){
var inst_36367 = cljs.core.async.close_BANG_(out);
var state_36430__$1 = state_36430;
var statearr_36490_38437 = state_36430__$1;
(statearr_36490_38437[(2)] = inst_36367);

(statearr_36490_38437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (14))){
var inst_36390 = (state_36430[(7)]);
var inst_36392 = cljs.core.chunked_seq_QMARK_(inst_36390);
var state_36430__$1 = state_36430;
if(inst_36392){
var statearr_36491_38438 = state_36430__$1;
(statearr_36491_38438[(1)] = (17));

} else {
var statearr_36492_38439 = state_36430__$1;
(statearr_36492_38439[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (16))){
var inst_36412 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
var statearr_36493_38440 = state_36430__$1;
(statearr_36493_38440[(2)] = inst_36412);

(statearr_36493_38440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (10))){
var inst_36377 = (state_36430[(11)]);
var inst_36379 = (state_36430[(12)]);
var inst_36384 = cljs.core._nth(inst_36377,inst_36379);
var state_36430__$1 = state_36430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36430__$1,(13),out,inst_36384);
} else {
if((state_val_36431 === (18))){
var inst_36390 = (state_36430[(7)]);
var inst_36403 = cljs.core.first(inst_36390);
var state_36430__$1 = state_36430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36430__$1,(20),out,inst_36403);
} else {
if((state_val_36431 === (8))){
var inst_36378 = (state_36430[(9)]);
var inst_36379 = (state_36430[(12)]);
var inst_36381 = (inst_36379 < inst_36378);
var inst_36382 = inst_36381;
var state_36430__$1 = state_36430;
if(cljs.core.truth_(inst_36382)){
var statearr_36494_38441 = state_36430__$1;
(statearr_36494_38441[(1)] = (10));

} else {
var statearr_36495_38442 = state_36430__$1;
(statearr_36495_38442[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33626__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33626__auto____0 = (function (){
var statearr_36496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36496[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33626__auto__);

(statearr_36496[(1)] = (1));

return statearr_36496;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33626__auto____1 = (function (state_36430){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_36430);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e36497){var ex__33629__auto__ = e36497;
var statearr_36498_38445 = state_36430;
(statearr_36498_38445[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_36430[(4)]))){
var statearr_36499_38446 = state_36430;
(statearr_36499_38446[(1)] = cljs.core.first((state_36430[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38447 = state_36430;
state_36430 = G__38447;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33626__auto__ = function(state_36430){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33626__auto____1.call(this,state_36430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33626__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33626__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_36500 = f__33809__auto__();
(statearr_36500[(6)] = c__33808__auto__);

return statearr_36500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));

return c__33808__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36502 = arguments.length;
switch (G__36502) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36524 = arguments.length;
switch (G__36524) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36533 = arguments.length;
switch (G__36533) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33808__auto___38458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_36567){
var state_val_36568 = (state_36567[(1)]);
if((state_val_36568 === (7))){
var inst_36562 = (state_36567[(2)]);
var state_36567__$1 = state_36567;
var statearr_36573_38459 = state_36567__$1;
(statearr_36573_38459[(2)] = inst_36562);

(statearr_36573_38459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (1))){
var inst_36540 = null;
var state_36567__$1 = (function (){var statearr_36580 = state_36567;
(statearr_36580[(7)] = inst_36540);

return statearr_36580;
})();
var statearr_36583_38460 = state_36567__$1;
(statearr_36583_38460[(2)] = null);

(statearr_36583_38460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (4))){
var inst_36544 = (state_36567[(8)]);
var inst_36544__$1 = (state_36567[(2)]);
var inst_36545 = (inst_36544__$1 == null);
var inst_36546 = cljs.core.not(inst_36545);
var state_36567__$1 = (function (){var statearr_36584 = state_36567;
(statearr_36584[(8)] = inst_36544__$1);

return statearr_36584;
})();
if(inst_36546){
var statearr_36586_38461 = state_36567__$1;
(statearr_36586_38461[(1)] = (5));

} else {
var statearr_36587_38462 = state_36567__$1;
(statearr_36587_38462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (6))){
var state_36567__$1 = state_36567;
var statearr_36592_38467 = state_36567__$1;
(statearr_36592_38467[(2)] = null);

(statearr_36592_38467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (3))){
var inst_36564 = (state_36567[(2)]);
var inst_36565 = cljs.core.async.close_BANG_(out);
var state_36567__$1 = (function (){var statearr_36597 = state_36567;
(statearr_36597[(9)] = inst_36564);

return statearr_36597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36567__$1,inst_36565);
} else {
if((state_val_36568 === (2))){
var state_36567__$1 = state_36567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36567__$1,(4),ch);
} else {
if((state_val_36568 === (11))){
var inst_36544 = (state_36567[(8)]);
var inst_36556 = (state_36567[(2)]);
var inst_36540 = inst_36544;
var state_36567__$1 = (function (){var statearr_36599 = state_36567;
(statearr_36599[(7)] = inst_36540);

(statearr_36599[(10)] = inst_36556);

return statearr_36599;
})();
var statearr_36603_38470 = state_36567__$1;
(statearr_36603_38470[(2)] = null);

(statearr_36603_38470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (9))){
var inst_36544 = (state_36567[(8)]);
var state_36567__$1 = state_36567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36567__$1,(11),out,inst_36544);
} else {
if((state_val_36568 === (5))){
var inst_36540 = (state_36567[(7)]);
var inst_36544 = (state_36567[(8)]);
var inst_36550 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36544,inst_36540);
var state_36567__$1 = state_36567;
if(inst_36550){
var statearr_36610_38471 = state_36567__$1;
(statearr_36610_38471[(1)] = (8));

} else {
var statearr_36611_38472 = state_36567__$1;
(statearr_36611_38472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (10))){
var inst_36559 = (state_36567[(2)]);
var state_36567__$1 = state_36567;
var statearr_36613_38475 = state_36567__$1;
(statearr_36613_38475[(2)] = inst_36559);

(statearr_36613_38475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36568 === (8))){
var inst_36540 = (state_36567[(7)]);
var tmp36605 = inst_36540;
var inst_36540__$1 = tmp36605;
var state_36567__$1 = (function (){var statearr_36614 = state_36567;
(statearr_36614[(7)] = inst_36540__$1);

return statearr_36614;
})();
var statearr_36617_38476 = state_36567__$1;
(statearr_36617_38476[(2)] = null);

(statearr_36617_38476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_36619 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36619[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_36619[(1)] = (1));

return statearr_36619;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_36567){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_36567);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e36621){var ex__33629__auto__ = e36621;
var statearr_36624_38477 = state_36567;
(statearr_36624_38477[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_36567[(4)]))){
var statearr_36628_38478 = state_36567;
(statearr_36628_38478[(1)] = cljs.core.first((state_36567[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38479 = state_36567;
state_36567 = G__38479;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_36567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_36567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_36632 = f__33809__auto__();
(statearr_36632[(6)] = c__33808__auto___38458);

return statearr_36632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36637 = arguments.length;
switch (G__36637) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33808__auto___38484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_36683){
var state_val_36684 = (state_36683[(1)]);
if((state_val_36684 === (7))){
var inst_36679 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36687_38485 = state_36683__$1;
(statearr_36687_38485[(2)] = inst_36679);

(statearr_36687_38485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (1))){
var inst_36643 = (new Array(n));
var inst_36644 = inst_36643;
var inst_36645 = (0);
var state_36683__$1 = (function (){var statearr_36688 = state_36683;
(statearr_36688[(7)] = inst_36645);

(statearr_36688[(8)] = inst_36644);

return statearr_36688;
})();
var statearr_36689_38486 = state_36683__$1;
(statearr_36689_38486[(2)] = null);

(statearr_36689_38486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (4))){
var inst_36648 = (state_36683[(9)]);
var inst_36648__$1 = (state_36683[(2)]);
var inst_36649 = (inst_36648__$1 == null);
var inst_36650 = cljs.core.not(inst_36649);
var state_36683__$1 = (function (){var statearr_36691 = state_36683;
(statearr_36691[(9)] = inst_36648__$1);

return statearr_36691;
})();
if(inst_36650){
var statearr_36692_38487 = state_36683__$1;
(statearr_36692_38487[(1)] = (5));

} else {
var statearr_36693_38488 = state_36683__$1;
(statearr_36693_38488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (15))){
var inst_36673 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36694_38491 = state_36683__$1;
(statearr_36694_38491[(2)] = inst_36673);

(statearr_36694_38491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (13))){
var state_36683__$1 = state_36683;
var statearr_36695_38492 = state_36683__$1;
(statearr_36695_38492[(2)] = null);

(statearr_36695_38492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (6))){
var inst_36645 = (state_36683[(7)]);
var inst_36668 = (inst_36645 > (0));
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36668)){
var statearr_36698_38493 = state_36683__$1;
(statearr_36698_38493[(1)] = (12));

} else {
var statearr_36699_38494 = state_36683__$1;
(statearr_36699_38494[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (3))){
var inst_36681 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36683__$1,inst_36681);
} else {
if((state_val_36684 === (12))){
var inst_36644 = (state_36683[(8)]);
var inst_36670 = cljs.core.vec(inst_36644);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36683__$1,(15),out,inst_36670);
} else {
if((state_val_36684 === (2))){
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36683__$1,(4),ch);
} else {
if((state_val_36684 === (11))){
var inst_36661 = (state_36683[(2)]);
var inst_36662 = (new Array(n));
var inst_36644 = inst_36662;
var inst_36645 = (0);
var state_36683__$1 = (function (){var statearr_36701 = state_36683;
(statearr_36701[(7)] = inst_36645);

(statearr_36701[(10)] = inst_36661);

(statearr_36701[(8)] = inst_36644);

return statearr_36701;
})();
var statearr_36702_38495 = state_36683__$1;
(statearr_36702_38495[(2)] = null);

(statearr_36702_38495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (9))){
var inst_36644 = (state_36683[(8)]);
var inst_36659 = cljs.core.vec(inst_36644);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36683__$1,(11),out,inst_36659);
} else {
if((state_val_36684 === (5))){
var inst_36645 = (state_36683[(7)]);
var inst_36644 = (state_36683[(8)]);
var inst_36648 = (state_36683[(9)]);
var inst_36654 = (state_36683[(11)]);
var inst_36652 = (inst_36644[inst_36645] = inst_36648);
var inst_36654__$1 = (inst_36645 + (1));
var inst_36655 = (inst_36654__$1 < n);
var state_36683__$1 = (function (){var statearr_36703 = state_36683;
(statearr_36703[(12)] = inst_36652);

(statearr_36703[(11)] = inst_36654__$1);

return statearr_36703;
})();
if(cljs.core.truth_(inst_36655)){
var statearr_36704_38496 = state_36683__$1;
(statearr_36704_38496[(1)] = (8));

} else {
var statearr_36706_38497 = state_36683__$1;
(statearr_36706_38497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (14))){
var inst_36676 = (state_36683[(2)]);
var inst_36677 = cljs.core.async.close_BANG_(out);
var state_36683__$1 = (function (){var statearr_36709 = state_36683;
(statearr_36709[(13)] = inst_36676);

return statearr_36709;
})();
var statearr_36710_38519 = state_36683__$1;
(statearr_36710_38519[(2)] = inst_36677);

(statearr_36710_38519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (10))){
var inst_36665 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36711_38520 = state_36683__$1;
(statearr_36711_38520[(2)] = inst_36665);

(statearr_36711_38520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (8))){
var inst_36644 = (state_36683[(8)]);
var inst_36654 = (state_36683[(11)]);
var tmp36708 = inst_36644;
var inst_36644__$1 = tmp36708;
var inst_36645 = inst_36654;
var state_36683__$1 = (function (){var statearr_36712 = state_36683;
(statearr_36712[(7)] = inst_36645);

(statearr_36712[(8)] = inst_36644__$1);

return statearr_36712;
})();
var statearr_36713_38525 = state_36683__$1;
(statearr_36713_38525[(2)] = null);

(statearr_36713_38525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_36717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36717[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_36717[(1)] = (1));

return statearr_36717;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_36683){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_36683);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e36718){var ex__33629__auto__ = e36718;
var statearr_36720_38532 = state_36683;
(statearr_36720_38532[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_36683[(4)]))){
var statearr_36724_38533 = state_36683;
(statearr_36724_38533[(1)] = cljs.core.first((state_36683[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38534 = state_36683;
state_36683 = G__38534;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_36683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_36683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_36726 = f__33809__auto__();
(statearr_36726[(6)] = c__33808__auto___38484);

return statearr_36726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36731 = arguments.length;
switch (G__36731) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33808__auto___38539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33809__auto__ = (function (){var switch__33625__auto__ = (function (state_36789){
var state_val_36790 = (state_36789[(1)]);
if((state_val_36790 === (7))){
var inst_36785 = (state_36789[(2)]);
var state_36789__$1 = state_36789;
var statearr_36791_38540 = state_36789__$1;
(statearr_36791_38540[(2)] = inst_36785);

(statearr_36791_38540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (1))){
var inst_36732 = [];
var inst_36733 = inst_36732;
var inst_36734 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36789__$1 = (function (){var statearr_36792 = state_36789;
(statearr_36792[(7)] = inst_36734);

(statearr_36792[(8)] = inst_36733);

return statearr_36792;
})();
var statearr_36793_38541 = state_36789__$1;
(statearr_36793_38541[(2)] = null);

(statearr_36793_38541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (4))){
var inst_36737 = (state_36789[(9)]);
var inst_36737__$1 = (state_36789[(2)]);
var inst_36738 = (inst_36737__$1 == null);
var inst_36739 = cljs.core.not(inst_36738);
var state_36789__$1 = (function (){var statearr_36794 = state_36789;
(statearr_36794[(9)] = inst_36737__$1);

return statearr_36794;
})();
if(inst_36739){
var statearr_36796_38542 = state_36789__$1;
(statearr_36796_38542[(1)] = (5));

} else {
var statearr_36797_38543 = state_36789__$1;
(statearr_36797_38543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (15))){
var inst_36733 = (state_36789[(8)]);
var inst_36777 = cljs.core.vec(inst_36733);
var state_36789__$1 = state_36789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36789__$1,(18),out,inst_36777);
} else {
if((state_val_36790 === (13))){
var inst_36772 = (state_36789[(2)]);
var state_36789__$1 = state_36789;
var statearr_36799_38544 = state_36789__$1;
(statearr_36799_38544[(2)] = inst_36772);

(statearr_36799_38544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (6))){
var inst_36733 = (state_36789[(8)]);
var inst_36774 = inst_36733.length;
var inst_36775 = (inst_36774 > (0));
var state_36789__$1 = state_36789;
if(cljs.core.truth_(inst_36775)){
var statearr_36806_38545 = state_36789__$1;
(statearr_36806_38545[(1)] = (15));

} else {
var statearr_36807_38546 = state_36789__$1;
(statearr_36807_38546[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (17))){
var inst_36782 = (state_36789[(2)]);
var inst_36783 = cljs.core.async.close_BANG_(out);
var state_36789__$1 = (function (){var statearr_36808 = state_36789;
(statearr_36808[(10)] = inst_36782);

return statearr_36808;
})();
var statearr_36809_38549 = state_36789__$1;
(statearr_36809_38549[(2)] = inst_36783);

(statearr_36809_38549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (3))){
var inst_36787 = (state_36789[(2)]);
var state_36789__$1 = state_36789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36789__$1,inst_36787);
} else {
if((state_val_36790 === (12))){
var inst_36733 = (state_36789[(8)]);
var inst_36760 = cljs.core.vec(inst_36733);
var state_36789__$1 = state_36789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36789__$1,(14),out,inst_36760);
} else {
if((state_val_36790 === (2))){
var state_36789__$1 = state_36789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36789__$1,(4),ch);
} else {
if((state_val_36790 === (11))){
var inst_36737 = (state_36789[(9)]);
var inst_36741 = (state_36789[(11)]);
var inst_36733 = (state_36789[(8)]);
var inst_36757 = inst_36733.push(inst_36737);
var tmp36818 = inst_36733;
var inst_36733__$1 = tmp36818;
var inst_36734 = inst_36741;
var state_36789__$1 = (function (){var statearr_36822 = state_36789;
(statearr_36822[(12)] = inst_36757);

(statearr_36822[(7)] = inst_36734);

(statearr_36822[(8)] = inst_36733__$1);

return statearr_36822;
})();
var statearr_36823_38558 = state_36789__$1;
(statearr_36823_38558[(2)] = null);

(statearr_36823_38558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (9))){
var inst_36734 = (state_36789[(7)]);
var inst_36753 = cljs.core.keyword_identical_QMARK_(inst_36734,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36789__$1 = state_36789;
var statearr_36829_38559 = state_36789__$1;
(statearr_36829_38559[(2)] = inst_36753);

(statearr_36829_38559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (5))){
var inst_36737 = (state_36789[(9)]);
var inst_36741 = (state_36789[(11)]);
var inst_36734 = (state_36789[(7)]);
var inst_36746 = (state_36789[(13)]);
var inst_36741__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36737) : f.call(null,inst_36737));
var inst_36746__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36741__$1,inst_36734);
var state_36789__$1 = (function (){var statearr_36835 = state_36789;
(statearr_36835[(11)] = inst_36741__$1);

(statearr_36835[(13)] = inst_36746__$1);

return statearr_36835;
})();
if(inst_36746__$1){
var statearr_36836_38561 = state_36789__$1;
(statearr_36836_38561[(1)] = (8));

} else {
var statearr_36837_38562 = state_36789__$1;
(statearr_36837_38562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (14))){
var inst_36737 = (state_36789[(9)]);
var inst_36741 = (state_36789[(11)]);
var inst_36762 = (state_36789[(2)]);
var inst_36764 = [];
var inst_36765 = inst_36764.push(inst_36737);
var inst_36733 = inst_36764;
var inst_36734 = inst_36741;
var state_36789__$1 = (function (){var statearr_36838 = state_36789;
(statearr_36838[(14)] = inst_36765);

(statearr_36838[(7)] = inst_36734);

(statearr_36838[(15)] = inst_36762);

(statearr_36838[(8)] = inst_36733);

return statearr_36838;
})();
var statearr_36848_38564 = state_36789__$1;
(statearr_36848_38564[(2)] = null);

(statearr_36848_38564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (16))){
var state_36789__$1 = state_36789;
var statearr_36853_38578 = state_36789__$1;
(statearr_36853_38578[(2)] = null);

(statearr_36853_38578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (10))){
var inst_36755 = (state_36789[(2)]);
var state_36789__$1 = state_36789;
if(cljs.core.truth_(inst_36755)){
var statearr_36859_38579 = state_36789__$1;
(statearr_36859_38579[(1)] = (11));

} else {
var statearr_36860_38580 = state_36789__$1;
(statearr_36860_38580[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (18))){
var inst_36779 = (state_36789[(2)]);
var state_36789__$1 = state_36789;
var statearr_36864_38583 = state_36789__$1;
(statearr_36864_38583[(2)] = inst_36779);

(statearr_36864_38583[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (8))){
var inst_36746 = (state_36789[(13)]);
var state_36789__$1 = state_36789;
var statearr_36865_38585 = state_36789__$1;
(statearr_36865_38585[(2)] = inst_36746);

(statearr_36865_38585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33626__auto__ = null;
var cljs$core$async$state_machine__33626__auto____0 = (function (){
var statearr_36866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36866[(0)] = cljs$core$async$state_machine__33626__auto__);

(statearr_36866[(1)] = (1));

return statearr_36866;
});
var cljs$core$async$state_machine__33626__auto____1 = (function (state_36789){
while(true){
var ret_value__33627__auto__ = (function (){try{while(true){
var result__33628__auto__ = switch__33625__auto__(state_36789);
if(cljs.core.keyword_identical_QMARK_(result__33628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33628__auto__;
}
break;
}
}catch (e36875){var ex__33629__auto__ = e36875;
var statearr_36876_38589 = state_36789;
(statearr_36876_38589[(2)] = ex__33629__auto__);


if(cljs.core.seq((state_36789[(4)]))){
var statearr_36877_38590 = state_36789;
(statearr_36877_38590[(1)] = cljs.core.first((state_36789[(4)])));

} else {
throw ex__33629__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38593 = state_36789;
state_36789 = G__38593;
continue;
} else {
return ret_value__33627__auto__;
}
break;
}
});
cljs$core$async$state_machine__33626__auto__ = function(state_36789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33626__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33626__auto____1.call(this,state_36789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33626__auto____0;
cljs$core$async$state_machine__33626__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33626__auto____1;
return cljs$core$async$state_machine__33626__auto__;
})()
})();
var state__33810__auto__ = (function (){var statearr_36880 = f__33809__auto__();
(statearr_36880[(6)] = c__33808__auto___38539);

return statearr_36880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33810__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
