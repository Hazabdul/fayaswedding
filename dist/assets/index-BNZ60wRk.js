(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function F1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ig={exports:{}},au={},og={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs=Symbol.for("react.element"),I1=Symbol.for("react.portal"),B1=Symbol.for("react.fragment"),U1=Symbol.for("react.strict_mode"),$1=Symbol.for("react.profiler"),W1=Symbol.for("react.provider"),V1=Symbol.for("react.context"),H1=Symbol.for("react.forward_ref"),Y1=Symbol.for("react.suspense"),X1=Symbol.for("react.memo"),G1=Symbol.for("react.lazy"),lp=Symbol.iterator;function Q1(t){return t===null||typeof t!="object"?null:(t=lp&&t[lp]||t["@@iterator"],typeof t=="function"?t:null)}var lg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sg=Object.assign,ag={};function Ko(t,e,r){this.props=t,this.context=e,this.refs=ag,this.updater=r||lg}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ug(){}ug.prototype=Ko.prototype;function If(t,e,r){this.props=t,this.context=e,this.refs=ag,this.updater=r||lg}var Bf=If.prototype=new ug;Bf.constructor=If;sg(Bf,Ko.prototype);Bf.isPureReactComponent=!0;var sp=Array.isArray,cg=Object.prototype.hasOwnProperty,Uf={current:null},fg={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,r){var n,i={},o=null,l=null;if(e!=null)for(n in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)cg.call(e,n)&&!fg.hasOwnProperty(n)&&(i[n]=e[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(n in s=t.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:xs,type:t,key:o,ref:l,props:i,_owner:Uf.current}}function K1(t,e){return{$$typeof:xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $f(t){return typeof t=="object"&&t!==null&&t.$$typeof===xs}function q1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var ap=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q1(""+t.key):e.toString(36)}function la(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case xs:case I1:l=!0}}if(l)return l=t,i=i(l),t=n===""?"."+Pu(l,0):n,sp(i)?(r="",t!=null&&(r=t.replace(ap,"$&/")+"/"),la(i,e,r,"",function(u){return u})):i!=null&&($f(i)&&(i=K1(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ap,"$&/")+"/")+t)),e.push(i)),1;if(l=0,n=n===""?".":n+":",sp(t))for(var s=0;s<t.length;s++){o=t[s];var a=n+Pu(o,s);l+=la(o,e,r,a,i)}else if(a=Q1(t),typeof a=="function")for(t=a.call(t),s=0;!(o=t.next()).done;)o=o.value,a=n+Pu(o,s++),l+=la(o,e,r,a,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Ps(t,e,r){if(t==null)return t;var n=[],i=0;return la(t,n,"","",function(o){return e.call(r,o,i++)}),n}function Z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},sa={transition:null},J1={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:sa,ReactCurrentOwner:Uf};function pg(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:Ps,forEach:function(t,e,r){Ps(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ps(t,function(){e++}),e},toArray:function(t){return Ps(t,function(e){return e})||[]},only:function(t){if(!$f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=Ko;fe.Fragment=B1;fe.Profiler=$1;fe.PureComponent=If;fe.StrictMode=U1;fe.Suspense=Y1;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;fe.act=pg;fe.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=sg({},t.props),i=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=Uf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(a in e)cg.call(e,a)&&!fg.hasOwnProperty(a)&&(n[a]=e[a]===void 0&&s!==void 0?s[a]:e[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:xs,type:t.type,key:i,ref:o,props:n,_owner:l}};fe.createContext=function(t){return t={$$typeof:V1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:W1,_context:t},t.Consumer=t};fe.createElement=dg;fe.createFactory=function(t){var e=dg.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:H1,render:t}};fe.isValidElement=$f;fe.lazy=function(t){return{$$typeof:G1,_payload:{_status:-1,_result:t},_init:Z1}};fe.memo=function(t,e){return{$$typeof:X1,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=sa.transition;sa.transition={};try{t()}finally{sa.transition=e}};fe.unstable_act=pg;fe.useCallback=function(t,e){return Ut.current.useCallback(t,e)};fe.useContext=function(t){return Ut.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Ut.current.useEffect(t,e)};fe.useId=function(){return Ut.current.useId()};fe.useImperativeHandle=function(t,e,r){return Ut.current.useImperativeHandle(t,e,r)};fe.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Ut.current.useMemo(t,e)};fe.useReducer=function(t,e,r){return Ut.current.useReducer(t,e,r)};fe.useRef=function(t){return Ut.current.useRef(t)};fe.useState=function(t){return Ut.current.useState(t)};fe.useSyncExternalStore=function(t,e,r){return Ut.current.useSyncExternalStore(t,e,r)};fe.useTransition=function(){return Ut.current.useTransition()};fe.version="18.3.1";og.exports=fe;var ce=og.exports;const ev=F1(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv=ce,rv=Symbol.for("react.element"),nv=Symbol.for("react.fragment"),iv=Object.prototype.hasOwnProperty,ov=tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lv={key:!0,ref:!0,__self:!0,__source:!0};function hg(t,e,r){var n,i={},o=null,l=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)iv.call(e,n)&&!lv.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:rv,type:t,key:o,ref:l,props:i,_owner:ov.current}}au.Fragment=nv;au.jsx=hg;au.jsxs=hg;ig.exports=au;var d=ig.exports,wc={},gg={exports:{}},_r={},mg={exports:{}},vg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,F){var k=j.length;j.push(F);e:for(;0<k;){var V=k-1>>>1,de=j[V];if(0<i(de,F))j[V]=F,j[k]=de,k=V;else break e}}function r(j){return j.length===0?null:j[0]}function n(j){if(j.length===0)return null;var F=j[0],k=j.pop();if(k!==F){j[0]=k;e:for(var V=0,de=j.length,R=de>>>1;V<R;){var D=2*(V+1)-1,te=j[D],Y=D+1,W=j[Y];if(0>i(te,k))Y<de&&0>i(W,te)?(j[V]=W,j[Y]=k,V=Y):(j[V]=te,j[D]=k,V=D);else if(Y<de&&0>i(W,k))j[V]=W,j[Y]=k,V=Y;else break e}}return F}function i(j,F){var k=j.sortIndex-F.sortIndex;return k!==0?k:j.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var a=[],u=[],c=1,h=null,f=3,p=!1,_=!1,m=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(j){for(var F=r(u);F!==null;){if(F.callback===null)n(u);else if(F.startTime<=j)n(u),F.sortIndex=F.expirationTime,e(a,F);else break;F=r(u)}}function w(j){if(m=!1,y(j),!_)if(r(a)!==null)_=!0,J(C);else{var F=r(u);F!==null&&U(w,F.startTime-j)}}function C(j,F){_=!1,m&&(m=!1,v(x),x=-1),p=!0;var k=f;try{for(y(F),h=r(a);h!==null&&(!(h.expirationTime>F)||j&&!$());){var V=h.callback;if(typeof V=="function"){h.callback=null,f=h.priorityLevel;var de=V(h.expirationTime<=F);F=t.unstable_now(),typeof de=="function"?h.callback=de:h===r(a)&&n(a),y(F)}else n(a);h=r(a)}if(h!==null)var R=!0;else{var D=r(u);D!==null&&U(w,D.startTime-F),R=!1}return R}finally{h=null,f=k,p=!1}}var E=!1,T=null,x=-1,P=5,b=-1;function $(){return!(t.unstable_now()-b<P)}function O(){if(T!==null){var j=t.unstable_now();b=j;var F=!0;try{F=T(!0,j)}finally{F?Z():(E=!1,T=null)}}else E=!1}var Z;if(typeof g=="function")Z=function(){g(O)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,oe=G.port2;G.port1.onmessage=O,Z=function(){oe.postMessage(null)}}else Z=function(){S(O,0)};function J(j){T=j,E||(E=!0,Z())}function U(j,F){x=S(function(){j(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,J(C))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(a)},t.unstable_next=function(j){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var k=f;f=F;try{return j()}finally{f=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,F){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var k=f;f=j;try{return F()}finally{f=k}},t.unstable_scheduleCallback=function(j,F,k){var V=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?V+k:V):k=V,j){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=k+de,j={id:c++,callback:F,priorityLevel:j,startTime:k,expirationTime:de,sortIndex:-1},k>V?(j.sortIndex=k,e(u,j),r(a)===null&&j===r(u)&&(m?(v(x),x=-1):m=!0,U(w,k-V))):(j.sortIndex=de,e(a,j),_||p||(_=!0,J(C))),j},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(j){var F=f;return function(){var k=f;f=F;try{return j.apply(this,arguments)}finally{f=k}}}})(vg);mg.exports=vg;var sv=mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=ce,mr=sv;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yg=new Set,Xl={};function Gi(t,e){Ao(t,e),Ao(t+"Capture",e)}function Ao(t,e){for(Xl[t]=e,t=0;t<e.length;t++)yg.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=Object.prototype.hasOwnProperty,uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},cp={};function cv(t){return kc.call(cp,t)?!0:kc.call(up,t)?!1:uv.test(t)?cp[t]=!0:(up[t]=!0,!1)}function fv(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dv(t,e,r,n){if(e===null||typeof e>"u"||fv(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,r,n,i,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function Vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,Vf);xt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,Vf);xt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,Vf);xt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hf(t,e,r,n){var i=xt.hasOwnProperty(e)?xt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dv(e,r,i,n)&&(r=null),n||i===null?cv(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var zn=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),ao=Symbol.for("react.portal"),uo=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),xg=Symbol.for("react.context"),Xf=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),Gf=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),wg=Symbol.for("react.offscreen"),fp=Symbol.iterator;function nl(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,ju;function gl(t){if(ju===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||""}return`
`+ju+t}var zu=!1;function Mu(t,e){if(!t||zu)return"";zu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=l&&0<=s);break}}}finally{zu=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?gl(t):""}function pv(t){switch(t.tag){case 5:return gl(t.type);case 16:return gl("Lazy");case 13:return gl("Suspense");case 19:return gl("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function Nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case uo:return"Fragment";case ao:return"Portal";case Sc:return"Profiler";case Yf:return"StrictMode";case Tc:return"Suspense";case Cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xg:return(t.displayName||"Context")+".Consumer";case _g:return(t._context.displayName||"Context")+".Provider";case Xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gf:return e=t.displayName||null,e!==null?e:Nc(t.type)||"Memo";case An:e=t._payload,t=t._init;try{return Nc(t(e))}catch{}}return null}function hv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nc(e);case 8:return e===Yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gv(t){var e=kg(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zs(t){t._valueTracker||(t._valueTracker=gv(t))}function Sg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=kg(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bc(t,e){var r=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function dp(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=oi(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tg(t,e){e=e.checked,e!=null&&Hf(t,"checked",e,!1)}function Ec(t,e){Tg(t,e);var r=oi(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pc(t,e.type,r):e.hasOwnProperty("defaultValue")&&Pc(t,e.type,oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pp(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Pc(t,e,r){(e!=="number"||ba(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var ml=Array.isArray;function To(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+oi(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hp(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(z(92));if(ml(r)){if(1<r.length)throw Error(z(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:oi(r)}}function Cg(t,e){var r=oi(e.value),n=oi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ng(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ng(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ms,bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ms.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gl(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mv=["Webkit","ms","Moz","O"];Object.keys(Nl).forEach(function(t){mv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Nl[e]=Nl[t]})});function Eg(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Nl.hasOwnProperty(t)&&Nl[t]?(""+e).trim():e+"px"}function Pg(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Eg(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var vv=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mc(t,e){if(e){if(vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oc=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dc=null,Co=null,No=null;function mp(t){if(t=Ss(t)){if(typeof Dc!="function")throw Error(z(280));var e=t.stateNode;e&&(e=pu(e),Dc(t.stateNode,t.type,e))}}function jg(t){Co?No?No.push(t):No=[t]:Co=t}function zg(){if(Co){var t=Co,e=No;if(No=Co=null,mp(t),e)for(t=0;t<e.length;t++)mp(e[t])}}function Mg(t,e){return t(e)}function Rg(){}var Ru=!1;function Og(t,e,r){if(Ru)return t(e,r);Ru=!0;try{return Mg(t,e,r)}finally{Ru=!1,(Co!==null||No!==null)&&(Rg(),zg())}}function Ql(t,e){var r=t.stateNode;if(r===null)return null;var n=pu(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(z(231,e,typeof r));return r}var Lc=!1;if(Cn)try{var il={};Object.defineProperty(il,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{Lc=!1}function yv(t,e,r,n,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(c){this.onError(c)}}var bl=!1,Ea=null,Pa=!1,Ac=null,_v={onError:function(t){bl=!0,Ea=t}};function xv(t,e,r,n,i,o,l,s,a){bl=!1,Ea=null,yv.apply(_v,arguments)}function wv(t,e,r,n,i,o,l,s,a){if(xv.apply(this,arguments),bl){if(bl){var u=Ea;bl=!1,Ea=null}else throw Error(z(198));Pa||(Pa=!0,Ac=u)}}function Qi(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vp(t){if(Qi(t)!==t)throw Error(z(188))}function kv(t){var e=t.alternate;if(!e){if(e=Qi(t),e===null)throw Error(z(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return vp(i),t;if(o===n)return vp(i),e;o=o.sibling}throw Error(z(188))}if(r.return!==n.return)r=i,n=o;else{for(var l=!1,s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l)throw Error(z(189))}}if(r.alternate!==n)throw Error(z(190))}if(r.tag!==3)throw Error(z(188));return r.stateNode.current===r?t:e}function Lg(t){return t=kv(t),t!==null?Ag(t):null}function Ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ag(t);if(e!==null)return e;t=t.sibling}return null}var Fg=mr.unstable_scheduleCallback,yp=mr.unstable_cancelCallback,Sv=mr.unstable_shouldYield,Tv=mr.unstable_requestPaint,Ge=mr.unstable_now,Cv=mr.unstable_getCurrentPriorityLevel,Kf=mr.unstable_ImmediatePriority,Ig=mr.unstable_UserBlockingPriority,ja=mr.unstable_NormalPriority,Nv=mr.unstable_LowPriority,Bg=mr.unstable_IdlePriority,uu=null,sn=null;function bv(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var Hr=Math.clz32?Math.clz32:jv,Ev=Math.log,Pv=Math.LN2;function jv(t){return t>>>=0,t===0?32:31-(Ev(t)/Pv|0)|0}var Rs=64,Os=4194304;function vl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function za(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,l=r&268435455;if(l!==0){var s=l&~i;s!==0?n=vl(s):(o&=l,o!==0&&(n=vl(o)))}else l=r&~i,l!==0?n=vl(l):o!==0&&(n=vl(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-Hr(e),i=1<<r,n|=t[r],e&=~i;return n}function zv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mv(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-Hr(o),s=1<<l,a=i[l];a===-1?(!(s&r)||s&n)&&(i[l]=zv(s,e)):a<=e&&(t.expiredLanes|=s),o&=~s}}function Fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ug(){var t=Rs;return Rs<<=1,!(Rs&4194240)&&(Rs=64),t}function Ou(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function ws(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hr(e),t[e]=r}function Rv(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-Hr(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function qf(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-Hr(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var ke=0;function $g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wg,Zf,Vg,Hg,Yg,Ic=!1,Ds=[],Gn=null,Qn=null,Kn=null,Kl=new Map,ql=new Map,In=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _p(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":Kl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(e.pointerId)}}function ol(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ss(e),e!==null&&Zf(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Dv(t,e,r,n,i){switch(e){case"focusin":return Gn=ol(Gn,t,e,r,n,i),!0;case"dragenter":return Qn=ol(Qn,t,e,r,n,i),!0;case"mouseover":return Kn=ol(Kn,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return Kl.set(o,ol(Kl.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,ql.set(o,ol(ql.get(o)||null,t,e,r,n,i)),!0}return!1}function Xg(t){var e=Ni(t.target);if(e!==null){var r=Qi(e);if(r!==null){if(e=r.tag,e===13){if(e=Dg(r),e!==null){t.blockedOn=e,Yg(t.priority,function(){Vg(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Bc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Oc=n,r.target.dispatchEvent(n),Oc=null}else return e=Ss(r),e!==null&&Zf(e),t.blockedOn=r,!1;e.shift()}return!0}function xp(t,e,r){aa(t)&&r.delete(e)}function Lv(){Ic=!1,Gn!==null&&aa(Gn)&&(Gn=null),Qn!==null&&aa(Qn)&&(Qn=null),Kn!==null&&aa(Kn)&&(Kn=null),Kl.forEach(xp),ql.forEach(xp)}function ll(t,e){t.blockedOn===e&&(t.blockedOn=null,Ic||(Ic=!0,mr.unstable_scheduleCallback(mr.unstable_NormalPriority,Lv)))}function Zl(t){function e(i){return ll(i,t)}if(0<Ds.length){ll(Ds[0],t);for(var r=1;r<Ds.length;r++){var n=Ds[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Gn!==null&&ll(Gn,t),Qn!==null&&ll(Qn,t),Kn!==null&&ll(Kn,t),Kl.forEach(e),ql.forEach(e),r=0;r<In.length;r++)n=In[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<In.length&&(r=In[0],r.blockedOn===null);)Xg(r),r.blockedOn===null&&In.shift()}var bo=zn.ReactCurrentBatchConfig,Ma=!0;function Av(t,e,r,n){var i=ke,o=bo.transition;bo.transition=null;try{ke=1,Jf(t,e,r,n)}finally{ke=i,bo.transition=o}}function Fv(t,e,r,n){var i=ke,o=bo.transition;bo.transition=null;try{ke=4,Jf(t,e,r,n)}finally{ke=i,bo.transition=o}}function Jf(t,e,r,n){if(Ma){var i=Bc(t,e,r,n);if(i===null)Vu(t,e,n,Ra,r),_p(t,n);else if(Dv(i,t,e,r,n))n.stopPropagation();else if(_p(t,n),e&4&&-1<Ov.indexOf(t)){for(;i!==null;){var o=Ss(i);if(o!==null&&Wg(o),o=Bc(t,e,r,n),o===null&&Vu(t,e,n,Ra,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Vu(t,e,n,null,r)}}var Ra=null;function Bc(t,e,r,n){if(Ra=null,t=Qf(n),t=Ni(t),t!==null)if(e=Qi(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Dg(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ra=t,null}function Gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cv()){case Kf:return 1;case Ig:return 4;case ja:case Nv:return 16;case Bg:return 536870912;default:return 16}default:return 16}}var Un=null,ed=null,ua=null;function Qg(){if(ua)return ua;var t,e=ed,r=e.length,n,i="value"in Un?Un.value:Un.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var l=r-t;for(n=1;n<=l&&e[r-n]===i[o-n];n++);return ua=i.slice(t,1<n?1-n:void 0)}function ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ls(){return!0}function wp(){return!1}function xr(t){function e(r,n,i,o,l){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ls:wp,this.isPropagationStopped=wp,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=xr(qo),ks=Ie({},qo,{view:0,detail:0}),Iv=xr(ks),Du,Lu,sl,cu=Ie({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sl&&(sl&&t.type==="mousemove"?(Du=t.screenX-sl.screenX,Lu=t.screenY-sl.screenY):Lu=Du=0,sl=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),kp=xr(cu),Bv=Ie({},cu,{dataTransfer:0}),Uv=xr(Bv),$v=Ie({},ks,{relatedTarget:0}),Au=xr($v),Wv=Ie({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=xr(Wv),Hv=Ie({},qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=xr(Hv),Xv=Ie({},qo,{data:0}),Sp=xr(Xv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Kv[t])?!!e[t]:!1}function rd(){return qv}var Zv=Ie({},ks,{key:function(t){if(t.key){var e=Gv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(t){return t.type==="keypress"?ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jv=xr(Zv),ey=Ie({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=xr(ey),ty=Ie({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),ry=xr(ty),ny=Ie({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=xr(ny),oy=Ie({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=xr(oy),sy=[9,13,27,32],nd=Cn&&"CompositionEvent"in window,El=null;Cn&&"documentMode"in document&&(El=document.documentMode);var ay=Cn&&"TextEvent"in window&&!El,Kg=Cn&&(!nd||El&&8<El&&11>=El),Cp=" ",Np=!1;function qg(t,e){switch(t){case"keyup":return sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var co=!1;function uy(t,e){switch(t){case"compositionend":return Zg(e);case"keypress":return e.which!==32?null:(Np=!0,Cp);case"textInput":return t=e.data,t===Cp&&Np?null:t;default:return null}}function cy(t,e){if(co)return t==="compositionend"||!nd&&qg(t,e)?(t=Qg(),ua=ed=Un=null,co=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kg&&e.locale!=="ko"?null:e.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fy[t.type]:e==="textarea"}function Jg(t,e,r,n){jg(n),e=Oa(e,"onChange"),0<e.length&&(r=new td("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Pl=null,Jl=null;function dy(t){cm(t,0)}function fu(t){var e=ho(t);if(Sg(e))return t}function py(t,e){if(t==="change")return e}var em=!1;if(Cn){var Fu;if(Cn){var Iu="oninput"in document;if(!Iu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),Iu=typeof Ep.oninput=="function"}Fu=Iu}else Fu=!1;em=Fu&&(!document.documentMode||9<document.documentMode)}function Pp(){Pl&&(Pl.detachEvent("onpropertychange",tm),Jl=Pl=null)}function tm(t){if(t.propertyName==="value"&&fu(Jl)){var e=[];Jg(e,Jl,t,Qf(t)),Og(dy,e)}}function hy(t,e,r){t==="focusin"?(Pp(),Pl=e,Jl=r,Pl.attachEvent("onpropertychange",tm)):t==="focusout"&&Pp()}function gy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(Jl)}function my(t,e){if(t==="click")return fu(e)}function vy(t,e){if(t==="input"||t==="change")return fu(e)}function yy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xr=typeof Object.is=="function"?Object.is:yy;function es(t,e){if(Xr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!kc.call(e,i)||!Xr(t[i],e[i]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var r=jp(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=jp(r)}}function rm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nm(){for(var t=window,e=ba();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=ba(t.document)}return e}function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _y(t){var e=nm(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&rm(r.ownerDocument.documentElement,r)){if(n!==null&&id(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=zp(r,o);var l=zp(r,n);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xy=Cn&&"documentMode"in document&&11>=document.documentMode,fo=null,Uc=null,jl=null,$c=!1;function Mp(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$c||fo==null||fo!==ba(n)||(n=fo,"selectionStart"in n&&id(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),jl&&es(jl,n)||(jl=n,n=Oa(Uc,"onSelect"),0<n.length&&(e=new td("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=fo)))}function As(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var po={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionend:As("Transition","TransitionEnd")},Bu={},im={};Cn&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function du(t){if(Bu[t])return Bu[t];if(!po[t])return t;var e=po[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in im)return Bu[t]=e[r];return t}var om=du("animationend"),lm=du("animationiteration"),sm=du("animationstart"),am=du("transitionend"),um=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(t,e){um.set(t,e),Gi(e,[t])}for(var Uu=0;Uu<Rp.length;Uu++){var $u=Rp[Uu],wy=$u.toLowerCase(),ky=$u[0].toUpperCase()+$u.slice(1);fi(wy,"on"+ky)}fi(om,"onAnimationEnd");fi(lm,"onAnimationIteration");fi(sm,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(am,"onTransitionEnd");Ao("onMouseEnter",["mouseout","mouseover"]);Ao("onMouseLeave",["mouseout","mouseover"]);Ao("onPointerEnter",["pointerout","pointerover"]);Ao("onPointerLeave",["pointerout","pointerover"]);Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(yl));function Op(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,wv(n,e,void 0,t),t.currentTarget=null}function cm(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var l=n.length-1;0<=l;l--){var s=n[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Op(i,s,u),o=a}else for(l=0;l<n.length;l++){if(s=n[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Op(i,s,u),o=a}}}if(Pa)throw t=Ac,Pa=!1,Ac=null,t}function be(t,e){var r=e[Xc];r===void 0&&(r=e[Xc]=new Set);var n=t+"__bubble";r.has(n)||(fm(e,t,2,!1),r.add(n))}function Wu(t,e,r){var n=0;e&&(n|=4),fm(r,t,n,e)}var Fs="_reactListening"+Math.random().toString(36).slice(2);function ts(t){if(!t[Fs]){t[Fs]=!0,yg.forEach(function(r){r!=="selectionchange"&&(Sy.has(r)||Wu(r,!1,t),Wu(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fs]||(e[Fs]=!0,Wu("selectionchange",!1,e))}}function fm(t,e,r,n){switch(Gg(e)){case 1:var i=Av;break;case 4:i=Fv;break;default:i=Jf}r=i.bind(null,e,r,t),i=void 0,!Lc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Vu(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Ni(s),l===null)return;if(a=l.tag,a===5||a===6){n=o=l;continue e}s=s.parentNode}}n=n.return}Og(function(){var u=o,c=Qf(r),h=[];e:{var f=um.get(t);if(f!==void 0){var p=td,_=t;switch(t){case"keypress":if(ca(r)===0)break e;case"keydown":case"keyup":p=Jv;break;case"focusin":_="focus",p=Au;break;case"focusout":_="blur",p=Au;break;case"beforeblur":case"afterblur":p=Au;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ry;break;case om:case lm:case sm:p=Vv;break;case am:p=iy;break;case"scroll":p=Iv;break;case"wheel":p=ly;break;case"copy":case"cut":case"paste":p=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Tp}var m=(e&4)!==0,S=!m&&t==="scroll",v=m?f!==null?f+"Capture":null:f;m=[];for(var g=u,y;g!==null;){y=g;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,v!==null&&(w=Ql(g,v),w!=null&&m.push(rs(g,w,y)))),S)break;g=g.return}0<m.length&&(f=new p(f,_,null,r,c),h.push({event:f,listeners:m}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&r!==Oc&&(_=r.relatedTarget||r.fromElement)&&(Ni(_)||_[Nn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=r.relatedTarget||r.toElement,p=u,_=_?Ni(_):null,_!==null&&(S=Qi(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=kp,w="onMouseLeave",v="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(m=Tp,w="onPointerLeave",v="onPointerEnter",g="pointer"),S=p==null?f:ho(p),y=_==null?f:ho(_),f=new m(w,g+"leave",p,r,c),f.target=S,f.relatedTarget=y,w=null,Ni(c)===u&&(m=new m(v,g+"enter",_,r,c),m.target=y,m.relatedTarget=S,w=m),S=w,p&&_)t:{for(m=p,v=_,g=0,y=m;y;y=eo(y))g++;for(y=0,w=v;w;w=eo(w))y++;for(;0<g-y;)m=eo(m),g--;for(;0<y-g;)v=eo(v),y--;for(;g--;){if(m===v||v!==null&&m===v.alternate)break t;m=eo(m),v=eo(v)}m=null}else m=null;p!==null&&Dp(h,f,p,m,!1),_!==null&&S!==null&&Dp(h,S,_,m,!0)}}e:{if(f=u?ho(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=py;else if(bp(f))if(em)C=vy;else{C=gy;var E=hy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=my);if(C&&(C=C(t,u))){Jg(h,C,r,c);break e}E&&E(t,f,u),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Pc(f,"number",f.value)}switch(E=u?ho(u):window,t){case"focusin":(bp(E)||E.contentEditable==="true")&&(fo=E,Uc=u,jl=null);break;case"focusout":jl=Uc=fo=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Mp(h,r,c);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":Mp(h,r,c)}var T;if(nd)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else co?qg(t,r)&&(x="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(x="onCompositionStart");x&&(Kg&&r.locale!=="ko"&&(co||x!=="onCompositionStart"?x==="onCompositionEnd"&&co&&(T=Qg()):(Un=c,ed="value"in Un?Un.value:Un.textContent,co=!0)),E=Oa(u,x),0<E.length&&(x=new Sp(x,t,null,r,c),h.push({event:x,listeners:E}),T?x.data=T:(T=Zg(r),T!==null&&(x.data=T)))),(T=ay?uy(t,r):cy(t,r))&&(u=Oa(u,"onBeforeInput"),0<u.length&&(c=new Sp("onBeforeInput","beforeinput",null,r,c),h.push({event:c,listeners:u}),c.data=T))}cm(h,e)})}function rs(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Oa(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ql(t,r),o!=null&&n.unshift(rs(t,o,i)),o=Ql(t,e),o!=null&&n.push(rs(t,o,i))),t=t.return}return n}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,r,n,i){for(var o=e._reactName,l=[];r!==null&&r!==n;){var s=r,a=s.alternate,u=s.stateNode;if(a!==null&&a===n)break;s.tag===5&&u!==null&&(s=u,i?(a=Ql(r,o),a!=null&&l.unshift(rs(r,a,s))):i||(a=Ql(r,o),a!=null&&l.push(rs(r,a,s)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var Ty=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function Lp(t){return(typeof t=="string"?t:""+t).replace(Ty,`
`).replace(Cy,"")}function Is(t,e,r){if(e=Lp(e),Lp(t)!==e&&r)throw Error(z(425))}function Da(){}var Wc=null,Vc=null;function Hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(t){return Ap.resolve(null).then(t).catch(Ey)}:Yc;function Ey(t){setTimeout(function(){throw t})}function Hu(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Zl(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Zl(e)}function qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),rn="__reactFiber$"+Zo,ns="__reactProps$"+Zo,Nn="__reactContainer$"+Zo,Xc="__reactEvents$"+Zo,Py="__reactListeners$"+Zo,jy="__reactHandles$"+Zo;function Ni(t){var e=t[rn];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Nn]||r[rn]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Fp(t);t!==null;){if(r=t[rn])return r;t=Fp(t)}return e}t=r,r=t.parentNode}return null}function Ss(t){return t=t[rn]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ho(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function pu(t){return t[ns]||null}var Gc=[],go=-1;function di(t){return{current:t}}function Ee(t){0>go||(t.current=Gc[go],Gc[go]=null,go--)}function Ne(t,e){go++,Gc[go]=t.current,t.current=e}var li={},Mt=di(li),Gt=di(!1),Bi=li;function Fo(t,e){var r=t.type.contextTypes;if(!r)return li;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(t){return t=t.childContextTypes,t!=null}function La(){Ee(Gt),Ee(Mt)}function Ip(t,e,r){if(Mt.current!==li)throw Error(z(168));Ne(Mt,e),Ne(Gt,r)}function dm(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(z(108,hv(t)||"Unknown",i));return Ie({},r,n)}function Aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||li,Bi=Mt.current,Ne(Mt,t),Ne(Gt,Gt.current),!0}function Bp(t,e,r){var n=t.stateNode;if(!n)throw Error(z(169));r?(t=dm(t,e,Bi),n.__reactInternalMemoizedMergedChildContext=t,Ee(Gt),Ee(Mt),Ne(Mt,t)):Ee(Gt),Ne(Gt,r)}var vn=null,hu=!1,Yu=!1;function pm(t){vn===null?vn=[t]:vn.push(t)}function zy(t){hu=!0,pm(t)}function pi(){if(!Yu&&vn!==null){Yu=!0;var t=0,e=ke;try{var r=vn;for(ke=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}vn=null,hu=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),Fg(Kf,pi),i}finally{ke=e,Yu=!1}}return null}var mo=[],vo=0,Fa=null,Ia=0,Sr=[],Tr=0,Ui=null,xn=1,wn="";function wi(t,e){mo[vo++]=Ia,mo[vo++]=Fa,Fa=t,Ia=e}function hm(t,e,r){Sr[Tr++]=xn,Sr[Tr++]=wn,Sr[Tr++]=Ui,Ui=t;var n=xn;t=wn;var i=32-Hr(n)-1;n&=~(1<<i),r+=1;var o=32-Hr(e)+i;if(30<o){var l=i-i%5;o=(n&(1<<l)-1).toString(32),n>>=l,i-=l,xn=1<<32-Hr(e)+i|r<<i|n,wn=o+t}else xn=1<<o|r<<i|n,wn=t}function od(t){t.return!==null&&(wi(t,1),hm(t,1,0))}function ld(t){for(;t===Fa;)Fa=mo[--vo],mo[vo]=null,Ia=mo[--vo],mo[vo]=null;for(;t===Ui;)Ui=Sr[--Tr],Sr[Tr]=null,wn=Sr[--Tr],Sr[Tr]=null,xn=Sr[--Tr],Sr[Tr]=null}var hr=null,fr=null,ze=!1,Vr=null;function gm(t,e){var r=br(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Up(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hr=t,fr=qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hr=t,fr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Ui!==null?{id:xn,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=br(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,hr=t,fr=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kc(t){if(ze){var e=fr;if(e){var r=e;if(!Up(t,e)){if(Qc(t))throw Error(z(418));e=qn(r.nextSibling);var n=hr;e&&Up(t,e)?gm(n,r):(t.flags=t.flags&-4097|2,ze=!1,hr=t)}}else{if(Qc(t))throw Error(z(418));t.flags=t.flags&-4097|2,ze=!1,hr=t}}}function $p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hr=t}function Bs(t){if(t!==hr)return!1;if(!ze)return $p(t),ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hc(t.type,t.memoizedProps)),e&&(e=fr)){if(Qc(t))throw mm(),Error(z(418));for(;e;)gm(t,e),e=qn(e.nextSibling)}if($p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){fr=qn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}fr=null}}else fr=hr?qn(t.stateNode.nextSibling):null;return!0}function mm(){for(var t=fr;t;)t=qn(t.nextSibling)}function Io(){fr=hr=null,ze=!1}function sd(t){Vr===null?Vr=[t]:Vr.push(t)}var My=zn.ReactCurrentBatchConfig;function al(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(z(309));var n=r.stateNode}if(!n)throw Error(z(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(z(284));if(!r._owner)throw Error(z(290,t))}return t}function Us(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wp(t){var e=t._init;return e(t._payload)}function vm(t){function e(v,g){if(t){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function r(v,g){if(!t)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function n(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=ti(v,g),v.index=0,v.sibling=null,v}function o(v,g,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function l(v){return t&&v.alternate===null&&(v.flags|=2),v}function s(v,g,y,w){return g===null||g.tag!==6?(g=Ju(y,v.mode,w),g.return=v,g):(g=i(g,y),g.return=v,g)}function a(v,g,y,w){var C=y.type;return C===uo?c(v,g,y.props.children,w,y.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===An&&Wp(C)===g.type)?(w=i(g,y.props),w.ref=al(v,g,y),w.return=v,w):(w=va(y.type,y.key,y.props,null,v.mode,w),w.ref=al(v,g,y),w.return=v,w)}function u(v,g,y,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=ec(y,v.mode,w),g.return=v,g):(g=i(g,y.children||[]),g.return=v,g)}function c(v,g,y,w,C){return g===null||g.tag!==7?(g=Mi(y,v.mode,w,C),g.return=v,g):(g=i(g,y),g.return=v,g)}function h(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ju(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case js:return y=va(g.type,g.key,g.props,null,v.mode,y),y.ref=al(v,null,g),y.return=v,y;case ao:return g=ec(g,v.mode,y),g.return=v,g;case An:var w=g._init;return h(v,w(g._payload),y)}if(ml(g)||nl(g))return g=Mi(g,v.mode,y,null),g.return=v,g;Us(v,g)}return null}function f(v,g,y,w){var C=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return C!==null?null:s(v,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case js:return y.key===C?a(v,g,y,w):null;case ao:return y.key===C?u(v,g,y,w):null;case An:return C=y._init,f(v,g,C(y._payload),w)}if(ml(y)||nl(y))return C!==null?null:c(v,g,y,w,null);Us(v,y)}return null}function p(v,g,y,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(y)||null,s(g,v,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case js:return v=v.get(w.key===null?y:w.key)||null,a(g,v,w,C);case ao:return v=v.get(w.key===null?y:w.key)||null,u(g,v,w,C);case An:var E=w._init;return p(v,g,y,E(w._payload),C)}if(ml(w)||nl(w))return v=v.get(y)||null,c(g,v,w,C,null);Us(g,w)}return null}function _(v,g,y,w){for(var C=null,E=null,T=g,x=g=0,P=null;T!==null&&x<y.length;x++){T.index>x?(P=T,T=null):P=T.sibling;var b=f(v,T,y[x],w);if(b===null){T===null&&(T=P);break}t&&T&&b.alternate===null&&e(v,T),g=o(b,g,x),E===null?C=b:E.sibling=b,E=b,T=P}if(x===y.length)return r(v,T),ze&&wi(v,x),C;if(T===null){for(;x<y.length;x++)T=h(v,y[x],w),T!==null&&(g=o(T,g,x),E===null?C=T:E.sibling=T,E=T);return ze&&wi(v,x),C}for(T=n(v,T);x<y.length;x++)P=p(T,v,x,y[x],w),P!==null&&(t&&P.alternate!==null&&T.delete(P.key===null?x:P.key),g=o(P,g,x),E===null?C=P:E.sibling=P,E=P);return t&&T.forEach(function($){return e(v,$)}),ze&&wi(v,x),C}function m(v,g,y,w){var C=nl(y);if(typeof C!="function")throw Error(z(150));if(y=C.call(y),y==null)throw Error(z(151));for(var E=C=null,T=g,x=g=0,P=null,b=y.next();T!==null&&!b.done;x++,b=y.next()){T.index>x?(P=T,T=null):P=T.sibling;var $=f(v,T,b.value,w);if($===null){T===null&&(T=P);break}t&&T&&$.alternate===null&&e(v,T),g=o($,g,x),E===null?C=$:E.sibling=$,E=$,T=P}if(b.done)return r(v,T),ze&&wi(v,x),C;if(T===null){for(;!b.done;x++,b=y.next())b=h(v,b.value,w),b!==null&&(g=o(b,g,x),E===null?C=b:E.sibling=b,E=b);return ze&&wi(v,x),C}for(T=n(v,T);!b.done;x++,b=y.next())b=p(T,v,x,b.value,w),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?x:b.key),g=o(b,g,x),E===null?C=b:E.sibling=b,E=b);return t&&T.forEach(function(O){return e(v,O)}),ze&&wi(v,x),C}function S(v,g,y,w){if(typeof y=="object"&&y!==null&&y.type===uo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case js:e:{for(var C=y.key,E=g;E!==null;){if(E.key===C){if(C=y.type,C===uo){if(E.tag===7){r(v,E.sibling),g=i(E,y.props.children),g.return=v,v=g;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===An&&Wp(C)===E.type){r(v,E.sibling),g=i(E,y.props),g.ref=al(v,E,y),g.return=v,v=g;break e}r(v,E);break}else e(v,E);E=E.sibling}y.type===uo?(g=Mi(y.props.children,v.mode,w,y.key),g.return=v,v=g):(w=va(y.type,y.key,y.props,null,v.mode,w),w.ref=al(v,g,y),w.return=v,v=w)}return l(v);case ao:e:{for(E=y.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){r(v,g.sibling),g=i(g,y.children||[]),g.return=v,v=g;break e}else{r(v,g);break}else e(v,g);g=g.sibling}g=ec(y,v.mode,w),g.return=v,v=g}return l(v);case An:return E=y._init,S(v,g,E(y._payload),w)}if(ml(y))return _(v,g,y,w);if(nl(y))return m(v,g,y,w);Us(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(r(v,g.sibling),g=i(g,y),g.return=v,v=g):(r(v,g),g=Ju(y,v.mode,w),g.return=v,v=g),l(v)):r(v,g)}return S}var Bo=vm(!0),ym=vm(!1),Ba=di(null),Ua=null,yo=null,ad=null;function ud(){ad=yo=Ua=null}function cd(t){var e=Ba.current;Ee(Ba),t._currentValue=e}function qc(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Eo(t,e){Ua=t,ad=yo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function Mr(t){var e=t._currentValue;if(ad!==t)if(t={context:t,memoizedValue:e,next:null},yo===null){if(Ua===null)throw Error(z(308));yo=t,Ua.dependencies={lanes:0,firstContext:t}}else yo=yo.next=t;return e}var bi=null;function fd(t){bi===null?bi=[t]:bi.push(t)}function _m(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,fd(e)):(r.next=i.next,i.next=r),e.interleaved=r,bn(t,n)}function bn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Fn=!1;function dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,me&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,bn(t,r)}return i=n.interleaved,i===null?(e.next=e,fd(n)):(e.next=i.next,i.next=e),n.interleaved=e,bn(t,r)}function fa(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,qf(t,r)}}function Vp(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function $a(t,e,r,n){var i=t.updateQueue;Fn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==l&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;l=0,c=u=a=null,s=o;do{var f=s.lane,p=s.eventTime;if((n&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,m=s;switch(f=e,p=r,m.tag){case 1:if(_=m.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=Ie({},h,f);break e;case 2:Fn=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,a=h):c=c.next=p,l|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Wi|=l,t.lanes=l,t.memoizedState=h}}function Hp(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(z(191,i));i.call(n)}}}var Ts={},an=di(Ts),is=di(Ts),os=di(Ts);function Ei(t){if(t===Ts)throw Error(z(174));return t}function pd(t,e){switch(Ne(os,e),Ne(is,t),Ne(an,Ts),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zc(e,t)}Ee(an),Ne(an,e)}function Uo(){Ee(an),Ee(is),Ee(os)}function wm(t){Ei(os.current);var e=Ei(an.current),r=zc(e,t.type);e!==r&&(Ne(is,t),Ne(an,r))}function hd(t){is.current===t&&(Ee(an),Ee(is))}var De=di(0);function Wa(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function gd(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var da=zn.ReactCurrentDispatcher,Gu=zn.ReactCurrentBatchConfig,$i=0,Fe=null,nt=null,ft=null,Va=!1,zl=!1,ls=0,Ry=0;function Tt(){throw Error(z(321))}function md(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Xr(t[r],e[r]))return!1;return!0}function vd(t,e,r,n,i,o){if($i=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,da.current=t===null||t.memoizedState===null?Ay:Fy,t=r(n,i),zl){o=0;do{if(zl=!1,ls=0,25<=o)throw Error(z(301));o+=1,ft=nt=null,e.updateQueue=null,da.current=Iy,t=r(n,i)}while(zl)}if(da.current=Ha,e=nt!==null&&nt.next!==null,$i=0,ft=nt=Fe=null,Va=!1,e)throw Error(z(300));return t}function yd(){var t=ls!==0;return ls=0,t}function Jr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Fe.memoizedState=ft=t:ft=ft.next=t,ft}function Rr(){if(nt===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=ft===null?Fe.memoizedState:ft.next;if(e!==null)ft=e,nt=t;else{if(t===null)throw Error(z(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},ft===null?Fe.memoizedState=ft=t:ft=ft.next=t}return ft}function ss(t,e){return typeof e=="function"?e(t):e}function Qu(t){var e=Rr(),r=e.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=t;var n=nt,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=l=null,a=null,u=o;do{var c=u.lane;if(($i&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,l=n):a=a.next=h,Fe.lanes|=c,Wi|=c}u=u.next}while(u!==null&&u!==o);a===null?l=n:a.next=s,Xr(n,e.memoizedState)||(Xt=!0),e.memoizedState=n,e.baseState=l,e.baseQueue=a,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,Wi|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Ku(t){var e=Rr(),r=e.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do o=t(o,l.action),l=l.next;while(l!==i);Xr(o,e.memoizedState)||(Xt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function km(){}function Sm(t,e){var r=Fe,n=Rr(),i=e(),o=!Xr(n.memoizedState,i);if(o&&(n.memoizedState=i,Xt=!0),n=n.queue,_d(Nm.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||ft!==null&&ft.memoizedState.tag&1){if(r.flags|=2048,as(9,Cm.bind(null,r,n,i,e),void 0,null),dt===null)throw Error(z(349));$i&30||Tm(r,e,i)}return i}function Tm(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Cm(t,e,r,n){e.value=r,e.getSnapshot=n,bm(e)&&Em(t)}function Nm(t,e,r){return r(function(){bm(e)&&Em(t)})}function bm(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Xr(t,r)}catch{return!0}}function Em(t){var e=bn(t,1);e!==null&&Yr(e,t,1,-1)}function Yp(t){var e=Jr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:t},e.queue=t,t=t.dispatch=Ly.bind(null,Fe,t),[e.memoizedState,t]}function as(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function Pm(){return Rr().memoizedState}function pa(t,e,r,n){var i=Jr();Fe.flags|=t,i.memoizedState=as(1|e,r,void 0,n===void 0?null:n)}function gu(t,e,r,n){var i=Rr();n=n===void 0?null:n;var o=void 0;if(nt!==null){var l=nt.memoizedState;if(o=l.destroy,n!==null&&md(n,l.deps)){i.memoizedState=as(e,r,o,n);return}}Fe.flags|=t,i.memoizedState=as(1|e,r,o,n)}function Xp(t,e){return pa(8390656,8,t,e)}function _d(t,e){return gu(2048,8,t,e)}function jm(t,e){return gu(4,2,t,e)}function zm(t,e){return gu(4,4,t,e)}function Mm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rm(t,e,r){return r=r!=null?r.concat([t]):null,gu(4,4,Mm.bind(null,e,t),r)}function xd(){}function Om(t,e){var r=Rr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&md(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function Dm(t,e){var r=Rr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&md(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function Lm(t,e,r){return $i&21?(Xr(r,e)||(r=Ug(),Fe.lanes|=r,Wi|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=r)}function Oy(t,e){var r=ke;ke=r!==0&&4>r?r:4,t(!0);var n=Gu.transition;Gu.transition={};try{t(!1),e()}finally{ke=r,Gu.transition=n}}function Am(){return Rr().memoizedState}function Dy(t,e,r){var n=ei(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Fm(t))Im(e,r);else if(r=_m(t,e,r,n),r!==null){var i=Bt();Yr(r,t,n,i),Bm(r,e,n)}}function Ly(t,e,r){var n=ei(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Fm(t))Im(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,s=o(l,r);if(i.hasEagerState=!0,i.eagerState=s,Xr(s,l)){var a=e.interleaved;a===null?(i.next=i,fd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}r=_m(t,e,i,n),r!==null&&(i=Bt(),Yr(r,t,n,i),Bm(r,e,n))}}function Fm(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function Im(t,e){zl=Va=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Bm(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,qf(t,r)}}var Ha={readContext:Mr,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},Ay={readContext:Mr,useCallback:function(t,e){return Jr().memoizedState=[t,e===void 0?null:e],t},useContext:Mr,useEffect:Xp,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,pa(4194308,4,Mm.bind(null,e,t),r)},useLayoutEffect:function(t,e){return pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return pa(4,2,t,e)},useMemo:function(t,e){var r=Jr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=Jr();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=Dy.bind(null,Fe,t),[n.memoizedState,t]},useRef:function(t){var e=Jr();return t={current:t},e.memoizedState=t},useState:Yp,useDebugValue:xd,useDeferredValue:function(t){return Jr().memoizedState=t},useTransition:function(){var t=Yp(!1),e=t[0];return t=Oy.bind(null,t[1]),Jr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=Fe,i=Jr();if(ze){if(r===void 0)throw Error(z(407));r=r()}else{if(r=e(),dt===null)throw Error(z(349));$i&30||Tm(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,Xp(Nm.bind(null,n,o,t),[t]),n.flags|=2048,as(9,Cm.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=Jr(),e=dt.identifierPrefix;if(ze){var r=wn,n=xn;r=(n&~(1<<32-Hr(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=ls++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Ry++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fy={readContext:Mr,useCallback:Om,useContext:Mr,useEffect:_d,useImperativeHandle:Rm,useInsertionEffect:jm,useLayoutEffect:zm,useMemo:Dm,useReducer:Qu,useRef:Pm,useState:function(){return Qu(ss)},useDebugValue:xd,useDeferredValue:function(t){var e=Rr();return Lm(e,nt.memoizedState,t)},useTransition:function(){var t=Qu(ss)[0],e=Rr().memoizedState;return[t,e]},useMutableSource:km,useSyncExternalStore:Sm,useId:Am,unstable_isNewReconciler:!1},Iy={readContext:Mr,useCallback:Om,useContext:Mr,useEffect:_d,useImperativeHandle:Rm,useInsertionEffect:jm,useLayoutEffect:zm,useMemo:Dm,useReducer:Ku,useRef:Pm,useState:function(){return Ku(ss)},useDebugValue:xd,useDeferredValue:function(t){var e=Rr();return nt===null?e.memoizedState=t:Lm(e,nt.memoizedState,t)},useTransition:function(){var t=Ku(ss)[0],e=Rr().memoizedState;return[t,e]},useMutableSource:km,useSyncExternalStore:Sm,useId:Am,unstable_isNewReconciler:!1};function $r(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Zc(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Ie({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var mu={isMounted:function(t){return(t=t._reactInternals)?Qi(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Bt(),i=ei(t),o=Sn(n,i);o.payload=e,r!=null&&(o.callback=r),e=Zn(t,o,i),e!==null&&(Yr(e,t,i,n),fa(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Bt(),i=ei(t),o=Sn(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=Zn(t,o,i),e!==null&&(Yr(e,t,i,n),fa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Bt(),n=ei(t),i=Sn(r,n);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,n),e!==null&&(Yr(e,t,n,r),fa(e,t,n))}};function Gp(t,e,r,n,i,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,l):e.prototype&&e.prototype.isPureReactComponent?!es(r,n)||!es(i,o):!0}function Um(t,e,r){var n=!1,i=li,o=e.contextType;return typeof o=="object"&&o!==null?o=Mr(o):(i=Qt(e)?Bi:Mt.current,n=e.contextTypes,o=(n=n!=null)?Fo(t,i):li),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mu,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Qp(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function Jc(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},dd(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Mr(o):(o=Qt(e)?Bi:Mt.current,i.context=Fo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Zc(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mu.enqueueReplaceState(i,i.state,null),$a(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $o(t,e){try{var r="",n=e;do r+=pv(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function qu(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function ef(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var By=typeof WeakMap=="function"?WeakMap:Map;function $m(t,e,r){r=Sn(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Xa||(Xa=!0,ff=n),ef(t,e)},r}function Wm(t,e,r){r=Sn(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){ef(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ef(t,e),typeof n!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Kp(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new By;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=e_.bind(null,t,e,r),e.then(t,t))}function qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zp(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Sn(-1,1),e.tag=2,Zn(r,e,1))),r.lanes|=1),t)}var Uy=zn.ReactCurrentOwner,Xt=!1;function Lt(t,e,r,n){e.child=t===null?ym(e,null,r,n):Bo(e,t.child,r,n)}function Jp(t,e,r,n,i){r=r.render;var o=e.ref;return Eo(e,i),n=vd(t,e,r,n,o,i),r=yd(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(ze&&r&&od(e),e.flags|=1,Lt(t,e,n,i),e.child)}function eh(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!Ed(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,Vm(t,e,o,n,i)):(t=va(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:es,r(l,n)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=ti(o,n),t.ref=e.ref,t.return=e,e.child=t}function Vm(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(es(o,n)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,En(t,e,i)}return tf(t,e,r,n,i)}function Hm(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(xo,or),or|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(xo,or),or|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,Ne(xo,or),or|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,Ne(xo,or),or|=n;return Lt(t,e,i,r),e.child}function Ym(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function tf(t,e,r,n,i){var o=Qt(r)?Bi:Mt.current;return o=Fo(e,o),Eo(e,i),r=vd(t,e,r,n,o,i),n=yd(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(ze&&n&&od(e),e.flags|=1,Lt(t,e,r,i),e.child)}function th(t,e,r,n,i){if(Qt(r)){var o=!0;Aa(e)}else o=!1;if(Eo(e,i),e.stateNode===null)ha(t,e),Um(e,r,n),Jc(e,r,n,i),n=!0;else if(t===null){var l=e.stateNode,s=e.memoizedProps;l.props=s;var a=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Mr(u):(u=Qt(r)?Bi:Mt.current,u=Fo(e,u));var c=r.getDerivedStateFromProps,h=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||a!==u)&&Qp(e,l,n,u),Fn=!1;var f=e.memoizedState;l.state=f,$a(e,n,l,i),a=e.memoizedState,s!==n||f!==a||Gt.current||Fn?(typeof c=="function"&&(Zc(e,r,c,n),a=e.memoizedState),(s=Fn||Gp(e,r,s,n,f,a,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=a),l.props=n,l.state=a,l.context=u,n=s):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,xm(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:$r(e.type,s),l.props=u,h=e.pendingProps,f=l.context,a=r.contextType,typeof a=="object"&&a!==null?a=Mr(a):(a=Qt(r)?Bi:Mt.current,a=Fo(e,a));var p=r.getDerivedStateFromProps;(c=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||f!==a)&&Qp(e,l,n,a),Fn=!1,f=e.memoizedState,l.state=f,$a(e,n,l,i);var _=e.memoizedState;s!==h||f!==_||Gt.current||Fn?(typeof p=="function"&&(Zc(e,r,p,n),_=e.memoizedState),(u=Fn||Gp(e,r,u,n,f,_,a)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,_,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,_,a)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=_),l.props=n,l.state=_,l.context=a,n=u):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return rf(t,e,r,n,o,i)}function rf(t,e,r,n,i,o){Ym(t,e);var l=(e.flags&128)!==0;if(!n&&!l)return i&&Bp(e,r,!1),En(t,e,o);n=e.stateNode,Uy.current=e;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&l?(e.child=Bo(e,t.child,null,o),e.child=Bo(e,null,s,o)):Lt(t,e,s,o),e.memoizedState=n.state,i&&Bp(e,r,!0),e.child}function Xm(t){var e=t.stateNode;e.pendingContext?Ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ip(t,e.context,!1),pd(t,e.containerInfo)}function rh(t,e,r,n,i){return Io(),sd(i),e.flags|=256,Lt(t,e,r,n),e.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gm(t,e,r){var n=e.pendingProps,i=De.current,o=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ne(De,i&1),t===null)return Kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=n.children,t=n.fallback,o?(n=e.mode,o=e.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=_u(l,n,0,null),t=Mi(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=of(r),e.memoizedState=nf,t):wd(e,l));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return $y(t,e,l,n,s,i,r);if(o){o=n.fallback,l=e.mode,i=t.child,s=i.sibling;var a={mode:"hidden",children:n.children};return!(l&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=ti(i,a),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=ti(s,o):(o=Mi(o,l,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,l=t.child.memoizedState,l=l===null?of(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~r,e.memoizedState=nf,n}return o=t.child,t=o.sibling,n=ti(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function wd(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $s(t,e,r,n){return n!==null&&sd(n),Bo(e,t.child,null,r),t=wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $y(t,e,r,n,i,o,l){if(r)return e.flags&256?(e.flags&=-257,n=qu(Error(z(422))),$s(t,e,l,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=_u({mode:"visible",children:n.children},i,0,null),o=Mi(o,i,l,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&Bo(e,t.child,null,l),e.child.memoizedState=of(l),e.memoizedState=nf,o);if(!(e.mode&1))return $s(t,e,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(z(419)),n=qu(o,n,void 0),$s(t,e,l,n)}if(s=(l&t.childLanes)!==0,Xt||s){if(n=dt,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bn(t,i),Yr(n,t,i,-1))}return bd(),n=qu(Error(z(421))),$s(t,e,l,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=t_.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,fr=qn(i.nextSibling),hr=e,ze=!0,Vr=null,t!==null&&(Sr[Tr++]=xn,Sr[Tr++]=wn,Sr[Tr++]=Ui,xn=t.id,wn=t.overflow,Ui=e),e=wd(e,n.children),e.flags|=4096,e)}function nh(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),qc(t.return,e,r)}function Zu(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Qm(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(Lt(t,e,n.children,r),n=De.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nh(t,r,e);else if(t.tag===19)nh(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Ne(De,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Wa(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Zu(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wa(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Zu(e,!0,r,null,o);break;case"together":Zu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Wi|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,r=ti(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=ti(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Wy(t,e,r){switch(e.tag){case 3:Xm(e),Io();break;case 5:wm(e);break;case 1:Qt(e.type)&&Aa(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;Ne(Ba,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(Ne(De,De.current&1),e.flags|=128,null):r&e.child.childLanes?Gm(t,e,r):(Ne(De,De.current&1),t=En(t,e,r),t!==null?t.sibling:null);Ne(De,De.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return Qm(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(De,De.current),n)break;return null;case 22:case 23:return e.lanes=0,Hm(t,e,r)}return En(t,e,r)}var Km,lf,qm,Zm;Km=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};lf=function(){};qm=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,Ei(an.current);var o=null;switch(r){case"input":i=bc(t,i),n=bc(t,n),o=[];break;case"select":i=Ie({},i,{value:void 0}),n=Ie({},n,{value:void 0}),o=[];break;case"textarea":i=jc(t,i),n=jc(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Da)}Mc(r,n);var l;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var a=n[u];if(s=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(r||(r={}),r[l]=a[l])}else r||(o||(o=[]),o.push(u,r)),r=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xl.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&be("scroll",t),o||s===a||(o=[])):(o=o||[]).push(u,a))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Zm=function(t,e,r,n){r!==n&&(e.flags|=4)};function ul(t,e){if(!ze)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function Vy(t,e,r){var n=e.pendingProps;switch(ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return Qt(e.type)&&La(),Ct(e),null;case 3:return n=e.stateNode,Uo(),Ee(Gt),Ee(Mt),gd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Bs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vr!==null&&(hf(Vr),Vr=null))),lf(t,e),Ct(e),null;case 5:hd(e);var i=Ei(os.current);if(r=e.type,t!==null&&e.stateNode!=null)qm(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(z(166));return Ct(e),null}if(t=Ei(an.current),Bs(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[rn]=e,n[ns]=o,t=(e.mode&1)!==0,r){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(i=0;i<yl.length;i++)be(yl[i],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":dp(n,o),be("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},be("invalid",n);break;case"textarea":hp(n,o),be("invalid",n)}Mc(r,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&Is(n.textContent,s,t),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Is(n.textContent,s,t),i=["children",""+s]):Xl.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&be("scroll",n)}switch(r){case"input":zs(n),pp(n,o,!0);break;case"textarea":zs(n),gp(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Da)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ng(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(r,{is:n.is}):(t=l.createElement(r),r==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,r),t[rn]=e,t[ns]=n,Km(t,e,!1,!1),e.stateNode=t;e:{switch(l=Rc(r,n),r){case"dialog":be("cancel",t),be("close",t),i=n;break;case"iframe":case"object":case"embed":be("load",t),i=n;break;case"video":case"audio":for(i=0;i<yl.length;i++)be(yl[i],t);i=n;break;case"source":be("error",t),i=n;break;case"img":case"image":case"link":be("error",t),be("load",t),i=n;break;case"details":be("toggle",t),i=n;break;case"input":dp(t,n),i=bc(t,n),be("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Ie({},n,{value:void 0}),be("invalid",t);break;case"textarea":hp(t,n),i=jc(t,n),be("invalid",t);break;default:i=n}Mc(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Pg(t,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bg(t,a)):o==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Gl(t,a):typeof a=="number"&&Gl(t,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xl.hasOwnProperty(o)?a!=null&&o==="onScroll"&&be("scroll",t):a!=null&&Hf(t,o,a,l))}switch(r){case"input":zs(t),pp(t,n,!1);break;case"textarea":zs(t),gp(t);break;case"option":n.value!=null&&t.setAttribute("value",""+oi(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?To(t,!!n.multiple,o,!1):n.defaultValue!=null&&To(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Da)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)Zm(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(z(166));if(r=Ei(os.current),Ei(an.current),Bs(e)){if(n=e.stateNode,r=e.memoizedProps,n[rn]=e,(o=n.nodeValue!==r)&&(t=hr,t!==null))switch(t.tag){case 3:Is(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Is(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[rn]=e,e.stateNode=n}return Ct(e),null;case 13:if(Ee(De),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&fr!==null&&e.mode&1&&!(e.flags&128))mm(),Io(),e.flags|=98560,o=!1;else if(o=Bs(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[rn]=e}else Io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),o=!1}else Vr!==null&&(hf(Vr),Vr=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?ot===0&&(ot=3):bd())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return Uo(),lf(t,e),t===null&&ts(e.stateNode.containerInfo),Ct(e),null;case 10:return cd(e.type._context),Ct(e),null;case 17:return Qt(e.type)&&La(),Ct(e),null;case 19:if(Ee(De),o=e.memoizedState,o===null)return Ct(e),null;if(n=(e.flags&128)!==0,l=o.rendering,l===null)if(n)ul(o,!1);else{if(ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Wa(t),l!==null){for(e.flags|=128,ul(o,!1),n=l.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Ne(De,De.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ge()>Wo&&(e.flags|=128,n=!0,ul(o,!1),e.lanes=4194304)}else{if(!n)if(t=Wa(l),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),ul(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ze)return Ct(e),null}else 2*Ge()-o.renderingStartTime>Wo&&r!==1073741824&&(e.flags|=128,n=!0,ul(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(r=o.last,r!==null?r.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ge(),e.sibling=null,r=De.current,Ne(De,n?r&1|2:r&1),e):(Ct(e),null);case 22:case 23:return Nd(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?or&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Hy(t,e){switch(ld(e),e.tag){case 1:return Qt(e.type)&&La(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Uo(),Ee(Gt),Ee(Mt),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hd(e),null;case 13:if(Ee(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(De),null;case 4:return Uo(),null;case 10:return cd(e.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var Ws=!1,Et=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,I=null;function _o(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){$e(t,e,n)}else r.current=null}function sf(t,e,r){try{r()}catch(n){$e(t,e,n)}}var ih=!1;function Xy(t,e){if(Wc=Ma,t=nm(),id(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,s=-1,a=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==r||i!==0&&h.nodeType!==3||(s=l+i),h!==o||n!==0&&h.nodeType!==3||(a=l+n),h.nodeType===3&&(l+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===r&&++u===i&&(s=l),f===o&&++c===n&&(a=l),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}r=s===-1||a===-1?null:{start:s,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vc={focusedElem:t,selectionRange:r},Ma=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,S=_.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?m:$r(e.type,m),S);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(w){$e(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return _=ih,ih=!1,_}function Ml(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&sf(e,r,o)}i=i.next}while(i!==n)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function af(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Jm(t){var e=t.alternate;e!==null&&(t.alternate=null,Jm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[ns],delete e[Xc],delete e[Py],delete e[jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function e0(t){return t.tag===5||t.tag===3||t.tag===4}function oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Da));else if(n!==4&&(t=t.child,t!==null))for(uf(t,e,r),t=t.sibling;t!==null;)uf(t,e,r),t=t.sibling}function cf(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(cf(t,e,r),t=t.sibling;t!==null;)cf(t,e,r),t=t.sibling}var mt=null,Wr=!1;function Dn(t,e,r){for(r=r.child;r!==null;)t0(t,e,r),r=r.sibling}function t0(t,e,r){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(uu,r)}catch{}switch(r.tag){case 5:Et||_o(r,e);case 6:var n=mt,i=Wr;mt=null,Dn(t,e,r),mt=n,Wr=i,mt!==null&&(Wr?(t=mt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):mt.removeChild(r.stateNode));break;case 18:mt!==null&&(Wr?(t=mt,r=r.stateNode,t.nodeType===8?Hu(t.parentNode,r):t.nodeType===1&&Hu(t,r),Zl(t)):Hu(mt,r.stateNode));break;case 4:n=mt,i=Wr,mt=r.stateNode.containerInfo,Wr=!0,Dn(t,e,r),mt=n,Wr=i;break;case 0:case 11:case 14:case 15:if(!Et&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&sf(r,e,l),i=i.next}while(i!==n)}Dn(t,e,r);break;case 1:if(!Et&&(_o(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){$e(r,e,s)}Dn(t,e,r);break;case 21:Dn(t,e,r);break;case 22:r.mode&1?(Et=(n=Et)||r.memoizedState!==null,Dn(t,e,r),Et=n):Dn(t,e,r);break;default:Dn(t,e,r)}}function lh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Yy),e.forEach(function(n){var i=r_.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Br(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,l=e,s=l;e:for(;s!==null;){switch(s.tag){case 5:mt=s.stateNode,Wr=!1;break e;case 3:mt=s.stateNode.containerInfo,Wr=!0;break e;case 4:mt=s.stateNode.containerInfo,Wr=!0;break e}s=s.return}if(mt===null)throw Error(z(160));t0(o,l,i),mt=null,Wr=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){$e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r0(e,t),e=e.sibling}function r0(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Br(e,t),Zr(t),n&4){try{Ml(3,t,t.return),vu(3,t)}catch(m){$e(t,t.return,m)}try{Ml(5,t,t.return)}catch(m){$e(t,t.return,m)}}break;case 1:Br(e,t),Zr(t),n&512&&r!==null&&_o(r,r.return);break;case 5:if(Br(e,t),Zr(t),n&512&&r!==null&&_o(r,r.return),t.flags&32){var i=t.stateNode;try{Gl(i,"")}catch(m){$e(t,t.return,m)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,l=r!==null?r.memoizedProps:o,s=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Tg(i,o),Rc(s,l);var u=Rc(s,o);for(l=0;l<a.length;l+=2){var c=a[l],h=a[l+1];c==="style"?Pg(i,h):c==="dangerouslySetInnerHTML"?bg(i,h):c==="children"?Gl(i,h):Hf(i,c,h,u)}switch(s){case"input":Ec(i,o);break;case"textarea":Cg(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?To(i,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?To(i,!!o.multiple,o.defaultValue,!0):To(i,!!o.multiple,o.multiple?[]:"",!1))}i[ns]=o}catch(m){$e(t,t.return,m)}}break;case 6:if(Br(e,t),Zr(t),n&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(m){$e(t,t.return,m)}}break;case 3:if(Br(e,t),Zr(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Zl(e.containerInfo)}catch(m){$e(t,t.return,m)}break;case 4:Br(e,t),Zr(t);break;case 13:Br(e,t),Zr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Td=Ge())),n&4&&lh(t);break;case 22:if(c=r!==null&&r.memoizedState!==null,t.mode&1?(Et=(u=Et)||c,Br(e,t),Et=u):Br(e,t),Zr(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(I=t,c=t.child;c!==null;){for(h=I=c;I!==null;){switch(f=I,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ml(4,f,f.return);break;case 1:_o(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){n=f,r=f.return;try{e=n,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){$e(n,r,m)}}break;case 5:_o(f,f.return);break;case 22:if(f.memoizedState!==null){ah(h);continue}}p!==null?(p.return=f,I=p):ah(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Eg("display",l))}catch(m){$e(t,t.return,m)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(m){$e(t,t.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Br(e,t),Zr(t),n&4&&lh(t);break;case 21:break;default:Br(e,t),Zr(t)}}function Zr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(e0(r)){var n=r;break e}r=r.return}throw Error(z(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Gl(i,""),n.flags&=-33);var o=oh(t);cf(t,o,i);break;case 3:case 4:var l=n.stateNode.containerInfo,s=oh(t);uf(t,s,l);break;default:throw Error(z(161))}}catch(a){$e(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gy(t,e,r){I=t,n0(t)}function n0(t,e,r){for(var n=(t.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||Ws;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Et;s=Ws;var u=Et;if(Ws=l,(Et=a)&&!u)for(I=i;I!==null;)l=I,a=l.child,l.tag===22&&l.memoizedState!==null?uh(i):a!==null?(a.return=l,I=a):uh(i);for(;o!==null;)I=o,n0(o),o=o.sibling;I=i,Ws=s,Et=u}sh(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):sh(t)}}function sh(t){for(;I!==null;){var e=I;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||vu(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Et)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:$r(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Hp(e,o,n);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Hp(e,l,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Zl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Et||e.flags&512&&af(e)}catch(f){$e(e,e.return,f)}}if(e===t){I=null;break}if(r=e.sibling,r!==null){r.return=e.return,I=r;break}I=e.return}}function ah(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var r=e.sibling;if(r!==null){r.return=e.return,I=r;break}I=e.return}}function uh(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{vu(4,e)}catch(a){$e(e,r,a)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(a){$e(e,i,a)}}var o=e.return;try{af(e)}catch(a){$e(e,o,a)}break;case 5:var l=e.return;try{af(e)}catch(a){$e(e,l,a)}}}catch(a){$e(e,e.return,a)}if(e===t){I=null;break}var s=e.sibling;if(s!==null){s.return=e.return,I=s;break}I=e.return}}var Qy=Math.ceil,Ya=zn.ReactCurrentDispatcher,kd=zn.ReactCurrentOwner,jr=zn.ReactCurrentBatchConfig,me=0,dt=null,Je=null,yt=0,or=0,xo=di(0),ot=0,us=null,Wi=0,yu=0,Sd=0,Rl=null,Ht=null,Td=0,Wo=1/0,gn=null,Xa=!1,ff=null,Jn=null,Vs=!1,$n=null,Ga=0,Ol=0,df=null,ga=-1,ma=0;function Bt(){return me&6?Ge():ga!==-1?ga:ga=Ge()}function ei(t){return t.mode&1?me&2&&yt!==0?yt&-yt:My.transition!==null?(ma===0&&(ma=Ug()),ma):(t=ke,t!==0||(t=window.event,t=t===void 0?16:Gg(t.type)),t):1}function Yr(t,e,r,n){if(50<Ol)throw Ol=0,df=null,Error(z(185));ws(t,r,n),(!(me&2)||t!==dt)&&(t===dt&&(!(me&2)&&(yu|=r),ot===4&&Bn(t,yt)),Kt(t,n),r===1&&me===0&&!(e.mode&1)&&(Wo=Ge()+500,hu&&pi()))}function Kt(t,e){var r=t.callbackNode;Mv(t,e);var n=za(t,t===dt?yt:0);if(n===0)r!==null&&yp(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&yp(r),e===1)t.tag===0?zy(ch.bind(null,t)):pm(ch.bind(null,t)),by(function(){!(me&6)&&pi()}),r=null;else{switch($g(n)){case 1:r=Kf;break;case 4:r=Ig;break;case 16:r=ja;break;case 536870912:r=Bg;break;default:r=ja}r=f0(r,i0.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function i0(t,e){if(ga=-1,ma=0,me&6)throw Error(z(327));var r=t.callbackNode;if(Po()&&t.callbackNode!==r)return null;var n=za(t,t===dt?yt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Qa(t,n);else{e=n;var i=me;me|=2;var o=l0();(dt!==t||yt!==e)&&(gn=null,Wo=Ge()+500,zi(t,e));do try{Zy();break}catch(s){o0(t,s)}while(!0);ud(),Ya.current=o,me=i,Je!==null?e=0:(dt=null,yt=0,e=ot)}if(e!==0){if(e===2&&(i=Fc(t),i!==0&&(n=i,e=pf(t,i))),e===1)throw r=us,zi(t,0),Bn(t,n),Kt(t,Ge()),r;if(e===6)Bn(t,n);else{if(i=t.current.alternate,!(n&30)&&!Ky(i)&&(e=Qa(t,n),e===2&&(o=Fc(t),o!==0&&(n=o,e=pf(t,o))),e===1))throw r=us,zi(t,0),Bn(t,n),Kt(t,Ge()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(z(345));case 2:ki(t,Ht,gn);break;case 3:if(Bn(t,n),(n&130023424)===n&&(e=Td+500-Ge(),10<e)){if(za(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yc(ki.bind(null,t,Ht,gn),e);break}ki(t,Ht,gn);break;case 4:if(Bn(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var l=31-Hr(n);o=1<<l,l=e[l],l>i&&(i=l),n&=~o}if(n=i,n=Ge()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Qy(n/1960))-n,10<n){t.timeoutHandle=Yc(ki.bind(null,t,Ht,gn),n);break}ki(t,Ht,gn);break;case 5:ki(t,Ht,gn);break;default:throw Error(z(329))}}}return Kt(t,Ge()),t.callbackNode===r?i0.bind(null,t):null}function pf(t,e){var r=Rl;return t.current.memoizedState.isDehydrated&&(zi(t,e).flags|=256),t=Qa(t,e),t!==2&&(e=Ht,Ht=r,e!==null&&hf(e)),t}function hf(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function Ky(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Xr(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Sd,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Hr(e),n=1<<r;t[r]=-1,e&=~n}}function ch(t){if(me&6)throw Error(z(327));Po();var e=za(t,0);if(!(e&1))return Kt(t,Ge()),null;var r=Qa(t,e);if(t.tag!==0&&r===2){var n=Fc(t);n!==0&&(e=n,r=pf(t,n))}if(r===1)throw r=us,zi(t,0),Bn(t,e),Kt(t,Ge()),r;if(r===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t,Ht,gn),Kt(t,Ge()),null}function Cd(t,e){var r=me;me|=1;try{return t(e)}finally{me=r,me===0&&(Wo=Ge()+500,hu&&pi())}}function Vi(t){$n!==null&&$n.tag===0&&!(me&6)&&Po();var e=me;me|=1;var r=jr.transition,n=ke;try{if(jr.transition=null,ke=1,t)return t()}finally{ke=n,jr.transition=r,me=e,!(me&6)&&pi()}}function Nd(){or=xo.current,Ee(xo)}function zi(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Ny(r)),Je!==null)for(r=Je.return;r!==null;){var n=r;switch(ld(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&La();break;case 3:Uo(),Ee(Gt),Ee(Mt),gd();break;case 5:hd(n);break;case 4:Uo();break;case 13:Ee(De);break;case 19:Ee(De);break;case 10:cd(n.type._context);break;case 22:case 23:Nd()}r=r.return}if(dt=t,Je=t=ti(t.current,null),yt=or=e,ot=0,us=null,Sd=yu=Wi=0,Ht=Rl=null,bi!==null){for(e=0;e<bi.length;e++)if(r=bi[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=i,n.next=l}r.pending=n}bi=null}return t}function o0(t,e){do{var r=Je;try{if(ud(),da.current=Ha,Va){for(var n=Fe.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Va=!1}if($i=0,ft=nt=Fe=null,zl=!1,ls=0,kd.current=null,r===null||r.return===null){ot=1,us=e,Je=null;break}e:{var o=t,l=r.return,s=r,a=e;if(e=yt,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=s,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=qp(l);if(p!==null){p.flags&=-257,Zp(p,l,s,o,e),p.mode&1&&Kp(o,u,e),e=p,a=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(a),e.updateQueue=m}else _.add(a);break e}else{if(!(e&1)){Kp(o,u,e),bd();break e}a=Error(z(426))}}else if(ze&&s.mode&1){var S=qp(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Zp(S,l,s,o,e),sd($o(a,s));break e}}o=a=$o(a,s),ot!==4&&(ot=2),Rl===null?Rl=[o]:Rl.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var v=$m(o,a,e);Vp(o,v);break e;case 1:s=a;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Jn===null||!Jn.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Wm(o,s,e);Vp(o,w);break e}}o=o.return}while(o!==null)}a0(r)}catch(C){e=C,Je===r&&r!==null&&(Je=r=r.return);continue}break}while(!0)}function l0(){var t=Ya.current;return Ya.current=Ha,t===null?Ha:t}function bd(){(ot===0||ot===3||ot===2)&&(ot=4),dt===null||!(Wi&268435455)&&!(yu&268435455)||Bn(dt,yt)}function Qa(t,e){var r=me;me|=2;var n=l0();(dt!==t||yt!==e)&&(gn=null,zi(t,e));do try{qy();break}catch(i){o0(t,i)}while(!0);if(ud(),me=r,Ya.current=n,Je!==null)throw Error(z(261));return dt=null,yt=0,ot}function qy(){for(;Je!==null;)s0(Je)}function Zy(){for(;Je!==null&&!Sv();)s0(Je)}function s0(t){var e=c0(t.alternate,t,or);t.memoizedProps=t.pendingProps,e===null?a0(t):Je=e,kd.current=null}function a0(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=Hy(r,e),r!==null){r.flags&=32767,Je=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ot=6,Je=null;return}}else if(r=Vy(r,e,or),r!==null){Je=r;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);ot===0&&(ot=5)}function ki(t,e,r){var n=ke,i=jr.transition;try{jr.transition=null,ke=1,Jy(t,e,r,n)}finally{jr.transition=i,ke=n}return null}function Jy(t,e,r,n){do Po();while($n!==null);if(me&6)throw Error(z(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(Rv(t,o),t===dt&&(Je=dt=null,yt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Vs||(Vs=!0,f0(ja,function(){return Po(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=jr.transition,jr.transition=null;var l=ke;ke=1;var s=me;me|=4,kd.current=null,Xy(t,r),r0(r,t),_y(Vc),Ma=!!Wc,Vc=Wc=null,t.current=r,Gy(r),Tv(),me=s,ke=l,jr.transition=o}else t.current=r;if(Vs&&(Vs=!1,$n=t,Ga=i),o=t.pendingLanes,o===0&&(Jn=null),bv(r.stateNode),Kt(t,Ge()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Xa)throw Xa=!1,t=ff,ff=null,t;return Ga&1&&t.tag!==0&&Po(),o=t.pendingLanes,o&1?t===df?Ol++:(Ol=0,df=t):Ol=0,pi(),null}function Po(){if($n!==null){var t=$g(Ga),e=jr.transition,r=ke;try{if(jr.transition=null,ke=16>t?16:t,$n===null)var n=!1;else{if(t=$n,$n=null,Ga=0,me&6)throw Error(z(331));var i=me;for(me|=4,I=t.current;I!==null;){var o=I,l=o.child;if(I.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:Ml(8,c,o)}var h=c.child;if(h!==null)h.return=c,I=h;else for(;I!==null;){c=I;var f=c.sibling,p=c.return;if(Jm(c),c===u){I=null;break}if(f!==null){f.return=p,I=f;break}I=p}}}var _=o.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var S=m.sibling;m.sibling=null,m=S}while(m!==null)}}I=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,I=l;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ml(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,I=v;break e}I=o.return}}var g=t.current;for(I=g;I!==null;){l=I;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,I=y;else e:for(l=g;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:vu(9,s)}}catch(C){$e(s,s.return,C)}if(s===l){I=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,I=w;break e}I=s.return}}if(me=i,pi(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(uu,t)}catch{}n=!0}return n}finally{ke=r,jr.transition=e}}return!1}function fh(t,e,r){e=$o(r,e),e=$m(t,e,1),t=Zn(t,e,1),e=Bt(),t!==null&&(ws(t,1,e),Kt(t,e))}function $e(t,e,r){if(t.tag===3)fh(t,t,r);else for(;e!==null;){if(e.tag===3){fh(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Jn===null||!Jn.has(n))){t=$o(r,t),t=Wm(e,t,1),e=Zn(e,t,1),t=Bt(),e!==null&&(ws(e,1,t),Kt(e,t));break}}e=e.return}}function e_(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&r,dt===t&&(yt&r)===r&&(ot===4||ot===3&&(yt&130023424)===yt&&500>Ge()-Td?zi(t,0):Sd|=r),Kt(t,e)}function u0(t,e){e===0&&(t.mode&1?(e=Os,Os<<=1,!(Os&130023424)&&(Os=4194304)):e=1);var r=Bt();t=bn(t,e),t!==null&&(ws(t,e,r),Kt(t,r))}function t_(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),u0(t,r)}function r_(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(z(314))}n!==null&&n.delete(e),u0(t,r)}var c0;c0=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)Xt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Xt=!1,Wy(t,e,r);Xt=!!(t.flags&131072)}else Xt=!1,ze&&e.flags&1048576&&hm(e,Ia,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;ha(t,e),t=e.pendingProps;var i=Fo(e,Mt.current);Eo(e,r),i=vd(null,e,n,t,i,r);var o=yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(n)?(o=!0,Aa(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dd(e),i.updater=mu,e.stateNode=i,i._reactInternals=e,Jc(e,n,t,r),e=rf(null,e,n,!0,o,r)):(e.tag=0,ze&&o&&od(e),Lt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(ha(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=i_(n),t=$r(n,t),i){case 0:e=tf(null,e,n,t,r);break e;case 1:e=th(null,e,n,t,r);break e;case 11:e=Jp(null,e,n,t,r);break e;case 14:e=eh(null,e,n,$r(n.type,t),r);break e}throw Error(z(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:$r(n,i),tf(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:$r(n,i),th(t,e,n,i,r);case 3:e:{if(Xm(e),t===null)throw Error(z(387));n=e.pendingProps,o=e.memoizedState,i=o.element,xm(t,e),$a(e,n,null,r);var l=e.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=$o(Error(z(423)),e),e=rh(t,e,n,r,i);break e}else if(n!==i){i=$o(Error(z(424)),e),e=rh(t,e,n,r,i);break e}else for(fr=qn(e.stateNode.containerInfo.firstChild),hr=e,ze=!0,Vr=null,r=ym(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Io(),n===i){e=En(t,e,r);break e}Lt(t,e,n,r)}e=e.child}return e;case 5:return wm(e),t===null&&Kc(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,l=i.children,Hc(n,i)?l=null:o!==null&&Hc(n,o)&&(e.flags|=32),Ym(t,e),Lt(t,e,l,r),e.child;case 6:return t===null&&Kc(e),null;case 13:return Gm(t,e,r);case 4:return pd(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Bo(e,null,n,r):Lt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:$r(n,i),Jp(t,e,n,i,r);case 7:return Lt(t,e,e.pendingProps,r),e.child;case 8:return Lt(t,e,e.pendingProps.children,r),e.child;case 12:return Lt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,l=i.value,Ne(Ba,n._currentValue),n._currentValue=l,o!==null)if(Xr(o.value,l)){if(o.children===i.children&&!Gt.current){e=En(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===n){if(o.tag===1){a=Sn(-1,r&-r),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),qc(o.return,r,e),s.lanes|=r;break}a=a.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(z(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),qc(l,r,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Lt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,Eo(e,r),i=Mr(i),n=n(i),e.flags|=1,Lt(t,e,n,r),e.child;case 14:return n=e.type,i=$r(n,e.pendingProps),i=$r(n.type,i),eh(t,e,n,i,r);case 15:return Vm(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:$r(n,i),ha(t,e),e.tag=1,Qt(n)?(t=!0,Aa(e)):t=!1,Eo(e,r),Um(e,n,i),Jc(e,n,i,r),rf(null,e,n,!0,t,r);case 19:return Qm(t,e,r);case 22:return Hm(t,e,r)}throw Error(z(156,e.tag))};function f0(t,e){return Fg(t,e)}function n_(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(t,e,r,n){return new n_(t,e,r,n)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function i_(t){if(typeof t=="function")return Ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xf)return 11;if(t===Gf)return 14}return 2}function ti(t,e){var r=t.alternate;return r===null?(r=br(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function va(t,e,r,n,i,o){var l=2;if(n=t,typeof t=="function")Ed(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case uo:return Mi(r.children,i,o,e);case Yf:l=8,i|=8;break;case Sc:return t=br(12,r,e,i|2),t.elementType=Sc,t.lanes=o,t;case Tc:return t=br(13,r,e,i),t.elementType=Tc,t.lanes=o,t;case Cc:return t=br(19,r,e,i),t.elementType=Cc,t.lanes=o,t;case wg:return _u(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _g:l=10;break e;case xg:l=9;break e;case Xf:l=11;break e;case Gf:l=14;break e;case An:l=16,n=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=br(l,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function Mi(t,e,r,n){return t=br(7,t,n,e),t.lanes=r,t}function _u(t,e,r,n){return t=br(22,t,n,e),t.elementType=wg,t.lanes=r,t.stateNode={isHidden:!1},t}function Ju(t,e,r){return t=br(6,t,null,e),t.lanes=r,t}function ec(t,e,r){return e=br(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function o_(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pd(t,e,r,n,i,o,l,s,a){return t=new o_(t,e,r,s,a),e===1?(e=1,o===!0&&(e|=8)):e=0,o=br(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(o),t}function l_(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ao,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function d0(t){if(!t)return li;t=t._reactInternals;e:{if(Qi(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var r=t.type;if(Qt(r))return dm(t,r,e)}return e}function p0(t,e,r,n,i,o,l,s,a){return t=Pd(r,n,!0,t,i,o,l,s,a),t.context=d0(null),r=t.current,n=Bt(),i=ei(r),o=Sn(n,i),o.callback=e??null,Zn(r,o,i),t.current.lanes=i,ws(t,i,n),Kt(t,n),t}function xu(t,e,r,n){var i=e.current,o=Bt(),l=ei(i);return r=d0(r),e.context===null?e.context=r:e.pendingContext=r,e=Sn(o,l),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Zn(i,e,l),t!==null&&(Yr(t,i,l,o),fa(t,i,l)),l}function Ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function jd(t,e){dh(t,e),(t=t.alternate)&&dh(t,e)}function s_(){return null}var h0=typeof reportError=="function"?reportError:function(t){console.error(t)};function zd(t){this._internalRoot=t}wu.prototype.render=zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));xu(t,e,null,null)};wu.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){xu(null,t,null,null)}),e[Nn]=null}};function wu(t){this._internalRoot=t}wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hg();t={blockedOn:null,target:t,priority:e};for(var r=0;r<In.length&&e!==0&&e<In[r].priority;r++);In.splice(r,0,t),r===0&&Xg(t)}};function Md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ph(){}function a_(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=Ka(l);o.call(u)}}var l=p0(e,n,t,0,null,!1,!1,"",ph);return t._reactRootContainer=l,t[Nn]=l.current,ts(t.nodeType===8?t.parentNode:t),Vi(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=Ka(a);s.call(u)}}var a=Pd(t,0,!1,null,null,!1,!1,"",ph);return t._reactRootContainer=a,t[Nn]=a.current,ts(t.nodeType===8?t.parentNode:t),Vi(function(){xu(e,a,r,n)}),a}function Su(t,e,r,n,i){var o=r._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=Ka(l);s.call(a)}}xu(e,l,t,i)}else l=a_(r,e,t,i,n);return Ka(l)}Wg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=vl(e.pendingLanes);r!==0&&(qf(e,r|1),Kt(e,Ge()),!(me&6)&&(Wo=Ge()+500,pi()))}break;case 13:Vi(function(){var n=bn(t,1);if(n!==null){var i=Bt();Yr(n,t,1,i)}}),jd(t,1)}};Zf=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var r=Bt();Yr(e,t,134217728,r)}jd(t,134217728)}};Vg=function(t){if(t.tag===13){var e=ei(t),r=bn(t,e);if(r!==null){var n=Bt();Yr(r,t,e,n)}jd(t,e)}};Hg=function(){return ke};Yg=function(t,e){var r=ke;try{return ke=t,e()}finally{ke=r}};Dc=function(t,e,r){switch(e){case"input":if(Ec(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=pu(n);if(!i)throw Error(z(90));Sg(n),Ec(n,i)}}}break;case"textarea":Cg(t,r);break;case"select":e=r.value,e!=null&&To(t,!!r.multiple,e,!1)}};Mg=Cd;Rg=Vi;var u_={usingClientEntryPoint:!1,Events:[Ss,ho,pu,jg,zg,Cd]},cl={findFiberByHostInstance:Ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},c_={bundleType:cl.bundleType,version:cl.version,rendererPackageName:cl.rendererPackageName,rendererConfig:cl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lg(t),t===null?null:t.stateNode},findFiberByHostInstance:cl.findFiberByHostInstance||s_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{uu=Hs.inject(c_),sn=Hs}catch{}}_r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u_;_r.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Md(e))throw Error(z(200));return l_(t,e,null,r)};_r.createRoot=function(t,e){if(!Md(t))throw Error(z(299));var r=!1,n="",i=h0;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pd(t,1,!1,null,null,r,!1,n,i),t[Nn]=e.current,ts(t.nodeType===8?t.parentNode:t),new zd(e)};_r.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Lg(e),t=t===null?null:t.stateNode,t};_r.flushSync=function(t){return Vi(t)};_r.hydrate=function(t,e,r){if(!ku(e))throw Error(z(200));return Su(null,t,e,!0,r)};_r.hydrateRoot=function(t,e,r){if(!Md(t))throw Error(z(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",l=h0;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=p0(e,null,t,1,r??null,i,!1,o,l),t[Nn]=e.current,ts(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new wu(e)};_r.render=function(t,e,r){if(!ku(e))throw Error(z(200));return Su(null,t,e,!1,r)};_r.unmountComponentAtNode=function(t){if(!ku(t))throw Error(z(40));return t._reactRootContainer?(Vi(function(){Su(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};_r.unstable_batchedUpdates=Cd;_r.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!ku(r))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Su(t,e,r,!1,n)};_r.version="18.3.1-next-f1338f8080-20240426";function g0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g0)}catch(t){console.error(t)}}g0(),gg.exports=_r;var f_=gg.exports,hh=f_;wc.createRoot=hh.createRoot,wc.hydrateRoot=hh.hydrateRoot;function mn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cs={duration:.5,overwrite:!1,delay:0},Rd,_t,Me,Er=1e8,Ce=1/Er,gf=Math.PI*2,d_=gf/4,p_=0,v0=Math.sqrt,h_=Math.cos,g_=Math.sin,pt=function(e){return typeof e=="string"},We=function(e){return typeof e=="function"},Pn=function(e){return typeof e=="number"},Od=function(e){return typeof e>"u"},cn=function(e){return typeof e=="object"},qt=function(e){return e!==!1},Dd=function(){return typeof window<"u"},Ys=function(e){return We(e)||pt(e)},y0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,m_=/random\([^)]+\)/g,v_=/,\s*/g,gh=/(?:-?\.?\d|\.)+/gi,_0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,x0=/[+-]=-?[.\d]+/,y_=/[^,'"\[\]\s]+/gi,__=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,en,mf,Ld,vr={},qa={},w0,k0=function(e){return(qa=Vo(e,vr))&&tr},Ad=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},fs=function(e,r){return!r&&console.warn(e)},S0=function(e,r){return e&&(vr[e]=r)&&qa&&(qa[e]=r)||vr},ds=function(){return 0},x_={suppressEvents:!0,isStart:!0,kill:!1},ya={suppressEvents:!0,kill:!1},w_={suppressEvents:!0},Fd={},ri=[],vf={},T0,sr={},rc={},mh=30,_a=[],Id="",Bd=function(e){var r=e[0],n,i;if(cn(r)||We(r)||(e=[e]),!(n=(r._gsap||{}).harness)){for(i=_a.length;i--&&!_a[i].targetTest(r););n=_a[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Y0(e[i],n)))||e.splice(i,1);return e},Ri=function(e){return e._gsap||Bd(Pr(e))[0]._gsap},C0=function(e,r,n){return(n=e[r])&&We(n)?e[r]():Od(n)&&e.getAttribute&&e.getAttribute(r)||n},Zt=function(e,r){return(e=e.split(",")).forEach(r)||e},Xe=function(e){return Math.round(e*1e5)/1e5||0},Oe=function(e){return Math.round(e*1e7)/1e7||0},jo=function(e,r){var n=r.charAt(0),i=parseFloat(r.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},k_=function(e,r){for(var n=r.length,i=0;e.indexOf(r[i])<0&&++i<n;);return i<n},Za=function(){var e=ri.length,r=ri.slice(0),n,i;for(vf={},ri.length=0,n=0;n<e;n++)i=r[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ud=function(e){return!!(e._initted||e._startAt||e.add)},N0=function(e,r,n,i){ri.length&&!_t&&Za(),e.render(r,n,!!(_t&&r<0&&Ud(e))),ri.length&&!_t&&Za()},b0=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(y_).length<2?r:pt(e)?e.trim():e},E0=function(e){return e},yr=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},S_=function(e){return function(r,n){for(var i in n)i in r||i==="duration"&&e||i==="ease"||(r[i]=n[i])}},Vo=function(e,r){for(var n in r)e[n]=r[n];return e},vh=function t(e,r){for(var n in r)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=cn(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},Ja=function(e,r){var n={},i;for(i in e)i in r||(n[i]=e[i]);return n},Dl=function(e){var r=e.parent||Le,n=e.keyframes?S_(zt(e.keyframes)):yr;if(qt(e.inherit))for(;r;)n(e,r.vars.defaults),r=r.parent||r._dp;return e},T_=function(e,r){for(var n=e.length,i=n===r.length;i&&n--&&e[n]===r[n];);return n<0},P0=function(e,r,n,i,o){var l=e[i],s;if(o)for(s=r[o];l&&l[o]>s;)l=l._prev;return l?(r._next=l._next,l._next=r):(r._next=e[n],e[n]=r),r._next?r._next._prev=r:e[i]=r,r._prev=l,r.parent=r._dp=e,r},Tu=function(e,r,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=r._prev,l=r._next;o?o._next=l:e[n]===r&&(e[n]=l),l?l._prev=o:e[i]===r&&(e[i]=o),r._next=r._prev=r.parent=null},si=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Oi=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},C_=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},yf=function(e,r,n,i){return e._startAt&&(_t?e._startAt.revert(ya):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,i))},N_=function t(e){return!e||e._ts&&t(e.parent)},yh=function(e){return e._repeat?Ho(e._tTime,e=e.duration()+e._rDelay)*e:0},Ho=function(e,r){var n=Math.floor(e=Oe(e/r));return e&&n===e?n-1:n},eu=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Cu=function(e){return e._end=Oe(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ce)||0))},Nu=function(e,r){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Oe(n._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),Cu(e),n._dirty||Oi(n,e)),e},j0=function(e,r){var n;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(n=eu(e.rawTime(),r),(!r._dur||Cs(0,r.totalDuration(),n)-r._tTime>Ce)&&r.render(n,!0)),Oi(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ce}},nn=function(e,r,n,i){return r.parent&&si(r),r._start=Oe((Pn(n)?n:n||e!==Le?kr(e,n,r):e._time)+r._delay),r._end=Oe(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),P0(e,r,"_first","_last",e._sort?"_start":0),_f(r)||(e._recent=r),i||j0(e,r),e._ts<0&&Nu(e,e._tTime),e},z0=function(e,r){return(vr.ScrollTrigger||Ad("scrollTrigger",r))&&vr.ScrollTrigger.create(r,e)},M0=function(e,r,n,i,o){if(Wd(e,r,o),!e._initted)return 1;if(!n&&e._pt&&!_t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&T0!==ur.frame)return ri.push(e),e._lazy=[o,i],1},b_=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},_f=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},E_=function(e,r,n,i){var o=e.ratio,l=r<0||!r&&(!e._start&&b_(e)&&!(!e._initted&&_f(e))||(e._ts<0||e._dp._ts<0)&&!_f(e))?0:1,s=e._rDelay,a=0,u,c,h;if(s&&e._repeat&&(a=Cs(0,e._tDur,r),c=Ho(a,s),e._yoyo&&c&1&&(l=1-l),c!==Ho(e._tTime,s)&&(o=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==o||_t||i||e._zTime===Ce||!r&&e._zTime){if(!e._initted&&M0(e,r,i,n,a))return;for(h=e._zTime,e._zTime=r||(n?Ce:0),n||(n=r&&!h),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=a,u=e._pt;u;)u.r(l,u.d),u=u._next;r<0&&yf(e,r,n,!0),e._onUpdate&&!n&&dr(e,"onUpdate"),a&&e._repeat&&!n&&e.parent&&dr(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===l&&(l&&si(e,1),!n&&!_t&&(dr(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},P_=function(e,r,n){var i;if(n>r)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},Yo=function(e,r,n,i){var o=e._repeat,l=Oe(r)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=l/e._dur),e._dur=l,e._tDur=o?o<0?1e10:Oe(l*(o+1)+e._rDelay*o):l,s>0&&!i&&Nu(e,e._tTime=e._tDur*s),e.parent&&Cu(e),n||Oi(e.parent,e),e},_h=function(e){return e instanceof Yt?Oi(e):Yo(e,e._dur)},j_={_start:0,endTime:ds,totalDuration:ds},kr=function t(e,r,n){var i=e.labels,o=e._recent||j_,l=e.duration()>=Er?o.endTime(!1):e._dur,s,a,u;return pt(r)&&(isNaN(r)||r in i)?(a=r.charAt(0),u=r.substr(-1)==="%",s=r.indexOf("="),a==="<"||a===">"?(s>=0&&(r=r.replace(/=/,"")),(a==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(r.substr(1))||0)*(u?(s<0?o:n).totalDuration()/100:1)):s<0?(r in i||(i[r]=l),i[r]):(a=parseFloat(r.charAt(s-1)+r.substr(s+1)),u&&n&&(a=a/100*(zt(n)?n[0]:n).totalDuration()),s>1?t(e,r.substr(0,s-1),n)+a:l+a)):r==null?l:+r},Ll=function(e,r,n){var i=Pn(r[1]),o=(i?2:1)+(e<2?0:1),l=r[o],s,a;if(i&&(l.duration=r[1]),l.parent=n,e){for(s=l,a=n;a&&!("immediateRender"in s);)s=a.vars.defaults||{},a=qt(a.vars.inherit)&&a.parent;l.immediateRender=qt(s.immediateRender),e<2?l.runBackwards=1:l.startAt=r[o-1]}return new Ze(r[0],l,r[o+1])},hi=function(e,r){return e||e===0?r(e):r},Cs=function(e,r,n){return n<e?e:n>r?r:n},Pt=function(e,r){return!pt(e)||!(r=__.exec(e))?"":r[1]},z_=function(e,r,n){return hi(n,function(i){return Cs(e,r,i)})},xf=[].slice,R0=function(e,r){return e&&cn(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&cn(e[0]))&&!e.nodeType&&e!==en},M_=function(e,r,n){return n===void 0&&(n=[]),e.forEach(function(i){var o;return pt(i)&&!r||R0(i,1)?(o=n).push.apply(o,Pr(i)):n.push(i)})||n},Pr=function(e,r,n){return Me&&!r&&Me.selector?Me.selector(e):pt(e)&&!n&&(mf||!Xo())?xf.call((r||Ld).querySelectorAll(e),0):zt(e)?M_(e,n):R0(e)?xf.call(e,0):e?[e]:[]},wf=function(e){return e=Pr(e)[0]||fs("Invalid scope")||{},function(r){var n=e.current||e.nativeElement||e;return Pr(r,n.querySelectorAll?n:n===e?fs("Invalid scope")||Ld.createElement("div"):e)}},O0=function(e){return e.sort(function(){return .5-Math.random()})},D0=function(e){if(We(e))return e;var r=cn(e)?e:{each:e},n=Di(r.ease),i=r.from||0,o=parseFloat(r.base)||0,l={},s=i>0&&i<1,a=isNaN(i)||s,u=r.axis,c=i,h=i;return pt(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!s&&a&&(c=i[0],h=i[1]),function(f,p,_){var m=(_||r).length,S=l[m],v,g,y,w,C,E,T,x,P;if(!S){if(P=r.grid==="auto"?0:(r.grid||[1,Er])[1],!P){for(T=-Er;T<(T=_[P++].getBoundingClientRect().left)&&P<m;);P<m&&P--}for(S=l[m]=[],v=a?Math.min(P,m)*c-.5:i%P,g=P===Er?0:a?m*h/P-.5:i/P|0,T=0,x=Er,E=0;E<m;E++)y=E%P-v,w=g-(E/P|0),S[E]=C=u?Math.abs(u==="y"?w:y):v0(y*y+w*w),C>T&&(T=C),C<x&&(x=C);i==="random"&&O0(S),S.max=T-x,S.min=x,S.v=m=(parseFloat(r.amount)||parseFloat(r.each)*(P>m?m-1:u?u==="y"?m/P:P:Math.max(P,m/P))||0)*(i==="edges"?-1:1),S.b=m<0?o-m:o,S.u=Pt(r.amount||r.each)||0,n=n&&m<0?H_(n):n}return m=(S[f]-S.min)/S.max||0,Oe(S.b+(n?n(m):m)*S.v)+S.u}},kf=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/e)*e*r);return(i-i%1)/r+(Pn(n)?0:Pt(n))}},L0=function(e,r){var n=zt(e),i,o;return!n&&cn(e)&&(i=n=e.radius||Er,e.values?(e=Pr(e.values),(o=!Pn(e[0]))&&(i*=i)):e=kf(e.increment)),hi(r,n?We(e)?function(l){return o=e(l),Math.abs(o-l)<=i?o:l}:function(l){for(var s=parseFloat(o?l.x:l),a=parseFloat(o?l.y:0),u=Er,c=0,h=e.length,f,p;h--;)o?(f=e[h].x-s,p=e[h].y-a,f=f*f+p*p):f=Math.abs(e[h]-s),f<u&&(u=f,c=h);return c=!i||u<=i?e[c]:l,o||c===l||Pn(l)?c:c+Pt(l)}:kf(e))},A0=function(e,r,n,i){return hi(zt(e)?!r:n===!0?!!(n=0):!i,function(){return zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(r-e+n*.99))/n)*n*i)/i})},R_=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduce(function(o,l){return l(o)},i)}},O_=function(e,r){return function(n){return e(parseFloat(n))+(r||Pt(n))}},D_=function(e,r,n){return I0(e,r,0,1,n)},F0=function(e,r,n){return hi(n,function(i){return e[~~r(i)]})},L_=function t(e,r,n){var i=r-e;return zt(e)?F0(e,t(0,e.length),r):hi(n,function(o){return(i+(o-e)%i)%i+e})},A_=function t(e,r,n){var i=r-e,o=i*2;return zt(e)?F0(e,t(0,e.length-1),r):hi(n,function(l){return l=(o+(l-e)%o)%o||0,e+(l>i?o-l:l)})},ps=function(e){return e.replace(m_,function(r){var n=r.indexOf("[")+1,i=r.substring(n||7,n?r.indexOf("]"):r.length-1).split(v_);return A0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},I0=function(e,r,n,i,o){var l=r-e,s=i-n;return hi(o,function(a){return n+((a-e)/l*s||0)})},F_=function t(e,r,n,i){var o=isNaN(e+r)?0:function(p){return(1-p)*e+p*r};if(!o){var l=pt(e),s={},a,u,c,h,f;if(n===!0&&(i=1)&&(n=null),l)e={p:e},r={p:r};else if(zt(e)&&!zt(r)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(t(e[u-1],e[u]));h--,o=function(_){_*=h;var m=Math.min(f,~~_);return c[m](_-m)},n=r}else i||(e=Vo(zt(e)?[]:{},e));if(!c){for(a in r)$d.call(s,e,a,"get",r[a]);o=function(_){return Yd(_,s)||(l?e.p:e)}}}return hi(n,o)},xh=function(e,r,n){var i=e.labels,o=Er,l,s,a;for(l in i)s=i[l]-r,s<0==!!n&&s&&o>(s=Math.abs(s))&&(a=l,o=s);return a},dr=function(e,r,n){var i=e.vars,o=i[r],l=Me,s=e._ctx,a,u,c;if(o)return a=i[r+"Params"],u=i.callbackScope||e,n&&ri.length&&Za(),s&&(Me=s),c=a?o.apply(u,a):o.call(u),Me=l,c},_l=function(e){return si(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_t),e.progress()<1&&dr(e,"onInterrupt"),e},ko,B0=[],U0=function(e){if(e)if(e=!e.name&&e.default||e,Dd()||e.headless){var r=e.name,n=We(e),i=r&&!n&&e.init?function(){this._props=[]}:e,o={init:ds,render:Yd,add:$d,kill:tx,modifier:ex,rawVars:0},l={targetTest:0,get:0,getSetter:Hd,aliases:{},register:0};if(Xo(),e!==i){if(sr[r])return;yr(i,yr(Ja(e,o),l)),Vo(i.prototype,Vo(o,Ja(e,l))),sr[i.prop=r]=i,e.targetTest&&(_a.push(i),Fd[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}S0(r,i),e.register&&e.register(tr,i,Jt)}else B0.push(e)},Te=255,xl={aqua:[0,Te,Te],lime:[0,Te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Te],navy:[0,0,128],white:[Te,Te,Te],olive:[128,128,0],yellow:[Te,Te,0],orange:[Te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Te,0,0],pink:[Te,192,203],cyan:[0,Te,Te],transparent:[Te,Te,Te,0]},nc=function(e,r,n){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(n-r)*e*6:e<.5?n:e*3<2?r+(n-r)*(2/3-e)*6:r)*Te+.5|0},$0=function(e,r,n){var i=e?Pn(e)?[e>>16,e>>8&Te,e&Te]:0:xl.black,o,l,s,a,u,c,h,f,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xl[e])i=xl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),l=e.charAt(2),s=e.charAt(3),e="#"+o+o+l+l+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Te,i&Te,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Te,e&Te]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(gh),!r)a=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,l=c<=.5?c*(u+1):c+u-c*u,o=c*2-l,i.length>3&&(i[3]*=1),i[0]=nc(a+1/3,o,l),i[1]=nc(a,o,l),i[2]=nc(a-1/3,o,l);else if(~e.indexOf("="))return i=e.match(_0),n&&i.length<4&&(i[3]=1),i}else i=e.match(gh)||xl.transparent;i=i.map(Number)}return r&&!_&&(o=i[0]/Te,l=i[1]/Te,s=i[2]/Te,h=Math.max(o,l,s),f=Math.min(o,l,s),c=(h+f)/2,h===f?a=u=0:(p=h-f,u=c>.5?p/(2-h-f):p/(h+f),a=h===o?(l-s)/p+(l<s?6:0):h===l?(s-o)/p+2:(o-l)/p+4,a*=60),i[0]=~~(a+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},W0=function(e){var r=[],n=[],i=-1;return e.split(ni).forEach(function(o){var l=o.match(wo)||[];r.push.apply(r,l),n.push(i+=l.length+1)}),r.c=n,r},wh=function(e,r,n){var i="",o=(e+i).match(ni),l=r?"hsla(":"rgba(",s=0,a,u,c,h;if(!o)return e;if(o=o.map(function(f){return(f=$0(f,r,1))&&l+(r?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(c=W0(e),a=n.c,a.join(i)!==c.c.join(i)))for(u=e.replace(ni,"1").split(wo),h=u.length-1;s<h;s++)i+=u[s]+(~a.indexOf(s)?o.shift()||l+"0,0,0,0)":(c.length?c:o.length?o:n).shift());if(!u)for(u=e.split(ni),h=u.length-1;s<h;s++)i+=u[s]+o[s];return i+u[h]},ni=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xl)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),I_=/hsl[a]?\(/,V0=function(e){var r=e.join(" "),n;if(ni.lastIndex=0,ni.test(r))return n=I_.test(r),e[1]=wh(e[1],n),e[0]=wh(e[0],n,W0(e[1])),!0},hs,ur=function(){var t=Date.now,e=500,r=33,n=t(),i=n,o=1e3/240,l=o,s=[],a,u,c,h,f,p,_=function m(S){var v=t()-i,g=S===!0,y,w,C,E;if((v>e||v<0)&&(n+=v-r),i+=v,C=i-n,y=C-l,(y>0||g)&&(E=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,l+=y+(y>=o?4:o-y),w=1),g||(a=u(m)),w)for(p=0;p<s.length;p++)s[p](C,f,E,S)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(S){return f/(1e3/(S||60))},wake:function(){w0&&(!mf&&Dd()&&(en=mf=window,Ld=en.document||{},vr.gsap=tr,(en.gsapVersions||(en.gsapVersions=[])).push(tr.version),k0(qa||en.GreenSockGlobals||!en.gsap&&en||{}),B0.forEach(U0)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,a&&h.sleep(),u=c||function(S){return setTimeout(S,l-h.time*1e3+1|0)},hs=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(a),hs=0,u=ds},lagSmoothing:function(S,v){e=S||1/0,r=Math.min(v||33,e)},fps:function(S){o=1e3/(S||240),l=h.time*1e3+o},add:function(S,v,g){var y=v?function(w,C,E,T){S(w,C,E,T),h.remove(y)}:S;return h.remove(S),s[g?"unshift":"push"](y),Xo(),y},remove:function(S,v){~(v=s.indexOf(S))&&s.splice(v,1)&&p>=v&&p--},_listeners:s},h}(),Xo=function(){return!hs&&ur.wake()},he={},B_=/^[\d.\-M][\d.\-,\s]/,U_=/["']/g,$_=function(e){for(var r={},n=e.substr(1,e.length-3).split(":"),i=n[0],o=1,l=n.length,s,a,u;o<l;o++)a=n[o],s=o!==l-1?a.lastIndexOf(","):a.length,u=a.substr(0,s),r[i]=isNaN(u)?u.replace(U_,"").trim():+u,i=a.substr(s+1).trim();return r},W_=function(e){var r=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",r);return e.substring(r,~i&&i<n?e.indexOf(")",n+1):n)},V_=function(e){var r=(e+"").split("("),n=he[r[0]];return n&&r.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[$_(r[1])]:W_(e).split(",").map(b0)):he._CE&&B_.test(e)?he._CE("",e):n},H_=function(e){return function(r){return 1-e(1-r)}},Di=function(e,r){return e&&(We(e)?e:he[e]||V_(e))||r},Ki=function(e,r,n,i){n===void 0&&(n=function(a){return 1-r(1-a)}),i===void 0&&(i=function(a){return a<.5?r(a*2)/2:1-r((1-a)*2)/2});var o={easeIn:r,easeOut:n,easeInOut:i},l;return Zt(e,function(s){he[s]=vr[s]=o,he[l=s.toLowerCase()]=n;for(var a in o)he[l+(a==="easeIn"?".in":a==="easeOut"?".out":".inOut")]=he[s+"."+a]=o[a]}),o},H0=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},ic=function t(e,r,n){var i=r>=1?r:1,o=(n||(e?.3:.45))/(r<1?r:1),l=o/gf*(Math.asin(1/i)||0),s=function(c){return c===1?1:i*Math.pow(2,-10*c)*g_((c-l)*o)+1},a=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:H0(s);return o=gf/o,a.config=function(u,c){return t(e,u,c)},a},oc=function t(e,r){r===void 0&&(r=1.70158);var n=function(l){return l?--l*l*((r+1)*l+r)+1:0},i=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:H0(n);return i.config=function(o){return t(e,o)},i};Zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Ki(t+",Power"+(r-1),e?function(n){return Math.pow(n,r)}:function(n){return n},function(n){return 1-Math.pow(1-n,r)},function(n){return n<.5?Math.pow(n*2,r)/2:1-Math.pow((1-n)*2,r)/2})});he.Linear.easeNone=he.none=he.Linear.easeIn;Ki("Elastic",ic("in"),ic("out"),ic());(function(t,e){var r=1/e,n=2*r,i=2.5*r,o=function(s){return s<r?t*s*s:s<n?t*Math.pow(s-1.5/e,2)+.75:s<i?t*(s-=2.25/e)*s+.9375:t*Math.pow(s-2.625/e,2)+.984375};Ki("Bounce",function(l){return 1-o(1-l)},o)})(7.5625,2.75);Ki("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Ki("Circ",function(t){return-(v0(1-t*t)-1)});Ki("Sine",function(t){return t===1?1:-h_(t*d_)+1});Ki("Back",oc("in"),oc("out"),oc());he.SteppedEase=he.steps=vr.SteppedEase={config:function(e,r){e===void 0&&(e=1);var n=1/e,i=e+(r?0:1),o=r?1:0,l=1-Ce;return function(s){return((i*Cs(0,l,s)|0)+o)*n}}};cs.ease=he["quad.out"];Zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Id+=t+","+t+"Params,"});var Y0=function(e,r){this.id=p_++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:C0,this.set=r?r.getSetter:Hd},gs=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,Yo(this,+r.duration,1,1),this.data=r.data,Me&&(this._ctx=Me,Me.data.push(this)),hs||ur.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Yo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xo(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Nu(this,n),!o._dp||o.parent||j0(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&nn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ce||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),N0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,i):this._repeat?Ho(this._tTime,o)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?eu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ce?0:this._rts,this.totalTime(Cs(-Math.abs(this._delay),this.totalDuration(),o),i!==!1),Cu(this),C_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ce&&(this._tTime-=Ce)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&nn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?eu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=w_);var i=_t;return _t=n,Ud(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_t=i,this},e.globalTime=function(n){for(var i=this,o=arguments.length?n:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_h(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_h(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(kr(this,n),qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qt(i)),this._dur||(this._zTime=-Ce),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ce:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=i&&o<this.endTime(!0)-Ce)},e.eventCallback=function(n,i,o){var l=this.vars;return arguments.length>1?(i?(l[n]=i,o&&(l[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=i)):delete l[n],this):l[n]},e.then=function(n){var i=this,o=i._prom;return new Promise(function(l){var s=We(n)?n:E0,a=function(){var c=i.then;i.then=null,o&&o(),We(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),l(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){_l(this)},t}();yr(gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var Yt=function(t){m0(e,t);function e(n,i){var o;return n===void 0&&(n={}),o=t.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=qt(n.sortChildren),Le&&nn(n.parent||Le,mn(o),i),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&z0(mn(o),n.scrollTrigger),o}var r=e.prototype;return r.to=function(i,o,l){return Ll(0,arguments,this),this},r.from=function(i,o,l){return Ll(1,arguments,this),this},r.fromTo=function(i,o,l,s){return Ll(2,arguments,this),this},r.set=function(i,o,l){return o.duration=0,o.parent=this,Dl(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Ze(i,o,kr(this,l),1),this},r.call=function(i,o,l){return nn(this,Ze.delayedCall(0,i,o),l)},r.staggerTo=function(i,o,l,s,a,u,c){return l.duration=o,l.stagger=l.stagger||s,l.onComplete=u,l.onCompleteParams=c,l.parent=this,new Ze(i,l,kr(this,a)),this},r.staggerFrom=function(i,o,l,s,a,u,c){return l.runBackwards=1,Dl(l).immediateRender=qt(l.immediateRender),this.staggerTo(i,o,l,s,a,u,c)},r.staggerFromTo=function(i,o,l,s,a,u,c,h){return s.startAt=l,Dl(s).immediateRender=qt(s.immediateRender),this.staggerTo(i,o,s,a,u,c,h)},r.render=function(i,o,l){var s=this._time,a=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:Oe(i),h=this._zTime<0!=i<0&&(this._initted||!u),f,p,_,m,S,v,g,y,w,C,E,T;if(this!==Le&&c>a&&i>=0&&(c=a),c!==this._tTime||l||h){if(s!==this._time&&u&&(c+=this._time-s,i+=this._time-s),f=c,w=this._start,y=this._ts,v=!y,h&&(u||(s=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,S=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(S*100+i,o,l);if(f=Oe(c%S),c===a?(m=this._repeat,f=u):(C=Oe(c/S),m=~~C,m&&m===C&&(f=u,m--),f>u&&(f=u)),C=Ho(this._tTime,S),!s&&this._tTime&&C!==m&&this._tTime-C*S-this._dur<=0&&(C=m),E&&m&1&&(f=u-f,T=1),m!==C&&!this._lock){var x=E&&C&1,P=x===(E&&m&1);if(m<C&&(x=!x),s=x?0:c%u?u:c,this._lock=1,this.render(s||(T?0:Oe(m*S)),o,!u)._lock=0,this._tTime=c,!o&&this.parent&&dr(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,C=m),s&&s!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,a=this._tDur,P&&(this._lock=2,s=x?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!v)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=P_(this,Oe(s),Oe(f)),g&&(c-=f-(f=g._start))),this._tTime=c,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&c&&u&&!o&&!C&&(dr(this,"onStart"),this._tTime!==c))return this;if(f>=s&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(i,o,l);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,o,l),f!==this._time||!this._ts&&!v){g=0,_&&(c+=this._zTime=-Ce);break}}p=_}else{p=this._last;for(var b=i<0?i:f;p;){if(_=p._prev,(p._act||b<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(i,o,l);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,o,l||_t&&Ud(p)),f!==this._time||!this._ts&&!v){g=0,_&&(c+=this._zTime=b?-Ce:Ce);break}}p=_}}if(g&&!o&&(this.pause(),g.render(f>=s?0:-Ce)._zTime=f>=s?1:-1,this._ts))return this._start=w,Cu(this),this.render(i,o,l);this._onUpdate&&!o&&dr(this,"onUpdate",!0),(c===a&&this._tTime>=this.totalDuration()||!c&&s)&&(w===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===a&&this._ts>0||!c&&this._ts<0)&&si(this,1),!o&&!(i<0&&!s)&&(c||s||!a)&&(dr(this,c===a&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<a&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,o){var l=this;if(Pn(o)||(o=kr(this,o,i)),!(i instanceof gs)){if(zt(i))return i.forEach(function(s){return l.add(s,o)}),this;if(pt(i))return this.addLabel(i,o);if(We(i))i=Ze.delayedCall(0,i);else return this}return this!==i?nn(this,i,o):this},r.getChildren=function(i,o,l,s){i===void 0&&(i=!0),o===void 0&&(o=!0),l===void 0&&(l=!0),s===void 0&&(s=-Er);for(var a=[],u=this._first;u;)u._start>=s&&(u instanceof Ze?o&&a.push(u):(l&&a.push(u),i&&a.push.apply(a,u.getChildren(!0,o,l)))),u=u._next;return a},r.getById=function(i){for(var o=this.getChildren(1,1,1),l=o.length;l--;)if(o[l].vars.id===i)return o[l]},r.remove=function(i){return pt(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&Tu(this,i),i===this._recent&&(this._recent=this._last),Oi(this))},r.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(ur.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},r.addLabel=function(i,o){return this.labels[i]=kr(this,o),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,o,l){var s=Ze.delayedCall(0,o||ds,l);return s.data="isPause",this._hasPause=1,nn(this,s,kr(this,i))},r.removePause=function(i){var o=this._first;for(i=kr(this,i);o;)o._start===i&&o.data==="isPause"&&si(o),o=o._next},r.killTweensOf=function(i,o,l){for(var s=this.getTweensOf(i,l),a=s.length;a--;)Wn!==s[a]&&s[a].kill(i,o);return this},r.getTweensOf=function(i,o){for(var l=[],s=Pr(i),a=this._first,u=Pn(o),c;a;)a instanceof Ze?k_(a._targets,s)&&(u?(!Wn||a._initted&&a._ts)&&a.globalTime(0)<=o&&a.globalTime(a.totalDuration())>o:!o||a.isActive())&&l.push(a):(c=a.getTweensOf(s,o)).length&&l.push.apply(l,c),a=a._next;return l},r.tweenTo=function(i,o){o=o||{};var l=this,s=kr(l,i),a=o,u=a.startAt,c=a.onStart,h=a.onStartParams,f=a.immediateRender,p,_=Ze.to(l,yr({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:o.duration||Math.abs((s-(u&&"time"in u?u.time:l._time))/l.timeScale())||Ce,onStart:function(){if(l.pause(),!p){var S=o.duration||Math.abs((s-(u&&"time"in u?u.time:l._time))/l.timeScale());_._dur!==S&&Yo(_,S,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,h||[])}},o));return f?_.render(0):_},r.tweenFromTo=function(i,o,l){return this.tweenTo(o,yr({startAt:{time:kr(this,i)}},l))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),xh(this,kr(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),xh(this,kr(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ce)},r.shiftChildren=function(i,o,l){l===void 0&&(l=0);var s=this._first,a=this.labels,u;for(i=Oe(i);s;)s._start>=l&&(s._start+=i,s._end+=i),s=s._next;if(o)for(u in a)a[u]>=l&&(a[u]+=i);return Oi(this)},r.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return t.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,l;o;)l=o._next,this.remove(o),o=l;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Oi(this)},r.totalDuration=function(i){var o=0,l=this,s=l._last,a=Er,u,c,h;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-i:i));if(l._dirty){for(h=l.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>a&&l._sort&&s._ts&&!l._lock?(l._lock=1,nn(l,s,c-s._delay,1)._lock=0):a=c,c<0&&s._ts&&(o-=c,(!h&&!l._dp||h&&h.smoothChildTiming)&&(l._start+=Oe(c/l._ts),l._time-=c,l._tTime-=c),l.shiftChildren(-c,!1,-1/0),a=0),s._end>o&&s._ts&&(o=s._end),s=u;Yo(l,l===Le&&l._time>o?l._time:o,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(i){if(Le._ts&&(N0(Le,eu(i,Le)),T0=ur.frame),ur.frame>=mh){mh+=gr.autoSleep||120;var o=Le._first;if((!o||!o._ts)&&gr.autoSleep&&ur._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||ur.sleep()}}},e}(gs);yr(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Y_=function(e,r,n,i,o,l,s){var a=new Jt(this._pt,e,r,0,1,Z0,null,o),u=0,c=0,h,f,p,_,m,S,v,g;for(a.b=n,a.e=i,n+="",i+="",(v=~i.indexOf("random("))&&(i=ps(i)),l&&(g=[n,i],l(g,e,r),n=g[0],i=g[1]),f=n.match(tc)||[];h=tc.exec(i);)_=h[0],m=i.substring(u,h.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(S=parseFloat(f[c-1])||0,a._pt={_next:a._pt,p:m||c===1?m:",",s:S,c:_.charAt(1)==="="?jo(S,_)-S:parseFloat(_)-S,m:p&&p<4?Math.round:0},u=tc.lastIndex);return a.c=u<i.length?i.substring(u,i.length):"",a.fp=s,(x0.test(i)||v)&&(a.e=0),this._pt=a,a},$d=function(e,r,n,i,o,l,s,a,u,c){We(i)&&(i=i(o||0,e,l));var h=e[r],f=n!=="get"?n:We(h)?u?e[r.indexOf("set")||!We(e["get"+r.substr(3)])?r:"get"+r.substr(3)](u):e[r]():h,p=We(h)?u?q_:K0:Vd,_;if(pt(i)&&(~i.indexOf("random(")&&(i=ps(i)),i.charAt(1)==="="&&(_=jo(f,i)+(Pt(f)||0),(_||_===0)&&(i=_))),!c||f!==i||Sf)return!isNaN(f*i)&&i!==""?(_=new Jt(this._pt,e,r,+f||0,i-(f||0),typeof h=="boolean"?J_:q0,0,p),u&&(_.fp=u),s&&_.modifier(s,this,e),this._pt=_):(!h&&!(r in e)&&Ad(r,i),Y_.call(this,e,r,f,i,p,a||gr.stringFilter,u))},X_=function(e,r,n,i,o){if(We(e)&&(e=Al(e,o,r,n,i)),!cn(e)||e.style&&e.nodeType||zt(e)||y0(e))return pt(e)?Al(e,o,r,n,i):e;var l={},s;for(s in e)l[s]=Al(e[s],o,r,n,i);return l},X0=function(e,r,n,i,o,l){var s,a,u,c;if(sr[e]&&(s=new sr[e]).init(o,s.rawVars?r[e]:X_(r[e],i,o,l,n),n,i,l)!==!1&&(n._pt=a=new Jt(n._pt,o,e,0,1,s.render,s,0,s.priority),n!==ko))for(u=n._ptLookup[n._targets.indexOf(o)],c=s._props.length;c--;)u[s._props[c]]=a;return s},Wn,Sf,Wd=function t(e,r,n){var i=e.vars,o=i.ease,l=i.startAt,s=i.immediateRender,a=i.lazy,u=i.onUpdate,c=i.runBackwards,h=i.yoyoEase,f=i.keyframes,p=i.autoRevert,_=e._dur,m=e._startAt,S=e._targets,v=e.parent,g=v&&v.data==="nested"?v.vars.targets:S,y=e._overwrite==="auto"&&!Rd,w=e.timeline,C=i.easeReverse||h,E,T,x,P,b,$,O,Z,G,oe,J,U,j;if(w&&(!f||!o)&&(o="none"),e._ease=Di(o,cs.ease),e._rEase=C&&(Di(C)||e._ease),e._from=!w&&!!i.runBackwards,e._from&&(e.ratio=1),!w||f&&!i.stagger){if(Z=S[0]?Ri(S[0]).harness:0,U=Z&&i[Z.prop],E=Ja(i,Fd),m&&(m._zTime<0&&m.progress(1),r<0&&c&&s&&!p?m.render(-1,!0):m.revert(c&&_?ya:x_),m._lazy=0),l){if(si(e._startAt=Ze.set(S,yr({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!m&&qt(a),startAt:null,delay:0,onUpdate:u&&function(){return dr(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(_t||!s&&!p)&&e._startAt.revert(ya),s&&_&&r<=0&&n<=0){r&&(e._zTime=r);return}}else if(c&&_&&!m){if(r&&(s=!1),x=yr({overwrite:!1,data:"isFromStart",lazy:s&&!m&&qt(a),immediateRender:s,stagger:0,parent:v},E),U&&(x[Z.prop]=U),si(e._startAt=Ze.set(S,x)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(_t?e._startAt.revert(ya):e._startAt.render(-1,!0)),e._zTime=r,!s)t(e._startAt,Ce,Ce);else if(!r)return}for(e._pt=e._ptCache=0,a=_&&qt(a)||a&&!_,T=0;T<S.length;T++){if(b=S[T],O=b._gsap||Bd(S)[T]._gsap,e._ptLookup[T]=oe={},vf[O.id]&&ri.length&&Za(),J=g===S?T:g.indexOf(b),Z&&(G=new Z).init(b,U||E,e,J,g)!==!1&&(e._pt=P=new Jt(e._pt,b,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(F){oe[F]=P}),G.priority&&($=1)),!Z||U)for(x in E)sr[x]&&(G=X0(x,E,e,J,b,g))?G.priority&&($=1):oe[x]=P=$d.call(e,b,x,"get",E[x],J,g,0,i.stringFilter);e._op&&e._op[T]&&e.kill(b,e._op[T]),y&&e._pt&&(Wn=e,Le.killTweensOf(b,oe,e.globalTime(r)),j=!e.parent,Wn=0),e._pt&&a&&(vf[O.id]=1)}$&&J0(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!j,f&&r<=0&&w.render(Er,!0,!0)},G_=function(e,r,n,i,o,l,s,a){var u=(e._pt&&e._ptCache||(e._ptCache={}))[r],c,h,f,p;if(!u)for(u=e._ptCache[r]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][r],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==r&&c.fp!==r;)c=c._next;if(!c)return Sf=1,e.vars[r]="+=0",Wd(e,s),Sf=0,a?fs(r+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(i||i===0)&&!o?i:c.s+(i||0)+l*c.c,c.c=n-c.s,h.e&&(h.e=Xe(n)+Pt(h.e)),h.b&&(h.b=c.s+Pt(h.b))},Q_=function(e,r){var n=e[0]?Ri(e[0]).harness:0,i=n&&n.aliases,o,l,s,a;if(!i)return r;o=Vo({},r);for(l in i)if(l in o)for(a=i[l].split(","),s=a.length;s--;)o[a[s]]=o[l];return o},K_=function(e,r,n,i){var o=r.ease||i||"power1.inOut",l,s;if(zt(r))s=n[e]||(n[e]=[]),r.forEach(function(a,u){return s.push({t:u/(r.length-1)*100,v:a,e:o})});else for(l in r)s=n[l]||(n[l]=[]),l==="ease"||s.push({t:parseFloat(e),v:r[l],e:o})},Al=function(e,r,n,i,o){return We(e)?e.call(r,n,i,o):pt(e)&&~e.indexOf("random(")?ps(e):e},G0=Id+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Q0={};Zt(G0+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Q0[t]=1});var Ze=function(t){m0(e,t);function e(n,i,o,l){var s;typeof i=="number"&&(o.duration=i,i=o,o=null),s=t.call(this,l?i:Dl(i))||this;var a=s.vars,u=a.duration,c=a.delay,h=a.immediateRender,f=a.stagger,p=a.overwrite,_=a.keyframes,m=a.defaults,S=a.scrollTrigger,v=i.parent||Le,g=(zt(n)||y0(n)?Pn(n[0]):"length"in i)?[n]:Pr(n),y,w,C,E,T,x,P,b;if(s._targets=g.length?Bd(g):fs("GSAP target "+n+" not found. https://gsap.com",!gr.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=p,_||f||Ys(u)||Ys(c)){i=s.vars;var $=i.easeReverse||i.yoyoEase;if(y=s.timeline=new Yt({data:"nested",defaults:m||{},targets:v&&v.data==="nested"?v.vars.targets:g}),y.kill(),y.parent=y._dp=mn(s),y._start=0,f||Ys(u)||Ys(c)){if(E=g.length,P=f&&D0(f),cn(f))for(T in f)~G0.indexOf(T)&&(b||(b={}),b[T]=f[T]);for(w=0;w<E;w++)C=Ja(i,Q0),C.stagger=0,$&&(C.easeReverse=$),b&&Vo(C,b),x=g[w],C.duration=+Al(u,mn(s),w,x,g),C.delay=(+Al(c,mn(s),w,x,g)||0)-s._delay,!f&&E===1&&C.delay&&(s._delay=c=C.delay,s._start+=c,C.delay=0),y.to(x,C,P?P(w,x,g):0),y._ease=he.none;y.duration()?u=c=0:s.timeline=0}else if(_){Dl(yr(y.vars.defaults,{ease:"none"})),y._ease=Di(_.ease||i.ease||"none");var O=0,Z,G,oe;if(zt(_))_.forEach(function(J){return y.to(g,J,">")}),y.duration();else{C={};for(T in _)T==="ease"||T==="easeEach"||K_(T,_[T],C,_.easeEach);for(T in C)for(Z=C[T].sort(function(J,U){return J.t-U.t}),O=0,w=0;w<Z.length;w++)G=Z[w],oe={ease:G.e,duration:(G.t-(w?Z[w-1].t:0))/100*u},oe[T]=G.v,y.to(g,oe,O),O+=oe.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||s.duration(u=y.duration())}else s.timeline=0;return p===!0&&!Rd&&(Wn=mn(s),Le.killTweensOf(g),Wn=0),nn(v,mn(s),o),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!u&&!_&&s._start===Oe(v._time)&&qt(h)&&N_(mn(s))&&v.data!=="nested")&&(s._tTime=-Ce,s.render(Math.max(0,-c)||0)),S&&z0(mn(s),S),s}var r=e.prototype;return r.render=function(i,o,l){var s=this._time,a=this._tDur,u=this._dur,c=i<0,h=i>a-Ce&&!c?a:i<Ce?0:i,f,p,_,m,S,v,g,y;if(!u)E_(this,i,o,l);else if(h!==this._tTime||!i||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,y=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+i,o,l);if(f=Oe(h%m),h===a?(_=this._repeat,f=u):(S=Oe(h/m),_=~~S,_&&_===S?(f=u,_--):f>u&&(f=u)),v=this._yoyo&&_&1,v&&(f=u-f),S=Ho(this._tTime,m),f===s&&!l&&this._initted&&_===S)return this._tTime=h,this;_!==S&&this.vars.repeatRefresh&&!v&&!this._lock&&f!==m&&this._initted&&(this._lock=l=1,this.render(Oe(m*_),!0).invalidate()._lock=0)}if(!this._initted){if(M0(this,c?i:f,l,o,h))return this._tTime=0,this;if(s!==this._time&&!(l&&this.vars.repeatRefresh&&_!==S))return this;if(u!==this._dur)return this.render(i,o,l)}if(this._rEase){var w=f<s;if(w!==this._inv){var C=w?s:u-s;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=C?(w?-1:1)/C:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(f/u);if(this._from&&(this.ratio=g=1-g),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!o&&!S&&(dr(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),o,l)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(c&&yf(this,i,o,l),dr(this,"onUpdate")),this._repeat&&_!==S&&this.vars.onRepeat&&!o&&this.parent&&dr(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&yf(this,i,!0,!0),(i||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&si(this,1),!o&&!(c&&!s)&&(h||s||v)&&(dr(this,h===a?"onComplete":"onReverseComplete",!0),this._prom&&!(h<a&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},r.resetTo=function(i,o,l,s,a){hs||ur.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Wd(this,u),c=this._ease(u/this._dur),G_(this,i,o,l,s,c,u,a)?this.resetTo(i,o,l,s,1):(Nu(this,0),this.parent||P0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?_l(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_t),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,Wn&&Wn.vars.overwrite!==!0)._first||_l(this),this.parent&&l!==this.timeline.totalDuration()&&Yo(this,this._dur*this.timeline._tDur/l,0,1),this}var s=this._targets,a=i?Pr(i):s,u=this._ptLookup,c=this._pt,h,f,p,_,m,S,v;if((!o||o==="all")&&T_(s,a))return o==="all"&&(this._pt=0),_l(this);for(h=this._op=this._op||[],o!=="all"&&(pt(o)&&(m={},Zt(o,function(g){return m[g]=1}),o=m),o=Q_(s,o)),v=s.length;v--;)if(~a.indexOf(s[v])){f=u[v],o==="all"?(h[v]=o,_=f,p={}):(p=h[v]=h[v]||{},_=o);for(m in _)S=f&&f[m],S&&((!("kill"in S.d)||S.d.kill(m)===!0)&&Tu(this,S,"_pt"),delete f[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&_l(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return Ll(1,arguments)},e.delayedCall=function(i,o,l,s){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:s})},e.fromTo=function(i,o,l){return Ll(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,l){return Le.killTweensOf(i,o,l)},e}(gs);yr(Ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zt("staggerTo,staggerFrom,staggerFromTo",function(t){Ze[t]=function(){var e=new Yt,r=xf.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var Vd=function(e,r,n){return e[r]=n},K0=function(e,r,n){return e[r](n)},q_=function(e,r,n,i){return e[r](i.fp,n)},Z_=function(e,r,n){return e.setAttribute(r,n)},Hd=function(e,r){return We(e[r])?K0:Od(e[r])&&e.setAttribute?Z_:Vd},q0=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},J_=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},Z0=function(e,r){var n=r._pt,i="";if(!e&&r.b)i=r.b;else if(e===1&&r.e)i=r.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=r.c}r.set(r.t,r.p,i,r)},Yd=function(e,r){for(var n=r._pt;n;)n.r(e,n.d),n=n._next},ex=function(e,r,n,i){for(var o=this._pt,l;o;)l=o._next,o.p===i&&o.modifier(e,r,n),o=l},tx=function(e){for(var r=this._pt,n,i;r;)i=r._next,r.p===e&&!r.op||r.op===e?Tu(this,r,"_pt"):r.dep||(n=1),r=i;return!n},rx=function(e,r,n,i){i.mSet(e,r,i.m.call(i.tween,n,i.mt),i)},J0=function(e){for(var r=e._pt,n,i,o,l;r;){for(n=r._next,i=o;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:l)?r._prev._next=r:o=r,(r._next=i)?i._prev=r:l=r,r=n}e._pt=o},Jt=function(){function t(r,n,i,o,l,s,a,u,c){this.t=n,this.s=o,this.c=l,this.p=i,this.r=s||q0,this.d=a||this,this.set=u||Vd,this.pr=c||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(n,i,o){this.mSet=this.mSet||this.set,this.set=rx,this.m=n,this.mt=o,this.tween=i},t}();Zt(Id+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return Fd[t]=1});vr.TweenMax=vr.TweenLite=Ze;vr.TimelineLite=vr.TimelineMax=Yt;Le=new Yt({sortChildren:!1,defaults:cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gr.stringFilter=V0;var Li=[],xa={},nx=[],kh=0,ix=0,lc=function(e){return(xa[e]||nx).map(function(r){return r()})},Tf=function(){var e=Date.now(),r=[];e-kh>2&&(lc("matchMediaInit"),Li.forEach(function(n){var i=n.queries,o=n.conditions,l,s,a,u;for(s in i)l=en.matchMedia(i[s]).matches,l&&(a=1),l!==o[s]&&(o[s]=l,u=1);u&&(n.revert(),a&&r.push(n))}),lc("matchMediaRevert"),r.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kh=e,lc("matchMedia"))},e1=function(){function t(r,n){this.selector=n&&wf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ix++,r&&this.add(r)}var e=t.prototype;return e.add=function(n,i,o){We(n)&&(o=i,i=n,n=We);var l=this,s=function(){var u=Me,c=l.selector,h;return u&&u!==l&&u.data.push(l),o&&(l.selector=wf(o)),Me=l,h=i.apply(l,arguments),We(h)&&l._r.push(h),Me=u,l.selector=c,l.isReverted=!1,h};return l.last=s,n===We?s(l,function(a){return l.add(null,a)}):n?l[n]=s:s},e.ignore=function(n){var i=Me;Me=null,n(this),Me=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof t?n.push.apply(n,i.getTweens()):i instanceof Ze&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var o=this;if(n?function(){for(var s=o.getTweens(),a=o.data.length,u;a--;)u=o.data[a],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),a=o.data.length;a--;)u=o.data[a],u instanceof Yt?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ze)&&u.revert&&u.revert(n);o._r.forEach(function(c){return c(n,o)}),o.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var l=Li.length;l--;)Li[l].id===this.id&&Li.splice(l,1)},e.revert=function(n){this.kill(n||{})},t}(),ox=function(){function t(r){this.contexts=[],this.scope=r,Me&&Me.data.push(this)}var e=t.prototype;return e.add=function(n,i,o){cn(n)||(n={matches:n});var l=new e1(0,o||this.scope),s=l.conditions={},a,u,c;Me&&!l.selector&&(l.selector=Me.selector),this.contexts.push(l),i=l.add("onMatch",i),l.queries=n;for(u in n)u==="all"?c=1:(a=en.matchMedia(n[u]),a&&(Li.indexOf(l)<0&&Li.push(l),(s[u]=a.matches)&&(c=1),a.addListener?a.addListener(Tf):a.addEventListener("change",Tf)));return c&&i(l,function(h){return l.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},t}(),tu={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(function(i){return U0(i)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,r){return Le.getTweensOf(e,r)},getProperty:function(e,r,n,i){pt(e)&&(e=Pr(e)[0]);var o=Ri(e||{}).get,l=n?E0:b0;return n==="native"&&(n=""),e&&(r?l((sr[r]&&sr[r].get||o)(e,r,n,i)):function(s,a,u){return l((sr[s]&&sr[s].get||o)(e,s,a,u))})},quickSetter:function(e,r,n){if(e=Pr(e),e.length>1){var i=e.map(function(c){return tr.quickSetter(c,r,n)}),o=i.length;return function(c){for(var h=o;h--;)i[h](c)}}e=e[0]||{};var l=sr[r],s=Ri(e),a=s.harness&&(s.harness.aliases||{})[r]||r,u=l?function(c){var h=new l;ko._pt=0,h.init(e,n?c+n:c,ko,0,[e]),h.render(1,h),ko._pt&&Yd(1,ko)}:s.set(e,a);return l?u:function(c){return u(e,a,n?c+n:c,s,1)}},quickTo:function(e,r,n){var i,o=tr.to(e,yr((i={},i[r]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),l=function(a,u,c){return o.resetTo(r,a,u,c)};return l.tween=o,l},isTweening:function(e){return Le.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Di(e.ease,cs.ease)),vh(cs,e||{})},config:function(e){return vh(gr,e||{})},registerEffect:function(e){var r=e.name,n=e.effect,i=e.plugins,o=e.defaults,l=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!sr[s]&&!vr[s]&&fs(r+" effect requires "+s+" plugin.")}),rc[r]=function(s,a,u){return n(Pr(s),yr(a||{},o),u)},l&&(Yt.prototype[r]=function(s,a,u){return this.add(rc[r](s,cn(a)?a:(u=a)&&{},this),u)})},registerEase:function(e,r){he[e]=Di(r)},parseEase:function(e,r){return arguments.length?Di(e,r):he},getById:function(e){return Le.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var n=new Yt(e),i,o;for(n.smoothChildTiming=qt(e.smoothChildTiming),Le.remove(n),n._dp=0,n._time=n._tTime=Le._time,i=Le._first;i;)o=i._next,(r||!(!i._dur&&i instanceof Ze&&i.vars.onComplete===i._targets[0]))&&nn(n,i,i._start-i._delay),i=o;return nn(Le,n,0),n},context:function(e,r){return e?new e1(e,r):Me},matchMedia:function(e){return new ox(e)},matchMediaRefresh:function(){return Li.forEach(function(e){var r=e.conditions,n,i;for(i in r)r[i]&&(r[i]=!1,n=1);n&&e.revert()})||Tf()},addEventListener:function(e,r){var n=xa[e]||(xa[e]=[]);~n.indexOf(r)||n.push(r)},removeEventListener:function(e,r){var n=xa[e],i=n&&n.indexOf(r);i>=0&&n.splice(i,1)},utils:{wrap:L_,wrapYoyo:A_,distribute:D0,random:A0,snap:L0,normalize:D_,getUnit:Pt,clamp:z_,splitColor:$0,toArray:Pr,selector:wf,mapRange:I0,pipe:R_,unitize:O_,interpolate:F_,shuffle:O0},install:k0,effects:rc,ticker:ur,updateRoot:Yt.updateRoot,plugins:sr,globalTimeline:Le,core:{PropTween:Jt,globals:S0,Tween:Ze,Timeline:Yt,Animation:gs,getCache:Ri,_removeLinkedListItem:Tu,reverting:function(){return _t},context:function(e){return e&&Me&&(Me.data.push(e),e._ctx=Me),Me},suppressOverwrites:function(e){return Rd=e}}};Zt("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return tu[t]=Ze[t]});ur.add(Yt.updateRoot);ko=tu.to({},{duration:0});var lx=function(e,r){for(var n=e._pt;n&&n.p!==r&&n.op!==r&&n.fp!==r;)n=n._next;return n},sx=function(e,r){var n=e._targets,i,o,l;for(i in r)for(o=n.length;o--;)l=e._ptLookup[o][i],l&&(l=l.d)&&(l._pt&&(l=lx(l,i)),l&&l.modifier&&l.modifier(r[i],e,n[o],i))},sc=function(e,r){return{name:e,headless:1,rawVars:1,init:function(i,o,l){l._onInit=function(s){var a,u;if(pt(o)&&(a={},Zt(o,function(c){return a[c]=1}),o=a),r){a={};for(u in o)a[u]=r(o[u]);o=a}sx(s,o)}}}},tr=tu.registerPlugin({name:"attr",init:function(e,r,n,i,o){var l,s,a;this.tween=n;for(l in r)a=e.getAttribute(l)||"",s=this.add(e,"setAttribute",(a||0)+"",r[l],i,o,0,0,l),s.op=l,s.b=a,this._props.push(l)},render:function(e,r){for(var n=r._pt;n;)_t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,r){for(var n=r.length;n--;)this.add(e,n,e[n]||0,r[n],0,0,0,0,0,1)}},sc("roundProps",kf),sc("modifiers"),sc("snap",L0))||tu;Ze.version=Yt.version=tr.version="3.15.0";w0=1;Dd()&&Xo();he.Power0;he.Power1;he.Power2;he.Power3;he.Power4;he.Linear;he.Quad;he.Cubic;he.Quart;he.Quint;he.Strong;he.Elastic;he.Back;he.SteppedEase;he.Bounce;he.Sine;he.Expo;he.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sh,Vn,zo,Xd,Pi,Th,Gd,ax=function(){return typeof window<"u"},jn={},Si=180/Math.PI,Mo=Math.PI/180,to=Math.atan2,Ch=1e8,Qd=/([A-Z])/g,ux=/(left|right|width|margin|padding|x)/i,cx=/[\s,\(]\S/,on={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cf=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},fx=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},dx=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},px=function(e,r){return r.set(r.t,r.p,e===1?r.e:e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},hx=function(e,r){var n=r.s+r.c*e;r.set(r.t,r.p,~~(n+(n<0?-.5:.5))+r.u,r)},t1=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},r1=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},gx=function(e,r,n){return e.style[r]=n},mx=function(e,r,n){return e.style.setProperty(r,n)},vx=function(e,r,n){return e._gsap[r]=n},yx=function(e,r,n){return e._gsap.scaleX=e._gsap.scaleY=n},_x=function(e,r,n,i,o){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(o,l)},xx=function(e,r,n,i,o){var l=e._gsap;l[r]=n,l.renderTransform(o,l)},Ae="transform",er=Ae+"Origin",wx=function t(e,r){var n=this,i=this.target,o=i.style,l=i._gsap;if(e in jn&&o){if(this.tfm=this.tfm||{},e!=="transform")e=on[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=yn(i,s)}):this.tfm[e]=l.x?l[e]:yn(i,e),e===er&&(this.tfm.zOrigin=l.zOrigin);else return on.transform.split(",").forEach(function(s){return t.call(n,s,r)});if(this.props.indexOf(Ae)>=0)return;l.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(er,r,"")),e=Ae}(o||r)&&this.props.push(e,r,o[e])},n1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kx=function(){var e=this.props,r=this.target,n=r.style,i=r._gsap,o,l;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?r[e[o]](e[o+2]):r[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Qd,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)i[l]=this.tfm[l];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),o=Gd(),(!o||!o.isStart)&&!n[Ae]&&(n1(n),i.zOrigin&&n[er]&&(n[er]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},i1=function(e,r){var n={target:e,props:[],revert:kx,save:wx};return e._gsap||tr.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(i){return n.save(i)}),n},o1,Nf=function(e,r){var n=Vn.createElementNS?Vn.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Vn.createElement(e);return n&&n.style?n:Vn.createElement(e)},pr=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(Qd,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,Go(r)||r,1)||""},Nh="O,Moz,ms,Ms,Webkit".split(","),Go=function(e,r,n){var i=r||Pi,o=i.style,l=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(Nh[l]+e in o););return l<0?null:(l===3?"ms":l>=0?Nh[l]:"")+e},bf=function(){ax()&&window.document&&(Sh=window,Vn=Sh.document,zo=Vn.documentElement,Pi=Nf("div")||{style:{}},Nf("div"),Ae=Go(Ae),er=Ae+"Origin",Pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",o1=!!Go("perspective"),Gd=tr.core.reverting,Xd=1)},bh=function(e){var r=e.ownerSVGElement,n=Nf("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),o;i.style.display="block",n.appendChild(i),zo.appendChild(n);try{o=i.getBBox()}catch{}return n.removeChild(i),zo.removeChild(n),o},Eh=function(e,r){for(var n=r.length;n--;)if(e.hasAttribute(r[n]))return e.getAttribute(r[n])},l1=function(e){var r,n;try{r=e.getBBox()}catch{r=bh(e),n=1}return r&&(r.width||r.height)||n||(r=bh(e)),r&&!r.width&&!r.x&&!r.y?{x:+Eh(e,["x","cx","x1"])||0,y:+Eh(e,["y","cy","y1"])||0,width:0,height:0}:r},s1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&l1(e))},ai=function(e,r){if(r){var n=e.style,i;r in jn&&r!==er&&(r=Ae),n.removeProperty?(i=r.substr(0,2),(i==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),n.removeProperty(i==="--"?r:r.replace(Qd,"-$1").toLowerCase())):n.removeAttribute(r)}},Hn=function(e,r,n,i,o,l){var s=new Jt(e._pt,r,n,0,1,l?r1:t1);return e._pt=s,s.b=i,s.e=o,e._props.push(n),s},Ph={deg:1,rad:1,turn:1},Sx={grid:1,flex:1},ui=function t(e,r,n,i){var o=parseFloat(n)||0,l=(n+"").trim().substr((o+"").length)||"px",s=Pi.style,a=ux.test(r),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(a?"Width":"Height"),h=100,f=i==="px",p=i==="%",_,m,S,v;if(i===l||!o||Ph[i]||Ph[l])return o;if(l!=="px"&&!f&&(o=t(e,r,n,"px")),v=e.getCTM&&s1(e),(p||l==="%")&&(jn[r]||~r.indexOf("adius")))return _=v?e.getBBox()[a?"width":"height"]:e[c],Xe(p?o/_*h:o/100*_);if(s[a?"width":"height"]=h+(f?l:i),m=i!=="rem"&&~r.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,v&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Vn||!m.appendChild)&&(m=Vn.body),S=m._gsap,S&&p&&S.width&&a&&S.time===ur.time&&!S.uncache)return Xe(o/S.width*h);if(p&&(r==="height"||r==="width")){var g=e.style[r];e.style[r]=h+i,_=e[c],g?e.style[r]=g:ai(e,r)}else(p||l==="%")&&!Sx[pr(m,"display")]&&(s.position=pr(e,"position")),m===e&&(s.position="static"),m.appendChild(Pi),_=Pi[c],m.removeChild(Pi),s.position="absolute";return a&&p&&(S=Ri(m),S.time=ur.time,S.width=m[c]),Xe(f?_*o/h:_&&o?h/_*o:0)},yn=function(e,r,n,i){var o;return Xd||bf(),r in on&&r!=="transform"&&(r=on[r],~r.indexOf(",")&&(r=r.split(",")[0])),jn[r]&&r!=="transform"?(o=vs(e,i),o=r!=="transformOrigin"?o[r]:o.svg?o.origin:nu(pr(e,er))+" "+o.zOrigin+"px"):(o=e.style[r],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=ru[r]&&ru[r](e,r,n)||pr(e,r)||C0(e,r)||(r==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?ui(e,r,o,n)+n:o},Tx=function(e,r,n,i){if(!n||n==="none"){var o=Go(r,e,1),l=o&&pr(e,o,1);l&&l!==n?(r=o,n=l):r==="borderColor"&&(n=pr(e,"borderTopColor"))}var s=new Jt(this._pt,e.style,r,0,1,Z0),a=0,u=0,c,h,f,p,_,m,S,v,g,y,w,C;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=pr(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=e.style[r],e.style[r]=i,i=pr(e,r)||i,m?e.style[r]=m:ai(e,r)),c=[n,i],V0(c),n=c[0],i=c[1],f=n.match(wo)||[],C=i.match(wo)||[],C.length){for(;h=wo.exec(i);)S=h[0],g=i.substring(a,h.index),_?_=(_+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(_=1),S!==(m=f[u++]||"")&&(p=parseFloat(m)||0,w=m.substr((p+"").length),S.charAt(1)==="="&&(S=jo(p,S)+w),v=parseFloat(S),y=S.substr((v+"").length),a=wo.lastIndex-y.length,y||(y=y||gr.units[r]||w,a===i.length&&(i+=y,s.e+=y)),w!==y&&(p=ui(e,r,m,y)||0),s._pt={_next:s._pt,p:g||u===1?g:",",s:p,c:v-p,m:_&&_<4||r==="zIndex"?Math.round:0});s.c=a<i.length?i.substring(a,i.length):""}else s.r=r==="display"&&i==="none"?r1:t1;return x0.test(i)&&(s.e=0),this._pt=s,s},jh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Cx=function(e){var r=e.split(" "),n=r[0],i=r[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),r[0]=jh[n]||n,r[1]=jh[i]||i,r.join(" ")},Nx=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var n=r.t,i=n.style,o=r.u,l=n._gsap,s,a,u;if(o==="all"||o===!0)i.cssText="",a=1;else for(o=o.split(","),u=o.length;--u>-1;)s=o[u],jn[s]&&(a=1,s=s==="transformOrigin"?er:Ae),ai(n,s);a&&(ai(n,Ae),l&&(l.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",vs(n,1),l.uncache=1,n1(i)))}},ru={clearProps:function(e,r,n,i,o){if(o.data!=="isFromStart"){var l=e._pt=new Jt(e._pt,r,n,0,0,Nx);return l.u=i,l.pr=-10,l.tween=o,e._props.push(n),1}}},ms=[1,0,0,1,0,0],a1={},u1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zh=function(e){var r=pr(e,Ae);return u1(r)?ms:r.substr(7).match(_0).map(Xe)},Kd=function(e,r){var n=e._gsap||Ri(e),i=e.style,o=zh(e),l,s,a,u;return n.svg&&e.getAttribute("transform")?(a=e.transform.baseVal.consolidate().matrix,o=[a.a,a.b,a.c,a.d,a.e,a.f],o.join(",")==="1,0,0,1,0,0"?ms:o):(o===ms&&!e.offsetParent&&e!==zo&&!n.svg&&(a=i.display,i.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,s=e.nextElementSibling,zo.appendChild(e)),o=zh(e),a?i.display=a:ai(e,"display"),u&&(s?l.insertBefore(e,s):l?l.appendChild(e):zo.removeChild(e))),r&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Ef=function(e,r,n,i,o,l){var s=e._gsap,a=o||Kd(e,!0),u=s.xOrigin||0,c=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,p=a[0],_=a[1],m=a[2],S=a[3],v=a[4],g=a[5],y=r.split(" "),w=parseFloat(y[0])||0,C=parseFloat(y[1])||0,E,T,x,P;n?a!==ms&&(T=p*S-_*m)&&(x=w*(S/T)+C*(-m/T)+(m*g-S*v)/T,P=w*(-_/T)+C*(p/T)-(p*g-_*v)/T,w=x,C=P):(E=l1(e),w=E.x+(~y[0].indexOf("%")?w/100*E.width:w),C=E.y+(~(y[1]||y[0]).indexOf("%")?C/100*E.height:C)),i||i!==!1&&s.smooth?(v=w-u,g=C-c,s.xOffset=h+(v*p+g*m)-v,s.yOffset=f+(v*_+g*S)-g):s.xOffset=s.yOffset=0,s.xOrigin=w,s.yOrigin=C,s.smooth=!!i,s.origin=r,s.originIsAbsolute=!!n,e.style[er]="0px 0px",l&&(Hn(l,s,"xOrigin",u,w),Hn(l,s,"yOrigin",c,C),Hn(l,s,"xOffset",h,s.xOffset),Hn(l,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",w+" "+C)},vs=function(e,r){var n=e._gsap||new Y0(e);if("x"in n&&!r&&!n.uncache)return n;var i=e.style,o=n.scaleX<0,l="px",s="deg",a=getComputedStyle(e),u=pr(e,er)||"0",c,h,f,p,_,m,S,v,g,y,w,C,E,T,x,P,b,$,O,Z,G,oe,J,U,j,F,k,V,de,R,D,te;return c=h=f=m=S=v=g=y=w=0,p=_=1,n.svg=!!(e.getCTM&&s1(e)),a.translate&&((a.translate!=="none"||a.scale!=="none"||a.rotate!=="none")&&(i[Ae]=(a.translate!=="none"?"translate3d("+(a.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(a.rotate!=="none"?"rotate("+a.rotate+") ":"")+(a.scale!=="none"?"scale("+a.scale.split(" ").join(",")+") ":"")+(a[Ae]!=="none"?a[Ae]:"")),i.scale=i.rotate=i.translate="none"),T=Kd(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),u=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",U=""):U=!r&&e.getAttribute("data-svg-origin"),Ef(e,U||u,!!U||n.originIsAbsolute,n.smooth!==!1,T)),C=n.xOrigin||0,E=n.yOrigin||0,T!==ms&&($=T[0],O=T[1],Z=T[2],G=T[3],c=oe=T[4],h=J=T[5],T.length===6?(p=Math.sqrt($*$+O*O),_=Math.sqrt(G*G+Z*Z),m=$||O?to(O,$)*Si:0,g=Z||G?to(Z,G)*Si+m:0,g&&(_*=Math.abs(Math.cos(g*Mo))),n.svg&&(c-=C-(C*$+E*Z),h-=E-(C*O+E*G))):(te=T[6],R=T[7],k=T[8],V=T[9],de=T[10],D=T[11],c=T[12],h=T[13],f=T[14],x=to(te,de),S=x*Si,x&&(P=Math.cos(-x),b=Math.sin(-x),U=oe*P+k*b,j=J*P+V*b,F=te*P+de*b,k=oe*-b+k*P,V=J*-b+V*P,de=te*-b+de*P,D=R*-b+D*P,oe=U,J=j,te=F),x=to(-Z,de),v=x*Si,x&&(P=Math.cos(-x),b=Math.sin(-x),U=$*P-k*b,j=O*P-V*b,F=Z*P-de*b,D=G*b+D*P,$=U,O=j,Z=F),x=to(O,$),m=x*Si,x&&(P=Math.cos(x),b=Math.sin(x),U=$*P+O*b,j=oe*P+J*b,O=O*P-$*b,J=J*P-oe*b,$=U,oe=j),S&&Math.abs(S)+Math.abs(m)>359.9&&(S=m=0,v=180-v),p=Xe(Math.sqrt($*$+O*O+Z*Z)),_=Xe(Math.sqrt(J*J+te*te)),x=to(oe,J),g=Math.abs(x)>2e-4?x*Si:0,w=D?1/(D<0?-D:D):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!u1(pr(e,Ae)),U&&e.setAttribute("transform",U))),Math.abs(g)>90&&Math.abs(g)<270&&(o?(p*=-1,g+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,g+=g<=0?180:-180)),r=r||n.uncache,n.x=c-((n.xPercent=c&&(!r&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=h-((n.yPercent=h&&(!r&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=f+l,n.scaleX=Xe(p),n.scaleY=Xe(_),n.rotation=Xe(m)+s,n.rotationX=Xe(S)+s,n.rotationY=Xe(v)+s,n.skewX=g+s,n.skewY=y+s,n.transformPerspective=w+l,(n.zOrigin=parseFloat(u.split(" ")[2])||!r&&n.zOrigin||0)&&(i[er]=nu(u)),n.xOffset=n.yOffset=0,n.force3D=gr.force3D,n.renderTransform=n.svg?Ex:o1?c1:bx,n.uncache=0,n},nu=function(e){return(e=e.split(" "))[0]+" "+e[1]},ac=function(e,r,n){var i=Pt(r);return Xe(parseFloat(r)+parseFloat(ui(e,"x",n+"px",i)))+i},bx=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,c1(e,r)},_i="0deg",fl="0px",xi=") ",c1=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,l=n.x,s=n.y,a=n.z,u=n.rotation,c=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,m=n.scaleY,S=n.transformPerspective,v=n.force3D,g=n.target,y=n.zOrigin,w="",C=v==="auto"&&e&&e!==1||v===!0;if(y&&(h!==_i||c!==_i)){var E=parseFloat(c)*Mo,T=Math.sin(E),x=Math.cos(E),P;E=parseFloat(h)*Mo,P=Math.cos(E),l=ac(g,l,T*P*-y),s=ac(g,s,-Math.sin(E)*-y),a=ac(g,a,x*P*-y+y)}S!==fl&&(w+="perspective("+S+xi),(i||o)&&(w+="translate("+i+"%, "+o+"%) "),(C||l!==fl||s!==fl||a!==fl)&&(w+=a!==fl||C?"translate3d("+l+", "+s+", "+a+") ":"translate("+l+", "+s+xi),u!==_i&&(w+="rotate("+u+xi),c!==_i&&(w+="rotateY("+c+xi),h!==_i&&(w+="rotateX("+h+xi),(f!==_i||p!==_i)&&(w+="skew("+f+", "+p+xi),(_!==1||m!==1)&&(w+="scale("+_+", "+m+xi),g.style[Ae]=w||"translate(0, 0)"},Ex=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,l=n.x,s=n.y,a=n.rotation,u=n.skewX,c=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,m=n.yOrigin,S=n.xOffset,v=n.yOffset,g=n.forceCSS,y=parseFloat(l),w=parseFloat(s),C,E,T,x,P;a=parseFloat(a),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,a+=c),a||u?(a*=Mo,u*=Mo,C=Math.cos(a)*h,E=Math.sin(a)*h,T=Math.sin(a-u)*-f,x=Math.cos(a-u)*f,u&&(c*=Mo,P=Math.tan(u-c),P=Math.sqrt(1+P*P),T*=P,x*=P,c&&(P=Math.tan(c),P=Math.sqrt(1+P*P),C*=P,E*=P)),C=Xe(C),E=Xe(E),T=Xe(T),x=Xe(x)):(C=h,x=f,E=T=0),(y&&!~(l+"").indexOf("px")||w&&!~(s+"").indexOf("px"))&&(y=ui(p,"x",l,"px"),w=ui(p,"y",s,"px")),(_||m||S||v)&&(y=Xe(y+_-(_*C+m*T)+S),w=Xe(w+m-(_*E+m*x)+v)),(i||o)&&(P=p.getBBox(),y=Xe(y+i/100*P.width),w=Xe(w+o/100*P.height)),P="matrix("+C+","+E+","+T+","+x+","+y+","+w+")",p.setAttribute("transform",P),g&&(p.style[Ae]=P)},Px=function(e,r,n,i,o){var l=360,s=pt(o),a=parseFloat(o)*(s&&~o.indexOf("rad")?Si:1),u=a-i,c=i+u+"deg",h,f;return s&&(h=o.split("_")[1],h==="short"&&(u%=l,u!==u%(l/2)&&(u+=u<0?l:-l)),h==="cw"&&u<0?u=(u+l*Ch)%l-~~(u/l)*l:h==="ccw"&&u>0&&(u=(u-l*Ch)%l-~~(u/l)*l)),e._pt=f=new Jt(e._pt,r,n,i,u,fx),f.e=c,f.u="deg",e._props.push(n),f},Mh=function(e,r){for(var n in r)e[n]=r[n];return e},jx=function(e,r,n){var i=Mh({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",l=n.style,s,a,u,c,h,f,p,_;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),l[Ae]=r,s=vs(n,1),ai(n,Ae),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Ae],l[Ae]=r,s=vs(n,1),l[Ae]=u);for(a in jn)u=i[a],c=s[a],u!==c&&o.indexOf(a)<0&&(p=Pt(u),_=Pt(c),h=p!==_?ui(n,a,u,_):parseFloat(u),f=parseFloat(c),e._pt=new Jt(e._pt,s,a,h,f-h,Cf),e._pt.u=_||0,e._props.push(a));Mh(s,i)};Zt("padding,margin,Width,Radius",function(t,e){var r="Top",n="Right",i="Bottom",o="Left",l=(e<3?[r,n,i,o]:[r+o,r+n,i+n,i+o]).map(function(s){return e<2?t+s:"border"+s+t});ru[e>1?"border"+t:t]=function(s,a,u,c,h){var f,p;if(arguments.length<4)return f=l.map(function(_){return yn(s,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},l.forEach(function(_,m){return p[_]=f[m]=f[m]||f[(m-1)/2|0]}),s.init(a,p,h)}});var f1={name:"css",register:bf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,n,i,o){var l=this._props,s=e.style,a=n.vars.startAt,u,c,h,f,p,_,m,S,v,g,y,w,C,E,T,x,P;Xd||bf(),this.styles=this.styles||i1(e),x=this.styles.props,this.tween=n;for(m in r)if(m!=="autoRound"&&(c=r[m],!(sr[m]&&X0(m,r,n,i,e,o)))){if(p=typeof c,_=ru[m],p==="function"&&(c=c.call(n,i,e,o),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=ps(c)),_)_(this,e,m,c,n)&&(T=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",ni.lastIndex=0,ni.test(u)||(S=Pt(u),v=Pt(c),v?S!==v&&(u=ui(e,m,u,v)+v):S&&(c+=S)),this.add(s,"setProperty",u,c,i,o,0,0,m),l.push(m),x.push(m,0,s[m]);else if(p!=="undefined"){if(a&&m in a?(u=typeof a[m]=="function"?a[m].call(n,i,e,o):a[m],pt(u)&&~u.indexOf("random(")&&(u=ps(u)),Pt(u+"")||u==="auto"||(u+=gr.units[m]||Pt(yn(e,m))||""),(u+"").charAt(1)==="="&&(u=yn(e,m))):u=yn(e,m),f=parseFloat(u),g=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),h=parseFloat(c),m in on&&(m==="autoAlpha"&&(f===1&&yn(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,s.visibility),Hn(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=on[m],~m.indexOf(",")&&(m=m.split(",")[0]))),y=m in jn,y){if(this.styles.save(m),P=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=pr(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=c,c=pr(e,"perspective"),b?e.style.perspective=b:ai(e,"perspective")}h=parseFloat(c)}if(w||(C=e._gsap,C.renderTransform&&!r.parseTransform||vs(e,r.parseTransform),E=r.smoothOrigin!==!1&&C.smooth,w=this._pt=new Jt(this._pt,s,Ae,0,1,C.renderTransform,C,0,-1),w.dep=1),m==="scale")this._pt=new Jt(this._pt,C,"scaleY",C.scaleY,(g?jo(C.scaleY,g+h):h)-C.scaleY||0,Cf),this._pt.u=0,l.push("scaleY",m),m+="X";else if(m==="transformOrigin"){x.push(er,0,s[er]),c=Cx(c),C.svg?Ef(e,c,0,E,0,this):(v=parseFloat(c.split(" ")[2])||0,v!==C.zOrigin&&Hn(this,C,"zOrigin",C.zOrigin,v),Hn(this,s,m,nu(u),nu(c)));continue}else if(m==="svgOrigin"){Ef(e,c,1,E,0,this);continue}else if(m in a1){Px(this,C,m,f,g?jo(f,g+c):c);continue}else if(m==="smoothOrigin"){Hn(this,C,"smooth",C.smooth,c);continue}else if(m==="force3D"){C[m]=c;continue}else if(m==="transform"){jx(this,c,e);continue}}else m in s||(m=Go(m)||m);if(y||(h||h===0)&&(f||f===0)&&!cx.test(c)&&m in s)S=(u+"").substr((f+"").length),h||(h=0),v=Pt(c)||(m in gr.units?gr.units[m]:S),S!==v&&(f=ui(e,m,u,v)),this._pt=new Jt(this._pt,y?C:s,m,f,(g?jo(f,g+h):h)-f,!y&&(v==="px"||m==="zIndex")&&r.autoRound!==!1?hx:Cf),this._pt.u=v||0,y&&P!==c?(this._pt.b=u,this._pt.e=P,this._pt.r=px):S!==v&&v!=="%"&&(this._pt.b=u,this._pt.r=dx);else if(m in s)Tx.call(this,e,m,u,g?g+c:c);else if(m in e)this.add(e,m,u||e[m],g?g+c:c,i,o);else if(m!=="parseTransform"){Ad(m,c);continue}y||(m in s?x.push(m,0,s[m]):typeof e[m]=="function"?x.push(m,2,e[m]()):x.push(m,1,u||e[m])),l.push(m)}}T&&J0(this)},render:function(e,r){if(r.tween._time||!Gd())for(var n=r._pt;n;)n.r(e,n.d),n=n._next;else r.styles.revert()},get:yn,aliases:on,getSetter:function(e,r,n){var i=on[r];return i&&i.indexOf(",")<0&&(r=i),r in jn&&r!==er&&(e._gsap.x||yn(e,"x"))?n&&Th===n?r==="scale"?yx:vx:(Th=n||{})&&(r==="scale"?_x:xx):e.style&&!Od(e.style[r])?gx:~r.indexOf("-")?mx:Hd(e,r)},core:{_removeProperty:ai,_getMatrix:Kd}};tr.utils.checkPrefix=Go;tr.core.getStyleSaver=i1;(function(t,e,r,n){var i=Zt(t+","+e+","+r,function(o){jn[o]=1});Zt(e,function(o){gr.units[o]="deg",a1[o]=1}),on[i[13]]=t+","+e,Zt(n,function(o){var l=o.split(":");on[l[1]]=i[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){gr.units[t]="px"});tr.registerPlugin(f1);var re=tr.registerPlugin(f1)||tr;re.core.Tween;function zx(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Mx(t,e,r){return e&&zx(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vt,wa,cr,Yn,Xn,Ro,d1,Ti,Oo,p1,kn,Ur,h1,g1=function(){return vt||typeof window<"u"&&(vt=window.gsap)&&vt.registerPlugin&&vt},m1=1,So=[],ae=[],un=[],Fl=Date.now,Pf=function(e,r){return r},Rx=function(){var e=Oo.core,r=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ae),i.push.apply(i,un),ae=n,un=i,Pf=function(l,s){return r[l](s)}},ii=function(e,r){return~un.indexOf(e)&&un[un.indexOf(e)+1][r]},Il=function(e){return!!~p1.indexOf(e)},Ot=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:i!==!1,capture:!!o})},Rt=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Xs="scrollLeft",Gs="scrollTop",jf=function(){return kn&&kn.isPressed||ae.cache++},iu=function(e,r){var n=function i(o){if(o||o===0){m1&&(cr.history.scrollRestoration="manual");var l=kn&&kn.isPressed;o=i.v=Math.round(o)||(kn&&kn.iOS?1:0),e(o),i.cacheID=ae.cache,l&&Pf("ss",o)}else(r||ae.cache!==i.cacheID||Pf("ref"))&&(i.cacheID=ae.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},It={s:Xs,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:iu(function(t){return arguments.length?cr.scrollTo(t,it.sc()):cr.pageXOffset||Yn[Xs]||Xn[Xs]||Ro[Xs]||0})},it={s:Gs,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:It,sc:iu(function(t){return arguments.length?cr.scrollTo(It.sc(),t):cr.pageYOffset||Yn[Gs]||Xn[Gs]||Ro[Gs]||0})},Vt=function(e,r){return(r&&r._ctx&&r._ctx.selector||vt.utils.toArray)(e)[0]||(typeof e=="string"&&vt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ox=function(e,r){for(var n=r.length;n--;)if(r[n]===e||r[n].contains(e))return!0;return!1},ci=function(e,r){var n=r.s,i=r.sc;Il(e)&&(e=Yn.scrollingElement||Xn);var o=ae.indexOf(e),l=i===it.sc?1:2;!~o&&(o=ae.push(e)-1),ae[o+l]||Ot(e,"scroll",jf);var s=ae[o+l],a=s||(ae[o+l]=iu(ii(e,n),!0)||(Il(e)?i:iu(function(u){return arguments.length?e[n]=u:e[n]})));return a.target=e,s||(a.smooth=vt.getProperty(e,"scrollBehavior")==="smooth"),a},zf=function(e,r,n){var i=e,o=e,l=Fl(),s=l,a=r||50,u=Math.max(500,a*3),c=function(_,m){var S=Fl();m||S-l>a?(o=i,i=_,s=l,l=S):n?i+=_:i=o+(_-o)/(S-s)*(l-s)},h=function(){o=i=n?0:i,s=l=0},f=function(_){var m=s,S=o,v=Fl();return(_||_===0)&&_!==i&&c(_),l===s||v-s>u?0:(i+(n?S:-S))/((n?v:l)-m)*1e3};return{update:c,reset:h,getVelocity:f}},dl=function(e,r){return r&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rh=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},v1=function(){Oo=vt.core.globals().ScrollTrigger,Oo&&Oo.core&&Rx()},y1=function(e){return vt=e||g1(),!wa&&vt&&typeof document<"u"&&document.body&&(cr=window,Yn=document,Xn=Yn.documentElement,Ro=Yn.body,p1=[cr,Yn,Xn,Ro],vt.utils.clamp,h1=vt.core.context||function(){},Ti="onpointerenter"in Ro?"pointer":"mouse",d1=Qe.isTouch=cr.matchMedia&&cr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in cr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ur=Qe.eventTypes=("ontouchstart"in Xn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return m1=0},500),wa=1),Oo||v1(),wa};It.op=it;ae.cache=0;var Qe=function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){wa||y1(vt)||console.warn("Please gsap.registerPlugin(Observer)"),Oo||v1();var i=n.tolerance,o=n.dragMinimum,l=n.type,s=n.target,a=n.lineHeight,u=n.debounce,c=n.preventDefault,h=n.onStop,f=n.onStopDelay,p=n.ignore,_=n.wheelSpeed,m=n.event,S=n.onDragStart,v=n.onDragEnd,g=n.onDrag,y=n.onPress,w=n.onRelease,C=n.onRight,E=n.onLeft,T=n.onUp,x=n.onDown,P=n.onChangeX,b=n.onChangeY,$=n.onChange,O=n.onToggleX,Z=n.onToggleY,G=n.onHover,oe=n.onHoverEnd,J=n.onMove,U=n.ignoreCheck,j=n.isNormalizer,F=n.onGestureStart,k=n.onGestureEnd,V=n.onWheel,de=n.onEnable,R=n.onDisable,D=n.onClick,te=n.scrollSpeed,Y=n.capture,W=n.allowClicks,et=n.lockAxis,Ve=n.onLockAxis;this.target=s=Vt(s)||Xn,this.vars=n,p&&(p=vt.utils.toArray(p)),i=i||1e-9,o=o||0,_=_||1,te=te||1,l=l||"wheel,touch,pointer",u=u!==!1,a||(a=parseFloat(cr.getComputedStyle(Ro).lineHeight)||22);var rr,lt,L,M,Q,ge,le,N=this,ve=0,xe=0,Wt=n.passive||!c&&n.passive!==!1,Pe=ci(s,It),Or=ci(s,it),Gr=Pe(),fn=Or(),st=~l.indexOf("touch")&&!~l.indexOf("pointer")&&Ur[0]==="pointerdown",Mn=Il(s),He=s.ownerDocument||Yn,Dr=[0,0,0],wr=[0,0,0],dn=0,Jo=function(){return dn=Fl()},Ke=function(X,ye){return(N.event=X)&&p&&Ox(X.target,p)||ye&&st&&X.pointerType!=="touch"||U&&U(X,ye)},Ns=function(){N._vx.reset(),N._vy.reset(),lt.pause(),h&&h(N)},pn=function(){var X=N.deltaX=Rh(Dr),ye=N.deltaY=Rh(wr),A=Math.abs(X)>=i,K=Math.abs(ye)>=i;$&&(A||K)&&$(N,X,ye,Dr,wr),A&&(C&&N.deltaX>0&&C(N),E&&N.deltaX<0&&E(N),P&&P(N),O&&N.deltaX<0!=ve<0&&O(N),ve=N.deltaX,Dr[0]=Dr[1]=Dr[2]=0),K&&(x&&N.deltaY>0&&x(N),T&&N.deltaY<0&&T(N),b&&b(N),Z&&N.deltaY<0!=xe<0&&Z(N),xe=N.deltaY,wr[0]=wr[1]=wr[2]=0),(M||L)&&(J&&J(N),L&&(S&&L===1&&S(N),g&&g(N),L=0),M=!1),ge&&!(ge=!1)&&Ve&&Ve(N),Q&&(V(N),Q=!1),rr=0},qi=function(X,ye,A){Dr[A]+=X,wr[A]+=ye,N._vx.update(X),N._vy.update(ye),u?rr||(rr=requestAnimationFrame(pn)):pn()},Zi=function(X,ye){et&&!le&&(N.axis=le=Math.abs(X)>Math.abs(ye)?"x":"y",ge=!0),le!=="y"&&(Dr[2]+=X,N._vx.update(X,!0)),le!=="x"&&(wr[2]+=ye,N._vy.update(ye,!0)),u?rr||(rr=requestAnimationFrame(pn)):pn()},Rn=function(X){if(!Ke(X,1)){X=dl(X,c);var ye=X.clientX,A=X.clientY,K=ye-N.x,H=A-N.y,q=N.isDragging;N.x=ye,N.y=A,(q||(K||H)&&(Math.abs(N.startX-ye)>=o||Math.abs(N.startY-A)>=o))&&(L||(L=q?2:1),q||(N.isDragging=!0),Zi(K,H))}},gi=N.onPress=function(ee){Ke(ee,1)||ee&&ee.button||(N.axis=le=null,lt.pause(),N.isPressed=!0,ee=dl(ee),ve=xe=0,N.startX=N.x=ee.clientX,N.startY=N.y=ee.clientY,N._vx.reset(),N._vy.reset(),Ot(j?s:He,Ur[1],Rn,Wt,!0),N.deltaX=N.deltaY=0,y&&y(N))},ue=N.onRelease=function(ee){if(!Ke(ee,1)){Rt(j?s:He,Ur[1],Rn,!0);var X=!isNaN(N.y-N.startY),ye=N.isDragging,A=ye&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),K=dl(ee);!A&&X&&(N._vx.reset(),N._vy.reset(),c&&W&&vt.delayedCall(.08,function(){if(Fl()-dn>300&&!ee.defaultPrevented){if(ee.target.click)ee.target.click();else if(He.createEvent){var H=He.createEvent("MouseEvents");H.initMouseEvent("click",!0,!0,cr,1,K.screenX,K.screenY,K.clientX,K.clientY,!1,!1,!1,!1,0,null),ee.target.dispatchEvent(H)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,h&&ye&&!j&&lt.restart(!0),L&&pn(),v&&ye&&v(N),w&&w(N,A)}},mi=function(X){return X.touches&&X.touches.length>1&&(N.isGesturing=!0)&&F(X,N.isDragging)},Lr=function(){return(N.isGesturing=!1)||k(N)},Ar=function(X){if(!Ke(X)){var ye=Pe(),A=Or();qi((ye-Gr)*te,(A-fn)*te,1),Gr=ye,fn=A,h&&lt.restart(!0)}},Fr=function(X){if(!Ke(X)){X=dl(X,c),V&&(Q=!0);var ye=(X.deltaMode===1?a:X.deltaMode===2?cr.innerHeight:1)*_;qi(X.deltaX*ye,X.deltaY*ye,0),h&&!j&&lt.restart(!0)}},vi=function(X){if(!Ke(X)){var ye=X.clientX,A=X.clientY,K=ye-N.x,H=A-N.y;N.x=ye,N.y=A,M=!0,h&&lt.restart(!0),(K||H)&&Zi(K,H)}},Ji=function(X){N.event=X,G(N)},hn=function(X){N.event=X,oe(N)},el=function(X){return Ke(X)||dl(X,c)&&D(N)};lt=N._dc=vt.delayedCall(f||.25,Ns).pause(),N.deltaX=N.deltaY=0,N._vx=zf(0,50,!0),N._vy=zf(0,50,!0),N.scrollX=Pe,N.scrollY=Or,N.isDragging=N.isGesturing=N.isPressed=!1,h1(this),N.enable=function(ee){return N.isEnabled||(Ot(Mn?He:s,"scroll",jf),l.indexOf("scroll")>=0&&Ot(Mn?He:s,"scroll",Ar,Wt,Y),l.indexOf("wheel")>=0&&Ot(s,"wheel",Fr,Wt,Y),(l.indexOf("touch")>=0&&d1||l.indexOf("pointer")>=0)&&(Ot(s,Ur[0],gi,Wt,Y),Ot(He,Ur[2],ue),Ot(He,Ur[3],ue),W&&Ot(s,"click",Jo,!0,!0),D&&Ot(s,"click",el),F&&Ot(He,"gesturestart",mi),k&&Ot(He,"gestureend",Lr),G&&Ot(s,Ti+"enter",Ji),oe&&Ot(s,Ti+"leave",hn),J&&Ot(s,Ti+"move",vi)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=M=L=!1,N._vx.reset(),N._vy.reset(),Gr=Pe(),fn=Or(),ee&&ee.type&&gi(ee),de&&de(N)),N},N.disable=function(){N.isEnabled&&(So.filter(function(ee){return ee!==N&&Il(ee.target)}).length||Rt(Mn?He:s,"scroll",jf),N.isPressed&&(N._vx.reset(),N._vy.reset(),Rt(j?s:He,Ur[1],Rn,!0)),Rt(Mn?He:s,"scroll",Ar,Y),Rt(s,"wheel",Fr,Y),Rt(s,Ur[0],gi,Y),Rt(He,Ur[2],ue),Rt(He,Ur[3],ue),Rt(s,"click",Jo,!0),Rt(s,"click",el),Rt(He,"gesturestart",mi),Rt(He,"gestureend",Lr),Rt(s,Ti+"enter",Ji),Rt(s,Ti+"leave",hn),Rt(s,Ti+"move",vi),N.isEnabled=N.isPressed=N.isDragging=!1,R&&R(N))},N.kill=N.revert=function(){N.disable();var ee=So.indexOf(N);ee>=0&&So.splice(ee,1),kn===N&&(kn=0)},So.push(N),j&&Il(s)&&(kn=N),N.enable(m)},Mx(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();Qe.version="3.15.0";Qe.create=function(t){return new Qe(t)};Qe.register=y1;Qe.getAll=function(){return So.slice()};Qe.getById=function(t){return So.filter(function(e){return e.vars.id===t})[0]};g1()&&vt.registerPlugin(Qe);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var B,lo,se,we,ar,_e,qd,ou,ys,Bl,wl,Qs,Nt,bu,Mf,At,Oh,Dh,so,_1,uc,x1,Dt,Rf,w1,k1,Ln,Of,Zd,Do,Jd,Ul,Df,cc,Ks=1,bt=Date.now,fc=bt(),zr=0,kl=0,Lh=function(e,r,n){var i=lr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ah=function(e,r){return r&&(!lr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Dx=function t(){return kl&&requestAnimationFrame(t)},Fh=function(){return bu=1},Ih=function(){return bu=0},tn=function(e){return e},Sl=function(e){return Math.round(e*1e5)/1e5||0},S1=function(){return typeof window<"u"},T1=function(){return B||S1()&&(B=window.gsap)&&B.registerPlugin&&B},Hi=function(e){return!!~qd.indexOf(e)},C1=function(e){return(e==="Height"?Jd:se["inner"+e])||ar["client"+e]||_e["client"+e]},N1=function(e){return ii(e,"getBoundingClientRect")||(Hi(e)?function(){return Na.width=se.innerWidth,Na.height=Jd,Na}:function(){return _n(e)})},Lx=function(e,r,n){var i=n.d,o=n.d2,l=n.a;return(l=ii(e,"getBoundingClientRect"))?function(){return l()[i]}:function(){return(r?C1(o):e["client"+o])||0}},Ax=function(e,r){return!r||~un.indexOf(e)?N1(e):function(){return Na}},ln=function(e,r){var n=r.s,i=r.d2,o=r.d,l=r.a;return Math.max(0,(n="scroll"+i)&&(l=ii(e,n))?l()-N1(e)()[o]:Hi(e)?(ar[n]||_e[n])-C1(i):e[n]-e["offset"+i])},qs=function(e,r){for(var n=0;n<so.length;n+=3)(!r||~r.indexOf(so[n+1]))&&e(so[n],so[n+1],so[n+2])},lr=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},Tl=function(e){return typeof e=="number"},Ci=function(e){return typeof e=="object"},pl=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},ro=function(e,r,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return r(e,n)}):r(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},no=Math.abs,b1="left",E1="top",ep="right",tp="bottom",Ai="width",Fi="height",$l="Right",Wl="Left",Vl="Top",Hl="Bottom",qe="padding",Cr="margin",Qo="Width",rp="Height",rt="px",Nr=function(e){return se.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Fx=function(e){var r=Nr(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},Bh=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},_n=function(e,r){var n=r&&Nr(e)[Mf]!=="matrix(1, 0, 0, 1, 0, 0)"&&B.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},lu=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},P1=function(e){var r=[],n=e.labels,i=e.duration(),o;for(o in n)r.push(n[o]/i);return r},Ix=function(e){return function(r){return B.utils.snap(P1(e),r)}},np=function(e){var r=B.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,o){return i-o});return n?function(i,o,l){l===void 0&&(l=.001);var s;if(!o)return r(i);if(o>0){for(i-=l,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=l;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,o,l){l===void 0&&(l=.001);var s=r(i);return!o||Math.abs(s-i)<l||s-i<0==o<0?s:r(o<0?i-e:i+e)}},Bx=function(e){return function(r,n){return np(P1(e))(r,n.direction)}},Zs=function(e,r,n,i){return n.split(",").forEach(function(o){return e(r,o,i)})},ct=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:!i,capture:!!o})},ut=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Js=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},Uh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ea={toggleActions:"play",anticipatePin:0},su={top:0,left:0,center:.5,bottom:1,right:1},ka=function(e,r){if(lr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=r/100),e=e.substr(0,n-1)),e=i+(e in su?su[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},ta=function(e,r,n,i,o,l,s,a){var u=o.startColor,c=o.endColor,h=o.fontSize,f=o.indent,p=o.fontWeight,_=we.createElement("div"),m=Hi(n)||ii(n,"pinType")==="fixed",S=e.indexOf("scroller")!==-1,v=m?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,g=e.indexOf("start")!==-1,y=g?u:c,w="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((S||a)&&m?"fixed;":"absolute;"),(S||a||!m)&&(w+=(i===it?ep:tp)+":"+(l+parseFloat(f))+"px;"),s&&(w+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),_._isStart=g,_.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),_.style.cssText=w,_.innerText=r||r===0?e+"-"+r:e,v.children[0]?v.insertBefore(_,v.children[0]):v.appendChild(_),_._offset=_["offset"+i.op.d2],Sa(_,0,i,g),_},Sa=function(e,r,n,i){var o={display:"block"},l=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,o[n.a+"Percent"]=i?-100:0,o[n.a]=i?"1px":0,o["border"+l+Qo]=1,o["border"+s+Qo]=0,o[n.p]=r+"px",B.set(e,o)},ne=[],Lf={},_s,$h=function(){return bt()-zr>34&&(_s||(_s=requestAnimationFrame(Tn)))},io=function(){(!Dt||!Dt.isPressed||Dt.startX>_e.clientWidth)&&(ae.cache++,Dt?_s||(_s=requestAnimationFrame(Tn)):Tn(),zr||Xi("scrollStart"),zr=bt())},dc=function(){k1=se.innerWidth,w1=se.innerHeight},Cl=function(e){ae.cache++,(e===!0||!Nt&&!x1&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!Rf||k1!==se.innerWidth||Math.abs(se.innerHeight-w1)>se.innerHeight*.25))&&ou.restart(!0)},Yi={},Ux=[],j1=function t(){return ut(ie,"scrollEnd",t)||ji(!0)},Xi=function(e){return Yi[e]&&Yi[e].map(function(r){return r()})||Ux},ir=[],z1=function(e){for(var r=0;r<ir.length;r+=5)(!e||ir[r+4]&&ir[r+4].query===e)&&(ir[r].style.cssText=ir[r+1],ir[r].getBBox&&ir[r].setAttribute("transform",ir[r+2]||""),ir[r+3].uncache=1)},M1=function(){return ae.forEach(function(e){return jt(e)&&++e.cacheID&&(e.rec=e())})},ip=function(e,r){var n;for(At=0;At<ne.length;At++)n=ne[At],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));Ul=!0,r&&z1(r),r||Xi("revert")},R1=function(e,r){ae.cache++,(r||!Ft)&&ae.forEach(function(n){return jt(n)&&n.cacheID++&&(n.rec=0)}),lr(e)&&(se.history.scrollRestoration=Zd=e)},Ft,Ii=0,Wh,$x=function(){if(Wh!==Ii){var e=Wh=Ii;requestAnimationFrame(function(){return e===Ii&&ji(!0)})}},O1=function(){_e.appendChild(Do),Jd=!Dt&&Do.offsetHeight||se.innerHeight,_e.removeChild(Do)},Vh=function(e){return ys(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},ji=function(e,r){if(ar=we.documentElement,_e=we.body,qd=[se,we,ar,_e],zr&&!e&&!Ul){ct(ie,"scrollEnd",j1);return}O1(),Ft=ie.isRefreshing=!0,Ul||M1();var n=Xi("refreshInit");_1&&ie.sort(),r||ip(),ae.forEach(function(i){jt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),Ul=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",l=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-l),i.refresh()}}),Df=1,Vh(!0),ne.forEach(function(i){var o=ln(i.scroller,i._dir),l=i.vars.end==="max"||i._endClamp&&i.end>o,s=i._startClamp&&i.start>=o;(l||s)&&i.setPositions(s?o-1:i.start,l?Math.max(s?o:i.start+1,o):i.end,!0)}),Vh(!1),Df=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ae.forEach(function(i){jt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),R1(Zd,1),ou.pause(),Ii++,Ft=2,Tn(2),ne.forEach(function(i){return jt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ft=ie.isRefreshing=!1,Xi("refresh")},Af=0,Ta=1,Yl,Tn=function(e){if(e===2||!Ft&&!Ul){ie.isUpdating=!0,Yl&&Yl.update(0);var r=ne.length,n=bt(),i=n-fc>=50,o=r&&ne[0].scroll();if(Ta=Af>o?-1:1,Ft||(Af=o),i&&(zr&&!bu&&n-zr>200&&(zr=0,Xi("scrollEnd")),wl=fc,fc=n),Ta<0){for(At=r;At-- >0;)ne[At]&&ne[At].update(0,i);Ta=1}else for(At=0;At<r;At++)ne[At]&&ne[At].update(0,i);ie.isUpdating=!1}_s=0},Ff=[b1,E1,tp,ep,Cr+Hl,Cr+$l,Cr+Vl,Cr+Wl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ca=Ff.concat([Ai,Fi,"boxSizing","max"+Qo,"max"+rp,"position",Cr,qe,qe+Vl,qe+$l,qe+Hl,qe+Wl]),Wx=function(e,r,n){Lo(n);var i=e._gsap;if(i.spacerIsNative)Lo(i.spacerState);else if(e._gsap.swappedIn){var o=r.parentNode;o&&(o.insertBefore(e,r),o.removeChild(r))}e._gsap.swappedIn=!1},pc=function(e,r,n,i){if(!e._gsap.swappedIn){for(var o=Ff.length,l=r.style,s=e.style,a;o--;)a=Ff[o],l[a]=n[a];l.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(l.display="inline-block"),s[tp]=s[ep]="auto",l.flexBasis=n.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[Ai]=lu(e,It)+rt,l[Fi]=lu(e,it)+rt,l[qe]=s[Cr]=s[E1]=s[b1]="0",Lo(i),s[Ai]=s["max"+Qo]=n[Ai],s[Fi]=s["max"+rp]=n[Fi],s[qe]=n[qe],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},Vx=/([A-Z])/g,Lo=function(e){if(e){var r=e.t.style,n=e.length,i=0,o,l;for((e.t._gsap||B.core.getCache(e.t)).uncache=1;i<n;i+=2)l=e[i+1],o=e[i],l?r[o]=l:r[o]&&r.removeProperty(o.replace(Vx,"-$1").toLowerCase())}},ra=function(e){for(var r=Ca.length,n=e.style,i=[],o=0;o<r;o++)i.push(Ca[o],n[Ca[o]]);return i.t=e,i},Hx=function(e,r,n){for(var i=[],o=e.length,l=n?8:0,s;l<o;l+=2)s=e[l],i.push(s,s in r?r[s]:e[l+1]);return i.t=e.t,i},Na={left:0,top:0},Hh=function(e,r,n,i,o,l,s,a,u,c,h,f,p,_){jt(e)&&(e=e(a)),lr(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ka("0"+e.substr(3),n):0));var m=p?p.time():0,S,v,g;if(p&&p.seek(0),isNaN(e)||(e=+e),Tl(e))p&&(e=B.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),s&&Sa(s,n,i,!0);else{jt(r)&&(r=r(a));var y=(e||"0").split(" "),w,C,E,T;g=Vt(r,a)||_e,w=_n(g)||{},(!w||!w.left&&!w.top)&&Nr(g).display==="none"&&(T=g.style.display,g.style.display="block",w=_n(g),T?g.style.display=T:g.style.removeProperty("display")),C=ka(y[0],w[i.d]),E=ka(y[1]||"0",n),e=w[i.p]-u[i.p]-c+C+o-E,s&&Sa(s,E,i,n-E<20||s._isStart&&E>20),n-=n-E}if(_&&(a[_]=e||-.001,e<0&&(e=0)),l){var x=e+n,P=l._isStart;S="scroll"+i.d2,Sa(l,x,i,P&&x>20||!P&&(h?Math.max(_e[S],ar[S]):l.parentNode[S])<=x+1),h&&(u=_n(s),h&&(l.style[i.op.p]=u[i.op.p]-i.op.m-l._offset+rt))}return p&&g&&(S=_n(g),p.seek(f),v=_n(g),p._caScrollDist=S[i.p]-v[i.p],e=e/p._caScrollDist*f),p&&p.seek(m),p?e:Math.round(e)},Yx=/(webkit|moz|length|cssText|inset)/i,Yh=function(e,r,n,i){if(e.parentNode!==r){var o=e.style,l,s;if(r===_e){e._stOrig=o.cssText,s=Nr(e);for(l in s)!+l&&!Yx.test(l)&&s[l]&&typeof o[l]=="string"&&l!=="0"&&(o[l]=s[l]);o.top=n,o.left=i}else o.cssText=e._stOrig;B.core.getCache(e).uncache=1,r.appendChild(e)}},D1=function(e,r,n){var i=r,o=i;return function(l){var s=Math.round(e());return s!==i&&s!==o&&Math.abs(s-i)>3&&Math.abs(s-o)>3&&(l=s,n&&n()),o=i,i=Math.round(l),i}},na=function(e,r,n){var i={};i[r.p]="+="+n,B.set(e,i)},Xh=function(e,r){var n=ci(e,r),i="_scroll"+r.p2,o=function l(s,a,u,c,h){var f=l.tween,p=a.onComplete,_={};u=u||n();var m=D1(n,u,function(){f.kill(),l.tween=0});return h=c&&h||0,c=c||s-u,f&&f.kill(),a[i]=s,a.inherit=!1,a.modifiers=_,_[i]=function(){return m(u+c*f.ratio+h*f.ratio*f.ratio)},a.onUpdate=function(){ae.cache++,l.tween&&Tn()},a.onComplete=function(){l.tween=0,p&&p.call(f)},f=l.tween=B.to(e,a),f};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},ct(e,"wheel",n.wheelHandler),ie.isTouch&&ct(e,"touchmove",n.wheelHandler),o},ie=function(){function t(r,n){lo||t.register(B)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Of(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!kl){this.update=this.refresh=this.kill=tn;return}n=Bh(lr(n)||Tl(n)||n.nodeType?{trigger:n}:n,ea);var o=n,l=o.onUpdate,s=o.toggleClass,a=o.id,u=o.onToggle,c=o.onRefresh,h=o.scrub,f=o.trigger,p=o.pin,_=o.pinSpacing,m=o.invalidateOnRefresh,S=o.anticipatePin,v=o.onScrubComplete,g=o.onSnapComplete,y=o.once,w=o.snap,C=o.pinReparent,E=o.pinSpacer,T=o.containerAnimation,x=o.fastScrollEnd,P=o.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?It:it,$=!h&&h!==0,O=Vt(n.scroller||se),Z=B.core.getCache(O),G=Hi(O),oe=("pinType"in n?n.pinType:ii(O,"pinType")||G&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],U=$&&n.toggleActions.split(" "),j="markers"in n?n.markers:ea.markers,F=G?0:parseFloat(Nr(O)["border"+b.p2+Qo])||0,k=this,V=n.onRefreshInit&&function(){return n.onRefreshInit(k)},de=Lx(O,G,b),R=Ax(O,G),D=0,te=0,Y=0,W=ci(O,b),et,Ve,rr,lt,L,M,Q,ge,le,N,ve,xe,Wt,Pe,Or,Gr,fn,st,Mn,He,Dr,wr,dn,Jo,Ke,Ns,pn,qi,Zi,Rn,gi,ue,mi,Lr,Ar,Fr,vi,Ji,hn;if(k._startClamp=k._endClamp=!1,k._dir=b,S*=45,k.scroller=O,k.scroll=T?T.time.bind(T):W,lt=W(),k.vars=n,i=i||n.animation,"refreshPriority"in n&&(_1=1,n.refreshPriority===-9999&&(Yl=k)),Z.tweenScroll=Z.tweenScroll||{top:Xh(O,it),left:Xh(O,It)},k.tweenTo=et=Z.tweenScroll[b.p],k.scrubDuration=function(A){mi=Tl(A)&&A,mi?ue?ue.duration(A):ue=B.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:mi,paused:!0,onComplete:function(){return v&&v(k)}}):(ue&&ue.progress(1).kill(),ue=0)},i&&(i.vars.lazy=!1,i._initted&&!k.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),k.animation=i.pause(),i.scrollTrigger=k,k.scrubDuration(h),Rn=0,a||(a=i.vars.id)),w&&((!Ci(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in _e.style&&B.set(G?[_e,ar]:O,{scrollBehavior:"auto"}),ae.forEach(function(A){return jt(A)&&A.target===(G?we.scrollingElement||ar:O)&&(A.smooth=!1)}),rr=jt(w.snapTo)?w.snapTo:w.snapTo==="labels"?Ix(i):w.snapTo==="labelsDirectional"?Bx(i):w.directional!==!1?function(A,K){return np(w.snapTo)(A,bt()-te<500?0:K.direction)}:B.utils.snap(w.snapTo),Lr=w.duration||{min:.1,max:2},Lr=Ci(Lr)?Bl(Lr.min,Lr.max):Bl(Lr,Lr),Ar=B.delayedCall(w.delay||mi/2||.1,function(){var A=W(),K=bt()-te<500,H=et.tween;if((K||Math.abs(k.getVelocity())<10)&&!H&&!bu&&D!==A){var q=(A-M)/Pe,at=i&&!$?i.totalProgress():q,pe=K?0:(at-gi)/(bt()-wl)*1e3||0,Ye=B.utils.clamp(-q,1-q,no(pe/2)*pe/.185),wt=q+(w.inertia===!1?0:Ye),Ue,je,Se=w,Ir=Se.onStart,Re=Se.onInterrupt,nr=Se.onComplete;if(Ue=rr(wt,k),Tl(Ue)||(Ue=wt),je=Math.max(0,Math.round(M+Ue*Pe)),A<=Q&&A>=M&&je!==A){if(H&&!H._initted&&H.data<=no(je-A))return;w.inertia===!1&&(Ye=Ue-q),et(je,{duration:Lr(no(Math.max(no(wt-at),no(Ue-at))*.185/pe/.05||0)),ease:w.ease||"power3",data:no(je-A),onInterrupt:function(){return Ar.restart(!0)&&Re&&ro(k,Re)},onComplete:function(){k.update(),D=W(),i&&!$&&(ue?ue.resetTo("totalProgress",Ue,i._tTime/i._tDur):i.progress(Ue)),Rn=gi=i&&!$?i.totalProgress():k.progress,g&&g(k),nr&&ro(k,nr)}},A,Ye*Pe,je-A-Ye*Pe),Ir&&ro(k,Ir,et.tween)}}else k.isActive&&D!==A&&Ar.restart(!0)}).pause()),a&&(Lf[a]=k),f=k.trigger=Vt(f||p!==!0&&p),hn=f&&f._gsap&&f._gsap.stRevert,hn&&(hn=hn(k)),p=p===!0?f:Vt(p),lr(s)&&(s={targets:f,className:s}),p&&(_===!1||_===Cr||(_=!_&&p.parentNode&&p.parentNode.style&&Nr(p.parentNode).display==="flex"?!1:qe),k.pin=p,Ve=B.core.getCache(p),Ve.spacer?Or=Ve.pinState:(E&&(E=Vt(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ve.spacerIsNative=!!E,E&&(Ve.spacerState=ra(E))),Ve.spacer=st=E||we.createElement("div"),st.classList.add("pin-spacer"),a&&st.classList.add("pin-spacer-"+a),Ve.pinState=Or=ra(p)),n.force3D!==!1&&B.set(p,{force3D:!0}),k.spacer=st=Ve.spacer,Zi=Nr(p),Jo=Zi[_+b.os2],He=B.getProperty(p),Dr=B.quickSetter(p,b.a,rt),pc(p,st,Zi),fn=ra(p)),j){xe=Ci(j)?Bh(j,Uh):Uh,N=ta("scroller-start",a,O,b,xe,0),ve=ta("scroller-end",a,O,b,xe,0,N),Mn=N["offset"+b.op.d2];var el=Vt(ii(O,"content")||O);ge=this.markerStart=ta("start",a,el,b,xe,Mn,0,T),le=this.markerEnd=ta("end",a,el,b,xe,Mn,0,T),T&&(Ji=B.quickSetter([ge,le],b.a,rt)),!oe&&!(un.length&&ii(O,"fixedMarkers")===!0)&&(Fx(G?_e:O),B.set([N,ve],{force3D:!0}),Ns=B.quickSetter(N,b.a,rt),qi=B.quickSetter(ve,b.a,rt))}if(T){var ee=T.vars.onUpdate,X=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){k.update(0,0,1),ee&&ee.apply(T,X||[])})}if(k.previous=function(){return ne[ne.indexOf(k)-1]},k.next=function(){return ne[ne.indexOf(k)+1]},k.revert=function(A,K){if(!K)return k.kill(!0);var H=A!==!1||!k.enabled,q=Nt;H!==k.isReverted&&(H&&(Fr=Math.max(W(),k.scroll.rec||0),Y=k.progress,vi=i&&i.progress()),ge&&[ge,le,N,ve].forEach(function(at){return at.style.display=H?"none":"block"}),H&&(Nt=k,k.update(H)),p&&(!C||!k.isActive)&&(H?Wx(p,st,Or):pc(p,st,Nr(p),Ke)),H||k.update(H),Nt=q,k.isReverted=H)},k.refresh=function(A,K,H,q){if(!((Nt||!k.enabled)&&!K)){if(p&&A&&zr){ct(t,"scrollEnd",j1);return}!Ft&&V&&V(k),Nt=k,et.tween&&!H&&(et.tween.kill(),et.tween=0),ue&&ue.pause(),m&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(On){return On.vars.immediateRender&&On.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),k.isReverted||k.revert(!0,!0),k._subPinOffset=!1;var at=de(),pe=R(),Ye=T?T.duration():ln(O,b),wt=Pe<=.01||!Pe,Ue=0,je=q||0,Se=Ci(H)?H.end:n.end,Ir=n.endTrigger||f,Re=Ci(H)?H.start:n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),nr=k.pinnedContainer=n.pinnedContainer&&Vt(n.pinnedContainer,k),Qr=f&&Math.max(0,ne.indexOf(k))||0,ht=Qr,gt,kt,yi,bs,St,tt,Kr,Eu,op,tl,qr,rl,Es;for(j&&Ci(H)&&(rl=B.getProperty(N,b.p),Es=B.getProperty(ve,b.p));ht-- >0;)tt=ne[ht],tt.end||tt.refresh(0,1)||(Nt=k),Kr=tt.pin,Kr&&(Kr===f||Kr===p||Kr===nr)&&!tt.isReverted&&(tl||(tl=[]),tl.unshift(tt),tt.revert(!0,!0)),tt!==ne[ht]&&(Qr--,ht--);for(jt(Re)&&(Re=Re(k)),Re=Lh(Re,"start",k),M=Hh(Re,f,at,b,W(),ge,N,k,pe,F,oe,Ye,T,k._startClamp&&"_startClamp")||(p?-.001:0),jt(Se)&&(Se=Se(k)),lr(Se)&&!Se.indexOf("+=")&&(~Se.indexOf(" ")?Se=(lr(Re)?Re.split(" ")[0]:"")+Se:(Ue=ka(Se.substr(2),at),Se=lr(Re)?Re:(T?B.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,M):M)+Ue,Ir=f)),Se=Lh(Se,"end",k),Q=Math.max(M,Hh(Se||(Ir?"100% 0":Ye),Ir,at,b,W()+Ue,le,ve,k,pe,F,oe,Ye,T,k._endClamp&&"_endClamp"))||-.001,Ue=0,ht=Qr;ht--;)tt=ne[ht]||{},Kr=tt.pin,Kr&&tt.start-tt._pinPush<=M&&!T&&tt.end>0&&(gt=tt.end-(k._startClamp?Math.max(0,tt.start):tt.start),(Kr===f&&tt.start-tt._pinPush<M||Kr===nr)&&isNaN(Re)&&(Ue+=gt*(1-tt.progress)),Kr===p&&(je+=gt));if(M+=Ue,Q+=Ue,k._startClamp&&(k._startClamp+=Ue),k._endClamp&&!Ft&&(k._endClamp=Q||-.001,Q=Math.min(Q,ln(O,b))),Pe=Q-M||(M-=.01)&&.001,wt&&(Y=B.utils.clamp(0,1,B.utils.normalize(M,Q,Fr))),k._pinPush=je,ge&&Ue&&(gt={},gt[b.a]="+="+Ue,nr&&(gt[b.p]="-="+W()),B.set([ge,le],gt)),p&&!(Df&&k.end>=ln(O,b)))gt=Nr(p),bs=b===it,yi=W(),wr=parseFloat(He(b.a))+je,!Ye&&Q>1&&(qr=(G?we.scrollingElement||ar:O).style,qr={style:qr,value:qr["overflow"+b.a.toUpperCase()]},G&&Nr(_e)["overflow"+b.a.toUpperCase()]!=="scroll"&&(qr.style["overflow"+b.a.toUpperCase()]="scroll")),pc(p,st,gt),fn=ra(p),kt=_n(p,!0),Eu=oe&&ci(O,bs?It:it)(),_?(Ke=[_+b.os2,Pe+je+rt],Ke.t=st,ht=_===qe?lu(p,b)+Pe+je:0,ht&&(Ke.push(b.d,ht+rt),st.style.flexBasis!=="auto"&&(st.style.flexBasis=ht+rt)),Lo(Ke),nr&&ne.forEach(function(On){On.pin===nr&&On.vars.pinSpacing!==!1&&(On._subPinOffset=!0)}),oe&&W(Fr)):(ht=lu(p,b),ht&&st.style.flexBasis!=="auto"&&(st.style.flexBasis=ht+rt)),oe&&(St={top:kt.top+(bs?yi-M:Eu)+rt,left:kt.left+(bs?Eu:yi-M)+rt,boxSizing:"border-box",position:"fixed"},St[Ai]=St["max"+Qo]=Math.ceil(kt.width)+rt,St[Fi]=St["max"+rp]=Math.ceil(kt.height)+rt,St[Cr]=St[Cr+Vl]=St[Cr+$l]=St[Cr+Hl]=St[Cr+Wl]="0",St[qe]=gt[qe],St[qe+Vl]=gt[qe+Vl],St[qe+$l]=gt[qe+$l],St[qe+Hl]=gt[qe+Hl],St[qe+Wl]=gt[qe+Wl],Gr=Hx(Or,St,C),Ft&&W(0)),i?(op=i._initted,uc(1),i.render(i.duration(),!0,!0),dn=He(b.a)-wr+Pe+je,pn=Math.abs(Pe-dn)>1,oe&&pn&&Gr.splice(Gr.length-2,2),i.render(0,!0,!0),op||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),uc(0)):dn=Pe,qr&&(qr.value?qr.style["overflow"+b.a.toUpperCase()]=qr.value:qr.style.removeProperty("overflow-"+b.a));else if(f&&W()&&!T)for(kt=f.parentNode;kt&&kt!==_e;)kt._pinOffset&&(M-=kt._pinOffset,Q-=kt._pinOffset),kt=kt.parentNode;tl&&tl.forEach(function(On){return On.revert(!1,!0)}),k.start=M,k.end=Q,lt=L=Ft?Fr:W(),!T&&!Ft&&(lt<Fr&&W(Fr),k.scroll.rec=0),k.revert(!1,!0),te=bt(),Ar&&(D=-1,Ar.restart(!0)),Nt=0,i&&$&&(i._initted||vi)&&i.progress()!==vi&&i.progress(vi||0,!0).render(i.time(),!0,!0),(wt||Y!==k.progress||T||m||i&&!i._initted)&&(i&&!$&&(i._initted||Y||i.vars.immediateRender!==!1)&&i.totalProgress(T&&M<-.001&&!Y?B.utils.normalize(M,Q,0):Y,!0),k.progress=wt||(lt-M)/Pe===Y?0:Y),p&&_&&(st._pinOffset=Math.round(k.progress*dn)),ue&&ue.invalidate(),isNaN(rl)||(rl-=B.getProperty(N,b.p),Es-=B.getProperty(ve,b.p),na(N,b,rl),na(ge,b,rl-(q||0)),na(ve,b,Es),na(le,b,Es-(q||0))),wt&&!Ft&&k.update(),c&&!Ft&&!Wt&&(Wt=!0,c(k),Wt=!1)}},k.getVelocity=function(){return(W()-L)/(bt()-wl)*1e3||0},k.endAnimation=function(){pl(k.callbackAnimation),i&&(ue?ue.progress(1):i.paused()?$||pl(i,k.direction<0,1):pl(i,i.reversed()))},k.labelToScroll=function(A){return i&&i.labels&&(M||k.refresh()||M)+i.labels[A]/i.duration()*Pe||0},k.getTrailing=function(A){var K=ne.indexOf(k),H=k.direction>0?ne.slice(0,K).reverse():ne.slice(K+1);return(lr(A)?H.filter(function(q){return q.vars.preventOverlaps===A}):H).filter(function(q){return k.direction>0?q.end<=M:q.start>=Q})},k.update=function(A,K,H){if(!(T&&!H&&!A)){var q=Ft===!0?Fr:k.scroll(),at=A?0:(q-M)/Pe,pe=at<0?0:at>1?1:at||0,Ye=k.progress,wt,Ue,je,Se,Ir,Re,nr,Qr;if(K&&(L=lt,lt=T?W():q,w&&(gi=Rn,Rn=i&&!$?i.totalProgress():pe)),S&&p&&!Nt&&!Ks&&zr&&(!pe&&M<q+(q-L)/(bt()-wl)*S?pe=1e-4:pe===1&&Q>q+(q-L)/(bt()-wl)*S&&(pe=.9999)),pe!==Ye&&k.enabled){if(wt=k.isActive=!!pe&&pe<1,Ue=!!Ye&&Ye<1,Re=wt!==Ue,Ir=Re||!!pe!=!!Ye,k.direction=pe>Ye?1:-1,k.progress=pe,Ir&&!Nt&&(je=pe&&!Ye?0:pe===1?1:Ye===1?2:3,$&&(Se=!Re&&U[je+1]!=="none"&&U[je+1]||U[je],Qr=i&&(Se==="complete"||Se==="reset"||Se in i))),P&&(Re||Qr)&&(Qr||h||!i)&&(jt(P)?P(k):k.getTrailing(P).forEach(function(yi){return yi.endAnimation()})),$||(ue&&!Nt&&!Ks?(ue._dp._time-ue._start!==ue._time&&ue.render(ue._dp._time-ue._start),ue.resetTo?ue.resetTo("totalProgress",pe,i._tTime/i._tDur):(ue.vars.totalProgress=pe,ue.invalidate().restart())):i&&i.totalProgress(pe,!!(Nt&&(te||A)))),p){if(A&&_&&(st.style[_+b.os2]=Jo),!oe)Dr(Sl(wr+dn*pe));else if(Ir){if(nr=!A&&pe>Ye&&Q+1>q&&q+1>=ln(O,b),C)if(!A&&(wt||nr)){var ht=_n(p,!0),gt=q-M;Yh(p,_e,ht.top+(b===it?gt:0)+rt,ht.left+(b===it?0:gt)+rt)}else Yh(p,st);Lo(wt||nr?Gr:fn),pn&&pe<1&&wt||Dr(wr+(pe===1&&!nr?dn:0))}}w&&!et.tween&&!Nt&&!Ks&&Ar.restart(!0),s&&(Re||y&&pe&&(pe<1||!cc))&&ys(s.targets).forEach(function(yi){return yi.classList[wt||y?"add":"remove"](s.className)}),l&&!$&&!A&&l(k),Ir&&!Nt?($&&(Qr&&(Se==="complete"?i.pause().totalProgress(1):Se==="reset"?i.restart(!0).pause():Se==="restart"?i.restart(!0):i[Se]()),l&&l(k)),(Re||!cc)&&(u&&Re&&ro(k,u),J[je]&&ro(k,J[je]),y&&(pe===1?k.kill(!1,1):J[je]=0),Re||(je=pe===1?1:3,J[je]&&ro(k,J[je]))),x&&!wt&&Math.abs(k.getVelocity())>(Tl(x)?x:2500)&&(pl(k.callbackAnimation),ue?ue.progress(1):pl(i,Se==="reverse"?1:!pe,1))):$&&l&&!Nt&&l(k)}if(qi){var kt=T?q/T.duration()*(T._caScrollDist||0):q;Ns(kt+(N._isFlipped?1:0)),qi(kt)}Ji&&Ji(-q/T.duration()*(T._caScrollDist||0))}},k.enable=function(A,K){k.enabled||(k.enabled=!0,ct(O,"resize",Cl),G||ct(O,"scroll",io),V&&ct(t,"refreshInit",V),A!==!1&&(k.progress=Y=0,lt=L=D=W()),K!==!1&&k.refresh())},k.getTween=function(A){return A&&et?et.tween:ue},k.setPositions=function(A,K,H,q){if(T){var at=T.scrollTrigger,pe=T.duration(),Ye=at.end-at.start;A=at.start+Ye*A/pe,K=at.start+Ye*K/pe}k.refresh(!1,!1,{start:Ah(A,H&&!!k._startClamp),end:Ah(K,H&&!!k._endClamp)},q),k.update()},k.adjustPinSpacing=function(A){if(Ke&&A){var K=Ke.indexOf(b.d)+1;Ke[K]=parseFloat(Ke[K])+A+rt,Ke[1]=parseFloat(Ke[1])+A+rt,Lo(Ke)}},k.disable=function(A,K){if(A!==!1&&k.revert(!0,!0),k.enabled&&(k.enabled=k.isActive=!1,K||ue&&ue.pause(),Fr=0,Ve&&(Ve.uncache=1),V&&ut(t,"refreshInit",V),Ar&&(Ar.pause(),et.tween&&et.tween.kill()&&(et.tween=0)),!G)){for(var H=ne.length;H--;)if(ne[H].scroller===O&&ne[H]!==k)return;ut(O,"resize",Cl),G||ut(O,"scroll",io)}},k.kill=function(A,K){k.disable(A,K),ue&&!K&&ue.kill(),a&&delete Lf[a];var H=ne.indexOf(k);H>=0&&ne.splice(H,1),H===At&&Ta>0&&At--,H=0,ne.forEach(function(q){return q.scroller===k.scroller&&(H=1)}),H||Ft||(k.scroll.rec=0),i&&(i.scrollTrigger=null,A&&i.revert({kill:!1}),K||i.kill()),ge&&[ge,le,N,ve].forEach(function(q){return q.parentNode&&q.parentNode.removeChild(q)}),Yl===k&&(Yl=0),p&&(Ve&&(Ve.uncache=1),H=0,ne.forEach(function(q){return q.pin===p&&H++}),H||(Ve.spacer=0)),n.onKill&&n.onKill(k)},ne.push(k),k.enable(!1,!1),hn&&hn(k),i&&i.add&&!Pe){var ye=k.update;k.update=function(){k.update=ye,ae.cache++,M||Q||k.refresh()},B.delayedCall(.01,k.update),Pe=.01,M=Q=0}else k.refresh();p&&$x()},t.register=function(n){return lo||(B=n||T1(),S1()&&window.document&&t.enable(),lo=kl),lo},t.defaults=function(n){if(n)for(var i in n)ea[i]=n[i];return ea},t.disable=function(n,i){kl=0,ne.forEach(function(l){return l[i?"kill":"disable"](n)}),ut(se,"wheel",io),ut(we,"scroll",io),clearInterval(Qs),ut(we,"touchcancel",tn),ut(_e,"touchstart",tn),Zs(ut,we,"pointerdown,touchstart,mousedown",Fh),Zs(ut,we,"pointerup,touchend,mouseup",Ih),ou.kill(),qs(ut);for(var o=0;o<ae.length;o+=3)Js(ut,ae[o],ae[o+1]),Js(ut,ae[o],ae[o+2])},t.enable=function(){if(se=window,we=document,ar=we.documentElement,_e=we.body,B){if(ys=B.utils.toArray,Bl=B.utils.clamp,Of=B.core.context||tn,uc=B.core.suppressOverwrites||tn,Zd=se.history.scrollRestoration||"auto",Af=se.pageYOffset||0,B.core.globals("ScrollTrigger",t),_e){kl=1,Do=document.createElement("div"),Do.style.height="100vh",Do.style.position="absolute",O1(),Dx(),Qe.register(B),t.isTouch=Qe.isTouch,Ln=Qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Rf=Qe.isTouch===1,ct(se,"wheel",io),qd=[se,we,ar,_e],B.matchMedia?(t.matchMedia=function(c){var h=B.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},B.addEventListener("matchMediaInit",function(){M1(),ip()}),B.addEventListener("matchMediaRevert",function(){return z1()}),B.addEventListener("matchMedia",function(){ji(0,1),Xi("matchMedia")}),B.matchMedia().add("(orientation: portrait)",function(){return dc(),dc})):console.warn("Requires GSAP 3.11.0 or later"),dc(),ct(we,"scroll",io);var n=_e.hasAttribute("style"),i=_e.style,o=i.borderTopStyle,l=B.core.Animation.prototype,s,a;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",s=_n(_e),it.m=Math.round(s.top+it.sc())||0,It.m=Math.round(s.left+It.sc())||0,o?i.borderTopStyle=o:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),Qs=setInterval($h,250),B.delayedCall(.5,function(){return Ks=0}),ct(we,"touchcancel",tn),ct(_e,"touchstart",tn),Zs(ct,we,"pointerdown,touchstart,mousedown",Fh),Zs(ct,we,"pointerup,touchend,mouseup",Ih),Mf=B.utils.checkPrefix("transform"),Ca.push(Mf),lo=bt(),ou=B.delayedCall(.2,ji).pause(),so=[we,"visibilitychange",function(){var c=se.innerWidth,h=se.innerHeight;we.hidden?(Oh=c,Dh=h):(Oh!==c||Dh!==h)&&Cl()},we,"DOMContentLoaded",ji,se,"load",ji,se,"resize",Cl],qs(ct),ne.forEach(function(c){return c.enable(0,1)}),a=0;a<ae.length;a+=3)Js(ut,ae[a],ae[a+1]),Js(ut,ae[a],ae[a+2])}else if(we){var u=function c(){t.enable(),we.removeEventListener("DOMContentLoaded",c)};we.addEventListener("DOMContentLoaded",u)}}},t.config=function(n){"limitCallbacks"in n&&(cc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Qs)||(Qs=i)&&setInterval($h,i),"ignoreMobileResize"in n&&(Rf=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(qs(ut)||qs(ct,n.autoRefreshEvents||"none"),x1=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,i){var o=Vt(n),l=ae.indexOf(o),s=Hi(o);~l&&ae.splice(l,s?6:2),i&&(s?un.unshift(se,i,_e,i,ar,i):un.unshift(o,i))},t.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},t.isInViewport=function(n,i,o){var l=(lr(n)?Vt(n):n).getBoundingClientRect(),s=l[o?Ai:Fi]*i||0;return o?l.right-s>0&&l.left+s<se.innerWidth:l.bottom-s>0&&l.top+s<se.innerHeight},t.positionInViewport=function(n,i,o){lr(n)&&(n=Vt(n));var l=n.getBoundingClientRect(),s=l[o?Ai:Fi],a=i==null?s/2:i in su?su[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return o?(l.left+a)/se.innerWidth:(l.top+a)/se.innerHeight},t.killAll=function(n){if(ne.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),n!==!0){var i=Yi.killAll||[];Yi={},i.forEach(function(o){return o()})}},t}();ie.version="3.15.0";ie.saveStyles=function(t){return t?ys(t).forEach(function(e){if(e&&e.style){var r=ir.indexOf(e);r>=0&&ir.splice(r,5),ir.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),B.core.getCache(e),Of())}}):ir};ie.revert=function(t,e){return ip(!t,e)};ie.create=function(t,e){return new ie(t,e)};ie.refresh=function(t){return t?Cl(!0):(lo||ie.register())&&ji(!0)};ie.update=function(t){return++ae.cache&&Tn(t===!0?2:0)};ie.clearScrollMemory=R1;ie.maxScroll=function(t,e){return ln(t,e?It:it)};ie.getScrollFunc=function(t,e){return ci(Vt(t),e?It:it)};ie.getById=function(t){return Lf[t]};ie.getAll=function(){return ne.filter(function(t){return t.vars.id!=="ScrollSmoother"})};ie.isScrolling=function(){return!!zr};ie.snapDirectional=np;ie.addEventListener=function(t,e){var r=Yi[t]||(Yi[t]=[]);~r.indexOf(e)||r.push(e)};ie.removeEventListener=function(t,e){var r=Yi[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};ie.batch=function(t,e){var r=[],n={},i=e.interval||.016,o=e.batchMax||1e9,l=function(u,c){var h=[],f=[],p=B.delayedCall(i,function(){c(h,f),h=[],f=[]}).pause();return function(_){h.length||p.restart(!0),h.push(_.trigger),f.push(_),o<=h.length&&p.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&jt(e[s])&&s!=="onRefreshInit"?l(s,e[s]):e[s];return jt(o)&&(o=o(),ct(ie,"refresh",function(){return o=e.batchMax()})),ys(t).forEach(function(a){var u={};for(s in n)u[s]=n[s];u.trigger=a,r.push(ie.create(u))}),r};var Gh=function(e,r,n,i){return r>i?e(i):r<0&&e(0),n>i?(i-r)/(n-r):n<0?r/(r-n):1},hc=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Qe.isTouch?" pinch-zoom":""):"none",e===ar&&t(_e,r)},ia={auto:1,scroll:1},Xx=function(e){var r=e.event,n=e.target,i=e.axis,o=(r.changedTouches?r.changedTouches[0]:r).target,l=o._gsap||B.core.getCache(o),s=bt(),a;if(!l._isScrollT||s-l._isScrollT>2e3){for(;o&&o!==_e&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(ia[(a=Nr(o)).overflowY]||ia[a.overflowX]));)o=o.parentNode;l._isScroll=o&&o!==n&&!Hi(o)&&(ia[(a=Nr(o)).overflowY]||ia[a.overflowX]),l._isScrollT=s}(l._isScroll||i==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},L1=function(e,r,n,i){return Qe.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:i=i&&Xx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ct(we,Qe.eventTypes[0],Kh,!1,!0)},onDisable:function(){return ut(we,Qe.eventTypes[0],Kh,!0)}})},Gx=/(input|label|select|textarea)/i,Qh,Kh=function(e){var r=Gx.test(e.target.tagName);(r||Qh)&&(e._gsapAllow=!0,Qh=r)},Qx=function(e){Ci(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,i=r.momentum,o=r.allowNestedScroll,l=r.onRelease,s,a,u=Vt(e.target)||ar,c=B.core.globals().ScrollSmoother,h=c&&c.get(),f=Ln&&(e.content&&Vt(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=ci(u,it),_=ci(u,It),m=1,S=(Qe.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,v=0,g=jt(i)?function(){return i(s)}:function(){return i||2.8},y,w,C=L1(u,e.type,!0,o),E=function(){return w=!1},T=tn,x=tn,P=function(){a=ln(u,it),x=Bl(Ln?1:0,a),n&&(T=Bl(0,ln(u,It))),y=Ii},b=function(){f._gsap.y=Sl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},$=function(){if(w){requestAnimationFrame(E);var j=Sl(s.deltaY/2),F=x(p.v-j);if(f&&F!==p.v+p.offset){p.offset=F-p.v;var k=Sl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+k+", 0, 1)",f._gsap.y=k+"px",p.cacheID=ae.cache,Tn()}return!0}p.offset&&b(),w=!0},O,Z,G,oe,J=function(){P(),O.isActive()&&O.vars.scrollY>a&&(p()>a?O.progress(1)&&p(a):O.resetTo("scrollY",a))};return f&&B.set(f,{y:"+=0"}),e.ignoreCheck=function(U){return Ln&&U.type==="touchmove"&&$()||m>1.05&&U.type!=="touchstart"||s.isGesturing||U.touches&&U.touches.length>1},e.onPress=function(){w=!1;var U=m;m=Sl((se.visualViewport&&se.visualViewport.scale||1)/S),O.pause(),U!==m&&hc(u,m>1.01?!0:n?!1:"x"),Z=_(),G=p(),P(),y=Ii},e.onRelease=e.onGestureStart=function(U,j){if(p.offset&&b(),!j)oe.restart(!0);else{ae.cache++;var F=g(),k,V;n&&(k=_(),V=k+F*.05*-U.velocityX/.227,F*=Gh(_,k,V,ln(u,It)),O.vars.scrollX=T(V)),k=p(),V=k+F*.05*-U.velocityY/.227,F*=Gh(p,k,V,ln(u,it)),O.vars.scrollY=x(V),O.invalidate().duration(F).play(.01),(Ln&&O.vars.scrollY>=a||k>=a-1)&&B.to({},{onUpdate:J,duration:F})}l&&l(U)},e.onWheel=function(){O._ts&&O.pause(),bt()-v>1e3&&(y=0,v=bt())},e.onChange=function(U,j,F,k,V){if(Ii!==y&&P(),j&&n&&_(T(k[2]===j?Z+(U.startX-U.x):_()+j-k[1])),F){p.offset&&b();var de=V[2]===F,R=de?G+U.startY-U.y:p()+F-V[1],D=x(R);de&&R!==D&&(G+=D-R),p(D)}(F||j)&&Tn()},e.onEnable=function(){hc(u,n?!1:"x"),ie.addEventListener("refresh",J),ct(se,"resize",J),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){hc(u,!0),ut(se,"resize",J),ie.removeEventListener("refresh",J),C.kill()},e.lockAxis=e.lockAxis!==!1,s=new Qe(e),s.iOS=Ln,Ln&&!p()&&p(1),Ln&&B.ticker.add(tn),oe=s._dc,O=B.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:D1(p,p(),function(){return O.pause()})},onUpdate:Tn,onComplete:oe.vars.onComplete}),s};ie.sort=function(t){if(jt(t))return ne.sort(t);var e=se.pageYOffset||0;return ie.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+se.innerHeight}),ne.sort(t||function(r,n){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ie.observe=function(t){return new Qe(t)};ie.normalizeScroll=function(t){if(typeof t>"u")return Dt;if(t===!0&&Dt)return Dt.enable();if(t===!1){Dt&&Dt.kill(),Dt=t;return}var e=t instanceof Qe?t:Qx(t);return Dt&&Dt.target===e.target&&Dt.kill(),Hi(e.target)&&(Dt=e),e};ie.core={_getVelocityProp:zf,_inputObserver:L1,_scrollers:ae,_proxies:un,bridge:{ss:function(){zr||Xi("scrollStart"),zr=bt()},ref:function(){return Nt}}};T1()&&B.registerPlugin(ie);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A1=(...t)=>t.filter((e,r,n)=>!!e&&n.indexOf(e)===r).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=ce.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:l,...s},a)=>ce.createElement("svg",{ref:a,...qx,width:e,height:e,stroke:t,strokeWidth:n?Number(r)*24/Number(e):r,className:A1("lucide",i),...s},[...l.map(([u,c])=>ce.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=(t,e)=>{const r=ce.forwardRef(({className:n,...i},o)=>ce.createElement(Zx,{ref:o,iconNode:e,className:A1(`lucide-${Kx(t)}`,n),...i}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=Be("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=Be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=Be("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=Be("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=Be("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Be("Feather",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=Be("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=Be("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=Be("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=Be("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=Be("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=Be("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=Be("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=Be("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=Be("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=Be("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Be("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=Be("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=Be("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=Be("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=Be("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=Be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),rg="/assets/hero-bg-CfS1bU_6.jpg",_c="/assets/groom-BgMSaAt0.jpg",xc="/assets/bride-B4AUy4sO.jpg",d2="/assets/resort-ipwJmroI.jpg",p2="/assets/room-DT1qHTCd.jpg",h2="data:audio/mpeg;base64,",g2="/assets/img5-BL0OxGy0.jpg",m2="/assets/img6-ByN_z66m.jpg",v2="/assets/img7-h214JnXG.jpg",y2="/assets/img8-DD-mZPjV.jpg",_2="/assets/img9-D4_utFGe.jpg",x2="/assets/img10-DHtybGeb.jpg";typeof window<"u"&&re.registerPlugin(ie);const w2="https://archive.org/download/sitar-instrumental/sitar-instrumental.mp3",ng="artist-luxury-wedding-template-styles",k2=`
:root {
  --ivory: #fffaf3;
  --cream: #f8efe3;
  --champagne: #ead6ad;
  --gold: #c79b3b;
  --deep-gold: #8f6723;
  --plum: #5b174f;
  --berry: #8b2d6d;
  --rose: #c66b8f;
  --ink: #211b20;
  --muted: #786d72;
  --shadow-soft: 0 24px 70px rgba(91,23,79,0.14);
  --shadow-card: 0 18px 45px rgba(33,27,32,0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  color: inherit;
}

.artist-wedding-page {
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 8% 6%, rgba(199,155,59,0.18), transparent 29rem),
    radial-gradient(circle at 94% 8%, rgba(198,107,143,0.14), transparent 27rem),
    radial-gradient(circle at 50% 58%, rgba(91,23,79,0.06), transparent 34rem),
    linear-gradient(180deg, var(--ivory), var(--cream) 48%, #fff7ef);
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.artist-wedding-page img {
  display: block;
  max-width: 100%;
}

.page-layer {
  position: relative;
  z-index: 2;
}

.wedding-canvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.cinematic-intro {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.intro-veil {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  background:
    radial-gradient(circle at center, rgba(234,214,173,0.14), transparent 24rem),
    linear-gradient(135deg, var(--plum), #2a1026);
}

.intro-veil-left {
  left: 0;
}

.intro-veil-right {
  right: 0;
}

.intro-mark {
  position: relative;
  z-index: 2;
  width: min(280px, 76vw);
  aspect-ratio: 1;
  border-radius: 999px;
  display: grid;
  place-items: center;
  text-align: center;
  color: var(--champagne);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(234,214,173,0.28);
  box-shadow:
    0 30px 90px rgba(0,0,0,0.28),
    inset 0 0 0 14px rgba(255,255,255,0.025);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.intro-mark span {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(52px, 12vw, 88px);
  letter-spacing: -0.08em;
  line-height: 1;
}

.intro-mark small {
  position: absolute;
  bottom: 58px;
  left: 28px;
  right: 28px;
  color: rgba(255,255,255,0.68);
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  line-height: 1.7;
}

.floating-ornament {
  position: fixed;
  z-index: 1;
  pointer-events: none;
  opacity: 0.62;
  color: var(--gold);
  filter: drop-shadow(0 18px 30px rgba(91,23,79,0.12));
}

.floating-ornament.one {
  top: 18%;
  left: 5%;
}

.floating-ornament.two {
  top: 54%;
  right: 5%;
  color: var(--rose);
}

.floating-controls {
  position: fixed;
  z-index: 100;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}

.language-switcher-pill,
.music-toggle {
  pointer-events: auto;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.language-switcher-pill {
  display: inline-flex;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(199,155,59,0.26);
  box-shadow: 0 18px 48px rgba(33,27,32,0.13);
}

.language-switcher-pill button {
  border: 0;
  background: transparent;
  color: var(--plum);
  font-size: 11px;
  letter-spacing: 0.04em;
  padding: 9px 13px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.language-switcher-pill button.active {
  color: #fff;
  background: linear-gradient(135deg, var(--plum), var(--berry));
  box-shadow: 0 10px 24px rgba(91,23,79,0.24);
}

.music-toggle {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(199,155,59,0.3);
  border-radius: 999px;
  background: rgba(255,255,255,0.72);
  color: var(--plum);
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 18px 48px rgba(33,27,32,0.13);
  transition: background 0.3s ease, color 0.3s ease;
}

.music-toggle.playing {
  background: linear-gradient(135deg, var(--plum), var(--berry));
  color: #fff;
}

.hero {
  position: relative;
  min-height: 100svh;
  padding: 98px 18px 50px;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 112%;
  object-fit: cover;
  opacity: 0.16;
  transform: scale(1.08);
  will-change: transform;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255,250,243,0.42), rgba(255,250,243,0.95) 76%),
    radial-gradient(circle at 50% 14%, rgba(199,155,59,0.19), transparent 28rem);
}

.hero-art-frame {
  position: absolute;
  inset: 34px;
  z-index: 1;
  pointer-events: none;
  opacity: 0.6;
}

.corner {
  position: absolute;
  width: 74px;
  height: 74px;
}

.corner-tl {
  top: 0;
  left: 0;
  border-top: 1px solid rgba(199,155,59,0.48);
  border-left: 1px solid rgba(199,155,59,0.48);
  border-radius: 26px 0 0 0;
}

.corner-tr {
  top: 0;
  right: 0;
  border-top: 1px solid rgba(199,155,59,0.48);
  border-right: 1px solid rgba(199,155,59,0.48);
  border-radius: 0 26px 0 0;
}

.corner-bl {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid rgba(199,155,59,0.48);
  border-left: 1px solid rgba(199,155,59,0.48);
  border-radius: 0 0 0 26px;
}

.corner-br {
  bottom: 0;
  right: 0;
  border-bottom: 1px solid rgba(199,155,59,0.48);
  border-right: 1px solid rgba(199,155,59,0.48);
  border-radius: 0 0 26px 0;
}

.hero-monogram {
  position: absolute;
  z-index: 2;
  top: 62px;
  left: 50%;
  transform: translateX(-50%);
  width: 72px;
  height: 72px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: var(--plum);
  background: rgba(255,255,255,0.64);
  border: 1px solid rgba(199,155,59,0.24);
  box-shadow: 0 18px 48px rgba(33,27,32,0.12);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.hero-monogram span {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 22px;
  color: var(--deep-gold);
  letter-spacing: -0.08em;
}

.hero-shell {
  position: relative;
  z-index: 2;
  width: min(1140px, 100%);
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 18px;
}

.hero-panel {
  position: relative;
  min-height: 640px;
  border-radius: 42px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

.hero-panel::after {
  content: "";
  position: absolute;
  inset: 16px;
  border: 1px solid rgba(234,214,173,0.22);
  border-radius: 30px;
  pointer-events: none;
}

.hero-date-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 38px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 0%, rgba(234,214,173,0.25), transparent 19rem),
    radial-gradient(circle at 100% 90%, rgba(198,107,143,0.28), transparent 22rem),
    linear-gradient(145deg, rgba(91,23,79,0.98), rgba(139,45,109,0.92));
}

.hero-date-panel::before {
  content: "";
  position: absolute;
  width: 330px;
  height: 330px;
  right: -150px;
  top: -120px;
  border-radius: 999px;
  border: 1px solid rgba(234,214,173,0.19);
}

.hero-content-panel {
  padding: clamp(34px, 5vw, 58px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.76), rgba(255,250,243,0.8)),
    radial-gradient(circle at 50% 0%, rgba(234,214,173,0.22), transparent 23rem);
  border: 1px solid rgba(255,255,255,0.76);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.eyebrow,
.section-kicker,
.micro-label {
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 800;
}

.eyebrow {
  color: var(--deep-gold);
}

.hero-date-panel .eyebrow {
  text-align: center;
  color: rgba(255,255,255,0.72);
}

.script-title {
  margin: 18px 0 8px;
  text-align: center;
  color: #fff;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-size: clamp(54px, 8vw, 88px);
  line-height: 0.86;
  font-weight: 400;
  letter-spacing: -0.065em;
}

.script-title span {
  display: block;
  margin: 14px 0;
  color: var(--champagne);
  font-family: Inter, ui-sans-serif, system-ui;
  font-size: 0.28em;
  font-style: normal;
  letter-spacing: 0.34em;
  text-transform: uppercase;
}

.gold-line {
  width: 86px;
  height: 1px;
  margin: 26px auto;
  background: linear-gradient(90deg, transparent, var(--champagne), transparent);
}

.calendar-card {
  position: relative;
  z-index: 1;
  width: min(310px, 100%);
  margin: 0 auto;
  padding: 19px;
  border-radius: 28px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(234,214,173,0.23);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
}

.calendar-month-name {
  margin-bottom: 15px;
  text-align: center;
  color: var(--champagne);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 20px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 7px;
}

.calendar-day-header,
.calendar-day-cell {
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 999px;
  font-size: 11px;
}

.calendar-day-header {
  color: rgba(255,255,255,0.52);
  font-weight: 800;
}

.calendar-day-cell {
  color: rgba(255,255,255,0.84);
}

.calendar-day-circled {
  color: var(--plum);
  background: var(--champagne);
  font-weight: 900;
  box-shadow: 0 0 0 7px rgba(234,214,173,0.15);
}

.hero-mini-names {
  position: relative;
  z-index: 1;
  margin-top: 30px;
  text-align: center;
}

.hero-mini-names h3 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(22px, 4vw, 31px);
  line-height: 1.1;
  font-weight: 400;
}

.hero-mini-names .amp {
  margin: 5px 0;
  color: var(--champagne);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 25px;
  font-style: italic;
}

.content-top {
  text-align: center;
}

.hero-date-large {
  margin-top: 10px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(38px, 8vw, 66px);
  line-height: 0.92;
  font-weight: 500;
  letter-spacing: -0.04em;
}

.hero-date-large span {
  display: block;
  margin-top: 8px;
  color: var(--muted);
  font-family: Inter, ui-sans-serif, system-ui;
  font-size: 13px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.weekday {
  margin-top: 10px;
  color: var(--deep-gold);
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 900;
}

.couple-avatar-row {
  margin: 36px auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-img {
  width: 122px;
  height: 122px;
  border-radius: 999px;
  object-fit: cover;
  border: 6px solid #fff;
  box-shadow: var(--shadow-card);
}

.avatar-img:first-child {
  margin-right: -18px;
}

.avatar-img:last-child {
  margin-left: -18px;
}

.avatar-heart {
  position: relative;
  z-index: 2;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rose), var(--plum));
  border: 4px solid #fff;
  box-shadow: 0 16px 34px rgba(91,23,79,0.19);
}

.hero-names {
  margin: 0;
  text-align: center;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(48px, 9vw, 82px);
  font-weight: 400;
  letter-spacing: -0.07em;
  line-height: 0.92;
}

.hero-names span {
  display: block;
  margin: 12px 0;
  color: var(--gold);
  font-family: Inter, ui-sans-serif, system-ui;
  font-size: 0.28em;
  letter-spacing: 0.34em;
  text-transform: uppercase;
}

.hero-subcopy {
  max-width: 470px;
  margin: 24px auto 0;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.85;
}

.editorial-ribbon {
  width: min(430px, 100%);
  margin: 26px auto 0;
  padding: 11px 16px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  color: var(--deep-gold);
  background: rgba(234,214,173,0.22);
  border: 1px solid rgba(199,155,59,0.18);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 14px;
  font-style: italic;
}

.countdown-grid {
  margin: 30px auto 0;
  max-width: 560px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.countdown-card {
  padding: 15px 8px;
  text-align: center;
  border-radius: 22px;
  background: rgba(248,239,227,0.72);
  border: 1px solid rgba(199,155,59,0.16);
}

.countdown-number {
  display: block;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(24px, 5vw, 36px);
  line-height: 1;
}

.countdown-label {
  display: block;
  margin-top: 7px;
  color: var(--deep-gold);
  font-size: 9px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 900;
}

.hero-actions {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-button,
.gold-button,
.ghost-button {
  position: relative;
  isolation: isolate;
  border: 0;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  cursor: pointer;
  padding: 14px 23px;
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 900;
  transition: box-shadow 0.28s ease, background 0.28s ease;
  will-change: transform;
}

.primary-button,
.gold-button {
  color: #fff;
  background: linear-gradient(135deg, var(--gold), var(--deep-gold));
  box-shadow: 0 18px 38px rgba(143,103,35,0.23);
}

.ghost-button {
  color: var(--plum);
  background: rgba(255,255,255,0.58);
  border: 1px solid rgba(199,155,59,0.25);
}

.section {
  position: relative;
  padding: 82px 18px;
}

.section-inner {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.section-heading {
  margin-bottom: 44px;
  text-align: center;
}

.section-kicker {
  margin-bottom: 14px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--deep-gold);
}

.section-title {
  margin: 0;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(38px, 7vw, 62px);
  font-weight: 400;
  letter-spacing: -0.055em;
  line-height: 0.96;
}

.section-copy {
  max-width: 650px;
  margin: 17px auto 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.85;
}

.couple-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 90px minmax(0, 1fr);
  gap: 24px;
  align-items: center;
}

.couple-card {
  position: relative;
  padding: 16px 16px 29px;
  overflow: hidden;
  border-radius: 34px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(199,155,59,0.18);
  box-shadow: var(--shadow-card);
}

.couple-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 8%, rgba(199,155,59,0.18), transparent 16rem),
    radial-gradient(circle at 88% 0%, rgba(198,107,143,0.14), transparent 14rem);
}

.couple-photo-wrap {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 28px;
  aspect-ratio: 4 / 4.8;
}

.couple-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease, filter 0.7s ease;
}

.couple-card:hover .couple-photo-wrap img {
  transform: scale(1.06);
  filter: brightness(0.92);
}

.couple-info {
  position: relative;
  z-index: 1;
  padding: 25px 12px 0;
  text-align: center;
}

.role-pill {
  display: inline-flex;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(199,155,59,0.13);
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 900;
}

.couple-name {
  margin: 15px 0 9px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(30px, 5vw, 44px);
  line-height: 1;
  font-weight: 400;
}

.couple-meta {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
  font-size: 13px;
}

.phone-link {
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--plum);
  font-size: 12px;
  font-weight: 900;
}

.couple-center {
  min-height: 340px;
  position: relative;
  display: grid;
  place-items: center;
}

.couple-center::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(199,155,59,0.4), transparent);
}

.center-heart {
  position: relative;
  z-index: 1;
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--plum), var(--berry));
  color: #fff;
  border: 8px solid var(--ivory);
  box-shadow: var(--shadow-card);
}

.invitation-section {
  padding-top: 28px;
}

.invitation-card {
  position: relative;
  width: min(870px, 100%);
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  padding: clamp(38px, 7vw, 76px);
  border-radius: 44px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,250,243,0.88)),
    radial-gradient(circle at top, rgba(234,214,173,0.2), transparent 21rem);
  border: 1px solid rgba(199,155,59,0.23);
  box-shadow: var(--shadow-soft);
}

.invitation-card::before {
  content: "";
  position: absolute;
  inset: 15px;
  border-radius: 32px;
  border: 1px solid rgba(199,155,59,0.18);
  pointer-events: none;
}

.invitation-card::after {
  content: "❦";
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  color: rgba(199,155,59,0.42);
  font-size: 28px;
}

.invite-title {
  position: relative;
  margin: 0;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(36px, 8vw, 66px);
  line-height: 0.96;
  font-weight: 400;
  letter-spacing: -0.055em;
}

.invite-text {
  position: relative;
  max-width: 680px;
  margin: 27px auto 0;
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(19px, 4vw, 26px);
  line-height: 1.58;
}

.invite-details {
  position: relative;
  max-width: 630px;
  margin: 23px auto 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.9;
}

.family-row {
  position: relative;
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.family-box,
.rsvp-mini-card {
  border-radius: 25px;
  padding: 19px;
  background: rgba(255,255,255,0.64);
  border: 1px solid rgba(199,155,59,0.16);
}

.family-title {
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 900;
}

.family-name {
  margin-top: 8px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 18px;
}

.art-editorial-section {
  padding-top: 38px;
}

.art-editorial-card {
  position: relative;
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  min-height: 560px;
  overflow: hidden;
  border-radius: 46px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,250,243,0.84)),
    radial-gradient(circle at 85% 12%, rgba(198,107,143,0.14), transparent 24rem);
  border: 1px solid rgba(199,155,59,0.2);
  box-shadow: var(--shadow-soft);
}

.art-editorial-card::before {
  content: "❦";
  position: absolute;
  z-index: 3;
  top: 28px;
  right: 34px;
  color: rgba(199,155,59,0.34);
  font-size: 42px;
}

.art-editorial-image {
  position: relative;
  overflow: hidden;
  min-height: 560px;
  clip-path: ellipse(88% 100% at 18% 50%);
}

.art-editorial-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, transparent 60%, rgba(255,250,243,0.9)),
    radial-gradient(circle at center, transparent, rgba(33,27,32,0.28));
}

.art-editorial-image img {
  width: 100%;
  height: 112%;
  object-fit: cover;
  filter: saturate(0.86) contrast(0.94);
  will-change: transform;
}

.art-editorial-copy {
  padding: clamp(34px, 6vw, 76px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.art-large-copy {
  max-width: 560px;
  margin: 26px 0 0;
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(22px, 4vw, 34px);
  line-height: 1.45;
  letter-spacing: -0.035em;
}

.art-signature {
  margin-top: 34px;
  display: inline-grid;
  gap: 8px;
  align-self: flex-start;
  padding: 20px 24px;
  border-radius: 26px;
  color: var(--plum);
  background: rgba(248,239,227,0.72);
  border: 1px solid rgba(199,155,59,0.17);
}

.art-signature span {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 36px;
  color: var(--deep-gold);
  letter-spacing: -0.08em;
}

.art-signature small {
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.venue-card {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  overflow: hidden;
  border-radius: 42px;
  background: rgba(255,255,255,0.76);
  border: 1px solid rgba(199,155,59,0.18);
  box-shadow: var(--shadow-soft);
}

.venue-img-wrap {
  min-height: 500px;
  overflow: hidden;
}

.venue-img-wrap img {
  width: 100%;
  height: 112%;
  object-fit: cover;
  will-change: transform;
}

.venue-panel {
  padding: clamp(32px, 5vw, 58px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.venue-name {
  margin: 9px 0 13px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(38px, 6vw, 62px);
  line-height: 0.96;
  font-weight: 400;
  letter-spacing: -0.055em;
}

.venue-address {
  color: var(--muted);
  line-height: 1.78;
  font-size: 14px;
}

.info-grid {
  margin: 30px 0;
  display: grid;
  gap: 12px;
}

.info-card {
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 13px;
  align-items: center;
  padding: 14px;
  border-radius: 23px;
  background: rgba(248,239,227,0.72);
  border: 1px solid rgba(199,155,59,0.14);
}

.info-icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: rgba(199,155,59,0.14);
  color: var(--deep-gold);
}

.info-label {
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  font-weight: 900;
}

.info-value {
  margin-top: 4px;
  color: var(--ink);
  font-size: 13px;
  line-height: 1.55;
}

.timeline-wrap {
  position: relative;
  width: min(900px, 100%);
  margin: 0 auto;
  padding: 8px 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 18px;
  bottom: 18px;
  width: 1px;
  transform: translateX(-50%);
  background: rgba(199,155,59,0.2);
  overflow: hidden;
}

.timeline-progress {
  position: absolute;
  inset: 0 0 auto;
  height: 0%;
  background: linear-gradient(180deg, var(--gold), var(--plum));
}

.timeline-item {
  position: relative;
  width: calc(50% - 34px);
  margin-bottom: 22px;
  padding: 22px;
  border-radius: 28px;
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(199,155,59,0.18);
  box-shadow: 0 16px 38px rgba(33,27,32,0.09);
}

.timeline-item:nth-child(odd) {
  margin-right: auto;
  text-align: right;
}

.timeline-item:nth-child(even) {
  margin-left: auto;
}

.timeline-dot {
  position: absolute;
  top: 28px;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: var(--champagne);
  border: 4px solid var(--plum);
  box-shadow: 0 0 0 7px rgba(199,155,59,0.12);
}

.timeline-item:nth-child(odd) .timeline-dot {
  right: -43px;
}

.timeline-item:nth-child(even) .timeline-dot {
  left: -43px;
}

.timeline-time {
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 900;
}

.timeline-title {
  margin: 9px 0 7px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 25px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 9px;
}

.timeline-item:nth-child(odd) .timeline-title {
  justify-content: flex-end;
}

.timeline-copy {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.7;
}

.modern-gallery-collage {
  display: grid;
  grid-template-columns: 1.25fr 0.8fr 0.9fr;
  grid-template-rows: 195px 195px 215px;
  gap: 14px;
  min-height: 625px;
}

.modern-collage-card {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(199,155,59,0.2);
  box-shadow: 0 18px 48px rgba(33,27,32,0.13);
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
  will-change: transform, opacity;
}

button.modern-collage-card {
  padding: 0;
  appearance: none;
}

.modern-collage-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.1s ease, opacity 0.6s ease, filter 0.6s ease;
  will-change: transform, opacity;
}

.modern-collage-card:hover img {
  transform: scale(1.08);
  filter: brightness(0.82);
}

.modern-collage-card::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0;
  background: linear-gradient(180deg, transparent, rgba(33,27,32,0.42));
  transition: opacity 0.45s ease;
}

.modern-collage-card:hover::after {
  opacity: 1;
}

.collage-main {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}

.collage-small-top {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.collage-name-card {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 22px;
  background:
    linear-gradient(135deg, rgba(199,155,59,0.88), rgba(143,103,35,0.78)),
    radial-gradient(circle at top, rgba(255,255,255,0.28), transparent 18rem);
  color: #fff;
}

.collage-name-card::after {
  display: none;
}

.collage-name-card p {
  margin: 0 0 8px;
  font-size: 10px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  opacity: 0.82;
  font-weight: 900;
}

.collage-name-card h3 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(26px, 4vw, 42px);
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.05em;
}

.collage-name-card h3 span {
  color: #fff3cf;
  font-style: italic;
}

.collage-name-card small {
  margin-top: 8px;
  font-size: 12px;
  opacity: 0.86;
}

.collage-wide {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}

.collage-tall {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
}

.collage-bottom {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}

.collage-main-overlay {
  position: absolute;
  z-index: 2;
  inset: auto 0 0;
  min-height: 42%;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  background:
    linear-gradient(180deg, transparent, rgba(33,27,32,0.84)),
    radial-gradient(circle at center, rgba(199,155,59,0.18), transparent 16rem);
  color: #fff;
  transform: translateZ(35px);
  transform-style: preserve-3d;
}

.collage-main-overlay span {
  color: var(--champagne);
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 900;
}

.collage-main-overlay h3 {
  margin: 11px 0 8px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(44px, 7vw, 76px);
  line-height: 0.9;
  font-weight: 400;
  letter-spacing: -0.075em;
}

.collage-main-overlay p {
  margin: 0;
  color: rgba(255,255,255,0.82);
  font-size: 13px;
  letter-spacing: 0.08em;
}

.collage-photo-badge {
  position: absolute;
  z-index: 2;
  left: 16px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 13px;
  border-radius: 999px;
  color: #fff;
  background: rgba(91,23,79,0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;
  transform: translateZ(25px);
}

.gallery-slot-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-img-bottom {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 1.1s ease, filter 0.6s ease;
}

.gallery-img-top {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  opacity: 0;
  transition: opacity 1s ease-in-out, transform 1.1s ease, filter 0.6s ease;
  will-change: opacity, transform;
}

.gallery-img-top.fade-in {
  opacity: 1;
}

.modern-collage-card:hover .gallery-img-bottom,
.modern-collage-card:hover .gallery-img-top {
  transform: scale(1.08);
  filter: brightness(0.82);
}

.gallery-dots {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.gallery-dots button {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(91,23,79,0.22);
  cursor: pointer;
  transition: width 0.3s ease, background 0.3s ease;
}

.gallery-dots button.active {
  width: 30px;
  background: linear-gradient(135deg, var(--gold), var(--plum));
}

.rsvp-section .section-inner,
.blessing-section .section-inner,
.map-section .section-inner {
  padding: clamp(24px, 4vw, 46px);
  border-radius: 44px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.62), rgba(248,239,227,0.78)),
    radial-gradient(circle at top right, rgba(198,107,143,0.13), transparent 18rem);
  border: 1px solid rgba(199,155,59,0.16);
  box-shadow: var(--shadow-soft);
}

.rsvp-grid,
.blessing-grid,
.map-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 22px;
  margin-top: 34px;
}

.rsvp-card,
.rsvp-summary,
.blessing-form,
.blessing-board,
.map-card,
.map-details {
  border-radius: 31px;
  background: rgba(255,255,255,0.74);
  border: 1px solid rgba(199,155,59,0.17);
  box-shadow: 0 12px 34px rgba(33,27,32,0.07);
  padding: clamp(23px, 4vw, 34px);
}

.card-title {
  margin: 0 0 20px;
  color: var(--plum);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 29px;
  font-weight: 400;
}

.form-group {
  margin-bottom: 14px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: var(--deep-gold);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 900;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  border: 1px solid rgba(199,155,59,0.22);
  background: rgba(255,250,243,0.76);
  border-radius: 18px;
  padding: 14px 15px;
  outline: none;
  color: var(--ink);
  font-size: 14px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  border-color: rgba(91,23,79,0.46);
  box-shadow: 0 0 0 4px rgba(91,23,79,0.08);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.success-message {
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(199,155,59,0.12);
  color: var(--deep-gold);
  font-size: 13px;
  text-align: center;
  font-weight: 800;
}

.rsvp-mini-grid {
  display: grid;
  gap: 12px;
}

.rsvp-mini-card {
  display: flex;
  gap: 13px;
  align-items: flex-start;
}

.rsvp-mini-icon {
  width: 43px;
  height: 43px;
  flex: 0 0 43px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: var(--deep-gold);
  background: rgba(199,155,59,0.13);
}

.rsvp-mini-card h4 {
  margin: 0 0 5px;
  color: var(--plum);
  font-size: 14px;
}

.rsvp-mini-card p {
  margin: 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.65;
}

.map-card {
  overflow: hidden;
  padding: 0;
  min-height: 430px;
}

.map-frame {
  width: 100%;
  height: 100%;
  min-height: 430px;
  border: 0;
  filter: saturate(0.85) contrast(0.95);
}

.map-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.board-head {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.note-count {
  white-space: nowrap;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(91,23,79,0.08);
  color: var(--plum);
  font-size: 11px;
  font-weight: 900;
}

.blessings-list {
  max-height: 430px;
  overflow: auto;
  padding-right: 5px;
}

.blessings-list::-webkit-scrollbar {
  width: 6px;
}

.blessings-list::-webkit-scrollbar-thumb {
  background: rgba(199,155,59,0.38);
  border-radius: 999px;
}

.blessing-item {
  padding: 18px;
  border-radius: 23px;
  background: rgba(248,239,227,0.68);
  border: 1px solid rgba(199,155,59,0.13);
  margin-bottom: 12px;
}

.blessing-text {
  margin: 0;
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 16px;
  line-height: 1.65;
}

.blessing-meta {
  margin-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 11px;
}

.blessing-author {
  color: var(--plum);
  font-weight: 900;
}

.empty-state {
  padding: 34px;
  text-align: center;
  color: var(--muted);
  border-radius: 24px;
  background: rgba(248,239,227,0.6);
}

.footer {
  position: relative;
  overflow: hidden;
  padding: 62px 18px 44px;
  text-align: center;
  color: #fff;
  background:
    radial-gradient(circle at top, rgba(199,155,59,0.18), transparent 22rem),
    linear-gradient(135deg, var(--plum), #2a1026);
}

.footer::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 7px;
  background: repeating-linear-gradient(
    90deg,
    var(--gold) 0 26px,
    var(--champagne) 26px 52px
  );
}

.footer::after {
  content: "";
  position: absolute;
  left: 50%;
  top: -120px;
  width: 460px;
  height: 460px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(199,155,59,0.18), transparent 66%);
  pointer-events: none;
}

.footer-ornament {
  position: relative;
  z-index: 1;
  width: 58px;
  height: 58px;
  margin: 0 auto 18px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: var(--champagne);
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(234,214,173,0.24);
}

.footer-small {
  position: relative;
  z-index: 1;
  margin: 0 0 12px;
  color: var(--champagne);
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 900;
}

.footer-names {
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(36px, 7vw, 64px);
  font-weight: 400;
  letter-spacing: -0.055em;
}

.footer-divider {
  position: relative;
  z-index: 1;
  width: min(280px, 100%);
  margin: 22px auto 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 13px;
  color: var(--champagne);
}

.footer-divider span {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(234,214,173,0.54));
}

.footer-divider span:last-child {
  background: linear-gradient(90deg, rgba(234,214,173,0.54), transparent);
}

.footer-quote {
  position: relative;
  z-index: 1;
  max-width: 680px;
  margin: 20px auto 0;
  color: rgba(255,255,255,0.76);
  line-height: 1.85;
  font-size: 14px;
}

.footer-address {
  position: relative;
  z-index: 1;
  margin-top: 30px;
  color: var(--champagne);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 900;
}

.footer-copy {
  position: relative;
  z-index: 1;
  margin-top: 18px;
  color: rgba(255,255,255,0.48);
  font-size: 12px;
}

.lightbox-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(8,6,8,0.96);
}

.lightbox-img {
  max-width: min(100%, 980px);
  max-height: 82svh;
  object-fit: contain;
  border-radius: 22px;
  border: 1px solid rgba(234,214,173,0.35);
  box-shadow: 0 28px 90px rgba(0,0,0,0.44);
}

.lightbox-button {
  position: absolute;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(234,214,173,0.36);
  border-radius: 999px;
  color: #fff;
  background: rgba(255,255,255,0.08);
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: background 0.25s ease;
}

.lightbox-button:hover {
  background: rgba(199,155,59,0.38);
}

.lightbox-close {
  top: 18px;
  right: 18px;
}

.lightbox-prev {
  left: 18px;
}

.lightbox-next {
  right: 18px;
}

.reveal,
.line-reveal,
.timeline-item,
.countdown-card,
.modern-collage-card,
.rsvp-card,
.rsvp-summary,
.map-card,
.map-details,
.blessing-form,
.blessing-board,
.art-editorial-card,
.art-signature {
  will-change: transform, opacity;
}

.line-reveal {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

@media (max-width: 900px) {
  .hero {
    padding: 84px 12px 30px;
    align-items: flex-start;
  }

  .hero-art-frame {
    inset: 22px;
  }

  .hero-monogram {
    top: 78px;
    width: 60px;
    height: 60px;
  }

  .hero-shell {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    min-height: auto;
    border-radius: 34px;
  }

  .hero-date-panel,
  .hero-content-panel {
    padding: 36px 22px;
  }

  .countdown-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .couple-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .couple-center {
    min-height: 66px;
  }

  .couple-center::before {
    width: 100%;
    height: 1px;
    top: 50%;
    bottom: auto;
    background: linear-gradient(90deg, transparent, rgba(199,155,59,0.4), transparent);
  }

  .center-heart {
    width: 58px;
    height: 58px;
    border-width: 7px;
  }

  .art-editorial-card {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .art-editorial-image {
    min-height: 320px;
    clip-path: none;
  }

  .venue-card,
  .rsvp-grid,
  .blessing-grid,
  .map-grid {
    grid-template-columns: 1fr;
  }

  .venue-img-wrap {
    min-height: 290px;
  }

  .timeline-line {
    left: 12px;
  }

  .timeline-item,
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    width: calc(100% - 42px);
    margin-left: 42px;
    margin-right: 0;
    text-align: left;
  }

  .timeline-item:nth-child(odd) .timeline-dot,
  .timeline-item:nth-child(even) .timeline-dot {
    left: -39px;
    right: auto;
  }

  .timeline-item:nth-child(odd) .timeline-title {
    justify-content: flex-start;
  }

  .modern-gallery-collage {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 440px 170px 210px 210px;
    gap: 10px;
    min-height: auto;
  }

  .modern-collage-card {
    border-radius: 23px;
  }

  .collage-main {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  .collage-small-top {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .collage-name-card {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding: 16px;
  }

  .collage-wide {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }

  .collage-bottom {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  .collage-tall {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }

  .lightbox-prev,
  .lightbox-next {
    top: auto;
    bottom: 24px;
  }

  .lightbox-prev {
    left: calc(50% - 58px);
  }

  .lightbox-next {
    right: calc(50% - 58px);
  }
}

@media (max-width: 520px) {
  .floating-controls {
    top: 12px;
    left: 12px;
    right: 12px;
  }

  .language-switcher-pill button {
    padding: 8px 10px;
    font-size: 10px;
  }

  .music-toggle {
    width: 40px;
    height: 40px;
  }

  .intro-mark {
    width: 230px;
  }

  .intro-mark small {
    bottom: 42px;
    font-size: 9px;
  }

  .section {
    padding: 60px 14px;
  }

  .script-title {
    font-size: 58px;
  }

  .avatar-img {
    width: 96px;
    height: 96px;
    border-width: 5px;
  }

  .avatar-heart {
    width: 42px;
    height: 42px;
  }

  .editorial-ribbon {
    border-radius: 22px;
    font-size: 13px;
  }

  .corner {
    width: 46px;
    height: 46px;
  }

  .countdown-grid {
    gap: 8px;
  }

  .countdown-card {
    border-radius: 18px;
    padding: 13px 5px;
  }

  .family-row {
    grid-template-columns: 1fr;
  }

  .art-large-copy {
    font-size: 23px;
  }

  .modern-gallery-collage {
    grid-template-rows: 390px 150px 190px 190px;
    gap: 9px;
  }

  .collage-main-overlay {
    padding: 26px 18px;
  }

  .collage-main-overlay h3 {
    font-size: 42px;
  }

  .collage-main-overlay p {
    font-size: 11px;
  }

  .collage-name-card p {
    font-size: 8px;
    letter-spacing: 0.16em;
  }

  .collage-name-card h3 {
    font-size: 24px;
  }

  .collage-name-card small {
    font-size: 10px;
  }

  .blessing-meta {
    align-items: flex-start;
    flex-direction: column;
  }

  .lightbox-img {
    max-height: 74svh;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
`,S2={en:{saveTheDate:"Save the Date",wedding:"Wedding",on:"Date",sunday:"Sunday",sep:"September",september:"September",year2026:"2026",togetherWithFamilies:"Together with their families",heartilyInvites:"Heartily invites you",groomTitle:"The Groom",brideTitle:"The Bride",groomName:"Muhammad Fayas .A",brideName:"Keerthi Anilkumar",groomParents:"Son of Late Abdul Jabbar",brideParents:"Daughter of Anilkumar",groomHome:"Hailing from Thiruvananthapuram, Kerala",brideHome:"Hailing from Kollam, Kerala",invitationTitle:"Our Wedding Invitation",inviteText:"Together with our families, we cordially invite you to share our happiness and witness our vows as we join our lives in marriage.",inviteDetails:"Please join us for our wedding ceremony followed by a celebratory feast on the scenic backwaters of Kappil, Kerala.",groomSide:"Groom's Side",groomSideFamily:"Family of Late Abdul Jabbar",brideSide:"Bride's Side",brideSideFamily:"Family of Anilkumar",venueTitle:"The Wedding Venue",ceremonyTime:"Wedding Ceremony",muhurthamTime:"10:30 AM onwards",venueLocation:"Venue Location",lakesideResort:"Scenic lakeside resort near Kappil Beach backwaters",openMap:"Open Location Map",galleryTitle:"Wedding Gallery",gallerySubtitle:"A modern gallery of beautiful memories, resort moments, and the surroundings of our celebration.",blessingBoardTitle:"Wedding Blessing Board",blessingBoardSubtitle:"Your blessings and presence mean the world to us. Please share a warm note of blessing or congratulations.",leaveBlessing:"Leave a Blessing",yourName:"Your Name",relation:"Relation / Note",blessingMessage:"Your Blessing Message",sendBlessing:"Send Blessing",thankYou:"Thank you for your warm blessings.",wishesAndBlessings:"Wishes & Blessings",notes:"Notes",noBlessingsYet:"No blessings posted yet. Be the first to bless.",footerQuote:"May your blessings follow us as we walk together, leaving footprints of love on the shores of life.",footerAddress:"Serene Lake Resort, Kappil • September 13, 2026",footerCopyright:"© 2026 Fayas & Keerthi. Together Forever.",callGroom:"Call Groom",exploreBtn:"Explore Wedding",happyCoupleTitle:"The Happy Couple",happyCoupleSubtitle:"With hearts full of love, we introduce the bride and the groom as they begin this beautiful lifetime journey together.",daysAbbr:["S","M","T","W","T","F","S"],dateStringFormatted:"Sunday, September 13, 2026",brideExtra:"Surrounded by love and blessings",countdown:["Days","Hours","Mins","Secs"],scheduleTitle:"Wedding Day Timeline",scheduleSubtitle:"A graceful celebration planned with love, blessings, ceremony, feast, and memories.",rsvpTitle:"RSVP",rsvpSubtitle:"Kindly let us know if you will be joining us for the celebration.",rsvpName:"Guest Name",rsvpGuests:"Number of Guests",rsvpAttendance:"Will You Attend?",rsvpMessage:"Message",attending:"Joyfully attending",notAttending:"Unable to attend",rsvpSend:"Submit RSVP",rsvpThanks:"Thank you. Your RSVP has been saved.",rsvpNoteTitle:"Your Presence Is Our Gift",rsvpNote:"We look forward to celebrating this beautiful day with our loved ones by the serene backwaters of Kappil.",mapTitle:"Location & Directions",mapSubtitle:"Join us at Serene Lake Resort, a scenic lakeside venue near Kappil Beach backwaters.",mapHelp:"Use the location button to open directions in Google Maps. Please plan to arrive a little early for a relaxed welcome."},ml:{saveTheDate:"സേവ് ദി ഡേറ്റ്",wedding:"വിവാഹം",on:"തീയതി",sunday:"ഞായറാഴ്ച",sep:"സെപ്റ്റംബർ",september:"സെപ്റ്റംബർ",year2026:"2026",togetherWithFamilies:"കുടുംബാംഗങ്ങളുടെ സ്നേഹാദരങ്ങളോടെ",heartilyInvites:"ഹൃദയപൂർവ്വം ക്ഷണിക്കുന്നു",groomTitle:"വരൻ",brideTitle:"വധു",groomName:"മുഹമ്മദ് ഫയാസ് .എ",brideName:"കീർത്തി അനിൽകുമാർ",groomParents:"പരേതനായ അബ്ദുൽ ജബ്ബാറിന്റെ മകൻ",brideParents:"അനിൽകുമാറിന്റെ മകൾ",groomHome:"തിരുവനന്തപുരം സ്വദേശി",brideHome:"കൊല്ലം സ്വദേശി",invitationTitle:"വിവാഹ ക്ഷണം",inviteText:"പരസ്പരം തണലാകുവാൻ താലിച്ചരടാൽ ബന്ധിതരാകുന്ന വിവാഹ മംഗളമുഹൂർത്തത്തിന് സാക്ഷ്യം വഹിക്കുവാൻ ബന്ധുമിത്രാദികളായ നിങ്ങളെ എല്ലാവരെയും സസ്‌നേഹം ക്ഷണിക്കുന്നു.",inviteDetails:"കപ്പിൽ കായൽക്കരയിൽ വെച്ചു നടക്കുന്ന വിവാഹ ചടങ്ങുകളിലേക്കും തുടർന്ന് നടക്കുന്ന സ്നേഹവിരുന്നിലേക്കും നിങ്ങളെ സ്വാഗതം ചെയ്യുന്നു.",groomSide:"വരന്റെ കുടുംബം",groomSideFamily:"അബ്ദുൽ ജബ്ബാറിന്റെ കുടുംബം",brideSide:"വധുവിന്റെ കുടുംബം",brideSideFamily:"അനിൽകുമാറിന്റെ കുടുംബം",venueTitle:"വിവാഹ വേദി",ceremonyTime:"വിവാഹ മംഗളമുഹൂർത്തം",muhurthamTime:"രാവിലെ 10:30 മുതൽ",venueLocation:"വിവാഹ സ്ഥലം",lakesideResort:"കാപ്പിൽ കായലിന്റെ മനോഹരമായ തീരത്ത്",openMap:"വഴി കാണിക്കുന്ന മാപ്പ്",galleryTitle:"ചിത്രങ്ങൾ",gallerySubtitle:"ഞങ്ങളുടെ ജീവിതത്തിലെ മനോഹരമായ നിമിഷങ്ങളുടെ ചിത്രങ്ങൾ.",blessingBoardTitle:"ആശംസാ ബോർഡ്",blessingBoardSubtitle:"ഞങ്ങളുടെ പുതിയ ജീവിതയാത്രക്ക് നിങ്ങളുടെ പ്രാർത്ഥനകളും അനുഗ്രഹങ്ങളും ആശംസകളും അറിയിക്കൂ.",leaveBlessing:"ആശംസകൾ അറിയിക്കാം",yourName:"നിങ്ങളുടെ പേര്",relation:"ബന്ധം / കുറിപ്പ്",blessingMessage:"നിങ്ങളുടെ ആശംസ",sendBlessing:"ആശംസ അയക്കുക",thankYou:"നിങ്ങളുടെ ആശംസകൾക്ക് നന്ദി.",wishesAndBlessings:"ആശംസകൾ",notes:"സന്ദേശങ്ങൾ",noBlessingsYet:"ആദ്യമായി ആശംസ അറിയിക്കുന്നവർ നിങ്ങളാകൂ.",footerQuote:"ഞങ്ങളുടെ പുതിയ ജീവിതയാത്രയിൽ നിങ്ങളുടെ സ്നേഹവും അനുഗ്രഹവും എന്നും കൂടെയുണ്ടാകുമെന്ന് പ്രത്യാശിക്കുന്നു.",footerAddress:"സെറീൻ ലേക്ക് റിസോർട്ട്, കാപ്പിൽ • സെപ്റ്റംബർ 13, 2026",footerCopyright:"© 2026 ഫയാസ് & കീർത്തി. എന്നും ഒന്നായി.",callGroom:"വരനെ വിളിക്കുക",exploreBtn:"വിവാഹവിവരങ്ങൾ",happyCoupleTitle:"വധൂവരന്മാർ",happyCoupleSubtitle:"സ്നേഹനിർഭരമായ ഹൃദയത്തോടെ, ഞങ്ങൾ വധൂവരന്മാരെ പരിചയപ്പെടുത്തുന്നു.",daysAbbr:["ഞാ","തി","ചൊ","ബു","വ്യാ","വെ","ശ"],dateStringFormatted:"ഞായറാഴ്ച, 2026 സെപ്റ്റംബർ 13",brideExtra:"സ്നേഹവും അനുഗ്രഹവും നിറഞ്ഞ്",countdown:["ദിവസം","മണി","മിനിറ്റ്","സെക്കന്റ്"],scheduleTitle:"വിവാഹ ദിന പരിപാടികൾ",scheduleSubtitle:"സ്നേഹവും അനുഗ്രഹവും വിവാഹ ചടങ്ങും സ്നേഹവിരുന്നും നിറഞ്ഞ ആഘോഷം.",rsvpTitle:"ആർ.എസ്.വി.പി",rsvpSubtitle:"വിവാഹ ആഘോഷത്തിൽ പങ്കെടുക്കുമോ എന്ന് ദയവായി അറിയിക്കൂ.",rsvpName:"അതിഥിയുടെ പേര്",rsvpGuests:"അതിഥികളുടെ എണ്ണം",rsvpAttendance:"പങ്കെടുക്കുമോ?",rsvpMessage:"സന്ദേശം",attending:"സന്തോഷത്തോടെ പങ്കെടുക്കും",notAttending:"പങ്കെടുക്കാൻ സാധിക്കില്ല",rsvpSend:"ആർ.എസ്.വി.പി അയക്കുക",rsvpThanks:"നന്ദി. നിങ്ങളുടെ RSVP സേവ് ചെയ്തു.",rsvpNoteTitle:"നിങ്ങളുടെ സാന്നിധ്യമാണ് സമ്മാനം",rsvpNote:"കപ്പിൽ കായൽക്കരയിൽ പ്രിയപ്പെട്ടവരോടൊപ്പം ഈ മനോഹരമായ ദിവസം ആഘോഷിക്കാൻ ഞങ്ങൾ കാത്തിരിക്കുന്നു.",mapTitle:"ലൊക്കേഷനും വഴിയും",mapSubtitle:"കാപ്പിൽ ബീച്ച് കായലിനടുത്തുള്ള സെറീൻ ലേക്ക് റിസോർട്ടിലേക്ക് സ്വാഗതം.",mapHelp:"Google Maps-ൽ വഴി കാണാൻ ലൊക്കേഷൻ ബട്ടൺ ഉപയോഗിക്കുക. സുഖമായി എത്താൻ കുറച്ച് നേരത്തെ എത്തുക."}},T2={en:{monogram:"F · K",artLine:"Two hearts, one beautiful beginning",editorialTitle:"A Celebration Written in Gold",editorialCopy:"Between the calm of the lake and the warmth of family, we begin a story made of devotion, grace, and forever.",closingSmall:"With love, blessings, and joy"},ml:{monogram:"F · K",artLine:"രണ്ട് ഹൃദയങ്ങൾ, ഒരു മനോഹര തുടക്കം",editorialTitle:"സ്നേഹത്തിൽ എഴുതപ്പെട്ട ആഘോഷം",editorialCopy:"കായലിന്റെ ശാന്തതയിലും കുടുംബങ്ങളുടെ അനുഗ്രഹത്തിലും, സ്നേഹവും വിശ്വാസവും നിറഞ്ഞ ഒരു പുതിയ കഥ ആരംഭിക്കുന്നു.",closingSmall:"സ്നേഹത്തോടും അനുഗ്രഹങ്ങളോടും സന്തോഷത്തോടും കൂടി"}};function C2(){if(typeof document>"u"||document.getElementById(ng))return;const e=document.createElement("style");e.id=ng,e.innerHTML=k2,document.head.appendChild(e)}function oa(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}const N2=new Date("2026-09-13T10:30:00+05:30");function hl({src:t,alt:e,className:r=""}){const[n,i]=ce.useState(t),[o,l]=ce.useState(t),[s,a]=ce.useState(!1);return ce.useEffect(()=>{if(t!==n){l(n),i(t),a(!0);const u=setTimeout(()=>{a(!1)},50);return()=>clearTimeout(u)}},[t,n]),d.jsxs("div",{className:`gallery-slot-wrapper ${r}`,children:[d.jsx("img",{src:o,alt:e,className:"gallery-img-bottom"}),d.jsx("img",{src:n,alt:e,className:`gallery-img-top ${s?"":"fade-in"}`})]})}function b2(){const t=ce.useRef(null),e=ce.useRef(null),r=ce.useRef(null),n=ce.useRef([]),[i,o]=ce.useState("en"),[l,s]=ce.useState(!1),[a,u]=ce.useState(null),[c,h]=ce.useState(0),[f,p]=ce.useState([]),[_,m]=ce.useState({name:"",relation:"",message:""}),[S,v]=ce.useState({name:"",guests:"1",attendance:"attending",message:""}),[g,y]=ce.useState(!1),[w,C]=ce.useState(!1),[E,T]=ce.useState({days:0,hours:0,minutes:0,seconds:0}),x=S2[i],P=T2[i],b=ce.useMemo(()=>[p2,_c,xc,g2,m2,v2,y2,_2,x2].filter(Boolean),[]),$=ce.useMemo(()=>[{time:i==="en"?"09:30 AM":"രാവിലെ 09:30",title:i==="en"?"Guest Arrival":"അതിഥികളെ സ്വാഗതം",copy:i==="en"?"A warm lakeside welcome for family and friends.":"കുടുംബാംഗങ്ങളെയും സുഹൃത്തുകളെയും സ്നേഹത്തോടെ സ്വാഗതം ചെയ്യുന്നു.",icon:s2},{time:i==="en"?"10:30 AM":"രാവിലെ 10:30",title:i==="en"?"Wedding Ceremony":"വിവാഹ മംഗളമുഹൂർത്തം",copy:i==="en"?"The sacred wedding ceremony begins with blessings.":"അനുഗ്രഹങ്ങളോടെ വിവാഹ ചടങ്ങുകൾ ആരംഭിക്കുന്നു.",icon:oo},{time:i==="en"?"12:00 PM":"ഉച്ചയ്ക്ക് 12:00",title:i==="en"?"Blessings & Photos":"ആശംസകളും ചിത്രങ്ങളും",copy:i==="en"?"Family blessings, portraits, and beautiful memories.":"കുടുംബ ആശംസകളും ചിത്രങ്ങളും മനോഹര നിമിഷങ്ങളും.",icon:yc},{time:i==="en"?"01:00 PM":"ഉച്ചയ്ക്ക് 01:00",title:i==="en"?"Wedding Feast":"സ്നേഹവിരുന്ന്",copy:i==="en"?"A celebratory feast by the serene backwaters.":"കായൽക്കരയിൽ സ്നേഹപൂർവ്വം ഒരുക്കിയ വിരുന്ന്.",icon:a2}],[i]);ce.useEffect(()=>{C2()},[]),ce.useEffect(()=>{const R=()=>{const te=new Date,Y=Math.max(N2.getTime()-te.getTime(),0);T({days:Math.floor(Y/864e5),hours:Math.floor(Y/36e5%24),minutes:Math.floor(Y/6e4%60),seconds:Math.floor(Y/1e3%60)})};R();const D=window.setInterval(R,1e3);return()=>window.clearInterval(D)},[]),ce.useEffect(()=>{oa()||n.current.forEach(R=>{R&&re.fromTo(R,{y:8,opacity:.55},{y:0,opacity:1,duration:.35,ease:"power2.out"})})},[E]),ce.useEffect(()=>{if(!b.length)return;const R=window.setInterval(()=>{h(D=>(D+1)%b.length)},3e3);return()=>window.clearInterval(R)},[b.length]),ce.useEffect(()=>{const R=localStorage.getItem("wedding_blessings");if(R){try{p(JSON.parse(R))}catch{localStorage.removeItem("wedding_blessings")}return}const D=[{name:"Prasad & Mini",relation:"Family Friend",message:"Congratulations Fayas and Keerthi. Wishing you both a lifetime of love, happiness, and beautiful memories. May God bless your union.",date:"09/06/2026"},{name:"Anjali Krishna",relation:"Bride's Colleague",message:"So happy for you Keerthi. Wishing you and Fayas all the blessings in the world. Excited for the big day at the resort.",date:"09/06/2026"},{name:"Siddharth Nair",relation:"Groom's Friend",message:"Big congratulations to Fayas and Keerthi. Wishing you a beautiful wedding day and a joyful life together.",date:"09/06/2026"}];localStorage.setItem("wedding_blessings",JSON.stringify(D)),p(D)},[]),ce.useEffect(()=>{const R=e.current;if(!R||oa())return;const D=R.getContext("2d");let te,Y=window.innerWidth,W=window.innerHeight,et=[];const Ve=()=>{Y=R.width=window.innerWidth,W=R.height=window.innerHeight},rr=()=>({x:Math.random()*Y,y:Math.random()*W,radius:Math.random()*42+18,speedY:Math.random()*-.35-.16,speedX:Math.random()*.22-.11,alpha:Math.random()*.06+.03,hue:Math.random()>.5?"199,155,59":"139,45,109"}),lt=M=>{M.x=Math.random()*Y,M.y=W+M.radius,M.radius=Math.random()*42+18,M.speedY=Math.random()*-.35-.16,M.speedX=Math.random()*.22-.11,M.alpha=Math.random()*.06+.03,M.hue=Math.random()>.5?"199,155,59":"139,45,109"},L=()=>{D.clearRect(0,0,Y,W),et.forEach(M=>{M.y+=M.speedY,M.x+=M.speedX+Math.sin(M.y/90)*.12,M.y<-M.radius&&lt(M);const Q=D.createRadialGradient(M.x,M.y,0,M.x,M.y,M.radius);Q.addColorStop(0,`rgba(${M.hue}, ${M.alpha})`),Q.addColorStop(1,`rgba(${M.hue}, 0)`),D.beginPath(),D.fillStyle=Q,D.arc(M.x,M.y,M.radius,0,Math.PI*2),D.fill()}),te=requestAnimationFrame(L)};return Ve(),et=Array.from({length:34},rr),window.addEventListener("resize",Ve),L(),()=>{cancelAnimationFrame(te),window.removeEventListener("resize",Ve)}},[]),ce.useEffect(()=>{const R=oa(),D=[],te=[],Y=re.context(()=>{if(ie.getAll().forEach(L=>L.kill()),R){re.set(".cinematic-intro, .intro-veil, .intro-mark, .hero-bg, .hero-panel, .hero-date-panel, .hero-content-panel, .hero-art-frame, .hero-monogram, .reveal, .line-reveal, .timeline-item, .modern-collage-card, .rsvp-card, .rsvp-summary, .map-card, .map-details, .blessing-form, .blessing-board, .footer-names, .footer-quote, .footer-address, .footer-copy, .art-editorial-card, .art-editorial-image, .art-editorial-copy, .art-signature",{clearProps:"all",opacity:1,y:0,x:0,scale:1}),re.set(".cinematic-intro",{display:"none"});return}const W="power3.out";re.timeline().fromTo(".intro-mark",{opacity:0,scale:.86,filter:"blur(10px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:1,ease:"power3.out"}).to(".intro-mark",{opacity:0,scale:1.08,filter:"blur(8px)",duration:.7,delay:.45,ease:"power2.inOut"}).to(".intro-veil-left",{xPercent:-102,duration:1.15,ease:"power4.inOut"},"-=0.28").to(".intro-veil-right",{xPercent:102,duration:1.15,ease:"power4.inOut"},"<").set(".cinematic-intro",{display:"none"}),re.timeline({delay:2.35,defaults:{ease:W}}).fromTo(".hero-bg",{opacity:0,scale:1.12},{opacity:.16,scale:1.08,duration:2.4,ease:"none"}).fromTo(".hero-panel",{opacity:0,y:110,scale:.97},{opacity:1,y:0,scale:1,duration:1.35,stagger:.16},"-=1.7").fromTo(".hero .line-reveal",{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",y:40},{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:0,duration:1.1,stagger:.08,ease:"power4.out"},"-=0.9").fromTo(".countdown-card",{opacity:0,y:28},{opacity:1,y:0,duration:.72,stagger:.07},"-=0.45");const rr=({selector:L,trigger:M,y:Q=70,x:ge=0,scale:le=1,duration:N=.95,stagger:ve=.08,start:xe="top 86%"})=>{const Wt=re.utils.toArray(L);Wt.length&&re.fromTo(Wt,{opacity:0,y:Q,x:ge,scale:le},{opacity:1,y:0,x:0,scale:1,duration:N,stagger:ve,ease:W,scrollTrigger:{trigger:M||Wt[0],start:xe,toggleActions:"play none none none"}})};re.utils.toArray(".section-heading").forEach(L=>{const M=L.querySelector(".section-kicker"),Q=L.querySelector(".section-title"),ge=L.querySelector(".section-copy"),le=re.timeline({scrollTrigger:{trigger:L,start:"top 88%",toggleActions:"play none none none"}});M&&le.fromTo(M,{opacity:0,y:20},{opacity:1,y:0,duration:.6,ease:W}),Q&&le.fromTo(Q,{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",y:40},{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:0,duration:1,ease:"power4.out"},"-=0.45"),ge&&le.fromTo(ge,{opacity:0,y:20},{opacity:1,y:0,duration:.8,ease:W},"-=0.6")}),re.utils.toArray(".invitation-card").forEach(L=>{const M=L.querySelector(".section-kicker"),Q=L.querySelector(".invite-title"),ge=L.querySelector(".invite-text"),le=L.querySelector(".gold-line"),N=L.querySelector(".invite-details"),ve=L.querySelector(".family-row"),xe=re.timeline({scrollTrigger:{trigger:L,start:"top 86%",toggleActions:"play none none none"}});xe.fromTo(L,{opacity:0,y:60,scale:.98},{opacity:1,y:0,scale:1,duration:1.1,ease:W}),M&&xe.fromTo(M,{opacity:0,y:15},{opacity:1,y:0,duration:.5},"-=0.7"),Q&&xe.fromTo(Q,{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",y:35},{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:0,duration:.9,ease:"power4.out"},"-=0.5"),ge&&xe.fromTo(ge,{opacity:0,y:20},{opacity:1,y:0,duration:.7},"-=0.6"),le&&xe.fromTo(le,{scaleX:0},{scaleX:1,duration:.6},"-=0.5"),N&&xe.fromTo(N,{opacity:0,y:15},{opacity:1,y:0,duration:.6},"-=0.4"),ve&&xe.fromTo(ve,{opacity:0,y:25},{opacity:1,y:0,duration:.7},"-=0.4")}),re.utils.toArray(".art-editorial-card").forEach(L=>{const M=L.querySelector(".art-editorial-image"),Q=L.querySelector(".art-editorial-copy .section-kicker"),ge=L.querySelector(".art-editorial-copy .section-title"),le=L.querySelector(".art-large-copy"),N=L.querySelector(".art-signature"),ve=re.timeline({scrollTrigger:{trigger:L,start:"top 84%",toggleActions:"play none none none"}});ve.fromTo(L,{opacity:0,y:80},{opacity:1,y:0,duration:1.1,ease:W}),M&&ve.fromTo(M,{opacity:0,scale:1.03},{opacity:1,scale:1,duration:1,ease:W},"-=0.9"),Q&&ve.fromTo(Q,{opacity:0,y:15},{opacity:1,y:0,duration:.5},"-=0.75"),ge&&ve.fromTo(ge,{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",y:35},{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:0,duration:.9,ease:"power4.out"},"-=0.6"),le&&ve.fromTo(le,{opacity:0,y:20},{opacity:1,y:0,duration:.7},"-=0.5"),N&&ve.fromTo(N,{opacity:0,y:25,scale:.96},{opacity:1,y:0,scale:1,duration:.8,ease:"power3.out"},"-=0.4")}),re.fromTo(".couple-card:first-child",{opacity:0,x:-70,y:44},{opacity:1,x:0,y:0,duration:1.1,ease:W,scrollTrigger:{trigger:".couple-grid",start:"top 82%",toggleActions:"play none none none"}}),re.fromTo(".couple-card:last-child",{opacity:0,x:70,y:44},{opacity:1,x:0,y:0,duration:1.1,delay:.14,ease:W,scrollTrigger:{trigger:".couple-grid",start:"top 82%",toggleActions:"play none none none"}}),re.fromTo(".center-heart",{opacity:0,scale:.55,rotate:-14},{opacity:1,scale:1,rotate:0,duration:.85,delay:.42,ease:"back.out(1.8)",scrollTrigger:{trigger:".couple-grid",start:"top 82%",toggleActions:"play none none none"}}),re.utils.toArray(".venue-card").forEach(L=>{const M=L.querySelector(".venue-img-wrap");L.querySelector(".venue-panel");const Q=L.querySelector(".venue-panel .section-kicker"),ge=L.querySelector(".venue-name"),le=L.querySelector(".venue-address"),N=L.querySelectorAll(".info-card"),ve=L.querySelector(".venue-panel .gold-button"),xe=re.timeline({scrollTrigger:{trigger:L,start:"top 84%",toggleActions:"play none none none"}});xe.fromTo(L,{opacity:0,y:80},{opacity:1,y:0,duration:1.1,ease:W}),M&&xe.fromTo(M,{opacity:0,scale:1.03},{opacity:1,scale:1,duration:1,ease:W},"-=0.9"),Q&&xe.fromTo(Q,{opacity:0,y:15},{opacity:1,y:0,duration:.5},"-=0.7"),ge&&xe.fromTo(ge,{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",y:35},{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:0,duration:.9,ease:"power4.out"},"-=0.6"),le&&xe.fromTo(le,{opacity:0,y:15},{opacity:1,y:0,duration:.6},"-=0.55"),N.length&&xe.fromTo(N,{opacity:0,y:20},{opacity:1,y:0,duration:.6,stagger:.1},"-=0.45"),ve&&xe.fromTo(ve,{opacity:0,y:15},{opacity:1,y:0,duration:.5},"-=0.3")}),re.utils.toArray(".timeline-item").forEach((L,M)=>{const Q=M%2===0;re.fromTo(L,{opacity:0,x:Q?-80:80,y:30},{opacity:1,x:0,y:0,duration:1.1,ease:W,scrollTrigger:{trigger:L,start:"top 86%",toggleActions:"play none none none"}})}),re.fromTo(".timeline-progress",{height:"0%"},{height:"100%",ease:"none",scrollTrigger:{trigger:".timeline-wrap",start:"top 72%",end:"bottom 62%",scrub:!0}}),rr({selector:".modern-collage-card",trigger:".modern-gallery-collage",y:100,stagger:.11,start:"top 82%"}),rr({selector:".rsvp-card, .rsvp-summary, .map-card, .map-details, .blessing-form, .blessing-board",y:90,stagger:.14,start:"top 84%"}),re.timeline({scrollTrigger:{trigger:".footer",start:"top 90%",toggleActions:"play none none none"}}).fromTo(".footer-ornament",{opacity:0,y:30},{opacity:1,y:0,duration:.6}).fromTo(".footer-small",{opacity:0,y:15},{opacity:1,y:0,duration:.5},"-=0.4").fromTo(".footer-names",{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",y:35},{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:0,duration:.9,ease:"power4.out"},"-=0.4").fromTo(".footer-divider",{scaleX:0},{scaleX:1,duration:.6},"-=0.5").fromTo(".footer-quote",{opacity:0,y:20},{opacity:1,y:0,duration:.7},"-=0.4").fromTo(".footer-address",{opacity:0,y:15},{opacity:1,y:0,duration:.6},"-=0.4").fromTo(".footer-copy",{opacity:0,y:15},{opacity:1,y:0,duration:.6},"-=0.4"),re.to(".hero-bg",{yPercent:13,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),re.to(".venue-img-wrap img",{scale:1.08,yPercent:8,ease:"none",scrollTrigger:{trigger:".venue-card",start:"top bottom",end:"bottom top",scrub:!0}}),re.to(".art-editorial-image img",{scale:1.08,yPercent:8,ease:"none",scrollTrigger:{trigger:".art-editorial-card",start:"top bottom",end:"bottom top",scrub:!0}}),re.to(".floating-ornament.one",{y:-18,rotate:6,duration:3.4,repeat:-1,yoyo:!0,ease:"sine.inOut"}),re.to(".floating-ornament.two",{y:20,rotate:-7,duration:3.8,repeat:-1,yoyo:!0,ease:"sine.inOut"}),re.to(".hero-monogram",{y:-10,duration:2.6,repeat:-1,yoyo:!0,ease:"sine.inOut"}),re.to(".floating-gallery-title",{y:-8,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut"}),re.utils.toArray(".modern-collage-card").forEach(L=>{re.set(L,{transformPerspective:1e3});const M=ge=>{const le=L.getBoundingClientRect(),N=ge.clientX-le.left,ve=ge.clientY-le.top,xe=N/le.width-.5,Wt=ve/le.height-.5,Pe=10,Or=10,Gr=-Wt*Pe,fn=xe*Or;re.to(L,{rotateX:Gr,rotateY:fn,scale:1.02,duration:.4,ease:"power2.out",overwrite:"auto"})},Q=()=>{re.to(L,{rotateX:0,rotateY:0,scale:1,duration:.6,ease:"power3.out",overwrite:"auto"})};L.addEventListener("mousemove",M),L.addEventListener("mouseleave",Q),te.push(()=>{L.removeEventListener("mousemove",M),L.removeEventListener("mouseleave",Q)})}),re.utils.toArray(".magnetic").forEach(L=>{const M=ge=>{const le=L.getBoundingClientRect(),N=ge.clientX-le.left-le.width/2,ve=ge.clientY-le.top-le.height/2;re.to(L,{x:N*.18,y:ve*.18,duration:.32,ease:"power2.out"})},Q=()=>{re.to(L,{x:0,y:0,duration:.45,ease:"elastic.out(1, 0.35)"})};L.addEventListener("mousemove",M),L.addEventListener("mouseleave",Q),D.push(()=>{L.removeEventListener("mousemove",M),L.removeEventListener("mouseleave",Q)})}),ie.refresh()},t);return()=>{Y.revert(),D.forEach(W=>W()),te.forEach(W=>W())}},[i]),ce.useEffect(()=>{if(oa())return;const R=re.context(()=>{re.timeline().fromTo(".collage-main-overlay span, .collage-main-overlay h3, .collage-main-overlay p",{opacity:0,y:24},{opacity:1,y:0,duration:.62,stagger:.08,ease:"power3.out"})},t);return()=>R.revert()},[c]),ce.useEffect(()=>()=>{r.current&&(r.current.pause(),r.current.src="")},[]);const O=async()=>{if(r.current){if(l){r.current.pause(),s(!1);return}try{await r.current.play(),s(!0)}catch{try{r.current.src=w2,await r.current.play(),s(!0)}catch{s(!1)}}}},Z=R=>{R.preventDefault();const D=_.name.trim(),te=_.message.trim();if(!D||!te)return;const W=[{name:D,relation:_.relation.trim()||"Well Wisher",message:te,date:new Date().toLocaleDateString("en-GB")},...f];p(W),localStorage.setItem("wedding_blessings",JSON.stringify(W)),m({name:"",relation:"",message:""}),y(!0),window.setTimeout(()=>y(!1),4e3)},G=R=>{R.preventDefault();const D=JSON.parse(localStorage.getItem("wedding_rsvps")||"[]"),te={...S,date:new Date().toLocaleDateString("en-GB")};localStorage.setItem("wedding_rsvps",JSON.stringify([te,...D])),v({name:"",guests:"1",attendance:"attending",message:""}),C(!0),window.setTimeout(()=>C(!1),4e3)},oe=()=>{const te=[];x.daysAbbr.forEach((Y,W)=>{te.push(d.jsx("div",{className:"calendar-day-header",children:Y},`header-${W}`))});for(let Y=0;Y<2;Y+=1)te.push(d.jsx("div",{className:"calendar-day-cell"},`pad-${Y}`));for(let Y=1;Y<=30;Y+=1){const W=Y===13;te.push(d.jsx("div",{className:`calendar-day-cell ${W?"calendar-day-circled":""}`,children:Y},`day-${Y}`))}return d.jsxs("div",{className:"calendar-card line-reveal",children:[d.jsxs("div",{className:"calendar-month-name",children:[x.september," ",x.year2026]}),d.jsx("div",{className:"calendar-grid",children:te})]})},J=R=>{const D=document.getElementById(R);D&&D.scrollIntoView({behavior:"smooth",block:"start"})},U=()=>u(null),j=R=>{R.stopPropagation(),u(D=>D===b.length-1?0:D+1)},F=R=>{R.stopPropagation(),u(D=>D===0?b.length-1:D-1)},k=R=>b.length?b[(c+R)%b.length]:"",V=R=>{b.length&&u((c+R)%b.length)},de=[E.days,E.hours,E.minutes,E.seconds];return d.jsxs("div",{ref:t,className:"artist-wedding-page",children:[d.jsxs("div",{className:"cinematic-intro","aria-hidden":"true",children:[d.jsx("div",{className:"intro-veil intro-veil-left"}),d.jsx("div",{className:"intro-veil intro-veil-right"}),d.jsxs("div",{className:"intro-mark",children:[d.jsx("span",{children:P.monogram}),d.jsx("small",{children:P.artLine})]})]}),d.jsx("canvas",{ref:e,className:"wedding-canvas"}),d.jsx(tg,{size:64,className:"floating-ornament one","aria-hidden":"true"}),d.jsx(yc,{size:58,className:"floating-ornament two","aria-hidden":"true"}),d.jsxs("div",{className:"page-layer",children:[d.jsxs("div",{className:"floating-controls",children:[d.jsxs("div",{className:"language-switcher-pill","aria-label":"Language switcher",children:[d.jsx("button",{type:"button",className:i==="en"?"active":"",onClick:()=>o("en"),children:"English"}),d.jsx("button",{type:"button",className:i==="ml"?"active":"",onClick:()=>o("ml"),children:"മലയാളം"})]}),d.jsx("button",{type:"button",className:`music-toggle magnetic ${l?"playing":""}`,onClick:O,"aria-label":"Toggle background music",children:l?d.jsx(u2,{size:20}):d.jsx(c2,{size:20})})]}),d.jsx("audio",{ref:r,src:h2,loop:!0,preload:"auto"}),d.jsxs("header",{className:"hero",children:[d.jsx("img",{src:rg,alt:"Wedding resort",className:"hero-bg"}),d.jsxs("div",{className:"hero-art-frame","aria-hidden":"true",children:[d.jsx("span",{className:"corner corner-tl"}),d.jsx("span",{className:"corner corner-tr"}),d.jsx("span",{className:"corner corner-bl"}),d.jsx("span",{className:"corner corner-br"})]}),d.jsx("div",{className:"hero-monogram line-reveal","aria-hidden":"true",children:d.jsx("span",{children:P.monogram})}),d.jsxs("div",{className:"hero-shell",children:[d.jsxs("div",{className:"hero-panel hero-date-panel",children:[d.jsx("div",{className:"eyebrow line-reveal",children:x.saveTheDate}),d.jsxs("div",{className:"script-title line-reveal",children:["Save",d.jsx("span",{children:"The"}),"Date"]}),d.jsx("div",{className:"gold-line line-reveal"}),oe(),d.jsxs("div",{className:"hero-mini-names line-reveal",children:[d.jsx("h3",{children:i==="en"?"Muhammad Fayas":"മുഹമ്മദ് ഫയാസ്"}),d.jsx("div",{className:"amp",children:"&"}),d.jsx("h3",{children:i==="en"?"Keerthi Anilkumar":"കീർത്തി അനിൽകുമാർ"})]})]}),d.jsxs("div",{className:"hero-panel hero-content-panel",children:[d.jsxs("div",{className:"content-top line-reveal",children:[d.jsx("div",{className:"eyebrow",children:x.wedding}),d.jsxs("div",{className:"hero-date-large",children:["13 ",d.jsxs("span",{children:[x.sep," 2026"]})]}),d.jsx("div",{className:"weekday",children:x.sunday})]}),d.jsxs("div",{className:"couple-avatar-row line-reveal",children:[d.jsx("img",{src:_c,alt:x.groomName,className:"avatar-img"}),d.jsx("div",{className:"avatar-heart",children:d.jsx(oo,{size:18,fill:"currentColor"})}),d.jsx("img",{src:xc,alt:x.brideName,className:"avatar-img"})]}),d.jsxs("h1",{className:"hero-names line-reveal",children:["Fayas",d.jsx("span",{children:"and"}),"Keerthi"]}),d.jsxs("p",{className:"hero-subcopy line-reveal",children:[x.togetherWithFamilies,", ",x.heartilyInvites.toLowerCase()," to celebrate a beautiful beginning by the serene backwaters of Kappil."]}),d.jsxs("div",{className:"editorial-ribbon line-reveal",children:[d.jsx(eg,{size:15}),d.jsx("span",{children:P.artLine}),d.jsx(eg,{size:15})]}),d.jsx("div",{className:"countdown-grid","aria-label":"Wedding countdown",children:de.map((R,D)=>d.jsxs("div",{className:"countdown-card",children:[d.jsx("span",{className:"countdown-number",ref:te=>{n.current[D]=te},children:String(R).padStart(2,"0")}),d.jsx("span",{className:"countdown-label",children:x.countdown[D]})]},x.countdown[D]))}),d.jsxs("div",{className:"hero-actions line-reveal",children:[d.jsxs("button",{type:"button",className:"primary-button magnetic",onClick:()=>J("couple"),children:[d.jsx(yc,{size:15}),x.exploreBtn]}),d.jsxs("button",{type:"button",className:"ghost-button magnetic",onClick:()=>J("rsvp"),children:[d.jsx(Zh,{size:15}),"RSVP"]})]})]})]})]}),d.jsxs("main",{children:[d.jsx("section",{id:"couple",className:"section",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"section-heading reveal",children:[d.jsxs("div",{className:"section-kicker",children:[d.jsx(tg,{size:15}),x.saveTheDate]}),d.jsx("h2",{className:"section-title",children:x.happyCoupleTitle}),d.jsx("p",{className:"section-copy",children:x.happyCoupleSubtitle})]}),d.jsxs("div",{className:"couple-grid",children:[d.jsxs("article",{className:"couple-card reveal",children:[d.jsx("div",{className:"couple-photo-wrap",children:d.jsx("img",{src:_c,alt:x.groomName})}),d.jsxs("div",{className:"couple-info",children:[d.jsx("span",{className:"role-pill",children:x.groomTitle}),d.jsx("h3",{className:"couple-name",children:x.groomName}),d.jsxs("p",{className:"couple-meta",children:[d.jsx("strong",{children:x.groomParents}),d.jsx("br",{}),x.groomHome]}),d.jsxs("a",{href:"tel:9995384667",className:"phone-link",children:[d.jsx(l2,{size:14}),x.callGroom,": 9995384667"]})]})]}),d.jsx("div",{className:"couple-center reveal",children:d.jsx("div",{className:"center-heart",children:d.jsx(oo,{size:26,fill:"currentColor"})})}),d.jsxs("article",{className:"couple-card reveal",children:[d.jsx("div",{className:"couple-photo-wrap",children:d.jsx("img",{src:xc,alt:x.brideName})}),d.jsxs("div",{className:"couple-info",children:[d.jsx("span",{className:"role-pill",children:x.brideTitle}),d.jsx("h3",{className:"couple-name",children:x.brideName}),d.jsxs("p",{className:"couple-meta",children:[d.jsx("strong",{children:x.brideParents}),d.jsx("br",{}),x.brideHome,d.jsx("br",{}),x.brideExtra]})]})]})]})]})}),d.jsx("section",{className:"section invitation-section",children:d.jsx("div",{className:"section-inner",children:d.jsxs("article",{className:"invitation-card reveal",children:[d.jsxs("div",{className:"section-kicker",style:{justifyContent:"center"},children:[d.jsx(oo,{size:14,fill:"currentColor"}),x.saveTheDate]}),d.jsx("h2",{className:"invite-title",children:x.invitationTitle}),d.jsx("p",{className:"invite-text",children:x.inviteText}),d.jsx("div",{className:"gold-line"}),d.jsx("p",{className:"invite-details",children:x.inviteDetails}),d.jsxs("div",{className:"family-row",children:[d.jsxs("div",{className:"family-box",children:[d.jsx("div",{className:"family-title",children:x.groomSide}),d.jsx("div",{className:"family-name",children:x.groomSideFamily})]}),d.jsxs("div",{className:"family-box",children:[d.jsx("div",{className:"family-title",children:x.brideSide}),d.jsx("div",{className:"family-name",children:x.brideSideFamily})]})]})]})})}),d.jsx("section",{className:"section art-editorial-section",children:d.jsx("div",{className:"section-inner",children:d.jsxs("div",{className:"art-editorial-card reveal",children:[d.jsx("div",{className:"art-editorial-image",children:d.jsx("img",{src:rg,alt:"Romantic wedding atmosphere"})}),d.jsxs("div",{className:"art-editorial-copy",children:[d.jsxs("div",{className:"section-kicker",children:[d.jsx(r2,{size:15}),"The Story"]}),d.jsx("h2",{className:"section-title",children:P.editorialTitle}),d.jsx("p",{className:"art-large-copy",children:P.editorialCopy}),d.jsxs("div",{className:"art-signature",children:[d.jsx("span",{children:P.monogram}),d.jsx("small",{children:P.closingSmall})]})]})]})})}),d.jsx("section",{className:"section",children:d.jsx("div",{className:"section-inner",children:d.jsxs("div",{className:"venue-card reveal",children:[d.jsx("div",{className:"venue-img-wrap",children:d.jsx("img",{src:d2,alt:"Serene Lake Resort"})}),d.jsxs("div",{className:"venue-panel",children:[d.jsxs("div",{className:"section-kicker",children:[d.jsx(gc,{size:15}),x.venueTitle]}),d.jsx("h2",{className:"venue-name",children:i==="en"?"Serene Lake Resort":"സെറീൻ ലേക്ക് റിസോർട്ട്"}),d.jsx("p",{className:"venue-address",children:i==="en"?"Edava Parayil Kappil Rd, PO, Edava, Kerala 695311, India":"എടവ പറയിൽ കാപ്പിൽ റോഡ്, പി.ഒ, എടവ, കേരളം 695311"}),d.jsxs("div",{className:"info-grid",children:[d.jsxs("div",{className:"info-card",children:[d.jsx("div",{className:"info-icon",children:d.jsx(qh,{size:20})}),d.jsxs("div",{children:[d.jsx("div",{className:"info-label",children:x.on}),d.jsx("div",{className:"info-value",children:x.dateStringFormatted})]})]}),d.jsxs("div",{className:"info-card",children:[d.jsx("div",{className:"info-icon",children:d.jsx(Jh,{size:20})}),d.jsxs("div",{children:[d.jsx("div",{className:"info-label",children:x.ceremonyTime}),d.jsx("div",{className:"info-value",children:x.muhurthamTime})]})]}),d.jsxs("div",{className:"info-card",children:[d.jsx("div",{className:"info-icon",children:d.jsx(gc,{size:20})}),d.jsxs("div",{children:[d.jsx("div",{className:"info-label",children:x.venueLocation}),d.jsx("div",{className:"info-value",children:x.lakesideResort})]})]})]}),d.jsxs("a",{href:"https://share.google/XJDjMzsVDy1ivyNee",target:"_blank",rel:"noopener noreferrer",className:"gold-button magnetic",children:[d.jsx(mc,{size:15}),x.openMap]})]})]})})}),d.jsx("section",{className:"section",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"section-heading reveal",children:[d.jsxs("div",{className:"section-kicker",children:[d.jsx(Jh,{size:15}),"Ceremony"]}),d.jsx("h2",{className:"section-title",children:x.scheduleTitle}),d.jsx("p",{className:"section-copy",children:x.scheduleSubtitle})]}),d.jsxs("div",{className:"timeline-wrap",children:[d.jsx("div",{className:"timeline-line","aria-hidden":"true",children:d.jsx("div",{className:"timeline-progress"})}),$.map(R=>{const D=R.icon;return d.jsxs("article",{className:"timeline-item",children:[d.jsx("span",{className:"timeline-dot","aria-hidden":"true"}),d.jsx("div",{className:"timeline-time",children:R.time}),d.jsxs("h3",{className:"timeline-title",children:[d.jsx(D,{size:17})," ",R.title]}),d.jsx("p",{className:"timeline-copy",children:R.copy})]},`${R.time}-${R.title}`)})]})]})}),d.jsx("section",{className:"section gallery-section",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"section-heading reveal",children:[d.jsxs("div",{className:"section-kicker",children:[d.jsx(i2,{size:15}),"Memories"]}),d.jsx("h2",{className:"section-title",children:x.galleryTitle}),d.jsx("p",{className:"section-copy",children:x.gallerySubtitle})]}),d.jsxs("div",{className:"modern-gallery-collage",children:[d.jsxs("button",{type:"button",className:"modern-collage-card collage-main",onClick:()=>V(0),children:[d.jsx(hl,{src:k(0),alt:"Wedding highlight"}),d.jsxs("div",{className:"collage-main-overlay",children:[d.jsx("span",{children:x.saveTheDate}),d.jsx("h3",{className:"floating-gallery-title",children:"Happily Ever After"}),d.jsx("p",{children:x.dateStringFormatted})]})]}),d.jsx("button",{type:"button",className:"modern-collage-card collage-small-top",onClick:()=>V(1),children:d.jsx(hl,{src:k(1),alt:"Wedding memory"})}),d.jsxs("div",{className:"modern-collage-card collage-name-card",children:[d.jsx("p",{children:x.togetherWithFamilies}),d.jsxs("h3",{children:["Fayas ",d.jsx("span",{children:"&"})," Keerthi"]}),d.jsx("small",{children:x.heartilyInvites})]}),d.jsxs("button",{type:"button",className:"modern-collage-card collage-wide",onClick:()=>V(2),children:[d.jsx(hl,{src:k(2),alt:"Wedding memory"}),d.jsxs("div",{className:"collage-photo-badge",children:[d.jsx(oo,{size:14,fill:"currentColor"}),"Wedding Moments"]})]}),d.jsx("button",{type:"button",className:"modern-collage-card collage-tall",onClick:()=>V(3),children:d.jsx(hl,{src:k(3),alt:"Wedding memory"})}),d.jsx("button",{type:"button",className:"modern-collage-card collage-bottom",onClick:()=>V(4),children:d.jsx(hl,{src:k(4),alt:"Wedding memory"})})]}),d.jsx("div",{className:"gallery-dots",children:b.map((R,D)=>d.jsx("button",{type:"button",className:D===c?"active":"",onClick:()=>h(D),"aria-label":`Show gallery slide ${D+1}`},D))})]})}),d.jsx("section",{id:"rsvp",className:"section rsvp-section",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"section-heading reveal",children:[d.jsxs("div",{className:"section-kicker",children:[d.jsx(Zh,{size:15}),"RSVP"]}),d.jsx("h2",{className:"section-title",children:x.rsvpTitle}),d.jsx("p",{className:"section-copy",children:x.rsvpSubtitle})]}),d.jsxs("div",{className:"rsvp-grid",children:[d.jsxs("div",{className:"rsvp-card",children:[d.jsx("h3",{className:"card-title",children:x.rsvpTitle}),d.jsxs("form",{onSubmit:G,children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",htmlFor:"rsvp-name",children:x.rsvpName}),d.jsx("input",{id:"rsvp-name",className:"form-input",type:"text",required:!0,value:S.name,onChange:R=>v({...S,name:R.target.value})})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",htmlFor:"rsvp-guests",children:x.rsvpGuests}),d.jsx("input",{id:"rsvp-guests",className:"form-input",type:"number",min:"1",max:"20",value:S.guests,onChange:R=>v({...S,guests:R.target.value})})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",htmlFor:"rsvp-attendance",children:x.rsvpAttendance}),d.jsxs("select",{id:"rsvp-attendance",className:"form-select",value:S.attendance,onChange:R=>v({...S,attendance:R.target.value}),children:[d.jsx("option",{value:"attending",children:x.attending}),d.jsx("option",{value:"not-attending",children:x.notAttending})]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",htmlFor:"rsvp-message",children:x.rsvpMessage}),d.jsx("textarea",{id:"rsvp-message",className:"form-textarea",value:S.message,onChange:R=>v({...S,message:R.target.value})})]}),d.jsxs("button",{type:"submit",className:"gold-button magnetic",style:{width:"100%"},children:[d.jsx(vc,{size:15}),x.rsvpSend]}),w&&d.jsx("div",{className:"success-message",children:x.rsvpThanks})]})]}),d.jsxs("aside",{className:"rsvp-summary",children:[d.jsx("h3",{className:"card-title",children:x.rsvpNoteTitle}),d.jsxs("div",{className:"rsvp-mini-grid",children:[d.jsxs("div",{className:"rsvp-mini-card",children:[d.jsx("div",{className:"rsvp-mini-icon",children:d.jsx(n2,{size:19})}),d.jsxs("div",{children:[d.jsx("h4",{children:x.togetherWithFamilies}),d.jsx("p",{children:x.rsvpNote})]})]}),d.jsxs("div",{className:"rsvp-mini-card",children:[d.jsx("div",{className:"rsvp-mini-icon",children:d.jsx(qh,{size:19})}),d.jsxs("div",{children:[d.jsx("h4",{children:x.dateStringFormatted}),d.jsx("p",{children:x.muhurthamTime})]})]}),d.jsxs("div",{className:"rsvp-mini-card",children:[d.jsx("div",{className:"rsvp-mini-icon",children:d.jsx(o2,{size:19})}),d.jsxs("div",{children:[d.jsx("h4",{children:i==="en"?"Celebration":"ആഘോഷം"}),d.jsx("p",{children:x.inviteDetails})]})]})]})]})]})]})}),d.jsx("section",{className:"section map-section",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"section-heading reveal",children:[d.jsxs("div",{className:"section-kicker",children:[d.jsx(gc,{size:15}),"Location"]}),d.jsx("h2",{className:"section-title",children:x.mapTitle}),d.jsx("p",{className:"section-copy",children:x.mapSubtitle})]}),d.jsxs("div",{className:"map-grid",children:[d.jsx("div",{className:"map-card",children:d.jsx("iframe",{title:"Serene Lake Resort Map",className:"map-frame",loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",src:"https://www.google.com/maps?q=Serene%20Lake%20Resort%20Kappil%20Edava%20Kerala&output=embed"})}),d.jsxs("div",{className:"map-details",children:[d.jsxs("div",{className:"section-kicker",children:[d.jsx(mc,{size:15}),x.venueLocation]}),d.jsx("h3",{className:"venue-name",children:i==="en"?"Serene Lake Resort":"സെറീൻ ലേക്ക് റിസോർട്ട്"}),d.jsx("p",{className:"venue-address",children:i==="en"?"Edava Parayil Kappil Rd, PO, Edava, Kerala 695311, India":"എടവ പറയിൽ കാപ്പിൽ റോഡ്, പി.ഒ, എടവ, കേരളം 695311"}),d.jsx("p",{className:"section-copy",style:{marginLeft:0},children:x.mapHelp}),d.jsxs("a",{href:"https://share.google/XJDjMzsVDy1ivyNee",target:"_blank",rel:"noopener noreferrer",className:"gold-button magnetic",style:{alignSelf:"flex-start",marginTop:22},children:[d.jsx(mc,{size:15}),x.openMap]})]})]})]})}),d.jsx("section",{className:"section blessing-section",children:d.jsxs("div",{className:"section-inner",children:[d.jsxs("div",{className:"section-heading reveal",children:[d.jsxs("div",{className:"section-kicker",children:[d.jsx(vc,{size:15}),"Blessings"]}),d.jsx("h2",{className:"section-title",children:x.blessingBoardTitle}),d.jsx("p",{className:"section-copy",children:x.blessingBoardSubtitle})]}),d.jsxs("div",{className:"blessing-grid",children:[d.jsxs("div",{className:"blessing-form reveal",children:[d.jsx("h3",{className:"card-title",children:x.leaveBlessing}),d.jsxs("form",{onSubmit:Z,children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",htmlFor:"blessing-name",children:x.yourName}),d.jsx("input",{id:"blessing-name",type:"text",className:"form-input",placeholder:i==="en"?"Your name":"നിങ്ങളുടെ പേര്",value:_.name,onChange:R=>m({..._,name:R.target.value}),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",htmlFor:"blessing-relation",children:x.relation}),d.jsx("input",{id:"blessing-relation",type:"text",className:"form-input",placeholder:i==="en"?"Friend / Family / Colleague":"സുഹൃത്ത് / കുടുംബാംഗം",value:_.relation,onChange:R=>m({..._,relation:R.target.value})})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"form-label",htmlFor:"blessing-message",children:x.blessingMessage}),d.jsx("textarea",{id:"blessing-message",className:"form-textarea",placeholder:i==="en"?"Write your blessing here...":"നിങ്ങളുടെ ആശംസകൾ ഇവിടെ കുറിക്കൂ...",value:_.message,onChange:R=>m({..._,message:R.target.value}),required:!0})]}),d.jsxs("button",{type:"submit",className:"gold-button magnetic",style:{width:"100%"},children:[d.jsx(vc,{size:15}),x.sendBlessing]}),g&&d.jsx("div",{className:"success-message",children:x.thankYou})]})]}),d.jsxs("div",{className:"blessing-board reveal",children:[d.jsxs("div",{className:"board-head",children:[d.jsx("h3",{className:"card-title",style:{margin:0},children:x.wishesAndBlessings}),d.jsxs("span",{className:"note-count",children:[f.length," ",x.notes]})]}),d.jsx("div",{className:"blessings-list",children:f.length===0?d.jsx("div",{className:"empty-state",children:x.noBlessingsYet}):f.map((R,D)=>d.jsxs("div",{className:"blessing-item",children:[d.jsxs("p",{className:"blessing-text",children:["“",R.message,"”"]}),d.jsxs("div",{className:"blessing-meta",children:[d.jsxs("span",{className:"blessing-author",children:[R.name," ",d.jsxs("span",{style:{color:"var(--muted)",fontWeight:500},children:["(",R.relation,")"]})]}),d.jsx("span",{children:R.date})]})]},`${R.name}-${D}`))})]})]})]})})]}),d.jsxs("footer",{className:"footer",children:[d.jsx("div",{className:"footer-ornament","aria-hidden":"true",children:d.jsx(t2,{size:26})}),d.jsx("p",{className:"footer-small",children:P.closingSmall}),d.jsx("h2",{className:"footer-names",children:i==="en"?"Muhammad Fayas & Keerthi":"മുഹമ്മദ് ഫയാസ് & കീർത്തി"}),d.jsxs("div",{className:"footer-divider",children:[d.jsx("span",{}),d.jsx(oo,{size:15,fill:"currentColor"}),d.jsx("span",{})]}),d.jsx("p",{className:"footer-quote",children:x.footerQuote}),d.jsx("div",{className:"footer-address",children:x.footerAddress}),d.jsx("div",{className:"footer-copy",children:x.footerCopyright})]}),a!==null&&d.jsxs("div",{className:"lightbox-modal",onClick:U,children:[d.jsx("button",{type:"button",className:"lightbox-button lightbox-close",onClick:U,"aria-label":"Close gallery",children:d.jsx(f2,{size:22})}),d.jsx("button",{type:"button",className:"lightbox-button lightbox-prev",onClick:F,"aria-label":"Previous image",children:d.jsx(Jx,{size:24})}),d.jsx("img",{src:b[a],alt:`Wedding large memory ${a+1}`,className:"lightbox-img",onClick:R=>R.stopPropagation()}),d.jsx("button",{type:"button",className:"lightbox-button lightbox-next",onClick:j,"aria-label":"Next image",children:d.jsx(e2,{size:24})})]})]})]})}function E2(){return d.jsx(b2,{})}wc.createRoot(document.getElementById("root")).render(d.jsx(ev.StrictMode,{children:d.jsx(E2,{})}));
