!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LocoCore=t():e.LocoCore=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.r(t);var o=function(e){"function"==typeof e.constructor.initialize&&e.constructor.initialize(),"function"==typeof e.initialize&&e.initialize()},i=function(e,t){o(e),"function"==typeof e.constructor[t]&&e.constructor[t](),"function"==typeof e[t]&&e[t]()},u=function(e){var t=document.getElementsByTagName("body")[0].getAttribute("data-namespace"),n=document.getElementsByTagName("body")[0].getAttribute("data-controller"),u=document.getElementsByTagName("body")[0].getAttribute("data-action"),l=null,a=null;return"function"==typeof e[t]?(l=new e[t],"function"==typeof e[t][n]&&(a=new e[t][n]),o(l),"object"===r(a)&&(l.setSubController(a),a.setSuperController(l),i(a,u))):"function"==typeof e[n]&&(a=new e[n],i(a,u)),{namespaceController:l,controller:a,action:u}};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.views={},this.receivers={},this.subController=null,this.superController=null,this.params=this.__fetchParams()}var t,n,r;return t=e,(n=[{key:"setView",value:function(e,t){this.views[e]=t}},{key:"getView",value:function(e){return this.views[e]}},{key:"getViews",value:function(){return this.views}},{key:"setSubController",value:function(e){this.subController=e}},{key:"getSubController",value:function(){return this.subController}},{key:"setSuperController",value:function(e){this.superController=e}},{key:"getSuperController",value:function(){return this.superController}},{key:"__fetchParams",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,t={},n=/https?:\/\/.+\/\w+\/(\d+)/.exec(e),r=null!==n?n[1]:null;null!==r&&(t.id=parseInt(r));var o=e.split("?");if(1===o.length)return t;var i=o[o.length-1],u=i.split("&").map((function(e){return e.split("=")})),l=!0,a=!1,c=void 0;try{for(var f,s=u[Symbol.iterator]();!(l=(f=s.next()).done);l=!0){var y=f.value,p=decodeURIComponent(y[0]),v=decodeURIComponent(y[1]);"spring"==typeof v&&(v=v.replace(/\+/g," ")),t[p]=v}}catch(e){a=!0,c=e}finally{try{l||null==s.return||s.return()}finally{if(a)throw c}}return t}}])&&l(t.prototype,n),r&&l(t,r),e}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this,e),this.views={},this.intervals={},this.receivers={},this.controller=null,this.delegator=null,void 0!==t.controller&&this.setController(t.controller),void 0!==t.delegator&&this.setDelegator(t.delegator)}var t,n,r;return t=e,(n=[{key:"setController",value:function(e){this.controller=e}},{key:"getController",value:function(){return this.controller}},{key:"setView",value:function(e,t){this.views[e]=t}},{key:"getView",value:function(e){return this.views[e]}},{key:"getViews",value:function(){return this.views}},{key:"setDelegator",value:function(e){this.delegator=e}},{key:"getDelegator",value:function(){return this.delegator}}])&&f(t.prototype,n),r&&f(t,r),e}();n.d(t,"Controllers",(function(){return y})),n.d(t,"Views",(function(){return p})),n.d(t,"init",(function(){return u}));var y={Base:a},p={Base:s}}])}));