(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Dh={exports:{}},fa={},Vh={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Qv(){if(lm)return Ie;lm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.iterator;function b(V){return V===null||typeof V!="object"?null:(V=k&&V[k]||V["@@iterator"],typeof V=="function"?V:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,X={};function H(V,j,oe){this.props=V,this.context=j,this.refs=X,this.updater=oe||B}H.prototype.isReactComponent={},H.prototype.setState=function(V,j){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,j,"setState")},H.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ve(){}ve.prototype=H.prototype;function _e(V,j,oe){this.props=V,this.context=j,this.refs=X,this.updater=oe||B}var ye=_e.prototype=new ve;ye.constructor=_e,Y(ye,H.prototype),ye.isPureReactComponent=!0;var we=Array.isArray,We=Object.prototype.hasOwnProperty,Se={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,j,oe){var Ee,Te={},ke=null,Le=null;if(j!=null)for(Ee in j.ref!==void 0&&(Le=j.ref),j.key!==void 0&&(ke=""+j.key),j)We.call(j,Ee)&&!N.hasOwnProperty(Ee)&&(Te[Ee]=j[Ee]);var xe=arguments.length-2;if(xe===1)Te.children=oe;else if(1<xe){for(var je=Array(xe),mt=0;mt<xe;mt++)je[mt]=arguments[mt+2];Te.children=je}if(V&&V.defaultProps)for(Ee in xe=V.defaultProps,xe)Te[Ee]===void 0&&(Te[Ee]=xe[Ee]);return{$$typeof:i,type:V,key:ke,ref:Le,props:Te,_owner:Se.current}}function A(V,j){return{$$typeof:i,type:V.type,key:j,ref:V.ref,props:V.props,_owner:V._owner}}function C(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var j={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(oe){return j[oe]})}var O=/\/+/g;function S(V,j){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):j.toString(36)}function et(V,j,oe,Ee,Te){var ke=typeof V;(ke==="undefined"||ke==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(ke){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case i:case e:Le=!0}}if(Le)return Le=V,Te=Te(Le),V=Ee===""?"."+S(Le,0):Ee,we(Te)?(oe="",V!=null&&(oe=V.replace(O,"$&/")+"/"),et(Te,j,oe,"",function(mt){return mt})):Te!=null&&(C(Te)&&(Te=A(Te,oe+(!Te.key||Le&&Le.key===Te.key?"":(""+Te.key).replace(O,"$&/")+"/")+V)),j.push(Te)),1;if(Le=0,Ee=Ee===""?".":Ee+":",we(V))for(var xe=0;xe<V.length;xe++){ke=V[xe];var je=Ee+S(ke,xe);Le+=et(ke,j,oe,je,Te)}else if(je=b(V),typeof je=="function")for(V=je.call(V),xe=0;!(ke=V.next()).done;)ke=ke.value,je=Ee+S(ke,xe++),Le+=et(ke,j,oe,je,Te);else if(ke==="object")throw j=String(V),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return Le}function Pt(V,j,oe){if(V==null)return V;var Ee=[],Te=0;return et(V,Ee,"","",function(ke){return j.call(oe,ke,Te++)}),Ee}function kt(V){if(V._status===-1){var j=V._result;j=j(),j.then(function(oe){(V._status===0||V._status===-1)&&(V._status=1,V._result=oe)},function(oe){(V._status===0||V._status===-1)&&(V._status=2,V._result=oe)}),V._status===-1&&(V._status=0,V._result=j)}if(V._status===1)return V._result.default;throw V._result}var be={current:null},J={transition:null},le={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:J,ReactCurrentOwner:Se};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:Pt,forEach:function(V,j,oe){Pt(V,function(){j.apply(this,arguments)},oe)},count:function(V){var j=0;return Pt(V,function(){j++}),j},toArray:function(V){return Pt(V,function(j){return j})||[]},only:function(V){if(!C(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ie.Component=H,Ie.Fragment=t,Ie.Profiler=o,Ie.PureComponent=_e,Ie.StrictMode=s,Ie.Suspense=g,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ie.act=ee,Ie.cloneElement=function(V,j,oe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ee=Y({},V.props),Te=V.key,ke=V.ref,Le=V._owner;if(j!=null){if(j.ref!==void 0&&(ke=j.ref,Le=Se.current),j.key!==void 0&&(Te=""+j.key),V.type&&V.type.defaultProps)var xe=V.type.defaultProps;for(je in j)We.call(j,je)&&!N.hasOwnProperty(je)&&(Ee[je]=j[je]===void 0&&xe!==void 0?xe[je]:j[je])}var je=arguments.length-2;if(je===1)Ee.children=oe;else if(1<je){xe=Array(je);for(var mt=0;mt<je;mt++)xe[mt]=arguments[mt+2];Ee.children=xe}return{$$typeof:i,type:V.type,key:Te,ref:ke,props:Ee,_owner:Le}},Ie.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Ie.createElement=I,Ie.createFactory=function(V){var j=I.bind(null,V);return j.type=V,j},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(V){return{$$typeof:m,render:V}},Ie.isValidElement=C,Ie.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:kt}},Ie.memo=function(V,j){return{$$typeof:v,type:V,compare:j===void 0?null:j}},Ie.startTransition=function(V){var j=J.transition;J.transition={};try{V()}finally{J.transition=j}},Ie.unstable_act=ee,Ie.useCallback=function(V,j){return be.current.useCallback(V,j)},Ie.useContext=function(V){return be.current.useContext(V)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(V){return be.current.useDeferredValue(V)},Ie.useEffect=function(V,j){return be.current.useEffect(V,j)},Ie.useId=function(){return be.current.useId()},Ie.useImperativeHandle=function(V,j,oe){return be.current.useImperativeHandle(V,j,oe)},Ie.useInsertionEffect=function(V,j){return be.current.useInsertionEffect(V,j)},Ie.useLayoutEffect=function(V,j){return be.current.useLayoutEffect(V,j)},Ie.useMemo=function(V,j){return be.current.useMemo(V,j)},Ie.useReducer=function(V,j,oe){return be.current.useReducer(V,j,oe)},Ie.useRef=function(V){return be.current.useRef(V)},Ie.useState=function(V){return be.current.useState(V)},Ie.useSyncExternalStore=function(V,j,oe){return be.current.useSyncExternalStore(V,j,oe)},Ie.useTransition=function(){return be.current.useTransition()},Ie.version="18.3.1",Ie}var um;function gd(){return um||(um=1,Vh.exports=Qv()),Vh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Yv(){if(cm)return fa;cm=1;var i=gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var w,k={},b=null,B=null;v!==void 0&&(b=""+v),g.key!==void 0&&(b=""+g.key),g.ref!==void 0&&(B=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(k[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)k[w]===void 0&&(k[w]=g[w]);return{$$typeof:e,type:m,key:b,ref:B,props:k,_owner:o.current}}return fa.Fragment=t,fa.jsx=h,fa.jsxs=h,fa}var hm;function Xv(){return hm||(hm=1,Dh.exports=Yv()),Dh.exports}var Ue=Xv(),ri=gd(),ru={},Oh={exports:{}},Qt={},Lh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Jv(){return dm||(dm=1,function(i){function e(J,le){var ee=J.length;J.push(le);e:for(;0<ee;){var V=ee-1>>>1,j=J[V];if(0<o(j,le))J[V]=le,J[ee]=j,ee=V;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],ee=J.pop();if(ee!==le){J[0]=ee;e:for(var V=0,j=J.length,oe=j>>>1;V<oe;){var Ee=2*(V+1)-1,Te=J[Ee],ke=Ee+1,Le=J[ke];if(0>o(Te,ee))ke<j&&0>o(Le,Te)?(J[V]=Le,J[ke]=ee,V=ke):(J[V]=Te,J[Ee]=ee,V=Ee);else if(ke<j&&0>o(Le,ee))J[V]=Le,J[ke]=ee,V=ke;else break e}}return le}function o(J,le){var ee=J.sortIndex-le.sortIndex;return ee!==0?ee:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,k=null,b=3,B=!1,Y=!1,X=!1,H=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(J){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=J)s(v),le.sortIndex=le.expirationTime,e(g,le);else break;le=t(v)}}function we(J){if(X=!1,ye(J),!Y)if(t(g)!==null)Y=!0,kt(We);else{var le=t(v);le!==null&&be(we,le.startTime-J)}}function We(J,le){Y=!1,X&&(X=!1,ve(I),I=-1),B=!0;var ee=b;try{for(ye(le),k=t(g);k!==null&&(!(k.expirationTime>le)||J&&!D());){var V=k.callback;if(typeof V=="function"){k.callback=null,b=k.priorityLevel;var j=V(k.expirationTime<=le);le=i.unstable_now(),typeof j=="function"?k.callback=j:k===t(g)&&s(g),ye(le)}else s(g);k=t(g)}if(k!==null)var oe=!0;else{var Ee=t(v);Ee!==null&&be(we,Ee.startTime-le),oe=!1}return oe}finally{k=null,b=ee,B=!1}}var Se=!1,N=null,I=-1,A=5,C=-1;function D(){return!(i.unstable_now()-C<A)}function O(){if(N!==null){var J=i.unstable_now();C=J;var le=!0;try{le=N(!0,J)}finally{le?S():(Se=!1,N=null)}}else Se=!1}var S;if(typeof _e=="function")S=function(){_e(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Pt=et.port2;et.port1.onmessage=O,S=function(){Pt.postMessage(null)}}else S=function(){H(O,0)};function kt(J){N=J,Se||(Se=!0,S())}function be(J,le){I=H(function(){J(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){Y||B||(Y=!0,kt(We))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(b){case 1:case 2:case 3:var le=3;break;default:le=b}var ee=b;b=le;try{return J()}finally{b=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=b;b=J;try{return le()}finally{b=ee}},i.unstable_scheduleCallback=function(J,le,ee){var V=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?V+ee:V):ee=V,J){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,J={id:w++,callback:le,priorityLevel:J,startTime:ee,expirationTime:j,sortIndex:-1},ee>V?(J.sortIndex=ee,e(v,J),t(g)===null&&J===t(v)&&(X?(ve(I),I=-1):X=!0,be(we,ee-V))):(J.sortIndex=j,e(g,J),Y||B||(Y=!0,kt(We))),J},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(J){var le=b;return function(){var ee=b;b=le;try{return J.apply(this,arguments)}finally{b=ee}}}}(xh)),xh}var fm;function Zv(){return fm||(fm=1,Lh.exports=Jv()),Lh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function e0(){if(pm)return Qt;pm=1;var i=gd(),e=Zv();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},k={};function b(n){return g.call(k,n)?!0:g.call(w,n)?!1:v.test(n)?k[n]=!0:(w[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Y(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){H[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];H[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){H[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){H[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){H[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){H[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){H[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){H[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){H[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var ve=/[\-:]([a-z])/g;function _e(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ve,_e);H[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ve,_e);H[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ve,_e);H[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),H.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){H[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=H.hasOwnProperty(r)?H[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Y(r,a,d,c)&&(a=null),c||d===null?b(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,We=Symbol.for("react.element"),Se=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,V;function j(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var oe=!1;function Ee(n,r){if(!n||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var R=`
`+d[_].replace(" at new "," at ");return n.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",n.displayName)),R}while(1<=_&&0<=T);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?j(n):""}function Te(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Se:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case kt:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Jn(n){n._valueTracker||(n._valueTracker=mt(n))}function ts(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Rr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gi(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ns(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=xe(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vo(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function Eo(n,r){vo(n,r);var a=xe(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?rs(n,r.type,a):r.hasOwnProperty("defaultValue")&&rs(n,r.type,xe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ba(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function rs(n,r,a){(r!=="number"||Rr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Zn=Array.isArray;function er(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+xe(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function wo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function is(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(Zn(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:xe(a)}}function ss(n,r){var a=xe(r.value),c=xe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function To(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?at(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tr,Io=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=tr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Cr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_i=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(n){_i.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),yi[r]=yi[n]})});function So(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||yi.hasOwnProperty(n)&&yi[n]?(""+r).trim():r+"px"}function Ao(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=So(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ro=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Co(n,r){if(r){if(Ro[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Po(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function os(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var as=null,on=null,xn=null;function ls(n){if(n=Jo(n)){if(typeof as!="function")throw Error(t(280));var r=n.stateNode;r&&(r=_l(r),as(n.stateNode,n.type,r))}}function Mn(n){on?xn?xn.push(n):xn=[n]:on=n}function ko(){if(on){var n=on,r=xn;if(xn=on=null,ls(n),r)for(n=0;n<r.length;n++)ls(r[n])}}function Ei(n,r){return n(r)}function No(){}var nr=!1;function Do(n,r,a){if(nr)return n(r,a);nr=!0;try{return Ei(n,r,a)}finally{nr=!1,(on!==null||xn!==null)&&(No(),ko())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=_l(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var us=!1;if(m)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){us=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{us=!1}function wi(n,r,a,c,d,p,_,T,R){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(q){this.onError(q)}}var Ti=!1,cs=null,_n=!1,Vo=null,sc={onError:function(n){Ti=!0,cs=n}};function hs(n,r,a,c,d,p,_,T,R){Ti=!1,cs=null,wi.apply(sc,arguments)}function $a(n,r,a,c,d,p,_,T,R){if(hs.apply(this,arguments),Ti){if(Ti){var F=cs;Ti=!1,cs=null}else throw Error(t(198));_n||(_n=!0,Vo=F)}}function vn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ii(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function En(n){if(vn(n)!==n)throw Error(t(188))}function qa(n){var r=n.alternate;if(!r){if(r=vn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return En(d),n;if(p===c)return En(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Oo(n){return n=qa(n),n!==null?ds(n):null}function ds(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ds(n);if(r!==null)return r;n=n.sibling}return null}var fs=e.unstable_scheduleCallback,Lo=e.unstable_cancelCallback,Ha=e.unstable_shouldYield,oc=e.unstable_requestPaint,Be=e.unstable_now,Wa=e.unstable_getCurrentPriorityLevel,Si=e.unstable_ImmediatePriority,Pr=e.unstable_UserBlockingPriority,an=e.unstable_NormalPriority,xo=e.unstable_LowPriority,Ka=e.unstable_IdlePriority,Ai=null,Jt=null;function Ga(n){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ai,n,void 0,(n.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Ya,Mo=Math.log,Qa=Math.LN2;function Ya(n){return n>>>=0,n===0?32:31-(Mo(n)/Qa|0)|0}var ps=64,ms=4194304;function kr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ri(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=kr(T):(p&=_,p!==0&&(c=kr(p)))}else _=a&~d,_!==0?c=kr(_):p!==0&&(c=kr(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-bt(r),d=1<<a,c|=n[a],r&=~d;return c}function ac(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-bt(p),T=1<<_,R=d[_];R===-1?(!(T&a)||T&c)&&(d[_]=ac(T,r)):R<=r&&(n.expiredLanes|=T),p&=~T}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ci(){var n=ps;return ps<<=1,!(ps&4194240)&&(ps=64),n}function Nr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Dr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-bt(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Vr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ce=0;function Or(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Xa,gs,Ja,Za,el,Fo=!1,Fn=[],wt=null,wn=null,Tn=null,Lr=new Map,ln=new Map,bn=[],lc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tl(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Lr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(r.pointerId)}}function Bt(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Jo(r),r!==null&&gs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function uc(n,r,a,c,d){switch(r){case"focusin":return wt=Bt(wt,n,r,a,c,d),!0;case"dragenter":return wn=Bt(wn,n,r,a,c,d),!0;case"mouseover":return Tn=Bt(Tn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Lr.set(p,Bt(Lr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ln.set(p,Bt(ln.get(p)||null,n,r,a,c,d)),!0}return!1}function nl(n){var r=Vi(n.target);if(r!==null){var a=vn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ii(a),r!==null){n.blockedOn=r,el(n.priority,function(){Ja(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ir(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ys(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);vi=c,a.target.dispatchEvent(c),vi=null}else return r=Jo(a),r!==null&&gs(r),n.blockedOn=a,!1;r.shift()}return!0}function Pi(n,r,a){ir(n)&&a.delete(r)}function rl(){Fo=!1,wt!==null&&ir(wt)&&(wt=null),wn!==null&&ir(wn)&&(wn=null),Tn!==null&&ir(Tn)&&(Tn=null),Lr.forEach(Pi),ln.forEach(Pi)}function In(n,r){n.blockedOn===r&&(n.blockedOn=null,Fo||(Fo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rl)))}function Sn(n){function r(d){return In(d,n)}if(0<Fn.length){In(Fn[0],n);for(var a=1;a<Fn.length;a++){var c=Fn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&In(wt,n),wn!==null&&In(wn,n),Tn!==null&&In(Tn,n),Lr.forEach(r),ln.forEach(r),a=0;a<bn.length;a++)c=bn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<bn.length&&(a=bn[0],a.blockedOn===null);)nl(a),a.blockedOn===null&&bn.shift()}var sr=we.ReactCurrentBatchConfig,xr=!0;function Ke(n,r,a,c){var d=Ce,p=sr.transition;sr.transition=null;try{Ce=1,bo(n,r,a,c)}finally{Ce=d,sr.transition=p}}function cc(n,r,a,c){var d=Ce,p=sr.transition;sr.transition=null;try{Ce=4,bo(n,r,a,c)}finally{Ce=d,sr.transition=p}}function bo(n,r,a,c){if(xr){var d=ys(n,r,a,c);if(d===null)wc(n,r,c,ki,a),tl(n,c);else if(uc(d,n,r,a,c))c.stopPropagation();else if(tl(n,c),r&4&&-1<lc.indexOf(n)){for(;d!==null;){var p=Jo(d);if(p!==null&&Xa(p),p=ys(n,r,a,c),p===null&&wc(n,r,c,ki,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else wc(n,r,c,null,a)}}var ki=null;function ys(n,r,a,c){if(ki=null,n=os(c),n=Vi(n),n!==null)if(r=vn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ii(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ki=n,null}function Uo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wa()){case Si:return 1;case Pr:return 4;case an:case xo:return 16;case Ka:return 536870912;default:return 16}default:return 16}}var en=null,_s=null,$t=null;function zo(){if($t)return $t;var n,r=_s,a=r.length,c,d="value"in en?en.value:en.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return $t=d.slice(n,1<c?1-c:void 0)}function vs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Un(){return!0}function jo(){return!1}function Tt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Un:jo,this.isPropagationStopped=jo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),r}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Tt(An),zn=ee({},An,{view:0,detail:0}),hc=Tt(zn),ws,or,Mr,Ni=ee({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Mr&&(Mr&&n.type==="mousemove"?(ws=n.screenX-Mr.screenX,or=n.screenY-Mr.screenY):or=ws=0,Mr=n),ws)},movementY:function(n){return"movementY"in n?n.movementY:or}}),Ts=Tt(Ni),Bo=ee({},Ni,{dataTransfer:0}),il=Tt(Bo),Is=ee({},zn,{relatedTarget:0}),Ss=Tt(Is),sl=ee({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),ar=Tt(sl),ol=ee({},An,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),al=Tt(ol),ll=ee({},An,{data:0}),$o=Tt(ll),As={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ul={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ul[n])?!!r[n]:!1}function jn(){return cl}var l=ee({},zn,{key:function(n){if(n.key){var r=As[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=vs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(n){return n.type==="keypress"?vs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),y=ee({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(y),L=ee({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn}),U=Tt(L),Q=ee({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=Tt(Q),ut=ee({},Ni,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=Tt(ut),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,un=null;m&&"documentMode"in document&&(un=document.documentMode);var tn=m&&"TextEvent"in window&&!un,Di=m&&(!it||un&&8<un&&11>=un),Rs=" ",tf=!1;function nf(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function W_(n,r){switch(n){case"compositionend":return rf(r);case"keypress":return r.which!==32?null:(tf=!0,Rs);case"textInput":return n=r.data,n===Rs&&tf?null:n;default:return null}}function K_(n,r){if(Cs)return n==="compositionend"||!it&&nf(n,r)?(n=zo(),$t=_s=en=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Di&&r.locale!=="ko"?null:r.data;default:return null}}var G_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!G_[n.type]:r==="textarea"}function of(n,r,a,c){Mn(c),r=ml(r,"onChange"),0<r.length&&(a=new Es("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var qo=null,Ho=null;function Q_(n){Sf(n,0)}function hl(n){var r=Vs(n);if(ts(r))return n}function Y_(n,r){if(n==="change")return r}var af=!1;if(m){var dc;if(m){var fc="oninput"in document;if(!fc){var lf=document.createElement("div");lf.setAttribute("oninput","return;"),fc=typeof lf.oninput=="function"}dc=fc}else dc=!1;af=dc&&(!document.documentMode||9<document.documentMode)}function uf(){qo&&(qo.detachEvent("onpropertychange",cf),Ho=qo=null)}function cf(n){if(n.propertyName==="value"&&hl(Ho)){var r=[];of(r,Ho,n,os(n)),Do(Q_,r)}}function X_(n,r,a){n==="focusin"?(uf(),qo=r,Ho=a,qo.attachEvent("onpropertychange",cf)):n==="focusout"&&uf()}function J_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(Ho)}function Z_(n,r){if(n==="click")return hl(r)}function ev(n,r){if(n==="input"||n==="change")return hl(r)}function tv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Rn=typeof Object.is=="function"?Object.is:tv;function Wo(n,r){if(Rn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Rn(n[d],r[d]))return!1}return!0}function hf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function df(n,r){var a=hf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hf(a)}}function ff(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?ff(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function pf(){for(var n=window,r=Rr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Rr(n.document)}return r}function pc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function nv(n){var r=pf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&ff(a.ownerDocument.documentElement,a)){if(c!==null&&pc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=df(a,p);var _=df(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var rv=m&&"documentMode"in document&&11>=document.documentMode,Ps=null,mc=null,Ko=null,gc=!1;function mf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||Ps==null||Ps!==Rr(c)||(c=Ps,"selectionStart"in c&&pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ko&&Wo(Ko,c)||(Ko=c,c=ml(mc,"onSelect"),0<c.length&&(r=new Es("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ps)))}function dl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var ks={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},yc={},gf={};m&&(gf=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function fl(n){if(yc[n])return yc[n];if(!ks[n])return n;var r=ks[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in gf)return yc[n]=r[a];return n}var yf=fl("animationend"),_f=fl("animationiteration"),vf=fl("animationstart"),Ef=fl("transitionend"),wf=new Map,Tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,r){wf.set(n,r),u(r,[n])}for(var _c=0;_c<Tf.length;_c++){var vc=Tf[_c],iv=vc.toLowerCase(),sv=vc[0].toUpperCase()+vc.slice(1);Fr(iv,"on"+sv)}Fr(yf,"onAnimationEnd"),Fr(_f,"onAnimationIteration"),Fr(vf,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(Ef,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function If(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,$a(c,r,void 0,n),n.currentTarget=null}function Sf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],R=T.instance,F=T.currentTarget;if(T=T.listener,R!==p&&d.isPropagationStopped())break e;If(d,T,F),p=R}else for(_=0;_<c.length;_++){if(T=c[_],R=T.instance,F=T.currentTarget,T=T.listener,R!==p&&d.isPropagationStopped())break e;If(d,T,F),p=R}}}if(_n)throw n=Vo,_n=!1,Vo=null,n}function qe(n,r){var a=r[Cc];a===void 0&&(a=r[Cc]=new Set);var c=n+"__bubble";a.has(c)||(Af(r,n,2,!1),a.add(c))}function Ec(n,r,a){var c=0;r&&(c|=4),Af(a,n,c,r)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[pl]){n[pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(ov.has(a)||Ec(a,!1,n),Ec(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[pl]||(r[pl]=!0,Ec("selectionchange",!1,r))}}function Af(n,r,a,c){switch(Uo(r)){case 1:var d=Ke;break;case 4:d=cc;break;default:d=bo}a=d.bind(null,r,a,n),d=void 0,!us||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function wc(n,r,a,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var R=_.tag;if((R===3||R===4)&&(R=_.stateNode.containerInfo,R===d||R.nodeType===8&&R.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Vi(T),_===null)return;if(R=_.tag,R===5||R===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Do(function(){var F=p,q=os(a),K=[];e:{var $=wf.get(n);if($!==void 0){var Z=Es,re=n;switch(n){case"keypress":if(vs(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=Ss;break;case"focusout":re="blur",Z=Ss;break;case"beforeblur":case"afterblur":Z=Ss;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=il;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case yf:case _f:case vf:Z=ar;break;case Ef:Z=Fe;break;case"scroll":Z=hc;break;case"wheel":Z=Ne;break;case"copy":case"cut":case"paste":Z=al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var ie=(r&4)!==0,nt=!ie&&n==="scroll",x=ie?$!==null?$+"Capture":null:$;ie=[];for(var P=F,M;P!==null;){M=P;var G=M.stateNode;if(M.tag===5&&G!==null&&(M=G,x!==null&&(G=tt(P,x),G!=null&&ie.push(Yo(P,G,M)))),nt)break;P=P.return}0<ie.length&&($=new Z($,re,null,a,q),K.push({event:$,listeners:ie}))}}if(!(r&7)){e:{if($=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",$&&a!==vi&&(re=a.relatedTarget||a.fromElement)&&(Vi(re)||re[lr]))break e;if((Z||$)&&($=q.window===q?q:($=q.ownerDocument)?$.defaultView||$.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=F,re=re?Vi(re):null,re!==null&&(nt=vn(re),re!==nt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=F),Z!==re)){if(ie=Ts,G="onMouseLeave",x="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(ie=E,G="onPointerLeave",x="onPointerEnter",P="pointer"),nt=Z==null?$:Vs(Z),M=re==null?$:Vs(re),$=new ie(G,P+"leave",Z,a,q),$.target=nt,$.relatedTarget=M,G=null,Vi(q)===F&&(ie=new ie(x,P+"enter",re,a,q),ie.target=M,ie.relatedTarget=nt,G=ie),nt=G,Z&&re)t:{for(ie=Z,x=re,P=0,M=ie;M;M=Ns(M))P++;for(M=0,G=x;G;G=Ns(G))M++;for(;0<P-M;)ie=Ns(ie),P--;for(;0<M-P;)x=Ns(x),M--;for(;P--;){if(ie===x||x!==null&&ie===x.alternate)break t;ie=Ns(ie),x=Ns(x)}ie=null}else ie=null;Z!==null&&Rf(K,$,Z,ie,!1),re!==null&&nt!==null&&Rf(K,nt,re,ie,!0)}}e:{if($=F?Vs(F):window,Z=$.nodeName&&$.nodeName.toLowerCase(),Z==="select"||Z==="input"&&$.type==="file")var se=Y_;else if(sf($))if(af)se=ev;else{se=J_;var ue=X_}else(Z=$.nodeName)&&Z.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(se=Z_);if(se&&(se=se(n,F))){of(K,se,a,q);break e}ue&&ue(n,$,F),n==="focusout"&&(ue=$._wrapperState)&&ue.controlled&&$.type==="number"&&rs($,"number",$.value)}switch(ue=F?Vs(F):window,n){case"focusin":(sf(ue)||ue.contentEditable==="true")&&(Ps=ue,mc=F,Ko=null);break;case"focusout":Ko=mc=Ps=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,mf(K,a,q);break;case"selectionchange":if(rv)break;case"keydown":case"keyup":mf(K,a,q)}var ce;if(it)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Cs?nf(n,a)&&(fe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(Di&&a.locale!=="ko"&&(Cs||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Cs&&(ce=zo()):(en=q,_s="value"in en?en.value:en.textContent,Cs=!0)),ue=ml(F,fe),0<ue.length&&(fe=new $o(fe,n,null,a,q),K.push({event:fe,listeners:ue}),ce?fe.data=ce:(ce=rf(a),ce!==null&&(fe.data=ce)))),(ce=tn?W_(n,a):K_(n,a))&&(F=ml(F,"onBeforeInput"),0<F.length&&(q=new $o("onBeforeInput","beforeinput",null,a,q),K.push({event:q,listeners:F}),q.data=ce))}Sf(K,r)})}function Yo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function ml(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(Yo(n,p,d)),p=tt(n,r),p!=null&&c.push(Yo(n,p,d))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,R=T.alternate,F=T.stateNode;if(R!==null&&R===c)break;T.tag===5&&F!==null&&(T=F,d?(R=tt(a,p),R!=null&&_.unshift(Yo(a,R,T))):d||(R=tt(a,p),R!=null&&_.push(Yo(a,R,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var av=/\r\n?/g,lv=/\u0000|\uFFFD/g;function Cf(n){return(typeof n=="string"?n:""+n).replace(av,`
`).replace(lv,"")}function gl(n,r,a){if(r=Cf(r),Cf(n)!==r&&a)throw Error(t(425))}function yl(){}var Tc=null,Ic=null;function Sc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,uv=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,cv=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(n){return Pf.resolve(null).then(n).catch(hv)}:Ac;function hv(n){setTimeout(function(){throw n})}function Rc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Sn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Sn(r)}function br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function kf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Ds,Xo="__reactProps$"+Ds,lr="__reactContainer$"+Ds,Cc="__reactEvents$"+Ds,dv="__reactListeners$"+Ds,fv="__reactHandles$"+Ds;function Vi(n){var r=n[Bn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[lr]||a[Bn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=kf(n);n!==null;){if(a=n[Bn])return a;n=kf(n)}return r}n=a,a=n.parentNode}return null}function Jo(n){return n=n[Bn]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function _l(n){return n[Xo]||null}var Pc=[],Os=-1;function Ur(n){return{current:n}}function He(n){0>Os||(n.current=Pc[Os],Pc[Os]=null,Os--)}function $e(n,r){Os++,Pc[Os]=n.current,n.current=r}var zr={},Nt=Ur(zr),qt=Ur(!1),Oi=zr;function Ls(n,r){var a=n.type.contextTypes;if(!a)return zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(n){return n=n.childContextTypes,n!=null}function vl(){He(qt),He(Nt)}function Nf(n,r,a){if(Nt.current!==zr)throw Error(t(168));$e(Nt,r),$e(qt,a)}function Df(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},a,c)}function El(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,Oi=Nt.current,$e(Nt,n),$e(qt,qt.current),!0}function Vf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Df(n,r,Oi),c.__reactInternalMemoizedMergedChildContext=n,He(qt),He(Nt),$e(Nt,n)):He(qt),$e(qt,a)}var ur=null,wl=!1,kc=!1;function Of(n){ur===null?ur=[n]:ur.push(n)}function pv(n){wl=!0,Of(n)}function jr(){if(!kc&&ur!==null){kc=!0;var n=0,r=Ce;try{var a=ur;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ur=null,wl=!1}catch(d){throw ur!==null&&(ur=ur.slice(n+1)),fs(Si,jr),d}finally{Ce=r,kc=!1}}return null}var xs=[],Ms=0,Tl=null,Il=0,cn=[],hn=0,Li=null,cr=1,hr="";function xi(n,r){xs[Ms++]=Il,xs[Ms++]=Tl,Tl=n,Il=r}function Lf(n,r,a){cn[hn++]=cr,cn[hn++]=hr,cn[hn++]=Li,Li=n;var c=cr;n=hr;var d=32-bt(c)-1;c&=~(1<<d),a+=1;var p=32-bt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,cr=1<<32-bt(r)+d|a<<d|c,hr=p+n}else cr=1<<p|a<<d|c,hr=n}function Nc(n){n.return!==null&&(xi(n,1),Lf(n,1,0))}function Dc(n){for(;n===Tl;)Tl=xs[--Ms],xs[Ms]=null,Il=xs[--Ms],xs[Ms]=null;for(;n===Li;)Li=cn[--hn],cn[hn]=null,hr=cn[--hn],cn[hn]=null,cr=cn[--hn],cn[hn]=null}var nn=null,rn=null,Ge=!1,Cn=null;function xf(n,r){var a=mn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Mf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,nn=n,rn=br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,nn=n,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Li!==null?{id:cr,overflow:hr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=mn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,nn=n,rn=null,!0):!1;default:return!1}}function Vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Oc(n){if(Ge){var r=rn;if(r){var a=r;if(!Mf(n,r)){if(Vc(n))throw Error(t(418));r=br(a.nextSibling);var c=nn;r&&Mf(n,r)?xf(c,a):(n.flags=n.flags&-4097|2,Ge=!1,nn=n)}}else{if(Vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,nn=n}}}function Ff(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;nn=n}function Sl(n){if(n!==nn)return!1;if(!Ge)return Ff(n),Ge=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Sc(n.type,n.memoizedProps)),r&&(r=rn)){if(Vc(n))throw bf(),Error(t(418));for(;r;)xf(n,r),r=br(r.nextSibling)}if(Ff(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){rn=br(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}rn=null}}else rn=nn?br(n.stateNode.nextSibling):null;return!0}function bf(){for(var n=rn;n;)n=br(n.nextSibling)}function Fs(){rn=nn=null,Ge=!1}function Lc(n){Cn===null?Cn=[n]:Cn.push(n)}var mv=we.ReactCurrentBatchConfig;function Zo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Al(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Uf(n){var r=n._init;return r(n._payload)}function zf(n){function r(x,P){if(n){var M=x.deletions;M===null?(x.deletions=[P],x.flags|=16):M.push(P)}}function a(x,P){if(!n)return null;for(;P!==null;)r(x,P),P=P.sibling;return null}function c(x,P){for(x=new Map;P!==null;)P.key!==null?x.set(P.key,P):x.set(P.index,P),P=P.sibling;return x}function d(x,P){return x=Qr(x,P),x.index=0,x.sibling=null,x}function p(x,P,M){return x.index=M,n?(M=x.alternate,M!==null?(M=M.index,M<P?(x.flags|=2,P):M):(x.flags|=2,P)):(x.flags|=1048576,P)}function _(x){return n&&x.alternate===null&&(x.flags|=2),x}function T(x,P,M,G){return P===null||P.tag!==6?(P=Ah(M,x.mode,G),P.return=x,P):(P=d(P,M),P.return=x,P)}function R(x,P,M,G){var se=M.type;return se===N?q(x,P,M.props.children,G,M.key):P!==null&&(P.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===kt&&Uf(se)===P.type)?(G=d(P,M.props),G.ref=Zo(x,P,M),G.return=x,G):(G=Ql(M.type,M.key,M.props,null,x.mode,G),G.ref=Zo(x,P,M),G.return=x,G)}function F(x,P,M,G){return P===null||P.tag!==4||P.stateNode.containerInfo!==M.containerInfo||P.stateNode.implementation!==M.implementation?(P=Rh(M,x.mode,G),P.return=x,P):(P=d(P,M.children||[]),P.return=x,P)}function q(x,P,M,G,se){return P===null||P.tag!==7?(P=$i(M,x.mode,G,se),P.return=x,P):(P=d(P,M),P.return=x,P)}function K(x,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Ah(""+P,x.mode,M),P.return=x,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case We:return M=Ql(P.type,P.key,P.props,null,x.mode,M),M.ref=Zo(x,null,P),M.return=x,M;case Se:return P=Rh(P,x.mode,M),P.return=x,P;case kt:var G=P._init;return K(x,G(P._payload),M)}if(Zn(P)||le(P))return P=$i(P,x.mode,M,null),P.return=x,P;Al(x,P)}return null}function $(x,P,M,G){var se=P!==null?P.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return se!==null?null:T(x,P,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case We:return M.key===se?R(x,P,M,G):null;case Se:return M.key===se?F(x,P,M,G):null;case kt:return se=M._init,$(x,P,se(M._payload),G)}if(Zn(M)||le(M))return se!==null?null:q(x,P,M,G,null);Al(x,M)}return null}function Z(x,P,M,G,se){if(typeof G=="string"&&G!==""||typeof G=="number")return x=x.get(M)||null,T(P,x,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case We:return x=x.get(G.key===null?M:G.key)||null,R(P,x,G,se);case Se:return x=x.get(G.key===null?M:G.key)||null,F(P,x,G,se);case kt:var ue=G._init;return Z(x,P,M,ue(G._payload),se)}if(Zn(G)||le(G))return x=x.get(M)||null,q(P,x,G,se,null);Al(P,G)}return null}function re(x,P,M,G){for(var se=null,ue=null,ce=P,fe=P=0,vt=null;ce!==null&&fe<M.length;fe++){ce.index>fe?(vt=ce,ce=null):vt=ce.sibling;var Oe=$(x,ce,M[fe],G);if(Oe===null){ce===null&&(ce=vt);break}n&&ce&&Oe.alternate===null&&r(x,ce),P=p(Oe,P,fe),ue===null?se=Oe:ue.sibling=Oe,ue=Oe,ce=vt}if(fe===M.length)return a(x,ce),Ge&&xi(x,fe),se;if(ce===null){for(;fe<M.length;fe++)ce=K(x,M[fe],G),ce!==null&&(P=p(ce,P,fe),ue===null?se=ce:ue.sibling=ce,ue=ce);return Ge&&xi(x,fe),se}for(ce=c(x,ce);fe<M.length;fe++)vt=Z(ce,x,fe,M[fe],G),vt!==null&&(n&&vt.alternate!==null&&ce.delete(vt.key===null?fe:vt.key),P=p(vt,P,fe),ue===null?se=vt:ue.sibling=vt,ue=vt);return n&&ce.forEach(function(Yr){return r(x,Yr)}),Ge&&xi(x,fe),se}function ie(x,P,M,G){var se=le(M);if(typeof se!="function")throw Error(t(150));if(M=se.call(M),M==null)throw Error(t(151));for(var ue=se=null,ce=P,fe=P=0,vt=null,Oe=M.next();ce!==null&&!Oe.done;fe++,Oe=M.next()){ce.index>fe?(vt=ce,ce=null):vt=ce.sibling;var Yr=$(x,ce,Oe.value,G);if(Yr===null){ce===null&&(ce=vt);break}n&&ce&&Yr.alternate===null&&r(x,ce),P=p(Yr,P,fe),ue===null?se=Yr:ue.sibling=Yr,ue=Yr,ce=vt}if(Oe.done)return a(x,ce),Ge&&xi(x,fe),se;if(ce===null){for(;!Oe.done;fe++,Oe=M.next())Oe=K(x,Oe.value,G),Oe!==null&&(P=p(Oe,P,fe),ue===null?se=Oe:ue.sibling=Oe,ue=Oe);return Ge&&xi(x,fe),se}for(ce=c(x,ce);!Oe.done;fe++,Oe=M.next())Oe=Z(ce,x,fe,Oe.value,G),Oe!==null&&(n&&Oe.alternate!==null&&ce.delete(Oe.key===null?fe:Oe.key),P=p(Oe,P,fe),ue===null?se=Oe:ue.sibling=Oe,ue=Oe);return n&&ce.forEach(function(Gv){return r(x,Gv)}),Ge&&xi(x,fe),se}function nt(x,P,M,G){if(typeof M=="object"&&M!==null&&M.type===N&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case We:e:{for(var se=M.key,ue=P;ue!==null;){if(ue.key===se){if(se=M.type,se===N){if(ue.tag===7){a(x,ue.sibling),P=d(ue,M.props.children),P.return=x,x=P;break e}}else if(ue.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===kt&&Uf(se)===ue.type){a(x,ue.sibling),P=d(ue,M.props),P.ref=Zo(x,ue,M),P.return=x,x=P;break e}a(x,ue);break}else r(x,ue);ue=ue.sibling}M.type===N?(P=$i(M.props.children,x.mode,G,M.key),P.return=x,x=P):(G=Ql(M.type,M.key,M.props,null,x.mode,G),G.ref=Zo(x,P,M),G.return=x,x=G)}return _(x);case Se:e:{for(ue=M.key;P!==null;){if(P.key===ue)if(P.tag===4&&P.stateNode.containerInfo===M.containerInfo&&P.stateNode.implementation===M.implementation){a(x,P.sibling),P=d(P,M.children||[]),P.return=x,x=P;break e}else{a(x,P);break}else r(x,P);P=P.sibling}P=Rh(M,x.mode,G),P.return=x,x=P}return _(x);case kt:return ue=M._init,nt(x,P,ue(M._payload),G)}if(Zn(M))return re(x,P,M,G);if(le(M))return ie(x,P,M,G);Al(x,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,P!==null&&P.tag===6?(a(x,P.sibling),P=d(P,M),P.return=x,x=P):(a(x,P),P=Ah(M,x.mode,G),P.return=x,x=P),_(x)):a(x,P)}return nt}var bs=zf(!0),jf=zf(!1),Rl=Ur(null),Cl=null,Us=null,xc=null;function Mc(){xc=Us=Cl=null}function Fc(n){var r=Rl.current;He(Rl),n._currentValue=r}function bc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function zs(n,r){Cl=n,xc=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Wt=!0),n.firstContext=null)}function dn(n){var r=n._currentValue;if(xc!==n)if(n={context:n,memoizedValue:r,next:null},Us===null){if(Cl===null)throw Error(t(308));Us=n,Cl.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return r}var Mi=null;function Uc(n){Mi===null?Mi=[n]:Mi.push(n)}function Bf(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Uc(r)):(a.next=d.next,d.next=a),r.interleaved=a,dr(n,c)}function dr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Br=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function $r(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,dr(n,a)}return d=c.interleaved,d===null?(r.next=r,Uc(c)):(r.next=d.next,d.next=r),c.interleaved=r,dr(n,a)}function Pl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Vr(n,a)}}function qf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function kl(n,r,a,c){var d=n.updateQueue;Br=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var R=T,F=R.next;R.next=null,_===null?p=F:_.next=F,_=R;var q=n.alternate;q!==null&&(q=q.updateQueue,T=q.lastBaseUpdate,T!==_&&(T===null?q.firstBaseUpdate=F:T.next=F,q.lastBaseUpdate=R))}if(p!==null){var K=d.baseState;_=0,q=F=R=null,T=p;do{var $=T.lane,Z=T.eventTime;if((c&$)===$){q!==null&&(q=q.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,ie=T;switch($=r,Z=a,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){K=re.call(Z,K,$);break e}K=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,$=typeof re=="function"?re.call(Z,K,$):re,$==null)break e;K=ee({},K,$);break e;case 2:Br=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,$=d.effects,$===null?d.effects=[T]:$.push(T))}else Z={eventTime:Z,lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},q===null?(F=q=Z,R=K):q=q.next=Z,_|=$;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;$=T,T=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);if(q===null&&(R=K),d.baseState=R,d.firstBaseUpdate=F,d.lastBaseUpdate=q,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Ui|=_,n.lanes=_,n.memoizedState=K}}function Hf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ea={},$n=Ur(ea),ta=Ur(ea),na=Ur(ea);function Fi(n){if(n===ea)throw Error(t(174));return n}function jc(n,r){switch($e(na,r),$e(ta,n),$e($n,ea),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=lt(r,n)}He($n),$e($n,r)}function js(){He($n),He(ta),He(na)}function Wf(n){Fi(na.current);var r=Fi($n.current),a=lt(r,n.type);r!==a&&($e(ta,n),$e($n,a))}function Bc(n){ta.current===n&&(He($n),He(ta))}var Ye=Ur(0);function Nl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $c=[];function qc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var Dl=we.ReactCurrentDispatcher,Hc=we.ReactCurrentBatchConfig,bi=0,Xe=null,ct=null,yt=null,Vl=!1,ra=!1,ia=0,gv=0;function Dt(){throw Error(t(321))}function Wc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Rn(n[a],r[a]))return!1;return!0}function Kc(n,r,a,c,d,p){if(bi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Dl.current=n===null||n.memoizedState===null?Ev:wv,n=a(c,d),ra){p=0;do{if(ra=!1,ia=0,25<=p)throw Error(t(301));p+=1,yt=ct=null,r.updateQueue=null,Dl.current=Tv,n=a(c,d)}while(ra)}if(Dl.current=xl,r=ct!==null&&ct.next!==null,bi=0,yt=ct=Xe=null,Vl=!1,r)throw Error(t(300));return n}function Gc(){var n=ia!==0;return ia=0,n}function qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Xe.memoizedState=yt=n:yt=yt.next=n,yt}function fn(){if(ct===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var r=yt===null?Xe.memoizedState:yt.next;if(r!==null)yt=r,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?Xe.memoizedState=yt=n:yt=yt.next=n}return yt}function sa(n,r){return typeof r=="function"?r(n):r}function Qc(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ct,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,R=null,F=p;do{var q=F.lane;if((bi&q)===q)R!==null&&(R=R.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var K={lane:q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};R===null?(T=R=K,_=c):R=R.next=K,Xe.lanes|=q,Ui|=q}F=F.next}while(F!==null&&F!==p);R===null?_=c:R.next=T,Rn(c,r.memoizedState)||(Wt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=R,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,Ui|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Yc(n){var r=fn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Rn(p,r.memoizedState)||(Wt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Kf(){}function Gf(n,r){var a=Xe,c=fn(),d=r(),p=!Rn(c.memoizedState,d);if(p&&(c.memoizedState=d,Wt=!0),c=c.queue,Xc(Xf.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,oa(9,Yf.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));bi&30||Qf(a,r,d)}return d}function Qf(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Yf(n,r,a,c){r.value=a,r.getSnapshot=c,Jf(r)&&Zf(n)}function Xf(n,r,a){return a(function(){Jf(r)&&Zf(n)})}function Jf(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Rn(n,a)}catch{return!0}}function Zf(n){var r=dr(n,1);r!==null&&Dn(r,n,1,-1)}function ep(n){var r=qn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},r.queue=n,n=n.dispatch=vv.bind(null,Xe,n),[r.memoizedState,n]}function oa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function tp(){return fn().memoizedState}function Ol(n,r,a,c){var d=qn();Xe.flags|=n,d.memoizedState=oa(1|r,a,void 0,c===void 0?null:c)}function Ll(n,r,a,c){var d=fn();c=c===void 0?null:c;var p=void 0;if(ct!==null){var _=ct.memoizedState;if(p=_.destroy,c!==null&&Wc(c,_.deps)){d.memoizedState=oa(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=oa(1|r,a,p,c)}function np(n,r){return Ol(8390656,8,n,r)}function Xc(n,r){return Ll(2048,8,n,r)}function rp(n,r){return Ll(4,2,n,r)}function ip(n,r){return Ll(4,4,n,r)}function sp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function op(n,r,a){return a=a!=null?a.concat([n]):null,Ll(4,4,sp.bind(null,r,n),a)}function Jc(){}function ap(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Wc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function lp(n,r){var a=fn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Wc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function up(n,r,a){return bi&21?(Rn(a,r)||(a=Ci(),Xe.lanes|=a,Ui|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Wt=!0),n.memoizedState=a)}function yv(n,r){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=Hc.transition;Hc.transition={};try{n(!1),r()}finally{Ce=a,Hc.transition=c}}function cp(){return fn().memoizedState}function _v(n,r,a){var c=Kr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},hp(n))dp(r,a);else if(a=Bf(n,r,a,c),a!==null){var d=jt();Dn(a,n,c,d),fp(a,r,c)}}function vv(n,r,a){var c=Kr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(hp(n))dp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Rn(T,_)){var R=r.interleaved;R===null?(d.next=d,Uc(r)):(d.next=R.next,R.next=d),r.interleaved=d;return}}catch{}finally{}a=Bf(n,r,d,c),a!==null&&(d=jt(),Dn(a,n,c,d),fp(a,r,c))}}function hp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function dp(n,r){ra=Vl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function fp(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Vr(n,a)}}var xl={readContext:dn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Ev={readContext:dn,useCallback:function(n,r){return qn().memoizedState=[n,r===void 0?null:r],n},useContext:dn,useEffect:np,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ol(4194308,4,sp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ol(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ol(4,2,n,r)},useMemo:function(n,r){var a=qn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=qn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=_v.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=qn();return n={current:n},r.memoizedState=n},useState:ep,useDebugValue:Jc,useDeferredValue:function(n){return qn().memoizedState=n},useTransition:function(){var n=ep(!1),r=n[0];return n=yv.bind(null,n[1]),qn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=qn();if(Ge){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));bi&30||Qf(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,np(Xf.bind(null,c,p,n),[n]),c.flags|=2048,oa(9,Yf.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=qn(),r=_t.identifierPrefix;if(Ge){var a=hr,c=cr;a=(c&~(1<<32-bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ia++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=gv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},wv={readContext:dn,useCallback:ap,useContext:dn,useEffect:Xc,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:lp,useReducer:Qc,useRef:tp,useState:function(){return Qc(sa)},useDebugValue:Jc,useDeferredValue:function(n){var r=fn();return up(r,ct.memoizedState,n)},useTransition:function(){var n=Qc(sa)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Kf,useSyncExternalStore:Gf,useId:cp,unstable_isNewReconciler:!1},Tv={readContext:dn,useCallback:ap,useContext:dn,useEffect:Xc,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:lp,useReducer:Yc,useRef:tp,useState:function(){return Yc(sa)},useDebugValue:Jc,useDeferredValue:function(n){var r=fn();return ct===null?r.memoizedState=n:up(r,ct.memoizedState,n)},useTransition:function(){var n=Yc(sa)[0],r=fn().memoizedState;return[n,r]},useMutableSource:Kf,useSyncExternalStore:Gf,useId:cp,unstable_isNewReconciler:!1};function Pn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Zc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ml={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Kr(n),p=fr(c,d);p.payload=r,a!=null&&(p.callback=a),r=$r(n,p,d),r!==null&&(Dn(r,n,d,c),Pl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Kr(n),p=fr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=$r(n,p,d),r!==null&&(Dn(r,n,d,c),Pl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=jt(),c=Kr(n),d=fr(a,c);d.tag=2,r!=null&&(d.callback=r),r=$r(n,d,c),r!==null&&(Dn(r,n,c,a),Pl(r,n,c))}};function pp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Wo(a,c)||!Wo(d,p):!0}function mp(n,r,a){var c=!1,d=zr,p=r.contextType;return typeof p=="object"&&p!==null?p=dn(p):(d=Ht(r)?Oi:Nt.current,c=r.contextTypes,p=(c=c!=null)?Ls(n,d):zr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ml,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function gp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ml.enqueueReplaceState(r,r.state,null)}function eh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},zc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=dn(p):(p=Ht(r)?Oi:Nt.current,d.context=Ls(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Zc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ml.enqueueReplaceState(d,d.state,null),kl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,r){try{var a="",c=r;do a+=Te(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function th(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function nh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Iv=typeof WeakMap=="function"?WeakMap:Map;function yp(n,r,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){$l||($l=!0,yh=c),nh(n,r)},a}function _p(n,r,a){a=fr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){nh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){nh(n,r),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function vp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Iv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=Fv.bind(null,n,r,a),r.then(n,n))}function Ep(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function wp(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=fr(-1,1),r.tag=2,$r(a,r,1))),a.lanes|=1),n)}var Sv=we.ReactCurrentOwner,Wt=!1;function zt(n,r,a,c){r.child=n===null?jf(r,null,a,c):bs(r,n.child,a,c)}function Tp(n,r,a,c,d){a=a.render;var p=r.ref;return zs(r,d),c=Kc(n,r,a,c,p,d),a=Gc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,pr(n,r,d)):(Ge&&a&&Nc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Ip(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Sh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Sp(n,r,p,c,d)):(n=Ql(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(_,c)&&n.ref===r.ref)return pr(n,r,d)}return r.flags|=1,n=Qr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Sp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Wo(p,c)&&n.ref===r.ref)if(Wt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Wt=!0);else return r.lanes=n.lanes,pr(n,r,d)}return rh(n,r,a,c,d)}function Ap(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(qs,sn),sn|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(qs,sn),sn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,$e(qs,sn),sn|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,$e(qs,sn),sn|=c;return zt(n,r,d,a),r.child}function Rp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function rh(n,r,a,c,d){var p=Ht(a)?Oi:Nt.current;return p=Ls(r,p),zs(r,d),a=Kc(n,r,a,c,p,d),c=Gc(),n!==null&&!Wt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,pr(n,r,d)):(Ge&&c&&Nc(r),r.flags|=1,zt(n,r,a,d),r.child)}function Cp(n,r,a,c,d){if(Ht(a)){var p=!0;El(r)}else p=!1;if(zs(r,d),r.stateNode===null)bl(n,r),mp(r,a,c),eh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var R=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=dn(F):(F=Ht(a)?Oi:Nt.current,F=Ls(r,F));var q=a.getDerivedStateFromProps,K=typeof q=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||R!==F)&&gp(r,_,c,F),Br=!1;var $=r.memoizedState;_.state=$,kl(r,c,_,d),R=r.memoizedState,T!==c||$!==R||qt.current||Br?(typeof q=="function"&&(Zc(r,a,q,c),R=r.memoizedState),(T=Br||pp(r,a,T,c,$,R,F))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=R),_.props=c,_.state=R,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,$f(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Pn(r.type,T),_.props=F,K=r.pendingProps,$=_.context,R=a.contextType,typeof R=="object"&&R!==null?R=dn(R):(R=Ht(a)?Oi:Nt.current,R=Ls(r,R));var Z=a.getDerivedStateFromProps;(q=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||$!==R)&&gp(r,_,c,R),Br=!1,$=r.memoizedState,_.state=$,kl(r,c,_,d);var re=r.memoizedState;T!==K||$!==re||qt.current||Br?(typeof Z=="function"&&(Zc(r,a,Z,c),re=r.memoizedState),(F=Br||pp(r,a,F,c,$,re,R)||!1)?(q||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,R),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,R)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=R,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),c=!1)}return ih(n,r,a,c,p,d)}function ih(n,r,a,c,d,p){Rp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Vf(r,a,!1),pr(n,r,p);c=r.stateNode,Sv.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=bs(r,n.child,null,p),r.child=bs(r,null,T,p)):zt(n,r,T,p),r.memoizedState=c.state,d&&Vf(r,a,!0),r.child}function Pp(n){var r=n.stateNode;r.pendingContext?Nf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Nf(n,r.context,!1),jc(n,r.containerInfo)}function kp(n,r,a,c,d){return Fs(),Lc(d),r.flags|=256,zt(n,r,a,c),r.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Np(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Ye,d&1),n===null)return Oc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Yl(_,c,0,null),n=$i(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=oh(a),r.memoizedState=sh,n):ah(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Av(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var R={mode:"hidden",children:c.children};return!(_&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=R,r.deletions=null):(c=Qr(d,R),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Qr(T,p):(p=$i(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?oh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=sh,c}return p=n.child,n=p.sibling,c=Qr(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function ah(n,r){return r=Yl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Fl(n,r,a,c){return c!==null&&Lc(c),bs(r,n.child,null,a),n=ah(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Av(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=th(Error(t(422))),Fl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Yl({mode:"visible",children:c.children},d,0,null),p=$i(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&bs(r,n.child,null,_),r.child.memoizedState=oh(_),r.memoizedState=sh,p);if(!(r.mode&1))return Fl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=th(p,c,void 0),Fl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Wt||T){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,dr(n,d),Dn(c,n,d,-1))}return Ih(),c=th(Error(t(421))),Fl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=bv.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,rn=br(d.nextSibling),nn=r,Ge=!0,Cn=null,n!==null&&(cn[hn++]=cr,cn[hn++]=hr,cn[hn++]=Li,cr=n.id,hr=n.overflow,Li=r),r=ah(r,c.children),r.flags|=4096,r)}function Dp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),bc(n.return,r,a)}function lh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Vp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Ye.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,a,r);else if(n.tag===19)Dp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Ye,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Nl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),lh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Nl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}lh(r,!0,a,null,p);break;case"together":lh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function bl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function pr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ui|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Qr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Qr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Rv(n,r,a){switch(r.tag){case 3:Pp(r),Fs();break;case 5:Wf(r);break;case 1:Ht(r.type)&&El(r);break;case 4:jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(Rl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Ye,Ye.current&1),r.flags|=128,null):a&r.child.childLanes?Np(n,r,a):($e(Ye,Ye.current&1),n=pr(n,r,a),n!==null?n.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return Vp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Ap(n,r,a)}return pr(n,r,a)}var Op,uh,Lp,xp;Op=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},uh=function(){},Lp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Fi($n.current);var p=null;switch(a){case"input":d=gi(n,d),c=gi(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=wo(n,d),c=wo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=yl)}Co(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var R=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&R!==T&&(R!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||R&&R.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in R)R.hasOwnProperty(_)&&T[_]!==R[_]&&(a||(a={}),a[_]=R[_])}else a||(p||(p=[]),p.push(F,a)),a=R;else F==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,T=T?T.__html:void 0,R!=null&&T!==R&&(p=p||[]).push(F,R)):F==="children"?typeof R!="string"&&typeof R!="number"||(p=p||[]).push(F,""+R):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(R!=null&&F==="onScroll"&&qe("scroll",n),p||T===R||(p=[])):(p=p||[]).push(F,R))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},xp=function(n,r,a,c){a!==c&&(r.flags|=4)};function aa(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Cv(n,r,a){var c=r.pendingProps;switch(Dc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Ht(r.type)&&vl(),Vt(r),null;case 3:return c=r.stateNode,js(),He(qt),He(Nt),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Sl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Cn!==null&&(Eh(Cn),Cn=null))),uh(n,r),Vt(r),null;case 5:Bc(r);var d=Fi(na.current);if(a=r.type,n!==null&&r.stateNode!=null)Lp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=Fi($n.current),Sl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[Bn]=r,c[Xo]=p,n=(r.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<Go.length;d++)qe(Go[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":ns(c,p),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},qe("invalid",c);break;case"textarea":is(c,p),qe("invalid",c)}Co(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&qe("scroll",c)}switch(a){case"input":Jn(c),Ba(c,p,!0);break;case"textarea":Jn(c),To(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=yl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Bn]=r,n[Xo]=c,Op(n,r,!1,!1),r.stateNode=n;e:{switch(_=Po(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<Go.length;d++)qe(Go[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":ns(n,c),d=gi(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),qe("invalid",n);break;case"textarea":is(n,c),d=wo(n,c),qe("invalid",n);break;default:d=c}Co(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var R=T[p];p==="style"?Ao(n,R):p==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&Io(n,R)):p==="children"?typeof R=="string"?(a!=="textarea"||R!=="")&&Cr(n,R):typeof R=="number"&&Cr(n,""+R):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?R!=null&&p==="onScroll"&&qe("scroll",n):R!=null&&ye(n,p,R,_))}switch(a){case"input":Jn(n),Ba(n,c,!1);break;case"textarea":Jn(n),To(n);break;case"option":c.value!=null&&n.setAttribute("value",""+xe(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?er(n,!!c.multiple,p,!1):c.defaultValue!=null&&er(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=yl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)xp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Fi(na.current),Fi($n.current),Sl(r)){if(c=r.stateNode,a=r.memoizedProps,c[Bn]=r,(p=c.nodeValue!==a)&&(n=nn,n!==null))switch(n.tag){case 3:gl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Bn]=r,r.stateNode=c}return Vt(r),null;case 13:if(He(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&rn!==null&&r.mode&1&&!(r.flags&128))bf(),Fs(),r.flags|=98560,p=!1;else if(p=Sl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Bn]=r}else Fs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else Cn!==null&&(Eh(Cn),Cn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ye.current&1?ht===0&&(ht=3):Ih())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return js(),uh(n,r),n===null&&Qo(r.stateNode.containerInfo),Vt(r),null;case 10:return Fc(r.type._context),Vt(r),null;case 17:return Ht(r.type)&&vl(),Vt(r),null;case 19:if(He(Ye),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)aa(p,!1);else{if(ht!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(_=Nl(n),_!==null){for(r.flags|=128,aa(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&Be()>Hs&&(r.flags|=128,c=!0,aa(p,!1),r.lanes=4194304)}else{if(!c)if(n=Nl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),aa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ge)return Vt(r),null}else 2*Be()-p.renderingStartTime>Hs&&a!==1073741824&&(r.flags|=128,c=!0,aa(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Be(),r.sibling=null,a=Ye.current,$e(Ye,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return Th(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?sn&1073741824&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Pv(n,r){switch(Dc(r),r.tag){case 1:return Ht(r.type)&&vl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return js(),He(qt),He(Nt),qc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Bc(r),null;case 13:if(He(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Ye),null;case 4:return js(),null;case 10:return Fc(r.type._context),null;case 22:case 23:return Th(),null;case 24:return null;default:return null}}var Ul=!1,Ot=!1,kv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function $s(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function ch(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var Mp=!1;function Nv(n,r){if(Tc=xr,n=pf(),pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,R=-1,F=0,q=0,K=n,$=null;t:for(;;){for(var Z;K!==a||d!==0&&K.nodeType!==3||(T=_+d),K!==p||c!==0&&K.nodeType!==3||(R=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(Z=K.firstChild)!==null;)$=K,K=Z;for(;;){if(K===n)break t;if($===a&&++F===d&&(T=_),$===p&&++q===c&&(R=_),(Z=K.nextSibling)!==null)break;K=$,$=K.parentNode}K=Z}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ic={focusedElem:n,selectionRange:a},xr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,nt=re.memoizedState,x=r.stateNode,P=x.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Pn(r.type,ie),nt);x.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(G){Ze(r,r.return,G)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=Mp,Mp=!1,re}function la(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ch(r,a,p)}d=d.next}while(d!==c)}}function zl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function hh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Fp(n){var r=n.alternate;r!==null&&(n.alternate=null,Fp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Bn],delete r[Xo],delete r[Cc],delete r[dv],delete r[fv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bp(n){return n.tag===5||n.tag===3||n.tag===4}function Up(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=yl));else if(c!==4&&(n=n.child,n!==null))for(dh(n,r,a),n=n.sibling;n!==null;)dh(n,r,a),n=n.sibling}function fh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(fh(n,r,a),n=n.sibling;n!==null;)fh(n,r,a),n=n.sibling}var It=null,kn=!1;function qr(n,r,a){for(a=a.child;a!==null;)zp(n,r,a),a=a.sibling}function zp(n,r,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ai,a)}catch{}switch(a.tag){case 5:Ot||$s(a,r);case 6:var c=It,d=kn;It=null,qr(n,r,a),It=c,kn=d,It!==null&&(kn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(kn?(n=It,a=a.stateNode,n.nodeType===8?Rc(n.parentNode,a):n.nodeType===1&&Rc(n,a),Sn(n)):Rc(It,a.stateNode));break;case 4:c=It,d=kn,It=a.stateNode.containerInfo,kn=!0,qr(n,r,a),It=c,kn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&(p&2||p&4)&&ch(a,r,_),d=d.next}while(d!==c)}qr(n,r,a);break;case 1:if(!Ot&&($s(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,r,T)}qr(n,r,a);break;case 21:qr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,qr(n,r,a),Ot=c):qr(n,r,a);break;default:qr(n,r,a)}}function jp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kv),r.forEach(function(c){var d=Uv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Nn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,kn=!1;break e;case 3:It=T.stateNode.containerInfo,kn=!0;break e;case 4:It=T.stateNode.containerInfo,kn=!0;break e}T=T.return}if(It===null)throw Error(t(160));zp(p,_,d),It=null,kn=!1;var R=d.alternate;R!==null&&(R.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Bp(r,n),r=r.sibling}function Bp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Nn(r,n),Hn(n),c&4){try{la(3,n,n.return),zl(3,n)}catch(ie){Ze(n,n.return,ie)}try{la(5,n,n.return)}catch(ie){Ze(n,n.return,ie)}}break;case 1:Nn(r,n),Hn(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(Nn(r,n),Hn(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{Cr(d,"")}catch(ie){Ze(n,n.return,ie)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,R=n.updateQueue;if(n.updateQueue=null,R!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&vo(d,p),Po(T,_);var F=Po(T,p);for(_=0;_<R.length;_+=2){var q=R[_],K=R[_+1];q==="style"?Ao(d,K):q==="dangerouslySetInnerHTML"?Io(d,K):q==="children"?Cr(d,K):ye(d,q,K,F)}switch(T){case"input":Eo(d,p);break;case"textarea":ss(d,p);break;case"select":var $=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?er(d,!!p.multiple,Z,!1):$!==!!p.multiple&&(p.defaultValue!=null?er(d,!!p.multiple,p.defaultValue,!0):er(d,!!p.multiple,p.multiple?[]:"",!1))}d[Xo]=p}catch(ie){Ze(n,n.return,ie)}}break;case 6:if(Nn(r,n),Hn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ie){Ze(n,n.return,ie)}}break;case 3:if(Nn(r,n),Hn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Sn(r.containerInfo)}catch(ie){Ze(n,n.return,ie)}break;case 4:Nn(r,n),Hn(n);break;case 13:Nn(r,n),Hn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(gh=Be())),c&4&&jp(n);break;case 22:if(q=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(F=Ot)||q,Nn(r,n),Ot=F):Nn(r,n),Hn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!q&&n.mode&1)for(ne=n,q=n.child;q!==null;){for(K=ne=q;ne!==null;){switch($=ne,Z=$.child,$.tag){case 0:case 11:case 14:case 15:la(4,$,$.return);break;case 1:$s($,$.return);var re=$.stateNode;if(typeof re.componentWillUnmount=="function"){c=$,a=$.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){Ze(c,a,ie)}}break;case 5:$s($,$.return);break;case 22:if($.memoizedState!==null){Hp(K);continue}}Z!==null?(Z.return=$,ne=Z):Hp(K)}q=q.sibling}e:for(q=null,K=n;;){if(K.tag===5){if(q===null){q=K;try{d=K.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,R=K.memoizedProps.style,_=R!=null&&R.hasOwnProperty("display")?R.display:null,T.style.display=So("display",_))}catch(ie){Ze(n,n.return,ie)}}}else if(K.tag===6){if(q===null)try{K.stateNode.nodeValue=F?"":K.memoizedProps}catch(ie){Ze(n,n.return,ie)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;q===K&&(q=null),K=K.return}q===K&&(q=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Nn(r,n),Hn(n),c&4&&jp(n);break;case 21:break;default:Nn(r,n),Hn(n)}}function Hn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Cr(d,""),c.flags&=-33);var p=Up(n);fh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=Up(n);dh(n,T,_);break;default:throw Error(t(161))}}catch(R){Ze(n,n.return,R)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Dv(n,r,a){ne=n,$p(n)}function $p(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Ul;if(!_){var T=d.alternate,R=T!==null&&T.memoizedState!==null||Ot;T=Ul;var F=Ot;if(Ul=_,(Ot=R)&&!F)for(ne=d;ne!==null;)_=ne,R=_.child,_.tag===22&&_.memoizedState!==null?Wp(d):R!==null?(R.return=_,ne=R):Wp(d);for(;p!==null;)ne=p,$p(p),p=p.sibling;ne=d,Ul=T,Ot=F}qp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ne=p):qp(n)}}function qp(n){for(;ne!==null;){var r=ne;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ot||zl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Pn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Hf(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Hf(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var R=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&a.focus();break;case"img":R.src&&(a.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var q=F.memoizedState;if(q!==null){var K=q.dehydrated;K!==null&&Sn(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&hh(r)}catch($){Ze(r,r.return,$)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Hp(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Wp(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{zl(4,r)}catch(R){Ze(r,a,R)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(R){Ze(r,d,R)}}var p=r.return;try{hh(r)}catch(R){Ze(r,p,R)}break;case 5:var _=r.return;try{hh(r)}catch(R){Ze(r,_,R)}}}catch(R){Ze(r,r.return,R)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var Vv=Math.ceil,jl=we.ReactCurrentDispatcher,ph=we.ReactCurrentOwner,pn=we.ReactCurrentBatchConfig,Ve=0,_t=null,st=null,St=0,sn=0,qs=Ur(0),ht=0,ua=null,Ui=0,Bl=0,mh=0,ca=null,Kt=null,gh=0,Hs=1/0,mr=null,$l=!1,yh=null,Hr=null,ql=!1,Wr=null,Hl=0,ha=0,_h=null,Wl=-1,Kl=0;function jt(){return Ve&6?Be():Wl!==-1?Wl:Wl=Be()}function Kr(n){return n.mode&1?Ve&2&&St!==0?St&-St:mv.transition!==null?(Kl===0&&(Kl=Ci()),Kl):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:Uo(n.type)),n):1}function Dn(n,r,a,c){if(50<ha)throw ha=0,_h=null,Error(t(185));Dr(n,a,c),(!(Ve&2)||n!==_t)&&(n===_t&&(!(Ve&2)&&(Bl|=a),ht===4&&Gr(n,St)),Gt(n,c),a===1&&Ve===0&&!(r.mode&1)&&(Hs=Be()+500,wl&&jr()))}function Gt(n,r){var a=n.callbackNode;rr(n,r);var c=Ri(n,n===_t?St:0);if(c===0)a!==null&&Lo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&Lo(a),r===1)n.tag===0?pv(Gp.bind(null,n)):Of(Gp.bind(null,n)),cv(function(){!(Ve&6)&&jr()}),a=null;else{switch(Or(c)){case 1:a=Si;break;case 4:a=Pr;break;case 16:a=an;break;case 536870912:a=Ka;break;default:a=an}a=nm(a,Kp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Kp(n,r){if(Wl=-1,Kl=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(Ws()&&n.callbackNode!==a)return null;var c=Ri(n,n===_t?St:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=Gl(n,c);else{r=c;var d=Ve;Ve|=2;var p=Yp();(_t!==n||St!==r)&&(mr=null,Hs=Be()+500,ji(n,r));do try{xv();break}catch(T){Qp(n,T)}while(!0);Mc(),jl.current=p,Ve=d,st!==null?r=0:(_t=null,St=0,r=ht)}if(r!==0){if(r===2&&(d=Zt(n),d!==0&&(c=d,r=vh(n,d))),r===1)throw a=ua,ji(n,0),Gr(n,c),Gt(n,Be()),a;if(r===6)Gr(n,c);else{if(d=n.current.alternate,!(c&30)&&!Ov(d)&&(r=Gl(n,c),r===2&&(p=Zt(n),p!==0&&(c=p,r=vh(n,p))),r===1))throw a=ua,ji(n,0),Gr(n,c),Gt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Bi(n,Kt,mr);break;case 3:if(Gr(n,c),(c&130023424)===c&&(r=gh+500-Be(),10<r)){if(Ri(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){jt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ac(Bi.bind(null,n,Kt,mr),r);break}Bi(n,Kt,mr);break;case 4:if(Gr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-bt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Vv(c/1960))-c,10<c){n.timeoutHandle=Ac(Bi.bind(null,n,Kt,mr),c);break}Bi(n,Kt,mr);break;case 5:Bi(n,Kt,mr);break;default:throw Error(t(329))}}}return Gt(n,Be()),n.callbackNode===a?Kp.bind(null,n):null}function vh(n,r){var a=ca;return n.current.memoizedState.isDehydrated&&(ji(n,r).flags|=256),n=Gl(n,r),n!==2&&(r=Kt,Kt=a,r!==null&&Eh(r)),n}function Eh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function Ov(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Rn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Gr(n,r){for(r&=~mh,r&=~Bl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-bt(r),c=1<<a;n[a]=-1,r&=~c}}function Gp(n){if(Ve&6)throw Error(t(327));Ws();var r=Ri(n,0);if(!(r&1))return Gt(n,Be()),null;var a=Gl(n,r);if(n.tag!==0&&a===2){var c=Zt(n);c!==0&&(r=c,a=vh(n,c))}if(a===1)throw a=ua,ji(n,0),Gr(n,r),Gt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Bi(n,Kt,mr),Gt(n,Be()),null}function wh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(Hs=Be()+500,wl&&jr())}}function zi(n){Wr!==null&&Wr.tag===0&&!(Ve&6)&&Ws();var r=Ve;Ve|=1;var a=pn.transition,c=Ce;try{if(pn.transition=null,Ce=1,n)return n()}finally{Ce=c,pn.transition=a,Ve=r,!(Ve&6)&&jr()}}function Th(){sn=qs.current,He(qs)}function ji(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,uv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Dc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&vl();break;case 3:js(),He(qt),He(Nt),qc();break;case 5:Bc(c);break;case 4:js();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:Fc(c.type._context);break;case 22:case 23:Th()}a=a.return}if(_t=n,st=n=Qr(n.current,null),St=sn=r,ht=0,ua=null,mh=Bl=Ui=0,Kt=ca=null,Mi!==null){for(r=0;r<Mi.length;r++)if(a=Mi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Mi=null}return n}function Qp(n,r){do{var a=st;try{if(Mc(),Dl.current=xl,Vl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Vl=!1}if(bi=0,yt=ct=Xe=null,ra=!1,ia=0,ph.current=null,a===null||a.return===null){ht=1,ua=r,st=null;break}e:{var p=n,_=a.return,T=a,R=r;if(r=St,T.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=R,q=T,K=q.tag;if(!(q.mode&1)&&(K===0||K===11||K===15)){var $=q.alternate;$?(q.updateQueue=$.updateQueue,q.memoizedState=$.memoizedState,q.lanes=$.lanes):(q.updateQueue=null,q.memoizedState=null)}var Z=Ep(_);if(Z!==null){Z.flags&=-257,wp(Z,_,T,p,r),Z.mode&1&&vp(p,F,r),r=Z,R=F;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(R),r.updateQueue=ie}else re.add(R);break e}else{if(!(r&1)){vp(p,F,r),Ih();break e}R=Error(t(426))}}else if(Ge&&T.mode&1){var nt=Ep(_);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),wp(nt,_,T,p,r),Lc(Bs(R,T));break e}}p=R=Bs(R,T),ht!==4&&(ht=2),ca===null?ca=[p]:ca.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var x=yp(p,R,r);qf(p,x);break e;case 1:T=R;var P=p.type,M=p.stateNode;if(!(p.flags&128)&&(typeof P.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Hr===null||!Hr.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var G=_p(p,T,r);qf(p,G);break e}}p=p.return}while(p!==null)}Jp(a)}catch(se){r=se,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function Yp(){var n=jl.current;return jl.current=xl,n===null?xl:n}function Ih(){(ht===0||ht===3||ht===2)&&(ht=4),_t===null||!(Ui&268435455)&&!(Bl&268435455)||Gr(_t,St)}function Gl(n,r){var a=Ve;Ve|=2;var c=Yp();(_t!==n||St!==r)&&(mr=null,ji(n,r));do try{Lv();break}catch(d){Qp(n,d)}while(!0);if(Mc(),Ve=a,jl.current=c,st!==null)throw Error(t(261));return _t=null,St=0,ht}function Lv(){for(;st!==null;)Xp(st)}function xv(){for(;st!==null&&!Ha();)Xp(st)}function Xp(n){var r=tm(n.alternate,n,sn);n.memoizedProps=n.pendingProps,r===null?Jp(n):st=r,ph.current=null}function Jp(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=Pv(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,st=null;return}}else if(a=Cv(a,r,sn),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ht===0&&(ht=5)}function Bi(n,r,a){var c=Ce,d=pn.transition;try{pn.transition=null,Ce=1,Mv(n,r,a,c)}finally{pn.transition=d,Ce=c}return null}function Mv(n,r,a,c){do Ws();while(Wr!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===_t&&(st=_t=null,St=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ql||(ql=!0,nm(an,function(){return Ws(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=pn.transition,pn.transition=null;var _=Ce;Ce=1;var T=Ve;Ve|=4,ph.current=null,Nv(n,a),Bp(a,n),nv(Ic),xr=!!Tc,Ic=Tc=null,n.current=a,Dv(a),oc(),Ve=T,Ce=_,pn.transition=p}else n.current=a;if(ql&&(ql=!1,Wr=n,Hl=d),p=n.pendingLanes,p===0&&(Hr=null),Ga(a.stateNode),Gt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if($l)throw $l=!1,n=yh,yh=null,n;return Hl&1&&n.tag!==0&&Ws(),p=n.pendingLanes,p&1?n===_h?ha++:(ha=0,_h=n):ha=0,jr(),null}function Ws(){if(Wr!==null){var n=Or(Hl),r=pn.transition,a=Ce;try{if(pn.transition=null,Ce=16>n?16:n,Wr===null)var c=!1;else{if(n=Wr,Wr=null,Hl=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if(ne.flags&16){var T=p.deletions;if(T!==null){for(var R=0;R<T.length;R++){var F=T[R];for(ne=F;ne!==null;){var q=ne;switch(q.tag){case 0:case 11:case 15:la(8,q,p)}var K=q.child;if(K!==null)K.return=q,ne=K;else for(;ne!==null;){q=ne;var $=q.sibling,Z=q.return;if(Fp(q),q===F){ne=null;break}if($!==null){$.return=Z,ne=$;break}ne=Z}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var nt=ie.sibling;ie.sibling=null,ie=nt}while(ie!==null)}}ne=p}}if(p.subtreeFlags&2064&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,p.flags&2048)switch(p.tag){case 0:case 11:case 15:la(9,p,p.return)}var x=p.sibling;if(x!==null){x.return=p.return,ne=x;break e}ne=p.return}}var P=n.current;for(ne=P;ne!==null;){_=ne;var M=_.child;if(_.subtreeFlags&2064&&M!==null)M.return=_,ne=M;else e:for(_=P;ne!==null;){if(T=ne,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:zl(9,T)}}catch(se){Ze(T,T.return,se)}if(T===_){ne=null;break e}var G=T.sibling;if(G!==null){G.return=T.return,ne=G;break e}ne=T.return}}if(Ve=d,jr(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ai,n)}catch{}c=!0}return c}finally{Ce=a,pn.transition=r}}return!1}function Zp(n,r,a){r=Bs(a,r),r=yp(n,r,1),n=$r(n,r,1),r=jt(),n!==null&&(Dr(n,1,r),Gt(n,r))}function Ze(n,r,a){if(n.tag===3)Zp(n,n,a);else for(;r!==null;){if(r.tag===3){Zp(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=Bs(a,n),n=_p(r,n,1),r=$r(r,n,1),n=jt(),r!==null&&(Dr(r,1,n),Gt(r,n));break}}r=r.return}}function Fv(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=jt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(ht===4||ht===3&&(St&130023424)===St&&500>Be()-gh?ji(n,0):mh|=a),Gt(n,r)}function em(n,r){r===0&&(n.mode&1?(r=ms,ms<<=1,!(ms&130023424)&&(ms=4194304)):r=1);var a=jt();n=dr(n,r),n!==null&&(Dr(n,r,a),Gt(n,a))}function bv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),em(n,a)}function Uv(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),em(n,a)}var tm;tm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Wt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Wt=!1,Rv(n,r,a);Wt=!!(n.flags&131072)}else Wt=!1,Ge&&r.flags&1048576&&Lf(r,Il,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;bl(n,r),n=r.pendingProps;var d=Ls(r,Nt.current);zs(r,a),d=Kc(null,r,c,n,d,a);var p=Gc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ht(c)?(p=!0,El(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,zc(r),d.updater=Ml,r.stateNode=d,d._reactInternals=r,eh(r,c,n,a),r=ih(null,r,c,!0,p,a)):(r.tag=0,Ge&&p&&Nc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(bl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=jv(c),n=Pn(c,n),d){case 0:r=rh(null,r,c,n,a);break e;case 1:r=Cp(null,r,c,n,a);break e;case 11:r=Tp(null,r,c,n,a);break e;case 14:r=Ip(null,r,c,Pn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),rh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),Cp(n,r,c,d,a);case 3:e:{if(Pp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,$f(n,r),kl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Bs(Error(t(423)),r),r=kp(n,r,c,a,d);break e}else if(c!==d){d=Bs(Error(t(424)),r),r=kp(n,r,c,a,d);break e}else for(rn=br(r.stateNode.containerInfo.firstChild),nn=r,Ge=!0,Cn=null,a=jf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),c===d){r=pr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Wf(r),n===null&&Oc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Sc(c,d)?_=null:p!==null&&Sc(c,p)&&(r.flags|=32),Rp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Oc(r),null;case 13:return Np(n,r,a);case 4:return jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=bs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),Tp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,$e(Rl,c._currentValue),c._currentValue=_,p!==null)if(Rn(p.value,_)){if(p.children===d.children&&!qt.current){r=pr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var R=T.firstContext;R!==null;){if(R.context===c){if(p.tag===1){R=fr(-1,a&-a),R.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var q=F.pending;q===null?R.next=R:(R.next=q.next,q.next=R),F.pending=R}}p.lanes|=a,R=p.alternate,R!==null&&(R.lanes|=a),bc(p.return,a,r),T.lanes|=a;break}R=R.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),bc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,zs(r,a),d=dn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Pn(c,r.pendingProps),d=Pn(c.type,d),Ip(n,r,c,d,a);case 15:return Sp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Pn(c,d),bl(n,r),r.tag=1,Ht(c)?(n=!0,El(r)):n=!1,zs(r,a),mp(r,c,d),eh(r,c,d,a),ih(null,r,c,!0,n,a);case 19:return Vp(n,r,a);case 22:return Ap(n,r,a)}throw Error(t(156,r.tag))};function nm(n,r){return fs(n,r)}function zv(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(n,r,a,c){return new zv(n,r,a,c)}function Sh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jv(n){if(typeof n=="function")return Sh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Pt)return 14}return 2}function Qr(n,r){var a=n.alternate;return a===null?(a=mn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ql(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Sh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return $i(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=mn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=mn(13,a,r,d),n.elementType=S,n.lanes=p,n;case et:return n=mn(19,a,r,d),n.elementType=et,n.lanes=p,n;case be:return Yl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:_=10;break e;case D:_=9;break e;case O:_=11;break e;case Pt:_=14;break e;case kt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function $i(n,r,a,c){return n=mn(7,n,c,r),n.lanes=a,n}function Yl(n,r,a,c){return n=mn(22,n,c,r),n.elementType=be,n.lanes=a,n.stateNode={isHidden:!1},n}function Ah(n,r,a){return n=mn(6,n,null,r),n.lanes=a,n}function Rh(n,r,a){return r=mn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Bv(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nr(0),this.expirationTimes=Nr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ch(n,r,a,c,d,p,_,T,R){return n=new Bv(n,r,a,T,R),r===1?(r=1,p===!0&&(r|=8)):r=0,p=mn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(p),n}function $v(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function rm(n){if(!n)return zr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ht(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ht(a))return Df(n,a,r)}return r}function im(n,r,a,c,d,p,_,T,R){return n=Ch(a,c,!0,n,d,p,_,T,R),n.context=rm(null),a=n.current,c=jt(),d=Kr(a),p=fr(c,d),p.callback=r??null,$r(a,p,d),n.current.lanes=d,Dr(n,d,c),Gt(n,c),n}function Xl(n,r,a,c){var d=r.current,p=jt(),_=Kr(d);return a=rm(a),r.context===null?r.context=a:r.pendingContext=a,r=fr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=$r(d,r,_),n!==null&&(Dn(n,d,_,p),Pl(n,d,_)),_}function Jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Ph(n,r){sm(n,r),(n=n.alternate)&&sm(n,r)}function qv(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function kh(n){this._internalRoot=n}Zl.prototype.render=kh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Xl(n,r,null,null)},Zl.prototype.unmount=kh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;zi(function(){Xl(null,n,null,null)}),r[lr]=null}};function Zl(n){this._internalRoot=n}Zl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Za();n={blockedOn:null,target:n,priority:r};for(var a=0;a<bn.length&&r!==0&&r<bn[a].priority;a++);bn.splice(a,0,n),a===0&&nl(n)}};function Nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function am(){}function Hv(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=Jl(_);p.call(F)}}var _=im(r,c,n,0,null,!1,!1,"",am);return n._reactRootContainer=_,n[lr]=_.current,Qo(n.nodeType===8?n.parentNode:n),zi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=Jl(R);T.call(F)}}var R=Ch(n,0,!1,null,null,!1,!1,"",am);return n._reactRootContainer=R,n[lr]=R.current,Qo(n.nodeType===8?n.parentNode:n),zi(function(){Xl(r,R,a,c)}),R}function tu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var R=Jl(_);T.call(R)}}Xl(r,_,n,d)}else _=Hv(a,r,n,d,c);return Jl(_)}Xa=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=kr(r.pendingLanes);a!==0&&(Vr(r,a|1),Gt(r,Be()),!(Ve&6)&&(Hs=Be()+500,jr()))}break;case 13:zi(function(){var c=dr(n,1);if(c!==null){var d=jt();Dn(c,n,1,d)}}),Ph(n,1)}},gs=function(n){if(n.tag===13){var r=dr(n,134217728);if(r!==null){var a=jt();Dn(r,n,134217728,a)}Ph(n,134217728)}},Ja=function(n){if(n.tag===13){var r=Kr(n),a=dr(n,r);if(a!==null){var c=jt();Dn(a,n,r,c)}Ph(n,r)}},Za=function(){return Ce},el=function(n,r){var a=Ce;try{return Ce=n,r()}finally{Ce=a}},as=function(n,r,a){switch(r){case"input":if(Eo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=_l(c);if(!d)throw Error(t(90));ts(c),Eo(c,d)}}}break;case"textarea":ss(n,a);break;case"select":r=a.value,r!=null&&er(n,!!a.multiple,r,!1)}},Ei=wh,No=zi;var Wv={usingClientEntryPoint:!1,Events:[Jo,Vs,_l,Mn,ko,wh]},da={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kv={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Oo(n),n===null?null:n.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Ai=nu.inject(Kv),Jt=nu}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv,Qt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nh(r))throw Error(t(200));return $v(n,r,null,a)},Qt.createRoot=function(n,r){if(!Nh(n))throw Error(t(299));var a=!1,c="",d=om;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Ch(n,1,!1,null,null,a,!1,c,d),n[lr]=r.current,Qo(n.nodeType===8?n.parentNode:n),new kh(r)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Oo(r),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return zi(n)},Qt.hydrate=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!0,a)},Qt.hydrateRoot=function(n,r,a){if(!Nh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=im(r,null,n,1,a??null,d,!1,p,_),n[lr]=r.current,Qo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Zl(r)},Qt.render=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!1,a)},Qt.unmountComponentAtNode=function(n){if(!eu(n))throw Error(t(40));return n._reactRootContainer?(zi(function(){tu(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},Qt.unstable_batchedUpdates=wh,Qt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!eu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tu(n,r,a,!1,c)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var mm;function t0(){if(mm)return Oh.exports;mm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Oh.exports=e0(),Oh.exports}var gm;function n0(){if(gm)return ru;gm=1;var i=t0();return ru.createRoot=i.createRoot,ru.hydrateRoot=i.hydrateRoot,ru}var r0=n0(),ym={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},i0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Og={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,k=(u&3)<<4|m>>4;let b=(m&15)<<2|v>>6,B=v&63;g||(B=64,h||(b=64)),s.push(t[w],t[k],t[b],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Vg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):i0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const k=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||k==null)throw new s0;const b=u<<2|m>>4;if(s.push(b),v!==64){const B=m<<4&240|v>>2;if(s.push(B),k!==64){const Y=v<<6&192|k;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class s0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o0=function(i){const e=Vg(i);return Og.encodeByteArray(e,!0)},wu=function(i){return o0(i).replace(/\./g,"")},Lg=function(i){try{return Og.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=()=>a0().__FIREBASE_DEFAULTS__,u0=()=>{if(typeof process>"u"||typeof ym>"u")return;const i=ym.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},c0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Lg(i[1]);return e&&JSON.parse(e)},zu=()=>{try{return l0()||u0()||c0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},xg=i=>{var e,t;return(t=(e=zu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},h0=i=>{const e=xg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Mg=()=>{var i;return(i=zu())===null||i===void 0?void 0:i.config},Fg=i=>{var e;return(e=zu())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[wu(JSON.stringify(t)),wu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function p0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function m0(){var i;const e=(i=zu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function g0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function y0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function _0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function v0(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function E0(){return!m0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w0(){try{return typeof indexedDB=="object"}catch{return!1}}function T0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="FirebaseError";class Ar extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=I0,Object.setPrototypeOf(this,Ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?S0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Ar(o,m,s)}}function S0(i,e){return i.replace(A0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const A0=/\{\$([^}]+)}/g;function R0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Tu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(_m(u)&&_m(h)){if(!Tu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function _m(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function ma(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function C0(i,e){const t=new P0(i,e);return t.subscribe.bind(t)}class P0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");k0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Mh),o.error===void 0&&(o.error=Mh),o.complete===void 0&&(o.complete=Mh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function k0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Mh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(i){return i&&i._delegate?i._delegate:i}class Ki{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new d0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(V0(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:D0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D0(i){return i===qi?void 0:i}function V0(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new N0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ae||(Ae={}));const L0={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},x0=Ae.INFO,M0={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},F0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=M0[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=x0,this._logHandler=F0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const b0=(i,e)=>e.some(t=>i instanceof t);let vm,Em;function U0(){return vm||(vm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z0(){return Em||(Em=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bg=new WeakMap,Kh=new WeakMap,Ug=new WeakMap,Fh=new WeakMap,_d=new WeakMap;function j0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ii(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&bg.set(t,i)}).catch(()=>{}),_d.set(e,i),e}function B0(i){if(Kh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Kh.set(i,e)}let Gh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Kh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ug.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ii(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function $0(i){Gh=i(Gh)}function q0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(bh(this),e,...t);return Ug.set(s,e.sort?e.sort():[e]),ii(s)}:z0().includes(i)?function(...e){return i.apply(bh(this),e),ii(bg.get(this))}:function(...e){return ii(i.apply(bh(this),e))}}function H0(i){return typeof i=="function"?q0(i):(i instanceof IDBTransaction&&B0(i),b0(i,U0())?new Proxy(i,Gh):i)}function ii(i){if(i instanceof IDBRequest)return j0(i);if(Fh.has(i))return Fh.get(i);const e=H0(i);return e!==i&&(Fh.set(i,e),_d.set(e,i)),e}const bh=i=>_d.get(i);function W0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ii(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ii(h.result),g.oldVersion,g.newVersion,ii(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const K0=["get","getKey","getAll","getAllKeys","count"],G0=["put","add","delete","clear"],Uh=new Map;function wm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=G0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||K0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return Uh.set(e,u),u}$0(i=>({...i,get:(e,t,s)=>wm(e,t)||i.get(e,t,s),has:(e,t)=>!!wm(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Y0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Y0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qh="@firebase/app",Tm="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new yd("@firebase/app"),X0="@firebase/app-compat",J0="@firebase/analytics-compat",Z0="@firebase/analytics",eE="@firebase/app-check-compat",tE="@firebase/app-check",nE="@firebase/auth",rE="@firebase/auth-compat",iE="@firebase/database",sE="@firebase/data-connect",oE="@firebase/database-compat",aE="@firebase/functions",lE="@firebase/functions-compat",uE="@firebase/installations",cE="@firebase/installations-compat",hE="@firebase/messaging",dE="@firebase/messaging-compat",fE="@firebase/performance",pE="@firebase/performance-compat",mE="@firebase/remote-config",gE="@firebase/remote-config-compat",yE="@firebase/storage",_E="@firebase/storage-compat",vE="@firebase/firestore",EE="@firebase/vertexai",wE="@firebase/firestore-compat",TE="firebase",IE="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="[DEFAULT]",SE={[Qh]:"fire-core",[X0]:"fire-core-compat",[Z0]:"fire-analytics",[J0]:"fire-analytics-compat",[tE]:"fire-app-check",[eE]:"fire-app-check-compat",[nE]:"fire-auth",[rE]:"fire-auth-compat",[iE]:"fire-rtdb",[sE]:"fire-data-connect",[oE]:"fire-rtdb-compat",[aE]:"fire-fn",[lE]:"fire-fn-compat",[uE]:"fire-iid",[cE]:"fire-iid-compat",[hE]:"fire-fcm",[dE]:"fire-fcm-compat",[fE]:"fire-perf",[pE]:"fire-perf-compat",[mE]:"fire-rc",[gE]:"fire-rc-compat",[yE]:"fire-gcs",[_E]:"fire-gcs-compat",[vE]:"fire-fst",[wE]:"fire-fst-compat",[EE]:"fire-vertex","fire-js":"fire-js",[TE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Map,AE=new Map,Xh=new Map;function Im(i,e){try{i.container.addComponent(e)}catch(t){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function no(i){const e=i.name;if(Xh.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Xh.set(e,i);for(const t of Iu.values())Im(t,i);for(const t of AE.values())Im(t,i);return!0}function vd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function gr(i){return i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Oa("app","Firebase",RE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=IE;function zg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Yh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw si.create("bad-app-name",{appName:String(o)});if(t||(t=Mg()),!t)throw si.create("no-options");const u=Iu.get(o);if(u){if(Tu(t,u.options)&&Tu(s,u.config))return u;throw si.create("duplicate-app",{appName:o})}const h=new O0(o);for(const g of Xh.values())h.addComponent(g);const m=new CE(t,s,h);return Iu.set(o,m),m}function jg(i=Yh){const e=Iu.get(i);if(!e&&i===Yh&&Mg())return zg();if(!e)throw si.create("no-app",{appName:i});return e}function oi(i,e,t){var s;let o=(s=SE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(m.join(" "));return}no(new Ki(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="firebase-heartbeat-database",kE=1,Sa="firebase-heartbeat-store";let zh=null;function Bg(){return zh||(zh=W0(PE,kE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Sa)}catch(t){console.warn(t)}}}}).catch(i=>{throw si.create("idb-open",{originalErrorMessage:i.message})})),zh}async function NE(i){try{const t=(await Bg()).transaction(Sa),s=await t.objectStore(Sa).get($g(i));return await t.done,s}catch(e){if(e instanceof Ar)wr.warn(e.message);else{const t=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(t.message)}}}async function Sm(i,e){try{const s=(await Bg()).transaction(Sa,"readwrite");await s.objectStore(Sa).put(e,$g(i)),await s.done}catch(t){if(t instanceof Ar)wr.warn(t.message);else{const s=si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wr.warn(s.message)}}}function $g(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=1024,VE=30*24*60*60*1e3;class OE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xE(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Am();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=VE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){wr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Am(),{heartbeatsToSend:s,unsentEntries:o}=LE(this._heartbeatsCache.heartbeats),u=wu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return wr.warn(t),""}}}function Am(){return new Date().toISOString().substring(0,10)}function LE(i,e=DE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Rm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Rm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class xE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w0()?T0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await NE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Rm(i){return wu(JSON.stringify({version:2,heartbeats:i})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(i){no(new Ki("platform-logger",e=>new Q0(e),"PRIVATE")),no(new Ki("heartbeat",e=>new OE(e),"PRIVATE")),oi(Qh,Tm,i),oi(Qh,Tm,"esm2017"),oi("fire-js","")}ME("");var Cm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wi,qg;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(C,D,O){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[D].apply(C,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var C=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)C[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)C[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],D=N.g[2];var O=N.g[3],S=I+(O^A&(D^O))+C[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[2]+606105819&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+C[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[6]+2821735955&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+C[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[10]+4294925233&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+C[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[14]+2792965006&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(D^O&(A^D))+C[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[11]+643717713&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+C[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[15]+3634488961&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+C[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[3]+4107603335&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+C[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[7]+1735328473&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(A^D^O)+C[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[11]+1839030562&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+C[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[7]+4139469664&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+C[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[3]+3572445317&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+C[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[15]+530742520&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(D^(A|~O))+C[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[14]+2878612391&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+C[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[10]+4293915773&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+C[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[6]+2734768916&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+C[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[2]+718787259&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,C=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=A;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<I;)if(C[D++]=N.charCodeAt(O++),D==this.blockSize){o(this,C),D=0;break}}else for(;O<I;)if(C[D++]=N[O++],D==this.blockSize){o(this,C),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var C=0;32>C;C+=8)N[A++]=this.g[I]>>>C&255;return N};function u(N,I){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],C=!0,D=N.length-1;0<=D;D--){var O=N[D]|0;C&&O==I||(A[D]=O,C=!1)}this.g=A}var m={};function g(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return k;if(0>N)return H(v(-N));for(var I=[],A=1,C=0;N>=A;C++)I[C]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return H(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),C=k,D=0;D<N.length;D+=8){var O=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+O),I);8>O?(O=v(Math.pow(I,O)),C=C.j(O).add(v(S))):(C=C.j(A),C=C.add(v(S)))}return C}var k=g(0),b=g(1),B=g(16777216);i=h.prototype,i.m=function(){if(X(this))return-H(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var C=this.i(A);N+=(0<=C?C:4294967296+C)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(Y(this))return"0";if(X(this))return"-"+H(this).toString(N);for(var I=v(Math.pow(N,6)),A=this,C="";;){var D=we(A,I).g;A=ve(A,D.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=D,Y(A))return O+C;for(;6>O.length;)O="0"+O;C=O+C}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function Y(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function X(N){return N.h==-1}i.l=function(N){return N=ve(this,N),X(N)?-1:Y(N)?0:1};function H(N){for(var I=N.g.length,A=[],C=0;C<I;C++)A[C]=~N.g[C];return new h(A,~N.h).add(b)}i.abs=function(){return X(this)?H(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0,D=0;D<=I;D++){var O=C+(this.i(D)&65535)+(N.i(D)&65535),S=(O>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);C=S>>>16,O&=65535,S&=65535,A[D]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ve(N,I){return N.add(H(I))}i.j=function(N){if(Y(this)||Y(N))return k;if(X(this))return X(N)?H(this).j(H(N)):H(H(this).j(N));if(X(N))return H(this.j(H(N)));if(0>this.l(B)&&0>N.l(B))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],C=0;C<2*I;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var D=0;D<N.g.length;D++){var O=this.i(C)>>>16,S=this.i(C)&65535,et=N.i(D)>>>16,Pt=N.i(D)&65535;A[2*C+2*D]+=S*Pt,_e(A,2*C+2*D),A[2*C+2*D+1]+=O*Pt,_e(A,2*C+2*D+1),A[2*C+2*D+1]+=S*et,_e(A,2*C+2*D+1),A[2*C+2*D+2]+=O*et,_e(A,2*C+2*D+2)}for(C=0;C<I;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=I;C<2*I;C++)A[C]=0;return new h(A,0)};function _e(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ye(N,I){this.g=N,this.h=I}function we(N,I){if(Y(I))throw Error("division by zero");if(Y(N))return new ye(k,k);if(X(N))return I=we(H(N),I),new ye(H(I.g),H(I.h));if(X(I))return I=we(N,H(I)),new ye(H(I.g),I.h);if(30<N.g.length){if(X(N)||X(I))throw Error("slowDivide_ only works with positive integers.");for(var A=b,C=I;0>=C.l(N);)A=We(A),C=We(C);var D=Se(A,1),O=Se(C,1);for(C=Se(C,2),A=Se(A,2);!Y(C);){var S=O.add(C);0>=S.l(N)&&(D=D.add(A),O=S),C=Se(C,1),A=Se(A,1)}return I=ve(N,D.j(I)),new ye(D,I)}for(D=k;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),O=v(A),S=O.j(I);X(S)||0<S.l(N);)A-=C,O=v(A),S=O.j(I);Y(O)&&(O=b),D=D.add(O),N=ve(N,S)}return new ye(D,N)}i.A=function(N){return we(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)&N.i(C);return new h(A,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)|N.i(C);return new h(A,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)^N.i(C);return new h(A,this.h^N.h)};function We(N){for(var I=N.g.length+1,A=[],C=0;C<I;C++)A[C]=N.i(C)<<1|N.i(C-1)>>>31;return new h(A,N.h)}function Se(N,I){var A=I>>5;I%=32;for(var C=N.g.length-A,D=[],O=0;O<C;O++)D[O]=0<I?N.i(O+A)>>>I|N.i(O+A+1)<<32-I:N.i(O+A);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,qg=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Wi=h}).apply(typeof Cm<"u"?Cm:typeof self<"u"?self:typeof window<"u"?window:{});var iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hg,ga,Wg,hu,Jh,Kg,Gg,Qg;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof iu=="object"&&iu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function k(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function b(l,f,y){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:k,b.apply(null,arguments)}function B(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function Y(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var Q=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Q[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,Q)}}function X(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function H(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let Q=0;Q<U;Q++)l[L+Q]=E[Q]}else l.push(E)}}class ve{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function _e(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var We=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Se(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function N(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<A.length;U++)y=A[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,y){const E=Pt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Pt=new ve(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let be,J=!1,le=new et,ee=()=>{const l=m.Promise.resolve(void 0);be=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){O(y)}var f=Pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Te(l,f){if(oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(We){e:{try{we(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ke[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Te.aa.h.call(this)}}Y(Te,oe);var ke={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),xe=0;function je(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++xe,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Jn(l){this.src=l,this.g={},this.h=0}Jn.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var Q=Rr(l,f,E,L);return-1<Q?(f=l[Q],y||(f.fa=!1)):(f=new je(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function ts(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(mt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Rr(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var gi="closure_lm_"+(1e6*Math.random()|0),ns={};function vo(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)vo(l,f[U],y,E,L);return null}return y=To(y),l&&l[Le]?l.K(f,y,v(E)?!!E.capture:!!E,L):Eo(l,f,y,!1,E,L)}function Eo(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var Q=v(L)?!!L.capture:!!L,Fe=is(l);if(Fe||(l[gi]=Fe=new Jn(l)),y=Fe.add(f,y,E,Q,U),y.proxy)return y;if(E=Ba(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Ee||(L=Q),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(er(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ba(){function l(y){return f.call(l.src,l.listener,y)}const f=wo;return l}function rs(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)rs(l,f[U],y,E,L);else E=v(E)?!!E.capture:!!E,y=To(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Rr(U,y,E,L),-1<y&&(mt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=is(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Rr(f,y,E,L)),(y=-1<l?f[l]:null)&&Zn(y))}function Zn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])ts(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(er(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=is(f))?(ts(y,l),y.h==0&&(y.src=null,f[gi]=null)):mt(l)}}}function er(l){return l in ns?ns[l]:ns[l]="on"+l}function wo(l,f){if(l.da)l=!0;else{f=new Te(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&Zn(l),l=y.call(E,f)}return l}function is(l){return l=l[gi],l instanceof Jn?l:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function To(l){return typeof l=="function"?l:(l[ss]||(l[ss]=function(f){return l.handleEvent(f)}),l[ss])}function at(){j.call(this),this.i=new Jn(this),this.M=this,this.F=null}Y(at,j),at.prototype[Le]=!0,at.prototype.removeEventListener=function(l,f,y,E){rs(this,l,f,y,E)};function lt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new oe(f,l);else if(f instanceof oe)f.target=f.target||l;else{var L=f;f=new oe(E,l),C(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var Q=f.g=y[U];L=tr(Q,E,!0,f)&&L}if(Q=f.g=l,L=tr(Q,E,!0,f)&&L,L=tr(Q,E,!1,f)&&L,y)for(U=0;U<y.length;U++)Q=f.g=y[U],L=tr(Q,E,!1,f)&&L}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)mt(y[E]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},at.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function tr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var Q=f[U];if(Q&&!Q.da&&Q.capture==y){var Fe=Q.listener,ut=Q.ha||Q.src;Q.fa&&ts(l.i,Q),L=Fe.call(ut,E)!==!1&&L}}return L&&!E.defaultPrevented}function Io(l,f,y){if(typeof l=="function")y&&(l=b(l,y));else if(l&&typeof l.handleEvent=="function")l=b(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Cr(l){l.g=Io(()=>{l.g=null,l.i&&(l.i=!1,Cr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class yi extends j{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _i(l){j.call(this),this.h=l,this.g={}}Y(_i,j);var So=[];function Ao(l){Se(l.g,function(f,y){this.g.hasOwnProperty(y)&&Zn(f)},l),l.g={}}_i.prototype.N=function(){_i.aa.N.call(this),Ao(this)},_i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=m.JSON.stringify,Co=m.JSON.parse,Po=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function vi(){}vi.prototype.h=null;function os(l){return l.h||(l.h=l.i())}function as(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xn(){oe.call(this,"d")}Y(xn,oe);function ls(){oe.call(this,"c")}Y(ls,oe);var Mn={},ko=null;function Ei(){return ko=ko||new at}Mn.La="serverreachability";function No(l){oe.call(this,Mn.La,l)}Y(No,oe);function nr(l){const f=Ei();lt(f,new No(f))}Mn.STAT_EVENT="statevent";function Do(l,f){oe.call(this,Mn.STAT_EVENT,l),this.stat=f}Y(Do,oe);function tt(l){const f=Ei();lt(f,new Do(f,l))}Mn.Ma="timingevent";function us(l,f){oe.call(this,Mn.Ma,l),this.size=f}Y(us,oe);function yn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function wi(){this.g=!0}wi.prototype.xa=function(){this.g=!1};function Ti(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var Q="",Fe=U.split("&"),ut=0;ut<Fe.length;ut++){var Ne=Fe[ut].split("=");if(1<Ne.length){var gt=Ne[0];Ne=Ne[1];var it=gt.split("_");Q=2<=it.length&&it[1]=="type"?Q+(gt+"="+Ne+"&"):Q+(gt+"=redacted&")}}else Q=null;else Q=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+Q})}function cs(l,f,y,E,L,U,Q){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+Q})}function _n(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+sc(l,y)+(E?" "+E:"")})}function Vo(l,f){l.info(function(){return"TIMEOUT: "+f})}wi.prototype.info=function(){};function sc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Q=1;Q<L.length;Q++)L[Q]=""}}}}return Ro(y)}catch{return f}}var hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$a={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vn;function Ii(){}Y(Ii,vi),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},vn=new Ii;function En(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new _i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qa}function qa(){this.i=null,this.g="",this.h=!1}var Oo={},ds={};function fs(l,f,y){l.L=1,l.v=Vr(Zt(f)),l.m=y,l.P=!0,Lo(l,null)}function Lo(l,f){l.F=Date.now(),Be(l),l.A=Zt(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Lr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new qa,l.g=ll(l.j,y?f:null,!l.m),0<l.O&&(l.M=new yi(b(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(So[0]=L.toString()),L=So);for(var U=0;U<L.length;U++){var Q=vo(y,L[U],E||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),nr(),Ti(l.i,l.u,l.A,l.l,l.R,l.m)}En.prototype.ca=function(l){l=l.target;const f=this.M;f&&$t(l)==3?f.j():this.Y(l)},En.prototype.Y=function(l){try{if(l==this.g)e:{const it=$t(this.g);var f=this.g.Ba();const un=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||zo(this.g)))){this.J||it!=4||f==7||(f==8||0>=un?nr(3):nr(2)),Si(this);var y=this.g.Z();this.X=y;t:if(Ha(this)){var E=zo(this.g);l="";var L=E.length,U=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Pr(this);var Q="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=y==200,cs(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ut=this.g;if((Fe=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_e(Fe)){var Ne=Fe;break t}}Ne=null}if(y=Ne)_n(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xo(this,y);else{this.o=!1,this.s=3,tt(12),an(this),Pr(this);break e}}if(this.P){y=!0;let tn;for(;!this.J&&this.C<Q.length;)if(tn=oc(this,Q),tn==ds){it==4&&(this.s=4,tt(14),y=!1),_n(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Oo){this.s=4,tt(15),_n(this.i,this.l,Q,"[Invalid Chunk]"),y=!1;break}else _n(this.i,this.l,tn,null),xo(this,tn);if(Ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||Q.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)_n(this.i,this.l,Q,"[Invalid Chunked Response]"),an(this),Pr(this);else if(0<Q.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Bo(gt),gt.M=!0,tt(11))}}else _n(this.i,this.l,Q,null),xo(this,Q);it==4&&an(this),this.o&&!this.J&&(it==4?Ss(this.j,this):(this.o=!1,Be(this)))}else vs(this.g),y==400&&0<Q.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),an(this),Pr(this)}}}catch{}finally{}};function Ha(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function oc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?ds:(y=Number(f.substring(y,E)),isNaN(y)?Oo:(E+=1,E+y>f.length?ds:(f=f.slice(E,E+y),l.C=E+y,f)))}En.prototype.cancel=function(){this.J=!0,an(this)};function Be(l){l.S=Date.now()+l.I,Wa(l,l.I)}function Wa(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=yn(b(l.ba,l),f)}function Si(l){l.B&&(m.clearTimeout(l.B),l.B=null)}En.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Vo(this.i,this.A),this.L!=2&&(nr(),tt(17)),an(this),this.s=2,Pr(this)):Wa(this,this.S-l)};function Pr(l){l.j.G==0||l.J||Ss(l.j,l)}function an(l){Si(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Ao(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function xo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||bt(y.h,l))){if(!l.K&&bt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Is(y),An(y);else break e;Ts(y),tt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=yn(b(y.Za,y),6e3));if(1>=Ga(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ar(y,11)}else if((l.K||y.g==l)&&Is(y),!_e(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Ne=L[f];if(y.T=Ne[0],Ne=Ne[1],y.G==2)if(Ne[0]=="c"){y.K=Ne[1],y.ia=Ne[2];const gt=Ne[3];gt!=null&&(y.la=gt,y.j.info("VER="+y.la));const it=Ne[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const un=Ne[5];un!=null&&typeof un=="number"&&0<un&&(E=1.5*un,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const tn=l.g;if(tn){const Di=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var U=E.h;U.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Mo(U,U.h),U.h=null))}if(E.D){const Rs=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(E.ya=Rs,ze(E.I,E.D,Rs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Q=l;if(E.qa=al(E,E.J?E.ia:null,E.W),Q.K){Qa(E.h,Q);var Fe=Q,ut=E.L;ut&&(Fe.I=ut),Fe.B&&(Si(Fe),Be(Fe)),E.g=Q}else Ni(E);0<y.i.length&&zn(y)}else Ne[0]!="stop"&&Ne[0]!="close"||ar(y,7);else y.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?ar(y,7):Tt(y):Ne[0]!="noop"&&y.l&&y.l.ta(Ne),y.v=0)}}nr(4)}catch{}}var Ka=class{constructor(l,f){this.g=l,this.map=f}};function Ai(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ga(l){return l.h?1:l.g?l.g.size:0}function bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Mo(l,f){l.g?l.g.add(f):l.h=f}function Qa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ai.prototype.cancel=function(){if(this.i=Ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ya(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return X(l.i)}function ps(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function ms(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function kr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=ms(l),E=ps(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var Ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function rr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof rr){this.h=l.h,Ci(this,l.j),this.o=l.o,this.g=l.g,Nr(this,l.s),this.l=l.l;var f=l.i,y=new Fn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Dr(this,y),this.m=l.m}else l&&(f=String(l).match(Ri))?(this.h=!1,Ci(this,f[1]||"",!0),this.o=Ce(f[2]||""),this.g=Ce(f[3]||"",!0),Nr(this,f[4]),this.l=Ce(f[5]||"",!0),Dr(this,f[6]||"",!0),this.m=Ce(f[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}rr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Or(f,gs,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Or(f,gs,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Or(y,y.charAt(0)=="/"?Za:Ja,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Or(y,Fo)),l.join("")};function Zt(l){return new rr(l)}function Ci(l,f,y){l.j=y?Ce(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Nr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Dr(l,f,y){f instanceof Fn?(l.i=f,bn(l.i,l.h)):(y||(f=Or(f,el)),l.i=new Fn(f,l.h))}function ze(l,f,y){l.i.set(f,y)}function Vr(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ce(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Or(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,Xa),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Xa(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var gs=/[#\/\?@]/g,Ja=/[#\?:]/g,Za=/[#\?]/g,el=/[#\?@]/g,Fo=/#/g;function Fn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&ac(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Fn.prototype,i.add=function(l,f){wt(this),this.i=null,l=ln(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function wn(l,f){wt(l),f=ln(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Tn(l,f){return wt(l),f=ln(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},i.V=function(l){wt(this);let f=[];if(typeof l=="string")Tn(this,l)&&(f=f.concat(this.g.get(ln(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return wt(this),this.i=null,l=ln(this,l),Tn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Lr(l,f,y){wn(l,f),0<y.length&&(l.i=null,l.g.set(ln(l,f),X(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),Q=this.V(E);for(E=0;E<Q.length;E++){var L=U;Q[E]!==""&&(L+="="+encodeURIComponent(String(Q[E]))),l.push(L)}}return this.i=l.join("&")};function ln(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function bn(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(wn(this,E),Lr(this,L,y))},l)),l.j=f}function lc(l,f){const y=new wi;if(m.Image){const E=new Image;E.onload=B(Bt,y,"TestLoadImage: loaded",!0,f,E),E.onerror=B(Bt,y,"TestLoadImage: error",!1,f,E),E.onabort=B(Bt,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=B(Bt,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function tl(l,f){const y=new wi,E=new AbortController,L=setTimeout(()=>{E.abort(),Bt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?Bt(y,"TestPingServer: ok",!0,f):Bt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Bt(y,"TestPingServer: error",!1,f)})}function Bt(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function uc(){this.g=new Po}function nl(l,f,y){const E=y||"";try{kr(l,function(L,U){let Q=L;v(L)&&(Q=Ro(L)),f.push(E+U+"="+encodeURIComponent(Q))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function ir(l){this.l=l.Ub||null,this.j=l.eb||!1}Y(ir,vi),ir.prototype.g=function(){return new Pi(this.l,this.j)},ir.prototype.i=function(l){return function(){return l}}({});function Pi(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Y(Pi,at),i=Pi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Sn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?In(this):Sn(this),this.readyState==3&&rl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,In(this))},i.Qa=function(l){this.g&&(this.response=l,In(this))},i.ga=function(){this.g&&In(this)};function In(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Sn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Sn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function sr(l){let f="";return Se(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function xr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=sr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):ze(l,f,y))}function Ke(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Y(Ke,at);var cc=/^https?$/i,bo=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vn.g(),this.v=this.o?os(this.o):os(vn),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){ki(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(bo,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Q]of y)this.g.setRequestHeader(U,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_s(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){ki(this,U)}};function ki(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ys(l),en(l)}function ys(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),en(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),en(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Uo(this):this.bb())},i.bb=function(){Uo(this)};function Uo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||$t(l)!=4||l.Z()!=2)){if(l.u&&$t(l)==4)Io(l.Ea,0,l);else if(lt(l,"readystatechange"),$t(l)==4){l.h=!1;try{const Q=l.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=Q===0){var L=String(l.D).match(Ri)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!cc.test(L?L.toLowerCase():"")}y=E}if(y)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var U=2<$t(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ys(l)}}finally{en(l)}}}}function en(l,f){if(l.g){_s(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{y.onreadystatechange=E}catch{}}}function _s(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function $t(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Co(f)}};function zo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function vs(l){const f={};l=(l.g&&2<=$t(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(_e(l[E]))continue;var y=D(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function jo(l){this.Aa=0,this.i=[],this.j=new wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,l),this.cb=Un("retryDelaySeedMs",1e4,l),this.Wa=Un("forwardChannelMaxRetries",2,l),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ai(l&&l.concurrentRequestLimit),this.Da=new uc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=jo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){tt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=al(this,null,this.W),zn(this)};function Tt(l){if(Es(l),l.G==3){var f=l.U++,y=Zt(l.I);if(ze(y,"SID",l.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),or(l,y),f=new En(l,l.j,f),f.L=2,f.v=Vr(Zt(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=ll(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}ol(l)}function An(l){l.g&&(Bo(l),l.g.cancel(),l.g=null)}function Es(l){An(l),l.u&&(m.clearTimeout(l.u),l.u=null),Is(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function zn(l){if(!Jt(l.h)&&!l.s){l.s=!0;var f=l.Ga;be||ee(),J||(be(),J=!0),le.add(f,l),l.B=0}}function hc(l,f){return Ga(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=yn(b(l.Ga,l,f),sl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new En(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),C(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Mr(this,L,f),y=Zt(this.I),ze(y,"RID",l),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),or(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(sr(U)))+"&"+f:this.m&&xr(y,this.m,U)),Mo(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),L.T=!0,fs(L,y,null)):fs(L,y,f),this.G=2}}else this.G==3&&(l?ws(this,l):this.i.length==0||Jt(this.h)||ws(this))};function ws(l,f){var y;f?y=f.l:y=l.U++;const E=Zt(l.I);ze(E,"SID",l.K),ze(E,"RID",y),ze(E,"AID",l.T),or(l,E),l.m&&l.o&&xr(E,l.m,l.o),y=new En(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Mr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Mo(l.h,y),fs(y,E,f)}function or(l,f){l.H&&Se(l.H,function(y,E){ze(f,E,y)}),l.l&&kr({},function(y,E){ze(f,E,y)})}function Mr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?b(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const Q=["count="+y];U==-1?0<y?(U=L[0].g,Q.push("ofs="+U)):U=0:Q.push("ofs="+U);let Fe=!0;for(let ut=0;ut<y;ut++){let Ne=L[ut].g;const gt=L[ut].map;if(Ne-=U,0>Ne)U=Math.max(0,L[ut].g-100),Fe=!1;else try{nl(gt,Q,"req"+Ne+"_")}catch{E&&E(gt)}}if(Fe){E=Q.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ni(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;be||ee(),J||(be(),J=!0),le.add(f,l),l.v=0}}function Ts(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=yn(b(l.Fa,l),sl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,il(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=yn(b(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),An(this),il(this))};function Bo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function il(l){l.g=new En(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zt(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),or(l,f),l.m&&l.o&&xr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Vr(Zt(f)),y.m=null,y.P=!0,Lo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,An(this),Ts(this),tt(19))};function Is(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ss(l,f){var y=null;if(l.g==f){Is(l),Bo(l),l.g=null;var E=2}else if(bt(l.h,f))y=f.D,Qa(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Ei(),lt(E,new us(E,y)),zn(l)}else Ni(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&hc(l,f)||E==2&&Ts(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:ar(l,5);break;case 4:ar(l,10);break;case 3:ar(l,6);break;default:ar(l,2)}}}function sl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function ar(l,f){if(l.j.info("Error code "+f),f==2){var y=b(l.fb,l),E=l.Xa;const L=!E;E=new rr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ci(E,"https"),Vr(E),L?lc(E.toString(),y):tl(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),ol(l),Es(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function ol(l){if(l.G=0,l.ka=[],l.l){const f=Ya(l.h);(f.length!=0||l.i.length!=0)&&(H(l.ka,f),H(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function al(l,f,y){var E=y instanceof rr?Zt(y):new rr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Nr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new rr(null);E&&Ci(U,E),f&&(U.g=f),L&&Nr(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&ze(E,y,f),ze(E,"VER",l.la),or(l,E),E}function ll(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new ir({eb:y})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function $o(){}i=$o.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function As(){}As.prototype.g=function(l,f){return new Ut(l,f)};function Ut(l,f){at.call(this),this.g=new jo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!_e(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_e(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new jn(this)}Y(Ut,at),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Tt(this.g)},Ut.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Ro(l),l=y);f.i.push(new Ka(f.Ya++,l)),f.G==3&&zn(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,Ut.aa.N.call(this)};function ul(l){xn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}Y(ul,xn);function cl(){ls.call(this),this.status=1}Y(cl,ls);function jn(l){this.g=l}Y(jn,$o),jn.prototype.ua=function(){lt(this.g,"a")},jn.prototype.ta=function(l){lt(this.g,new ul(l))},jn.prototype.sa=function(l){lt(this.g,new cl)},jn.prototype.ra=function(){lt(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Qg=function(){return new As},Gg=function(){return Ei()},Kg=Mn,Jh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,hu=hs,$a.COMPLETE="complete",Wg=$a,as.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",at.prototype.listen=at.prototype.K,ga=as,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Hg=Ke}).apply(typeof iu<"u"?iu:typeof self<"u"?self:typeof window<"u"?window:{});const Pm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new yd("@firebase/firestore");function Ks(){return Gi.logLevel}function te(i,...e){if(Gi.logLevel<=Ae.DEBUG){const t=e.map(Ed);Gi.debug(`Firestore (${fo}): ${i}`,...t)}}function Tr(i,...e){if(Gi.logLevel<=Ae.ERROR){const t=e.map(Ed);Gi.error(`Firestore (${fo}): ${i}`,...t)}}function ro(i,...e){if(Gi.logLevel<=Ae.WARN){const t=e.map(Ed);Gi.warn(`Firestore (${fo}): ${i}`,...t)}}function Ed(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(i="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+i;throw Tr(e),new Error(e)}function Me(i,e){i||pe()}function ge(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Ar{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xt.UNAUTHENTICATED))}shutdown(){}}class bE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class UE{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Me(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ai,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ai)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string"),new Yg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new xt(e)}}class zE{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jE{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new zE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $E{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Me(this.o===void 0);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Me(typeof t.token=="string"),this.R=t.token,new BE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=qE(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Pe(i,e){return i<e?-1:i>e?1:0}function io(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new ft(0,0))}static max(){return new me(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(),s===void 0?s=e.length-t:s>e.length-t&&pe(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Aa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Aa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Qe extends Aa{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const HE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Aa{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return HE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Qe.fromString(e))}static fromName(e){return new he(Qe.fromString(e).popFirst(5))}static empty(){return new he(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Qe(e.slice()))}}function WE(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=me.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new ci(o,he.empty(),e)}function KE(i){return new ci(i.readTime,i.key,-1)}class ci{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ci(me.min(),he.empty(),-1)}static max(){return new ci(me.max(),he.empty(),-1)}}function GE(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(i.documentKey,e.documentKey),t!==0?t:Pe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==QE)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,s)=>{t(e)})}static reject(e){return new z((t,s)=>{s(e)})}static waitFor(e){return new z((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=z.resolve(!1);for(const s of e)t=t.next(o=>o?z.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new z((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new z((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function XE(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function mo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ju.oe=-1;function Bu(i){return i==null}function Su(i){return i===0&&1/i==-1/0}function JE(i){return typeof i=="number"&&Number.isInteger(i)&&!Su(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=km(e)),e=ew(i.get(t),e);return km(e)}function ew(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function km(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Yi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Jg(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new su(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new su(this.root,e,this.comparator,!1)}getReverseIterator(){return new su(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new su(this.root,e,this.comparator,!0)}}class su{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dm(this.data.getIterator())}getIteratorFrom(e){return new Dm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class Dm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new pt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Zg("Invalid base64 string: "+u):u}}(e);return new Ct(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Ct(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const tw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(i){if(Me(!!i),typeof i=="string"){let e=0;const t=tw.exec(i);if(Me(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function di(i){return typeof i=="string"?Ct.fromBase64String(i):Ct.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function $u(i){const e=i.mapValue.fields.__previous_value__;return wd(e)?$u(e):e}function Ra(i){const e=hi(i.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t,s,o,u,h,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v}}class Ca{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ca("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ca&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?wd(i)?4:iw(i)?9007199254740991:rw(i)?10:11:pe()}function Yn(i,e){if(i===e)return!0;const t=fi(i);if(t!==fi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ra(i).isEqual(Ra(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=hi(o.timestampValue),m=hi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return di(o.bytesValue).isEqual(di(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?Su(h)===Su(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return io(i.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Nm(h)!==Nm(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!Yn(h[g],m[g])))return!1;return!0}(i,e);default:return pe()}}function Pa(i,e){return(i.values||[]).find(t=>Yn(t,e))!==void 0}function so(i,e){if(i===e)return 0;const t=fi(i),s=fi(e);if(t!==s)return Pe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Pe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return Vm(i.timestampValue,e.timestampValue);case 4:return Vm(Ra(i),Ra(e));case 5:return Pe(i.stringValue,e.stringValue);case 6:return function(u,h){const m=di(u),g=di(h);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=Pe(m[v],g[v]);if(w!==0)return w}return Pe(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Pe(rt(u.latitude),rt(h.latitude));return m!==0?m:Pe(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Om(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,v,w;const k=u.fields||{},b=h.fields||{},B=(m=k.value)===null||m===void 0?void 0:m.arrayValue,Y=(g=b.value)===null||g===void 0?void 0:g.arrayValue,X=Pe(((v=B==null?void 0:B.values)===null||v===void 0?void 0:v.length)||0,((w=Y==null?void 0:Y.values)===null||w===void 0?void 0:w.length)||0);return X!==0?X:Om(B,Y)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===ou.mapValue&&h===ou.mapValue)return 0;if(u===ou.mapValue)return 1;if(h===ou.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let k=0;k<g.length&&k<w.length;++k){const b=Pe(g[k],w[k]);if(b!==0)return b;const B=so(m[g[k]],v[w[k]]);if(B!==0)return B}return Pe(g.length,w.length)}(i.mapValue,e.mapValue);default:throw pe()}}function Vm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Pe(i,e);const t=hi(i),s=hi(e),o=Pe(t.seconds,s.seconds);return o!==0?o:Pe(t.nanos,s.nanos)}function Om(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=so(t[o],s[o]);if(u)return u}return Pe(t.length,s.length)}function oo(i){return Zh(i)}function Zh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=hi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return di(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return he.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Zh(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Zh(t.fields[h])}`;return o+"}"}(i.mapValue):pe()}function du(i){switch(fi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$u(i);return e?16+du(e):16;case 5:return 2*i.stringValue.length;case 6:return di(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+du(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return Yi(s.fields,(u,h)=>{o+=u.length+du(h)}),o}(i.mapValue);default:throw pe()}}function ed(i){return!!i&&"integerValue"in i}function Td(i){return!!i&&"arrayValue"in i}function Lm(i){return!!i&&"nullValue"in i}function xm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function fu(i){return!!i&&"mapValue"in i}function rw(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function va(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Yi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=va(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=va(i.arrayValue.values[t]);return e}return Object.assign({},i)}function iw(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=va(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=va(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];fu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Yi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new gn(va(this.value))}}function ey(i){const e=[];return Yi(i.fields,(t,s)=>{const o=new Rt([t]);if(fu(s)){const u=ey(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,me.min(),me.min(),me.min(),gn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,me.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,me.min(),me.min(),gn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,me.min(),me.min(),gn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t){this.position=e,this.inclusive=t}}function Mm(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=so(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Fm(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Yn(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t="asc"){this.field=e,this.dir=t}}function sw(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{}class dt extends ty{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new aw(e,t,s):t==="array-contains"?new cw(e,s):t==="in"?new hw(e,s):t==="not-in"?new dw(e,s):t==="array-contains-any"?new fw(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new lw(e,s):new uw(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(so(t,this.value)):t!==null&&fi(this.value)===fi(t)&&this.matchesComparison(so(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends ty{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Xn(e,t)}matches(e){return ny(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ny(i){return i.op==="and"}function ry(i){return ow(i)&&ny(i)}function ow(i){for(const e of i.filters)if(e instanceof Xn)return!1;return!0}function td(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+oo(i.value);if(ry(i))return i.filters.map(e=>td(e)).join(",");{const e=i.filters.map(t=>td(t)).join(",");return`${i.op}(${e})`}}function iy(i,e){return i instanceof dt?function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&Yn(s.value,o.value)}(i,e):i instanceof Xn?function(s,o){return o instanceof Xn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&iy(h,o.filters[m]),!0):!1}(i,e):void pe()}function sy(i){return i instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${oo(t.value)}`}(i):i instanceof Xn?function(t){return t.op.toString()+" {"+t.getFilters().map(sy).join(" ,")+"}"}(i):"Filter"}class aw extends dt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class lw extends dt{constructor(e,t){super(e,"in",t),this.keys=oy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uw extends dt{constructor(e,t){super(e,"not-in",t),this.keys=oy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>he.fromName(s.referenceValue))}class cw extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Td(t)&&Pa(t.arrayValue,this.value)}}class hw extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pa(this.value.arrayValue,t)}}class dw extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Pa(this.value.arrayValue,t)}}class fw extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Td(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Pa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function bm(i,e=null,t=[],s=[],o=null,u=null,h=null){return new pw(i,e,t,s,o,u,h)}function Id(i){const e=ge(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>td(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Bu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>oo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>oo(s)).join(",")),e.ue=t}return e.ue}function Sd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!sw(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!iy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Fm(i.startAt,e.startAt)&&Fm(i.endAt,e.endAt)}function nd(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mw(i,e,t,s,o,u,h,m){return new qu(i,e,t,s,o,u,h,m)}function ay(i){return new qu(i)}function Um(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function gw(i){return i.collectionGroup!==null}function Ea(i){const e=ge(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Rt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Ru(u,s))}),t.has(Rt.keyField().canonicalString())||e.ce.push(new Ru(Rt.keyField(),s))}return e.ce}function Wn(i){const e=ge(i);return e.le||(e.le=yw(e,Ea(i))),e.le}function yw(i,e){if(i.limitType==="F")return bm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ru(o.field,u)});const t=i.endAt?new Au(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Au(i.startAt.position,i.startAt.inclusive):null;return bm(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function rd(i,e,t){return new qu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Hu(i,e){return Sd(Wn(i),Wn(e))&&i.limitType===e.limitType}function ly(i){return`${Id(Wn(i))}|lt:${i.limitType}`}function Gs(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>sy(o)).join(", ")}]`),Bu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>oo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>oo(o)).join(",")),`Target(${s})`}(Wn(i))}; limitType=${i.limitType})`}function Wu(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Ea(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const v=Mm(h,m,g);return h.inclusive?v<=0:v<0}(s.startAt,Ea(s),o)||s.endAt&&!function(h,m,g){const v=Mm(h,m,g);return h.inclusive?v>=0:v>0}(s.endAt,Ea(s),o))}(i,e)}function _w(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function uy(i){return(e,t)=>{let s=!1;for(const o of Ea(i)){const u=vw(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function vw(i,e,t){const s=i.field.isKeyField()?he.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?so(g,v):pe()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Jg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=new Je(he.comparator);function Ir(){return Ew}const cy=new Je(he.comparator);function ya(...i){let e=cy;for(const t of i)e=e.insert(t.key,t);return e}function hy(i){let e=cy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Hi(){return wa()}function dy(){return wa()}function wa(){return new Xi(i=>i.toString(),(i,e)=>i.isEqual(e))}const ww=new Je(he.comparator),Tw=new pt(he.comparator);function Re(...i){let e=Tw;for(const t of i)e=e.add(t);return e}const Iw=new pt(Pe);function Sw(){return Iw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Su(e)?"-0":e}}function fy(i){return{integerValue:""+i}}function Aw(i,e){return JE(e)?fy(e):Ad(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this._=void 0}}function Rw(i,e,t){return i instanceof Cu?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&wd(u)&&(u=$u(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof ka?my(i,e):i instanceof Na?gy(i,e):function(o,u){const h=py(o,u),m=zm(h)+zm(o.Pe);return ed(h)&&ed(o.Pe)?fy(m):Ad(o.serializer,m)}(i,e)}function Cw(i,e,t){return i instanceof ka?my(i,e):i instanceof Na?gy(i,e):t}function py(i,e){return i instanceof Pu?function(s){return ed(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Cu extends Ku{}class ka extends Ku{constructor(e){super(),this.elements=e}}function my(i,e){const t=yy(e);for(const s of i.elements)t.some(o=>Yn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Na extends Ku{constructor(e){super(),this.elements=e}}function gy(i,e){let t=yy(e);for(const s of i.elements)t=t.filter(o=>!Yn(o,s));return{arrayValue:{values:t}}}class Pu extends Ku{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function zm(i){return rt(i.integerValue||i.doubleValue)}function yy(i){return Td(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function Pw(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof ka&&o instanceof ka||s instanceof Na&&o instanceof Na?io(s.elements,o.elements,Yn):s instanceof Pu&&o instanceof Pu?Yn(s.Pe,o.Pe):s instanceof Cu&&o instanceof Cu}(i.transform,e.transform)}class kw{constructor(e,t){this.version=e,this.transformResults=t}}class Er{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Er}static exists(e){return new Er(void 0,e)}static updateTime(e){return new Er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pu(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Gu{}function _y(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Ey(i.key,Er.none()):new xa(i.key,i.data,Er.none());{const t=i.data,s=gn.empty();let o=new pt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ji(i.key,s,new Vn(o.toArray()),Er.none())}}function Nw(i,e,t){i instanceof xa?function(o,u,h){const m=o.value.clone(),g=Bm(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Ji?function(o,u,h){if(!pu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=Bm(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(vy(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ta(i,e,t,s){return i instanceof xa?function(u,h,m,g){if(!pu(u.precondition,h))return m;const v=u.value.clone(),w=$m(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof Ji?function(u,h,m,g){if(!pu(u.precondition,h))return m;const v=$m(u.fieldTransforms,g,h),w=h.data;return w.setAll(vy(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(k=>k.field))}(i,e,t,s):function(u,h,m){return pu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function Dw(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=py(s.transform,o||null);u!=null&&(t===null&&(t=gn.empty()),t.set(s.field,u))}return t||null}function jm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&io(s,o,(u,h)=>Pw(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class xa extends Gu{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ji extends Gu{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function vy(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Bm(i,e,t){const s=new Map;Me(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,Cw(h,m,t[o]))}return s}function $m(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,Rw(u,h,e))}return s}class Ey extends Gu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vw extends Gu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&Nw(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ta(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ta(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=dy();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=_y(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(me.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Re())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(t,s)=>jm(t,s))&&io(this.baseMutations,e.baseMutations,(t,s)=>jm(t,s))}}class Rd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Me(e.mutations.length===s.length);let o=function(){return ww}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Rd(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,De;function Mw(i){switch(i){default:return pe();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function wy(i){if(i===void 0)return Tr("GRPC error has no .code"),W.UNKNOWN;switch(i){case ot.OK:return W.OK;case ot.CANCELLED:return W.CANCELLED;case ot.UNKNOWN:return W.UNKNOWN;case ot.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ot.INTERNAL:return W.INTERNAL;case ot.UNAVAILABLE:return W.UNAVAILABLE;case ot.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ot.NOT_FOUND:return W.NOT_FOUND;case ot.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ot.ABORTED:return W.ABORTED;case ot.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ot.DATA_LOSS:return W.DATA_LOSS;default:return pe()}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new Wi([4294967295,4294967295],0);function qm(i){const e=Fw().encode(i),t=new qg;return t.update(e),new Uint8Array(t.digest())}function Hm(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Wi([t,s],0),new Wi([o,u],0)]}class Cd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new _a(`Invalid padding: ${t}`);if(s<0)throw new _a(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new _a(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Wi.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(Wi.fromNumber(s)));return o.compare(bw)===1&&(o=new Wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=qm(e),[s,o]=Hm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Cd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=qm(e),[s,o]=Hm(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Qu(me.min(),o,new Je(Pe),Ir(),Re())}}class Ma{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ma(s,t,Re(),Re(),Re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class Ty{constructor(e,t){this.targetId=e,this.me=t}}class Iy{constructor(e,t,s=Ct.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Wm{constructor(){this.fe=0,this.ge=Km(),this.pe=Ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Re(),t=Re(),s=Re();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe()}}),new Ma(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=Km()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Uw{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ir(),this.qe=au(),this.Qe=au(),this.Ke=new Je(Pe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(nd(u))if(s===0){const h=new he(u.path);this.We(t,h,Mt.newNoDocument(h,me.min()))}else Me(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),g=m?this.et(m,e,h):1;if(g!==0){this.He(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=di(s).toUint8Array()}catch(g){if(g instanceof Zg)return ro("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Cd(h,o,u)}catch(g){return ro(g instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Le.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&nd(m.target)){const g=new he(m.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,Mt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Re();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const v=this.Ye(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new Qu(e,t,this.Ke,this.ke,s);return this.ke=Ir(),this.qe=au(),this.Qe=au(),this.Ke=new Je(Pe),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Wm,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new pt(Pe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pt(Pe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Wm),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function au(){return new Je(he.comparator)}function Km(){return new Je(he.comparator)}const zw={asc:"ASCENDING",desc:"DESCENDING"},jw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bw={and:"AND",or:"OR"};class $w{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function id(i,e){return i.useProto3Json||Bu(e)?e:{value:e}}function ku(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sy(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function qw(i,e){return ku(i,e.toTimestamp())}function Kn(i){return Me(!!i),me.fromTimestamp(function(t){const s=hi(t);return new ft(s.seconds,s.nanos)}(i))}function Pd(i,e){return sd(i,e).canonicalString()}function sd(i,e){const t=function(o){return new Qe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Ay(i){const e=Qe.fromString(i);return Me(Ny(e)),e}function od(i,e){return Pd(i.databaseId,e.path)}function jh(i,e){const t=Ay(e);if(t.get(1)!==i.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new he(Cy(t))}function Ry(i,e){return Pd(i.databaseId,e)}function Hw(i){const e=Ay(i);return e.length===4?Qe.emptyPath():Cy(e)}function ad(i){return new Qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Cy(i){return Me(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Gm(i,e,t){return{name:od(i,e),fields:t.value.mapValue.fields}}function Ww(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(Me(w===void 0||typeof w=="string"),Ct.fromBase64String(w||"")):(Me(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Ct.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?W.UNKNOWN:wy(v.code);return new ae(w,v.message||"")}(h);t=new Iy(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=jh(i,s.document.name),u=Kn(s.document.updateTime),h=s.document.createTime?Kn(s.document.createTime):me.min(),m=new gn({mapValue:{fields:s.document.fields}}),g=Mt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new mu(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=jh(i,s.document),u=s.readTime?Kn(s.readTime):me.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new mu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=jh(i,s.document),u=s.removedTargetIds||[];t=new mu([],u,o,null)}else{if(!("filter"in e))return pe();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new xw(o,u),m=s.targetId;t=new Ty(m,h)}}return t}function Kw(i,e){let t;if(e instanceof xa)t={update:Gm(i,e.key,e.value)};else if(e instanceof Ey)t={delete:od(i,e.key)};else if(e instanceof Ji)t={update:Gm(i,e.key,e.data),updateMask:nT(e.fieldMask)};else{if(!(e instanceof Vw))return pe();t={verify:od(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Cu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof ka)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Na)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Pu)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw pe()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:qw(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe()}(i,e.precondition)),t}function Gw(i,e){return i&&i.length>0?(Me(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Kn(o.updateTime):Kn(u);return h.isEqual(me.min())&&(h=Kn(u)),new kw(h,o.transformResults||[])}(t,e))):[]}function Qw(i,e){return{documents:[Ry(i,e.path)]}}function Yw(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Ry(i,o);const u=function(v){if(v.length!==0)return ky(Xn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(b){return{field:Qs(b.field),direction:Zw(b.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=id(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:o}}function Xw(i){let e=Hw(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Me(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(k){const b=Py(k);return b instanceof Xn&&ry(b)?b.getFilters():[b]}(t.where));let h=[];t.orderBy&&(h=function(k){return k.map(b=>function(Y){return new Ru(Ys(Y.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Y.direction))}(b))}(t.orderBy));let m=null;t.limit&&(m=function(k){let b;return b=typeof k=="object"?k.value:k,Bu(b)?null:b}(t.limit));let g=null;t.startAt&&(g=function(k){const b=!!k.before,B=k.values||[];return new Au(B,b)}(t.startAt));let v=null;return t.endAt&&(v=function(k){const b=!k.before,B=k.values||[];return new Au(B,b)}(t.endAt)),mw(e,o,h,u,m,"F",g,v)}function Jw(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Py(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ys(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ys(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ys(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ys(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(i):i.fieldFilter!==void 0?function(t){return dt.create(Ys(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Xn.create(t.compositeFilter.filters.map(s=>Py(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe()}}(t.compositeFilter.op))}(i):pe()}function Zw(i){return zw[i]}function eT(i){return jw[i]}function tT(i){return Bw[i]}function Qs(i){return{fieldPath:i.canonicalString()}}function Ys(i){return Rt.fromServerFormat(i.fieldPath)}function ky(i){return i instanceof dt?function(t){if(t.op==="=="){if(xm(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NAN"}};if(Lm(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xm(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NAN"}};if(Lm(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(t.field),op:eT(t.op),value:t.value}}}(i):i instanceof Xn?function(t){const s=t.getFilters().map(o=>ky(o));return s.length===1?s[0]:{compositeFilter:{op:tT(t.op),filters:s}}}(i):pe()}function nT(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ny(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,s,o,u=me.min(),h=me.min(),m=Ct.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.ht=e}}function iT(i){const e=Xw({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.ln=new oT}addToCollectionParentIndex(e,t){return this.ln.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(ci.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class oT{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(Qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(41943040,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ao(0)}static Qn(){return new ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym([i,e],[t,s]){const o=Pe(i,t);return o===0?Pe(e,s):o}class aT{constructor(e){this.Gn=e,this.buffer=new pt(Ym),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ym(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lT{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mo(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await po(t)}await this.Yn(3e5)})}}class uT{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return z.resolve(ju.oe);const s=new aT(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Qm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qm):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,m,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(k=>(k>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),o=this.params.maximumSequenceNumbersToCollect):o=k,h=Date.now(),this.nthSequenceNumber(e,o))).next(k=>(s=k,m=Date.now(),this.removeTargets(e,s,t))).next(k=>(u=k,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(k=>(v=Date.now(),Ks()<=Ae.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${k} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:k})))}}function cT(i,e){return new uT(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.changes=new Xi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ta(s.mutation,o,Vn.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Re()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Re()){const o=Hi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=ya();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Hi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Re()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Ir();const h=wa(),m=function(){return wa()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Ji)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ta(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var k;return m.set(v,new dT(w,(k=h.get(v))!==null&&k!==void 0?k:null))}),m))}recalculateAndSaveOverlays(e,t){const s=wa();let o=new Je((h,m)=>h-m),u=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||Vn.empty();w=m.applyToLocalView(v,w),s.set(g,w);const k=(o.get(m.batchId)||Re()).add(g);o=o.insert(m.batchId,k)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,k=dy();w.forEach(b=>{if(!u.has(b)){const B=_y(t.get(b),s.get(b));B!==null&&k.set(b,B),u=u.add(b)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,k))}return z.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):z.resolve(Hi());let m=-1,g=u;return h.next(v=>z.forEach(v,(w,k)=>(m<k.largestBatchId&&(m=k.largestBatchId),u.get(w)?z.resolve():this.remoteDocumentCache.getEntry(e,w).next(b=>{g=g.insert(w,b)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Re())).next(w=>({batchId:m,changes:hy(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(s=>{let o=ya();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ya();return this.indexManager.getCollectionParents(e,u).next(m=>z.forEach(m,g=>{const v=function(k,b){return new qu(b,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((k,b)=>{h=h.insert(k,b)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))});let m=ya();return h.forEach((g,v)=>{const w=u.get(g);w!==void 0&&Ta(w.mutation,v,Vn.empty(),ft.now()),Wu(t,v)&&(m=m.insert(g,v))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return z.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Kn(o.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:iT(o.bundledQuery),readTime:Kn(o.readTime)}}(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(){this.overlays=new Je(he.comparator),this.Er=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Hi();return z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){const o=Hi(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Hi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Hi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return z.resolve(m)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new Lw(t,s));let u=this.Er.get(t);u===void 0&&(u=Re(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.dr=new pt(Et.Ar),this.Rr=new pt(Et.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new Et(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new he(new Qe([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new he(new Qe([])),s=new Et(t,e),o=new Et(t,e+1);let u=Re();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return he.comparator(e.key,t.key)||Pe(e.br,t.br)}static Vr(e,t){return Pe(e.br,t.br)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new pt(Et.Ar)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new Ow(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.vr=this.vr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return z.resolve(h)}lookupMutationBatch(e,t){return z.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const m=this.Cr(h.br);u.push(m)}),z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(Pe);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),z.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new Et(new he(u),0);let m=new pt(Pe);return this.vr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.br)),!0)},h),z.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Me(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return z.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new Et(t,0),o=this.vr.firstAfterOrEqual(s);return z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e){this.Nr=e,this.docs=function(){return new Je(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Ir();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))}),z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ir();const h=t.path,m=new he(h.child("")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||GE(KE(w),s)<=0||(o.has(w.key)||Wu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe()}Lr(e,t){return z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new vT(this)}getSize(e){return z.resolve(this.size)}}class vT extends hT{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),z.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.persistence=e,this.Br=new Xi(t=>Id(t),Sd),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.kr=0,this.qr=new kd,this.targetCount=0,this.Qr=ao.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),z.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ao(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Un(t),z.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Br.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),z.waitFor(u).next(()=>o)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),z.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t){this.Kr={},this.overlays={},this.$r=new ju(0),this.Ur=!1,this.Ur=!0,this.Wr=new gT,this.referenceDelegate=e(this),this.Gr=new ET(this),this.indexManager=new sT,this.remoteDocumentCache=function(o){return new _T(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new rT(t),this.jr=new pT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new yT(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new wT(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return z.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class wT extends YE{constructor(e){super(),this.currentSequenceNumber=e}}class Nd{constructor(e){this.persistence=e,this.Zr=new kd,this.Xr=null}static ei(e){return new Nd(e)}get ti(){if(this.Xr)return this.Xr;throw pe()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),z.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ti,s=>{const o=he.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,me.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return z.or([()=>z.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Nu{constructor(e,t){this.persistence=e,this.ri=new Xi(s=>ZE(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=cT(this,t)}static ei(e,t){return new Nu(e,t)}Hr(){}Jr(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return z.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?z.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,me.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=du(e.data.value)),t}ir(e,t,s){return z.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Re(),o=Re();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Dd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return E0()?8:XE(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new TT;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Ks()<=Ae.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Gs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),z.resolve()):(Ks()<=Ae.DEBUG&&te("QueryEngine","Query:",Gs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Ks()<=Ae.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Gs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wn(t))):z.resolve())}Xi(e,t){if(Um(t))return z.resolve(null);let s=Wn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=rd(t,null,"F"),s=Wn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Re(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.rs(t,m);return this.ss(t,v,h,g.readTime)?this.Xi(e,rd(t,null,"F")):this.os(e,v,t,g)}))})))}es(e,t,s,o){return Um(t)||o.isEqual(me.min())?z.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?z.resolve(null):(Ks()<=Ae.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Gs(t)),this.os(e,h,t,WE(o,-1)).next(m=>m))})}rs(e,t){let s=new pt(uy(e));return t.forEach((o,u)=>{Wu(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return Ks()<=Ae.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Gs(t)),this.Zi.getDocumentsMatchingQuery(e,t,ci.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Je(Pe),this.cs=new Xi(u=>Id(u),Sd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fT(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function AT(i,e,t,s){return new ST(i,e,t,s)}async function Vy(i,e){const t=ge(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Re();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:m}))})})}function RT(i,e){const t=ge(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(m,g,v,w){const k=v.batch,b=k.keys();let B=z.resolve();return b.forEach(Y=>{B=B.next(()=>w.getEntry(g,Y)).next(X=>{const H=v.docVersions.get(Y);Me(H!==null),X.version.compareTo(H)<0&&(k.applyToRemoteDocument(X,v),X.isValidDocument()&&(X.setReadTime(v.commitVersion),w.addEntry(X)))})}),B.next(()=>m.mutationQueue.removeMutationBatch(g,k))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Re();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Oy(i){const e=ge(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function CT(i,e){const t=ge(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const m=[];e.targetChanges.forEach((w,k)=>{const b=o.get(k);if(!b)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,k).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,k)));let B=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(k)!==null?B=B.withResumeToken(Ct.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,s)),o=o.insert(k,B),function(X,H,ve){return X.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=3e8?!0:ve.addedDocuments.size+ve.modifiedDocuments.size+ve.removedDocuments.size>0}(b,B,w)&&m.push(t.Gr.updateTargetData(u,B))});let g=Ir(),v=Re();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(PT(u,h,e.documentUpdates).next(w=>{g=w.Is,v=w.Es})),!s.isEqual(me.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(k=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return z.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.us=o,u))}function PT(i,e,t){let s=Re(),o=Re();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Ir();return t.forEach((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(me.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):te("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)}),{Is:h,Es:o}})}function kT(i,e){const t=ge(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function NT(i,e){const t=ge(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,z.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ni(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function ld(i,e,t){const s=ge(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!mo(h))throw h;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function Xm(i,e,t){const s=ge(i);let o=me.min(),u=Re();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const k=ge(g),b=k.cs.get(w);return b!==void 0?z.resolve(k.us.get(b)):k.Gr.getTargetData(v,w)}(s,h,Wn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:me.min(),t?u:Re())).next(m=>(DT(s,_w(e),m),{documents:m,ds:u})))}function DT(i,e,t){let s=i.ls.get(e)||me.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class Jm{constructor(){this.activeTargetIds=Sw()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VT{constructor(){this._o=new Jm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Jm,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lu=null;function Bh(){return lu===null?lu=function(){return 268435456+Math.round(2147483648*Math.random())}():lu++,"0x"+lu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="WebChannelConnection";class MT extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const m=Bh(),g=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,u,h),this.Bo(t,g,v,o).then(w=>(te("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw ro("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,s,o,u,h,m){return this.Oo(t,s,o,u,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=LT[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const u=Bh();return new Promise((h,m)=>{const g=new Hg;g.setWithCredentials(!0),g.listenOnce(Wg.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case hu.NO_ERROR:const w=g.getResponseJson();te(Lt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case hu.TIMEOUT:te(Lt,`RPC '${e}' ${u} timed out`),m(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case hu.HTTP_ERROR:const k=g.getStatus();if(te(Lt,`RPC '${e}' ${u} failed with status:`,k,"response text:",g.getResponseText()),k>0){let b=g.getResponseJson();Array.isArray(b)&&(b=b[0]);const B=b==null?void 0:b.error;if(B&&B.status&&B.message){const Y=function(H){const ve=H.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ve)>=0?ve:W.UNKNOWN}(B.status);m(new ae(Y,B.message))}else m(new ae(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ae(W.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{te(Lt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);te(Lt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}qo(e,t,s){const o=Bh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Qg(),m=Gg(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");te(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const k=h.createWebChannel(w,g);let b=!1,B=!1;const Y=new xT({Eo:H=>{B?te(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(b||(te(Lt,`Opening RPC '${e}' stream ${o} transport.`),k.open(),b=!0),te(Lt,`RPC '${e}' stream ${o} sending:`,H),k.send(H))},Ao:()=>k.close()}),X=(H,ve,_e)=>{H.listen(ve,ye=>{try{_e(ye)}catch(we){setTimeout(()=>{throw we},0)}})};return X(k,ga.EventType.OPEN,()=>{B||(te(Lt,`RPC '${e}' stream ${o} transport opened.`),Y.So())}),X(k,ga.EventType.CLOSE,()=>{B||(B=!0,te(Lt,`RPC '${e}' stream ${o} transport closed`),Y.Do())}),X(k,ga.EventType.ERROR,H=>{B||(B=!0,ro(Lt,`RPC '${e}' stream ${o} transport errored:`,H),Y.Do(new ae(W.UNAVAILABLE,"The operation could not be completed")))}),X(k,ga.EventType.MESSAGE,H=>{var ve;if(!B){const _e=H.data[0];Me(!!_e);const ye=_e,we=(ye==null?void 0:ye.error)||((ve=ye[0])===null||ve===void 0?void 0:ve.error);if(we){te(Lt,`RPC '${e}' stream ${o} received error:`,we);const We=we.status;let Se=function(A){const C=ot[A];if(C!==void 0)return wy(C)}(We),N=we.message;Se===void 0&&(Se=W.INTERNAL,N="Unknown error status: "+We+" with message "+we.message),B=!0,Y.Do(new ae(Se,N)),k.close()}else te(Lt,`RPC '${e}' stream ${o} received:`,_e),Y.vo(_e)}}),X(m,Kg.STAT_EVENT,H=>{H.stat===Jh.PROXY?te(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===Jh.NOPROXY&&te(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{Y.bo()},0),Y}}function $h(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(i){return new $w(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t,s,o,u,h,m,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ly(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Tr(t.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ae(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FT extends xy{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Ww(this.serializer,e),s=function(u){if(!("targetChange"in u))return me.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?me.min():h.readTime?Kn(h.readTime):me.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=ad(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=nd(g)?{documents:Qw(u,g)}:{query:Yw(u,g).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=Sy(u,h.resumeToken);const v=id(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(me.min())>0){m.readTime=ku(u,h.snapshotVersion.toTimestamp());const v=id(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=Jw(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=ad(this.serializer),t.removeTarget=e,this.c_(t)}}class bT extends xy{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Gw(e.writeResults,e.commitTime),s=Kn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=ad(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Kw(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,sd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(W.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,sd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(W.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class zT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Tr(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{Zi(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=ge(g);v.k_.add(4),await Fa(v),v.K_.set("Unknown"),v.k_.delete(4),await Xu(v)}(this))})}),this.K_=new zT(s,o)}}async function Xu(i){if(Zi(i))for(const e of i.q_)await e(!0)}async function Fa(i){for(const e of i.q_)await e(!1)}function My(i,e){const t=ge(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),xd(t)?Ld(t):go(t).s_()&&Od(t,e))}function Vd(i,e){const t=ge(i),s=go(t);t.B_.delete(e),s.s_()&&Fy(t,e),t.B_.size===0&&(s.s_()?s.a_():Zi(t)&&t.K_.set("Unknown"))}function Od(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}go(i).V_(e)}function Fy(i,e){i.U_.xe(e),go(i).m_(e)}function Ld(i){i.U_=new Uw({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),go(i).start(),i.K_.F_()}function xd(i){return Zi(i)&&!go(i).i_()&&i.B_.size>0}function Zi(i){return ge(i).k_.size===0}function by(i){i.U_=void 0}async function BT(i){i.K_.set("Online")}async function $T(i){i.B_.forEach((e,t)=>{Od(i,e)})}async function qT(i,e){by(i),xd(i)?(i.K_.O_(e),Ld(i)):i.K_.set("Unknown")}async function HT(i,e,t){if(i.K_.set("Online"),e instanceof Iy&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.B_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.B_.delete(m),o.U_.removeTarget(m))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Du(i,s)}else if(e instanceof mu?i.U_.$e(e):e instanceof Ty?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(me.min()))try{const s=await Oy(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.B_.get(v);w&&u.B_.set(v,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,v)=>{const w=u.B_.get(g);if(!w)return;u.B_.set(g,w.withResumeToken(Ct.EMPTY_BYTE_STRING,w.snapshotVersion)),Fy(u,g);const k=new ni(w.target,g,v,w.sequenceNumber);Od(u,k)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await Du(i,s)}}async function Du(i,e,t){if(!mo(e))throw e;i.k_.add(1),await Fa(i),i.K_.set("Offline"),t||(t=()=>Oy(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await Xu(i)})}function Uy(i,e){return e().catch(t=>Du(i,t,e))}async function Ju(i){const e=ge(i),t=pi(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;WT(e);)try{const o=await kT(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,KT(e,o)}catch(o){await Du(e,o)}zy(e)&&jy(e)}function WT(i){return Zi(i)&&i.L_.length<10}function KT(i,e){i.L_.push(e);const t=pi(i);t.s_()&&t.f_&&t.g_(e.mutations)}function zy(i){return Zi(i)&&!pi(i).i_()&&i.L_.length>0}function jy(i){pi(i).start()}async function GT(i){pi(i).w_()}async function QT(i){const e=pi(i);for(const t of i.L_)e.g_(t.mutations)}async function YT(i,e,t){const s=i.L_.shift(),o=Rd.from(s,e,t);await Uy(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await Ju(i)}async function XT(i,e){e&&pi(i).f_&&await async function(s,o){if(function(h){return Mw(h)&&h!==W.ABORTED}(o.code)){const u=s.L_.shift();pi(s).__(),await Uy(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Ju(s)}}(i,e),zy(i)&&jy(i)}async function eg(i,e){const t=ge(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=Zi(t);t.k_.add(3),await Fa(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Xu(t)}async function JT(i,e){const t=ge(i);e?(t.k_.delete(2),await Xu(t)):e||(t.k_.add(2),await Fa(t),t.K_.set("Unknown"))}function go(i){return i.W_||(i.W_=function(t,s,o){const u=ge(t);return u.b_(),new FT(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:BT.bind(null,i),mo:$T.bind(null,i),po:qT.bind(null,i),R_:HT.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),xd(i)?Ld(i):i.K_.set("Unknown")):(await i.W_.stop(),by(i))})),i.W_}function pi(i){return i.G_||(i.G_=function(t,s,o){const u=ge(t);return u.b_(),new bT(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:GT.bind(null,i),po:XT.bind(null,i),p_:QT.bind(null,i),y_:YT.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await Ju(i)):(await i.G_.stop(),i.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${i.L_.length} pending writes`),i.L_=[]))})),i.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Md(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fd(i,e){if(Tr("AsyncQueue",`${e}: ${i}`),mo(i))return new ae(W.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{static emptySet(e){return new Js(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=ya(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Js;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.z_=new Je(he.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):pe():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class lo{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new lo(e,t,Js.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class eI{constructor(){this.queries=ng(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=ge(t),u=o.queries;o.queries=ng(),u.forEach((h,m)=>{for(const g of m.J_)g.onError(s)})})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function ng(){return new Xi(i=>ly(i),Hu)}async function tI(i,e){const t=ge(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new ZT,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Fd(h,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&bd(t)}async function nI(i,e){const t=ge(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function rI(i,e){const t=ge(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(o)&&(s=!0);h.H_=o}}s&&bd(t)}function iI(i,e,t){const s=ge(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function bd(i){i.X_.forEach(e=>{e.next()})}var ud,rg;(rg=ud||(ud={})).na="default",rg.Cache="cache";class sI{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new lo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ud.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.key=e}}class $y{constructor(e){this.key=e}}class oI{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Re(),this.mutatedKeys=Re(),this.Va=uy(e),this.ma=new Js(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new tg,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,k)=>{const b=o.get(w),B=Wu(this.query,k)?k:null,Y=!!b&&this.mutatedKeys.has(b.key),X=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let H=!1;b&&B?b.data.isEqual(B.data)?Y!==X&&(s.track({type:3,doc:B}),H=!0):this.ya(b,B)||(s.track({type:2,doc:B}),H=!0,(g&&this.Va(B,g)>0||v&&this.Va(B,v)<0)&&(m=!0)):!b&&B?(s.track({type:0,doc:B}),H=!0):b&&!B&&(s.track({type:1,doc:b}),H=!0,(g||v)&&(m=!0)),H&&(B?(h=h.add(B),u=X?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,k)=>function(B,Y){const X=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return X(B)-X(Y)}(w.type,k.type)||this.Va(w.doc,k.doc)),this.wa(s),o=o!=null&&o;const m=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,v=g!==this.Aa;return this.Aa=g,h.length!==0||v?{snapshot:new lo(this.query,e.ma,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new tg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Re(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new $y(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new By(s))}),t}va(e){this.da=e.ds,this.Ra=Re();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return lo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class aI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class lI{constructor(e){this.key=e,this.Fa=!1}}class uI{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Xi(m=>ly(m),Hu),this.Oa=new Map,this.Na=new Set,this.La=new Je(he.comparator),this.Ba=new Map,this.ka=new kd,this.qa={},this.Qa=new Map,this.Ka=ao.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function cI(i,e,t=!0){const s=Qy(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await qy(s,e,t,!0),o}async function hI(i,e){const t=Qy(i);await qy(t,e,!0,!1)}async function qy(i,e,t,s){const o=await NT(i.localStore,Wn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await dI(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&My(i.remoteStore,o),m}async function dI(i,e,t,s,o){i.Ua=(k,b,B)=>async function(X,H,ve,_e){let ye=H.view.ga(ve);ye.ss&&(ye=await Xm(X.localStore,H.query,!1).then(({documents:N})=>H.view.ga(N,ye)));const we=_e&&_e.targetChanges.get(H.targetId),We=_e&&_e.targetMismatches.get(H.targetId)!=null,Se=H.view.applyChanges(ye,X.isPrimaryClient,we,We);return sg(X,H.targetId,Se.ba),Se.snapshot}(i,k,b,B);const u=await Xm(i.localStore,e,!0),h=new oI(e,u.ds),m=h.ga(u.documents),g=Ma.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);sg(i,t,v.ba);const w=new aI(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function fI(i,e,t){const s=ge(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!Hu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ld(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Vd(s.remoteStore,o.targetId),cd(s,o.targetId)}).catch(po)):(cd(s,o.targetId),await ld(s.localStore,o.targetId,!0))}async function pI(i,e){const t=ge(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Vd(t.remoteStore,s.targetId))}async function mI(i,e,t){const s=TI(i);try{const o=await function(h,m){const g=ge(h),v=ft.now(),w=m.reduce((B,Y)=>B.add(Y.key),Re());let k,b;return g.persistence.runTransaction("Locally write mutations","readwrite",B=>{let Y=Ir(),X=Re();return g.hs.getEntries(B,w).next(H=>{Y=H,Y.forEach((ve,_e)=>{_e.isValidDocument()||(X=X.add(ve))})}).next(()=>g.localDocuments.getOverlayedDocuments(B,Y)).next(H=>{k=H;const ve=[];for(const _e of m){const ye=Dw(_e,k.get(_e.key).overlayedDocument);ye!=null&&ve.push(new Ji(_e.key,ye,ey(ye.value.mapValue),Er.exists(!0)))}return g.mutationQueue.addMutationBatch(B,v,ve,m)}).next(H=>{b=H;const ve=H.applyToLocalDocumentSet(k,X);return g.documentOverlayCache.saveOverlays(B,H.batchId,ve)})}).then(()=>({batchId:b.batchId,changes:hy(k)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let v=h.qa[h.currentUser.toKey()];v||(v=new Je(Pe)),v=v.insert(m,g),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await ba(s,o.changes),await Ju(s.remoteStore)}catch(o){const u=Fd(o,"Failed to persist write");t.reject(u)}}async function Hy(i,e){const t=ge(i);try{const s=await CT(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ba.get(u);h&&(Me(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Me(h.Fa):o.removedDocuments.size>0&&(Me(h.Fa),h.Fa=!1))}),await ba(t,s,e)}catch(s){await po(s)}}function ig(i,e,t){const s=ge(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=ge(h);g.onlineState=m;let v=!1;g.queries.forEach((w,k)=>{for(const b of k.J_)b.ea(m)&&(v=!0)}),v&&bd(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gI(i,e,t){const s=ge(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),u=o&&o.key;if(u){let h=new Je(he.comparator);h=h.insert(u,Mt.newNoDocument(u,me.min()));const m=Re().add(u),g=new Qu(me.min(),new Map,new Je(Pe),h,m);await Hy(s,g),s.La=s.La.remove(u),s.Ba.delete(e),Ud(s)}else await ld(s.localStore,e,!1).then(()=>cd(s,e,t)).catch(po)}async function yI(i,e){const t=ge(i),s=e.batch.batchId;try{const o=await RT(t.localStore,e);Ky(t,s,null),Wy(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ba(t,o)}catch(o){await po(o)}}async function _I(i,e,t){const s=ge(i);try{const o=await function(h,m){const g=ge(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next(k=>(Me(k!==null),w=k.keys(),g.mutationQueue.removeMutationBatch(v,k))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);Ky(s,e,t),Wy(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ba(s,o)}catch(o){await po(o)}}function Wy(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function Ky(i,e,t){const s=ge(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function cd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||Gy(i,s)})}function Gy(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(Vd(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),Ud(i))}function sg(i,e,t){for(const s of t)s instanceof By?(i.ka.addReference(s.key,e),vI(i,s)):s instanceof $y?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||Gy(i,s.key)):pe()}function vI(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),Ud(i))}function Ud(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new he(Qe.fromString(e)),s=i.Ka.next();i.Ba.set(s,new lI(t)),i.La=i.La.insert(t,s),My(i.remoteStore,new ni(Wn(ay(t.path)),s,"TargetPurposeLimboResolution",ju.oe))}}async function ba(i,e,t){const s=ge(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,g)=>{h.push(s.Ua(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const k=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,k?"current":"not-current")}if(v){o.push(v);const k=Dd.zi(g.targetId,v);u.push(k)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,v){const w=ge(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",k=>z.forEach(v,b=>z.forEach(b.Wi,B=>w.persistence.referenceDelegate.addReference(k,b.targetId,B)).next(()=>z.forEach(b.Gi,B=>w.persistence.referenceDelegate.removeReference(k,b.targetId,B)))))}catch(k){if(!mo(k))throw k;te("LocalStore","Failed to update sequence numbers: "+k)}for(const k of v){const b=k.targetId;if(!k.fromCache){const B=w.us.get(b),Y=B.snapshotVersion,X=B.withLastLimboFreeSnapshotVersion(Y);w.us=w.us.insert(b,X)}}}(s.localStore,u))}async function EI(i,e){const t=ge(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await Vy(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(g=>{g.reject(new ae(W.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ba(t,s.Ts)}}function wI(i,e){const t=ge(i),s=t.Ba.get(e);if(s&&s.Fa)return Re().add(s.key);{let o=Re();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const m=t.xa.get(h);o=o.unionWith(m.view.fa)}return o}}function Qy(i){const e=ge(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gI.bind(null,e),e.Ma.R_=rI.bind(null,e.eventManager),e.Ma.Wa=iI.bind(null,e.eventManager),e}function TI(i){const e=ge(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_I.bind(null,e),e}class Vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yu(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return AT(this.persistence,new IT,e.initialUser,this.serializer)}ja(e){return new Dy(Nd.ei,this.serializer)}za(e){return new VT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vu.provider={build:()=>new Vu};class II extends Vu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Me(this.persistence.referenceDelegate instanceof Nu);const s=this.persistence.referenceDelegate.garbageCollector;return new lT(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new Dy(s=>Nu.ei(s,t),this.serializer)}}class hd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ig(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=EI.bind(null,this.syncEngine),await JT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eI}()}createDatastore(e){const t=Yu(e.databaseInfo.databaseId),s=function(u){return new MT(u)}(e.databaseInfo);return function(u,h,m,g){return new UT(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new jT(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>ig(this.syncEngine,t,0),function(){return Zm.p()?new Zm:new OT}())}createSyncEngine(e,t){return function(o,u,h,m,g,v,w){const k=new uI(o,u,h,m,g,v);return w&&(k.$a=!0),k}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=ge(o);te("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Fa(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hd.provider={build:()=>new hd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Tr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=xt.UNAUTHENTICATED,this.clientId=Xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Fd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function qh(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Vy(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function og(i,e){i.asyncQueue.verifyOperationInProgress();const t=await RI(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>eg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>eg(e.remoteStore,o)),i._onlineComponents=e}async function RI(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await qh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ro("Error using user provided cache. Falling back to memory cache: "+t),await qh(i,new Vu)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await qh(i,new II(void 0));return i._offlineComponents}async function Yy(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await og(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await og(i,new hd))),i._onlineComponents}function CI(i){return Yy(i).then(e=>e.syncEngine)}async function PI(i){const e=await Yy(i),t=e.eventManager;return t.onListen=cI.bind(null,e.syncEngine),t.onUnlisten=fI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pI.bind(null,e.syncEngine),t}function kI(i,e,t={}){const s=new ai;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,v){const w=new SI({next:b=>{w.eu(),h.enqueueAndForget(()=>nI(u,k)),b.fromCache&&g.source==="server"?v.reject(new ae(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(b)},error:b=>v.reject(b)}),k=new sI(m,w,{includeMetadataChanges:!0,ua:!0});return tI(u,k)}(await PI(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(i,e,t){if(!t)throw new ae(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function NI(i,e,t,s){if(e===!0&&s===!0)throw new ae(W.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function lg(i){if(!he.isDocumentKey(i))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function ug(i){if(he.isDocumentKey(i))throw new ae(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function zd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":pe()}function Ou(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zd(i);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xy((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zu{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new FE;switch(s.type){case"firstParty":return new jE(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=ag.get(t);s&&(te("ComponentProvider","Removing Datastore"),ag.delete(t),s.terminate())}(this),Promise.resolve()}}function DI(i,e,t,s={}){var o;const u=(i=Ou(i,Zu))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=xt.MOCK_USER;else{m=f0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new xt(v)}i._authCredentials=new bE(new Yg(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ec(this.firestore,e,this._query)}}class On{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new On(this.firestore,e,this._key)}}class li extends ec{constructor(e,t,s){super(e,t,ay(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new On(this.firestore,null,new he(e))}withConverter(e){return new li(this.firestore,e,this._path)}}function Zy(i,e,...t){if(i=Xt(i),Jy("collection","path",e),i instanceof Zu){const s=Qe.fromString(e,...t);return ug(s),new li(i,null,s)}{if(!(i instanceof On||i instanceof li))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return ug(s),new li(i.firestore,null,s)}}function VI(i,e,...t){if(i=Xt(i),arguments.length===1&&(e=Xg.newId()),Jy("doc","path",e),i instanceof Zu){const s=Qe.fromString(e,...t);return lg(s),new On(i,null,new he(s))}{if(!(i instanceof On||i instanceof li))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return lg(s),new On(i.firestore,i instanceof li?i.converter:null,new he(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ly(this,"async_queue_retry"),this.fu=()=>{const s=$h();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=$h();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=$h();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new ai;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!mo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Tr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Md.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(o),o}pu(){this.Au&&pe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class jd extends Zu{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new hg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hg(e),this._firestoreClient=void 0,await e}}}function OI(i,e){const t=typeof i=="object"?i:jg(),s=typeof i=="string"?i:"(default)",o=vd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=h0("firestore");u&&DI(o,...u)}return o}function e_(i){if(i._terminated)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||LI(i),i._firestoreClient}function LI(i){var e,t,s;const o=i._freezeSettings(),u=function(m,g,v,w){return new nw(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Xy(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new AI(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(Ct.fromBase64String(e))}catch(t){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new uo(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=/^__.*__$/;class MI{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ji(e,this.data,this.fieldMask,t,this.fieldTransforms):new xa(e,this.data,t,this.fieldTransforms)}}function n_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Hd{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Lu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(n_(this.Mu)&&xI.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class FI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Yu(e)}$u(e,t,s,o=!1){return new Hd({Mu:e,methodName:t,Ku:s,path:Rt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bI(i){const e=i._freezeSettings(),t=Yu(i._databaseId);return new FI(i._databaseId,!!e.ignoreUndefinedProperties,t)}function UI(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);o_("Data must be an object, but it was:",h,s);const m=i_(s,h);let g,v;if(u.merge)g=new Vn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const k of u.mergeFields){const b=zI(e,k,t);if(!h.contains(b))throw new ae(W.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);BI(w,b)||w.push(b)}g=new Vn(w),v=h.fieldTransforms.filter(k=>g.covers(k.field))}else g=null,v=h.fieldTransforms;return new MI(new gn(m),g,v)}function r_(i,e){if(s_(i=Xt(i)))return o_("Unsupported field value:",e,i),i_(i,e);if(i instanceof t_)return function(s,o){if(!n_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=r_(m,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Xt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Aw(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:ku(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ku(o.serializer,u)}}if(s instanceof $d)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof uo)return{bytesValue:Sy(o.serializer,s._byteString)};if(s instanceof On){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Pd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof qd)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.qu("VectorValues must only contain numeric values.");return Ad(m.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${zd(s)}`)}(i,e)}function i_(i,e){const t={};return Jg(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(i,(s,o)=>{const u=r_(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function s_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof $d||i instanceof uo||i instanceof On||i instanceof t_||i instanceof qd)}function o_(i,e,t){if(!s_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=zd(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function zI(i,e,t){if((e=Xt(e))instanceof Bd)return e._internalPath;if(typeof e=="string")return a_(i,e);throw Lu("Field path arguments must be of type string or ",i,!1,void 0,t)}const jI=new RegExp("[~\\*/\\[\\]]");function a_(i,e,t){if(e.search(jI)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Bd(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Lu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ae(W.INVALID_ARGUMENT,m+i+g)}function BI(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new On(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $I(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(u_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $I extends l_{data(){return super.data()}}function u_(i,e){return typeof e=="string"?a_(i,e):e instanceof Bd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ae(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class HI{convertValue(e,t="none"){switch(fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Yi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new qd(u)}convertGeoPoint(e){return new $d(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=$u(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const t=hi(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);Me(Ny(s));const o=new Ca(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||Tr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KI extends l_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(u_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class gu extends KI{data(e={}){return super.data(e)}}class GI{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new uu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new gu(this._firestore,this._userDataWriter,s.key,s,new uu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new gu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new uu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new gu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new uu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:QI(m.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function QI(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class YI extends HI{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new On(this.firestore,null,t)}}function XI(i){i=Ou(i,ec);const e=Ou(i.firestore,jd),t=e_(e),s=new YI(e);return qI(i._query),kI(t,i._query).then(o=>new GI(e,s,i,o))}function JI(i,e){const t=Ou(i.firestore,jd),s=VI(i),o=WI(i.converter,e);return ZI(t,[UI(bI(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Er.exists(!1))]).then(()=>s)}function ZI(i,e){return function(s,o){const u=new ai;return s.asyncQueue.enqueueAndForget(async()=>mI(await CI(s),o,u)),u.promise}(e_(i),e)}(function(e,t=!0){(function(o){fo=o})(ho),no(new Ki("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new jd(new UE(s.getProvider("auth-internal")),new $E(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ca(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),oi(Pm,"4.7.5",e),oi(Pm,"4.7.5","esm2017")})();function Wd(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function c_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const e1=c_,h_=new Oa("auth","Firebase",c_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new yd("@firebase/auth");function t1(i,...e){xu.logLevel<=Ae.WARN&&xu.warn(`Auth (${ho}): ${i}`,...e)}function yu(i,...e){xu.logLevel<=Ae.ERROR&&xu.error(`Auth (${ho}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(i,...e){throw Kd(i,...e)}function Gn(i,...e){return Kd(i,...e)}function d_(i,e,t){const s=Object.assign(Object.assign({},e1()),{[e]:t});return new Oa("auth","Firebase",s).create(e,{appName:i.name})}function ui(i){return d_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return h_.create(i,...e)}function de(i,e,...t){if(!i)throw Kd(e,...t)}function yr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw yu(e),new Error(e)}function Sr(i,e){i||yr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function n1(){return dg()==="http:"||dg()==="https:"}function dg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n1()||y0()||"connection"in navigator)?navigator.onLine:!0}function i1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this.shortDelay=e,this.longDelay=t,Sr(t>e,"Short delay should be less than long delay!"),this.isMobile=p0()||_0()}get(){return r1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(i,e){Sr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=new Ua(3e4,6e4);function es(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function mi(i,e,t,s,o={}){return p_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=La(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return g0()||(v.referrerPolicy="no-referrer"),f_.fetch()(m_(i,i.config.apiHost,t,m),v)})}async function p_(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},s1),e);try{const o=new l1(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw cu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw cu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw cu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw cu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw d_(i,w,v);Ln(i,w)}}catch(o){if(o instanceof Ar)throw o;Ln(i,"network-request-failed",{message:String(o)})}}async function tc(i,e,t,s,o={}){const u=await mi(i,e,t,s,o);return"mfaPendingCredential"in u&&Ln(i,"multi-factor-auth-required",{_serverResponse:u}),u}function m_(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Gd(i.config,o):`${i.config.apiScheme}://${o}`}function a1(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class l1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),o1.get())})}}function cu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Gn(i,e,s);return o.customData._tokenResponse=t,o}function fg(i){return i!==void 0&&i.enterprise!==void 0}class u1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return a1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function c1(i,e){return mi(i,"GET","/v2/recaptchaConfig",es(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(i,e){return mi(i,"POST","/v1/accounts:delete",e)}async function g_(i,e){return mi(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d1(i,e=!1){const t=Xt(i),s=await t.getIdToken(e),o=Qd(s);de(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ia(Hh(o.auth_time)),issuedAtTime:Ia(Hh(o.iat)),expirationTime:Ia(Hh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Hh(i){return Number(i)*1e3}function Qd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return yu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Lg(t);return o?JSON.parse(o):(yu("Failed to decode base64 JWT payload"),null)}catch(o){return yu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function pg(i){const e=Qd(i);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ar&&f1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function f1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ia(this.lastLoginAt),this.creationTime=Ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Da(i,g_(t,{idToken:s}));de(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?y_(u.providerUserInfo):[],m=g1(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,k={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new fd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,k)}async function m1(i){const e=Xt(i);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g1(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function y_(i){return i.map(e=>{var{providerId:t}=e,s=Wd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(i,e){const t=await p_(i,{},async()=>{const s=La({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=m_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",f_.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _1(i,e){return mi(i,"POST","/v2/accounts:revokeToken",es(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=pg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await y1(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Zs;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(de(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(de(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return yr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(i,e){de(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new fd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Da(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return d1(this,e)}reload(){return m1(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Mu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(gr(this.auth.app))return Promise.reject(ui(this.auth));const e=await this.getIdToken();return await Da(this,h1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const k=(s=t.displayName)!==null&&s!==void 0?s:void 0,b=(o=t.email)!==null&&o!==void 0?o:void 0,B=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,Y=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,H=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ve=(v=t.createdAt)!==null&&v!==void 0?v:void 0,_e=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ye,emailVerified:we,isAnonymous:We,providerData:Se,stsTokenManager:N}=t;de(ye&&N,e,"internal-error");const I=Zs.fromJSON(this.name,N);de(typeof ye=="string",e,"internal-error"),Xr(k,e.name),Xr(b,e.name),de(typeof we=="boolean",e,"internal-error"),de(typeof We=="boolean",e,"internal-error"),Xr(B,e.name),Xr(Y,e.name),Xr(X,e.name),Xr(H,e.name),Xr(ve,e.name),Xr(_e,e.name);const A=new _r({uid:ye,auth:e,email:b,emailVerified:we,displayName:k,isAnonymous:We,photoURL:Y,phoneNumber:B,tenantId:X,stsTokenManager:I,createdAt:ve,lastLoginAt:_e});return Se&&Array.isArray(Se)&&(A.providerData=Se.map(C=>Object.assign({},C))),H&&(A._redirectEventId=H),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Zs;o.updateFromServerResponse(t);const u=new _r({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Mu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];de(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?y_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Zs;m.updateFromIdToken(s);const g=new _r({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new fd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Map;function vr(i){Sr(i instanceof Function,"Expected a class definition");let e=mg.get(i);return e?(Sr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,mg.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}__.type="NONE";const gg=__;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(i,e,t){return`firebase:${i}:${e}:${t}`}class eo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=_u(this.userKey,o.apiKey,u),this.fullPersistenceKey=_u("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new eo(vr(gg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||vr(gg);const h=_u(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const k=_r._fromJSON(e,w);v!==u&&(m=k),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new eo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new eo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(v_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(S_(e))return"Blackberry";if(A_(e))return"Webos";if(E_(e))return"Safari";if((e.includes("chrome/")||w_(e))&&!e.includes("edge/"))return"Chrome";if(I_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function v_(i=Ft()){return/firefox\//i.test(i)}function E_(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w_(i=Ft()){return/crios\//i.test(i)}function T_(i=Ft()){return/iemobile/i.test(i)}function I_(i=Ft()){return/android/i.test(i)}function S_(i=Ft()){return/blackberry/i.test(i)}function A_(i=Ft()){return/webos/i.test(i)}function Yd(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function v1(i=Ft()){var e;return Yd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E1(){return v0()&&document.documentMode===10}function R_(i=Ft()){return Yd(i)||I_(i)||A_(i)||S_(i)||/windows phone/i.test(i)||T_(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(i,e=[]){let t;switch(i){case"Browser":t=yg(Ft());break;case"Worker":t=`${yg(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ho}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(i,e={}){return mi(i,"GET","/v2/passwordPolicy",es(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=6;class S1{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:I1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _g(this),this.idTokenSubscription=new _g(this),this.beforeStateQueue=new w1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await g_(this,{idToken:e}),s=await _r._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(gr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(gr(this.app))return Promise.reject(ui(this));const t=e?Xt(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return gr(this.app)?Promise.reject(ui(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return gr(this.app)?Promise.reject(ui(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T1(this),t=new S1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await _1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vr(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=C_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&t1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yo(i){return Xt(i)}class _g{constructor(e){this.auth=e,this.observer=null,this.addObserver=C0(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function R1(i){nc=i}function P_(i){return nc.loadJS(i)}function C1(){return nc.recaptchaEnterpriseScript}function P1(){return nc.gapiScript}function k1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class N1{constructor(){this.enterprise=new D1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class D1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const V1="recaptcha-enterprise",k_="NO_RECAPTCHA";class O1{constructor(e){this.type=V1,this.auth=yo(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{c1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new u1(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;fg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(k_)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new N1().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&fg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=C1();g.length!==0&&(g+=m),P_(g).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function vg(i,e,t,s=!1,o=!1){const u=new O1(i);let h;if(o)h=k_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Eg(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await vg(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await vg(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(i,e){const t=vd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Tu(u,e??{}))return o;Ln(o,"already-initialized")}return t.initialize({options:e})}function x1(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(vr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function M1(i,e,t){const s=yo(i);de(s._canInitEmulator,s,"emulator-config-failed"),de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=N_(e),{host:h,port:m}=F1(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),b1()}function N_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function F1(i){const e=N_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:wg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:wg(h)}}}function wg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function b1(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,t){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}}async function U1(i,e){return mi(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(i,e){return tc(i,"POST","/v1/accounts:signInWithPassword",es(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(i,e){return tc(i,"POST","/v1/accounts:signInWithEmailLink",es(i,e))}async function B1(i,e){return tc(i,"POST","/v1/accounts:signInWithEmailLink",es(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Xd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Va(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Va(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eg(e,t,"signInWithPassword",z1);case"emailLink":return j1(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eg(e,s,"signUpPassword",U1);case"emailLink":return B1(e,{idToken:t,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(i,e){return tc(i,"POST","/v1/accounts:signInWithIdp",es(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="http://localhost";class Qi extends Xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ln("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Wd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Qi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return to(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,to(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,to(e,t)}buildRequest(){const e={requestUri:$1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=La(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function H1(i){const e=pa(ma(i)).link,t=e?pa(ma(e)).deep_link_id:null,s=pa(ma(i)).deep_link_id;return(s?pa(ma(s)).link:null)||s||t||e||i}class Jd{constructor(e){var t,s,o,u,h,m;const g=pa(ma(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,k=q1((o=g.mode)!==null&&o!==void 0?o:null);de(v&&w&&k,"argument-error"),this.apiKey=v,this.operation=k,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=H1(e);try{return new Jd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.providerId=_o.PROVIDER_ID}static credential(e,t){return Va._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Jd.parseLink(t);return de(s,"argument-error"),Va._fromEmailAndCode(e,s.code,s.tenantId)}}_o.PROVIDER_ID="password";_o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends D_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends za{constructor(){super("facebook.com")}static credential(e){return Qi._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Zr.credential(t,s)}catch{return null}}}Zr.GOOGLE_SIGN_IN_METHOD="google.com";Zr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends za{constructor(){super("github.com")}static credential(e){return Qi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends za{constructor(){super("twitter.com")}static credential(e,t){return Qi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ti.credential(t,s)}catch{return null}}}ti.TWITTER_SIGN_IN_METHOD="twitter.com";ti.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await _r._fromIdTokenResponse(e,s,o),h=Tg(s);return new co({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Tg(s);return new co({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Tg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends Ar{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Fu(e,t,s,o)}}function V_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(i,u,e,s):u})}async function W1(i,e,t=!1){const s=await Da(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return co._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(i,e,t=!1){const{auth:s}=i;if(gr(s.app))return Promise.reject(ui(s));const o="reauthenticate";try{const u=await Da(i,V_(s,o,e,i),t);de(u.idToken,s,"internal-error");const h=Qd(u.idToken);de(h,s,"internal-error");const{sub:m}=h;return de(i.uid===m,s,"user-mismatch"),co._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Ln(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(i,e,t=!1){if(gr(i.app))return Promise.reject(ui(i));const s="signIn",o=await V_(i,s,e),u=await co._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function G1(i,e){return O_(yo(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q1(i){const e=yo(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Y1(i,e,t){return gr(i.app)?Promise.reject(ui(i)):G1(Xt(i),_o.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Q1(i),s})}function X1(i,e,t,s){return Xt(i).onIdTokenChanged(e,t,s)}function J1(i,e,t){return Xt(i).beforeAuthStateChanged(e,t)}function Z1(i,e,t,s){return Xt(i).onAuthStateChanged(e,t,s)}function eS(i){return Xt(i).signOut()}const bu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bu,"1"),this.storage.removeItem(bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=1e3,nS=10;class x_ extends L_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=R_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);E1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,nS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},tS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}x_.type="LOCAL";const rS=x_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends L_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}M_.type="SESSION";const F_=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new rc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await iS(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=Zd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(k){const b=k;if(b.data.eventId===v)switch(b.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(b.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}function oS(i){Qn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function aS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lS(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function uS(){return b_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="firebaseLocalStorageDb",cS=1,Uu="firebaseLocalStorage",z_="fbase_key";class ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ic(i,e){return i.transaction([Uu],e?"readwrite":"readonly").objectStore(Uu)}function hS(){const i=indexedDB.deleteDatabase(U_);return new ja(i).toPromise()}function pd(){const i=indexedDB.open(U_,cS);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Uu,{keyPath:z_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Uu)?e(s):(s.close(),await hS(),e(await pd()))})})}async function Ig(i,e,t){const s=ic(i,!0).put({[z_]:e,value:t});return new ja(s).toPromise()}async function dS(i,e){const t=ic(i,!1).get(e),s=await new ja(t).toPromise();return s===void 0?null:s.value}function Sg(i,e){const t=ic(i,!0).delete(e);return new ja(t).toPromise()}const fS=800,pS=3;class j_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>pS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(uS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await aS(),!this.activeServiceWorker)return;this.sender=new sS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pd();return await Ig(e,bu,"1"),await Sg(e,bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ig(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>dS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=ic(o,!1).getAll();return new ja(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j_.type="LOCAL";const mS=j_;new Ua(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(i,e){return e?vr(e):(de(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends Xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return to(e,this._buildIdpRequest())}_linkToIdToken(e,t){return to(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return to(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yS(i){return O_(i.auth,new ef(i),i.bypassAuthState)}function _S(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),K1(t,new ef(i),i.bypassAuthState)}async function vS(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),W1(t,new ef(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yS;case"linkViaPopup":case"linkViaRedirect":return vS;case"reauthViaPopup":case"reauthViaRedirect":return _S;default:Ln(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=new Ua(2e3,1e4);class Xs extends B_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=Zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ES.get())};e()}}Xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="pendingRedirect",vu=new Map;class TS extends B_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=vu.get(this.auth._key());if(!e){try{const s=await IS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}vu.set(this.auth._key(),e)}return this.bypassAuthState||vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IS(i,e){const t=RS(e),s=AS(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function SS(i,e){vu.set(i._key(),e)}function AS(i){return vr(i._redirectPersistence)}function RS(i){return _u(wS,i.config.apiKey,i.name)}async function CS(i,e,t=!1){if(gr(i.app))return Promise.reject(ui(i));const s=yo(i),o=gS(s,e),h=await new TS(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=10*60*1e3;class kS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!$_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Gn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ag(e))}saveEventToCache(e){this.cachedEventUids.add(Ag(e)),this.lastProcessedEventTime=Date.now()}}function Ag(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function $_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NS(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(i,e={}){return mi(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OS=/^https?/;async function LS(i){if(i.config.emulator)return;const{authorizedDomains:e}=await DS(i);for(const t of e)try{if(xS(t))return}catch{}Ln(i,"unauthorized-domain")}function xS(i){const e=dd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!OS.test(t))return!1;if(VS.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=new Ua(3e4,6e4);function Rg(){const i=Qn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function FS(i){return new Promise((e,t)=>{var s,o,u;function h(){Rg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rg(),t(Gn(i,"network-request-failed"))},timeout:MS.get()})}if(!((o=(s=Qn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Qn().gapi)===null||u===void 0)&&u.load)h();else{const m=k1("iframefcb");return Qn()[m]=()=>{gapi.load?h():t(Gn(i,"network-request-failed"))},P_(`${P1()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Eu=null,e})}let Eu=null;function bS(i){return Eu=Eu||FS(i),Eu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new Ua(5e3,15e3),zS="__/auth/iframe",jS="emulator/auth/iframe",BS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$S=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qS(i){const e=i.config;de(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Gd(e,jS):`https://${i.config.authDomain}/${zS}`,s={apiKey:e.apiKey,appName:i.name,v:ho},o=$S.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${La(s).slice(1)}`}async function HS(i){const e=await bS(i),t=Qn().gapi;return de(t,i,"internal-error"),e.open({where:document.body,url:qS(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BS,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Gn(i,"network-request-failed"),m=Qn().setTimeout(()=>{u(h)},US.get());function g(){Qn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KS=500,GS=600,QS="_blank",YS="http://localhost";class Cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XS(i,e,t,s=KS,o=GS){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},WS),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=w_(v)?QS:t),v_(v)&&(e=e||YS,g.scrollbars="yes");const w=Object.entries(g).reduce((b,[B,Y])=>`${b}${B}=${Y},`,"");if(v1(v)&&m!=="_self")return JS(e||"",m),new Cg(null);const k=window.open(e||"",m,w);de(k,i,"popup-blocked");try{k.focus()}catch{}return new Cg(k)}function JS(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="__/auth/handler",eA="emulator/auth/handler",tA=encodeURIComponent("fac");async function Pg(i,e,t,s,o,u){de(i.config.authDomain,i,"auth-domain-config-required"),de(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ho,eventId:o};if(e instanceof D_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",R0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,k]of Object.entries({}))h[w]=k}if(e instanceof za){const w=e.getScopes().filter(k=>k!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),v=g?`#${tA}=${encodeURIComponent(g)}`:"";return`${nA(i)}?${La(m).slice(1)}${v}`}function nA({config:i}){return i.emulator?Gd(i,eA):`https://${i.authDomain}/${ZS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="webStorageSupport";class rA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F_,this._completeRedirectFn=CS,this._overrideRedirectResult=SS}async _openPopup(e,t,s,o){var u;Sr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Pg(e,t,s,dd(),o);return XS(e,h,Zd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Pg(e,t,s,dd(),o);return oS(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Sr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await HS(e),s=new kS(e);return t.register("authEvent",o=>(de(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wh,{type:Wh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Wh];h!==void 0&&t(!!h),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=LS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return R_()||E_()||Yd()}}const iA=rA;var kg="@firebase/auth",Ng="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aA(i){no(new Ki("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:C_(i)},v=new A1(s,o,u,g);return x1(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),no(new Ki("auth-internal",e=>{const t=yo(e.getProvider("auth").getImmediate());return(s=>new sA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),oi(kg,Ng,oA(i)),oi(kg,Ng,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=5*60,uA=Fg("authIdTokenMaxAge")||lA;let Dg=null;const cA=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>uA)return;const o=t==null?void 0:t.token;Dg!==o&&(Dg=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function hA(i=jg()){const e=vd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=L1(i,{popupRedirectResolver:iA,persistence:[mS,rS,F_]}),s=Fg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=cA(u.toString());J1(t,h,()=>h(t.currentUser)),X1(t,m=>h(m))}}const o=xg("auth");return o&&M1(t,`http://${o}`),t}function dA(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}R1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Gn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",dA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aA("Browser");var fA="firebase",pA="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oi(fA,pA,"app");const mA={apiKey:"AIzaSyDGCIQPkJQpXxyoQUHDsATPZrELIYRyJCA",authDomain:"cloud-react-ba4ef.firebaseapp.com",projectId:"cloud-react-ba4ef",storageBucket:"cloud-react-ba4ef.firebasestorage.app",messagingSenderId:"862981284028",appId:"1:862981284028:web:bdc1daade64ed6108330b9"},q_=zg(mA),md=hA(q_),H_=OI(q_);function gA(){const[i,e]=ri.useState(""),[t,s]=ri.useState(""),o=async u=>{u.preventDefault();try{await Y1(md,i,t).then(h=>{const m=h.user;console.log("User logged in: "+m.email)})}catch(h){console.error("Could not log in, error: ",h),alert("Could not log in, check email and password.")}};return Ue.jsxs("div",{className:"card",children:[Ue.jsx("h3",{children:"Sign in to your account"}),Ue.jsxs("form",{onSubmit:o,className:"justify-content-between align-items-center",children:[Ue.jsxs("div",{children:[Ue.jsx("label",{htmlFor:"email",children:"Email:"}),Ue.jsx("input",{type:"email",id:"email",value:i,onChange:u=>e(u.target.value),required:!0})]}),Ue.jsxs("div",{children:[Ue.jsx("label",{htmlFor:"password",children:"Password: "}),Ue.jsx("input",{type:"password",id:"password",required:!0,value:t,onChange:u=>s(u.target.value)})]}),Ue.jsx("button",{type:"submit",children:"Sign in"})]})]})}function yA({userId:i,onPlantAdded:e}){const[t,s]=ri.useState(""),[o,u]=ri.useState(0),h=v=>{s(v.target.value)},m=v=>{u(parseFloat(v.target.value)||0)},g=async()=>{if(!t||o<=0){alert("Error: Please fill in all fields with valid values.");return}try{const v=Zy(H_,"users",i,"Plants");await JI(v,{name:t,water:o}),s(""),u(0),alert(`Plant ${t} added successfully!`),e()}catch(v){console.error("Error adding document: ",v),alert("Error: Failed to add the plant.")}};return Ue.jsxs("div",{children:[Ue.jsx("h3",{children:"Add a new plant"}),Ue.jsx("input",{type:"text",value:t,onChange:h,placeholder:"Plant name"}),Ue.jsx("input",{type:"number",value:o,onChange:m,placeholder:"Watering frequency (days)"}),Ue.jsx("button",{onClick:g,children:"Add Plant"})]})}function _A(){const[i,e]=ri.useState(null),[t,s]=ri.useState([]);ri.useEffect(()=>Z1(md,m=>{if(e(m),m){const g=m.uid;console.log("User ID:",g),u(g)}}),[]);const o=async()=>{try{await eS(md),e(null),console.log("User signed out successfully.")}catch(h){console.error("Error signing out: ",h)}},u=async h=>{try{console.log("Fetching data...");const m=Zy(H_,"users",h,"Plants"),g=await XI(m),v=[];g.forEach(w=>{const k=w.data();v.push({name:k.name,water:k.water})}),console.log(v),s(v)}catch(m){console.error("Error fetching documents: ",m)}};return Ue.jsx("div",{className:"container mt-4",children:i?Ue.jsxs("div",{children:[Ue.jsxs("h2",{className:"mb-2",children:["Welcome, ",i.email]}),Ue.jsx("button",{onClick:o,className:"mb-2",children:"Logout"}),Ue.jsx("div",{className:"card",children:Ue.jsx(yA,{userId:i.uid,onPlantAdded:()=>u(i.uid)})}),Ue.jsxs("div",{className:"card",children:[Ue.jsx("h3",{className:"mb-2",children:"All your plants:"}),Ue.jsx("ul",{className:"list-group",children:t.map((h,m)=>Ue.jsxs("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[h.name,", watering freq. ",h.water," days"]},m))})]})]}):Ue.jsx(gA,{})})}r0.createRoot(document.getElementById("root")).render(Ue.jsx(ri.StrictMode,{children:Ue.jsx(_A,{})}));
