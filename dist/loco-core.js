!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.LocoCore=e():t.LocoCore=e()}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o.r(e);var r=function(t){"function"==typeof t.constructor.initialize&&t.constructor.initialize(),"function"==typeof t.initialize&&t.initialize()},c=function(t,e){r(t),"function"==typeof t.constructor[e]&&t.constructor[e](),"function"==typeof t[e]&&t[e]()},u=function(t,e){var o=document.getElementsByTagName("body")[0].getAttribute("data-namespace"),u=document.getElementsByTagName("body")[0].getAttribute("data-controller"),i=document.getElementsByTagName("body")[0].getAttribute("data-action");e.action=i,"function"==typeof t[o]?(e.namespaceController=new t[o],"function"==typeof t[o][u]&&(e.controller=new t[o][u]),r(e.namespaceController),"object"===n(e.controller)&&(e.namespaceController.setSubController(e.controller),e.controller.setSuperController(e.namespaceController),c(e.controller,i))):"function"==typeof t[u]&&(e.controller=new t[u],c(e.controller,i))};o.d(e,"init",(function(){return u}))}])}));