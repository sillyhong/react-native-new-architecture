(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66352146"],{"0305":function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=n("a94b"),o=n("92b3"),a=n("79ae"),i=n("689f");function c(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var s=c(i);s.Axios=a,s.create=function(e){return c(r.merge(i,e))},s.Cancel=n("ee7b"),s.CancelToken=n("968c"),s.isCancel=n("a897"),s.all=function(e){return Promise.all(e)},s.spread=n("041c"),e.exports=s,e.exports.default=s},"041c":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"044b":function(e,t){function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},"09fc":function(e,t,n){"use strict";n("ac1f"),n("5319"),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"0b5e":function(e,t,n){"use strict";n("14d9"),n("d3b7"),n("159b");var r=n("a94b");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},"137c":function(e,t,n){e.exports=n("0305")},"313d":function(e,t,n){var r=n("23e7"),o=n("d066"),a=n("e330"),i=n("d039"),c=n("577e"),s=n("d6d6"),u=n("b917").itoc,f=o("btoa"),d=a("".charAt),l=a("".charCodeAt),p=!!f&&!i((function(){f()})),h=!!f&&i((function(){return"bnVsbA=="!==f(null)})),g=!!f&&1!==f.length;r({global:!0,enumerable:!0,forced:p||h||g},{btoa:function(e){if(s(arguments.length,1),p||h||g)return f(c(e));var t,n,r=c(e),a="",i=0,b=u;while(d(r,i)||(b="=",i%1)){if(n=l(r,i+=3/4),n>255)throw new(o("DOMException"))("The string contains characters outside of the Latin1 range","InvalidCharacterError");t=t<<8|n,a+=d(b,63&t>>8-i%1*8)}return a}})},"46ed":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},"526a":function(e,t,n){"use strict";n("d3b7"),n("159b");var r=n("a94b");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},"56a1":function(e,t,n){"use strict";n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("159b"),n("e9c4"),n("14d9"),n("a15b");var r=n("a94b");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},"689f":function(e,t,n){"use strict";(function(t){n("d3b7"),n("25f0"),n("e9c4"),n("159b");var r=n("a94b"),o=n("526a"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t)&&(e=n("967f")),e}var s={adapter:c(),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){s.headers[e]=r.merge(a)})),e.exports=s}).call(this,n("4362"))},"6c84":function(e,t,n){"use strict";function r(e){return new Promise((function(t,n){var r;window.XMLHttpRequest&&(r=new XMLHttpRequest),r.open(e.method||"POST",e.url,!0),r.responseType="json";var o=function(e){r.data=r.response,t(r)},a=function(e){console.log("????? handleFailed",r),n(r)};r.withCredentials="boolean"!==typeof e.withCredentials||e.withCredentials,r.addEventListener("load",o,!1),r.addEventListener("error",a,!1),r.send(e.data)}))}n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r;t.default=o},"6f2a":function(e,t,n){"use strict";n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.topDomain=void 0;var r=window.location.host?window.location.host.replace(/(.)+\.(\w+)$/g,"$2"):"org";t.topDomain=r;var o={baseHost:"//time.geekbang.".concat(r),timeServer:"//time.geekbang.".concat(r),universityServer:"//u.geekbang.".concat(r),accountServer:"//account.geekbang.".concat(r),cashierServer:"//cashier.geekbang.".concat(r),bServer:"//b.geekbang.".concat(r),hordeServer:"//horde.geekbang.".concat(r)};t.default=o},"779d":function(e,t,n){"use strict";n("d3b7"),n("159b");var r=n("a94b"),o=n("9c7b"),a=n("a897"),i=n("689f");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){c(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||i.adapter;return t(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"79ae":function(e,t,n){"use strict";n("d3b7"),n("159b"),n("3c65"),n("14d9");var r=n("689f"),o=n("a94b"),a=n("0b5e"),i=n("779d"),c=n("a1c5"),s=n("09fc");function u(e){this.defaults=e,this.interceptors={request:new a,response:new a}}u.prototype.request=function(e){"string"===typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(r,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!c(e.url)&&(e.url=s(e.baseURL,e.url));var t=[i,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}})),o.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}})),e.exports=u},"92b3":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"967f":function(e,t,n){"use strict";n("313d"),n("0eb6"),n("b7ef"),n("8bd4"),n("d3b7"),n("159b");var r=n("a94b"),o=n("f23e"),a=n("56a1"),i=n("97a5"),c=n("f19d"),s=n("efb7"),u="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n("be72");e.exports=function(e){return new Promise((function(t,f){var d=e.data,l=e.headers;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",g=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in p||c(e.url)||(p=new window.XDomainRequest,h="onload",g=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var b=e.auth.username||"",m=e.auth.password||"";l.Authorization="Basic "+u(b+":"+m)}if(p.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||g)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,f,a),p=null}},p.onerror=function(){f(s("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=n("c7ca"),w=(e.withCredentials||c(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;w&&(l[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(l,(function(e,t){"undefined"===typeof d&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),f(e),p=null)})),void 0===d&&(d=null),p.send(d)}))}},"968c":function(e,t,n){"use strict";n("d9e2"),n("d3b7");var r=n("ee7b");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},"97a5":function(e,t,n){"use strict";n("d3b7"),n("159b"),n("498a");var r=n("a94b");e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(a[t]=a[t]?a[t]+", "+n:n)})),a):a}},"9c7b":function(e,t,n){"use strict";n("d3b7"),n("159b");var r=n("a94b");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},a1c5:function(e,t,n){"use strict";n("ac1f"),n("00b4"),e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},a897:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},a94b:function(e,t,n){"use strict";var r=n("7037").default;n("d3b7"),n("c19f"),n("3ca3"),n("ddb0"),n("9861"),n("ac1f"),n("5319");var o=n("92b3"),a=n("044b"),i=Object.prototype.toString;function c(e){return"[object Array]"===i.call(e)}function s(e){return"[object ArrayBuffer]"===i.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function d(e){return"string"===typeof e}function l(e){return"number"===typeof e}function p(e){return"undefined"===typeof e}function h(e){return null!==e&&"object"===r(e)}function g(e){return"[object Date]"===i.call(e)}function b(e){return"[object File]"===i.call(e)}function m(e){return"[object Blob]"===i.call(e)}function v(e){return"[object Function]"===i.call(e)}function w(e){return h(e)&&v(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function S(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function E(e,t){if(null!==e&&"undefined"!==typeof e)if("object"===r(e)||c(e)||(e=[e]),c(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function k(){var e={};function t(t,n){"object"===r(e[n])&&"object"===r(t)?e[n]=k(e[n],t):e[n]=t}for(var n=0,o=arguments.length;n<o;n++)E(arguments[n],t);return e}function C(e,t,n){return E(t,(function(t,r){e[r]=n&&"function"===typeof t?o(t,n):t})),e}e.exports={isArray:c,isArrayBuffer:s,isBuffer:a,isFormData:u,isArrayBufferView:f,isString:d,isNumber:l,isObject:h,isUndefined:p,isDate:g,isFile:b,isBlob:m,isFunction:v,isStream:w,isURLSearchParams:y,isStandardBrowserEnv:S,forEach:E,merge:k,extend:C,trim:x}},be72:function(e,t,n){"use strict";n("d9e2"),n("b0c0");var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}function a(e){for(var t,n,a=String(e),i="",c=0,s=r;a.charAt(0|c)||(s="=",c%1);i+=s.charAt(63&t>>8-c%1*8)){if(n=a.charCodeAt(c+=3/4),n>255)throw new o;t=t<<8|n}return i}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=a},c19f:function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),a=n("621a"),i=n("2626"),c="ArrayBuffer",s=a[c],u=o[c];r({global:!0,constructor:!0,forced:u!==s},{ArrayBuffer:s}),i(c)},c7ca:function(e,t,n){"use strict";n("14d9"),n("a15b"),n("ac1f"),n("466d"),n("4d63"),n("c607"),n("2c3e"),n("25f0");var r=n("a94b");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var c=[];c.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(o)&&c.push("path="+o),r.isString(a)&&c.push("domain="+a),!0===i&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},d49b:function(e,t,n){"use strict";n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("14d9"),n("159b"),n("dbb4"),n("99af"),n("ac1f"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("466d"),n("3c65"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("6f2a")),o=void 0;function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={login:function(e,t){var n=o.queryPack(c({},t));if(o.isInWXMiniProgram()){var a="".concat(e||window.location.href),i="/pages/gkwebview/gkwebview?url=".concat(encodeURIComponent(a));window.wx&&window.wx.miniProgram.navigateTo({url:"/pages/login/login?redirect=".concat(encodeURIComponent(i),"&").concat(n)})}else window.location.href="".concat(r.default.accountServer,"/singin?redirect=").concat(e?encodeURIComponent(e)+"&"+n:encodeURIComponent(window.location.href))},fixedBody:function(e){var t=0,n=0;return{open:function(){t=document.scrollingElement.scrollTop||document.body.scrollTop,document.body.style.top=-t+"px",document.body.classList.add(e),n=document.body.style.top},close:function(){document.body.classList.remove(e),document.scrollingElement.scrollTop=t,document.body.scrollTop=t,document.body.style.top=n}}}("fixed"),addUrlParam:function(e,t,n){if(""===n)return e;var r=t+"="+encodeURIComponent(n),o="?"+r;return e&&(o=e.replace(new RegExp("([?&])"+t+"[^&]*"),"$1"+r),o===e&&e.indexOf(r)<0&&(o+=(e.indexOf("?")>0?"&":"?")+r)),o},queryPack:function(e){var t="";for(var n in e)t+="".concat(n,"=").concat(encodeURIComponent(e[n]),"&");return t.substr(0,t.length-1)},isInApp:function(){return!!navigator.userAgent.match(/org\.geekbang\.GeekTime/i)},isPC:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,r=0;r<t.length;r++)if(e.indexOf(t[r])>0){n=!1;break}return n},isIOS:function(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},isInWeixin:function(){var e=window.navigator.userAgent;return!!e.match(/MicroMessenger/i)},isInDingDing:function(){var e=window.navigator.userAgent;return!!e.match(/DingTalk/i)},isInWXMiniProgram:function(){return window.__wxjs_environment&&"miniprogram"===window.__wxjs_environment||window.navigator.userAgent.toLowerCase().indexOf("miniprogram")>-1},getQueryString:function(e,t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=e.split("?").length>1?e.split("?")[1]:"",o=r.match(n);return null!==o?decodeURIComponent(o[2]):""},getParents:function(e){var t=[];while(e)t.unshift(e),e=e.parentNode;return t},debounce:function(e,t){var n;return function(){for(var r=this,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){e.apply(r,a)}),t)}},sensorsTrack:function(e,t){window.collectEvent&&window.collectEvent(e,t)},beaconTrack:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.collectEvent&&window.collectEvent("beconEvent",e,t)}};t.default=u},ee7b:function(e,t,n){"use strict";function r(e){this.message=e}n("d3b7"),n("25f0"),r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},efb7:function(e,t,n){"use strict";n("d9e2");var r=n("46ed");e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},f19d:function(e,t,n){"use strict";n("ac1f"),n("00b4"),n("5319"),n("841c");var r=n("a94b");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},f23e:function(e,t,n){"use strict";var r=n("efb7");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},f552:function(e,t,n){"use strict";n("d3b7"),n("99af"),n("ac1f"),n("466d"),n("159b"),n("9911"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n("137c")),o=c(n("d49b")),a=c(n("6c84")),i=c(n("6f2a"));function c(e){return e&&e.__esModule?e:{default:e}}var s={getUserData:function(){return new Promise((function(e,t){(0,a.default)({url:"".concat(i.default.timeServer,"/serv/v1/my/data")}).then((function(n){200===n.status&&0===n.data.code?e(n.data.data):t(n)})).catch((function(e){console.log(e),t(e)}))}))},getMenuData:function(){return new Promise((function(e,t){var n=o.default.getQueryString(window.location.href,"dev_menu_test")?"https://static001-test.geekbang.org/static/time/menu/data.json":"https://static001.geekbang.org/static/time/menu/data.json";(0,a.default)({url:"".concat(n,"?v=").concat(Math.floor((new Date).valueOf()/6e4)),method:"GET",withCredentials:!1}).then((function(n){200===n.status?e(n.data):t(n)})).catch((function(e){console.log(e),t(e)}))}))},getSubMenuData:function(){var e=this,t=window.location.host&&window.location.host.match(/geekbang\.(org|com)/)?window.location.host.match(/geekbang\.(org|com)/)[0]:"geekbang.org";return new Promise((function(n,r){var i=o.default.getQueryString(window.location.href,"dev_menu_test")?"https://static001-test.geekbang.org/static/time/menu/sub_data.json":"https://static001.geekbang.org/static/time/menu/sub_data.json";(0,a.default)({url:"".concat(i,"?v=").concat(Math.floor((new Date).valueOf()/6e4)),method:"GET",withCredentials:!1}).then((function(o){if(200===o.status){var a=o.data.training||[];a.forEach((function(n){"geekbang.com"===t?n.link=n.link.replace("geekbang.org","geekbang.com"):"geekbang.org"===e.geekbangDomain&&(n.link=n.link.replace("geekbang.com","geekbang.org"))})),n(a)}else r(o)})).catch((function(e){console.log(e),r(e)}))}))},getHotWords:function(){return new Promise((function(e,t){(0,a.default)({url:"".concat(i.default.timeServer,"/serv/v3/search/hot_words")}).then((function(n){200===n.status&&0===n.data.code?e(n.data.data):t(n)})).catch((function(e){t(e)}))}))},getUniversityUserInfo:function(){return new Promise((function(e,t){(0,a.default)({url:"".concat(i.default.universityServer,"/serv/v1/user/check_user"),method:"GET"}).then((function(n){200===n.status&&0===n.data.code?e(n.data.data):t(n)})).catch((function(e){t(e)}))}))},getHotSearchList:function(){return new Promise((function(e,t){(0,a.default)({url:"".concat(i.default.timeServer,"/serv/v3/search/recommends")}).then((function(n){200===n.status&&0===n.data.code?e(n.data.data):t(n)})).catch((function(e){t(e)}))}))},getGuessSearchList:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n={key:e,size:t};return new Promise((function(e,t){r.default.post("".concat(i.default.timeServer,"/serv/v3/search/associate"),n).then((function(n){200===n.status&&0===n.data.code?e(n.data.data):t(n)})).catch((function(e){t(e)}))}))}};t.default=s}}]);