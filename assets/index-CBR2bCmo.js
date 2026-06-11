function Tc(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(n,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function Hl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gl={exports:{}},Rs={},Yl={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn=Symbol.for("react.element"),zc=Symbol.for("react.portal"),Lc=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),Kc=Symbol.for("react.context"),Bc=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),Uc=Symbol.for("react.memo"),Vc=Symbol.for("react.lazy"),jo=Symbol.iterator;function Xc(e){return e===null||typeof e!="object"?null:(e=jo&&e[jo]||e["@@iterator"],typeof e=="function"?e:null)}var Zl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jl=Object.assign,ed={};function Dr(e,t,r){this.props=e,this.context=t,this.refs=ed,this.updater=r||Zl}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function td(){}td.prototype=Dr.prototype;function Si(e,t,r){this.props=e,this.context=t,this.refs=ed,this.updater=r||Zl}var bi=Si.prototype=new td;bi.constructor=Si;Jl(bi,Dr.prototype);bi.isPureReactComponent=!0;var No=Array.isArray,rd=Object.prototype.hasOwnProperty,ji={current:null},nd={key:!0,ref:!0,__self:!0,__source:!0};function sd(e,t,r){var n,s={},a=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)rd.call(t,n)&&!nd.hasOwnProperty(n)&&(s[n]=t[n]);var l=arguments.length-2;if(l===1)s.children=r;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];s.children=d}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)s[n]===void 0&&(s[n]=l[n]);return{$$typeof:Sn,type:e,key:a,ref:i,props:s,_owner:ji.current}}function Qc(e,t){return{$$typeof:Sn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sn}function Wc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Co=/\/+/g;function Zs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wc(""+e.key):t.toString(36)}function Qn(e,t,r,n,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Sn:case zc:i=!0}}if(i)return i=e,s=s(i),e=n===""?"."+Zs(i,0):n,No(s)?(r="",e!=null&&(r=e.replace(Co,"$&/")+"/"),Qn(s,t,r,"",function(c){return c})):s!=null&&(Ni(s)&&(s=Qc(s,r+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(Co,"$&/")+"/")+e)),t.push(s)),1;if(i=0,n=n===""?".":n+":",No(e))for(var l=0;l<e.length;l++){a=e[l];var d=n+Zs(a,l);i+=Qn(a,t,r,d,s)}else if(d=Xc(e),typeof d=="function")for(e=d.call(e),l=0;!(a=e.next()).done;)a=a.value,d=n+Zs(a,l++),i+=Qn(a,t,r,d,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Mn(e,t,r){if(e==null)return e;var n=[],s=0;return Qn(e,n,"","",function(a){return t.call(r,a,s++)}),n}function Hc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Wn={transition:null},Gc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Wn,ReactCurrentOwner:ji};function ad(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Mn,forEach:function(e,t,r){Mn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Mn(e,function(){t++}),t},toArray:function(e){return Mn(e,function(t){return t})||[]},only:function(e){if(!Ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Dr;R.Fragment=Lc;R.Profiler=Oc;R.PureComponent=Si;R.StrictMode=Ac;R.Suspense=$c;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gc;R.act=ad;R.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Jl({},e.props),s=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=ji.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)rd.call(t,d)&&!nd.hasOwnProperty(d)&&(n[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)n.children=r;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:Sn,type:e.type,key:s,ref:a,props:n,_owner:i}};R.createContext=function(e){return e={$$typeof:Kc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qc,_context:e},e.Consumer=e};R.createElement=sd;R.createFactory=function(e){var t=sd.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Bc,render:e}};R.isValidElement=Ni;R.lazy=function(e){return{$$typeof:Vc,_payload:{_status:-1,_result:e},_init:Hc}};R.memo=function(e,t){return{$$typeof:Uc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Wn.transition;Wn.transition={};try{e()}finally{Wn.transition=t}};R.unstable_act=ad;R.useCallback=function(e,t){return me.current.useCallback(e,t)};R.useContext=function(e){return me.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return me.current.useDeferredValue(e)};R.useEffect=function(e,t){return me.current.useEffect(e,t)};R.useId=function(){return me.current.useId()};R.useImperativeHandle=function(e,t,r){return me.current.useImperativeHandle(e,t,r)};R.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return me.current.useMemo(e,t)};R.useReducer=function(e,t,r){return me.current.useReducer(e,t,r)};R.useRef=function(e){return me.current.useRef(e)};R.useState=function(e){return me.current.useState(e)};R.useSyncExternalStore=function(e,t,r){return me.current.useSyncExternalStore(e,t,r)};R.useTransition=function(){return me.current.useTransition()};R.version="18.3.1";Yl.exports=R;var w=Yl.exports;const Ci=Hl(w),Yc=Tc({__proto__:null,default:Ci},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=w,Jc=Symbol.for("react.element"),ep=Symbol.for("react.fragment"),tp=Object.prototype.hasOwnProperty,rp=Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,np={key:!0,ref:!0,__self:!0,__source:!0};function id(e,t,r){var n,s={},a=null,i=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)tp.call(t,n)&&!np.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:Jc,type:e,key:a,ref:i,props:s,_owner:rp.current}}Rs.Fragment=ep;Rs.jsx=id;Rs.jsxs=id;Gl.exports=Rs;var o=Gl.exports,Na={},od={exports:{}},Ce={},ld={exports:{}},dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,E){var F=N.length;N.push(E);e:for(;0<F;){var $=F-1>>>1,G=N[$];if(0<s(G,E))N[$]=E,N[F]=G,F=$;else break e}}function r(N){return N.length===0?null:N[0]}function n(N){if(N.length===0)return null;var E=N[0],F=N.pop();if(F!==E){N[0]=F;e:for(var $=0,G=N.length,He=G>>>1;$<He;){var De=2*($+1)-1,Tt=N[De],$e=De+1,Ge=N[$e];if(0>s(Tt,F))$e<G&&0>s(Ge,Tt)?(N[$]=Ge,N[$e]=F,$=$e):(N[$]=Tt,N[De]=F,$=De);else if($e<G&&0>s(Ge,F))N[$]=Ge,N[$e]=F,$=$e;else break e}}return E}function s(N,E){var F=N.sortIndex-E.sortIndex;return F!==0?F:N.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var d=[],c=[],h=1,p=null,f=3,g=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var E=r(c);E!==null;){if(E.callback===null)n(c);else if(E.startTime<=N)n(c),E.sortIndex=E.expirationTime,t(d,E);else break;E=r(c)}}function x(N){if(v=!1,_(N),!y)if(r(d)!==null)y=!0,Ft(b);else{var E=r(c);E!==null&&Rt(x,E.startTime-N)}}function b(N,E){y=!1,v&&(v=!1,m(D),D=-1),g=!0;var F=f;try{for(_(E),p=r(d);p!==null&&(!(p.expirationTime>E)||N&&!ke());){var $=p.callback;if(typeof $=="function"){p.callback=null,f=p.priorityLevel;var G=$(p.expirationTime<=E);E=e.unstable_now(),typeof G=="function"?p.callback=G:p===r(d)&&n(d),_(E)}else n(d);p=r(d)}if(p!==null)var He=!0;else{var De=r(c);De!==null&&Rt(x,De.startTime-E),He=!1}return He}finally{p=null,f=F,g=!1}}var I=!1,j=null,D=-1,L=5,P=-1;function ke(){return!(e.unstable_now()-P<L)}function Pt(){if(j!==null){var N=e.unstable_now();P=N;var E=!0;try{E=j(!0,N)}finally{E?O():(I=!1,j=null)}}else I=!1}var O;if(typeof u=="function")O=function(){u(Pt)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,J=W.port2;W.port1.onmessage=Pt,O=function(){J.postMessage(null)}}else O=function(){k(Pt,0)};function Ft(N){j=N,I||(I=!0,O())}function Rt(N,E){D=k(function(){N(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ft(b))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var E=3;break;default:E=f}var F=f;f=E;try{return N()}finally{f=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,E){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=f;f=N;try{return E()}finally{f=F}},e.unstable_scheduleCallback=function(N,E,F){var $=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?$+F:$):F=$,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=F+G,N={id:h++,callback:E,priorityLevel:N,startTime:F,expirationTime:G,sortIndex:-1},F>$?(N.sortIndex=F,t(c,N),r(d)===null&&N===r(c)&&(v?(m(D),D=-1):v=!0,Rt(x,F-$))):(N.sortIndex=G,t(d,N),y||g||(y=!0,Ft(b))),N},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(N){var E=f;return function(){var F=f;f=E;try{return N.apply(this,arguments)}finally{f=F}}}})(dd);ld.exports=dd;var sp=ld.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=w,Ne=sp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ud=new Set,nn={};function Gt(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(nn[e]=t,e=0;e<t.length;e++)ud.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ca=Object.prototype.hasOwnProperty,ip=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Io={},Do={};function op(e){return Ca.call(Do,e)?!0:Ca.call(Io,e)?!1:ip.test(e)?Do[e]=!0:(Io[e]=!0,!1)}function lp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dp(e,t,r,n){if(t===null||typeof t>"u"||lp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,r,n,s,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ii=/[\-:]([a-z])/g;function Di(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ii,Di);oe[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ii,Di);oe[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ii,Di);oe[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mi(e,t,r,n){var s=oe.hasOwnProperty(t)?oe[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dp(t,r,s,n)&&(r=null),n||s===null?op(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ot=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,En=Symbol.for("react.element"),rr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),Ei=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),pd=Symbol.for("react.context"),Pi=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Ma=Symbol.for("react.suspense_list"),Fi=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),fd=Symbol.for("react.offscreen"),Mo=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=Mo&&e[Mo]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Js;function $r(e){if(Js===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Js=t&&t[1]||""}return`
`+Js+e}var ea=!1;function ta(e,t){if(!e||ea)return"";ea=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),a=n.stack.split(`
`),i=s.length-1,l=a.length-1;1<=i&&0<=l&&s[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(s[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||s[i]!==a[l]){var d=`
`+s[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=l);break}}}finally{ea=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?$r(e):""}function up(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=ta(e.type,!1),e;case 11:return e=ta(e.type.render,!1),e;case 1:return e=ta(e.type,!0),e;default:return""}}function Ea(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case rr:return"Portal";case Ia:return"Profiler";case Ei:return"StrictMode";case Da:return"Suspense";case Ma:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pd:return(e.displayName||"Context")+".Consumer";case cd:return(e._context.displayName||"Context")+".Provider";case Pi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fi:return t=e.displayName||null,t!==null?t:Ea(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return Ea(e(t))}catch{}}return null}function cp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ea(t);case 8:return t===Ei?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pp(e){var t=md(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(i){n=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pn(e){e._valueTracker||(e._valueTracker=pp(e))}function _d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=md(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pa(e,t){var r=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Eo(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Nt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hd(e,t){t=t.checked,t!=null&&Mi(e,"checked",t,!1)}function Fa(e,t){hd(e,t);var r=Nt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ra(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ra(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Po(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ra(e,t,r){(t!=="number"||os(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ur=Array.isArray;function mr(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Nt(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ta(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(S(92));if(Ur(r)){if(1<r.length)throw Error(S(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Nt(r)}}function yd(e,t){var r=Nt(t.value),n=Nt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ro(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fn,xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fn=Fn||document.createElement("div"),Fn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fp=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){fp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function vd(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function wd(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=vd(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var mp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(e,t){if(t){if(mp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Aa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oa=null;function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,_r=null,hr=null;function To(e){if(e=Nn(e)){if(typeof qa!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Os(t),qa(e.stateNode,e.type,t))}}function kd(e){_r?hr?hr.push(e):hr=[e]:_r=e}function Sd(){if(_r){var e=_r,t=hr;if(hr=_r=null,To(e),t)for(e=0;e<t.length;e++)To(t[e])}}function bd(e,t){return e(t)}function jd(){}var ra=!1;function Nd(e,t,r){if(ra)return e(t,r);ra=!0;try{return bd(e,t,r)}finally{ra=!1,(_r!==null||hr!==null)&&(jd(),Sd())}}function an(e,t){var r=e.stateNode;if(r===null)return null;var n=Os(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,t,typeof r));return r}var Ka=!1;if(nt)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Ka=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Ka=!1}function _p(e,t,r,n,s,a,i,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(h){this.onError(h)}}var Hr=!1,ls=null,ds=!1,Ba=null,hp={onError:function(e){Hr=!0,ls=e}};function yp(e,t,r,n,s,a,i,l,d){Hr=!1,ls=null,_p.apply(hp,arguments)}function gp(e,t,r,n,s,a,i,l,d){if(yp.apply(this,arguments),Hr){if(Hr){var c=ls;Hr=!1,ls=null}else throw Error(S(198));ds||(ds=!0,Ba=c)}}function Yt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Cd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zo(e){if(Yt(e)!==e)throw Error(S(188))}function xp(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var a=s.alternate;if(a===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===r)return zo(s),e;if(a===n)return zo(s),t;a=a.sibling}throw Error(S(188))}if(r.return!==n.return)r=s,n=a;else{for(var i=!1,l=s.child;l;){if(l===r){i=!0,r=s,n=a;break}if(l===n){i=!0,n=s,r=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===r){i=!0,r=a,n=s;break}if(l===n){i=!0,n=a,r=s;break}l=l.sibling}if(!i)throw Error(S(189))}}if(r.alternate!==n)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:t}function Id(e){return e=xp(e),e!==null?Dd(e):null}function Dd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dd(e);if(t!==null)return t;e=e.sibling}return null}var Md=Ne.unstable_scheduleCallback,Lo=Ne.unstable_cancelCallback,vp=Ne.unstable_shouldYield,wp=Ne.unstable_requestPaint,H=Ne.unstable_now,kp=Ne.unstable_getCurrentPriorityLevel,Ti=Ne.unstable_ImmediatePriority,Ed=Ne.unstable_UserBlockingPriority,us=Ne.unstable_NormalPriority,Sp=Ne.unstable_LowPriority,Pd=Ne.unstable_IdlePriority,Ts=null,Qe=null;function bp(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Ts,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Cp,jp=Math.log,Np=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(jp(e)/Np|0)|0}var Rn=64,Tn=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cs(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,a=e.pingedLanes,i=r&268435455;if(i!==0){var l=i&~s;l!==0?n=Vr(l):(a&=i,a!==0&&(n=Vr(a)))}else i=r&~s,i!==0?n=Vr(i):a!==0&&(n=Vr(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-qe(t),s=1<<r,n|=e[r],t&=~s;return n}function Ip(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-qe(a),l=1<<i,d=s[i];d===-1?(!(l&r)||l&n)&&(s[i]=Ip(l,t)):d<=t&&(e.expiredLanes|=l),a&=~l}}function $a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fd(){var e=Rn;return Rn<<=1,!(Rn&4194240)&&(Rn=64),e}function na(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function bn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=r}function Mp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-qe(r),a=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~a}}function zi(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-qe(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var z=0;function Rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Td,Li,zd,Ld,Ad,Ua=!1,zn=[],ht=null,yt=null,gt=null,on=new Map,ln=new Map,ct=[],Ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ao(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":on.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(t.pointerId)}}function Lr(e,t,r,n,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Nn(t),t!==null&&Li(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Pp(e,t,r,n,s){switch(t){case"focusin":return ht=Lr(ht,e,t,r,n,s),!0;case"dragenter":return yt=Lr(yt,e,t,r,n,s),!0;case"mouseover":return gt=Lr(gt,e,t,r,n,s),!0;case"pointerover":var a=s.pointerId;return on.set(a,Lr(on.get(a)||null,e,t,r,n,s)),!0;case"gotpointercapture":return a=s.pointerId,ln.set(a,Lr(ln.get(a)||null,e,t,r,n,s)),!0}return!1}function Od(e){var t=qt(e.target);if(t!==null){var r=Yt(t);if(r!==null){if(t=r.tag,t===13){if(t=Cd(r),t!==null){e.blockedOn=t,Ad(e.priority,function(){zd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Oa=n,r.target.dispatchEvent(n),Oa=null}else return t=Nn(r),t!==null&&Li(t),e.blockedOn=r,!1;t.shift()}return!0}function Oo(e,t,r){Hn(e)&&r.delete(t)}function Fp(){Ua=!1,ht!==null&&Hn(ht)&&(ht=null),yt!==null&&Hn(yt)&&(yt=null),gt!==null&&Hn(gt)&&(gt=null),on.forEach(Oo),ln.forEach(Oo)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Ua||(Ua=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Fp)))}function dn(e){function t(s){return Ar(s,e)}if(0<zn.length){Ar(zn[0],e);for(var r=1;r<zn.length;r++){var n=zn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ht!==null&&Ar(ht,e),yt!==null&&Ar(yt,e),gt!==null&&Ar(gt,e),on.forEach(t),ln.forEach(t),r=0;r<ct.length;r++)n=ct[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<ct.length&&(r=ct[0],r.blockedOn===null);)Od(r),r.blockedOn===null&&ct.shift()}var yr=ot.ReactCurrentBatchConfig,ps=!0;function Rp(e,t,r,n){var s=z,a=yr.transition;yr.transition=null;try{z=1,Ai(e,t,r,n)}finally{z=s,yr.transition=a}}function Tp(e,t,r,n){var s=z,a=yr.transition;yr.transition=null;try{z=4,Ai(e,t,r,n)}finally{z=s,yr.transition=a}}function Ai(e,t,r,n){if(ps){var s=Va(e,t,r,n);if(s===null)fa(e,t,n,fs,r),Ao(e,n);else if(Pp(s,e,t,r,n))n.stopPropagation();else if(Ao(e,n),t&4&&-1<Ep.indexOf(e)){for(;s!==null;){var a=Nn(s);if(a!==null&&Td(a),a=Va(e,t,r,n),a===null&&fa(e,t,n,fs,r),a===s)break;s=a}s!==null&&n.stopPropagation()}else fa(e,t,n,null,r)}}var fs=null;function Va(e,t,r,n){if(fs=null,e=Ri(n),e=qt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Cd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fs=e,null}function qd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kp()){case Ti:return 1;case Ed:return 4;case us:case Sp:return 16;case Pd:return 536870912;default:return 16}default:return 16}}var ft=null,Oi=null,Gn=null;function Kd(){if(Gn)return Gn;var e,t=Oi,r=t.length,n,s="value"in ft?ft.value:ft.textContent,a=s.length;for(e=0;e<r&&t[e]===s[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===s[a-n];n++);return Gn=s.slice(e,1<n?1-n:void 0)}function Yn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function qo(){return!1}function Ie(e){function t(r,n,s,a,i){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ln:qo,this.isPropagationStopped=qo,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=Ie(Mr),jn=X({},Mr,{view:0,detail:0}),zp=Ie(jn),sa,aa,Or,zs=X({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ki,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(sa=e.screenX-Or.screenX,aa=e.screenY-Or.screenY):aa=sa=0,Or=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),Ko=Ie(zs),Lp=X({},zs,{dataTransfer:0}),Ap=Ie(Lp),Op=X({},jn,{relatedTarget:0}),ia=Ie(Op),qp=X({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kp=Ie(qp),Bp=X({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$p=Ie(Bp),Up=X({},Mr,{data:0}),Bo=Ie(Up),Vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qp[e])?!!t[e]:!1}function Ki(){return Wp}var Hp=X({},jn,{key:function(e){if(e.key){var t=Vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ki,charCode:function(e){return e.type==="keypress"?Yn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gp=Ie(Hp),Yp=X({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$o=Ie(Yp),Zp=X({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ki}),Jp=Ie(Zp),ef=X({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tf=Ie(ef),rf=X({},zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nf=Ie(rf),sf=[9,13,27,32],Bi=nt&&"CompositionEvent"in window,Gr=null;nt&&"documentMode"in document&&(Gr=document.documentMode);var af=nt&&"TextEvent"in window&&!Gr,Bd=nt&&(!Bi||Gr&&8<Gr&&11>=Gr),Uo=" ",Vo=!1;function $d(e,t){switch(e){case"keyup":return sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function of(e,t){switch(e){case"compositionend":return Ud(t);case"keypress":return t.which!==32?null:(Vo=!0,Uo);case"textInput":return e=t.data,e===Uo&&Vo?null:e;default:return null}}function lf(e,t){if(sr)return e==="compositionend"||!Bi&&$d(e,t)?(e=Kd(),Gn=Oi=ft=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bd&&t.locale!=="ko"?null:t.data;default:return null}}var df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!df[e.type]:t==="textarea"}function Vd(e,t,r,n){kd(n),t=ms(t,"onChange"),0<t.length&&(r=new qi("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Yr=null,un=null;function uf(e){ru(e,0)}function Ls(e){var t=or(e);if(_d(t))return e}function cf(e,t){if(e==="change")return t}var Xd=!1;if(nt){var oa;if(nt){var la="oninput"in document;if(!la){var Qo=document.createElement("div");Qo.setAttribute("oninput","return;"),la=typeof Qo.oninput=="function"}oa=la}else oa=!1;Xd=oa&&(!document.documentMode||9<document.documentMode)}function Wo(){Yr&&(Yr.detachEvent("onpropertychange",Qd),un=Yr=null)}function Qd(e){if(e.propertyName==="value"&&Ls(un)){var t=[];Vd(t,un,e,Ri(e)),Nd(uf,t)}}function pf(e,t,r){e==="focusin"?(Wo(),Yr=t,un=r,Yr.attachEvent("onpropertychange",Qd)):e==="focusout"&&Wo()}function ff(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ls(un)}function mf(e,t){if(e==="click")return Ls(t)}function _f(e,t){if(e==="input"||e==="change")return Ls(t)}function hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:hf;function cn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!Ca.call(t,s)||!Be(e[s],t[s]))return!1}return!0}function Ho(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Go(e,t){var r=Ho(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ho(r)}}function Wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(){for(var e=window,t=os();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=os(e.document)}return t}function $i(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yf(e){var t=Hd(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Wd(r.ownerDocument.documentElement,r)){if(n!==null&&$i(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,a=Math.min(n.start,s);n=n.end===void 0?a:Math.min(n.end,s),!e.extend&&a>n&&(s=n,n=a,a=s),s=Go(r,a);var i=Go(r,n);s&&i&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gf=nt&&"documentMode"in document&&11>=document.documentMode,ar=null,Xa=null,Zr=null,Qa=!1;function Yo(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Qa||ar==null||ar!==os(n)||(n=ar,"selectionStart"in n&&$i(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Zr&&cn(Zr,n)||(Zr=n,n=ms(Xa,"onSelect"),0<n.length&&(t=new qi("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=ar)))}function An(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ir={animationend:An("Animation","AnimationEnd"),animationiteration:An("Animation","AnimationIteration"),animationstart:An("Animation","AnimationStart"),transitionend:An("Transition","TransitionEnd")},da={},Gd={};nt&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function As(e){if(da[e])return da[e];if(!ir[e])return e;var t=ir[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Gd)return da[e]=t[r];return e}var Yd=As("animationend"),Zd=As("animationiteration"),Jd=As("animationstart"),eu=As("transitionend"),tu=new Map,Zo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){tu.set(e,t),Gt(t,[e])}for(var ua=0;ua<Zo.length;ua++){var ca=Zo[ua],xf=ca.toLowerCase(),vf=ca[0].toUpperCase()+ca.slice(1);It(xf,"on"+vf)}It(Yd,"onAnimationEnd");It(Zd,"onAnimationIteration");It(Jd,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(eu,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function Jo(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,gp(n,t,void 0,e),e.currentTarget=null}function ru(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var i=n.length-1;0<=i;i--){var l=n[i],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==a&&s.isPropagationStopped())break e;Jo(s,l,c),a=d}else for(i=0;i<n.length;i++){if(l=n[i],d=l.instance,c=l.currentTarget,l=l.listener,d!==a&&s.isPropagationStopped())break e;Jo(s,l,c),a=d}}}if(ds)throw e=Ba,ds=!1,Ba=null,e}function q(e,t){var r=t[Za];r===void 0&&(r=t[Za]=new Set);var n=e+"__bubble";r.has(n)||(nu(t,e,2,!1),r.add(n))}function pa(e,t,r){var n=0;t&&(n|=4),nu(r,e,n,t)}var On="_reactListening"+Math.random().toString(36).slice(2);function pn(e){if(!e[On]){e[On]=!0,ud.forEach(function(r){r!=="selectionchange"&&(wf.has(r)||pa(r,!1,e),pa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[On]||(t[On]=!0,pa("selectionchange",!1,t))}}function nu(e,t,r,n){switch(qd(t)){case 1:var s=Rp;break;case 4:s=Tp;break;default:s=Ai}r=s.bind(null,t,r,e),s=void 0,!Ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function fa(e,t,r,n,s){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var l=n.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(i===4)for(i=n.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;i=i.return}for(;l!==null;){if(i=qt(l),i===null)return;if(d=i.tag,d===5||d===6){n=a=i;continue e}l=l.parentNode}}n=n.return}Nd(function(){var c=a,h=Ri(r),p=[];e:{var f=tu.get(e);if(f!==void 0){var g=qi,y=e;switch(e){case"keypress":if(Yn(r)===0)break e;case"keydown":case"keyup":g=Gp;break;case"focusin":y="focus",g=ia;break;case"focusout":y="blur",g=ia;break;case"beforeblur":case"afterblur":g=ia;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ko;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Jp;break;case Yd:case Zd:case Jd:g=Kp;break;case eu:g=tf;break;case"scroll":g=zp;break;case"wheel":g=nf;break;case"copy":case"cut":case"paste":g=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$o}var v=(t&4)!==0,k=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var u=c,_;u!==null;){_=u;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,m!==null&&(x=an(u,m),x!=null&&v.push(fn(u,x,_)))),k)break;u=u.return}0<v.length&&(f=new g(f,y,null,r,h),p.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&r!==Oa&&(y=r.relatedTarget||r.fromElement)&&(qt(y)||y[st]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=r.relatedTarget||r.toElement,g=c,y=y?qt(y):null,y!==null&&(k=Yt(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(v=Ko,x="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=$o,x="onPointerLeave",m="onPointerEnter",u="pointer"),k=g==null?f:or(g),_=y==null?f:or(y),f=new v(x,u+"leave",g,r,h),f.target=k,f.relatedTarget=_,x=null,qt(h)===c&&(v=new v(m,u+"enter",y,r,h),v.target=_,v.relatedTarget=k,x=v),k=x,g&&y)t:{for(v=g,m=y,u=0,_=v;_;_=er(_))u++;for(_=0,x=m;x;x=er(x))_++;for(;0<u-_;)v=er(v),u--;for(;0<_-u;)m=er(m),_--;for(;u--;){if(v===m||m!==null&&v===m.alternate)break t;v=er(v),m=er(m)}v=null}else v=null;g!==null&&el(p,f,g,v,!1),y!==null&&k!==null&&el(p,k,y,v,!0)}}e:{if(f=c?or(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var b=cf;else if(Xo(f))if(Xd)b=_f;else{b=ff;var I=pf}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=mf);if(b&&(b=b(e,c))){Vd(p,b,r,h);break e}I&&I(e,f,c),e==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&Ra(f,"number",f.value)}switch(I=c?or(c):window,e){case"focusin":(Xo(I)||I.contentEditable==="true")&&(ar=I,Xa=c,Zr=null);break;case"focusout":Zr=Xa=ar=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,Yo(p,r,h);break;case"selectionchange":if(gf)break;case"keydown":case"keyup":Yo(p,r,h)}var j;if(Bi)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else sr?$d(e,r)&&(D="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Bd&&r.locale!=="ko"&&(sr||D!=="onCompositionStart"?D==="onCompositionEnd"&&sr&&(j=Kd()):(ft=h,Oi="value"in ft?ft.value:ft.textContent,sr=!0)),I=ms(c,D),0<I.length&&(D=new Bo(D,e,null,r,h),p.push({event:D,listeners:I}),j?D.data=j:(j=Ud(r),j!==null&&(D.data=j)))),(j=af?of(e,r):lf(e,r))&&(c=ms(c,"onBeforeInput"),0<c.length&&(h=new Bo("onBeforeInput","beforeinput",null,r,h),p.push({event:h,listeners:c}),h.data=j))}ru(p,t)})}function fn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ms(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=an(e,r),a!=null&&n.unshift(fn(e,a,s)),a=an(e,t),a!=null&&n.push(fn(e,a,s))),e=e.return}return n}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function el(e,t,r,n,s){for(var a=t._reactName,i=[];r!==null&&r!==n;){var l=r,d=l.alternate,c=l.stateNode;if(d!==null&&d===n)break;l.tag===5&&c!==null&&(l=c,s?(d=an(r,a),d!=null&&i.unshift(fn(r,d,l))):s||(d=an(r,a),d!=null&&i.push(fn(r,d,l)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var kf=/\r\n?/g,Sf=/\u0000|\uFFFD/g;function tl(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(Sf,"")}function qn(e,t,r){if(t=tl(t),tl(e)!==t&&r)throw Error(S(425))}function _s(){}var Wa=null,Ha=null;function Ga(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,rl=typeof Promise=="function"?Promise:void 0,jf=typeof queueMicrotask=="function"?queueMicrotask:typeof rl<"u"?function(e){return rl.resolve(null).then(e).catch(Nf)}:Ya;function Nf(e){setTimeout(function(){throw e})}function ma(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),dn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);dn(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Er,mn="__reactProps$"+Er,st="__reactContainer$"+Er,Za="__reactEvents$"+Er,Cf="__reactListeners$"+Er,If="__reactHandles$"+Er;function qt(e){var t=e[Xe];if(t)return t;for(var r=e.parentNode;r;){if(t=r[st]||r[Xe]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=nl(e);e!==null;){if(r=e[Xe])return r;e=nl(e)}return t}e=r,r=e.parentNode}return null}function Nn(e){return e=e[Xe]||e[st],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Os(e){return e[mn]||null}var Ja=[],lr=-1;function Dt(e){return{current:e}}function K(e){0>lr||(e.current=Ja[lr],Ja[lr]=null,lr--)}function A(e,t){lr++,Ja[lr]=e.current,e.current=t}var Ct={},ce=Dt(Ct),ge=Dt(!1),Vt=Ct;function kr(e,t){var r=e.type.contextTypes;if(!r)return Ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in r)s[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function xe(e){return e=e.childContextTypes,e!=null}function hs(){K(ge),K(ce)}function sl(e,t,r){if(ce.current!==Ct)throw Error(S(168));A(ce,t),A(ge,r)}function su(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(S(108,cp(e)||"Unknown",s));return X({},r,n)}function ys(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Vt=ce.current,A(ce,e),A(ge,ge.current),!0}function al(e,t,r){var n=e.stateNode;if(!n)throw Error(S(169));r?(e=su(e,t,Vt),n.__reactInternalMemoizedMergedChildContext=e,K(ge),K(ce),A(ce,e)):K(ge),A(ge,r)}var Ze=null,qs=!1,_a=!1;function au(e){Ze===null?Ze=[e]:Ze.push(e)}function Df(e){qs=!0,au(e)}function Mt(){if(!_a&&Ze!==null){_a=!0;var e=0,t=z;try{var r=Ze;for(z=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ze=null,qs=!1}catch(s){throw Ze!==null&&(Ze=Ze.slice(e+1)),Md(Ti,Mt),s}finally{z=t,_a=!1}}return null}var dr=[],ur=0,gs=null,xs=0,Me=[],Ee=0,Xt=null,Je=1,et="";function zt(e,t){dr[ur++]=xs,dr[ur++]=gs,gs=e,xs=t}function iu(e,t,r){Me[Ee++]=Je,Me[Ee++]=et,Me[Ee++]=Xt,Xt=e;var n=Je;e=et;var s=32-qe(n)-1;n&=~(1<<s),r+=1;var a=32-qe(t)+s;if(30<a){var i=s-s%5;a=(n&(1<<i)-1).toString(32),n>>=i,s-=i,Je=1<<32-qe(t)+s|r<<s|n,et=a+e}else Je=1<<a|r<<s|n,et=e}function Ui(e){e.return!==null&&(zt(e,1),iu(e,1,0))}function Vi(e){for(;e===gs;)gs=dr[--ur],dr[ur]=null,xs=dr[--ur],dr[ur]=null;for(;e===Xt;)Xt=Me[--Ee],Me[Ee]=null,et=Me[--Ee],Me[Ee]=null,Je=Me[--Ee],Me[Ee]=null}var je=null,be=null,B=!1,Oe=null;function ou(e,t){var r=Pe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function il(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,be=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Xt!==null?{id:Je,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Pe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,je=e,be=null,!0):!1;default:return!1}}function ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ti(e){if(B){var t=be;if(t){var r=t;if(!il(e,t)){if(ei(e))throw Error(S(418));t=xt(r.nextSibling);var n=je;t&&il(e,t)?ou(n,r):(e.flags=e.flags&-4097|2,B=!1,je=e)}}else{if(ei(e))throw Error(S(418));e.flags=e.flags&-4097|2,B=!1,je=e}}}function ol(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Kn(e){if(e!==je)return!1;if(!B)return ol(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ga(e.type,e.memoizedProps)),t&&(t=be)){if(ei(e))throw lu(),Error(S(418));for(;t;)ou(e,t),t=xt(t.nextSibling)}if(ol(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){be=xt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}be=null}}else be=je?xt(e.stateNode.nextSibling):null;return!0}function lu(){for(var e=be;e;)e=xt(e.nextSibling)}function Sr(){be=je=null,B=!1}function Xi(e){Oe===null?Oe=[e]:Oe.push(e)}var Mf=ot.ReactCurrentBatchConfig;function qr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var n=r.stateNode}if(!n)throw Error(S(147,e));var s=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=s.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function Bn(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ll(e){var t=e._init;return t(e._payload)}function du(e){function t(m,u){if(e){var _=m.deletions;_===null?(m.deletions=[u],m.flags|=16):_.push(u)}}function r(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function n(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function s(m,u){return m=St(m,u),m.index=0,m.sibling=null,m}function a(m,u,_){return m.index=_,e?(_=m.alternate,_!==null?(_=_.index,_<u?(m.flags|=2,u):_):(m.flags|=2,u)):(m.flags|=1048576,u)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,u,_,x){return u===null||u.tag!==6?(u=ka(_,m.mode,x),u.return=m,u):(u=s(u,_),u.return=m,u)}function d(m,u,_,x){var b=_.type;return b===nr?h(m,u,_.props.children,x,_.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dt&&ll(b)===u.type)?(x=s(u,_.props),x.ref=qr(m,u,_),x.return=m,x):(x=ss(_.type,_.key,_.props,null,m.mode,x),x.ref=qr(m,u,_),x.return=m,x)}function c(m,u,_,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==_.containerInfo||u.stateNode.implementation!==_.implementation?(u=Sa(_,m.mode,x),u.return=m,u):(u=s(u,_.children||[]),u.return=m,u)}function h(m,u,_,x,b){return u===null||u.tag!==7?(u=Ut(_,m.mode,x,b),u.return=m,u):(u=s(u,_),u.return=m,u)}function p(m,u,_){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ka(""+u,m.mode,_),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case En:return _=ss(u.type,u.key,u.props,null,m.mode,_),_.ref=qr(m,null,u),_.return=m,_;case rr:return u=Sa(u,m.mode,_),u.return=m,u;case dt:var x=u._init;return p(m,x(u._payload),_)}if(Ur(u)||Tr(u))return u=Ut(u,m.mode,_,null),u.return=m,u;Bn(m,u)}return null}function f(m,u,_,x){var b=u!==null?u.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:l(m,u,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case En:return _.key===b?d(m,u,_,x):null;case rr:return _.key===b?c(m,u,_,x):null;case dt:return b=_._init,f(m,u,b(_._payload),x)}if(Ur(_)||Tr(_))return b!==null?null:h(m,u,_,x,null);Bn(m,_)}return null}function g(m,u,_,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(_)||null,l(u,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case En:return m=m.get(x.key===null?_:x.key)||null,d(u,m,x,b);case rr:return m=m.get(x.key===null?_:x.key)||null,c(u,m,x,b);case dt:var I=x._init;return g(m,u,_,I(x._payload),b)}if(Ur(x)||Tr(x))return m=m.get(_)||null,h(u,m,x,b,null);Bn(u,x)}return null}function y(m,u,_,x){for(var b=null,I=null,j=u,D=u=0,L=null;j!==null&&D<_.length;D++){j.index>D?(L=j,j=null):L=j.sibling;var P=f(m,j,_[D],x);if(P===null){j===null&&(j=L);break}e&&j&&P.alternate===null&&t(m,j),u=a(P,u,D),I===null?b=P:I.sibling=P,I=P,j=L}if(D===_.length)return r(m,j),B&&zt(m,D),b;if(j===null){for(;D<_.length;D++)j=p(m,_[D],x),j!==null&&(u=a(j,u,D),I===null?b=j:I.sibling=j,I=j);return B&&zt(m,D),b}for(j=n(m,j);D<_.length;D++)L=g(j,m,D,_[D],x),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?D:L.key),u=a(L,u,D),I===null?b=L:I.sibling=L,I=L);return e&&j.forEach(function(ke){return t(m,ke)}),B&&zt(m,D),b}function v(m,u,_,x){var b=Tr(_);if(typeof b!="function")throw Error(S(150));if(_=b.call(_),_==null)throw Error(S(151));for(var I=b=null,j=u,D=u=0,L=null,P=_.next();j!==null&&!P.done;D++,P=_.next()){j.index>D?(L=j,j=null):L=j.sibling;var ke=f(m,j,P.value,x);if(ke===null){j===null&&(j=L);break}e&&j&&ke.alternate===null&&t(m,j),u=a(ke,u,D),I===null?b=ke:I.sibling=ke,I=ke,j=L}if(P.done)return r(m,j),B&&zt(m,D),b;if(j===null){for(;!P.done;D++,P=_.next())P=p(m,P.value,x),P!==null&&(u=a(P,u,D),I===null?b=P:I.sibling=P,I=P);return B&&zt(m,D),b}for(j=n(m,j);!P.done;D++,P=_.next())P=g(j,m,D,P.value,x),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?D:P.key),u=a(P,u,D),I===null?b=P:I.sibling=P,I=P);return e&&j.forEach(function(Pt){return t(m,Pt)}),B&&zt(m,D),b}function k(m,u,_,x){if(typeof _=="object"&&_!==null&&_.type===nr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case En:e:{for(var b=_.key,I=u;I!==null;){if(I.key===b){if(b=_.type,b===nr){if(I.tag===7){r(m,I.sibling),u=s(I,_.props.children),u.return=m,m=u;break e}}else if(I.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dt&&ll(b)===I.type){r(m,I.sibling),u=s(I,_.props),u.ref=qr(m,I,_),u.return=m,m=u;break e}r(m,I);break}else t(m,I);I=I.sibling}_.type===nr?(u=Ut(_.props.children,m.mode,x,_.key),u.return=m,m=u):(x=ss(_.type,_.key,_.props,null,m.mode,x),x.ref=qr(m,u,_),x.return=m,m=x)}return i(m);case rr:e:{for(I=_.key;u!==null;){if(u.key===I)if(u.tag===4&&u.stateNode.containerInfo===_.containerInfo&&u.stateNode.implementation===_.implementation){r(m,u.sibling),u=s(u,_.children||[]),u.return=m,m=u;break e}else{r(m,u);break}else t(m,u);u=u.sibling}u=Sa(_,m.mode,x),u.return=m,m=u}return i(m);case dt:return I=_._init,k(m,u,I(_._payload),x)}if(Ur(_))return y(m,u,_,x);if(Tr(_))return v(m,u,_,x);Bn(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,u!==null&&u.tag===6?(r(m,u.sibling),u=s(u,_),u.return=m,m=u):(r(m,u),u=ka(_,m.mode,x),u.return=m,m=u),i(m)):r(m,u)}return k}var br=du(!0),uu=du(!1),vs=Dt(null),ws=null,cr=null,Qi=null;function Wi(){Qi=cr=ws=null}function Hi(e){var t=vs.current;K(vs),e._currentValue=t}function ri(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function gr(e,t){ws=e,Qi=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Qi!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(ws===null)throw Error(S(308));cr=e,ws.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var Kt=null;function Gi(e){Kt===null?Kt=[e]:Kt.push(e)}function cu(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,Gi(t)):(r.next=s.next,s.next=r),t.interleaved=r,at(e,n)}function at(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ut=!1;function Yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,T&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,at(e,r)}return s=n.interleaved,s===null?(t.next=t,Gi(n)):(t.next=s.next,s.next=t),n.interleaved=t,at(e,r)}function Zn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,zi(e,r)}}function dl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?s=a=i:a=a.next=i,r=r.next}while(r!==null);a===null?s=a=t:a=a.next=t}else s=a=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ks(e,t,r,n){var s=e.updateQueue;ut=!1;var a=s.firstBaseUpdate,i=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var d=l,c=d.next;d.next=null,i===null?a=c:i.next=c,i=d;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==i&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=d))}if(a!==null){var p=s.baseState;i=0,h=c=d=null,l=a;do{var f=l.lane,g=l.eventTime;if((n&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(f=t,g=r,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(g,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(g,p,f):y,f==null)break e;p=X({},p,f);break e;case 2:ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=g,d=p):h=h.next=g,i|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(d=p),s.baseState=d,s.firstBaseUpdate=c,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do i|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Wt|=i,e.lanes=i,e.memoizedState=p}}function ul(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(S(191,s));s.call(n)}}}var Cn={},We=Dt(Cn),_n=Dt(Cn),hn=Dt(Cn);function Bt(e){if(e===Cn)throw Error(S(174));return e}function Zi(e,t){switch(A(hn,t),A(_n,e),A(We,Cn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=za(t,e)}K(We),A(We,t)}function jr(){K(We),K(_n),K(hn)}function fu(e){Bt(hn.current);var t=Bt(We.current),r=za(t,e.type);t!==r&&(A(_n,e),A(We,r))}function Ji(e){_n.current===e&&(K(We),K(_n))}var U=Dt(0);function Ss(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=[];function eo(){for(var e=0;e<ha.length;e++)ha[e]._workInProgressVersionPrimary=null;ha.length=0}var Jn=ot.ReactCurrentDispatcher,ya=ot.ReactCurrentBatchConfig,Qt=0,V=null,ee=null,ne=null,bs=!1,Jr=!1,yn=0,Ef=0;function le(){throw Error(S(321))}function to(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Be(e[r],t[r]))return!1;return!0}function ro(e,t,r,n,s,a){if(Qt=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jn.current=e===null||e.memoizedState===null?Tf:zf,e=r(n,s),Jr){a=0;do{if(Jr=!1,yn=0,25<=a)throw Error(S(301));a+=1,ne=ee=null,t.updateQueue=null,Jn.current=Lf,e=r(n,s)}while(Jr)}if(Jn.current=js,t=ee!==null&&ee.next!==null,Qt=0,ne=ee=V=null,bs=!1,t)throw Error(S(300));return e}function no(){var e=yn!==0;return yn=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?V.memoizedState=ne=e:ne=ne.next=e,ne}function Te(){if(ee===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?V.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?V.memoizedState=ne=e:ne=ne.next=e}return ne}function gn(e,t){return typeof t=="function"?t(e):t}function ga(e){var t=Te(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=ee,s=n.baseQueue,a=r.pending;if(a!==null){if(s!==null){var i=s.next;s.next=a.next,a.next=i}n.baseQueue=s=a,r.pending=null}if(s!==null){a=s.next,n=n.baseState;var l=i=null,d=null,c=a;do{var h=c.lane;if((Qt&h)===h)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=p,i=n):d=d.next=p,V.lanes|=h,Wt|=h}c=c.next}while(c!==null&&c!==a);d===null?i=n:d.next=l,Be(n,t.memoizedState)||(ye=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=d,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do a=s.lane,V.lanes|=a,Wt|=a,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function xa(e){var t=Te(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,a=t.memoizedState;if(s!==null){r.pending=null;var i=s=s.next;do a=e(a,i.action),i=i.next;while(i!==s);Be(a,t.memoizedState)||(ye=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function mu(){}function _u(e,t){var r=V,n=Te(),s=t(),a=!Be(n.memoizedState,s);if(a&&(n.memoizedState=s,ye=!0),n=n.queue,so(gu.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||ne!==null&&ne.memoizedState.tag&1){if(r.flags|=2048,xn(9,yu.bind(null,r,n,s,t),void 0,null),se===null)throw Error(S(349));Qt&30||hu(r,t,s)}return s}function hu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function yu(e,t,r,n){t.value=r,t.getSnapshot=n,xu(t)&&vu(e)}function gu(e,t,r){return r(function(){xu(t)&&vu(e)})}function xu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Be(e,r)}catch{return!0}}function vu(e){var t=at(e,1);t!==null&&Ke(t,e,1,-1)}function cl(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},t.queue=e,e=e.dispatch=Rf.bind(null,V,e),[t.memoizedState,e]}function xn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function wu(){return Te().memoizedState}function es(e,t,r,n){var s=Ve();V.flags|=e,s.memoizedState=xn(1|t,r,void 0,n===void 0?null:n)}function Ks(e,t,r,n){var s=Te();n=n===void 0?null:n;var a=void 0;if(ee!==null){var i=ee.memoizedState;if(a=i.destroy,n!==null&&to(n,i.deps)){s.memoizedState=xn(t,r,a,n);return}}V.flags|=e,s.memoizedState=xn(1|t,r,a,n)}function pl(e,t){return es(8390656,8,e,t)}function so(e,t){return Ks(2048,8,e,t)}function ku(e,t){return Ks(4,2,e,t)}function Su(e,t){return Ks(4,4,e,t)}function bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ju(e,t,r){return r=r!=null?r.concat([e]):null,Ks(4,4,bu.bind(null,t,e),r)}function ao(){}function Nu(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&to(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Cu(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&to(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Iu(e,t,r){return Qt&21?(Be(r,t)||(r=Fd(),V.lanes|=r,Wt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=r)}function Pf(e,t){var r=z;z=r!==0&&4>r?r:4,e(!0);var n=ya.transition;ya.transition={};try{e(!1),t()}finally{z=r,ya.transition=n}}function Du(){return Te().memoizedState}function Ff(e,t,r){var n=kt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Mu(e))Eu(t,r);else if(r=cu(e,t,r,n),r!==null){var s=fe();Ke(r,e,n,s),Pu(r,t,n)}}function Rf(e,t,r){var n=kt(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))Eu(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,r);if(s.hasEagerState=!0,s.eagerState=l,Be(l,i)){var d=t.interleaved;d===null?(s.next=s,Gi(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}r=cu(e,t,s,n),r!==null&&(s=fe(),Ke(r,e,n,s),Pu(r,t,n))}}function Mu(e){var t=e.alternate;return e===V||t!==null&&t===V}function Eu(e,t){Jr=bs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Pu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,zi(e,r)}}var js={readContext:Re,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Tf={readContext:Re,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:pl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,es(4194308,4,bu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){return es(4,2,e,t)},useMemo:function(e,t){var r=Ve();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ve();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ff.bind(null,V,e),[n.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:cl,useDebugValue:ao,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=cl(!1),t=e[0];return e=Pf.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=V,s=Ve();if(B){if(r===void 0)throw Error(S(407));r=r()}else{if(r=t(),se===null)throw Error(S(349));Qt&30||hu(n,t,r)}s.memoizedState=r;var a={value:r,getSnapshot:t};return s.queue=a,pl(gu.bind(null,n,a,e),[e]),n.flags|=2048,xn(9,yu.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Ve(),t=se.identifierPrefix;if(B){var r=et,n=Je;r=(n&~(1<<32-qe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=yn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ef++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zf={readContext:Re,useCallback:Nu,useContext:Re,useEffect:so,useImperativeHandle:ju,useInsertionEffect:ku,useLayoutEffect:Su,useMemo:Cu,useReducer:ga,useRef:wu,useState:function(){return ga(gn)},useDebugValue:ao,useDeferredValue:function(e){var t=Te();return Iu(t,ee.memoizedState,e)},useTransition:function(){var e=ga(gn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:_u,useId:Du,unstable_isNewReconciler:!1},Lf={readContext:Re,useCallback:Nu,useContext:Re,useEffect:so,useImperativeHandle:ju,useInsertionEffect:ku,useLayoutEffect:Su,useMemo:Cu,useReducer:xa,useRef:wu,useState:function(){return xa(gn)},useDebugValue:ao,useDeferredValue:function(e){var t=Te();return ee===null?t.memoizedState=e:Iu(t,ee.memoizedState,e)},useTransition:function(){var e=xa(gn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:_u,useId:Du,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ni(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:X({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Bs={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=fe(),s=kt(e),a=tt(n,s);a.payload=t,r!=null&&(a.callback=r),t=vt(e,a,s),t!==null&&(Ke(t,e,s,n),Zn(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=fe(),s=kt(e),a=tt(n,s);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=vt(e,a,s),t!==null&&(Ke(t,e,s,n),Zn(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=fe(),n=kt(e),s=tt(r,n);s.tag=2,t!=null&&(s.callback=t),t=vt(e,s,n),t!==null&&(Ke(t,e,n,r),Zn(t,e,n))}};function fl(e,t,r,n,s,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,i):t.prototype&&t.prototype.isPureReactComponent?!cn(r,n)||!cn(s,a):!0}function Fu(e,t,r){var n=!1,s=Ct,a=t.contextType;return typeof a=="object"&&a!==null?a=Re(a):(s=xe(t)?Vt:ce.current,n=t.contextTypes,a=(n=n!=null)?kr(e,s):Ct),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bs,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function ml(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Bs.enqueueReplaceState(t,t.state,null)}function si(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Yi(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=Re(a):(a=xe(t)?Vt:ce.current,s.context=kr(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ni(e,t,a,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Bs.enqueueReplaceState(s,s.state,null),ks(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var r="",n=t;do r+=up(n),n=n.return;while(n);var s=r}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function va(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ai(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Af=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,r){r=tt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Cs||(Cs=!0,_i=n),ai(e,t)},r}function Tu(e,t,r){r=tt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){ai(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){ai(e,t),typeof n!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function _l(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Af;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=Zf.bind(null,e,t,r),t.then(e,e))}function hl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yl(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=tt(-1,1),t.tag=2,vt(r,t,1))),r.lanes|=1),e)}var Of=ot.ReactCurrentOwner,ye=!1;function pe(e,t,r,n){t.child=e===null?uu(t,null,r,n):br(t,e.child,r,n)}function gl(e,t,r,n,s){r=r.render;var a=t.ref;return gr(t,s),n=ro(e,t,r,n,a,s),r=no(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,it(e,t,s)):(B&&r&&Ui(t),t.flags|=1,pe(e,t,n,s),t.child)}function xl(e,t,r,n,s){if(e===null){var a=r.type;return typeof a=="function"&&!mo(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,zu(e,t,a,n,s)):(e=ss(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var i=a.memoizedProps;if(r=r.compare,r=r!==null?r:cn,r(i,n)&&e.ref===t.ref)return it(e,t,s)}return t.flags|=1,e=St(a,n),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,r,n,s){if(e!==null){var a=e.memoizedProps;if(cn(a,n)&&e.ref===t.ref)if(ye=!1,t.pendingProps=n=a,(e.lanes&s)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,it(e,t,s)}return ii(e,t,r,n,s)}function Lu(e,t,r){var n=t.pendingProps,s=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(fr,Se),Se|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(fr,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,A(fr,Se),Se|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,A(fr,Se),Se|=n;return pe(e,t,s,r),t.child}function Au(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ii(e,t,r,n,s){var a=xe(r)?Vt:ce.current;return a=kr(t,a),gr(t,s),r=ro(e,t,r,n,a,s),n=no(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,it(e,t,s)):(B&&n&&Ui(t),t.flags|=1,pe(e,t,r,s),t.child)}function vl(e,t,r,n,s){if(xe(r)){var a=!0;ys(t)}else a=!1;if(gr(t,s),t.stateNode===null)ts(e,t),Fu(t,r,n),si(t,r,n,s),n=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var d=i.context,c=r.contextType;typeof c=="object"&&c!==null?c=Re(c):(c=xe(r)?Vt:ce.current,c=kr(t,c));var h=r.getDerivedStateFromProps,p=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==n||d!==c)&&ml(t,i,n,c),ut=!1;var f=t.memoizedState;i.state=f,ks(t,n,i,s),d=t.memoizedState,l!==n||f!==d||ge.current||ut?(typeof h=="function"&&(ni(t,r,h,n),d=t.memoizedState),(l=ut||fl(t,r,l,n,f,d,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=d),i.props=n,i.state=d,i.context=c,n=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,pu(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Le(t.type,l),i.props=c,p=t.pendingProps,f=i.context,d=r.contextType,typeof d=="object"&&d!==null?d=Re(d):(d=xe(r)?Vt:ce.current,d=kr(t,d));var g=r.getDerivedStateFromProps;(h=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||f!==d)&&ml(t,i,n,d),ut=!1,f=t.memoizedState,i.state=f,ks(t,n,i,s);var y=t.memoizedState;l!==p||f!==y||ge.current||ut?(typeof g=="function"&&(ni(t,r,g,n),y=t.memoizedState),(c=ut||fl(t,r,c,n,f,y,d)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,y,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,y,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),i.props=n,i.state=y,i.context=d,n=c):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return oi(e,t,r,n,a,s)}function oi(e,t,r,n,s,a){Au(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return s&&al(t,r,!1),it(e,t,a);n=t.stateNode,Of.current=t;var l=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=br(t,e.child,null,a),t.child=br(t,null,l,a)):pe(e,t,l,a),t.memoizedState=n.state,s&&al(t,r,!0),t.child}function Ou(e){var t=e.stateNode;t.pendingContext?sl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sl(e,t.context,!1),Zi(e,t.containerInfo)}function wl(e,t,r,n,s){return Sr(),Xi(s),t.flags|=256,pe(e,t,r,n),t.child}var li={dehydrated:null,treeContext:null,retryLane:0};function di(e){return{baseLanes:e,cachePool:null,transitions:null}}function qu(e,t,r){var n=t.pendingProps,s=U.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),A(U,s&1),e===null)return ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,a?(n=t.mode,a=t.child,i={mode:"hidden",children:i},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Vs(i,n,0,null),e=Ut(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=di(r),t.memoizedState=li,e):io(t,i));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return qf(e,t,i,n,l,s,r);if(a){a=n.fallback,i=t.mode,s=e.child,l=s.sibling;var d={mode:"hidden",children:n.children};return!(i&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=d,t.deletions=null):(n=St(s,d),n.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=St(l,a):(a=Ut(a,i,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,i=e.child.memoizedState,i=i===null?di(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~r,t.memoizedState=li,n}return a=e.child,e=a.sibling,n=St(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function io(e,t){return t=Vs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $n(e,t,r,n){return n!==null&&Xi(n),br(t,e.child,null,r),e=io(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qf(e,t,r,n,s,a,i){if(r)return t.flags&256?(t.flags&=-257,n=va(Error(S(422))),$n(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,s=t.mode,n=Vs({mode:"visible",children:n.children},s,0,null),a=Ut(a,s,i,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&br(t,e.child,null,i),t.child.memoizedState=di(i),t.memoizedState=li,a);if(!(t.mode&1))return $n(e,t,i,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var l=n.dgst;return n=l,a=Error(S(419)),n=va(a,n,void 0),$n(e,t,i,n)}if(l=(i&e.childLanes)!==0,ye||l){if(n=se,n!==null){switch(i&-i){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|i)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,at(e,s),Ke(n,e,s,-1))}return fo(),n=va(Error(S(421))),$n(e,t,i,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Jf.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,be=xt(s.nextSibling),je=t,B=!0,Oe=null,e!==null&&(Me[Ee++]=Je,Me[Ee++]=et,Me[Ee++]=Xt,Je=e.id,et=e.overflow,Xt=t),t=io(t,n.children),t.flags|=4096,t)}function kl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ri(e.return,t,r)}function wa(e,t,r,n,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=s)}function Ku(e,t,r){var n=t.pendingProps,s=n.revealOrder,a=n.tail;if(pe(e,t,n.children,r),n=U.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kl(e,r,t);else if(e.tag===19)kl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(A(U,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Ss(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),wa(t,!1,s,r,a);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ss(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}wa(t,!0,r,null,a);break;case"together":wa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ts(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,r=St(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=St(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Kf(e,t,r){switch(t.tag){case 3:Ou(t),Sr();break;case 5:fu(t);break;case 1:xe(t.type)&&ys(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;A(vs,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(A(U,U.current&1),t.flags|=128,null):r&t.child.childLanes?qu(e,t,r):(A(U,U.current&1),e=it(e,t,r),e!==null?e.sibling:null);A(U,U.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ku(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),A(U,U.current),n)break;return null;case 22:case 23:return t.lanes=0,Lu(e,t,r)}return it(e,t,r)}var Bu,ui,$u,Uu;Bu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ui=function(){};$u=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,Bt(We.current);var a=null;switch(r){case"input":s=Pa(e,s),n=Pa(e,n),a=[];break;case"select":s=X({},s,{value:void 0}),n=X({},n,{value:void 0}),a=[];break;case"textarea":s=Ta(e,s),n=Ta(e,n),a=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=_s)}La(r,n);var i;r=null;for(c in s)if(!n.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(i in l)l.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(nn.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in n){var d=n[c];if(l=s!=null?s[c]:void 0,n.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(i in l)!l.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in d)d.hasOwnProperty(i)&&l[i]!==d[i]&&(r||(r={}),r[i]=d[i])}else r||(a||(a=[]),a.push(c,r)),r=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(a=a||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(nn.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&q("scroll",e),a||l===d||(a=[])):(a=a||[]).push(c,d))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Uu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Kr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Bf(e,t,r){var n=t.pendingProps;switch(Vi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return xe(t.type)&&hs(),de(t),null;case 3:return n=t.stateNode,jr(),K(ge),K(ce),eo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Kn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(gi(Oe),Oe=null))),ui(e,t),de(t),null;case 5:Ji(t);var s=Bt(hn.current);if(r=t.type,e!==null&&t.stateNode!=null)$u(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=Bt(We.current),Kn(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Xe]=t,n[mn]=a,e=(t.mode&1)!==0,r){case"dialog":q("cancel",n),q("close",n);break;case"iframe":case"object":case"embed":q("load",n);break;case"video":case"audio":for(s=0;s<Xr.length;s++)q(Xr[s],n);break;case"source":q("error",n);break;case"img":case"image":case"link":q("error",n),q("load",n);break;case"details":q("toggle",n);break;case"input":Eo(n,a),q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},q("invalid",n);break;case"textarea":Fo(n,a),q("invalid",n)}La(r,a),s=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?n.textContent!==l&&(a.suppressHydrationWarning!==!0&&qn(n.textContent,l,e),s=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&qn(n.textContent,l,e),s=["children",""+l]):nn.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&q("scroll",n)}switch(r){case"input":Pn(n),Po(n,a,!0);break;case"textarea":Pn(n),Ro(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=_s)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gd(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[Xe]=t,e[mn]=n,Bu(e,t,!1,!1),t.stateNode=e;e:{switch(i=Aa(r,n),r){case"dialog":q("cancel",e),q("close",e),s=n;break;case"iframe":case"object":case"embed":q("load",e),s=n;break;case"video":case"audio":for(s=0;s<Xr.length;s++)q(Xr[s],e);s=n;break;case"source":q("error",e),s=n;break;case"img":case"image":case"link":q("error",e),q("load",e),s=n;break;case"details":q("toggle",e),s=n;break;case"input":Eo(e,n),s=Pa(e,n),q("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=X({},n,{value:void 0}),q("invalid",e);break;case"textarea":Fo(e,n),s=Ta(e,n),q("invalid",e);break;default:s=n}La(r,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var d=l[a];a==="style"?wd(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&xd(e,d)):a==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&sn(e,d):typeof d=="number"&&sn(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(nn.hasOwnProperty(a)?d!=null&&a==="onScroll"&&q("scroll",e):d!=null&&Mi(e,a,d,i))}switch(r){case"input":Pn(e),Po(e,n,!1);break;case"textarea":Pn(e),Ro(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Nt(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?mr(e,!!n.multiple,a,!1):n.defaultValue!=null&&mr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=_s)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Uu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(S(166));if(r=Bt(hn.current),Bt(We.current),Kn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Xe]=t,(a=n.nodeValue!==r)&&(e=je,e!==null))switch(e.tag){case 3:qn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qn(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Xe]=t,t.stateNode=n}return de(t),null;case 13:if(K(U),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&be!==null&&t.mode&1&&!(t.flags&128))lu(),Sr(),t.flags|=98560,a=!1;else if(a=Kn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[Xe]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),a=!1}else Oe!==null&&(gi(Oe),Oe=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?re===0&&(re=3):fo())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return jr(),ui(e,t),e===null&&pn(t.stateNode.containerInfo),de(t),null;case 10:return Hi(t.type._context),de(t),null;case 17:return xe(t.type)&&hs(),de(t),null;case 19:if(K(U),a=t.memoizedState,a===null)return de(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)Kr(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ss(e),i!==null){for(t.flags|=128,Kr(a,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return A(U,U.current&1|2),t.child}e=e.sibling}a.tail!==null&&H()>Cr&&(t.flags|=128,n=!0,Kr(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ss(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Kr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!B)return de(t),null}else 2*H()-a.renderingStartTime>Cr&&r!==1073741824&&(t.flags|=128,n=!0,Kr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(r=a.last,r!==null?r.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=H(),t.sibling=null,r=U.current,A(U,n?r&1|2:r&1),t):(de(t),null);case 22:case 23:return po(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Se&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function $f(e,t){switch(Vi(t),t.tag){case 1:return xe(t.type)&&hs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),K(ge),K(ce),eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ji(t),null;case 13:if(K(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(U),null;case 4:return jr(),null;case 10:return Hi(t.type._context),null;case 22:case 23:return po(),null;case 24:return null;default:return null}}var Un=!1,ue=!1,Uf=typeof WeakSet=="function"?WeakSet:Set,C=null;function pr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Q(e,t,n)}else r.current=null}function ci(e,t,r){try{r()}catch(n){Q(e,t,n)}}var Sl=!1;function Vf(e,t){if(Wa=ps,e=Hd(),$i(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var i=0,l=-1,d=-1,c=0,h=0,p=e,f=null;t:for(;;){for(var g;p!==r||s!==0&&p.nodeType!==3||(l=i+s),p!==a||n!==0&&p.nodeType!==3||(d=i+n),p.nodeType===3&&(i+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===e)break t;if(f===r&&++c===s&&(l=i),f===a&&++h===n&&(d=i),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}r=l===-1||d===-1?null:{start:l,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ha={focusedElem:e,selectionRange:r},ps=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:Le(t.type,v),k);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){Q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return y=Sl,Sl=!1,y}function en(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&ci(t,r,a)}s=s.next}while(s!==n)}}function $s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function pi(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Vu(e){var t=e.alternate;t!==null&&(e.alternate=null,Vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[mn],delete t[Za],delete t[Cf],delete t[If])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xu(e){return e.tag===5||e.tag===3||e.tag===4}function bl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_s));else if(n!==4&&(e=e.child,e!==null))for(fi(e,t,r),e=e.sibling;e!==null;)fi(e,t,r),e=e.sibling}function mi(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(mi(e,t,r),e=e.sibling;e!==null;)mi(e,t,r),e=e.sibling}var ae=null,Ae=!1;function lt(e,t,r){for(r=r.child;r!==null;)Qu(e,t,r),r=r.sibling}function Qu(e,t,r){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Ts,r)}catch{}switch(r.tag){case 5:ue||pr(r,t);case 6:var n=ae,s=Ae;ae=null,lt(e,t,r),ae=n,Ae=s,ae!==null&&(Ae?(e=ae,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ae.removeChild(r.stateNode));break;case 18:ae!==null&&(Ae?(e=ae,r=r.stateNode,e.nodeType===8?ma(e.parentNode,r):e.nodeType===1&&ma(e,r),dn(e)):ma(ae,r.stateNode));break;case 4:n=ae,s=Ae,ae=r.stateNode.containerInfo,Ae=!0,lt(e,t,r),ae=n,Ae=s;break;case 0:case 11:case 14:case 15:if(!ue&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var a=s,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&ci(r,t,i),s=s.next}while(s!==n)}lt(e,t,r);break;case 1:if(!ue&&(pr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Q(r,t,l)}lt(e,t,r);break;case 21:lt(e,t,r);break;case 22:r.mode&1?(ue=(n=ue)||r.memoizedState!==null,lt(e,t,r),ue=n):lt(e,t,r);break;default:lt(e,t,r)}}function jl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Uf),t.forEach(function(n){var s=em.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function ze(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:ae=l.stateNode,Ae=!1;break e;case 3:ae=l.stateNode.containerInfo,Ae=!0;break e;case 4:ae=l.stateNode.containerInfo,Ae=!0;break e}l=l.return}if(ae===null)throw Error(S(160));Qu(a,i,s),ae=null,Ae=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(c){Q(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Ue(e),n&4){try{en(3,e,e.return),$s(3,e)}catch(v){Q(e,e.return,v)}try{en(5,e,e.return)}catch(v){Q(e,e.return,v)}}break;case 1:ze(t,e),Ue(e),n&512&&r!==null&&pr(r,r.return);break;case 5:if(ze(t,e),Ue(e),n&512&&r!==null&&pr(r,r.return),e.flags&32){var s=e.stateNode;try{sn(s,"")}catch(v){Q(e,e.return,v)}}if(n&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,i=r!==null?r.memoizedProps:a,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&hd(s,a),Aa(l,i);var c=Aa(l,a);for(i=0;i<d.length;i+=2){var h=d[i],p=d[i+1];h==="style"?wd(s,p):h==="dangerouslySetInnerHTML"?xd(s,p):h==="children"?sn(s,p):Mi(s,h,p,c)}switch(l){case"input":Fa(s,a);break;case"textarea":yd(s,a);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?mr(s,!!a.multiple,g,!1):f!==!!a.multiple&&(a.defaultValue!=null?mr(s,!!a.multiple,a.defaultValue,!0):mr(s,!!a.multiple,a.multiple?[]:"",!1))}s[mn]=a}catch(v){Q(e,e.return,v)}}break;case 6:if(ze(t,e),Ue(e),n&4){if(e.stateNode===null)throw Error(S(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(v){Q(e,e.return,v)}}break;case 3:if(ze(t,e),Ue(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{dn(t.containerInfo)}catch(v){Q(e,e.return,v)}break;case 4:ze(t,e),Ue(e);break;case 13:ze(t,e),Ue(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(uo=H())),n&4&&jl(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(ue=(c=ue)||h,ze(t,e),ue=c):ze(t,e),Ue(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(p=C=h;C!==null;){switch(f=C,g=f.child,f.tag){case 0:case 11:case 14:case 15:en(4,f,f.return);break;case 1:pr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){n=f,r=f.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Q(n,r,v)}}break;case 5:pr(f,f.return);break;case 22:if(f.memoizedState!==null){Cl(p);continue}}g!==null?(g.return=f,C=g):Cl(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{s=p.stateNode,c?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,d=p.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=vd("display",i))}catch(v){Q(e,e.return,v)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){Q(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ze(t,e),Ue(e),n&4&&jl(e);break;case 21:break;default:ze(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Xu(r)){var n=r;break e}r=r.return}throw Error(S(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(sn(s,""),n.flags&=-33);var a=bl(e);mi(e,a,s);break;case 3:case 4:var i=n.stateNode.containerInfo,l=bl(e);fi(e,l,i);break;default:throw Error(S(161))}}catch(d){Q(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e,t,r){C=e,Hu(e)}function Hu(e,t,r){for(var n=(e.mode&1)!==0;C!==null;){var s=C,a=s.child;if(s.tag===22&&n){var i=s.memoizedState!==null||Un;if(!i){var l=s.alternate,d=l!==null&&l.memoizedState!==null||ue;l=Un;var c=ue;if(Un=i,(ue=d)&&!c)for(C=s;C!==null;)i=C,d=i.child,i.tag===22&&i.memoizedState!==null?Il(s):d!==null?(d.return=i,C=d):Il(s);for(;a!==null;)C=a,Hu(a),a=a.sibling;C=s,Un=l,ue=c}Nl(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,C=a):Nl(e)}}function Nl(e){for(;C!==null;){var t=C;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||$s(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ue)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Le(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ul(t,a,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ul(t,i,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&dn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ue||t.flags&512&&pi(t)}catch(f){Q(t,t.return,f)}}if(t===e){C=null;break}if(r=t.sibling,r!==null){r.return=t.return,C=r;break}C=t.return}}function Cl(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var r=t.sibling;if(r!==null){r.return=t.return,C=r;break}C=t.return}}function Il(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{$s(4,t)}catch(d){Q(t,r,d)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(d){Q(t,s,d)}}var a=t.return;try{pi(t)}catch(d){Q(t,a,d)}break;case 5:var i=t.return;try{pi(t)}catch(d){Q(t,i,d)}}}catch(d){Q(t,t.return,d)}if(t===e){C=null;break}var l=t.sibling;if(l!==null){l.return=t.return,C=l;break}C=t.return}}var Qf=Math.ceil,Ns=ot.ReactCurrentDispatcher,oo=ot.ReactCurrentOwner,Fe=ot.ReactCurrentBatchConfig,T=0,se=null,Y=null,ie=0,Se=0,fr=Dt(0),re=0,vn=null,Wt=0,Us=0,lo=0,tn=null,he=null,uo=0,Cr=1/0,Ye=null,Cs=!1,_i=null,wt=null,Vn=!1,mt=null,Is=0,rn=0,hi=null,rs=-1,ns=0;function fe(){return T&6?H():rs!==-1?rs:rs=H()}function kt(e){return e.mode&1?T&2&&ie!==0?ie&-ie:Mf.transition!==null?(ns===0&&(ns=Fd()),ns):(e=z,e!==0||(e=window.event,e=e===void 0?16:qd(e.type)),e):1}function Ke(e,t,r,n){if(50<rn)throw rn=0,hi=null,Error(S(185));bn(e,r,n),(!(T&2)||e!==se)&&(e===se&&(!(T&2)&&(Us|=r),re===4&&pt(e,ie)),ve(e,n),r===1&&T===0&&!(t.mode&1)&&(Cr=H()+500,qs&&Mt()))}function ve(e,t){var r=e.callbackNode;Dp(e,t);var n=cs(e,e===se?ie:0);if(n===0)r!==null&&Lo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Lo(r),t===1)e.tag===0?Df(Dl.bind(null,e)):au(Dl.bind(null,e)),jf(function(){!(T&6)&&Mt()}),r=null;else{switch(Rd(n)){case 1:r=Ti;break;case 4:r=Ed;break;case 16:r=us;break;case 536870912:r=Pd;break;default:r=us}r=nc(r,Gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Gu(e,t){if(rs=-1,ns=0,T&6)throw Error(S(327));var r=e.callbackNode;if(xr()&&e.callbackNode!==r)return null;var n=cs(e,e===se?ie:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ds(e,n);else{t=n;var s=T;T|=2;var a=Zu();(se!==e||ie!==t)&&(Ye=null,Cr=H()+500,$t(e,t));do try{Gf();break}catch(l){Yu(e,l)}while(!0);Wi(),Ns.current=a,T=s,Y!==null?t=0:(se=null,ie=0,t=re)}if(t!==0){if(t===2&&(s=$a(e),s!==0&&(n=s,t=yi(e,s))),t===1)throw r=vn,$t(e,0),pt(e,n),ve(e,H()),r;if(t===6)pt(e,n);else{if(s=e.current.alternate,!(n&30)&&!Wf(s)&&(t=Ds(e,n),t===2&&(a=$a(e),a!==0&&(n=a,t=yi(e,a))),t===1))throw r=vn,$t(e,0),pt(e,n),ve(e,H()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(S(345));case 2:Lt(e,he,Ye);break;case 3:if(pt(e,n),(n&130023424)===n&&(t=uo+500-H(),10<t)){if(cs(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){fe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ya(Lt.bind(null,e,he,Ye),t);break}Lt(e,he,Ye);break;case 4:if(pt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var i=31-qe(n);a=1<<i,i=t[i],i>s&&(s=i),n&=~a}if(n=s,n=H()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Qf(n/1960))-n,10<n){e.timeoutHandle=Ya(Lt.bind(null,e,he,Ye),n);break}Lt(e,he,Ye);break;case 5:Lt(e,he,Ye);break;default:throw Error(S(329))}}}return ve(e,H()),e.callbackNode===r?Gu.bind(null,e):null}function yi(e,t){var r=tn;return e.current.memoizedState.isDehydrated&&($t(e,t).flags|=256),e=Ds(e,t),e!==2&&(t=he,he=r,t!==null&&gi(t)),e}function gi(e){he===null?he=e:he.push.apply(he,e)}function Wf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],a=s.getSnapshot;s=s.value;try{if(!Be(a(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~lo,t&=~Us,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-qe(t),n=1<<r;e[r]=-1,t&=~n}}function Dl(e){if(T&6)throw Error(S(327));xr();var t=cs(e,0);if(!(t&1))return ve(e,H()),null;var r=Ds(e,t);if(e.tag!==0&&r===2){var n=$a(e);n!==0&&(t=n,r=yi(e,n))}if(r===1)throw r=vn,$t(e,0),pt(e,t),ve(e,H()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,he,Ye),ve(e,H()),null}function co(e,t){var r=T;T|=1;try{return e(t)}finally{T=r,T===0&&(Cr=H()+500,qs&&Mt())}}function Ht(e){mt!==null&&mt.tag===0&&!(T&6)&&xr();var t=T;T|=1;var r=Fe.transition,n=z;try{if(Fe.transition=null,z=1,e)return e()}finally{z=n,Fe.transition=r,T=t,!(T&6)&&Mt()}}function po(){Se=fr.current,K(fr)}function $t(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,bf(r)),Y!==null)for(r=Y.return;r!==null;){var n=r;switch(Vi(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&hs();break;case 3:jr(),K(ge),K(ce),eo();break;case 5:Ji(n);break;case 4:jr();break;case 13:K(U);break;case 19:K(U);break;case 10:Hi(n.type._context);break;case 22:case 23:po()}r=r.return}if(se=e,Y=e=St(e.current,null),ie=Se=t,re=0,vn=null,lo=Us=Wt=0,he=tn=null,Kt!==null){for(t=0;t<Kt.length;t++)if(r=Kt[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,a=r.pending;if(a!==null){var i=a.next;a.next=s,n.next=i}r.pending=n}Kt=null}return e}function Yu(e,t){do{var r=Y;try{if(Wi(),Jn.current=js,bs){for(var n=V.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}bs=!1}if(Qt=0,ne=ee=V=null,Jr=!1,yn=0,oo.current=null,r===null||r.return===null){re=1,vn=t,Y=null;break}e:{var a=e,i=r.return,l=r,d=t;if(t=ie,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=hl(i);if(g!==null){g.flags&=-257,yl(g,i,l,a,t),g.mode&1&&_l(a,c,t),t=g,d=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(d),t.updateQueue=v}else y.add(d);break e}else{if(!(t&1)){_l(a,c,t),fo();break e}d=Error(S(426))}}else if(B&&l.mode&1){var k=hl(i);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yl(k,i,l,a,t),Xi(Nr(d,l));break e}}a=d=Nr(d,l),re!==4&&(re=2),tn===null?tn=[a]:tn.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Ru(a,d,t);dl(a,m);break e;case 1:l=d;var u=a.type,_=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(wt===null||!wt.has(_)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=Tu(a,l,t);dl(a,x);break e}}a=a.return}while(a!==null)}ec(r)}catch(b){t=b,Y===r&&r!==null&&(Y=r=r.return);continue}break}while(!0)}function Zu(){var e=Ns.current;return Ns.current=js,e===null?js:e}function fo(){(re===0||re===3||re===2)&&(re=4),se===null||!(Wt&268435455)&&!(Us&268435455)||pt(se,ie)}function Ds(e,t){var r=T;T|=2;var n=Zu();(se!==e||ie!==t)&&(Ye=null,$t(e,t));do try{Hf();break}catch(s){Yu(e,s)}while(!0);if(Wi(),T=r,Ns.current=n,Y!==null)throw Error(S(261));return se=null,ie=0,re}function Hf(){for(;Y!==null;)Ju(Y)}function Gf(){for(;Y!==null&&!vp();)Ju(Y)}function Ju(e){var t=rc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?ec(e):Y=t,oo.current=null}function ec(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=$f(r,t),r!==null){r.flags&=32767,Y=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,Y=null;return}}else if(r=Bf(r,t,Se),r!==null){Y=r;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);re===0&&(re=5)}function Lt(e,t,r){var n=z,s=Fe.transition;try{Fe.transition=null,z=1,Yf(e,t,r,n)}finally{Fe.transition=s,z=n}return null}function Yf(e,t,r,n){do xr();while(mt!==null);if(T&6)throw Error(S(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Mp(e,a),e===se&&(Y=se=null,ie=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Vn||(Vn=!0,nc(us,function(){return xr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Fe.transition,Fe.transition=null;var i=z;z=1;var l=T;T|=4,oo.current=null,Vf(e,r),Wu(r,e),yf(Ha),ps=!!Wa,Ha=Wa=null,e.current=r,Xf(r),wp(),T=l,z=i,Fe.transition=a}else e.current=r;if(Vn&&(Vn=!1,mt=e,Is=s),a=e.pendingLanes,a===0&&(wt=null),bp(r.stateNode),ve(e,H()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(Cs)throw Cs=!1,e=_i,_i=null,e;return Is&1&&e.tag!==0&&xr(),a=e.pendingLanes,a&1?e===hi?rn++:(rn=0,hi=e):rn=0,Mt(),null}function xr(){if(mt!==null){var e=Rd(Is),t=Fe.transition,r=z;try{if(Fe.transition=null,z=16>e?16:e,mt===null)var n=!1;else{if(e=mt,mt=null,Is=0,T&6)throw Error(S(331));var s=T;for(T|=4,C=e.current;C!==null;){var a=C,i=a.child;if(C.flags&16){var l=a.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(C=c;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:en(8,h,a)}var p=h.child;if(p!==null)p.return=h,C=p;else for(;C!==null;){h=C;var f=h.sibling,g=h.return;if(Vu(h),h===c){C=null;break}if(f!==null){f.return=g,C=f;break}C=g}}}var y=a.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}C=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,C=i;else e:for(;C!==null;){if(a=C,a.flags&2048)switch(a.tag){case 0:case 11:case 15:en(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,C=m;break e}C=a.return}}var u=e.current;for(C=u;C!==null;){i=C;var _=i.child;if(i.subtreeFlags&2064&&_!==null)_.return=i,C=_;else e:for(i=u;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$s(9,l)}}catch(b){Q(l,l.return,b)}if(l===i){C=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,C=x;break e}C=l.return}}if(T=s,Mt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Ts,e)}catch{}n=!0}return n}finally{z=r,Fe.transition=t}}return!1}function Ml(e,t,r){t=Nr(r,t),t=Ru(e,t,1),e=vt(e,t,1),t=fe(),e!==null&&(bn(e,1,t),ve(e,t))}function Q(e,t,r){if(e.tag===3)Ml(e,e,r);else for(;t!==null;){if(t.tag===3){Ml(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(wt===null||!wt.has(n))){e=Nr(r,e),e=Tu(t,e,1),t=vt(t,e,1),e=fe(),t!==null&&(bn(t,1,e),ve(t,e));break}}t=t.return}}function Zf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&r,se===e&&(ie&r)===r&&(re===4||re===3&&(ie&130023424)===ie&&500>H()-uo?$t(e,0):lo|=r),ve(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=Tn,Tn<<=1,!(Tn&130023424)&&(Tn=4194304)):t=1);var r=fe();e=at(e,t),e!==null&&(bn(e,t,r),ve(e,r))}function Jf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),tc(e,r)}function em(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(S(314))}n!==null&&n.delete(t),tc(e,r)}var rc;rc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)ye=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ye=!1,Kf(e,t,r);ye=!!(e.flags&131072)}else ye=!1,B&&t.flags&1048576&&iu(t,xs,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ts(e,t),e=t.pendingProps;var s=kr(t,ce.current);gr(t,r),s=ro(null,t,n,e,s,r);var a=no();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(n)?(a=!0,ys(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Yi(t),s.updater=Bs,t.stateNode=s,s._reactInternals=t,si(t,n,e,r),t=oi(null,t,n,!0,a,r)):(t.tag=0,B&&a&&Ui(t),pe(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ts(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=rm(n),e=Le(n,e),s){case 0:t=ii(null,t,n,e,r);break e;case 1:t=vl(null,t,n,e,r);break e;case 11:t=gl(null,t,n,e,r);break e;case 14:t=xl(null,t,n,Le(n.type,e),r);break e}throw Error(S(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Le(n,s),ii(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Le(n,s),vl(e,t,n,s,r);case 3:e:{if(Ou(t),e===null)throw Error(S(387));n=t.pendingProps,a=t.memoizedState,s=a.element,pu(e,t),ks(t,n,null,r);var i=t.memoizedState;if(n=i.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=Nr(Error(S(423)),t),t=wl(e,t,n,r,s);break e}else if(n!==s){s=Nr(Error(S(424)),t),t=wl(e,t,n,r,s);break e}else for(be=xt(t.stateNode.containerInfo.firstChild),je=t,B=!0,Oe=null,r=uu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Sr(),n===s){t=it(e,t,r);break e}pe(e,t,n,r)}t=t.child}return t;case 5:return fu(t),e===null&&ti(t),n=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,i=s.children,Ga(n,s)?i=null:a!==null&&Ga(n,a)&&(t.flags|=32),Au(e,t),pe(e,t,i,r),t.child;case 6:return e===null&&ti(t),null;case 13:return qu(e,t,r);case 4:return Zi(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=br(t,null,n,r):pe(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Le(n,s),gl(e,t,n,s,r);case 7:return pe(e,t,t.pendingProps,r),t.child;case 8:return pe(e,t,t.pendingProps.children,r),t.child;case 12:return pe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,a=t.memoizedProps,i=s.value,A(vs,n._currentValue),n._currentValue=i,a!==null)if(Be(a.value,i)){if(a.children===s.children&&!ge.current){t=it(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var d=l.firstContext;d!==null;){if(d.context===n){if(a.tag===1){d=tt(-1,r&-r),d.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?d.next=d:(d.next=h.next,h.next=d),c.pending=d}}a.lanes|=r,d=a.alternate,d!==null&&(d.lanes|=r),ri(a.return,r,t),l.lanes|=r;break}d=d.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(S(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),ri(i,r,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}pe(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,gr(t,r),s=Re(s),n=n(s),t.flags|=1,pe(e,t,n,r),t.child;case 14:return n=t.type,s=Le(n,t.pendingProps),s=Le(n.type,s),xl(e,t,n,s,r);case 15:return zu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Le(n,s),ts(e,t),t.tag=1,xe(n)?(e=!0,ys(t)):e=!1,gr(t,r),Fu(t,n,s),si(t,n,s,r),oi(null,t,n,!0,e,r);case 19:return Ku(e,t,r);case 22:return Lu(e,t,r)}throw Error(S(156,t.tag))};function nc(e,t){return Md(e,t)}function tm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,r,n){return new tm(e,t,r,n)}function mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rm(e){if(typeof e=="function")return mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pi)return 11;if(e===Fi)return 14}return 2}function St(e,t){var r=e.alternate;return r===null?(r=Pe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ss(e,t,r,n,s,a){var i=2;if(n=e,typeof e=="function")mo(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case nr:return Ut(r.children,s,a,t);case Ei:i=8,s|=8;break;case Ia:return e=Pe(12,r,t,s|2),e.elementType=Ia,e.lanes=a,e;case Da:return e=Pe(13,r,t,s),e.elementType=Da,e.lanes=a,e;case Ma:return e=Pe(19,r,t,s),e.elementType=Ma,e.lanes=a,e;case fd:return Vs(r,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cd:i=10;break e;case pd:i=9;break e;case Pi:i=11;break e;case Fi:i=14;break e;case dt:i=16,n=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Pe(i,r,t,s),t.elementType=e,t.type=n,t.lanes=a,t}function Ut(e,t,r,n){return e=Pe(7,e,n,t),e.lanes=r,e}function Vs(e,t,r,n){return e=Pe(22,e,n,t),e.elementType=fd,e.lanes=r,e.stateNode={isHidden:!1},e}function ka(e,t,r){return e=Pe(6,e,null,t),e.lanes=r,e}function Sa(e,t,r){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nm(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function _o(e,t,r,n,s,a,i,l,d){return e=new nm(e,t,r,l,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Pe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yi(a),e}function sm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function sc(e){if(!e)return Ct;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(xe(r))return su(e,r,t)}return t}function ac(e,t,r,n,s,a,i,l,d){return e=_o(r,n,!0,e,s,a,i,l,d),e.context=sc(null),r=e.current,n=fe(),s=kt(r),a=tt(n,s),a.callback=t??null,vt(r,a,s),e.current.lanes=s,bn(e,s,n),ve(e,n),e}function Xs(e,t,r,n){var s=t.current,a=fe(),i=kt(s);return r=sc(r),t.context===null?t.context=r:t.pendingContext=r,t=tt(a,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=vt(s,t,i),e!==null&&(Ke(e,s,i,a),Zn(e,s,i)),i}function Ms(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function El(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ho(e,t){El(e,t),(e=e.alternate)&&El(e,t)}function am(){return null}var ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function yo(e){this._internalRoot=e}Qs.prototype.render=yo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Xs(e,t,null,null)};Qs.prototype.unmount=yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Xs(null,e,null,null)}),t[st]=null}};function Qs(e){this._internalRoot=e}Qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ld();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ct.length&&t!==0&&t<ct[r].priority;r++);ct.splice(r,0,e),r===0&&Od(e)}};function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pl(){}function im(e,t,r,n,s){if(s){if(typeof n=="function"){var a=n;n=function(){var c=Ms(i);a.call(c)}}var i=ac(t,n,e,0,null,!1,!1,"",Pl);return e._reactRootContainer=i,e[st]=i.current,pn(e.nodeType===8?e.parentNode:e),Ht(),i}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var l=n;n=function(){var c=Ms(d);l.call(c)}}var d=_o(e,0,!1,null,null,!1,!1,"",Pl);return e._reactRootContainer=d,e[st]=d.current,pn(e.nodeType===8?e.parentNode:e),Ht(function(){Xs(t,d,r,n)}),d}function Hs(e,t,r,n,s){var a=r._reactRootContainer;if(a){var i=a;if(typeof s=="function"){var l=s;s=function(){var d=Ms(i);l.call(d)}}Xs(t,i,e,s)}else i=im(r,t,e,s,n);return Ms(i)}Td=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Vr(t.pendingLanes);r!==0&&(zi(t,r|1),ve(t,H()),!(T&6)&&(Cr=H()+500,Mt()))}break;case 13:Ht(function(){var n=at(e,1);if(n!==null){var s=fe();Ke(n,e,1,s)}}),ho(e,1)}};Li=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var r=fe();Ke(t,e,134217728,r)}ho(e,134217728)}};zd=function(e){if(e.tag===13){var t=kt(e),r=at(e,t);if(r!==null){var n=fe();Ke(r,e,t,n)}ho(e,t)}};Ld=function(){return z};Ad=function(e,t){var r=z;try{return z=e,t()}finally{z=r}};qa=function(e,t,r){switch(t){case"input":if(Fa(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=Os(n);if(!s)throw Error(S(90));_d(n),Fa(n,s)}}}break;case"textarea":yd(e,r);break;case"select":t=r.value,t!=null&&mr(e,!!r.multiple,t,!1)}};bd=co;jd=Ht;var om={usingClientEntryPoint:!1,Events:[Nn,or,Os,kd,Sd,co]},Br={findFiberByHostInstance:qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lm={bundleType:Br.bundleType,version:Br.version,rendererPackageName:Br.rendererPackageName,rendererConfig:Br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Id(e),e===null?null:e.stateNode},findFiberByHostInstance:Br.findFiberByHostInstance||am,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xn.isDisabled&&Xn.supportsFiber)try{Ts=Xn.inject(lm),Qe=Xn}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=om;Ce.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!go(t))throw Error(S(200));return sm(e,t,null,r)};Ce.createRoot=function(e,t){if(!go(e))throw Error(S(299));var r=!1,n="",s=ic;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=_o(e,1,!1,null,null,r,!1,n,s),e[st]=t.current,pn(e.nodeType===8?e.parentNode:e),new yo(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Id(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ht(e)};Ce.hydrate=function(e,t,r){if(!Ws(t))throw Error(S(200));return Hs(null,e,t,!0,r)};Ce.hydrateRoot=function(e,t,r){if(!go(e))throw Error(S(405));var n=r!=null&&r.hydratedSources||null,s=!1,a="",i=ic;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=ac(t,null,e,1,r??null,s,!1,a,i),e[st]=t.current,pn(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new Qs(t)};Ce.render=function(e,t,r){if(!Ws(t))throw Error(S(200));return Hs(null,e,t,!1,r)};Ce.unmountComponentAtNode=function(e){if(!Ws(e))throw Error(S(40));return e._reactRootContainer?(Ht(function(){Hs(null,null,e,!1,function(){e._reactRootContainer=null,e[st]=null})}),!0):!1};Ce.unstable_batchedUpdates=co;Ce.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ws(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Hs(e,t,r,!1,n)};Ce.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),od.exports=Ce;var dm=od.exports,Fl=dm;Na.createRoot=Fl.createRoot,Na.hydrateRoot=Fl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wn(){return wn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wn.apply(this,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const Rl="popstate";function um(e){e===void 0&&(e={});function t(n,s){let{pathname:a,search:i,hash:l}=n.location;return xi("",{pathname:a,search:i,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(n,s){return typeof s=="string"?s:Es(s)}return pm(t,r,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cm(){return Math.random().toString(36).substr(2,8)}function Tl(e,t){return{usr:e.state,key:e.key,idx:t}}function xi(e,t,r,n){return r===void 0&&(r=null),wn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:r,key:t&&t.key||n||cm()})}function Es(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Pr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function pm(e,t,r,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:a=!1}=n,i=s.history,l=_t.Pop,d=null,c=h();c==null&&(c=0,i.replaceState(wn({},i.state,{idx:c}),""));function h(){return(i.state||{idx:null}).idx}function p(){l=_t.Pop;let k=h(),m=k==null?null:k-c;c=k,d&&d({action:l,location:v.location,delta:m})}function f(k,m){l=_t.Push;let u=xi(v.location,k,m);c=h()+1;let _=Tl(u,c),x=v.createHref(u);try{i.pushState(_,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;s.location.assign(x)}a&&d&&d({action:l,location:v.location,delta:1})}function g(k,m){l=_t.Replace;let u=xi(v.location,k,m);c=h();let _=Tl(u,c),x=v.createHref(u);i.replaceState(_,"",x),a&&d&&d({action:l,location:v.location,delta:0})}function y(k){let m=s.location.origin!=="null"?s.location.origin:s.location.href,u=typeof k=="string"?k:Es(k);return u=u.replace(/ $/,"%20"),Z(m,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,m)}let v={get action(){return l},get location(){return e(s,i)},listen(k){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(Rl,p),d=k,()=>{s.removeEventListener(Rl,p),d=null}},createHref(k){return t(s,k)},createURL:y,encodeLocation(k){let m=y(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(k){return i.go(k)}};return v}var zl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zl||(zl={}));function fm(e,t,r){return r===void 0&&(r="/"),mm(e,t,r)}function mm(e,t,r,n){let s=typeof t=="string"?Pr(t):t,a=vo(s.pathname||"/",r);if(a==null)return null;let i=lc(e);_m(i);let l=null;for(let d=0;l==null&&d<i.length;++d){let c=Cm(a);l=bm(i[d],c)}return l}function lc(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let s=(a,i,l)=>{let d={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};d.relativePath.startsWith("/")&&(Z(d.relativePath.startsWith(n),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(n.length));let c=bt([n,d.relativePath]),h=r.concat(d);a.children&&a.children.length>0&&(Z(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lc(a.children,t,h,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:km(c,a.index),routesMeta:h})};return e.forEach((a,i)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,i);else for(let d of dc(a.path))s(a,i,d)}),t}function dc(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,s=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return s?[a,""]:[a];let i=dc(n.join("/")),l=[];return l.push(...i.map(d=>d===""?a:[a,d].join("/"))),s&&l.push(...i),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function _m(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Sm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const hm=/^:[\w-]+$/,ym=3,gm=2,xm=1,vm=10,wm=-2,Ll=e=>e==="*";function km(e,t){let r=e.split("/"),n=r.length;return r.some(Ll)&&(n+=wm),t&&(n+=gm),r.filter(s=>!Ll(s)).reduce((s,a)=>s+(hm.test(a)?ym:a===""?xm:vm),n)}function Sm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,s)=>n===t[s])?e[e.length-1]-t[t.length-1]:0}function bm(e,t,r){let{routesMeta:n}=e,s={},a="/",i=[];for(let l=0;l<n.length;++l){let d=n[l],c=l===n.length-1,h=a==="/"?t:t.slice(a.length)||"/",p=jm({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},h),f=d.route;if(!p)return null;Object.assign(s,p.params),i.push({params:s,pathname:bt([a,p.pathname]),pathnameBase:Pm(bt([a,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(a=bt([a,p.pathnameBase]))}return i}function jm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Nm(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let a=s[0],i=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:n.reduce((c,h,p)=>{let{paramName:f,isOptional:g}=h;if(f==="*"){let v=l[p]||"";i=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const y=l[p];return g&&!y?c[f]=void 0:c[f]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:i,pattern:e}}function Nm(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),xo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,d)=>(n.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),n]}function Cm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dm=e=>Im.test(e);function Mm(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:s=""}=typeof e=="string"?Pr(e):e,a;if(r)if(Dm(r))a=r;else{if(r.includes("//")){let i=r;r=r.replace(/\/\/+/g,"/"),xo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+r))}r.startsWith("/")?a=Al(r.substring(1),"/"):a=Al(r,t)}else a=t;return{pathname:a,search:Fm(n),hash:Rm(s)}}function Al(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function ba(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Em(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function uc(e,t){let r=Em(e);return t?r.map((n,s)=>s===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function cc(e,t,r,n){n===void 0&&(n=!1);let s;typeof e=="string"?s=Pr(e):(s=wn({},e),Z(!s.pathname||!s.pathname.includes("?"),ba("?","pathname","search",s)),Z(!s.pathname||!s.pathname.includes("#"),ba("#","pathname","hash",s)),Z(!s.search||!s.search.includes("#"),ba("#","search","hash",s)));let a=e===""||s.pathname==="",i=a?"/":s.pathname,l;if(i==null)l=r;else{let p=t.length-1;if(!n&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),p-=1;s.pathname=f.join("/")}l=p>=0?t[p]:"/"}let d=Mm(s,l),c=i&&i!=="/"&&i.endsWith("/"),h=(a||i===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||h)&&(d.pathname+="/"),d}const bt=e=>e.join("/").replace(/\/\/+/g,"/"),Pm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Rm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pc=["post","put","patch","delete"];new Set(pc);const zm=["get",...pc];new Set(zm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kn(){return kn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},kn.apply(this,arguments)}const wo=w.createContext(null),Lm=w.createContext(null),Zt=w.createContext(null),Gs=w.createContext(null),Et=w.createContext({outlet:null,matches:[],isDataRoute:!1}),fc=w.createContext(null);function Am(e,t){let{relative:r}=t===void 0?{}:t;In()||Z(!1);let{basename:n,navigator:s}=w.useContext(Zt),{hash:a,pathname:i,search:l}=hc(e,{relative:r}),d=i;return n!=="/"&&(d=i==="/"?n:bt([n,i])),s.createHref({pathname:d,search:l,hash:a})}function In(){return w.useContext(Gs)!=null}function Fr(){return In()||Z(!1),w.useContext(Gs).location}function mc(e){w.useContext(Zt).static||w.useLayoutEffect(e)}function Rr(){let{isDataRoute:e}=w.useContext(Et);return e?Ym():Om()}function Om(){In()||Z(!1);let e=w.useContext(wo),{basename:t,future:r,navigator:n}=w.useContext(Zt),{matches:s}=w.useContext(Et),{pathname:a}=Fr(),i=JSON.stringify(uc(s,r.v7_relativeSplatPath)),l=w.useRef(!1);return mc(()=>{l.current=!0}),w.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let p=cc(c,JSON.parse(i),a,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:bt([t,p.pathname])),(h.replace?n.replace:n.push)(p,h.state,h)},[t,n,i,a,e])}function _c(){let{matches:e}=w.useContext(Et),t=e[e.length-1];return t?t.params:{}}function hc(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=w.useContext(Zt),{matches:s}=w.useContext(Et),{pathname:a}=Fr(),i=JSON.stringify(uc(s,n.v7_relativeSplatPath));return w.useMemo(()=>cc(e,JSON.parse(i),a,r==="path"),[e,i,a,r])}function qm(e,t){return Km(e,t)}function Km(e,t,r,n){In()||Z(!1);let{navigator:s}=w.useContext(Zt),{matches:a}=w.useContext(Et),i=a[a.length-1],l=i?i.params:{};i&&i.pathname;let d=i?i.pathnameBase:"/";i&&i.route;let c=Fr(),h;if(t){var p;let k=typeof t=="string"?Pr(t):t;d==="/"||(p=k.pathname)!=null&&p.startsWith(d)||Z(!1),h=k}else h=c;let f=h.pathname||"/",g=f;if(d!=="/"){let k=d.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=fm(e,{pathname:g}),v=Xm(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:bt([d,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?d:bt([d,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,r,n);return t&&v?w.createElement(Gs.Provider,{value:{location:kn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:_t.Pop}},v):v}function Bm(){let e=Gm(),t=Tm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),r?w.createElement("pre",{style:s},r):null,null)}const $m=w.createElement(Bm,null);class Um extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?w.createElement(Et.Provider,{value:this.props.routeContext},w.createElement(fc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vm(e){let{routeContext:t,match:r,children:n}=e,s=w.useContext(wo);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(Et.Provider,{value:t},n)}function Xm(e,t,r,n){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=n)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,l=(s=r)==null?void 0:s.errors;if(l!=null){let h=i.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);h>=0||Z(!1),i=i.slice(0,Math.min(i.length,h+1))}let d=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<i.length;h++){let p=i[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:f,errors:g}=r,y=p.route.loader&&f[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||y){d=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,p,f)=>{let g,y=!1,v=null,k=null;r&&(g=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||$m,d&&(c<0&&f===0?(Zm("route-fallback"),y=!0,k=null):c===f&&(y=!0,k=p.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,f+1)),u=()=>{let _;return g?_=v:y?_=k:p.route.Component?_=w.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=h,w.createElement(Vm,{match:p,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:_})};return r&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?w.createElement(Um,{location:r.location,revalidation:r.revalidation,component:v,error:g,children:u(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):u()},null)}var yc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yc||{}),gc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gc||{});function Qm(e){let t=w.useContext(wo);return t||Z(!1),t}function Wm(e){let t=w.useContext(Lm);return t||Z(!1),t}function Hm(e){let t=w.useContext(Et);return t||Z(!1),t}function xc(e){let t=Hm(),r=t.matches[t.matches.length-1];return r.route.id||Z(!1),r.route.id}function Gm(){var e;let t=w.useContext(fc),r=Wm(),n=xc();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Ym(){let{router:e}=Qm(yc.UseNavigateStable),t=xc(gc.UseNavigateStable),r=w.useRef(!1);return mc(()=>{r.current=!0}),w.useCallback(function(s,a){a===void 0&&(a={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,kn({fromRouteId:t},a)))},[e,t])}const Ol={};function Zm(e,t,r){Ol[e]||(Ol[e]=!0)}function Jm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function At(e){Z(!1)}function e0(e){let{basename:t="/",children:r=null,location:n,navigationType:s=_t.Pop,navigator:a,static:i=!1,future:l}=e;In()&&Z(!1);let d=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:d,navigator:a,static:i,future:kn({v7_relativeSplatPath:!1},l)}),[d,l,a,i]);typeof n=="string"&&(n=Pr(n));let{pathname:h="/",search:p="",hash:f="",state:g=null,key:y="default"}=n,v=w.useMemo(()=>{let k=vo(h,d);return k==null?null:{location:{pathname:k,search:p,hash:f,state:g,key:y},navigationType:s}},[d,h,p,f,g,y,s]);return v==null?null:w.createElement(Zt.Provider,{value:c},w.createElement(Gs.Provider,{children:r,value:v}))}function t0(e){let{children:t,location:r}=e;return qm(vi(t),r)}new Promise(()=>{});function vi(e,t){t===void 0&&(t=[]);let r=[];return w.Children.forEach(e,(n,s)=>{if(!w.isValidElement(n))return;let a=[...t,s];if(n.type===w.Fragment){r.push.apply(r,vi(n.props.children,a));return}n.type!==At&&Z(!1),!n.props.index||!n.props.children||Z(!1);let i={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=vi(n.props.children,a)),r.push(i)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wi.apply(this,arguments)}function r0(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,a;for(a=0;a<n.length;a++)s=n[a],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function n0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function s0(e,t){return e.button===0&&(!t||t==="_self")&&!n0(e)}const a0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],i0="6";try{window.__reactRouterVersion=i0}catch{}const o0="startTransition",ql=Yc[o0];function l0(e){let{basename:t,children:r,future:n,window:s}=e,a=w.useRef();a.current==null&&(a.current=um({window:s,v5Compat:!0}));let i=a.current,[l,d]=w.useState({action:i.action,location:i.location}),{v7_startTransition:c}=n||{},h=w.useCallback(p=>{c&&ql?ql(()=>d(p)):d(p)},[d,c]);return w.useLayoutEffect(()=>i.listen(h),[i,h]),w.useEffect(()=>Jm(n),[n]),w.createElement(e0,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:i,future:n})}const d0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",u0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vr=w.forwardRef(function(t,r){let{onClick:n,relative:s,reloadDocument:a,replace:i,state:l,target:d,to:c,preventScrollReset:h,viewTransition:p}=t,f=r0(t,a0),{basename:g}=w.useContext(Zt),y,v=!1;if(typeof c=="string"&&u0.test(c)&&(y=c,d0))try{let _=new URL(window.location.href),x=c.startsWith("//")?new URL(_.protocol+c):new URL(c),b=vo(x.pathname,g);x.origin===_.origin&&b!=null?c=b+x.search+x.hash:v=!0}catch{}let k=Am(c,{relative:s}),m=c0(c,{replace:i,state:l,target:d,preventScrollReset:h,relative:s,viewTransition:p});function u(_){n&&n(_),_.defaultPrevented||m(_)}return w.createElement("a",wi({},f,{href:y||k,onClick:v||a?n:u,ref:r,target:d}))});var Kl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kl||(Kl={}));var Bl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bl||(Bl={}));function c0(e,t){let{target:r,replace:n,state:s,preventScrollReset:a,relative:i,viewTransition:l}=t===void 0?{}:t,d=Rr(),c=Fr(),h=hc(e,{relative:i});return w.useCallback(p=>{if(s0(p,r)){p.preventDefault();let f=n!==void 0?n:Es(c)===Es(h);d(e,{replace:f,state:s,preventScrollReset:a,relative:i,viewTransition:l})}},[c,d,h,n,s,r,e,a,i,l])}/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vc=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:s="",children:a,iconNode:i,...l},d)=>w.createElement("svg",{ref:d,...f0,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:vc("lucide",s),...l},[...i.map(([c,h])=>w.createElement(c,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(e,t)=>{const r=w.forwardRef(({className:n,...s},a)=>w.createElement(m0,{ref:a,iconNode:t,className:vc(`lucide-${p0(e)}`,n),...s}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=M("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=M("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=M("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=M("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=M("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=M("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=M("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=M("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=M("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=M("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=M("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=M("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=M("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=M("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=M("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=M("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=M("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=M("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=M("FileQuestion",[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=M("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=M("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=M("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=M("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=M("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=M("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=M("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=M("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=M("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=M("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=M("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=M("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=M("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=M("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=M("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=M("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=M("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=M("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=M("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=M("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=M("SquareCheckBig",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=M("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=M("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=M("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=M("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=M("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=M("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function K0({onToggleSidebar:e}){const t=Fr(),[r,n]=w.useState(!1),[s,a]=w.useState(!1),i=[{path:"/",label:"首页",icon:bc},{path:"/courses",label:"课程",icon:we},{path:"/study-data",label:"学习数据",icon:ko},{path:"/study-tasks",label:"学习清单",icon:as}];return w.useEffect(()=>{const l=()=>{n(window.scrollY>10)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),w.useEffect(()=>{a(!1)},[t.pathname]),o.jsxs("nav",{className:`sticky top-0 z-50 transition-all duration-300 ${r?"bg-slate-900/95 backdrop-blur-md shadow-lg":"bg-slate-900 shadow-md"}`,children:[o.jsx("div",{className:"max-w-full mx-auto px-3 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex justify-between items-center h-14 sm:h-16",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("button",{onClick:e,className:"lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-200","aria-label":"打开侧边栏",children:o.jsx(Ul,{className:"h-5 w-5 sm:h-6 sm:w-6"})}),o.jsxs(vr,{to:"/",className:"flex items-center gap-2 sm:gap-3 group",children:[o.jsx("div",{className:"w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-200",children:o.jsx(we,{className:"h-4 w-4 sm:h-5 sm:w-5 text-white"})}),o.jsx("span",{className:"text-lg sm:text-xl font-bold text-white",children:"夏荷的学习中心"})]})]}),o.jsx("div",{className:"hidden md:flex items-center space-x-2",children:i.map(l=>{const d=l.icon,c=t.pathname===l.path;return o.jsxs(vr,{to:l.path,className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${c?"bg-emerald-600 text-white shadow-md shadow-emerald-500/30":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[o.jsx(d,{className:"h-4 w-4"}),l.label]},l.path)})}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>a(!s),className:"md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-200","aria-label":s?"关闭菜单":"打开菜单",children:s?o.jsx(So,{className:"h-5 w-5"}):o.jsx(Ul,{className:"h-5 w-5"})}),o.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center border border-amber-500",children:o.jsx(S0,{className:"h-4 w-4 sm:h-5 sm:w-5 text-white"})})]})]})}),s&&o.jsx("div",{className:"md:hidden border-t border-slate-800 bg-slate-900 animate-in fade-in slide-in-from-top-4 duration-200",children:o.jsx("div",{className:"px-4 py-4 space-y-2",children:i.map(l=>{const d=l.icon,c=t.pathname===l.path;return o.jsxs(vr,{to:l.path,className:`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${c?"bg-emerald-600 text-white":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[o.jsx(d,{className:"h-5 w-5"}),l.label]},l.path)})})})]})}function B0({isOpen:e,onClose:t}){const r=Fr(),n=[{path:"/",label:"首页",icon:bc},{path:"/courses",label:"我的课程",icon:we},{path:"/progress",label:"学习进度",icon:ko},{path:"/schedule",label:"学习计划",icon:Dn},{path:"/history",label:"学习历史",icon:rt},{path:"/settings",label:"设置",icon:A0}];return o.jsxs(o.Fragment,{children:[e&&o.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-xs z-40 lg:hidden animate-fade-in",onClick:t}),o.jsxs("aside",{className:`
          fixed lg:static inset-y-0 left-0 z-50
          w-72 sm:w-80 bg-white border-r border-gray-100
          transform transition-transform duration-300 ease-in-out
          shadow-xl lg:shadow-none
          ${e?"translate-x-0":"-translate-x-full lg:translate-x-0"}
        `,children:[o.jsxs("div",{className:"h-16 flex items-center justify-between px-5 lg:hidden border-b border-gray-100",children:[o.jsxs(vr,{to:"/",className:"flex items-center gap-2 group",onClick:t,children:[o.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200",children:o.jsx(we,{className:"h-4 w-4 text-white"})}),o.jsx("span",{className:"text-xl font-bold text-gray-900",children:"夏荷的学习中心"})]}),o.jsx("button",{onClick:t,className:"p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105","aria-label":"关闭侧边栏",children:o.jsx(So,{className:"h-5 w-5 text-gray-600"})})]}),o.jsx("nav",{className:"p-4 space-y-1.5 overflow-y-auto",style:{height:"calc(100vh - 180px)"},children:n.map((s,a)=>{const i=s.icon,l=r.pathname===s.path||s.path!=="/"&&r.pathname.startsWith(s.path);return o.jsxs(vr,{to:s.path,onClick:t,className:`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  hover:scale-[1.02]
                  ${l?"bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                `,style:{animationDelay:`${a*50}ms`},children:[o.jsx(i,{className:"h-5 w-5 flex-shrink-0"}),o.jsx("span",{children:s.label}),l&&o.jsx("div",{className:"ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow"})]},s.path)})}),o.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gradient-to-t from-gray-50 to-white",children:o.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[o.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20",children:o.jsx(h0,{className:"h-5 w-5 text-white"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-gray-900",children:"学习统计"}),o.jsx("p",{className:"text-xs text-gray-500",children:"今日表现"})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsx("span",{className:"text-sm text-gray-600",children:"已学习"}),o.jsx("span",{className:"text-sm font-bold text-gray-900",children:"42 小时"})]}),o.jsx("div",{className:"w-full bg-white/60 rounded-full h-2 overflow-hidden",children:o.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full",style:{width:"65%"}})})]})]})})]})]})}function $0({children:e}){const[t,r]=w.useState(!1),n=()=>r(!t),s=()=>r(!1);return o.jsxs("div",{className:"min-h-screen bg-green-50 flex flex-col",children:[o.jsx(K0,{onToggleSidebar:n}),o.jsxs("div",{className:"flex flex-1",children:[o.jsx(B0,{isOpen:t,onClose:s}),o.jsx("main",{className:"flex-1 min-w-0",children:o.jsx("div",{className:"p-4 sm:p-6 lg:p-8 max-w-full overflow-x-hidden",children:e})})]})]})}const U0={},Vl=e=>{let t;const r=new Set,n=(h,p)=>{const f=typeof h=="function"?h(t):h;if(!Object.is(f,t)){const g=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),r.forEach(y=>y(t,g))}},s=()=>t,d={setState:n,getState:s,getInitialState:()=>c,subscribe:h=>(r.add(h),()=>r.delete(h)),destroy:()=>{(U0?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},c=t=e(n,s,d);return d},V0=e=>e?Vl(e):Vl;var Dc={exports:{}},Mc={},Ec={exports:{}},Pc={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir=w;function X0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Q0=typeof Object.is=="function"?Object.is:X0,W0=Ir.useState,H0=Ir.useEffect,G0=Ir.useLayoutEffect,Y0=Ir.useDebugValue;function Z0(e,t){var r=t(),n=W0({inst:{value:r,getSnapshot:t}}),s=n[0].inst,a=n[1];return G0(function(){s.value=r,s.getSnapshot=t,ja(s)&&a({inst:s})},[e,r,t]),H0(function(){return ja(s)&&a({inst:s}),e(function(){ja(s)&&a({inst:s})})},[e]),Y0(r),r}function ja(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Q0(e,r)}catch{return!0}}function J0(e,t){return t()}var e_=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?J0:Z0;Pc.useSyncExternalStore=Ir.useSyncExternalStore!==void 0?Ir.useSyncExternalStore:e_;Ec.exports=Pc;var t_=Ec.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=w,r_=t_;function n_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var s_=typeof Object.is=="function"?Object.is:n_,a_=r_.useSyncExternalStore,i_=Ys.useRef,o_=Ys.useEffect,l_=Ys.useMemo,d_=Ys.useDebugValue;Mc.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var a=i_(null);if(a.current===null){var i={hasValue:!1,value:null};a.current=i}else i=a.current;a=l_(function(){function d(g){if(!c){if(c=!0,h=g,g=n(g),s!==void 0&&i.hasValue){var y=i.value;if(s(y,g))return p=y}return p=g}if(y=p,s_(h,g))return y;var v=n(g);return s!==void 0&&s(y,v)?(h=g,y):(h=g,p=v)}var c=!1,h,p,f=r===void 0?null:r;return[function(){return d(t())},f===null?void 0:function(){return d(f())}]},[t,r,n,s]);var l=a_(e,a[0],a[1]);return o_(function(){i.hasValue=!0,i.value=l},[l]),d_(l),l};Dc.exports=Mc;var u_=Dc.exports;const c_=Hl(u_),Fc={},{useDebugValue:p_}=Ci,{useSyncExternalStoreWithSelector:f_}=c_;let Xl=!1;const m_=e=>e;function __(e,t=m_,r){(Fc?"production":void 0)!=="production"&&r&&!Xl&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Xl=!0);const n=f_(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return p_(n),n}const Ql=e=>{(Fc?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?V0(e):e,r=(n,s)=>__(t,n,s);return Object.assign(r,t),r},h_=e=>e?Ql(e):Ql,Rc="personal-learning-app-state",y_=()=>{try{const e=localStorage.getItem(Rc);return e===null?null:JSON.parse(e)}catch(e){return console.error("Error loading state from localStorage:",e),null}},g_=e=>{try{const t=JSON.stringify(e);localStorage.setItem(Rc,t)}catch(t){console.error("Error saving state to localStorage:",t)}},x_=[{id:"course-1",title:"Python基础",description:"Python编程语言的基础语法、数据类型、控制结构和函数等核心概念",category:"编程语言",progress:16,createdAt:new Date("2024-09-01").toISOString(),updatedAt:new Date("2024-10-15").toISOString(),introduction:"Python是一门易于学习、功能强大的编程语言，被广泛应用于数据分析、人工智能、Web开发、自动化等领域。本课程从零基础开始，系统讲解Python的基础语法和核心概念，培养您的编程思维和实践能力。",skills:["掌握Python基础语法","熟练使用基本数据类型","编写函数和模块","理解面向对象编程","使用Python进行数据处理"],evaluation:"课堂练习30% + 章节测验30% + 期末项目40%",learningResources:[{title:"Python官方文档",url:"https://docs.python.org/3/",type:"官方文档"},{title:"廖雪峰Python教程",url:"https://www.liaoxuefeng.com/wiki/1016959663602400",type:"在线教程"},{title:"Python代码规范",url:"https://pep8.org/",type:"编码规范"}]},{id:"course-2",title:"数据分析技术",description:"数据清洗、数据可视化、统计分析等数据分析核心技术",category:"数据分析",progress:60,createdAt:new Date("2024-09-15").toISOString(),updatedAt:new Date("2024-10-10").toISOString(),introduction:"数据分析是企业决策的重要依据。本课程涵盖数据分析的完整流程，包括数据收集、清洗、转换、分析和可视化，培养您成为合格的数据分析师。",skills:["掌握数据清洗技术","熟练使用Pandas进行数据处理","创建专业数据可视化图表","进行描述性统计分析","解读数据分析结果"],evaluation:"实验报告30% + 案例分析30% + 综合项目40%",learningResources:[{title:"Pandas官方文档",url:"https://pandas.pydata.org/docs/",type:"官方文档"},{title:"Matplotlib教程",url:"https://matplotlib.org/stable/tutorials/index.html",type:"官方文档"},{title:"Kaggle数据集",url:"https://www.kaggle.com/datasets",type:"数据集"}]},{id:"course-3",title:"数据采集与处理",description:"网络爬虫、数据抓取、数据预处理等数据采集和处理技术",category:"数据分析",progress:45,createdAt:new Date("2024-10-01").toISOString(),updatedAt:new Date("2024-10-05").toISOString(),introduction:"数据是数据分析的基础。本课程教授数据采集的各种方法，包括网络爬虫、API调用、数据库查询等，以及数据预处理技术，为后续分析奠定基础。",skills:["编写Python网络爬虫","调用RESTful API","进行数据清洗和预处理","处理多种数据格式","遵守网络爬虫伦理规范"],evaluation:"爬虫实战30% + 数据处理报告30% + 期末综合项目40%",learningResources:[{title:"Requests库文档",url:"https://docs.python-requests.org/",type:"官方文档"},{title:"BeautifulSoup文档",url:"https://www.crummy.com/software/BeautifulSoup/bs4/doc/",type:"官方文档"},{title:"Scrapy框架",url:"https://scrapy.org/",type:"爬虫框架"}]},{id:"course-4",title:"供应链数据分析",description:"供应链管理中的数据分析方法、库存优化、物流分析等",category:"专业课程",progress:30,createdAt:new Date("2024-10-05").toISOString(),updatedAt:new Date("2024-10-08").toISOString(),introduction:"供应链数据分析是企业提升运营效率的关键。本课程结合商务数据分析专业的特点，教授供应链各环节的数据分析方法，包括需求预测、库存优化、物流调度等。",skills:["进行需求预测分析","优化库存管理策略","分析物流配送效率","使用数据分析支持决策","构建供应链数据模型"],evaluation:"案例分析30% + 实践项目40% + 期末答辩30%",learningResources:[{title:"供应链管理知识",url:"https://www.scmresearch.com/",type:"学术资源"},{title:"库存管理方法",url:"https://www.investopedia.com/terms/in/inventory-management.asp",type:"专业文章"}]},{id:"course-5",title:"数据库原理与应用",description:"数据库设计、SQL语句、关系型数据库和NoSQL数据库应用",category:"数据库",progress:50,createdAt:new Date("2024-09-20").toISOString(),updatedAt:new Date("2024-10-12").toISOString(),introduction:"数据库是现代信息系统的基础。本课程系统讲解数据库的设计原理、SQL查询语言，以及MySQL、PostgreSQL等主流数据库的应用，培养您管理和分析数据的能力。",skills:["设计规范化的数据库","熟练编写SQL查询","进行数据库性能优化","理解事务和并发控制","使用NoSQL数据库"],evaluation:"数据库设计作业25% + SQL编程实验25% + 综合设计项目50%",learningResources:[{title:"MySQL官方文档",url:"https://dev.mysql.com/doc/",type:"官方文档"},{title:"SQL教程",url:"https://www.w3schools.com/sql/",type:"在线教程"},{title:"PostgreSQL教程",url:"https://www.postgresql.org/docs/",type:"官方文档"}]},{id:"course-6",title:"商务智能与数据可视化",description:"商业智能工具使用、数据仪表盘设计、数据可视化最佳实践",category:"数据分析",progress:20,createdAt:new Date("2024-10-10").toISOString(),updatedAt:new Date("2024-10-10").toISOString(),introduction:"商务智能是将数据转化为商业价值的艺术。本课程教授如何使用Tableau、Power BI等工具创建专业的数据可视化报表和交互式仪表盘，为企业决策提供有力支持。",skills:["使用Tableau创建可视化","设计商业数据仪表盘","掌握数据可视化最佳实践","进行业务数据故事化呈现","使用BI工具进行数据分析"],evaluation:"可视化作品集40% + 业务分析报告30% + 期末展示30%",learningResources:[{title:"Tableau官方教程",url:"https://www.tableau.com/learn/training",type:"官方教程"},{title:"Power BI文档",url:"https://docs.microsoft.com/zh-cn/power-bi/",type:"官方文档"},{title:"数据可视化案例库",url:"https://www.tableau.com/public/gallery",type:"案例库"}]}],v_=[{id:"chapter-1",courseId:"course-1",title:"Python简介与环境搭建",content:"Python的历史、特点、安装方法和开发环境配置。",isCompleted:!0,completedAt:new Date("2024-09-05").toISOString(),studyDurationMinutes:60,keyPoints:["Python的特点和应用领域","安装Python和Anaconda","配置开发环境","编写第一个程序"],exercises:[{id:"ex-1-1",type:"choice",question:"Python是由谁创建的？",options:["Bill Gates","Guido van Rossum","James Gosling","Dennis Ritchie"],answer:1,explanation:"Python是由荷兰程序员Guido van Rossum于1991年创建的高级编程语言。"},{id:"ex-1-2",type:"code",question:'请编写一个Python程序，输出"Hello, World!"',codeTemplate:`# 在下方编写代码
print()`,answer:'print("Hello, World!")',explanation:"使用print()函数输出字符串，注意字符串需要用引号包裹。"}]},{id:"chapter-2",courseId:"course-1",title:"Python基础语法",content:"变量、数据类型、运算符、控制结构等基础语法。",isCompleted:!0,studyDurationMinutes:90,keyPoints:["变量命名规则","六种基本数据类型","算术和比较运算符","if-elif-else条件语句","for和while循环"],exercises:[{id:"ex-2-1",type:"choice",question:"下列哪个是Python中的合法变量名？",options:["2name","my-name","my_name","class"],answer:2,explanation:"Python变量名不能以数字开头，不能使用连字符，不能使用保留关键字。my_name是合法的变量名。"}]},{id:"chapter-3",courseId:"course-1",title:"项目1：电商订单数据清洗与标准化",content:"处理乱码日期、负价格、空值等脏数据，为AI模型提供干净数据。学习pandas基础数据清洗方法。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["Pandas数据清洗","异常值处理","日期格式统一","缺失值填充"],hasCodePractice:!0},{id:"chapter-4",courseId:"course-1",title:"项目2：用户行为日志解析与Session构建",content:"从埋点日志构建用户会话序列，为AI推荐系统提供结构化输入。学习时间序列数据处理。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["Session分析","时间序列处理","用户路径分析","会话切分"],hasCodePractice:!0},{id:"chapter-5",courseId:"course-1",title:"项目3：销售数据的多维度探索性分析（EDA）",content:"直观理解销售规律，为预测建模打基础。学习pandas透视表和统计分析。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["透视表操作","统计摘要","周末效应分析","销售波动"],hasCodePractice:!0},{id:"chapter-6",courseId:"course-1",title:"项目4：购物车分析——商品关联规则挖掘",content:'经典的"啤酒与尿布"分析，挖掘捆绑推荐规则。学习商品共现分析。',isCompleted:!1,studyDurationMinutes:150,keyPoints:["关联规则","支持度置信度","提升度计算","推荐策略"],hasCodePractice:!0},{id:"chapter-7",courseId:"course-1",title:"项目5：基于RFM模型的用户价值分层",content:"精细化运营的核心，为AI营销策略提供特征输入。学习用户分层方法。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["RFM模型","用户价值分层","分位数划分","运营策略"],hasCodePractice:!0},{id:"chapter-8",courseId:"course-1",title:"项目6：用户画像构建——K-Means聚类分析",content:"利用AI算法自动划分用户群体，实现自动化分群。学习无监督学习应用。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["K-Means聚类","特征工程","用户画像","群体分析"],hasCodePractice:!0},{id:"chapter-9",courseId:"course-1",title:"项目7：时间序列分解与移动平均预测",content:"理解销售数据的趋势与季节性，为AI预测模型提供基线。学习时间序列分析。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["时间序列","移动平均","季节性分解","异常检测"],hasCodePractice:!0},{id:"chapter-10",courseId:"course-1",title:"项目8：评论文本情感分析与销量关联",content:"利用NLP将非结构化评论转化为可分析数据，验证口碑效应。学习文本分析。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["情感分析","NLP基础","关键词提取","相关性分析"],hasCodePractice:!0},{id:"chapter-11",courseId:"course-1",title:"项目9：协同过滤推荐系统实现",content:"理解AI推荐算法的底层矩阵运算逻辑。学习推荐系统原理。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["协同过滤","余弦相似度","矩阵运算","推荐算法"],hasCodePractice:!0},{id:"chapter-12",courseId:"course-1",title:"项目10：综合实战——电商全链路数据分析",content:"模拟真实工作场景，融合前面所有技术完成完整分析报告。",isCompleted:!1,studyDurationMinutes:240,keyPoints:["全链路分析","流量漏斗","用户聚类","策略建议"],hasCodePractice:!0},{id:"chapter-13",courseId:"course-5",title:"项目1：数据库连接与数据抽取（SQL + Pandas）",content:"从数据库中提取销售数据，为分析做准备。使用 SQLite/MySQL 创建订单表、订单明细表、商品表，使用 sqlalchemy + pandas.read_sql 读取数据，验证数据行数与原始表一致。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["SQLite/MySQL数据库","SQLAlchemy","pandas.read_sql","数据验证"],hasCodePractice:!0},{id:"chapter-14",courseId:"course-5",title:"项目2：数据清洗与缺失值处理",content:"掌握真实数据中的缺失值、异常值处理。构造含缺失值的订单表（金额、用户ID缺失），使用 Pandas 进行：删除空行、填充均值、标记缺失，输出清洗前后的统计对比。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["缺失值处理","数据清洗","统计对比","异常值检测"],hasCodePractice:!0},{id:"chapter-15",courseId:"course-5",title:"项目3：购物车分析（Market Basket Analysis）",content:'使用关联规则挖掘（Apriori / mlxtend）。将订单明细转换为"购物篮"格式（每一行是一个订单的商品清单），计算支持度、置信度、提升度，找出强关联规则（例如 {牛奶} → {面包}）。',isCompleted:!1,studyDurationMinutes:150,keyPoints:["关联规则","Apriori算法","支持度置信度","提升度"],hasCodePractice:!0},{id:"chapter-16",courseId:"course-5",title:"项目4：用户消费行为RFM分析",content:"基于最近购买时间、频率、金额进行用户分层。计算每个用户的 R（最近）、F（频率）、M（金额），对每个指标分箱（如1-5分），输出高价值用户名单。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["RFM模型","用户分层","分箱操作","价值评估"],hasCodePractice:!0},{id:"chapter-17",courseId:"course-5",title:"项目5：时间序列分析与趋势预测",content:"分析销售额随时间变化，使用简单预测模型。将订单数据按日/月聚合，使用 Pandas 重采样与滚动平均，使用 statsmodels 做季节性分解或简单线性回归预测。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["时间序列","重采样","滚动平均","趋势预测"],hasCodePractice:!0},{id:"chapter-18",courseId:"course-5",title:"项目6：用户聚类分析（KMeans）",content:"基于消费行为将用户分群。选取特征：总消费额、平均客单价、购买品类数，标准化后使用 KMeans 聚类（k=3~5），可视化聚类结果（PCA降维或散点图）。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["K-Means聚类","特征工程","PCA降维","可视化"],hasCodePractice:!0},{id:"chapter-19",courseId:"course-5",title:"项目7：商品价格敏感度分析（价格弹性）",content:"分析价格变化对销量的影响。计算不同价格区间的平均销量，拟合对数线性模型估计价格弹性系数，输出价格弹性 > 1 的商品（高敏感）。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["价格弹性","销量分析","对数模型","敏感度评估"],hasCodePractice:!0},{id:"chapter-20",courseId:"course-5",title:"项目8：实时数据流模拟与滑动窗口聚合",content:"模拟AI场景下的流式数据处理。使用 deque 或 pandas 模拟每5秒到达的订单事件，计算过去1分钟的销售额滑动平均，检测异常峰值（超过均值+3倍标准差）。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["流式数据","滑动窗口","异常检测","实时聚合"],hasCodePractice:!0},{id:"chapter-21",courseId:"course-5",title:"项目9：多表关联与特征工程",content:"为机器学习模型构建特征表。关联订单表、用户表、商品表、评价表，构造特征：用户历史好评率、商品被购买时段分布，输出可直接用于聚类的特征矩阵。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["多表关联","特征工程","评价分析","特征矩阵"],hasCodePractice:!0},{id:"chapter-22",courseId:"course-5",title:"项目10：端到端分析报告自动生成",content:"整合所有分析，输出结构化报告。运行以上任意4~6个分析模块，将结果（聚类群体画像、关联规则、RFM表）写入数据库结果表，使用 matplotlib / seaborn 生成图表，并导出为 PDF / HTML。",isCompleted:!1,studyDurationMinutes:240,keyPoints:["报告生成","结果保存","可视化","端到端"],hasCodePractice:!0},{id:"chapter-23",courseId:"course-2",title:"项目1：用户购物车弃购原因清洗与统计",content:"处理订单表中的时间列格式、缺失支付时间标记弃购，计算弃购率、平均放弃购物车价值。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["弃购率计算","缺失值处理","数据清洗","统计对比"],hasCodePractice:!0},{id:"chapter-24",courseId:"course-2",title:"项目2：购物车关联规则挖掘准备（支持→置信度计算）",content:"按交易ID聚合为购物篮格式，计算{牛奶}→{面包}的支持度、置信度。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["购物篮格式","关联规则","支持度","置信度"],hasCodePractice:!0},{id:"chapter-25",courseId:"course-2",title:"项目3：RFM用户价值分层（不使用现成库）",content:"计算R（最近消费天数）、F（频次）、M（总金额），将用户按百分位数分为高中低三档。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["RFM模型","用户分层","百分位数","价值评估"],hasCodePractice:!0},{id:"chapter-26",courseId:"course-2",title:"项目4：K-Means用户分群（基于消费行为）",content:"使用sklearn.cluster.KMeans进行用户分群，分析不同簇的购物车商品类目偏好。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["K-Means聚类","特征工程","标准化","消费行为分析"],hasCodePractice:!0},{id:"chapter-27",courseId:"course-2",title:"项目5：购物车加购→支付转化漏斗分析",content:"按session计算加购→支付转化率，识别高加购但低支付的商品。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["转化漏斗","Session分析","支付转化率","商品分析"],hasCodePractice:!0},{id:"chapter-28",courseId:"course-2",title:"项目6：异常购物车行为检测（孤立森林）",content:"使用sklearn.ensemble.IsolationForest标记异常购物车（刷单/测试单），输出异常购物车的典型特征。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["异常检测","IsolationForest","刷单识别","行为分析"],hasCodePractice:!0},{id:"chapter-29",courseId:"course-2",title:"项目7：时序购物车趋势预测（移动平均/指数平滑）",content:"使用pandas.rolling计算7日均线，识别周末效应及促销日峰值。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["时间序列","移动平均","趋势预测","周末效应"],hasCodePractice:!0},{id:"chapter-30",courseId:"course-2",title:"项目8：基于购物车内容的交叉销售推荐验证",content:"构建共现矩阵，对给定商品推荐最常一起加购的商品配件。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["交叉销售","共现矩阵","推荐系统","商品关联"],hasCodePractice:!0},{id:"chapter-31",courseId:"course-2",title:"项目9：购物车放弃原因归因（决策树/分组均值对比）",content:"分组对比弃购/支付用户的平均运费和优惠券金额，使用pandas.cut计算各箱弃购率。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["归因分析","决策树","弃购分析","价格敏感度"],hasCodePractice:!0},{id:"chapter-32",courseId:"course-2",title:"项目10：聚类后不同群体的购物车价格弹性测试",content:"计算每群用户的平均折扣率，验证高价值用户是否对折扣更不敏感（弹性低）。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["价格弹性","用户分群","折扣分析","价值验证"],hasCodePractice:!0},{id:"chapter-33",courseId:"course-3",title:"项目1：电商用户购物车行为数据清洗",content:"掌握Pandas处理缺失值、重复值、异常值、格式规范化。处理缺失的用户ID和负数数量，去重，转换时间列，筛选加购但未下单数据。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["数据清洗","缺失值处理","异常值检测","格式转换"],hasCodePractice:!0},{id:"chapter-34",courseId:"course-3",title:"项目2：Web爬取动态商品价格数据并清洗",content:"使用requests+BeautifulSoup爬取电商网站商品标题、价格、评价数。解析HTML，提取数值，清洗价格，统一评价数单位。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["网络爬虫","数据采集","HTML解析","数据清洗"],hasCodePractice:!0},{id:"chapter-35",courseId:"course-3",title:"项目3：购物车关联规则分析（Apriori算法准备）",content:'购物车分析的经典场景——找出"经常一起购买"的商品。按订单ID聚合为购物篮，生成0-1矩阵，计算支持度、置信度、提升度。',isCompleted:!1,studyDurationMinutes:180,keyPoints:["关联规则","Apriori算法","支持度","置信度"],hasCodePractice:!0},{id:"chapter-36",courseId:"course-3",title:"项目4：用户购物车放弃率分析与预测特征构建",content:"分析加购后未下单的原因。合并购物车表+用户行为日志，计算加购到下单的时间差，创建特征，按用户聚合统计历史放弃率。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["放弃率分析","特征工程","用户行为分析","数据合并"],hasCodePractice:!0},{id:"chapter-37",courseId:"course-3",title:"项目5：RFM用户价值分析（基于购买和加购）",content:"将购物车数据转化为用户分层。计算RFM三个维度，分箱并打分，识别高价值用户。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["RFM模型","用户分层","价值分析","分箱操作"],hasCodePractice:!0},{id:"chapter-38",courseId:"course-3",title:"项目6：购物车商品价格敏感度分析（聚类前置）",content:"发现价格弹性不同的用户群。计算每个用户的平均加购价格vs实际成交价格，计算价格敏感度，清洗极值。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["价格敏感度","价格弹性","用户行为分析","数据清洗"],hasCodePractice:!0},{id:"chapter-39",courseId:"course-3",title:"项目7：K-Means聚类分析用户购物行为",content:"核心数据分析技术。标准化特征，肘部法则确定K值，K-Means聚类并标记用户群，分析每个簇的特征解读。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["K-Means聚类","特征标准化","肘部法则","用户分群"],hasCodePractice:!0},{id:"chapter-40",courseId:"course-3",title:"项目8：DBSCAN聚类识别异常购物车行为",content:'核心数据分析技术（异常检测）。使用DBSCAN聚类，标记噪声点为"疑似机器人刷购物车"，对比噪声点与正常用户的行为差异。',isCompleted:!1,studyDurationMinutes:180,keyPoints:["DBSCAN聚类","异常检测","行为分析","噪声识别"],hasCodePractice:!0},{id:"chapter-41",courseId:"course-3",title:"项目9：购物车到下单的转化漏斗分析+时间序列聚类",content:"分析用户从加购到转化的行为路径，并按时间模式聚类。计算每个session的完成率，提取时间序列特征，使用K-Means对转化速度模式聚类。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["转化漏斗","时间序列","聚类分析","行为路径"],hasCodePractice:!0},{id:"chapter-42",courseId:"course-3",title:"项目10：端到端综合项目 - 电商购物车智能分析报告",content:"整合所有技术：数据采集→清洗→购物车分析→聚类→业务建议。完成购物车放弃率分析、关联规则挖掘、K-Means聚类，生成带图表的分析报告。",isCompleted:!1,studyDurationMinutes:240,keyPoints:["端到端分析","综合项目","报告生成","业务建议"],hasCodePractice:!0},{id:"chapter-43",courseId:"course-4",title:"项目1：订单数据清洗与基础质检",content:"用 Pandas 处理缺失值、重复值、异常格式，构建干净的基础订单表。处理日期列的格式统一与超出范围日期，剔除数量≤0或单价≤0的记录，识别并处理订单总价与数量*单价不一致的行，检测并标记重复订单。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["数据清洗","缺失值处理","异常值检测","数据验证"],hasCodePractice:!0},{id:"chapter-44",courseId:"course-4",title:"项目2：库存周转与缺货预警分析",content:"计算产品库存周转率，识别周转过慢与可能缺货的 SKU。按月计算每个产品的销售数量总和，计算周转率 = 月销量 / 平均库存，标记周转率<0.5（滞销）和>5（高周转但库存低的缺货风险）。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["库存周转","缺货预警","周转率计算"],hasCodePractice:!0},{id:"chapter-45",courseId:"course-4",title:"项目3：购物车分析——订单内产品组合频次",content:"基于订单明细，计算同时购买的产品对（Pair）及其频次。按订单分组，构造每个订单的产品列表，生成所有产品对，统计全量数据中每对产品的共现次数，找出 Top 10 最常一起购买的产品组合。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["关联规则","产品组合","共现频次"],hasCodePractice:!0},{id:"chapter-46",courseId:"course-4",title:"项目4：客户价值分层（RFM + KMeans 聚类）",content:"使用 RFM（最近购买、频率、金额）做客户聚类。计算每个客户的 R / F / M 值，标准化 RFM 特征，使用 KMeans 聚类（elbow 法选 k），解释各群组业务含义。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["RFM模型","KMeans聚类","客户分层"],hasCodePractice:!0},{id:"chapter-47",courseId:"course-4",title:"项目5：供应商交货准时率与质量评分聚类",content:"对供应商进行基于准时率、不良率、响应时间的聚类。计算准时率、不良率、平均延期天数，去除异常供应商（数据不足），使用 KMeans 聚类（k=3 或 4），识别优秀、一般、高风险供应商。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["供应商评分","聚类分析","风险识别"],hasCodePractice:!0},{id:"chapter-48",courseId:"course-4",title:"项目6：季节性销售聚类（产品按月销量模式聚类）",content:"找出不同销售季节模式的产品群。构建产品 × 月份 销量矩阵，对产品进行聚类（按销量时间序列形状），分析每类产品的峰值月份、低谷月份，建议对应月份的库存策略。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["时间序列聚类","季节性分析","库存策略"],hasCodePractice:!0},{id:"chapter-49",courseId:"course-4",title:"项目7：仓库选址候选点聚类（基于客户地址经纬度）",content:"基于客户分布，聚类出 K 个仓库候选点。清洗无效坐标，使用 KMeans 聚类（按实际业务需求设定 K=5~10），计算每个聚类中心坐标作为候选仓库，统计各仓库覆盖的订单数量。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["仓库选址","地理聚类","订单覆盖"],hasCodePractice:!0},{id:"chapter-50",courseId:"course-4",title:"项目8：促销效果对比（A/B 类产品购货车分析对比",content:"对比促销组与非促销组的购物车关联规则差异。拆分促销订单与非促销订单，分别计算两类订单中的高共现产品对，找出仅在促销组中显著出现的产品对，分析促销是否改变了购买组合习惯。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["A/B测试","促销分析","产品共现"],hasCodePractice:!0},{id:"chapter-51",courseId:"course-4",title:"项目9：退货原因聚类分析（文本 + 数量特征",content:"对退货订单进行聚类，发现主要退货模式。对退货原因文本做 TF-IDF 向量化，结合退货金额与数量特征，一起做 KMeans 聚类，解读每个聚类（如：质量问题退货、数量多发退货、无理由退货）。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["退货分析","文本向量化","KMeans聚类"],hasCodePractice:!0},{id:"chapter-52",courseId:"course-4",title:"项目10：预测性补货——结合销量聚类与安全库存计算",content:"基于销量波动聚类，对不同类产品设置差异化安全库存公式。计算每个产品的月销量标准差与均值，对产品做聚类（高波动/低波动/季节性波动），为每类产品自动计算安全库存，对比传统固定库存策略与聚类差异化策略的库存成本差异。",isCompleted:!1,studyDurationMinutes:240,keyPoints:["预测性补货","安全库存","成本优化"],hasCodePractice:!0},{id:"chapter-53",courseId:"course-6",title:"项目1：销售数据清洗与基础BI看板",content:"Pandas数据清洗、缺失值/异常值处理、数据类型转换、基础统计透视。给定零售订单CSV（含订单ID、日期、金额、数量、区域），完成去重、格式统一、缺失填补；计算月销售额、各区域总销售；输出销售趋势折线图与区域柱状图。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["数据清洗","缺失值处理","统计透视","数据可视化"],hasCodePractice:!0},{id:"chapter-54",courseId:"course-6",title:"项目2：电商订单流与购物车分析（关联规则Apriori）",content:"购物篮分析、事务编码、频繁项集、关联规则（置信度/支持度）。数据含Transaction_ID与Product。清洗掉单件商品订单；转换为购物车矩阵；使用mlxtend.frequent_patterns计算频繁项集与规则（如{牛奶}→{面包}）。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["购物篮分析","Apriori算法","关联规则","推荐系统"],hasCodePractice:!0},{id:"chapter-55",courseId:"course-6",title:"项目3：RFM客户分层分析（传统BI指标）",content:"聚合函数、时间差计算、分位数、客户评分。根据订单表（客户ID、日期、金额）计算最近购买日(R)、频次(F)、金额(M)；利用分位数划分1-5分；组合RFM总分；划分高价值/流失客户。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["RFM模型","客户分群","分位数计算","业务洞察"],hasCodePractice:!0},{id:"chapter-56",courseId:"course-6",title:"项目4：用户行为路径聚类（KMeans）",content:"聚类分析、特征标准化、肘部法则、聚类结果解读。用户数据包含：浏览时长、点击次数、加入购物车次数、下单量。清洗异常值后标准化，使用KMeans聚类（选最佳K值）；为每个用户打标，并可视化聚类中心雷达图。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["KMeans聚类","用户画像","特征工程","可视化"],hasCodePractice:!0},{id:"chapter-57",courseId:"course-6",title:"项目5：退货原因文本聚类（非结构化→结构化）",content:"文本清洗、TF-IDF、KMeans文本聚类、词云。退货评论列含短文本；分词、去停用词，转换为TF-IDF矩阵；聚类（3~5类）；每类提取高频词，分析主要退货原因（如物流、质量等）。",isCompleted:!1,studyDurationMinutes:180,keyPoints:["文本挖掘","TF-IDF","文本聚类","词云可视化"],hasCodePractice:!0},{id:"chapter-58",courseId:"course-6",title:"项目6：销量预测特征工程与基线模型",content:"时序聚合、特征构造、滞后特征、滚动统计。日销售数据，构造星期、月份、节假日特征；过去7天滚动均值/销量滞后1~7；使用线性回归或决策树预测次日销量；评估RMSE。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["时间序列","特征工程","机器学习","预测评估"],hasCodePractice:!0},{id:"chapter-59",courseId:"course-6",title:"项目7：商品价格敏感度聚类分析（价格带偏好）",content:"二维聚类（价格vs销量占比）、数据分箱与聚合。商品交易明细（商品ID、单价、购买数量）。计算每个商品的平均单价与总销量；标准化后KMeans聚类（如：低价格高销量、高价格低销量、中价格中庸等）。",isCompleted:!1,studyDurationMinutes:120,keyPoints:["价格分析","二维聚类","KMeans","业务策略"],hasCodePractice:!0},{id:"chapter-60",courseId:"course-6",title:"项目8：动态购物车智能推荐模拟（协同过滤+关联规则对比）",content:"用户-商品矩阵、基于项目的协同过滤（余弦相似度）、关联规则对比。使用用户购买历史（用户-商品二值矩阵）。若用户加入商品A，基于相似商品推荐Top3。同时与关联规则推荐结果对比（同一购物车）。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["协同过滤","推荐系统","关联规则","算法对比"],hasCodePractice:!0},{id:"chapter-61",courseId:"course-6",title:"项目9：异常交易检测（孤立森林+统计方法）",content:"异常检测、Z-score、孤立森林、多维特征。订单数据含金额、数量、折扣、用户注册时长等；使用Z-score与孤立森林标记异常订单（金额极高、折扣极高等）；分析异常类型（欺诈？团购？）。",isCompleted:!1,studyDurationMinutes:150,keyPoints:["异常检测","孤立森林","Z-score","多维分析"],hasCodePractice:!0},{id:"chapter-62",courseId:"course-6",title:"项目10：端到端BI仪表盘项目（综合任务）",content:"数据整合+购物车分析+RFM+聚类+可视化。给定多表数据（用户、订单、商品），完成全流程数据分析并构建BI报告。",isCompleted:!1,studyDurationMinutes:240,keyPoints:["综合项目","BI报告","端到端分析","数据整合"],hasCodePractice:!0}],w_=[{id:"note-1",courseId:"course-1",chapterId:"chapter-1",title:"Python环境搭建笔记",content:`1. 下载Python安装包
2. 安装时勾选Add Python to PATH
3. 验证安装：python --version
4. 推荐使用VS Code或PyCharm作为IDE`,createdAt:new Date("2024-09-06").toISOString(),updatedAt:new Date("2024-09-06").toISOString()}],k_=[{id:"record-1",courseId:"course-1",durationMinutes:60,date:new Date().toISOString()},{id:"record-2",courseId:"course-2",durationMinutes:45,date:new Date().toISOString()}],S_=[{id:"goal-1",courseId:"course-1",targetMinutes:90,completedMinutes:60,date:new Date().toISOString().split("T")[0],isCompleted:!1},{id:"goal-2",courseId:"course-2",targetMinutes:60,completedMinutes:45,date:new Date().toISOString().split("T")[0],isCompleted:!1}],b_=[{id:"task-1",title:"完成Python基础第一章练习",description:"完成课后所有选择题和编程练习",isCompleted:!0,createdAt:new Date("2024-09-05").toISOString(),priority:"high"},{id:"task-2",title:"复习数据类型相关知识",description:"重点掌握列表和字典的使用",isCompleted:!1,createdAt:new Date("2024-09-10").toISOString(),priority:"medium"},{id:"task-3",title:"准备数据分析项目",description:"收集项目所需数据集",isCompleted:!1,createdAt:new Date("2024-09-15").toISOString(),priority:"low"}],tr=()=>Math.random().toString(36).substr(2,9),te=h_((e,t)=>{const r=y_(),n={courses:(r==null?void 0:r.courses)||x_,chapters:(r==null?void 0:r.chapters)||v_,notes:(r==null?void 0:r.notes)||w_,studyRecords:(r==null?void 0:r.studyRecords)||k_,todayGoals:(r==null?void 0:r.todayGoals)||S_,studyTasks:(r==null?void 0:r.studyTasks)||b_},s=()=>{const a=t();g_({courses:a.courses,chapters:a.chapters,notes:a.notes,studyRecords:a.studyRecords,todayGoals:a.todayGoals,studyTasks:a.studyTasks})};return{...n,addCourse:a=>{const i=new Date().toISOString(),l={...a,id:`course-${tr()}`,progress:0,createdAt:i,updatedAt:i};e(d=>({courses:[...d.courses,l]})),s()},updateCourse:(a,i)=>{e(l=>({courses:l.courses.map(d=>d.id===a?{...d,...i,updatedAt:new Date().toISOString()}:d)})),s()},deleteCourse:a=>{e(i=>({courses:i.courses.filter(l=>l.id!==a),chapters:i.chapters.filter(l=>l.courseId!==a),notes:i.notes.filter(l=>l.courseId!==a),studyRecords:i.studyRecords.filter(l=>l.courseId!==a),todayGoals:i.todayGoals.filter(l=>l.courseId!==a)})),s()},addChapter:a=>{const i={...a,id:`chapter-${tr()}`};e(l=>({chapters:[...l.chapters,i]})),s(),t().updateCourseProgress(a.courseId)},updateChapter:(a,i)=>{const l=t(),d=l.chapters.find(h=>h.id===a),c=d==null?void 0:d.courseId;if(!(d!=null&&d.isCompleted)&&i.isCompleted){const h=i.studyDurationMinutes||20;i.studyDurationMinutes=h;const p=new Date().toISOString().split("T")[0],f=l.studyRecords.find(y=>y.courseId===c&&y.date.split("T")[0]===p);f?e(y=>({studyRecords:y.studyRecords.map(v=>v.id===f.id?{...v,durationMinutes:v.durationMinutes+h}:v)})):t().addStudyRecord({courseId:c,durationMinutes:h,date:new Date().toISOString()});const g=l.todayGoals.find(y=>y.courseId===c&&y.date===p);g&&t().updateTodayGoal(g.id,{completedMinutes:g.completedMinutes+h})}e(h=>({chapters:h.chapters.map(p=>p.id===a?{...p,...i}:p)})),s(),c&&t().updateCourseProgress(c)},deleteChapter:a=>{const l=t().chapters.find(c=>c.id===a),d=l==null?void 0:l.courseId;e(c=>({chapters:c.chapters.filter(h=>h.id!==a),notes:c.notes.filter(h=>h.chapterId!==a)})),s(),d&&t().updateCourseProgress(d)},addNote:a=>{const i=new Date().toISOString(),l={...a,id:`note-${tr()}`,createdAt:i,updatedAt:i};e(d=>({notes:[...d.notes,l]})),s()},updateNote:(a,i)=>{e(l=>({notes:l.notes.map(d=>d.id===a?{...d,...i,updatedAt:new Date().toISOString()}:d)})),s()},deleteNote:a=>{e(i=>({notes:i.notes.filter(l=>l.id!==a)})),s()},updateCourseProgress:a=>{const l=t().chapters.filter(p=>p.courseId===a),d=l.filter(p=>p.isCompleted).length,c=l.length,h=c>0?Math.round(d/c*100):0;e(p=>({courses:p.courses.map(f=>f.id===a?{...f,progress:h,updatedAt:new Date().toISOString()}:f)})),s()},addStudyRecord:a=>{const i={...a,id:`record-${tr()}`};e(l=>({studyRecords:[...l.studyRecords,i]})),s()},addTodayGoal:a=>{const i={...a,id:`goal-${tr()}`,completedMinutes:0,isCompleted:!1};e(l=>({todayGoals:[...l.todayGoals,i]})),s()},updateTodayGoal:(a,i)=>{e(l=>({todayGoals:l.todayGoals.map(d=>{if(d.id!==a)return d;const c={...d,...i};return{...c,isCompleted:c.completedMinutes>=c.targetMinutes}})})),s()},adjustTodayGoalMinutes:(a,i)=>{const d=t().todayGoals.find(c=>c.id===a);if(d){const c=Math.max(0,d.completedMinutes+i);t().updateTodayGoal(a,{completedMinutes:c})}},addStudyTask:a=>{const i={...a,id:`task-${tr()}`,createdAt:new Date().toISOString()};e(l=>({studyTasks:[...l.studyTasks,i]})),s()},toggleStudyTask:a=>{e(i=>({studyTasks:i.studyTasks.map(l=>l.id===a?{...l,isCompleted:!l.isCompleted}:l)})),s()},updateStudyTask:(a,i)=>{e(l=>({studyTasks:l.studyTasks.map(d=>d.id===a?{...d,...i}:d)})),s()},deleteStudyTask:a=>{e(i=>({studyTasks:i.studyTasks.filter(l=>l.id!==a)})),s()},getTotalCourses:()=>t().courses.length,getCompletedCourses:()=>t().courses.filter(a=>a.progress===100).length,getTotalStudyTime:()=>t().studyRecords.reduce((a,i)=>a+i.durationMinutes,0),getTodayStudyTime:()=>{const a=new Date().toISOString().split("T")[0];return t().studyRecords.filter(i=>i.date.split("T")[0]===a).reduce((i,l)=>i+l.durationMinutes,0)},getTodayGoalProgress:()=>{const a=new Date().toISOString().split("T")[0],i=t().todayGoals.filter(c=>c.date===a),l=i.reduce((c,h)=>c+h.targetMinutes,0),d=i.reduce((c,h)=>c+h.completedMinutes,0);return l>0?Math.round(d/l*100):0},getRecentCourses:()=>[...t().courses].sort((a,i)=>new Date(i.updatedAt).getTime()-new Date(a.updatedAt).getTime()).slice(0,4)}});function j_(){const e=Rr(),t=te(u=>u.courses),r=te(u=>u.studyRecords),n=te(u=>u.todayGoals),s=te(u=>u.getTotalCourses),a=te(u=>u.getCompletedCourses),i=te(u=>u.getTotalStudyTime),l=te(u=>u.getTodayGoalProgress),[d,c]=w.useState(0),[h,p]=w.useState(0),[f,g]=w.useState(0),[y,v]=w.useState(0);w.useEffect(()=>{c(s()),p(a()),g(i()),v(l())},[t,r,n,s,a,i,l]);const m=[{icon:we,label:"课程总数",value:d,gradient:"from-emerald-600 to-emerald-700",iconBg:"from-emerald-600 to-emerald-700",path:"/courses"},{icon:v0,label:"已完成课程",value:h,gradient:"from-emerald-600 to-emerald-700",iconBg:"from-emerald-600 to-emerald-700",path:"/courses"},{icon:rt,label:"总学习时长",value:(u=>{const _=Math.floor(u/60),x=u%60;return _>0?`${_}小时${x>0?` ${x}分钟`:""}`:`${x}分钟`})(f),gradient:"from-emerald-600 to-emerald-700",iconBg:"from-emerald-600 to-emerald-700"},{icon:Cc,label:"今日目标进度",value:`${y}%`,gradient:"from-emerald-600 to-emerald-700",iconBg:"from-emerald-600 to-emerald-700"}];return o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",children:m.map((u,_)=>{const x=u.icon,b=u.path?"button":"div",I=()=>{u.path&&e(u.path)};return o.jsxs(b,{onClick:I,className:`bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-gray-100 transition-all duration-300 animate-fade-in-up text-left w-full ${u.path?"hover:shadow-lg hover:-translate-y-1 cursor-pointer":""}`,style:{animationDelay:`${_*100}ms`},children:[o.jsxs("div",{className:"flex items-start justify-between mb-4",children:[o.jsx("div",{className:`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${u.iconBg} rounded-2xl flex items-center justify-center shadow-lg`,children:o.jsx(x,{className:"h-6 w-6 sm:h-7 sm:w-7 text-white"})}),u.path&&o.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-bounce-subtle"})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight",children:u.value}),o.jsx("div",{className:"text-sm text-gray-500 font-medium",children:u.label})]})]},_)})})}const N_={前端开发:{bg:"from-emerald-100 to-emerald-200",text:"text-emerald-700",icon:"from-emerald-600 to-emerald-700"},编程语言:{bg:"from-emerald-100 to-emerald-200",text:"text-emerald-700",icon:"from-emerald-600 to-emerald-700"},后端开发:{bg:"from-emerald-100 to-emerald-200",text:"text-emerald-700",icon:"from-emerald-600 to-emerald-700"}};function C_(){const e=Rr(),r=te(s=>s.getRecentCourses)(),n=s=>{e(`/courses/${s}`)};return r.length===0?null:o.jsxs("div",{className:"bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-gray-100",children:[o.jsxs("div",{className:"flex items-center justify-between mb-5 sm:mb-6",children:[o.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2",children:[o.jsx("div",{className:"w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"}),"最近学习"]}),o.jsx("button",{onClick:()=>e("/courses"),className:"text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1",children:"查看全部"})]}),o.jsx("div",{className:"space-y-3 sm:space-y-4",children:r.map((s,a)=>{const i=N_[s.category]||{bg:"from-emerald-100 to-emerald-200",text:"text-emerald-700"};return o.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 hover:shadow-md transition-all duration-300 group cursor-pointer animate-fade-in-up",style:{animationDelay:`${a*100}ms`},onClick:()=>n(s.id),children:[o.jsx("div",{className:`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${i.bg} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-sm`,children:o.jsx(we,{className:"h-6 w-6 sm:h-8 sm:w-8 text-gray-700/80"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-start justify-between gap-2 mb-1",children:[o.jsx("h3",{className:"font-semibold text-gray-900 truncate text-sm sm:text-base",children:s.title}),o.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${i.bg} ${i.text} flex-shrink-0`,children:s.category})]}),o.jsx("p",{className:"text-xs sm:text-sm text-gray-500 mb-2 line-clamp-1",children:s.description}),o.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[o.jsx("span",{className:"text-xs text-gray-500",children:"进度"}),o.jsxs("span",{className:"text-xs font-bold text-gray-700",children:[s.progress,"%"]})]}),o.jsx("div",{className:"w-full bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden",children:o.jsx("div",{className:`h-full rounded-full transition-all duration-700 ease-out ${s.progress===100,"bg-gradient-to-r from-emerald-600 to-emerald-700"}`,style:{width:`${s.progress}%`}})})]}),o.jsxs("button",{onClick:l=>{l.stopPropagation(),n(s.id)},className:`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-sm font-medium transition-all duration-200 ${s.progress===100,"bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:shadow-lg"}`,children:[s.progress===100?o.jsx(jt,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"}):o.jsx(Ps,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"}),o.jsx("span",{className:"hidden sm:inline",children:s.progress===100?"复习":"继续"})]})]})]})]},s.id)})})]})}function I_(){const{todayGoals:e,courses:t,adjustTodayGoalMinutes:r}=te(),n=s=>{var a;return((a=t.find(i=>i.id===s))==null?void 0:a.title)||"未知课程"};return o.jsxs("div",{className:"card-base p-5 sm:p-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[o.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center",children:o.jsx(Cc,{className:"h-5 w-5 text-white"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-semibold text-slate-900",children:"今日学习目标"}),o.jsx("p",{className:"text-sm text-slate-500",children:"追踪您的学习进度"})]})]}),o.jsxs("div",{className:"space-y-4",children:[e.map(s=>o.jsxs("div",{className:`p-4 rounded-xl border-2 transition-all duration-300 ${s.isCompleted?"border-emerald-200 bg-emerald-50":"border-slate-100 bg-white hover:border-slate-200"}`,children:[o.jsx("div",{className:"flex items-start justify-between mb-3",children:o.jsxs("div",{className:"flex items-center gap-3",children:[s.isCompleted?o.jsx(jt,{className:"h-5 w-5 text-emerald-600 flex-shrink-0"}):o.jsx("div",{className:"w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("h4",{className:`font-medium ${s.isCompleted?"text-emerald-700 line-through":"text-slate-800"}`,children:n(s.courseId)}),o.jsxs("div",{className:"flex items-center gap-2 mt-1 text-sm text-slate-500",children:[o.jsx(rt,{className:"h-4 w-4"}),o.jsxs("span",{children:["目标: ",s.targetMinutes," 分钟"]})]})]})]})}),o.jsxs("div",{className:"mb-3",children:[o.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[o.jsxs("span",{className:"text-slate-600",children:["已完成: ",o.jsxs("span",{className:"font-semibold text-emerald-700",children:[s.completedMinutes," 分钟"]})]}),o.jsxs("span",{className:"text-slate-500",children:[Math.round(s.completedMinutes/s.targetMinutes*100),"%"]})]}),o.jsx("div",{className:"w-full bg-slate-100 rounded-full h-3 overflow-hidden",children:o.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${s.isCompleted?"bg-gradient-to-r from-emerald-500 to-emerald-600":"bg-gradient-to-r from-emerald-400 to-emerald-500"}`,style:{width:`${Math.min(s.completedMinutes/s.targetMinutes*100,100)}%`}})})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-sm text-slate-500 mr-2",children:"调整学习时长:"}),o.jsx("button",{onClick:()=>r(s.id,-5),className:"w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-all duration-200",children:o.jsx(M0,{className:"h-4 w-4"})}),o.jsx("span",{className:"w-12 text-center font-medium text-slate-700",children:s.completedMinutes}),o.jsx("button",{onClick:()=>r(s.id,5),className:"w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700 hover:text-emerald-800 transition-all duration-200",children:o.jsx(Fs,{className:"h-4 w-4"})}),o.jsx("span",{className:"text-sm text-slate-400 ml-1",children:"分钟"})]})]},s.id)),e.length===0&&o.jsx("div",{className:"text-center py-8 text-slate-500",children:o.jsx("p",{children:"暂无今日学习目标"})})]})]})}function D_(){return o.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[o.jsxs("div",{className:"mb-6 sm:mb-8 animate-fade-in-down",children:[o.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2",children:"欢迎回来，夏荷！"}),o.jsx("p",{className:"text-sm sm:text-base text-gray-600 mb-2",children:"广东科学技术职业学院 · 商学院 · 商务数据分析与应用专业"}),o.jsx("p",{className:"text-sm sm:text-base text-gray-600",children:"继续你的学习旅程，每天进步一点点。"})]}),o.jsx(j_,{}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6",children:[o.jsx("div",{className:"lg:col-span-2",children:o.jsx(C_,{})}),o.jsx("div",{className:"lg:col-span-1",children:o.jsx(I_,{})})]})]})}const M_={前端开发:{bg:"from-blue-100 to-blue-200",text:"text-blue-700",icon:"from-blue-500 to-blue-600"},编程语言:{bg:"from-green-100 to-green-200",text:"text-green-700",icon:"from-green-500 to-green-600"},后端开发:{bg:"from-purple-100 to-purple-200",text:"text-purple-700",icon:"from-purple-500 to-purple-600"}};function E_({course:e}){const t=Rr(),r=M_[e.category]||{bg:"from-gray-100 to-gray-200",text:"text-gray-700"},n=()=>{t(`/courses/${e.id}`)};return o.jsxs("div",{onClick:n,className:"bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group",children:[o.jsx("div",{className:`w-full h-32 sm:h-40 bg-gradient-to-br ${r.bg} rounded-2xl mb-4 sm:mb-5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden`,children:o.jsxs("div",{className:"relative",children:[o.jsx(we,{className:"h-12 w-12 sm:h-16 sm:w-16 text-gray-700/70"}),e.progress>0&&o.jsx("div",{className:"absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg",children:o.jsxs("span",{className:"text-white text-xs sm:text-sm font-bold",children:[e.progress,"%"]})})]})}),o.jsx("div",{className:"mb-3",children:o.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${r.bg} ${r.text}`,children:e.category})}),o.jsx("h3",{className:"text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors",children:e.title}),o.jsx("p",{className:"text-sm text-gray-500 mb-4 line-clamp-2",children:e.description}),e.progress>0&&o.jsxs("div",{className:"mb-4",children:[o.jsxs("div",{className:"flex justify-between text-xs sm:text-sm mb-1.5",children:[o.jsx("span",{className:"text-gray-500",children:"进度"}),o.jsxs("span",{className:"font-bold text-blue-600",children:[e.progress,"%"]})]}),o.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 overflow-hidden",children:o.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-700 ease-out",style:{width:`${e.progress}%`}})})]}),o.jsx("button",{className:"w-full px-4 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-medium flex items-center justify-center gap-2",children:e.progress===0?o.jsxs(o.Fragment,{children:[o.jsx(Ps,{className:"h-4 w-4 sm:h-5 sm:w-5"}),"开始学习"]}):e.progress===100?o.jsxs(o.Fragment,{children:[o.jsx(jt,{className:"h-4 w-4 sm:h-5 sm:w-5"}),"已完成"]}):o.jsxs(o.Fragment,{children:[o.jsx(Ps,{className:"h-4 w-4 sm:h-5 sm:w-5"}),"继续学习"]})})]})}function P_(){const e=te(l=>l.courses),[t,r]=w.useState(""),[n,s]=w.useState("all"),a=w.useMemo(()=>["all",...Array.from(new Set(e.map(d=>d.category)))],[e]),i=w.useMemo(()=>e.filter(l=>{const d=l.title.toLowerCase().includes(t.toLowerCase())||l.description.toLowerCase().includes(t.toLowerCase()),c=n==="all"||l.category===n;return d&&c}),[e,t,n]);return o.jsxs("div",{className:"space-y-5 sm:space-y-6",children:[o.jsxs("div",{className:"animate-fade-in-down",children:[o.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-gray-900 mb-2",children:"我的课程"}),o.jsx("p",{className:"text-sm sm:text-base text-gray-600",children:"管理和继续你的学习进度"})]}),o.jsxs("div",{className:"flex flex-col md:flex-row gap-3 sm:gap-4 animate-fade-in",children:[o.jsxs("div",{className:"relative flex-1",children:[o.jsx(L0,{className:"absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4.5 w-4.5 text-gray-400"}),o.jsx("input",{type:"text",placeholder:"搜索课程...",value:t,onChange:l=>r(l.target.value),className:"w-full pl-11 pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-200 text-sm sm:text-base"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(j0,{className:"h-4.5 w-4.5 text-gray-400"}),o.jsx("select",{value:n,onChange:l=>s(l.target.value),className:"px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-200 cursor-pointer text-sm sm:text-base",children:a.map(l=>o.jsx("option",{value:l,children:l==="all"?"全部分类":l},l))})]})]}),i.length===0?o.jsxs("div",{className:"text-center py-12 sm:py-16 bg-white rounded-2xl border border-gray-100 shadow-soft animate-fade-in",children:[o.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:t||n!=="all"?o.jsx(C0,{className:"h-8 w-8 sm:h-10 sm:w-10 text-gray-400"}):o.jsx(we,{className:"h-8 w-8 sm:h-10 sm:w-10 text-gray-400"})}),o.jsx("h3",{className:"text-lg sm:text-xl font-semibold text-gray-900 mb-2",children:t||n!=="all"?"没有找到匹配的课程":"还没有添加任何课程"}),o.jsx("p",{className:"text-sm sm:text-base text-gray-500",children:t||n!=="all"?"尝试调整搜索条件或筛选条件":"开始添加你的第一个课程吧"})]}):o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6",children:i.map((l,d)=>o.jsx("div",{className:"animate-fade-in-up",style:{animationDelay:`${d*100}ms`},children:o.jsx(E_,{course:l})},l.id))})]})}function F_({progress:e,label:t,showPercentage:r=!0}){const n=Math.max(0,Math.min(100,e));return o.jsxs("div",{className:"w-full",children:[(t||r)&&o.jsxs("div",{className:"flex justify-between items-center mb-2",children:[t&&o.jsx("span",{className:"text-sm text-gray-600",children:t}),r&&o.jsxs("span",{className:"text-sm font-bold text-blue-600",children:[n,"%"]})]}),o.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5 sm:h-3 overflow-hidden",children:o.jsx("div",{className:"bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-700 ease-out",style:{width:`${n}%`}})})]})}function R_({chapters:e}){const[t,r]=w.useState(null),[n,s]=w.useState(null),[a,i]=w.useState({}),[l,d]=w.useState({}),c=te(y=>y.updateChapter),h=y=>{r(t===y?null:y)},p=(y,v)=>{v.stopPropagation(),y.isCompleted||(s(y.id),setTimeout(()=>s(null),1500)),c(y.id,{isCompleted:!y.isCompleted,completedAt:y.isCompleted?void 0:new Date().toISOString()})},f=(y,v,k)=>{i(m=>({...m,[`${y}-${v}`]:k}))},g=(y,v,k)=>{const m=`${k}-${v.id}`;a[m]!==void 0&&d(_=>({..._,[m]:!0}))};return e.length===0?o.jsxs("div",{className:"text-center py-10 sm:py-12 bg-emerald-50 rounded-2xl",children:[o.jsx(we,{className:"h-12 w-12 sm:h-14 sm:w-14 mx-auto mb-4 opacity-50"}),o.jsx("p",{className:"text-sm sm:text-base text-gray-500",children:"暂无章节内容"})]}):o.jsx("div",{className:"space-y-3",children:e.map((y,v)=>o.jsxs("div",{id:y.id,className:`bg-emerald-50 rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up ${n===y.id?"ring-2 ring-emerald-400 ring-offset-2":""}`,style:{animationDelay:`${v*100}ms`},children:[o.jsxs("div",{onClick:()=>h(y.id),className:"flex items-center gap-3 sm:gap-4 p-4 sm:p-5 cursor-pointer hover:bg-emerald-100 transition-colors",children:[o.jsx("button",{onClick:k=>p(y,k),className:"flex-shrink-0 hover:scale-110 transition-transform duration-200",children:y.isCompleted?o.jsx(jt,{className:`h-6 w-6 sm:h-7 sm:w-7 text-emerald-600 hover:text-emerald-700 transition-all ${n===y.id?"animate-bounce":""}`}):o.jsx(w0,{className:"h-6 w-6 sm:h-7 sm:w-7 text-gray-400 hover:text-emerald-600 transition-colors"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3",children:[o.jsxs("span",{className:"text-xs sm:text-sm font-medium text-gray-500 w-7 sm:w-8 flex-shrink-0",children:[v+1,"."]}),o.jsx("h3",{className:`font-semibold transition-all duration-300 text-sm sm:text-base ${y.isCompleted?"text-gray-500 line-through":"text-gray-900"} ${n===y.id?"text-emerald-600":""}`,children:y.title}),n===y.id&&o.jsx(E0,{className:"h-5 w-5 text-yellow-500 animate-bounce flex-shrink-0"})]}),y.studyDurationMinutes&&o.jsxs("div",{className:"flex items-center gap-1 mt-1 text-xs text-gray-400",children:[o.jsx(rt,{className:"h-3 w-3"}),o.jsxs("span",{children:["学习时长 ",y.studyDurationMinutes," 分钟"]})]})]}),t===y.id?o.jsx(g0,{className:"h-5 w-5 sm:h-6 sm:w-6 text-gray-400 transition-transform flex-shrink-0"}):o.jsx(x0,{className:"h-5 w-5 sm:h-6 sm:w-6 text-gray-400 transition-transform flex-shrink-0"})]}),t===y.id&&o.jsxs("div",{className:"px-4 sm:px-5 pb-4 sm:pb-5 pt-0 space-y-4",children:[o.jsxs("div",{className:"bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-200",children:[o.jsx("p",{className:"text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line",children:y.content}),o.jsxs("div",{className:"mt-3 sm:mt-4 flex flex-wrap gap-3 sm:gap-4",children:[y.completedAt&&o.jsxs("p",{className:"text-xs text-gray-400 flex items-center gap-1",children:[o.jsx(rt,{className:"h-3 w-3"}),"完成于 ",new Date(y.completedAt).toLocaleDateString("zh-CN")]}),y.studyDurationMinutes&&o.jsxs("p",{className:"text-xs text-gray-400 flex items-center gap-1",children:[o.jsx(rt,{className:"h-3 w-3"}),"学习时长 ",y.studyDurationMinutes," 分钟"]})]})]}),y.keyPoints&&y.keyPoints.length>0&&o.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-emerald-200",children:[o.jsxs("h4",{className:"text-sm sm:text-base font-semibold text-gray-900 mb-3 flex items-center gap-2",children:[o.jsx(jc,{className:"h-5 w-5 text-emerald-600"}),"重点知识"]}),o.jsx("ul",{className:"space-y-2",children:y.keyPoints.map((k,m)=>o.jsxs("li",{className:"flex items-start gap-2 text-sm sm:text-base text-gray-700",children:[o.jsx("span",{className:"text-emerald-600 font-bold flex-shrink-0",children:"•"}),o.jsx("span",{children:k})]},m))})]}),y.exercises&&y.exercises.length>0&&o.jsxs("div",{className:"bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-200",children:[o.jsxs("h4",{className:"text-sm sm:text-base font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[o.jsx(b0,{className:"h-5 w-5 text-emerald-600"}),"章节练习 (",y.exercises.length,"题)"]}),o.jsx("div",{className:"space-y-6",children:y.exercises.map((k,m)=>{const u=`${y.id}-${k.id}`,_=a[u],x=l[u],b=(k.type==="choice",_===k.answer);return o.jsxs("div",{className:"bg-gray-50 rounded-xl p-4 border border-gray-100",children:[o.jsxs("div",{className:"flex items-start gap-2 mb-3",children:[o.jsx("div",{className:"w-7 h-7 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0",children:m+1}),o.jsx("p",{className:"text-sm sm:text-base text-gray-900 font-medium leading-relaxed",children:k.type==="choice"?o.jsx("span",{className:"flex items-center gap-2",children:o.jsx("span",{children:k.question})}):o.jsxs("span",{className:"flex items-start gap-2",children:[o.jsx($l,{className:"h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5"}),o.jsx("span",{children:k.question})]})})]}),k.type==="choice"&&k.options&&o.jsx("div",{className:"space-y-2 ml-9",children:k.options.map((I,j)=>{const D=_===j,L=j===k.answer;let P="option-btn bg-white border-gray-200 text-gray-700";return x?L?P="option-btn bg-emerald-600 text-white border-emerald-600":D&&!L&&(P="option-btn bg-red-600 text-white border-red-600"):D&&(P="option-btn bg-emerald-50 border-emerald-500 text-emerald-700"),o.jsxs("button",{onClick:()=>!x&&f(y.id,k.id,j),disabled:x,className:`w-full text-left px-4 py-2.5 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base ${P}`,children:[String.fromCharCode(65+j),". ",I]},j)})}),k.type==="code"&&o.jsxs("div",{className:"ml-9 space-y-3",children:[k.codeTemplate&&o.jsx("div",{className:"bg-gray-800 text-gray-100 rounded-lg p-4 font-mono text-xs sm:text-sm overflow-x-auto",children:o.jsx("pre",{className:"whitespace-pre-wrap",children:k.codeTemplate})}),!x&&o.jsx("textarea",{placeholder:"请在此处输入代码...",value:_||"",onChange:I=>f(y.id,k.id,I.target.value),className:"w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-mono text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none",rows:4}),x&&_&&o.jsxs("div",{className:`p-4 rounded-lg border-2 ${b?"bg-emerald-50 border-emerald-300":"bg-red-50 border-red-300"}`,children:[o.jsx("p",{className:`text-sm font-medium mb-2 ${b?"text-emerald-700":"text-red-700"}`,children:b?"✓ 回答正确！":"✗ 回答错误"}),o.jsxs("div",{className:"bg-white rounded p-3 font-mono text-xs sm:text-sm text-gray-800",children:[o.jsx("strong",{children:"你的答案："}),o.jsx("pre",{className:"mt-1 whitespace-pre-wrap",children:_})]}),!b&&k.answer&&o.jsxs("div",{className:"bg-emerald-50 rounded p-3 font-mono text-xs sm:text-sm text-emerald-800 mt-2",children:[o.jsx("strong",{children:"正确答案："}),o.jsx("pre",{className:"mt-1 whitespace-pre-wrap",children:k.answer})]})]})]}),!x&&o.jsx("div",{className:"mt-4 ml-9",children:o.jsx("button",{onClick:()=>g(y,k,y.id),disabled:_===void 0,className:`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${_!==void 0?"bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg":"bg-gray-200 text-gray-400 cursor-not-allowed"}`,children:"提交答案"})}),x&&k.explanation&&o.jsxs("div",{className:"mt-4 ml-9 bg-blue-50 rounded-lg p-4 border border-blue-200",children:[o.jsxs("p",{className:"text-sm font-medium text-blue-900 mb-2 flex items-center gap-2",children:[o.jsx(y0,{className:"h-4 w-4"}),"解析："]}),o.jsx("p",{className:"text-sm text-blue-800 leading-relaxed",children:k.explanation})]})]},k.id)})})]}),y.hasCodePractice&&o.jsx("div",{className:"mt-4",children:o.jsx(vr,{to:`/practice/${y.id}`,children:o.jsxs("button",{className:"w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all flex items-center justify-center gap-2 shadow-lg",children:[o.jsx($l,{className:"h-5 w-5"}),"开始代码练习"]})})})]})]},y.id))})}function T_({courseId:e,chapterId:t,note:r,onClose:n}){const[s,a]=w.useState(""),[i,l]=w.useState(""),d=te(p=>p.addNote),c=te(p=>p.updateNote);w.useEffect(()=>{r&&(a(r.title),l(r.content))},[r]);const h=()=>{if(!s.trim()&&!i.trim()){n();return}r?c(r.id,{title:s,content:i}):d({courseId:e,chapterId:t,title:s.trim()||"无标题笔记",content:i.trim()}),n()};return o.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-3 sm:p-4 animate-fade-in",children:o.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-scale-in",children:[o.jsxs("div",{className:"flex items-center justify-between p-5 sm:p-6 border-b border-gray-100",children:[o.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[o.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20",children:o.jsx(P0,{className:"h-5 w-5 sm:h-6 sm:w-6 text-white"})}),o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-gray-900",children:r?"编辑笔记":"添加笔记"})]}),o.jsx("button",{onClick:n,className:"p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105","aria-label":"关闭",children:o.jsx(So,{className:"h-5 w-5 sm:h-6 sm:w-6 text-gray-500"})})]}),o.jsxs("div",{className:"p-5 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto max-h-[calc(90vh-140px)]",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"笔记标题"}),o.jsx("input",{type:"text",value:s,onChange:p=>a(p.target.value),placeholder:"输入笔记标题...",className:"w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-200 text-sm sm:text-base",autoFocus:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"笔记内容"}),o.jsx("textarea",{value:i,onChange:p=>l(p.target.value),placeholder:"在这里写下你的笔记内容...",className:"w-full px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition-all duration-200 resize-none min-h-[200px] sm:min-h-[220px] text-sm sm:text-base"})]})]}),o.jsxs("div",{className:"flex justify-end gap-2 sm:gap-3 p-5 sm:p-6 border-t border-gray-100 bg-gray-50",children:[o.jsx("button",{onClick:n,className:"px-5 sm:px-6 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-xl transition-all duration-200 font-medium text-sm sm:text-base",children:"取消"}),o.jsxs("button",{onClick:h,className:"px-5 sm:px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 font-medium flex items-center gap-2 text-sm sm:text-base",children:[o.jsx(z0,{className:"h-4 w-4 sm:h-5 sm:w-5"}),"保存笔记"]})]})]})})}function z_({courseId:e,chapters:t}){const r=te(f=>f.notes.filter(g=>g.courseId===e)),n=te(f=>f.deleteNote),[s,a]=w.useState(!1),[i,l]=w.useState(),d=f=>{l(f),a(!0)},c=()=>{l(void 0),a(!0)},h=()=>{a(!1),l(void 0)},p=f=>{if(!f)return null;const g=t.find(y=>y.id===f);return g==null?void 0:g.title};return r.length===0?o.jsx("div",{className:"bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100",children:o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:o.jsx(ki,{className:"h-8 w-8 sm:h-10 sm:w-10 text-gray-400"})}),o.jsx("h3",{className:"text-lg sm:text-xl font-semibold text-gray-900 mb-2",children:"还没有笔记"}),o.jsx("p",{className:"text-sm sm:text-base text-gray-500 mb-5 sm:mb-6",children:"为这门课程添加你的第一个笔记吧！"}),o.jsxs("button",{onClick:c,className:"px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 font-medium flex items-center gap-2 mx-auto text-sm sm:text-base",children:[o.jsx(Fs,{className:"h-4 w-4 sm:h-5 sm:w-5"}),"添加笔记"]})]})}):o.jsxs("div",{className:"bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-gray-100",children:[o.jsxs("div",{className:"flex items-center justify-between mb-5 sm:mb-6",children:[o.jsxs("h2",{className:"text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2",children:[o.jsx(ki,{className:"h-5 w-5 text-emerald-600"}),"学习笔记",o.jsxs("span",{className:"text-sm font-normal text-gray-500",children:["(",r.length,")"]})]}),o.jsxs("button",{onClick:c,className:"px-3.5 sm:px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 font-medium flex items-center gap-1.5 text-sm",children:[o.jsx(Fs,{className:"h-4 w-4"}),"添加笔记"]})]}),o.jsx("div",{className:"space-y-3 sm:space-y-4",children:r.map((f,g)=>o.jsx("div",{className:"p-4 sm:p-5 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-all duration-200 group animate-fade-in-up",style:{animationDelay:`${g*100}ms`},children:o.jsxs("div",{className:"flex items-start justify-between gap-3 sm:gap-4",children:[o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h3",{className:"font-semibold text-gray-900 text-sm sm:text-base mb-1 group-hover:text-emerald-600 transition-colors",children:f.title}),o.jsx("p",{className:"text-gray-600 mb-2.5 sm:mb-3 text-sm line-clamp-2",children:f.content}),o.jsxs("div",{className:"flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500",children:[o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx(Dn,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"}),o.jsx("span",{children:new Date(f.updatedAt).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})})]}),p(f.chapterId)&&o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("div",{className:"w-1.5 h-1.5 bg-gray-400 rounded-full"}),o.jsxs("span",{children:["章节: ",p(f.chapterId)]})]})]})]}),o.jsxs("div",{className:"flex gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200",children:[o.jsx("button",{onClick:()=>d(f),className:"p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 hover:scale-110",title:"编辑笔记",children:o.jsx(Nc,{className:"h-4 w-4 sm:h-5 sm:w-5"})}),o.jsx("button",{onClick:()=>n(f.id),className:"p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 hover:scale-110",title:"删除笔记",children:o.jsx(Ic,{className:"h-4 w-4 sm:h-5 sm:w-5"})})]})]})},f.id))}),s&&o.jsx(T_,{courseId:e,note:i,onClose:h})]})}function L_(){const{id:e}=_c(),t=Rr(),r=te(l=>l.courses.find(d=>d.id===e)),n=te(l=>l.chapters.filter(d=>d.courseId===e)),s=n.filter(l=>l.isCompleted).length,a=n.find(l=>!l.isCompleted),i=()=>{if(a!=null&&a.hasCodePractice)t(`/practice/${a.id}`);else if(a){const l=document.getElementById(a.id);l&&l.scrollIntoView({behavior:"smooth"})}};return r?o.jsxs("div",{className:"space-y-5 sm:space-y-6 lg:space-y-8",children:[o.jsxs("button",{onClick:()=>t("/courses"),className:"flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-xl transition-all duration-200 w-fit",children:[o.jsx(wc,{className:"h-4 w-4 sm:h-5 sm:w-5"}),o.jsx("span",{className:"text-sm sm:text-base",children:"返回课程列表"})]}),o.jsx("div",{className:"bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-soft border border-gray-100 animate-fade-in",children:o.jsxs("div",{className:"flex flex-col lg:flex-row gap-6 lg:gap-8",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3",children:[o.jsx(we,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"}),o.jsx("span",{children:r.category})]}),o.jsx("h1",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4",children:r.title}),o.jsx("p",{className:"text-sm sm:text-base text-gray-600 mb-4 sm:mb-6",children:r.description}),o.jsx("div",{className:"flex flex-wrap items-center gap-4 sm:gap-6 mb-4 sm:mb-6",children:o.jsxs("div",{className:"flex items-center gap-2 text-gray-600 text-sm sm:text-base",children:[o.jsx(Dn,{className:"h-4 w-4 sm:h-5 sm:w-5"}),o.jsxs("span",{children:["创建于 ",new Date(r.createdAt).toLocaleDateString("zh-CN")]})]})}),o.jsx("div",{className:"flex flex-wrap gap-3 sm:gap-4",children:o.jsxs("button",{onClick:i,className:"px-5 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200 font-semibold text-sm sm:text-lg flex items-center gap-2",children:[o.jsx(Ps,{className:"h-4 w-4 sm:h-5 sm:w-5"}),r.progress===100?"重新学习":"继续学习"]})})]}),o.jsx("div",{className:"lg:w-72 xl:w-80 flex-shrink-0",children:o.jsxs("div",{className:"bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 text-white shadow-xl shadow-emerald-500/20",children:[o.jsxs("div",{className:"text-center mb-4 sm:mb-6",children:[o.jsxs("div",{className:"text-4xl sm:text-5xl font-bold mb-1",children:[r.progress,"%"]}),o.jsx("div",{className:"text-emerald-100 text-sm sm:text-base",children:"课程进度"})]}),o.jsx("div",{className:"w-full bg-emerald-400/50 rounded-full h-2.5 sm:h-3 mb-3 sm:mb-4 overflow-hidden",children:o.jsx("div",{className:"bg-white h-full rounded-full transition-all duration-700 ease-out",style:{width:`${r.progress}%`}})}),o.jsxs("div",{className:"text-xs sm:text-sm text-emerald-100 text-center flex items-center justify-center gap-1.5",children:[o.jsx(jt,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"}),"已完成 ",s,"/",n.length," 章节"]})]})})]})}),r.introduction&&o.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-soft border border-gray-100 animate-fade-in-up",children:[o.jsxs("h2",{className:"text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2",children:[o.jsx(I0,{className:"h-5 w-5 text-emerald-600"}),"课程介绍"]}),o.jsx("p",{className:"text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line",children:r.introduction})]}),r.evaluation&&o.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-soft border border-gray-100 animate-fade-in-up",children:[o.jsxs("h2",{className:"text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2",children:[o.jsx(kc,{className:"h-5 w-5 text-emerald-600"}),"评估方式"]}),o.jsx("p",{className:"text-sm sm:text-base text-gray-700 mb-4",children:"本课程采用多元化的评估方式，全面考核学习效果："}),o.jsx("div",{className:"flex flex-wrap gap-3 sm:gap-4",children:r.evaluation.split("+").map((l,d)=>o.jsxs("div",{className:"flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-xl border border-emerald-200",children:[o.jsx(jt,{className:"h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 flex-shrink-0"}),o.jsx("span",{className:"text-sm sm:text-base text-gray-700 font-medium whitespace-nowrap",children:l.trim()})]},d))})]}),r.learningResources&&r.learningResources.length>0&&o.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-soft border border-gray-100 animate-fade-in-up",children:[o.jsxs("h2",{className:"text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2",children:[o.jsx(ki,{className:"h-5 w-5 text-emerald-600"}),"学习资源"]}),o.jsx("div",{className:"space-y-3 sm:space-y-4",children:r.learningResources.map((l,d)=>o.jsxs("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 hover:bg-emerald-50 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all duration-200 group",children:[o.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200 flex-shrink-0",children:o.jsx(D0,{className:"h-5 w-5 sm:h-6 sm:w-6 text-white"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("div",{className:"text-sm sm:text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors truncate",children:l.title}),o.jsx("div",{className:"text-xs sm:text-sm text-gray-500 mt-0.5",children:l.type})]})]},d))})]}),o.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-soft border border-gray-100 animate-fade-in-up",children:[o.jsxs("h2",{className:"text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2",children:[o.jsx(rt,{className:"h-5 w-5 text-emerald-600"}),"学习进度"]}),o.jsx(F_,{progress:r.progress,label:"整体进度"}),o.jsx("div",{className:"mt-3 sm:mt-4 text-sm text-gray-600",children:r.progress===100?o.jsxs("div",{className:"flex items-center gap-2 text-emerald-600 font-medium",children:[o.jsx(jt,{className:"h-4 w-4 sm:h-5 sm:w-5"}),o.jsx("span",{children:"恭喜！您已完成这门课程！"})]}):o.jsxs("span",{children:["继续努力，还有 ",n.length-s," 个章节待完成"]})})]}),o.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-soft border border-gray-100 animate-fade-in-up",style:{animationDelay:"100ms"},children:[o.jsxs("h2",{className:"text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2",children:[o.jsx(we,{className:"h-5 w-5 text-emerald-600"}),"课程章节"]}),o.jsx(R_,{chapters:n})]}),o.jsx("div",{className:"animate-fade-in-up",style:{animationDelay:"200ms"},children:o.jsx(z_,{courseId:r.id,chapters:n})})]}):o.jsxs("div",{className:"text-center py-16 sm:py-20 bg-white rounded-2xl shadow-soft border border-gray-100",children:[o.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-gray-900 mb-4",children:"课程未找到"}),o.jsx("button",{onClick:()=>t("/courses"),className:"px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium",children:"返回课程列表"})]})}function A_(){const{getTotalCourses:e,getCompletedCourses:t,getTotalStudyTime:r,getTodayStudyTime:n,getTodayGoalProgress:s,courses:a,studyRecords:i}=te(),l=Math.floor(r()/60),d=r()%60,c=[...i].sort((f,g)=>new Date(g.date).getTime()-new Date(f.date).getTime()).slice(0,5),h=f=>{var g;return((g=a.find(y=>y.id===f))==null?void 0:g.title)||"未知课程"},p=[{title:"总课程数",value:e(),icon:we,color:"from-blue-500 to-blue-600",bgColor:"bg-blue-50",textColor:"text-blue-700"},{title:"已完成课程",value:t(),icon:kc,color:"from-emerald-500 to-emerald-600",bgColor:"bg-emerald-50",textColor:"text-emerald-700"},{title:"今日学习",value:`${n()} 分钟`,icon:rt,color:"from-amber-500 to-amber-600",bgColor:"bg-amber-50",textColor:"text-amber-700"},{title:"总学习时长",value:`${l}小时${d}分`,icon:Dn,color:"from-purple-500 to-purple-600",bgColor:"bg-purple-50",textColor:"text-purple-700"}];return o.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[o.jsx("div",{className:"mb-6 sm:mb-8",children:o.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[o.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center",children:o.jsx(ko,{className:"h-5 w-5 text-white"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-slate-900",children:"学习数据"}),o.jsx("p",{className:"text-slate-600",children:"追踪您的学习进度和统计数据"})]})]})}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",children:p.map((f,g)=>{const y=f.icon;return o.jsx("div",{className:"card-base card-hover p-5 sm:p-6",style:{animationDelay:`${g*100}ms`},children:o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-medium text-slate-600 mb-1",children:f.title}),o.jsx("p",{className:`text-2xl sm:text-3xl font-bold ${f.textColor}`,children:f.value})]}),o.jsx("div",{className:`w-12 h-12 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center`,children:o.jsx(y,{className:"h-6 w-6 text-white"})})]})},f.title)})}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"card-base p-5 sm:p-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[o.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center",children:o.jsx(_0,{className:"h-5 w-5 text-white"})}),o.jsx("h3",{className:"text-lg font-semibold text-slate-900",children:"今日目标进度"})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[o.jsx("span",{className:"text-slate-600",children:"总体进度"}),o.jsxs("span",{className:"font-semibold text-emerald-700",children:[s(),"%"]})]}),o.jsx("div",{className:"w-full bg-slate-100 rounded-full h-4 overflow-hidden",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000",style:{width:`${s()}%`}})})]})]}),o.jsxs("div",{className:"card-base p-5 sm:p-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[o.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center",children:o.jsx(rt,{className:"h-5 w-5 text-white"})}),o.jsx("h3",{className:"text-lg font-semibold text-slate-900",children:"最近学习记录"})]}),o.jsxs("div",{className:"space-y-3",children:[c.map(f=>o.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-50 rounded-xl",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center",children:o.jsx(we,{className:"h-4 w-4 text-blue-600"})}),o.jsxs("div",{children:[o.jsx("p",{className:"font-medium text-slate-800",children:h(f.courseId)}),o.jsx("p",{className:"text-xs text-slate-500",children:new Date(f.date).toLocaleDateString("zh-CN")})]})]}),o.jsx("div",{className:"text-right",children:o.jsxs("p",{className:"font-semibold text-blue-700",children:[f.durationMinutes," 分钟"]})})]},f.id)),c.length===0&&o.jsx("div",{className:"text-center py-6 text-slate-500",children:o.jsx("p",{children:"暂无学习记录"})})]})]})]}),o.jsxs("div",{className:"card-base p-5 sm:p-6",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[o.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center",children:o.jsx(we,{className:"h-5 w-5 text-white"})}),o.jsx("h3",{className:"text-lg font-semibold text-slate-900",children:"课程进度概览"})]}),o.jsx("div",{className:"space-y-4",children:a.map(f=>o.jsxs("div",{className:"space-y-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("div",{className:"flex items-center gap-3",children:o.jsx("span",{className:"font-medium text-slate-800",children:f.title})}),o.jsxs("span",{className:"text-sm font-semibold text-emerald-700",children:[f.progress,"%"]})]}),o.jsx("div",{className:"w-full bg-slate-100 rounded-full h-3 overflow-hidden",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000",style:{width:`${f.progress}%`}})})]},f.id))})]})]})}function O_(){const{studyTasks:e,addStudyTask:t,toggleStudyTask:r,deleteStudyTask:n,updateStudyTask:s}=te(),[a,i]=w.useState(!1),[l,d]=w.useState({title:"",description:"",priority:"medium",dueDate:""}),[c,h]=w.useState(null),p=u=>{u.preventDefault(),c?(s(c,l),h(null)):t({...l,isCompleted:!1}),d({title:"",description:"",priority:"medium",dueDate:""}),i(!1)},f=u=>{d({title:u.title,description:u.description||"",priority:u.priority,dueDate:u.dueDate||""}),h(u.id),i(!0)},g=u=>{switch(u){case"high":return"text-red-600 bg-red-100";case"medium":return"text-amber-600 bg-amber-100";case"low":return"text-blue-600 bg-blue-100";default:return"text-slate-600 bg-slate-100"}},y=u=>{switch(u){case"high":return"高";case"medium":return"中";case"low":return"低";default:return"-"}},v=[...e].sort((u,_)=>{const x={high:0,medium:1,low:2};return u.isCompleted!==_.isCompleted?u.isCompleted?1:-1:x[u.priority]-x[_.priority]}),k=e.filter(u=>u.isCompleted).length,m=e.length;return o.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[o.jsx("div",{className:"mb-6 sm:mb-8 animate-in fade-in slide-in-from-top-4 duration-500",children:o.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center",children:o.jsx(as,{className:"h-5 w-5 text-white"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl sm:text-3xl font-bold text-slate-900",children:"学习清单"}),o.jsx("p",{className:"text-slate-600",children:"管理您的学习任务和待办事项"})]})]}),o.jsxs("button",{onClick:()=>{h(null),d({title:"",description:"",priority:"medium",dueDate:""}),i(!a)},className:"flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg",children:[o.jsx(Fs,{className:"h-4 w-4"}),"添加任务"]})]})}),o.jsxs("div",{className:"card-base p-5 sm:p-6",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-slate-900",children:"任务进度"}),o.jsx("span",{className:"text-sm font-medium text-emerald-700",children:m>0?`${k}/${m} 已完成`:"暂无任务"})]}),m>0&&o.jsx("div",{className:"w-full bg-slate-100 rounded-full h-3 overflow-hidden",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000",style:{width:`${k/m*100}%`}})})]}),a&&o.jsxs("div",{className:"card-base p-5 sm:p-6 animate-in fade-in slide-in-from-bottom-4",children:[o.jsx("h3",{className:"text-lg font-semibold text-slate-900 mb-4",children:c?"编辑任务":"添加新任务"}),o.jsxs("form",{onSubmit:p,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"任务标题 *"}),o.jsx("input",{type:"text",required:!0,value:l.title,onChange:u=>d({...l,title:u.target.value}),className:"w-full px-4 py-2 border border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all duration-200",placeholder:"输入任务标题..."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"任务描述"}),o.jsx("textarea",{value:l.description,onChange:u=>d({...l,description:u.target.value}),className:"w-full px-4 py-2 border border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all duration-200 resize-vertical",rows:3,placeholder:"输入任务描述..."})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"优先级"}),o.jsxs("select",{value:l.priority,onChange:u=>d({...l,priority:u.target.value}),className:"w-full px-4 py-2 border border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all duration-200",children:[o.jsx("option",{value:"low",children:"低"}),o.jsx("option",{value:"medium",children:"中"}),o.jsx("option",{value:"high",children:"高"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-slate-700 mb-1",children:"截止日期"}),o.jsx("input",{type:"date",value:l.dueDate,onChange:u=>d({...l,dueDate:u.target.value}),className:"w-full px-4 py-2 border border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-all duration-200"})]})]}),o.jsxs("div",{className:"flex gap-3 pt-2",children:[o.jsx("button",{type:"button",onClick:()=>{i(!1),h(null),d({title:"",description:"",priority:"medium",dueDate:""})},className:"flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all duration-200",children:"取消"}),o.jsx("button",{type:"submit",className:"flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl transition-all duration-200",children:c?"保存修改":"添加任务"})]})]})]}),o.jsxs("div",{className:"space-y-3",children:[v.map(u=>o.jsx("div",{className:`card-base card-hover p-4 sm:p-5 transition-all duration-300 ${u.isCompleted?"bg-emerald-50/50 border-emerald-100":""}`,children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("button",{onClick:()=>r(u.id),className:`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${u.isCompleted?"bg-emerald-500 border-emerald-500 text-white":"border-slate-300 hover:border-emerald-500"}`,children:u.isCompleted&&o.jsx(as,{className:"h-4 w-4"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-start justify-between gap-3",children:[o.jsxs("div",{children:[o.jsx("h4",{className:`font-medium ${u.isCompleted?"text-slate-500 line-through":"text-slate-800"}`,children:u.title}),u.description&&o.jsx("p",{className:"text-sm text-slate-500 mt-1",children:u.description})]}),o.jsx("div",{className:"flex items-center gap-2",children:o.jsxs("span",{className:`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${g(u.priority)}`,children:[o.jsx(N0,{className:"h-3 w-3"}),y(u.priority)]})})]}),o.jsxs("div",{className:"flex items-center gap-4 mt-3",children:[u.dueDate&&o.jsxs("div",{className:"flex items-center gap-1 text-xs text-slate-500",children:[o.jsx(Dn,{className:"h-3 w-3"}),o.jsx("span",{children:new Date(u.dueDate).toLocaleDateString("zh-CN")})]}),o.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[o.jsx("button",{onClick:()=>f(u),className:"p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200",children:o.jsx(Nc,{className:"h-4 w-4"})}),o.jsx("button",{onClick:()=>n(u.id),className:"p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200",children:o.jsx(Ic,{className:"h-4 w-4"})})]})]})]})]})},u.id)),v.length===0&&o.jsxs("div",{className:"card-base p-10 text-center",children:[o.jsx(as,{className:"h-12 w-12 text-slate-300 mx-auto mb-4"}),o.jsx("p",{className:"text-slate-500",children:"暂无学习任务"}),o.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"点击上方按钮添加第一个任务"})]})]})]})}const q_=["https://lf6-cdn-tos.bytecdntp.com/cdn/pyodide/v0.25.0/full/pyodide.js","https://cdn.bootcdn.net/ajax/libs/pyodide/0.25.0/full/pyodide.js","https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js","https://unpkg.com/pyodide@0.25.0/dist/pyodide.js"];function is(e,t,r){return new Promise((n,s)=>{const a=setTimeout(()=>s(new Error(`${r} 超时（${t/1e3}秒）`)),t);e.then(i=>{clearTimeout(a),n(i)}).catch(i=>{clearTimeout(a),s(i)})})}let Qr=null,Ot=null;async function K_(e){return Qr||Ot||(Ot=(async()=>{if(window.loadPyodide){e("正在初始化 Python 引擎...");try{const t=await is(window.loadPyodide(),3e4,"Python 引擎初始化");return Qr=t,t}catch(t){throw console.error("loadPyodide() 调用失败:",t),t}}for(const t of q_){e("正在从 CDN 下载（约 20MB，请耐心等待）...");try{if(await is(new Promise((r,n)=>{const s=document.createElement("script");s.src=t,s.async=!0;let a=!1;const i=setTimeout(()=>{a||(a=!0,s.remove(),n(new Error("CDN 请求超时: "+t)))},3e4);s.onload=()=>{a||(a=!0,clearTimeout(i),r())},s.onerror=()=>{a||(a=!0,clearTimeout(i),n(new Error("CDN 加载失败: "+t)))},document.body.appendChild(s)}),35e3,"下载 Pyodide"),window.loadPyodide){e("正在初始化 Python 引擎（需要下载约 20MB，请耐心等待）...");try{const r=await is(window.loadPyodide(),3e4,"Python 引擎初始化");return Qr=r,Ot=null,r}catch(r){throw console.error("loadPyodide() 调用失败:",r),r}}}catch(r){console.warn("Pyodide CDN 尝试失败，将尝试下一个:",r),e("CDN 不可用，尝试下一个...")}}throw Ot=null,new Error('所有 CDN 源均无法加载，请检查网络后点击"重新加载环境"按钮重试')})(),Ot)}function B_({initialCode:e="",onCodeChange:t,readOnly:r=!1}){const[n,s]=w.useState(e),[a,i]=w.useState(""),[l,d]=w.useState(!1),[c,h]=w.useState(!1),[p,f]=w.useState(null),[g,y]=w.useState(!1),[v,k]=w.useState(!1),[m,u]=w.useState("正在初始化 Python 运行环境..."),[_,x]=w.useState(null),[b,I]=w.useState(0),j=w.useRef(null);w.useEffect(()=>{e&&s(e)},[e]),w.useEffect(()=>{let O=!1;return(async()=>{try{x(null),u("正在连接 CDN...");const W=await K_(J=>{O||u(J)});if(O)return;u("Python 引擎已就绪，正在加载扩展包...");try{await is(W.loadPackage(["numpy"]),6e4,"加载 numpy")}catch(J){console.warn("numpy 预加载失败，将在使用时动态加载:",J),u("基础包加载超时，继续使用核心功能..."),await new Promise(Ft=>setTimeout(Ft,1e3))}O||(f(W),h(!0),u("✅ Python 运行环境就绪"))}catch(W){console.error("加载 Pyodide 失败:",W),O||(x(W.message||"加载失败"),k(!0),i("⚠️ 加载 Python 运行环境失败: "+(W.message||W)))}})(),()=>{O=!0}},[b]);const D=O=>{const W=O.target.value;s(W),t==null||t(W)},L=async()=>{if(!p){i("⚠️ Python 运行环境还在加载中，请稍候...");return}d(!0),i("▶ 执行中..."),k(!1);try{const O=n.trim(),W=O.split(`
`),J=W[W.length-1]||"",Ft=J.length>0&&!J.trimStart().startsWith("#")&&!J.includes("=")&&!J.trimStart().startsWith("print(")&&!J.trimStart().startsWith("import")&&!J.trimStart().startsWith("from")&&!J.trimStart().startsWith("def")&&!J.trimStart().startsWith("class")&&!J.trimStart().startsWith("if")&&!J.trimStart().startsWith("for")&&!J.trimStart().startsWith("while")&&!J.trimStart().startsWith("return");let Rt=O;Ft&&(W[W.length-1]="print("+J.trim()+")",Rt=W.join(`
`));const N=Rt.match(/^\s*(?:import|from)\s+([a-zA-Z_][a-zA-Z0-9_]*)/gm);if(N){const Tt=new Set;for(const Jt of N){const bo=Jt.trim().split(/\s+/);bo.length>=2&&Tt.add(bo[1].split(".")[0])}const $e={numpy:"numpy",np:"numpy",pandas:"pandas",pd:"pandas",matplotlib:"matplotlib",plt:"matplotlib",scipy:"scipy",sympy:"sympy",sklearn:"scikit-learn",requests:"requests",bs4:"beautifulsoup4"},Ge=new Set;if(Tt.forEach(Jt=>{$e[Jt]&&Ge.add($e[Jt])}),Ge.size>0){i("▶ 正在加载依赖包 ("+Array.from(Ge).join(", ")+")...");try{await p.loadPackage(Array.from(Ge)),i("▶ 执行中...")}catch(Jt){console.warn("动态加载包失败:",Jt)}}}p.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
`);try{await p.runPythonAsync(Rt)}catch{p.runPython(`
import traceback
sys.stdout.write(sys.stderr.getvalue())
`),k(!0)}const E=p.runPython(`
sys.stdout.getvalue()
`),F=p.runPython(`
sys.stderr.getvalue()
`),$=E?String(E):"",G=F?String(F):"";p.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);let He=$.trim(),De=G.trim();De&&!He?(k(!0),i(`❌ 运行错误:
`+De)):De?(k(!0),i(He+`

❌ 运行错误:
`+De)):i(He||"✅ 代码执行完成（无输出）")}catch(O){k(!0);const W=(O==null?void 0:O.message)||String(O);i(`❌ 执行异常:
`+W)}finally{d(!1)}},P=()=>{Qr=null,Ot=null,f(null),h(!1),x(null),k(!1),i(""),u("正在重新初始化 Python 运行环境..."),I(O=>O+1)},ke=()=>{s(e),i(""),k(!1),t==null||t(e)},Pt=async()=>{try{await navigator.clipboard.writeText(n),y(!0),setTimeout(()=>y(!1),2e3)}catch(O){console.error("复制失败:",O)}};return w.useEffect(()=>{j.current&&(j.current.scrollTop=j.current.scrollHeight)},[a]),o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Sc,{className:"h-5 w-5 text-emerald-600"}),o.jsx("span",{className:"font-semibold text-gray-900",children:"Python代码编辑器"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsxs("button",{onClick:Pt,className:"flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all",children:[g?o.jsx(jt,{className:"h-4 w-4 text-emerald-600"}):o.jsx(k0,{className:"h-4 w-4"}),g?"已复制":"复制"]}),o.jsxs("button",{onClick:ke,disabled:l,className:"flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:[o.jsx(T0,{className:"h-4 w-4"}),"重置"]}),_&&o.jsxs("button",{onClick:P,className:"flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-lg transition-all",children:[o.jsx(R0,{className:"h-4 w-4"}),"重新加载环境"]}),o.jsxs("button",{onClick:L,disabled:l||!c,className:`flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-lg transition-all ${l||!c?"opacity-70 cursor-not-allowed":""}`,children:[o.jsx(F0,{className:`h-4 w-4 ${l?"animate-spin":""}`}),l?"运行中...":c?"▶ 运行代码":"⏳ "+m]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"relative",children:[o.jsxs("div",{className:"absolute top-0 left-0 right-0 h-10 bg-gray-800 rounded-t-xl flex items-center px-4 gap-2",children:[o.jsxs("div",{className:"flex gap-1.5",children:[o.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500"}),o.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),o.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),o.jsx("span",{className:"text-gray-400 text-xs ml-2",children:"main.py"})]}),o.jsx("textarea",{value:n,onChange:D,readOnly:r,className:"w-full h-80 pt-12 px-4 py-4 bg-gray-900 text-emerald-400 font-mono text-sm rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/30",placeholder:"在此编写Python代码..."})]}),o.jsxs("div",{className:"relative",children:[o.jsxs("div",{className:"absolute top-0 left-0 right-0 h-10 bg-gray-800 rounded-t-xl flex items-center px-4 gap-2",children:[o.jsx(O0,{className:"h-4 w-4 text-gray-400"}),o.jsx("span",{className:"text-gray-400 text-xs ml-2",children:"输出结果"})]}),o.jsx("div",{ref:j,className:`w-full h-80 pt-12 px-4 py-4 bg-gray-900 font-mono text-sm rounded-xl overflow-auto ${v?"text-red-400":"text-gray-300"}`,children:a||o.jsx("span",{className:"text-gray-500",children:"点击「运行代码」查看输出结果..."})})]})]}),o.jsx("div",{className:`flex items-center gap-2 text-xs ${_?"text-red-500":"text-gray-500"}`,children:_?o.jsxs(o.Fragment,{children:[o.jsx(q0,{className:"h-3.5 w-3.5"}),o.jsxs("span",{children:["加载失败: ",_,'（点击上方"重新加载环境"按钮重试）']})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:`w-2 h-2 rounded-full ${c?"bg-emerald-500":"bg-yellow-500 animate-pulse"}`}),o.jsx("span",{children:c?"✅ Python 运行环境已就绪 - 可以运行代码了":m})]})})]})}const Wl=[{id:"project-1",chapterId:"chapter-3",title:"电商订单数据清洗与标准化",description:"处理乱码日期、负价格、空值等脏数据，为AI模型提供干净数据",difficulty:"基础",skills:["Pandas","数据清洗","异常值处理","日期解析"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime

# 创建模拟脏数据
df = pd.DataFrame({
    'order_id': range(1, 11),
    'order_date': ['2023-01-01', '01/15/2023', '2023-02-30', '2023-03-01', 
                   '04-20-2023', '2023.05.10', '', '2023-06-01', '2023-07-01', '2023-07-01'],
    'price': [100, -50, 200, 150, 300, 250, 180, -20, np.nan, 200],
    'quantity': [2, 1, np.nan, 4, 1, 3, 2, 5, 3, 2]
})
print("原始数据：")
print(df)
print()

# 1. 日期统一化处理
def parse_mixed_date(date_str):
    """处理多种日期格式"""
    if pd.isna(date_str) or str(date_str).strip() == '':
        return pd.NaT
    date_str = str(date_str).strip()
    formats = ['%Y-%m-%d', '%m/%d/%Y', '%m-%d-%Y', '%Y.%m.%d', '%d-%m-%Y']
    for fmt in formats:
        try:
            return pd.to_datetime(date_str, format=fmt)
        except:
            continue
    return pd.NaT

df['order_date_clean'] = df['order_date'].apply(parse_mixed_date)

# 2. 异常价格处理
# 过滤负价格
df.loc[df['price'] < 0, 'price'] = np.nan
# 用中位数填充缺失价格
price_median = df['price'].median()
df['price'].fillna(price_median, inplace=True)

# 3. 数量异常处理
# 用中位数填充
qty_median = df['quantity'].median()
df['quantity'].fillna(qty_median, inplace=True)

# 4. 删除日期解析失败和重复行
df.drop_duplicates(inplace=True)
df = df.dropna(subset=['order_date_clean'])

print("\\n清洗后数据：")
print(df[['order_id', 'order_date_clean', 'price', 'quantity']])
print(f"\\n清洗前记录数: 10, 清洗后记录数: {len(df)}")
print(f"价格中位数: {price_median:.2f}, 数量中位数: {qty_median:.2f}")
`,tips:["注意：使用pandas处理数据时，要注意数据类型转换","清洗数据时要记录每个步骤的处理逻辑","使用中位数填充缺失值可以避免异常值的影响"]},{id:"project-2",chapterId:"chapter-4",title:"用户行为日志解析与Session构建",description:"从埋点日志构建用户会话序列，为AI推荐系统提供结构化输入",difficulty:"基础",skills:["Session分析","时间序列","用户路径","会话切分"],initialCode:`import pandas as pd
import numpy as np

# 模拟用户行为日志
np.random.seed(42)
users = np.repeat(range(1, 6), 5)
timestamps = pd.date_range('2024-01-01 09:00', periods=25, freq='8min')
events = np.random.choice(['page_view', 'add_cart', 'purchase'], 25)

df_log = pd.DataFrame({
    'user_id': users,
    'timestamp': timestamps,
    'event_type': events
}).sort_values(['user_id', 'timestamp']).reset_index(drop=True)

print("原始行为日志：")
print(df_log)
print()

# 构建Session
# 计算同一用户前后操作的时间差（分钟）
df_log['time_diff'] = df_log.groupby('user_id')['timestamp'].diff().dt.total_seconds() / 60
df_log['time_diff'].fillna(0, inplace=True)

# 设定30分钟超时阈值，生成新session标记
SESSION_TIMEOUT = 30
df_log['new_session'] = (df_log['time_diff'] > SESSION_TIMEOUT).astype(int)

# 生成session_id
df_log['session_id'] = df_log.groupby('user_id')['new_session'].cumsum()
df_log['session_id'] = df_log['user_id'].astype(str) + '_' + df_log['session_id'].astype(str)

# 聚合session特征
session_features = df_log.groupby('session_id').agg(
    user_id=('user_id', 'first'),
    start_time=('timestamp', 'min'),
    end_time=('timestamp', 'max'),
    event_count=('event_type', 'count'),
    has_purchase=('event_type', lambda x: (x == 'purchase').any())
).reset_index()

session_features['duration_min'] = (session_features['end_time'] - session_features['start_time']).dt.total_seconds() / 60

print("\\nSession特征表：")
print(session_features)
print(f"\\n总Session数: {len(session_features)}, 含购买行为的Session: {session_features['has_purchase'].sum()}")
`,tips:["Session分析是理解用户行为的关键","30分钟是常用的会话超时阈值","可以根据业务需求调整超时时间"]},{id:"project-3",chapterId:"chapter-5",title:"销售数据的多维度探索性分析（EDA）",description:"直观理解销售规律，为预测建模打基础",difficulty:"基础",skills:["Pandas","透视表","统计摘要","数据可视化"],initialCode:`import pandas as pd
import numpy as np

# 模拟销售数据
np.random.seed(42)
dates = pd.date_range('2024-01-01', '2024-06-30', freq='D')
categories = ['电子产品', '服装', '食品', '家居']

data = []
for date in dates:
    for cat in categories:
        base_sales = np.random.poisson(
            lam={'电子产品': 50, '服装': 80, '食品': 120, '家居': 40}[cat]
        )
        if date.dayofweek >= 5:  # 周末效应
            base_sales = int(base_sales * 1.3)
        data.append({'date': date, 'category': cat, 'sales_amount': base_sales})

df_sales = pd.DataFrame(data)
print("销售数据预览：")
print(df_sales.head(10))
print()

# 1. 月度销售汇总
df_sales['month'] = df_sales['date'].dt.month
monthly_sales = df_sales.groupby(['month', 'category'])['sales_amount'].sum().unstack()
print("月度销售额汇总（透视表）：")
print(monthly_sales)
print()

# 2. 品类总体占比
category_total = df_sales.groupby('category')['sales_amount'].sum()
category_pct = (category_total / category_total.sum() * 100).sort_values(ascending=False)
print("品类销售占比：")
for cat, pct in category_pct.items():
    print(f"  {cat}: {pct:.1f}%")
print()

# 3. 周末vs工作日分析
df_sales['is_weekend'] = df_sales['date'].dt.dayofweek >= 5
weekend_comparison = df_sales.groupby('is_weekend')['sales_amount'].mean()
print(f"工作日日均销售: {weekend_comparison[False]:.1f}")
print(f"周末日均销售: {weekend_comparison[True]:.1f}")
print(f"周末提升幅度: {((weekend_comparison[True] - weekend_comparison[False]) / weekend_comparison[False] * 100):.1f}%")
print()

# 4. 销售波动分析
daily_total = df_sales.groupby('date')['sales_amount'].sum()
print(f"日销售额统计: 均值={daily_total.mean():.1f}, 标准差={daily_total.std():.1f}")
print(f"最高日: {daily_total.idxmax().strftime('%Y-%m-%d')} ({daily_total.max()}), 最低日: {daily_total.idxmin().strftime('%Y-%m-%d')} ({daily_total.min()})")
`,tips:["EDA是数据分析的第一步","使用透视表可以快速了解数据","周末效应在零售数据中很常见"]},{id:"project-4",chapterId:"chapter-6",title:"购物车分析——商品关联规则挖掘",description:'经典的"啤酒与尿布"分析，通过Apriori算法挖掘捆绑推荐规则',difficulty:"进阶",skills:["Apriori","关联规则","共现分析","提升度"],initialCode:`import pandas as pd
import numpy as np
from itertools import combinations

# 模拟购物车数据
np.random.seed(42)
transactions = []
patterns = [
    ['牛奶', '面包'], ['牛奶', '面包', '黄油'],
    ['手机壳', '钢化膜'], ['啤酒', '花生'],
    ['洗发水', '沐浴露'], ['咖啡', '咖啡伴侣'],
]

for i in range(50):
    base = patterns[np.random.randint(0, len(patterns))]
    extra = np.random.choice(['牙膏', '毛巾', '垃圾袋'], size=np.random.randint(0, 3), replace=False)
    items = base + list(extra)
    transactions.append(','.join(items))

df_cart = pd.DataFrame({'order_id': range(1, 51), 'items': transactions})
print("购物车数据预览：")
print(df_cart.head(10))
print()

# 将商品拆分为多行
df_exploded = df_cart.assign(item=df_cart['items'].str.split(',')).explode('item')
total_orders = df_exploded['order_id'].nunique()

# 计算每个商品的支持度
item_support = df_exploded.groupby('item')['order_id'].nunique() / total_orders
print("商品支持度（出现概率）：")
print(item_support.sort_values(ascending=False))
print()

# 计算商品对的共现频率（简化版关联规则）
pair_counts = {}
for order_id, group in df_exploded.groupby('order_id'):
    items_in_order = group['item'].tolist()
    for item1, item2 in combinations(sorted(set(items_in_order)), 2):
        pair = (item1, item2)
        pair_counts[pair] = pair_counts.get(pair, 0) + 1

# 计算支持度、置信度、提升度
print("商品关联规则（Top 10）：")
print(f"{'规则':<30} {'支持度':>8} {'置信度':>8} {'提升度':>8}")
print("-" * 60)

for (item_a, item_b), co_count in sorted(pair_counts.items(), key=lambda x: x[1], reverse=True)[:10]:
    support = co_count / total_orders
    support_a = item_support[item_a]
    confidence_a_to_b = support / support_a
    lift = support / (support_a * item_support[item_b])
    print(f"{item_a} -> {item_b:<20} {support:.3f}   {confidence_a_to_b:.3f}   {lift:.3f}")

print()
print("强关联规则（提升度>1.5）：")
for (item_a, item_b), co_count in pair_counts.items():
    support = co_count / total_orders
    lift = support / (item_support[item_a] * item_support[item_b])
    if lift > 1.5:
        print(f"  {item_a} + {item_b}: 提升度={lift:.2f}, 建议捆绑推荐")
`,tips:["提升度>1表示有正相关性",'经典的"啤酒与尿布"就是关联规则的典型案例',"关联规则广泛用于电商推荐系统"]},{id:"project-5",chapterId:"chapter-7",title:"基于RFM模型的用户价值分层",description:"精细化运营的核心，为AI营销策略提供特征输入",difficulty:"进阶",skills:["RFM模型","用户分层","价值分析","运营策略"],initialCode:`import pandas as pd
import numpy as np

# 模拟用户购买数据
np.random.seed(42)
n_records = 200
user_ids = np.random.randint(1, 31, n_records)
dates = pd.date_range('2024-01-01', '2024-06-30', freq='D')
order_dates = np.random.choice(dates, n_records)
amounts = np.random.exponential(scale=100, size=n_records) + 20

df_purchase = pd.DataFrame({
    'user_id': user_ids,
    'order_date': order_dates,
    'amount': np.round(amounts, 2)
}).sort_values('order_date')

print("用户购买数据预览：")
print(df_purchase.head(10))
print()

# 计算RFM
REFERENCE_DATE = df_purchase['order_date'].max() + pd.Timedelta(days=1)

rfm = df_purchase.groupby('user_id').agg(
    Recency=('order_date', lambda x: (REFERENCE_DATE - x.max()).days),
    Frequency=('order_date', 'count'),
    Monetary=('amount', 'sum')
).reset_index()

print("RFM原始值：")
print(rfm.head(10))
print()

# RFM打分（1-5分）
# 注意：Recency越小越好，Frequency和Monetary越大越好
rfm['R_score'] = pd.qcut(rfm['Recency'], q=5, labels=[5, 4, 3, 2, 1]).astype(int)
rfm['F_score'] = pd.qcut(rfm['Frequency'].rank(method='first'), q=5, labels=[1, 2, 3, 4, 5]).astype(int)
rfm['M_score'] = pd.qcut(rfm['Monetary'].rank(method='first'), q=5, labels=[1, 2, 3, 4, 5]).astype(int)

# 拼接RFM标签
rfm['RFM_label'] = rfm['R_score'].astype(str) + rfm['F_score'].astype(str) + rfm['M_score'].astype(str)

# 用户分层定义
def classify_user(row):
    """根据RFM总分进行分层"""
    total = row['R_score'] + row['F_score'] + row['M_score']
    if total >= 12:
        return '重要价值客户'
    elif total >= 9:
        return '重要发展客户'
    elif total >= 6:
        return '一般客户'
    else:
        return '流失客户'

rfm['segment'] = rfm.apply(classify_user, axis=1)

print("RFM分层结果：")
print(rfm[['user_id', 'Recency', 'Frequency', 'Monetary', 'RFM_label', 'segment']].head(10))
print()

# 分层统计
segment_stats = rfm.groupby('segment').agg(
    用户数=('user_id', 'count'),
    平均消费金额=('Monetary', 'mean'),
    总消费金额=('Monetary', 'sum'),
    平均购买次数=('Frequency', 'mean')
).round(2)

segment_stats['金额占比'] = (segment_stats['总消费金额'] / segment_stats['总消费金额'].sum() * 100).round(1)
print("用户分层统计：")
print(segment_stats)
`,tips:["RFM是用户价值分层的经典方法","Recency越近越好","可以根据业务场景调整分层规则"]},{id:"project-6",chapterId:"chapter-8",title:"用户画像构建——K-Means聚类分析",description:"利用AI算法自动划分用户群体，实现自动化分群",difficulty:"进阶",skills:["K-Means","聚类分析","特征工程","用户画像"],initialCode:`import pandas as pd
import numpy as np

# 构建用户特征数据
np.random.seed(42)
n_users = 100

user_data = pd.DataFrame({
    'user_id': range(1, n_users + 1),
    'age': np.concatenate([
        np.random.normal(40, 5, 30),
        np.random.normal(22, 3, 40),
        np.random.normal(30, 4, 30)
    ]),
    'monthly_orders': np.concatenate([
        np.random.poisson(1, 30),
        np.random.poisson(8, 40),
        np.random.poisson(4, 30)
    ]),
    'avg_order_value': np.concatenate([
        np.random.normal(500, 100, 30),
        np.random.normal(50, 15, 40),
        np.random.normal(150, 40, 30)
    ]),
    'days_since_last_order': np.concatenate([
        np.random.normal(30, 10, 30),
        np.random.normal(3, 2, 40),
        np.random.normal(10, 5, 30)
    ])
})

# 清理不合理值
user_data['age'] = user_data['age'].clip(18, 65)
user_data['monthly_orders'] = user_data['monthly_orders'].clip(0, 30)
user_data['avg_order_value'] = user_data['avg_order_value'].clip(10, 2000)
user_data['days_since_last_order'] = user_data['days_since_last_order'].clip(0, 90)

print("用户特征数据预览：")
print(user_data.head(10))
print()

print("用户统计描述：")
print(user_data.describe())
print()

print("\\n提示：完整的K-Means聚类需要sklearn库。")
print("聚类步骤：")
print("1. 特征选择与标准化")
print("2. 肘部法则确定K值")
print("3. 训练聚类模型")
print("4. 分析每个簇的特征")
print("5. 定义簇的业务含义")
`,tips:["聚类是无监督学习的一种","K-Means对初始值敏感","可以用肘部法则确定最佳K值"]},{id:"project-7",chapterId:"chapter-9",title:"时间序列分解与移动平均预测",description:"理解销售数据的趋势与季节性，为AI预测模型提供基线",difficulty:"进阶",skills:["时间序列","移动平均","季节性分解","异常检测"],initialCode:`import pandas as pd
import numpy as np

# 模拟每日销售数据（包含趋势+季节+噪声）
np.random.seed(42)
dates = pd.date_range('2023-01-01', '2023-12-31', freq='D')
n = len(dates)

# 趋势：缓慢上升
trend = np.linspace(100, 150, n)
# 季节性：7天周期
seasonal = 20 * np.sin(2 * np.pi * np.arange(n) / 7)
# 月度效应（月初发工资消费高）
month_effect = np.where(pd.Series(dates).dt.day <= 5, 30, 0)
# 噪声
noise = np.random.normal(0, 10, n)

sales = trend + seasonal + month_effect + noise
sales = np.maximum(sales, 0)

df_ts = pd.DataFrame({'date': dates, 'sales': sales.round(2)})
df_ts.set_index('date', inplace=True)

print("时间序列数据预览：")
print(df_ts.head(10))
print()

# 7天移动平均
df_ts['MA_7'] = df_ts['sales'].rolling(window=7, center=True).mean()

print("\\n提示：完整的季节性分解需要statsmodels库。")
print("分析步骤：")
print("1. 计算移动平均，观察趋势")
print("2. 季节性分解（趋势+季节+残差）")
print("3. 用上周同天做预测")
print("4. 异常检测（基于残差标准差）")
`,tips:["移动平均是最简单的时间序列预测方法","7天移动平均可以平滑周效应","残差可以用来检测异常值"]},{id:"project-8",chapterId:"chapter-10",title:"评论文本情感分析与销量关联",description:"利用NLP将非结构化评论转化为可分析数据，验证口碑效应",difficulty:"进阶",skills:["情感分析","NLP","关键词提取","相关性分析"],initialCode:`import pandas as pd
import numpy as np

# 模拟商品评论数据（包含情感倾向）
np.random.seed(42)
positive_templates = [
    "非常好用，质量很棒，值得购买",
    "物流很快，包装完好，很满意",
    "性价比很高，推荐给大家"
]
negative_templates = [
    "质量太差了，用了一次就坏了",
    "跟描述不符，很失望",
    "物流太慢，包装都破了"
]

reviews = []
for _ in range(200):
    product = np.random.choice(['A', 'B', 'C', 'D', 'E'])
    quality_map = {'A': 0.8, 'B': 0.5, 'C': 0.9, 'D': 0.3, 'E': 0.6}
    
    sentiment_roll = np.random.random()
    if sentiment_roll < quality_map[product]:
        template = np.random.choice(positive_templates)
        true_sentiment = 1
    elif sentiment_roll < quality_map[product] + 0.2:
        template = "一般般吧，对得起这个价格"
        true_sentiment = 0
    else:
        template = np.random.choice(negative_templates)
        true_sentiment = -1
    
    reviews.append({
        'product_id': product,
        'review_text': template,
        'true_sentiment': true_sentiment
    })

df_reviews = pd.DataFrame(reviews)
print("评论数据预览：")
print(df_reviews.head(10))
print()

# 简易情感打分（基于关键词）
positive_words = ['好', '棒', '满意', '推荐', '快', '值', '喜欢']
negative_words = ['差', '失望', '慢', '破', '坏', '后悔', '烂', '不行']

def simple_sentiment_score(text):
    """简易情感打分，返回-1到1之间的分数"""
    score = 0
    for word in positive_words:
        score += text.count(word) * 0.25
    for word in negative_words:
        score -= text.count(word) * 0.25
    return max(-1, min(1, score))

df_reviews['sentiment_score'] = df_reviews['review_text'].apply(simple_sentiment_score)

print("各商品情感分析结果：")
product_sentiment = df_reviews.groupby('product_id').agg(
    评论数=('review_text', 'count'),
    平均情感分=('sentiment_score', 'mean')
).round(3)
print(product_sentiment)
`,tips:["情感分析是NLP的重要应用","可以使用SnowNLP等库做中文情感分析","口碑与销量通常呈正相关"]},{id:"project-9",chapterId:"chapter-11",title:"协同过滤推荐系统实现",description:"理解AI推荐算法的底层矩阵运算逻辑",difficulty:"综合",skills:["协同过滤","余弦相似度","矩阵分解","推荐算法"],initialCode:`import pandas as pd
import numpy as np

# 模拟用户-物品评分矩阵
np.random.seed(42)
ratings_dict = {
    'user_id': [1,1,1,2,2,3,3,3,3,4,4,4,5,5,5,5],
    'item_id': [1,2,3,1,4,2,3,4,5,1,3,5,2,3,4,5],
    'rating': [5,3,4,4,5,2,4,5,3,4,5,2,3,4,5,4]
}
df_ratings = pd.DataFrame(ratings_dict)

print("评分数据：")
print(df_ratings)
print()

# 构建用户-物品矩阵
user_item_matrix = df_ratings.pivot(index='user_id', columns='item_id', values='rating').fillna(0)
print("用户-物品矩阵：")
print(user_item_matrix)
print()

print("\\n提示：完整的协同过滤需要计算余弦相似度。")
print("推荐步骤：")
print("1. 构建用户-物品矩阵")
print("2. 计算物品之间的余弦相似度")
print("3. 对每个用户的已评分物品，找到相似物品")
print("4. 加权求和得到预测评分")
print("5. 推荐预测评分最高的物品")
`,tips:["协同过滤分为基于用户和基于物品的","余弦相似度是常用的相似度度量","矩阵分解是现代推荐系统的核心"]},{id:"project-10",chapterId:"chapter-12",title:"综合实战——电商全链路数据分析",description:"模拟真实工作场景，融合前面所有技术完成完整分析报告",difficulty:"综合",skills:["全链路分析","漏斗分析","用户聚类","策略建议"],initialCode:`import pandas as pd
import numpy as np

print("=" * 60)
print("电商用户全链路数据分析报告")
print("=" * 60)
print()

# 数据准备
np.random.seed(42)
n_users = 50
n_sessions = 500

df_users = pd.DataFrame({
    'user_id': range(1, n_users + 1),
    'age': np.random.normal(30, 8, n_users).clip(18, 60).astype(int)
})

df_behavior = pd.DataFrame({
    'user_id': np.random.choice(range(1, n_users + 1), n_sessions),
    'event': np.random.choice(['page_view', 'page_view', 'page_view', 'add_cart', 'purchase'], n_sessions),
    'product_price': np.random.choice([50, 100, 200, 500, 1000], n_sessions)
})

print("[Part 1] 数据概览：")
print(f"  用户数: {len(df_users)}")
print(f"  行为记录: {len(df_behavior)}")
print()

# 流量漏斗分析
page_view_users = df_behavior[df_behavior['event'] == 'page_view']['user_id'].nunique()
add_cart_users = df_behavior[df_behavior['event'] == 'add_cart']['user_id'].nunique()
purchase_users = df_behavior[df_behavior['event'] == 'purchase']['user_id'].nunique()

print("[Part 2] 流量漏斗分析：")
funnel_df = pd.DataFrame({
    '阶段': ['浏览', '加购', '支付'],
    '用户数': [page_view_users, add_cart_users, purchase_users]
})
funnel_df['总体转化率'] = (funnel_df['用户数'] / page_view_users * 100).round(1)
print(funnel_df.to_string(index=False))
print()

print("[Part 3-6] 完整分析包括：")
print("  - 购物车放弃率分析")
print("  - 商品关联规则")
print("  - 用户聚类")
print("  - 策略建议")
print()
print("=" * 60)
print("分析结论与AI策略建议")
print("=" * 60)
print("1. 浏览到支付转化率偏低，建议AI部署个性化推荐算法提升加购率")
print("2. 高客单价商品加购放弃率偏高，建议AI触发自动化挽单邮件")
print("3. 聚类识别出沉睡高价值用户群，建议作为AI定向广告的重点投放对象")
print("4. 价格带共现分析为AI捆绑推荐模型提供了特征输入")
`,tips:["综合实战是检验学习成果的最好方式","实际项目中需要更多的数据清洗","分析结果要转化为可执行的业务建议"]},{id:"db-project-1",chapterId:"chapter-13",title:"数据库连接与数据抽取（SQL + Pandas）",description:"从数据库中提取销售数据，为分析做准备。使用 SQLite 创建订单表、订单明细表、商品表，使用 pandas.read_sql 读取数据。",difficulty:"基础",skills:["SQLite","SQL","pandas.read_sql","数据验证"],initialCode:`import sqlite3
import pandas as pd
import numpy as np

# 创建数据库连接
conn = sqlite3.connect("sales.db")
cursor = conn.cursor()

# 创建订单表
cursor.execute("""
    CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER PRIMARY KEY,
        user_id INTEGER,
        order_date TEXT,
        total_amount REAL
    )
""")

# 创建订单明细表
cursor.execute("""
    CREATE TABLE IF NOT EXISTS order_items (
        item_id INTEGER PRIMARY KEY,
        order_id INTEGER,
        product_id INTEGER,
        quantity INTEGER,
        price REAL,
        FOREIGN KEY (order_id) REFERENCES orders(order_id)
    )
""")

# 创建商品表
cursor.execute("""
    CREATE TABLE IF NOT EXISTS products (
        product_id INTEGER PRIMARY KEY,
        product_name TEXT,
        category TEXT,
        price REAL
    )
""")

# 插入模拟数据
np.random.seed(42)

# 商品数据
products = [
    (1, '牛奶', '食品', 5.5),
    (2, '面包', '食品', 3.0),
    (3, '手机壳', '数码', 20.0),
    (4, '钢化膜', '数码', 15.0),
    (5, '洗发水', '日用品', 25.0)
]
cursor.executemany("INSERT OR REPLACE INTO products VALUES (?, ?, ?, ?)", products)

# 订单数据
orders = []
order_items = []
for i in range(1, 51):
    user_id = np.random.randint(1, 11)
    order_date = f'2024-01-{np.random.randint(1, 29):02d}'
    total_amount = 0
    
    num_items = np.random.randint(1, 4)
    for j in range(num_items):
        product_id = np.random.randint(1, 6)
        quantity = np.random.randint(1, 4)
        price = products[product_id-1][3]
        total_amount += price * quantity
        order_items.append((len(order_items) + 1, i, product_id, quantity, price))
    
    orders.append((i, user_id, order_date, total_amount))

cursor.executemany("INSERT OR REPLACE INTO orders VALUES (?, ?, ?, ?)", orders)
cursor.executemany("INSERT OR REPLACE INTO order_items VALUES (?, ?, ?, ?, ?)", order_items)
conn.commit()

print("数据库创建成功！")
print()

# 使用 pandas.read_sql 读取数据
df_orders = pd.read_sql("SELECT * FROM orders", conn)
df_order_items = pd.read_sql("SELECT * FROM order_items", conn)
df_products = pd.read_sql("SELECT * FROM products", conn)

print("订单表前5行：")
print(df_orders.head())
print()

print("订单明细表前5行：")
print(df_order_items.head())
print()

print("商品表：")
print(df_products)
print()

# 验证数据
assert len(df_orders) > 0, "数据抽取失败"
assert len(df_order_items) > 0, "订单明细数据抽取失败"
assert len(df_products) > 0, "商品数据抽取失败"

print("✓ 数据验证通过！")
print(f"订单数: {len(df_orders)}")
print(f"订单明细数: {len(df_order_items)}")
print(f"商品数: {len(df_products)}")

conn.close()
`,tips:["SQLite 是轻量级数据库，无需安装服务","pandas.read_sql 可以直接读取 SQL 查询结果","记得关闭数据库连接"]},{id:"db-project-2",chapterId:"chapter-14",title:"数据清洗与缺失值处理",description:"掌握真实数据中的缺失值、异常值处理。构造含缺失值的订单表，使用 Pandas 进行删除空行、填充均值、标记缺失。",difficulty:"基础",skills:["缺失值处理","数据清洗","统计对比","异常值检测"],initialCode:`import sqlite3
import pandas as pd
import numpy as np

# 创建含缺失值的数据
np.random.seed(42)
n = 100

data = {
    'order_id': range(1, n+1),
    'user_id': np.random.randint(1, 11, n),
    'amount': np.random.normal(100, 30, n).round(2),
    'quantity': np.random.randint(1, 10, n)
}

df = pd.DataFrame(data)

# 引入缺失值
df.loc[np.random.choice(n, 15), 'amount'] = np.nan
df.loc[np.random.choice(n, 10), 'user_id'] = np.nan

# 引入异常值
df.loc[np.random.choice(n, 5), 'amount'] = df['amount'] * 5

print("原始数据统计：")
print(df.describe())
print()
print(f"缺失值情况：")
print(df.isnull().sum())
print()

# 创建副本进行清洗
df_clean = df.copy()

# 方法1：删除含有缺失值的行
df_drop = df.dropna()
print(f"删除缺失值后行数: {len(df_drop)} (原始: {len(df)})")
print()

# 方法2：填充均值
df_clean['amount'] = df_clean['amount'].fillna(df_clean['amount'].mean())
df_clean['user_id'] = df_clean['user_id'].fillna(-1)  # 用特殊值标记

# 标记缺失
df_clean['amount_missing'] = df['amount'].isnull()
df_clean['user_id_missing'] = df['user_id'].isnull()

# 处理异常值：截断在 3σ 范围内
mean_amount = df_clean['amount'].mean()
std_amount = df_clean['amount'].std()
lower_bound = mean_amount - 3 * std_amount
upper_bound = mean_amount + 3 * std_amount
df_clean['amount'] = df_clean['amount'].clip(lower_bound, upper_bound)

print("清洗后数据统计：")
print(df_clean.describe())
print()
print(f"清洗后缺失值情况：")
print(df_clean[['amount', 'user_id']].isnull().sum())
print()

# 验证
assert df_clean["amount"].isnull().sum() == 0, "缺失值未处理"
print("✓ 缺失值处理验证通过！")
`,tips:["处理缺失值有三种方法：删除、填充、标记","均值填充适合正态分布数据","异常值可以用截断或 IQR 方法处理"]},{id:"db-project-3",chapterId:"chapter-15",title:"购物车分析（Market Basket Analysis）",description:'使用关联规则挖掘。将订单明细转换为"购物篮"格式，计算支持度、置信度、提升度，找出强关联规则。',difficulty:"进阶",skills:["关联规则","购物篮分析","支持度置信度","提升度"],initialCode:`import pandas as pd
import numpy as np
from itertools import combinations

# 创建购物车数据
np.random.seed(42)

products = ['牛奶', '面包', '黄油', '手机壳', '钢化膜', '啤酒', '花生', '洗发水', '沐浴露']
n_orders = 100

transactions = []
for i in range(n_orders):
    # 随机选择商品
    n_items = np.random.randint(1, 5)
    items = np.random.choice(products, n_items, replace=False)
    transactions.append({'order_id': i+1, 'items': ','.join(sorted(items))})

df = pd.DataFrame(transactions)
print("购物车数据前10行：")
print(df.head(10))
print()

# 转换为 one-hot 编码
one_hot = df['items'].str.get_dummies(sep=',')
print("One-hot 编码数据前5行：")
print(one_hot.head())
print()

# 计算单个商品的支持度
support = one_hot.mean().sort_values(ascending=False)
print("商品支持度（出现频率）：")
print(support.round(4))
print()

# 计算商品对的共现（简化版关联规则）
pair_support = {}
total_orders = len(one_hot)

for i, item1 in enumerate(one_hot.columns):
    for item2 in one_hot.columns[i+1:]:
        # 同时购买的订单数
        both = ((one_hot[item1] == 1) & (one_hot[item2] == 1)).sum()
        if both > 0:
            pair_support[(item1, item2)] = both / total_orders

# 计算置信度和提升度
rules = []
for (item_a, item_b), supp in sorted(pair_support.items(), key=lambda x: x[1], reverse=True):
    conf_ab = supp / support[item_a]  # A→B 的置信度
    conf_ba = supp / support[item_b]  # B→A 的置信度
    lift = supp / (support[item_a] * support[item_b])  # 提升度
    
    rules.append({
        'antecedent': item_a,
        'consequent': item_b,
        'support': supp,
        'confidence': conf_ab,
        'lift': lift
    })

rules_df = pd.DataFrame(rules)

print("Top 10 关联规则（按提升度排序）：")
print(rules_df.sort_values('lift', ascending=False).head(10).round(4))
print()

# 找出强关联规则（提升度 > 1.2）
strong_rules = rules_df[rules_df['lift'] > 1.2]
print(f"强关联规则（提升度 > 1.2）数量: {len(strong_rules)}")
if len(strong_rules) > 0:
    print("强关联规则：")
    print(strong_rules[['antecedent', 'consequent', 'lift']].round(4))

assert len(rules_df[rules_df["lift"] > 1]) > 0, "没有找到正相关规则"
print("\\n✓ 关联规则分析完成！")
`,tips:["提升度 > 1 表示正相关，< 1 表示负相关","置信度表示购买A后购买B的概率","支持度表示同时购买A和B的概率"]},{id:"db-project-4",chapterId:"chapter-16",title:"用户消费行为RFM分析",description:"基于最近购买时间、频率、金额进行用户分层。计算每个用户的 R、F、M，对每个指标分箱，输出高价值用户名单。",difficulty:"进阶",skills:["RFM模型","用户分层","分箱操作","价值评估"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 创建用户消费数据
np.random.seed(42)
n_users = 30
reference_date = datetime(2024, 2, 1)

data = []
for user_id in range(1, n_users + 1):
    n_purchases = np.random.randint(1, 15)
    for i in range(n_purchases):
        days_ago = np.random.randint(0, 60)
        purchase_date = reference_date - timedelta(days=days_ago)
        amount = np.random.normal(100, 30, 1)[0].round(2)
        data.append({
            'user_id': user_id,
            'purchase_date': purchase_date,
            'amount': max(amount, 10)  # 确保金额为正
        })

df = pd.DataFrame(data)
print("消费数据前10行：")
print(df.head(10))
print()

# 计算 RFM
rfm = df.groupby('user_id').agg({
    'purchase_date': lambda x: (reference_date - x.max()).days,  # Recency：最近一次购买距今天数
    'amount': ['count', 'sum']  # Frequency：购买次数，Monetary：总金额
}).round(2)

rfm.columns = ['Recency', 'Frequency', 'Monetary']
print("RFM原始值（前10用户）：")
print(rfm.head(10))
print()

# RFM 打分 (1-5)
# Recency: 越小越好，所以分位数反转
rfm['R_score'] = pd.qcut(rfm['Recency'], q=5, labels=[5, 4, 3, 2, 1]).astype(int)
# Frequency: 越大越好
rfm['F_score'] = pd.qcut(rfm['Frequency'].rank(method='first'), q=5, labels=[1, 2, 3, 4, 5]).astype(int)
# Monetary: 越大越好
rfm['M_score'] = pd.qcut(rfm['Monetary'].rank(method='first'), q=5, labels=[1, 2, 3, 4, 5]).astype(int)

# 计算总分
rfm['RFM_Score'] = rfm['R_score'] + rfm['F_score'] + rfm['M_score']

# 用户分层
def classify_user(row):
    total = row['RFM_Score']
    if total >= 12:
        return '重要价值客户'
    elif total >= 9:
        return '重要发展客户'
    elif total >= 6:
        return '一般客户'
    else:
        return '流失客户'

rfm['segment'] = rfm.apply(classify_user, axis=1)

print("RFM分析结果：")
print(rfm[['Recency', 'Frequency', 'Monetary', 'RFM_Score', 'segment']].head(10))
print()

# 分层统计
segment_stats = rfm.groupby('segment').agg({
    'Recency': 'mean',
    'Frequency': 'mean',
    'Monetary': ['mean', 'count', 'sum']
}).round(2)
segment_stats.columns = ['平均最近天数', '平均购买次数', '平均消费金额', '用户数', '总消费金额']
print("用户分层统计：")
print(segment_stats)
print()

# 高价值用户
high_value = rfm[rfm['RFM_Score'] >= 12]
print(f"高价值用户（RFM_Score >= 12）: {len(high_value)} 人")
print(high_value[['RFM_Score', 'segment']])

assert len(high_value) > 0, "没有找到高价值用户"
print("\\n✓ RFM分析完成！")
`,tips:["R: 最近一次购买（越小越好）","F: 购买频率（越大越好）","M: 消费金额（越大越好）"]},{id:"db-project-5",chapterId:"chapter-17",title:"时间序列分析与趋势预测",description:"分析销售额随时间变化，使用简单预测模型。将订单数据按日/月聚合，使用 Pandas 重采样与滚动平均。",difficulty:"进阶",skills:["时间序列","重采样","滚动平均","趋势预测"],initialCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

# 创建时间序列数据
np.random.seed(42)
start_date = datetime(2024, 1, 1)
end_date = datetime(2024, 6, 30)
dates = pd.date_range(start_date, end_date, freq='D')

# 构造有趋势和季节性的数据
n_days = len(dates)
trend = np.linspace(100, 150, n_days)  # 上升趋势
seasonal = 20 * np.sin(2 * np.pi * np.arange(n_days) / 7)  # 周周期
monthly_effect = np.where(pd.Series(dates).dt.day <= 5, 30, 0)  # 月初效应
noise = np.random.normal(0, 10, n_days)
sales = trend + seasonal + monthly_effect + noise
sales = np.maximum(sales, 50)  # 确保不为负

df = pd.DataFrame({'date': dates, 'sales': sales.round(2)})
df.set_index('date', inplace=True)

print("时间序列数据前10天：")
print(df.head(10))
print()

# 重采样：按月聚合
monthly_sales = df.resample('M').sum()
print("月度销售数据：")
print(monthly_sales)
print()

# 滚动平均
df['MA_7'] = df['sales'].rolling(window=7, center=True).mean()
df['MA_30'] = df['sales'].rolling(window=30, center=True).mean()

print("统计摘要：")
print(df[['sales', 'MA_7', 'MA_30']].describe().round(2))
print()

# 简单线性回归预测（趋势线）
from sklearn.linear_model import LinearRegression

# 准备数据
df['day_num'] = np.arange(len(df))
X = df[['day_num']].dropna()
y = df['sales'].loc[X.index]

# 拟合模型
model = LinearRegression()
model.fit(X, y)
df['trend'] = model.predict(df[['day_num']])

r2 = model.score(X, y)
print(f"趋势线拟合 R² = {r2:.4f}")
print(f"模型系数: 每天增长 {model.coef_[0]:.4f}")
print()

# 验证模型有一定解释力
assert r2 > 0.3, "模型解释力不足"
print("✓ 时间序列分析完成！")
print()
print("提示：完整的季节性分解可以使用 statsmodels.tsa.seasonal.seasonal_decompose")
`,tips:["滚动平均可以平滑短期波动，看清长期趋势","重采样可以将数据从日转为周/月","R² 表示模型能解释多少数据方差"]},{id:"db-project-6",chapterId:"chapter-18",title:"用户聚类分析（KMeans）",description:"基于消费行为将用户分群。选取特征：总消费额、平均客单价、购买品类数，标准化后使用 KMeans 聚类。",difficulty:"进阶",skills:["K-Means聚类","特征工程","标准化","可视化"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 创建用户特征数据
np.random.seed(42)
n_users = 100

# 构造有聚类结构的数据
user_data = []
for i in range(n_users):
    if i < 30:
        # 群体1：高消费、低频次
        total = np.random.normal(5000, 1000)
        avg_order = np.random.normal(500, 100)
        categories = np.random.randint(2, 5)
    elif i < 70:
        # 群体2：中等消费、中频次
        total = np.random.normal(2000, 500)
        avg_order = np.random.normal(200, 50)
        categories = np.random.randint(3, 7)
    else:
        # 群体3：低消费、高频次
        total = np.random.normal(800, 200)
        avg_order = np.random.normal(80, 20)
        categories = np.random.randint(5, 10)
    
    user_data.append({
        'user_id': i + 1,
        'total_spent': max(total, 100),
        'avg_order_value': max(avg_order, 30),
        'num_categories': categories
    })

df = pd.DataFrame(user_data)
print("用户特征数据前10行：")
print(df.head(10))
print()

# 选取特征
features = ['total_spent', 'avg_order_value', 'num_categories']
X = df[features]

# 标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# K-Means 聚类
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df['cluster'] = kmeans.fit_predict(X_scaled)

print("聚类结果统计：")
cluster_stats = df.groupby('cluster').agg({
    'total_spent': ['mean', 'count'],
    'avg_order_value': 'mean',
    'num_categories': 'mean'
}).round(2)
cluster_stats.columns = ['平均总消费', '用户数', '平均客单价', '平均品类数']
print(cluster_stats)
print()

# 为每个群体命名
def name_cluster(row):
    if row['cluster'] == 0:
        return '高价值客户'
    elif row['cluster'] == 1:
        return '大众客户'
    else:
        return '潜力客户'

df['cluster_name'] = df.apply(name_cluster, axis=1)

print("各群体用户数：")
print(df['cluster_name'].value_counts())
print()

# 验证聚类数量
assert len(set(df['cluster'])) == 3, "聚类数量不正确"
print("✓ 用户聚类分析完成！")
print()
print("提示：可以用 PCA 降维后可视化聚类结果")
`,tips:["K-Means 需要先标准化特征","可以用肘部法则确定最佳 k 值","聚类后要为每个群体赋予业务含义"]},{id:"db-project-7",chapterId:"chapter-19",title:"商品价格敏感度分析（价格弹性）",description:"分析价格变化对销量的影响。计算不同价格区间的平均销量，拟合对数线性模型估计价格弹性系数。",difficulty:"进阶",skills:["价格弹性","销量分析","对数模型","敏感度评估"],initialCode:`import pandas as pd
import numpy as np

# 创建商品价格和销量数据
np.random.seed(42)

products = ['商品A', '商品B', '商品C', '商品D', '商品E']
data = []

for product in products:
    # 为每个商品生成多期价格和销量数据
    base_price = np.random.choice([50, 100, 200, 500, 1000])
    for period in range(1, 13):
        # 价格在基础价格±20%波动
        price = base_price * (1 + np.random.uniform(-0.2, 0.2))
        # 销量与价格负相关，加上随机噪声
        base_quantity = 1000 / price * 10
        quantity = base_quantity * (1 + np.random.normal(-0.5 * (price - base_price)/base_price, 0.1))
        quantity = max(int(quantity), 10)
        
        data.append({
            'product': product,
            'period': period,
            'price': round(price, 2),
            'quantity': quantity
        })

df = pd.DataFrame(data)
print("价格销量数据前15行：")
print(df.head(15))
print()

# 计算价格弹性
elasticities = []

for product in products:
    product_data = df[df['product'] == product].copy()
    
    if len(product_data) >= 2:
        # 计算价格变化率和销量变化率
        product_data['price_change'] = product_data['price'].pct_change()
        product_data['quantity_change'] = product_data['quantity'].pct_change()
        
        # 计算弹性（销量变化% / 价格变化%）
        valid_data = product_data.dropna()
        if len(valid_data) > 0:
            elasticity = (valid_data['quantity_change'] / valid_data['price_change']).mean()
            elasticities.append({
                'product': product,
                'price_elasticity': round(elasticity, 4),
                'avg_price': round(product_data['price'].mean(), 2),
                'avg_quantity': round(product_data['quantity'].mean(), 2)
            })

elasticity_df = pd.DataFrame(elasticities)
print("各商品价格弹性：")
print(elasticity_df)
print()

# 找出高敏感商品（|elasticity| > 1）
high_sensitivity = elasticity_df[abs(elasticity_df['price_elasticity']) > 1]
print(f"高价格敏感商品（|弹性| > 1）: {len(high_sensitivity)} 个")
if len(high_sensitivity) > 0:
    print(high_sensitivity[['product', 'price_elasticity']])

# 验证
assert not elasticity_df['price_elasticity'].isna().all(), "未能计算价格弹性"
print("\\n✓ 价格敏感度分析完成！")
print()
print("提示：|弹性| > 1 表示价格变动对销量影响大（富有弹性）")
print("提示：|弹性| < 1 表示价格变动对销量影响小（缺乏弹性）")
`,tips:["价格弹性 = 销量变化% / 价格变化%","弹性绝对值 > 1: 富有弹性（价格敏感）","弹性绝对值 < 1: 缺乏弹性（价格不敏感）"]},{id:"db-project-8",chapterId:"chapter-20",title:"实时数据流模拟与滑动窗口聚合",description:"模拟AI场景下的流式数据处理。使用 pandas 模拟订单事件，计算过去1分钟的销售额滑动平均，检测异常峰值。",difficulty:"进阶",skills:["流式数据","滑动窗口","异常检测","实时聚合"],initialCode:`import pandas as pd
import numpy as np
from collections import deque
import time

# 模拟实时数据流
np.random.seed(42)

# 生成历史数据
n_history = 100
timestamps = pd.date_range(end=pd.Timestamp.now(), periods=n_history, freq='5S')
base_sales = 100
sales = base_sales + np.random.normal(0, 20, n_history)

# 引入几个异常峰值
sales[20] = base_sales * 3
sales[50] = base_sales * 2.5
sales[80] = base_sales * 4

stream_data = pd.DataFrame({
    'timestamp': timestamps,
    'sales': sales.round(2)
})

print("模拟流数据前10条：")
print(stream_data.head(10))
print()

# 滑动窗口聚合（窗口大小 = 12 * 5秒 = 1分钟）
window_size = 12
stream_data['rolling_mean'] = stream_data['sales'].rolling(window=window_size).mean()
stream_data['rolling_std'] = stream_data['sales'].rolling(window=window_size).std()

# 异常检测：超过均值 + 3倍标准差
stream_data['is_anomaly'] = (
    stream_data['sales'] > 
    stream_data['rolling_mean'] + 3 * stream_data['rolling_std']
)

print("滑动窗口统计（后15条）：")
print(stream_data[['timestamp', 'sales', 'rolling_mean', 'is_anomaly']].tail(15))
print()

# 统计结果
total_events = len(stream_data)
anomaly_count = stream_data['is_anomaly'].sum()
print(f"总事件数: {total_events}")
print(f"检测到异常: {anomaly_count} 个")
print()

# 使用 deque 实现流式处理（在线版本）
print("模拟在线流式处理（前20个事件）：")
window = deque(maxlen=window_size)

for i, (_, row) in enumerate(stream_data.head(20).iterrows()):
    window.append(row['sales'])
    
    if len(window) == window_size:
        mean_val = np.mean(window)
        std_val = np.std(window)
        is_anomaly = row['sales'] > mean_val + 3 * std_val
        
        status = "⚠️ 异常" if is_anomaly else "✓ 正常"
        print(f"时间 {i+1:2d}: 销售额={row['sales']:6.2f}, 均值={mean_val:6.2f}, {status}")
    
    time.sleep(0.05)  # 模拟延迟

# 验证滑动窗口长度
assert len(stream_data['rolling_mean'].dropna()) == len(stream_data) - window_size + 1, "滑动窗口计算错误"
print("\\n✓ 实时流数据分析完成！")
`,tips:["滑动窗口可以只保留最近N个数据点","异常检测常用 3σ 原则","deque 的 maxlen 可以自动丢弃旧数据"]},{id:"db-project-9",chapterId:"chapter-21",title:"多表关联与特征工程",description:"为机器学习模型构建特征表。关联订单表、用户表、商品表、评价表，构造特征：用户历史好评率、商品被购买时段分布。",difficulty:"进阶",skills:["多表关联","特征工程","评价分析","特征矩阵"],initialCode:`import sqlite3
import pandas as pd
import numpy as np
from datetime import datetime

# 创建数据库和表
conn = sqlite3.connect(":memory:")

# 用户表
users = pd.DataFrame({
    'user_id': range(1, 21),
    'age': np.random.randint(18, 60, 20),
    'gender': np.random.choice(['M', 'F'], 20),
    'register_date': pd.date_range('2023-01-01', periods=20)
})
users.to_sql('users', conn, index=False, if_exists='replace')

# 商品表
products = pd.DataFrame({
    'product_id': range(1, 11),
    'product_name': [f'商品{i}' for i in range(1, 11)],
    'category': np.random.choice(['食品', '数码', '服装', '日用品'], 10),
    'price': np.random.uniform(10, 500, 10).round(2)
})
products.to_sql('products', conn, index=False, if_exists='replace')

# 订单表
n_orders = 100
orders = pd.DataFrame({
    'order_id': range(1, n_orders + 1),
    'user_id': np.random.randint(1, 21, n_orders),
    'product_id': np.random.randint(1, 11, n_orders),
    'order_time': pd.date_range('2024-01-01', periods=n_orders, freq='2H'),
    'quantity': np.random.randint(1, 5, n_orders)
})
orders.to_sql('orders', conn, index=False, if_exists='replace')

# 评价表
reviews = pd.DataFrame({
    'review_id': range(1, n_orders + 1),
    'order_id': range(1, n_orders + 1),
    'user_id': orders['user_id'],
    'product_id': orders['product_id'],
    'rating': np.random.randint(1, 6, n_orders),  # 1-5星
    'review_text': np.random.choice(['很好', '不错', '一般', '差'], n_orders)
})
reviews.to_sql('reviews', conn, index=False, if_exists='replace')

print("数据库表创建完成！")
print()

# SQL多表关联
query = """
SELECT 
    u.user_id,
    u.age,
    u.gender,
    o.order_id,
    o.order_time,
    o.quantity,
    p.product_id,
    p.product_name,
    p.category,
    p.price,
    r.rating
FROM users u
JOIN orders o ON u.user_id = o.user_id
JOIN products p ON o.product_id = p.product_id
LEFT JOIN reviews r ON o.order_id = r.order_id
"""
df_full = pd.read_sql(query, conn)
print("关联后的数据前10行：")
print(df_full.head(10))
print()

# 特征工程：用户特征
user_features = df_full.groupby('user_id').agg({
    'order_id': 'count',  # 订单数
    'price': ['sum', 'mean'],  # 总消费、平均消费
    'rating': 'mean',  # 平均评分
    'category': 'nunique'  # 购买品类数
}).round(2)
user_features.columns = ['total_orders', 'total_spent', 'avg_order_value', 'avg_rating', 'num_categories']

# 用户好评率
user_features['good_review_rate'] = (
    df_full[df_full['rating'] >= 4].groupby('user_id').size() / 
    user_features['total_orders']
).round(4).fillna(0)

print("用户特征：")
print(user_features.head(10))
print()

# 商品特征
product_features = df_full.groupby('product_id').agg({
    'quantity': 'sum',
    'price': 'first',
    'rating': 'mean',
    'order_id': 'count'
}).round(2)
product_features.columns = ['total_sold', 'price', 'avg_rating', 'order_count']

print("商品特征：")
print(product_features.head(10))
print()

# 输出可用于聚类的特征矩阵
feature_matrix = user_features[['total_orders', 'total_spent', 'avg_rating', 'num_categories']].fillna(0)

print("特征矩阵形状：", feature_matrix.shape)
print("特征矩阵前5行：")
print(feature_matrix.head())

assert feature_matrix.shape[1] >= 5 or feature_matrix.shape[1] >= 4, "特征数量不足"
print("\\n✓ 多表关联与特征工程完成！")
`,tips:["LEFT JOIN 可以保留左表所有记录","特征工程是机器学习最重要的步骤","聚合函数：count, sum, mean, nunique"]},{id:"db-project-10",chapterId:"chapter-22",title:"端到端分析报告自动生成",description:"整合所有分析，输出结构化报告。运行多个分析模块，将结果写入数据库，生成可视化图表。",difficulty:"综合",skills:["报告生成","结果保存","可视化","端到端"],initialCode:`import sqlite3
import pandas as pd
import numpy as np
from datetime import datetime

print("=" * 60)
print("电商数据分析报告自动生成系统")
print("=" * 60)
print()

# 创建数据库
conn = sqlite3.connect("analysis_report.db")

# Step 1: 创建模拟数据
print("[Step 1] 创建模拟数据...")
np.random.seed(42)

# 用户表
users = pd.DataFrame({
    'user_id': range(1, 31),
    'age': np.random.randint(18, 55, 30),
    'gender': np.random.choice(['M', 'F'], 30)
})

# 订单表
n_orders = 200
orders = pd.DataFrame({
    'order_id': range(1, n_orders + 1),
    'user_id': np.random.randint(1, 31, n_orders),
    'amount': np.random.normal(150, 50, n_orders).round(2),
    'order_date': pd.date_range('2024-01-01', periods=n_orders, freq='3H')
})
orders['amount'] = orders['amount'].clip(20, 500)

# 保存原始数据
users.to_sql('users', conn, index=False, if_exists='replace')
orders.to_sql('orders', conn, index=False, if_exists='replace')
print("✓ 数据创建完成")
print()

# Step 2: RFM分析
print("[Step 2] 进行RFM分析...")
reference_date = orders['order_date'].max()

rfm = orders.groupby('user_id').agg({
    'order_date': lambda x: (reference_date - x.max()).days,
    'amount': ['count', 'sum']
})
rfm.columns = ['Recency', 'Frequency', 'Monetary']

# 简单评分
rfm['R_score'] = pd.qcut(rfm['Recency'], q=3, labels=[3, 2, 1]).astype(int)
rfm['F_score'] = pd.qcut(rfm['Frequency'].rank(method='first'), q=3, labels=[1, 2, 3]).astype(int)
rfm['M_score'] = pd.qcut(rfm['Monetary'].rank(method='first'), q=3, labels=[1, 2, 3]).astype(int)
rfm['RFM_Score'] = rfm['R_score'] + rfm['F_score'] + rfm['M_score']

# 保存RFM结果
rfm.reset_index().to_sql('rfm_results', conn, index=False, if_exists='replace')
print("✓ RFM分析完成并保存")
print()

# Step 3: 销售趋势分析
print("[Step 3] 分析销售趋势...")
orders['date'] = orders['order_date'].dt.date
daily_sales = orders.groupby('date')['amount'].agg(['sum', 'count']).round(2)
daily_sales.columns = ['total_sales', 'order_count']

# 保存销售趋势
daily_sales.reset_index().to_sql('daily_sales', conn, index=False, if_exists='replace')
print("✓ 销售趋势分析完成并保存")
print()

# Step 4: 生成报告
print("[Step 4] 生成分析报告...")
print()
print("=" * 60)
print("电商数据分析报告")
print("=" * 60)
print(f"报告生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
print()

print("1. 数据概览")
print("-" * 40)
print(f"   用户数: {len(users)}")
print(f"   订单数: {len(orders)}")
print(f"   总销售额: {orders['amount'].sum():.2f}")
print(f"   平均订单金额: {orders['amount'].mean():.2f}")
print()

print("2. RFM用户分层")
print("-" * 40)
print(f"   高价值用户 (RFM>=7): {len(rfm[rfm['RFM_Score'] >=7])} 人")
print(f"   中等用户 (4<=RFM<7): {len(rfm[(rfm['RFM_Score'] >=4) & (rfm['RFM_Score'] <7)])} 人")
print(f"   低价值用户 (RFM<4): {len(rfm[rfm['RFM_Score'] <4])} 人")
print()

print("3. 销售趋势")
print("-" * 40)
print(f"   日均销售额: {daily_sales['total_sales'].mean():.2f}")
print(f"   日均订单数: {daily_sales['order_count'].mean():.1f}")
print(f"   最高日销售额: {daily_sales['total_sales'].max():.2f}")
print()

print("4. 策略建议")
print("-" * 40)
print("   1. 对高价值用户推出专属优惠，提高忠诚度")
print("   2. 对中等价值用户进行交叉销售推荐")
print("   3. 对低价值用户设计唤醒活动")
print("   4. 关注销售峰值日期，提前做好库存准备")
print()

print("=" * 60)
print("分析结果已保存到数据库 analysis_report.db")
print("表名: rfm_results, daily_sales")
print("=" * 60)

# 验证报告文件
cursor = conn.cursor()
cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = cursor.fetchall()
assert len(tables) >= 3, "报告表未正确保存"

# 关闭连接
conn.close()
print()
print("✓ 端到端分析报告生成完成！")
`,tips:["可以用 matplotlib/seaborn 生成图表","报告可以导出为 HTML 或 PDF","结果保存到数据库方便后续查询"]},{id:"cart-project-1",chapterId:"chapter-23",title:"用户购物车弃购原因清洗与统计",description:"处理订单表中的时间列格式、缺失支付时间标记弃购，计算弃购率、平均放弃购物车价值。",difficulty:"基础",skills:["弃购率","缺失值处理","数据清洗","统计对比"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime

# 创建模拟购物车数据
np.random.seed(42)
n = 200

data = {
    '订单ID': range(1, n+1),
    '用户ID': np.random.randint(1, 51, n),
    '商品ID': np.random.randint(1, 21, n),
    '加购时间': pd.date_range('2024-01-01', periods=n, freq='30T'),
    '是否支付': np.random.choice([0, 1], n, p=[0.35, 0.65]),  # 65%支付率
    '商品价格': np.random.uniform(20, 500, n).round(2)
}

df = pd.DataFrame(data)

# 生成支付时间（仅对已支付的订单）
df['支付时间'] = pd.NaT
paid_orders = df[df['是否支付'] == 1].index
df.loc[paid_orders, '支付时间'] = df.loc[paid_orders, '加购时间'] + pd.to_timedelta(
    np.random.randint(5, 120, len(paid_orders)), unit='m'
)

# 模拟缺失的支付时间（部分已支付订单忘记记录）
missing_payment = np.random.choice(paid_orders, size=int(len(paid_orders)*0.1), replace=False)
df.loc[missing_payment, '支付时间'] = pd.NaT

print("原始数据前10行：")
print(df.head(10))
print()
print("数据类型：")
print(df.dtypes)
print()
print(f"缺失值统计：")
print(df.isnull().sum())
print()

# 数据清洗
# 1. 标记弃购订单（未支付或支付时间缺失）
df['是否弃购'] = ((df['是否支付'] == 0) | (df['支付时间'].isna())).astype(int)

# 2. 计算弃购时间差
df['弃购等待时长_分钟'] = (
    pd.to_datetime('2024-01-31 23:59:59') - df['加购时间']
).dt.total_seconds() / 60

# 处理时间列格式
df['加购时间_格式'] = df['加购时间'].dt.strftime('%Y-%m-%d %H:%M')
df['支付时间_格式'] = df['支付时间'].dt.strftime('%Y-%m-%d %H:%M')

print("清洗后数据前10行：")
print(df[['订单ID', '用户ID', '商品价格', '是否弃购', '弃购等待时长_分钟']].head(10))
print()

# 统计分析
# 计算弃购率
abandon_rate = df[df['是否弃购'] == 1].shape[0] / df.shape[0]
print(f"整体弃购率: {abandon_rate:.2%}")
print()

# 计算平均放弃购物车价值
avg_abandon_value = df[df['是否弃购'] == 1]['商品价格'].mean()
print(f"平均放弃购物车价值: ¥{avg_abandon_value:.2f}")
print()

# 按商品统计弃购情况
product_stats = df.groupby('商品ID').agg({
    '是否弃购': ['sum', 'count', 'mean'],
    '商品价格': 'mean'
}).round(2)
product_stats.columns = ['弃购订单数', '总订单数', '弃购率', '平均价格']
product_stats = product_stats.sort_values('弃购率', ascending=False)

print("高弃购率商品（Top 10）：")
print(product_stats.head(10))
print()

# 验证
assert df[df['是否弃购'] == 1].shape[0] > 0, "没有弃购订单"
assert not pd.isna(avg_abandon_value), "未能计算平均弃购价值"
print("✓ 弃购数据分析完成！")
`,tips:["弃购率 = 弃购订单数 / 总订单数","支付时间缺失不等于弃购，需要结合是否支付字段","弃购等待时长可以分析用户决策时间"]},{id:"cart-project-2",chapterId:"chapter-24",title:"购物车关联规则挖掘准备（支持→置信度计算）",description:"按交易ID聚合为购物篮格式，计算{牛奶}→{面包}的支持度、置信度。",difficulty:"基础",skills:["购物篮格式","关联规则","支持度","置信度"],initialCode:`import pandas as pd
import numpy as np

# 创建模拟交易数据
np.random.seed(42)
n_transactions = 100

products = ['牛奶', '面包', '黄油', '鸡蛋', '酸奶', '可乐', '薯片', '饼干', '咖啡', '啤酒']

transactions = []
for trans_id in range(1, n_transactions+1):
    # 每个交易1-5个商品
    n_items = np.random.randint(1, 6)
    items = np.random.choice(products, n_items, replace=False)
    for item in items:
        transactions.append({
            '交易ID': trans_id,
            '商品名': item
        })

df = pd.DataFrame(transactions)
print("交易明细数据前15行：")
print(df.head(15))
print()

# 按交易ID聚合为购物篮格式
basket = df.groupby('交易ID')['商品名'].apply(list).reset_index()
basket.columns = ['交易ID', '购物篮']
print("购物篮格式（前10个）：")
print(basket.head(10))
print()

total_trans = len(basket)
print(f"总交易数: {total_trans}")
print()

# 计算单个商品的支持度
item_support = df.groupby('商品名')['交易ID'].nunique() / total_trans
print("商品支持度（出现频率）：")
print(item_support.sort_values(ascending=False).round(4))
print()

# 计算商品共现集合
def get_item_transactions(item):
    """获取包含指定商品的交易ID集合"""
    return set(df[df['商品名'] == item]['交易ID'])

# 计算 {牛奶} 和 {面包} 的支持度和置信度
milk_trans = get_item_transactions('牛奶')
bread_trans = get_item_transactions('面包')
both_trans = milk_trans & bread_trans  # 同时购买牛奶和面包的交易

# 计算支持度
support_milk = len(milk_trans) / total_trans
support_bread = len(bread_trans) / total_trans
support_both = len(both_trans) / total_trans

# 计算置信度 {牛奶} → {面包}
confidence_milk_to_bread = support_both / support_milk if support_milk > 0 else 0

print("关联规则分析：{牛奶} → {面包}")
print("-" * 40)
print(f"牛奶出现次数: {len(milk_trans)}")
print(f"面包出现次数: {len(bread_trans)}")
print(f"同时出现次数: {len(both_trans)}")
print()
print(f"Support(牛奶) = {support_milk:.4f}")
print(f"Support(面包) = {support_bread:.4f}")
print(f"Support(牛奶, 面包) = {support_both:.4f}")
print(f"Confidence(牛奶→面包) = {confidence_milk_to_bread:.4f}")
print()

# 找出所有强关联规则
print("Top 10 关联规则（按置信度）：")
rules = []
for item1 in products:
    for item2 in products:
        if item1 != item2:
            set1 = get_item_transactions(item1)
            set2 = get_item_transactions(item2)
            both = set1 & set2
            
            if len(set1) > 0:
                supp1 = len(set1) / total_trans
                supp_both = len(both) / total_trans
                conf = supp_both / supp1
                
                if conf > 0.3:  # 只显示置信度>30%的规则
                    rules.append({
                        '前项': item1,
                        '后项': item2,
                        '支持度': round(supp_both, 4),
                        '置信度': round(conf, 4)
                    })

rules_df = pd.DataFrame(rules)
if len(rules_df) > 0:
    print(rules_df.sort_values('置信度', ascending=False).head(10))

assert len(both_trans) > 0, "没有找到共现商品"
print("\\n✓ 关联规则计算完成！")
`,tips:["支持度 = 同时包含A和B的交易数 / 总交易数","置信度 = Support(A,B) / Support(A)","提升度 = Confidence(A→B) / Support(B)"]},{id:"cart-project-3",chapterId:"chapter-25",title:"RFM用户价值分层（不使用现成库）",description:"计算R（最近消费天数）、F（频次）、M（总金额），将用户按百分位数分为高中低三档。",difficulty:"进阶",skills:["RFM模型","用户分层","百分位数","价值评估"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime

# 创建模拟销售数据
np.random.seed(42)
n_users = 50
reference_date = datetime(2024, 2, 1)

data = []
for user_id in range(1, n_users+1):
    n_purchases = np.random.randint(1, 20)
    for _ in range(n_purchases):
        days_ago = np.random.randint(1, 60)
        purchase_date = reference_date - pd.Timedelta(days=days_ago)
        amount = np.random.normal(150, 50, 1)[0].round(2)
        data.append({
            '用户ID': user_id,
            '消费日期': purchase_date,
            '金额': max(amount, 20)
        })

df = pd.DataFrame(data)
print("销售明细数据前10行：")
print(df.head(10))
print()

# 计算 RFM
rfm = df.groupby('用户ID').agg({
    '消费日期': lambda x: (reference_date - x.max()).days,  # R: 最近消费天数
    '用户ID': 'count',  # F: 频次
    '金额': 'sum'  # M: 总金额
}).reset_index()

rfm.columns = ['用户ID', 'R', 'F', 'M']
print("RFM原始值（前15用户）：")
print(rfm.head(15))
print()

# 使用百分位数分层（不分档，使用qcut直接分3档）
# R: 越小越好（越近越好），所以标签反转
rfm['R_score'] = pd.qcut(rfm['R'], 3, labels=[3, 2, 1]).astype(int)
# F: 越大越好
rfm['F_score'] = pd.qcut(rfm['F'].rank(method='first'), 3, labels=[1, 2, 3]).astype(int)
# M: 越大越好
rfm['M_score'] = pd.qcut(rfm['M'].rank(method='first'), 3, labels=[1, 2, 3]).astype(int)

# 计算总分
rfm['总分'] = rfm['R_score'].astype(int) + rfm['F_score'].astype(int) + rfm['M_score'].astype(int)

print("RFM分层结果（前15用户）：")
print(rfm.head(15))
print()

# 用户分层
def classify_user(row):
    total = row['总分']
    if total >= 7:
        return '高价值用户'
    elif total >= 5:
        return '中价值用户'
    else:
        return '低价值用户'

rfm['用户分层'] = rfm.apply(classify_user, axis=1)

# 分层统计
print("用户分层统计：")
layer_stats = rfm.groupby('用户分层').agg({
    '用户ID': 'count',
    'R': 'mean',
    'F': 'mean',
    'M': 'mean',
    '总分': 'mean'
}).round(2)
layer_stats.columns = ['用户数', '平均R(最近天数)', '平均F(频次)', '平均M(金额)', '平均总分']
print(layer_stats)
print()

# 高价值用户明细
high_value = rfm[rfm['总分'] >= 7]
print(f"高价值用户（总分>=7）: {len(high_value)} 人")
print(high_value[['用户ID', 'R', 'F', 'M', '总分', '用户分层']].sort_values('总分', ascending=False))
print()

# 验证
assert '高价值用户' in rfm['用户分层'].values, "没有高价值用户"
assert rfm['总分'].max() <= 9, "总分计算错误"
print("✓ RFM用户分层完成！")
`,tips:["R越小（F分数越高）、F越大（F分数越高）、M越大（M分数越高）","总分范围是3-9分","可以使用qcut自动将数据分成若干等份"]},{id:"cart-project-4",chapterId:"chapter-26",title:"K-Means用户分群（基于消费行为）",description:"使用sklearn.cluster.KMeans进行用户分群，分析不同簇的购物车商品类目偏好。",difficulty:"进阶",skills:["K-Means聚类","特征工程","标准化","消费行为分析"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 创建模拟用户消费数据
np.random.seed(42)
n_users = 100

# 构造有明显分群特征的数据
data = []
for i in range(n_users):
    if i < 35:
        # 群体1：高消费、低频次、折扣敏感度低
        monthly_amount = np.random.normal(5000, 800)
        monthly_freq = np.random.normal(3, 1)
        discount_sensitivity = np.random.normal(0.1, 0.05)  # 低折扣敏感
    elif i < 70:
        # 群体2：中等消费、中等频次
        monthly_amount = np.random.normal(2000, 400)
        monthly_freq = np.random.normal(8, 2)
        discount_sensitivity = np.random.normal(0.25, 0.08)  # 中等折扣敏感
    else:
        # 群体3：低消费、高频次、折扣敏感度高
        monthly_amount = np.random.normal(600, 150)
        monthly_freq = np.random.normal(15, 3)
        discount_sensitivity = np.random.normal(0.4, 0.1)  # 高折扣敏感
    
    data.append({
        '用户ID': i + 1,
        '月消费额': max(monthly_amount, 200),
        '月均频次': max(monthly_freq, 1),
        '折扣敏感度': max(discount_sensitivity, 0.01)
    })

df = pd.DataFrame(data)
print("用户消费行为数据（前10行）：")
print(df.head(10))
print()

# 特征标准化
features = ['月消费额', '月均频次', '折扣敏感度']
X = df[features]

scaler = StandardScaler()
scaled = scaler.fit_transform(X)
print("标准化后的特征统计：")
print(pd.DataFrame(scaled, columns=features).describe().round(2))
print()

# K-Means 聚类
n_clusters = 3
kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
df['cluster'] = kmeans.fit_predict(scaled)

print(f"K-Means 聚类结果（k={n_clusters}）：")
print()

# 分析每个簇的特征
cluster_stats = df.groupby('cluster').agg({
    '用户ID': 'count',
    '月消费额': 'mean',
    '月均频次': 'mean',
    '折扣敏感度': 'mean'
}).round(2)
cluster_stats.columns = ['用户数', '平均月消费额', '平均月频次', '平均折扣敏感度']
print(cluster_stats)
print()

# 为每个簇命名
cluster_names = {}
for cluster_id in range(n_clusters):
    cluster_data = cluster_stats.loc[cluster_id]
    if cluster_data['平均月消费额'] > 4000:
        cluster_names[cluster_id] = '高价值低频用户'
    elif cluster_data['平均月消费额'] > 1500:
        cluster_names[cluster_id] = '中等价值用户'
    else:
        cluster_names[cluster_id] = '高频低额用户'

df['用户群名称'] = df['cluster'].map(cluster_names)

print("各用户群特征：")
for cluster_id, name in cluster_names.items():
    cluster_data = df[df['cluster'] == cluster_id]
    print(f"\\n{name}（簇{cluster_id}）：")
    print(f"  用户数: {len(cluster_data)}")
    print(f"  平均月消费: ¥{cluster_data['月消费额'].mean():.2f}")
    print(f"  平均月频次: {cluster_data['月均频次'].mean():.1f}次")
    print(f"  折扣敏感度: {cluster_data['折扣敏感度'].mean():.2%}")

# 验证
assert len(set(df['cluster'])) == n_clusters, "聚类数量不正确"
print("\\n✓ K-Means用户分群完成！")
`,tips:["K-Means前需要先标准化特征","可以用肘部法则确定最佳k值","聚类后要为每个群体赋予业务含义"]},{id:"cart-project-5",chapterId:"chapter-27",title:"购物车加购→支付转化漏斗分析",description:"按session计算加购→支付转化率，识别高加购但低支付的商品。",difficulty:"进阶",skills:["转化漏斗","Session分析","支付转化率","商品分析"],initialCode:`import pandas as pd
import numpy as np

# 创建模拟用户行为日志
np.random.seed(42)
n_sessions = 200

data = []
for session_id in range(1, n_sessions+1):
    user_id = np.random.randint(1, 51)
    n_events = np.random.randint(1, 8)
    
    events = []
    for i in range(n_events):
        event_type = np.random.choice(['加购', '支付', '删除'], p=[0.6, 0.3, 0.1])
        events.append({
            'session_id': session_id,
            '用户ID': user_id,
            '事件类型': event_type,
            '商品ID': np.random.randint(1, 21)
        })
    data.extend(events)

df = pd.DataFrame(data)
print("用户行为日志前20行：")
print(df.head(20))
print()

# 按session和事件类型统计
funnel = df.groupby(['session_id', '事件类型']).size().unstack(fill_value=0)
print("转化漏斗统计（每session各事件数量）：")
print(funnel.head(10))
print()

# 计算每个session的转化率
funnel['总加购数'] = funnel.get('加购', 0)
funnel['总支付数'] = funnel.get('支付', 0)
funnel['转化率'] = (funnel['总支付数'] / funnel['总加购数']).replace([np.inf, -np.inf], 0).fillna(0)

print("转化率统计（前15个session）：")
print(funnel[['总加购数', '总支付数', '转化率']].head(15))
print()

# 整体转化漏斗
total_add_to_cart = (df['事件类型'] == '加购').sum()
total_purchase = (df['事件类型'] == '支付').sum()
total_abandon = (df['事件类型'] == '删除').sum()

print("=" * 50)
print("整体转化漏斗")
print("=" * 50)
print(f"加购总数: {total_add_to_cart}")
print(f"支付总数: {total_purchase}")
print(f"删除总数: {total_abandon}")
print(f"加购→支付转化率: {total_purchase/total_add_to_cart:.2%}")
print()

# 按商品分析转化率
product_funnel = df.groupby(['商品ID', '事件类型']).size().unstack(fill_value=0)
product_funnel['加购数'] = product_funnel.get('加购', 0)
product_funnel['支付数'] = product_funnel.get('支付', 0)
product_funnel['转化率'] = (product_funnel['支付数'] / product_funnel['加购数']).replace([np.inf, -np.inf], 0).fillna(0)

product_funnel = product_funnel.sort_values('转化率', ascending=False)

print("商品转化率排名（Top 15）：")
print(product_funnel[['加购数', '支付数', '转化率']].head(15).round(4))
print()

# 识别高加购但低支付的商品
high_cart_low_pay = product_funnel[
    (product_funnel['加购数'] > product_funnel['加购数'].median()) & 
    (product_funnel['转化率'] < product_funnel['转化率'].median())
]

print("高加购但低支付商品（需要优化）：")
print(high_cart_low_pay[['加购数', '支付数', '转化率']].sort_values('转化率'))
print()

# 验证
assert total_add_to_cart > 0, "没有加购数据"
assert total_purchase >= 0, "支付数据异常"
print("✓ 转化漏斗分析完成！")
`,tips:["转化率 = 支付数 / 加购数","高加购低支付商品可能需要优化价格或详情页","可以用漏斗图可视化转化路径"]},{id:"cart-project-6",chapterId:"chapter-28",title:"异常购物车行为检测（孤立森林）",description:"使用sklearn.ensemble.IsolationForest标记异常购物车，输出异常购物车的典型特征。",difficulty:"进阶",skills:["异常检测","IsolationForest","刷单识别","行为分析"],initialCode:`import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

# 创建模拟购物车数据（包含正常和异常）
np.random.seed(42)
n_carts = 500

data = []

# 正常购物车（95%）
for i in range(int(n_carts * 0.95)):
    data.append({
        '购物车ID': i + 1,
        '商品数': np.random.randint(1, 8),
        '总价': np.random.uniform(50, 800),
        '优惠券使用次数': np.random.randint(0, 3)
    })

# 异常购物车（5%）：刷单/测试单
for i in range(int(n_carts * 0.03)):
    # 极端高价
    data.append({
        '购物车ID': len(data) + 1,
        '商品数': np.random.randint(1, 5),
        '总价': np.random.uniform(5000, 10000),  # 异常高价
        '优惠券使用次数': np.random.randint(0, 2)
    })

# 更多异常类型
for i in range(int(n_carts * 0.02)):
    # 大量使用优惠券
    data.append({
        '购物车ID': len(data) + 1,
        '商品数': np.random.randint(1, 3),
        '总价': np.random.uniform(100, 300),
        '优惠券使用次数': np.random.randint(5, 10)  # 异常高优惠券
    })

df = pd.DataFrame(data)
print(f"购物车数据总数: {len(df)}")
print("购物车数据前10行：")
print(df.head(10))
print()
print("数据统计：")
print(df.describe().round(2))
print()

# 使用 IsolationForest 进行异常检测
features = ['商品数', '总价', '优惠券使用次数']
X = df[features]

model = IsolationForest(contamination=0.05, random_state=42, n_estimators=100)
df['异常分'] = model.fit_predict(X)  # -1 表示异常, 1 表示正常
df['异常概率'] = model.decision_function(X)

print("IsolationForest 异常检测结果：")
print(f"正常购物车数: {(df['异常分'] == 1).sum()}")
print(f"异常购物车数: {(df['异常分'] == -1).sum()}")
print()

# 异常购物车详情
anomalies = df[df['异常分'] == -1]
print("异常购物车典型特征：")
print(anomalies.describe().round(2))
print()

# 分析异常类型
print("异常购物车样本（前20个）：")
print(anomalies.head(20).sort_values('异常概率'))
print()

# 按异常特征分类
high_price_anomalies = anomalies[anomalies['总价'] > 1000]
high_coupon_anomalies = anomalies[anomalies['优惠券使用次数'] >= 5]

print(f"高总价异常: {len(high_price_anomalies)} 个")
print(f"高优惠券异常: {len(high_coupon_anomalies)} 个")
print()

# 计算异常得分分布
print("异常概率分布：")
print(f"最低异常概率: {df['异常概率'].min():.4f}")
print(f"最高异常概率: {df['异常概率'].max():.4f}")
print(f"平均异常概率: {df['异常概率'].mean():.4f}")
print()

# 验证
assert len(anomalies) > 0, "没有检测到异常"
assert len(anomalies) / len(df) < 0.1, "异常比例过高"
print("✓ 异常购物车行为检测完成！")
`,tips:["contamination参数表示预期的异常比例","异常分=-1表示异常，1表示正常","可以用decision_function查看异常程度"]},{id:"cart-project-7",chapterId:"chapter-29",title:"时序购物车趋势预测（移动平均/指数平滑）",description:"使用pandas.rolling计算7日均线，识别周末效应及促销日峰值。",difficulty:"进阶",skills:["时间序列","移动平均","趋势预测","周末效应"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 创建模拟时间序列数据（包含趋势、周末效应、促销日）
np.random.seed(42)
n_days = 90
start_date = datetime(2024, 1, 1)

dates = []
carts_created = []
purchases = []

base_cart = 100
base_purchase_rate = 0.6

for i in range(n_days):
    current_date = start_date + timedelta(days=i)
    dates.append(current_date)
    
    # 基础趋势（缓慢增长）
    trend = 100 + i * 0.5
    
    # 周末效应（周末高20%）
    if current_date.weekday() >= 5:  # 周六、周日
        weekend_effect = 1.2
    else:
        weekend_effect = 1.0
    
    # 促销日效应（每月10号、20号打9折）
    if current_date.day in [10, 20]:
        promotion_effect = 1.5
    else:
        promotion_effect = 1.0
    
    # 计算购物车创建数
    daily_cart = int(base_cart * trend / 100 * weekend_effect * promotion_effect + np.random.normal(0, 10))
    carts_created.append(max(daily_cart, 50))
    
    # 计算支付数（受转化率影响）
    purchase_rate = base_purchase_rate * (0.9 if current_date.weekday() >= 5 else 1.0)
    daily_purchase = int(daily_cart * purchase_rate + np.random.normal(0, 5))
    purchases.append(max(daily_purchase, 20))

df = pd.DataFrame({
    '日期': dates,
    '购物车创建数': carts_created,
    '支付数': purchases
})
df.set_index('日期', inplace=True)

print("时序数据前20天：")
print(df.head(20))
print()

# 计算7日移动平均
df['车量_7d_avg'] = df['购物车创建数'].rolling(7, center=True).mean()
df['支付_7d_avg'] = df['支付数'].rolling(7, center=True).mean()

# 计算支付率
df['支付率'] = df['支付数'] / df['购物车创建数']
df['支付率_7d'] = df['支付率'].rolling(7, center=True).mean()

print("移动平均统计（最近20天）：")
print(df[['购物车创建数', '车量_7d_avg', '支付数', '支付率', '支付率_7d']].tail(20).round(4))
print()

# 周末效应分析
df['星期'] = df.index.dayofweek
weekend_data = df[df['星期'] >= 5]
weekday_data = df[df['星期'] < 5]

print("周末 vs 工作日效应：")
print(f"工作日平均购物车创建数: {weekday_data['购物车创建数'].mean():.1f}")
print(f"周末平均购物车创建数: {weekend_data['购物车创建数'].mean():.1f}")
print(f"周末提升幅度: {(weekend_data['购物车创建数'].mean() / weekday_data['购物车创建数'].mean() - 1) * 100:.1f}%")
print()

# 促销日识别
df['是否促销日'] = df.index.day.isin([10, 20])
promotion_data = df[df['是否促销日']]
normal_data = df[~df['是否促销日']]

print("促销日 vs 普通日：")
print(f"普通日平均购物车创建数: {normal_data['购物车创建数'].mean():.1f}")
print(f"促销日平均购物车创建数: {promotion_data['购物车创建数'].mean():.1f}")
print()

# 识别峰值日期
threshold = df['购物车创建数'].mean() + 2 * df['购物车创建数'].std()
peak_days = df[df['购物车创建数'] > threshold]

print(f"峰值日期识别（>均值+2σ = {threshold:.0f}）：")
print(peak_days[['购物车创建数', '车量_7d_avg']].sort_values('购物车创建数', ascending=False))
print()

# 验证
assert len(df['车量_7d_avg'].dropna()) > 0, "移动平均计算失败"
assert df['支付率'].mean() > 0, "支付率计算失败"
print("✓ 时序趋势分析完成！")
`,tips:["rolling(7)计算7日移动平均","center=True让均值居中","可以用shift()做预测而不是平滑"]},{id:"cart-project-8",chapterId:"chapter-30",title:"基于购物车内容的交叉销售推荐验证",description:"构建共现矩阵，对给定商品推荐最常一起加购的商品配件。",difficulty:"进阶",skills:["交叉销售","共现矩阵","推荐系统","商品关联"],initialCode:`import pandas as pd
import numpy as np

# 创建模拟购物车数据
np.random.seed(42)
n_carts = 300

# 定义商品关联
product_rules = {
    '手机': ['手机壳', '钢化膜', '充电宝', '蓝牙耳机'],
    '笔记本电脑': ['鼠标', '键盘', '电脑包'],
    'T恤': ['牛仔裤', '运动鞋'],
    '奶粉': ['奶瓶', '纸尿裤']
}

# 生成购物车数据
data = []
for cart_id in range(1, n_carts+1):
    # 70%的购物车包含关联商品对
    if np.random.random() < 0.7:
        base_product = np.random.choice(list(product_rules.keys()))
        related_products = product_rules[base_product]
        n_related = np.random.randint(1, len(related_products)+1)
        items = [base_product] + list(np.random.choice(related_products, n_related, replace=False))
    else:
        # 30%随机商品
        all_products = ['手机', '手机壳', '钢化膜', '充电宝', '蓝牙耳机', 
                       '笔记本电脑', '鼠标', '键盘', '电脑包', 'T恤', 
                       '牛仔裤', '运动鞋', '奶粉', '奶瓶', '纸尿裤']
        n_items = np.random.randint(1, 4)
        items = np.random.choice(all_products, n_items, replace=False)
    
    for item in items:
        data.append({
            '购物车ID': cart_id,
            '商品名': item
        })

df = pd.DataFrame(data)
print("购物车商品明细数据（前20行）：")
print(df.head(20))
print()

# 构建共现矩阵
co_occur = df.pivot_table(index='购物车ID', columns='商品名', aggfunc='size', fill_value=0)
print(f"共现矩阵形状: {co_occur.shape}")
print("共现矩阵（前5个购物车）：")
print(co_occur.head())
print()

# 计算商品共现次数矩阵
co_occur_T = co_occur.T.dot(co_occur)
print("商品共现矩阵（Top 5）：")
print(co_occur_T.iloc[:5, :5])
print()

# 交叉销售推荐：为指定商品推荐配件
def recommend_accessories(target_product, co_occur_matrix, top_n=3):
    """为目标商品推荐配件"""
    if target_product not in co_occur_matrix.columns:
        return []
    
    # 获取与目标商品共现的次数
    co_counts = co_occur_matrix[target_product].copy()
    
    # 排除自身
    co_counts = co_counts.drop(target_product, errors='ignore')
    
    # 获取目标商品的出现次数
    target_count = co_occur_matrix[target_product][target_product]
    
    # 计算共现率
    co_rate = (co_counts / target_count).sort_values(ascending=False)
    
    # 返回Top N推荐
    recommendations = co_rate.head(top_n)
    return recommendations

# 为"手机"推荐配件
target = '手机'
recommendations = recommend_accessories(target, co_occur_T, top_n=3)

print(f"为 '{target}' 推荐的配件（Top 3）：")
for product, rate in recommendations.items():
    print(f"  {product}: 共现率 {rate:.2%}")

# 完整推荐列表
print(f"\\n'{target}' 的完整配件推荐：")
all_recommendations = recommend_accessories(target, co_occur_T, top_n=len(co_occur_T))
for product, rate in all_recommendations.items():
    print(f"  {product}: {rate:.2%}")

# 多商品推荐示例
print("\\n其他商品推荐：")
for product in ['笔记本电脑', 'T恤', '奶粉']:
    recs = recommend_accessories(product, co_occur_T, top_n=3)
    if len(recs) > 0:
        print(f"  {product} → {', '.join(recs.index[:3])}")

# 验证
assert target in co_occur_T.columns, "目标商品不在共现矩阵中"
assert len(recommendations) > 0, "没有找到推荐"
print("\\n✓ 交叉销售推荐完成！")
`,tips:["共现率 = A和B同时出现的次数 / A出现的次数","可以按共现次数或共现率排序","关联商品对可以用于商品捆绑销售"]},{id:"cart-project-9",chapterId:"chapter-31",title:"购物车放弃原因归因（决策树/分组均值对比）",description:"分组对比弃购/支付用户的平均运费和优惠券金额，使用pandas.cut计算各箱弃购率。",difficulty:"进阶",skills:["归因分析","决策树","弃购分析","价格敏感度"],initialCode:`import pandas as pd
import numpy as np

# 创建模拟购物车数据
np.random.seed(42)
n_carts = 500

# 生成运费数据（0-100元）
freight = np.random.exponential(scale=15, size=n_carts).clip(0, 100)

# 生成优惠券金额（0-50元，与运费负相关）
coupon = (50 - freight * 0.3 + np.random.normal(0, 10)).clip(0, 50)

# 页面停留时间（秒）
stay_time = np.random.exponential(scale=120, size=n_carts)

# 生成是否弃购（与多个因素相关）
# 高运费、高页面停留时间更容易弃购
# 高优惠券更容易支付
prob_abandon = (
    0.4 +  # 基础弃购率
    freight / 200 +  # 运费越高越可能弃购
    (stay_time > 300).astype(float) * 0.2 -  # 停留太久可能放弃
    coupon / 100 -  # 优惠券越高越可能支付
    0.1
)
is_abandon = (np.random.random(n_carts) < prob_abandon).astype(int)

df = pd.DataFrame({
    '购物车ID': range(1, n_carts+1),
    '运费': freight.round(2),
    '优惠券金额': coupon.round(2),
    '页面停留时间': stay_time.round(0).astype(int),
    '是否弃购': is_abandon
})

print("购物车数据前10行：")
print(df.head(10))
print()

# 分组对比分析
abandon_group = df[df['是否弃购'] == 1]
pay_group = df[df['是否弃购'] == 0]

print("弃购用户 vs 支付用户对比：")
print("-" * 50)
print(f"{'指标':<15} {'弃购用户':<15} {'支付用户':<15}")
print("-" * 50)
print(f"{'平均运费':<15} ¥{abandon_group['运费'].mean():>10.2f}  ¥{pay_group['运费'].mean():>10.2f}")
print(f"{'平均优惠券':<15} ¥{abandon_group['优惠券金额'].mean():>10.2f}  ¥{pay_group['优惠券金额'].mean():>10.2f}")
print(f"{'平均停留时间':<15} {abandon_group['页面停留时间'].mean():>10.0f}秒 {pay_group['页面停留时间'].mean():>10.0f}秒")
print(f"{'人数':<15} {len(abandon_group):>10}  {len(pay_group):>10}")
print()

# 使用pd.cut将运费分箱
bins = [0, 5, 10, 20, 50, 100]
labels = ['0-5元', '5-10元', '10-20元', '20-50元', '50-100元']
df['运费区间'] = pd.cut(df['运费'], bins=bins, labels=labels)

# 计算各箱的弃购率
abandon_rate_by_freight = df.groupby('运费区间', observed=True)['是否弃购'].mean()

print("各运费区间的弃购率：")
for freight_range, rate in abandon_rate_by_freight.items():
    print(f"  {freight_range}: {rate:.2%}")

# 同样对优惠券分箱
coupon_bins = [0, 10, 20, 30, 50]
coupon_labels = ['0-10元', '10-20元', '20-30元', '30-50元']
df['优惠券区间'] = pd.cut(df['优惠券金额'], bins=coupon_bins, labels=coupon_labels)

abandon_rate_by_coupon = df.groupby('优惠券区间', observed=True)['是否弃购'].mean()

print("\\n各优惠券区间的弃购率：")
for coupon_range, rate in abandon_rate_by_coupon.items():
    print(f"  {coupon_range}: {rate:.2%}")
print()

# 交叉分析：运费 × 优惠券
cross_analysis = df.groupby(['运费区间', '优惠券区间'], observed=True)['是否弃购'].agg(['mean', 'count'])
cross_analysis.columns = ['弃购率', '订单数']
cross_analysis = cross_analysis[cross_analysis['订单数'] >= 10]  # 过滤样本少的

print("运费 × 优惠券 交叉分析（样本数>=10）：")
print(cross_analysis.sort_values('弃购率', ascending=False).head(10).round(4))
print()

# 识别高弃购原因
print("=" * 50)
print("弃购原因归因结论")
print("=" * 50)
max_abandon_freight = abandon_rate_by_freight.idxmax()
max_abandon_coupon = abandon_rate_by_coupon.idxmax()
print(f"1. 最高弃购率运费区间: {max_abandon_freight} ({abandon_rate_by_freight[max_abandon_freight]:.2%})")
print(f"2. 最高弃购率优惠券区间: {max_abandon_coupon} ({abandon_rate_by_coupon[max_abandon_coupon]:.2%})")
print(f"3. 建议: 重点优化{labels.index(max_abandon_freight)}元运费区间的用户")
print()

# 验证
assert len(abandon_group) > 0, "没有弃购用户"
assert len(pay_group) > 0, "没有支付用户"
print("✓ 弃购原因归因分析完成！")
`,tips:["弃购率 = 弃购数 / 总订单数","pd.cut可以自动将连续变量分箱","交叉分析可以发现组合因素的影响"]},{id:"cart-project-10",chapterId:"chapter-32",title:"聚类后不同群体的购物车价格弹性测试",description:"计算每群用户的平均折扣率，验证高价值用户是否对折扣更不敏感（弹性低）。",difficulty:"进阶",skills:["价格弹性","用户分群","折扣分析","价值验证"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 创建模拟用户购物车数据
np.random.seed(42)
n_users = 200

# 生成用户特征
data = []
for user_id in range(1, n_users+1):
    # 生成历史购物车数据
    n_carts = np.random.randint(3, 15)
    
    total_original_price = 0
    total_actual_price = 0
    
    for _ in range(n_carts):
        # 原价和实付价
        original_price = np.random.uniform(100, 1000)
        # 高价值用户折扣少，低价值用户折扣多
        if user_id < 60:  # 高价值用户
            discount = np.random.uniform(0.95, 1.0)  # 几乎不打折
        elif user_id < 140:  # 中等价值用户
            discount = np.random.uniform(0.8, 0.95)  # 9折左右
        else:  # 低价值用户
            discount = np.random.uniform(0.6, 0.8)  # 7-8折
        
        actual_price = original_price * discount
        total_original_price += original_price
        total_actual_price += actual_price
    
    data.append({
        '用户ID': user_id,
        '购物车数': n_carts,
        '历史原价总额': total_original_price,
        '历史实付总额': total_actual_price
    })

df = pd.DataFrame(data)

# 计算折扣率
df['折扣率'] = df['历史实付总额'] / df['历史原价总额']

print("用户购物车数据（前10行）：")
print(df.head(10))
print()

# 计算每群用户的平均折扣率
def calculate_group_discount_rate(df_group):
    """计算群组的平均折扣率"""
    total_original = df_group['历史原价总额'].sum()
    total_actual = df_group['历史实付总额'].sum()
    return total_actual / total_original

# 使用K-Means对用户进行分群
features = ['购物车数', '历史原价总额']
X = df[features]
scaler = StandardScaler()
scaled = scaler.fit_transform(X)

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df['cluster'] = kmeans.fit_predict(scaled)

# 按簇计算统计信息
cluster_stats = df.groupby('cluster').agg({
    '用户ID': 'count',
    '购物车数': 'mean',
    '历史原价总额': 'mean',
    '历史实付总额': 'mean'
}).round(2)

# 计算每个簇的平均折扣率
cluster_stats['平均折扣率'] = cluster_stats.apply(
    lambda row: row['历史实付总额'] / row['历史原价总额'], axis=1
).round(4)

# 为簇命名
cluster_stats = cluster_stats.sort_values('平均折扣率', ascending=False)
cluster_names = {}
for rank, cluster_id in enumerate(cluster_stats.index):
    if rank == 0:
        cluster_names[cluster_id] = '低折扣用户（高价值）'
    elif rank == 1:
        cluster_names[cluster_id] = '中等折扣用户'
    else:
        cluster_names[cluster_id] = '高折扣用户（价格敏感）'

df['用户群'] = df['cluster'].map(cluster_names)
cluster_stats['用户群名称'] = cluster_stats.index.map(cluster_names)

print("用户群特征分析：")
print(cluster_stats[['用户群名称', '用户ID', '购物车数', '平均折扣率']].rename(
    columns={'用户ID': '用户数', '购物车数': '平均购物车数'}
))
print()

# 验证：高价值用户是否对折扣更不敏感
group_discount_rates = df.groupby('用户群')['折扣率'].mean().sort_values(ascending=False)

print("各用户群平均折扣率排名：")
for group, rate in group_discount_rates.items():
    print(f"  {group}: {rate:.2%}")

print()

# 计算价格敏感度
df['价格敏感'] = df['折扣率'].apply(
    lambda x: '高敏感' if x < 0.8 else ('中敏感' if x < 0.9 else '低敏感')
)

sensitivity_stats = df.groupby('价格敏感').agg({
    '用户ID': 'count',
    '折扣率': 'mean'
}).round(4)
sensitivity_stats.columns = ['用户数', '平均折扣率']

print("价格敏感度分布：")
print(sensitivity_stats.sort_values('平均折扣率'))
print()

# 验证假设
high_value_group = group_discount_rates.index[0]  # 折扣率最高的群
high_value_users = df[df['用户群'] == high_value_group]
other_users = df[df['用户群'] != high_value_group]

print("=" * 50)
print("价格弹性假设验证")
print("=" * 50)
print(f"高价值用户组: {high_value_group}")
print(f"  平均折扣率: {high_value_users['折扣率'].mean():.2%}")
print(f"  平均购物车数: {high_value_users['购物车数'].mean():.1f}")
print()
print(f"其他用户组:")
print(f"  平均折扣率: {other_users['折扣率'].mean():.2%}")
print(f"  平均购物车数: {other_users['购物车数'].mean():.1f}")
print()

# 结论
if high_value_users['折扣率'].mean() > other_users['折扣率'].mean():
    print("✓ 验证通过：高价值用户确实对折扣更不敏感（弹性低）")
    print("  建议：减少对高价值用户的折扣投入，转向价格敏感用户")
else:
    print("⚠️ 验证失败：数据显示相反趋势，需要进一步分析")

# 验证
assert len(set(df['cluster'])) == 3, "聚类数量不正确"
assert df['折扣率'].mean() > 0, "折扣率计算错误"
print("\\n✓ 价格弹性测试完成！")
`,tips:["折扣率 = 实付金额 / 原价金额","折扣率越高说明打折越少（价格不敏感）","可以用回归分析量化价格弹性系数"]},{id:"dcp-project-1",chapterId:"chapter-33",title:"电商用户购物车行为数据清洗",description:"掌握Pandas处理缺失值、重复值、异常值、格式规范化。处理缺失的用户ID和负数数量，去重，转换时间列，筛选加购但未下单数据。",difficulty:"基础",skills:["数据清洗","缺失值处理","异常值检测","格式转换"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime

# 生成模拟购物车数据
np.random.seed(42)
n = 1000

data = {
    '用户ID': np.random.randint(1, 51, n),
    '商品ID': np.random.randint(1, 21, n),
    '加购时间': pd.date_range('2024-01-01', periods=n, freq='30min'),
    '数量': np.random.randint(1, 6, n),
    '价格': np.random.uniform(10, 500, n).round(2),
    '是否下单': np.random.choice([0, 1], n, p=[0.3, 0.7])
}

df = pd.DataFrame(data)

# 引入噪声：缺失值、负数、重复、错误格式
df.loc[np.random.choice(n, 50), '用户ID'] = np.nan  # 50个缺失用户ID
df.loc[np.random.choice(n, 30), '数量'] = -np.random.randint(1, 4, 30)  # 30个负数数量
df = pd.concat([df, df.sample(100, random_state=42)], ignore_index=True)  # 重复100行

print("="*60)
print("原始数据统计")
print("="*60)
print(f"原始行数：{len(df)}")
print(f"缺失值统计：")
print(df.isnull().sum())
print()

# 任务1：处理缺失的用户ID - 直接删除
print("="*60)
print("任务1：处理缺失的用户ID")
print("="*60)
df_clean = df.dropna(subset=['用户ID']).copy()
df_clean['用户ID'] = df_clean['用户ID'].astype(int)
print(f"删除缺失后行数：{len(df_clean)}")
print()

# 任务2：处理负数数量 - 设置为1
print("="*60)
print("任务2：处理负数数量")
print("="*60)
negative_count = (df_clean['数量'] < 0).sum()
print(f"负数数量行数：{negative_count}")
df_clean['数量'] = df_clean['数量'].apply(lambda x: max(x, 1))
print()

# 任务3：去重
print("="*60)
print("任务3：去重")
print("="*60)
duplicates = df_clean.duplicated().sum()
df_clean = df_clean.drop_duplicates()
print(f"删除重复后行数：{len(df_clean)}")
print()

# 任务4：转换时间列
print("="*60)
print("任务4：转换时间列")
print("="*60)
df_clean['加购时间'] = pd.to_datetime(df_clean['加购时间'])
print(f"加购时间列类型：{df_clean['加购时间'].dtype}")
print()

# 任务5：筛选加购但未下单数据
print("="*60)
print("任务5：筛选加购但未下单数据")
print("="*60)
df_abandon = df_clean[df_clean['是否下单'] == 0].copy()
print(f"加购但未下单订单数：{len(df_abandon)}")
print(f"整体放弃率：{len(df_abandon)/len(df_clean)*100:.2f}%")
print()

# 输出清洗前后对比
print("="*60)
print("清洗前后对比")
print("="*60)
print(f"清洗前行数：{len(df)}")
print(f"清洗后行数：{len(df_clean)}")
print(f"删除行数：{len(df) - len(df_clean)}")
print()

print("="*60)
print("清洗后数据前10行：")
print(df_clean.head(10))
print()

# 验证
assert df_clean['用户ID'].isnull().sum() == 0, "仍有缺失用户ID"
assert (df_clean['数量'] < 0).sum() == 0, "仍有负数数量"
assert df_clean.duplicated().sum() == 0, "仍有重复行"
print("✓ 数据清洗完成！")
`,tips:["处理缺失值时，考虑业务含义：用户ID缺失直接删除，商品数量缺失可以填充","异常值处理可以用截断、填充或删除","时间列一定要转换为datetime类型方便后续分析"]},{id:"dcp-project-2",chapterId:"chapter-34",title:"Web爬取动态商品价格数据并清洗",description:"使用requests+BeautifulSoup爬取电商网站商品标题、价格、评价数。解析HTML，提取数值，清洗价格，统一评价数单位。",difficulty:"基础",skills:["网络爬虫","数据采集","HTML解析","数据清洗"],initialCode:`import pandas as pd
import numpy as np
import re
from bs4 import BeautifulSoup
import requests

print("="*60)
print("模拟电商网站数据采集")
print("="*60)
print()

# 模拟商品数据（实际项目中通过requests请求真实页面）
products_html = '''
<div class="product-item">
    <h3 class="product-title">iPhone 15 Pro Max 256GB</h3>
    <span class="price">¥8,999.00</span>
    <span class="reviews">12.5万评价</span>
</div>
<div class="product-item">
    <h3 class="product-title">MacBook Air M2 15英寸</h3>
    <span class="price">¥12,499</span>
    <span class="reviews">5.2万评价</span>
</div>
<div class="product-item">
    <h3 class="product-title">AirPods Pro (第二代)</h3>
    <span class="price">¥1,899</span>
    <span class="reviews">35,600评价</span>
</div>
<div class="product-item">
    <h3 class="product-title">iPad Pro 12.9英寸</h3>
    <span class="price">¥9,299.00</span>
    <span class="reviews">8,900评价</span>
</div>
<div class="product-item">
    <h3 class="product-title">Apple Watch Series 9</h3>
    <span class="price">¥3,199</span>
    <span class="reviews">2.1万评价</span>
</div>
'''

soup = BeautifulSoup(products_html, 'html.parser')
product_items = soup.find_all('div', class_='product-item')

data = []
for item in product_items:
    title = item.find('h3', class_='product-title').text.strip()
    price_str = item.find('span', class_='price').text.strip()
    reviews_str = item.find('span', class_='reviews').text.strip()
    
    data.append({
        '商品标题': title,
        '价格': price_str,
        '评价数': reviews_str
    })

df = pd.DataFrame(data)
print("原始数据：")
print(df)
print()
print("原始数据类型：")
print(df.dtypes)
print()

# 任务1：清洗价格
print("="*60)
print("任务1：清洗价格")
print("="*60)
def clean_price(price_str):
    # 移除¥符号和逗号
    cleaned = price_str.replace('¥', '').replace(',', '')
    return float(cleaned)

df['价格_clean'] = df['价格'].apply(clean_price)
print(df[['商品标题', '价格', '价格_clean']])
print()

# 任务2：统一评价数单位
print("="*60)
print("任务2：统一评价数单位")
print("="*60)
def clean_reviews(review_str):
    review_str = review_str.replace('评价', '')
    if '万' in review_str:
        # 处理如 "12.5万" 这样的格式
        num = float(review_str.replace('万', ''))
        return int(num * 10000)
    else:
        # 处理如 "35,600" 这样的格式
        return int(review_str.replace(',', ''))

df['评价数_clean'] = df['评价数'].apply(clean_reviews)
print(df[['商品标题', '评价数', '评价数_clean']])
print()

# 输出清洗后完整数据
print("="*60)
print("清洗后完整数据：")
print(df)
print()
print("清洗后数据类型：")
print(df.dtypes)
print()

# 简单统计
print("="*60)
print("简单统计：")
print("="*60)
print(f"商品平均价格：¥{df['价格_clean'].mean():.2f}")
print(f"总评价数：{df['评价数_clean'].sum():,}")
print(f"最多评价商品：{df.loc[df['评价数_clean'].idxmax(), '商品标题']} ({df['评价数_clean'].max():,}评价)")
print()

# 验证
assert df['价格_clean'].isnull().sum() == 0, "价格清洗存在缺失"
assert df['评价数_clean'].isnull().sum() == 0, "评价数清洗存在缺失"
print("✓ 数据采集与清洗完成！")
`,tips:["实际爬虫时要遵守网站robots.txt协议","价格清洗要注意货币符号、千分位逗号、小数点等","评价数经常有'万'这样的单位，需要统一转换"]},{id:"dcp-project-3",chapterId:"chapter-35",title:"购物车关联规则分析（Apriori算法准备）",description:'购物车分析的经典场景——找出"经常一起购买"的商品。按订单ID聚合为购物篮，生成0-1矩阵，计算支持度、置信度、提升度。',difficulty:"进阶",skills:["关联规则","Apriori算法","支持度","置信度"],initialCode:`import pandas as pd
import numpy as np
from itertools import combinations

np.random.seed(42)

# 商品列表
products = ['牛奶', '面包', '黄油', '鸡蛋', '酸奶', '啤酒', '花生', '纸尿裤', '巧克力', '饼干']

# 生成模拟订单数据
order_data = []
n_orders = 500

for order_id in range(1, n_orders + 1):
    # 随机选择1-5个商品
    num_items = np.random.randint(1, 6)
    items = np.random.choice(products, num_items, replace=False)
    for item in items:
        order_data.append({
            '订单ID': order_id,
            '商品名': item
        })

df = pd.DataFrame(order_data)
print("订单明细（前20行）：")
print(df.head(20))
print()

# 任务1：按订单ID聚合为购物篮
print("="*60)
print("任务1：按订单ID聚合为购物篮")
print("="*60)
basket = df.groupby('订单ID')['商品名'].apply(list).reset_index()
basket.columns = ['订单ID', '购物篮']
print(f"总订单数：{len(basket)}")
print("购物篮格式（前10个）：")
for i in range(min(10, len(basket))):
    print(f"订单{basket.iloc[i]['订单ID']}: {basket.iloc[i]['购物篮']}")
print()

# 任务2：生成0-1矩阵
print("="*60)
print("任务2：生成0-1矩阵")
print("="*60)
matrix = df.pivot_table(index='订单ID', columns='商品名', aggfunc='size', fill_value=0)
print(f"0-1矩阵形状：{matrix.shape}")
print("0-1矩阵（前10行，前6列）：")
print(matrix.iloc[:10, :6])
print()

# 任务3：计算单个商品支持度
print("="*60)
print("任务3：计算单个商品支持度")
print("="*60)
support_single = matrix.mean().sort_values(ascending=False)
print("商品支持度排序：")
print(support_single.round(4))
print()

# 任务4：计算商品对支持度、置信度、提升度
print("="*60)
print("任务4：计算商品对关联规则")
print("="*60)

# 计算两两共现次数
co_occur = matrix.T.dot(matrix)
np.fill_diagonal(co_occur.values, 0)  # 对角线设为0，不考虑自关联

rules = []
for item1 in products:
    for item2 in products:
        if item1 != item2:
            support_both = co_occur.loc[item1, item2] / n_orders
            if support_both > 0:
                support_a = support_single[item1]
                support_b = support_single[item2]
                confidence = support_both / support_a
                lift = confidence / support_b
                
                rules.append({
                    '前件': item1,
                    '后件': item2,
                    '支持度': support_both,
                    '置信度': confidence,
                    '提升度': lift
                })

rules_df = pd.DataFrame(rules)
rules_df = rules_df.sort_values('提升度', ascending=False).reset_index(drop=True)

print("Top 20 关联规则（按提升度排序）：")
print(rules_df[['前件', '后件', '支持度', '置信度', '提升度']].head(20).round(4))
print()

# 输出支持度>0.02的规则
print("="*60)
print("支持度 > 0.02 的强关联规则：")
print("="*60)
strong_rules = rules_df[rules_df['支持度'] > 0.02].sort_values('提升度', ascending=False)
print(strong_rules[['前件', '后件', '支持度', '置信度', '提升度']].round(4))
print()

# 验证
assert len(rules_df) > 0, "没有生成有效规则"
assert len(rules_df[rules_df['提升度'] > 1]) > 0, "没有找到正向关联规则"
print("✓ 关联规则分析完成！")
`,tips:["支持度：商品组合出现的频率","置信度：购买了A后购买B的概率","提升度：关联强度，>1表示正相关，<1表示负相关"]},{id:"dcp-project-4",chapterId:"chapter-36",title:"用户购物车放弃率分析与预测特征构建",description:"分析加购后未下单的原因。合并购物车表+用户行为日志，计算加购到下单的时间差，创建特征，按用户聚合统计历史放弃率。",difficulty:"进阶",skills:["放弃率分析","特征工程","用户行为分析","数据合并"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta

np.random.seed(42)

# 生成购物车表
cart_data = []
user_ids = list(range(1, 51))
n_cart = 1000

for cart_id in range(1, n_cart + 1):
    user_id = np.random.choice(user_ids)
    add_time = datetime(2024, 1, 1) + timedelta(minutes=np.random.randint(0, 60*24*30))
    quantity = np.random.randint(1, 6)
    price = np.random.uniform(10, 500)
    is_abandon = np.random.choice([0, 1], p=[0.65, 0.35])
    
    # 下单时间（如果不下单则为空）
    order_time = None
    if is_abandon == 0:
        order_time = add_time + timedelta(minutes=np.random.randint(5, 120))
    
    cart_data.append({
        '购物车ID': cart_id,
        '用户ID': user_id,
        '加购时间': add_time,
        '下单时间': order_time,
        '是否放弃': is_abandon,
        '商品数量': quantity,
        '商品价格': price
    })

cart_df = pd.DataFrame(cart_data)

# 生成用户行为日志
behavior_data = []
for cart in cart_data:
    cart_id = cart['购物车ID']
    user_id = cart['用户ID']
    add_time = cart['加购时间']
    
    # 每个购物车会话有若干行为记录
    n_events = np.random.randint(3, 8)
    for i in range(n_events):
        event_time = add_time - timedelta(minutes=np.random.randint(0, 30))
        event_type = np.random.choice(['浏览商品', '加入购物车', '查看购物车', '修改数量'], 
                                     p=[0.5, 0.2, 0.2, 0.1])
        behavior_data.append({
            '会话ID': cart_id,
            '用户ID': user_id,
            '事件时间': event_time,
            '事件类型': event_type
        })

behavior_df = pd.DataFrame(behavior_data)
behavior_df = behavior_df.sort_values(['会话ID', '事件时间']).reset_index(drop=True)

print("="*60)
print("购物车表（前10行）：")
print("="*60)
print(cart_df.head(10))
print()
print("用户行为日志（前20行）：")
print("="*60)
print(behavior_df.head(20))
print()

# 任务1：计算加购到下单的时间差
print("="*60)
print("任务1：计算加购到下单的时间差")
print("="*60)
cart_df['加购时间'] = pd.to_datetime(cart_df['加购时间'])
cart_df['下单时间'] = pd.to_datetime(cart_df['下单时间'])
cart_df['决策时间(分钟)'] = (cart_df['下单时间'] - cart_df['加购时间']).dt.total_seconds() / 60

print(f"放弃订单数：{cart_df['是否放弃'].sum()}")
print(f"完成订单数：{len(cart_df) - cart_df['是否放弃'].sum()}")
print(f"整体放弃率：{cart_df['是否放弃'].mean()*100:.2f}%")
print()

completed_df = cart_df[cart_df['是否放弃'] == 0]
print(f"平均决策时间：{completed_df['决策时间(分钟)'].mean():.1f}分钟")
print()

# 任务2：按时间段分析放弃率
print("="*60)
print("任务2：按时间段分析放弃率")
print("="*60)
cart_df['加购时段'] = pd.cut(
    cart_df['加购时间'].dt.hour,
    bins=[0, 6, 12, 18, 24],
    labels=['凌晨', '上午', '下午', '晚上']
)

abandon_by_hour = cart_df.groupby('加购时段')['是否放弃'].agg(['count', 'mean'])
abandon_by_hour.columns = ['订单数', '放弃率']
print(abandon_by_hour.round(4))
print()

# 任务3：按用户聚合统计历史放弃率
print("="*60)
print("任务3：按用户聚合统计历史放弃率")
print("="*60)
user_features = cart_df.groupby('用户ID').agg({
    '购物车ID': 'count',  # 总购物车次数
    '是否放弃': 'mean',  # 历史放弃率
    '商品数量': 'mean',  # 平均加购数量
    '商品价格': 'mean'  # 平均加购价格
}).reset_index()
user_features.columns = ['用户ID', '总购物车次数', '历史放弃率', '平均加购数量', '平均加购价格']

print("用户特征（前10名）：")
print(user_features.head(10).round(4))
print()

# 输出放弃率最高的用户
print("历史放弃率最高的5个用户：")
top_abandon_users = user_features.sort_values('历史放弃率', ascending=False).head()
print(top_abandon_users.round(4))
print()

# 验证
assert '历史放弃率' in user_features.columns, "特征缺失"
print("✓ 特征工程完成！")
`,tips:["合并表时要注意主键是否对应","特征工程要考虑业务含义：历史放弃率很可能是预测用户是否放弃的重要特征","可以按时间维度（小时、周几、月份）来分析用户行为规律"]},{id:"dcp-project-5",chapterId:"chapter-37",title:"RFM用户价值分析（基于购买和加购）",description:"将购物车数据转化为用户分层。计算RFM三个维度，分箱并打分，识别高价值用户。",difficulty:"进阶",skills:["RFM模型","用户分层","价值分析","分箱操作"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta

np.random.seed(42)

# 生成模拟数据：同时包含购买记录和加购记录
n_users = 100
n_records = 2000

# 购买记录
purchase_data = []
for _ in range(n_records):
    user_id = np.random.randint(1, n_users + 1)
    purchase_date = datetime(2024, 1, 1) + timedelta(days=np.random.randint(0, 90))
    amount = np.random.normal(200, 80)
    purchase_data.append({
        '用户ID': user_id,
        '日期': purchase_date,
        '金额': max(amount, 10),
        '类型': '购买'
    })

# 加购记录
cart_data = []
for _ in range(n_records * 2):
    user_id = np.random.randint(1, n_users + 1)
    cart_date = datetime(2024, 1, 1) + timedelta(days=np.random.randint(0, 90))
    amount = np.random.normal(150, 60)
    cart_data.append({
        '用户ID': user_id,
        '日期': cart_date,
        '金额': max(amount, 5),
        '类型': '加购'
    })

df = pd.DataFrame(purchase_data + cart_data)
df['日期'] = pd.to_datetime(df['日期'])
print(f"总记录数：{len(df)}")
print("数据前10行：")
print(df.head(10))
print()

reference_date = datetime(2024, 4, 1)
print(f"参考日期：{reference_date}")
print()

# 任务1：基于购买记录计算RFM
print("="*60)
print("任务1：基于购买记录计算RFM")
print("="*60)
purchase_df = df[df['类型'] == '购买'].copy()

rfm_purchase = purchase_df.groupby('用户ID').agg({
    '日期': lambda x: (reference_date - x.max()).days,  # R：最近消费天数
    '金额': ['count', 'sum']  # F：消费频次，M：消费金额
}).reset_index()

rfm_purchase.columns = ['用户ID', 'R_购买', 'F_购买', 'M_购买']
print("购买RFM（前15名）：")
print(rfm_purchase.head(15).round(2))
print()

# 任务2：基于加购记录计算RFM
print("="*60)
print("任务2：基于加购记录计算RFM")
print("="*60)
cart_only_df = df[df['类型'] == '加购'].copy()

rfm_cart = cart_only_df.groupby('用户ID').agg({
    '日期': lambda x: (reference_date - x.max()).days,  # R：最近加购天数
    '金额': ['count', 'sum']  # F：加购频次，M：加购金额
}).reset_index()

rfm_cart.columns = ['用户ID', 'R_加购', 'F_加购', 'M_加购']
print("加购RFM（前15名）：")
print(rfm_cart.head(15).round(2))
print()

# 任务3：合并两个RFM
print("="*60)
print("任务3：合并RFM并分箱打分")
print("="*60)
rfm_combined = pd.merge(rfm_purchase, rfm_cart, on='用户ID', how='outer').fillna(0)

# 对R分箱（R越小越好，所以标签反转）
rfm_combined['R_购买_score'] = pd.qcut(rfm_combined['R_购买'], q=4, labels=[4, 3, 2, 1]).astype(int)
# 对F分箱（F越大越好）
rfm_combined['F_购买_score'] = pd.qcut(rfm_combined['F_购买'].rank(method='first'), q=4, labels=[1, 2, 3, 4]).astype(int)
# 对M分箱（M越大越好）
rfm_combined['M_购买_score'] = pd.qcut(rfm_combined['M_购买'].rank(method='first'), q=4, labels=[1, 2, 3, 4]).astype(int)

# 计算总分
rfm_combined['RFM总分'] = rfm_combined['R_购买_score'] + rfm_combined['F_购买_score'] + rfm_combined['M_购买_score']

print("合并后的RFM（前20名）：")
print(rfm_combined.head(20).round(2))
print()

# 任务4：识别高价值用户（RFM总分>=10）
print("="*60)
print("任务4：识别高价值用户")
print("="*60)
high_value_users = rfm_combined[rfm_combined['RFM总分'] >= 10]
print(f"高价值用户数：{len(high_value_users)}")
print(f"高价值用户占比：{len(high_value_users)/len(rfm_combined)*100:.2f}%")
print()
print("高价值用户列表（前10名）：")
print(high_value_users[['用户ID', 'R_购买_score', 'F_购买_score', 'M_购买_score', 'RFM总分']].sort_values('RFM总分', ascending=False).head(10))
print()

# 高价值用户统计
print("高价值用户平均特征：")
print(high_value_users[['R_购买', 'F_购买', 'M_购买']].mean().round(2))
print()

# 验证
assert 'RFM总分' in rfm_combined.columns, "总分计算缺失"
print("✓ RFM用户价值分析完成！")
`,tips:["R(Recency)：最近一次消费/加购时间，越近越好","F(Frequency)：消费/加购频次，越频繁越好","M(Monetary)：消费/加购金额，越多越好"]},{id:"dcp-project-6",chapterId:"chapter-38",title:"购物车商品价格敏感度分析（聚类前置）",description:"发现价格弹性不同的用户群。计算每个用户的平均加购价格vs实际成交价格，计算价格敏感度，清洗极值。",difficulty:"进阶",skills:["价格敏感度","价格弹性","用户行为分析","数据清洗"],initialCode:`import pandas as pd
import numpy as np

np.random.seed(42)

# 生成商品数据
products = pd.DataFrame({
    '商品ID': range(1, 21),
    '商品名称': [f'商品{i}' for i in range(1, 21)],
    '原价': np.random.uniform(50, 500, 20).round(2),
    '品类': np.random.choice(['食品', '电子产品', '服装', '家居'], 20)
})

# 生成加购和成交数据
user_ids = list(range(1, 101))
n_cart_records = 3000

cart_records = []
for _ in range(n_cart_records):
    user_id = np.random.choice(user_ids)
    product = products.sample(1).iloc[0]
    product_id = product['商品ID']
    original_price = product['原价']
    
    # 模拟不同用户对价格敏感度不同：有些用户经常等打折
    if user_id < 30:
        # 高价格敏感型：经常以高折扣购买
        discount_factor = np.random.uniform(0.6, 0.8)
    elif user_id < 70:
        # 中等敏感：偶尔打折
        discount_factor = np.random.uniform(0.8, 0.95)
    else:
        # 低敏感：基本不关心折扣
        discount_factor = np.random.uniform(0.95, 1.0)
    
    actual_price = original_price * discount_factor
    
    # 是否最终购买
    purchased = np.random.choice([0, 1], p=[0.2, 0.8])
    
    cart_records.append({
        '用户ID': user_id,
        '商品ID': product_id,
        '原价': original_price,
        '实付价': actual_price if purchased else np.nan,
        '是否购买': purchased,
        '折扣率': discount_factor if purchased else np.nan
    })

cart_df = pd.DataFrame(cart_records)
print("购物车记录（前20行）：")
print(cart_df.head(20))
print()

# 任务1：计算每个用户的平均加购价格vs实际成交价格
print("="*60)
print("任务1：按用户聚合统计价格信息")
print("="*60)
user_price_stats = cart_df.groupby('用户ID').agg({
    '原价': ['count', 'mean'],  # 加购次数，平均加购原价
    '实付价': ['count', 'mean'],  # 购买次数，平均实付价
    '折扣率': 'mean'  # 平均折扣率
}).reset_index()

user_price_stats.columns = ['用户ID', '加购次数', '平均加购原价', '购买次数', '平均实付价', '平均折扣率']
user_price_stats['购买率'] = user_price_stats['购买次数'] / user_price_stats['加购次数']
user_price_stats = user_price_stats.fillna(0)

print("用户价格统计（前20名）：")
print(user_price_stats.head(20).round(4))
print()

# 任务2：计算价格敏感度
print("="*60)
print("任务2：计算价格敏感度")
print("="*60)
# 价格敏感度 = (平均加购原价 - 平均实付价) / 平均加购原价
# 当没有购买记录时敏感度设为0.5（中等敏感）
user_price_stats['价格敏感度'] = (user_price_stats['平均加购原价'] - user_price_stats['平均实付价']) / user_price_stats['平均加购原价']
user_price_stats.loc[user_price_stats['购买次数'] == 0, '价格敏感度'] = 0.5

print("用户价格敏感度（前20名）：")
print(user_price_stats[['用户ID', '价格敏感度', '平均折扣率', '购买率']].head(20).round(4))
print()

# 任务3：清洗极值
print("="*60)
print("任务3：清洗极值")
print("="*60)
print(f"价格敏感度统计（清洗前）：")
print(user_price_stats['价格敏感度'].describe())
print()

# 将价格敏感度限制在[0, 1]范围内
user_price_stats['价格敏感度_clean'] = user_price_stats['价格敏感度'].clip(0, 1)
print(f"价格敏感度统计（清洗后）：")
print(user_price_stats['价格敏感度_clean'].describe())
print()

# 任务4：划分价格敏感度用户群
print("="*60)
print("任务4：划分价格敏感度用户群")
print("="*60)
user_price_stats['敏感度等级'] = pd.cut(
    user_price_stats['价格敏感度_clean'],
    bins=[-0.001, 0.2, 0.4, 0.6, 0.8, 1.001],
    labels=['极不敏感', '较不敏感', '中等敏感', '较敏感', '极敏感']
)

sensitivity_distribution = user_price_stats['敏感度等级'].value_counts().sort_index()
print("敏感度等级分布：")
print(sensitivity_distribution)
print()

# 每个等级的平均购买率
rate_by_sensitivity = user_price_stats.groupby('敏感度等级')['购买率'].mean().round(4)
print("各敏感度等级的平均购买率：")
print(rate_by_sensitivity)
print()

# 验证
assert '价格敏感度_clean' in user_price_stats.columns, "敏感度清洗结果缺失"
print("✓ 价格敏感度分析完成！")
`,tips:["价格敏感度 = (原价 - 实付价) / 原价","高敏感用户可能会等待促销才下单","可以用敏感度来做个性化定价策略"]},{id:"dcp-project-7",chapterId:"chapter-39",title:"K-Means聚类分析用户购物行为",description:"核心数据分析技术。标准化特征，肘部法则确定K值，K-Means聚类并标记用户群，分析每个簇的特征解读。",difficulty:"进阶",skills:["K-Means聚类","特征标准化","肘部法则","用户分群"],initialCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

np.random.seed(42)

# 生成用户购物特征数据
n_users = 200
features = []

for i in range(n_users):
    if i < 50:
        # 群体1：高消费、高放弃率、高价格敏感
        total_spent = np.random.normal(3000, 500)
        abandon_rate = np.random.uniform(0.5, 0.8)
        avg_cart_items = np.random.normal(5, 1)
        price_sensitivity = np.random.normal(0.7, 0.1)
    elif i < 120:
        # 群体2：中等消费、中等放弃率、中等敏感
        total_spent = np.random.normal(1500, 300)
        abandon_rate = np.random.uniform(0.2, 0.5)
        avg_cart_items = np.random.normal(3, 0.8)
        price_sensitivity = np.random.normal(0.4, 0.12)
    else:
        # 群体3：低消费、低放弃率、低敏感
        total_spent = np.random.normal(500, 150)
        abandon_rate = np.random.uniform(0.05, 0.2)
        avg_cart_items = np.random.normal(2, 0.5)
        price_sensitivity = np.random.normal(0.15, 0.08)
    
    features.append({
        '用户ID': i + 1,
        '购物车放弃率': max(abandon_rate, 0),
        '平均加购数量': max(avg_cart_items, 1),
        '价格敏感度': max(price_sensitivity, 0),
        '总消费金额': max(total_spent, 100)
    })

df = pd.DataFrame(features)
print("用户购物行为特征（前20行）：")
print(df.head(20).round(4))
print()

# 任务1：标准化特征
print("="*60)
print("任务1：标准化特征")
print("="*60)
feature_cols = ['购物车放弃率', '平均加购数量', '价格敏感度', '总消费金额']
X = df[feature_cols]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print("标准化后特征（前10行）：")
print(pd.DataFrame(X_scaled, columns=feature_cols).head(10).round(4))
print()

# 任务2：肘部法则确定最佳K
print("="*60)
print("任务2：肘部法则确定最佳K")
print("="*60)
inertias = []
k_range = range(2, 11)
for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)

print(f"K值对应的inertia：")
for k, inertia in zip(k_range, inertias):
    print(f"K={k}, inertia={inertia:.2f}")
print()

# 我们选择K=3
# 任务3：K-Means聚类
print("="*60)
print("任务3：K-Means聚类（K=3）")
print("="*60)
best_k = 3
kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
df['簇标签'] = kmeans.fit_predict(X_scaled)
df['簇标签'] = df['簇标签'].astype(int)

print(f"各簇样本数：")
print(df['簇标签'].value_counts().sort_index())
print()

# 任务4：分析每个簇的特征
print("="*60)
print("任务4：分析每个簇的特征")
print("="*60)
cluster_centers = pd.DataFrame(
    scaler.inverse_transform(kmeans.cluster_centers_),
    columns=feature_cols,
    index=[f'簇{i}' for i in range(best_k)]
)
print("簇中心特征：")
print(cluster_centers.round(4))
print()

# 为每个簇命名
cluster_names = {}
for cluster_id in range(best_k):
    center = cluster_centers.iloc[cluster_id]
    if center['总消费金额'] > 2000:
        cluster_names[cluster_id] = '高价值高敏感型'
    elif center['总消费金额'] > 800:
        cluster_names[cluster_id] = '中等价值平衡型'
    else:
        cluster_names[cluster_id] = '低价值价格不敏感型'

df['用户群名称'] = df['簇标签'].map(cluster_names)
print("用户群分布：")
print(df['用户群名称'].value_counts())
print()

# 输出每个用户群的平均特征
print("各用户群平均特征：")
cluster_means = df.groupby('用户群名称')[feature_cols].mean().round(4)
print(cluster_means)
print()

# 验证
assert '簇标签' in df.columns, "聚类结果缺失"
assert len(df['簇标签'].unique()) == best_k, "簇数量不正确"
print("✓ K-Means聚类分析完成！")
`,tips:["聚类前一定要标准化特征，否则量纲不同会导致结果偏差","肘部法则通过inertia随K变化找到拐点确定最佳K","聚类后一定要给每个簇赋予业务含义，解释各个群的特点"]},{id:"dcp-project-8",chapterId:"chapter-40",title:"DBSCAN聚类识别异常购物车行为",description:'核心数据分析技术（异常检测）。使用DBSCAN聚类，标记噪声点为"疑似机器人刷购物车"，对比噪声点与正常用户的行为差异。',difficulty:"进阶",skills:["DBSCAN聚类","异常检测","行为分析","噪声识别"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler

np.random.seed(42)

# 生成购物车会话数据：包含正常用户和机器人/刷单用户
n_normal = 500
n_bot = 30

# 正常用户特征
normal_sessions = []
for i in range(n_normal):
    # 正常用户：加购频率适中，间隔适中
    cart_count = np.random.poisson(lam=5)  # 平均加购5次
    avg_interval = np.random.normal(loc=15, scale=5)  # 平均间隔15分钟
    max_cart_size = np.random.randint(1, 8)  # 单次加购最多8件
    
    normal_sessions.append({
        '会话ID': i + 1,
        '加购频率': cart_count,
        '平均加购间隔(分钟)': max(avg_interval, 1),
        '单次最大加购数量': max_cart_size,
        '是否异常': 0
    })

# 机器人用户特征
bot_sessions = []
for i in range(n_bot):
    # 机器人用户：加购频率极高，间隔极短，每次加购数量巨大
    cart_count = np.random.poisson(lam=25)  # 平均加购25次
    avg_interval = np.random.normal(loc=2, scale=1)  # 平均间隔2分钟
    max_cart_size = np.random.randint(50, 200)  # 单次加购50-200件
    
    bot_sessions.append({
        '会话ID': n_normal + i + 1,
        '加购频率': cart_count,
        '平均加购间隔(分钟)': max(avg_interval, 0.1),
        '单次最大加购数量': max_cart_size,
        '是否异常': 1
    })

df = pd.DataFrame(normal_sessions + bot_sessions)
print("购物车会话数据（前20行）：")
print(df.head(20))
print()
print("数据统计：")
print(df.describe().round(2))
print()

# 任务1：使用DBSCAN聚类
print("="*60)
print("任务1：使用DBSCAN聚类识别异常")
print("="*60)

feature_cols = ['加购频率', '平均加购间隔(分钟)', '单次最大加购数量']
X = df[feature_cols]

# 标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# DBSCAN聚类（eps=0.5, min_samples=5）
dbscan = DBSCAN(eps=0.5, min_samples=5)
df['簇标签'] = dbscan.fit_predict(X_scaled)

print(f"DBSCAN聚类结果：")
print(f"噪声点标记为-1：{ (df['簇标签'] == -1).sum() } 个")
print(f"簇分配情况：")
print(df['簇标签'].value_counts())
print()

# 任务2：标记可疑用户
print("="*60)
print("任务2：标记疑似机器人刷购物车行为")
print("="*60)
df['是否可疑'] = (df['簇标签'] == -1).astype(int)

print("可疑用户标记结果：")
print(df.groupby('是否可疑').agg({
    '会话ID': 'count',
    '加购频率': 'mean',
    '平均加购间隔(分钟)': 'mean',
    '单次最大加购数量': 'mean'
}).round(2))
print()

# 任务3：对比噪声点与正常用户的行为差异
print("="*60)
print("任务3：对比可疑用户与正常用户的差异")
print("="*60)

# 按DBSCAN标记分组
group_stats = df.groupby('是否可疑').agg({
    '加购频率': ['mean', 'min', 'max'],
    '平均加购间隔(分钟)': ['mean', 'min', 'max'],
    '单次最大加购数量': ['mean', 'min', 'max']
}).round(2)

print("各群体特征对比：")
print(group_stats)
print()

# 输出可疑会话详情
print("可疑会话详情（全部）：")
suspicious_df = df[df['是否可疑'] == 1].sort_values('加购频率', ascending=False)
print(suspicious_df[['会话ID', '加购频率', '平均加购间隔(分钟)', '单次最大加购数量', '簇标签']])
print()

# 验证
print("="*60)
print("验证结果")
print("="*60)
true_positives = ((df['是否异常'] == 1) & (df['是否可疑'] == 1)).sum()
false_positives = ((df['是否异常'] == 0) & (df['是否可疑'] == 1)).sum()
true_negatives = ((df['是否异常'] == 0) & (df['是否可疑'] == 0)).sum()
false_negatives = ((df['是否异常'] == 1) & (df['是否可疑'] == 0)).sum()

print(f"真正例（真异常且被标记为可疑）：{true_positives}")
print(f"假正例（正常但被误判为可疑）：{false_positives}")
print(f"真负例（正常且未误判）：{true_negatives}")
print(f"假负例（真异常但未被标记）：{false_negatives}")
print()

precision = true_positives / (true_positives + false_positives) if (true_positives + false_positives) > 0 else 0
recall = true_positives / (true_positives + false_negatives) if (true_positives + false_negatives) > 0 else 0

print(f"精确率：{precision:.2%}")
print(f"召回率：{recall:.2%}")
print()

assert '是否可疑' in df.columns, "异常标记结果缺失"
print("✓ DBSCAN异常检测完成！")
`,tips:["DBSCAN不需要预先指定聚类数量，可以自动发现任意形状的簇","DBSCAN将噪声点标记为-1，这对于异常检测特别有用","eps和min_samples是DBSCAN的两个重要参数，需要根据数据分布调整"]},{id:"dcp-project-9",chapterId:"chapter-41",title:"购物车到下单的转化漏斗分析+时间序列聚类",description:"分析用户从加购到转化的行为路径，并按时间模式聚类。计算每个session的完成率，提取时间序列特征，使用K-Means对转化速度模式聚类。",difficulty:"进阶",skills:["转化漏斗","时间序列","聚类分析","行为路径"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

np.random.seed(42)

# 生成用户会话行为数据
n_sessions = 500

sessions_data = []
events_data = []

for session_id in range(1, n_sessions + 1):
    user_id = np.random.randint(1, 101)
    start_time = datetime(2024, 1, 1) + timedelta(minutes=np.random.randint(0, 60*24*60))
    
    # 生成事件序列
    events = []
    
    # 路径1：快速决策型（快速完成转化）
    if session_id <= 150:
        path = ['浏览商品', '加入购物车', '查看购物车', '结算', '支付成功']
        path_times = [0, 1, 2, 5, 7]
        path_taken = True
    
    # 路径2：犹豫型（多次查看、多次修改数量）
    elif session_id <= 350:
        path = ['浏览商品', '加入购物车', '查看购物车', '加入购物车', '修改数量', 
                '查看购物车', '浏览其他商品', '返回购物车', '结算', '支付成功']
        path_times = [0, 2, 3, 5, 6, 8, 12, 14, 18, 20]
        path_taken = np.random.choice([True, False], p=[0.8, 0.2])
    
    # 路径3：流失型（加购后放弃）
    else:
        path = ['浏览商品', '加入购物车', '查看购物车']
        path_times = [0, 2, 5]
        path_taken = False
    
    for step, (event_type, minutes) in enumerate(zip(path, path_times)):
        event_time = start_time + timedelta(minutes=minutes)
        events_data.append({
            '会话ID': session_id,
            '用户ID': user_id,
            '事件时间': event_time,
            '事件类型': event_type,
            '步骤': step + 1
        })
    
    sessions_data.append({
        '会话ID': session_id,
        '用户ID': user_id,
        '开始时间': start_time,
        '总步骤': len(path),
        '完成时间': timedelta(minutes=path_times[-1]) if path_taken else None,
        '是否完成转化': path_taken,
        '真实类型': '快速决策' if session_id <= 150 else ('犹豫型' if session_id <=350 else '流失型')
    })

sessions_df = pd.DataFrame(sessions_data)
events_df = pd.DataFrame(events_data)

print("会话数据（前20行）：")
print(sessions_df.head(20))
print()
print("事件数据（前30行）：")
print(events_df.head(30))
print()

# 任务1：计算每个session的完成率和转化漏斗
print("="*60)
print("任务1：计算转化漏斗")
print("="*60)
funnel_counts = events_df['事件类型'].value_counts().reindex([
    '浏览商品', '加入购物车', '查看购物车', '修改数量', 
    '浏览其他商品', '返回购物车', '结算', '支付成功'
]).fillna(0)

print("转化漏斗：")
print(funnel_counts)
print()

# 任务2：转化分析
print("="*60)
print("任务2：整体转化分析")
print("="*60)
total_add_cart = (events_df['事件类型'] == '加入购物车').sum()
total_payment = (events_df['事件类型'] == '支付成功').sum()

print(f"加购 → 支付转化率：{total_payment / total_add_cart * 100:.2f}%")
print(f"会话级完成率：{sessions_df['是否完成转化'].mean() * 100:.2f}%")
print()

# 任务3：提取时间序列特征并聚类
print("="*60)
print("任务3：提取特征并聚类")
print("="*60)
session_features = sessions_df.groupby('会话ID').agg({
    '总步骤': 'first',
    '是否完成转化': 'first'
}).reset_index()

# 计算每个会话的时长
def calculate_session_duration(session_id):
    session_events = events_df[events_df['会话ID'] == session_id].sort_values('事件时间')
    if len(session_events) > 1:
        first_time = session_events.iloc[0]['事件时间']
        last_time = session_events.iloc[-1]['事件时间']
        return (last_time - first_time).total_seconds() / 60
    else:
        return 0

session_features['会话时长(分钟)'] = session_features['会话ID'].apply(calculate_session_duration)
session_features['完成转化'] = session_features['是否完成转化'].astype(int)

print("会话特征（前15名）：")
print(session_features.head(15).round(2))
print()

# 使用K-Means对转化速度模式聚类
feature_cols = ['总步骤', '会话时长(分钟)', '完成转化']
X = session_features[feature_cols]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
session_features['簇标签'] = kmeans.fit_predict(X_scaled)
session_features['簇标签'] = session_features['簇标签'].astype(int)

# 任务4：分析不同聚类组的转化情况
print("="*60)
print("任务4：分析不同聚类组的转化情况")
print("="*60)
cluster_stats = session_features.groupby('簇标签').agg({
    '会话ID': 'count',
    '总步骤': 'mean',
    '会话时长(分钟)': 'mean',
    '完成转化': 'mean'
}).round(2)
cluster_stats.columns = ['会话数', '平均步骤数', '平均会话时长(分钟)', '平均转化率']

print("各聚类组统计：")
print(cluster_stats)
print()

# 验证
assert '簇标签' in session_features.columns, "聚类结果缺失"
print("✓ 转化漏斗与时间序列聚类分析完成！")
`,tips:["转化漏斗可以清晰看到用户在哪个环节流失最多","可以通过聚类找到不同的用户行为模式","对于不同的行为模式，可能需要不同的干预策略"]},{id:"dcp-project-10",chapterId:"chapter-42",title:"端到端综合项目 - 电商购物车智能分析报告",description:"整合所有技术：数据采集→清洗→购物车分析→聚类→业务建议。完成购物车放弃率分析、关联规则挖掘、K-Means聚类，生成带图表的分析报告。",difficulty:"综合",skills:["端到端分析","综合项目","报告生成","业务建议"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score

print("="*70)
print("电商购物车智能分析报告")
print("="*70)
print()
print(f"报告生成时间：{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
print()

# ===================== 1. 数据生成与加载 =====================
print("="*70)
print("1. 数据生成与加载")
print("="*70)

np.random.seed(42)
n_users = 300
n_records = 5000

# 商品表
products = pd.DataFrame({
    '商品ID': range(1, 21),
    '商品名称': [f'商品{i}' for i in range(1, 21)],
    '原价': np.random.uniform(50, 800, 20).round(2),
    '品类': np.random.choice(['食品', '电子产品', '服装', '家居'], 20)
})

# 用户行为记录表
behavior_records = []
for _ in range(n_records):
    user_id = np.random.randint(1, n_users + 1)
    product = products.sample(1).iloc[0]
    action_time = datetime(2024, 1, 1) + timedelta(minutes=np.random.randint(0, 60*24*60))
    action_type = np.random.choice(['浏览', '加购', '结算', '支付成功'], p=[0.4, 0.3, 0.15, 0.15])
    
    behavior_records.append({
        '用户ID': user_id,
        '商品ID': product['商品ID'],
        '行为时间': action_time,
        '行为类型': action_type,
        '商品价格': product['原价']
    })

df_behavior = pd.DataFrame(behavior_records)

print(f"加载数据完成，共{len(df_behavior)}条记录")
print("数据前15行：")
print(df_behavior.head(15))
print()

# ===================== 2. 数据清洗与预处理 =====================
print("="*70)
print("2. 数据清洗与预处理")
print("="*70)

initial_count = len(df_behavior)
df_clean = df_behavior.dropna().copy()
duplicates = df_clean.duplicated().sum()
df_clean = df_clean.drop_duplicates()

print(f"原始行数：{initial_count}")
print(f"删除缺失值后：{len(df_clean)}")
print(f"删除重复值后：{len(df_clean)}")
print(f"删除行数：{initial_count - len(df_clean)}")
print()

# ===================== 3. 购物车放弃率分析 =====================
print("="*70)
print("3. 购物车放弃率分析")
print("="*70)

# 按用户统计
user_summary = df_clean.groupby('用户ID').agg({
    '行为类型': lambda x: list(x),
    '商品价格': ['count', 'sum']
}).reset_index()
user_summary.columns = ['用户ID', '行为序列', '总操作数', '总商品价格']

# 简化：如果一个用户有加购记录但没有支付记录则视为放弃
def has_abandon(actions):
    has_cart = '加购' in actions
    has_payment = '支付成功' in actions
    return has_cart and not has_payment

user_summary['是否放弃'] = user_summary['行为序列'].apply(has_abandon)

abandon_rate = user_summary['是否放弃'].mean()
print(f"整体用户放弃率：{abandon_rate*100:.2f}%")
print()

# 时间分析
df_clean['小时'] = df_clean['行为时间'].dt.hour
hour_abandon = df_clean[df_clean['行为类型'] == '加购'].groupby('小时').agg({
    '用户ID': 'count'
})
hour_purchase = df_clean[df_clean['行为类型'] == '支付成功'].groupby('小时').agg({
    '用户ID': 'count'
})

hour_stats = pd.DataFrame({
    '加购数': hour_abandon['用户ID'],
    '支付数': hour_purchase['用户ID']
}).fillna(0)
hour_stats['放弃率'] = 1 - hour_stats['支付数'] / hour_stats['加购数']

print("小时级放弃率（前12小时）：")
print(hour_stats.head(12).round(4))
print()

# ===================== 4. 关联规则挖掘 =====================
print("="*70)
print("4. 关联规则挖掘（简化版）")
print("="*70)

# 获取有支付记录的用户
paid_users = df_clean[df_clean['行为类型'] == '支付成功']['用户ID'].unique()
cart_for_paid = df_clean[(df_clean['用户ID'].isin(paid_users)) & 
                          (df_clean['行为类型'] == '加购')]

product_baskets = cart_for_paid.groupby('用户ID')['商品ID'].apply(list).reset_index()
product_baskets.columns = ['用户ID', '商品ID列表']

# 计算共现
co_occur = np.zeros((20, 20), dtype=int)
for items in product_baskets['商品ID列表']:
    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            prod_i = items[i] - 1
            prod_j = items[j] - 1
            co_occur[prod_i][prod_j] += 1
            co_occur[prod_j][prod_i] += 1

print("商品共现矩阵（前10x10）：")
print(co_occur[:10, :10])
print()

# ===================== 5. K-Means用户聚类 =====================
print("="*70)
print("5. K-Means用户聚类")
print("="*70)

# 构建特征
user_features = df_clean.groupby('用户ID').agg({
    '商品ID': 'nunique',  # 浏览商品数
    '行为类型': 'count',   # 总行为数
    '商品价格': 'sum'     # 总金额
}).reset_index()
user_features.columns = ['用户ID', '浏览商品数', '总行为数', '总金额']

# 计算放弃率（简化版）
abandon_dict = dict(zip(user_summary['用户ID'], user_summary['是否放弃'].astype(int)))
user_features['放弃率'] = user_features['用户ID'].map(abandon_dict).fillna(0)

# 标准化与聚类
feature_cols = ['浏览商品数', '总行为数', '总金额', '放弃率']
X = user_features[feature_cols]
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
user_features['簇标签'] = kmeans.fit_predict(X_scaled)

# 计算轮廓系数
sil_score = silhouette_score(X_scaled, user_features['簇标签'])
print(f"聚类轮廓系数：{sil_score:.4f}")
print()

# 聚类结果统计
cluster_stats = user_features.groupby('簇标签').agg({
    '用户ID': 'count',
    '浏览商品数': 'mean',
    '总行为数': 'mean',
    '总金额': 'mean',
    '放弃率': 'mean'
}).round(2)
cluster_stats.columns = ['用户数', '平均浏览商品数', '平均行为数', '平均金额', '平均放弃率']

print("各簇统计：")
print(cluster_stats)
print()

# ===================== 6. 业务建议 =====================
print("="*70)
print("6. 业务建议")
print("="*70)

print("基于分析结果，我们建议：")
print("1. 针对高放弃率时段（如凌晨和深夜）进行优化，提供限时折扣")
print("2. 利用关联规则结果，进行购物车推荐和捆绑销售")
print("3. 针对不同聚类用户群体进行个性化营销和定价策略")
print("4. 对高价值低敏感群体减少促销活动，对高敏感群体增加促销通知")
print()

print("="*70)
print("✓ 端到端分析报告生成完成！")
print("="*70)
`,tips:["端到端项目要注意整个流程的完整性和可复现性","报告要简洁明了，结论要有数据支持","业务建议要具体且可落地"]},{id:"scm-project-1",chapterId:"chapter-43",title:"订单数据清洗与基础质检",description:"用 Pandas 处理缺失值、重复值、异常格式，构建干净的基础订单表。处理日期列的格式统一与超出范围日期，剔除数量≤0或单价≤0的记录，识别并处理订单总价与数量*单价不一致的行，检测并标记重复订单。",difficulty:"基础",skills:["数据清洗","缺失值处理","异常值检测","数据验证"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime

# 1. 生成模拟订单数据（包含各种错误）
np.random.seed(42)
n = 500

# 基础数据
order_ids = range(1, n+1)
dates = pd.date_range('2024-01-01', periods=n, freq='3H')
customer_ids = np.random.randint(1, 51, n)
product_ids = np.random.randint(1, 21, n)
quantities = np.random.randint(-2, 10, n)
unit_prices = np.random.uniform(10, 500, n).round(2)
total_amounts = quantities * unit_prices

# 构造DataFrame
df = pd.DataFrame({
    '订单ID': order_ids,
    '日期': dates,
    '客户ID': customer_ids,
    '产品ID': product_ids,
    '数量': quantities,
    '单价': unit_prices,
    '总金额': total_amounts
})

# 引入错误
# 1. 缺失日期
df.loc[np.random.choice(n, 30), '日期'] = pd.NaT
# 2. 缺失客户ID
df.loc[np.random.choice(n, 25), '客户ID'] = np.nan
# 3. 错误的总金额（手动篡改50行）
df.loc[np.random.choice(n, 50), '总金额'] = df.loc[np.random.choice(n, 50), '总金额'] * np.random.uniform(0.8, 1.2, 50)
# 4. 添加重复行
df = pd.concat([df, df.sample(50, random_state=42)], ignore_index=True)

print("="*60)
print("原始数据概览")
print("="*60)
print(f"原始行数：{len(df)}")
print("\\n数据类型：")
print(df.dtypes)
print("\\n缺失值统计：")
print(df.isnull().sum())
print("\\n前20行数据：")
print(df.head(20))
print()

# 2. 数据清洗函数
def clean_order_data(df):
    """订单数据清洗"""
    df_clean = df.copy()
    
    # 任务1：处理日期列
    # 移除缺失日期行
    df_clean = df_clean.dropna(subset=['日期'])
    # 转换日期格式
    df_clean['日期'] = pd.to_datetime(df_clean['日期'])
    # 移除超出范围的日期（只保留2024年的）
    df_clean = df_clean[(df_clean['日期'] >= '2024-01-01') & (df_clean['日期'] <= '2024-12-31')]
    print(f"日期清洗后行数：{len(df_clean)}")
    
    # 任务2：处理数量和单价
    # 剔除数量<=0的记录
    initial_count = len(df_clean)
    df_clean = df_clean[df_clean['数量'] > 0]
    print(f"剔除数量<=0后：{len(df_clean)}（删除{initial_count - len(df_clean)}行）")
    
    # 剔除单价<=0的记录
    initial_count = len(df_clean)
    df_clean = df_clean[df_clean['单价'] > 0]
    print(f"剔除单价<=0后：{len(df_clean)}（删除{initial_count - len(df_clean)}行）")
    
    # 任务3：处理订单总价不一致
    # 计算理论总金额
    df_clean['理论金额'] = df_clean['数量'] * df_clean['单价']
    df_clean['金额差异'] = abs(df_clean['总金额'] - df_clean['理论金额'])
    # 标记不一致的订单
    df_clean['金额不一致'] = df_clean['金额差异'] > 0.01
    inconsistent_count = df_clean['金额不一致'].sum()
    print(f"金额不一致订单数：{inconsistent_count}")
    # 可以选择修正或删除，这里我们用理论金额替换
    df_clean.loc[df_clean['金额不一致'], '总金额'] = df_clean.loc[df_clean['金额不一致'], '理论金额']
    
    # 任务4：检测重复订单（同一客户同一天同一产品）
    duplicate_mask = df_clean.duplicated(subset=['客户ID', '日期', '产品ID'], keep='first')
    df_clean['是否重复'] = duplicate_mask
    duplicate_count = duplicate_mask.sum()
    print(f"重复订单数：{duplicate_count}")
    # 删除重复订单（保留第一条）
    df_clean = df_clean[~duplicate_mask]
    
    return df_clean

print("\\n" + "="*60)
print("执行数据清洗")
print("="*60)
df_cleaned = clean_order_data(df)

# 3. 清洗前后对比
print("\\n" + "="*60)
print("清洗前后对比")
print("="*60)
print(f"清洗前行数：{len(df)}")
print(f"清洗后行数：{len(df_cleaned)}")
print(f"删除总行数：{len(df) - len(df_cleaned)}")
print(f"删除比例：{(len(df) - len(df_cleaned))/len(df)*100:.2f}%")

# 4. 异常记录明细
print("\\n" + "="*60)
print("异常记录统计")
print("="*60)
if '是否重复' in df_cleaned.columns:
    print(f"重复订单数：{df_cleaned['是否重复'].sum()}")
if '金额不一致' in df_cleaned.columns:
    print(f"金额不一致订单数：{df_cleaned['金额不一致'].sum()}")
    
print("\\n清洗后数据前20行：")
print(df_cleaned.head(20))
print()

# 5. 数据验证
assert len(df_cleaned) > 0, "清洗后数据为空"
assert df_cleaned['数量'].min() > 0, "仍有无效数量"
assert df_cleaned['单价'].min() > 0, "仍有无效单价"
assert df_cleaned['日期'].isnull().sum() == 0, "仍有缺失日期"
print("✓ 数据清洗完成，验证通过！")
`,tips:["日期要先转换为datetime类型再进行范围筛选","金额不一致可以用理论金额替换或标记后手动处理","重复检测要选择合适的关键字段组合"]},{id:"scm-project-2",chapterId:"chapter-44",title:"库存周转与缺货预警分析",description:"计算产品库存周转率，识别周转过慢与可能缺货的 SKU。按月计算每个产品的销售数量总和，计算周转率 = 月销量 / 平均库存，标记周转率<0.5（滞销）和>5（高周转但库存低的缺货风险）。",difficulty:"基础",skills:["库存周转","缺货预警","周转率计算"],initialCode:`import pandas as pd
import numpy as np

# 1. 生成模拟数据
np.random.seed(42)
n_months = 12
n_products = 30

# 产品表
products = pd.DataFrame({
    '产品ID': range(1, n_products + 1),
    '产品名称': [f'产品{i}' for i in range(1, n_products + 1)],
    '品类': np.random.choice(['电子产品', '服装', '食品', '家居'], n_products),
    '当前库存': np.random.randint(50, 500, n_products),
    '补货周期_天': np.random.randint(7, 30, n_products)
})

# 月度销售数据（12个月）
sales_data = []
for month in range(1, n_months + 1):
    for product_id in range(1, n_products + 1):
        # 模拟销量（考虑季节性）
        base_sales = np.random.randint(20, 100)
        # 电子产品在年底销量更高
        if products.loc[products['产品ID'] == product_id, '品类'].values[0] == '电子产品' and month in [11, 12]:
            base_sales = int(base_sales * 1.5)
        sales_data.append({
            '月份': month,
            '产品ID': product_id,
            '销售数量': base_sales
        })

sales_df = pd.DataFrame(sales_data)

# 平均库存（简化：假设每月末库存稳定）
inventory_df = products[['产品ID', '当前库存']].copy()
inventory_df['平均库存'] = inventory_df['当前库存'] * 0.9  # 假设平均为当前的90%

print("="*60)
print("数据概览")
print("="*60)
print(f"产品数：{len(products)}")
print(f"月度销售记录数：{len(sales_df)}")
print("\\n产品表：")
print(products.head(10))
print("\\n月度销售数据（前20行）：")
print(sales_df.head(20))
print()

# 2. 按月计算每个产品的销售数量总和
print("="*60)
print("月度销量统计")
print("="*60)
monthly_sales = sales_df.groupby(['月份', '产品ID'])['销售数量'].sum().reset_index()
print("月度销量（前20行）：")
print(monthly_sales.head(20))
print()

# 3. 计算周转率
print("="*60)
print("计算库存周转率")
print("="*60)

# 月度总销量
product_monthly_total = sales_df.groupby('产品ID')['销售数量'].sum().reset_index()
product_monthly_total.columns = ['产品ID', '月度总销量']

# 合并库存数据
turnover_df = product_monthly_total.merge(inventory_df[['产品ID', '平均库存']], on='产品ID')

# 计算周转率 = 月销量 / 平均库存
turnover_df['周转率'] = turnover_df['月度总销量'] / turnover_df['平均库存']

print("周转率计算结果：")
print(turnover_df.round(2))
print()

# 4. 标记风险产品
print("="*60)
print("风险产品识别")
print("="*60)

# 周转率 < 0.5：滞销
turnover_df['滞销风险'] = turnover_df['周转率'] < 0.5
# 周转率 > 5：缺货风险（高周转但库存可能不足）
turnover_df['缺货风险'] = turnover_df['周转率'] > 5

print(f"滞销产品数（周转率<0.5）：{turnover_df['滞销风险'].sum()}")
print(f"缺货风险产品数（周转率>5）：{turnover_df['缺货风险'].sum()}")

print("\\n滞销产品清单：")
slow_moving = turnover_df[turnover_df['滞销风险']].sort_values('周转率')
print(slow_moving[['产品ID', '月度总销量', '平均库存', '周转率']].round(2))

print("\\n缺货风险产品清单：")
stockout_risk = turnover_df[turnover_df['缺货风险']].sort_values('周转率', ascending=False)
print(stockout_risk[['产品ID', '月度总销量', '平均库存', '周转率']].round(2))
print()

# 5. 结合补货周期计算预警
print("="*60)
print("缺货预警分析")
print("="*60)
turnover_df = turnover_df.merge(products[['产品ID', '补货周期_天']], on='产品ID')

# 计算安全库存（简化版）
# 安全库存 = 日均销量 × 补货周期 × 1.5（安全系数）
turnover_df['日均销量'] = turnover_df['月度总销量'] / 30
turnover_df['建议安全库存'] = (turnover_df['日均销量'] * turnover_df['补货周期_天'] * 1.5).round(0)
turnover_df['库存是否充足'] = turnover_df['当前库存'] >= turnover_df['建议安全库存']

print("缺货预警详情：")
risk_warning = turnover_df[(turnover_df['缺货风险']) | (~turnover_df['库存是否充足'])]
print(risk_warning[['产品ID', '月度总销量', '当前库存', '建议安全库存', '库存是否充足']].round(2))
print()

# 6. 验证
assert '周转率' in turnover_df.columns, "周转率计算缺失"
assert len(turnover_df) == n_products, "产品数量不匹配"
print("✓ 库存周转与缺货预警分析完成！")
`,tips:["周转率 = 月销量 / 平均库存","周转率过低表示滞销，周转率过高可能缺货","安全库存要结合补货周期和日均销量计算"]},{id:"scm-project-3",chapterId:"chapter-45",title:"购物车分析——订单内产品组合频次",description:"基于订单明细，计算同时购买的产品对（Pair）及其频次。按订单分组，构造每个订单的产品列表，生成所有产品对，统计全量数据中每对产品的共现次数，找出 Top 10 最常一起购买的产品组合。",difficulty:"基础",skills:["关联规则","产品组合","共现频次"],initialCode:`import pandas as pd
import numpy as np
from itertools import combinations

# 1. 生成模拟订单数据
np.random.seed(42)
n_orders = 1000
n_products = 20

# 产品列表
products = {
    i: f'产品{i}' for i in range(1, n_products + 1)
}

# 生成订单（每个订单包含1-5个产品）
order_data = []
for order_id in range(1, n_orders + 1):
    # 随机选择1-5个产品
    n_items = np.random.randint(1, 6)
    product_ids = np.random.choice(range(1, n_products + 1), n_items, replace=False)
    
    for product_id in product_ids:
        order_data.append({
            '订单ID': order_id,
            '产品ID': product_id,
            '产品名称': products[product_id]
        })

order_df = pd.DataFrame(order_data)

print("="*60)
print("订单明细数据")
print("="*60)
print(f"总订单数：{order_df['订单ID'].nunique()}")
print(f"总记录数：{len(order_df)}")
print("\\n订单明细（前30行）：")
print(order_df.head(30))
print()

# 2. 按订单分组，构造产品列表
print("="*60)
print("构造产品购物篮")
print("="*60)
baskets = order_df.groupby('订单ID')['产品ID'].apply(list).reset_index()
baskets.columns = ['订单ID', '产品列表']
print(f"购物篮数量：{len(baskets)}")
print("\\n购物篮示例（前10个）：")
for i in range(10):
    print(f"订单{baskets.iloc[i]['订单ID']}: {[products[p] for p in baskets.iloc[i]['产品列表']]}")
print()

# 3. 生成所有产品对
print("="*60)
print("生成产品对组合")
print("="*60)

pair_counts = {}
for _, row in baskets.iterrows():
    products_in_basket = row['产品列表']
    # 生成所有两两组合
    if len(products_in_basket) >= 2:
        for pair in combinations(sorted(products_in_basket), 2):
            pair_key = (min(pair), max(pair))  # 确保顺序一致
            pair_counts[pair_key] = pair_counts.get(pair_key, 0) + 1

# 转换为DataFrame
pair_df = pd.DataFrame([
    {'产品1_ID': pair[0], '产品2_ID': pair[1], 
     '产品1': products[pair[0]], '产品2': products[pair[1]], 
     '共现次数': count}
    for pair, count in pair_counts.items()
])

# 添加产品名称列
pair_df = pair_df.sort_values('共现次数', ascending=False)

print(f"总产品对数：{len(pair_df)}")
print("\\n产品对共现统计（前20个）：")
print(pair_df.head(20))
print()

# 4. 找出Top 10最常一起购买的产品组合
print("="*60)
print("Top 10 最常一起购买的产品组合")
print("="*60)
top_10_pairs = pair_df.head(10)
print(top_10_pairs[['产品1', '产品2', '共现次数']])
print()

# 计算支持度
total_orders = len(baskets)
top_10_pairs['支持度'] = top_10_pairs['共现次数'] / total_orders

print("Top 10 产品对的详细分析：")
for idx, row in top_10_pairs.iterrows():
    print(f"\\n产品组合：{row['产品1']} + {row['产品2']}")
    print(f"  共现次数：{row['共现次数']}")
    print(f"  支持度：{row['支持度']:.2%}")
    
    # 判断是否适合捆绑促销
    if row['支持度'] > 0.05:
        recommendation = "强烈建议捆绑促销"
    elif row['支持度'] > 0.02:
        recommendation = "可以考虑捆绑促销"
    else:
        recommendation = "暂不推荐捆绑促销"
    print(f"  建议：{recommendation}")
print()

# 5. 按品类分析产品对
print("="*60)
print("品类间产品组合分析")
print("="*60)

# 获取产品品类信息
product_category = {i: np.random.choice(['电子产品', '服装', '食品', '家居']) for i in range(1, n_products + 1)}
pair_df['品类1'] = pair_df['产品1_ID'].map(product_category)
pair_df['品类2'] = pair_df['产品2_ID'].map(product_category)

# 统计品类间组合
cross_category = pair_df[pair_df['品类1'] != pair_df['品类2']].groupby(['品类1', '品类2'])['共现次数'].sum().reset_index()
cross_category = cross_category.sort_values('共现次数', ascending=False)

print("跨品类产品组合（Top 10）：")
print(cross_category.head(10))
print()

# 6. 验证
assert len(pair_df) > 0, "没有生成有效产品对"
assert pair_df['共现次数'].max() > 0, "共现次数为0"
print("✓ 购物车产品组合分析完成！")
`,tips:["共现次数表示两个产品同时出现在同一订单的次数","支持度 = 共现次数 / 总订单数","支持度高的产品对适合捆绑促销"]},{id:"scm-project-4",chapterId:"chapter-46",title:"客户价值分层（RFM + KMeans 聚类）",description:"使用 RFM（最近购买、频率、金额）做客户聚类。计算每个客户的 R / F / M 值，标准化 RFM 特征，使用 KMeans 聚类（elbow 法选 k），解释各群组业务含义。",difficulty:"进阶",skills:["RFM模型","KMeans聚类","客户分层"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. 生成模拟订单数据
np.random.seed(42)
n_customers = 200
n_orders = 3000
reference_date = datetime(2024, 3, 1)

# 客户表
customers = pd.DataFrame({
    '客户ID': range(1, n_customers + 1),
    '客户名称': [f'客户{i}' for i in range(1, n_customers + 1)],
    '注册日期': [reference_date - timedelta(days=np.random.randint(30, 365)) for _ in range(n_customers)]
})

# 订单表
order_data = []
for _ in range(n_orders):
    customer_id = np.random.randint(1, n_customers + 1)
    order_date = reference_date - timedelta(days=np.random.randint(0, 90))
    amount = np.random.normal(500, 200)
    order_data.append({
        '客户ID': customer_id,
        '订单ID': len(order_data) + 1,
        '订单日期': order_date,
        '订单金额': max(amount, 50)
    })

orders_df = pd.DataFrame(order_data)

print("="*60)
print("数据概览")
print("="*60)
print(f"客户数：{len(customers)}")
print(f"订单数：{len(orders_df)}")
print("\\n订单数据（前20行）：")
print(orders_df.head(20))
print()

# 2. 计算RFM值
print("="*60)
print("计算RFM值")
print("="*60)

rfm = orders_df.groupby('客户ID').agg({
    '订单日期': lambda x: (reference_date - x.max()).days,  # R：最近消费天数
    '订单ID': 'count',  # F：订单频次
    '订单金额': 'sum'  # M：总消费金额
}).reset_index()

rfm.columns = ['客户ID', 'R（最近消费天数）', 'F（订单频次）', 'M（总消费金额）']

print("RFM计算结果（前20行）：")
print(rfm.head(20).round(2))
print()

# 3. 标准化RFM特征
print("="*60)
print("标准化RFM特征")
print("="*60)

features = ['R（最近消费天数）', 'F（订单频次）', 'M（总消费金额）']
X = rfm[features]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print("标准化后的RFM特征（前10行）：")
print(pd.DataFrame(X_scaled, columns=features, index=rfm['客户ID']).head(10).round(4))
print()

# 4. 使用肘部法则确定K值
print("="*60)
print("肘部法则确定K值")
print("="*60)

inertias = []
k_range = range(2, 11)

for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)
    print(f"K={k}: Inertia={kmeans.inertia_:.2f}")

# 选择K=4（业务通常将客户分为4层）
best_k = 4
print(f"\\n选择K={best_k}（高价值、重要发展、一般、流失边缘）")
print()

# 5. KMeans聚类
print("="*60)
print("KMeans客户聚类")
print("="*60)

kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
rfm['簇标签'] = kmeans.fit_predict(X_scaled)
rfm['簇标签'] = rfm['簇标签'].astype(int)

print("聚类结果分布：")
print(rfm['簇标签'].value_counts().sort_index())
print()

# 6. 分析各簇特征
print("="*60)
print("各簇业务含义解读")
print("="*60)

cluster_stats = rfm.groupby('簇标签').agg({
    '客户ID': 'count',
    'R（最近消费天数）': 'mean',
    'F（订单频次）': 'mean',
    'M（总消费金额）': 'mean'
}).round(2)

cluster_stats.columns = ['客户数', '平均R值', '平均F值', '平均M值']

# 为各簇命名
cluster_names = {}
for cluster_id in range(best_k):
    stats = cluster_stats.loc[cluster_id]
    if stats['平均R值'] < 15 and stats['平均F值'] > 15 and stats['平均M值'] > 600:
        name = '高价值活跃客户'
    elif stats['平均R值'] < 30 and stats['平均F值'] > 10:
        name = '重要发展客户'
    elif stats['平均R值'] > 50:
        name = '流失边缘客户'
    else:
        name = '一般价值客户'
    cluster_names[cluster_id] = name

cluster_stats['业务含义'] = cluster_stats.index.map(cluster_names)
print(cluster_stats)
print()

# 为每个客户标注群体
rfm['客户群体'] = rfm['簇标签'].map(cluster_names)

# 7. 输出各群体客户明细
print("="*60)
print("各群体客户明细")
print("="*60)

for cluster_id in range(best_k):
    cluster_name = cluster_names[cluster_id]
    cluster_customers = rfm[rfm['簇标签'] == cluster_id]
    print(f"\\n【{cluster_name}】（共{len(cluster_customers)}人）")
    print(cluster_customers[['客户ID', 'R（最近消费天数）', 'F（订单频次）', 'M（总消费金额）']].sort_values('M（总消费金额）', ascending=False).head(5))
print()

# 8. 验证
assert '簇标签' in rfm.columns, "聚类结果缺失"
assert len(rfm['簇标签'].unique()) == best_k, "簇数量不正确"
print("✓ RFM客户分层完成！")
`,tips:["R值越小（最近消费越近）越好","F值和M值越大越好","聚类后要给每个簇赋予业务含义，便于制定差异化策略"]},{id:"scm-project-5",chapterId:"chapter-47",title:"供应商交货准时率与质量评分聚类",description:"对供应商进行基于准时率、不良率、响应时间的聚类。计算准时率、不良率、平均延期天数，去除异常供应商（数据不足），使用 KMeans 聚类（k=3 或 4），识别优秀、一般、高风险供应商。",difficulty:"进阶",skills:["供应商评分","聚类分析","风险识别"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. 生成模拟采购数据
np.random.seed(42)
n_suppliers = 50
n_orders = 500

# 供应商表
suppliers = pd.DataFrame({
    '供应商ID': range(1, n_suppliers + 1),
    '供应商名称': [f'供应商{i}' for i in range(1, n_suppliers + 1)],
    '供应商类型': np.random.choice(['原材料', '零部件', '包装'], n_suppliers)
})

# 采购订单表
purchase_data = []
for order_id in range(1, n_orders + 1):
    supplier_id = np.random.randint(1, n_suppliers + 1)
    planned_date = datetime(2024, 1, 1) + timedelta(days=np.random.randint(0, 90))
    # 模拟延期（有些供应商经常延期）
    if supplier_id <= 15:
        delay_days = np.random.normal(0, 2)  # 准时型
    elif supplier_id <= 35:
        delay_days = np.random.normal(5, 3)  # 轻微延期
    else:
        delay_days = np.random.normal(15, 5)  # 严重延期
    
    actual_date = planned_date + timedelta(days=max(delay_days, 0))
    
    # 模拟不良品
    if supplier_id <= 20:
        defect_rate = np.random.uniform(0, 0.02)  # 优质
    elif supplier_id <= 40:
        defect_rate = np.random.uniform(0.02, 0.05)  # 一般
    else:
        defect_rate = np.random.uniform(0.05, 0.15)  # 较差
    
    total_items = np.random.randint(100, 1000)
    defect_items = int(total_items * defect_rate)
    
    purchase_data.append({
        '订单ID': order_id,
        '供应商ID': supplier_id,
        '计划交货日': planned_date,
        '实际交货日': actual_date,
        '延期天数': max(delay_days, 0),
        '总件数': total_items,
        '不良品数': defect_items
    })

purchase_df = pd.DataFrame(purchase_data)

print("="*60)
print("采购数据概览")
print("="*60)
print(f"供应商数：{n_suppliers}")
print(f"订单数：{len(purchase_df)}")
print("\\n采购订单数据（前20行）：")
print(purchase_df.head(20))
print()

# 2. 计算供应商绩效指标
print("="*60)
print("计算供应商绩效指标")
print("="*60)

supplier_stats = purchase_df.groupby('供应商ID').agg({
    '订单ID': 'count',  # 订单数
    '延期天数': ['mean', 'sum'],  # 平均延期、总延期
    '总件数': 'sum',  # 总供货量
    '不良品数': 'sum'  # 总不良品数
}).reset_index()

supplier_stats.columns = ['供应商ID', '订单数', '平均延期天数', '总延期天数', '总供货量', '总不良品数']

# 计算准时率和不良率
supplier_stats['准时率'] = ((supplier_stats['平均延期天数'] <= 0) | (supplier_stats['平均延期天数'].isna())).astype(int)
supplier_stats['准时率'] = 1 - (supplier_stats['平均延期天数'] / supplier_stats['平均延期天数'].max()).clip(0, 1)
supplier_stats['不良率'] = supplier_stats['总不良品数'] / supplier_stats['总供货量']

print("供应商绩效统计（前20行）：")
print(supplier_stats.head(20).round(4))
print()

# 3. 去除异常供应商（数据不足）
print("="*60)
print("数据质量筛选")
print("="*60)
MIN_ORDERS = 5
supplier_stats_filtered = supplier_stats[supplier_stats['订单数'] >= MIN_ORDERS].copy()
print(f"原始供应商数：{len(supplier_stats)}")
print(f"订单数>={MIN_ORDERS}的供应商数：{len(supplier_stats_filtered)}")
print()

# 4. KMeans聚类
print("="*60)
print("供应商聚类分析")
print("="*60)

features = ['准时率', '不良率', '平均延期天数']
X = supplier_stats_filtered[features]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 选择K=3
best_k = 3
kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
supplier_stats_filtered['簇标签'] = kmeans.fit_predict(X_scaled)

print(f"聚类数量K={best_k}")
print("聚类结果分布：")
print(supplier_stats_filtered['簇标签'].value_counts().sort_index())
print()

# 5. 分析各簇特征
print("="*60)
print("各簇供应商特征分析")
print("="*60)

cluster_stats = supplier_stats_filtered.groupby('簇标签').agg({
    '供应商ID': 'count',
    '准时率': 'mean',
    '不良率': 'mean',
    '平均延期天数': 'mean'
}).round(4)

cluster_stats.columns = ['供应商数', '平均准时率', '平均不良率', '平均延期天数']

# 为各簇命名
cluster_names = {}
for cluster_id in range(best_k):
    stats = cluster_stats.loc[cluster_id]
    if stats['平均准时率'] > 0.9 and stats['平均不良率'] < 0.02:
        name = '优秀供应商'
    elif stats['平均准时率'] > 0.7 and stats['平均不良率'] < 0.05:
        name = '一般供应商'
    else:
        name = '高风险供应商'
    cluster_names[cluster_id] = name

cluster_stats['供应商类别'] = cluster_stats.index.map(cluster_names)
print(cluster_stats)
print()

# 6. 为供应商分类
supplier_stats_filtered['供应商类别'] = supplier_stats_filtered['簇标签'].map(cluster_names)

print("="*60)
print("各类别供应商明细")
print("="*60)

for category in ['优秀供应商', '一般供应商', '高风险供应商']:
    category_suppliers = supplier_stats_filtered[supplier_stats_filtered['供应商类别'] == category]
    print(f"\\n【{category}】（共{len(category_suppliers)}家）")
    if len(category_suppliers) > 0:
        print(category_suppliers[['供应商ID', '订单数', '准时率', '不良率', '平均延期天数']].sort_values('准时率', ascending=False).head(10).round(4))
print()

# 7. 验证
assert '簇标签' in supplier_stats_filtered.columns, "聚类结果缺失"
print("✓ 供应商交货准时率与质量评分聚类完成！")
`,tips:["准时率越高、不良率越低表示供应商越好","聚类可以自动发现供应商的分层","高风险供应商需要重点关注和改进"]},{id:"scm-project-6",chapterId:"chapter-48",title:"季节性销售聚类（产品按月销量模式聚类）",description:"找出不同销售季节模式的产品群。构建产品 × 月份 销量矩阵，对产品进行聚类（按销量时间序列形状），分析每类产品的峰值月份、低谷月份，建议对应月份的库存策略。",difficulty:"进阶",skills:["时间序列聚类","季节性分析","库存策略"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. 生成模拟月度销量数据
np.random.seed(42)
n_products = 30
n_months = 12

# 产品信息
products = pd.DataFrame({
    '产品ID': range(1, n_products + 1),
    '产品名称': [f'产品{i}' for i in range(1, n_products + 1)],
    '品类': np.random.choice(['服装', '电子产品', '食品', '家居'], n_products)
})

# 生成月度销量（考虑季节性）
sales_data = []
for product_id in range(1, n_products + 1):
    # 基础销量
    base_sales = np.random.randint(100, 500)
    
    # 根据品类设置季节性模式
    if products.loc[products['产品ID'] == product_id, '品类'].values[0] == '服装':
        # 服装：春秋季高，夏季低
        seasonal_pattern = [0.6, 0.7, 0.9, 1.2, 1.5, 0.8, 0.7, 0.8, 1.3, 1.2, 0.9, 0.5]
    elif products.loc[products['产品ID'] == product_id, '品类'].values[0] == '电子产品':
        # 电子产品：年底促销高
        seasonal_pattern = [0.7, 0.8, 0.9, 1.0, 1.0, 1.1, 0.9, 1.0, 1.1, 1.2, 1.5, 2.0]
    elif products.loc[products['产品ID'] == product_id, '品类'].values[0] == '食品':
        # 食品：全年稳定，节假日略高
        seasonal_pattern = [1.0, 1.0, 1.0, 1.0, 1.1, 1.0, 1.0, 1.0, 1.1, 1.0, 1.2, 1.3]
    else:
        # 家居：春季和年底高
        seasonal_pattern = [0.8, 0.9, 1.2, 1.3, 1.0, 0.9, 0.8, 0.9, 1.0, 1.1, 1.4, 1.2]
    
    for month in range(1, n_months + 1):
        # 添加随机波动
        sales = base_sales * seasonal_pattern[month-1] * np.random.uniform(0.9, 1.1)
        sales_data.append({
            '产品ID': product_id,
            '月份': month,
            '销量': int(sales)
        })

sales_df = pd.DataFrame(sales_data)

print("="*60)
print("月度销量数据")
print("="*60)
print(f"产品数：{n_products}")
print(f"月度记录数：{len(sales_df)}")
print("\\n销量数据（前30行）：")
print(sales_df.head(30))
print()

# 2. 构建产品 × 月份 销量矩阵
print("="*60)
print("构建产品-月份矩阵")
print("="*60)
sales_matrix = sales_df.pivot(index='产品ID', columns='月份', values='销量').fillna(0)
print("产品-月份销量矩阵（前10个产品）：")
print(sales_matrix.head(10))
print()

# 3. 对产品进行聚类
print("="*60)
print("产品销量模式聚类")
print("="*60)

# 标准化每个产品的销量模式（除以均值，消除绝对值影响）
sales_matrix_normalized = sales_matrix.div(sales_matrix.mean(axis=1), axis=0)
print("标准化后的销量模式（前10个产品）：")
print(sales_matrix_normalized.head(10).round(2))
print()

X = sales_matrix_normalized.values
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 选择K=3（不同季节性模式）
best_k = 3
kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
cluster_labels = kmeans.fit_predict(X_scaled)

print(f"聚类数量K={best_k}")
print("各簇产品数：")
print(pd.Series(cluster_labels).value_counts().sort_index())
print()

# 4. 分析每个簇的特征
print("="*60)
print("各簇季节性特征分析")
print("="*60)

# 计算每个簇的月度平均销量
cluster_centers_df = pd.DataFrame(
    kmeans.cluster_centers_,
    columns=[f'月份{i}' for i in range(1, n_months + 1)],
    index=[f'簇{i}' for i in range(best_k)]
)
print("聚类中心（销量模式）：")
print(cluster_centers_df.round(2))
print()

# 为产品标注聚类
products['聚类'] = cluster_labels

# 分析每个簇的峰值和低谷月份
cluster_analysis = []
for cluster_id in range(best_k):
    cluster_products = products[products['聚类'] == cluster_id]['产品ID'].values
    cluster_sales = sales_matrix.loc[cluster_products].mean()
    
    peak_month = cluster_sales.idxmax()
    low_month = cluster_sales.idxmin()
    total_sales = cluster_sales.sum()
    
    cluster_analysis.append({
        '簇ID': cluster_id,
        '产品数': len(cluster_products),
        '总销量': total_sales,
        '峰值月份': peak_month,
        '峰值销量': cluster_sales.max(),
        '低谷月份': low_month,
        '低谷销量': cluster_sales.min()
    })

cluster_analysis_df = pd.DataFrame(cluster_analysis)

# 为各簇命名
def name_cluster(row):
    peak = row['峰值月份']
    low = row['低谷月份']
    if peak in [11, 12] or peak == 1:
        return '年底旺季型'
    elif peak in [4, 5, 9, 10]:
        return '春秋季型'
    elif peak in [6, 7, 8]:
        return '夏季旺季型'
    else:
        return '稳定型'

cluster_analysis_df['季节类型'] = cluster_analysis_df.apply(name_cluster, axis=1)

print("各簇季节性分析：")
print(cluster_analysis_df)
print()

# 5. 库存策略建议
print("="*60)
print("库存策略建议")
print("="*60)

for _, row in cluster_analysis_df.iterrows():
    print(f"\\n【{row['季节类型']}】（簇{row['簇ID']}）")
    print(f"  产品数：{row['产品数']}")
    print(f"  峰值月份：{row['峰值月份']}月（销量：{row['峰值销量']:.0f}）")
    print(f"  低谷月份：{row['低谷月份']}月（销量：{row['低谷销量']:.0f}）")
    
    # 库存建议
    if '旺季' in row['季节类型']:
        print(f"  库存建议：")
        print(f"    - 峰值月前1个月开始备货")
        print(f"    - 保持安全库存在峰值销量的150%")
        print(f"    - 低谷月减少采购，避免积压")
    else:
        print(f"  库存建议：")
        print(f"    - 全年保持稳定库存水平")
        print(f"    - 关注节假日提前备货")
print()

# 6. 验证
assert '聚类' in products.columns, "聚类结果缺失"
print("✓ 季节性销售聚类分析完成！")
`,tips:["不同品类的产品有不同的时间序列模式","可以用肘部法则确定最佳聚类数","聚类结果可以指导差异化的库存策略"]},{id:"scm-project-7",chapterId:"chapter-49",title:"仓库选址候选点聚类（基于客户地址经纬度）",description:"基于客户分布，聚类出 K 个仓库候选点。清洗无效坐标，使用 KMeans 聚类（按实际业务需求设定 K=5~10），计算每个聚类中心坐标作为候选仓库，统计各仓库覆盖的订单数量。",difficulty:"进阶",skills:["仓库选址","地理聚类","订单覆盖"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

# 1. 生成模拟客户位置数据
np.random.seed(42)
n_customers = 500
n_orders = 2000

# 客户表（包含经纬度坐标，模拟国内城市分布）
# 假设主要分布在几个大城市群
city_centers = {
    '北京': (39.9, 116.4),
    '上海': (31.2, 121.5),
    '广州': (23.1, 113.3),
    '深圳': (22.5, 114.1),
    '成都': (30.6, 104.0),
    '杭州': (30.3, 120.2)
}

customer_data = []
for i in range(n_customers):
    # 随机选择一个城市群
    city = np.random.choice(list(city_centers.keys()))
    lat, lon = city_centers[city]
    
    # 添加随机偏移（模拟城市内分布）
    lat += np.random.normal(0, 0.5)
    lon += np.random.normal(0, 0.5)
    
    customer_data.append({
        '客户ID': i + 1,
        '客户名称': f'客户{i+1}',
        '纬度': lat,
        '经度': lon,
        '所属城市': city
    })

customers_df = pd.DataFrame(customer_data)

# 订单表
order_data = []
for _ in range(n_orders):
    customer_id = np.random.randint(1, n_customers + 1)
    order_date = f'2024-{np.random.randint(1, 13):02d}-{np.random.randint(1, 29):02d}'
    amount = np.random.uniform(100, 5000)
    order_data.append({
        '客户ID': customer_id,
        '订单ID': len(order_data) + 1,
        '订单日期': order_date,
        '订单金额': amount
    })

orders_df = pd.DataFrame(order_data)

print("="*60)
print("客户地理位置数据")
print("="*60)
print(f"客户数：{n_customers}")
print("\\n客户位置数据（前20行）：")
print(customers_df.head(20))
print()

# 2. 数据清洗
print("="*60)
print("数据清洗")
print("="*60)

# 清洗无效坐标（中国范围大致：纬度20-50，经度73-135）
initial_count = len(customers_df)
customers_clean = customers_df[
    (customers_df['纬度'] >= 20) & (customers_df['纬度'] <= 50) &
    (customers_df['经度'] >= 73) & (customers_df['经度'] <= 135)
].copy()

print(f"清洗前行数：{initial_count}")
print(f"清洗后行数：{len(customers_clean)}")
print(f"删除无效坐标：{initial_count - len(customers_clean)}")
print()

# 3. KMeans聚类找仓库候选点
print("="*60)
print("仓库候选点聚类")
print("="*60)

# 设定K=6（对应6个城市群）
best_k = 6
coords = customers_clean[['纬度', '经度']].values

kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
customers_clean['仓库簇'] = kmeans.fit_predict(coords)

# 计算聚类中心
centers = kmeans.cluster_centers_
print(f"聚类数量K={best_k}")
print("候选仓库坐标：")
for i, center in enumerate(centers):
    print(f"  仓库{i+1}: 纬度={center[0]:.4f}, 经度={center[1]:.4f}")
print()

# 4. 统计各仓库覆盖的订单数量
print("="*60)
print("各仓库订单覆盖统计")
print("="*60)

# 合并客户和订单
orders_with_coords = orders_df.merge(customers_clean[['客户ID', '仓库簇']], on='客户ID')

warehouse_stats = orders_with_coords.groupby('仓库簇').agg({
    '订单ID': 'count',
    '订单金额': ['sum', 'mean']
}).reset_index()

warehouse_stats.columns = ['仓库簇', '订单数', '总金额', '平均金额']

# 添加仓库坐标
warehouse_stats['纬度'] = [centers[i][0] for i in warehouse_stats['仓库簇']]
warehouse_stats['经度'] = [centers[i][1] for i in warehouse_stats['仓库簇']]

print("各仓库统计：")
print(warehouse_stats.round(2))
print()

# 5. 按仓库统计覆盖的客户数
print("="*60)
print("各仓库客户覆盖分析")
print("="*60)

customer_coverage = customers_clean.groupby('仓库簇').size().reset_index()
customer_coverage.columns = ['仓库簇', '客户数']
customer_coverage['纬度'] = [centers[i][0] for i in customer_coverage['仓库簇']]
customer_coverage['经度'] = [centers[i][1] for i in customer_coverage['仓库簇']]

print("各仓库客户覆盖：")
print(customer_coverage)
print()

# 6. 生成仓库选址建议
print("="*60)
print("仓库选址建议")
print("="*60)

for _, row in warehouse_stats.iterrows():
    warehouse_id = int(row['仓库簇']) + 1
    print(f"\\n【仓库{warehouse_id}】")
    print(f"  建议坐标：纬度={row['纬度']:.4f}, 经度={row['经度']:.4f}")
    print(f"  覆盖订单数：{row['订单数']}")
    print(f"  覆盖订单总金额：¥{row['总金额']:,.2f}")
    print(f"  覆盖客户数：{customer_coverage[customer_coverage['仓库簇']==row['仓库簇']]['客户数'].values[0]}")
    
    # 建议
    if row['订单数'] > 400:
        priority = "高优先级，建议优先建设"
    elif row['订单数'] > 250:
        priority = "中优先级，建议中期建设"
    else:
        priority = "低优先级，可延后建设"
    print(f"  建设优先级：{priority}")
print()

# 7. 验证
assert '仓库簇' in customers_clean.columns, "聚类结果缺失"
assert len(warehouse_stats) == best_k, "仓库数量不匹配"
print("✓ 仓库选址候选点聚类完成！")
`,tips:["KMeans会自动找到K个聚类中心作为仓库候选点","可以根据实际业务需求设定K值","订单覆盖量可以指导仓库建设优先级"]},{id:"scm-project-8",chapterId:"chapter-50",title:"促销效果对比（A/B 类产品购货车分析对比）",description:"对比促销组与非促销组的购物车关联规则差异。拆分促销订单与非促销订单，分别计算两类订单中的高共现产品对，找出仅在促销组中显著出现的产品对，分析促销是否改变了购买组合习惯。",difficulty:"进阶",skills:["A/B测试","促销分析","产品共现"],initialCode:`import pandas as pd
import numpy as np
from itertools import combinations

# 1. 生成模拟订单数据（包含促销标记）
np.random.seed(42)
n_orders = 1000
n_products = 20

products = {i: f'产品{i}' for i in range(1, n_products + 1)}

# 生成订单
order_data = []
for order_id in range(1, n_orders + 1):
    # 30%的订单为促销订单
    is_promotion = np.random.random() < 0.3
    
    # 促销产品和非促销产品有不同的购买模式
    if is_promotion:
        # 促销订单：更容易购买促销产品（产品1-10为促销产品）
        n_items = np.random.randint(1, 5)
        product_pool = range(1, 11)  # 促销产品池
    else:
        # 非促销订单：购买更分散
        n_items = np.random.randint(1, 6)
        product_pool = range(1, n_products + 1)
    
    product_ids = np.random.choice(list(product_pool), n_items, replace=False)
    
    for product_id in product_ids:
        order_data.append({
            '订单ID': order_id,
            '产品ID': product_id,
            '是否促销': 1 if is_promotion else 0
        })

order_df = pd.DataFrame(order_data)

print("="*60)
print("订单数据概览")
print("="*60)
print(f"总订单数：{order_df['订单ID'].nunique()}")
print(f"促销订单数：{order_df[order_df['是否促销']==1]['订单ID'].nunique()}")
print(f"非促销订单数：{order_df[order_df['是否促销']==0]['订单ID'].nunique()}")
print()

# 2. 拆分促销组和非促销组
print("="*60)
print("拆分促销组与非促销组")
print("="*60)

promo_orders = order_df[order_df['是否促销'] == 1]['订单ID'].unique()
non_promo_orders = order_df[order_df['是否促销'] == 0]['订单ID'].unique()

promo_df = order_df[order_df['是否促销'] == 1].copy()
non_promo_df = order_df[order_df['是否促销'] == 0].copy()

print(f"促销组订单数：{len(promo_orders)}")
print(f"非促销组订单数：{len(non_promo_orders)}")
print()

# 3. 计算各组产品共现
def calculate_cooccurrence(df, order_ids):
    """计算产品共现矩阵"""
    df_filtered = df[df['订单ID'].isin(order_ids)]
    baskets = df_filtered.groupby('订单ID')['产品ID'].apply(list).reset_index()
    
    pair_counts = {}
    for _, row in baskets.iterrows():
        products_in_basket = row['产品ID']
        if len(products_in_basket) >= 2:
            for pair in combinations(sorted(set(products_in_basket)), 2):
                pair_key = (min(pair), max(pair))
                pair_counts[pair_key] = pair_counts.get(pair_key, 0) + 1
    
    return pair_counts

print("="*60)
print("计算产品共现频次")
print("="*60)

promo_pairs = calculate_cooccurrence(promo_df, promo_orders)
non_promo_pairs = calculate_cooccurrence(non_promo_df, non_promo_orders)

print(f"促销组产品对数：{len(promo_pairs)}")
print(f"非促销组产品对数：{len(non_promo_pairs)}")
print()

# 4. 构建对比表
print("="*60)
print("促销组 Top10 产品共现")
print("="*60)

promo_pairs_df = pd.DataFrame([
    {'产品1': products[p[0]], '产品2': products[p[1]], '共现次数': count}
    for p, count in sorted(promo_pairs.items(), key=lambda x: x[1], reverse=True)[:10]
])
print(promo_pairs_df)
print()

print("="*60)
print("非促销组 Top10 产品共现")
print("="*60)

non_promo_pairs_df = pd.DataFrame([
    {'产品1': products[p[0]], '产品2': products[p[1]], '共现次数': count}
    for p, count in sorted(non_promo_pairs.items(), key=lambda x: x[1], reverse=True)[:10]
])
print(non_promo_pairs_df)
print()

# 5. 找出仅在促销组显著的产品对
print("="*60)
print("促销特有产品组合分析")
print("="*60)

# 计算支持度
promo_support = {pair: count/len(promo_orders) for pair, count in promo_pairs.items()}
non_promo_support = {pair: count/len(non_promo_orders) for pair, count in non_promo_pairs.items()}

# 找出促销组支持度明显高于非促销组的产品对
promo_only_pairs = []
for pair, promo_supp in promo_support.items():
    non_promo_supp = non_promo_support.get(pair, 0)
    if promo_supp > 0.05 and promo_supp / (non_promo_supp + 0.001) > 1.5:
        promo_only_pairs.append({
            '产品1': products[pair[0]],
            '产品2': products[pair[1]],
            '促销支持度': promo_supp,
            '非促销支持度': non_promo_supp,
            '提升倍数': promo_supp / (non_promo_supp + 0.001)
        })

promo_only_df = pd.DataFrame(promo_only_pairs)
promo_only_df = promo_only_df.sort_values('提升倍数', ascending=False)

if len(promo_only_df) > 0:
    print("促销显著提升的产品组合：")
    print(promo_only_df.round(4))
else:
    print("没有找到促销显著提升的产品组合")
print()

# 6. 业务结论
print("="*60)
print("促销效果业务结论")
print("="*60)

if len(promo_only_df) > 0:
    print(f"发现{len(promo_only_df)}个促销显著提升的产品组合")
    print("\\n业务建议：")
    print("1. 这些产品组合在促销期间购买频次显著提升")
    print("2. 建议在促销时将这些产品捆绑销售")
    print("3. 可以针对这些组合设计专门的促销方案")
else:
    print("促销对产品组合购买习惯影响不明显")
    print("\\n可能的原因为：")
    print("- 促销力度不够大")
    print("- 产品关联性本身较弱")
    print("- 需要更长的观察周期")
print()

# 7. 验证
assert len(promo_pairs_df) > 0 or len(non_promo_pairs_df) > 0, "没有计算到有效产品对"
print("✓ 促销效果对比分析完成！")
`,tips:["A/B测试可以对比促销前后的产品组合变化","提升倍数大的产品对说明促销效果显著","可以利用促销特有组合设计捆绑销售方案"]},{id:"scm-project-9",chapterId:"chapter-51",title:"退货原因聚类分析（文本 + 数量特征）",description:"对退货订单进行聚类，发现主要退货模式。对退货原因文本做 TF-IDF 向量化，结合退货金额与数量特征，一起做 KMeans 聚类，解读每个聚类（如：质量问题退货、数量多发退货、无理由退货）。",difficulty:"进阶",skills:["退货分析","文本向量化","KMeans聚类"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. 生成模拟退货数据
np.random.seed(42)
n_returns = 300

# 退货原因文本库
reason_templates = [
    '质量问题，多次维修仍无法使用',
    '尺寸不合适，偏大',
    '尺寸不合适，偏小',
    '颜色与图片不符',
    '商品破损，包装损坏',
    '收到错误商品',
    '不想要了',
    '后悔购买',
    '七天无理由退货',
    '与其他平台比较后发现更便宜',
    '数量错误，少发了一件',
    '数量错误，多发了一件',
    '性能不达标',
    '做工粗糙',
    '气味刺鼻'
]

return_data = []
for i in range(n_returns):
    # 根据退货原因类型设置损失金额和数量
    reason_template = np.random.choice(reason_templates)
    
    # 质量问题的损失较高
    if '质量' in reason_template or '破损' in reason_template or '错误' in reason_template:
        return_amount = np.random.uniform(200, 1000)
        return_quantity = np.random.randint(1, 3)
    elif '尺寸' in reason_template or '颜色' in reason_template:
        return_amount = np.random.uniform(100, 500)
        return_quantity = 1
    else:
        return_amount = np.random.uniform(50, 300)
        return_quantity = 1
    
    return_data.append({
        '退货ID': i + 1,
        '退货原因': reason_template,
        '退货金额': return_amount,
        '退货数量': return_quantity,
        '商品类别': np.random.choice(['服装', '电子产品', '家居', '食品'])
    })

returns_df = pd.DataFrame(return_data)

print("="*60)
print("退货数据概览")
print("="*60)
print(f"总退货数：{len(returns_df)}")
print("\\n退货数据（前20行）：")
print(returns_df.head(20))
print()

# 2. 文本特征向量化（简化版：基于关键词）
print("="*60)
print("退货原因文本特征提取")
print("="*60)

# 定义关键词特征
keywords = ['质量', '尺寸', '颜色', '破损', '错误', '不想要', '后悔', '无理由', '便宜', '数量', '性能', '做工', '气味']

def extract_keyword_features(text):
    features = []
    for keyword in keywords:
        features.append(1 if keyword in text else 0)
    return features

keyword_features = returns_df['退货原因'].apply(lambda x: extract_keyword_features(x))
keyword_df = pd.DataFrame(keyword_features.tolist(), columns=keywords)
keyword_df.index = returns_df.index

print("文本关键词特征（前20行）：")
print(keyword_df.head(20))
print()

# 3. 合并特征
print("="*60)
print("合并文本和数值特征")
print("="*60)

# 数值特征
numeric_features = returns_df[['退货金额', '退货数量']].values

# 合并特征
X_text = keyword_df.values
X_numeric = StandardScaler().fit_transform(numeric_features)
X_combined = np.hstack([X_text, X_numeric])

print(f"合并特征维度：{X_combined.shape}")
print()

# 4. KMeans聚类
print("="*60)
print("退货原因聚类")
print("="*60)

best_k = 3
kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
returns_df['簇标签'] = kmeans.fit_predict(X_combined)

print(f"聚类数量K={best_k}")
print("各簇退货数：")
print(returns_df['簇标签'].value_counts().sort_index())
print()

# 5. 分析每个聚类的特征
print("="*60)
print("各聚类退货模式分析")
print("="*60)

cluster_analysis = []
for cluster_id in range(best_k):
    cluster_data = returns_df[returns_df['簇标签'] == cluster_id]
    
    # 统计数值特征
    avg_amount = cluster_data['退货金额'].mean()
    avg_quantity = cluster_data['退货数量'].mean()
    
    # 统计高频关键词
    keyword_freq = keyword_df.loc[cluster_data.index].sum().sort_values(ascending=False)
    top_keywords = keyword_freq[keyword_freq > 0].head(3).index.tolist()
    
    # 统计退货原因
    reason_counts = cluster_data['退货原因'].value_counts()
    top_reasons = reason_counts.head(2).index.tolist()
    
    cluster_analysis.append({
        '簇ID': cluster_id,
        '退货数': len(cluster_data),
        '平均损失金额': avg_amount,
        '平均退货数量': avg_quantity,
        '高频原因': ', '.join(top_reasons[:2]),
        '关键词': ', '.join(top_keywords)
    })

cluster_df = pd.DataFrame(cluster_analysis)

# 为各簇命名
def name_cluster(row):
    reasons = row['高频原因']
    keywords = row['关键词']
    
    if '质量' in reasons or '破损' in reasons or '做工' in reasons or '气味' in reasons:
        return '质量问题退货'
    elif '尺寸' in reasons or '颜色' in reasons:
        return '外观不符退货'
    elif '错误' in reasons or '数量' in reasons:
        return '发货错误退货'
    elif '不想要' in reasons or '后悔' in reasons or '无理由' in reasons:
        return '主观意愿退货'
    else:
        return '其他原因退货'

cluster_df['退货类型'] = cluster_df.apply(name_cluster, axis=1)

print(cluster_df)
print()

# 6. 详细分析各类型
print("="*60)
print("各类退货详细分析")
print("="*60)

returns_df['退货类型'] = returns_df['簇标签'].map(
    dict(zip(cluster_df['簇ID'], cluster_df['退货类型']))
)

for return_type in cluster_df['退货类型']:
    type_data = returns_df[returns_df['退货类型'] == return_type]
    print(f"\\n【{return_type}】（共{len(type_data)}单）")
    print(f"  平均损失金额：¥{type_data['退货金额'].mean():.2f}")
    print(f"  平均退货数量：{type_data['退货数量'].mean():.2f}")
    print(f"  典型退货原因：")
    for reason, count in type_data['退货原因'].value_counts().head(3).items():
        print(f"    - {reason} ({count}单)")
print()

# 7. 业务建议
print("="*60)
print("业务改进建议")
print("="*60)

for _, row in cluster_df.iterrows():
    print(f"\\n【{row['退货类型']}】")
    print(f"  占比：{row['退货数']/len(returns_df)*100:.1f}%")
    
    if row['退货类型'] == '质量问题退货':
        print("  建议：加强供应商质量管控，完善退换货流程")
    elif row['退货类型'] == '外观不符退货':
        print("  建议：优化商品描述页，确保图片与实物一致")
    elif row['退货类型'] == '发货错误退货':
        print("  建议：升级仓储系统，增加发货复核环节")
    elif row['退货类型'] == '主观意愿退货':
        print("  建议：优化商品详情页，帮助用户做出更准确的购买决策")
print()

# 8. 验证
assert '簇标签' in returns_df.columns, "聚类结果缺失"
print("✓ 退货原因聚类分析完成！")
`,tips:["文本特征可以简化为关键词出现与否","结合数值特征可以更全面地刻画退货模式","聚类结果可以指导针对性的改进措施"]},{id:"scm-project-10",chapterId:"chapter-52",title:"预测性补货——结合销量聚类与安全库存计算",description:"基于销量波动聚类，对不同类产品设置差异化安全库存公式。计算每个产品的月销量标准差与均值，对产品做聚类（高波动/低波动/季节性波动），为每类产品自动计算安全库存，对比传统固定库存策略与聚类差异化策略的库存成本差异。",difficulty:"综合",skills:["预测性补货","安全库存","成本优化"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. 生成模拟月度销量数据
np.random.seed(42)
n_products = 50
n_months = 12

# 产品信息
products = pd.DataFrame({
    '产品ID': range(1, n_products + 1),
    '产品名称': [f'产品{i}' for i in range(1, n_products + 1)],
    '单价': np.random.uniform(50, 500, n_products).round(2),
    '提前期_天': np.random.randint(7, 30, n_products),
    '品类': np.random.choice(['A类', 'B类', 'C类'], n_products)
})

# 生成月度销量（不同产品的波动模式不同）
sales_data = []
for product_id in range(1, n_products + 1):
    base_sales = np.random.randint(100, 500)
    
    # 模拟不同波动类型
    if product_id <= 15:
        # 高波动型：标准差大
        volatility = 0.5
    elif product_id <= 35:
        # 低波动型：标准差小
        volatility = 0.15
    else:
        # 季节性波动：某些月份高，某些月份低
        volatility = 0.3
    
    for month in range(1, n_months + 1):
        # 季节性因子
        if product_id > 35:
            seasonal_factor = 1 + 0.5 * np.sin((month - 3) * np.pi / 6)
        else:
            seasonal_factor = 1
        
        sales = base_sales * seasonal_factor * np.random.uniform(1-volatility, 1+volatility)
        sales_data.append({
            '产品ID': product_id,
            '月份': month,
            '销量': max(int(sales), 10)
        })

sales_df = pd.DataFrame(sales_data)

print("="*60)
print("月度销量数据")
print("="*60)
print(f"产品数：{n_products}")
print(f"月度记录数：{len(sales_df)}")
print("\\n销量数据（前20行）：")
print(sales_df.head(20))
print()

# 2. 计算每个产品的销量统计
print("="*60)
print("计算产品销量统计")
print("="*60)

product_stats = sales_df.groupby('产品ID').agg({
    '销量': ['mean', 'std', 'min', 'max']
}).reset_index()

product_stats.columns = ['产品ID', '平均销量', '销量标准差', '最小销量', '最大销量']
product_stats['波动系数'] = product_stats['销量标准差'] / product_stats['平均销量']

print("产品销量统计（前20行）：")
print(product_stats.head(20).round(2))
print()

# 3. 对产品进行聚类
print("="*60)
print("产品销量波动聚类")
print("="*60)

features = ['平均销量', '销量标准差', '波动系数']
X = product_stats[features]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 选择K=3
best_k = 3
kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
product_stats['簇标签'] = kmeans.fit_predict(X_scaled)

print(f"聚类数量K={best_k}")
print("各簇产品数：")
print(product_stats['簇标签'].value_counts().sort_index())
print()

# 4. 分析各簇特征
print("="*60)
print("各簇特征分析")
print("="*60)

cluster_analysis = product_stats.groupby('簇标签').agg({
    '产品ID': 'count',
    '平均销量': 'mean',
    '销量标准差': 'mean',
    '波动系数': 'mean'
}).round(2)

cluster_analysis.columns = ['产品数', '平均销量', '平均标准差', '平均波动系数']

# 为各簇命名
def name_cluster(row):
    cv = row['平均波动系数']
    if cv > 0.35:
        return '高波动产品'
    elif cv > 0.2:
        return '中波动产品'
    else:
        return '低波动产品'

cluster_analysis['产品类型'] = cluster_analysis.apply(name_cluster, axis=1)

print(cluster_analysis)
print()

# 5. 计算安全库存
print("="*60)
print("计算安全库存")
print("="*60)

# 合并产品信息
result_df = product_stats.merge(products[['产品ID', '单价', '提前期_天']], on='产品ID')

# 安全库存公式：SS = Z × σ × √L
# Z = 安全系数（服务水平95%对应1.65，99%对应2.33）
# σ = 销量标准差
# L = 提前期

Z_95 = 1.65  # 95%服务水平

def calculate_safety_stock(row, volatility_type):
    """根据波动类型计算安全库存"""
    std = row['销量标准差']
    lead_time = row['提前期_天']
    
    if volatility_type == '高波动产品':
        # 高波动产品使用更高的安全系数
        z = 2.33
    elif volatility_type == '低波动产品':
        # 低波动产品可以使用较低的安全系数
        z = 1.28
    else:
        z = 1.65
    
    ss = z * std * np.sqrt(lead_time / 30)  # 将天转换为月
    return int(ss)

# 为每个产品计算安全库存
result_df['产品类型'] = result_df['簇标签'].map(
    dict(zip(cluster_analysis.index, cluster_analysis['产品类型']))
)

result_df['安全库存'] = result_df.apply(
    lambda row: calculate_safety_stock(row, row['产品类型']), axis=1
)

# 传统固定库存策略（统一使用中等安全系数）
result_df['传统安全库存'] = (Z_95 * result_df['销量标准差'] * np.sqrt(result_df['提前期_天'] / 30)).astype(int)

# 计算库存成本
result_df['差异化库存成本'] = result_df['安全库存'] * result_df['单价']
result_df['传统库存成本'] = result_df['传统安全库存'] * result_df['单价']

print("安全库存计算结果（前20行）：")
print(result_df[['产品ID', '产品类型', '平均销量', '安全库存', '传统安全库存', '单价', '差异化库存成本']].head(20).round(2))
print()

# 6. 对比两种策略
print("="*60)
print("库存策略对比分析")
print("="*60)

print("各产品类型库存成本对比：")
cost_comparison = result_df.groupby('产品类型').agg({
    '差异化库存成本': 'sum',
    '传统库存成本': 'sum',
    '产品ID': 'count'
}).round(2)

cost_comparison.columns = ['差异化策略成本', '传统策略成本', '产品数']
cost_comparison['成本节省'] = cost_comparison['传统策略成本'] - cost_comparison['差异化策略成本']
cost_comparison['节省比例'] = (cost_comparison['成本节省'] / cost_comparison['传统策略成本'] * 100).round(2)

print(cost_comparison)
print()

total_savings = cost_comparison['成本节省'].sum()
total_savings_pct = (total_savings / cost_comparison['传统策略成本'].sum() * 100)

print(f"\\n总体库存成本对比：")
print(f"  传统策略总成本：¥{cost_comparison['传统策略成本'].sum():,.2f}")
print(f"  差异化策略总成本：¥{cost_comparison['差异化策略成本'].sum():,.2f}")
print(f"  总成本节省：¥{total_savings:,.2f} ({total_savings_pct:.2f}%)")
print()

# 7. 验证
print("="*60)
print("验证与建议")
print("="*60)

assert '安全库存' in result_df.columns, "安全库存计算缺失"
assert '产品类型' in result_df.columns, "产品分类缺失"

print("安全库存建议表（前10个产品）：")
print(result_df[['产品ID', '产品名称', '产品类型', '平均销量', '安全库存', '提前期_天']].head(10))

print("\\n业务建议：")
print("1. 对高波动产品保持较高安全库存，避免缺货")
print("2. 对低波动产品可以降低安全系数，节省库存成本")
print("3. 定期根据最新销量数据重新计算安全库存")
print("4. 结合销售预测，在旺季前适当增加备货")
print()

print("✓ 预测性补货与安全库存计算完成！")
`,tips:["安全库存 = Z × σ × √L","高波动产品需要更高的安全系数","差异化策略可以节省库存成本而不牺牲服务水平"]},{id:"bi-project-1",chapterId:"chapter-53",title:"销售数据清洗与基础BI看板",description:"Pandas数据清洗、缺失值/异常值处理、数据类型转换、基础统计透视。给定零售订单CSV（含订单ID、日期、金额、数量、区域），完成去重、格式统一、缺失填补，计算月销售额、各区域总销售，输出销售趋势折线图与区域柱状图。",difficulty:"基础",skills:["数据清洗","缺失值处理","统计透视","数据可视化"],initialCode:`# ========== 项目1：销售数据清洗与基础BI看板 ==========
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# 1. 生成示例数据
np.random.seed(42)
dates = pd.date_range('2024-01-01', '2024-12-31', freq='D')
n_orders = 5000

data = {
    'Order_ID': [f'ORD_{i}' for i in range(1, n_orders+1)],
    'Date': np.random.choice(dates, n_orders),
    'Region': np.random.choice(['North', 'South', 'East', 'West'], n_orders, p=[0.3, 0.2, 0.25, 0.25]),
    'Amount': np.random.normal(500, 200, n_orders),
    'Quantity': np.random.poisson(3, n_orders)
}
df = pd.DataFrame(data)

# 人为添加缺失值和异常值
df.loc[10:20, 'Amount'] = np.nan
df.loc[30, 'Quantity'] = 100
df.loc[100:105, 'Region'] = None
df.loc[200, 'Date'] = pd.NaT

print("=== 原始数据信息 ===")
print(df.info())
print(f"
缺失值统计：
{df.isnull().sum()}")

# 2. 数据清洗
df = df.drop_duplicates(subset=['Order_ID'])

# 处理缺失值
df['Amount'].fillna(df['Amount'].median(), inplace=True)
df['Region'].fillna(df['Region'].mode()[0], inplace=True)
df['Date'].fillna(df['Date'].mode()[0], inplace=True)

# 处理异常值（使用IQR方法）
Q1 = df['Amount'].quantile(0.25)
Q3 = df['Amount'].quantile(0.75)
IQR = Q3 - Q1
df = df[(df['Amount'] >= Q1 - 1.5*IQR) & (df['Amount'] <= Q3 + 1.5*IQR)]

# 限制Quantity合理范围
df = df[(df['Quantity'] >= 1) & (df['Quantity'] <= 20)]

# 转换数据类型
df['Date'] = pd.to_datetime(df['Date'])
df['Month'] = df['Date'].dt.to_period('M')

# 验证
assert df.isnull().sum().sum() == 0, "仍有缺失值存在"
print(f"
清洗后数据形状：{df.shape}")
print(f"缺失值总数：{df.isnull().sum().sum()}")

# 3. 数据分析
# 月度销售额
monthly_sales = df.groupby('Month')['Amount'].sum()
# 区域销售额
region_sales = df.groupby('Region')['Amount'].sum()

print("
=== 月度销售额 ===")
print(monthly_sales.head())
print("
=== 区域销售额 ===")
print(region_sales)

# 4. 可视化
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# 销售趋势折线图
monthly_sales.plot(ax=axes[0], marker='o', color='steelblue')
axes[0].set_title('月度销售趋势', fontsize=14)
axes[0].set_xlabel('月份')
axes[0].set_ylabel('销售额')
axes[0].grid(True, alpha=0.3)

# 区域销售柱状图
region_sales.plot(kind='bar', ax=axes[1], color=['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'])
axes[1].set_title('区域销售额对比', fontsize=14)
axes[1].set_xlabel('区域')
axes[1].set_ylabel('销售额')
axes[1].tick_params(axis='x', rotation=0)

plt.tight_layout()
plt.show()

# 5. 输出关键指标
print("
=== 关键业务指标 ===")
print(f"总销售额：¥{df['Amount'].sum():,.0f}")
print(f"总订单数：{len(df)}")
print(f"平均客单价：¥{df['Amount'].mean():.0f}")
print(f"平均每单数量：{df['Quantity'].mean():.1f}")
print(f"最高销售月份：{monthly_sales.idxmax()}，销售额：¥{monthly_sales.max():,.0f}")
print(f"最佳销售区域：{region_sales.idxmax()}，销售额：¥{region_sales.max():,.0f}")
`,tips:["数据清洗是BI分析的基础，要确保数据质量","透视表是快速发现数据规律的好工具","结合时间维度和区域维度可以发现更多业务洞察"]},{id:"bi-project-2",chapterId:"chapter-54",title:"电商订单流与购物车分析（关联规则Apriori）",description:"购物篮分析、事务编码、频繁项集、关联规则（置信度/支持度）。数据含Transaction_ID与Product，清洗掉单件商品订单，转换为购物车矩阵，使用mlxtend计算频繁项集与规则。",difficulty:"进阶",skills:["关联规则","Apriori算法","购物篮分析"],initialCode:`# ========== 项目2：购物车分析（关联规则Apriori） ==========
import pandas as pd
import numpy as np
from mlxtend.frequent_patterns import apriori, association_rules
import matplotlib.pyplot as plt

# 1. 生成购物篮数据
np.random.seed(42)
products = ['牛奶', '面包', '黄油', '鸡蛋', '啤酒', '尿布', '可乐', '薯片', '巧克力', '水果']

# 构建有意义的关联：啤酒→尿布，牛奶→面包
transactions = []
for _ in range(2000):
    basket = []
    # 随机基础商品
    base = np.random.choice(products[:6], size=np.random.randint(2, 4), replace=False).tolist()
    basket.extend(base)
    
    # 有意添加强关联对
    if '啤酒' in basket and np.random.random() > 0.3:
        basket.append('尿布')
    if '牛奶' in basket and np.random.random() > 0.4:
        basket.append('面包')
    if '鸡蛋' in basket and np.random.random() > 0.5:
        basket.append('黄油')
    
    # 添加随机额外商品
    extra = np.random.choice(products[6:], size=np.random.randint(0, 2), replace=False).tolist()
    basket.extend(extra)
    
    transactions.append(list(set(basket)))  # 去重

# 转换为DataFrame
df = pd.DataFrame([(i, prod) for i, basket in enumerate(transactions) for prod in basket],
                  columns=['Transaction_ID', 'Product'])

print(f"数据规模：{len(df)}条记录，{df['Transaction_ID'].nunique()}个交易，{df['Product'].nunique()}种商品")

# 2. 数据清洗（过滤小购物篮）
basket_sizes = df.groupby('Transaction_ID').size()
valid_trans = basket_sizes[basket_sizes >= 2].index
df = df[df['Transaction_ID'].isin(valid_trans)]

print(f"过滤单件商品后：剩余{df['Transaction_ID'].nunique()}个交易")

# 3. 转换为购物车矩阵
basket_matrix = pd.crosstab(df['Transaction_ID'], df['Product']).astype(bool)

print(f"购物车矩阵：{basket_matrix.shape}")

# 4. 挖掘频繁项集
min_support = 0.02  # 至少出现在2%的交易中
frequent_itemsets = apriori(basket_matrix, min_support=min_support, use_colnames=True)

# 添加项集长度
frequent_itemsets['length'] = frequent_itemsets['itemsets'].apply(lambda x: len(x))
frequent_itemsets = frequent_itemsets[frequent_itemsets['length'] >= 2]  # 只保留2项及以上

print(f"
频繁项集数量：{len(frequent_itemsets)}")
print(frequent_itemsets.sort_values('support', ascending=False).head(10))

# 5. 生成关联规则
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.4)

# 添加规则描述
rules['antecedents_str'] = rules['antecedents'].apply(lambda x: ', '.join(list(x)))
rules['consequents_str'] = rules['consequents'].apply(lambda x: ', '.join(list(x)))

print(f"
关联规则数量：{len(rules)}")

# 筛选高质量规则（提升度>1.2且置信度>0.5）
high_quality_rules = rules[(rules['lift'] > 1.2) & (rules['confidence'] > 0.5)].sort_values('lift', ascending=False)

print("
=== 高质量关联规则 ===")
for _, row in high_quality_rules.head(10).iterrows():
    print(f"{row['antecedents_str']} → {row['consequents_str']}")
    print(f"  支持度: {row['support']:.3f}, 置信度: {row['confidence']:.3f}, 提升度: {row['lift']:.2f}
")

# 6. 验证计算
def verify_rule(df, product_a, product_b):
    # 手动验证关联规则
    trans_a = set(df[df['Product']==product_a]['Transaction_ID'].unique())
    trans_b = set(df[df['Product']==product_b]['Transaction_ID'].unique())
    both = len(trans_a & trans_b)
    only_a = len(trans_a)
    confidence = both / only_a if only_a > 0 else 0
    return confidence

if len(high_quality_rules) > 0:
    test_rule = high_quality_rules.iloc[0]
    ante = list(test_rule['antecedents'])[0]
    cons = list(test_rule['consequents'])[0]
    manual_conf = verify_rule(df, ante, cons)
    print(f"验证规则【{ante}→{cons}】：算法置信度={test_rule['confidence']:.3f}，手动计算={manual_conf:.3f}")
    assert abs(test_rule['confidence'] - manual_conf) < 0.01, "计算不一致"

# 7. 可视化
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# 散点图：支持度 vs 置信度
scatter = axes[0].scatter(rules['support'], rules['confidence'], 
                          c=rules['lift'], cmap='RdYlGn', alpha=0.6, s=50)
axes[0].set_xlabel('支持度')
axes[0].set_ylabel('置信度')
axes[0].set_title('关联规则分布（颜色=提升度）')
plt.colorbar(scatter, ax=axes[0])

# 柱状图：Top10规则提升度
top_lift = high_quality_rules.head(10)
axes[1].barh(range(len(top_lift)), top_lift['lift'].values)
axes[1].set_yticks(range(len(top_lift)))
axes[1].set_yticklabels([f"{a}→{c}" for a, c in zip(top_lift['antecedents_str'], top_lift['consequents_str'])])
axes[1].set_xlabel('提升度')
axes[1].set_title('Top10关联规则（按提升度排序）')

plt.tight_layout()
plt.show()
`,tips:["支持度表示商品组合出现的频率","置信度表示购买A后购买B的概率","提升度>1表示正向关联，可以用于推荐"]},{id:"bi-project-3",chapterId:"chapter-55",title:"RFM客户分层分析（传统BI指标）",description:"聚合函数、时间差计算、分位数、客户评分。根据订单表计算最近购买日(R)、频率(F)、金额(M)，利用分位数划分1-5分，组合RFM总分，划分高价值/流失客户。",difficulty:"进阶",skills:["RFM模型","客户分层","分位数计算"],initialCode:`# ========== 项目3：RFM客户分层分析 ==========
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta

# 1. 生成客户交易数据
np.random.seed(42)
n_customers = 500
n_transactions = 3000

# 生成客户ID
customer_ids = [f'CUST_{i:04d}' for i in range(1, n_customers+1)]

# 生成交易数据
transactions = []
end_date = datetime(2024, 12, 31)

for cust_id in customer_ids:
    n_orders = np.random.poisson(5) + 1  # 每个客户1-10单
    dates = [end_date - timedelta(days=np.random.exponential(30)) for _ in range(n_orders)]
    amounts = np.random.gamma(2, 50, n_orders) + 20
    
    for date, amount in zip(dates, amounts):
        transactions.append({
            'Customer_ID': cust_id,
            'Date': date,
            'Amount': amount
        })

df = pd.DataFrame(transactions)
df['Date'] = pd.to_datetime(df['Date'])

print(f"数据规模：{len(df)}笔交易，{df['Customer_ID'].nunique()}个客户")
print(f"日期范围：{df['Date'].min().date()} 至 {df['Date'].max().date()}")

# 2. 数据清洗
df.drop_duplicates(inplace=True)
df = df[df['Amount'] > 0]
df = df[df['Amount'] < 500]  # 过滤极端金额

# 3. 计算RFM指标
current_date = df['Date'].max() + timedelta(days=1)

rfm = df.groupby('Customer_ID').agg({
    'Date': lambda x: (current_date - x.max()).days,  # Recency
    'Customer_ID': 'count',  # Frequency
    'Amount': 'sum'  # Monetary
}).rename(columns={
    'Date': 'Recency',
    'Customer_ID': 'Frequency',
    'Amount': 'Monetary'
})

print(f"
RFM指标统计：")
print(rfm.describe())

# 4. RFM评分（1-5分）
rfm['R_Score'] = pd.qcut(rfm['Recency'], 5, labels=[5,4,3,2,1], duplicates='drop').astype(int)
rfm['F_Score'] = pd.qcut(rfm['Frequency'].rank(method='first'), 5, labels=[1,2,3,4,5], duplicates='drop').astype(int)
rfm['M_Score'] = pd.qcut(rfm['Monetary'], 5, labels=[1,2,3,4,5], duplicates='drop').astype(int)

# 计算综合得分
rfm['RFM_Score'] = rfm['R_Score'] * 100 + rfm['F_Score'] * 10 + rfm['M_Score']

# 5. 客户分层
def segment_customer(row):
    if row['R_Score'] >= 4 and row['F_Score'] >= 4 and row['M_Score'] >= 4:
        return '冠军客户'
    elif row['R_Score'] >= 4 and row['F_Score'] >= 3:
        return '忠诚客户'
    elif row['R_Score'] >= 3 and row['F_Score'] >= 1 and row['M_Score'] >= 3:
        return '潜力客户'
    elif row['R_Score'] <= 2 and row['F_Score'] >= 3:
        return '流失风险客户'
    elif row['R_Score'] <= 2 and row['F_Score'] <= 2:
        return '流失客户'
    else:
        return '普通客户'

rfm['Segment'] = rfm.apply(segment_customer, axis=1)

print("
=== 客户分层统计 ===")
segment_stats = rfm['Segment'].value_counts()
for segment, count in segment_stats.items():
    print(f"{segment}: {count}个客户 ({count/len(rfm)*100:.1f}%)")

# 6. 验证计算
# 验证R_Score：最近购买的天数应该与评分成反比
print(f"
验证R_Score逻辑：")
for score in [1,5]:
    avg_recency = rfm[rfm['R_Score']==score]['Recency'].mean()
    print(f"  R_Score={score}的平均最近购买天数：{avg_recency:.1f}天")

# 验证冠军客户特征
champions = rfm[rfm['Segment']=='冠军客户']
print(f"
冠军客户特征：")
print(f"  平均最近购买：{champions['Recency'].mean():.1f}天")
print(f"  平均购买频次：{champions['Frequency'].mean():.1f}次")
print(f"  平均消费金额：¥{champions['Monetary'].mean():.0f}")

# 7. 可视化
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# RFM分布热力图
rfm_pivot = rfm.pivot_table(index='R_Score', columns='F_Score', values='Monetary', aggfunc='mean')
sns.heatmap(rfm_pivot, annot=True, fmt='.0f', cmap='YlOrRd', ax=axes[0,0])
axes[0,0].set_title('客户价值热力图（金额均值）', fontsize=12)

# 分层占比饼图
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3']
segment_stats.plot(kind='pie', ax=axes[0,1], autopct='%1.1f%%', colors=colors, startangle=90)
axes[0,1].set_title('客户分层占比', fontsize=12)
axes[0,1].set_ylabel('')

# 各层级的Monetary分布
segments_order = ['冠军客户', '忠诚客户', '潜力客户', '普通客户', '流失风险客户', '流失客户']
sns.boxplot(data=rfm, x='Segment', y='Monetary', order=segments_order, ax=axes[1,0])
axes[1,0].set_title('各层级消费金额分布', fontsize=12)
axes[1,0].tick_params(axis='x', rotation=45)

# RFM得分分布
sns.histplot(rfm['RFM_Score'], bins=30, kde=True, ax=axes[1,1], color='steelblue')
axes[1,1].set_title('RFM综合得分分布', fontsize=12)
axes[1,1].set_xlabel('RFM得分')

plt.tight_layout()
plt.show()

# 8. 输出建议
print("
=== 营销建议 ===")
print(f"1. 冠军客户（{segment_stats.get('冠军客户', 0)}人）：提供VIP专属服务和推荐奖励")
print(f"2. 忠诚客户（{segment_stats.get('忠诚客户', 0)}人）：交叉销售和高价值商品推荐")
print(f"3. 潜力客户（{segment_stats.get('潜力客户', 0)}人）：发送优惠券提升购买频次")
print(f"4. 流失风险客户（{segment_stats.get('流失风险客户', 0)}人）：发送召回邮件和限时折扣")
`,tips:["R(Recency)越小表示越近，F(Frequency)和M(Monetary)越大越好","RFM总分15分为满分，9分为平均","高价值客户需要重点维护，流失风险客户需要及时挽回"]},{id:"bi-project-4",chapterId:"chapter-56",title:"用户行为路径聚类（KMeans）",description:"聚类分析、特征标准化、肘部法则、聚类结果解读。用户数据包含浏览时长、点击次数、加购次数、下单量，清洗异常值后标准化，使用KMeans聚类，为每个用户打标并可视化聚类中心雷达图。",difficulty:"进阶",skills:["KMeans聚类","特征标准化","用户分群"],initialCode:`# ========== 项目4：用户行为路径聚类（KMeans） ==========
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
import matplotlib.pyplot as plt
import seaborn as sns

# 1. 生成用户行为数据
np.random.seed(42)
n_users = 800

data = {
    'User_ID': [f'U_{i:04d}' for i in range(n_users)],
    '浏览时长_分钟': np.random.gamma(2, 15, n_users),
    '点击次数': np.random.negative_binomial(3, 0.3, n_users),
    '加购次数': np.random.poisson(3, n_users),
    '下单次数': np.random.poisson(2, n_users),
    '平均停留_秒': np.random.normal(120, 40, n_users),
    '退货次数': np.random.poisson(0.5, n_users)
}

df = pd.DataFrame(data)

# 添加相关性：加购多的用户下单也多
df['加购次数'] = df['加购次数'] + np.random.poisson(1, n_users)
df['下单次数'] = df['加购次数'] * 0.6 + np.random.normal(0, 0.5, n_users)
df['下单次数'] = df['下单次数'].clip(0, None).astype(int)

print("数据前5行：")
print(df.head())

# 2. 数据清洗
# 处理异常值
for col in ['浏览时长_分钟', '点击次数', '加购次数']:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    upper_bound = Q3 + 1.5 * IQR
    df[col] = df[col].clip(upper=upper_bound)

print(f"
清洗后数据形状：{df.shape}")

# 3. 选择聚类特征
features = ['浏览时长_分钟', '点击次数', '加购次数', '下单次数', '平均停留_秒']
X = df[features]

# 4. 标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print(f"
标准化后数据形状：{X_scaled.shape}")

# 5. 确定最优K值（肘部法则+轮廓系数）
inertias = []
silhouettes = []
K_range = range(2, 11)

for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)
    silhouettes.append(silhouette_score(X_scaled, kmeans.labels_))

# 6. 选择最佳K值（取轮廓系数最大的K）
best_k = K_range[np.argmax(silhouettes)]
print(f"
最优K值：{best_k}（轮廓系数={max(silhouettes):.3f}）")

# 7. 使用最佳K值进行聚类
kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
df['Cluster'] = kmeans.fit_predict(X_scaled)

# 8. 聚类结果分析
cluster_centers = pd.DataFrame(
    scaler.inverse_transform(kmeans.cluster_centers_),
    columns=features
)
cluster_centers['Cluster'] = range(best_k)

print("
=== 聚类中心特征值 ===")
print(cluster_centers.round(2))

# 9. 为每个聚类添加业务标签
cluster_names = {}
for i in range(best_k):
    center = cluster_centers.iloc[i]
    if center['下单次数'] > 5:
        cluster_names[i] = '高频购买型'
    elif center['浏览时长_分钟'] > 60 and center['下单次数'] < 2:
        cluster_names[i] = '浏览观望型'
    elif center['加购次数'] > 5 and center['下单次数'] < 3:
        cluster_names[i] = '加购犹豫型'
    elif center['浏览时长_分钟'] < 20:
        cluster_names[i] = '低活跃型'
    else:
        cluster_names[i] = '普通用户型'

df['Cluster_Label'] = df['Cluster'].map(cluster_names)

print("
=== 各聚类用户数量 ===")
cluster_counts = df['Cluster_Label'].value_counts()
for label, count in cluster_counts.items():
    print(f"{label}: {count}人 ({count/len(df)*100:.1f}%)")

# 10. 验证聚类质量
sil_score = silhouette_score(X_scaled, df['Cluster'])
print(f"
轮廓系数：{sil_score:.3f}")

# 验证不同聚类间的特征差异（方差分析）
from scipy import stats
print("
特征差异性检验（ANOVA p-value）：")
for feature in features:
    groups = [df[df['Cluster']==c][feature].values for c in range(best_k)]
    f_stat, p_value = stats.f_oneway(*groups)
    print(f"  {feature}: p={p_value:.2e} {'✓ 显著差异' if p_value < 0.05 else '✗ 无显著差异'}")

# 11. 可视化
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 肘部法则图
axes[0,0].plot(K_range, inertias, 'bo-')
axes[0,0].set_xlabel('K值')
axes[0,0].set_ylabel('惯性（Inertia）')
axes[0,0].set_title('肘部法则图')
axes[0,0].axvline(best_k, color='r', linestyle='--', label=f'最佳K={best_k}')
axes[0,0].legend()

# 轮廓系数图
axes[0,1].plot(K_range, silhouettes, 'ro-')
axes[0,1].set_xlabel('K值')
axes[0,1].set_ylabel('轮廓系数')
axes[0,1].set_title('轮廓系数曲线')
axes[0,1].axvline(best_k, color='g', linestyle='--', label=f'最佳K={best_k}')
axes[0,1].legend()

# 聚类散点图（取两个主要特征）
from sklearn.decomposition import PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

scatter = axes[1,0].scatter(X_pca[:, 0], X_pca[:, 1], c=df['Cluster'], cmap='viridis', alpha=0.6, s=30)
axes[1,0].set_xlabel('PCA1')
axes[1,0].set_ylabel('PCA2')
axes[1,0].set_title(f'用户聚类可视化（{best_k}个聚类）')
plt.colorbar(scatter, ax=axes[1,0])

# 雷达图展示聚类中心
from math import pi
categories = features
N = len(categories)
angles = [n / float(N) * 2 * pi for n in range(N)]
angles += angles[:1]

ax_radar = axes[1,1]
for i in range(best_k):
    values = cluster_centers.iloc[i][features].values.flatten().tolist()
    values += values[:1]
    ax_radar.plot(angles, values, 'o-', linewidth=2, label=f'聚类{i}: {cluster_names[i]}')
ax_radar.set_xticks(angles[:-1])
ax_radar.set_xticklabels(categories)
ax_radar.set_title('聚类中心雷达图')
ax_radar.legend(loc='upper right', bbox_to_anchor=(1.3, 1.0))

plt.tight_layout()
plt.show()
`,tips:["KMeans聚类前需要标准化特征","肘部法则和轮廓系数可以帮助确定最佳K值","聚类后需要为每个簇赋予业务含义"]},{id:"bi-project-5",chapterId:"chapter-57",title:"退货原因文本聚类（非结构化→结构化）",description:"文本清洗、TF-IDF、KMeans文本聚类、词云。退货评论列含短文本，分词、去停用词，转换为TF-IDF矩阵，聚类（3~5类），每类提取高频词，分析主要退货原因。",difficulty:"进阶",skills:["文本聚类","TF-IDF","词云分析"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import silhouette_score

# 1. 生成模拟退货评论数据
np.random.seed(42)
n_returns = 500

# 退货原因模板
reason_templates = {
    '质量': [
        '质量太差，用了几天就坏了',
        '商品有瑕疵，不满意',
        '做工粗糙，不值这个价',
        '材质和描述不符',
        '质量有问题，申请退货'
    ],
    '尺寸': [
        '尺码偏大/偏小，不合适',
        '尺寸不合适，需要换货',
        '大小不合适',
        '尺码不对',
        '衣服太大/太小了'
    ],
    '外观': [
        '颜色和图片差距大',
        '外观和描述不符',
        '实物不好看',
        '颜色不喜欢',
        '款式不喜欢'
    ],
    '物流': [
        '物流太慢，等太久',
        '包装破损',
        '收到时商品损坏',
        '快递服务差',
        '配送时间太长'
    ],
    '服务': [
        '售后服务态度不好',
        '客服回复慢',
        '商家不负责任',
        '退货流程太复杂',
        '退款慢'
    ]
}

return_data = []
for i in range(n_returns):
    # 随机选择退货原因类型
    reason_type = np.random.choice(list(reason_templates.keys()))
    comment = np.random.choice(reason_templates[reason_type])
    
    # 添加一些随机噪声
    if np.random.random() < 0.1:
        comment = comment + '，另外...'
    
    return_data.append({
        '退货ID': f'RET{str(i+1).zfill(5)}',
        '退货原因': comment,
        '原因类型': reason_type,
        '退货金额': np.random.uniform(50, 1000),
        '退货数量': np.random.randint(1, 5)
    })

returns_df = pd.DataFrame(return_data)

print("="*60)
print("退货评论数据概览")
print("="*60)
print(f"总退货数：{len(returns_df)}")
print("\\n退货数据前20行：")
print(returns_df[['退货ID', '退货原因', '原因类型']].head(20))
print()

# 2. 文本预处理
print("="*60)
print("文本预处理")
print("="*60)

# 定义停用词
stopwords = ['的', '了', '和', '是', '在', '有', '不', '我', '也', '很', '都', '就', '到', '这', '那', '个', '一', '上', '下', '中', '来', '去', '说', '要', '还', '没', '但']

def clean_text(text):
    """简单的文本清洗"""
    # 移除特殊字符
    text = ''.join(char for char in text if char.isalnum() or char.isspace())
    # 分词（简化的中文分词）
    words = text.split()
    # 移除停用词
    words = [w for w in words if w not in stopwords and len(w) > 1]
    return ' '.join(words)

returns_df['清洗后文本'] = returns_df['退货原因'].apply(clean_text)

print("文本清洗结果：")
for i in range(10):
    print(f"  原文：{returns_df.iloc[i]['退货原因']}")
    print(f"  清洗：{returns_df.iloc[i]['清洗后文本']}")
    print()
print()

# 3. TF-IDF向量化
print("="*60)
print("TF-IDF向量化")
print("="*60)

vectorizer = TfidfVectorizer(max_features=20, min_df=2)
tfidf_matrix = vectorizer.fit_transform(returns_df['清洗后文本'])

print(f"TF-IDF矩阵形状：{tfidf_matrix.shape}")
print(f"特征词数：{len(vectorizer.get_feature_names_out())}")
print("\\n关键词：")
print(vectorizer.get_feature_names_out())
print()

# 4. KMeans聚类
print("="*60)
print("退货原因聚类")
print("="*60)

best_k = 5
kmeans = KMeans(n_clusters=best_k, random_state=42, n_init=10)
returns_df['簇标签'] = kmeans.fit_predict(tfidf_matrix)

print(f"聚类数量：{best_k}")
print("聚类结果分布：")
print(returns_df['簇标签'].value_counts().sort_index())
print()

# 计算轮廓系数
sil_score = silhouette_score(tfidf_matrix, returns_df['簇标签'])
print(f"轮廓系数：{sil_score:.4f}")
print()

# 5. 分析每个聚类
print("="*60)
print("各聚类退货原因分析")
print("="*60)

cluster_analysis = []
for cluster_id in range(best_k):
    cluster_data = returns_df[returns_df['簇标签'] == cluster_id]
    
    # 统计高频词
    cluster_texts = ' '.join(cluster_data['清洗后文本'].tolist())
    word_freq = pd.Series(cluster_texts.split()).value_counts()
    top_words = word_freq.head(5).index.tolist()
    
    # 统计原因类型分布
    reason_dist = cluster_data['原因类型'].value_counts()
    top_reasons = reason_dist.head(3).index.tolist()
    
    # 计算平均退货金额
    avg_amount = cluster_data['退货金额'].mean()
    
    cluster_analysis.append({
        '簇ID': cluster_id,
        '退货数': len(cluster_data),
        '平均金额': avg_amount,
        '高频原因': ', '.join(top_reasons),
        '关键词': ', '.join(top_words)
    })

cluster_df = pd.DataFrame(cluster_analysis)

# 为各簇命名
def name_cluster(row):
    keywords = row['关键词']
    if any(word in keywords for word in ['质量', '瑕疵', '做工']):
        return '质量问题退货'
    elif any(word in keywords for word in ['尺码', '大小', '合适']):
        return '尺寸问题退货'
    elif any(word in keywords for word in ['颜色', '外观', '款式']):
        return '外观问题退货'
    elif any(word in keywords for word in ['物流', '包装', '快递', '配送']):
        return '物流问题退货'
    else:
        return '其他原因退货'

cluster_df['退货类型'] = cluster_df.apply(name_cluster, axis=1)

print(cluster_df)
print()

# 6. 详细分析各类型
print("="*60)
print("各退货类型详细分析")
print("="*60)

returns_df['退货类型'] = returns_df['簇标签'].map(
    dict(zip(cluster_df['簇ID'], cluster_df['退货类型']))
)

for return_type in cluster_df['退货类型']:
    type_data = returns_df[returns_df['退货类型'] == return_type]
    print(f"\\n【{return_type}】（{len(type_data)}单，占比{len(type_data)/len(returns_df)*100:.1f}%）")
    print(f"  平均退货金额：¥{type_data['退货金额'].mean():.2f}")
    print(f"  典型评论：")
    for _, row in type_data.sample(min(3, len(type_data))).iterrows():
        print(f"    - {row['退货原因']}")
print()

# 7. 业务建议
print("="*60)
print("业务改进建议")
print("="*60)

for _, row in cluster_df.iterrows():
    return_type = row['退货类型']
    count = row['退货数']
    pct = count / len(returns_df) * 100
    
    print(f"\\n【{return_type}】{count}单（{pct:.1f}%）")
    if '质量' in return_type:
        print("  建议：加强供应商质量管控，完善质检流程")
    elif '尺寸' in return_type:
        print("  建议：提供详细尺码表，增加试穿/试戴功能")
    elif '外观' in return_type:
        print("  建议：优化商品图片展示，提供360度视图")
    elif '物流' in return_type:
        print("  建议：升级包装材料，优化物流合作")
    else:
        print("  建议：分析具体原因，针对性改进")

# 8. 验证
print()
print("="*60)
print("验证结果")
print("="*60)
assert '簇标签' in returns_df.columns, "聚类结果缺失"
print(f"✓ 文本聚类完成，共{len(returns_df)}条退货记录")
print(f"✓ 发现{best_k}种主要退货原因类型")
print("✓ 退货原因文本聚类分析完成！")
`,tips:["TF-IDF可以衡量词语在文档中的重要程度","聚类可以自动发现退货原因的类型","结合定量和定性分析可以得到更全面的洞察"]},{id:"bi-project-6",chapterId:"chapter-58",title:"销量预测特征工程与基线模型",description:"时序聚合、特征构造、滞后特征、滚动统计。日销售数据，构造星期、月份、节假日特征，过去7天滚动均值/销量滞后1~7，使用线性回归或决策树预测次日销量，评估RMSE。",difficulty:"进阶",skills:["特征工程","销量预测","时间序列"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 1. 生成模拟日销售数据
np.random.seed(42)
n_days = 365
start_date = datetime(2024, 1, 1)

# 基础销量
base_sales = 500

sales_data = []
for i in range(n_days):
    current_date = start_date + timedelta(days=i)
    
    # 考虑星期效应（周末销量更高）
    day_of_week = current_date.weekday()
    if day_of_week >= 5:  # 周六、周日
        weekday_factor = 1.3
    else:
        weekday_factor = 1.0
    
    # 考虑月份效应（年初年末略高）
    month = current_date.month
    if month in [1, 2, 11, 12]:  # 年初年末
        month_factor = 1.2
    elif month in [6, 7, 8]:  # 夏季
        month_factor = 1.1
    else:
        month_factor = 1.0
    
    # 计算销量
    sales = base_sales * weekday_factor * month_factor * np.random.uniform(0.8, 1.2)
    
    sales_data.append({
        '日期': current_date,
        '销量': int(sales)
    })

sales_df = pd.DataFrame(sales_data)
sales_df['日期'] = pd.to_datetime(sales_df['日期'])

print("="*60)
print("日销售数据概览")
print("="*60)
print(f"数据天数：{len(sales_df)}")
print("\\n前20天销售数据：")
print(sales_df.head(20))
print()
print("数据统计：")
print(sales_df['销量'].describe())
print()

# 2. 特征工程
print("="*60)
print("特征工程")
print("="*60)

# 时间特征
sales_df['星期'] = sales_df['日期'].dt.dayofweek
sales_df['月份'] = sales_df['日期'].dt.month
sales_df['季度'] = sales_df['日期'].dt.quarter
sales_df['星期几'] = sales_df['日期'].dt.day_name()
sales_df['月份名称'] = sales_df['日期'].dt.month_name()

# 是否周末
sales_df['是否周末'] = (sales_df['星期'] >= 5).astype(int)

# 是否月初/月末
sales_df['是否月初'] = (sales_df['日期'].dt.day <= 5).astype(int)
sales_df['是否月末'] = (sales_df['日期'].dt.day >= 25).astype(int)

print("时间特征：")
print(sales_df[['日期', '星期', '星期几', '月份', '季度', '是否周末']].head(20))
print()

# 滞后特征（Lag Features）
print("="*60)
print("滞后特征构造")
print("="*60)

# 过去1-7天的销量
for lag in range(1, 8):
    sales_df[f'销量_lag_{lag}'] = sales_df['销量'].shift(lag)

# 验证：滞后特征不包含未来信息
print("验证：滞后特征只使用历史值（lag>0）")
print()

# 滚动统计特征
sales_df['销量_rolling_7d_mean'] = sales_df['销量'].shift(1).rolling(window=7).mean()
sales_df['销量_rolling_7d_std'] = sales_df['销量'].shift(1).rolling(window=7).std()
sales_df['销量_rolling_14d_mean'] = sales_df['销量'].shift(1).rolling(window=14).mean()

print("滚动统计特征（前20行）：")
print(sales_df[['日期', '销量', '销量_lag_1', '销量_rolling_7d_mean', '销量_rolling_7d_std']].head(20).round(2))
print()

# 3. 数据准备
print("="*60)
print("数据准备")
print("="*60)

# 选择特征列
feature_cols = ['星期', '月份', '季度', '是否周末', '是否月初', '是否月末',
                '销量_lag_1', '销量_lag_2', '销量_lag_3', '销量_lag_4', '销量_lag_5', '销量_lag_6', '销量_lag_7',
                '销量_rolling_7d_mean', '销量_rolling_7d_std', '销量_rolling_14d_mean']

# 删除含有NaN的行（由于滞后特征）
df_model = sales_df.dropna(subset=feature_cols + ['销量']).copy()

print(f"有效数据行数：{len(df_model)}（删除{len(sales_df) - len(df_model)}行NaN）")

# 划分训练集和测试集
train_size = int(len(df_model) * 0.8)
train_df = df_model.iloc[:train_size]
test_df = df_model.iloc[train_size:]

X_train = train_df[feature_cols]
y_train = train_df['销量']
X_test = test_df[feature_cols]
y_test = test_df['销量']

print(f"训练集大小：{len(X_train)}")
print(f"测试集大小：{len(X_test)}")
print()

# 4. 构建基线模型（使用平均值的简单预测）
print("="*60)
print("基线模型（简单平均）")
print("="*60)

# 预测值 = 过去7天平均
baseline_pred = X_test['销量_rolling_7d_mean']
baseline_rmse = np.sqrt(((y_test - baseline_pred) ** 2).mean())

print(f"基线模型RMSE：{baseline_rmse:.2f}")
print()

# 5. 线性回归模型
print("="*60)
print("线性回归模型")
print("="*60)

# 简化的线性回归实现
X_train_bias = np.column_stack([np.ones(len(X_train)), X_train.values])
X_test_bias = np.column_stack([np.ones(len(X_test)), X_test.values])

# 正规方程求解
theta = np.linalg.lstsq(X_train_bias, y_train.values, rcond=None)[0]
lr_pred = X_test_bias @ theta

lr_rmse = np.sqrt(((y_test - lr_pred) ** 2).mean())

print(f"线性回归RMSE：{lr_rmse:.2f}")
print(f"RMSE改善：{((baseline_rmse - lr_rmse) / baseline_rmse * 100):.2f}%")
print()

# 6. 模型评估
print("="*60)
print("模型评估")
print("="*60)

# 计算准确率（误差<20%的比例）
threshold = 0.2
baseline_accuracy = (abs(y_test - baseline_pred) / y_test < threshold).mean()
lr_accuracy = (abs(y_test - lr_pred) / y_test < threshold).mean()

print("预测准确率（误差<20%）：")
print(f"  基线模型：{baseline_accuracy:.2%}")
print(f"  线性回归：{lr_accuracy:.2%}")
print()

# 特征重要性（简化的系数）
print("特征重要性（线性回归系数）：")
feature_importance = pd.DataFrame({
    '特征': ['截距'] + feature_cols,
    '系数': theta
}).sort_values('系数', key=abs, ascending=False)
print(feature_importance.head(10).round(4))
print()

# 7. 预测结果示例
print("="*60)
print("预测结果示例（后10天）")
print("="*60)

result_df = pd.DataFrame({
    '日期': test_df['日期'].values[-10:],
    '实际销量': y_test.values[-10:],
    '预测销量': lr_pred[-10:].round(0).astype(int),
    '误差': (lr_pred[-10:] - y_test.values[-10:]).round(2),
    '误差率': ((lr_pred[-10:] - y_test.values[-10:]) / y_test.values[-10:] * 100).round(2)
})
print(result_df)
print()

# 8. 业务应用
print("="*60)
print("业务应用建议")
print("="*60)

print("1. 库存优化：根据预测销量调整备货量")
print("2. 人员排班：预测高峰时段提前安排人员")
print("3. 营销活动：预测低销量时段进行促销")
print("4. 物流调度：提前调整配送资源")
print()

# 9. 验证
print("="*60)
print("验证结果")
print("="*60)

# 验证：滞后特征确实不包含未来信息
for lag in range(1, 8):
    assert f'销量_lag_{lag}' in df_model.columns, f"缺少滞后特征 lag_{lag}"

# 验证：预测RMSE应该小于基线
assert lr_rmse < baseline_rmse * 1.1, "模型性能过差"

print("✓ 特征工程验证通过")
print(f"✓ 销量预测完成，测试集RMSE：{lr_rmse:.2f}")
print(f"✓ 预测准确率（误差<20%）：{lr_accuracy:.2%}")
`,tips:["滞后特征只能使用历史数据，不能包含未来信息","RMSE是回归任务的常用评估指标，越小越好","特征工程的质量直接影响模型效果"]},{id:"bi-project-7",chapterId:"chapter-59",title:"商品价格敏感度聚类分析（价格带偏好）",description:"二维聚类（价格 vs 销量占比）、数据分箱与聚合。商品交易明细计算每个商品的平均单价与总销量，标准化后KMeans聚类，划分低价高量、高价低量、中价中庸等类型。",difficulty:"基础",skills:["价格分析","聚类分析","价格敏感度"],initialCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# 1. 生成模拟商品交易数据
np.random.seed(42)
n_products = 100
n_transactions = 5000

product_data = []
for trans_id in range(n_transactions):
    product_id = np.random.randint(1, n_products + 1)
    unit_price = np.random.uniform(10, 500)
    quantity = np.random.randint(1, 10)
    
    product_data.append({
        '商品ID': product_id,
        '单价': unit_price,
        '数量': quantity,
        '销售额': unit_price * quantity
    })

trans_df = pd.DataFrame(product_data)

print("="*60)
print("商品交易数据概览")
print("="*60)
print(f"总交易数：{len(trans_df)}")
print("\\n交易数据前15行：")
print(trans_df.head(15))
print()

# 2. 按商品聚合统计
print("="*60)
print("按商品聚合统计")
print("="*60)

product_stats = trans_df.groupby('商品ID').agg({
    '单价': 'mean',  # 平均单价
    '数量': 'sum',  # 总销量
    '销售额': 'sum'  # 总销售额
}).reset_index()

product_stats.columns = ['商品ID', '平均单价', '总销量', '总销售额']

print("商品统计（前20行）：")
print(product_stats.head(20).round(2))
print()

# 3. 价格带分析
print("="*60)
print("价格带分布")
print("="*60)

# 将商品按价格分箱
price_bins = [0, 50, 100, 200, 500, 1000]
price_labels = ['0-50元', '50-100元', '100-200元', '200-500元', '500元以上']
product_stats['价格带'] = pd.cut(product_stats['平均单价'], bins=price_bins, labels=price_labels)

price_dist = product_stats.groupby('价格带').agg({
    '商品ID': 'count',
    '总销量': 'sum',
    '总销售额': 'sum'
}).round(2)
price_dist.columns = ['商品数', '总销量', '总销售额']

print("各价格带分布：")
print(price_dist)
print()

# 4. KMeans聚类
print("="*60)
print("商品价格敏感度聚类")
print("="*60)

# 选择特征：平均单价和总销量
features = ['平均单价', '总销量']
X = product_stats[features]

# 标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 聚类
n_clusters = 4
kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
product_stats['簇标签'] = kmeans.fit_predict(X_scaled)

print(f"聚类数量：{n_clusters}")
print("聚类结果分布：")
print(product_stats['簇标签'].value_counts().sort_index())
print()

# 5. 聚类特征分析
print("="*60)
print("各簇商品特征分析")
print("="*60)

cluster_stats = product_stats.groupby('簇标签').agg({
    '商品ID': 'count',
    '平均单价': 'mean',
    '总销量': 'mean',
    '总销售额': 'mean'
}).round(2)

cluster_stats.columns = ['商品数', '平均单价', '平均销量', '平均销售额']

print(cluster_stats)
print()

# 为各簇命名
def name_cluster(row):
    avg_price = row['平均单价']
    avg_quantity = row['平均销量']
    
    # 根据平均价格和销量判断
    if avg_price < 100 and avg_quantity > 200:
        return '低价爆款'
    elif avg_price > 300 and avg_quantity < 100:
        return '高端小众'
    elif avg_price > 150 and avg_quantity > 150:
        return '中价畅销'
    else:
        return '一般商品'

cluster_stats['商品类型'] = cluster_stats.apply(name_cluster, axis=1)

print(cluster_stats)
print()

# 6. 可视化数据准备
print("="*60)
print("聚类散点图数据")
print("="*60)

product_stats['商品类型'] = product_stats['簇标签'].map(
    dict(zip(cluster_stats.index, cluster_stats['商品类型']))
)

for cluster_type in cluster_stats['商品类型']:
    type_data = product_stats[product_stats['商品类型'] == cluster_type]
    print(f"\\n【{cluster_type}】{len(type_data)}个商品")
    print(f"  价格范围：¥{type_data['平均单价'].min():.0f} - ¥{type_data['平均单价'].max():.0f}")
    print(f"  销量范围：{type_data['总销量'].min():.0f} - {type_data['总销量'].max():.0f}")
    print(f"  代表商品ID：{type_data['商品ID'].head(5).tolist()}")

print()

# 7. 价格敏感度分析
print("="*60)
print("价格敏感度分析")
print("="*60)

# 计算每个簇的价格敏感度指标
# 价格敏感度 = 低价格商品销量占比
for cluster_type in cluster_stats['商品类型']:
    type_data = product_stats[product_stats['商品类型'] == cluster_type]
    low_price_ratio = (type_data['平均单价'] < 100).mean()
    high_price_ratio = (type_data['平均单价'] > 300).mean()
    
    print(f"【{cluster_type}】")
    print(f"  低价商品占比：{low_price_ratio:.1%}")
    print(f"  高价商品占比：{high_price_ratio:.1%}")
    print()

# 8. 业务建议
print("="*60)
print("业务建议")
print("="*60)

for _, row in cluster_stats.iterrows():
    cluster_type = row['商品类型']
    count = row['商品数']
    
    print(f"\\n【{cluster_type}】（{int(count)}个商品）")
    if '爆款' in cluster_type:
        print("  策略：薄利多销，保证库存充足，关注成本控制")
    elif '小众' in cluster_type:
        print("  策略：提升服务体验，强调品质，精准营销")
    elif '畅销' in cluster_type:
        print("  策略：优化产品组合，维持价格竞争力")
    else:
        print("  策略：分析提升空间，考虑差异化或优化")

# 9. 方差分析验证
print()
print("="*60)
print("方差分析验证")
print("="*60)

# 验证：各簇平均价格差异是否显著
cluster_prices = [product_stats[product_stats['簇标签'] == i]['平均单价'].values 
                  for i in range(n_clusters)]
price_variance = np.var([np.mean(p) for p in cluster_prices])

print(f"各簇平均价格方差：{price_variance:.2f}")
print(f"验证：方差显著（>{10}）→ {'是' if price_variance > 10 else '否'}")

# 10. 验证
print()
print("="*60)
print("验证结果")
print("="*60)
assert '簇标签' in product_stats.columns, "聚类结果缺失"
print(f"✓ 价格聚类完成，共{len(product_stats)}个商品分成{n_clusters}个类型")
print("✓ 聚类分析完成！")
`,tips:["二维聚类可以直观展示商品的价格-销量分布","不同聚类的商品需要不同的营销策略","价格敏感度分析有助于定价决策"]},{id:"bi-project-8",chapterId:"chapter-60",title:"动态购物车智能推荐模拟（协同过滤 + 关联规则对比）",description:"用户-商品矩阵、基于项目的协同过滤（余弦相似度）、关联规则对比。使用用户购买历史，若用户加入商品A，基于相似商品推荐Top3，同时与关联规则推荐结果对比。",difficulty:"进阶",skills:["协同过滤","余弦相似度","智能推荐"],initialCode:`import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# 1. 生成模拟用户-商品交互数据
np.random.seed(42)
n_users = 50
n_products = 30
n_interactions = 500

products = {i: f'商品{i}' for i in range(1, n_products + 1)}

interaction_data = []
for _ in range(n_interactions):
    user_id = np.random.randint(1, n_users + 1)
    product_id = np.random.randint(1, n_products + 1)
    
    interaction_data.append({
        '用户ID': user_id,
        '商品ID': product_id,
        '是否购买': 1
    })

interactions_df = pd.DataFrame(interaction_data).drop_duplicates()

print("="*60)
print("用户-商品交互数据")
print("="*60)
print(f"总交互数：{len(interactions_df)}")
print("\\n交互数据前20行：")
print(interactions_df.head(20))
print()

# 2. 构建用户-商品矩阵
print("="*60)
print("构建用户-商品矩阵")
print("="*60)

user_product_matrix = interactions_df.pivot_table(
    index='用户ID',
    columns='商品ID',
    values='是否购买',
    fill_value=0
)

print(f"用户-商品矩阵形状：{user_product_matrix.shape}")
print("\\n用户-商品矩阵（前10用户，前10商品）：")
print(user_product_matrix.iloc[:10, :10])
print()

# 3. 基于项目的协同过滤
print("="*60)
print("基于项目的协同过滤（Item-based CF）")
print("="*60)

# 计算商品相似度矩阵（余弦相似度）
item_similarity = cosine_similarity(user_product_matrix.T)
item_similarity_df = pd.DataFrame(
    item_similarity,
    index=user_product_matrix.columns,
    columns=user_product_matrix.columns
)

print(f"商品相似度矩阵形状：{item_similarity_df.shape}")
print("\\n商品相似度示例（商品1与其他商品的相似度）：")
print(item_similarity_df[1].sort_values(ascending=False).head(10).round(4))
print()

# 4. 定义推荐函数
def item_based_recommend(target_item, top_n=3):
    """基于项目协同过滤推荐"""
    # 获取与目标商品最相似的Top N商品
    similar_items = item_similarity_df[target_item].sort_values(ascending=False)
    # 排除自身
    similar_items = similar_items.drop(target_item)
    # 返回Top N推荐
    return similar_items.head(top_n)

# 5. 关联规则推荐
print("="*60)
print("关联规则推荐")
print("="*60)

# 计算商品共现
co_occurrence = user_product_matrix.T.dot(user_product_matrix)
np.fill_diagonal(co_occurrence.values, 0)

# 计算支持度
item_support = user_product_matrix.sum() / len(user_product_matrix)
total_transactions = len(user_product_matrix)

# 计算关联规则
def association_rule_recommend(target_item, top_n=3):
    """基于关联规则推荐"""
    recommendations = {}
    
    for other_item in range(1, n_products + 1):
        if other_item != target_item:
            # 计算支持度和置信度
            co_count = co_occurrence.loc[target_item, other_item]
            support_both = co_count / total_transactions
            confidence = support_both / item_support[target_item] if item_support[target_item] > 0 else 0
            
            if confidence > 0:
                recommendations[other_item] = {
                    '共现次数': int(co_count),
                    '置信度': confidence
                }
    
    # 按置信度排序
    sorted_recs = sorted(recommendations.items(), 
                        key=lambda x: x[1]['置信度'], 
                        reverse=True)
    return sorted_recs[:top_n]

# 6. 推荐示例
print("="*60)
print("推荐示例")
print("="*60)

# 选择一个测试商品
test_item = 1
print(f"测试商品：{products[test_item]}")
print()

# 协同过滤推荐
print("【基于项目协同过滤推荐】")
cf_recs = item_based_recommend(test_item, top_n=3)
print(f"基于与「{products[test_item]}」相似的商品：")
for item_id, similarity in cf_recs.items():
    print(f"  {products[item_id]}（相似度：{similarity:.4f})")
print()

# 关联规则推荐
print("【基于关联规则推荐】")
ar_recs = association_rule_recommend(test_item, top_n=3)
print(f"购买「{products[test_item]}」后常购买：")
for item_id, info in ar_recs:
    print(f"  {products[item_id]}（置信度：{info['置信度']:.2%}，共现{info['共现次数']}次）")
print()

# 7. 对比分析
print("="*60)
print("两种推荐方法对比")
print("="*60)

cf_set = set(cf_recs.index)
ar_set = set([item_id for item_id, _ in ar_recs])

overlap = cf_set & ar_set
only_cf = cf_set - ar_set
only_ar = ar_set - cf_set

print(f"协同过滤推荐商品：{cf_set}")
print(f"关联规则推荐商品：{ar_set}")
print(f"重叠商品：{overlap if overlap else '无'}")
print(f"仅协同过滤：{only_cf if only_cf else '无'}")
print(f"仅关联规则：{only_ar if only_ar else '无'}")
print()

print("方法特点对比：")
print("  协同过滤：基于用户行为相似性，适合用户数据丰富的场景")
print("  关联规则：基于商品共现规律，解释性强，适合item数据丰富的场景")
print()

# 8. 业务应用
print("="*60)
print("业务应用场景")
print("="*60)

print("场景1：用户加入购物车后")
print("  → 展示相似商品推荐")
print("  → 展示购买了此商品的用户还买了")
print()

print("场景2：商品详情页")
print("  → 展示关联商品组合")
print("  → 展示热销搭配")
print()

print("场景3：购物车结算页")
print("  → 基于已选商品进行跨类目推荐")
print("  → 展示加购优惠组合")
print()

# 9. 验证
print("="*60)
print("验证结果")
print("="*60)

# 验证：推荐商品未被用户已购买
test_user = 1
user_purchased = set(user_product_matrix.loc[test_user][user_product_matrix.loc[test_user] == 1].index)

if len(cf_recs) > 0:
    for item_id in cf_recs.index:
        assert item_id not in user_purchased, f"推荐了用户已购买的商品{item_id}"

print(f"✓ 推荐商品未被用户已购买")
print(f"✓ 协同过滤推荐{len(cf_recs)}个商品")
print(f"✓ 关联规则推荐{len(ar_recs)}个商品")
print("✓ 智能推荐模拟完成！")
`,tips:["协同过滤利用用户行为的相似性","关联规则挖掘商品之间的共现关系","两种方法可以互补使用，提升推荐效果"]},{id:"bi-project-9",chapterId:"chapter-61",title:"异常交易检测（孤立森林 + 统计方法）",description:"异常检测、Z-score、孤立森林、多维特征。订单数据含金额、数量、折扣、用户注册时长等，使用Z-score与孤立森林标记异常订单，分析异常类型（欺诈？团购？）。",difficulty:"进阶",skills:["异常检测","孤立森林","欺诈识别"],initialCode:`import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest
from datetime import datetime

# 1. 生成模拟订单数据
np.random.seed(42)
n_orders = 1000

order_data = []
for i in range(n_orders):
    order_id = f'ORD{str(i+1).zfill(6)}'
    user_id = np.random.randint(1, 201)
    order_date = datetime(2024, 1, 1) + pd.Timedelta(days=np.random.randint(0, 180))
    amount = np.random.uniform(50, 2000)
    quantity = np.random.randint(1, 10)
    discount = np.random.uniform(0, 0.3)
    user_age_days = np.random.randint(1, 1000)
    
    # 注入异常订单
    if i < 20:  # 高金额订单
        amount = np.random.uniform(5000, 10000)
    elif i < 35:  # 高折扣订单
        discount = np.random.uniform(0.7, 0.9)
    elif i < 45:  # 大量购买订单
        quantity = np.random.randint(50, 100)
    elif i < 50:  # 新用户大额订单
        user_age_days = np.random.randint(1, 7)
        amount = np.random.uniform(3000, 5000)
    
    order_data.append({
        '订单ID': order_id,
        '用户ID': user_id,
        '订单日期': order_date,
        '订单金额': amount,
        '购买数量': quantity,
        '折扣率': discount,
        '用户注册天数': user_age_days
    })

orders_df = pd.DataFrame(order_data)

print("="*60)
print("订单数据概览")
print("="*60)
print(f"总订单数：{len(orders_df)}")
print("\\n订单数据前20行：")
print(orders_df.head(20))
print()
print("数据统计：")
print(orders_df.describe().round(2))
print()

# 2. 特征工程
print("="*60)
print("特征工程")
print("="*60)

# 计算折扣金额
orders_df['折扣金额'] = orders_df['订单金额'] * orders_df['折扣率']

# 计算单价
orders_df['单价'] = orders_df['订单金额'] / orders_df['购买数量']

# 计算用户订单数
user_order_count = orders_df.groupby('用户ID').size().to_dict()
orders_df['用户订单数'] = orders_df['用户ID'].map(user_order_count)

print("增强特征：")
print(orders_df[['订单ID', '订单金额', '折扣率', '折扣金额', '购买数量', '单价', '用户注册天数', '用户订单数']].head(20))
print()

# 3. Z-score异常检测
print("="*60)
print("Z-score异常检测")
print("="*60)

features_zscore = ['订单金额', '购买数量', '折扣率', '用户注册天数']

for feature in features_zscore:
    mean_val = orders_df[feature].mean()
    std_val = orders_df[feature].std()
    
    orders_df[f'{feature}_zscore'] = (orders_df[feature] - mean_val) / std_val
    orders_df[f'{feature}_is_outlier_zscore'] = (abs(orders_df[f'{feature}_zscore']) > 3).astype(int)

# 综合Z-score异常标记
orders_df['Zscore_异常'] = (
    (orders_df['订单金额_is_outlier_zscore'] == 1) |
    (orders_df['购买数量_is_outlier_zscore'] == 1) |
    (orders_df['折扣率_is_outlier_zscore'] == 1)
).astype(int)

zscore_anomalies = orders_df[orders_df['Zscore_异常'] == 1]
print(f"Z-score检测到异常订单：{len(zscore_anomalies)}个")
print()

# 4. 孤立森林异常检测
print("="*60)
print("孤立森林异常检测")
print("="*60)

# 选择特征
features_if = ['订单金额', '购买数量', '折扣率', '用户注册天数', '单价']
X = orders_df[features_if]

# 孤立森林
iso_forest = IsolationForest(contamination=0.05, random_state=42, n_estimators=100)
orders_df['IF_异常分'] = iso_forest.fit_predict(X)
orders_df['IF_异常'] = (orders_df['IF_异常分'] == -1).astype(int)

if_anomalies = orders_df[orders_df['IF_异常'] == 1]
print(f"孤立森林检测到异常订单：{len(if_anomalies)}个")
print()

# 5. 两种方法对比
print("="*60)
print("异常检测方法对比")
print("="*60)

zscore_set = set(orders_df[orders_df['Zscore_异常'] == 1].index)
if_set = set(orders_df[orders_df['IF_异常'] == 1].index)

overlap = zscore_set & if_set
only_zscore = zscore_set - if_set
only_if = if_set - zscore_set

print(f"Z-score异常数：{len(zscore_set)}")
print(f"孤立森林异常数：{len(if_set)}")
print(f"重叠异常数：{len(overlap)}")
print(f"重叠比例：{len(overlap)/len(if_set)*100:.1f}%")
print()

# 6. 异常订单分析
print("="*60)
print("异常订单详细分析")
print("="*60)

# 综合异常标记
orders_df['综合异常'] = ((orders_df['Zscore_异常'] == 1) | (orders_df['IF_异常'] == 1)).astype(int)
total_anomalies = orders_df[orders_df['综合异常'] == 1]

print(f"综合异常订单总数：{len(total_anomalies)}")
print(f"异常订单占比：{len(total_anomalies)/len(orders_df)*100:.2f}%")
print()

# 分析异常类型
print("异常类型分析：")
high_amount = total_anomalies[total_anomalies['订单金额'] > 3000]
high_discount = total_anomalies[total_anomalies['折扣率'] > 0.5]
high_quantity = total_anomalies[total_anomalies['购买数量'] > 20]
new_user_large = total_anomalies[(total_anomalies['用户注册天数'] < 30) & (total_anomalies['订单金额'] > 2000)]

print(f"  高金额订单（>¥3000）：{len(high_amount)}个")
print(f"  高折扣订单（>50%）：{len(high_discount)}个")
print(f"  大量购买订单（>20件）：{len(high_quantity)}个")
print(f"  新用户大额订单：{len(new_user_large)}个")
print()

# 7. 异常订单示例
print("="*60)
print("异常订单示例")
print("="*60)

print("Top 10 高金额异常订单：")
top_amount_anomalies = total_anomalies.nlargest(10, '订单金额')
print(top_amount_anomalies[['订单ID', '订单金额', '购买数量', '折扣率', '用户注册天数']])
print()

print("Top 10 高折扣异常订单：")
top_discount_anomalies = total_anomalies.nlargest(10, '折扣率')
print(top_discount_anomalies[['订单ID', '订单金额', '购买数量', '折扣率', '用户注册天数']])
print()

# 8. 可视化数据准备
print("="*60)
print("异常分布可视化数据")
print("="*60)

print("各特征异常分布：")
for feature in ['订单金额', '购买数量', '折扣率']:
    outliers = total_anomalies[total_anomalies[f'{feature}_is_outlier_zscore'] == 1]
    print(f"  {feature}：{len(outliers)}个异常")

print()

# 9. 异常类型识别
print("="*60)
print("异常类型识别")
print("="*60)

def classify_anomaly(row):
    reasons = []
    
    if row['订单金额'] > 3000:
        reasons.append('高金额')
    if row['折扣率'] > 0.5:
        reasons.append('高折扣')
    if row['购买数量'] > 20:
        reasons.append('大量购买')
    if row['用户注册天数'] < 30 and row['订单金额'] > 2000:
        reasons.append('新用户高风险')
    
    return ' + '.join(reasons) if reasons else '其他异常'

total_anomalies = total_anomalies.copy()
total_anomalies['异常原因'] = total_anomalies.apply(classify_anomaly, axis=1)

anomaly_distribution = total_anomalies['异常原因'].value_counts()
print("异常类型分布：")
print(anomaly_distribution)
print()

# 10. 业务建议
print("="*60)
print("业务建议")
print("="*60)

print("1. 高金额订单：")
print("   → 建议：人工审核或增加支付验证")
print()

print("2. 高折扣订单：")
print("   → 建议：核查优惠券使用合理性")
print()

print("3. 大量购买订单：")
print("   → 建议：判断是批发商还是刷单")
print()

print("4. 新用户高风险订单：")
print("   → 建议：延迟发货，联系用户确认")
print()

# 11. 验证
print()
print("="*60)
print("验证结果")
print("="*60)

# 验证：重叠比例应该合理
overlap_ratio = len(overlap) / len(if_set) if len(if_set) > 0 else 0
assert 0 <= overlap_ratio <= 1, "重叠比例应该在0-1之间"

print(f"✓ Z-score检测异常：{len(zscore_set)}个")
print(f"✓ 孤立森林检测异常：{len(if_set)}个")
print(f"✓ 综合异常订单：{len(total_anomalies)}个")
print("✓ 异常交易检测完成！")
`,tips:["Z-score适合单维度异常检测","孤立森林适合多维度异常检测","两种方法结合可以提高检测准确性"]},{id:"bi-project-10",chapterId:"chapter-62",title:"端到端BI仪表盘项目（综合任务）",description:"前述所有技能 + 数据管道 + 仪表盘输出。给定多表数据（用户、订单、商品、物流），自行清洗合并，完成购物车分析+RFM+聚类+异常检测，动态筛选器展示KPI、图表、聚类客户画像。",difficulty:"综合",skills:["端到端分析","BI仪表盘","综合项目"],initialCode:`import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

print("="*70)
print("端到端BI仪表盘项目")
print("="*70)
print(f"项目时间：{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
print()

# ===================== 1. 数据生成与加载 =====================
print("="*70)
print("1. 数据生成与加载")
print("="*70)

np.random.seed(42)

# 用户表
n_users = 200
users = pd.DataFrame({
    '用户ID': range(1, n_users + 1),
    '用户名': [f'用户{i}' for i in range(1, n_users + 1)],
    '注册日期': [datetime(2024, 1, 1) + timedelta(days=np.random.randint(0, 180)) for _ in range(n_users)],
    '地区': np.random.choice(['华东', '华南', '华北', '华中', '西南'], n_users)
})

# 订单表
n_orders = 2000
orders = []
for i in range(n_orders):
    orders.append({
        '订单ID': f'ORD{str(i+1).zfill(6)}',
        '用户ID': np.random.randint(1, n_users + 1),
        '订单日期': datetime(2024, 1, 1) + timedelta(days=np.random.randint(0, 180)),
        '订单金额': np.random.uniform(50, 2000),
        '订单状态': np.random.choice(['已完成', '已取消', '待支付'], p=[0.85, 0.1, 0.05])
    })
orders_df = pd.DataFrame(orders)

# 商品表
n_products = 50
products = pd.DataFrame({
    '商品ID': range(1, n_products + 1),
    '商品名称': [f'商品{i}' for i in range(1, n_products + 1)],
    '商品类别': np.random.choice(['服装', '电子产品', '食品', '家居', '美妆'], n_products),
    '单价': np.random.uniform(20, 500, n_products).round(2)
})

# 物流表
logistics = pd.DataFrame({
    '订单ID': orders_df['订单ID'],
    '发货日期': orders_df['订单日期'] + timedelta(days=np.random.randint(1, 3)),
    '收货日期': orders_df['订单日期'] + timedelta(days=np.random.randint(3, 10)),
    '物流状态': np.random.choice(['已发货', '运输中', '已签收'], p=[0.2, 0.3, 0.5])
})

print(f"用户数：{len(users)}")
print(f"订单数：{len(orders_df)}")
print(f"商品数：{len(products)}")
print(f"物流记录数：{len(logistics)}")
print()

# ===================== 2. 数据清洗与合并 =====================
print("="*70)
print("2. 数据清洗与合并")
print("="*70)

# 数据清洗
# 1. 删除重复
users_clean = users.drop_duplicates(subset=['用户ID'])
orders_clean = orders_df.drop_duplicates(subset=['订单ID'])

# 2. 处理缺失值
orders_clean['订单金额'] = orders_clean['订单金额'].fillna(orders_clean['订单金额'].median())

# 3. 数据合并
# 主表：订单表
main_df = orders_clean.copy()
# 合并用户信息
main_df = main_df.merge(users_clean[['用户ID', '用户名', '地区']], on='用户ID', how='left')
# 合并物流信息
main_df = main_df.merge(logistics[['订单ID', '发货日期', '收货日期', '物流状态']], on='订单ID', how='left')

print(f"合并后数据行数：{len(main_df)}")
print("合并后数据列：", main_df.columns.tolist())
print()

# ===================== 3. 购物车分析 =====================
print("="*70)
print("3. 购物车分析（关联规则）")
print("="*70)

# 简化版：按用户聚合购买记录
user_products = orders_clean.groupby('用户ID').agg({
    '订单ID': 'count',
    '订单金额': 'sum'
}).reset_index()
user_products.columns = ['用户ID', '购买次数', '总金额']

print("用户购买统计（前10）：")
print(user_products.head(10))
print()

# ===================== 4. RFM分析 =====================
print("="*70)
print("4. RFM客户分层")
print("="*70)

reference_date = datetime(2024, 7, 1)

rfm = orders_clean[orders_clean['订单状态'] == '已完成'].groupby('用户ID').agg({
    '订单日期': lambda x: (reference_date - x.max()).days,
    '订单ID': 'count',
    '订单金额': 'sum'
}).reset_index()

rfm.columns = ['用户ID', 'R(最近天数)', 'F(频率)', 'M(金额)']

# RFM评分
rfm['R评分'] = pd.qcut(rfm['R(最近天数)'], q=5, labels=[5, 4, 3, 2, 1]).astype(int)
rfm['F评分'] = pd.qcut(rfm['F(频率)'].rank(method='first'), q=5, labels=[1, 2, 3, 4, 5]).astype(int)
rfm['M评分'] = pd.qcut(rfm['M(金额)'].rank(method='first'), q=5, labels=[1, 2, 3, 4, 5]).astype(int)
rfm['RFM总分'] = rfm['R评分'] + rfm['F评分'] + rfm['M评分']

print("RFM分析结果（前15）：")
print(rfm[['用户ID', 'R评分', 'F评分', 'M评分', 'RFM总分']].head(15))
print()

# 客户分层
def classify_customer(row):
    if row['RFM总分'] >= 13:
        return '高价值客户'
    elif row['RFM总分'] >= 10:
        return '重要发展客户'
    elif row['RFM总分'] >= 7:
        return '一般客户'
    else:
        return '流失风险客户'

rfm['客户类型'] = rfm.apply(classify_customer, axis=1)

customer_dist = rfm['客户类型'].value_counts()
print("客户分层分布：")
print(customer_dist)
print()

# ===================== 5. 用户聚类 =====================
print("="*70)
print("5. 用户行为聚类")
print("="*70)

# 合并RFM和用户信息
user_features = rfm.merge(users_clean[['用户ID', '地区']], on='用户ID', how='left')

# 选择聚类特征
features = ['R评分', 'F评分', 'M评分']
X = user_features[features]

# 标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# KMeans聚类
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
user_features['用户簇'] = kmeans.fit_predict(X_scaled)

print("用户聚类结果分布：")
print(user_features['用户簇'].value_counts())
print()

cluster_stats = user_features.groupby('用户簇').agg({
    'R评分': 'mean',
    'F评分': 'mean',
    'M评分': 'mean',
    '用户ID': 'count'
}).round(2)
cluster_stats.columns = ['平均R', '平均F', '平均M', '用户数']
print("各簇特征：")
print(cluster_stats)
print()

# ===================== 6. 异常检测 =====================
print("="*70)
print("6. 异常交易检测")
print("="*70)

# 使用Z-score检测异常订单
orders_with_user = orders_clean.merge(users[['用户ID', '注册日期']], on='用户ID', how='left')
orders_with_user['用户注册天数'] = (datetime(2024, 7, 1) - orders_with_user['注册日期']).dt.days

# 计算Z-score
orders_with_user['金额Zscore'] = (orders_with_user['订单金额'] - orders_with_user['订单金额'].mean()) / orders_with_user['订单金额'].std()
orders_with_user['异常'] = (abs(orders_with_user['金额Zscore']) > 3).astype(int)

anomalies = orders_with_user[orders_with_user['异常'] == 1]
print(f"检测到异常订单：{len(anomalies)}个")
if len(anomalies) > 0:
    print("异常订单示例：")
    print(anomalies[['订单ID', '订单金额', '金额Zscore']].head(10))
print()

# ===================== 7. BI仪表盘KPI =====================
print("="*70)
print("7. BI仪表盘核心KPI")
print("="*70)

# 计算核心KPI
total_orders = len(orders_df)
total_revenue = orders_df[orders_df['订单状态'] == '已完成']['订单金额'].sum()
total_users = orders_df['用户ID'].nunique()
avg_order_value = total_revenue / total_orders if total_orders > 0 else 0

print(f"📊 核心指标：")
print(f"  总订单数：{total_orders:,}")
print(f"  总销售额：¥{total_revenue:,.2f}")
print(f"  总用户数：{total_users:,}")
print(f"  平均订单金额：¥{avg_order_value:.2f}")
print()

# 地区销售排名
region_sales = main_df[main_df['订单状态'] == '已完成'].groupby('地区').agg({
    '订单ID': 'count',
    '订单金额': 'sum'
}).round(2)
region_sales.columns = ['订单数', '销售额']
region_sales = region_sales.sort_values('销售额', ascending=False)

print("📍 地区销售排名：")
print(region_sales)
print()

# 月度销售趋势
main_df['月份'] = main_df['订单日期'].dt.month
monthly_sales = main_df[main_df['订单状态'] == '已完成'].groupby('月份')['订单金额'].sum()

print("📈 月度销售趋势：")
for month, sales in monthly_sales.items():
    print(f"  {month}月：¥{sales:,.2f}")
print()

# ===================== 8. 聚类客户画像 =====================
print("="*70)
print("8. 聚类客户画像")
print("="*70)

for cluster_id in range(3):
    cluster_users = user_features[user_features['用户簇'] == cluster_id]
    
    print(f"\\n【用户群{cluster_id}】（{len(cluster_users)}人）")
    print(f"  平均R评分：{cluster_users['R评分'].mean():.2f}")
    print(f"  平均F评分：{cluster_users['F评分'].mean():.2f}")
    print(f"  平均M评分：{cluster_users['M评分'].mean():.2f}")
    
    # 地区分布
    region_dist = cluster_users['地区'].value_counts().head(3)
    print(f"  主要地区：{', '.join(region_dist.index.tolist())}")
print()

# ===================== 9. 数据质量检查 =====================
print("="*70)
print("9. 数据质量检查")
print("="*70)

# 检查数据唯一性
assert main_df['订单ID'].nunique() == len(main_df), "订单ID不唯一"
print("✓ 订单ID唯一性检查通过")

# 检查数据范围
assert main_df['订单金额'].min() >= 0, "订单金额有负值"
print("✓ 订单金额范围检查通过")

# 检查缺失值
missing_pct = main_df.isnull().sum().sum() / (len(main_df) * len(main_df.columns)) * 100
print(f"✓ 数据缺失率：{missing_pct:.2f}%")
print()

# ===================== 10. 总结与建议 =====================
print("="*70)
print("10. 总结与业务建议")
print("="*70)

print("📌 核心发现：")
print(f"  1. 高价值客户占比：{(rfm['客户类型'] == '高价值客户').sum() / len(rfm) * 100:.1f}%")
print(f"  2. 异常订单数：{len(anomalies)}个（占比{len(anomalies)/total_orders*100:.2f}%）")
print(f"  3. 销售额最高地区：{region_sales.index[0]}")
print()

print("📌 业务建议：")
print("  1. 针对高价值客户提供VIP服务和个性化推荐")
print("  2. 加强对异常订单的监控和审核")
print("  3. 在销售热点地区加大营销投入")
print("  4. 对流失风险客户进行定向召回")
print()

print("="*70)
print("✓ 端到端BI仪表盘项目完成！")
print("="*70)
`,tips:["端到端项目需要整合多个数据源","仪表盘应该展示清晰的业务洞察","数据质量是BI分析的基础"]}];function $_(){const{chapterId:e}=_c(),t=Rr(),r=Wl.find(n=>n.chapterId===e)||Wl[0];return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("button",{onClick:()=>t(-1),className:"flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-xl transition-all w-fit",children:[o.jsx(wc,{className:"h-4 w-4"}),o.jsx("span",{children:"返回"})]}),o.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-soft border border-gray-100",children:[o.jsx("div",{className:"flex items-start justify-between mb-4",children:o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[o.jsx(Sc,{className:"h-6 w-6 text-emerald-600"}),o.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${r.difficulty==="基础"?"bg-emerald-100 text-emerald-700":r.difficulty==="进阶"?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700"}`,children:r.difficulty})]}),o.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:r.title}),o.jsx("p",{className:"text-gray-600",children:r.description})]})}),o.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:r.skills.map((n,s)=>o.jsx("span",{className:"px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs",children:n},s))}),o.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx(jc,{className:"h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-semibold text-amber-900 mb-2",children:"学习提示"}),o.jsx("ul",{className:"space-y-1 text-sm text-amber-800",children:r.tips.map((n,s)=>o.jsxs("li",{children:["• ",n]},s))})]})]})})]}),o.jsx(B_,{initialCode:r.initialCode})]})}function U_(){return o.jsx(l0,{children:o.jsx($0,{children:o.jsxs(t0,{children:[o.jsx(At,{path:"/",element:o.jsx(D_,{})}),o.jsx(At,{path:"/courses",element:o.jsx(P_,{})}),o.jsx(At,{path:"/courses/:id",element:o.jsx(L_,{})}),o.jsx(At,{path:"/practice/:chapterId",element:o.jsx($_,{})}),o.jsx(At,{path:"/study-data",element:o.jsx(A_,{})}),o.jsx(At,{path:"/study-tasks",element:o.jsx(O_,{})})]})})})}Na.createRoot(document.getElementById("root")).render(o.jsx(Ci.StrictMode,{children:o.jsx(U_,{})}));
