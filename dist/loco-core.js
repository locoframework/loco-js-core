!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.LocoCore=n():t.LocoCore=n()}(window,(function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.r(n);var r=function(t){"function"==typeof t.constructor.initialize&&t.constructor.initialize(),"function"==typeof t.initialize&&t.initialize()},i=function(t,n,e){var r=void 0===e?t[n]:t[n][e];return"function"==typeof r?new r:"object"===o(r)?r:null},u=function(t){var n=document.getElementsByTagName("body")[0],e=n.getAttribute("data-namespace"),o=n.getAttribute("data-controller"),u=n.getAttribute("data-action"),c=i(t,e),l=i(t,o);return null!==c&&(l=i(t,e,o),r(c)),null!==l&&function(t,n){r(t),"function"==typeof t.constructor[n]&&t.constructor[n](),"function"==typeof t[n]&&t[n]()}(l,u),{namespaceController:c,controller:l,action:u}},c={get params(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,n={},e=/https?:\/\/.+\/\w+\/(\d+)/.exec(t),o=null!==e?e[1]:null;null!==o&&(n.id=parseInt(o));var r=t.split("?");if(1===r.length)return n;var i=r[r.length-1],u=i.split("&").map((function(t){return t.split("=")})),c=!0,l=!1,f=void 0;try{for(var a,p=u[Symbol.iterator]();!(c=(a=p.next()).done);c=!0){var y=a.value,d=decodeURIComponent(y[0]),s=decodeURIComponent(y[1]);"string"==typeof s&&(s=s.replace(/\+/g," ")),n[d]=s}}catch(t){l=!0,f=t}finally{try{c||null==p.return||p.return()}finally{if(l)throw f}}return n}()}};e.d(n,"Controllers",(function(){return l})),e.d(n,"init",(function(){return u})),e.d(n,"helpers",(function(){return c}));var l={Base:function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}}}])}));