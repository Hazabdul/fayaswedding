(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function A1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ng={exports:{}},uu={},ig={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws=Symbol.for("react.element"),F1=Symbol.for("react.portal"),I1=Symbol.for("react.fragment"),B1=Symbol.for("react.strict_mode"),U1=Symbol.for("react.profiler"),$1=Symbol.for("react.provider"),V1=Symbol.for("react.context"),W1=Symbol.for("react.forward_ref"),H1=Symbol.for("react.suspense"),Y1=Symbol.for("react.memo"),G1=Symbol.for("react.lazy"),lp=Symbol.iterator;function X1(t){return t===null||typeof t!="object"?null:(t=lp&&t[lp]||t["@@iterator"],typeof t=="function"?t:null)}var og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lg=Object.assign,sg={};function qo(t,e,r){this.props=t,this.context=e,this.refs=sg,this.updater=r||og}qo.prototype.isReactComponent={};qo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ag(){}ag.prototype=qo.prototype;function Fd(t,e,r){this.props=t,this.context=e,this.refs=sg,this.updater=r||og}var Id=Fd.prototype=new ag;Id.constructor=Fd;lg(Id,qo.prototype);Id.isPureReactComponent=!0;var sp=Array.isArray,ug=Object.prototype.hasOwnProperty,Bd={current:null},cg={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,r){var n,i={},o=null,l=null;if(e!=null)for(n in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)ug.call(e,n)&&!cg.hasOwnProperty(n)&&(i[n]=e[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(n in s=t.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:ws,type:t,key:o,ref:l,props:i,_owner:Bd.current}}function Q1(t,e){return{$$typeof:ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===ws}function K1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var ap=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K1(""+t.key):e.toString(36)}function sa(t,e,r,n,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case ws:case F1:l=!0}}if(l)return l=t,i=i(l),t=n===""?"."+ju(l,0):n,sp(i)?(r="",t!=null&&(r=t.replace(ap,"$&/")+"/"),sa(i,e,r,"",function(u){return u})):i!=null&&(Ud(i)&&(i=Q1(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ap,"$&/")+"/")+t)),e.push(i)),1;if(l=0,n=n===""?".":n+":",sp(t))for(var s=0;s<t.length;s++){o=t[s];var a=n+ju(o,s);l+=sa(o,e,r,a,i)}else if(a=X1(t),typeof a=="function")for(t=a.call(t),s=0;!(o=t.next()).done;)o=o.value,a=n+ju(o,s++),l+=sa(o,e,r,a,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function js(t,e,r){if(t==null)return t;var n=[],i=0;return sa(t,n,"","",function(o){return e.call(r,o,i++)}),n}function q1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},aa={transition:null},Z1={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:aa,ReactCurrentOwner:Bd};function fg(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:js,forEach:function(t,e,r){js(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return js(t,function(){e++}),e},toArray:function(t){return js(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=qo;ne.Fragment=I1;ne.Profiler=U1;ne.PureComponent=Fd;ne.StrictMode=B1;ne.Suspense=H1;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z1;ne.act=fg;ne.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=lg({},t.props),i=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=Bd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(a in e)ug.call(e,a)&&!cg.hasOwnProperty(a)&&(n[a]=e[a]===void 0&&s!==void 0?s[a]:e[a])}var a=arguments.length-2;if(a===1)n.children=r;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:ws,type:t.type,key:i,ref:o,props:n,_owner:l}};ne.createContext=function(t){return t={$$typeof:V1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$1,_context:t},t.Consumer=t};ne.createElement=dg;ne.createFactory=function(t){var e=dg.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:W1,render:t}};ne.isValidElement=Ud;ne.lazy=function(t){return{$$typeof:G1,_payload:{_status:-1,_result:t},_init:q1}};ne.memo=function(t,e){return{$$typeof:Y1,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=aa.transition;aa.transition={};try{t()}finally{aa.transition=e}};ne.unstable_act=fg;ne.useCallback=function(t,e){return At.current.useCallback(t,e)};ne.useContext=function(t){return At.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return At.current.useDeferredValue(t)};ne.useEffect=function(t,e){return At.current.useEffect(t,e)};ne.useId=function(){return At.current.useId()};ne.useImperativeHandle=function(t,e,r){return At.current.useImperativeHandle(t,e,r)};ne.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return At.current.useMemo(t,e)};ne.useReducer=function(t,e,r){return At.current.useReducer(t,e,r)};ne.useRef=function(t){return At.current.useRef(t)};ne.useState=function(t){return At.current.useState(t)};ne.useSyncExternalStore=function(t,e,r){return At.current.useSyncExternalStore(t,e,r)};ne.useTransition=function(){return At.current.useTransition()};ne.version="18.3.1";ig.exports=ne;var fe=ig.exports;const J1=A1(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev=fe,tv=Symbol.for("react.element"),rv=Symbol.for("react.fragment"),nv=Object.prototype.hasOwnProperty,iv=ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ov={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,r){var n,i={},o=null,l=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)nv.call(e,n)&&!ov.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:tv,type:t,key:o,ref:l,props:i,_owner:iv.current}}uu.Fragment=rv;uu.jsx=pg;uu.jsxs=pg;ng.exports=uu;var p=ng.exports,wc={},hg={exports:{}},mr={},gg={exports:{}},mg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(E,R){var _=E.length;E.push(R);e:for(;0<_;){var I=_-1>>>1,W=E[I];if(0<i(W,R))E[I]=R,E[_]=W,_=I;else break e}}function r(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var R=E[0],_=E.pop();if(_!==R){E[0]=_;e:for(var I=0,W=E.length,ue=W>>>1;I<ue;){var Q=2*(I+1)-1,me=E[Q],ce=Q+1,F=E[ce];if(0>i(me,_))ce<W&&0>i(F,me)?(E[I]=F,E[ce]=_,I=ce):(E[I]=me,E[Q]=_,I=Q);else if(ce<W&&0>i(F,_))E[I]=F,E[ce]=_,I=ce;else break e}}return R}function i(E,R){var _=E.sortIndex-R.sortIndex;return _!==0?_:E.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var a=[],u=[],c=1,g=null,f=3,h=!1,x=!1,m=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(E){for(var R=r(u);R!==null;){if(R.callback===null)n(u);else if(R.startTime<=E)n(u),R.sortIndex=R.expirationTime,e(a,R);else break;R=r(u)}}function w(E){if(m=!1,v(E),!x)if(r(a)!==null)x=!0,q(k);else{var R=r(u);R!==null&&z(w,R.startTime-E)}}function k(E,R){x=!1,m&&(m=!1,y(N),N=-1),h=!0;var _=f;try{for(v(R),g=r(a);g!==null&&(!(g.expirationTime>R)||E&&!B());){var I=g.callback;if(typeof I=="function"){g.callback=null,f=g.priorityLevel;var W=I(g.expirationTime<=R);R=t.unstable_now(),typeof W=="function"?g.callback=W:g===r(a)&&n(a),v(R)}else n(a);g=r(a)}if(g!==null)var ue=!0;else{var Q=r(u);Q!==null&&z(w,Q.startTime-R),ue=!1}return ue}finally{g=null,f=_,h=!1}}var T=!1,S=null,N=-1,j=5,C=-1;function B(){return!(t.unstable_now()-C<j)}function O(){if(S!==null){var E=t.unstable_now();C=E;var R=!0;try{R=S(!0,E)}finally{R?G():(T=!1,S=null)}}else T=!1}var G;if(typeof d=="function")G=function(){d(O)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,X=$.port2;$.port1.onmessage=O,G=function(){X.postMessage(null)}}else G=function(){b(O,0)};function q(E){S=E,T||(T=!0,G())}function z(E,R){N=b(function(){E(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_continueExecution=function(){x||h||(x=!0,q(k))},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(a)},t.unstable_next=function(E){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var _=f;f=R;try{return E()}finally{f=_}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var _=f;f=E;try{return R()}finally{f=_}},t.unstable_scheduleCallback=function(E,R,_){var I=t.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?I+_:I):_=I,E){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=_+W,E={id:c++,callback:R,priorityLevel:E,startTime:_,expirationTime:W,sortIndex:-1},_>I?(E.sortIndex=_,e(u,E),r(a)===null&&E===r(u)&&(m?(y(N),N=-1):m=!0,z(w,_-I))):(E.sortIndex=W,e(a,E),x||h||(x=!0,q(k))),E},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(E){var R=f;return function(){var _=f;f=R;try{return E.apply(this,arguments)}finally{f=_}}}})(mg);gg.exports=mg;var lv=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv=fe,pr=lv;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg=new Set,Xl={};function Ki(t,e){Fo(t,e),Fo(t+"Capture",e)}function Fo(t,e){for(Xl[t]=e,t=0;t<e.length;t++)vg.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=Object.prototype.hasOwnProperty,av=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},cp={};function uv(t){return kc.call(cp,t)?!0:kc.call(up,t)?!1:av.test(t)?cp[t]=!0:(up[t]=!0,!1)}function cv(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dv(t,e,r,n){if(e===null||typeof e>"u"||cv(t,e,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,r,n,i,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,Vd);gt[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,Vd);gt[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,Vd);gt[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,r,n){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dv(e,r,i,n)&&(r=null),n||i===null?uv(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var En=sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zs=Symbol.for("react.element"),uo=Symbol.for("react.portal"),co=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),yg=Symbol.for("react.provider"),xg=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),Tc=Symbol.for("react.suspense_list"),Gd=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),_g=Symbol.for("react.offscreen"),dp=Symbol.iterator;function il(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,zu;function ml(t){if(zu===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);zu=e&&e[1]||""}return`
`+zu+t}var Mu=!1;function Ru(t,e){if(!t||Mu)return"";Mu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=n.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=l&&0<=s);break}}}finally{Mu=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?ml(t):""}function fv(t){switch(t.tag){case 5:return ml(t.type);case 16:return ml("Lazy");case 13:return ml("Suspense");case 19:return ml("SuspenseList");case 0:case 2:case 15:return t=Ru(t.type,!1),t;case 11:return t=Ru(t.type.render,!1),t;case 1:return t=Ru(t.type,!0),t;default:return""}}function Cc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case co:return"Fragment";case uo:return"Portal";case Sc:return"Profiler";case Hd:return"StrictMode";case bc:return"Suspense";case Tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xg:return(t.displayName||"Context")+".Consumer";case yg:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gd:return e=t.displayName||null,e!==null?e:Cc(t.type)||"Memo";case An:e=t._payload,t=t._init;try{return Cc(t(e))}catch{}}return null}function pv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cc(e);case 8:return e===Hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hv(t){var e=wg(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ms(t){t._valueTracker||(t._valueTracker=hv(t))}function kg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),n="";return t&&(n=wg(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),!0):!1}function Ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var r=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function fp(t,e){var r=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=oi(e.value!=null?e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sg(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function Ec(t,e){Sg(t,e);var r=oi(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pc(t,e.type,r):e.hasOwnProperty("defaultValue")&&Pc(t,e.type,oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pp(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function Pc(t,e,r){(e!=="number"||Ea(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var vl=Array.isArray;function To(t,e,r,n){if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+oi(r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hp(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(M(92));if(vl(r)){if(1<r.length)throw Error(M(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:oi(r)}}function bg(t,e){var r=oi(e.value),n=oi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),n!=null&&(t.defaultValue=""+n)}function gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Rs,Cg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Rs=Rs||document.createElement("div"),Rs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Rs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ql(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gv=["Webkit","ms","Moz","O"];Object.keys(Nl).forEach(function(t){gv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Nl[e]=Nl[t]})});function Ng(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Nl.hasOwnProperty(t)&&Nl[t]?(""+e).trim():e+"px"}function Eg(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Ng(r,e[r],n);r==="float"&&(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var mv=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mc(t,e){if(e){if(mv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function Rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oc=null;function Xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dc=null,Co=null,No=null;function mp(t){if(t=bs(t)){if(typeof Dc!="function")throw Error(M(280));var e=t.stateNode;e&&(e=hu(e),Dc(t.stateNode,t.type,e))}}function Pg(t){Co?No?No.push(t):No=[t]:Co=t}function jg(){if(Co){var t=Co,e=No;if(No=Co=null,mp(t),e)for(t=0;t<e.length;t++)mp(e[t])}}function zg(t,e){return t(e)}function Mg(){}var Ou=!1;function Rg(t,e,r){if(Ou)return t(e,r);Ou=!0;try{return zg(t,e,r)}finally{Ou=!1,(Co!==null||No!==null)&&(Mg(),jg())}}function Kl(t,e){var r=t.stateNode;if(r===null)return null;var n=hu(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,e,typeof r));return r}var Lc=!1;if(kn)try{var ol={};Object.defineProperty(ol,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",ol,ol),window.removeEventListener("test",ol,ol)}catch{Lc=!1}function vv(t,e,r,n,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(c){this.onError(c)}}var El=!1,Pa=null,ja=!1,Ac=null,yv={onError:function(t){El=!0,Pa=t}};function xv(t,e,r,n,i,o,l,s,a){El=!1,Pa=null,vv.apply(yv,arguments)}function _v(t,e,r,n,i,o,l,s,a){if(xv.apply(this,arguments),El){if(El){var u=Pa;El=!1,Pa=null}else throw Error(M(198));ja||(ja=!0,Ac=u)}}function qi(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vp(t){if(qi(t)!==t)throw Error(M(188))}function wv(t){var e=t.alternate;if(!e){if(e=qi(t),e===null)throw Error(M(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return vp(i),t;if(o===n)return vp(i),e;o=o.sibling}throw Error(M(188))}if(r.return!==n.return)r=i,n=o;else{for(var l=!1,s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l)throw Error(M(189))}}if(r.alternate!==n)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:e}function Dg(t){return t=wv(t),t!==null?Lg(t):null}function Lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lg(t);if(e!==null)return e;t=t.sibling}return null}var Ag=pr.unstable_scheduleCallback,yp=pr.unstable_cancelCallback,kv=pr.unstable_shouldYield,Sv=pr.unstable_requestPaint,Ve=pr.unstable_now,bv=pr.unstable_getCurrentPriorityLevel,Qd=pr.unstable_ImmediatePriority,Fg=pr.unstable_UserBlockingPriority,za=pr.unstable_NormalPriority,Tv=pr.unstable_LowPriority,Ig=pr.unstable_IdlePriority,cu=null,rn=null;function Cv(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(cu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ur=Math.clz32?Math.clz32:Pv,Nv=Math.log,Ev=Math.LN2;function Pv(t){return t>>>=0,t===0?32:31-(Nv(t)/Ev|0)|0}var Os=64,Ds=4194304;function yl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ma(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes,l=r&268435455;if(l!==0){var s=l&~i;s!==0?n=yl(s):(o&=l,o!==0&&(n=yl(o)))}else l=r&~i,l!==0?n=yl(l):o!==0&&(n=yl(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-Ur(e),i=1<<r,n|=t[r],e&=~i;return n}function jv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zv(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-Ur(o),s=1<<l,a=i[l];a===-1?(!(s&r)||s&n)&&(i[l]=jv(s,e)):a<=e&&(t.expiredLanes|=s),o&=~s}}function Fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bg(){var t=Os;return Os<<=1,!(Os&4194240)&&(Os=64),t}function Du(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function ks(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ur(e),t[e]=r}function Mv(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-Ur(r),o=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~o}}function Kd(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var n=31-Ur(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var ge=0;function Ug(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $g,qd,Vg,Wg,Hg,Ic=!1,Ls=[],Xn=null,Qn=null,Kn=null,ql=new Map,Zl=new Map,In=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":ql.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(e.pointerId)}}function ll(t,e,r,n,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},e!==null&&(e=bs(e),e!==null&&qd(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ov(t,e,r,n,i){switch(e){case"focusin":return Xn=ll(Xn,t,e,r,n,i),!0;case"dragenter":return Qn=ll(Qn,t,e,r,n,i),!0;case"mouseover":return Kn=ll(Kn,t,e,r,n,i),!0;case"pointerover":var o=i.pointerId;return ql.set(o,ll(ql.get(o)||null,t,e,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Zl.set(o,ll(Zl.get(o)||null,t,e,r,n,i)),!0}return!1}function Yg(t){var e=Ei(t.target);if(e!==null){var r=qi(e);if(r!==null){if(e=r.tag,e===13){if(e=Og(r),e!==null){t.blockedOn=e,Hg(t.priority,function(){Vg(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Bc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.constructor(r.type,r);Oc=n,r.target.dispatchEvent(n),Oc=null}else return e=bs(r),e!==null&&qd(e),t.blockedOn=r,!1;e.shift()}return!0}function _p(t,e,r){ua(t)&&r.delete(e)}function Dv(){Ic=!1,Xn!==null&&ua(Xn)&&(Xn=null),Qn!==null&&ua(Qn)&&(Qn=null),Kn!==null&&ua(Kn)&&(Kn=null),ql.forEach(_p),Zl.forEach(_p)}function sl(t,e){t.blockedOn===e&&(t.blockedOn=null,Ic||(Ic=!0,pr.unstable_scheduleCallback(pr.unstable_NormalPriority,Dv)))}function Jl(t){function e(i){return sl(i,t)}if(0<Ls.length){sl(Ls[0],t);for(var r=1;r<Ls.length;r++){var n=Ls[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Xn!==null&&sl(Xn,t),Qn!==null&&sl(Qn,t),Kn!==null&&sl(Kn,t),ql.forEach(e),Zl.forEach(e),r=0;r<In.length;r++)n=In[r],n.blockedOn===t&&(n.blockedOn=null);for(;0<In.length&&(r=In[0],r.blockedOn===null);)Yg(r),r.blockedOn===null&&In.shift()}var Eo=En.ReactCurrentBatchConfig,Ra=!0;function Lv(t,e,r,n){var i=ge,o=Eo.transition;Eo.transition=null;try{ge=1,Zd(t,e,r,n)}finally{ge=i,Eo.transition=o}}function Av(t,e,r,n){var i=ge,o=Eo.transition;Eo.transition=null;try{ge=4,Zd(t,e,r,n)}finally{ge=i,Eo.transition=o}}function Zd(t,e,r,n){if(Ra){var i=Bc(t,e,r,n);if(i===null)Hu(t,e,n,Oa,r),xp(t,n);else if(Ov(i,t,e,r,n))n.stopPropagation();else if(xp(t,n),e&4&&-1<Rv.indexOf(t)){for(;i!==null;){var o=bs(i);if(o!==null&&$g(o),o=Bc(t,e,r,n),o===null&&Hu(t,e,n,Oa,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Hu(t,e,n,null,r)}}var Oa=null;function Bc(t,e,r,n){if(Oa=null,t=Xd(n),t=Ei(t),t!==null)if(e=qi(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Og(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oa=t,null}function Gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bv()){case Qd:return 1;case Fg:return 4;case za:case Tv:return 16;case Ig:return 536870912;default:return 16}default:return 16}}var Un=null,Jd=null,ca=null;function Xg(){if(ca)return ca;var t,e=Jd,r=e.length,n,i="value"in Un?Un.value:Un.textContent,o=i.length;for(t=0;t<r&&e[t]===i[t];t++);var l=r-t;for(n=1;n<=l&&e[r-n]===i[o-n];n++);return ca=i.slice(t,1<n?1-n:void 0)}function da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function As(){return!0}function wp(){return!1}function vr(t){function e(r,n,i,o,l){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?As:wp,this.isPropagationStopped=wp,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),e}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=vr(Zo),Ss=Re({},Zo,{view:0,detail:0}),Fv=vr(Ss),Lu,Au,al,du=Re({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==al&&(al&&t.type==="mousemove"?(Lu=t.screenX-al.screenX,Au=t.screenY-al.screenY):Au=Lu=0,al=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),kp=vr(du),Iv=Re({},du,{dataTransfer:0}),Bv=vr(Iv),Uv=Re({},Ss,{relatedTarget:0}),Fu=vr(Uv),$v=Re({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=vr($v),Wv=Re({},Zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hv=vr(Wv),Yv=Re({},Zo,{data:0}),Sp=vr(Yv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qv[t])?!!e[t]:!1}function tf(){return Kv}var qv=Re({},Ss,{key:function(t){if(t.key){var e=Gv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zv=vr(qv),Jv=Re({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=vr(Jv),ey=Re({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),ty=vr(ey),ry=Re({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=vr(ry),iy=Re({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oy=vr(iy),ly=[9,13,27,32],rf=kn&&"CompositionEvent"in window,Pl=null;kn&&"documentMode"in document&&(Pl=document.documentMode);var sy=kn&&"TextEvent"in window&&!Pl,Qg=kn&&(!rf||Pl&&8<Pl&&11>=Pl),Tp=" ",Cp=!1;function Kg(t,e){switch(t){case"keyup":return ly.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fo=!1;function ay(t,e){switch(t){case"compositionend":return qg(e);case"keypress":return e.which!==32?null:(Cp=!0,Tp);case"textInput":return t=e.data,t===Tp&&Cp?null:t;default:return null}}function uy(t,e){if(fo)return t==="compositionend"||!rf&&Kg(t,e)?(t=Xg(),ca=Jd=Un=null,fo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qg&&e.locale!=="ko"?null:e.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cy[t.type]:e==="textarea"}function Zg(t,e,r,n){Pg(n),e=Da(e,"onChange"),0<e.length&&(r=new ef("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var jl=null,es=null;function dy(t){um(t,0)}function fu(t){var e=go(t);if(kg(e))return t}function fy(t,e){if(t==="change")return e}var Jg=!1;if(kn){var Iu;if(kn){var Bu="oninput"in document;if(!Bu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),Bu=typeof Ep.oninput=="function"}Iu=Bu}else Iu=!1;Jg=Iu&&(!document.documentMode||9<document.documentMode)}function Pp(){jl&&(jl.detachEvent("onpropertychange",em),es=jl=null)}function em(t){if(t.propertyName==="value"&&fu(es)){var e=[];Zg(e,es,t,Xd(t)),Rg(dy,e)}}function py(t,e,r){t==="focusin"?(Pp(),jl=e,es=r,jl.attachEvent("onpropertychange",em)):t==="focusout"&&Pp()}function hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(es)}function gy(t,e){if(t==="click")return fu(e)}function my(t,e){if(t==="input"||t==="change")return fu(e)}function vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vr=typeof Object.is=="function"?Object.is:vy;function ts(t,e){if(Vr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!kc.call(e,i)||!Vr(t[i],e[i]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zp(t,e){var r=jp(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=jp(r)}}function tm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rm(){for(var t=window,e=Ea();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ea(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yy(t){var e=rm(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&tm(r.ownerDocument.documentElement,r)){if(n!==null&&nf(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!t.extend&&o>n&&(i=n,n=o,o=i),i=zp(r,o);var l=zp(r,n);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xy=kn&&"documentMode"in document&&11>=document.documentMode,po=null,Uc=null,zl=null,$c=!1;function Mp(t,e,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$c||po==null||po!==Ea(n)||(n=po,"selectionStart"in n&&nf(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),zl&&ts(zl,n)||(zl=n,n=Da(Uc,"onSelect"),0<n.length&&(e=new ef("onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=po)))}function Fs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var ho={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},Uu={},nm={};kn&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete ho.animationend.animation,delete ho.animationiteration.animation,delete ho.animationstart.animation),"TransitionEvent"in window||delete ho.transitionend.transition);function pu(t){if(Uu[t])return Uu[t];if(!ho[t])return t;var e=ho[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in nm)return Uu[t]=e[r];return t}var im=pu("animationend"),om=pu("animationiteration"),lm=pu("animationstart"),sm=pu("transitionend"),am=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function di(t,e){am.set(t,e),Ki(e,[t])}for(var $u=0;$u<Rp.length;$u++){var Vu=Rp[$u],_y=Vu.toLowerCase(),wy=Vu[0].toUpperCase()+Vu.slice(1);di(_y,"on"+wy)}di(im,"onAnimationEnd");di(om,"onAnimationIteration");di(lm,"onAnimationStart");di("dblclick","onDoubleClick");di("focusin","onFocus");di("focusout","onBlur");di(sm,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);Ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(xl));function Op(t,e,r){var n=t.type||"unknown-event";t.currentTarget=r,_v(n,e,void 0,t),t.currentTarget=null}function um(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var l=n.length-1;0<=l;l--){var s=n[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Op(i,s,u),o=a}else for(l=0;l<n.length;l++){if(s=n[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Op(i,s,u),o=a}}}if(ja)throw t=Ac,ja=!1,Ac=null,t}function we(t,e){var r=e[Gc];r===void 0&&(r=e[Gc]=new Set);var n=t+"__bubble";r.has(n)||(cm(e,t,2,!1),r.add(n))}function Wu(t,e,r){var n=0;e&&(n|=4),cm(r,t,n,e)}var Is="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[Is]){t[Is]=!0,vg.forEach(function(r){r!=="selectionchange"&&(ky.has(r)||Wu(r,!1,t),Wu(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Is]||(e[Is]=!0,Wu("selectionchange",!1,e))}}function cm(t,e,r,n){switch(Gg(e)){case 1:var i=Lv;break;case 4:i=Av;break;default:i=Zd}r=i.bind(null,e,r,t),i=void 0,!Lc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(e,r,!1)}function Hu(t,e,r,n,i){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Ei(s),l===null)return;if(a=l.tag,a===5||a===6){n=o=l;continue e}s=s.parentNode}}n=n.return}Rg(function(){var u=o,c=Xd(r),g=[];e:{var f=am.get(t);if(f!==void 0){var h=ef,x=t;switch(t){case"keypress":if(da(r)===0)break e;case"keydown":case"keyup":h=Zv;break;case"focusin":x="focus",h=Fu;break;case"focusout":x="blur",h=Fu;break;case"beforeblur":case"afterblur":h=Fu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ty;break;case im:case om:case lm:h=Vv;break;case sm:h=ny;break;case"scroll":h=Fv;break;case"wheel":h=oy;break;case"copy":case"cut":case"paste":h=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=bp}var m=(e&4)!==0,b=!m&&t==="scroll",y=m?f!==null?f+"Capture":null:f;m=[];for(var d=u,v;d!==null;){v=d;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,y!==null&&(w=Kl(d,y),w!=null&&m.push(ns(d,w,v)))),b)break;d=d.return}0<m.length&&(f=new h(f,x,null,r,c),g.push({event:f,listeners:m}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&r!==Oc&&(x=r.relatedTarget||r.fromElement)&&(Ei(x)||x[Sn]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(x=r.relatedTarget||r.toElement,h=u,x=x?Ei(x):null,x!==null&&(b=qi(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(m=kp,w="onMouseLeave",y="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(m=bp,w="onPointerLeave",y="onPointerEnter",d="pointer"),b=h==null?f:go(h),v=x==null?f:go(x),f=new m(w,d+"leave",h,r,c),f.target=b,f.relatedTarget=v,w=null,Ei(c)===u&&(m=new m(y,d+"enter",x,r,c),m.target=v,m.relatedTarget=b,w=m),b=w,h&&x)t:{for(m=h,y=x,d=0,v=m;v;v=ro(v))d++;for(v=0,w=y;w;w=ro(w))v++;for(;0<d-v;)m=ro(m),d--;for(;0<v-d;)y=ro(y),v--;for(;d--;){if(m===y||y!==null&&m===y.alternate)break t;m=ro(m),y=ro(y)}m=null}else m=null;h!==null&&Dp(g,f,h,m,!1),x!==null&&b!==null&&Dp(g,b,x,m,!0)}}e:{if(f=u?go(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var k=fy;else if(Np(f))if(Jg)k=my;else{k=hy;var T=py}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=gy);if(k&&(k=k(t,u))){Zg(g,k,r,c);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Pc(f,"number",f.value)}switch(T=u?go(u):window,t){case"focusin":(Np(T)||T.contentEditable==="true")&&(po=T,Uc=u,zl=null);break;case"focusout":zl=Uc=po=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Mp(g,r,c);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":Mp(g,r,c)}var S;if(rf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else fo?Kg(t,r)&&(N="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(Qg&&r.locale!=="ko"&&(fo||N!=="onCompositionStart"?N==="onCompositionEnd"&&fo&&(S=Xg()):(Un=c,Jd="value"in Un?Un.value:Un.textContent,fo=!0)),T=Da(u,N),0<T.length&&(N=new Sp(N,t,null,r,c),g.push({event:N,listeners:T}),S?N.data=S:(S=qg(r),S!==null&&(N.data=S)))),(S=sy?ay(t,r):uy(t,r))&&(u=Da(u,"onBeforeInput"),0<u.length&&(c=new Sp("onBeforeInput","beforeinput",null,r,c),g.push({event:c,listeners:u}),c.data=S))}um(g,e)})}function ns(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Da(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Kl(t,r),o!=null&&n.unshift(ns(t,o,i)),o=Kl(t,e),o!=null&&n.push(ns(t,o,i))),t=t.return}return n}function ro(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,r,n,i){for(var o=e._reactName,l=[];r!==null&&r!==n;){var s=r,a=s.alternate,u=s.stateNode;if(a!==null&&a===n)break;s.tag===5&&u!==null&&(s=u,i?(a=Kl(r,o),a!=null&&l.unshift(ns(r,a,s))):i||(a=Kl(r,o),a!=null&&l.push(ns(r,a,s)))),r=r.return}l.length!==0&&t.push({event:e,listeners:l})}var Sy=/\r\n?/g,by=/\u0000|\uFFFD/g;function Lp(t){return(typeof t=="string"?t:""+t).replace(Sy,`
`).replace(by,"")}function Bs(t,e,r){if(e=Lp(e),Lp(t)!==e&&r)throw Error(M(425))}function La(){}var Vc=null,Wc=null;function Hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(t){return Ap.resolve(null).then(t).catch(Ny)}:Yc;function Ny(t){setTimeout(function(){throw t})}function Yu(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Jl(e);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Jl(e)}function qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),Zr="__reactFiber$"+Jo,is="__reactProps$"+Jo,Sn="__reactContainer$"+Jo,Gc="__reactEvents$"+Jo,Ey="__reactListeners$"+Jo,Py="__reactHandles$"+Jo;function Ei(t){var e=t[Zr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Sn]||r[Zr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Fp(t);t!==null;){if(r=t[Zr])return r;t=Fp(t)}return e}t=r,r=t.parentNode}return null}function bs(t){return t=t[Zr]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function hu(t){return t[is]||null}var Xc=[],mo=-1;function fi(t){return{current:t}}function ke(t){0>mo||(t.current=Xc[mo],Xc[mo]=null,mo--)}function _e(t,e){mo++,Xc[mo]=t.current,t.current=e}var li={},Nt=fi(li),Wt=fi(!1),$i=li;function Io(t,e){var r=t.type.contextTypes;if(!r)return li;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function Aa(){ke(Wt),ke(Nt)}function Ip(t,e,r){if(Nt.current!==li)throw Error(M(168));_e(Nt,e),_e(Wt,r)}function dm(t,e,r){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in e))throw Error(M(108,pv(t)||"Unknown",i));return Re({},r,n)}function Fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||li,$i=Nt.current,_e(Nt,t),_e(Wt,Wt.current),!0}function Bp(t,e,r){var n=t.stateNode;if(!n)throw Error(M(169));r?(t=dm(t,e,$i),n.__reactInternalMemoizedMergedChildContext=t,ke(Wt),ke(Nt),_e(Nt,t)):ke(Wt),_e(Wt,r)}var hn=null,gu=!1,Gu=!1;function fm(t){hn===null?hn=[t]:hn.push(t)}function jy(t){gu=!0,fm(t)}function pi(){if(!Gu&&hn!==null){Gu=!0;var t=0,e=ge;try{var r=hn;for(ge=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}hn=null,gu=!1}catch(i){throw hn!==null&&(hn=hn.slice(t+1)),Ag(Qd,pi),i}finally{ge=e,Gu=!1}}return null}var vo=[],yo=0,Ia=null,Ba=0,_r=[],wr=0,Vi=null,vn=1,yn="";function ki(t,e){vo[yo++]=Ba,vo[yo++]=Ia,Ia=t,Ba=e}function pm(t,e,r){_r[wr++]=vn,_r[wr++]=yn,_r[wr++]=Vi,Vi=t;var n=vn;t=yn;var i=32-Ur(n)-1;n&=~(1<<i),r+=1;var o=32-Ur(e)+i;if(30<o){var l=i-i%5;o=(n&(1<<l)-1).toString(32),n>>=l,i-=l,vn=1<<32-Ur(e)+i|r<<i|n,yn=o+t}else vn=1<<o|r<<i|n,yn=t}function of(t){t.return!==null&&(ki(t,1),pm(t,1,0))}function lf(t){for(;t===Ia;)Ia=vo[--yo],vo[yo]=null,Ba=vo[--yo],vo[yo]=null;for(;t===Vi;)Vi=_r[--wr],_r[wr]=null,yn=_r[--wr],_r[wr]=null,vn=_r[--wr],_r[wr]=null}var dr=null,ar=null,be=!1,Br=null;function hm(t,e){var r=br(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Up(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dr=t,ar=qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dr=t,ar=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Vi!==null?{id:vn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=br(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,dr=t,ar=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kc(t){if(be){var e=ar;if(e){var r=e;if(!Up(t,e)){if(Qc(t))throw Error(M(418));e=qn(r.nextSibling);var n=dr;e&&Up(t,e)?hm(n,r):(t.flags=t.flags&-4097|2,be=!1,dr=t)}}else{if(Qc(t))throw Error(M(418));t.flags=t.flags&-4097|2,be=!1,dr=t}}}function $p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dr=t}function Us(t){if(t!==dr)return!1;if(!be)return $p(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hc(t.type,t.memoizedProps)),e&&(e=ar)){if(Qc(t))throw gm(),Error(M(418));for(;e;)hm(t,e),e=qn(e.nextSibling)}if($p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){ar=qn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}ar=null}}else ar=dr?qn(t.stateNode.nextSibling):null;return!0}function gm(){for(var t=ar;t;)t=qn(t.nextSibling)}function Bo(){ar=dr=null,be=!1}function sf(t){Br===null?Br=[t]:Br.push(t)}var zy=En.ReactCurrentBatchConfig;function ul(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(M(309));var n=r.stateNode}if(!n)throw Error(M(147,t));var i=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(M(284));if(!r._owner)throw Error(M(290,t))}return t}function $s(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vp(t){var e=t._init;return e(t._payload)}function mm(t){function e(y,d){if(t){var v=y.deletions;v===null?(y.deletions=[d],y.flags|=16):v.push(d)}}function r(y,d){if(!t)return null;for(;d!==null;)e(y,d),d=d.sibling;return null}function n(y,d){for(y=new Map;d!==null;)d.key!==null?y.set(d.key,d):y.set(d.index,d),d=d.sibling;return y}function i(y,d){return y=ti(y,d),y.index=0,y.sibling=null,y}function o(y,d,v){return y.index=v,t?(v=y.alternate,v!==null?(v=v.index,v<d?(y.flags|=2,d):v):(y.flags|=2,d)):(y.flags|=1048576,d)}function l(y){return t&&y.alternate===null&&(y.flags|=2),y}function s(y,d,v,w){return d===null||d.tag!==6?(d=ec(v,y.mode,w),d.return=y,d):(d=i(d,v),d.return=y,d)}function a(y,d,v,w){var k=v.type;return k===co?c(y,d,v.props.children,w,v.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===An&&Vp(k)===d.type)?(w=i(d,v.props),w.ref=ul(y,d,v),w.return=y,w):(w=ya(v.type,v.key,v.props,null,y.mode,w),w.ref=ul(y,d,v),w.return=y,w)}function u(y,d,v,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=tc(v,y.mode,w),d.return=y,d):(d=i(d,v.children||[]),d.return=y,d)}function c(y,d,v,w,k){return d===null||d.tag!==7?(d=Oi(v,y.mode,w,k),d.return=y,d):(d=i(d,v),d.return=y,d)}function g(y,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ec(""+d,y.mode,v),d.return=y,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zs:return v=ya(d.type,d.key,d.props,null,y.mode,v),v.ref=ul(y,null,d),v.return=y,v;case uo:return d=tc(d,y.mode,v),d.return=y,d;case An:var w=d._init;return g(y,w(d._payload),v)}if(vl(d)||il(d))return d=Oi(d,y.mode,v,null),d.return=y,d;$s(y,d)}return null}function f(y,d,v,w){var k=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:s(y,d,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zs:return v.key===k?a(y,d,v,w):null;case uo:return v.key===k?u(y,d,v,w):null;case An:return k=v._init,f(y,d,k(v._payload),w)}if(vl(v)||il(v))return k!==null?null:c(y,d,v,w,null);$s(y,v)}return null}function h(y,d,v,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(v)||null,s(d,y,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zs:return y=y.get(w.key===null?v:w.key)||null,a(d,y,w,k);case uo:return y=y.get(w.key===null?v:w.key)||null,u(d,y,w,k);case An:var T=w._init;return h(y,d,v,T(w._payload),k)}if(vl(w)||il(w))return y=y.get(v)||null,c(d,y,w,k,null);$s(d,w)}return null}function x(y,d,v,w){for(var k=null,T=null,S=d,N=d=0,j=null;S!==null&&N<v.length;N++){S.index>N?(j=S,S=null):j=S.sibling;var C=f(y,S,v[N],w);if(C===null){S===null&&(S=j);break}t&&S&&C.alternate===null&&e(y,S),d=o(C,d,N),T===null?k=C:T.sibling=C,T=C,S=j}if(N===v.length)return r(y,S),be&&ki(y,N),k;if(S===null){for(;N<v.length;N++)S=g(y,v[N],w),S!==null&&(d=o(S,d,N),T===null?k=S:T.sibling=S,T=S);return be&&ki(y,N),k}for(S=n(y,S);N<v.length;N++)j=h(S,y,N,v[N],w),j!==null&&(t&&j.alternate!==null&&S.delete(j.key===null?N:j.key),d=o(j,d,N),T===null?k=j:T.sibling=j,T=j);return t&&S.forEach(function(B){return e(y,B)}),be&&ki(y,N),k}function m(y,d,v,w){var k=il(v);if(typeof k!="function")throw Error(M(150));if(v=k.call(v),v==null)throw Error(M(151));for(var T=k=null,S=d,N=d=0,j=null,C=v.next();S!==null&&!C.done;N++,C=v.next()){S.index>N?(j=S,S=null):j=S.sibling;var B=f(y,S,C.value,w);if(B===null){S===null&&(S=j);break}t&&S&&B.alternate===null&&e(y,S),d=o(B,d,N),T===null?k=B:T.sibling=B,T=B,S=j}if(C.done)return r(y,S),be&&ki(y,N),k;if(S===null){for(;!C.done;N++,C=v.next())C=g(y,C.value,w),C!==null&&(d=o(C,d,N),T===null?k=C:T.sibling=C,T=C);return be&&ki(y,N),k}for(S=n(y,S);!C.done;N++,C=v.next())C=h(S,y,N,C.value,w),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?N:C.key),d=o(C,d,N),T===null?k=C:T.sibling=C,T=C);return t&&S.forEach(function(O){return e(y,O)}),be&&ki(y,N),k}function b(y,d,v,w){if(typeof v=="object"&&v!==null&&v.type===co&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case zs:e:{for(var k=v.key,T=d;T!==null;){if(T.key===k){if(k=v.type,k===co){if(T.tag===7){r(y,T.sibling),d=i(T,v.props.children),d.return=y,y=d;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===An&&Vp(k)===T.type){r(y,T.sibling),d=i(T,v.props),d.ref=ul(y,T,v),d.return=y,y=d;break e}r(y,T);break}else e(y,T);T=T.sibling}v.type===co?(d=Oi(v.props.children,y.mode,w,v.key),d.return=y,y=d):(w=ya(v.type,v.key,v.props,null,y.mode,w),w.ref=ul(y,d,v),w.return=y,y=w)}return l(y);case uo:e:{for(T=v.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){r(y,d.sibling),d=i(d,v.children||[]),d.return=y,y=d;break e}else{r(y,d);break}else e(y,d);d=d.sibling}d=tc(v,y.mode,w),d.return=y,y=d}return l(y);case An:return T=v._init,b(y,d,T(v._payload),w)}if(vl(v))return x(y,d,v,w);if(il(v))return m(y,d,v,w);$s(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(r(y,d.sibling),d=i(d,v),d.return=y,y=d):(r(y,d),d=ec(v,y.mode,w),d.return=y,y=d),l(y)):r(y,d)}return b}var Uo=mm(!0),vm=mm(!1),Ua=fi(null),$a=null,xo=null,af=null;function uf(){af=xo=$a=null}function cf(t){var e=Ua.current;ke(Ua),t._currentValue=e}function qc(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===r)break;t=t.return}}function Po(t,e){$a=t,af=xo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function Pr(t){var e=t._currentValue;if(af!==t)if(t={context:t,memoizedValue:e,next:null},xo===null){if($a===null)throw Error(M(308));xo=t,$a.dependencies={lanes:0,firstContext:t}}else xo=xo.next=t;return e}var Pi=null;function df(t){Pi===null?Pi=[t]:Pi.push(t)}function ym(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,df(e)):(r.next=i.next,i.next=r),e.interleaved=r,bn(t,n)}function bn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Fn=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,r){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,ae&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,bn(t,r)}return i=n.interleaved,i===null?(e.next=e,df(n)):(e.next=i.next,i.next=e),n.interleaved=e,bn(t,r)}function fa(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Kd(t,r)}}function Wp(t,e){var r=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?i=o=e:o=o.next=e}else i=o=e;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Va(t,e,r,n){var i=t.updateQueue;Fn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==l&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=a))}if(o!==null){var g=i.baseState;l=0,c=u=a=null,s=o;do{var f=s.lane,h=s.eventTime;if((n&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=t,m=s;switch(f=e,h=r,m.tag){case 1:if(x=m.payload,typeof x=="function"){g=x.call(h,g,f);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,f=typeof x=="function"?x.call(h,g,f):x,f==null)break e;g=Re({},g,f);break e;case 2:Fn=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=h,a=g):c=c.next=h,l|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(a=g),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Hi|=l,t.lanes=l,t.memoizedState=g}}function Hp(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(M(191,i));i.call(n)}}}var Ts={},nn=fi(Ts),os=fi(Ts),ls=fi(Ts);function ji(t){if(t===Ts)throw Error(M(174));return t}function pf(t,e){switch(_e(ls,e),_e(os,t),_e(nn,Ts),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zc(e,t)}ke(nn),_e(nn,e)}function $o(){ke(nn),ke(os),ke(ls)}function _m(t){ji(ls.current);var e=ji(nn.current),r=zc(e,t.type);e!==r&&(_e(os,t),_e(nn,r))}function hf(t){os.current===t&&(ke(nn),ke(os))}var Pe=fi(0);function Wa(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xu=[];function gf(){for(var t=0;t<Xu.length;t++)Xu[t]._workInProgressVersionPrimary=null;Xu.length=0}var pa=En.ReactCurrentDispatcher,Qu=En.ReactCurrentBatchConfig,Wi=0,Me=null,Je=null,lt=null,Ha=!1,Ml=!1,ss=0,My=0;function xt(){throw Error(M(321))}function mf(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Vr(t[r],e[r]))return!1;return!0}function vf(t,e,r,n,i,o){if(Wi=o,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=t===null||t.memoizedState===null?Ly:Ay,t=r(n,i),Ml){o=0;do{if(Ml=!1,ss=0,25<=o)throw Error(M(301));o+=1,lt=Je=null,e.updateQueue=null,pa.current=Fy,t=r(n,i)}while(Ml)}if(pa.current=Ya,e=Je!==null&&Je.next!==null,Wi=0,lt=Je=Me=null,Ha=!1,e)throw Error(M(300));return t}function yf(){var t=ss!==0;return ss=0,t}function Qr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Me.memoizedState=lt=t:lt=lt.next=t,lt}function jr(){if(Je===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=lt===null?Me.memoizedState:lt.next;if(e!==null)lt=e,Je=t;else{if(t===null)throw Error(M(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},lt===null?Me.memoizedState=lt=t:lt=lt.next=t}return lt}function as(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=jr(),r=e.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var n=Je,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=l=null,a=null,u=o;do{var c=u.lane;if((Wi&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:t(n,u.action);else{var g={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=g,l=n):a=a.next=g,Me.lanes|=c,Hi|=c}u=u.next}while(u!==null&&u!==o);a===null?l=n:a.next=s,Vr(n,e.memoizedState)||(Vt=!0),e.memoizedState=n,e.baseState=l,e.baseQueue=a,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do o=i.lane,Me.lanes|=o,Hi|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function qu(t){var e=jr(),r=e.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,o=e.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do o=t(o,l.action),l=l.next;while(l!==i);Vr(o,e.memoizedState)||(Vt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),r.lastRenderedState=o}return[o,n]}function wm(){}function km(t,e){var r=Me,n=jr(),i=e(),o=!Vr(n.memoizedState,i);if(o&&(n.memoizedState=i,Vt=!0),n=n.queue,xf(Tm.bind(null,r,n,t),[t]),n.getSnapshot!==e||o||lt!==null&&lt.memoizedState.tag&1){if(r.flags|=2048,us(9,bm.bind(null,r,n,i,e),void 0,null),st===null)throw Error(M(349));Wi&30||Sm(r,e,i)}return i}function Sm(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function bm(t,e,r,n){e.value=r,e.getSnapshot=n,Cm(e)&&Nm(t)}function Tm(t,e,r){return r(function(){Cm(e)&&Nm(t)})}function Cm(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Vr(t,r)}catch{return!0}}function Nm(t){var e=bn(t,1);e!==null&&$r(e,t,1,-1)}function Yp(t){var e=Qr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:t},e.queue=t,t=t.dispatch=Dy.bind(null,Me,t),[e.memoizedState,t]}function us(t,e,r,n){return t={tag:t,create:e,destroy:r,deps:n,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,e.lastEffect=t)),t}function Em(){return jr().memoizedState}function ha(t,e,r,n){var i=Qr();Me.flags|=t,i.memoizedState=us(1|e,r,void 0,n===void 0?null:n)}function mu(t,e,r,n){var i=jr();n=n===void 0?null:n;var o=void 0;if(Je!==null){var l=Je.memoizedState;if(o=l.destroy,n!==null&&mf(n,l.deps)){i.memoizedState=us(e,r,o,n);return}}Me.flags|=t,i.memoizedState=us(1|e,r,o,n)}function Gp(t,e){return ha(8390656,8,t,e)}function xf(t,e){return mu(2048,8,t,e)}function Pm(t,e){return mu(4,2,t,e)}function jm(t,e){return mu(4,4,t,e)}function zm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mm(t,e,r){return r=r!=null?r.concat([t]):null,mu(4,4,zm.bind(null,e,t),r)}function _f(){}function Rm(t,e){var r=jr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&mf(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function Om(t,e){var r=jr();e=e===void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&mf(e,n[1])?n[0]:(t=t(),r.memoizedState=[t,e],t)}function Dm(t,e,r){return Wi&21?(Vr(r,e)||(r=Bg(),Me.lanes|=r,Hi|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=r)}function Ry(t,e){var r=ge;ge=r!==0&&4>r?r:4,t(!0);var n=Qu.transition;Qu.transition={};try{t(!1),e()}finally{ge=r,Qu.transition=n}}function Lm(){return jr().memoizedState}function Oy(t,e,r){var n=ei(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Am(t))Fm(e,r);else if(r=ym(t,e,r,n),r!==null){var i=Lt();$r(r,t,n,i),Im(r,e,n)}}function Dy(t,e,r){var n=ei(t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Am(t))Fm(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,s=o(l,r);if(i.hasEagerState=!0,i.eagerState=s,Vr(s,l)){var a=e.interleaved;a===null?(i.next=i,df(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}r=ym(t,e,i,n),r!==null&&(i=Lt(),$r(r,t,n,i),Im(r,e,n))}}function Am(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function Fm(t,e){Ml=Ha=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Im(t,e,r){if(r&4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,Kd(t,r)}}var Ya={readContext:Pr,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},Ly={readContext:Pr,useCallback:function(t,e){return Qr().memoizedState=[t,e===void 0?null:e],t},useContext:Pr,useEffect:Gp,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,ha(4194308,4,zm.bind(null,e,t),r)},useLayoutEffect:function(t,e){return ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return ha(4,2,t,e)},useMemo:function(t,e){var r=Qr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=Qr();return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=Oy.bind(null,Me,t),[n.memoizedState,t]},useRef:function(t){var e=Qr();return t={current:t},e.memoizedState=t},useState:Yp,useDebugValue:_f,useDeferredValue:function(t){return Qr().memoizedState=t},useTransition:function(){var t=Yp(!1),e=t[0];return t=Ry.bind(null,t[1]),Qr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var n=Me,i=Qr();if(be){if(r===void 0)throw Error(M(407));r=r()}else{if(r=e(),st===null)throw Error(M(349));Wi&30||Sm(n,e,r)}i.memoizedState=r;var o={value:r,getSnapshot:e};return i.queue=o,Gp(Tm.bind(null,n,o,t),[t]),n.flags|=2048,us(9,bm.bind(null,n,o,r,e),void 0,null),r},useId:function(){var t=Qr(),e=st.identifierPrefix;if(be){var r=yn,n=vn;r=(n&~(1<<32-Ur(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=ss++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=My++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ay={readContext:Pr,useCallback:Rm,useContext:Pr,useEffect:xf,useImperativeHandle:Mm,useInsertionEffect:Pm,useLayoutEffect:jm,useMemo:Om,useReducer:Ku,useRef:Em,useState:function(){return Ku(as)},useDebugValue:_f,useDeferredValue:function(t){var e=jr();return Dm(e,Je.memoizedState,t)},useTransition:function(){var t=Ku(as)[0],e=jr().memoizedState;return[t,e]},useMutableSource:wm,useSyncExternalStore:km,useId:Lm,unstable_isNewReconciler:!1},Fy={readContext:Pr,useCallback:Rm,useContext:Pr,useEffect:xf,useImperativeHandle:Mm,useInsertionEffect:Pm,useLayoutEffect:jm,useMemo:Om,useReducer:qu,useRef:Em,useState:function(){return qu(as)},useDebugValue:_f,useDeferredValue:function(t){var e=jr();return Je===null?e.memoizedState=t:Dm(e,Je.memoizedState,t)},useTransition:function(){var t=qu(as)[0],e=jr().memoizedState;return[t,e]},useMutableSource:wm,useSyncExternalStore:km,useId:Lm,unstable_isNewReconciler:!1};function Fr(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Zc(t,e,r,n){e=t.memoizedState,r=r(n,e),r=r==null?e:Re({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var vu={isMounted:function(t){return(t=t._reactInternals)?qi(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var n=Lt(),i=ei(t),o=_n(n,i);o.payload=e,r!=null&&(o.callback=r),e=Zn(t,o,i),e!==null&&($r(e,t,i,n),fa(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=Lt(),i=ei(t),o=_n(n,i);o.tag=1,o.payload=e,r!=null&&(o.callback=r),e=Zn(t,o,i),e!==null&&($r(e,t,i,n),fa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Lt(),n=ei(t),i=_n(r,n);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,n),e!==null&&($r(e,t,n,r),fa(e,t,n))}};function Xp(t,e,r,n,i,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,l):e.prototype&&e.prototype.isPureReactComponent?!ts(r,n)||!ts(i,o):!0}function Bm(t,e,r){var n=!1,i=li,o=e.contextType;return typeof o=="object"&&o!==null?o=Pr(o):(i=Ht(e)?$i:Nt.current,n=e.contextTypes,o=(n=n!=null)?Io(t,i):li),e=new e(r,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Qp(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Jc(t,e,r,n){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},ff(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Pr(o):(o=Ht(e)?$i:Nt.current,i.context=Io(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Zc(t,e,o,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vu.enqueueReplaceState(i,i.state,null),Va(t,r,i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var r="",n=e;do r+=fv(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Zu(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Iy=typeof WeakMap=="function"?WeakMap:Map;function Um(t,e,r){r=_n(-1,r),r.tag=3,r.payload={element:null};var n=e.value;return r.callback=function(){Xa||(Xa=!0,cd=n),ed(t,e)},r}function $m(t,e,r){r=_n(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=function(){return n(i)},r.callback=function(){ed(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ed(t,e),typeof n!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),r}function Kp(t,e,r){var n=t.pingCache;if(n===null){n=t.pingCache=new Iy;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=Jy.bind(null,t,e,r),e.then(t,t))}function qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zp(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=_n(-1,1),e.tag=2,Zn(r,e,1))),r.lanes|=1),t)}var By=En.ReactCurrentOwner,Vt=!1;function Mt(t,e,r,n){e.child=t===null?vm(e,null,r,n):Uo(e,t.child,r,n)}function Jp(t,e,r,n,i){r=r.render;var o=e.ref;return Po(e,i),n=vf(t,e,r,n,o,i),r=yf(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(be&&r&&of(e),e.flags|=1,Mt(t,e,n,i),e.child)}function eh(t,e,r,n,i){if(t===null){var o=r.type;return typeof o=="function"&&!Ef(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=o,Vm(t,e,o,n,i)):(t=ya(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:ts,r(l,n)&&t.ref===e.ref)return Tn(t,e,i)}return e.flags|=1,t=ti(o,n),t.ref=e.ref,t.return=e,e.child=t}function Vm(t,e,r,n,i){if(t!==null){var o=t.memoizedProps;if(ts(o,n)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=n=o,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,Tn(t,e,i)}return td(t,e,r,n,i)}function Wm(t,e,r){var n=e.pendingProps,i=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(wo,rr),rr|=r;else{if(!(r&1073741824))return t=o!==null?o.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(wo,rr),rr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,_e(wo,rr),rr|=n}else o!==null?(n=o.baseLanes|r,e.memoizedState=null):n=r,_e(wo,rr),rr|=n;return Mt(t,e,i,r),e.child}function Hm(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,r,n,i){var o=Ht(r)?$i:Nt.current;return o=Io(e,o),Po(e,i),r=vf(t,e,r,n,o,i),n=yf(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tn(t,e,i)):(be&&n&&of(e),e.flags|=1,Mt(t,e,r,i),e.child)}function th(t,e,r,n,i){if(Ht(r)){var o=!0;Fa(e)}else o=!1;if(Po(e,i),e.stateNode===null)ga(t,e),Bm(e,r,n),Jc(e,r,n,i),n=!0;else if(t===null){var l=e.stateNode,s=e.memoizedProps;l.props=s;var a=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Pr(u):(u=Ht(r)?$i:Nt.current,u=Io(e,u));var c=r.getDerivedStateFromProps,g=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||a!==u)&&Qp(e,l,n,u),Fn=!1;var f=e.memoizedState;l.state=f,Va(e,n,l,i),a=e.memoizedState,s!==n||f!==a||Wt.current||Fn?(typeof c=="function"&&(Zc(e,r,c,n),a=e.memoizedState),(s=Fn||Xp(e,r,s,n,f,a,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=a),l.props=n,l.state=a,l.context=u,n=s):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{l=e.stateNode,xm(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Fr(e.type,s),l.props=u,g=e.pendingProps,f=l.context,a=r.contextType,typeof a=="object"&&a!==null?a=Pr(a):(a=Ht(r)?$i:Nt.current,a=Io(e,a));var h=r.getDerivedStateFromProps;(c=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||f!==a)&&Qp(e,l,n,a),Fn=!1,f=e.memoizedState,l.state=f,Va(e,n,l,i);var x=e.memoizedState;s!==g||f!==x||Wt.current||Fn?(typeof h=="function"&&(Zc(e,r,h,n),x=e.memoizedState),(u=Fn||Xp(e,r,u,n,f,x,a)||!1)?(c||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,x,a)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=x),l.props=n,l.state=x,l.context=a,n=u):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return rd(t,e,r,n,o,i)}function rd(t,e,r,n,i,o){Hm(t,e);var l=(e.flags&128)!==0;if(!n&&!l)return i&&Bp(e,r,!1),Tn(t,e,o);n=e.stateNode,By.current=e;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&l?(e.child=Uo(e,t.child,null,o),e.child=Uo(e,null,s,o)):Mt(t,e,s,o),e.memoizedState=n.state,i&&Bp(e,r,!0),e.child}function Ym(t){var e=t.stateNode;e.pendingContext?Ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ip(t,e.context,!1),pf(t,e.containerInfo)}function rh(t,e,r,n,i){return Bo(),sf(i),e.flags|=256,Mt(t,e,r,n),e.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gm(t,e,r){var n=e.pendingProps,i=Pe.current,o=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Pe,i&1),t===null)return Kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=n.children,t=n.fallback,o?(n=e.mode,o=e.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=_u(l,n,0,null),t=Oi(t,n,r,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=id(r),e.memoizedState=nd,t):wf(e,l));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Uy(t,e,l,n,s,i,r);if(o){o=n.fallback,l=e.mode,i=t.child,s=i.sibling;var a={mode:"hidden",children:n.children};return!(l&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=ti(i,a),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=ti(s,o):(o=Oi(o,l,r,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,l=t.child.memoizedState,l=l===null?id(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~r,e.memoizedState=nd,n}return o=t.child,t=o.sibling,n=ti(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n}function wf(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vs(t,e,r,n){return n!==null&&sf(n),Uo(e,t.child,null,r),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uy(t,e,r,n,i,o,l){if(r)return e.flags&256?(e.flags&=-257,n=Zu(Error(M(422))),Vs(t,e,l,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,i=e.mode,n=_u({mode:"visible",children:n.children},i,0,null),o=Oi(o,i,l,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&Uo(e,t.child,null,l),e.child.memoizedState=id(l),e.memoizedState=nd,o);if(!(e.mode&1))return Vs(t,e,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(M(419)),n=Zu(o,n,void 0),Vs(t,e,l,n)}if(s=(l&t.childLanes)!==0,Vt||s){if(n=st,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bn(t,i),$r(n,t,i,-1))}return Nf(),n=Zu(Error(M(421))),Vs(t,e,l,n)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ex.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,ar=qn(i.nextSibling),dr=e,be=!0,Br=null,t!==null&&(_r[wr++]=vn,_r[wr++]=yn,_r[wr++]=Vi,vn=t.id,yn=t.overflow,Vi=e),e=wf(e,n.children),e.flags|=4096,e)}function nh(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),qc(t.return,e,r)}function Ju(t,e,r,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Xm(t,e,r){var n=e.pendingProps,i=n.revealOrder,o=n.tail;if(Mt(t,e,n.children,r),n=Pe.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nh(t,r,e);else if(t.tag===19)nh(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(_e(Pe,n),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&Wa(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),Ju(e,!1,i,r,o);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wa(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Ju(e,!0,r,null,o);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tn(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Hi|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,r=ti(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=ti(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function $y(t,e,r){switch(e.tag){case 3:Ym(e),Bo();break;case 5:_m(e);break;case 1:Ht(e.type)&&Fa(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;_e(Ua,n._currentValue),n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(_e(Pe,Pe.current&1),e.flags|=128,null):r&e.child.childLanes?Gm(t,e,r):(_e(Pe,Pe.current&1),t=Tn(t,e,r),t!==null?t.sibling:null);_e(Pe,Pe.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return Xm(t,e,r);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Pe,Pe.current),n)break;return null;case 22:case 23:return e.lanes=0,Wm(t,e,r)}return Tn(t,e,r)}var Qm,od,Km,qm;Qm=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};od=function(){};Km=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,ji(nn.current);var o=null;switch(r){case"input":i=Nc(t,i),n=Nc(t,n),o=[];break;case"select":i=Re({},i,{value:void 0}),n=Re({},n,{value:void 0}),o=[];break;case"textarea":i=jc(t,i),n=jc(t,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=La)}Mc(r,n);var l;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xl.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var a=n[u];if(s=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(r||(r={}),r[l]=a[l])}else r||(o||(o=[]),o.push(u,r)),r=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xl.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&we("scroll",t),o||s===a||(o=[])):(o=o||[]).push(u,a))}r&&(o=o||[]).push("style",r);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};qm=function(t,e,r,n){r!==n&&(e.flags|=4)};function cl(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function Vy(t,e,r){var n=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Ht(e.type)&&Aa(),_t(e),null;case 3:return n=e.stateNode,$o(),ke(Wt),ke(Nt),gf(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Us(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Br!==null&&(pd(Br),Br=null))),od(t,e),_t(e),null;case 5:hf(e);var i=ji(ls.current);if(r=e.type,t!==null&&e.stateNode!=null)Km(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(M(166));return _t(e),null}if(t=ji(nn.current),Us(e)){n=e.stateNode,r=e.type;var o=e.memoizedProps;switch(n[Zr]=e,n[is]=o,t=(e.mode&1)!==0,r){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(i=0;i<xl.length;i++)we(xl[i],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":fp(n,o),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},we("invalid",n);break;case"textarea":hp(n,o),we("invalid",n)}Mc(r,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&Bs(n.textContent,s,t),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Bs(n.textContent,s,t),i=["children",""+s]):Xl.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&we("scroll",n)}switch(r){case"input":Ms(n),pp(n,o,!0);break;case"textarea":Ms(n),gp(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=La)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tg(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=l.createElement(r,{is:n.is}):(t=l.createElement(r),r==="select"&&(l=t,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):t=l.createElementNS(t,r),t[Zr]=e,t[is]=n,Qm(t,e,!1,!1),e.stateNode=t;e:{switch(l=Rc(r,n),r){case"dialog":we("cancel",t),we("close",t),i=n;break;case"iframe":case"object":case"embed":we("load",t),i=n;break;case"video":case"audio":for(i=0;i<xl.length;i++)we(xl[i],t);i=n;break;case"source":we("error",t),i=n;break;case"img":case"image":case"link":we("error",t),we("load",t),i=n;break;case"details":we("toggle",t),i=n;break;case"input":fp(t,n),i=Nc(t,n),we("invalid",t);break;case"option":i=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Re({},n,{value:void 0}),we("invalid",t);break;case"textarea":hp(t,n),i=jc(t,n),we("invalid",t);break;default:i=n}Mc(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Eg(t,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Cg(t,a)):o==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&Ql(t,a):typeof a=="number"&&Ql(t,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xl.hasOwnProperty(o)?a!=null&&o==="onScroll"&&we("scroll",t):a!=null&&Wd(t,o,a,l))}switch(r){case"input":Ms(t),pp(t,n,!1);break;case"textarea":Ms(t),gp(t);break;case"option":n.value!=null&&t.setAttribute("value",""+oi(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?To(t,!!n.multiple,o,!1):n.defaultValue!=null&&To(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=La)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)qm(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(M(166));if(r=ji(ls.current),ji(nn.current),Us(e)){if(n=e.stateNode,r=e.memoizedProps,n[Zr]=e,(o=n.nodeValue!==r)&&(t=dr,t!==null))switch(t.tag){case 3:Bs(n.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bs(n.nodeValue,r,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Zr]=e,e.stateNode=n}return _t(e),null;case 13:if(ke(Pe),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&ar!==null&&e.mode&1&&!(e.flags&128))gm(),Bo(),e.flags|=98560,o=!1;else if(o=Us(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(M(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[Zr]=e}else Bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),o=!1}else Br!==null&&(pd(Br),Br=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?tt===0&&(tt=3):Nf())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return $o(),od(t,e),t===null&&rs(e.stateNode.containerInfo),_t(e),null;case 10:return cf(e.type._context),_t(e),null;case 17:return Ht(e.type)&&Aa(),_t(e),null;case 19:if(ke(Pe),o=e.memoizedState,o===null)return _t(e),null;if(n=(e.flags&128)!==0,l=o.rendering,l===null)if(n)cl(o,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Wa(t),l!==null){for(e.flags|=128,cl(o,!1),n=l.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)o=r,t=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return _e(Pe,Pe.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ve()>Wo&&(e.flags|=128,n=!0,cl(o,!1),e.lanes=4194304)}else{if(!n)if(t=Wa(l),t!==null){if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),cl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!be)return _t(e),null}else 2*Ve()-o.renderingStartTime>Wo&&r!==1073741824&&(e.flags|=128,n=!0,cl(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(r=o.last,r!==null?r.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ve(),e.sibling=null,r=Pe.current,_e(Pe,n?r&1|2:r&1),e):(_t(e),null);case 22:case 23:return Cf(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?rr&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function Wy(t,e){switch(lf(e),e.tag){case 1:return Ht(e.type)&&Aa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $o(),ke(Wt),ke(Nt),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hf(e),null;case 13:if(ke(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Pe),null;case 4:return $o(),null;case 10:return cf(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var Ws=!1,St=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,L=null;function _o(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ae(t,e,n)}else r.current=null}function ld(t,e,r){try{r()}catch(n){Ae(t,e,n)}}var ih=!1;function Yy(t,e){if(Vc=Ra,t=rm(),nf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,s=-1,a=-1,u=0,c=0,g=t,f=null;t:for(;;){for(var h;g!==r||i!==0&&g.nodeType!==3||(s=l+i),g!==o||n!==0&&g.nodeType!==3||(a=l+n),g.nodeType===3&&(l+=g.nodeValue.length),(h=g.firstChild)!==null;)f=g,g=h;for(;;){if(g===t)break t;if(f===r&&++u===i&&(s=l),f===o&&++c===n&&(a=l),(h=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=h}r=s===-1||a===-1?null:{start:s,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wc={focusedElem:t,selectionRange:r},Ra=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,b=x.memoizedState,y=e.stateNode,d=y.getSnapshotBeforeUpdate(e.elementType===e.type?m:Fr(e.type,m),b);y.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(w){Ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return x=ih,ih=!1,x}function Rl(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&ld(e,r,o)}i=i.next}while(i!==n)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function sd(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Zm(t){var e=t.alternate;e!==null&&(t.alternate=null,Zm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zr],delete e[is],delete e[Gc],delete e[Ey],delete e[Py])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jm(t){return t.tag===5||t.tag===3||t.tag===4}function oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=La));else if(n!==4&&(t=t.child,t!==null))for(ad(t,e,r),t=t.sibling;t!==null;)ad(t,e,r),t=t.sibling}function ud(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(ud(t,e,r),t=t.sibling;t!==null;)ud(t,e,r),t=t.sibling}var dt=null,Ir=!1;function On(t,e,r){for(r=r.child;r!==null;)e0(t,e,r),r=r.sibling}function e0(t,e,r){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(cu,r)}catch{}switch(r.tag){case 5:St||_o(r,e);case 6:var n=dt,i=Ir;dt=null,On(t,e,r),dt=n,Ir=i,dt!==null&&(Ir?(t=dt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):dt.removeChild(r.stateNode));break;case 18:dt!==null&&(Ir?(t=dt,r=r.stateNode,t.nodeType===8?Yu(t.parentNode,r):t.nodeType===1&&Yu(t,r),Jl(t)):Yu(dt,r.stateNode));break;case 4:n=dt,i=Ir,dt=r.stateNode.containerInfo,Ir=!0,On(t,e,r),dt=n,Ir=i;break;case 0:case 11:case 14:case 15:if(!St&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ld(r,e,l),i=i.next}while(i!==n)}On(t,e,r);break;case 1:if(!St&&(_o(r,e),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Ae(r,e,s)}On(t,e,r);break;case 21:On(t,e,r);break;case 22:r.mode&1?(St=(n=St)||r.memoizedState!==null,On(t,e,r),St=n):On(t,e,r);break;default:On(t,e,r)}}function lh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Hy),e.forEach(function(n){var i=tx.bind(null,t,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Lr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,l=e,s=l;e:for(;s!==null;){switch(s.tag){case 5:dt=s.stateNode,Ir=!1;break e;case 3:dt=s.stateNode.containerInfo,Ir=!0;break e;case 4:dt=s.stateNode.containerInfo,Ir=!0;break e}s=s.return}if(dt===null)throw Error(M(160));e0(o,l,i),dt=null,Ir=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)t0(e,t),e=e.sibling}function t0(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lr(e,t),Xr(t),n&4){try{Rl(3,t,t.return),yu(3,t)}catch(m){Ae(t,t.return,m)}try{Rl(5,t,t.return)}catch(m){Ae(t,t.return,m)}}break;case 1:Lr(e,t),Xr(t),n&512&&r!==null&&_o(r,r.return);break;case 5:if(Lr(e,t),Xr(t),n&512&&r!==null&&_o(r,r.return),t.flags&32){var i=t.stateNode;try{Ql(i,"")}catch(m){Ae(t,t.return,m)}}if(n&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,l=r!==null?r.memoizedProps:o,s=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Sg(i,o),Rc(s,l);var u=Rc(s,o);for(l=0;l<a.length;l+=2){var c=a[l],g=a[l+1];c==="style"?Eg(i,g):c==="dangerouslySetInnerHTML"?Cg(i,g):c==="children"?Ql(i,g):Wd(i,c,g,u)}switch(s){case"input":Ec(i,o);break;case"textarea":bg(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?To(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?To(i,!!o.multiple,o.defaultValue,!0):To(i,!!o.multiple,o.multiple?[]:"",!1))}i[is]=o}catch(m){Ae(t,t.return,m)}}break;case 6:if(Lr(e,t),Xr(t),n&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(m){Ae(t,t.return,m)}}break;case 3:if(Lr(e,t),Xr(t),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Jl(e.containerInfo)}catch(m){Ae(t,t.return,m)}break;case 4:Lr(e,t),Xr(t);break;case 13:Lr(e,t),Xr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bf=Ve())),n&4&&lh(t);break;case 22:if(c=r!==null&&r.memoizedState!==null,t.mode&1?(St=(u=St)||c,Lr(e,t),St=u):Lr(e,t),Xr(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(g=L=c;L!==null;){switch(f=L,h=f.child,f.tag){case 0:case 11:case 14:case 15:Rl(4,f,f.return);break;case 1:_o(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){n=f,r=f.return;try{e=n,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(m){Ae(n,r,m)}}break;case 5:_o(f,f.return);break;case 22:if(f.memoizedState!==null){ah(g);continue}}h!==null?(h.return=f,L=h):ah(g)}c=c.sibling}e:for(c=null,g=t;;){if(g.tag===5){if(c===null){c=g;try{i=g.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ng("display",l))}catch(m){Ae(t,t.return,m)}}}else if(g.tag===6){if(c===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(m){Ae(t,t.return,m)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;c===g&&(c=null),g=g.return}c===g&&(c=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Lr(e,t),Xr(t),n&4&&lh(t);break;case 21:break;default:Lr(e,t),Xr(t)}}function Xr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Jm(r)){var n=r;break e}r=r.return}throw Error(M(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ql(i,""),n.flags&=-33);var o=oh(t);ud(t,o,i);break;case 3:case 4:var l=n.stateNode.containerInfo,s=oh(t);ad(t,s,l);break;default:throw Error(M(161))}}catch(a){Ae(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gy(t,e,r){L=t,r0(t)}function r0(t,e,r){for(var n=(t.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||Ws;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||St;s=Ws;var u=St;if(Ws=l,(St=a)&&!u)for(L=i;L!==null;)l=L,a=l.child,l.tag===22&&l.memoizedState!==null?uh(i):a!==null?(a.return=l,L=a):uh(i);for(;o!==null;)L=o,r0(o),o=o.sibling;L=i,Ws=s,St=u}sh(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):sh(t)}}function sh(t){for(;L!==null;){var e=L;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||yu(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!St)if(r===null)n.componentDidMount();else{var i=e.elementType===e.type?r.memoizedProps:Fr(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Hp(e,o,n);break;case 3:var l=e.updateQueue;if(l!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Hp(e,l,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var g=c.dehydrated;g!==null&&Jl(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}St||e.flags&512&&sd(e)}catch(f){Ae(e,e.return,f)}}if(e===t){L=null;break}if(r=e.sibling,r!==null){r.return=e.return,L=r;break}L=e.return}}function ah(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var r=e.sibling;if(r!==null){r.return=e.return,L=r;break}L=e.return}}function uh(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{yu(4,e)}catch(a){Ae(e,r,a)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(a){Ae(e,i,a)}}var o=e.return;try{sd(e)}catch(a){Ae(e,o,a)}break;case 5:var l=e.return;try{sd(e)}catch(a){Ae(e,l,a)}}}catch(a){Ae(e,e.return,a)}if(e===t){L=null;break}var s=e.sibling;if(s!==null){s.return=e.return,L=s;break}L=e.return}}var Xy=Math.ceil,Ga=En.ReactCurrentDispatcher,kf=En.ReactCurrentOwner,Nr=En.ReactCurrentBatchConfig,ae=0,st=null,Qe=null,pt=0,rr=0,wo=fi(0),tt=0,cs=null,Hi=0,xu=0,Sf=0,Ol=null,Ut=null,bf=0,Wo=1/0,fn=null,Xa=!1,cd=null,Jn=null,Hs=!1,$n=null,Qa=0,Dl=0,dd=null,ma=-1,va=0;function Lt(){return ae&6?Ve():ma!==-1?ma:ma=Ve()}function ei(t){return t.mode&1?ae&2&&pt!==0?pt&-pt:zy.transition!==null?(va===0&&(va=Bg()),va):(t=ge,t!==0||(t=window.event,t=t===void 0?16:Gg(t.type)),t):1}function $r(t,e,r,n){if(50<Dl)throw Dl=0,dd=null,Error(M(185));ks(t,r,n),(!(ae&2)||t!==st)&&(t===st&&(!(ae&2)&&(xu|=r),tt===4&&Bn(t,pt)),Yt(t,n),r===1&&ae===0&&!(e.mode&1)&&(Wo=Ve()+500,gu&&pi()))}function Yt(t,e){var r=t.callbackNode;zv(t,e);var n=Ma(t,t===st?pt:0);if(n===0)r!==null&&yp(r),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(r!=null&&yp(r),e===1)t.tag===0?jy(ch.bind(null,t)):fm(ch.bind(null,t)),Cy(function(){!(ae&6)&&pi()}),r=null;else{switch(Ug(n)){case 1:r=Qd;break;case 4:r=Fg;break;case 16:r=za;break;case 536870912:r=Ig;break;default:r=za}r=c0(r,n0.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function n0(t,e){if(ma=-1,va=0,ae&6)throw Error(M(327));var r=t.callbackNode;if(jo()&&t.callbackNode!==r)return null;var n=Ma(t,t===st?pt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Ka(t,n);else{e=n;var i=ae;ae|=2;var o=o0();(st!==t||pt!==e)&&(fn=null,Wo=Ve()+500,Ri(t,e));do try{qy();break}catch(s){i0(t,s)}while(!0);uf(),Ga.current=o,ae=i,Qe!==null?e=0:(st=null,pt=0,e=tt)}if(e!==0){if(e===2&&(i=Fc(t),i!==0&&(n=i,e=fd(t,i))),e===1)throw r=cs,Ri(t,0),Bn(t,n),Yt(t,Ve()),r;if(e===6)Bn(t,n);else{if(i=t.current.alternate,!(n&30)&&!Qy(i)&&(e=Ka(t,n),e===2&&(o=Fc(t),o!==0&&(n=o,e=fd(t,o))),e===1))throw r=cs,Ri(t,0),Bn(t,n),Yt(t,Ve()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(M(345));case 2:Si(t,Ut,fn);break;case 3:if(Bn(t,n),(n&130023424)===n&&(e=bf+500-Ve(),10<e)){if(Ma(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yc(Si.bind(null,t,Ut,fn),e);break}Si(t,Ut,fn);break;case 4:if(Bn(t,n),(n&4194240)===n)break;for(e=t.eventTimes,i=-1;0<n;){var l=31-Ur(n);o=1<<l,l=e[l],l>i&&(i=l),n&=~o}if(n=i,n=Ve()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Xy(n/1960))-n,10<n){t.timeoutHandle=Yc(Si.bind(null,t,Ut,fn),n);break}Si(t,Ut,fn);break;case 5:Si(t,Ut,fn);break;default:throw Error(M(329))}}}return Yt(t,Ve()),t.callbackNode===r?n0.bind(null,t):null}function fd(t,e){var r=Ol;return t.current.memoizedState.isDehydrated&&(Ri(t,e).flags|=256),t=Ka(t,e),t!==2&&(e=Ut,Ut=r,e!==null&&pd(e)),t}function pd(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function Qy(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Vr(o(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Sf,e&=~xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Ur(e),n=1<<r;t[r]=-1,e&=~n}}function ch(t){if(ae&6)throw Error(M(327));jo();var e=Ma(t,0);if(!(e&1))return Yt(t,Ve()),null;var r=Ka(t,e);if(t.tag!==0&&r===2){var n=Fc(t);n!==0&&(e=n,r=fd(t,n))}if(r===1)throw r=cs,Ri(t,0),Bn(t,e),Yt(t,Ve()),r;if(r===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Si(t,Ut,fn),Yt(t,Ve()),null}function Tf(t,e){var r=ae;ae|=1;try{return t(e)}finally{ae=r,ae===0&&(Wo=Ve()+500,gu&&pi())}}function Yi(t){$n!==null&&$n.tag===0&&!(ae&6)&&jo();var e=ae;ae|=1;var r=Nr.transition,n=ge;try{if(Nr.transition=null,ge=1,t)return t()}finally{ge=n,Nr.transition=r,ae=e,!(ae&6)&&pi()}}function Cf(){rr=wo.current,ke(wo)}function Ri(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Ty(r)),Qe!==null)for(r=Qe.return;r!==null;){var n=r;switch(lf(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Aa();break;case 3:$o(),ke(Wt),ke(Nt),gf();break;case 5:hf(n);break;case 4:$o();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:cf(n.type._context);break;case 22:case 23:Cf()}r=r.return}if(st=t,Qe=t=ti(t.current,null),pt=rr=e,tt=0,cs=null,Sf=xu=Hi=0,Ut=Ol=null,Pi!==null){for(e=0;e<Pi.length;e++)if(r=Pi[e],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=i,n.next=l}r.pending=n}Pi=null}return t}function i0(t,e){do{var r=Qe;try{if(uf(),pa.current=Ya,Ha){for(var n=Me.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ha=!1}if(Wi=0,lt=Je=Me=null,Ml=!1,ss=0,kf.current=null,r===null||r.return===null){tt=1,cs=e,Qe=null;break}e:{var o=t,l=r.return,s=r,a=e;if(e=pt,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=s,g=c.tag;if(!(c.mode&1)&&(g===0||g===11||g===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=qp(l);if(h!==null){h.flags&=-257,Zp(h,l,s,o,e),h.mode&1&&Kp(o,u,e),e=h,a=u;var x=e.updateQueue;if(x===null){var m=new Set;m.add(a),e.updateQueue=m}else x.add(a);break e}else{if(!(e&1)){Kp(o,u,e),Nf();break e}a=Error(M(426))}}else if(be&&s.mode&1){var b=qp(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Zp(b,l,s,o,e),sf(Vo(a,s));break e}}o=a=Vo(a,s),tt!==4&&(tt=2),Ol===null?Ol=[o]:Ol.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=Um(o,a,e);Wp(o,y);break e;case 1:s=a;var d=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Jn===null||!Jn.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=$m(o,s,e);Wp(o,w);break e}}o=o.return}while(o!==null)}s0(r)}catch(k){e=k,Qe===r&&r!==null&&(Qe=r=r.return);continue}break}while(!0)}function o0(){var t=Ga.current;return Ga.current=Ya,t===null?Ya:t}function Nf(){(tt===0||tt===3||tt===2)&&(tt=4),st===null||!(Hi&268435455)&&!(xu&268435455)||Bn(st,pt)}function Ka(t,e){var r=ae;ae|=2;var n=o0();(st!==t||pt!==e)&&(fn=null,Ri(t,e));do try{Ky();break}catch(i){i0(t,i)}while(!0);if(uf(),ae=r,Ga.current=n,Qe!==null)throw Error(M(261));return st=null,pt=0,tt}function Ky(){for(;Qe!==null;)l0(Qe)}function qy(){for(;Qe!==null&&!kv();)l0(Qe)}function l0(t){var e=u0(t.alternate,t,rr);t.memoizedProps=t.pendingProps,e===null?s0(t):Qe=e,kf.current=null}function s0(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=Wy(r,e),r!==null){r.flags&=32767,Qe=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Qe=null;return}}else if(r=Vy(r,e,rr),r!==null){Qe=r;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);tt===0&&(tt=5)}function Si(t,e,r){var n=ge,i=Nr.transition;try{Nr.transition=null,ge=1,Zy(t,e,r,n)}finally{Nr.transition=i,ge=n}return null}function Zy(t,e,r,n){do jo();while($n!==null);if(ae&6)throw Error(M(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(Mv(t,o),t===st&&(Qe=st=null,pt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Hs||(Hs=!0,c0(za,function(){return jo(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Nr.transition,Nr.transition=null;var l=ge;ge=1;var s=ae;ae|=4,kf.current=null,Yy(t,r),t0(r,t),yy(Wc),Ra=!!Vc,Wc=Vc=null,t.current=r,Gy(r),Sv(),ae=s,ge=l,Nr.transition=o}else t.current=r;if(Hs&&(Hs=!1,$n=t,Qa=i),o=t.pendingLanes,o===0&&(Jn=null),Cv(r.stateNode),Yt(t,Ve()),e!==null)for(n=t.onRecoverableError,r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Xa)throw Xa=!1,t=cd,cd=null,t;return Qa&1&&t.tag!==0&&jo(),o=t.pendingLanes,o&1?t===dd?Dl++:(Dl=0,dd=t):Dl=0,pi(),null}function jo(){if($n!==null){var t=Ug(Qa),e=Nr.transition,r=ge;try{if(Nr.transition=null,ge=16>t?16:t,$n===null)var n=!1;else{if(t=$n,$n=null,Qa=0,ae&6)throw Error(M(331));var i=ae;for(ae|=4,L=t.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Rl(8,c,o)}var g=c.child;if(g!==null)g.return=c,L=g;else for(;L!==null;){c=L;var f=c.sibling,h=c.return;if(Zm(c),c===u){L=null;break}if(f!==null){f.return=h,L=f;break}L=h}}}var x=o.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var b=m.sibling;m.sibling=null,m=b}while(m!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Rl(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,L=y;break e}L=o.return}}var d=t.current;for(L=d;L!==null;){l=L;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,L=v;else e:for(l=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:yu(9,s)}}catch(k){Ae(s,s.return,k)}if(s===l){L=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,L=w;break e}L=s.return}}if(ae=i,pi(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(cu,t)}catch{}n=!0}return n}finally{ge=r,Nr.transition=e}}return!1}function dh(t,e,r){e=Vo(r,e),e=Um(t,e,1),t=Zn(t,e,1),e=Lt(),t!==null&&(ks(t,1,e),Yt(t,e))}function Ae(t,e,r){if(t.tag===3)dh(t,t,r);else for(;e!==null;){if(e.tag===3){dh(e,t,r);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Jn===null||!Jn.has(n))){t=Vo(r,t),t=$m(e,t,1),e=Zn(e,t,1),t=Lt(),e!==null&&(ks(e,1,t),Yt(e,t));break}}e=e.return}}function Jy(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&r,st===t&&(pt&r)===r&&(tt===4||tt===3&&(pt&130023424)===pt&&500>Ve()-bf?Ri(t,0):Sf|=r),Yt(t,e)}function a0(t,e){e===0&&(t.mode&1?(e=Ds,Ds<<=1,!(Ds&130023424)&&(Ds=4194304)):e=1);var r=Lt();t=bn(t,e),t!==null&&(ks(t,e,r),Yt(t,r))}function ex(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),a0(t,r)}function tx(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(e),a0(t,r)}var u0;u0=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Wt.current)Vt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Vt=!1,$y(t,e,r);Vt=!!(t.flags&131072)}else Vt=!1,be&&e.flags&1048576&&pm(e,Ba,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;ga(t,e),t=e.pendingProps;var i=Io(e,Nt.current);Po(e,r),i=vf(null,e,n,t,i,r);var o=yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(n)?(o=!0,Fa(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ff(e),i.updater=vu,e.stateNode=i,i._reactInternals=e,Jc(e,n,t,r),e=rd(null,e,n,!0,o,r)):(e.tag=0,be&&o&&of(e),Mt(null,e,i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(ga(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),e.type=n,i=e.tag=nx(n),t=Fr(n,t),i){case 0:e=td(null,e,n,t,r);break e;case 1:e=th(null,e,n,t,r);break e;case 11:e=Jp(null,e,n,t,r);break e;case 14:e=eh(null,e,n,Fr(n.type,t),r);break e}throw Error(M(306,n,""))}return e;case 0:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Fr(n,i),td(t,e,n,i,r);case 1:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Fr(n,i),th(t,e,n,i,r);case 3:e:{if(Ym(e),t===null)throw Error(M(387));n=e.pendingProps,o=e.memoizedState,i=o.element,xm(t,e),Va(e,n,null,r);var l=e.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Vo(Error(M(423)),e),e=rh(t,e,n,r,i);break e}else if(n!==i){i=Vo(Error(M(424)),e),e=rh(t,e,n,r,i);break e}else for(ar=qn(e.stateNode.containerInfo.firstChild),dr=e,be=!0,Br=null,r=vm(e,null,n,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Bo(),n===i){e=Tn(t,e,r);break e}Mt(t,e,n,r)}e=e.child}return e;case 5:return _m(e),t===null&&Kc(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,l=i.children,Hc(n,i)?l=null:o!==null&&Hc(n,o)&&(e.flags|=32),Hm(t,e),Mt(t,e,l,r),e.child;case 6:return t===null&&Kc(e),null;case 13:return Gm(t,e,r);case 4:return pf(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Uo(e,null,n,r):Mt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Fr(n,i),Jp(t,e,n,i,r);case 7:return Mt(t,e,e.pendingProps,r),e.child;case 8:return Mt(t,e,e.pendingProps.children,r),e.child;case 12:return Mt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(n=e.type._context,i=e.pendingProps,o=e.memoizedProps,l=i.value,_e(Ua,n._currentValue),n._currentValue=l,o!==null)if(Vr(o.value,l)){if(o.children===i.children&&!Wt.current){e=Tn(t,e,r);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===n){if(o.tag===1){a=_n(-1,r&-r),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),qc(o.return,r,e),s.lanes|=r;break}a=a.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(M(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),qc(l,r,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Mt(t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,Po(e,r),i=Pr(i),n=n(i),e.flags|=1,Mt(t,e,n,r),e.child;case 14:return n=e.type,i=Fr(n,e.pendingProps),i=Fr(n.type,i),eh(t,e,n,i,r);case 15:return Vm(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,i=e.elementType===n?i:Fr(n,i),ga(t,e),e.tag=1,Ht(n)?(t=!0,Fa(e)):t=!1,Po(e,r),Bm(e,n,i),Jc(e,n,i,r),rd(null,e,n,!0,t,r);case 19:return Xm(t,e,r);case 22:return Wm(t,e,r)}throw Error(M(156,e.tag))};function c0(t,e){return Ag(t,e)}function rx(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(t,e,r,n){return new rx(t,e,r,n)}function Ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nx(t){if(typeof t=="function")return Ef(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Gd)return 14}return 2}function ti(t,e){var r=t.alternate;return r===null?(r=br(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function ya(t,e,r,n,i,o){var l=2;if(n=t,typeof t=="function")Ef(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case co:return Oi(r.children,i,o,e);case Hd:l=8,i|=8;break;case Sc:return t=br(12,r,e,i|2),t.elementType=Sc,t.lanes=o,t;case bc:return t=br(13,r,e,i),t.elementType=bc,t.lanes=o,t;case Tc:return t=br(19,r,e,i),t.elementType=Tc,t.lanes=o,t;case _g:return _u(r,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yg:l=10;break e;case xg:l=9;break e;case Yd:l=11;break e;case Gd:l=14;break e;case An:l=16,n=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=br(l,r,e,i),e.elementType=t,e.type=n,e.lanes=o,e}function Oi(t,e,r,n){return t=br(7,t,n,e),t.lanes=r,t}function _u(t,e,r,n){return t=br(22,t,n,e),t.elementType=_g,t.lanes=r,t.stateNode={isHidden:!1},t}function ec(t,e,r){return t=br(6,t,null,e),t.lanes=r,t}function tc(t,e,r){return e=br(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ix(t,e,r,n,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pf(t,e,r,n,i,o,l,s,a){return t=new ix(t,e,r,s,a),e===1?(e=1,o===!0&&(e|=8)):e=0,o=br(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(o),t}function ox(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:uo,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function d0(t){if(!t)return li;t=t._reactInternals;e:{if(qi(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var r=t.type;if(Ht(r))return dm(t,r,e)}return e}function f0(t,e,r,n,i,o,l,s,a){return t=Pf(r,n,!0,t,i,o,l,s,a),t.context=d0(null),r=t.current,n=Lt(),i=ei(r),o=_n(n,i),o.callback=e??null,Zn(r,o,i),t.current.lanes=i,ks(t,i,n),Yt(t,n),t}function wu(t,e,r,n){var i=e.current,o=Lt(),l=ei(i);return r=d0(r),e.context===null?e.context=r:e.pendingContext=r,e=_n(o,l),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=Zn(i,e,l),t!==null&&($r(t,i,l,o),fa(t,i,l)),l}function qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function jf(t,e){fh(t,e),(t=t.alternate)&&fh(t,e)}function lx(){return null}var p0=typeof reportError=="function"?reportError:function(t){console.error(t)};function zf(t){this._internalRoot=t}ku.prototype.render=zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));wu(t,e,null,null)};ku.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yi(function(){wu(null,t,null,null)}),e[Sn]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wg();t={blockedOn:null,target:t,priority:e};for(var r=0;r<In.length&&e!==0&&e<In[r].priority;r++);In.splice(r,0,t),r===0&&Yg(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ph(){}function sx(t,e,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var u=qa(l);o.call(u)}}var l=f0(e,n,t,0,null,!1,!1,"",ph);return t._reactRootContainer=l,t[Sn]=l.current,rs(t.nodeType===8?t.parentNode:t),Yi(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=qa(a);s.call(u)}}var a=Pf(t,0,!1,null,null,!1,!1,"",ph);return t._reactRootContainer=a,t[Sn]=a.current,rs(t.nodeType===8?t.parentNode:t),Yi(function(){wu(e,a,r,n)}),a}function bu(t,e,r,n,i){var o=r._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=qa(l);s.call(a)}}wu(e,l,t,i)}else l=sx(r,e,t,i,n);return qa(l)}$g=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=yl(e.pendingLanes);r!==0&&(Kd(e,r|1),Yt(e,Ve()),!(ae&6)&&(Wo=Ve()+500,pi()))}break;case 13:Yi(function(){var n=bn(t,1);if(n!==null){var i=Lt();$r(n,t,1,i)}}),jf(t,1)}};qd=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var r=Lt();$r(e,t,134217728,r)}jf(t,134217728)}};Vg=function(t){if(t.tag===13){var e=ei(t),r=bn(t,e);if(r!==null){var n=Lt();$r(r,t,e,n)}jf(t,e)}};Wg=function(){return ge};Hg=function(t,e){var r=ge;try{return ge=t,e()}finally{ge=r}};Dc=function(t,e,r){switch(e){case"input":if(Ec(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=hu(n);if(!i)throw Error(M(90));kg(n),Ec(n,i)}}}break;case"textarea":bg(t,r);break;case"select":e=r.value,e!=null&&To(t,!!r.multiple,e,!1)}};zg=Tf;Mg=Yi;var ax={usingClientEntryPoint:!1,Events:[bs,go,hu,Pg,jg,Tf]},dl={findFiberByHostInstance:Ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ux={bundleType:dl.bundleType,version:dl.version,rendererPackageName:dl.rendererPackageName,rendererConfig:dl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dg(t),t===null?null:t.stateNode},findFiberByHostInstance:dl.findFiberByHostInstance||lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{cu=Ys.inject(ux),rn=Ys}catch{}}mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax;mr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(M(200));return ox(t,e,null,r)};mr.createRoot=function(t,e){if(!Mf(t))throw Error(M(299));var r=!1,n="",i=p0;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pf(t,1,!1,null,null,r,!1,n,i),t[Sn]=e.current,rs(t.nodeType===8?t.parentNode:t),new zf(e)};mr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=Dg(e),t=t===null?null:t.stateNode,t};mr.flushSync=function(t){return Yi(t)};mr.hydrate=function(t,e,r){if(!Su(e))throw Error(M(200));return bu(null,t,e,!0,r)};mr.hydrateRoot=function(t,e,r){if(!Mf(t))throw Error(M(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",l=p0;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),e=f0(e,null,t,1,r??null,i,!1,o,l),t[Sn]=e.current,rs(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.push(r,i);return new ku(e)};mr.render=function(t,e,r){if(!Su(e))throw Error(M(200));return bu(null,t,e,!1,r)};mr.unmountComponentAtNode=function(t){if(!Su(t))throw Error(M(40));return t._reactRootContainer?(Yi(function(){bu(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};mr.unstable_batchedUpdates=Tf;mr.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!Su(r))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return bu(t,e,r,!1,n)};mr.version="18.3.1-next-f1338f8080-20240426";function h0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)}catch(t){console.error(t)}}h0(),hg.exports=mr;var cx=hg.exports,hh=cx;wc.createRoot=hh.createRoot,wc.hydrateRoot=hh.hydrateRoot;function pn(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ds={duration:.5,overwrite:!1,delay:0},Rf,ht,Te,Tr=1e8,xe=1/Tr,hd=Math.PI*2,dx=hd/4,fx=0,m0=Math.sqrt,px=Math.cos,hx=Math.sin,at=function(e){return typeof e=="string"},Fe=function(e){return typeof e=="function"},Cn=function(e){return typeof e=="number"},Of=function(e){return typeof e>"u"},ln=function(e){return typeof e=="object"},Gt=function(e){return e!==!1},Df=function(){return typeof window<"u"},Gs=function(e){return Fe(e)||at(e)},v0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ct=Array.isArray,gx=/random\([^)]+\)/g,mx=/,\s*/g,gh=/(?:-?\.?\d|\.)+/gi,y0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ko=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,x0=/[+-]=-?[.\d]+/,vx=/[^,'"\[\]\s]+/gi,yx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,je,Kr,gd,Lf,hr={},Za={},_0,w0=function(e){return(Za=Ho(e,hr))&&qt},Af=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},fs=function(e,r){return!r&&console.warn(e)},k0=function(e,r){return e&&(hr[e]=r)&&Za&&(Za[e]=r)||hr},ps=function(){return 0},xx={suppressEvents:!0,isStart:!0,kill:!1},xa={suppressEvents:!0,kill:!1},_x={suppressEvents:!0},Ff={},ri=[],md={},S0,ir={},nc={},mh=30,_a=[],If="",Bf=function(e){var r=e[0],n,i;if(ln(r)||Fe(r)||(e=[e]),!(n=(r._gsap||{}).harness)){for(i=_a.length;i--&&!_a[i].targetTest(r););n=_a[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new H0(e[i],n)))||e.splice(i,1);return e},Di=function(e){return e._gsap||Bf(Cr(e))[0]._gsap},b0=function(e,r,n){return(n=e[r])&&Fe(n)?e[r]():Of(n)&&e.getAttribute&&e.getAttribute(r)||n},Xt=function(e,r){return(e=e.split(",")).forEach(r)||e},$e=function(e){return Math.round(e*1e5)/1e5||0},Ee=function(e){return Math.round(e*1e7)/1e7||0},zo=function(e,r){var n=r.charAt(0),i=parseFloat(r.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},wx=function(e,r){for(var n=r.length,i=0;e.indexOf(r[i])<0&&++i<n;);return i<n},Ja=function(){var e=ri.length,r=ri.slice(0),n,i;for(md={},ri.length=0,n=0;n<e;n++)i=r[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Uf=function(e){return!!(e._initted||e._startAt||e.add)},T0=function(e,r,n,i){ri.length&&!ht&&Ja(),e.render(r,n,!!(ht&&r<0&&Uf(e))),ri.length&&!ht&&Ja()},C0=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(vx).length<2?r:at(e)?e.trim():e},N0=function(e){return e},gr=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},kx=function(e){return function(r,n){for(var i in n)i in r||i==="duration"&&e||i==="ease"||(r[i]=n[i])}},Ho=function(e,r){for(var n in r)e[n]=r[n];return e},vh=function t(e,r){for(var n in r)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ln(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},eu=function(e,r){var n={},i;for(i in e)i in r||(n[i]=e[i]);return n},Ll=function(e){var r=e.parent||je,n=e.keyframes?kx(Ct(e.keyframes)):gr;if(Gt(e.inherit))for(;r;)n(e,r.vars.defaults),r=r.parent||r._dp;return e},Sx=function(e,r){for(var n=e.length,i=n===r.length;i&&n--&&e[n]===r[n];);return n<0},E0=function(e,r,n,i,o){var l=e[i],s;if(o)for(s=r[o];l&&l[o]>s;)l=l._prev;return l?(r._next=l._next,l._next=r):(r._next=e[n],e[n]=r),r._next?r._next._prev=r:e[i]=r,r._prev=l,r.parent=r._dp=e,r},Tu=function(e,r,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=r._prev,l=r._next;o?o._next=l:e[n]===r&&(e[n]=l),l?l._prev=o:e[i]===r&&(e[i]=o),r._next=r._prev=r.parent=null},si=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Li=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bx=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},vd=function(e,r,n,i){return e._startAt&&(ht?e._startAt.revert(xa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,i))},Tx=function t(e){return!e||e._ts&&t(e.parent)},yh=function(e){return e._repeat?Yo(e._tTime,e=e.duration()+e._rDelay)*e:0},Yo=function(e,r){var n=Math.floor(e=Ee(e/r));return e&&n===e?n-1:n},tu=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Cu=function(e){return e._end=Ee(e._start+(e._tDur/Math.abs(e._ts||e._rts||xe)||0))},Nu=function(e,r){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ee(n._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),Cu(e),n._dirty||Li(n,e)),e},P0=function(e,r){var n;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(n=tu(e.rawTime(),r),(!r._dur||Cs(0,r.totalDuration(),n)-r._tTime>xe)&&r.render(n,!0)),Li(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xe}},Jr=function(e,r,n,i){return r.parent&&si(r),r._start=Ee((Cn(n)?n:n||e!==je?xr(e,n,r):e._time)+r._delay),r._end=Ee(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),E0(e,r,"_first","_last",e._sort?"_start":0),yd(r)||(e._recent=r),i||P0(e,r),e._ts<0&&Nu(e,e._tTime),e},j0=function(e,r){return(hr.ScrollTrigger||Af("scrollTrigger",r))&&hr.ScrollTrigger.create(r,e)},z0=function(e,r,n,i,o){if(Vf(e,r,o),!e._initted)return 1;if(!n&&e._pt&&!ht&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&S0!==lr.frame)return ri.push(e),e._lazy=[o,i],1},Cx=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||t(r))},yd=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},Nx=function(e,r,n,i){var o=e.ratio,l=r<0||!r&&(!e._start&&Cx(e)&&!(!e._initted&&yd(e))||(e._ts<0||e._dp._ts<0)&&!yd(e))?0:1,s=e._rDelay,a=0,u,c,g;if(s&&e._repeat&&(a=Cs(0,e._tDur,r),c=Yo(a,s),e._yoyo&&c&1&&(l=1-l),c!==Yo(e._tTime,s)&&(o=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==o||ht||i||e._zTime===xe||!r&&e._zTime){if(!e._initted&&z0(e,r,i,n,a))return;for(g=e._zTime,e._zTime=r||(n?xe:0),n||(n=r&&!g),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=a,u=e._pt;u;)u.r(l,u.d),u=u._next;r<0&&vd(e,r,n,!0),e._onUpdate&&!n&&ur(e,"onUpdate"),a&&e._repeat&&!n&&e.parent&&ur(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===l&&(l&&si(e,1),!n&&!ht&&(ur(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},Ex=function(e,r,n){var i;if(n>r)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>r)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<r)return i;i=i._prev}},Go=function(e,r,n,i){var o=e._repeat,l=Ee(r)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=l/e._dur),e._dur=l,e._tDur=o?o<0?1e10:Ee(l*(o+1)+e._rDelay*o):l,s>0&&!i&&Nu(e,e._tTime=e._tDur*s),e.parent&&Cu(e),n||Li(e.parent,e),e},xh=function(e){return e instanceof $t?Li(e):Go(e,e._dur)},Px={_start:0,endTime:ps,totalDuration:ps},xr=function t(e,r,n){var i=e.labels,o=e._recent||Px,l=e.duration()>=Tr?o.endTime(!1):e._dur,s,a,u;return at(r)&&(isNaN(r)||r in i)?(a=r.charAt(0),u=r.substr(-1)==="%",s=r.indexOf("="),a==="<"||a===">"?(s>=0&&(r=r.replace(/=/,"")),(a==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(r.substr(1))||0)*(u?(s<0?o:n).totalDuration()/100:1)):s<0?(r in i||(i[r]=l),i[r]):(a=parseFloat(r.charAt(s-1)+r.substr(s+1)),u&&n&&(a=a/100*(Ct(n)?n[0]:n).totalDuration()),s>1?t(e,r.substr(0,s-1),n)+a:l+a)):r==null?l:+r},Al=function(e,r,n){var i=Cn(r[1]),o=(i?2:1)+(e<2?0:1),l=r[o],s,a;if(i&&(l.duration=r[1]),l.parent=n,e){for(s=l,a=n;a&&!("immediateRender"in s);)s=a.vars.defaults||{},a=Gt(a.vars.inherit)&&a.parent;l.immediateRender=Gt(s.immediateRender),e<2?l.runBackwards=1:l.startAt=r[o-1]}return new Xe(r[0],l,r[o+1])},hi=function(e,r){return e||e===0?r(e):r},Cs=function(e,r,n){return n<e?e:n>r?r:n},bt=function(e,r){return!at(e)||!(r=yx.exec(e))?"":r[1]},jx=function(e,r,n){return hi(n,function(i){return Cs(e,r,i)})},xd=[].slice,M0=function(e,r){return e&&ln(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&ln(e[0]))&&!e.nodeType&&e!==Kr},zx=function(e,r,n){return n===void 0&&(n=[]),e.forEach(function(i){var o;return at(i)&&!r||M0(i,1)?(o=n).push.apply(o,Cr(i)):n.push(i)})||n},Cr=function(e,r,n){return Te&&!r&&Te.selector?Te.selector(e):at(e)&&!n&&(gd||!Xo())?xd.call((r||Lf).querySelectorAll(e),0):Ct(e)?zx(e,n):M0(e)?xd.call(e,0):e?[e]:[]},_d=function(e){return e=Cr(e)[0]||fs("Invalid scope")||{},function(r){var n=e.current||e.nativeElement||e;return Cr(r,n.querySelectorAll?n:n===e?fs("Invalid scope")||Lf.createElement("div"):e)}},R0=function(e){return e.sort(function(){return .5-Math.random()})},O0=function(e){if(Fe(e))return e;var r=ln(e)?e:{each:e},n=Ai(r.ease),i=r.from||0,o=parseFloat(r.base)||0,l={},s=i>0&&i<1,a=isNaN(i)||s,u=r.axis,c=i,g=i;return at(i)?c=g={center:.5,edges:.5,end:1}[i]||0:!s&&a&&(c=i[0],g=i[1]),function(f,h,x){var m=(x||r).length,b=l[m],y,d,v,w,k,T,S,N,j;if(!b){if(j=r.grid==="auto"?0:(r.grid||[1,Tr])[1],!j){for(S=-Tr;S<(S=x[j++].getBoundingClientRect().left)&&j<m;);j<m&&j--}for(b=l[m]=[],y=a?Math.min(j,m)*c-.5:i%j,d=j===Tr?0:a?m*g/j-.5:i/j|0,S=0,N=Tr,T=0;T<m;T++)v=T%j-y,w=d-(T/j|0),b[T]=k=u?Math.abs(u==="y"?w:v):m0(v*v+w*w),k>S&&(S=k),k<N&&(N=k);i==="random"&&R0(b),b.max=S-N,b.min=N,b.v=m=(parseFloat(r.amount)||parseFloat(r.each)*(j>m?m-1:u?u==="y"?m/j:j:Math.max(j,m/j))||0)*(i==="edges"?-1:1),b.b=m<0?o-m:o,b.u=bt(r.amount||r.each)||0,n=n&&m<0?Wx(n):n}return m=(b[f]-b.min)/b.max||0,Ee(b.b+(n?n(m):m)*b.v)+b.u}},wd=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ee(Math.round(parseFloat(n)/e)*e*r);return(i-i%1)/r+(Cn(n)?0:bt(n))}},D0=function(e,r){var n=Ct(e),i,o;return!n&&ln(e)&&(i=n=e.radius||Tr,e.values?(e=Cr(e.values),(o=!Cn(e[0]))&&(i*=i)):e=wd(e.increment)),hi(r,n?Fe(e)?function(l){return o=e(l),Math.abs(o-l)<=i?o:l}:function(l){for(var s=parseFloat(o?l.x:l),a=parseFloat(o?l.y:0),u=Tr,c=0,g=e.length,f,h;g--;)o?(f=e[g].x-s,h=e[g].y-a,f=f*f+h*h):f=Math.abs(e[g]-s),f<u&&(u=f,c=g);return c=!i||u<=i?e[c]:l,o||c===l||Cn(l)?c:c+bt(l)}:wd(e))},L0=function(e,r,n,i){return hi(Ct(e)?!r:n===!0?!!(n=0):!i,function(){return Ct(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(r-e+n*.99))/n)*n*i)/i})},Mx=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){return r.reduce(function(o,l){return l(o)},i)}},Rx=function(e,r){return function(n){return e(parseFloat(n))+(r||bt(n))}},Ox=function(e,r,n){return F0(e,r,0,1,n)},A0=function(e,r,n){return hi(n,function(i){return e[~~r(i)]})},Dx=function t(e,r,n){var i=r-e;return Ct(e)?A0(e,t(0,e.length),r):hi(n,function(o){return(i+(o-e)%i)%i+e})},Lx=function t(e,r,n){var i=r-e,o=i*2;return Ct(e)?A0(e,t(0,e.length-1),r):hi(n,function(l){return l=(o+(l-e)%o)%o||0,e+(l>i?o-l:l)})},hs=function(e){return e.replace(gx,function(r){var n=r.indexOf("[")+1,i=r.substring(n||7,n?r.indexOf("]"):r.length-1).split(mx);return L0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},F0=function(e,r,n,i,o){var l=r-e,s=i-n;return hi(o,function(a){return n+((a-e)/l*s||0)})},Ax=function t(e,r,n,i){var o=isNaN(e+r)?0:function(h){return(1-h)*e+h*r};if(!o){var l=at(e),s={},a,u,c,g,f;if(n===!0&&(i=1)&&(n=null),l)e={p:e},r={p:r};else if(Ct(e)&&!Ct(r)){for(c=[],g=e.length,f=g-2,u=1;u<g;u++)c.push(t(e[u-1],e[u]));g--,o=function(x){x*=g;var m=Math.min(f,~~x);return c[m](x-m)},n=r}else i||(e=Ho(Ct(e)?[]:{},e));if(!c){for(a in r)$f.call(s,e,a,"get",r[a]);o=function(x){return Yf(x,s)||(l?e.p:e)}}}return hi(n,o)},_h=function(e,r,n){var i=e.labels,o=Tr,l,s,a;for(l in i)s=i[l]-r,s<0==!!n&&s&&o>(s=Math.abs(s))&&(a=l,o=s);return a},ur=function(e,r,n){var i=e.vars,o=i[r],l=Te,s=e._ctx,a,u,c;if(o)return a=i[r+"Params"],u=i.callbackScope||e,n&&ri.length&&Ja(),s&&(Te=s),c=a?o.apply(u,a):o.call(u),Te=l,c},_l=function(e){return si(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ht),e.progress()<1&&ur(e,"onInterrupt"),e},So,I0=[],B0=function(e){if(e)if(e=!e.name&&e.default||e,Df()||e.headless){var r=e.name,n=Fe(e),i=r&&!n&&e.init?function(){this._props=[]}:e,o={init:ps,render:Yf,add:$f,kill:e_,modifier:Jx,rawVars:0},l={targetTest:0,get:0,getSetter:Hf,aliases:{},register:0};if(Xo(),e!==i){if(ir[r])return;gr(i,gr(eu(e,o),l)),Ho(i.prototype,Ho(o,eu(e,l))),ir[i.prop=r]=i,e.targetTest&&(_a.push(i),Ff[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}k0(r,i),e.register&&e.register(qt,i,Qt)}else I0.push(e)},ye=255,wl={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},ic=function(e,r,n){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(n-r)*e*6:e<.5?n:e*3<2?r+(n-r)*(2/3-e)*6:r)*ye+.5|0},U0=function(e,r,n){var i=e?Cn(e)?[e>>16,e>>8&ye,e&ye]:0:wl.black,o,l,s,a,u,c,g,f,h,x;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),wl[e])i=wl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),l=e.charAt(2),s=e.charAt(3),e="#"+o+o+l+l+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ye,e&ye]}else if(e.substr(0,3)==="hsl"){if(i=x=e.match(gh),!r)a=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,l=c<=.5?c*(u+1):c+u-c*u,o=c*2-l,i.length>3&&(i[3]*=1),i[0]=ic(a+1/3,o,l),i[1]=ic(a,o,l),i[2]=ic(a-1/3,o,l);else if(~e.indexOf("="))return i=e.match(y0),n&&i.length<4&&(i[3]=1),i}else i=e.match(gh)||wl.transparent;i=i.map(Number)}return r&&!x&&(o=i[0]/ye,l=i[1]/ye,s=i[2]/ye,g=Math.max(o,l,s),f=Math.min(o,l,s),c=(g+f)/2,g===f?a=u=0:(h=g-f,u=c>.5?h/(2-g-f):h/(g+f),a=g===o?(l-s)/h+(l<s?6:0):g===l?(s-o)/h+2:(o-l)/h+4,a*=60),i[0]=~~(a+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},$0=function(e){var r=[],n=[],i=-1;return e.split(ni).forEach(function(o){var l=o.match(ko)||[];r.push.apply(r,l),n.push(i+=l.length+1)}),r.c=n,r},wh=function(e,r,n){var i="",o=(e+i).match(ni),l=r?"hsla(":"rgba(",s=0,a,u,c,g;if(!o)return e;if(o=o.map(function(f){return(f=U0(f,r,1))&&l+(r?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(c=$0(e),a=n.c,a.join(i)!==c.c.join(i)))for(u=e.replace(ni,"1").split(ko),g=u.length-1;s<g;s++)i+=u[s]+(~a.indexOf(s)?o.shift()||l+"0,0,0,0)":(c.length?c:o.length?o:n).shift());if(!u)for(u=e.split(ni),g=u.length-1;s<g;s++)i+=u[s]+o[s];return i+u[g]},ni=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in wl)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),Fx=/hsl[a]?\(/,V0=function(e){var r=e.join(" "),n;if(ni.lastIndex=0,ni.test(r))return n=Fx.test(r),e[1]=wh(e[1],n),e[0]=wh(e[0],n,$0(e[1])),!0},gs,lr=function(){var t=Date.now,e=500,r=33,n=t(),i=n,o=1e3/240,l=o,s=[],a,u,c,g,f,h,x=function m(b){var y=t()-i,d=b===!0,v,w,k,T;if((y>e||y<0)&&(n+=y-r),i+=y,k=i-n,v=k-l,(v>0||d)&&(T=++g.frame,f=k-g.time*1e3,g.time=k=k/1e3,l+=v+(v>=o?4:o-v),w=1),d||(a=u(m)),w)for(h=0;h<s.length;h++)s[h](k,f,T,b)};return g={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(b){return f/(1e3/(b||60))},wake:function(){_0&&(!gd&&Df()&&(Kr=gd=window,Lf=Kr.document||{},hr.gsap=qt,(Kr.gsapVersions||(Kr.gsapVersions=[])).push(qt.version),w0(Za||Kr.GreenSockGlobals||!Kr.gsap&&Kr||{}),I0.forEach(B0)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,a&&g.sleep(),u=c||function(b){return setTimeout(b,l-g.time*1e3+1|0)},gs=1,x(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(a),gs=0,u=ps},lagSmoothing:function(b,y){e=b||1/0,r=Math.min(y||33,e)},fps:function(b){o=1e3/(b||240),l=g.time*1e3+o},add:function(b,y,d){var v=y?function(w,k,T,S){b(w,k,T,S),g.remove(v)}:b;return g.remove(b),s[d?"unshift":"push"](v),Xo(),v},remove:function(b,y){~(y=s.indexOf(b))&&s.splice(y,1)&&h>=y&&h--},_listeners:s},g}(),Xo=function(){return!gs&&lr.wake()},oe={},Ix=/^[\d.\-M][\d.\-,\s]/,Bx=/["']/g,Ux=function(e){for(var r={},n=e.substr(1,e.length-3).split(":"),i=n[0],o=1,l=n.length,s,a,u;o<l;o++)a=n[o],s=o!==l-1?a.lastIndexOf(","):a.length,u=a.substr(0,s),r[i]=isNaN(u)?u.replace(Bx,"").trim():+u,i=a.substr(s+1).trim();return r},$x=function(e){var r=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",r);return e.substring(r,~i&&i<n?e.indexOf(")",n+1):n)},Vx=function(e){var r=(e+"").split("("),n=oe[r[0]];return n&&r.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ux(r[1])]:$x(e).split(",").map(C0)):oe._CE&&Ix.test(e)?oe._CE("",e):n},Wx=function(e){return function(r){return 1-e(1-r)}},Ai=function(e,r){return e&&(Fe(e)?e:oe[e]||Vx(e))||r},Zi=function(e,r,n,i){n===void 0&&(n=function(a){return 1-r(1-a)}),i===void 0&&(i=function(a){return a<.5?r(a*2)/2:1-r((1-a)*2)/2});var o={easeIn:r,easeOut:n,easeInOut:i},l;return Xt(e,function(s){oe[s]=hr[s]=o,oe[l=s.toLowerCase()]=n;for(var a in o)oe[l+(a==="easeIn"?".in":a==="easeOut"?".out":".inOut")]=oe[s+"."+a]=o[a]}),o},W0=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},oc=function t(e,r,n){var i=r>=1?r:1,o=(n||(e?.3:.45))/(r<1?r:1),l=o/hd*(Math.asin(1/i)||0),s=function(c){return c===1?1:i*Math.pow(2,-10*c)*hx((c-l)*o)+1},a=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:W0(s);return o=hd/o,a.config=function(u,c){return t(e,u,c)},a},lc=function t(e,r){r===void 0&&(r=1.70158);var n=function(l){return l?--l*l*((r+1)*l+r)+1:0},i=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:W0(n);return i.config=function(o){return t(e,o)},i};Xt("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Zi(t+",Power"+(r-1),e?function(n){return Math.pow(n,r)}:function(n){return n},function(n){return 1-Math.pow(1-n,r)},function(n){return n<.5?Math.pow(n*2,r)/2:1-Math.pow((1-n)*2,r)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Zi("Elastic",oc("in"),oc("out"),oc());(function(t,e){var r=1/e,n=2*r,i=2.5*r,o=function(s){return s<r?t*s*s:s<n?t*Math.pow(s-1.5/e,2)+.75:s<i?t*(s-=2.25/e)*s+.9375:t*Math.pow(s-2.625/e,2)+.984375};Zi("Bounce",function(l){return 1-o(1-l)},o)})(7.5625,2.75);Zi("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Zi("Circ",function(t){return-(m0(1-t*t)-1)});Zi("Sine",function(t){return t===1?1:-px(t*dx)+1});Zi("Back",lc("in"),lc("out"),lc());oe.SteppedEase=oe.steps=hr.SteppedEase={config:function(e,r){e===void 0&&(e=1);var n=1/e,i=e+(r?0:1),o=r?1:0,l=1-xe;return function(s){return((i*Cs(0,l,s)|0)+o)*n}}};ds.ease=oe["quad.out"];Xt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return If+=t+","+t+"Params,"});var H0=function(e,r){this.id=fx++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:b0,this.set=r?r.getSetter:Hf},ms=function(){function t(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,Go(this,+r.duration,1,1),this.data=r.data,Te&&(this._ctx=Te,Te.data.push(this)),gs||lr.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Go(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xo(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Nu(this,n),!o._dp||o.parent||P0(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Jr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),T0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+yh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+yh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,i):this._repeat?Yo(this._tTime,o)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-xe?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?tu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xe?0:this._rts,this.totalTime(Cs(-Math.abs(this._delay),this.totalDuration(),o),i!==!1),Cu(this),bx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xe&&(this._tTime-=xe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ee(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Jr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=_x);var i=ht;return ht=n,Uf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ht=i,this},e.globalTime=function(n){for(var i=this,o=arguments.length?n:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xr(this,n),Gt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Gt(i)),this._dur||(this._zTime=-xe),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=i&&o<this.endTime(!0)-xe)},e.eventCallback=function(n,i,o){var l=this.vars;return arguments.length>1?(i?(l[n]=i,o&&(l[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=i)):delete l[n],this):l[n]},e.then=function(n){var i=this,o=i._prom;return new Promise(function(l){var s=Fe(n)?n:N0,a=function(){var c=i.then;i.then=null,o&&o(),Fe(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),l(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){_l(this)},t}();gr(ms.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xe,_prom:0,_ps:!1,_rts:1});var $t=function(t){g0(e,t);function e(n,i){var o;return n===void 0&&(n={}),o=t.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=Gt(n.sortChildren),je&&Jr(n.parent||je,pn(o),i),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&j0(pn(o),n.scrollTrigger),o}var r=e.prototype;return r.to=function(i,o,l){return Al(0,arguments,this),this},r.from=function(i,o,l){return Al(1,arguments,this),this},r.fromTo=function(i,o,l,s){return Al(2,arguments,this),this},r.set=function(i,o,l){return o.duration=0,o.parent=this,Ll(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Xe(i,o,xr(this,l),1),this},r.call=function(i,o,l){return Jr(this,Xe.delayedCall(0,i,o),l)},r.staggerTo=function(i,o,l,s,a,u,c){return l.duration=o,l.stagger=l.stagger||s,l.onComplete=u,l.onCompleteParams=c,l.parent=this,new Xe(i,l,xr(this,a)),this},r.staggerFrom=function(i,o,l,s,a,u,c){return l.runBackwards=1,Ll(l).immediateRender=Gt(l.immediateRender),this.staggerTo(i,o,l,s,a,u,c)},r.staggerFromTo=function(i,o,l,s,a,u,c,g){return s.startAt=l,Ll(s).immediateRender=Gt(s.immediateRender),this.staggerTo(i,o,s,a,u,c,g)},r.render=function(i,o,l){var s=this._time,a=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:Ee(i),g=this._zTime<0!=i<0&&(this._initted||!u),f,h,x,m,b,y,d,v,w,k,T,S;if(this!==je&&c>a&&i>=0&&(c=a),c!==this._tTime||l||g){if(s!==this._time&&u&&(c+=this._time-s,i+=this._time-s),f=c,w=this._start,v=this._ts,y=!v,g&&(u||(s=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,b=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(b*100+i,o,l);if(f=Ee(c%b),c===a?(m=this._repeat,f=u):(k=Ee(c/b),m=~~k,m&&m===k&&(f=u,m--),f>u&&(f=u)),k=Yo(this._tTime,b),!s&&this._tTime&&k!==m&&this._tTime-k*b-this._dur<=0&&(k=m),T&&m&1&&(f=u-f,S=1),m!==k&&!this._lock){var N=T&&k&1,j=N===(T&&m&1);if(m<k&&(N=!N),s=N?0:c%u?u:c,this._lock=1,this.render(s||(S?0:Ee(m*b)),o,!u)._lock=0,this._tTime=c,!o&&this.parent&&ur(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,k=m),s&&s!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,a=this._tDur,j&&(this._lock=2,s=N?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(d=Ex(this,Ee(s),Ee(f)),d&&(c-=f-(f=d._start))),this._tTime=c,this._time=f,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&c&&u&&!o&&!k&&(ur(this,"onStart"),this._tTime!==c))return this;if(f>=s&&i>=0)for(h=this._first;h;){if(x=h._next,(h._act||f>=h._start)&&h._ts&&d!==h){if(h.parent!==this)return this.render(i,o,l);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,o,l),f!==this._time||!this._ts&&!y){d=0,x&&(c+=this._zTime=-xe);break}}h=x}else{h=this._last;for(var C=i<0?i:f;h;){if(x=h._prev,(h._act||C<=h._end)&&h._ts&&d!==h){if(h.parent!==this)return this.render(i,o,l);if(h.render(h._ts>0?(C-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(C-h._start)*h._ts,o,l||ht&&Uf(h)),f!==this._time||!this._ts&&!y){d=0,x&&(c+=this._zTime=C?-xe:xe);break}}h=x}}if(d&&!o&&(this.pause(),d.render(f>=s?0:-xe)._zTime=f>=s?1:-1,this._ts))return this._start=w,Cu(this),this.render(i,o,l);this._onUpdate&&!o&&ur(this,"onUpdate",!0),(c===a&&this._tTime>=this.totalDuration()||!c&&s)&&(w===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===a&&this._ts>0||!c&&this._ts<0)&&si(this,1),!o&&!(i<0&&!s)&&(c||s||!a)&&(ur(this,c===a&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<a&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(i,o){var l=this;if(Cn(o)||(o=xr(this,o,i)),!(i instanceof ms)){if(Ct(i))return i.forEach(function(s){return l.add(s,o)}),this;if(at(i))return this.addLabel(i,o);if(Fe(i))i=Xe.delayedCall(0,i);else return this}return this!==i?Jr(this,i,o):this},r.getChildren=function(i,o,l,s){i===void 0&&(i=!0),o===void 0&&(o=!0),l===void 0&&(l=!0),s===void 0&&(s=-Tr);for(var a=[],u=this._first;u;)u._start>=s&&(u instanceof Xe?o&&a.push(u):(l&&a.push(u),i&&a.push.apply(a,u.getChildren(!0,o,l)))),u=u._next;return a},r.getById=function(i){for(var o=this.getChildren(1,1,1),l=o.length;l--;)if(o[l].vars.id===i)return o[l]},r.remove=function(i){return at(i)?this.removeLabel(i):Fe(i)?this.killTweensOf(i):(i.parent===this&&Tu(this,i),i===this._recent&&(this._recent=this._last),Li(this))},r.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ee(lr.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),t.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},r.addLabel=function(i,o){return this.labels[i]=xr(this,o),this},r.removeLabel=function(i){return delete this.labels[i],this},r.addPause=function(i,o,l){var s=Xe.delayedCall(0,o||ps,l);return s.data="isPause",this._hasPause=1,Jr(this,s,xr(this,i))},r.removePause=function(i){var o=this._first;for(i=xr(this,i);o;)o._start===i&&o.data==="isPause"&&si(o),o=o._next},r.killTweensOf=function(i,o,l){for(var s=this.getTweensOf(i,l),a=s.length;a--;)Vn!==s[a]&&s[a].kill(i,o);return this},r.getTweensOf=function(i,o){for(var l=[],s=Cr(i),a=this._first,u=Cn(o),c;a;)a instanceof Xe?wx(a._targets,s)&&(u?(!Vn||a._initted&&a._ts)&&a.globalTime(0)<=o&&a.globalTime(a.totalDuration())>o:!o||a.isActive())&&l.push(a):(c=a.getTweensOf(s,o)).length&&l.push.apply(l,c),a=a._next;return l},r.tweenTo=function(i,o){o=o||{};var l=this,s=xr(l,i),a=o,u=a.startAt,c=a.onStart,g=a.onStartParams,f=a.immediateRender,h,x=Xe.to(l,gr({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:o.duration||Math.abs((s-(u&&"time"in u?u.time:l._time))/l.timeScale())||xe,onStart:function(){if(l.pause(),!h){var b=o.duration||Math.abs((s-(u&&"time"in u?u.time:l._time))/l.timeScale());x._dur!==b&&Go(x,b,0,1).render(x._time,!0,!0),h=1}c&&c.apply(x,g||[])}},o));return f?x.render(0):x},r.tweenFromTo=function(i,o,l){return this.tweenTo(o,gr({startAt:{time:xr(this,i)}},l))},r.recent=function(){return this._recent},r.nextLabel=function(i){return i===void 0&&(i=this._time),_h(this,xr(this,i))},r.previousLabel=function(i){return i===void 0&&(i=this._time),_h(this,xr(this,i),1)},r.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xe)},r.shiftChildren=function(i,o,l){l===void 0&&(l=0);var s=this._first,a=this.labels,u;for(i=Ee(i);s;)s._start>=l&&(s._start+=i,s._end+=i),s=s._next;if(o)for(u in a)a[u]>=l&&(a[u]+=i);return Li(this)},r.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return t.prototype.invalidate.call(this,i)},r.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,l;o;)l=o._next,this.remove(o),o=l;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Li(this)},r.totalDuration=function(i){var o=0,l=this,s=l._last,a=Tr,u,c,g;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-i:i));if(l._dirty){for(g=l.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),c=s._start,c>a&&l._sort&&s._ts&&!l._lock?(l._lock=1,Jr(l,s,c-s._delay,1)._lock=0):a=c,c<0&&s._ts&&(o-=c,(!g&&!l._dp||g&&g.smoothChildTiming)&&(l._start+=Ee(c/l._ts),l._time-=c,l._tTime-=c),l.shiftChildren(-c,!1,-1/0),a=0),s._end>o&&s._ts&&(o=s._end),s=u;Go(l,l===je&&l._time>o?l._time:o,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(i){if(je._ts&&(T0(je,tu(i,je)),S0=lr.frame),lr.frame>=mh){mh+=fr.autoSleep||120;var o=je._first;if((!o||!o._ts)&&fr.autoSleep&&lr._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||lr.sleep()}}},e}(ms);gr($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var Hx=function(e,r,n,i,o,l,s){var a=new Qt(this._pt,e,r,0,1,q0,null,o),u=0,c=0,g,f,h,x,m,b,y,d;for(a.b=n,a.e=i,n+="",i+="",(y=~i.indexOf("random("))&&(i=hs(i)),l&&(d=[n,i],l(d,e,r),n=d[0],i=d[1]),f=n.match(rc)||[];g=rc.exec(i);)x=g[0],m=i.substring(u,g.index),h?h=(h+1)%5:m.substr(-5)==="rgba("&&(h=1),x!==f[c++]&&(b=parseFloat(f[c-1])||0,a._pt={_next:a._pt,p:m||c===1?m:",",s:b,c:x.charAt(1)==="="?zo(b,x)-b:parseFloat(x)-b,m:h&&h<4?Math.round:0},u=rc.lastIndex);return a.c=u<i.length?i.substring(u,i.length):"",a.fp=s,(x0.test(i)||y)&&(a.e=0),this._pt=a,a},$f=function(e,r,n,i,o,l,s,a,u,c){Fe(i)&&(i=i(o||0,e,l));var g=e[r],f=n!=="get"?n:Fe(g)?u?e[r.indexOf("set")||!Fe(e["get"+r.substr(3)])?r:"get"+r.substr(3)](u):e[r]():g,h=Fe(g)?u?Kx:Q0:Wf,x;if(at(i)&&(~i.indexOf("random(")&&(i=hs(i)),i.charAt(1)==="="&&(x=zo(f,i)+(bt(f)||0),(x||x===0)&&(i=x))),!c||f!==i||kd)return!isNaN(f*i)&&i!==""?(x=new Qt(this._pt,e,r,+f||0,i-(f||0),typeof g=="boolean"?Zx:K0,0,h),u&&(x.fp=u),s&&x.modifier(s,this,e),this._pt=x):(!g&&!(r in e)&&Af(r,i),Hx.call(this,e,r,f,i,h,a||fr.stringFilter,u))},Yx=function(e,r,n,i,o){if(Fe(e)&&(e=Fl(e,o,r,n,i)),!ln(e)||e.style&&e.nodeType||Ct(e)||v0(e))return at(e)?Fl(e,o,r,n,i):e;var l={},s;for(s in e)l[s]=Fl(e[s],o,r,n,i);return l},Y0=function(e,r,n,i,o,l){var s,a,u,c;if(ir[e]&&(s=new ir[e]).init(o,s.rawVars?r[e]:Yx(r[e],i,o,l,n),n,i,l)!==!1&&(n._pt=a=new Qt(n._pt,o,e,0,1,s.render,s,0,s.priority),n!==So))for(u=n._ptLookup[n._targets.indexOf(o)],c=s._props.length;c--;)u[s._props[c]]=a;return s},Vn,kd,Vf=function t(e,r,n){var i=e.vars,o=i.ease,l=i.startAt,s=i.immediateRender,a=i.lazy,u=i.onUpdate,c=i.runBackwards,g=i.yoyoEase,f=i.keyframes,h=i.autoRevert,x=e._dur,m=e._startAt,b=e._targets,y=e.parent,d=y&&y.data==="nested"?y.vars.targets:b,v=e._overwrite==="auto"&&!Rf,w=e.timeline,k=i.easeReverse||g,T,S,N,j,C,B,O,G,$,X,q,z,E;if(w&&(!f||!o)&&(o="none"),e._ease=Ai(o,ds.ease),e._rEase=k&&(Ai(k)||e._ease),e._from=!w&&!!i.runBackwards,e._from&&(e.ratio=1),!w||f&&!i.stagger){if(G=b[0]?Di(b[0]).harness:0,z=G&&i[G.prop],T=eu(i,Ff),m&&(m._zTime<0&&m.progress(1),r<0&&c&&s&&!h?m.render(-1,!0):m.revert(c&&x?xa:xx),m._lazy=0),l){if(si(e._startAt=Xe.set(b,gr({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!m&&Gt(a),startAt:null,delay:0,onUpdate:u&&function(){return ur(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(ht||!s&&!h)&&e._startAt.revert(xa),s&&x&&r<=0&&n<=0){r&&(e._zTime=r);return}}else if(c&&x&&!m){if(r&&(s=!1),N=gr({overwrite:!1,data:"isFromStart",lazy:s&&!m&&Gt(a),immediateRender:s,stagger:0,parent:y},T),z&&(N[G.prop]=z),si(e._startAt=Xe.set(b,N)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(ht?e._startAt.revert(xa):e._startAt.render(-1,!0)),e._zTime=r,!s)t(e._startAt,xe,xe);else if(!r)return}for(e._pt=e._ptCache=0,a=x&&Gt(a)||a&&!x,S=0;S<b.length;S++){if(C=b[S],O=C._gsap||Bf(b)[S]._gsap,e._ptLookup[S]=X={},md[O.id]&&ri.length&&Ja(),q=d===b?S:d.indexOf(C),G&&($=new G).init(C,z||T,e,q,d)!==!1&&(e._pt=j=new Qt(e._pt,C,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(R){X[R]=j}),$.priority&&(B=1)),!G||z)for(N in T)ir[N]&&($=Y0(N,T,e,q,C,d))?$.priority&&(B=1):X[N]=j=$f.call(e,C,N,"get",T[N],q,d,0,i.stringFilter);e._op&&e._op[S]&&e.kill(C,e._op[S]),v&&e._pt&&(Vn=e,je.killTweensOf(C,X,e.globalTime(r)),E=!e.parent,Vn=0),e._pt&&a&&(md[O.id]=1)}B&&Z0(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!E,f&&r<=0&&w.render(Tr,!0,!0)},Gx=function(e,r,n,i,o,l,s,a){var u=(e._pt&&e._ptCache||(e._ptCache={}))[r],c,g,f,h;if(!u)for(u=e._ptCache[r]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][r],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==r&&c.fp!==r;)c=c._next;if(!c)return kd=1,e.vars[r]="+=0",Vf(e,s),kd=0,a?fs(r+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)g=u[h],c=g._pt||g,c.s=(i||i===0)&&!o?i:c.s+(i||0)+l*c.c,c.c=n-c.s,g.e&&(g.e=$e(n)+bt(g.e)),g.b&&(g.b=c.s+bt(g.b))},Xx=function(e,r){var n=e[0]?Di(e[0]).harness:0,i=n&&n.aliases,o,l,s,a;if(!i)return r;o=Ho({},r);for(l in i)if(l in o)for(a=i[l].split(","),s=a.length;s--;)o[a[s]]=o[l];return o},Qx=function(e,r,n,i){var o=r.ease||i||"power1.inOut",l,s;if(Ct(r))s=n[e]||(n[e]=[]),r.forEach(function(a,u){return s.push({t:u/(r.length-1)*100,v:a,e:o})});else for(l in r)s=n[l]||(n[l]=[]),l==="ease"||s.push({t:parseFloat(e),v:r[l],e:o})},Fl=function(e,r,n,i,o){return Fe(e)?e.call(r,n,i,o):at(e)&&~e.indexOf("random(")?hs(e):e},G0=If+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",X0={};Xt(G0+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return X0[t]=1});var Xe=function(t){g0(e,t);function e(n,i,o,l){var s;typeof i=="number"&&(o.duration=i,i=o,o=null),s=t.call(this,l?i:Ll(i))||this;var a=s.vars,u=a.duration,c=a.delay,g=a.immediateRender,f=a.stagger,h=a.overwrite,x=a.keyframes,m=a.defaults,b=a.scrollTrigger,y=i.parent||je,d=(Ct(n)||v0(n)?Cn(n[0]):"length"in i)?[n]:Cr(n),v,w,k,T,S,N,j,C;if(s._targets=d.length?Bf(d):fs("GSAP target "+n+" not found. https://gsap.com",!fr.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=h,x||f||Gs(u)||Gs(c)){i=s.vars;var B=i.easeReverse||i.yoyoEase;if(v=s.timeline=new $t({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:d}),v.kill(),v.parent=v._dp=pn(s),v._start=0,f||Gs(u)||Gs(c)){if(T=d.length,j=f&&O0(f),ln(f))for(S in f)~G0.indexOf(S)&&(C||(C={}),C[S]=f[S]);for(w=0;w<T;w++)k=eu(i,X0),k.stagger=0,B&&(k.easeReverse=B),C&&Ho(k,C),N=d[w],k.duration=+Fl(u,pn(s),w,N,d),k.delay=(+Fl(c,pn(s),w,N,d)||0)-s._delay,!f&&T===1&&k.delay&&(s._delay=c=k.delay,s._start+=c,k.delay=0),v.to(N,k,j?j(w,N,d):0),v._ease=oe.none;v.duration()?u=c=0:s.timeline=0}else if(x){Ll(gr(v.vars.defaults,{ease:"none"})),v._ease=Ai(x.ease||i.ease||"none");var O=0,G,$,X;if(Ct(x))x.forEach(function(q){return v.to(d,q,">")}),v.duration();else{k={};for(S in x)S==="ease"||S==="easeEach"||Qx(S,x[S],k,x.easeEach);for(S in k)for(G=k[S].sort(function(q,z){return q.t-z.t}),O=0,w=0;w<G.length;w++)$=G[w],X={ease:$.e,duration:($.t-(w?G[w-1].t:0))/100*u},X[S]=$.v,v.to(d,X,O),O+=X.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||s.duration(u=v.duration())}else s.timeline=0;return h===!0&&!Rf&&(Vn=pn(s),je.killTweensOf(d),Vn=0),Jr(y,pn(s),o),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(g||!u&&!x&&s._start===Ee(y._time)&&Gt(g)&&Tx(pn(s))&&y.data!=="nested")&&(s._tTime=-xe,s.render(Math.max(0,-c)||0)),b&&j0(pn(s),b),s}var r=e.prototype;return r.render=function(i,o,l){var s=this._time,a=this._tDur,u=this._dur,c=i<0,g=i>a-xe&&!c?a:i<xe?0:i,f,h,x,m,b,y,d,v;if(!u)Nx(this,i,o,l);else if(g!==this._tTime||!i||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=g,v=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+i,o,l);if(f=Ee(g%m),g===a?(x=this._repeat,f=u):(b=Ee(g/m),x=~~b,x&&x===b?(f=u,x--):f>u&&(f=u)),y=this._yoyo&&x&1,y&&(f=u-f),b=Yo(this._tTime,m),f===s&&!l&&this._initted&&x===b)return this._tTime=g,this;x!==b&&this.vars.repeatRefresh&&!y&&!this._lock&&f!==m&&this._initted&&(this._lock=l=1,this.render(Ee(m*x),!0).invalidate()._lock=0)}if(!this._initted){if(z0(this,c?i:f,l,o,g))return this._tTime=0,this;if(s!==this._time&&!(l&&this.vars.repeatRefresh&&x!==b))return this;if(u!==this._dur)return this.render(i,o,l)}if(this._rEase){var w=f<s;if(w!==this._inv){var k=w?s:u-s;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=k?(w?-1:1)/k:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=d=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=d=this._ease(f/u);if(this._from&&(this.ratio=d=1-d),this._tTime=g,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&g&&!o&&!b&&(ur(this,"onStart"),this._tTime!==g))return this;for(h=this._pt;h;)h.r(d,h.d),h=h._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),o,l)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(c&&vd(this,i,o,l),ur(this,"onUpdate")),this._repeat&&x!==b&&this.vars.onRepeat&&!o&&this.parent&&ur(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(c&&!this._onUpdate&&vd(this,i,!0,!0),(i||!u)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&si(this,1),!o&&!(c&&!s)&&(g||s||y)&&(ur(this,g===a?"onComplete":"onReverseComplete",!0),this._prom&&!(g<a&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),t.prototype.invalidate.call(this,i)},r.resetTo=function(i,o,l,s,a){gs||lr.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Vf(this,u),c=this._ease(u/this._dur),Gx(this,i,o,l,s,c,u,a)?this.resetTo(i,o,l,s,1):(Nu(this,0),this.parent||E0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?_l(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ht),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,Vn&&Vn.vars.overwrite!==!0)._first||_l(this),this.parent&&l!==this.timeline.totalDuration()&&Go(this,this._dur*this.timeline._tDur/l,0,1),this}var s=this._targets,a=i?Cr(i):s,u=this._ptLookup,c=this._pt,g,f,h,x,m,b,y;if((!o||o==="all")&&Sx(s,a))return o==="all"&&(this._pt=0),_l(this);for(g=this._op=this._op||[],o!=="all"&&(at(o)&&(m={},Xt(o,function(d){return m[d]=1}),o=m),o=Xx(s,o)),y=s.length;y--;)if(~a.indexOf(s[y])){f=u[y],o==="all"?(g[y]=o,x=f,h={}):(h=g[y]=g[y]||{},x=o);for(m in x)b=f&&f[m],b&&((!("kill"in b.d)||b.d.kill(m)===!0)&&Tu(this,b,"_pt"),delete f[m]),h!=="all"&&(h[m]=1)}return this._initted&&!this._pt&&c&&_l(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return Al(1,arguments)},e.delayedCall=function(i,o,l,s){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:s})},e.fromTo=function(i,o,l){return Al(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,l){return je.killTweensOf(i,o,l)},e}(ms);gr(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xt("staggerTo,staggerFrom,staggerFromTo",function(t){Xe[t]=function(){var e=new $t,r=xd.call(arguments,0);return r.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,r)}});var Wf=function(e,r,n){return e[r]=n},Q0=function(e,r,n){return e[r](n)},Kx=function(e,r,n,i){return e[r](i.fp,n)},qx=function(e,r,n){return e.setAttribute(r,n)},Hf=function(e,r){return Fe(e[r])?Q0:Of(e[r])&&e.setAttribute?qx:Wf},K0=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},Zx=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},q0=function(e,r){var n=r._pt,i="";if(!e&&r.b)i=r.b;else if(e===1&&r.e)i=r.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=r.c}r.set(r.t,r.p,i,r)},Yf=function(e,r){for(var n=r._pt;n;)n.r(e,n.d),n=n._next},Jx=function(e,r,n,i){for(var o=this._pt,l;o;)l=o._next,o.p===i&&o.modifier(e,r,n),o=l},e_=function(e){for(var r=this._pt,n,i;r;)i=r._next,r.p===e&&!r.op||r.op===e?Tu(this,r,"_pt"):r.dep||(n=1),r=i;return!n},t_=function(e,r,n,i){i.mSet(e,r,i.m.call(i.tween,n,i.mt),i)},Z0=function(e){for(var r=e._pt,n,i,o,l;r;){for(n=r._next,i=o;i&&i.pr>r.pr;)i=i._next;(r._prev=i?i._prev:l)?r._prev._next=r:o=r,(r._next=i)?i._prev=r:l=r,r=n}e._pt=o},Qt=function(){function t(r,n,i,o,l,s,a,u,c){this.t=n,this.s=o,this.c=l,this.p=i,this.r=s||K0,this.d=a||this,this.set=u||Wf,this.pr=c||0,this._next=r,r&&(r._prev=this)}var e=t.prototype;return e.modifier=function(n,i,o){this.mSet=this.mSet||this.set,this.set=t_,this.m=n,this.mt=o,this.tween=i},t}();Xt(If+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return Ff[t]=1});hr.TweenMax=hr.TweenLite=Xe;hr.TimelineLite=hr.TimelineMax=$t;je=new $t({sortChildren:!1,defaults:ds,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fr.stringFilter=V0;var Fi=[],wa={},r_=[],kh=0,n_=0,sc=function(e){return(wa[e]||r_).map(function(r){return r()})},Sd=function(){var e=Date.now(),r=[];e-kh>2&&(sc("matchMediaInit"),Fi.forEach(function(n){var i=n.queries,o=n.conditions,l,s,a,u;for(s in i)l=Kr.matchMedia(i[s]).matches,l&&(a=1),l!==o[s]&&(o[s]=l,u=1);u&&(n.revert(),a&&r.push(n))}),sc("matchMediaRevert"),r.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kh=e,sc("matchMedia"))},J0=function(){function t(r,n){this.selector=n&&_d(n),this.data=[],this._r=[],this.isReverted=!1,this.id=n_++,r&&this.add(r)}var e=t.prototype;return e.add=function(n,i,o){Fe(n)&&(o=i,i=n,n=Fe);var l=this,s=function(){var u=Te,c=l.selector,g;return u&&u!==l&&u.data.push(l),o&&(l.selector=_d(o)),Te=l,g=i.apply(l,arguments),Fe(g)&&l._r.push(g),Te=u,l.selector=c,l.isReverted=!1,g};return l.last=s,n===Fe?s(l,function(a){return l.add(null,a)}):n?l[n]=s:s},e.ignore=function(n){var i=Te;Te=null,n(this),Te=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof t?n.push.apply(n,i.getTweens()):i instanceof Xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var o=this;if(n?function(){for(var s=o.getTweens(),a=o.data.length,u;a--;)u=o.data[a],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}));for(s.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,g){return g.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),a=o.data.length;a--;)u=o.data[a],u instanceof $t?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Xe)&&u.revert&&u.revert(n);o._r.forEach(function(c){return c(n,o)}),o.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var l=Fi.length;l--;)Fi[l].id===this.id&&Fi.splice(l,1)},e.revert=function(n){this.kill(n||{})},t}(),i_=function(){function t(r){this.contexts=[],this.scope=r,Te&&Te.data.push(this)}var e=t.prototype;return e.add=function(n,i,o){ln(n)||(n={matches:n});var l=new J0(0,o||this.scope),s=l.conditions={},a,u,c;Te&&!l.selector&&(l.selector=Te.selector),this.contexts.push(l),i=l.add("onMatch",i),l.queries=n;for(u in n)u==="all"?c=1:(a=Kr.matchMedia(n[u]),a&&(Fi.indexOf(l)<0&&Fi.push(l),(s[u]=a.matches)&&(c=1),a.addListener?a.addListener(Sd):a.addEventListener("change",Sd)));return c&&i(l,function(g){return l.add(null,g)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},t}(),ru={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];r.forEach(function(i){return B0(i)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,r){return je.getTweensOf(e,r)},getProperty:function(e,r,n,i){at(e)&&(e=Cr(e)[0]);var o=Di(e||{}).get,l=n?N0:C0;return n==="native"&&(n=""),e&&(r?l((ir[r]&&ir[r].get||o)(e,r,n,i)):function(s,a,u){return l((ir[s]&&ir[s].get||o)(e,s,a,u))})},quickSetter:function(e,r,n){if(e=Cr(e),e.length>1){var i=e.map(function(c){return qt.quickSetter(c,r,n)}),o=i.length;return function(c){for(var g=o;g--;)i[g](c)}}e=e[0]||{};var l=ir[r],s=Di(e),a=s.harness&&(s.harness.aliases||{})[r]||r,u=l?function(c){var g=new l;So._pt=0,g.init(e,n?c+n:c,So,0,[e]),g.render(1,g),So._pt&&Yf(1,So)}:s.set(e,a);return l?u:function(c){return u(e,a,n?c+n:c,s,1)}},quickTo:function(e,r,n){var i,o=qt.to(e,gr((i={},i[r]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),l=function(a,u,c){return o.resetTo(r,a,u,c)};return l.tween=o,l},isTweening:function(e){return je.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ai(e.ease,ds.ease)),vh(ds,e||{})},config:function(e){return vh(fr,e||{})},registerEffect:function(e){var r=e.name,n=e.effect,i=e.plugins,o=e.defaults,l=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!ir[s]&&!hr[s]&&fs(r+" effect requires "+s+" plugin.")}),nc[r]=function(s,a,u){return n(Cr(s),gr(a||{},o),u)},l&&($t.prototype[r]=function(s,a,u){return this.add(nc[r](s,ln(a)?a:(u=a)&&{},this),u)})},registerEase:function(e,r){oe[e]=Ai(r)},parseEase:function(e,r){return arguments.length?Ai(e,r):oe},getById:function(e){return je.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var n=new $t(e),i,o;for(n.smoothChildTiming=Gt(e.smoothChildTiming),je.remove(n),n._dp=0,n._time=n._tTime=je._time,i=je._first;i;)o=i._next,(r||!(!i._dur&&i instanceof Xe&&i.vars.onComplete===i._targets[0]))&&Jr(n,i,i._start-i._delay),i=o;return Jr(je,n,0),n},context:function(e,r){return e?new J0(e,r):Te},matchMedia:function(e){return new i_(e)},matchMediaRefresh:function(){return Fi.forEach(function(e){var r=e.conditions,n,i;for(i in r)r[i]&&(r[i]=!1,n=1);n&&e.revert()})||Sd()},addEventListener:function(e,r){var n=wa[e]||(wa[e]=[]);~n.indexOf(r)||n.push(r)},removeEventListener:function(e,r){var n=wa[e],i=n&&n.indexOf(r);i>=0&&n.splice(i,1)},utils:{wrap:Dx,wrapYoyo:Lx,distribute:O0,random:L0,snap:D0,normalize:Ox,getUnit:bt,clamp:jx,splitColor:U0,toArray:Cr,selector:_d,mapRange:F0,pipe:Mx,unitize:Rx,interpolate:Ax,shuffle:R0},install:w0,effects:nc,ticker:lr,updateRoot:$t.updateRoot,plugins:ir,globalTimeline:je,core:{PropTween:Qt,globals:k0,Tween:Xe,Timeline:$t,Animation:ms,getCache:Di,_removeLinkedListItem:Tu,reverting:function(){return ht},context:function(e){return e&&Te&&(Te.data.push(e),e._ctx=Te),Te},suppressOverwrites:function(e){return Rf=e}}};Xt("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ru[t]=Xe[t]});lr.add($t.updateRoot);So=ru.to({},{duration:0});var o_=function(e,r){for(var n=e._pt;n&&n.p!==r&&n.op!==r&&n.fp!==r;)n=n._next;return n},l_=function(e,r){var n=e._targets,i,o,l;for(i in r)for(o=n.length;o--;)l=e._ptLookup[o][i],l&&(l=l.d)&&(l._pt&&(l=o_(l,i)),l&&l.modifier&&l.modifier(r[i],e,n[o],i))},ac=function(e,r){return{name:e,headless:1,rawVars:1,init:function(i,o,l){l._onInit=function(s){var a,u;if(at(o)&&(a={},Xt(o,function(c){return a[c]=1}),o=a),r){a={};for(u in o)a[u]=r(o[u]);o=a}l_(s,o)}}}},qt=ru.registerPlugin({name:"attr",init:function(e,r,n,i,o){var l,s,a;this.tween=n;for(l in r)a=e.getAttribute(l)||"",s=this.add(e,"setAttribute",(a||0)+"",r[l],i,o,0,0,l),s.op=l,s.b=a,this._props.push(l)},render:function(e,r){for(var n=r._pt;n;)ht?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,r){for(var n=r.length;n--;)this.add(e,n,e[n]||0,r[n],0,0,0,0,0,1)}},ac("roundProps",wd),ac("modifiers"),ac("snap",D0))||ru;Xe.version=$t.version=qt.version="3.15.0";_0=1;Df()&&Xo();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sh,Wn,Mo,Gf,zi,bh,Xf,s_=function(){return typeof window<"u"},Nn={},bi=180/Math.PI,Ro=Math.PI/180,no=Math.atan2,Th=1e8,Qf=/([A-Z])/g,a_=/(left|right|width|margin|padding|x)/i,u_=/[\s,\(]\S/,en={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bd=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},c_=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},d_=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},f_=function(e,r){return r.set(r.t,r.p,e===1?r.e:e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},p_=function(e,r){var n=r.s+r.c*e;r.set(r.t,r.p,~~(n+(n<0?-.5:.5))+r.u,r)},e1=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},t1=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},h_=function(e,r,n){return e.style[r]=n},g_=function(e,r,n){return e.style.setProperty(r,n)},m_=function(e,r,n){return e._gsap[r]=n},v_=function(e,r,n){return e._gsap.scaleX=e._gsap.scaleY=n},y_=function(e,r,n,i,o){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(o,l)},x_=function(e,r,n,i,o){var l=e._gsap;l[r]=n,l.renderTransform(o,l)},ze="transform",Kt=ze+"Origin",__=function t(e,r){var n=this,i=this.target,o=i.style,l=i._gsap;if(e in Nn&&o){if(this.tfm=this.tfm||{},e!=="transform")e=en[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=gn(i,s)}):this.tfm[e]=l.x?l[e]:gn(i,e),e===Kt&&(this.tfm.zOrigin=l.zOrigin);else return en.transform.split(",").forEach(function(s){return t.call(n,s,r)});if(this.props.indexOf(ze)>=0)return;l.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kt,r,"")),e=ze}(o||r)&&this.props.push(e,r,o[e])},r1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},w_=function(){var e=this.props,r=this.target,n=r.style,i=r._gsap,o,l;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?r[e[o]](e[o+2]):r[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Qf,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)i[l]=this.tfm[l];i.svg&&(i.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),o=Xf(),(!o||!o.isStart)&&!n[ze]&&(r1(n),i.zOrigin&&n[Kt]&&(n[Kt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},n1=function(e,r){var n={target:e,props:[],revert:w_,save:__};return e._gsap||qt.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(i){return n.save(i)}),n},i1,Td=function(e,r){var n=Wn.createElementNS?Wn.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wn.createElement(e);return n&&n.style?n:Wn.createElement(e)},cr=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(Qf,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,Qo(r)||r,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),Qo=function(e,r,n){var i=r||zi,o=i.style,l=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(Ch[l]+e in o););return l<0?null:(l===3?"ms":l>=0?Ch[l]:"")+e},Cd=function(){s_()&&window.document&&(Sh=window,Wn=Sh.document,Mo=Wn.documentElement,zi=Td("div")||{style:{}},Td("div"),ze=Qo(ze),Kt=ze+"Origin",zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",i1=!!Qo("perspective"),Xf=qt.core.reverting,Gf=1)},Nh=function(e){var r=e.ownerSVGElement,n=Td("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),o;i.style.display="block",n.appendChild(i),Mo.appendChild(n);try{o=i.getBBox()}catch{}return n.removeChild(i),Mo.removeChild(n),o},Eh=function(e,r){for(var n=r.length;n--;)if(e.hasAttribute(r[n]))return e.getAttribute(r[n])},o1=function(e){var r,n;try{r=e.getBBox()}catch{r=Nh(e),n=1}return r&&(r.width||r.height)||n||(r=Nh(e)),r&&!r.width&&!r.x&&!r.y?{x:+Eh(e,["x","cx","x1"])||0,y:+Eh(e,["y","cy","y1"])||0,width:0,height:0}:r},l1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&o1(e))},ai=function(e,r){if(r){var n=e.style,i;r in Nn&&r!==Kt&&(r=ze),n.removeProperty?(i=r.substr(0,2),(i==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),n.removeProperty(i==="--"?r:r.replace(Qf,"-$1").toLowerCase())):n.removeAttribute(r)}},Hn=function(e,r,n,i,o,l){var s=new Qt(e._pt,r,n,0,1,l?t1:e1);return e._pt=s,s.b=i,s.e=o,e._props.push(n),s},Ph={deg:1,rad:1,turn:1},k_={grid:1,flex:1},ui=function t(e,r,n,i){var o=parseFloat(n)||0,l=(n+"").trim().substr((o+"").length)||"px",s=zi.style,a=a_.test(r),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(a?"Width":"Height"),g=100,f=i==="px",h=i==="%",x,m,b,y;if(i===l||!o||Ph[i]||Ph[l])return o;if(l!=="px"&&!f&&(o=t(e,r,n,"px")),y=e.getCTM&&l1(e),(h||l==="%")&&(Nn[r]||~r.indexOf("adius")))return x=y?e.getBBox()[a?"width":"height"]:e[c],$e(h?o/x*g:o/100*x);if(s[a?"width":"height"]=g+(f?l:i),m=i!=="rem"&&~r.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,y&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Wn||!m.appendChild)&&(m=Wn.body),b=m._gsap,b&&h&&b.width&&a&&b.time===lr.time&&!b.uncache)return $e(o/b.width*g);if(h&&(r==="height"||r==="width")){var d=e.style[r];e.style[r]=g+i,x=e[c],d?e.style[r]=d:ai(e,r)}else(h||l==="%")&&!k_[cr(m,"display")]&&(s.position=cr(e,"position")),m===e&&(s.position="static"),m.appendChild(zi),x=zi[c],m.removeChild(zi),s.position="absolute";return a&&h&&(b=Di(m),b.time=lr.time,b.width=m[c]),$e(f?x*o/g:x&&o?g/x*o:0)},gn=function(e,r,n,i){var o;return Gf||Cd(),r in en&&r!=="transform"&&(r=en[r],~r.indexOf(",")&&(r=r.split(",")[0])),Nn[r]&&r!=="transform"?(o=ys(e,i),o=r!=="transformOrigin"?o[r]:o.svg?o.origin:iu(cr(e,Kt))+" "+o.zOrigin+"px"):(o=e.style[r],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=nu[r]&&nu[r](e,r,n)||cr(e,r)||b0(e,r)||(r==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?ui(e,r,o,n)+n:o},S_=function(e,r,n,i){if(!n||n==="none"){var o=Qo(r,e,1),l=o&&cr(e,o,1);l&&l!==n?(r=o,n=l):r==="borderColor"&&(n=cr(e,"borderTopColor"))}var s=new Qt(this._pt,e.style,r,0,1,q0),a=0,u=0,c,g,f,h,x,m,b,y,d,v,w,k;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=cr(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=e.style[r],e.style[r]=i,i=cr(e,r)||i,m?e.style[r]=m:ai(e,r)),c=[n,i],V0(c),n=c[0],i=c[1],f=n.match(ko)||[],k=i.match(ko)||[],k.length){for(;g=ko.exec(i);)b=g[0],d=i.substring(a,g.index),x?x=(x+1)%5:(d.substr(-5)==="rgba("||d.substr(-5)==="hsla(")&&(x=1),b!==(m=f[u++]||"")&&(h=parseFloat(m)||0,w=m.substr((h+"").length),b.charAt(1)==="="&&(b=zo(h,b)+w),y=parseFloat(b),v=b.substr((y+"").length),a=ko.lastIndex-v.length,v||(v=v||fr.units[r]||w,a===i.length&&(i+=v,s.e+=v)),w!==v&&(h=ui(e,r,m,v)||0),s._pt={_next:s._pt,p:d||u===1?d:",",s:h,c:y-h,m:x&&x<4||r==="zIndex"?Math.round:0});s.c=a<i.length?i.substring(a,i.length):""}else s.r=r==="display"&&i==="none"?t1:e1;return x0.test(i)&&(s.e=0),this._pt=s,s},jh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},b_=function(e){var r=e.split(" "),n=r[0],i=r[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),r[0]=jh[n]||n,r[1]=jh[i]||i,r.join(" ")},T_=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var n=r.t,i=n.style,o=r.u,l=n._gsap,s,a,u;if(o==="all"||o===!0)i.cssText="",a=1;else for(o=o.split(","),u=o.length;--u>-1;)s=o[u],Nn[s]&&(a=1,s=s==="transformOrigin"?Kt:ze),ai(n,s);a&&(ai(n,ze),l&&(l.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ys(n,1),l.uncache=1,r1(i)))}},nu={clearProps:function(e,r,n,i,o){if(o.data!=="isFromStart"){var l=e._pt=new Qt(e._pt,r,n,0,0,T_);return l.u=i,l.pr=-10,l.tween=o,e._props.push(n),1}}},vs=[1,0,0,1,0,0],s1={},a1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zh=function(e){var r=cr(e,ze);return a1(r)?vs:r.substr(7).match(y0).map($e)},Kf=function(e,r){var n=e._gsap||Di(e),i=e.style,o=zh(e),l,s,a,u;return n.svg&&e.getAttribute("transform")?(a=e.transform.baseVal.consolidate().matrix,o=[a.a,a.b,a.c,a.d,a.e,a.f],o.join(",")==="1,0,0,1,0,0"?vs:o):(o===vs&&!e.offsetParent&&e!==Mo&&!n.svg&&(a=i.display,i.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,s=e.nextElementSibling,Mo.appendChild(e)),o=zh(e),a?i.display=a:ai(e,"display"),u&&(s?l.insertBefore(e,s):l?l.appendChild(e):Mo.removeChild(e))),r&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Nd=function(e,r,n,i,o,l){var s=e._gsap,a=o||Kf(e,!0),u=s.xOrigin||0,c=s.yOrigin||0,g=s.xOffset||0,f=s.yOffset||0,h=a[0],x=a[1],m=a[2],b=a[3],y=a[4],d=a[5],v=r.split(" "),w=parseFloat(v[0])||0,k=parseFloat(v[1])||0,T,S,N,j;n?a!==vs&&(S=h*b-x*m)&&(N=w*(b/S)+k*(-m/S)+(m*d-b*y)/S,j=w*(-x/S)+k*(h/S)-(h*d-x*y)/S,w=N,k=j):(T=o1(e),w=T.x+(~v[0].indexOf("%")?w/100*T.width:w),k=T.y+(~(v[1]||v[0]).indexOf("%")?k/100*T.height:k)),i||i!==!1&&s.smooth?(y=w-u,d=k-c,s.xOffset=g+(y*h+d*m)-y,s.yOffset=f+(y*x+d*b)-d):s.xOffset=s.yOffset=0,s.xOrigin=w,s.yOrigin=k,s.smooth=!!i,s.origin=r,s.originIsAbsolute=!!n,e.style[Kt]="0px 0px",l&&(Hn(l,s,"xOrigin",u,w),Hn(l,s,"yOrigin",c,k),Hn(l,s,"xOffset",g,s.xOffset),Hn(l,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",w+" "+k)},ys=function(e,r){var n=e._gsap||new H0(e);if("x"in n&&!r&&!n.uncache)return n;var i=e.style,o=n.scaleX<0,l="px",s="deg",a=getComputedStyle(e),u=cr(e,Kt)||"0",c,g,f,h,x,m,b,y,d,v,w,k,T,S,N,j,C,B,O,G,$,X,q,z,E,R,_,I,W,ue,Q,me;return c=g=f=m=b=y=d=v=w=0,h=x=1,n.svg=!!(e.getCTM&&l1(e)),a.translate&&((a.translate!=="none"||a.scale!=="none"||a.rotate!=="none")&&(i[ze]=(a.translate!=="none"?"translate3d("+(a.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(a.rotate!=="none"?"rotate("+a.rotate+") ":"")+(a.scale!=="none"?"scale("+a.scale.split(" ").join(",")+") ":"")+(a[ze]!=="none"?a[ze]:"")),i.scale=i.rotate=i.translate="none"),S=Kf(e,n.svg),n.svg&&(n.uncache?(E=e.getBBox(),u=n.xOrigin-E.x+"px "+(n.yOrigin-E.y)+"px",z=""):z=!r&&e.getAttribute("data-svg-origin"),Nd(e,z||u,!!z||n.originIsAbsolute,n.smooth!==!1,S)),k=n.xOrigin||0,T=n.yOrigin||0,S!==vs&&(B=S[0],O=S[1],G=S[2],$=S[3],c=X=S[4],g=q=S[5],S.length===6?(h=Math.sqrt(B*B+O*O),x=Math.sqrt($*$+G*G),m=B||O?no(O,B)*bi:0,d=G||$?no(G,$)*bi+m:0,d&&(x*=Math.abs(Math.cos(d*Ro))),n.svg&&(c-=k-(k*B+T*G),g-=T-(k*O+T*$))):(me=S[6],ue=S[7],_=S[8],I=S[9],W=S[10],Q=S[11],c=S[12],g=S[13],f=S[14],N=no(me,W),b=N*bi,N&&(j=Math.cos(-N),C=Math.sin(-N),z=X*j+_*C,E=q*j+I*C,R=me*j+W*C,_=X*-C+_*j,I=q*-C+I*j,W=me*-C+W*j,Q=ue*-C+Q*j,X=z,q=E,me=R),N=no(-G,W),y=N*bi,N&&(j=Math.cos(-N),C=Math.sin(-N),z=B*j-_*C,E=O*j-I*C,R=G*j-W*C,Q=$*C+Q*j,B=z,O=E,G=R),N=no(O,B),m=N*bi,N&&(j=Math.cos(N),C=Math.sin(N),z=B*j+O*C,E=X*j+q*C,O=O*j-B*C,q=q*j-X*C,B=z,X=E),b&&Math.abs(b)+Math.abs(m)>359.9&&(b=m=0,y=180-y),h=$e(Math.sqrt(B*B+O*O+G*G)),x=$e(Math.sqrt(q*q+me*me)),N=no(X,q),d=Math.abs(N)>2e-4?N*bi:0,w=Q?1/(Q<0?-Q:Q):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!a1(cr(e,ze)),z&&e.setAttribute("transform",z))),Math.abs(d)>90&&Math.abs(d)<270&&(o?(h*=-1,d+=m<=0?180:-180,m+=m<=0?180:-180):(x*=-1,d+=d<=0?180:-180)),r=r||n.uncache,n.x=c-((n.xPercent=c&&(!r&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=g-((n.yPercent=g&&(!r&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=f+l,n.scaleX=$e(h),n.scaleY=$e(x),n.rotation=$e(m)+s,n.rotationX=$e(b)+s,n.rotationY=$e(y)+s,n.skewX=d+s,n.skewY=v+s,n.transformPerspective=w+l,(n.zOrigin=parseFloat(u.split(" ")[2])||!r&&n.zOrigin||0)&&(i[Kt]=iu(u)),n.xOffset=n.yOffset=0,n.force3D=fr.force3D,n.renderTransform=n.svg?N_:i1?u1:C_,n.uncache=0,n},iu=function(e){return(e=e.split(" "))[0]+" "+e[1]},uc=function(e,r,n){var i=bt(r);return $e(parseFloat(r)+parseFloat(ui(e,"x",n+"px",i)))+i},C_=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,u1(e,r)},_i="0deg",fl="0px",wi=") ",u1=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,l=n.x,s=n.y,a=n.z,u=n.rotation,c=n.rotationY,g=n.rotationX,f=n.skewX,h=n.skewY,x=n.scaleX,m=n.scaleY,b=n.transformPerspective,y=n.force3D,d=n.target,v=n.zOrigin,w="",k=y==="auto"&&e&&e!==1||y===!0;if(v&&(g!==_i||c!==_i)){var T=parseFloat(c)*Ro,S=Math.sin(T),N=Math.cos(T),j;T=parseFloat(g)*Ro,j=Math.cos(T),l=uc(d,l,S*j*-v),s=uc(d,s,-Math.sin(T)*-v),a=uc(d,a,N*j*-v+v)}b!==fl&&(w+="perspective("+b+wi),(i||o)&&(w+="translate("+i+"%, "+o+"%) "),(k||l!==fl||s!==fl||a!==fl)&&(w+=a!==fl||k?"translate3d("+l+", "+s+", "+a+") ":"translate("+l+", "+s+wi),u!==_i&&(w+="rotate("+u+wi),c!==_i&&(w+="rotateY("+c+wi),g!==_i&&(w+="rotateX("+g+wi),(f!==_i||h!==_i)&&(w+="skew("+f+", "+h+wi),(x!==1||m!==1)&&(w+="scale("+x+", "+m+wi),d.style[ze]=w||"translate(0, 0)"},N_=function(e,r){var n=r||this,i=n.xPercent,o=n.yPercent,l=n.x,s=n.y,a=n.rotation,u=n.skewX,c=n.skewY,g=n.scaleX,f=n.scaleY,h=n.target,x=n.xOrigin,m=n.yOrigin,b=n.xOffset,y=n.yOffset,d=n.forceCSS,v=parseFloat(l),w=parseFloat(s),k,T,S,N,j;a=parseFloat(a),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,a+=c),a||u?(a*=Ro,u*=Ro,k=Math.cos(a)*g,T=Math.sin(a)*g,S=Math.sin(a-u)*-f,N=Math.cos(a-u)*f,u&&(c*=Ro,j=Math.tan(u-c),j=Math.sqrt(1+j*j),S*=j,N*=j,c&&(j=Math.tan(c),j=Math.sqrt(1+j*j),k*=j,T*=j)),k=$e(k),T=$e(T),S=$e(S),N=$e(N)):(k=g,N=f,T=S=0),(v&&!~(l+"").indexOf("px")||w&&!~(s+"").indexOf("px"))&&(v=ui(h,"x",l,"px"),w=ui(h,"y",s,"px")),(x||m||b||y)&&(v=$e(v+x-(x*k+m*S)+b),w=$e(w+m-(x*T+m*N)+y)),(i||o)&&(j=h.getBBox(),v=$e(v+i/100*j.width),w=$e(w+o/100*j.height)),j="matrix("+k+","+T+","+S+","+N+","+v+","+w+")",h.setAttribute("transform",j),d&&(h.style[ze]=j)},E_=function(e,r,n,i,o){var l=360,s=at(o),a=parseFloat(o)*(s&&~o.indexOf("rad")?bi:1),u=a-i,c=i+u+"deg",g,f;return s&&(g=o.split("_")[1],g==="short"&&(u%=l,u!==u%(l/2)&&(u+=u<0?l:-l)),g==="cw"&&u<0?u=(u+l*Th)%l-~~(u/l)*l:g==="ccw"&&u>0&&(u=(u-l*Th)%l-~~(u/l)*l)),e._pt=f=new Qt(e._pt,r,n,i,u,c_),f.e=c,f.u="deg",e._props.push(n),f},Mh=function(e,r){for(var n in r)e[n]=r[n];return e},P_=function(e,r,n){var i=Mh({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",l=n.style,s,a,u,c,g,f,h,x;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),l[ze]=r,s=ys(n,1),ai(n,ze),n.setAttribute("transform",u)):(u=getComputedStyle(n)[ze],l[ze]=r,s=ys(n,1),l[ze]=u);for(a in Nn)u=i[a],c=s[a],u!==c&&o.indexOf(a)<0&&(h=bt(u),x=bt(c),g=h!==x?ui(n,a,u,x):parseFloat(u),f=parseFloat(c),e._pt=new Qt(e._pt,s,a,g,f-g,bd),e._pt.u=x||0,e._props.push(a));Mh(s,i)};Xt("padding,margin,Width,Radius",function(t,e){var r="Top",n="Right",i="Bottom",o="Left",l=(e<3?[r,n,i,o]:[r+o,r+n,i+n,i+o]).map(function(s){return e<2?t+s:"border"+s+t});nu[e>1?"border"+t:t]=function(s,a,u,c,g){var f,h;if(arguments.length<4)return f=l.map(function(x){return gn(s,x,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},l.forEach(function(x,m){return h[x]=f[m]=f[m]||f[(m-1)/2|0]}),s.init(a,h,g)}});var c1={name:"css",register:Cd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,n,i,o){var l=this._props,s=e.style,a=n.vars.startAt,u,c,g,f,h,x,m,b,y,d,v,w,k,T,S,N,j;Gf||Cd(),this.styles=this.styles||n1(e),N=this.styles.props,this.tween=n;for(m in r)if(m!=="autoRound"&&(c=r[m],!(ir[m]&&Y0(m,r,n,i,e,o)))){if(h=typeof c,x=nu[m],h==="function"&&(c=c.call(n,i,e,o),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=hs(c)),x)x(this,e,m,c,n)&&(S=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",ni.lastIndex=0,ni.test(u)||(b=bt(u),y=bt(c),y?b!==y&&(u=ui(e,m,u,y)+y):b&&(c+=b)),this.add(s,"setProperty",u,c,i,o,0,0,m),l.push(m),N.push(m,0,s[m]);else if(h!=="undefined"){if(a&&m in a?(u=typeof a[m]=="function"?a[m].call(n,i,e,o):a[m],at(u)&&~u.indexOf("random(")&&(u=hs(u)),bt(u+"")||u==="auto"||(u+=fr.units[m]||bt(gn(e,m))||""),(u+"").charAt(1)==="="&&(u=gn(e,m))):u=gn(e,m),f=parseFloat(u),d=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),d&&(c=c.substr(2)),g=parseFloat(c),m in en&&(m==="autoAlpha"&&(f===1&&gn(e,"visibility")==="hidden"&&g&&(f=0),N.push("visibility",0,s.visibility),Hn(this,s,"visibility",f?"inherit":"hidden",g?"inherit":"hidden",!g)),m!=="scale"&&m!=="transform"&&(m=en[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in Nn,v){if(this.styles.save(m),j=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=cr(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=c,c=cr(e,"perspective"),C?e.style.perspective=C:ai(e,"perspective")}g=parseFloat(c)}if(w||(k=e._gsap,k.renderTransform&&!r.parseTransform||ys(e,r.parseTransform),T=r.smoothOrigin!==!1&&k.smooth,w=this._pt=new Qt(this._pt,s,ze,0,1,k.renderTransform,k,0,-1),w.dep=1),m==="scale")this._pt=new Qt(this._pt,k,"scaleY",k.scaleY,(d?zo(k.scaleY,d+g):g)-k.scaleY||0,bd),this._pt.u=0,l.push("scaleY",m),m+="X";else if(m==="transformOrigin"){N.push(Kt,0,s[Kt]),c=b_(c),k.svg?Nd(e,c,0,T,0,this):(y=parseFloat(c.split(" ")[2])||0,y!==k.zOrigin&&Hn(this,k,"zOrigin",k.zOrigin,y),Hn(this,s,m,iu(u),iu(c)));continue}else if(m==="svgOrigin"){Nd(e,c,1,T,0,this);continue}else if(m in s1){E_(this,k,m,f,d?zo(f,d+c):c);continue}else if(m==="smoothOrigin"){Hn(this,k,"smooth",k.smooth,c);continue}else if(m==="force3D"){k[m]=c;continue}else if(m==="transform"){P_(this,c,e);continue}}else m in s||(m=Qo(m)||m);if(v||(g||g===0)&&(f||f===0)&&!u_.test(c)&&m in s)b=(u+"").substr((f+"").length),g||(g=0),y=bt(c)||(m in fr.units?fr.units[m]:b),b!==y&&(f=ui(e,m,u,y)),this._pt=new Qt(this._pt,v?k:s,m,f,(d?zo(f,d+g):g)-f,!v&&(y==="px"||m==="zIndex")&&r.autoRound!==!1?p_:bd),this._pt.u=y||0,v&&j!==c?(this._pt.b=u,this._pt.e=j,this._pt.r=f_):b!==y&&y!=="%"&&(this._pt.b=u,this._pt.r=d_);else if(m in s)S_.call(this,e,m,u,d?d+c:c);else if(m in e)this.add(e,m,u||e[m],d?d+c:c,i,o);else if(m!=="parseTransform"){Af(m,c);continue}v||(m in s?N.push(m,0,s[m]):typeof e[m]=="function"?N.push(m,2,e[m]()):N.push(m,1,u||e[m])),l.push(m)}}S&&Z0(this)},render:function(e,r){if(r.tween._time||!Xf())for(var n=r._pt;n;)n.r(e,n.d),n=n._next;else r.styles.revert()},get:gn,aliases:en,getSetter:function(e,r,n){var i=en[r];return i&&i.indexOf(",")<0&&(r=i),r in Nn&&r!==Kt&&(e._gsap.x||gn(e,"x"))?n&&bh===n?r==="scale"?v_:m_:(bh=n||{})&&(r==="scale"?y_:x_):e.style&&!Of(e.style[r])?h_:~r.indexOf("-")?g_:Hf(e,r)},core:{_removeProperty:ai,_getMatrix:Kf}};qt.utils.checkPrefix=Qo;qt.core.getStyleSaver=n1;(function(t,e,r,n){var i=Xt(t+","+e+","+r,function(o){Nn[o]=1});Xt(e,function(o){fr.units[o]="deg",s1[o]=1}),en[i[13]]=t+","+e,Xt(n,function(o){var l=o.split(":");en[l[1]]=i[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){fr.units[t]="px"});qt.registerPlugin(c1);var le=qt.registerPlugin(c1)||qt;le.core.Tween;function j_(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function z_(t,e,r){return e&&j_(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ft,ka,sr,Yn,Gn,Oo,d1,Ti,Do,f1,xn,Ar,p1,h1=function(){return ft||typeof window<"u"&&(ft=window.gsap)&&ft.registerPlugin&&ft},g1=1,bo=[],te=[],on=[],Il=Date.now,Ed=function(e,r){return r},M_=function(){var e=Do.core,r=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,te),i.push.apply(i,on),te=n,on=i,Ed=function(l,s){return r[l](s)}},ii=function(e,r){return~on.indexOf(e)&&on[on.indexOf(e)+1][r]},Bl=function(e){return!!~f1.indexOf(e)},jt=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:i!==!1,capture:!!o})},Pt=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Xs="scrollLeft",Qs="scrollTop",Pd=function(){return xn&&xn.isPressed||te.cache++},ou=function(e,r){var n=function i(o){if(o||o===0){g1&&(sr.history.scrollRestoration="manual");var l=xn&&xn.isPressed;o=i.v=Math.round(o)||(xn&&xn.iOS?1:0),e(o),i.cacheID=te.cache,l&&Ed("ss",o)}else(r||te.cache!==i.cacheID||Ed("ref"))&&(i.cacheID=te.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Dt={s:Xs,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ou(function(t){return arguments.length?sr.scrollTo(t,et.sc()):sr.pageXOffset||Yn[Xs]||Gn[Xs]||Oo[Xs]||0})},et={s:Qs,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dt,sc:ou(function(t){return arguments.length?sr.scrollTo(Dt.sc(),t):sr.pageYOffset||Yn[Qs]||Gn[Qs]||Oo[Qs]||0})},Bt=function(e,r){return(r&&r._ctx&&r._ctx.selector||ft.utils.toArray)(e)[0]||(typeof e=="string"&&ft.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},R_=function(e,r){for(var n=r.length;n--;)if(r[n]===e||r[n].contains(e))return!0;return!1},ci=function(e,r){var n=r.s,i=r.sc;Bl(e)&&(e=Yn.scrollingElement||Gn);var o=te.indexOf(e),l=i===et.sc?1:2;!~o&&(o=te.push(e)-1),te[o+l]||jt(e,"scroll",Pd);var s=te[o+l],a=s||(te[o+l]=ou(ii(e,n),!0)||(Bl(e)?i:ou(function(u){return arguments.length?e[n]=u:e[n]})));return a.target=e,s||(a.smooth=ft.getProperty(e,"scrollBehavior")==="smooth"),a},jd=function(e,r,n){var i=e,o=e,l=Il(),s=l,a=r||50,u=Math.max(500,a*3),c=function(x,m){var b=Il();m||b-l>a?(o=i,i=x,s=l,l=b):n?i+=x:i=o+(x-o)/(b-s)*(l-s)},g=function(){o=i=n?0:i,s=l=0},f=function(x){var m=s,b=o,y=Il();return(x||x===0)&&x!==i&&c(x),l===s||y-s>u?0:(i+(n?b:-b))/((n?y:l)-m)*1e3};return{update:c,reset:g,getVelocity:f}},pl=function(e,r){return r&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Rh=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},m1=function(){Do=ft.core.globals().ScrollTrigger,Do&&Do.core&&M_()},v1=function(e){return ft=e||h1(),!ka&&ft&&typeof document<"u"&&document.body&&(sr=window,Yn=document,Gn=Yn.documentElement,Oo=Yn.body,f1=[sr,Yn,Gn,Oo],ft.utils.clamp,p1=ft.core.context||function(){},Ti="onpointerenter"in Oo?"pointer":"mouse",d1=We.isTouch=sr.matchMedia&&sr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in sr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ar=We.eventTypes=("ontouchstart"in Gn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return g1=0},500),ka=1),Do||m1(),ka};Dt.op=et;te.cache=0;var We=function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){ka||v1(ft)||console.warn("Please gsap.registerPlugin(Observer)"),Do||m1();var i=n.tolerance,o=n.dragMinimum,l=n.type,s=n.target,a=n.lineHeight,u=n.debounce,c=n.preventDefault,g=n.onStop,f=n.onStopDelay,h=n.ignore,x=n.wheelSpeed,m=n.event,b=n.onDragStart,y=n.onDragEnd,d=n.onDrag,v=n.onPress,w=n.onRelease,k=n.onRight,T=n.onLeft,S=n.onUp,N=n.onDown,j=n.onChangeX,C=n.onChangeY,B=n.onChange,O=n.onToggleX,G=n.onToggleY,$=n.onHover,X=n.onHoverEnd,q=n.onMove,z=n.ignoreCheck,E=n.isNormalizer,R=n.onGestureStart,_=n.onGestureEnd,I=n.onWheel,W=n.onEnable,ue=n.onDisable,Q=n.onClick,me=n.scrollSpeed,ce=n.capture,F=n.allowClicks,Ce=n.lockAxis,He=n.onLockAxis;this.target=s=Bt(s)||Gn,this.vars=n,h&&(h=ft.utils.toArray(h)),i=i||1e-9,o=o||0,x=x||1,me=me||1,l=l||"wheel,touch,pointer",u=u!==!1,a||(a=parseFloat(sr.getComputedStyle(Oo).lineHeight)||22);var Wr,Ke,Et,se,Ie,It,Zt,P=this,Jt=0,sn=0,Pn=n.passive||!c&&n.passive!==!1,De=ci(s,Dt),an=ci(s,et),jn=De(),gi=an(),rt=~l.indexOf("touch")&&!~l.indexOf("pointer")&&Ar[0]==="pointerdown",zn=Bl(s),Be=s.ownerDocument||Yn,zr=[0,0,0],yr=[0,0,0],un=0,el=function(){return un=Il()},Ye=function(V,de){return(P.event=V)&&h&&R_(V.target,h)||de&&rt&&V.pointerType!=="touch"||z&&z(V,de)},Ns=function(){P._vx.reset(),P._vy.reset(),Ke.pause(),g&&g(P)},cn=function(){var V=P.deltaX=Rh(zr),de=P.deltaY=Rh(yr),D=Math.abs(V)>=i,H=Math.abs(de)>=i;B&&(D||H)&&B(P,V,de,zr,yr),D&&(k&&P.deltaX>0&&k(P),T&&P.deltaX<0&&T(P),j&&j(P),O&&P.deltaX<0!=Jt<0&&O(P),Jt=P.deltaX,zr[0]=zr[1]=zr[2]=0),H&&(N&&P.deltaY>0&&N(P),S&&P.deltaY<0&&S(P),C&&C(P),G&&P.deltaY<0!=sn<0&&G(P),sn=P.deltaY,yr[0]=yr[1]=yr[2]=0),(se||Et)&&(q&&q(P),Et&&(b&&Et===1&&b(P),d&&d(P),Et=0),se=!1),It&&!(It=!1)&&He&&He(P),Ie&&(I(P),Ie=!1),Wr=0},Ji=function(V,de,D){zr[D]+=V,yr[D]+=de,P._vx.update(V),P._vy.update(de),u?Wr||(Wr=requestAnimationFrame(cn)):cn()},eo=function(V,de){Ce&&!Zt&&(P.axis=Zt=Math.abs(V)>Math.abs(de)?"x":"y",It=!0),Zt!=="y"&&(zr[2]+=V,P._vx.update(V,!0)),Zt!=="x"&&(yr[2]+=de,P._vy.update(de,!0)),u?Wr||(Wr=requestAnimationFrame(cn)):cn()},Mn=function(V){if(!Ye(V,1)){V=pl(V,c);var de=V.clientX,D=V.clientY,H=de-P.x,U=D-P.y,Y=P.isDragging;P.x=de,P.y=D,(Y||(H||U)&&(Math.abs(P.startX-de)>=o||Math.abs(P.startY-D)>=o))&&(Et||(Et=Y?2:1),Y||(P.isDragging=!0),eo(H,U))}},mi=P.onPress=function(K){Ye(K,1)||K&&K.button||(P.axis=Zt=null,Ke.pause(),P.isPressed=!0,K=pl(K),Jt=sn=0,P.startX=P.x=K.clientX,P.startY=P.y=K.clientY,P._vx.reset(),P._vy.reset(),jt(E?s:Be,Ar[1],Mn,Pn,!0),P.deltaX=P.deltaY=0,v&&v(P))},re=P.onRelease=function(K){if(!Ye(K,1)){Pt(E?s:Be,Ar[1],Mn,!0);var V=!isNaN(P.y-P.startY),de=P.isDragging,D=de&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),H=pl(K);!D&&V&&(P._vx.reset(),P._vy.reset(),c&&F&&ft.delayedCall(.08,function(){if(Il()-un>300&&!K.defaultPrevented){if(K.target.click)K.target.click();else if(Be.createEvent){var U=Be.createEvent("MouseEvents");U.initMouseEvent("click",!0,!0,sr,1,H.screenX,H.screenY,H.clientX,H.clientY,!1,!1,!1,!1,0,null),K.target.dispatchEvent(U)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,g&&de&&!E&&Ke.restart(!0),Et&&cn(),y&&de&&y(P),w&&w(P,D)}},vi=function(V){return V.touches&&V.touches.length>1&&(P.isGesturing=!0)&&R(V,P.isDragging)},Mr=function(){return(P.isGesturing=!1)||_(P)},Rr=function(V){if(!Ye(V)){var de=De(),D=an();Ji((de-jn)*me,(D-gi)*me,1),jn=de,gi=D,g&&Ke.restart(!0)}},Or=function(V){if(!Ye(V)){V=pl(V,c),I&&(Ie=!0);var de=(V.deltaMode===1?a:V.deltaMode===2?sr.innerHeight:1)*x;Ji(V.deltaX*de,V.deltaY*de,0),g&&!E&&Ke.restart(!0)}},yi=function(V){if(!Ye(V)){var de=V.clientX,D=V.clientY,H=de-P.x,U=D-P.y;P.x=de,P.y=D,se=!0,g&&Ke.restart(!0),(H||U)&&eo(H,U)}},to=function(V){P.event=V,$(P)},dn=function(V){P.event=V,X(P)},tl=function(V){return Ye(V)||pl(V,c)&&Q(P)};Ke=P._dc=ft.delayedCall(f||.25,Ns).pause(),P.deltaX=P.deltaY=0,P._vx=jd(0,50,!0),P._vy=jd(0,50,!0),P.scrollX=De,P.scrollY=an,P.isDragging=P.isGesturing=P.isPressed=!1,p1(this),P.enable=function(K){return P.isEnabled||(jt(zn?Be:s,"scroll",Pd),l.indexOf("scroll")>=0&&jt(zn?Be:s,"scroll",Rr,Pn,ce),l.indexOf("wheel")>=0&&jt(s,"wheel",Or,Pn,ce),(l.indexOf("touch")>=0&&d1||l.indexOf("pointer")>=0)&&(jt(s,Ar[0],mi,Pn,ce),jt(Be,Ar[2],re),jt(Be,Ar[3],re),F&&jt(s,"click",el,!0,!0),Q&&jt(s,"click",tl),R&&jt(Be,"gesturestart",vi),_&&jt(Be,"gestureend",Mr),$&&jt(s,Ti+"enter",to),X&&jt(s,Ti+"leave",dn),q&&jt(s,Ti+"move",yi)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=se=Et=!1,P._vx.reset(),P._vy.reset(),jn=De(),gi=an(),K&&K.type&&mi(K),W&&W(P)),P},P.disable=function(){P.isEnabled&&(bo.filter(function(K){return K!==P&&Bl(K.target)}).length||Pt(zn?Be:s,"scroll",Pd),P.isPressed&&(P._vx.reset(),P._vy.reset(),Pt(E?s:Be,Ar[1],Mn,!0)),Pt(zn?Be:s,"scroll",Rr,ce),Pt(s,"wheel",Or,ce),Pt(s,Ar[0],mi,ce),Pt(Be,Ar[2],re),Pt(Be,Ar[3],re),Pt(s,"click",el,!0),Pt(s,"click",tl),Pt(Be,"gesturestart",vi),Pt(Be,"gestureend",Mr),Pt(s,Ti+"enter",to),Pt(s,Ti+"leave",dn),Pt(s,Ti+"move",yi),P.isEnabled=P.isPressed=P.isDragging=!1,ue&&ue(P))},P.kill=P.revert=function(){P.disable();var K=bo.indexOf(P);K>=0&&bo.splice(K,1),xn===P&&(xn=0)},bo.push(P),E&&Bl(s)&&(xn=P),P.enable(m)},z_(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();We.version="3.15.0";We.create=function(t){return new We(t)};We.register=v1;We.getAll=function(){return bo.slice()};We.getById=function(t){return bo.filter(function(e){return e.vars.id===t})[0]};h1()&&ft.registerPlugin(We);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var A,so,ee,he,or,pe,qf,lu,xs,Ul,kl,Ks,wt,Eu,zd,Rt,Oh,Dh,ao,y1,cc,x1,zt,Md,_1,w1,Ln,Rd,Zf,Lo,Jf,$l,Od,dc,qs=1,kt=Date.now,fc=kt(),Er=0,Sl=0,Lh=function(e,r,n){var i=nr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ah=function(e,r){return r&&(!nr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},O_=function t(){return Sl&&requestAnimationFrame(t)},Fh=function(){return Eu=1},Ih=function(){return Eu=0},qr=function(e){return e},bl=function(e){return Math.round(e*1e5)/1e5||0},k1=function(){return typeof window<"u"},S1=function(){return A||k1()&&(A=window.gsap)&&A.registerPlugin&&A},Gi=function(e){return!!~qf.indexOf(e)},b1=function(e){return(e==="Height"?Jf:ee["inner"+e])||or["client"+e]||pe["client"+e]},T1=function(e){return ii(e,"getBoundingClientRect")||(Gi(e)?function(){return Na.width=ee.innerWidth,Na.height=Jf,Na}:function(){return mn(e)})},D_=function(e,r,n){var i=n.d,o=n.d2,l=n.a;return(l=ii(e,"getBoundingClientRect"))?function(){return l()[i]}:function(){return(r?b1(o):e["client"+o])||0}},L_=function(e,r){return!r||~on.indexOf(e)?T1(e):function(){return Na}},tn=function(e,r){var n=r.s,i=r.d2,o=r.d,l=r.a;return Math.max(0,(n="scroll"+i)&&(l=ii(e,n))?l()-T1(e)()[o]:Gi(e)?(or[n]||pe[n])-b1(i):e[n]-e["offset"+i])},Zs=function(e,r){for(var n=0;n<ao.length;n+=3)(!r||~r.indexOf(ao[n+1]))&&e(ao[n],ao[n+1],ao[n+2])},nr=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},Tl=function(e){return typeof e=="number"},Ci=function(e){return typeof e=="object"},hl=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},io=function(e,r,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return r(e,n)}):r(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},oo=Math.abs,C1="left",N1="top",ep="right",tp="bottom",Ii="width",Bi="height",Vl="Right",Wl="Left",Hl="Top",Yl="Bottom",Ge="padding",kr="margin",Ko="Width",rp="Height",Ze="px",Sr=function(e){return ee.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},A_=function(e){var r=Sr(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},Bh=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},mn=function(e,r){var n=r&&Sr(e)[zd]!=="matrix(1, 0, 0, 1, 0, 0)"&&A.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},su=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},E1=function(e){var r=[],n=e.labels,i=e.duration(),o;for(o in n)r.push(n[o]/i);return r},F_=function(e){return function(r){return A.utils.snap(E1(e),r)}},np=function(e){var r=A.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,o){return i-o});return n?function(i,o,l){l===void 0&&(l=.001);var s;if(!o)return r(i);if(o>0){for(i-=l,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=l;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,o,l){l===void 0&&(l=.001);var s=r(i);return!o||Math.abs(s-i)<l||s-i<0==o<0?s:r(o<0?i-e:i+e)}},I_=function(e){return function(r,n){return np(E1(e))(r,n.direction)}},Js=function(e,r,n,i){return n.split(",").forEach(function(o){return e(r,o,i)})},ot=function(e,r,n,i,o){return e.addEventListener(r,n,{passive:!i,capture:!!o})},it=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},ea=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},Uh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ta={toggleActions:"play",anticipatePin:0},au={top:0,left:0,center:.5,bottom:1,right:1},Sa=function(e,r){if(nr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=r/100),e=e.substr(0,n-1)),e=i+(e in au?au[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},ra=function(e,r,n,i,o,l,s,a){var u=o.startColor,c=o.endColor,g=o.fontSize,f=o.indent,h=o.fontWeight,x=he.createElement("div"),m=Gi(n)||ii(n,"pinType")==="fixed",b=e.indexOf("scroller")!==-1,y=m?pe:n.tagName==="IFRAME"?n.contentDocument.body:n,d=e.indexOf("start")!==-1,v=d?u:c,w="border-color:"+v+";font-size:"+g+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((b||a)&&m?"fixed;":"absolute;"),(b||a||!m)&&(w+=(i===et?ep:tp)+":"+(l+parseFloat(f))+"px;"),s&&(w+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),x._isStart=d,x.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),x.style.cssText=w,x.innerText=r||r===0?e+"-"+r:e,y.children[0]?y.insertBefore(x,y.children[0]):y.appendChild(x),x._offset=x["offset"+i.op.d2],ba(x,0,i,d),x},ba=function(e,r,n,i){var o={display:"block"},l=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,o[n.a+"Percent"]=i?-100:0,o[n.a]=i?"1px":0,o["border"+l+Ko]=1,o["border"+s+Ko]=0,o[n.p]=r+"px",A.set(e,o)},Z=[],Dd={},_s,$h=function(){return kt()-Er>34&&(_s||(_s=requestAnimationFrame(wn)))},lo=function(){(!zt||!zt.isPressed||zt.startX>pe.clientWidth)&&(te.cache++,zt?_s||(_s=requestAnimationFrame(wn)):wn(),Er||Qi("scrollStart"),Er=kt())},pc=function(){w1=ee.innerWidth,_1=ee.innerHeight},Cl=function(e){te.cache++,(e===!0||!wt&&!x1&&!he.fullscreenElement&&!he.webkitFullscreenElement&&(!Md||w1!==ee.innerWidth||Math.abs(ee.innerHeight-_1)>ee.innerHeight*.25))&&lu.restart(!0)},Xi={},B_=[],P1=function t(){return it(J,"scrollEnd",t)||Mi(!0)},Qi=function(e){return Xi[e]&&Xi[e].map(function(r){return r()})||B_},tr=[],j1=function(e){for(var r=0;r<tr.length;r+=5)(!e||tr[r+4]&&tr[r+4].query===e)&&(tr[r].style.cssText=tr[r+1],tr[r].getBBox&&tr[r].setAttribute("transform",tr[r+2]||""),tr[r+3].uncache=1)},z1=function(){return te.forEach(function(e){return Tt(e)&&++e.cacheID&&(e.rec=e())})},ip=function(e,r){var n;for(Rt=0;Rt<Z.length;Rt++)n=Z[Rt],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));$l=!0,r&&j1(r),r||Qi("revert")},M1=function(e,r){te.cache++,(r||!Ot)&&te.forEach(function(n){return Tt(n)&&n.cacheID++&&(n.rec=0)}),nr(e)&&(ee.history.scrollRestoration=Zf=e)},Ot,Ui=0,Vh,U_=function(){if(Vh!==Ui){var e=Vh=Ui;requestAnimationFrame(function(){return e===Ui&&Mi(!0)})}},R1=function(){pe.appendChild(Lo),Jf=!zt&&Lo.offsetHeight||ee.innerHeight,pe.removeChild(Lo)},Wh=function(e){return xs(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},Mi=function(e,r){if(or=he.documentElement,pe=he.body,qf=[ee,he,or,pe],Er&&!e&&!$l){ot(J,"scrollEnd",P1);return}R1(),Ot=J.isRefreshing=!0,$l||z1();var n=Qi("refreshInit");y1&&J.sort(),r||ip(),te.forEach(function(i){Tt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Z.slice(0).forEach(function(i){return i.refresh()}),$l=!1,Z.forEach(function(i){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",l=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-l),i.refresh()}}),Od=1,Wh(!0),Z.forEach(function(i){var o=tn(i.scroller,i._dir),l=i.vars.end==="max"||i._endClamp&&i.end>o,s=i._startClamp&&i.start>=o;(l||s)&&i.setPositions(s?o-1:i.start,l?Math.max(s?o:i.start+1,o):i.end,!0)}),Wh(!1),Od=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){Tt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),M1(Zf,1),lu.pause(),Ui++,Ot=2,wn(2),Z.forEach(function(i){return Tt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ot=J.isRefreshing=!1,Qi("refresh")},Ld=0,Ta=1,Gl,wn=function(e){if(e===2||!Ot&&!$l){J.isUpdating=!0,Gl&&Gl.update(0);var r=Z.length,n=kt(),i=n-fc>=50,o=r&&Z[0].scroll();if(Ta=Ld>o?-1:1,Ot||(Ld=o),i&&(Er&&!Eu&&n-Er>200&&(Er=0,Qi("scrollEnd")),kl=fc,fc=n),Ta<0){for(Rt=r;Rt-- >0;)Z[Rt]&&Z[Rt].update(0,i);Ta=1}else for(Rt=0;Rt<r;Rt++)Z[Rt]&&Z[Rt].update(0,i);J.isUpdating=!1}_s=0},Ad=[C1,N1,tp,ep,kr+Yl,kr+Vl,kr+Hl,kr+Wl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ca=Ad.concat([Ii,Bi,"boxSizing","max"+Ko,"max"+rp,"position",kr,Ge,Ge+Hl,Ge+Vl,Ge+Yl,Ge+Wl]),$_=function(e,r,n){Ao(n);var i=e._gsap;if(i.spacerIsNative)Ao(i.spacerState);else if(e._gsap.swappedIn){var o=r.parentNode;o&&(o.insertBefore(e,r),o.removeChild(r))}e._gsap.swappedIn=!1},hc=function(e,r,n,i){if(!e._gsap.swappedIn){for(var o=Ad.length,l=r.style,s=e.style,a;o--;)a=Ad[o],l[a]=n[a];l.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(l.display="inline-block"),s[tp]=s[ep]="auto",l.flexBasis=n.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[Ii]=su(e,Dt)+Ze,l[Bi]=su(e,et)+Ze,l[Ge]=s[kr]=s[N1]=s[C1]="0",Ao(i),s[Ii]=s["max"+Ko]=n[Ii],s[Bi]=s["max"+rp]=n[Bi],s[Ge]=n[Ge],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},V_=/([A-Z])/g,Ao=function(e){if(e){var r=e.t.style,n=e.length,i=0,o,l;for((e.t._gsap||A.core.getCache(e.t)).uncache=1;i<n;i+=2)l=e[i+1],o=e[i],l?r[o]=l:r[o]&&r.removeProperty(o.replace(V_,"-$1").toLowerCase())}},na=function(e){for(var r=Ca.length,n=e.style,i=[],o=0;o<r;o++)i.push(Ca[o],n[Ca[o]]);return i.t=e,i},W_=function(e,r,n){for(var i=[],o=e.length,l=n?8:0,s;l<o;l+=2)s=e[l],i.push(s,s in r?r[s]:e[l+1]);return i.t=e.t,i},Na={left:0,top:0},Hh=function(e,r,n,i,o,l,s,a,u,c,g,f,h,x){Tt(e)&&(e=e(a)),nr(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Sa("0"+e.substr(3),n):0));var m=h?h.time():0,b,y,d;if(h&&h.seek(0),isNaN(e)||(e=+e),Tl(e))h&&(e=A.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),s&&ba(s,n,i,!0);else{Tt(r)&&(r=r(a));var v=(e||"0").split(" "),w,k,T,S;d=Bt(r,a)||pe,w=mn(d)||{},(!w||!w.left&&!w.top)&&Sr(d).display==="none"&&(S=d.style.display,d.style.display="block",w=mn(d),S?d.style.display=S:d.style.removeProperty("display")),k=Sa(v[0],w[i.d]),T=Sa(v[1]||"0",n),e=w[i.p]-u[i.p]-c+k+o-T,s&&ba(s,T,i,n-T<20||s._isStart&&T>20),n-=n-T}if(x&&(a[x]=e||-.001,e<0&&(e=0)),l){var N=e+n,j=l._isStart;b="scroll"+i.d2,ba(l,N,i,j&&N>20||!j&&(g?Math.max(pe[b],or[b]):l.parentNode[b])<=N+1),g&&(u=mn(s),g&&(l.style[i.op.p]=u[i.op.p]-i.op.m-l._offset+Ze))}return h&&d&&(b=mn(d),h.seek(f),y=mn(d),h._caScrollDist=b[i.p]-y[i.p],e=e/h._caScrollDist*f),h&&h.seek(m),h?e:Math.round(e)},H_=/(webkit|moz|length|cssText|inset)/i,Yh=function(e,r,n,i){if(e.parentNode!==r){var o=e.style,l,s;if(r===pe){e._stOrig=o.cssText,s=Sr(e);for(l in s)!+l&&!H_.test(l)&&s[l]&&typeof o[l]=="string"&&l!=="0"&&(o[l]=s[l]);o.top=n,o.left=i}else o.cssText=e._stOrig;A.core.getCache(e).uncache=1,r.appendChild(e)}},O1=function(e,r,n){var i=r,o=i;return function(l){var s=Math.round(e());return s!==i&&s!==o&&Math.abs(s-i)>3&&Math.abs(s-o)>3&&(l=s,n&&n()),o=i,i=Math.round(l),i}},ia=function(e,r,n){var i={};i[r.p]="+="+n,A.set(e,i)},Gh=function(e,r){var n=ci(e,r),i="_scroll"+r.p2,o=function l(s,a,u,c,g){var f=l.tween,h=a.onComplete,x={};u=u||n();var m=O1(n,u,function(){f.kill(),l.tween=0});return g=c&&g||0,c=c||s-u,f&&f.kill(),a[i]=s,a.inherit=!1,a.modifiers=x,x[i]=function(){return m(u+c*f.ratio+g*f.ratio*f.ratio)},a.onUpdate=function(){te.cache++,l.tween&&wn()},a.onComplete=function(){l.tween=0,h&&h.call(f)},f=l.tween=A.to(e,a),f};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},ot(e,"wheel",n.wheelHandler),J.isTouch&&ot(e,"touchmove",n.wheelHandler),o},J=function(){function t(r,n){so||t.register(A)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rd(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sl){this.update=this.refresh=this.kill=qr;return}n=Bh(nr(n)||Tl(n)||n.nodeType?{trigger:n}:n,ta);var o=n,l=o.onUpdate,s=o.toggleClass,a=o.id,u=o.onToggle,c=o.onRefresh,g=o.scrub,f=o.trigger,h=o.pin,x=o.pinSpacing,m=o.invalidateOnRefresh,b=o.anticipatePin,y=o.onScrubComplete,d=o.onSnapComplete,v=o.once,w=o.snap,k=o.pinReparent,T=o.pinSpacer,S=o.containerAnimation,N=o.fastScrollEnd,j=o.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Dt:et,B=!g&&g!==0,O=Bt(n.scroller||ee),G=A.core.getCache(O),$=Gi(O),X=("pinType"in n?n.pinType:ii(O,"pinType")||$&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=B&&n.toggleActions.split(" "),E="markers"in n?n.markers:ta.markers,R=$?0:parseFloat(Sr(O)["border"+C.p2+Ko])||0,_=this,I=n.onRefreshInit&&function(){return n.onRefreshInit(_)},W=D_(O,$,C),ue=L_(O,$),Q=0,me=0,ce=0,F=ci(O,C),Ce,He,Wr,Ke,Et,se,Ie,It,Zt,P,Jt,sn,Pn,De,an,jn,gi,rt,zn,Be,zr,yr,un,el,Ye,Ns,cn,Ji,eo,Mn,mi,re,vi,Mr,Rr,Or,yi,to,dn;if(_._startClamp=_._endClamp=!1,_._dir=C,b*=45,_.scroller=O,_.scroll=S?S.time.bind(S):F,Ke=F(),_.vars=n,i=i||n.animation,"refreshPriority"in n&&(y1=1,n.refreshPriority===-9999&&(Gl=_)),G.tweenScroll=G.tweenScroll||{top:Gh(O,et),left:Gh(O,Dt)},_.tweenTo=Ce=G.tweenScroll[C.p],_.scrubDuration=function(D){vi=Tl(D)&&D,vi?re?re.duration(D):re=A.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:vi,paused:!0,onComplete:function(){return y&&y(_)}}):(re&&re.progress(1).kill(),re=0)},i&&(i.vars.lazy=!1,i._initted&&!_.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),_.animation=i.pause(),i.scrollTrigger=_,_.scrubDuration(g),Mn=0,a||(a=i.vars.id)),w&&((!Ci(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in pe.style&&A.set($?[pe,or]:O,{scrollBehavior:"auto"}),te.forEach(function(D){return Tt(D)&&D.target===($?he.scrollingElement||or:O)&&(D.smooth=!1)}),Wr=Tt(w.snapTo)?w.snapTo:w.snapTo==="labels"?F_(i):w.snapTo==="labelsDirectional"?I_(i):w.directional!==!1?function(D,H){return np(w.snapTo)(D,kt()-me<500?0:H.direction)}:A.utils.snap(w.snapTo),Mr=w.duration||{min:.1,max:2},Mr=Ci(Mr)?Ul(Mr.min,Mr.max):Ul(Mr,Mr),Rr=A.delayedCall(w.delay||vi/2||.1,function(){var D=F(),H=kt()-me<500,U=Ce.tween;if((H||Math.abs(_.getVelocity())<10)&&!U&&!Eu&&Q!==D){var Y=(D-se)/De,nt=i&&!B?i.totalProgress():Y,ie=H?0:(nt-mi)/(kt()-kl)*1e3||0,Ue=A.utils.clamp(-Y,1-Y,oo(ie/2)*ie/.185),mt=Y+(w.inertia===!1?0:Ue),Le,Se,ve=w,Dr=ve.onStart,Ne=ve.onInterrupt,er=ve.onComplete;if(Le=Wr(mt,_),Tl(Le)||(Le=mt),Se=Math.max(0,Math.round(se+Le*De)),D<=Ie&&D>=se&&Se!==D){if(U&&!U._initted&&U.data<=oo(Se-D))return;w.inertia===!1&&(Ue=Le-Y),Ce(Se,{duration:Mr(oo(Math.max(oo(mt-nt),oo(Le-nt))*.185/ie/.05||0)),ease:w.ease||"power3",data:oo(Se-D),onInterrupt:function(){return Rr.restart(!0)&&Ne&&io(_,Ne)},onComplete:function(){_.update(),Q=F(),i&&!B&&(re?re.resetTo("totalProgress",Le,i._tTime/i._tDur):i.progress(Le)),Mn=mi=i&&!B?i.totalProgress():_.progress,d&&d(_),er&&io(_,er)}},D,Ue*De,Se-D-Ue*De),Dr&&io(_,Dr,Ce.tween)}}else _.isActive&&Q!==D&&Rr.restart(!0)}).pause()),a&&(Dd[a]=_),f=_.trigger=Bt(f||h!==!0&&h),dn=f&&f._gsap&&f._gsap.stRevert,dn&&(dn=dn(_)),h=h===!0?f:Bt(h),nr(s)&&(s={targets:f,className:s}),h&&(x===!1||x===kr||(x=!x&&h.parentNode&&h.parentNode.style&&Sr(h.parentNode).display==="flex"?!1:Ge),_.pin=h,He=A.core.getCache(h),He.spacer?an=He.pinState:(T&&(T=Bt(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),He.spacerIsNative=!!T,T&&(He.spacerState=na(T))),He.spacer=rt=T||he.createElement("div"),rt.classList.add("pin-spacer"),a&&rt.classList.add("pin-spacer-"+a),He.pinState=an=na(h)),n.force3D!==!1&&A.set(h,{force3D:!0}),_.spacer=rt=He.spacer,eo=Sr(h),el=eo[x+C.os2],Be=A.getProperty(h),zr=A.quickSetter(h,C.a,Ze),hc(h,rt,eo),gi=na(h)),E){sn=Ci(E)?Bh(E,Uh):Uh,P=ra("scroller-start",a,O,C,sn,0),Jt=ra("scroller-end",a,O,C,sn,0,P),zn=P["offset"+C.op.d2];var tl=Bt(ii(O,"content")||O);It=this.markerStart=ra("start",a,tl,C,sn,zn,0,S),Zt=this.markerEnd=ra("end",a,tl,C,sn,zn,0,S),S&&(to=A.quickSetter([It,Zt],C.a,Ze)),!X&&!(on.length&&ii(O,"fixedMarkers")===!0)&&(A_($?pe:O),A.set([P,Jt],{force3D:!0}),Ns=A.quickSetter(P,C.a,Ze),Ji=A.quickSetter(Jt,C.a,Ze))}if(S){var K=S.vars.onUpdate,V=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){_.update(0,0,1),K&&K.apply(S,V||[])})}if(_.previous=function(){return Z[Z.indexOf(_)-1]},_.next=function(){return Z[Z.indexOf(_)+1]},_.revert=function(D,H){if(!H)return _.kill(!0);var U=D!==!1||!_.enabled,Y=wt;U!==_.isReverted&&(U&&(Or=Math.max(F(),_.scroll.rec||0),ce=_.progress,yi=i&&i.progress()),It&&[It,Zt,P,Jt].forEach(function(nt){return nt.style.display=U?"none":"block"}),U&&(wt=_,_.update(U)),h&&(!k||!_.isActive)&&(U?$_(h,rt,an):hc(h,rt,Sr(h),Ye)),U||_.update(U),wt=Y,_.isReverted=U)},_.refresh=function(D,H,U,Y){if(!((wt||!_.enabled)&&!H)){if(h&&D&&Er){ot(t,"scrollEnd",P1);return}!Ot&&I&&I(_),wt=_,Ce.tween&&!U&&(Ce.tween.kill(),Ce.tween=0),re&&re.pause(),m&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Rn){return Rn.vars.immediateRender&&Rn.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),_.isReverted||_.revert(!0,!0),_._subPinOffset=!1;var nt=W(),ie=ue(),Ue=S?S.duration():tn(O,C),mt=De<=.01||!De,Le=0,Se=Y||0,ve=Ci(U)?U.end:n.end,Dr=n.endTrigger||f,Ne=Ci(U)?U.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),er=_.pinnedContainer=n.pinnedContainer&&Bt(n.pinnedContainer,_),Hr=f&&Math.max(0,Z.indexOf(_))||0,ut=Hr,ct,vt,xi,Es,yt,qe,Yr,Pu,op,rl,Gr,nl,Ps;for(E&&Ci(U)&&(nl=A.getProperty(P,C.p),Ps=A.getProperty(Jt,C.p));ut-- >0;)qe=Z[ut],qe.end||qe.refresh(0,1)||(wt=_),Yr=qe.pin,Yr&&(Yr===f||Yr===h||Yr===er)&&!qe.isReverted&&(rl||(rl=[]),rl.unshift(qe),qe.revert(!0,!0)),qe!==Z[ut]&&(Hr--,ut--);for(Tt(Ne)&&(Ne=Ne(_)),Ne=Lh(Ne,"start",_),se=Hh(Ne,f,nt,C,F(),It,P,_,ie,R,X,Ue,S,_._startClamp&&"_startClamp")||(h?-.001:0),Tt(ve)&&(ve=ve(_)),nr(ve)&&!ve.indexOf("+=")&&(~ve.indexOf(" ")?ve=(nr(Ne)?Ne.split(" ")[0]:"")+ve:(Le=Sa(ve.substr(2),nt),ve=nr(Ne)?Ne:(S?A.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,se):se)+Le,Dr=f)),ve=Lh(ve,"end",_),Ie=Math.max(se,Hh(ve||(Dr?"100% 0":Ue),Dr,nt,C,F()+Le,Zt,Jt,_,ie,R,X,Ue,S,_._endClamp&&"_endClamp"))||-.001,Le=0,ut=Hr;ut--;)qe=Z[ut]||{},Yr=qe.pin,Yr&&qe.start-qe._pinPush<=se&&!S&&qe.end>0&&(ct=qe.end-(_._startClamp?Math.max(0,qe.start):qe.start),(Yr===f&&qe.start-qe._pinPush<se||Yr===er)&&isNaN(Ne)&&(Le+=ct*(1-qe.progress)),Yr===h&&(Se+=ct));if(se+=Le,Ie+=Le,_._startClamp&&(_._startClamp+=Le),_._endClamp&&!Ot&&(_._endClamp=Ie||-.001,Ie=Math.min(Ie,tn(O,C))),De=Ie-se||(se-=.01)&&.001,mt&&(ce=A.utils.clamp(0,1,A.utils.normalize(se,Ie,Or))),_._pinPush=Se,It&&Le&&(ct={},ct[C.a]="+="+Le,er&&(ct[C.p]="-="+F()),A.set([It,Zt],ct)),h&&!(Od&&_.end>=tn(O,C)))ct=Sr(h),Es=C===et,xi=F(),yr=parseFloat(Be(C.a))+Se,!Ue&&Ie>1&&(Gr=($?he.scrollingElement||or:O).style,Gr={style:Gr,value:Gr["overflow"+C.a.toUpperCase()]},$&&Sr(pe)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Gr.style["overflow"+C.a.toUpperCase()]="scroll")),hc(h,rt,ct),gi=na(h),vt=mn(h,!0),Pu=X&&ci(O,Es?Dt:et)(),x?(Ye=[x+C.os2,De+Se+Ze],Ye.t=rt,ut=x===Ge?su(h,C)+De+Se:0,ut&&(Ye.push(C.d,ut+Ze),rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=ut+Ze)),Ao(Ye),er&&Z.forEach(function(Rn){Rn.pin===er&&Rn.vars.pinSpacing!==!1&&(Rn._subPinOffset=!0)}),X&&F(Or)):(ut=su(h,C),ut&&rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=ut+Ze)),X&&(yt={top:vt.top+(Es?xi-se:Pu)+Ze,left:vt.left+(Es?Pu:xi-se)+Ze,boxSizing:"border-box",position:"fixed"},yt[Ii]=yt["max"+Ko]=Math.ceil(vt.width)+Ze,yt[Bi]=yt["max"+rp]=Math.ceil(vt.height)+Ze,yt[kr]=yt[kr+Hl]=yt[kr+Vl]=yt[kr+Yl]=yt[kr+Wl]="0",yt[Ge]=ct[Ge],yt[Ge+Hl]=ct[Ge+Hl],yt[Ge+Vl]=ct[Ge+Vl],yt[Ge+Yl]=ct[Ge+Yl],yt[Ge+Wl]=ct[Ge+Wl],jn=W_(an,yt,k),Ot&&F(0)),i?(op=i._initted,cc(1),i.render(i.duration(),!0,!0),un=Be(C.a)-yr+De+Se,cn=Math.abs(De-un)>1,X&&cn&&jn.splice(jn.length-2,2),i.render(0,!0,!0),op||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),cc(0)):un=De,Gr&&(Gr.value?Gr.style["overflow"+C.a.toUpperCase()]=Gr.value:Gr.style.removeProperty("overflow-"+C.a));else if(f&&F()&&!S)for(vt=f.parentNode;vt&&vt!==pe;)vt._pinOffset&&(se-=vt._pinOffset,Ie-=vt._pinOffset),vt=vt.parentNode;rl&&rl.forEach(function(Rn){return Rn.revert(!1,!0)}),_.start=se,_.end=Ie,Ke=Et=Ot?Or:F(),!S&&!Ot&&(Ke<Or&&F(Or),_.scroll.rec=0),_.revert(!1,!0),me=kt(),Rr&&(Q=-1,Rr.restart(!0)),wt=0,i&&B&&(i._initted||yi)&&i.progress()!==yi&&i.progress(yi||0,!0).render(i.time(),!0,!0),(mt||ce!==_.progress||S||m||i&&!i._initted)&&(i&&!B&&(i._initted||ce||i.vars.immediateRender!==!1)&&i.totalProgress(S&&se<-.001&&!ce?A.utils.normalize(se,Ie,0):ce,!0),_.progress=mt||(Ke-se)/De===ce?0:ce),h&&x&&(rt._pinOffset=Math.round(_.progress*un)),re&&re.invalidate(),isNaN(nl)||(nl-=A.getProperty(P,C.p),Ps-=A.getProperty(Jt,C.p),ia(P,C,nl),ia(It,C,nl-(Y||0)),ia(Jt,C,Ps),ia(Zt,C,Ps-(Y||0))),mt&&!Ot&&_.update(),c&&!Ot&&!Pn&&(Pn=!0,c(_),Pn=!1)}},_.getVelocity=function(){return(F()-Et)/(kt()-kl)*1e3||0},_.endAnimation=function(){hl(_.callbackAnimation),i&&(re?re.progress(1):i.paused()?B||hl(i,_.direction<0,1):hl(i,i.reversed()))},_.labelToScroll=function(D){return i&&i.labels&&(se||_.refresh()||se)+i.labels[D]/i.duration()*De||0},_.getTrailing=function(D){var H=Z.indexOf(_),U=_.direction>0?Z.slice(0,H).reverse():Z.slice(H+1);return(nr(D)?U.filter(function(Y){return Y.vars.preventOverlaps===D}):U).filter(function(Y){return _.direction>0?Y.end<=se:Y.start>=Ie})},_.update=function(D,H,U){if(!(S&&!U&&!D)){var Y=Ot===!0?Or:_.scroll(),nt=D?0:(Y-se)/De,ie=nt<0?0:nt>1?1:nt||0,Ue=_.progress,mt,Le,Se,ve,Dr,Ne,er,Hr;if(H&&(Et=Ke,Ke=S?F():Y,w&&(mi=Mn,Mn=i&&!B?i.totalProgress():ie)),b&&h&&!wt&&!qs&&Er&&(!ie&&se<Y+(Y-Et)/(kt()-kl)*b?ie=1e-4:ie===1&&Ie>Y+(Y-Et)/(kt()-kl)*b&&(ie=.9999)),ie!==Ue&&_.enabled){if(mt=_.isActive=!!ie&&ie<1,Le=!!Ue&&Ue<1,Ne=mt!==Le,Dr=Ne||!!ie!=!!Ue,_.direction=ie>Ue?1:-1,_.progress=ie,Dr&&!wt&&(Se=ie&&!Ue?0:ie===1?1:Ue===1?2:3,B&&(ve=!Ne&&z[Se+1]!=="none"&&z[Se+1]||z[Se],Hr=i&&(ve==="complete"||ve==="reset"||ve in i))),j&&(Ne||Hr)&&(Hr||g||!i)&&(Tt(j)?j(_):_.getTrailing(j).forEach(function(xi){return xi.endAnimation()})),B||(re&&!wt&&!qs?(re._dp._time-re._start!==re._time&&re.render(re._dp._time-re._start),re.resetTo?re.resetTo("totalProgress",ie,i._tTime/i._tDur):(re.vars.totalProgress=ie,re.invalidate().restart())):i&&i.totalProgress(ie,!!(wt&&(me||D)))),h){if(D&&x&&(rt.style[x+C.os2]=el),!X)zr(bl(yr+un*ie));else if(Dr){if(er=!D&&ie>Ue&&Ie+1>Y&&Y+1>=tn(O,C),k)if(!D&&(mt||er)){var ut=mn(h,!0),ct=Y-se;Yh(h,pe,ut.top+(C===et?ct:0)+Ze,ut.left+(C===et?0:ct)+Ze)}else Yh(h,rt);Ao(mt||er?jn:gi),cn&&ie<1&&mt||zr(yr+(ie===1&&!er?un:0))}}w&&!Ce.tween&&!wt&&!qs&&Rr.restart(!0),s&&(Ne||v&&ie&&(ie<1||!dc))&&xs(s.targets).forEach(function(xi){return xi.classList[mt||v?"add":"remove"](s.className)}),l&&!B&&!D&&l(_),Dr&&!wt?(B&&(Hr&&(ve==="complete"?i.pause().totalProgress(1):ve==="reset"?i.restart(!0).pause():ve==="restart"?i.restart(!0):i[ve]()),l&&l(_)),(Ne||!dc)&&(u&&Ne&&io(_,u),q[Se]&&io(_,q[Se]),v&&(ie===1?_.kill(!1,1):q[Se]=0),Ne||(Se=ie===1?1:3,q[Se]&&io(_,q[Se]))),N&&!mt&&Math.abs(_.getVelocity())>(Tl(N)?N:2500)&&(hl(_.callbackAnimation),re?re.progress(1):hl(i,ve==="reverse"?1:!ie,1))):B&&l&&!wt&&l(_)}if(Ji){var vt=S?Y/S.duration()*(S._caScrollDist||0):Y;Ns(vt+(P._isFlipped?1:0)),Ji(vt)}to&&to(-Y/S.duration()*(S._caScrollDist||0))}},_.enable=function(D,H){_.enabled||(_.enabled=!0,ot(O,"resize",Cl),$||ot(O,"scroll",lo),I&&ot(t,"refreshInit",I),D!==!1&&(_.progress=ce=0,Ke=Et=Q=F()),H!==!1&&_.refresh())},_.getTween=function(D){return D&&Ce?Ce.tween:re},_.setPositions=function(D,H,U,Y){if(S){var nt=S.scrollTrigger,ie=S.duration(),Ue=nt.end-nt.start;D=nt.start+Ue*D/ie,H=nt.start+Ue*H/ie}_.refresh(!1,!1,{start:Ah(D,U&&!!_._startClamp),end:Ah(H,U&&!!_._endClamp)},Y),_.update()},_.adjustPinSpacing=function(D){if(Ye&&D){var H=Ye.indexOf(C.d)+1;Ye[H]=parseFloat(Ye[H])+D+Ze,Ye[1]=parseFloat(Ye[1])+D+Ze,Ao(Ye)}},_.disable=function(D,H){if(D!==!1&&_.revert(!0,!0),_.enabled&&(_.enabled=_.isActive=!1,H||re&&re.pause(),Or=0,He&&(He.uncache=1),I&&it(t,"refreshInit",I),Rr&&(Rr.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!$)){for(var U=Z.length;U--;)if(Z[U].scroller===O&&Z[U]!==_)return;it(O,"resize",Cl),$||it(O,"scroll",lo)}},_.kill=function(D,H){_.disable(D,H),re&&!H&&re.kill(),a&&delete Dd[a];var U=Z.indexOf(_);U>=0&&Z.splice(U,1),U===Rt&&Ta>0&&Rt--,U=0,Z.forEach(function(Y){return Y.scroller===_.scroller&&(U=1)}),U||Ot||(_.scroll.rec=0),i&&(i.scrollTrigger=null,D&&i.revert({kill:!1}),H||i.kill()),It&&[It,Zt,P,Jt].forEach(function(Y){return Y.parentNode&&Y.parentNode.removeChild(Y)}),Gl===_&&(Gl=0),h&&(He&&(He.uncache=1),U=0,Z.forEach(function(Y){return Y.pin===h&&U++}),U||(He.spacer=0)),n.onKill&&n.onKill(_)},Z.push(_),_.enable(!1,!1),dn&&dn(_),i&&i.add&&!De){var de=_.update;_.update=function(){_.update=de,te.cache++,se||Ie||_.refresh()},A.delayedCall(.01,_.update),De=.01,se=Ie=0}else _.refresh();h&&U_()},t.register=function(n){return so||(A=n||S1(),k1()&&window.document&&t.enable(),so=Sl),so},t.defaults=function(n){if(n)for(var i in n)ta[i]=n[i];return ta},t.disable=function(n,i){Sl=0,Z.forEach(function(l){return l[i?"kill":"disable"](n)}),it(ee,"wheel",lo),it(he,"scroll",lo),clearInterval(Ks),it(he,"touchcancel",qr),it(pe,"touchstart",qr),Js(it,he,"pointerdown,touchstart,mousedown",Fh),Js(it,he,"pointerup,touchend,mouseup",Ih),lu.kill(),Zs(it);for(var o=0;o<te.length;o+=3)ea(it,te[o],te[o+1]),ea(it,te[o],te[o+2])},t.enable=function(){if(ee=window,he=document,or=he.documentElement,pe=he.body,A){if(xs=A.utils.toArray,Ul=A.utils.clamp,Rd=A.core.context||qr,cc=A.core.suppressOverwrites||qr,Zf=ee.history.scrollRestoration||"auto",Ld=ee.pageYOffset||0,A.core.globals("ScrollTrigger",t),pe){Sl=1,Lo=document.createElement("div"),Lo.style.height="100vh",Lo.style.position="absolute",R1(),O_(),We.register(A),t.isTouch=We.isTouch,Ln=We.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Md=We.isTouch===1,ot(ee,"wheel",lo),qf=[ee,he,or,pe],A.matchMedia?(t.matchMedia=function(c){var g=A.matchMedia(),f;for(f in c)g.add(f,c[f]);return g},A.addEventListener("matchMediaInit",function(){z1(),ip()}),A.addEventListener("matchMediaRevert",function(){return j1()}),A.addEventListener("matchMedia",function(){Mi(0,1),Qi("matchMedia")}),A.matchMedia().add("(orientation: portrait)",function(){return pc(),pc})):console.warn("Requires GSAP 3.11.0 or later"),pc(),ot(he,"scroll",lo);var n=pe.hasAttribute("style"),i=pe.style,o=i.borderTopStyle,l=A.core.Animation.prototype,s,a;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",s=mn(pe),et.m=Math.round(s.top+et.sc())||0,Dt.m=Math.round(s.left+Dt.sc())||0,o?i.borderTopStyle=o:i.removeProperty("border-top-style"),n||(pe.setAttribute("style",""),pe.removeAttribute("style")),Ks=setInterval($h,250),A.delayedCall(.5,function(){return qs=0}),ot(he,"touchcancel",qr),ot(pe,"touchstart",qr),Js(ot,he,"pointerdown,touchstart,mousedown",Fh),Js(ot,he,"pointerup,touchend,mouseup",Ih),zd=A.utils.checkPrefix("transform"),Ca.push(zd),so=kt(),lu=A.delayedCall(.2,Mi).pause(),ao=[he,"visibilitychange",function(){var c=ee.innerWidth,g=ee.innerHeight;he.hidden?(Oh=c,Dh=g):(Oh!==c||Dh!==g)&&Cl()},he,"DOMContentLoaded",Mi,ee,"load",Mi,ee,"resize",Cl],Zs(ot),Z.forEach(function(c){return c.enable(0,1)}),a=0;a<te.length;a+=3)ea(it,te[a],te[a+1]),ea(it,te[a],te[a+2])}else if(he){var u=function c(){t.enable(),he.removeEventListener("DOMContentLoaded",c)};he.addEventListener("DOMContentLoaded",u)}}},t.config=function(n){"limitCallbacks"in n&&(dc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ks)||(Ks=i)&&setInterval($h,i),"ignoreMobileResize"in n&&(Md=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Zs(it)||Zs(ot,n.autoRefreshEvents||"none"),x1=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,i){var o=Bt(n),l=te.indexOf(o),s=Gi(o);~l&&te.splice(l,s?6:2),i&&(s?on.unshift(ee,i,pe,i,or,i):on.unshift(o,i))},t.clearMatchMedia=function(n){Z.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},t.isInViewport=function(n,i,o){var l=(nr(n)?Bt(n):n).getBoundingClientRect(),s=l[o?Ii:Bi]*i||0;return o?l.right-s>0&&l.left+s<ee.innerWidth:l.bottom-s>0&&l.top+s<ee.innerHeight},t.positionInViewport=function(n,i,o){nr(n)&&(n=Bt(n));var l=n.getBoundingClientRect(),s=l[o?Ii:Bi],a=i==null?s/2:i in au?au[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return o?(l.left+a)/ee.innerWidth:(l.top+a)/ee.innerHeight},t.killAll=function(n){if(Z.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),n!==!0){var i=Xi.killAll||[];Xi={},i.forEach(function(o){return o()})}},t}();J.version="3.15.0";J.saveStyles=function(t){return t?xs(t).forEach(function(e){if(e&&e.style){var r=tr.indexOf(e);r>=0&&tr.splice(r,5),tr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),A.core.getCache(e),Rd())}}):tr};J.revert=function(t,e){return ip(!t,e)};J.create=function(t,e){return new J(t,e)};J.refresh=function(t){return t?Cl(!0):(so||J.register())&&Mi(!0)};J.update=function(t){return++te.cache&&wn(t===!0?2:0)};J.clearScrollMemory=M1;J.maxScroll=function(t,e){return tn(t,e?Dt:et)};J.getScrollFunc=function(t,e){return ci(Bt(t),e?Dt:et)};J.getById=function(t){return Dd[t]};J.getAll=function(){return Z.filter(function(t){return t.vars.id!=="ScrollSmoother"})};J.isScrolling=function(){return!!Er};J.snapDirectional=np;J.addEventListener=function(t,e){var r=Xi[t]||(Xi[t]=[]);~r.indexOf(e)||r.push(e)};J.removeEventListener=function(t,e){var r=Xi[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};J.batch=function(t,e){var r=[],n={},i=e.interval||.016,o=e.batchMax||1e9,l=function(u,c){var g=[],f=[],h=A.delayedCall(i,function(){c(g,f),g=[],f=[]}).pause();return function(x){g.length||h.restart(!0),g.push(x.trigger),f.push(x),o<=g.length&&h.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&Tt(e[s])&&s!=="onRefreshInit"?l(s,e[s]):e[s];return Tt(o)&&(o=o(),ot(J,"refresh",function(){return o=e.batchMax()})),xs(t).forEach(function(a){var u={};for(s in n)u[s]=n[s];u.trigger=a,r.push(J.create(u))}),r};var Xh=function(e,r,n,i){return r>i?e(i):r<0&&e(0),n>i?(i-r)/(n-r):n<0?r/(r-n):1},gc=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(We.isTouch?" pinch-zoom":""):"none",e===or&&t(pe,r)},oa={auto:1,scroll:1},Y_=function(e){var r=e.event,n=e.target,i=e.axis,o=(r.changedTouches?r.changedTouches[0]:r).target,l=o._gsap||A.core.getCache(o),s=kt(),a;if(!l._isScrollT||s-l._isScrollT>2e3){for(;o&&o!==pe&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(oa[(a=Sr(o)).overflowY]||oa[a.overflowX]));)o=o.parentNode;l._isScroll=o&&o!==n&&!Gi(o)&&(oa[(a=Sr(o)).overflowY]||oa[a.overflowX]),l._isScrollT=s}(l._isScroll||i==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},D1=function(e,r,n,i){return We.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:i=i&&Y_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ot(he,We.eventTypes[0],Kh,!1,!0)},onDisable:function(){return it(he,We.eventTypes[0],Kh,!0)}})},G_=/(input|label|select|textarea)/i,Qh,Kh=function(e){var r=G_.test(e.target.tagName);(r||Qh)&&(e._gsapAllow=!0,Qh=r)},X_=function(e){Ci(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,i=r.momentum,o=r.allowNestedScroll,l=r.onRelease,s,a,u=Bt(e.target)||or,c=A.core.globals().ScrollSmoother,g=c&&c.get(),f=Ln&&(e.content&&Bt(e.content)||g&&e.content!==!1&&!g.smooth()&&g.content()),h=ci(u,et),x=ci(u,Dt),m=1,b=(We.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,y=0,d=Tt(i)?function(){return i(s)}:function(){return i||2.8},v,w,k=D1(u,e.type,!0,o),T=function(){return w=!1},S=qr,N=qr,j=function(){a=tn(u,et),N=Ul(Ln?1:0,a),n&&(S=Ul(0,tn(u,Dt))),v=Ui},C=function(){f._gsap.y=bl(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},B=function(){if(w){requestAnimationFrame(T);var E=bl(s.deltaY/2),R=N(h.v-E);if(f&&R!==h.v+h.offset){h.offset=R-h.v;var _=bl((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+_+", 0, 1)",f._gsap.y=_+"px",h.cacheID=te.cache,wn()}return!0}h.offset&&C(),w=!0},O,G,$,X,q=function(){j(),O.isActive()&&O.vars.scrollY>a&&(h()>a?O.progress(1)&&h(a):O.resetTo("scrollY",a))};return f&&A.set(f,{y:"+=0"}),e.ignoreCheck=function(z){return Ln&&z.type==="touchmove"&&B()||m>1.05&&z.type!=="touchstart"||s.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){w=!1;var z=m;m=bl((ee.visualViewport&&ee.visualViewport.scale||1)/b),O.pause(),z!==m&&gc(u,m>1.01?!0:n?!1:"x"),G=x(),$=h(),j(),v=Ui},e.onRelease=e.onGestureStart=function(z,E){if(h.offset&&C(),!E)X.restart(!0);else{te.cache++;var R=d(),_,I;n&&(_=x(),I=_+R*.05*-z.velocityX/.227,R*=Xh(x,_,I,tn(u,Dt)),O.vars.scrollX=S(I)),_=h(),I=_+R*.05*-z.velocityY/.227,R*=Xh(h,_,I,tn(u,et)),O.vars.scrollY=N(I),O.invalidate().duration(R).play(.01),(Ln&&O.vars.scrollY>=a||_>=a-1)&&A.to({},{onUpdate:q,duration:R})}l&&l(z)},e.onWheel=function(){O._ts&&O.pause(),kt()-y>1e3&&(v=0,y=kt())},e.onChange=function(z,E,R,_,I){if(Ui!==v&&j(),E&&n&&x(S(_[2]===E?G+(z.startX-z.x):x()+E-_[1])),R){h.offset&&C();var W=I[2]===R,ue=W?$+z.startY-z.y:h()+R-I[1],Q=N(ue);W&&ue!==Q&&($+=Q-ue),h(Q)}(R||E)&&wn()},e.onEnable=function(){gc(u,n?!1:"x"),J.addEventListener("refresh",q),ot(ee,"resize",q),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=x.smooth=!1),k.enable()},e.onDisable=function(){gc(u,!0),it(ee,"resize",q),J.removeEventListener("refresh",q),k.kill()},e.lockAxis=e.lockAxis!==!1,s=new We(e),s.iOS=Ln,Ln&&!h()&&h(1),Ln&&A.ticker.add(qr),X=s._dc,O=A.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:O1(h,h(),function(){return O.pause()})},onUpdate:wn,onComplete:X.vars.onComplete}),s};J.sort=function(t){if(Tt(t))return Z.sort(t);var e=ee.pageYOffset||0;return J.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+ee.innerHeight}),Z.sort(t||function(r,n){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};J.observe=function(t){return new We(t)};J.normalizeScroll=function(t){if(typeof t>"u")return zt;if(t===!0&&zt)return zt.enable();if(t===!1){zt&&zt.kill(),zt=t;return}var e=t instanceof We?t:X_(t);return zt&&zt.target===e.target&&zt.kill(),Gi(e.target)&&(zt=e),e};J.core={_getVelocityProp:jd,_inputObserver:D1,_scrollers:te,_proxies:on,bridge:{ss:function(){Er||Qi("scrollStart"),Er=kt()},ref:function(){return wt}}};S1()&&A.registerPlugin(J);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L1=(...t)=>t.filter((e,r,n)=>!!e&&n.indexOf(e)===r).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=fe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:l,...s},a)=>fe.createElement("svg",{ref:a,...K_,width:e,height:e,stroke:t,strokeWidth:n?Number(r)*24/Number(e):r,className:L1("lucide",i),...s},[...l.map(([u,c])=>fe.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(t,e)=>{const r=fe.forwardRef(({className:n,...i},o)=>fe.createElement(q_,{ref:o,iconNode:e,className:L1(`lucide-${Q_(t)}`,n),...i}));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=Oe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Oe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Oe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=Oe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=Oe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=Oe("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=Oe("Feather",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Oe("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=Oe("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=Oe("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=Oe("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=Oe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=Oe("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=Oe("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=Oe("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=Oe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=Oe("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Oe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=Oe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=Oe("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=Oe("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=Oe("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=Oe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),tg="/assets/hero-bg-CfS1bU_6.jpg",xc="/assets/groom-BgMSaAt0.jpg",_c="/assets/bride-B4AUy4sO.jpg",f2="/assets/resort-ipwJmroI.jpg",p2="/assets/room-DT1qHTCd.jpg",h2="data:audio/mpeg;base64,",g2="/assets/img5-BL0OxGy0.jpg",m2="/assets/img6-ByN_z66m.jpg",v2="/assets/img7-h214JnXG.jpg",y2="/assets/img8-DD-mZPjV.jpg",x2="/assets/img9-D4_utFGe.jpg",_2="/assets/img10-DHtybGeb.jpg";typeof window<"u"&&le.registerPlugin(J);const w2="https://archive.org/download/sitar-instrumental/sitar-instrumental.mp3",rg="artist-luxury-wedding-template-styles",k2=`
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

.cursor-aura {
  position: fixed;
  z-index: 1;
  width: 280px;
  height: 280px;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 999px;
  background:
    radial-gradient(circle, rgba(199,155,59,0.14), transparent 62%),
    radial-gradient(circle, rgba(198,107,143,0.08), transparent 72%);
  transform: translate(-50%, -50%);
  filter: blur(2px);
  opacity: 0;
  mix-blend-mode: multiply;
}

.scroll-jewel {
  position: fixed;
  z-index: 120;
  top: 78px;
  right: 24px;
  width: 5px;
  height: 120px;
  border-radius: 999px;
  background: rgba(199,155,59,0.16);
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(199,155,59,0.16);
}

.scroll-jewel-progress {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 0%;
  border-radius: inherit;
  background: linear-gradient(180deg, var(--champagne), var(--gold), var(--plum));
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
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.music-toggle.playing {
  background: linear-gradient(135deg, var(--plum), var(--berry));
  color: #fff;
}

.luxury-nav {
  position: fixed;
  z-index: 90;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  padding: 7px;
  border-radius: 999px;
  background: rgba(255,255,255,0.68);
  border: 1px solid rgba(199,155,59,0.24);
  box-shadow: 0 20px 54px rgba(33,27,32,0.16);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
}

.luxury-nav button {
  border: 0;
  background: transparent;
  color: var(--plum);
  cursor: pointer;
  padding: 10px 13px;
  border-radius: 999px;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 900;
  transition: 0.28s ease;
}

.luxury-nav button:hover {
  color: #fff;
  background: linear-gradient(135deg, var(--plum), var(--berry));
  box-shadow: 0 10px 24px rgba(91,23,79,0.2);
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

.hero-light-beam {
  position: absolute;
  z-index: 1;
  width: 38vw;
  height: 120vh;
  top: -20vh;
  pointer-events: none;
  opacity: 0.22;
  filter: blur(18px);
  transform: rotate(18deg);
  background: linear-gradient(
    180deg,
    transparent,
    rgba(234,214,173,0.34),
    transparent
  );
}

.beam-one {
  left: 8%;
}

.beam-two {
  right: 4%;
  opacity: 0.16;
  transform: rotate(-16deg);
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
  color: #ffffff !important;
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
  transition: transform 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
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

.luxury-divider {
  width: min(720px, calc(100% - 36px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 18px;
  align-items: center;
  color: var(--deep-gold);
  opacity: 0.76;
}

.luxury-divider > span {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(199,155,59,0.48));
}

.luxury-divider > span:last-child {
  background: linear-gradient(90deg, rgba(199,155,59,0.48), transparent);
}

.luxury-divider div {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.56);
  border: 1px solid rgba(199,155,59,0.18);
}

.luxury-divider small {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 900;
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

.portrait-corner {
  position: absolute;
  z-index: 2;
  width: 58px;
  height: 58px;
  pointer-events: none;
  border-color: rgba(234,214,173,0.82);
}

.portrait-corner-tl {
  top: 14px;
  left: 14px;
  border-top: 1px solid;
  border-left: 1px solid;
}

.portrait-corner-br {
  right: 14px;
  bottom: 14px;
  border-right: 1px solid;
  border-bottom: 1px solid;
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
  will-change: transform, opacity;
  outline: 1px solid rgba(255,255,255,0.4);
  outline-offset: -8px;
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

.modern-collage-card:hover {
  box-shadow:
    0 28px 72px rgba(33,27,32,0.22),
    0 0 0 1px rgba(234,214,173,0.22);
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
  position: relative;
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

.collage-name-card::before {
  content: "";
  position: absolute;
  inset: 14px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.26);
  pointer-events: none;
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

.quote-section {
  padding-top: 34px;
  padding-bottom: 34px;
}

.quote-card {
  position: relative;
  width: min(880px, 100%);
  margin: 0 auto;
  padding: clamp(38px, 7vw, 78px);
  text-align: center;
  border-radius: 44px;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(234,214,173,0.24), transparent 22rem),
    linear-gradient(135deg, rgba(91,23,79,0.96), rgba(139,45,109,0.9));
  color: #fff;
  box-shadow: var(--shadow-soft);
}

.quote-card::before {
  content: "";
  position: absolute;
  inset: 15px;
  border-radius: 32px;
  border: 1px solid rgba(234,214,173,0.22);
  pointer-events: none;
}

.quote-mark {
  position: absolute;
  top: 8px;
  left: 34px;
  color: rgba(234,214,173,0.22);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 160px;
  line-height: 1;
}

.quote-card p {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(25px, 5vw, 43px);
  line-height: 1.35;
  letter-spacing: -0.045em;
}

.quote-card span {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-top: 28px;
  color: var(--champagne);
  font-size: 11px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-weight: 900;
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
  padding: 62px 18px 92px;
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

.studio-link:hover {
  color: #fff !important;
  border-bottom-color: #fff !important;
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
.art-signature,
.quote-card,
.luxury-divider {
  will-change: transform, opacity;
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

@media (max-width: 640px) {
  .scroll-jewel {
    display: none;
  }

  .luxury-nav {
    left: 12px;
    right: 12px;
    bottom: 12px;
    transform: none;
    overflow-x: auto;
    justify-content: flex-start;
  }

  .luxury-nav::-webkit-scrollbar {
    display: none;
  }

  .luxury-nav button {
    white-space: nowrap;
    padding: 9px 11px;
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

  .hero {
    padding-bottom: 78px;
  }

  .hero-panel {
    box-shadow: 0 18px 48px rgba(91,23,79,0.13);
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

  .section-title {
    letter-spacing: -0.06em;
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

  .quote-card {
    border-radius: 34px;
  }

  .quote-mark {
    font-size: 110px;
    left: 18px;
  }

  .quote-card p {
    font-size: 26px;
  }

  .luxury-divider {
    width: calc(100% - 28px);
    gap: 10px;
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
`,S2={en:{saveTheDate:"Save the Date",wedding:"Wedding",on:"Date",sunday:"Sunday",sep:"September",september:"September",year2026:"2026",togetherWithFamilies:"Together with their families",heartilyInvites:"Heartily invites you",groomTitle:"The Groom",brideTitle:"The Bride",groomName:"Muhammad Fayas .A",brideName:"Keerthi Anilkumar",groomParents:"Son of Late Abdul Jabbar",brideParents:"Daughter of Anilkumar",groomHome:"Hailing from Thiruvananthapuram, Kerala",brideHome:"Hailing from Kollam, Kerala",invitationTitle:"Our Wedding Invitation",inviteText:"Together with our families, we cordially invite you to share our happiness and witness our vows as we join our lives in marriage.",inviteDetails:"Please join us for our wedding ceremony followed by a celebratory feast on the scenic backwaters of Kappil, Kerala.",groomSide:"Groom's Side",groomSideFamily:"Family of Late Abdul Jabbar",brideSide:"Bride's Side",brideSideFamily:"Family of Anilkumar",venueTitle:"The Wedding Venue",ceremonyTime:"Wedding Ceremony",muhurthamTime:"10:30 AM onwards",venueLocation:"Venue Location",lakesideResort:"Scenic lakeside resort near Kappil Beach backwaters",openMap:"Open Location Map",galleryTitle:"Wedding Gallery",gallerySubtitle:"A modern gallery of beautiful memories, resort moments, and the surroundings of our celebration.",blessingBoardTitle:"Wedding Blessing Board",blessingBoardSubtitle:"Your blessings and presence mean the world to us. Please share a warm note of blessing or congratulations.",leaveBlessing:"Leave a Blessing",yourName:"Your Name",relation:"Relation / Note",blessingMessage:"Your Blessing Message",sendBlessing:"Send Blessing",thankYou:"Thank you for your warm blessings.",wishesAndBlessings:"Wishes & Blessings",notes:"Notes",noBlessingsYet:"No blessings posted yet. Be the first to bless.",footerQuote:"May your blessings follow us as we walk together, leaving footprints of love on the shores of life.",footerAddress:"Serene Lake Resort, Kappil • September 13, 2026",footerCopyright:"© 2026 Fayas & Keerthi. Together Forever.",callGroom:"Call Groom",exploreBtn:"Explore Wedding",saveToCalendar:"Save to Calendar",happyCoupleTitle:"The Happy Couple",happyCoupleSubtitle:"With hearts full of love, we introduce the bride and the groom as they begin this beautiful lifetime journey together.",daysAbbr:["S","M","T","W","T","F","S"],dateStringFormatted:"Sunday, September 13, 2026",brideExtra:"Surrounded by love and blessings",countdown:["Days","Hours","Mins","Secs"],scheduleTitle:"Wedding Day Timeline",scheduleSubtitle:"A graceful celebration planned with love, blessings, ceremony, feast, and memories.",rsvpTitle:"RSVP",rsvpSubtitle:"Kindly let us know if you will be joining us for the celebration.",rsvpName:"Guest Name",rsvpGuests:"Number of Guests",rsvpAttendance:"Will You Attend?",rsvpMessage:"Message",attending:"Joyfully attending",notAttending:"Unable to attend",rsvpSend:"Submit RSVP",rsvpThanks:"Thank you. Your RSVP has been saved.",rsvpNoteTitle:"Your Presence Is Our Gift",rsvpNote:"We look forward to celebrating this beautiful day with our loved ones by the serene backwaters of Kappil.",mapTitle:"Location & Directions",mapSubtitle:"Join us at Serene Lake Resort, a scenic lakeside venue near Kappil Beach backwaters.",mapHelp:"Use the location button to open directions in Google Maps. Please plan to arrive a little early for a relaxed welcome."},ml:{saveTheDate:"സേവ് ദി ഡേറ്റ്",wedding:"വിവാഹം",on:"തീയതി",sunday:"ഞായറാഴ്ച",sep:"സെപ്റ്റംബർ",september:"സെപ്റ്റംബർ",year2026:"2026",togetherWithFamilies:"കുടുംബാംഗങ്ങളുടെ സ്നേഹാദരങ്ങളോടെ",heartilyInvites:"ഹൃദയപൂർവ്വം ക്ഷണിക്കുന്നു",groomTitle:"വരൻ",brideTitle:"വധു",groomName:"മുഹമ്മദ് ഫയാസ് .എ",brideName:"കീർത്തി അനിൽകുമാർ",groomParents:"പരേതനായ അബ്ദുൽ ജബ്ബാറിന്റെ മകൻ",brideParents:"അനിൽകുമാറിന്റെ മകൾ",groomHome:"തിരുവനന്തപുരം സ്വദേശി",brideHome:"കൊല്ലം സ്വദേശി",invitationTitle:"വിവാഹ ക്ഷണം",inviteText:"പരസ്പരം തണലാകുവാൻ താലിച്ചരടാൽ ബന്ധിതരാകുന്ന വിവാഹ മംഗളമുഹൂർത്തത്തിന് സാക്ഷ്യം വഹിക്കുവാൻ ബന്ധുമിത്രാദികളായ നിങ്ങളെ എല്ലാവരെയും സസ്‌നേഹം ക്ഷണിക്കുന്നു.",inviteDetails:"കപ്പിൽ കായൽക്കരയിൽ വെച്ചു നടക്കുന്ന വിവാഹ ചടങ്ങുകളിലേക്കും തുടർന്ന് നടക്കുന്ന സ്നേഹവിരുന്നിലേക്കും നിങ്ങളെ സ്വാഗതം ചെയ്യുന്നു.",groomSide:"വരന്റെ കുടുംബം",groomSideFamily:"അബ്ദുൽ ജബ്ബാറിന്റെ കുടുംബം",brideSide:"വധുവിന്റെ കുടുംബം",brideSideFamily:"അനിൽകുമാറിന്റെ കുടുംബം",venueTitle:"വിവാഹ വേദി",ceremonyTime:"വിവാഹ മംഗളമുഹൂർത്തം",muhurthamTime:"രാവിലെ 10:30 മുതൽ",venueLocation:"വിവാഹ സ്ഥലം",lakesideResort:"കാപ്പിൽ കായലിന്റെ മനോഹരമായ തീരത്ത്",openMap:"വഴി കാണിക്കുന്ന മാപ്പ്",galleryTitle:"ചിത്രങ്ങൾ",gallerySubtitle:"ഞങ്ങളുടെ ജീവിതത്തിലെ മനോഹരമായ നിമിഷങ്ങളുടെ ചിത്രങ്ങൾ.",blessingBoardTitle:"ആശംസാ ബോർഡ്",blessingBoardSubtitle:"ഞങ്ങളുടെ പുതിയ ജീവിതയാത്രക്ക് നിങ്ങളുടെ പ്രാർത്ഥനകളും അനുഗ്രഹങ്ങളും ആശംസകളും അറിയിക്കൂ.",leaveBlessing:"ആശംസകൾ അറിയിക്കാം",yourName:"നിങ്ങളുടെ പേര്",relation:"ബന്ധം / കുറിപ്പ്",blessingMessage:"നിങ്ങളുടെ ആശംസ",sendBlessing:"ആശംസ അയക്കുക",thankYou:"നിങ്ങളുടെ ആശംസകൾക്ക് നന്ദി.",wishesAndBlessings:"ആശംസകൾ",notes:"സന്ദേശങ്ങൾ",noBlessingsYet:"ആദ്യമായി ആശംസ അറിയിക്കുന്നവർ നിങ്ങളാകൂ.",footerQuote:"ഞങ്ങളുടെ പുതിയ ജീവിതയാത്രയിൽ നിങ്ങളുടെ സ്നേഹവും അനുഗ്രഹവും എന്നും കൂടെയുണ്ടാകുമെന്ന് പ്രത്യാശിക്കുന്നു.",footerAddress:"സെറീൻ ലേക്ക് റിസോർട്ട്, കാപ്പിൽ • സെപ്റ്റംബർ 13, 2026",footerCopyright:"© 2026 ഫയാസ് & കീർത്തി. എന്നും ഒന്നായി.",callGroom:"വരനെ വിളിക്കുക",exploreBtn:"വിവാഹവിവരങ്ങൾ",saveToCalendar:"കലണ്ടറിൽ ചേർക്കുക",happyCoupleTitle:"വധൂവരന്മാർ",happyCoupleSubtitle:"സ്നേഹനിർഭരമായ ഹൃദയത്തോടെ, ഞങ്ങൾ വധൂവരന്മാരെ പരിചയപ്പെടുത്തുന്നു.",daysAbbr:["ഞാ","തി","ചൊ","ബു","വ്യാ","വെ","ശ"],dateStringFormatted:"ഞായറാഴ്ച, 2026 സെപ്റ്റംബർ 13",brideExtra:"സ്നേഹവും അനുഗ്രഹവും നിറഞ്ഞ്",countdown:["ദിവസം","മണി","മിനിറ്റ്","സെക്കന്റ്"],scheduleTitle:"വിവാഹ ദിന പരിപാടികൾ",scheduleSubtitle:"സ്നേഹവും അനുഗ്രഹവും വിവാഹ ചടങ്ങും സ്നേഹവിരുന്നും നിറഞ്ഞ ആഘോഷം.",rsvpTitle:"ആർ.എസ്.വി.പി",rsvpSubtitle:"വിവാഹ ആഘോഷത്തിൽ പങ്കെടുക്കുമോ എന്ന് ദയവായി അറിയിക്കൂ.",rsvpName:"അതിഥിയുടെ പേര്",rsvpGuests:"അതിഥികളുടെ എണ്ണം",rsvpAttendance:"പങ്കെടുക്കുമോ?",rsvpMessage:"സന്ദേശം",attending:"സന്തോഷത്തോടെ പങ്കെടുക്കും",notAttending:"പങ്കെടുക്കാൻ സാധിക്കില്ല",rsvpSend:"ആർ.എസ്.വി.പി അയക്കുക",rsvpThanks:"നന്ദി. നിങ്ങളുടെ RSVP സേവ് ചെയ്തു.",rsvpNoteTitle:"നിങ്ങളുടെ സാന്നിധ്യമാണ് സമ്മാനം",rsvpNote:"കപ്പിൽ കായൽക്കരയിൽ പ്രിയപ്പെട്ടവരോടൊപ്പം ഈ മനോഹരമായ ദിവസം ആഘോഷിക്കാൻ ഞങ്ങൾ കാത്തിരിക്കുന്നു.",mapTitle:"ലൊക്കേഷനും വഴിയും",mapSubtitle:"കാപ്പിൽ ബീച്ച് കായലിനടുത്തുള്ള സെറീൻ ലേക്ക് റിസോർട്ടിലേക്ക് സ്വാഗതം.",mapHelp:"Google Maps-ൽ വഴി കാണാൻ ലൊക്കേഷൻ ബട്ടൺ ഉപയോഗിക്കുക. സുഖമായി എത്താൻ കുറച്ച് നേരത്തെ എത്തുക."}},b2={en:{monogram:"F · K",artLine:"Two hearts, one beautiful beginning",editorialTitle:"A Celebration Written in Gold",editorialCopy:"Between the calm of the lake and the warmth of family, we begin a story made of devotion, grace, and forever.",closingSmall:"With love, blessings, and joy",quote:"May this day be remembered not only for its beauty, but for the love that gathered around it."},ml:{monogram:"F · K",artLine:"രണ്ട് ഹൃദയങ്ങൾ, ഒരു മനോഹര തുടക്കം",editorialTitle:"സ്നേഹത്തിൽ എഴുതപ്പെട്ട ആഘോഷം",editorialCopy:"കായലിന്റെ ശാന്തതയിലും കുടുംബങ്ങളുടെ അനുഗ്രഹത്തിലും, സ്നേഹവും വിശ്വാസവും നിറഞ്ഞ ഒരു പുതിയ കഥ ആരംഭിക്കുന്നു.",closingSmall:"സ്നേഹത്തോടും അനുഗ്രഹങ്ങളോടും സന്തോഷത്തോടും കൂടി",quote:"ഈ ദിവസത്തിന്റെ സൗന്ദര്യം മാത്രമല്ല, അതിന് ചുറ്റും കൂടിയ സ്നേഹവും എന്നും ഓർമ്മിക്കപ്പെടട്ടെ."}};function T2(){if(typeof document>"u"||document.getElementById(rg))return;const e=document.createElement("style");e.id=rg,e.innerHTML=k2,document.head.appendChild(e)}function gl(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Dn({label:t="Fayas & Keerthi"}){return p.jsxs("div",{className:"luxury-divider","aria-hidden":"true",children:[p.jsx("span",{}),p.jsxs("div",{children:[p.jsx(Ni,{size:13,fill:"currentColor"}),p.jsx("small",{children:t})]}),p.jsx("span",{})]})}const C2=new Date("2026-09-13T10:30:00+05:30");function N2(){const t=fe.useRef(null),e=fe.useRef(null),r=fe.useRef(null),n=fe.useRef([]),[i,o]=fe.useState("en"),[l,s]=fe.useState(!1),[a,u]=fe.useState(null),[c,g]=fe.useState(0),[f,h]=fe.useState({name:"",guests:"1",attendance:"attending",message:""}),[x,m]=fe.useState(!1),[b,y]=fe.useState({days:0,hours:0,minutes:0,seconds:0}),d=S2[i],v=b2[i],w=()=>{const W=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Trired Global//Wedding Invitation//EN","BEGIN:VEVENT","SUMMARY:Wedding | Muhammad Fayas & Keerthi Anilkumar","DESCRIPTION:Join us for our wedding ceremony and celebratory feast at Serene Lake Resort, Kappil.","LOCATION:Serene Lake Resort, Kappil Rd, Kappil, Edava, Kerala 695311, India","DTSTART:20260913T050000Z","DTEND:20260913T100000Z","END:VEVENT","END:VCALENDAR"].join(`\r
`),ue=new Blob([W],{type:"text/calendar;charset=utf-8"}),Q=document.createElement("a");Q.href=URL.createObjectURL(ue),Q.download="Fayas_Keerthi_Wedding.ics",document.body.appendChild(Q),Q.click(),document.body.removeChild(Q)},k=fe.useMemo(()=>[p2,xc,_c,g2,m2,v2,y2,x2,_2].filter(Boolean),[]),T=fe.useMemo(()=>[{time:i==="en"?"09:30 AM":"രാവിലെ 09:30",title:i==="en"?"Guest Arrival":"അതിഥികളെ സ്വാഗതം",copy:i==="en"?"A warm lakeside welcome for family and friends.":"കുടുംബാംഗങ്ങളെയും സുഹൃത്തുകളെയും സ്നേഹത്തോടെ സ്വാഗതം ചെയ്യുന്നു.",icon:s2},{time:i==="en"?"10:30 AM":"രാവിലെ 10:30",title:i==="en"?"Wedding Ceremony":"വിവാഹ മംഗളമുഹൂർത്തം",copy:i==="en"?"The sacred wedding ceremony begins with blessings.":"അനുഗ്രഹങ്ങളോടെ വിവാഹ ചടങ്ങുകൾ ആരംഭിക്കുന്നു.",icon:Ni},{time:i==="en"?"12:00 PM":"ഉച്ചയ്ക്ക് 12:00",title:i==="en"?"Blessings & Photos":"ആശംസകളും ചിത്രങ്ങളും",copy:i==="en"?"Family blessings, portraits, and beautiful memories.":"കുടുംബ ആശംസകളും ചിത്രങ്ങളും മനോഹര നിമിഷങ്ങളും.",icon:yc},{time:i==="en"?"01:00 PM":"ഉച്ചയ്ക്ക് 01:00",title:i==="en"?"Wedding Feast":"സ്നേഹവിരുന്ന്",copy:i==="en"?"A celebratory feast by the serene backwaters.":"കായൽക്കരയിൽ സ്നേഹപൂർവ്വം ഒരുക്കിയ വിരുന്ന്.",icon:a2}],[i]);fe.useEffect(()=>{T2()},[]),fe.useEffect(()=>{const z=()=>{const R=new Date,_=Math.max(C2.getTime()-R.getTime(),0);y({days:Math.floor(_/864e5),hours:Math.floor(_/36e5%24),minutes:Math.floor(_/6e4%60),seconds:Math.floor(_/1e3%60)})};z();const E=window.setInterval(z,1e3);return()=>window.clearInterval(E)},[]),fe.useEffect(()=>{gl()||n.current.forEach(z=>{z&&le.fromTo(z,{y:8,opacity:.55},{y:0,opacity:1,duration:.35,ease:"power2.out"})})},[b]),fe.useEffect(()=>{if(!k.length)return;const z=window.setInterval(()=>{g(E=>(E+1)%k.length)},3e3);return()=>window.clearInterval(z)},[k.length]),fe.useEffect(()=>{const z=e.current;if(!z||gl())return;const E=z.getContext("2d");let R,_=window.innerWidth,I=window.innerHeight,W=[];const ue=()=>{_=z.width=window.innerWidth,I=z.height=window.innerHeight},Q=()=>({x:Math.random()*_,y:Math.random()*I,radius:Math.random()*42+18,speedY:Math.random()*-.35-.16,speedX:Math.random()*.22-.11,alpha:Math.random()*.06+.03,hue:Math.random()>.5?"199,155,59":"139,45,109"}),me=F=>{F.x=Math.random()*_,F.y=I+F.radius,F.radius=Math.random()*42+18,F.speedY=Math.random()*-.35-.16,F.speedX=Math.random()*.22-.11,F.alpha=Math.random()*.06+.03,F.hue=Math.random()>.5?"199,155,59":"139,45,109"},ce=()=>{E.clearRect(0,0,_,I),W.forEach(F=>{F.y+=F.speedY,F.x+=F.speedX+Math.sin(F.y/90)*.12,F.y<-F.radius&&me(F);const Ce=E.createRadialGradient(F.x,F.y,0,F.x,F.y,F.radius);Ce.addColorStop(0,`rgba(${F.hue}, ${F.alpha})`),Ce.addColorStop(1,`rgba(${F.hue}, 0)`),E.beginPath(),E.fillStyle=Ce,E.arc(F.x,F.y,F.radius,0,Math.PI*2),E.fill()}),R=requestAnimationFrame(ce)};return ue(),W=Array.from({length:34},Q),window.addEventListener("resize",ue),ce(),()=>{cancelAnimationFrame(R),window.removeEventListener("resize",ue)}},[]),fe.useEffect(()=>{if(gl())return;const z=document.querySelector(".cursor-aura");if(!z)return;const E=_=>{le.to(z,{x:_.clientX,y:_.clientY,opacity:1,duration:.7,ease:"power3.out"})},R=()=>{le.to(z,{opacity:0,duration:.5,ease:"power2.out"})};return window.addEventListener("mousemove",E),window.addEventListener("mouseleave",R),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("mouseleave",R)}},[]),fe.useEffect(()=>{const z=gl(),E=le.context(()=>{if(J.getAll().forEach(ue=>ue.kill()),z){le.set(".cinematic-intro, .intro-veil, .intro-mark, .hero-bg, .hero-panel, .hero-date-panel, .hero-content-panel, .hero-art-frame, .hero-monogram, .hero-light-beam, .reveal, .line-reveal, .timeline-item, .modern-collage-card, .rsvp-card, .rsvp-summary, .map-card, .map-details, .footer-names, .footer-quote, .footer-address, .footer-copy, .art-editorial-card, .art-editorial-image, .art-editorial-copy, .art-signature, .quote-card, .luxury-divider",{clearProps:"all",opacity:1,y:0,x:0,scale:1}),le.set(".cinematic-intro",{display:"none"});return}const R="power3.out";le.timeline().fromTo(".intro-mark",{opacity:0,scale:.86,filter:"blur(10px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:1,ease:"power3.out"}).to(".intro-mark",{opacity:0,scale:1.08,filter:"blur(8px)",duration:.7,delay:.45,ease:"power2.inOut"}).to(".intro-veil-left",{xPercent:-102,duration:1.15,ease:"power4.inOut"},"-=0.28").to(".intro-veil-right",{xPercent:102,duration:1.15,ease:"power4.inOut"},"<").set(".cinematic-intro",{display:"none"}),le.timeline({delay:2.35,defaults:{ease:R}}).fromTo(".hero-bg",{opacity:0,scale:1.12},{opacity:.16,scale:1.08,duration:2.4,ease:"none"}).fromTo(".hero-panel",{opacity:0,y:110,scale:.97},{opacity:1,y:0,scale:1,duration:1.35,stagger:.16},"-=1.7").fromTo(".hero .line-reveal",{opacity:0,y:34},{opacity:1,y:0,duration:.9,stagger:.08},"-=0.75").fromTo(".countdown-card",{opacity:0,y:28},{opacity:1,y:0,duration:.72,stagger:.07},"-=0.45");const W=({selector:ue,trigger:Q,y:me=70,x:ce=0,scale:F=1,duration:Ce=.95,stagger:He=.08,start:Wr="top 86%"})=>{const Ke=le.utils.toArray(ue);Ke.length&&le.fromTo(Ke,{opacity:0,y:me,x:ce,scale:F},{opacity:1,y:0,x:0,scale:1,duration:Ce,stagger:He,ease:R,scrollTrigger:{trigger:Q||Ke[0],start:Wr,toggleActions:"play none none none"}})};W({selector:".section-heading.reveal, .invitation-card, .art-editorial-card",y:80,duration:1,stagger:.08}),W({selector:".luxury-divider",y:36,duration:.85,stagger:.08,start:"top 92%"}),le.fromTo(".couple-card:first-child",{opacity:0,x:-70,y:44},{opacity:1,x:0,y:0,duration:1.1,ease:R,scrollTrigger:{trigger:".couple-grid",start:"top 82%",toggleActions:"play none none none"}}),le.fromTo(".couple-card:last-child",{opacity:0,x:70,y:44},{opacity:1,x:0,y:0,duration:1.1,delay:.14,ease:R,scrollTrigger:{trigger:".couple-grid",start:"top 82%",toggleActions:"play none none none"}}),le.fromTo(".center-heart",{opacity:0,scale:.55,rotate:-14},{opacity:1,scale:1,rotate:0,duration:.85,delay:.42,ease:"back.out(1.8)",scrollTrigger:{trigger:".couple-grid",start:"top 82%",toggleActions:"play none none none"}}),W({selector:".venue-img-wrap, .venue-panel",trigger:".venue-card",y:90,stagger:.18,start:"top 82%"}),W({selector:".timeline-item",trigger:".timeline-wrap",y:70,stagger:.16,start:"top 82%"}),le.fromTo(".timeline-progress",{height:"0%"},{height:"100%",ease:"none",scrollTrigger:{trigger:".timeline-wrap",start:"top 72%",end:"bottom 62%",scrub:!0}}),W({selector:".modern-collage-card",trigger:".modern-gallery-collage",y:100,stagger:.11,start:"top 82%"}),W({selector:".rsvp-card, .rsvp-summary, .map-card, .map-details",y:90,stagger:.14,start:"top 84%"}),W({selector:".footer-ornament, .footer-small, .footer-names, .footer-divider, .footer-quote, .footer-address, .footer-copy",trigger:".footer",y:60,stagger:.12,start:"top 90%"}),le.to(".scroll-jewel-progress",{height:"100%",ease:"none",scrollTrigger:{trigger:".artist-wedding-page",start:"top top",end:"bottom bottom",scrub:!0}}),le.to(".hero-bg",{yPercent:13,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),le.to(".venue-img-wrap img",{scale:1.08,yPercent:8,ease:"none",scrollTrigger:{trigger:".venue-card",start:"top bottom",end:"bottom top",scrub:!0}}),le.to(".art-editorial-image img",{scale:1.08,yPercent:8,ease:"none",scrollTrigger:{trigger:".art-editorial-card",start:"top bottom",end:"bottom top",scrub:!0}}),le.fromTo(".art-signature",{opacity:0,y:26,scale:.96},{opacity:1,y:0,scale:1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".art-editorial-card",start:"top 72%",toggleActions:"play none none none"}}),le.fromTo(".quote-card p",{opacity:0,y:36,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",duration:1.1,ease:"power3.out",scrollTrigger:{trigger:".quote-card",start:"top 78%",toggleActions:"play none none none"}}),le.to(".quote-mark",{y:-18,duration:3.8,repeat:-1,yoyo:!0,ease:"sine.inOut"}),le.to(".floating-ornament.one",{y:-18,rotate:6,duration:3.4,repeat:-1,yoyo:!0,ease:"sine.inOut"}),le.to(".floating-ornament.two",{y:20,rotate:-7,duration:3.8,repeat:-1,yoyo:!0,ease:"sine.inOut"}),le.to(".hero-monogram",{y:-10,duration:2.6,repeat:-1,yoyo:!0,ease:"sine.inOut"}),le.to(".beam-one",{xPercent:16,duration:6,repeat:-1,yoyo:!0,ease:"sine.inOut"}),le.to(".beam-two",{xPercent:-14,duration:7,repeat:-1,yoyo:!0,ease:"sine.inOut"}),le.to(".floating-gallery-title",{y:-8,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut"}),le.utils.toArray(".magnetic").forEach(ue=>{const Q=ce=>{const F=ue.getBoundingClientRect(),Ce=ce.clientX-F.left-F.width/2,He=ce.clientY-F.top-F.height/2;le.to(ue,{x:Ce*.18,y:He*.18,duration:.32,ease:"power2.out"})},me=()=>{le.to(ue,{x:0,y:0,duration:.45,ease:"elastic.out(1, 0.35)"})};ue.addEventListener("mousemove",Q),ue.addEventListener("mouseleave",me)}),J.refresh()},t);return()=>E.revert()},[i]),fe.useEffect(()=>{if(gl())return;const z=le.context(()=>{le.timeline().fromTo(".modern-collage-card img",{opacity:0,scale:1.05},{opacity:1,scale:1,duration:.85,stagger:.04,ease:"power3.out"}).fromTo(".collage-main-overlay span, .collage-main-overlay h3, .collage-main-overlay p",{opacity:0,y:24},{opacity:1,y:0,duration:.62,stagger:.08,ease:"power3.out"},"-=0.42")},t);return()=>z.revert()},[c]),fe.useEffect(()=>()=>{r.current&&(r.current.pause(),r.current.src="")},[]);const S=async()=>{if(r.current){if(l){r.current.pause(),s(!1);return}try{await r.current.play(),s(!0)}catch{try{r.current.src=w2,await r.current.play(),s(!0)}catch{s(!1)}}}},N=z=>{z.preventDefault();const E=JSON.parse(localStorage.getItem("wedding_rsvps")||"[]"),R={...f,date:new Date().toLocaleDateString("en-GB")};localStorage.setItem("wedding_rsvps",JSON.stringify([R,...E])),h({name:"",guests:"1",attendance:"attending",message:""}),m(!0),window.setTimeout(()=>m(!1),4e3)},j=()=>{const R=[];d.daysAbbr.forEach((_,I)=>{R.push(p.jsx("div",{className:"calendar-day-header",children:_},`header-${I}`))});for(let _=0;_<2;_+=1)R.push(p.jsx("div",{className:"calendar-day-cell"},`pad-${_}`));for(let _=1;_<=30;_+=1){const I=_===13;R.push(p.jsx("div",{className:`calendar-day-cell ${I?"calendar-day-circled":""}`,children:_},`day-${_}`))}return p.jsxs("div",{className:"calendar-card line-reveal",children:[p.jsxs("div",{className:"calendar-month-name",children:[d.september," ",d.year2026]}),p.jsx("div",{className:"calendar-grid",children:R})]})},C=z=>{const E=document.getElementById(z);E&&E.scrollIntoView({behavior:"smooth",block:"start"})},B=()=>u(null),O=z=>{z.stopPropagation(),u(E=>E===k.length-1?0:E+1)},G=z=>{z.stopPropagation(),u(E=>E===0?k.length-1:E-1)},$=z=>k.length?k[(c+z)%k.length]:"",X=z=>{k.length&&u((c+z)%k.length)},q=[b.days,b.hours,b.minutes,b.seconds];return p.jsxs("div",{ref:t,className:"artist-wedding-page",children:[p.jsxs("div",{className:"cinematic-intro","aria-hidden":"true",children:[p.jsx("div",{className:"intro-veil intro-veil-left"}),p.jsx("div",{className:"intro-veil intro-veil-right"}),p.jsxs("div",{className:"intro-mark",children:[p.jsx("span",{children:v.monogram}),p.jsx("small",{children:v.artLine})]})]}),p.jsx("canvas",{ref:e,className:"wedding-canvas"}),p.jsx("div",{className:"scroll-jewel","aria-hidden":"true",children:p.jsx("span",{className:"scroll-jewel-progress"})}),p.jsx("div",{className:"cursor-aura","aria-hidden":"true"}),p.jsx(eg,{size:64,className:"floating-ornament one","aria-hidden":"true"}),p.jsx(yc,{size:58,className:"floating-ornament two","aria-hidden":"true"}),p.jsxs("div",{className:"page-layer",children:[p.jsxs("div",{className:"floating-controls",children:[p.jsxs("div",{className:"language-switcher-pill","aria-label":"Language switcher",children:[p.jsx("button",{type:"button",className:i==="en"?"active":"",onClick:()=>o("en"),children:"English"}),p.jsx("button",{type:"button",className:i==="ml"?"active":"",onClick:()=>o("ml"),children:"മലയാളം"})]}),p.jsx("button",{type:"button",className:`music-toggle magnetic ${l?"playing":""}`,onClick:S,"aria-label":"Toggle background music",children:l?p.jsx(u2,{size:20}):p.jsx(c2,{size:20})})]}),p.jsx("audio",{ref:r,src:h2,loop:!0,preload:"auto"}),p.jsxs("nav",{className:"luxury-nav","aria-label":"Wedding sections",children:[p.jsx("button",{type:"button",onClick:()=>C("couple"),children:"Couple"}),p.jsx("button",{type:"button",onClick:()=>C("story"),children:"Story"}),p.jsx("button",{type:"button",onClick:()=>C("venue"),children:"Venue"}),p.jsx("button",{type:"button",onClick:()=>C("gallery"),children:"Gallery"}),p.jsx("button",{type:"button",onClick:()=>C("rsvp"),children:"RSVP"})]}),p.jsxs("header",{className:"hero",children:[p.jsx("img",{src:tg,alt:"Wedding resort",className:"hero-bg"}),p.jsx("div",{className:"hero-light-beam beam-one","aria-hidden":"true"}),p.jsx("div",{className:"hero-light-beam beam-two","aria-hidden":"true"}),p.jsxs("div",{className:"hero-art-frame","aria-hidden":"true",children:[p.jsx("span",{className:"corner corner-tl"}),p.jsx("span",{className:"corner corner-tr"}),p.jsx("span",{className:"corner corner-bl"}),p.jsx("span",{className:"corner corner-br"})]}),p.jsx("div",{className:"hero-monogram line-reveal","aria-hidden":"true",children:p.jsx("span",{children:v.monogram})}),p.jsxs("div",{className:"hero-shell",children:[p.jsxs("div",{className:"hero-panel hero-date-panel",children:[p.jsx("div",{className:"eyebrow line-reveal",children:d.saveTheDate}),p.jsxs("div",{className:"script-title line-reveal",children:["Save",p.jsx("span",{children:"The"}),"Date"]}),p.jsx("div",{className:"gold-line line-reveal"}),j(),p.jsx("div",{className:"line-reveal",style:{display:"flex",justifyContent:"center",marginTop:"16px"},children:p.jsxs("button",{type:"button",className:"ghost-button magnetic",style:{backgroundColor:"rgba(255, 255, 255, 0.08)",border:"1px solid rgba(234, 214, 173, 0.3)",color:"var(--champagne)",padding:"8px 16px",fontSize:"10px",borderRadius:"999px"},onClick:w,children:[p.jsx(la,{size:12}),d.saveToCalendar]})}),p.jsxs("div",{className:"hero-mini-names line-reveal",children:[p.jsx("h3",{children:i==="en"?"Muhammad Fayas":"മുഹമ്മദ് ഫയാസ്"}),p.jsx("div",{className:"amp",children:"&"}),p.jsx("h3",{children:i==="en"?"Keerthi Anilkumar":"കീർത്തി അനിൽകുമാർ"})]})]}),p.jsxs("div",{className:"hero-panel hero-content-panel",children:[p.jsxs("div",{className:"content-top line-reveal",children:[p.jsx("div",{className:"eyebrow",children:d.wedding}),p.jsxs("div",{className:"hero-date-large",children:["13 ",p.jsxs("span",{children:[d.sep," 2026"]})]}),p.jsx("div",{className:"weekday",children:d.sunday})]}),p.jsxs("div",{className:"couple-avatar-row line-reveal",children:[p.jsx("img",{src:xc,alt:d.groomName,className:"avatar-img"}),p.jsx("div",{className:"avatar-heart",children:p.jsx(Ni,{size:18,fill:"currentColor"})}),p.jsx("img",{src:_c,alt:d.brideName,className:"avatar-img"})]}),p.jsxs("h1",{className:"hero-names line-reveal",children:["Fayas",p.jsx("span",{children:"and"}),"Keerthi"]}),p.jsxs("p",{className:"hero-subcopy line-reveal",children:[d.togetherWithFamilies,", ",d.heartilyInvites.toLowerCase()," to celebrate a beautiful beginning by the serene backwaters of Kappil."]}),p.jsxs("div",{className:"editorial-ribbon line-reveal",children:[p.jsx(Jh,{size:15}),p.jsx("span",{children:v.artLine}),p.jsx(Jh,{size:15})]}),p.jsx("div",{className:"countdown-grid","aria-label":"Wedding countdown",children:q.map((z,E)=>p.jsxs("div",{className:"countdown-card",children:[p.jsx("span",{className:"countdown-number",ref:R=>{n.current[E]=R},children:String(z).padStart(2,"0")}),p.jsx("span",{className:"countdown-label",children:d.countdown[E]})]},d.countdown[E]))}),p.jsxs("div",{className:"hero-actions line-reveal",children:[p.jsxs("button",{type:"button",className:"primary-button magnetic",onClick:()=>C("couple"),children:[p.jsx(yc,{size:15}),d.exploreBtn]}),p.jsxs("button",{type:"button",className:"ghost-button magnetic",onClick:()=>C("rsvp"),children:[p.jsx(qh,{size:15}),"RSVP"]}),p.jsxs("button",{type:"button",className:"ghost-button magnetic",onClick:w,children:[p.jsx(la,{size:15}),d.saveToCalendar]})]})]})]})]}),p.jsxs("main",{children:[p.jsx("section",{id:"couple",className:"section",children:p.jsxs("div",{className:"section-inner",children:[p.jsxs("div",{className:"section-heading reveal",children:[p.jsxs("div",{className:"section-kicker",children:[p.jsx(eg,{size:15}),d.saveTheDate]}),p.jsx("h2",{className:"section-title",children:d.happyCoupleTitle}),p.jsx("p",{className:"section-copy",children:d.happyCoupleSubtitle})]}),p.jsxs("div",{className:"couple-grid",children:[p.jsxs("article",{className:"couple-card reveal",children:[p.jsxs("div",{className:"couple-photo-wrap",children:[p.jsx("span",{className:"portrait-corner portrait-corner-tl"}),p.jsx("span",{className:"portrait-corner portrait-corner-br"}),p.jsx("img",{src:xc,alt:d.groomName})]}),p.jsxs("div",{className:"couple-info",children:[p.jsx("span",{className:"role-pill",children:d.groomTitle}),p.jsx("h3",{className:"couple-name",children:d.groomName}),p.jsxs("p",{className:"couple-meta",children:[p.jsx("strong",{children:d.groomParents}),p.jsx("br",{}),d.groomHome]}),p.jsxs("a",{href:"tel:9995384667",className:"phone-link",children:[p.jsx(o2,{size:14}),d.callGroom,": 9995384667"]})]})]}),p.jsx("div",{className:"couple-center reveal",children:p.jsx("div",{className:"center-heart",children:p.jsx(Ni,{size:26,fill:"currentColor"})})}),p.jsxs("article",{className:"couple-card reveal",children:[p.jsxs("div",{className:"couple-photo-wrap",children:[p.jsx("span",{className:"portrait-corner portrait-corner-tl"}),p.jsx("span",{className:"portrait-corner portrait-corner-br"}),p.jsx("img",{src:_c,alt:d.brideName})]}),p.jsxs("div",{className:"couple-info",children:[p.jsx("span",{className:"role-pill",children:d.brideTitle}),p.jsx("h3",{className:"couple-name",children:d.brideName}),p.jsxs("p",{className:"couple-meta",children:[p.jsx("strong",{children:d.brideParents}),p.jsx("br",{}),d.brideHome,p.jsx("br",{}),d.brideExtra]})]})]})]})]})}),p.jsx(Dn,{label:v.monogram}),p.jsx("section",{className:"section invitation-section",children:p.jsx("div",{className:"section-inner",children:p.jsxs("article",{className:"invitation-card reveal",children:[p.jsxs("div",{className:"section-kicker",style:{justifyContent:"center"},children:[p.jsx(Ni,{size:14,fill:"currentColor"}),d.saveTheDate]}),p.jsx("h2",{className:"invite-title",children:d.invitationTitle}),p.jsx("p",{className:"invite-text",children:d.inviteText}),p.jsx("div",{className:"gold-line"}),p.jsx("p",{className:"invite-details",children:d.inviteDetails}),p.jsxs("div",{className:"family-row",children:[p.jsxs("div",{className:"family-box",children:[p.jsx("div",{className:"family-title",children:d.groomSide}),p.jsx("div",{className:"family-name",children:d.groomSideFamily})]}),p.jsxs("div",{className:"family-box",children:[p.jsx("div",{className:"family-title",children:d.brideSide}),p.jsx("div",{className:"family-name",children:d.brideSideFamily})]})]})]})})}),p.jsx(Dn,{label:v.monogram}),p.jsx("section",{id:"story",className:"section art-editorial-section",children:p.jsx("div",{className:"section-inner",children:p.jsxs("div",{className:"art-editorial-card reveal",children:[p.jsx("div",{className:"art-editorial-image",children:p.jsx("img",{src:tg,alt:"Romantic wedding atmosphere"})}),p.jsxs("div",{className:"art-editorial-copy",children:[p.jsxs("div",{className:"section-kicker",children:[p.jsx(t2,{size:15}),"The Story"]}),p.jsx("h2",{className:"section-title",children:v.editorialTitle}),p.jsx("p",{className:"art-large-copy",children:v.editorialCopy}),p.jsxs("div",{className:"art-signature",children:[p.jsx("span",{children:v.monogram}),p.jsx("small",{children:v.closingSmall})]})]})]})})}),p.jsx(Dn,{label:v.monogram}),p.jsx("section",{id:"venue",className:"section",children:p.jsx("div",{className:"section-inner",children:p.jsxs("div",{className:"venue-card reveal",children:[p.jsx("div",{className:"venue-img-wrap",children:p.jsx("img",{src:f2,alt:"Serene Lake Resort"})}),p.jsxs("div",{className:"venue-panel",children:[p.jsxs("div",{className:"section-kicker",children:[p.jsx(mc,{size:15}),d.venueTitle]}),p.jsx("h2",{className:"venue-name",children:i==="en"?"Serene Lake Resort":"സെറീൻ ലേക്ക് റിസോർട്ട്"}),p.jsx("p",{className:"venue-address",children:i==="en"?"Edava Parayil Kappil Rd, PO, Edava, Kerala 695311, India":"എടവ പറയിൽ കാപ്പിൽ റോഡ്, പി.ഒ, എടവ, കേരളം 695311"}),p.jsxs("div",{className:"info-grid",children:[p.jsxs("div",{className:"info-card",children:[p.jsx("div",{className:"info-icon",children:p.jsx(la,{size:20})}),p.jsxs("div",{children:[p.jsx("div",{className:"info-label",children:d.on}),p.jsx("div",{className:"info-value",children:d.dateStringFormatted})]})]}),p.jsxs("div",{className:"info-card",children:[p.jsx("div",{className:"info-icon",children:p.jsx(Zh,{size:20})}),p.jsxs("div",{children:[p.jsx("div",{className:"info-label",children:d.ceremonyTime}),p.jsx("div",{className:"info-value",children:d.muhurthamTime})]})]}),p.jsxs("div",{className:"info-card",children:[p.jsx("div",{className:"info-icon",children:p.jsx(mc,{size:20})}),p.jsxs("div",{children:[p.jsx("div",{className:"info-label",children:d.venueLocation}),p.jsx("div",{className:"info-value",children:d.lakesideResort})]})]})]}),p.jsxs("a",{href:"https://share.google/XJDjMzsVDy1ivyNee",target:"_blank",rel:"noopener noreferrer",className:"gold-button magnetic",children:[p.jsx(vc,{size:15}),d.openMap]})]})]})})}),p.jsx(Dn,{label:v.monogram}),p.jsx("section",{className:"section",children:p.jsxs("div",{className:"section-inner",children:[p.jsxs("div",{className:"section-heading reveal",children:[p.jsxs("div",{className:"section-kicker",children:[p.jsx(Zh,{size:15}),"Ceremony"]}),p.jsx("h2",{className:"section-title",children:d.scheduleTitle}),p.jsx("p",{className:"section-copy",children:d.scheduleSubtitle})]}),p.jsxs("div",{className:"timeline-wrap",children:[p.jsx("div",{className:"timeline-line","aria-hidden":"true",children:p.jsx("div",{className:"timeline-progress"})}),T.map(z=>{const E=z.icon;return p.jsxs("article",{className:"timeline-item",children:[p.jsx("span",{className:"timeline-dot","aria-hidden":"true"}),p.jsx("div",{className:"timeline-time",children:z.time}),p.jsxs("h3",{className:"timeline-title",children:[p.jsx(E,{size:17})," ",z.title]}),p.jsx("p",{className:"timeline-copy",children:z.copy})]},`${z.time}-${z.title}`)})]})]})}),p.jsx(Dn,{label:v.monogram}),p.jsx("section",{id:"gallery",className:"section gallery-section",children:p.jsxs("div",{className:"section-inner",children:[p.jsxs("div",{className:"section-heading reveal",children:[p.jsxs("div",{className:"section-kicker",children:[p.jsx(n2,{size:15}),"Memories"]}),p.jsx("h2",{className:"section-title",children:d.galleryTitle}),p.jsx("p",{className:"section-copy",children:d.gallerySubtitle})]}),p.jsxs("div",{className:"modern-gallery-collage",children:[p.jsxs("button",{type:"button",className:"modern-collage-card collage-main",onClick:()=>X(0),children:[p.jsx("img",{src:$(0),alt:"Wedding highlight"}),p.jsxs("div",{className:"collage-main-overlay",children:[p.jsx("span",{children:d.saveTheDate}),p.jsx("h3",{className:"floating-gallery-title",children:"Happily Ever After"}),p.jsx("p",{children:d.dateStringFormatted})]})]}),p.jsx("button",{type:"button",className:"modern-collage-card collage-small-top",onClick:()=>X(1),children:p.jsx("img",{src:$(1),alt:"Wedding memory"})}),p.jsxs("div",{className:"modern-collage-card collage-name-card",children:[p.jsx("p",{children:d.togetherWithFamilies}),p.jsxs("h3",{children:["Fayas ",p.jsx("span",{children:"&"})," Keerthi"]}),p.jsx("small",{children:d.heartilyInvites})]}),p.jsxs("button",{type:"button",className:"modern-collage-card collage-wide",onClick:()=>X(2),children:[p.jsx("img",{src:$(2),alt:"Wedding memory"}),p.jsxs("div",{className:"collage-photo-badge",children:[p.jsx(Ni,{size:14,fill:"currentColor"}),"Moments"]})]}),p.jsx("button",{type:"button",className:"modern-collage-card collage-tall",onClick:()=>X(3),children:p.jsx("img",{src:$(3),alt:"Wedding memory"})}),p.jsx("button",{type:"button",className:"modern-collage-card collage-bottom",onClick:()=>X(4),children:p.jsx("img",{src:$(4),alt:"Wedding memory"})})]}),p.jsx("div",{className:"gallery-dots",children:k.map((z,E)=>p.jsx("button",{type:"button",className:E===c?"active":"",onClick:()=>g(E),"aria-label":`Show gallery slide ${E+1}`},E))})]})}),p.jsx(Dn,{label:v.monogram}),p.jsx("section",{id:"rsvp",className:"section rsvp-section",children:p.jsxs("div",{className:"section-inner",children:[p.jsxs("div",{className:"section-heading reveal",children:[p.jsxs("div",{className:"section-kicker",children:[p.jsx(qh,{size:15}),"RSVP"]}),p.jsx("h2",{className:"section-title",children:d.rsvpTitle}),p.jsx("p",{className:"section-copy",children:d.rsvpSubtitle})]}),p.jsxs("div",{className:"rsvp-grid",children:[p.jsxs("div",{className:"rsvp-card",children:[p.jsx("h3",{className:"card-title",children:d.rsvpTitle}),p.jsxs("form",{onSubmit:N,children:[p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",htmlFor:"rsvp-name",children:d.rsvpName}),p.jsx("input",{id:"rsvp-name",className:"form-input",type:"text",required:!0,value:f.name,onChange:z=>h({...f,name:z.target.value})})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",htmlFor:"rsvp-guests",children:d.rsvpGuests}),p.jsx("input",{id:"rsvp-guests",className:"form-input",type:"number",min:"1",max:"20",value:f.guests,onChange:z=>h({...f,guests:z.target.value})})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",htmlFor:"rsvp-attendance",children:d.rsvpAttendance}),p.jsxs("select",{id:"rsvp-attendance",className:"form-select",value:f.attendance,onChange:z=>h({...f,attendance:z.target.value}),children:[p.jsx("option",{value:"attending",children:d.attending}),p.jsx("option",{value:"not-attending",children:d.notAttending})]})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",htmlFor:"rsvp-message",children:d.rsvpMessage}),p.jsx("textarea",{id:"rsvp-message",className:"form-textarea",value:f.message,onChange:z=>h({...f,message:z.target.value})})]}),p.jsxs("button",{type:"submit",className:"gold-button magnetic",style:{width:"100%"},children:[p.jsx(l2,{size:15}),d.rsvpSend]}),x&&p.jsx("div",{className:"success-message",children:d.rsvpThanks})]})]}),p.jsxs("aside",{className:"rsvp-summary",children:[p.jsx("h3",{className:"card-title",children:d.rsvpNoteTitle}),p.jsxs("div",{className:"rsvp-mini-grid",children:[p.jsxs("div",{className:"rsvp-mini-card",children:[p.jsx("div",{className:"rsvp-mini-icon",children:p.jsx(r2,{size:19})}),p.jsxs("div",{children:[p.jsx("h4",{children:d.togetherWithFamilies}),p.jsx("p",{children:d.rsvpNote})]})]}),p.jsxs("div",{className:"rsvp-mini-card",children:[p.jsx("div",{className:"rsvp-mini-icon",children:p.jsx(la,{size:19})}),p.jsxs("div",{children:[p.jsx("h4",{children:d.dateStringFormatted}),p.jsx("p",{children:d.muhurthamTime})]})]}),p.jsxs("div",{className:"rsvp-mini-card",children:[p.jsx("div",{className:"rsvp-mini-icon",children:p.jsx(i2,{size:19})}),p.jsxs("div",{children:[p.jsx("h4",{children:i==="en"?"Celebration":"ആഘോഷം"}),p.jsx("p",{children:d.inviteDetails})]})]})]})]})]})]})}),p.jsx(Dn,{label:v.monogram}),p.jsx("section",{className:"section map-section",children:p.jsxs("div",{className:"section-inner",children:[p.jsxs("div",{className:"section-heading reveal",children:[p.jsxs("div",{className:"section-kicker",children:[p.jsx(mc,{size:15}),"Location"]}),p.jsx("h2",{className:"section-title",children:d.mapTitle}),p.jsx("p",{className:"section-copy",children:d.mapSubtitle})]}),p.jsxs("div",{className:"map-grid",children:[p.jsx("div",{className:"map-card",children:p.jsx("iframe",{title:"Serene Lake Resort Map",className:"map-frame",loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade",src:"https://www.google.com/maps?q=Serene%20Lake%20Resort%20Kappil%20Edava%20Kerala&output=embed"})}),p.jsxs("div",{className:"map-details",children:[p.jsxs("div",{className:"section-kicker",children:[p.jsx(vc,{size:15}),d.venueLocation]}),p.jsx("h3",{className:"venue-name",children:i==="en"?"Serene Lake Resort":"സെറീൻ ലേക്ക് റിസോർട്ട്"}),p.jsx("p",{className:"venue-address",children:i==="en"?"Edava Parayil Kappil Rd, PO, Edava, Kerala 695311, India":"എടവ പറയിൽ കാപ്പിൽ റോഡ്, പി.ഒ, എടവ, കേരളം 695311"}),p.jsx("p",{className:"section-copy",style:{marginLeft:0},children:d.mapHelp}),p.jsxs("a",{href:"https://share.google/XJDjMzsVDy1ivyNee",target:"_blank",rel:"noopener noreferrer",className:"gold-button magnetic",style:{alignSelf:"flex-start",marginTop:22},children:[p.jsx(vc,{size:15}),d.openMap]})]})]})]})}),p.jsx(Dn,{label:v.monogram}),p.jsx("section",{className:"section quote-section",children:p.jsx("div",{className:"section-inner",children:p.jsxs("div",{className:"quote-card reveal",children:[p.jsx("div",{className:"quote-mark",children:"“"}),p.jsx("p",{children:v.quote}),p.jsx("span",{children:v.monogram})]})})})]}),p.jsxs("footer",{className:"footer",children:[p.jsx("div",{className:"footer-ornament","aria-hidden":"true",children:p.jsx(e2,{size:26})}),p.jsx("p",{className:"footer-small",children:v.closingSmall}),p.jsx("h2",{className:"footer-names",children:i==="en"?"Muhammad Fayas & Keerthi":"മുഹമ്മദ് ഫയാസ് & കീർത്തി"}),p.jsxs("div",{className:"footer-divider",children:[p.jsx("span",{}),p.jsx(Ni,{size:15,fill:"currentColor"}),p.jsx("span",{})]}),p.jsx("p",{className:"footer-quote",children:d.footerQuote}),p.jsx("div",{className:"footer-address",children:d.footerAddress}),p.jsx("div",{className:"footer-copy",children:d.footerCopyright}),p.jsxs("div",{className:"footer-copy",style:{marginTop:"12px",opacity:.8},children:["made with"," ",p.jsx("a",{href:"https://triredglobal.com/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--champagne)",textDecoration:"none",fontWeight:600,borderBottom:"1px solid rgba(234, 214, 173, 0.4)",transition:"color 0.25s ease, border-color 0.25s ease"},className:"studio-link",children:"trired global venture studio"})]})]}),a!==null&&p.jsxs("div",{className:"lightbox-modal",onClick:B,children:[p.jsx("button",{type:"button",className:"lightbox-button lightbox-close",onClick:B,"aria-label":"Close gallery",children:p.jsx(d2,{size:22})}),p.jsx("button",{type:"button",className:"lightbox-button lightbox-prev",onClick:G,"aria-label":"Previous image",children:p.jsx(Z_,{size:24})}),p.jsx("img",{src:k[a],alt:`Wedding large memory ${a+1}`,className:"lightbox-img",onClick:z=>z.stopPropagation()}),p.jsx("button",{type:"button",className:"lightbox-button lightbox-next",onClick:O,"aria-label":"Next image",children:p.jsx(J_,{size:24})})]})]})]})}function E2(){return p.jsx(N2,{})}wc.createRoot(document.getElementById("root")).render(p.jsx(J1.StrictMode,{children:p.jsx(E2,{})}));
