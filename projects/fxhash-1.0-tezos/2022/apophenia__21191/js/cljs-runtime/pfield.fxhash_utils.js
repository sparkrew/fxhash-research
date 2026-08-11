goog.provide('pfield.fxhash_utils');
pfield.fxhash_utils.fxrand = (function pfield$fxhash_utils$fxrand(var_args){
var G__27969 = arguments.length;
switch (G__27969) {
case 0:
return pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$0 = (function (){
return fxrand();
}));

(pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$1 = (function (maximum){
return (maximum * pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$0());
}));

(pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$2 = (function (minimum,maximum){
return (minimum + pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$1((maximum - minimum)));
}));

(pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$3 = (function (minimum,maximum,exponent){
return sprog.util.scale.cljs$core$IFn$_invoke$arity$3(minimum,maximum,Math.pow(pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$0(),exponent));
}));

(pfield.fxhash_utils.fxrand.cljs$lang$maxFixedArity = 3);

pfield.fxhash_utils.fxrand_geom = (function pfield$fxhash_utils$fxrand_geom(p){
if((pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$0() < p)){
return (1);
} else {
return ((pfield.fxhash_utils.fxrand_geom.cljs$core$IFn$_invoke$arity$1 ? pfield.fxhash_utils.fxrand_geom.cljs$core$IFn$_invoke$arity$1(p) : pfield.fxhash_utils.fxrand_geom.call(null,p)) + (1));
}
});
pfield.fxhash_utils.fxchance = (function pfield$fxhash_utils$fxchance(chance){
return (chance > pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$0());
});
pfield.fxhash_utils.fxchoice = (function pfield$fxhash_utils$fxchoice(option_weight_map){
var weight_sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(option_weight_map));
var choice_index = pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$0();
var option_weight_pairs = cljs.core.seq(option_weight_map);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(option_weight_pairs))){
return cljs.core.first(cljs.core.first(option_weight_pairs));
} else {
var vec__28009 = cljs.core.first(option_weight_pairs);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(0),null);
var weight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28009,(1),null);
var new_index = (choice_index - (weight / weight_sum));
if((new_index <= (0))){
return option;
} else {
var G__28039 = new_index;
var G__28040 = cljs.core.rest(option_weight_pairs);
choice_index = G__28039;
option_weight_pairs = G__28040;
continue;
}
}
break;
}
});
pfield.fxhash_utils.fxrand_int = (function pfield$fxhash_utils$fxrand_int(var_args){
var G__28016 = arguments.length;
switch (G__28016) {
case 1:
return pfield.fxhash_utils.fxrand_int.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pfield.fxhash_utils.fxrand_int.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pfield.fxhash_utils.fxrand_int.cljs$core$IFn$_invoke$arity$1 = (function (maximum){
return Math.floor(pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$1(maximum));
}));

(pfield.fxhash_utils.fxrand_int.cljs$core$IFn$_invoke$arity$2 = (function (minimum,maximum){
return (minimum + pfield.fxhash_utils.fxrand_int.cljs$core$IFn$_invoke$arity$1((maximum - minimum)));
}));

(pfield.fxhash_utils.fxrand_int.cljs$lang$maxFixedArity = 2);

pfield.fxhash_utils.fxrand_nth = (function pfield$fxhash_utils$fxrand_nth(coll){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,Math.floor((pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$0() * cljs.core.count(coll))));
});
pfield.fxhash_utils.fxshuffle = (function pfield$fxhash_utils$fxshuffle(coll){
var sorted_coll = coll;
var shuffled_list = cljs.core.List.EMPTY;
while(true){
var size = cljs.core.count(sorted_coll);
if((size > (0))){
var index = Math.floor(pfield.fxhash_utils.fxrand.cljs$core$IFn$_invoke$arity$1(size));
var G__28048 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,sorted_coll),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((index + (1)),sorted_coll));
var G__28049 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shuffled_list,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_coll,index));
sorted_coll = G__28048;
shuffled_list = G__28049;
continue;
} else {
return shuffled_list;
}
break;
}
});

//# sourceMappingURL=pfield.fxhash_utils.js.map
