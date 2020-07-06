var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="ionicons";var a;var i;var s=false;var o=0;var l=false;var f=typeof window!=="undefined"?window:{};var u=f.CSS;var c=f.document||{head:{}};var $={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var v=function(){return(c.head.attachShadow+"").indexOf("[native")>-1}();var h=function(e){return Promise.resolve(e)};var m=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p="{visibility:hidden}.hydrated{visibility:inherit}";var d=function(e,t){if(t===void 0){t=""}{return function(){return}}};var g=function(e,t){{return function(){return}}};var y=new WeakMap;var w=function(e,t,r){var n=we.get(e);if(m&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}we.set(e,n)};var b=function(e,t,r,n){var a=S(t);var i=we.get(a);e=e.nodeType===11?e:c;if(i){if(typeof i==="string"){e=e.head||e;var s=y.get(e);var o=void 0;if(!s){y.set(e,s=new Set)}if(!s.has(a)){{if($.$cssShim$){o=$.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=c.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var _=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=d("attachStyles",t.$tagName$);var i=b(v&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h")}a()};var S=function(e,t){return"sc-"+e.$tagName$};var R={};var x=function(e){return e!=null};var C=function(e){e=typeof e;return e==="object"||e==="function"};var j=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var E=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o=[];var l=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!C(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?N(null,a):a)}s=i}}};l(r);if(t){{var f=t.className||t.class;if(f){t.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var u=N(e,null);u.$attrs$=t;if(o.length>0){u.$children$=o}return u}));var N=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}return r};var M=e("H",{});var L=function(e){return e&&e.$tag$===M};var U=function(e,t,r,n,a,i){if(r!==n){var s=pe(e,t);var o=t.toLowerCase();if(t==="class"){var l=e.classList;var f=A(r);var u=A(n);l.remove.apply(l,f.filter((function(e){return e&&!u.includes(e)})));l.add.apply(l,u.filter((function(e){return e&&!f.includes(e)})))}else{var c=C(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var $=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=$){e[t]=$}}else{e[t]=n}}catch(v){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var k=/\s/;var A=function(e){return!e?[]:e.split(k)};var O=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||R;var s=t.$attrs$||R;{for(n in i){if(!(n in s)){U(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){U(a,n,i[n],s[n],r,t.$flags$)}};var P=function(e,t,r,n){var i=t.$children$[r];var o=0;var l;var f;if(i.$text$!==null){l=i.$elm$=c.createTextNode(i.$text$)}else{l=i.$elm$=c.createElement(i.$tag$);{O(null,i,s)}if(x(a)&&l["s-si"]!==a){l.classList.add(l["s-si"]=a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){f=P(e,i,o);if(f){l.appendChild(f)}}}}return l};var T=function(e,t,r,n,a,s){var o=e;var l;if(o.shadowRoot&&o.tagName===i){o=o.shadowRoot}for(;a<=s;++a){if(n[a]){l=P(null,r,a);if(l){n[a].$elm$=l;o.insertBefore(l,t)}}}};var I=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;a.remove()}}};var B=function(e,t,r,n){var a=0;var i=0;var s=t.length-1;var o=t[0];var l=t[s];var f=n.length-1;var u=n[0];var c=n[f];var $;while(a<=s&&i<=f){if(o==null){o=t[++a]}else if(l==null){l=t[--s]}else if(u==null){u=n[++i]}else if(c==null){c=n[--f]}else if(z(o,u)){H(o,u);o=t[++a];u=n[++i]}else if(z(l,c)){H(l,c);l=t[--s];c=n[--f]}else if(z(o,c)){H(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=t[++a];c=n[--f]}else if(z(l,u)){H(l,u);e.insertBefore(l.$elm$,o.$elm$);l=t[--s];u=n[++i]}else{{$=P(t&&t[i],r,i);u=n[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){T(e,n[f+1]==null?null:n[f+1].$elm$,r,n,i,f)}else if(i>f){I(t,a,s)}};var z=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var H=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$text$;if(i===null){{{O(e,t,s)}}if(n!==null&&a!==null){B(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}T(r,null,t,a,0,a.length-1)}else if(n!==null){I(n,0,n.length-1)}}else if(e.$text$!==i){r.data=i}};var q=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var s=e.$vnode$||N(null,null);var o=L(t)?t:E(null,null,t);i=r.tagName;if(n.$attrsToReflect$){o.$attrs$=o.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return o.$attrs$[n]=r[t]}))}o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=s.$elm$=r.shadowRoot||r;{a=r["s-sc"]}H(s,o)};var V=e("c",(function(e){return ve(e).$hostElement$}));var F=function(e,t,r){var n=new CustomEvent(t,r);e.dispatchEvent(n);return n};var W=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var G=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}W(e,e.$ancestorComponent$);var r=function(){return Q(e,t)};return Ne(r)};var Q=function(e,t){var r=d("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;r();return ee(a,(function(){return D(e,n,t)}))};var D=function(e,t,r){var n=e.$hostElement$;var a=d("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(r){_(e)}var s=d("render",e.$cmpMeta$.$tagName$);{{q(e,J(e,t))}}if($.$cssShim$){$.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return K(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var J=function(e,t){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(r){de(r)}return t};var K=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=d("postUpdate",t);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{te(r)}n();{e.$onReadyResolve$(r);if(!a){Y()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ee((function(){return G(e,false)}))}e.$flags$&=~(4|512)}};var X=function(e){{var t=ve(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){G(t,false)}return r}};var Y=function(e){{te(c.documentElement)}{$.$flags$|=2}Ee((function(){return F(f,"appload",{detail:{namespace:n}})}))};var Z=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){de(n)}}return undefined};var ee=function(e,t){return e&&e.then?e.then(t):t()};var te=function(e){return e.classList.add("hydrated")};var re=function(e,t){if(e!=null&&!C(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var ne=function(e,t){return ve(e).$instanceValues$.get(t)};var ae=function(e,t,r,n){var a=ve(e);var i=a.$instanceValues$.get(t);var s=a.$flags$;var o=a.$lazyInstance$;r=re(r,n.$members$[t][0]);if((!(s&8)||i===undefined)&&r!==i){a.$instanceValues$.set(t,r);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[t];if(l){l.map((function(e){try{o[e](r,i,t)}catch(n){de(n)}}))}}if((s&(2|16))===2){G(a,false)}}}};var ie=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return ne(this,n)},set:function(e){ae(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;$.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var se=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,(function(){var e,r,i,o,l,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=ye(a);if(!s.then)return[3,2];e=g();return[4,s];case 1:s=c.sent();e();c.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}ie(s,a,2);s.isProxied=true}r=d("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch($){de($)}{n.$flags$&=~8}{n.$flags$|=128}r();oe(n.$lazyInstance$);i=S(a);if(!(!we.has(i)&&s.style))return[3,5];o=d("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-dfd20282.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=c.sent();c.label=4;case 4:w(i,l,!!(a.$flags$&1));o();c.label=5;case 5:f=n.$ancestorComponent$;u=function(){return G(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var oe=function(e){{Z(e,"connectedCallback")}};var le=function(e){if(($.$flags$&1)===0){var t=ve(e);var r=t.$cmpMeta$;var n=d("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){W(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Ee((function(){return se(e,t,r)}))}}else{oe(t.$lazyInstance$)}n()}};var fe=function(e){if(($.$flags$&1)===0){var t=ve(e);var r=t.$lazyInstance$;if($.$cssShim$){$.$cssShim$.removeHost(e)}{Z(r,"disconnectedCallback")}}};var ue=e("b",(function(e,t){if(t===void 0){t={}}var r=d();var n=[];var a=t.exclude||[];var i=f.customElements;var s=c.head;var o=s.querySelector("meta[charset]");var l=c.createElement("style");var u=[];var h;var m=true;Object.assign($,t);$.$resourcesUrl$=new URL(t.resourcesUrl||"./",c.baseURI).href;{if(t.syncQueue){$.$flags$|=4}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!v&&r.$flags$&1){r.$flags$|=8}var s=r.$tagName$;var o=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;me(t,r);if(r.$flags$&1){if(v){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(m){u.push(this)}else{$.jmp((function(){return le(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;$.jmp((function(){return fe(e)}))};t.prototype.forceUpdate=function(){X(this)};t.prototype.componentOnReady=function(){return ve(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,ie(o,r,1))}}))}));{l.innerHTML=n+p;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}m=false;if(u.length){u.map((function(e){return e.connectedCallback()}))}else{{$.jmp((function(){return h=setTimeout(Y,30)}))}}r()}));var ce=e("g",(function(e){var t=new URL(e,$.$resourcesUrl$);return t.origin!==f.location.origin?t.href:t.pathname}));var $e=new WeakMap;var ve=function(e){return $e.get(e)};var he=e("r",(function(e,t){return $e.set(t.$lazyInstance$=e,t)}));var me=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return $e.set(e,r)};var pe=function(e,t){return t in e};var de=function(e){return console.error(e)};var ge=new Map;var ye=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=ge.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{ge.set(i,e)}return e[a]}),de)};var we=new Map;var be=[];var _e=[];var Se=[];var Re=function(e,t){return function(r){e.push(r);if(!l){l=true;if(t&&$.$flags$&4){Ee(je)}else{$.raf(je)}}}};var xe=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){de(r)}}e.length=0};var Ce=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){de(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var je=function(){{o++}xe(be);{var e=($.$flags$&6)===2?performance.now()+14*Math.ceil(o*(1/10)):Infinity;Ce(_e,e);Ce(Se,e);if(_e.length>0){Se.push.apply(Se,_e);_e.length=0}if(l=be.length+_e.length+Se.length>0){$.raf(je)}else{o=0}}};var Ee=function(e){return h().then(e)};var Ne=Re(_e,true);var Me=e("a",(function(){if(!(u&&u.supports&&u.supports("color","var(--c)"))){return t.import("./p-30aa659f.system.js").then((function(){if($.$cssShim$=f.__cssshim){return $.$cssShim$.i()}else{return 0}}))}return h()}));var Le=e("p",(function(){{$.$cssShim$=f.__cssshim}var e=Array.from(c.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var r=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{r.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,f.location.href)).href;{Ue(r.resourcesUrl,e)}if(!f.customElements){return t.import("./p-efeafda7.system.js").then((function(){return r}))}}return h(r)}));var Ue=function(e,t){var r=j(n);try{f[r]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;f[r]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=c.createElement("script");o.type="module";o.crossOrigin=t.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+r+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(f[r].m);o.remove()}}));a.set(i,s);c.head.appendChild(o)}return s}}}}}}));