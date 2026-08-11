goog.provide('sprog.dev.startup');
sprog.dev.startup.init = (function sprog$dev$startup$init(){
return sprog.dev.hsv_demo.init();
});
sprog.dev.startup.pre_init = (function sprog$dev$startup$pre_init(){
return window.addEventListener("load",(function (_){
return sprog.dev.startup.init();
}));
});

//# sourceMappingURL=sprog.dev.startup.js.map
