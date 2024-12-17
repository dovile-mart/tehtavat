(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Dh={exports:{}},fa={},Vh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Yv(){if(lm)return Se;lm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.iterator;function F(V){return V===null||typeof V!="object"?null:(V=R&&V[R]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Q={};function q(V,B,oe){this.props=V,this.context=B,this.refs=Q,this.updater=oe||j}q.prototype.isReactComponent={},q.prototype.setState=function(V,B){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,B,"setState")},q.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function ve(){}ve.prototype=q.prototype;function _e(V,B,oe){this.props=V,this.context=B,this.refs=Q,this.updater=oe||j}var ye=_e.prototype=new ve;ye.constructor=_e,X(ye,q.prototype),ye.isPureReactComponent=!0;var Te=Array.isArray,We=Object.prototype.hasOwnProperty,Ae={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(V,B,oe){var Ee,Ie={},Ne=null,Le=null;if(B!=null)for(Ee in B.ref!==void 0&&(Le=B.ref),B.key!==void 0&&(Ne=""+B.key),B)We.call(B,Ee)&&!N.hasOwnProperty(Ee)&&(Ie[Ee]=B[Ee]);var Me=arguments.length-2;if(Me===1)Ie.children=oe;else if(1<Me){for(var je=Array(Me),mt=0;mt<Me;mt++)je[mt]=arguments[mt+2];Ie.children=je}if(V&&V.defaultProps)for(Ee in Me=V.defaultProps,Me)Ie[Ee]===void 0&&(Ie[Ee]=Me[Ee]);return{$$typeof:i,type:V,key:Ne,ref:Le,props:Ie,_owner:Ae.current}}function A(V,B){return{$$typeof:i,type:V.type,key:B,ref:V.ref,props:V.props,_owner:V._owner}}function C(V){return typeof V=="object"&&V!==null&&V.$$typeof===i}function D(V){var B={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(oe){return B[oe]})}var O=/\/+/g;function S(V,B){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):B.toString(36)}function et(V,B,oe,Ee,Ie){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Le=!1;if(V===null)Le=!0;else switch(Ne){case"string":case"number":Le=!0;break;case"object":switch(V.$$typeof){case i:case e:Le=!0}}if(Le)return Le=V,Ie=Ie(Le),V=Ee===""?"."+S(Le,0):Ee,Te(Ie)?(oe="",V!=null&&(oe=V.replace(O,"$&/")+"/"),et(Ie,B,oe,"",function(mt){return mt})):Ie!=null&&(C(Ie)&&(Ie=A(Ie,oe+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+V)),B.push(Ie)),1;if(Le=0,Ee=Ee===""?".":Ee+":",Te(V))for(var Me=0;Me<V.length;Me++){Ne=V[Me];var je=Ee+S(Ne,Me);Le+=et(Ne,B,oe,je,Ie)}else if(je=F(V),typeof je=="function")for(V=je.call(V),Me=0;!(Ne=V.next()).done;)Ne=Ne.value,je=Ee+S(Ne,Me++),Le+=et(Ne,B,oe,je,Ie);else if(Ne==="object")throw B=String(V),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Le}function Ct(V,B,oe){if(V==null)return V;var Ee=[],Ie=0;return et(V,Ee,"","",function(Ne){return B.call(oe,Ne,Ie++)}),Ee}function kt(V){if(V._status===-1){var B=V._result;B=B(),B.then(function(oe){(V._status===0||V._status===-1)&&(V._status=1,V._result=oe)},function(oe){(V._status===0||V._status===-1)&&(V._status=2,V._result=oe)}),V._status===-1&&(V._status=0,V._result=B)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},J={transition:null},le={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ae};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:Ct,forEach:function(V,B,oe){Ct(V,function(){B.apply(this,arguments)},oe)},count:function(V){var B=0;return Ct(V,function(){B++}),B},toArray:function(V){return Ct(V,function(B){return B})||[]},only:function(V){if(!C(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Se.Component=q,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=_e,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Se.act=ee,Se.cloneElement=function(V,B,oe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ee=X({},V.props),Ie=V.key,Ne=V.ref,Le=V._owner;if(B!=null){if(B.ref!==void 0&&(Ne=B.ref,Le=Ae.current),B.key!==void 0&&(Ie=""+B.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(je in B)We.call(B,je)&&!N.hasOwnProperty(je)&&(Ee[je]=B[je]===void 0&&Me!==void 0?Me[je]:B[je])}var je=arguments.length-2;if(je===1)Ee.children=oe;else if(1<je){Me=Array(je);for(var mt=0;mt<je;mt++)Me[mt]=arguments[mt+2];Ee.children=Me}return{$$typeof:i,type:V.type,key:Ie,ref:Ne,props:Ee,_owner:Le}},Se.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:u,_context:V},V.Consumer=V},Se.createElement=I,Se.createFactory=function(V){var B=I.bind(null,V);return B.type=V,B},Se.createRef=function(){return{current:null}},Se.forwardRef=function(V){return{$$typeof:m,render:V}},Se.isValidElement=C,Se.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:kt}},Se.memo=function(V,B){return{$$typeof:v,type:V,compare:B===void 0?null:B}},Se.startTransition=function(V){var B=J.transition;J.transition={};try{V()}finally{J.transition=B}},Se.unstable_act=ee,Se.useCallback=function(V,B){return Ue.current.useCallback(V,B)},Se.useContext=function(V){return Ue.current.useContext(V)},Se.useDebugValue=function(){},Se.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Se.useEffect=function(V,B){return Ue.current.useEffect(V,B)},Se.useId=function(){return Ue.current.useId()},Se.useImperativeHandle=function(V,B,oe){return Ue.current.useImperativeHandle(V,B,oe)},Se.useInsertionEffect=function(V,B){return Ue.current.useInsertionEffect(V,B)},Se.useLayoutEffect=function(V,B){return Ue.current.useLayoutEffect(V,B)},Se.useMemo=function(V,B){return Ue.current.useMemo(V,B)},Se.useReducer=function(V,B,oe){return Ue.current.useReducer(V,B,oe)},Se.useRef=function(V){return Ue.current.useRef(V)},Se.useState=function(V){return Ue.current.useState(V)},Se.useSyncExternalStore=function(V,B,oe){return Ue.current.useSyncExternalStore(V,B,oe)},Se.useTransition=function(){return Ue.current.useTransition()},Se.version="18.3.1",Se}var um;function gd(){return um||(um=1,Vh.exports=Yv()),Vh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Xv(){if(cm)return fa;cm=1;var i=gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,v){var w,R={},F=null,j=null;v!==void 0&&(F=""+v),g.key!==void 0&&(F=""+g.key),g.ref!==void 0&&(j=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(R[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)R[w]===void 0&&(R[w]=g[w]);return{$$typeof:e,type:m,key:F,ref:j,props:R,_owner:o.current}}return fa.Fragment=t,fa.jsx=h,fa.jsxs=h,fa}var hm;function Jv(){return hm||(hm=1,Dh.exports=Xv()),Dh.exports}var we=Jv(),Bt=gd(),ru={},Oh={exports:{}},Yt={},xh={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Zv(){return dm||(dm=1,function(i){function e(J,le){var ee=J.length;J.push(le);e:for(;0<ee;){var V=ee-1>>>1,B=J[V];if(0<o(B,le))J[V]=le,J[ee]=B,ee=V;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],ee=J.pop();if(ee!==le){J[0]=ee;e:for(var V=0,B=J.length,oe=B>>>1;V<oe;){var Ee=2*(V+1)-1,Ie=J[Ee],Ne=Ee+1,Le=J[Ne];if(0>o(Ie,ee))Ne<B&&0>o(Le,Ie)?(J[V]=Le,J[Ne]=ee,V=Ne):(J[V]=Ie,J[Ee]=ee,V=Ee);else if(Ne<B&&0>o(Le,ee))J[V]=Le,J[Ne]=ee,V=Ne;else break e}}return le}function o(J,le){var ee=J.sortIndex-le.sortIndex;return ee!==0?ee:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,R=null,F=3,j=!1,X=!1,Q=!1,q=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ye(J){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=J)s(v),le.sortIndex=le.expirationTime,e(g,le);else break;le=t(v)}}function Te(J){if(Q=!1,ye(J),!X)if(t(g)!==null)X=!0,kt(We);else{var le=t(v);le!==null&&Ue(Te,le.startTime-J)}}function We(J,le){X=!1,Q&&(Q=!1,ve(I),I=-1),j=!0;var ee=F;try{for(ye(le),R=t(g);R!==null&&(!(R.expirationTime>le)||J&&!D());){var V=R.callback;if(typeof V=="function"){R.callback=null,F=R.priorityLevel;var B=V(R.expirationTime<=le);le=i.unstable_now(),typeof B=="function"?R.callback=B:R===t(g)&&s(g),ye(le)}else s(g);R=t(g)}if(R!==null)var oe=!0;else{var Ee=t(v);Ee!==null&&Ue(Te,Ee.startTime-le),oe=!1}return oe}finally{R=null,F=ee,j=!1}}var Ae=!1,N=null,I=-1,A=5,C=-1;function D(){return!(i.unstable_now()-C<A)}function O(){if(N!==null){var J=i.unstable_now();C=J;var le=!0;try{le=N(!0,J)}finally{le?S():(Ae=!1,N=null)}}else Ae=!1}var S;if(typeof _e=="function")S=function(){_e(O)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,Ct=et.port2;et.port1.onmessage=O,S=function(){Ct.postMessage(null)}}else S=function(){q(O,0)};function kt(J){N=J,Ae||(Ae=!0,S())}function Ue(J,le){I=q(function(){J(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){X||j||(X=!0,kt(We))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return F},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(F){case 1:case 2:case 3:var le=3;break;default:le=F}var ee=F;F=le;try{return J()}finally{F=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=F;F=J;try{return le()}finally{F=ee}},i.unstable_scheduleCallback=function(J,le,ee){var V=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?V+ee:V):ee=V,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ee+B,J={id:w++,callback:le,priorityLevel:J,startTime:ee,expirationTime:B,sortIndex:-1},ee>V?(J.sortIndex=ee,e(v,J),t(g)===null&&J===t(v)&&(Q?(ve(I),I=-1):Q=!0,Ue(Te,ee-V))):(J.sortIndex=B,e(g,J),X||j||(X=!0,kt(We))),J},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(J){var le=F;return function(){var ee=F;F=le;try{return J.apply(this,arguments)}finally{F=ee}}}}(Lh)),Lh}var fm;function e0(){return fm||(fm=1,xh.exports=Zv()),xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function t0(){if(pm)return Yt;pm=1;var i=gd(),e=e0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},R={};function F(n){return g.call(R,n)?!0:g.call(w,n)?!1:v.test(n)?R[n]=!0:(w[n]=!0,!1)}function j(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X(n,r,a,c){if(r===null||typeof r>"u"||j(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];q[r]=new Q(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var ve=/[\-:]([a-z])/g;function _e(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ve,_e);q[r]=new Q(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ve,_e);q[r]=new Q(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ve,_e);q[r]=new Q(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function ye(n,r,a,c){var d=q.hasOwnProperty(r)?q[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,a,d,c)&&(a=null),c||d===null?F(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,We=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),Ct=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,V;function B(n){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||""}return`
`+V+n}var oe=!1;function Ee(n,r){if(!n||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(b){var c=b}Reflect.construct(n,[],r)}else{try{r.call()}catch(b){c=b}n.call(r.prototype)}else{try{throw Error()}catch(b){c=b}n()}}catch(b){if(b&&c&&typeof b.stack=="string"){for(var d=b.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=T);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?B(n):""}function Ie(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Ae:return"Portal";case A:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case O:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ct:return r=n.displayName||null,r!==null?r:Ne(n.type)||"Memo";case kt:r=n._payload,n=n._init;try{return Ne(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Zn(n){n._valueTracker||(n._valueTracker=mt(n))}function ts(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gi(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ns(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vo(n,r){r=r.checked,r!=null&&ye(n,"checked",r,!1)}function Eo(n,r){vo(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?rs(n,r.type,a):r.hasOwnProperty("defaultValue")&&rs(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ba(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function rs(n,r,a){(r!=="number"||Pr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var er=Array.isArray;function tr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function wo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function is(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(er(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function ss(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function To(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?at(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nr,Io=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(nr=nr||document.createElement("div"),nr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=nr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Cr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_i=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(n){_i.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),yi[r]=yi[n]})});function So(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||yi.hasOwnProperty(n)&&yi[n]?(""+r).trim():r+"px"}function Ao(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=So(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ro=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Po(n,r){if(r){if(Ro[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Co(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function os(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var as=null,an=null,Mn=null;function ls(n){if(n=Jo(n)){if(typeof as!="function")throw Error(t(280));var r=n.stateNode;r&&(r=_l(r),as(n.stateNode,n.type,r))}}function Fn(n){an?Mn?Mn.push(n):Mn=[n]:an=n}function ko(){if(an){var n=an,r=Mn;if(Mn=an=null,ls(n),r)for(n=0;n<r.length;n++)ls(r[n])}}function Ei(n,r){return n(r)}function No(){}var rr=!1;function Do(n,r,a){if(rr)return n(r,a);rr=!0;try{return Ei(n,r,a)}finally{rr=!1,(an!==null||Mn!==null)&&(No(),ko())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=_l(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var us=!1;if(m)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){us=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{us=!1}function wi(n,r,a,c,d,p,_,T,P){var b=Array.prototype.slice.call(arguments,3);try{r.apply(a,b)}catch(H){this.onError(H)}}var Ti=!1,cs=null,vn=!1,Vo=null,sc={onError:function(n){Ti=!0,cs=n}};function hs(n,r,a,c,d,p,_,T,P){Ti=!1,cs=null,wi.apply(sc,arguments)}function $a(n,r,a,c,d,p,_,T,P){if(hs.apply(this,arguments),Ti){if(Ti){var b=cs;Ti=!1,cs=null}else throw Error(t(198));vn||(vn=!0,Vo=b)}}function En(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ii(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function wn(n){if(En(n)!==n)throw Error(t(188))}function qa(n){var r=n.alternate;if(!r){if(r=En(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return wn(d),n;if(p===c)return wn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Oo(n){return n=qa(n),n!==null?ds(n):null}function ds(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ds(n);if(r!==null)return r;n=n.sibling}return null}var fs=e.unstable_scheduleCallback,xo=e.unstable_cancelCallback,Ha=e.unstable_shouldYield,oc=e.unstable_requestPaint,Be=e.unstable_now,Wa=e.unstable_getCurrentPriorityLevel,Si=e.unstable_ImmediatePriority,kr=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,Lo=e.unstable_LowPriority,Ka=e.unstable_IdlePriority,Ai=null,Zt=null;function Ga(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ai,n,void 0,(n.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Ya,Mo=Math.log,Qa=Math.LN2;function Ya(n){return n>>>=0,n===0?32:31-(Mo(n)/Qa|0)|0}var ps=64,ms=4194304;function Nr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ri(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=Nr(T):(p&=_,p!==0&&(c=Nr(p)))}else _=a&~d,_!==0?c=Nr(_):p!==0&&(c=Nr(p));if(c===0)return 0;if(r!==0&&r!==c&&!(r&d)&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if(c&4&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-bt(r),d=1<<a,c|=n[a],r&=~d;return c}function ac(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ir(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-bt(p),T=1<<_,P=d[_];P===-1?(!(T&a)||T&c)&&(d[_]=ac(T,r)):P<=r&&(n.expiredLanes|=T),p&=~T}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pi(){var n=ps;return ps<<=1,!(ps&4194240)&&(ps=64),n}function Dr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Vr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-bt(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-bt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Or(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-bt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Ce=0;function xr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Xa,gs,Ja,Za,el,Fo=!1,bn=[],wt=null,Tn=null,In=null,Lr=new Map,un=new Map,Un=[],lc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tl(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Lr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":un.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=Jo(r),r!==null&&gs(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function uc(n,r,a,c,d){switch(r){case"focusin":return wt=$t(wt,n,r,a,c,d),!0;case"dragenter":return Tn=$t(Tn,n,r,a,c,d),!0;case"mouseover":return In=$t(In,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Lr.set(p,$t(Lr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,un.set(p,$t(un.get(p)||null,n,r,a,c,d)),!0}return!1}function nl(n){var r=Vi(n.target);if(r!==null){var a=En(r);if(a!==null){if(r=a.tag,r===13){if(r=Ii(a),r!==null){n.blockedOn=r,el(n.priority,function(){Ja(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ys(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);vi=c,a.target.dispatchEvent(c),vi=null}else return r=Jo(a),r!==null&&gs(r),n.blockedOn=a,!1;r.shift()}return!0}function Ci(n,r,a){sr(n)&&a.delete(r)}function rl(){Fo=!1,wt!==null&&sr(wt)&&(wt=null),Tn!==null&&sr(Tn)&&(Tn=null),In!==null&&sr(In)&&(In=null),Lr.forEach(Ci),un.forEach(Ci)}function Sn(n,r){n.blockedOn===r&&(n.blockedOn=null,Fo||(Fo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rl)))}function An(n){function r(d){return Sn(d,n)}if(0<bn.length){Sn(bn[0],n);for(var a=1;a<bn.length;a++){var c=bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Sn(wt,n),Tn!==null&&Sn(Tn,n),In!==null&&Sn(In,n),Lr.forEach(r),un.forEach(r),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)nl(a),a.blockedOn===null&&Un.shift()}var or=Te.ReactCurrentBatchConfig,Mr=!0;function Ke(n,r,a,c){var d=Ce,p=or.transition;or.transition=null;try{Ce=1,bo(n,r,a,c)}finally{Ce=d,or.transition=p}}function cc(n,r,a,c){var d=Ce,p=or.transition;or.transition=null;try{Ce=4,bo(n,r,a,c)}finally{Ce=d,or.transition=p}}function bo(n,r,a,c){if(Mr){var d=ys(n,r,a,c);if(d===null)wc(n,r,c,ki,a),tl(n,c);else if(uc(d,n,r,a,c))c.stopPropagation();else if(tl(n,c),r&4&&-1<lc.indexOf(n)){for(;d!==null;){var p=Jo(d);if(p!==null&&Xa(p),p=ys(n,r,a,c),p===null&&wc(n,r,c,ki,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else wc(n,r,c,null,a)}}var ki=null;function ys(n,r,a,c){if(ki=null,n=os(c),n=Vi(n),n!==null)if(r=En(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ii(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ki=n,null}function Uo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wa()){case Si:return 1;case kr:return 4;case ln:case Lo:return 16;case Ka:return 536870912;default:return 16}default:return 16}}var tn=null,_s=null,qt=null;function zo(){if(qt)return qt;var n,r=_s,a=r.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return qt=d.slice(n,1<c?1-c:void 0)}function vs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function zn(){return!0}function jo(){return!1}function Tt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?zn:jo,this.isPropagationStopped=jo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),r}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Tt(Rn),jn=ee({},Rn,{view:0,detail:0}),hc=Tt(jn),ws,ar,Fr,Ni=ee({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fr&&(Fr&&n.type==="mousemove"?(ws=n.screenX-Fr.screenX,ar=n.screenY-Fr.screenY):ar=ws=0,Fr=n),ws)},movementY:function(n){return"movementY"in n?n.movementY:ar}}),Ts=Tt(Ni),Bo=ee({},Ni,{dataTransfer:0}),il=Tt(Bo),Is=ee({},jn,{relatedTarget:0}),Ss=Tt(Is),sl=ee({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),lr=Tt(sl),ol=ee({},Rn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),al=Tt(ol),ll=ee({},Rn,{data:0}),$o=Tt(ll),As={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ul={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ul[n])?!!r[n]:!1}function Bn(){return cl}var l=ee({},jn,{key:function(n){if(n.key){var r=As[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=vs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(n){return n.type==="keypress"?vs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),y=ee({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(y),x=ee({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn}),U=Tt(x),Y=ee({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),be=Tt(Y),ut=ee({},Ni,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=Tt(ut),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,cn=null;m&&"documentMode"in document&&(cn=document.documentMode);var nn=m&&"TextEvent"in window&&!cn,Di=m&&(!it||cn&&8<cn&&11>=cn),Rs=" ",tf=!1;function nf(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function K_(n,r){switch(n){case"compositionend":return rf(r);case"keypress":return r.which!==32?null:(tf=!0,Rs);case"textInput":return n=r.data,n===Rs&&tf?null:n;default:return null}}function G_(n,r){if(Ps)return n==="compositionend"||!it&&nf(n,r)?(n=zo(),qt=_s=tn=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Di&&r.locale!=="ko"?null:r.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Q_[n.type]:r==="textarea"}function of(n,r,a,c){Fn(c),r=ml(r,"onChange"),0<r.length&&(a=new Es("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var qo=null,Ho=null;function Y_(n){Sf(n,0)}function hl(n){var r=Vs(n);if(ts(r))return n}function X_(n,r){if(n==="change")return r}var af=!1;if(m){var dc;if(m){var fc="oninput"in document;if(!fc){var lf=document.createElement("div");lf.setAttribute("oninput","return;"),fc=typeof lf.oninput=="function"}dc=fc}else dc=!1;af=dc&&(!document.documentMode||9<document.documentMode)}function uf(){qo&&(qo.detachEvent("onpropertychange",cf),Ho=qo=null)}function cf(n){if(n.propertyName==="value"&&hl(Ho)){var r=[];of(r,Ho,n,os(n)),Do(Y_,r)}}function J_(n,r,a){n==="focusin"?(uf(),qo=r,Ho=a,qo.attachEvent("onpropertychange",cf)):n==="focusout"&&uf()}function Z_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(Ho)}function ev(n,r){if(n==="click")return hl(r)}function tv(n,r){if(n==="input"||n==="change")return hl(r)}function nv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:nv;function Wo(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Pn(n[d],r[d]))return!1}return!0}function hf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function df(n,r){var a=hf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hf(a)}}function ff(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?ff(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function pf(){for(var n=window,r=Pr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Pr(n.document)}return r}function pc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function rv(n){var r=pf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&ff(a.ownerDocument.documentElement,a)){if(c!==null&&pc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=df(a,p);var _=df(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var iv=m&&"documentMode"in document&&11>=document.documentMode,Cs=null,mc=null,Ko=null,gc=!1;function mf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||Cs==null||Cs!==Pr(c)||(c=Cs,"selectionStart"in c&&pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ko&&Wo(Ko,c)||(Ko=c,c=ml(mc,"onSelect"),0<c.length&&(r=new Es("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Cs)))}function dl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var ks={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},yc={},gf={};m&&(gf=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function fl(n){if(yc[n])return yc[n];if(!ks[n])return n;var r=ks[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in gf)return yc[n]=r[a];return n}var yf=fl("animationend"),_f=fl("animationiteration"),vf=fl("animationstart"),Ef=fl("transitionend"),wf=new Map,Tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(n,r){wf.set(n,r),u(r,[n])}for(var _c=0;_c<Tf.length;_c++){var vc=Tf[_c],sv=vc.toLowerCase(),ov=vc[0].toUpperCase()+vc.slice(1);br(sv,"on"+ov)}br(yf,"onAnimationEnd"),br(_f,"onAnimationIteration"),br(vf,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(Ef,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),av=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function If(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,$a(c,r,void 0,n),n.currentTarget=null}function Sf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],P=T.instance,b=T.currentTarget;if(T=T.listener,P!==p&&d.isPropagationStopped())break e;If(d,T,b),p=P}else for(_=0;_<c.length;_++){if(T=c[_],P=T.instance,b=T.currentTarget,T=T.listener,P!==p&&d.isPropagationStopped())break e;If(d,T,b),p=P}}}if(vn)throw n=Vo,vn=!1,Vo=null,n}function qe(n,r){var a=r[Pc];a===void 0&&(a=r[Pc]=new Set);var c=n+"__bubble";a.has(c)||(Af(r,n,2,!1),a.add(c))}function Ec(n,r,a){var c=0;r&&(c|=4),Af(a,n,c,r)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Qo(n){if(!n[pl]){n[pl]=!0,s.forEach(function(a){a!=="selectionchange"&&(av.has(a)||Ec(a,!1,n),Ec(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[pl]||(r[pl]=!0,Ec("selectionchange",!1,r))}}function Af(n,r,a,c){switch(Uo(r)){case 1:var d=Ke;break;case 4:d=cc;break;default:d=bo}a=d.bind(null,r,a,n),d=void 0,!us||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function wc(n,r,a,c,d){var p=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Vi(T),_===null)return;if(P=_.tag,P===5||P===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Do(function(){var b=p,H=os(a),K=[];e:{var $=wf.get(n);if($!==void 0){var Z=Es,re=n;switch(n){case"keypress":if(vs(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=Ss;break;case"focusout":re="blur",Z=Ss;break;case"beforeblur":case"afterblur":Z=Ss;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=il;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case yf:case _f:case vf:Z=lr;break;case Ef:Z=be;break;case"scroll":Z=hc;break;case"wheel":Z=De;break;case"copy":case"cut":case"paste":Z=al;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var ie=(r&4)!==0,nt=!ie&&n==="scroll",L=ie?$!==null?$+"Capture":null:$;ie=[];for(var k=b,M;k!==null;){M=k;var G=M.stateNode;if(M.tag===5&&G!==null&&(M=G,L!==null&&(G=tt(k,L),G!=null&&ie.push(Yo(k,G,M)))),nt)break;k=k.return}0<ie.length&&($=new Z($,re,null,a,H),K.push({event:$,listeners:ie}))}}if(!(r&7)){e:{if($=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",$&&a!==vi&&(re=a.relatedTarget||a.fromElement)&&(Vi(re)||re[ur]))break e;if((Z||$)&&($=H.window===H?H:($=H.ownerDocument)?$.defaultView||$.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=b,re=re?Vi(re):null,re!==null&&(nt=En(re),re!==nt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=b),Z!==re)){if(ie=Ts,G="onMouseLeave",L="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ie=E,G="onPointerLeave",L="onPointerEnter",k="pointer"),nt=Z==null?$:Vs(Z),M=re==null?$:Vs(re),$=new ie(G,k+"leave",Z,a,H),$.target=nt,$.relatedTarget=M,G=null,Vi(H)===b&&(ie=new ie(L,k+"enter",re,a,H),ie.target=M,ie.relatedTarget=nt,G=ie),nt=G,Z&&re)t:{for(ie=Z,L=re,k=0,M=ie;M;M=Ns(M))k++;for(M=0,G=L;G;G=Ns(G))M++;for(;0<k-M;)ie=Ns(ie),k--;for(;0<M-k;)L=Ns(L),M--;for(;k--;){if(ie===L||L!==null&&ie===L.alternate)break t;ie=Ns(ie),L=Ns(L)}ie=null}else ie=null;Z!==null&&Rf(K,$,Z,ie,!1),re!==null&&nt!==null&&Rf(K,nt,re,ie,!0)}}e:{if($=b?Vs(b):window,Z=$.nodeName&&$.nodeName.toLowerCase(),Z==="select"||Z==="input"&&$.type==="file")var se=X_;else if(sf($))if(af)se=tv;else{se=Z_;var ue=J_}else(Z=$.nodeName)&&Z.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(se=ev);if(se&&(se=se(n,b))){of(K,se,a,H);break e}ue&&ue(n,$,b),n==="focusout"&&(ue=$._wrapperState)&&ue.controlled&&$.type==="number"&&rs($,"number",$.value)}switch(ue=b?Vs(b):window,n){case"focusin":(sf(ue)||ue.contentEditable==="true")&&(Cs=ue,mc=b,Ko=null);break;case"focusout":Ko=mc=Cs=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,mf(K,a,H);break;case"selectionchange":if(iv)break;case"keydown":case"keyup":mf(K,a,H)}var ce;if(it)e:{switch(n){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Ps?nf(n,a)&&(fe="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&(Di&&a.locale!=="ko"&&(Ps||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Ps&&(ce=zo()):(tn=H,_s="value"in tn?tn.value:tn.textContent,Ps=!0)),ue=ml(b,fe),0<ue.length&&(fe=new $o(fe,n,null,a,H),K.push({event:fe,listeners:ue}),ce?fe.data=ce:(ce=rf(a),ce!==null&&(fe.data=ce)))),(ce=nn?K_(n,a):G_(n,a))&&(b=ml(b,"onBeforeInput"),0<b.length&&(H=new $o("onBeforeInput","beforeinput",null,a,H),K.push({event:H,listeners:b}),H.data=ce))}Sf(K,r)})}function Yo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function ml(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(Yo(n,p,d)),p=tt(n,r),p!=null&&c.push(Yo(n,p,d))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,P=T.alternate,b=T.stateNode;if(P!==null&&P===c)break;T.tag===5&&b!==null&&(T=b,d?(P=tt(a,p),P!=null&&_.unshift(Yo(a,P,T))):d||(P=tt(a,p),P!=null&&_.push(Yo(a,P,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var lv=/\r\n?/g,uv=/\u0000|\uFFFD/g;function Pf(n){return(typeof n=="string"?n:""+n).replace(lv,`
`).replace(uv,"")}function gl(n,r,a){if(r=Pf(r),Pf(n)!==r&&a)throw Error(t(425))}function yl(){}var Tc=null,Ic=null;function Sc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,cv=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,hv=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(n){return Cf.resolve(null).then(n).catch(dv)}:Ac;function dv(n){setTimeout(function(){throw n})}function Rc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),An(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);An(r)}function Ur(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function kf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ds,Xo="__reactProps$"+Ds,ur="__reactContainer$"+Ds,Pc="__reactEvents$"+Ds,fv="__reactListeners$"+Ds,pv="__reactHandles$"+Ds;function Vi(n){var r=n[$n];if(r)return r;for(var a=n.parentNode;a;){if(r=a[ur]||a[$n]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=kf(n);n!==null;){if(a=n[$n])return a;n=kf(n)}return r}n=a,a=n.parentNode}return null}function Jo(n){return n=n[$n]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function _l(n){return n[Xo]||null}var Cc=[],Os=-1;function zr(n){return{current:n}}function He(n){0>Os||(n.current=Cc[Os],Cc[Os]=null,Os--)}function $e(n,r){Os++,Cc[Os]=n.current,n.current=r}var jr={},Nt=zr(jr),Ht=zr(!1),Oi=jr;function xs(n,r){var a=n.type.contextTypes;if(!a)return jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function vl(){He(Ht),He(Nt)}function Nf(n,r,a){if(Nt.current!==jr)throw Error(t(168));$e(Nt,r),$e(Ht,a)}function Df(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},a,c)}function El(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||jr,Oi=Nt.current,$e(Nt,n),$e(Ht,Ht.current),!0}function Vf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Df(n,r,Oi),c.__reactInternalMemoizedMergedChildContext=n,He(Ht),He(Nt),$e(Nt,n)):He(Ht),$e(Ht,a)}var cr=null,wl=!1,kc=!1;function Of(n){cr===null?cr=[n]:cr.push(n)}function mv(n){wl=!0,Of(n)}function Br(){if(!kc&&cr!==null){kc=!0;var n=0,r=Ce;try{var a=cr;for(Ce=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}cr=null,wl=!1}catch(d){throw cr!==null&&(cr=cr.slice(n+1)),fs(Si,Br),d}finally{Ce=r,kc=!1}}return null}var Ls=[],Ms=0,Tl=null,Il=0,hn=[],dn=0,xi=null,hr=1,dr="";function Li(n,r){Ls[Ms++]=Il,Ls[Ms++]=Tl,Tl=n,Il=r}function xf(n,r,a){hn[dn++]=hr,hn[dn++]=dr,hn[dn++]=xi,xi=n;var c=hr;n=dr;var d=32-bt(c)-1;c&=~(1<<d),a+=1;var p=32-bt(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,hr=1<<32-bt(r)+d|a<<d|c,dr=p+n}else hr=1<<p|a<<d|c,dr=n}function Nc(n){n.return!==null&&(Li(n,1),xf(n,1,0))}function Dc(n){for(;n===Tl;)Tl=Ls[--Ms],Ls[Ms]=null,Il=Ls[--Ms],Ls[Ms]=null;for(;n===xi;)xi=hn[--dn],hn[dn]=null,dr=hn[--dn],hn[dn]=null,hr=hn[--dn],hn[dn]=null}var rn=null,sn=null,Ge=!1,Cn=null;function Lf(n,r){var a=gn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Mf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=Ur(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=xi!==null?{id:hr,overflow:dr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=gn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Oc(n){if(Ge){var r=sn;if(r){var a=r;if(!Mf(n,r)){if(Vc(n))throw Error(t(418));r=Ur(a.nextSibling);var c=rn;r&&Mf(n,r)?Lf(c,a):(n.flags=n.flags&-4097|2,Ge=!1,rn=n)}}else{if(Vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,rn=n}}}function Ff(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Sl(n){if(n!==rn)return!1;if(!Ge)return Ff(n),Ge=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Sc(n.type,n.memoizedProps)),r&&(r=sn)){if(Vc(n))throw bf(),Error(t(418));for(;r;)Lf(n,r),r=Ur(r.nextSibling)}if(Ff(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=Ur(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?Ur(n.stateNode.nextSibling):null;return!0}function bf(){for(var n=sn;n;)n=Ur(n.nextSibling)}function Fs(){sn=rn=null,Ge=!1}function xc(n){Cn===null?Cn=[n]:Cn.push(n)}var gv=Te.ReactCurrentBatchConfig;function Zo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Al(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Uf(n){var r=n._init;return r(n._payload)}function zf(n){function r(L,k){if(n){var M=L.deletions;M===null?(L.deletions=[k],L.flags|=16):M.push(k)}}function a(L,k){if(!n)return null;for(;k!==null;)r(L,k),k=k.sibling;return null}function c(L,k){for(L=new Map;k!==null;)k.key!==null?L.set(k.key,k):L.set(k.index,k),k=k.sibling;return L}function d(L,k){return L=Yr(L,k),L.index=0,L.sibling=null,L}function p(L,k,M){return L.index=M,n?(M=L.alternate,M!==null?(M=M.index,M<k?(L.flags|=2,k):M):(L.flags|=2,k)):(L.flags|=1048576,k)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function T(L,k,M,G){return k===null||k.tag!==6?(k=Ah(M,L.mode,G),k.return=L,k):(k=d(k,M),k.return=L,k)}function P(L,k,M,G){var se=M.type;return se===N?H(L,k,M.props.children,G,M.key):k!==null&&(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===kt&&Uf(se)===k.type)?(G=d(k,M.props),G.ref=Zo(L,k,M),G.return=L,G):(G=Ql(M.type,M.key,M.props,null,L.mode,G),G.ref=Zo(L,k,M),G.return=L,G)}function b(L,k,M,G){return k===null||k.tag!==4||k.stateNode.containerInfo!==M.containerInfo||k.stateNode.implementation!==M.implementation?(k=Rh(M,L.mode,G),k.return=L,k):(k=d(k,M.children||[]),k.return=L,k)}function H(L,k,M,G,se){return k===null||k.tag!==7?(k=$i(M,L.mode,G,se),k.return=L,k):(k=d(k,M),k.return=L,k)}function K(L,k,M){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Ah(""+k,L.mode,M),k.return=L,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case We:return M=Ql(k.type,k.key,k.props,null,L.mode,M),M.ref=Zo(L,null,k),M.return=L,M;case Ae:return k=Rh(k,L.mode,M),k.return=L,k;case kt:var G=k._init;return K(L,G(k._payload),M)}if(er(k)||le(k))return k=$i(k,L.mode,M,null),k.return=L,k;Al(L,k)}return null}function $(L,k,M,G){var se=k!==null?k.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return se!==null?null:T(L,k,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case We:return M.key===se?P(L,k,M,G):null;case Ae:return M.key===se?b(L,k,M,G):null;case kt:return se=M._init,$(L,k,se(M._payload),G)}if(er(M)||le(M))return se!==null?null:H(L,k,M,G,null);Al(L,M)}return null}function Z(L,k,M,G,se){if(typeof G=="string"&&G!==""||typeof G=="number")return L=L.get(M)||null,T(k,L,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case We:return L=L.get(G.key===null?M:G.key)||null,P(k,L,G,se);case Ae:return L=L.get(G.key===null?M:G.key)||null,b(k,L,G,se);case kt:var ue=G._init;return Z(L,k,M,ue(G._payload),se)}if(er(G)||le(G))return L=L.get(M)||null,H(k,L,G,se,null);Al(k,G)}return null}function re(L,k,M,G){for(var se=null,ue=null,ce=k,fe=k=0,vt=null;ce!==null&&fe<M.length;fe++){ce.index>fe?(vt=ce,ce=null):vt=ce.sibling;var xe=$(L,ce,M[fe],G);if(xe===null){ce===null&&(ce=vt);break}n&&ce&&xe.alternate===null&&r(L,ce),k=p(xe,k,fe),ue===null?se=xe:ue.sibling=xe,ue=xe,ce=vt}if(fe===M.length)return a(L,ce),Ge&&Li(L,fe),se;if(ce===null){for(;fe<M.length;fe++)ce=K(L,M[fe],G),ce!==null&&(k=p(ce,k,fe),ue===null?se=ce:ue.sibling=ce,ue=ce);return Ge&&Li(L,fe),se}for(ce=c(L,ce);fe<M.length;fe++)vt=Z(ce,L,fe,M[fe],G),vt!==null&&(n&&vt.alternate!==null&&ce.delete(vt.key===null?fe:vt.key),k=p(vt,k,fe),ue===null?se=vt:ue.sibling=vt,ue=vt);return n&&ce.forEach(function(Xr){return r(L,Xr)}),Ge&&Li(L,fe),se}function ie(L,k,M,G){var se=le(M);if(typeof se!="function")throw Error(t(150));if(M=se.call(M),M==null)throw Error(t(151));for(var ue=se=null,ce=k,fe=k=0,vt=null,xe=M.next();ce!==null&&!xe.done;fe++,xe=M.next()){ce.index>fe?(vt=ce,ce=null):vt=ce.sibling;var Xr=$(L,ce,xe.value,G);if(Xr===null){ce===null&&(ce=vt);break}n&&ce&&Xr.alternate===null&&r(L,ce),k=p(Xr,k,fe),ue===null?se=Xr:ue.sibling=Xr,ue=Xr,ce=vt}if(xe.done)return a(L,ce),Ge&&Li(L,fe),se;if(ce===null){for(;!xe.done;fe++,xe=M.next())xe=K(L,xe.value,G),xe!==null&&(k=p(xe,k,fe),ue===null?se=xe:ue.sibling=xe,ue=xe);return Ge&&Li(L,fe),se}for(ce=c(L,ce);!xe.done;fe++,xe=M.next())xe=Z(ce,L,fe,xe.value,G),xe!==null&&(n&&xe.alternate!==null&&ce.delete(xe.key===null?fe:xe.key),k=p(xe,k,fe),ue===null?se=xe:ue.sibling=xe,ue=xe);return n&&ce.forEach(function(Qv){return r(L,Qv)}),Ge&&Li(L,fe),se}function nt(L,k,M,G){if(typeof M=="object"&&M!==null&&M.type===N&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case We:e:{for(var se=M.key,ue=k;ue!==null;){if(ue.key===se){if(se=M.type,se===N){if(ue.tag===7){a(L,ue.sibling),k=d(ue,M.props.children),k.return=L,L=k;break e}}else if(ue.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===kt&&Uf(se)===ue.type){a(L,ue.sibling),k=d(ue,M.props),k.ref=Zo(L,ue,M),k.return=L,L=k;break e}a(L,ue);break}else r(L,ue);ue=ue.sibling}M.type===N?(k=$i(M.props.children,L.mode,G,M.key),k.return=L,L=k):(G=Ql(M.type,M.key,M.props,null,L.mode,G),G.ref=Zo(L,k,M),G.return=L,L=G)}return _(L);case Ae:e:{for(ue=M.key;k!==null;){if(k.key===ue)if(k.tag===4&&k.stateNode.containerInfo===M.containerInfo&&k.stateNode.implementation===M.implementation){a(L,k.sibling),k=d(k,M.children||[]),k.return=L,L=k;break e}else{a(L,k);break}else r(L,k);k=k.sibling}k=Rh(M,L.mode,G),k.return=L,L=k}return _(L);case kt:return ue=M._init,nt(L,k,ue(M._payload),G)}if(er(M))return re(L,k,M,G);if(le(M))return ie(L,k,M,G);Al(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,k!==null&&k.tag===6?(a(L,k.sibling),k=d(k,M),k.return=L,L=k):(a(L,k),k=Ah(M,L.mode,G),k.return=L,L=k),_(L)):a(L,k)}return nt}var bs=zf(!0),jf=zf(!1),Rl=zr(null),Pl=null,Us=null,Lc=null;function Mc(){Lc=Us=Pl=null}function Fc(n){var r=Rl.current;He(Rl),n._currentValue=r}function bc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function zs(n,r){Pl=n,Lc=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Kt=!0),n.firstContext=null)}function fn(n){var r=n._currentValue;if(Lc!==n)if(n={context:n,memoizedValue:r,next:null},Us===null){if(Pl===null)throw Error(t(308));Us=n,Pl.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return r}var Mi=null;function Uc(n){Mi===null?Mi=[n]:Mi.push(n)}function Bf(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,Uc(r)):(a.next=d.next,d.next=a),r.interleaved=a,fr(n,c)}function fr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var $r=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,fr(n,a)}return d=c.interleaved,d===null?(r.next=r,Uc(c)):(r.next=d.next,d.next=r),c.interleaved=r,fr(n,a)}function Cl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}function qf(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function kl(n,r,a,c){var d=n.updateQueue;$r=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var P=T,b=P.next;P.next=null,_===null?p=b:_.next=b,_=P;var H=n.alternate;H!==null&&(H=H.updateQueue,T=H.lastBaseUpdate,T!==_&&(T===null?H.firstBaseUpdate=b:T.next=b,H.lastBaseUpdate=P))}if(p!==null){var K=d.baseState;_=0,H=b=P=null,T=p;do{var $=T.lane,Z=T.eventTime;if((c&$)===$){H!==null&&(H=H.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,ie=T;switch($=r,Z=a,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){K=re.call(Z,K,$);break e}K=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,$=typeof re=="function"?re.call(Z,K,$):re,$==null)break e;K=ee({},K,$);break e;case 2:$r=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,$=d.effects,$===null?d.effects=[T]:$.push(T))}else Z={eventTime:Z,lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},H===null?(b=H=Z,P=K):H=H.next=Z,_|=$;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;$=T,T=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);if(H===null&&(P=K),d.baseState=P,d.firstBaseUpdate=b,d.lastBaseUpdate=H,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);Ui|=_,n.lanes=_,n.memoizedState=K}}function Hf(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ea={},qn=zr(ea),ta=zr(ea),na=zr(ea);function Fi(n){if(n===ea)throw Error(t(174));return n}function jc(n,r){switch($e(na,r),$e(ta,n),$e(qn,ea),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=lt(r,n)}He(qn),$e(qn,r)}function js(){He(qn),He(ta),He(na)}function Wf(n){Fi(na.current);var r=Fi(qn.current),a=lt(r,n.type);r!==a&&($e(ta,n),$e(qn,a))}function Bc(n){ta.current===n&&(He(qn),He(ta))}var Ye=zr(0);function Nl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $c=[];function qc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var Dl=Te.ReactCurrentDispatcher,Hc=Te.ReactCurrentBatchConfig,bi=0,Xe=null,ct=null,yt=null,Vl=!1,ra=!1,ia=0,yv=0;function Dt(){throw Error(t(321))}function Wc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Pn(n[a],r[a]))return!1;return!0}function Kc(n,r,a,c,d,p){if(bi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Dl.current=n===null||n.memoizedState===null?wv:Tv,n=a(c,d),ra){p=0;do{if(ra=!1,ia=0,25<=p)throw Error(t(301));p+=1,yt=ct=null,r.updateQueue=null,Dl.current=Iv,n=a(c,d)}while(ra)}if(Dl.current=Ll,r=ct!==null&&ct.next!==null,bi=0,yt=ct=Xe=null,Vl=!1,r)throw Error(t(300));return n}function Gc(){var n=ia!==0;return ia=0,n}function Hn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Xe.memoizedState=yt=n:yt=yt.next=n,yt}function pn(){if(ct===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var r=yt===null?Xe.memoizedState:yt.next;if(r!==null)yt=r,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?Xe.memoizedState=yt=n:yt=yt.next=n}return yt}function sa(n,r){return typeof r=="function"?r(n):r}function Qc(n){var r=pn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ct,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,P=null,b=p;do{var H=b.lane;if((bi&H)===H)P!==null&&(P=P.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),c=b.hasEagerState?b.eagerState:n(c,b.action);else{var K={lane:H,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};P===null?(T=P=K,_=c):P=P.next=K,Xe.lanes|=H,Ui|=H}b=b.next}while(b!==null&&b!==p);P===null?_=c:P.next=T,Pn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,Ui|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Yc(n){var r=pn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Pn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function Kf(){}function Gf(n,r){var a=Xe,c=pn(),d=r(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,Xc(Xf.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,oa(9,Yf.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));bi&30||Qf(a,r,d)}return d}function Qf(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Yf(n,r,a,c){r.value=a,r.getSnapshot=c,Jf(r)&&Zf(n)}function Xf(n,r,a){return a(function(){Jf(r)&&Zf(n)})}function Jf(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Pn(n,a)}catch{return!0}}function Zf(n){var r=fr(n,1);r!==null&&Vn(r,n,1,-1)}function ep(n){var r=Hn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},r.queue=n,n=n.dispatch=Ev.bind(null,Xe,n),[r.memoizedState,n]}function oa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function tp(){return pn().memoizedState}function Ol(n,r,a,c){var d=Hn();Xe.flags|=n,d.memoizedState=oa(1|r,a,void 0,c===void 0?null:c)}function xl(n,r,a,c){var d=pn();c=c===void 0?null:c;var p=void 0;if(ct!==null){var _=ct.memoizedState;if(p=_.destroy,c!==null&&Wc(c,_.deps)){d.memoizedState=oa(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=oa(1|r,a,p,c)}function np(n,r){return Ol(8390656,8,n,r)}function Xc(n,r){return xl(2048,8,n,r)}function rp(n,r){return xl(4,2,n,r)}function ip(n,r){return xl(4,4,n,r)}function sp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function op(n,r,a){return a=a!=null?a.concat([n]):null,xl(4,4,sp.bind(null,r,n),a)}function Jc(){}function ap(n,r){var a=pn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Wc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function lp(n,r){var a=pn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Wc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function up(n,r,a){return bi&21?(Pn(a,r)||(a=Pi(),Xe.lanes|=a,Ui|=a,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a)}function _v(n,r){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var c=Hc.transition;Hc.transition={};try{n(!1),r()}finally{Ce=a,Hc.transition=c}}function cp(){return pn().memoizedState}function vv(n,r,a){var c=Gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},hp(n))dp(r,a);else if(a=Bf(n,r,a,c),a!==null){var d=jt();Vn(a,n,c,d),fp(a,r,c)}}function Ev(n,r,a){var c=Gr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(hp(n))dp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Pn(T,_)){var P=r.interleaved;P===null?(d.next=d,Uc(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=Bf(n,r,d,c),a!==null&&(d=jt(),Vn(a,n,c,d),fp(a,r,c))}}function hp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function dp(n,r){ra=Vl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function fp(n,r,a){if(a&4194240){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}var Ll={readContext:fn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},wv={readContext:fn,useCallback:function(n,r){return Hn().memoizedState=[n,r===void 0?null:r],n},useContext:fn,useEffect:np,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ol(4194308,4,sp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ol(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ol(4,2,n,r)},useMemo:function(n,r){var a=Hn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Hn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=vv.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Hn();return n={current:n},r.memoizedState=n},useState:ep,useDebugValue:Jc,useDeferredValue:function(n){return Hn().memoizedState=n},useTransition:function(){var n=ep(!1),r=n[0];return n=_v.bind(null,n[1]),Hn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Hn();if(Ge){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));bi&30||Qf(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,np(Xf.bind(null,c,p,n),[n]),c.flags|=2048,oa(9,Yf.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Hn(),r=_t.identifierPrefix;if(Ge){var a=dr,c=hr;a=(c&~(1<<32-bt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ia++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=yv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Tv={readContext:fn,useCallback:ap,useContext:fn,useEffect:Xc,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:lp,useReducer:Qc,useRef:tp,useState:function(){return Qc(sa)},useDebugValue:Jc,useDeferredValue:function(n){var r=pn();return up(r,ct.memoizedState,n)},useTransition:function(){var n=Qc(sa)[0],r=pn().memoizedState;return[n,r]},useMutableSource:Kf,useSyncExternalStore:Gf,useId:cp,unstable_isNewReconciler:!1},Iv={readContext:fn,useCallback:ap,useContext:fn,useEffect:Xc,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:ip,useMemo:lp,useReducer:Yc,useRef:tp,useState:function(){return Yc(sa)},useDebugValue:Jc,useDeferredValue:function(n){var r=pn();return ct===null?r.memoizedState=n:up(r,ct.memoizedState,n)},useTransition:function(){var n=Yc(sa)[0],r=pn().memoizedState;return[n,r]},useMutableSource:Kf,useSyncExternalStore:Gf,useId:cp,unstable_isNewReconciler:!1};function kn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Zc(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ml={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Gr(n),p=pr(c,d);p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Vn(r,n,d,c),Cl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Gr(n),p=pr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=qr(n,p,d),r!==null&&(Vn(r,n,d,c),Cl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=jt(),c=Gr(n),d=pr(a,c);d.tag=2,r!=null&&(d.callback=r),r=qr(n,d,c),r!==null&&(Vn(r,n,c,a),Cl(r,n,c))}};function pp(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!Wo(a,c)||!Wo(d,p):!0}function mp(n,r,a){var c=!1,d=jr,p=r.contextType;return typeof p=="object"&&p!==null?p=fn(p):(d=Wt(r)?Oi:Nt.current,c=r.contextTypes,p=(c=c!=null)?xs(n,d):jr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ml,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function gp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Ml.enqueueReplaceState(r,r.state,null)}function eh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},zc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=fn(p):(p=Wt(r)?Oi:Nt.current,d.context=xs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Zc(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Ml.enqueueReplaceState(d,d.state,null),kl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function th(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function nh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Sv=typeof WeakMap=="function"?WeakMap:Map;function yp(n,r,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){$l||($l=!0,yh=c),nh(n,r)},a}function _p(n,r,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){nh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){nh(n,r),typeof c!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function vp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Sv;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=bv.bind(null,n,r,a),r.then(n,n))}function Ep(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function wp(n,r,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=pr(-1,1),r.tag=2,qr(a,r,1))),a.lanes|=1),n)}var Av=Te.ReactCurrentOwner,Kt=!1;function zt(n,r,a,c){r.child=n===null?jf(r,null,a,c):bs(r,n.child,a,c)}function Tp(n,r,a,c,d){a=a.render;var p=r.ref;return zs(r,d),c=Kc(n,r,a,c,p,d),a=Gc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,mr(n,r,d)):(Ge&&a&&Nc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Ip(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Sh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Sp(n,r,p,c,d)):(n=Ql(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&d)){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:Wo,a(_,c)&&n.ref===r.ref)return mr(n,r,d)}return r.flags|=1,n=Yr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Sp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Wo(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)n.flags&131072&&(Kt=!0);else return r.lanes=n.lanes,mr(n,r,d)}return rh(n,r,a,c,d)}function Ap(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(qs,on),on|=a;else{if(!(a&1073741824))return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(qs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,$e(qs,on),on|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,$e(qs,on),on|=c;return zt(n,r,d,a),r.child}function Rp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function rh(n,r,a,c,d){var p=Wt(a)?Oi:Nt.current;return p=xs(r,p),zs(r,d),a=Kc(n,r,a,c,p,d),c=Gc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,mr(n,r,d)):(Ge&&c&&Nc(r),r.flags|=1,zt(n,r,a,d),r.child)}function Pp(n,r,a,c,d){if(Wt(a)){var p=!0;El(r)}else p=!1;if(zs(r,d),r.stateNode===null)bl(n,r),mp(r,a,c),eh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var P=_.context,b=a.contextType;typeof b=="object"&&b!==null?b=fn(b):(b=Wt(a)?Oi:Nt.current,b=xs(r,b));var H=a.getDerivedStateFromProps,K=typeof H=="function"||typeof _.getSnapshotBeforeUpdate=="function";K||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||P!==b)&&gp(r,_,c,b),$r=!1;var $=r.memoizedState;_.state=$,kl(r,c,_,d),P=r.memoizedState,T!==c||$!==P||Ht.current||$r?(typeof H=="function"&&(Zc(r,a,H,c),P=r.memoizedState),(T=$r||pp(r,a,T,c,$,P,b))?(K||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),_.props=c,_.state=P,_.context=b,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,$f(n,r),T=r.memoizedProps,b=r.type===r.elementType?T:kn(r.type,T),_.props=b,K=r.pendingProps,$=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=fn(P):(P=Wt(a)?Oi:Nt.current,P=xs(r,P));var Z=a.getDerivedStateFromProps;(H=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==K||$!==P)&&gp(r,_,c,P),$r=!1,$=r.memoizedState,_.state=$,kl(r,c,_,d);var re=r.memoizedState;T!==K||$!==re||Ht.current||$r?(typeof Z=="function"&&(Zc(r,a,Z,c),re=r.memoizedState),(b=$r||pp(r,a,b,c,$,re,P)||!1)?(H||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,P)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=P,c=b):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&$===n.memoizedState||(r.flags|=1024),c=!1)}return ih(n,r,a,c,p,d)}function ih(n,r,a,c,d,p){Rp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Vf(r,a,!1),mr(n,r,p);c=r.stateNode,Av.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=bs(r,n.child,null,p),r.child=bs(r,null,T,p)):zt(n,r,T,p),r.memoizedState=c.state,d&&Vf(r,a,!0),r.child}function Cp(n){var r=n.stateNode;r.pendingContext?Nf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Nf(n,r.context,!1),jc(n,r.containerInfo)}function kp(n,r,a,c,d){return Fs(),xc(d),r.flags|=256,zt(n,r,a,c),r.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Np(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Ye,d&1),n===null)return Oc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},!(c&1)&&p!==null?(p.childLanes=0,p.pendingProps=_):p=Yl(_,c,0,null),n=$i(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=oh(a),r.memoizedState=sh,n):ah(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return Rv(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var P={mode:"hidden",children:c.children};return!(_&1)&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=Yr(d,P),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=Yr(T,p):(p=$i(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?oh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=sh,c}return p=n.child,n=p.sibling,c=Yr(p,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function ah(n,r){return r=Yl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Fl(n,r,a,c){return c!==null&&xc(c),bs(r,n.child,null,a),n=ah(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Rv(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=th(Error(t(422))),Fl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=Yl({mode:"visible",children:c.children},d,0,null),p=$i(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,r.mode&1&&bs(r,n.child,null,_),r.child.memoizedState=oh(_),r.memoizedState=sh,p);if(!(r.mode&1))return Fl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=th(p,c,void 0),Fl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Kt||T){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,fr(n,d),Vn(c,n,d,-1))}return Ih(),c=th(Error(t(421))),Fl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=Uv.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,sn=Ur(d.nextSibling),rn=r,Ge=!0,Cn=null,n!==null&&(hn[dn++]=hr,hn[dn++]=dr,hn[dn++]=xi,hr=n.id,dr=n.overflow,xi=r),r=ah(r,c.children),r.flags|=4096,r)}function Dp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),bc(n.return,r,a)}function lh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function Vp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Ye.current,c&2)c=c&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,a,r);else if(n.tag===19)Dp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Ye,c),!(r.mode&1))r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Nl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),lh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Nl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}lh(r,!0,a,null,p);break;case"together":lh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function bl(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function mr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ui|=r.lanes,!(a&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Yr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Yr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Pv(n,r,a){switch(r.tag){case 3:Cp(r),Fs();break;case 5:Wf(r);break;case 1:Wt(r.type)&&El(r);break;case 4:jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(Rl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Ye,Ye.current&1),r.flags|=128,null):a&r.child.childLanes?Np(n,r,a):($e(Ye,Ye.current&1),n=mr(n,r,a),n!==null?n.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,n.flags&128){if(c)return Vp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Ap(n,r,a)}return mr(n,r,a)}var Op,uh,xp,Lp;Op=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},uh=function(){},xp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Fi(qn.current);var p=null;switch(a){case"input":d=gi(n,d),c=gi(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=wo(n,d),c=wo(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=yl)}Po(a,c);var _;a=null;for(b in d)if(!c.hasOwnProperty(b)&&d.hasOwnProperty(b)&&d[b]!=null)if(b==="style"){var T=d[b];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(o.hasOwnProperty(b)?p||(p=[]):(p=p||[]).push(b,null));for(b in c){var P=c[b];if(T=d!=null?d[b]:void 0,c.hasOwnProperty(b)&&P!==T&&(P!=null||T!=null))if(b==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&T[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(p||(p=[]),p.push(b,a)),a=P;else b==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,T=T?T.__html:void 0,P!=null&&T!==P&&(p=p||[]).push(b,P)):b==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(b,""+P):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(o.hasOwnProperty(b)?(P!=null&&b==="onScroll"&&qe("scroll",n),p||T===P||(p=[])):(p=p||[]).push(b,P))}a&&(p=p||[]).push("style",a);var b=p;(r.updateQueue=b)&&(r.flags|=4)}},Lp=function(n,r,a,c){a!==c&&(r.flags|=4)};function aa(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function Cv(n,r,a){var c=r.pendingProps;switch(Dc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Wt(r.type)&&vl(),Vt(r),null;case 3:return c=r.stateNode,js(),He(Ht),He(Nt),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Sl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Cn!==null&&(Eh(Cn),Cn=null))),uh(n,r),Vt(r),null;case 5:Bc(r);var d=Fi(na.current);if(a=r.type,n!==null&&r.stateNode!=null)xp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=Fi(qn.current),Sl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[$n]=r,c[Xo]=p,n=(r.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<Go.length;d++)qe(Go[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":ns(c,p),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},qe("invalid",c);break;case"textarea":is(c,p),qe("invalid",c)}Po(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&gl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&qe("scroll",c)}switch(a){case"input":Zn(c),Ba(c,p,!0);break;case"textarea":Zn(c),To(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=yl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[$n]=r,n[Xo]=c,Op(n,r,!1,!1),r.stateNode=n;e:{switch(_=Co(a,c),a){case"dialog":qe("cancel",n),qe("close",n),d=c;break;case"iframe":case"object":case"embed":qe("load",n),d=c;break;case"video":case"audio":for(d=0;d<Go.length;d++)qe(Go[d],n);d=c;break;case"source":qe("error",n),d=c;break;case"img":case"image":case"link":qe("error",n),qe("load",n),d=c;break;case"details":qe("toggle",n),d=c;break;case"input":ns(n,c),d=gi(n,c),qe("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),qe("invalid",n);break;case"textarea":is(n,c),d=wo(n,c),qe("invalid",n);break;default:d=c}Po(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var P=T[p];p==="style"?Ao(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Io(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Cr(n,P):typeof P=="number"&&Cr(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&qe("scroll",n):P!=null&&ye(n,p,P,_))}switch(a){case"input":Zn(n),Ba(n,c,!1);break;case"textarea":Zn(n),To(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?tr(n,!!c.multiple,p,!1):c.defaultValue!=null&&tr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=yl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)Lp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Fi(na.current),Fi(qn.current),Sl(r)){if(c=r.stateNode,a=r.memoizedProps,c[$n]=r,(p=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:gl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$n]=r,r.stateNode=c}return Vt(r),null;case 13:if(He(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&sn!==null&&r.mode&1&&!(r.flags&128))bf(),Fs(),r.flags|=98560,p=!1;else if(p=Sl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[$n]=r}else Fs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else Cn!==null&&(Eh(Cn),Cn=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(n===null||Ye.current&1?ht===0&&(ht=3):Ih())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return js(),uh(n,r),n===null&&Qo(r.stateNode.containerInfo),Vt(r),null;case 10:return Fc(r.type._context),Vt(r),null;case 17:return Wt(r.type)&&vl(),Vt(r),null;case 19:if(He(Ye),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)aa(p,!1);else{if(ht!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(_=Nl(n),_!==null){for(r.flags|=128,aa(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&Be()>Hs&&(r.flags|=128,c=!0,aa(p,!1),r.lanes=4194304)}else{if(!c)if(n=Nl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),aa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ge)return Vt(r),null}else 2*Be()-p.renderingStartTime>Hs&&a!==1073741824&&(r.flags|=128,c=!0,aa(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Be(),r.sibling=null,a=Ye.current,$e(Ye,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return Th(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?on&1073741824&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function kv(n,r){switch(Dc(r),r.tag){case 1:return Wt(r.type)&&vl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return js(),He(Ht),He(Nt),qc(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Bc(r),null;case 13:if(He(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return He(Ye),null;case 4:return js(),null;case 10:return Fc(r.type._context),null;case 22:case 23:return Th(),null;case 24:return null;default:return null}}var Ul=!1,Ot=!1,Nv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function $s(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function ch(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var Mp=!1;function Dv(n,r){if(Tc=Mr,n=pf(),pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,P=-1,b=0,H=0,K=n,$=null;t:for(;;){for(var Z;K!==a||d!==0&&K.nodeType!==3||(T=_+d),K!==p||c!==0&&K.nodeType!==3||(P=_+c),K.nodeType===3&&(_+=K.nodeValue.length),(Z=K.firstChild)!==null;)$=K,K=Z;for(;;){if(K===n)break t;if($===a&&++b===d&&(T=_),$===p&&++H===c&&(P=_),(Z=K.nextSibling)!==null)break;K=$,$=K.parentNode}K=Z}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ic={focusedElem:n,selectionRange:a},Mr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,nt=re.memoizedState,L=r.stateNode,k=L.getSnapshotBeforeUpdate(r.elementType===r.type?ie:kn(r.type,ie),nt);L.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(G){Ze(r,r.return,G)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=Mp,Mp=!1,re}function la(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ch(r,a,p)}d=d.next}while(d!==c)}}function zl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function hh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Fp(n){var r=n.alternate;r!==null&&(n.alternate=null,Fp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[$n],delete r[Xo],delete r[Pc],delete r[fv],delete r[pv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bp(n){return n.tag===5||n.tag===3||n.tag===4}function Up(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=yl));else if(c!==4&&(n=n.child,n!==null))for(dh(n,r,a),n=n.sibling;n!==null;)dh(n,r,a),n=n.sibling}function fh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(fh(n,r,a),n=n.sibling;n!==null;)fh(n,r,a),n=n.sibling}var It=null,Nn=!1;function Hr(n,r,a){for(a=a.child;a!==null;)zp(n,r,a),a=a.sibling}function zp(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ai,a)}catch{}switch(a.tag){case 5:Ot||$s(a,r);case 6:var c=It,d=Nn;It=null,Hr(n,r,a),It=c,Nn=d,It!==null&&(Nn?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Nn?(n=It,a=a.stateNode,n.nodeType===8?Rc(n.parentNode,a):n.nodeType===1&&Rc(n,a),An(n)):Rc(It,a.stateNode));break;case 4:c=It,d=Nn,It=a.stateNode.containerInfo,Nn=!0,Hr(n,r,a),It=c,Nn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&(p&2||p&4)&&ch(a,r,_),d=d.next}while(d!==c)}Hr(n,r,a);break;case 1:if(!Ot&&($s(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,r,T)}Hr(n,r,a);break;case 21:Hr(n,r,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,Hr(n,r,a),Ot=c):Hr(n,r,a);break;default:Hr(n,r,a)}}function jp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Nv),r.forEach(function(c){var d=zv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Dn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,Nn=!1;break e;case 3:It=T.stateNode.containerInfo,Nn=!0;break e;case 4:It=T.stateNode.containerInfo,Nn=!0;break e}T=T.return}if(It===null)throw Error(t(160));zp(p,_,d),It=null,Nn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(b){Ze(d,r,b)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Bp(r,n),r=r.sibling}function Bp(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dn(r,n),Wn(n),c&4){try{la(3,n,n.return),zl(3,n)}catch(ie){Ze(n,n.return,ie)}try{la(5,n,n.return)}catch(ie){Ze(n,n.return,ie)}}break;case 1:Dn(r,n),Wn(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(Dn(r,n),Wn(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var d=n.stateNode;try{Cr(d,"")}catch(ie){Ze(n,n.return,ie)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&vo(d,p),Co(T,_);var b=Co(T,p);for(_=0;_<P.length;_+=2){var H=P[_],K=P[_+1];H==="style"?Ao(d,K):H==="dangerouslySetInnerHTML"?Io(d,K):H==="children"?Cr(d,K):ye(d,H,K,b)}switch(T){case"input":Eo(d,p);break;case"textarea":ss(d,p);break;case"select":var $=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?tr(d,!!p.multiple,Z,!1):$!==!!p.multiple&&(p.defaultValue!=null?tr(d,!!p.multiple,p.defaultValue,!0):tr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Xo]=p}catch(ie){Ze(n,n.return,ie)}}break;case 6:if(Dn(r,n),Wn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ie){Ze(n,n.return,ie)}}break;case 3:if(Dn(r,n),Wn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{An(r.containerInfo)}catch(ie){Ze(n,n.return,ie)}break;case 4:Dn(r,n),Wn(n);break;case 13:Dn(r,n),Wn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(gh=Be())),c&4&&jp(n);break;case 22:if(H=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(b=Ot)||H,Dn(r,n),Ot=b):Dn(r,n),Wn(n),c&8192){if(b=n.memoizedState!==null,(n.stateNode.isHidden=b)&&!H&&n.mode&1)for(ne=n,H=n.child;H!==null;){for(K=ne=H;ne!==null;){switch($=ne,Z=$.child,$.tag){case 0:case 11:case 14:case 15:la(4,$,$.return);break;case 1:$s($,$.return);var re=$.stateNode;if(typeof re.componentWillUnmount=="function"){c=$,a=$.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){Ze(c,a,ie)}}break;case 5:$s($,$.return);break;case 22:if($.memoizedState!==null){Hp(K);continue}}Z!==null?(Z.return=$,ne=Z):Hp(K)}H=H.sibling}e:for(H=null,K=n;;){if(K.tag===5){if(H===null){H=K;try{d=K.stateNode,b?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=K.stateNode,P=K.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,T.style.display=So("display",_))}catch(ie){Ze(n,n.return,ie)}}}else if(K.tag===6){if(H===null)try{K.stateNode.nodeValue=b?"":K.memoizedProps}catch(ie){Ze(n,n.return,ie)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===n)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===n)break e;for(;K.sibling===null;){if(K.return===null||K.return===n)break e;H===K&&(H=null),K=K.return}H===K&&(H=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Dn(r,n),Wn(n),c&4&&jp(n);break;case 21:break;default:Dn(r,n),Wn(n)}}function Wn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Cr(d,""),c.flags&=-33);var p=Up(n);fh(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=Up(n);dh(n,T,_);break;default:throw Error(t(161))}}catch(P){Ze(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Vv(n,r,a){ne=n,$p(n)}function $p(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Ul;if(!_){var T=d.alternate,P=T!==null&&T.memoizedState!==null||Ot;T=Ul;var b=Ot;if(Ul=_,(Ot=P)&&!b)for(ne=d;ne!==null;)_=ne,P=_.child,_.tag===22&&_.memoizedState!==null?Wp(d):P!==null?(P.return=_,ne=P):Wp(d);for(;p!==null;)ne=p,$p(p),p=p.sibling;ne=d,Ul=T,Ot=b}qp(n)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ne=p):qp(n)}}function qp(n){for(;ne!==null;){var r=ne;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ot||zl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:kn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&Hf(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Hf(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var b=r.alternate;if(b!==null){var H=b.memoizedState;if(H!==null){var K=H.dehydrated;K!==null&&An(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||r.flags&512&&hh(r)}catch($){Ze(r,r.return,$)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Hp(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function Wp(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{zl(4,r)}catch(P){Ze(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){Ze(r,d,P)}}var p=r.return;try{hh(r)}catch(P){Ze(r,p,P)}break;case 5:var _=r.return;try{hh(r)}catch(P){Ze(r,_,P)}}}catch(P){Ze(r,r.return,P)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var Ov=Math.ceil,jl=Te.ReactCurrentDispatcher,ph=Te.ReactCurrentOwner,mn=Te.ReactCurrentBatchConfig,Oe=0,_t=null,st=null,St=0,on=0,qs=zr(0),ht=0,ua=null,Ui=0,Bl=0,mh=0,ca=null,Gt=null,gh=0,Hs=1/0,gr=null,$l=!1,yh=null,Wr=null,ql=!1,Kr=null,Hl=0,ha=0,_h=null,Wl=-1,Kl=0;function jt(){return Oe&6?Be():Wl!==-1?Wl:Wl=Be()}function Gr(n){return n.mode&1?Oe&2&&St!==0?St&-St:gv.transition!==null?(Kl===0&&(Kl=Pi()),Kl):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:Uo(n.type)),n):1}function Vn(n,r,a,c){if(50<ha)throw ha=0,_h=null,Error(t(185));Vr(n,a,c),(!(Oe&2)||n!==_t)&&(n===_t&&(!(Oe&2)&&(Bl|=a),ht===4&&Qr(n,St)),Qt(n,c),a===1&&Oe===0&&!(r.mode&1)&&(Hs=Be()+500,wl&&Br()))}function Qt(n,r){var a=n.callbackNode;ir(n,r);var c=Ri(n,n===_t?St:0);if(c===0)a!==null&&xo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&xo(a),r===1)n.tag===0?mv(Gp.bind(null,n)):Of(Gp.bind(null,n)),hv(function(){!(Oe&6)&&Br()}),a=null;else{switch(xr(c)){case 1:a=Si;break;case 4:a=kr;break;case 16:a=ln;break;case 536870912:a=Ka;break;default:a=ln}a=nm(a,Kp.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Kp(n,r){if(Wl=-1,Kl=0,Oe&6)throw Error(t(327));var a=n.callbackNode;if(Ws()&&n.callbackNode!==a)return null;var c=Ri(n,n===_t?St:0);if(c===0)return null;if(c&30||c&n.expiredLanes||r)r=Gl(n,c);else{r=c;var d=Oe;Oe|=2;var p=Yp();(_t!==n||St!==r)&&(gr=null,Hs=Be()+500,ji(n,r));do try{Mv();break}catch(T){Qp(n,T)}while(!0);Mc(),jl.current=p,Oe=d,st!==null?r=0:(_t=null,St=0,r=ht)}if(r!==0){if(r===2&&(d=en(n),d!==0&&(c=d,r=vh(n,d))),r===1)throw a=ua,ji(n,0),Qr(n,c),Qt(n,Be()),a;if(r===6)Qr(n,c);else{if(d=n.current.alternate,!(c&30)&&!xv(d)&&(r=Gl(n,c),r===2&&(p=en(n),p!==0&&(c=p,r=vh(n,p))),r===1))throw a=ua,ji(n,0),Qr(n,c),Qt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Bi(n,Gt,gr);break;case 3:if(Qr(n,c),(c&130023424)===c&&(r=gh+500-Be(),10<r)){if(Ri(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){jt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ac(Bi.bind(null,n,Gt,gr),r);break}Bi(n,Gt,gr);break;case 4:if(Qr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-bt(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ov(c/1960))-c,10<c){n.timeoutHandle=Ac(Bi.bind(null,n,Gt,gr),c);break}Bi(n,Gt,gr);break;case 5:Bi(n,Gt,gr);break;default:throw Error(t(329))}}}return Qt(n,Be()),n.callbackNode===a?Kp.bind(null,n):null}function vh(n,r){var a=ca;return n.current.memoizedState.isDehydrated&&(ji(n,r).flags|=256),n=Gl(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Eh(r)),n}function Eh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function xv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~mh,r&=~Bl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-bt(r),c=1<<a;n[a]=-1,r&=~c}}function Gp(n){if(Oe&6)throw Error(t(327));Ws();var r=Ri(n,0);if(!(r&1))return Qt(n,Be()),null;var a=Gl(n,r);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(r=c,a=vh(n,c))}if(a===1)throw a=ua,ji(n,0),Qr(n,r),Qt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Bi(n,Gt,gr),Qt(n,Be()),null}function wh(n,r){var a=Oe;Oe|=1;try{return n(r)}finally{Oe=a,Oe===0&&(Hs=Be()+500,wl&&Br())}}function zi(n){Kr!==null&&Kr.tag===0&&!(Oe&6)&&Ws();var r=Oe;Oe|=1;var a=mn.transition,c=Ce;try{if(mn.transition=null,Ce=1,n)return n()}finally{Ce=c,mn.transition=a,Oe=r,!(Oe&6)&&Br()}}function Th(){on=qs.current,He(qs)}function ji(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,cv(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(Dc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&vl();break;case 3:js(),He(Ht),He(Nt),qc();break;case 5:Bc(c);break;case 4:js();break;case 13:He(Ye);break;case 19:He(Ye);break;case 10:Fc(c.type._context);break;case 22:case 23:Th()}a=a.return}if(_t=n,st=n=Yr(n.current,null),St=on=r,ht=0,ua=null,mh=Bl=Ui=0,Gt=ca=null,Mi!==null){for(r=0;r<Mi.length;r++)if(a=Mi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}Mi=null}return n}function Qp(n,r){do{var a=st;try{if(Mc(),Dl.current=Ll,Vl){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Vl=!1}if(bi=0,yt=ct=Xe=null,ra=!1,ia=0,ph.current=null,a===null||a.return===null){ht=1,ua=r,st=null;break}e:{var p=n,_=a.return,T=a,P=r;if(r=St,T.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var b=P,H=T,K=H.tag;if(!(H.mode&1)&&(K===0||K===11||K===15)){var $=H.alternate;$?(H.updateQueue=$.updateQueue,H.memoizedState=$.memoizedState,H.lanes=$.lanes):(H.updateQueue=null,H.memoizedState=null)}var Z=Ep(_);if(Z!==null){Z.flags&=-257,wp(Z,_,T,p,r),Z.mode&1&&vp(p,b,r),r=Z,P=b;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(P),r.updateQueue=ie}else re.add(P);break e}else{if(!(r&1)){vp(p,b,r),Ih();break e}P=Error(t(426))}}else if(Ge&&T.mode&1){var nt=Ep(_);if(nt!==null){!(nt.flags&65536)&&(nt.flags|=256),wp(nt,_,T,p,r),xc(Bs(P,T));break e}}p=P=Bs(P,T),ht!==4&&(ht=2),ca===null?ca=[p]:ca.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=yp(p,P,r);qf(p,L);break e;case 1:T=P;var k=p.type,M=p.stateNode;if(!(p.flags&128)&&(typeof k.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Wr===null||!Wr.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var G=_p(p,T,r);qf(p,G);break e}}p=p.return}while(p!==null)}Jp(a)}catch(se){r=se,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function Yp(){var n=jl.current;return jl.current=Ll,n===null?Ll:n}function Ih(){(ht===0||ht===3||ht===2)&&(ht=4),_t===null||!(Ui&268435455)&&!(Bl&268435455)||Qr(_t,St)}function Gl(n,r){var a=Oe;Oe|=2;var c=Yp();(_t!==n||St!==r)&&(gr=null,ji(n,r));do try{Lv();break}catch(d){Qp(n,d)}while(!0);if(Mc(),Oe=a,jl.current=c,st!==null)throw Error(t(261));return _t=null,St=0,ht}function Lv(){for(;st!==null;)Xp(st)}function Mv(){for(;st!==null&&!Ha();)Xp(st)}function Xp(n){var r=tm(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?Jp(n):st=r,ph.current=null}function Jp(n){var r=n;do{var a=r.alternate;if(n=r.return,r.flags&32768){if(a=kv(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,st=null;return}}else if(a=Cv(a,r,on),a!==null){st=a;return}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ht===0&&(ht=5)}function Bi(n,r,a){var c=Ce,d=mn.transition;try{mn.transition=null,Ce=1,Fv(n,r,a,c)}finally{mn.transition=d,Ce=c}return null}function Fv(n,r,a,c){do Ws();while(Kr!==null);if(Oe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===_t&&(st=_t=null,St=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ql||(ql=!0,nm(ln,function(){return Ws(),null})),p=(a.flags&15990)!==0,a.subtreeFlags&15990||p){p=mn.transition,mn.transition=null;var _=Ce;Ce=1;var T=Oe;Oe|=4,ph.current=null,Dv(n,a),Bp(a,n),rv(Ic),Mr=!!Tc,Ic=Tc=null,n.current=a,Vv(a),oc(),Oe=T,Ce=_,mn.transition=p}else n.current=a;if(ql&&(ql=!1,Kr=n,Hl=d),p=n.pendingLanes,p===0&&(Wr=null),Ga(a.stateNode),Qt(n,Be()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if($l)throw $l=!1,n=yh,yh=null,n;return Hl&1&&n.tag!==0&&Ws(),p=n.pendingLanes,p&1?n===_h?ha++:(ha=0,_h=n):ha=0,Br(),null}function Ws(){if(Kr!==null){var n=xr(Hl),r=mn.transition,a=Ce;try{if(mn.transition=null,Ce=16>n?16:n,Kr===null)var c=!1;else{if(n=Kr,Kr=null,Hl=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if(ne.flags&16){var T=p.deletions;if(T!==null){for(var P=0;P<T.length;P++){var b=T[P];for(ne=b;ne!==null;){var H=ne;switch(H.tag){case 0:case 11:case 15:la(8,H,p)}var K=H.child;if(K!==null)K.return=H,ne=K;else for(;ne!==null;){H=ne;var $=H.sibling,Z=H.return;if(Fp(H),H===b){ne=null;break}if($!==null){$.return=Z,ne=$;break}ne=Z}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var nt=ie.sibling;ie.sibling=null,ie=nt}while(ie!==null)}}ne=p}}if(p.subtreeFlags&2064&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,p.flags&2048)switch(p.tag){case 0:case 11:case 15:la(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,ne=L;break e}ne=p.return}}var k=n.current;for(ne=k;ne!==null;){_=ne;var M=_.child;if(_.subtreeFlags&2064&&M!==null)M.return=_,ne=M;else e:for(_=k;ne!==null;){if(T=ne,T.flags&2048)try{switch(T.tag){case 0:case 11:case 15:zl(9,T)}}catch(se){Ze(T,T.return,se)}if(T===_){ne=null;break e}var G=T.sibling;if(G!==null){G.return=T.return,ne=G;break e}ne=T.return}}if(Oe=d,Br(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ai,n)}catch{}c=!0}return c}finally{Ce=a,mn.transition=r}}return!1}function Zp(n,r,a){r=Bs(a,r),r=yp(n,r,1),n=qr(n,r,1),r=jt(),n!==null&&(Vr(n,1,r),Qt(n,r))}function Ze(n,r,a){if(n.tag===3)Zp(n,n,a);else for(;r!==null;){if(r.tag===3){Zp(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wr===null||!Wr.has(c))){n=Bs(a,n),n=_p(r,n,1),r=qr(r,n,1),n=jt(),r!==null&&(Vr(r,1,n),Qt(r,n));break}}r=r.return}}function bv(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=jt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(ht===4||ht===3&&(St&130023424)===St&&500>Be()-gh?ji(n,0):mh|=a),Qt(n,r)}function em(n,r){r===0&&(n.mode&1?(r=ms,ms<<=1,!(ms&130023424)&&(ms=4194304)):r=1);var a=jt();n=fr(n,r),n!==null&&(Vr(n,r,a),Qt(n,a))}function Uv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),em(n,a)}function zv(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),em(n,a)}var tm;tm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Kt=!0;else{if(!(n.lanes&a)&&!(r.flags&128))return Kt=!1,Pv(n,r,a);Kt=!!(n.flags&131072)}else Kt=!1,Ge&&r.flags&1048576&&xf(r,Il,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;bl(n,r),n=r.pendingProps;var d=xs(r,Nt.current);zs(r,a),d=Kc(null,r,c,n,d,a);var p=Gc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(p=!0,El(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,zc(r),d.updater=Ml,r.stateNode=d,d._reactInternals=r,eh(r,c,n,a),r=ih(null,r,c,!0,p,a)):(r.tag=0,Ge&&p&&Nc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(bl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=Bv(c),n=kn(c,n),d){case 0:r=rh(null,r,c,n,a);break e;case 1:r=Pp(null,r,c,n,a);break e;case 11:r=Tp(null,r,c,n,a);break e;case 14:r=Ip(null,r,c,kn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),rh(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),Pp(n,r,c,d,a);case 3:e:{if(Cp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,$f(n,r),kl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Bs(Error(t(423)),r),r=kp(n,r,c,a,d);break e}else if(c!==d){d=Bs(Error(t(424)),r),r=kp(n,r,c,a,d);break e}else for(sn=Ur(r.stateNode.containerInfo.firstChild),rn=r,Ge=!0,Cn=null,a=jf(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),c===d){r=mr(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return Wf(r),n===null&&Oc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Sc(c,d)?_=null:p!==null&&Sc(c,p)&&(r.flags|=32),Rp(n,r),zt(n,r,_,a),r.child;case 6:return n===null&&Oc(r),null;case 13:return Np(n,r,a);case 4:return jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=bs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),Tp(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,$e(Rl,c._currentValue),c._currentValue=_,p!==null)if(Pn(p.value,_)){if(p.children===d.children&&!Ht.current){r=mr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var P=T.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=pr(-1,a&-a),P.tag=2;var b=p.updateQueue;if(b!==null){b=b.shared;var H=b.pending;H===null?P.next=P:(P.next=H.next,H.next=P),b.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),bc(p.return,a,r),T.lanes|=a;break}P=P.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),bc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,zs(r,a),d=fn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=kn(c,r.pendingProps),d=kn(c.type,d),Ip(n,r,c,d,a);case 15:return Sp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:kn(c,d),bl(n,r),r.tag=1,Wt(c)?(n=!0,El(r)):n=!1,zs(r,a),mp(r,c,d),eh(r,c,d,a),ih(null,r,c,!0,n,a);case 19:return Vp(n,r,a);case 22:return Ap(n,r,a)}throw Error(t(156,r.tag))};function nm(n,r){return fs(n,r)}function jv(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,r,a,c){return new jv(n,r,a,c)}function Sh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Bv(n){if(typeof n=="function")return Sh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Ct)return 14}return 2}function Yr(n,r){var a=n.alternate;return a===null?(a=gn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ql(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Sh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return $i(a.children,d,p,r);case I:_=8,d|=8;break;case A:return n=gn(12,a,r,d|2),n.elementType=A,n.lanes=p,n;case S:return n=gn(13,a,r,d),n.elementType=S,n.lanes=p,n;case et:return n=gn(19,a,r,d),n.elementType=et,n.lanes=p,n;case Ue:return Yl(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:_=10;break e;case D:_=9;break e;case O:_=11;break e;case Ct:_=14;break e;case kt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=gn(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function $i(n,r,a,c){return n=gn(7,n,c,r),n.lanes=a,n}function Yl(n,r,a,c){return n=gn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Ah(n,r,a){return n=gn(6,n,null,r),n.lanes=a,n}function Rh(n,r,a){return r=gn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function $v(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dr(0),this.expirationTimes=Dr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ph(n,r,a,c,d,p,_,T,P){return n=new $v(n,r,a,T,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=gn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(p),n}function qv(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function rm(n){if(!n)return jr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return Df(n,a,r)}return r}function im(n,r,a,c,d,p,_,T,P){return n=Ph(a,c,!0,n,d,p,_,T,P),n.context=rm(null),a=n.current,c=jt(),d=Gr(a),p=pr(c,d),p.callback=r??null,qr(a,p,d),n.current.lanes=d,Vr(n,d,c),Qt(n,c),n}function Xl(n,r,a,c){var d=r.current,p=jt(),_=Gr(d);return a=rm(a),r.context===null?r.context=a:r.pendingContext=a,r=pr(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(d,r,_),n!==null&&(Vn(n,d,_,p),Cl(n,d,_)),_}function Jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Ch(n,r){sm(n,r),(n=n.alternate)&&sm(n,r)}function Hv(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function kh(n){this._internalRoot=n}Zl.prototype.render=kh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Xl(n,r,null,null)},Zl.prototype.unmount=kh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;zi(function(){Xl(null,n,null,null)}),r[ur]=null}};function Zl(n){this._internalRoot=n}Zl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Za();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Un.length&&r!==0&&r<Un[a].priority;a++);Un.splice(a,0,n),a===0&&nl(n)}};function Nh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function eu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function am(){}function Wv(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var b=Jl(_);p.call(b)}}var _=im(r,c,n,0,null,!1,!1,"",am);return n._reactRootContainer=_,n[ur]=_.current,Qo(n.nodeType===8?n.parentNode:n),zi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var b=Jl(P);T.call(b)}}var P=Ph(n,0,!1,null,null,!1,!1,"",am);return n._reactRootContainer=P,n[ur]=P.current,Qo(n.nodeType===8?n.parentNode:n),zi(function(){Xl(r,P,a,c)}),P}function tu(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var P=Jl(_);T.call(P)}}Xl(r,_,n,d)}else _=Wv(a,r,n,d,c);return Jl(_)}Xa=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Nr(r.pendingLanes);a!==0&&(Or(r,a|1),Qt(r,Be()),!(Oe&6)&&(Hs=Be()+500,Br()))}break;case 13:zi(function(){var c=fr(n,1);if(c!==null){var d=jt();Vn(c,n,1,d)}}),Ch(n,1)}},gs=function(n){if(n.tag===13){var r=fr(n,134217728);if(r!==null){var a=jt();Vn(r,n,134217728,a)}Ch(n,134217728)}},Ja=function(n){if(n.tag===13){var r=Gr(n),a=fr(n,r);if(a!==null){var c=jt();Vn(a,n,r,c)}Ch(n,r)}},Za=function(){return Ce},el=function(n,r){var a=Ce;try{return Ce=n,r()}finally{Ce=a}},as=function(n,r,a){switch(r){case"input":if(Eo(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=_l(c);if(!d)throw Error(t(90));ts(c),Eo(c,d)}}}break;case"textarea":ss(n,a);break;case"select":r=a.value,r!=null&&tr(n,!!a.multiple,r,!1)}},Ei=wh,No=zi;var Kv={usingClientEntryPoint:!1,Events:[Jo,Vs,_l,Fn,ko,wh]},da={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gv={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Oo(n),n===null?null:n.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||Hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Ai=nu.inject(Gv),Zt=nu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kv,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nh(r))throw Error(t(200));return qv(n,r,null,a)},Yt.createRoot=function(n,r){if(!Nh(n))throw Error(t(299));var a=!1,c="",d=om;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Ph(n,1,!1,null,null,a,!1,c,d),n[ur]=r.current,Qo(n.nodeType===8?n.parentNode:n),new kh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Oo(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return zi(n)},Yt.hydrate=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!Nh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=im(r,null,n,1,a??null,d,!1,p,_),n[ur]=r.current,Qo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new Zl(r)},Yt.render=function(n,r,a){if(!eu(r))throw Error(t(200));return tu(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!eu(n))throw Error(t(40));return n._reactRootContainer?(zi(function(){tu(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1},Yt.unstable_batchedUpdates=wh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!eu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tu(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var mm;function n0(){if(mm)return Oh.exports;mm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Oh.exports=t0(),Oh.exports}var gm;function r0(){if(gm)return ru;gm=1;var i=n0();return ru.createRoot=i.createRoot,ru.hydrateRoot=i.hydrateRoot,ru}var i0=r0(),ym={};/**
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
 */const Og=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},s0=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},xg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,R=(u&3)<<4|m>>4;let F=(m&15)<<2|v>>6,j=v&63;g||(j=64,h||(F=64)),s.push(t[w],t[R],t[F],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Og(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):s0(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const R=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||R==null)throw new o0;const F=u<<2|m>>4;if(s.push(F),v!==64){const j=m<<4&240|v>>2;if(s.push(j),R!==64){const X=v<<6&192|R;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class o0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a0=function(i){const e=Og(i);return xg.encodeByteArray(e,!0)},wu=function(i){return a0(i).replace(/\./g,"")},Lg=function(i){try{return xg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function l0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const u0=()=>l0().__FIREBASE_DEFAULTS__,c0=()=>{if(typeof process>"u"||typeof ym>"u")return;const i=ym.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},h0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Lg(i[1]);return e&&JSON.parse(e)},zu=()=>{try{return u0()||c0()||h0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Mg=i=>{var e,t;return(t=(e=zu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},d0=i=>{const e=Mg(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Fg=()=>{var i;return(i=zu())===null||i===void 0?void 0:i.config},bg=i=>{var e;return(e=zu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class f0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function p0(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[wu(JSON.stringify(t)),wu(JSON.stringify(h)),""].join(".")}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function g0(){var i;const e=(i=zu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function y0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function v0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E0(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function w0(){return!g0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T0(){try{return typeof indexedDB=="object"}catch{return!1}}function I0(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const S0="FirebaseError";class Rr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=S0,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oa.prototype.create)}}class Oa{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?A0(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Rr(o,m,s)}}function A0(i,e){return i.replace(R0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const R0=/\{\$([^}]+)}/g;function P0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Tu(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(_m(u)&&_m(h)){if(!Tu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function _m(i){return i!==null&&typeof i=="object"}/**
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
 */function xa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function pa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function ma(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function C0(i,e){const t=new k0(i,e);return t.subscribe.bind(t)}class k0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");N0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Mh),o.error===void 0&&(o.error=Mh),o.complete===void 0&&(o.complete=Mh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N0(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Mh(){}/**
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
 */function Jt(i){return i&&i._delegate?i._delegate:i}class Ki{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class D0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new f0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(O0(e))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qi){return this.instances.has(e)}getOptions(e=qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:V0(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qi){return this.component?this.component.multipleInstances?e:qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function V0(i){return i===qi?void 0:i}function O0(i){return i.instantiationMode==="EAGER"}/**
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
 */class x0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new D0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const L0={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},M0=Re.INFO,F0={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},b0=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=F0[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=M0,this._logHandler=b0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const U0=(i,e)=>e.some(t=>i instanceof t);let vm,Em;function z0(){return vm||(vm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j0(){return Em||(Em=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ug=new WeakMap,Kh=new WeakMap,zg=new WeakMap,Fh=new WeakMap,_d=new WeakMap;function B0(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(ii(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Ug.set(t,i)}).catch(()=>{}),_d.set(e,i),e}function $0(i){if(Kh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Kh.set(i,e)}let Gh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Kh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||zg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ii(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function q0(i){Gh=i(Gh)}function H0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(bh(this),e,...t);return zg.set(s,e.sort?e.sort():[e]),ii(s)}:j0().includes(i)?function(...e){return i.apply(bh(this),e),ii(Ug.get(this))}:function(...e){return ii(i.apply(bh(this),e))}}function W0(i){return typeof i=="function"?H0(i):(i instanceof IDBTransaction&&$0(i),U0(i,z0())?new Proxy(i,Gh):i)}function ii(i){if(i instanceof IDBRequest)return B0(i);if(Fh.has(i))return Fh.get(i);const e=W0(i);return e!==i&&(Fh.set(i,e),_d.set(e,i)),e}const bh=i=>_d.get(i);function K0(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=ii(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ii(h.result),g.oldVersion,g.newVersion,ii(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const G0=["get","getKey","getAll","getAllKeys","count"],Q0=["put","add","delete","clear"],Uh=new Map;function wm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Q0.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||G0.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return Uh.set(e,u),u}q0(i=>({...i,get:(e,t,s)=>wm(e,t)||i.get(e,t,s),has:(e,t)=>!!wm(e,t)||i.has(e,t)}));/**
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
 */class Y0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(X0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function X0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qh="@firebase/app",Tm="0.10.17";/**
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
 */const Tr=new yd("@firebase/app"),J0="@firebase/app-compat",Z0="@firebase/analytics-compat",eE="@firebase/analytics",tE="@firebase/app-check-compat",nE="@firebase/app-check",rE="@firebase/auth",iE="@firebase/auth-compat",sE="@firebase/database",oE="@firebase/data-connect",aE="@firebase/database-compat",lE="@firebase/functions",uE="@firebase/functions-compat",cE="@firebase/installations",hE="@firebase/installations-compat",dE="@firebase/messaging",fE="@firebase/messaging-compat",pE="@firebase/performance",mE="@firebase/performance-compat",gE="@firebase/remote-config",yE="@firebase/remote-config-compat",_E="@firebase/storage",vE="@firebase/storage-compat",EE="@firebase/firestore",wE="@firebase/vertexai",TE="@firebase/firestore-compat",IE="firebase",SE="11.1.0";/**
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
 */const Yh="[DEFAULT]",AE={[Qh]:"fire-core",[J0]:"fire-core-compat",[eE]:"fire-analytics",[Z0]:"fire-analytics-compat",[nE]:"fire-app-check",[tE]:"fire-app-check-compat",[rE]:"fire-auth",[iE]:"fire-auth-compat",[sE]:"fire-rtdb",[oE]:"fire-data-connect",[aE]:"fire-rtdb-compat",[lE]:"fire-fn",[uE]:"fire-fn-compat",[cE]:"fire-iid",[hE]:"fire-iid-compat",[dE]:"fire-fcm",[fE]:"fire-fcm-compat",[pE]:"fire-perf",[mE]:"fire-perf-compat",[gE]:"fire-rc",[yE]:"fire-rc-compat",[_E]:"fire-gcs",[vE]:"fire-gcs-compat",[EE]:"fire-fst",[TE]:"fire-fst-compat",[wE]:"fire-vertex","fire-js":"fire-js",[IE]:"fire-js-all"};/**
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
 */const Iu=new Map,RE=new Map,Xh=new Map;function Im(i,e){try{i.container.addComponent(e)}catch(t){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function no(i){const e=i.name;if(Xh.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;Xh.set(e,i);for(const t of Iu.values())Im(t,i);for(const t of RE.values())Im(t,i);return!0}function vd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function yr(i){return i.settings!==void 0}/**
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
 */const PE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Oa("app","Firebase",PE);/**
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
 */const ho=SE;function jg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Yh,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw si.create("bad-app-name",{appName:String(o)});if(t||(t=Fg()),!t)throw si.create("no-options");const u=Iu.get(o);if(u){if(Tu(t,u.options)&&Tu(s,u.config))return u;throw si.create("duplicate-app",{appName:o})}const h=new x0(o);for(const g of Xh.values())h.addComponent(g);const m=new CE(t,s,h);return Iu.set(o,m),m}function Bg(i=Yh){const e=Iu.get(i);if(!e&&i===Yh&&Fg())return jg();if(!e)throw si.create("no-app",{appName:i});return e}function oi(i,e,t){var s;let o=(s=AE[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(m.join(" "));return}no(new Ki(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const kE="firebase-heartbeat-database",NE=1,Sa="firebase-heartbeat-store";let zh=null;function $g(){return zh||(zh=K0(kE,NE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Sa)}catch(t){console.warn(t)}}}}).catch(i=>{throw si.create("idb-open",{originalErrorMessage:i.message})})),zh}async function DE(i){try{const t=(await $g()).transaction(Sa),s=await t.objectStore(Sa).get(qg(i));return await t.done,s}catch(e){if(e instanceof Rr)Tr.warn(e.message);else{const t=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(t.message)}}}async function Sm(i,e){try{const s=(await $g()).transaction(Sa,"readwrite");await s.objectStore(Sa).put(e,qg(i)),await s.done}catch(t){if(t instanceof Rr)Tr.warn(t.message);else{const s=si.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tr.warn(s.message)}}}function qg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const VE=1024,OE=30*24*60*60*1e3;class xE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ME(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Am();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const m=new Date(h.date).valueOf();return Date.now()-m<=OE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Tr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Am(),{heartbeatsToSend:s,unsentEntries:o}=LE(this._heartbeatsCache.heartbeats),u=wu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Tr.warn(t),""}}}function Am(){return new Date().toISOString().substring(0,10)}function LE(i,e=VE){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Rm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Rm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ME{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T0()?I0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await DE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Rm(i){return wu(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function FE(i){no(new Ki("platform-logger",e=>new Y0(e),"PRIVATE")),no(new Ki("heartbeat",e=>new xE(e),"PRIVATE")),oi(Qh,Tm,i),oi(Qh,Tm,"esm2017"),oi("fire-js","")}FE("");function Ed(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function Hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bE=Hg,Wg=new Oa("auth","Firebase",Hg());/**
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
 */const Su=new yd("@firebase/auth");function UE(i,...e){Su.logLevel<=Re.WARN&&Su.warn(`Auth (${ho}): ${i}`,...e)}function hu(i,...e){Su.logLevel<=Re.ERROR&&Su.error(`Auth (${ho}): ${i}`,...e)}/**
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
 */function Ln(i,...e){throw wd(i,...e)}function Kn(i,...e){return wd(i,...e)}function Kg(i,e,t){const s=Object.assign(Object.assign({},bE()),{[e]:t});return new Oa("auth","Firebase",s).create(e,{appName:i.name})}function ai(i){return Kg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wd(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Wg.create(i,...e)}function de(i,e,...t){if(!i)throw wd(e,...t)}function _r(i){const e="INTERNAL ASSERTION FAILED: "+i;throw hu(e),new Error(e)}function Ir(i,e){i||_r(e)}/**
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
 */function Jh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function zE(){return Pm()==="http:"||Pm()==="https:"}function Pm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function jE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zE()||_0()||"connection"in navigator)?navigator.onLine:!0}function BE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class La{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile=m0()||v0()}get(){return jE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Td(i,e){Ir(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Gg{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $E={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qE=new La(3e4,6e4);function Yi(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function mi(i,e,t,s,o={}){return Qg(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=xa(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return y0()||(v.referrerPolicy="no-referrer"),Gg.fetch()(Yg(i,i.config.apiHost,t,m),v)})}async function Qg(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},$E),e);try{const o=new WE(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw iu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw iu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw iu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw iu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Kg(i,w,v);Ln(i,w)}}catch(o){if(o instanceof Rr)throw o;Ln(i,"network-request-failed",{message:String(o)})}}async function ju(i,e,t,s,o={}){const u=await mi(i,e,t,s,o);return"mfaPendingCredential"in u&&Ln(i,"multi-factor-auth-required",{_serverResponse:u}),u}function Yg(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?Td(i.config,o):`${i.config.apiScheme}://${o}`}function HE(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Kn(this.auth,"network-request-failed")),qE.get())})}}function iu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Kn(i,e,s);return o.customData._tokenResponse=t,o}function Cm(i){return i!==void 0&&i.enterprise!==void 0}class KE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return HE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GE(i,e){return mi(i,"GET","/v2/recaptchaConfig",Yi(i,e))}/**
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
 */async function QE(i,e){return mi(i,"POST","/v1/accounts:delete",e)}async function Xg(i,e){return mi(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function va(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YE(i,e=!1){const t=Jt(i),s=await t.getIdToken(e),o=Id(s);de(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:va(jh(o.auth_time)),issuedAtTime:va(jh(o.iat)),expirationTime:va(jh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function jh(i){return Number(i)*1e3}function Id(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return hu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Lg(t);return o?JSON.parse(o):(hu("Failed to decode base64 JWT payload"),null)}catch(o){return hu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function km(i){const e=Id(i);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Aa(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Rr&&XE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function XE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class JE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=va(this.lastLoginAt),this.creationTime=va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Au(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Aa(i,Xg(t,{idToken:s}));de(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Jg(u.providerUserInfo):[],m=ew(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,R={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Zh(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,R)}async function ZE(i){const e=Jt(i);await Au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ew(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Jg(i){return i.map(e=>{var{providerId:t}=e,s=Ed(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function tw(i,e){const t=await Qg(i,{},async()=>{const s=xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=Yg(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",Gg.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function nw(i,e){return mi(i,"POST","/v2/accounts:revokeToken",Yi(i,e))}/**
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
 */class Js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):km(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){de(e.length!==0,"internal-error");const t=km(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await tw(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Js;return s&&(de(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(de(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(de(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Js,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
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
 */function Jr(i,e){de(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Ed(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Zh(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Aa(this,this.stsTokenManager.getToken(this.auth,e));return de(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return YE(this,e)}reload(){return ZE(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Au(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yr(this.auth.app))return Promise.reject(ai(this.auth));const e=await this.getIdToken();return await Aa(this,QE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const R=(s=t.displayName)!==null&&s!==void 0?s:void 0,F=(o=t.email)!==null&&o!==void 0?o:void 0,j=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,X=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Q=(m=t.tenantId)!==null&&m!==void 0?m:void 0,q=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ve=(v=t.createdAt)!==null&&v!==void 0?v:void 0,_e=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:ye,emailVerified:Te,isAnonymous:We,providerData:Ae,stsTokenManager:N}=t;de(ye&&N,e,"internal-error");const I=Js.fromJSON(this.name,N);de(typeof ye=="string",e,"internal-error"),Jr(R,e.name),Jr(F,e.name),de(typeof Te=="boolean",e,"internal-error"),de(typeof We=="boolean",e,"internal-error"),Jr(j,e.name),Jr(X,e.name),Jr(Q,e.name),Jr(q,e.name),Jr(ve,e.name),Jr(_e,e.name);const A=new vr({uid:ye,auth:e,email:F,emailVerified:Te,displayName:R,isAnonymous:We,photoURL:X,phoneNumber:j,tenantId:Q,stsTokenManager:I,createdAt:ve,lastLoginAt:_e});return Ae&&Array.isArray(Ae)&&(A.providerData=Ae.map(C=>Object.assign({},C))),q&&(A._redirectEventId=q),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Js;o.updateFromServerResponse(t);const u=new vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Au(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];de(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Jg(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Js;m.updateFromIdToken(s);const g=new vr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Zh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
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
 */const Nm=new Map;function Er(i){Ir(i instanceof Function,"Expected a class definition");let e=Nm.get(i);return e?(Ir(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Nm.set(i,e),e)}/**
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
 */class Zg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zg.type="NONE";const Dm=Zg;/**
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
 */function du(i,e,t){return`firebase:${i}:${e}:${t}`}class Zs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=du(this.userKey,o.apiKey,u),this.fullPersistenceKey=du("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Zs(Er(Dm),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Er(Dm);const h=du(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){const R=vr._fromJSON(e,w);v!==u&&(m=R),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Zs(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new Zs(u,e,s))}}/**
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
 */function Vm(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ry(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sy(e))return"Blackberry";if(oy(e))return"Webos";if(ty(e))return"Safari";if((e.includes("chrome/")||ny(e))&&!e.includes("edge/"))return"Chrome";if(iy(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ey(i=Ft()){return/firefox\//i.test(i)}function ty(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ny(i=Ft()){return/crios\//i.test(i)}function ry(i=Ft()){return/iemobile/i.test(i)}function iy(i=Ft()){return/android/i.test(i)}function sy(i=Ft()){return/blackberry/i.test(i)}function oy(i=Ft()){return/webos/i.test(i)}function Sd(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function rw(i=Ft()){var e;return Sd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iw(){return E0()&&document.documentMode===10}function ay(i=Ft()){return Sd(i)||iy(i)||oy(i)||sy(i)||/windows phone/i.test(i)||ry(i)}/**
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
 */function ly(i,e=[]){let t;switch(i){case"Browser":t=Vm(Ft());break;case"Worker":t=`${Vm(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ho}/${s}`}/**
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
 */class sw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ow(i,e={}){return mi(i,"GET","/v2/passwordPolicy",Yi(i,e))}/**
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
 */const aw=6;class lw{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:aw,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class uw{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Om(this),this.idTokenSubscription=new Om(this),this.beforeStateQueue=new sw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Er(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xg(this,{idToken:e}),s=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Au(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yr(this.app))return Promise.reject(ai(this));const t=e?Jt(e):null;return t&&de(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yr(this.app)?Promise.reject(ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yr(this.app)?Promise.reject(ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ow(this),t=new lw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oa("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await nw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Er(e)||this._popupRedirectResolver;de(t,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[Er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&UE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fo(i){return Jt(i)}class Om{constructor(e){this.auth=e,this.observer=null,this.addObserver=C0(t=>this.observer=t)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cw(i){Bu=i}function uy(i){return Bu.loadJS(i)}function hw(){return Bu.recaptchaEnterpriseScript}function dw(){return Bu.gapiScript}function fw(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class pw{constructor(){this.enterprise=new mw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class mw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const gw="recaptcha-enterprise",cy="NO_RECAPTCHA";class yw{constructor(e){this.type=gw,this.auth=fo(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{GE(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new KE(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Cm(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(cy)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pw().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Cm(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=hw();g.length!==0&&(g+=m),uy(g).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function xm(i,e,t,s=!1,o=!1){const u=new yw(i);let h;if(o)h=cy;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Lm(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await xm(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await xm(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
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
 */function _w(i,e){const t=vd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Tu(u,e??{}))return o;Ln(o,"already-initialized")}return t.initialize({options:e})}function vw(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Er);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ew(i,e,t){const s=fo(i);de(s._canInitEmulator,s,"emulator-config-failed"),de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=hy(e),{host:h,port:m}=ww(e),g=m===null?"":`:${m}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),Tw()}function hy(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function ww(i){const e=hy(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Mm(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Mm(h)}}}function Mm(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Tw(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Ad{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,t){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function Iw(i,e){return mi(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Sw(i,e){return ju(i,"POST","/v1/accounts:signInWithPassword",Yi(i,e))}/**
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
 */async function Aw(i,e){return ju(i,"POST","/v1/accounts:signInWithEmailLink",Yi(i,e))}async function Rw(i,e){return ju(i,"POST","/v1/accounts:signInWithEmailLink",Yi(i,e))}/**
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
 */class Ra extends Ad{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ra(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ra(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lm(e,t,"signInWithPassword",Sw);case"emailLink":return Aw(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lm(e,s,"signUpPassword",Iw);case"emailLink":return Rw(e,{idToken:t,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function eo(i,e){return ju(i,"POST","/v1/accounts:signInWithIdp",Yi(i,e))}/**
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
 */const Pw="http://localhost";class Gi extends Ad{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ln("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Ed(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Gi(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,eo(e,t)}buildRequest(){const e={requestUri:Pw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xa(t)}return e}}/**
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
 */function Cw(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kw(i){const e=pa(ma(i)).link,t=e?pa(ma(e)).deep_link_id:null,s=pa(ma(i)).deep_link_id;return(s?pa(ma(s)).link:null)||s||t||e||i}class Rd{constructor(e){var t,s,o,u,h,m;const g=pa(ma(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,R=Cw((o=g.mode)!==null&&o!==void 0?o:null);de(v&&w&&R,"argument-error"),this.apiKey=v,this.operation=R,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=kw(e);try{return new Rd(t)}catch{return null}}}/**
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
 */class po{constructor(){this.providerId=po.PROVIDER_ID}static credential(e,t){return Ra._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Rd.parseLink(t);return de(s,"argument-error"),Ra._fromEmailAndCode(e,s.code,s.tenantId)}}po.PROVIDER_ID="password";po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class dy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ma extends dy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zr extends Ma{constructor(){super("facebook.com")}static credential(e){return Gi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
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
 */class ei extends Ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ei.credential(t,s)}catch{return null}}}ei.GOOGLE_SIGN_IN_METHOD="google.com";ei.PROVIDER_ID="google.com";/**
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
 */class ti extends Ma{constructor(){super("github.com")}static credential(e){return Gi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
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
 */class ni extends Ma{constructor(){super("twitter.com")}static credential(e,t){return Gi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
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
 */class ro{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await vr._fromIdTokenResponse(e,s,o),h=Fm(s);return new ro({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Fm(s);return new ro({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Fm(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Ru extends Rr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ru.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ru(e,t,s,o)}}function fy(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ru._fromErrorAndOperation(i,u,e,s):u})}async function Nw(i,e,t=!1){const s=await Aa(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ro._forOperation(i,"link",s)}/**
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
 */async function Dw(i,e,t=!1){const{auth:s}=i;if(yr(s.app))return Promise.reject(ai(s));const o="reauthenticate";try{const u=await Aa(i,fy(s,o,e,i),t);de(u.idToken,s,"internal-error");const h=Id(u.idToken);de(h,s,"internal-error");const{sub:m}=h;return de(i.uid===m,s,"user-mismatch"),ro._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Ln(s,"user-mismatch"),u}}/**
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
 */async function py(i,e,t=!1){if(yr(i.app))return Promise.reject(ai(i));const s="signIn",o=await fy(i,s,e),u=await ro._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function Vw(i,e){return py(fo(i),e)}/**
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
 */async function Ow(i){const e=fo(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function xw(i,e,t){return yr(i.app)?Promise.reject(ai(i)):Vw(Jt(i),po.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ow(i),s})}function Lw(i,e,t,s){return Jt(i).onIdTokenChanged(e,t,s)}function Mw(i,e,t){return Jt(i).beforeAuthStateChanged(e,t)}function Fw(i,e,t,s){return Jt(i).onAuthStateChanged(e,t,s)}function bw(i){return Jt(i).signOut()}const Pu="__sak";/**
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
 */class my{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pu,"1"),this.storage.removeItem(Pu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Uw=1e3,zw=10;class gy extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ay(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);iw()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,zw):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Uw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gy.type="LOCAL";const jw=gy;/**
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
 */class yy extends my{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yy.type="SESSION";const _y=yy;/**
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
 */function Bw(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class $u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new $u(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await Bw(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$u.receivers=[];/**
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
 */function Pd(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class $w{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=Pd("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(R){const F=R;if(F.data.eventId===v)switch(F.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(F.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Gn(){return window}function qw(i){Gn().location.href=i}/**
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
 */function vy(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function Hw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ww(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Kw(){return vy()?self:null}/**
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
 */const Ey="firebaseLocalStorageDb",Gw=1,Cu="firebaseLocalStorage",wy="fbase_key";class Fa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qu(i,e){return i.transaction([Cu],e?"readwrite":"readonly").objectStore(Cu)}function Qw(){const i=indexedDB.deleteDatabase(Ey);return new Fa(i).toPromise()}function ed(){const i=indexedDB.open(Ey,Gw);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Cu,{keyPath:wy})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Cu)?e(s):(s.close(),await Qw(),e(await ed()))})})}async function bm(i,e,t){const s=qu(i,!0).put({[wy]:e,value:t});return new Fa(s).toPromise()}async function Yw(i,e){const t=qu(i,!1).get(e),s=await new Fa(t).toPromise();return s===void 0?null:s.value}function Um(i,e){const t=qu(i,!0).delete(e);return new Fa(t).toPromise()}const Xw=800,Jw=3;class Ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ed(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Jw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$u._getInstance(Kw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hw(),!this.activeServiceWorker)return;this.sender=new $w(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ww()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ed();return await bm(e,Pu,"1"),await Um(e,Pu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>bm(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Yw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Um(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=qu(o,!1).getAll();return new Fa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ty.type="LOCAL";const Zw=Ty;new La(3e4,6e4);/**
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
 */function eT(i,e){return e?Er(e):(de(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Cd extends Ad{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tT(i){return py(i.auth,new Cd(i),i.bypassAuthState)}function nT(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),Dw(t,new Cd(i),i.bypassAuthState)}async function rT(i){const{auth:e,user:t}=i;return de(t,e,"internal-error"),Nw(t,new Cd(i),i.bypassAuthState)}/**
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
 */class Iy{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tT;case"linkViaPopup":case"linkViaRedirect":return rT;case"reauthViaPopup":case"reauthViaRedirect":return nT;default:Ln(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iT=new La(2e3,1e4);class Xs extends Iy{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iT.get())};e()}}Xs.currentPopupAction=null;/**
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
 */const sT="pendingRedirect",fu=new Map;class oT extends Iy{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=fu.get(this.auth._key());if(!e){try{const s=await aT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}fu.set(this.auth._key(),e)}return this.bypassAuthState||fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aT(i,e){const t=cT(e),s=uT(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function lT(i,e){fu.set(i._key(),e)}function uT(i){return Er(i._redirectPersistence)}function cT(i){return du(sT,i.config.apiKey,i.name)}async function hT(i,e,t=!1){if(yr(i.app))return Promise.reject(ai(i));const s=fo(i),o=eT(s,e),h=await new oT(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const dT=10*60*1e3;class fT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Sy(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Kn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dT&&this.cachedEventUids.clear(),this.cachedEventUids.has(zm(e))}saveEventToCache(e){this.cachedEventUids.add(zm(e)),this.lastProcessedEventTime=Date.now()}}function zm(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Sy({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sy(i);default:return!1}}/**
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
 */async function mT(i,e={}){return mi(i,"GET","/v1/projects",e)}/**
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
 */const gT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yT=/^https?/;async function _T(i){if(i.config.emulator)return;const{authorizedDomains:e}=await mT(i);for(const t of e)try{if(vT(t))return}catch{}Ln(i,"unauthorized-domain")}function vT(i){const e=Jh(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!yT.test(t))return!1;if(gT.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const ET=new La(3e4,6e4);function jm(){const i=Gn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function wT(i){return new Promise((e,t)=>{var s,o,u;function h(){jm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jm(),t(Kn(i,"network-request-failed"))},timeout:ET.get()})}if(!((o=(s=Gn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Gn().gapi)===null||u===void 0)&&u.load)h();else{const m=fw("iframefcb");return Gn()[m]=()=>{gapi.load?h():t(Kn(i,"network-request-failed"))},uy(`${dw()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw pu=null,e})}let pu=null;function TT(i){return pu=pu||wT(i),pu}/**
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
 */const IT=new La(5e3,15e3),ST="__/auth/iframe",AT="emulator/auth/iframe",RT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CT(i){const e=i.config;de(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Td(e,AT):`https://${i.config.authDomain}/${ST}`,s={apiKey:e.apiKey,appName:i.name,v:ho},o=PT.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${xa(s).slice(1)}`}async function kT(i){const e=await TT(i),t=Gn().gapi;return de(t,i,"internal-error"),e.open({where:document.body,url:CT(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RT,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Kn(i,"network-request-failed"),m=Gn().setTimeout(()=>{u(h)},IT.get());function g(){Gn().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const NT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DT=500,VT=600,OT="_blank",xT="http://localhost";class Bm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LT(i,e,t,s=DT,o=VT){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},NT),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=ny(v)?OT:t),ey(v)&&(e=e||xT,g.scrollbars="yes");const w=Object.entries(g).reduce((F,[j,X])=>`${F}${j}=${X},`,"");if(rw(v)&&m!=="_self")return MT(e||"",m),new Bm(null);const R=window.open(e||"",m,w);de(R,i,"popup-blocked");try{R.focus()}catch{}return new Bm(R)}function MT(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const FT="__/auth/handler",bT="emulator/auth/handler",UT=encodeURIComponent("fac");async function $m(i,e,t,s,o,u){de(i.config.authDomain,i,"auth-domain-config-required"),de(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ho,eventId:o};if(e instanceof dy){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",P0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,R]of Object.entries({}))h[w]=R}if(e instanceof Ma){const w=e.getScopes().filter(R=>R!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),v=g?`#${UT}=${encodeURIComponent(g)}`:"";return`${zT(i)}?${xa(m).slice(1)}${v}`}function zT({config:i}){return i.emulator?Td(i,bT):`https://${i.authDomain}/${FT}`}/**
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
 */const Bh="webStorageSupport";class jT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_y,this._completeRedirectFn=hT,this._overrideRedirectResult=lT}async _openPopup(e,t,s,o){var u;Ir((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await $m(e,t,s,Jh(),o);return LT(e,h,Pd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await $m(e,t,s,Jh(),o);return qw(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ir(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await kT(e),s=new fT(e);return t.register("authEvent",o=>(de(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bh,{type:Bh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Bh];h!==void 0&&t(!!h),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_T(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ay()||ty()||Sd()}}const BT=jT;var qm="@firebase/auth",Hm="1.8.1";/**
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
 */class $T{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qT(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HT(i){no(new Ki("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;de(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ly(i)},v=new uw(s,o,u,g);return vw(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),no(new Ki("auth-internal",e=>{const t=fo(e.getProvider("auth").getImmediate());return(s=>new $T(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),oi(qm,Hm,qT(i)),oi(qm,Hm,"esm2017")}/**
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
 */const WT=5*60,KT=bg("authIdTokenMaxAge")||WT;let Wm=null;const GT=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>KT)return;const o=t==null?void 0:t.token;Wm!==o&&(Wm=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function QT(i=Bg()){const e=vd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=_w(i,{popupRedirectResolver:BT,persistence:[Zw,jw,_y]}),s=bg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=GT(u.toString());Mw(t,h,()=>h(t.currentUser)),Lw(t,m=>h(m))}}const o=Mg("auth");return o&&Ew(t,`http://${o}`),t}function YT(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}cw({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Kn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",YT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HT("Browser");var XT="firebase",JT="11.1.0";/**
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
 */oi(XT,JT,"app");var Km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wi,Ay;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(C,D,O){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[D].apply(C,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var C=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)C[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)C[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],D=N.g[2];var O=N.g[3],S=I+(O^A&(D^O))+C[0]+3614090360&4294967295;I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[1]+3905402710&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[2]+606105819&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[3]+3250441966&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+C[4]+4118548399&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[5]+1200080426&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[6]+2821735955&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[7]+4249261313&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+C[8]+1770035416&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[9]+2336552879&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[10]+4294925233&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[11]+2304563134&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(O^A&(D^O))+C[12]+1804603682&4294967295,I=A+(S<<7&4294967295|S>>>25),S=O+(D^I&(A^D))+C[13]+4254626195&4294967295,O=I+(S<<12&4294967295|S>>>20),S=D+(A^O&(I^A))+C[14]+2792965006&4294967295,D=O+(S<<17&4294967295|S>>>15),S=A+(I^D&(O^I))+C[15]+1236535329&4294967295,A=D+(S<<22&4294967295|S>>>10),S=I+(D^O&(A^D))+C[1]+4129170786&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[6]+3225465664&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[11]+643717713&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[0]+3921069994&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+C[5]+3593408605&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[10]+38016083&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[15]+3634488961&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[4]+3889429448&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+C[9]+568446438&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[14]+3275163606&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[3]+4107603335&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[8]+1163531501&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(D^O&(A^D))+C[13]+2850285829&4294967295,I=A+(S<<5&4294967295|S>>>27),S=O+(A^D&(I^A))+C[2]+4243563512&4294967295,O=I+(S<<9&4294967295|S>>>23),S=D+(I^A&(O^I))+C[7]+1735328473&4294967295,D=O+(S<<14&4294967295|S>>>18),S=A+(O^I&(D^O))+C[12]+2368359562&4294967295,A=D+(S<<20&4294967295|S>>>12),S=I+(A^D^O)+C[5]+4294588738&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[8]+2272392833&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[11]+1839030562&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[14]+4259657740&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+C[1]+2763975236&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[4]+1272893353&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[7]+4139469664&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[10]+3200236656&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+C[13]+681279174&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[0]+3936430074&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[3]+3572445317&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[6]+76029189&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(A^D^O)+C[9]+3654602809&4294967295,I=A+(S<<4&4294967295|S>>>28),S=O+(I^A^D)+C[12]+3873151461&4294967295,O=I+(S<<11&4294967295|S>>>21),S=D+(O^I^A)+C[15]+530742520&4294967295,D=O+(S<<16&4294967295|S>>>16),S=A+(D^O^I)+C[2]+3299628645&4294967295,A=D+(S<<23&4294967295|S>>>9),S=I+(D^(A|~O))+C[0]+4096336452&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[7]+1126891415&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[14]+2878612391&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[5]+4237533241&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+C[12]+1700485571&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[3]+2399980690&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[10]+4293915773&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[1]+2240044497&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+C[8]+1873313359&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[15]+4264355552&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[6]+2734768916&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[13]+1309151649&4294967295,A=D+(S<<21&4294967295|S>>>11),S=I+(D^(A|~O))+C[4]+4149444226&4294967295,I=A+(S<<6&4294967295|S>>>26),S=O+(A^(I|~D))+C[11]+3174756917&4294967295,O=I+(S<<10&4294967295|S>>>22),S=D+(I^(O|~A))+C[2]+718787259&4294967295,D=O+(S<<15&4294967295|S>>>17),S=A+(O^(D|~I))+C[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(S<<21&4294967295|S>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,C=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=A;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<I;)if(C[D++]=N.charCodeAt(O++),D==this.blockSize){o(this,C),D=0;break}}else for(;O<I;)if(C[D++]=N[O++],D==this.blockSize){o(this,C),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var C=0;32>C;C+=8)N[A++]=this.g[I]>>>C&255;return N};function u(N,I){var A=m;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function h(N,I){this.h=I;for(var A=[],C=!0,D=N.length-1;0<=D;D--){var O=N[D]|0;C&&O==I||(A[D]=O,C=!1)}this.g=A}var m={};function g(N){return-128<=N&&128>N?u(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return R;if(0>N)return q(v(-N));for(var I=[],A=1,C=0;N>=A;C++)I[C]=N/A|0,A*=4294967296;return new h(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return q(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),C=R,D=0;D<N.length;D+=8){var O=Math.min(8,N.length-D),S=parseInt(N.substring(D,D+O),I);8>O?(O=v(Math.pow(I,O)),C=C.j(O).add(v(S))):(C=C.j(A),C=C.add(v(S)))}return C}var R=g(0),F=g(1),j=g(16777216);i=h.prototype,i.m=function(){if(Q(this))return-q(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var C=this.i(A);N+=(0<=C?C:4294967296+C)*I,I*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(X(this))return"0";if(Q(this))return"-"+q(this).toString(N);for(var I=v(Math.pow(N,6)),A=this,C="";;){var D=Te(A,I).g;A=ve(A,D.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=D,X(A))return O+C;for(;6>O.length;)O="0"+O;C=O+C}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function X(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function Q(N){return N.h==-1}i.l=function(N){return N=ve(this,N),Q(N)?-1:X(N)?0:1};function q(N){for(var I=N.g.length,A=[],C=0;C<I;C++)A[C]=~N.g[C];return new h(A,~N.h).add(F)}i.abs=function(){return Q(this)?q(this):this},i.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0,D=0;D<=I;D++){var O=C+(this.i(D)&65535)+(N.i(D)&65535),S=(O>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);C=S>>>16,O&=65535,S&=65535,A[D]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function ve(N,I){return N.add(q(I))}i.j=function(N){if(X(this)||X(N))return R;if(Q(this))return Q(N)?q(this).j(q(N)):q(q(this).j(N));if(Q(N))return q(this.j(q(N)));if(0>this.l(j)&&0>N.l(j))return v(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],C=0;C<2*I;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var D=0;D<N.g.length;D++){var O=this.i(C)>>>16,S=this.i(C)&65535,et=N.i(D)>>>16,Ct=N.i(D)&65535;A[2*C+2*D]+=S*Ct,_e(A,2*C+2*D),A[2*C+2*D+1]+=O*Ct,_e(A,2*C+2*D+1),A[2*C+2*D+1]+=S*et,_e(A,2*C+2*D+1),A[2*C+2*D+2]+=O*et,_e(A,2*C+2*D+2)}for(C=0;C<I;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=I;C<2*I;C++)A[C]=0;return new h(A,0)};function _e(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function ye(N,I){this.g=N,this.h=I}function Te(N,I){if(X(I))throw Error("division by zero");if(X(N))return new ye(R,R);if(Q(N))return I=Te(q(N),I),new ye(q(I.g),q(I.h));if(Q(I))return I=Te(N,q(I)),new ye(q(I.g),I.h);if(30<N.g.length){if(Q(N)||Q(I))throw Error("slowDivide_ only works with positive integers.");for(var A=F,C=I;0>=C.l(N);)A=We(A),C=We(C);var D=Ae(A,1),O=Ae(C,1);for(C=Ae(C,2),A=Ae(A,2);!X(C);){var S=O.add(C);0>=S.l(N)&&(D=D.add(A),O=S),C=Ae(C,1),A=Ae(A,1)}return I=ve(N,D.j(I)),new ye(D,I)}for(D=R;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),O=v(A),S=O.j(I);Q(S)||0<S.l(N);)A-=C,O=v(A),S=O.j(I);X(O)&&(O=F),D=D.add(O),N=ve(N,S)}return new ye(D,N)}i.A=function(N){return Te(this,N).h},i.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)&N.i(C);return new h(A,this.h&N.h)},i.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)|N.i(C);return new h(A,this.h|N.h)},i.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],C=0;C<I;C++)A[C]=this.i(C)^N.i(C);return new h(A,this.h^N.h)};function We(N){for(var I=N.g.length+1,A=[],C=0;C<I;C++)A[C]=N.i(C)<<1|N.i(C-1)>>>31;return new h(A,N.h)}function Ae(N,I){var A=I>>5;I%=32;for(var C=N.g.length-A,D=[],O=0;O<C;O++)D[O]=0<I?N.i(O+A)>>>I|N.i(O+A+1)<<32-I:N.i(O+A);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ay=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,Wi=h}).apply(typeof Km<"u"?Km:typeof self<"u"?self:typeof window<"u"?window:{});var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ry,ga,Py,mu,td,Cy,ky,Ny;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof su=="object"&&su];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var x=l[E];if(!(x in y))break e;y=y[x]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,x={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function R(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,E),l.apply(f,x)}}return function(){return l.apply(f,arguments)}}function F(l,f,y){return F=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:R,F.apply(null,arguments)}function j(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function X(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,x,U){for(var Y=Array(arguments.length-2),be=2;be<arguments.length;be++)Y[be-2]=arguments[be];return f.prototype[x].apply(E,Y)}}function Q(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function q(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const x=l.length||0,U=E.length||0;l.length=x+U;for(let Y=0;Y<U;Y++)l[x+Y]=E[Y]}else l.push(E)}}class ve{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function _e(l){return/^[\s\xa0]*$/.test(l)}function ye(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Te(l){return Te[" "](l),l}Te[" "]=function(){};var We=ye().indexOf("Gecko")!=-1&&!(ye().toLowerCase().indexOf("webkit")!=-1&&ye().indexOf("Edge")==-1)&&!(ye().indexOf("Trident")!=-1||ye().indexOf("MSIE")!=-1)&&ye().indexOf("Edge")==-1;function Ae(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function N(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let y,E;for(let x=1;x<arguments.length;x++){E=arguments[x];for(y in E)l[y]=E[y];for(let U=0;U<A.length;U++)y=A[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,y){const E=Ct.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Ct=new ve(()=>new kt,l=>l.reset());class kt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,le=new et,ee=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(V)}};var V=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){O(y)}var f=Ct;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Ie(l,f){if(oe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(We){e:{try{Te(f.nodeName);var x=!0;break e}catch{}x=!1}x||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}X(Ie,oe);var Ne={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function je(l,f,y,E,x){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=x,this.key=++Me,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Zn(l){this.src=l,this.g={},this.h=0}Zn.prototype.add=function(l,f,y,E,x){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var Y=Pr(l,f,E,x);return-1<Y?(f=l[Y],y||(f.fa=!1)):(f=new je(f,this.src,U,!!E,x),f.fa=y,l.push(f)),f};function ts(l,f){var y=f.type;if(y in l.g){var E=l.g[y],x=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=x)&&Array.prototype.splice.call(E,x,1),U&&(mt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Pr(l,f,y,E){for(var x=0;x<l.length;++x){var U=l[x];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return x}return-1}var gi="closure_lm_"+(1e6*Math.random()|0),ns={};function vo(l,f,y,E,x){if(Array.isArray(f)){for(var U=0;U<f.length;U++)vo(l,f[U],y,E,x);return null}return y=To(y),l&&l[Le]?l.K(f,y,v(E)?!!E.capture:!!E,x):Eo(l,f,y,!1,E,x)}function Eo(l,f,y,E,x,U){if(!f)throw Error("Invalid event type");var Y=v(x)?!!x.capture:!!x,be=is(l);if(be||(l[gi]=be=new Zn(l)),y=be.add(f,y,E,Y,U),y.proxy)return y;if(E=Ba(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Ee||(x=Y),x===void 0&&(x=!1),l.addEventListener(f.toString(),E,x);else if(l.attachEvent)l.attachEvent(tr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ba(){function l(y){return f.call(l.src,l.listener,y)}const f=wo;return l}function rs(l,f,y,E,x){if(Array.isArray(f))for(var U=0;U<f.length;U++)rs(l,f[U],y,E,x);else E=v(E)?!!E.capture:!!E,y=To(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Pr(U,y,E,x),-1<y&&(mt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=is(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pr(f,y,E,x)),(y=-1<l?f[l]:null)&&er(y))}function er(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])ts(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(tr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=is(f))?(ts(y,l),y.h==0&&(y.src=null,f[gi]=null)):mt(l)}}}function tr(l){return l in ns?ns[l]:ns[l]="on"+l}function wo(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&er(l),l=y.call(E,f)}return l}function is(l){return l=l[gi],l instanceof Zn?l:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function To(l){return typeof l=="function"?l:(l[ss]||(l[ss]=function(f){return l.handleEvent(f)}),l[ss])}function at(){B.call(this),this.i=new Zn(this),this.M=this,this.F=null}X(at,B),at.prototype[Le]=!0,at.prototype.removeEventListener=function(l,f,y,E){rs(this,l,f,y,E)};function lt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new oe(f,l);else if(f instanceof oe)f.target=f.target||l;else{var x=f;f=new oe(E,l),C(f,x)}if(x=!0,y)for(var U=y.length-1;0<=U;U--){var Y=f.g=y[U];x=nr(Y,E,!0,f)&&x}if(Y=f.g=l,x=nr(Y,E,!0,f)&&x,x=nr(Y,E,!1,f)&&x,y)for(U=0;U<y.length;U++)Y=f.g=y[U],x=nr(Y,E,!1,f)&&x}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)mt(y[E]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},at.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function nr(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var x=!0,U=0;U<f.length;++U){var Y=f[U];if(Y&&!Y.da&&Y.capture==y){var be=Y.listener,ut=Y.ha||Y.src;Y.fa&&ts(l.i,Y),x=be.call(ut,E)!==!1&&x}}return x&&!E.defaultPrevented}function Io(l,f,y){if(typeof l=="function")y&&(l=F(l,y));else if(l&&typeof l.handleEvent=="function")l=F(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Cr(l){l.g=Io(()=>{l.g=null,l.i&&(l.i=!1,Cr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class yi extends B{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _i(l){B.call(this),this.h=l,this.g={}}X(_i,B);var So=[];function Ao(l){Ae(l.g,function(f,y){this.g.hasOwnProperty(y)&&er(f)},l),l.g={}}_i.prototype.N=function(){_i.aa.N.call(this),Ao(this)},_i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=m.JSON.stringify,Po=m.JSON.parse,Co=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function vi(){}vi.prototype.h=null;function os(l){return l.h||(l.h=l.i())}function as(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mn(){oe.call(this,"d")}X(Mn,oe);function ls(){oe.call(this,"c")}X(ls,oe);var Fn={},ko=null;function Ei(){return ko=ko||new at}Fn.La="serverreachability";function No(l){oe.call(this,Fn.La,l)}X(No,oe);function rr(l){const f=Ei();lt(f,new No(f))}Fn.STAT_EVENT="statevent";function Do(l,f){oe.call(this,Fn.STAT_EVENT,l),this.stat=f}X(Do,oe);function tt(l){const f=Ei();lt(f,new Do(f,l))}Fn.Ma="timingevent";function us(l,f){oe.call(this,Fn.Ma,l),this.size=f}X(us,oe);function _n(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function wi(){this.g=!0}wi.prototype.xa=function(){this.g=!1};function Ti(l,f,y,E,x,U){l.info(function(){if(l.g)if(U)for(var Y="",be=U.split("&"),ut=0;ut<be.length;ut++){var De=be[ut].split("=");if(1<De.length){var gt=De[0];De=De[1];var it=gt.split("_");Y=2<=it.length&&it[1]=="type"?Y+(gt+"="+De+"&"):Y+(gt+"=redacted&")}}else Y=null;else Y=U;return"XMLHTTP REQ ("+E+") [attempt "+x+"]: "+f+`
`+y+`
`+Y})}function cs(l,f,y,E,x,U,Y){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+x+"]: "+f+`
`+y+`
`+U+" "+Y})}function vn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+sc(l,y)+(E?" "+E:"")})}function Vo(l,f){l.info(function(){return"TIMEOUT: "+f})}wi.prototype.info=function(){};function sc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var x=E[1];if(Array.isArray(x)&&!(1>x.length)){var U=x[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Y=1;Y<x.length;Y++)x[Y]=""}}}}return Ro(y)}catch{return f}}var hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$a={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},En;function Ii(){}X(Ii,vi),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},En=new Ii;function wn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new _i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qa}function qa(){this.i=null,this.g="",this.h=!1}var Oo={},ds={};function fs(l,f,y){l.L=1,l.v=Or(en(f)),l.m=y,l.P=!0,xo(l,null)}function xo(l,f){l.F=Date.now(),Be(l),l.A=en(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Lr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new qa,l.g=ll(l.j,y?f:null,!l.m),0<l.O&&(l.M=new yi(F(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var x="readystatechange";Array.isArray(x)||(x&&(So[0]=x.toString()),x=So);for(var U=0;U<x.length;U++){var Y=vo(y,x[U],E||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),rr(),Ti(l.i,l.u,l.A,l.l,l.R,l.m)}wn.prototype.ca=function(l){l=l.target;const f=this.M;f&&qt(l)==3?f.j():this.Y(l)},wn.prototype.Y=function(l){try{if(l==this.g)e:{const it=qt(this.g);var f=this.g.Ba();const cn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||zo(this.g)))){this.J||it!=4||f==7||(f==8||0>=cn?rr(3):rr(2)),Si(this);var y=this.g.Z();this.X=y;t:if(Ha(this)){var E=zo(this.g);l="";var x=E.length,U=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),kr(this);var Y="";break t}this.h.i=new m.TextDecoder}for(f=0;f<x;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==x-1)});E.length=0,this.h.g+=l,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=y==200,cs(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var be,ut=this.g;if((be=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_e(be)){var De=be;break t}}De=null}if(y=De)vn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lo(this,y);else{this.o=!1,this.s=3,tt(12),ln(this),kr(this);break e}}if(this.P){y=!0;let nn;for(;!this.J&&this.C<Y.length;)if(nn=oc(this,Y),nn==ds){it==4&&(this.s=4,tt(14),y=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Oo){this.s=4,tt(15),vn(this.i,this.l,Y,"[Invalid Chunk]"),y=!1;break}else vn(this.i,this.l,nn,null),Lo(this,nn);if(Ha(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||Y.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)vn(this.i,this.l,Y,"[Invalid Chunked Response]"),ln(this),kr(this);else if(0<Y.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Bo(gt),gt.M=!0,tt(11))}}else vn(this.i,this.l,Y,null),Lo(this,Y);it==4&&ln(this),this.o&&!this.J&&(it==4?Ss(this.j,this):(this.o=!1,Be(this)))}else vs(this.g),y==400&&0<Y.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),ln(this),kr(this)}}}catch{}finally{}};function Ha(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function oc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?ds:(y=Number(f.substring(y,E)),isNaN(y)?Oo:(E+=1,E+y>f.length?ds:(f=f.slice(E,E+y),l.C=E+y,f)))}wn.prototype.cancel=function(){this.J=!0,ln(this)};function Be(l){l.S=Date.now()+l.I,Wa(l,l.I)}function Wa(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=_n(F(l.ba,l),f)}function Si(l){l.B&&(m.clearTimeout(l.B),l.B=null)}wn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Vo(this.i,this.A),this.L!=2&&(rr(),tt(17)),ln(this),this.s=2,kr(this)):Wa(this,this.S-l)};function kr(l){l.j.G==0||l.J||Ss(l.j,l)}function ln(l){Si(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Ao(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Lo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||bt(y.h,l))){if(!l.K&&bt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var x=E;if(x[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Is(y),Rn(y);else break e;Ts(y),tt(18)}}else y.za=x[1],0<y.za-y.T&&37500>x[2]&&y.F&&y.v==0&&!y.C&&(y.C=_n(F(y.Za,y),6e3));if(1>=Ga(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else lr(y,11)}else if((l.K||y.g==l)&&Is(y),!_e(f))for(x=y.Da.g.parse(f),f=0;f<x.length;f++){let De=x[f];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const gt=De[3];gt!=null&&(y.la=gt,y.j.info("VER="+y.la));const it=De[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const cn=De[5];cn!=null&&typeof cn=="number"&&0<cn&&(E=1.5*cn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const nn=l.g;if(nn){const Di=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var U=E.h;U.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Mo(U,U.h),U.h=null))}if(E.D){const Rs=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(E.ya=Rs,ze(E.I,E.D,Rs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var Y=l;if(E.qa=al(E,E.J?E.ia:null,E.W),Y.K){Qa(E.h,Y);var be=Y,ut=E.L;ut&&(be.I=ut),be.B&&(Si(be),Be(be)),E.g=Y}else Ni(E);0<y.i.length&&jn(y)}else De[0]!="stop"&&De[0]!="close"||lr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?lr(y,7):Tt(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}rr(4)}catch{}}var Ka=class{constructor(l,f){this.g=l,this.map=f}};function Ai(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ga(l){return l.h?1:l.g?l.g.size:0}function bt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Mo(l,f){l.g?l.g.add(f):l.h=f}function Qa(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ai.prototype.cancel=function(){if(this.i=Ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ya(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return Q(l.i)}function ps(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function ms(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Nr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=ms(l),E=ps(l),x=E.length,U=0;U<x;U++)f.call(void 0,E[U],y&&y[U],l)}var Ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),x=null;if(0<=E){var U=l[y].substring(0,E);x=l[y].substring(E+1)}else U=l[y];f(U,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ir(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ir){this.h=l.h,Pi(this,l.j),this.o=l.o,this.g=l.g,Dr(this,l.s),this.l=l.l;var f=l.i,y=new bn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Vr(this,y),this.m=l.m}else l&&(f=String(l).match(Ri))?(this.h=!1,Pi(this,f[1]||"",!0),this.o=Ce(f[2]||""),this.g=Ce(f[3]||"",!0),Dr(this,f[4]),this.l=Ce(f[5]||"",!0),Vr(this,f[6]||"",!0),this.m=Ce(f[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}ir.prototype.toString=function(){var l=[],f=this.j;f&&l.push(xr(f,gs,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(xr(f,gs,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(xr(y,y.charAt(0)=="/"?Za:Ja,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",xr(y,Fo)),l.join("")};function en(l){return new ir(l)}function Pi(l,f,y){l.j=y?Ce(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Dr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Vr(l,f,y){f instanceof bn?(l.i=f,Un(l.i,l.h)):(y||(f=xr(f,el)),l.i=new bn(f,l.h))}function ze(l,f,y){l.i.set(f,y)}function Or(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ce(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function xr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,Xa),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Xa(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var gs=/[#\/\?@]/g,Ja=/[#\?:]/g,Za=/[#\?]/g,el=/[#\?@]/g,Fo=/#/g;function bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&ac(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=bn.prototype,i.add=function(l,f){wt(this),this.i=null,l=un(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Tn(l,f){wt(l),f=un(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function In(l,f){return wt(l),f=un(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(y,E){y.forEach(function(x){l.call(f,x,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const x=l[E];for(let U=0;U<x.length;U++)y.push(f[E])}return y},i.V=function(l){wt(this);let f=[];if(typeof l=="string")In(this,l)&&(f=f.concat(this.g.get(un(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return wt(this),this.i=null,l=un(this,l),In(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Lr(l,f,y){Tn(l,f),0<y.length&&(l.i=null,l.g.set(un(l,f),Q(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),Y=this.V(E);for(E=0;E<Y.length;E++){var x=U;Y[E]!==""&&(x+="="+encodeURIComponent(String(Y[E]))),l.push(x)}}return this.i=l.join("&")};function un(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Un(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(y,E){var x=E.toLowerCase();E!=x&&(Tn(this,E),Lr(this,x,y))},l)),l.j=f}function lc(l,f){const y=new wi;if(m.Image){const E=new Image;E.onload=j($t,y,"TestLoadImage: loaded",!0,f,E),E.onerror=j($t,y,"TestLoadImage: error",!1,f,E),E.onabort=j($t,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=j($t,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function tl(l,f){const y=new wi,E=new AbortController,x=setTimeout(()=>{E.abort(),$t(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(x),U.ok?$t(y,"TestPingServer: ok",!0,f):$t(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(x),$t(y,"TestPingServer: error",!1,f)})}function $t(l,f,y,E,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),E(y)}catch{}}function uc(){this.g=new Co}function nl(l,f,y){const E=y||"";try{Nr(l,function(x,U){let Y=x;v(x)&&(Y=Ro(x)),f.push(E+U+"="+encodeURIComponent(Y))})}catch(x){throw f.push(E+"type="+encodeURIComponent("_badmap")),x}}function sr(l){this.l=l.Ub||null,this.j=l.eb||!1}X(sr,vi),sr.prototype.g=function(){return new Ci(this.l,this.j)},sr.prototype.i=function(l){return function(){return l}}({});function Ci(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Ci,at),i=Ci.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,An(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Sn(this):An(this),this.readyState==3&&rl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Sn(this))},i.Qa=function(l){this.g&&(this.response=l,Sn(this))},i.ga=function(){this.g&&Sn(this)};function Sn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,An(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function An(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function or(l){let f="";return Ae(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Mr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=or(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):ze(l,f,y))}function Ke(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(Ke,at);var cc=/^https?$/i,bo=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():En.g(),this.v=this.o?os(this.o):os(En),this.g.onreadystatechange=F(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){ki(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var x in E)y.set(x,E[x]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),x=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(bo,f,void 0))||E||x||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of y)this.g.setRequestHeader(U,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_s(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){ki(this,U)}};function ki(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ys(l),tn(l)}function ys(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Uo(this):this.bb())},i.bb=function(){Uo(this)};function Uo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||qt(l)!=4||l.Z()!=2)){if(l.u&&qt(l)==4)Io(l.Ea,0,l);else if(lt(l,"readystatechange"),qt(l)==4){l.h=!1;try{const Y=l.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=Y===0){var x=String(l.D).match(Ri)[1]||null;!x&&m.self&&m.self.location&&(x=m.self.location.protocol.slice(0,-1)),E=!cc.test(x?x.toLowerCase():"")}y=E}if(y)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var U=2<qt(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ys(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){_s(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{y.onreadystatechange=E}catch{}}}function _s(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function qt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Po(f)}};function zo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function vs(l){const f={};l=(l.g&&2<=qt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(_e(l[E]))continue;var y=D(l[E]);const x=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[x]||[];f[x]=U,U.push(y)}N(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function jo(l){this.Aa=0,this.i=[],this.j=new wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,l),this.cb=zn("retryDelaySeedMs",1e4,l),this.Wa=zn("forwardChannelMaxRetries",2,l),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ai(l&&l.concurrentRequestLimit),this.Da=new uc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=jo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){tt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=al(this,null,this.W),jn(this)};function Tt(l){if(Es(l),l.G==3){var f=l.U++,y=en(l.I);if(ze(y,"SID",l.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),ar(l,y),f=new wn(l,l.j,f),f.L=2,f.v=Or(en(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=ll(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Be(f)}ol(l)}function Rn(l){l.g&&(Bo(l),l.g.cancel(),l.g=null)}function Es(l){Rn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Is(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function jn(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||ee(),J||(Ue(),J=!0),le.add(f,l),l.B=0}}function hc(l,f){return Ga(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=_n(F(l.Ga,l,f),sl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const x=new wn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),C(U,this.S)):U=this.S),this.m!==null||this.O||(x.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Fr(this,x,f),y=en(this.I),ze(y,"RID",l),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),ar(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(or(U)))+"&"+f:this.m&&Mr(y,this.m,U)),Mo(this.h,x),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),x.T=!0,fs(x,y,null)):fs(x,y,f),this.G=2}}else this.G==3&&(l?ws(this,l):this.i.length==0||Zt(this.h)||ws(this))};function ws(l,f){var y;f?y=f.l:y=l.U++;const E=en(l.I);ze(E,"SID",l.K),ze(E,"RID",y),ze(E,"AID",l.T),ar(l,E),l.m&&l.o&&Mr(E,l.m,l.o),y=new wn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Fr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Mo(l.h,y),fs(y,E,f)}function ar(l,f){l.H&&Ae(l.H,function(y,E){ze(f,E,y)}),l.l&&Nr({},function(y,E){ze(f,E,y)})}function Fr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?F(l.l.Na,l.l,l):null;e:{var x=l.i;let U=-1;for(;;){const Y=["count="+y];U==-1?0<y?(U=x[0].g,Y.push("ofs="+U)):U=0:Y.push("ofs="+U);let be=!0;for(let ut=0;ut<y;ut++){let De=x[ut].g;const gt=x[ut].map;if(De-=U,0>De)U=Math.max(0,x[ut].g-100),be=!1;else try{nl(gt,Y,"req"+De+"_")}catch{E&&E(gt)}}if(be){E=Y.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Ni(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||ee(),J||(Ue(),J=!0),le.add(f,l),l.v=0}}function Ts(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=_n(F(l.Fa,l),sl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,il(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=_n(F(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Rn(this),il(this))};function Bo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function il(l){l.g=new wn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),ar(l,f),l.m&&l.o&&Mr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Or(en(f)),y.m=null,y.P=!0,xo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Rn(this),Ts(this),tt(19))};function Is(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Ss(l,f){var y=null;if(l.g==f){Is(l),Bo(l),l.g=null;var E=2}else if(bt(l.h,f))y=f.D,Qa(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var x=l.B;E=Ei(),lt(E,new us(E,y)),jn(l)}else Ni(l);else if(x=f.s,x==3||x==0&&0<f.X||!(E==1&&hc(l,f)||E==2&&Ts(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),x){case 1:lr(l,5);break;case 4:lr(l,10);break;case 3:lr(l,6);break;default:lr(l,2)}}}function sl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function lr(l,f){if(l.j.info("Error code "+f),f==2){var y=F(l.fb,l),E=l.Xa;const x=!E;E=new ir(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Pi(E,"https"),Or(E),x?lc(E.toString(),y):tl(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),ol(l),Es(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function ol(l){if(l.G=0,l.ka=[],l.l){const f=Ya(l.h);(f.length!=0||l.i.length!=0)&&(q(l.ka,f),q(l.ka,l.i),l.h.i.length=0,Q(l.i),l.i.length=0),l.l.ra()}}function al(l,f,y){var E=y instanceof ir?en(y):new ir(y);if(E.g!="")f&&(E.g=f+"."+E.g),Dr(E,E.s);else{var x=m.location;E=x.protocol,f=f?f+"."+x.hostname:x.hostname,x=+x.port;var U=new ir(null);E&&Pi(U,E),f&&(U.g=f),x&&Dr(U,x),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&ze(E,y,f),ze(E,"VER",l.la),ar(l,E),E}function ll(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new sr({eb:y})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function $o(){}i=$o.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function As(){}As.prototype.g=function(l,f){return new Ut(l,f)};function Ut(l,f){at.call(this),this.g=new jo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!_e(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_e(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Bn(this)}X(Ut,at),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Tt(this.g)},Ut.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Ro(l),l=y);f.i.push(new Ka(f.Ya++,l)),f.G==3&&jn(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,Ut.aa.N.call(this)};function ul(l){Mn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}X(ul,Mn);function cl(){ls.call(this),this.status=1}X(cl,ls);function Bn(l){this.g=l}X(Bn,$o),Bn.prototype.ua=function(){lt(this.g,"a")},Bn.prototype.ta=function(l){lt(this.g,new ul(l))},Bn.prototype.sa=function(l){lt(this.g,new cl)},Bn.prototype.ra=function(){lt(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,Ny=function(){return new As},ky=function(){return Ei()},Cy=Fn,td={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,mu=hs,$a.COMPLETE="complete",Py=$a,as.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",at.prototype.listen=at.prototype.K,ga=as,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Ry=Ke}).apply(typeof su<"u"?su:typeof self<"u"?self:typeof window<"u"?window:{});const Gm="@firebase/firestore";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let mo="11.0.2";/**
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
 */const Qi=new yd("@firebase/firestore");function Ks(){return Qi.logLevel}function te(i,...e){if(Qi.logLevel<=Re.DEBUG){const t=e.map(kd);Qi.debug(`Firestore (${mo}): ${i}`,...t)}}function Sr(i,...e){if(Qi.logLevel<=Re.ERROR){const t=e.map(kd);Qi.error(`Firestore (${mo}): ${i}`,...t)}}function io(i,...e){if(Qi.logLevel<=Re.WARN){const t=e.map(kd);Qi.warn(`Firestore (${mo}): ${i}`,...t)}}function kd(i){if(typeof i=="string")return i;try{/**
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
 */function pe(i="Unexpected state"){const e=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+i;throw Sr(e),new Error(e)}function Fe(i,e){i||pe()}function ge(i,e){return i}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Rr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class li{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Dy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Lt.UNAUTHENTICATED))}shutdown(){}}class eI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tI{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new li;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new li,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new li)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string"),new Dy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Lt(e)}}class nI{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class rI{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new nI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new iI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function oI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Vy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=oI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function ke(i,e){return i<e?-1:i>e?1:0}function so(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Pa{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(),s===void 0?s=e.length-t:s>e.length-t&&pe(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Pa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Qe extends Pa{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(W.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const aI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Pa{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return aI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ae(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ae(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ae(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ae(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Qe.fromString(e))}static fromName(e){return new he(Qe.fromString(e).popFirst(5))}static empty(){return new he(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Qe(e.slice()))}}function lI(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=me.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new ci(o,he.empty(),e)}function uI(i){return new ci(i.readTime,i.key,-1)}class ci{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ci(me.min(),he.empty(),-1)}static max(){return new ci(me.max(),he.empty(),-1)}}function cI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(i.documentKey,e.documentKey),t!==0?t:ke(i.largestBatchId,e.largestBatchId))}/**
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
 */const hI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function go(i){if(i.code!==W.FAILED_PRECONDITION||i.message!==hI)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,s)=>{t(e)})}static reject(e){return new z((t,s)=>{s(e)})}static waitFor(e){return new z((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=z.resolve(!1);for(const s of e)t=t.next(o=>o?z.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new z((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new z((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function fI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Hu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hu.oe=-1;function Wu(i){return i==null}function ku(i){return i===0&&1/i==-1/0}function pI(i){return typeof i=="number"&&Number.isInteger(i)&&!ku(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function mI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Qm(e)),e=gI(i.get(t),e);return Qm(e)}function gI(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Qm(i){return i+""}/**
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
 */function Ym(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Xi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Oy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Je{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ou(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ou(this.root,e,this.comparator,!1)}getReverseIterator(){return new ou(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ou(this.root,e,this.comparator,!0)}}class ou{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xm(this.data.getIterator())}getIteratorFrom(e){return new Xm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class Xm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class On{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new On([])}unionWith(e){let t=new pt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class xy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new xy("Invalid base64 string: "+u):u}}(e);return new Pt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const yI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(i){if(Fe(!!i),typeof i=="string"){let e=0;const t=yI.exec(i);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function di(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
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
 */function Nd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ku(i){const e=i.mapValue.fields.__previous_value__;return Nd(e)?Ku(e):e}function Ca(i){const e=hi(i.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class _I{constructor(e,t,s,o,u,h,m,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v}}class ka{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ka("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ka&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const au={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Nd(i)?4:EI(i)?9007199254740991:vI(i)?10:11:pe()}function Xn(i,e){if(i===e)return!0;const t=fi(i);if(t!==fi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Ca(i).isEqual(Ca(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=hi(o.timestampValue),m=hi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return di(o.bytesValue).isEqual(di(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?ku(h)===ku(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return so(i.arrayValue.values||[],e.arrayValue.values||[],Xn);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ym(h)!==Ym(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!Xn(h[g],m[g])))return!1;return!0}(i,e);default:return pe()}}function Na(i,e){return(i.values||[]).find(t=>Xn(t,e))!==void 0}function oo(i,e){if(i===e)return 0;const t=fi(i),s=fi(e);if(t!==s)return ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return Jm(i.timestampValue,e.timestampValue);case 4:return Jm(Ca(i),Ca(e));case 5:return ke(i.stringValue,e.stringValue);case 6:return function(u,h){const m=di(u),g=di(h);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=ke(m[v],g[v]);if(w!==0)return w}return ke(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=ke(rt(u.latitude),rt(h.latitude));return m!==0?m:ke(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Zm(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,v,w;const R=u.fields||{},F=h.fields||{},j=(m=R.value)===null||m===void 0?void 0:m.arrayValue,X=(g=F.value)===null||g===void 0?void 0:g.arrayValue,Q=ke(((v=j==null?void 0:j.values)===null||v===void 0?void 0:v.length)||0,((w=X==null?void 0:X.values)===null||w===void 0?void 0:w.length)||0);return Q!==0?Q:Zm(j,X)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===au.mapValue&&h===au.mapValue)return 0;if(u===au.mapValue)return 1;if(h===au.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let R=0;R<g.length&&R<w.length;++R){const F=ke(g[R],w[R]);if(F!==0)return F;const j=oo(m[g[R]],v[w[R]]);if(j!==0)return j}return ke(g.length,w.length)}(i.mapValue,e.mapValue);default:throw pe()}}function Jm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ke(i,e);const t=hi(i),s=hi(e),o=ke(t.seconds,s.seconds);return o!==0?o:ke(t.nanos,s.nanos)}function Zm(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=oo(t[o],s[o]);if(u)return u}return ke(t.length,s.length)}function ao(i){return nd(i)}function nd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=hi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return di(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return he.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=nd(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${nd(t.fields[h])}`;return o+"}"}(i.mapValue):pe()}function gu(i){switch(fi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ku(i);return e?16+gu(e):16;case 5:return 2*i.stringValue.length;case 6:return di(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+gu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return Xi(s.fields,(u,h)=>{o+=u.length+gu(h)}),o}(i.mapValue);default:throw pe()}}function rd(i){return!!i&&"integerValue"in i}function Dd(i){return!!i&&"arrayValue"in i}function eg(i){return!!i&&"nullValue"in i}function tg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function yu(i){return!!i&&"mapValue"in i}function vI(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ea(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Xi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ea(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ea(i.arrayValue.values[t]);return e}return Object.assign({},i)}function EI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!yu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Ea(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());yu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];yu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Xi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new yn(Ea(this.value))}}function Ly(i){const e=[];return Xi(i.fields,(t,s)=>{const o=new Rt([t]);if(yu(s)){const u=Ly(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new On(e)}/**
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
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,me.min(),me.min(),me.min(),yn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,me.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,me.min(),me.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,me.min(),me.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nu{constructor(e,t){this.position=e,this.inclusive=t}}function ng(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=he.comparator(he.fromName(h.referenceValue),t.key):s=oo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function rg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Xn(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Du{constructor(e,t="asc"){this.field=e,this.dir=t}}function wI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class My{}class dt extends My{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new II(e,t,s):t==="array-contains"?new RI(e,s):t==="in"?new PI(e,s):t==="not-in"?new CI(e,s):t==="array-contains-any"?new kI(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new SI(e,s):new AI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(oo(t,this.value)):t!==null&&fi(this.value)===fi(t)&&this.matchesComparison(oo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends My{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Jn(e,t)}matches(e){return Fy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fy(i){return i.op==="and"}function by(i){return TI(i)&&Fy(i)}function TI(i){for(const e of i.filters)if(e instanceof Jn)return!1;return!0}function id(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+ao(i.value);if(by(i))return i.filters.map(e=>id(e)).join(",");{const e=i.filters.map(t=>id(t)).join(",");return`${i.op}(${e})`}}function Uy(i,e){return i instanceof dt?function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&Xn(s.value,o.value)}(i,e):i instanceof Jn?function(s,o){return o instanceof Jn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&Uy(h,o.filters[m]),!0):!1}(i,e):void pe()}function zy(i){return i instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${ao(t.value)}`}(i):i instanceof Jn?function(t){return t.op.toString()+" {"+t.getFilters().map(zy).join(" ,")+"}"}(i):"Filter"}class II extends dt{constructor(e,t,s){super(e,t,s),this.key=he.fromName(s.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class SI extends dt{constructor(e,t){super(e,"in",t),this.keys=jy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class AI extends dt{constructor(e,t){super(e,"not-in",t),this.keys=jy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function jy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>he.fromName(s.referenceValue))}class RI extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Dd(t)&&Na(t.arrayValue,this.value)}}class PI extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Na(this.value.arrayValue,t)}}class CI extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Na(this.value.arrayValue,t)}}class kI extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Dd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Na(this.value.arrayValue,s))}}/**
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
 */class NI{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.ue=null}}function ig(i,e=null,t=[],s=[],o=null,u=null,h=null){return new NI(i,e,t,s,o,u,h)}function Vd(i){const e=ge(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>id(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Wu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ao(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ao(s)).join(",")),e.ue=t}return e.ue}function Od(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!wI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Uy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!rg(i.startAt,e.startAt)&&rg(i.endAt,e.endAt)}function sd(i){return he.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Gu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function DI(i,e,t,s,o,u,h,m){return new Gu(i,e,t,s,o,u,h,m)}function By(i){return new Gu(i)}function sg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function VI(i){return i.collectionGroup!==null}function wa(i){const e=ge(i);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Rt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Du(u,s))}),t.has(Rt.keyField().canonicalString())||e.ce.push(new Du(Rt.keyField(),s))}return e.ce}function Qn(i){const e=ge(i);return e.le||(e.le=OI(e,wa(i))),e.le}function OI(i,e){if(i.limitType==="F")return ig(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Du(o.field,u)});const t=i.endAt?new Nu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Nu(i.startAt.position,i.startAt.inclusive):null;return ig(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function od(i,e,t){return new Gu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Qu(i,e){return Od(Qn(i),Qn(e))&&i.limitType===e.limitType}function $y(i){return`${Vd(Qn(i))}|lt:${i.limitType}`}function Gs(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>zy(o)).join(", ")}]`),Wu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>ao(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>ao(o)).join(",")),`Target(${s})`}(Qn(i))}; limitType=${i.limitType})`}function Yu(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):he.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of wa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const v=ng(h,m,g);return h.inclusive?v<=0:v<0}(s.startAt,wa(s),o)||s.endAt&&!function(h,m,g){const v=ng(h,m,g);return h.inclusive?v>=0:v>0}(s.endAt,wa(s),o))}(i,e)}function xI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function qy(i){return(e,t)=>{let s=!1;for(const o of wa(i)){const u=LI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function LI(i,e,t){const s=i.field.isKeyField()?he.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?oo(g,v):pe()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return pe()}}/**
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
 */class Ji{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Xi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Oy(this.inner)}size(){return this.innerSize}}/**
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
 */const MI=new Je(he.comparator);function Ar(){return MI}const Hy=new Je(he.comparator);function ya(...i){let e=Hy;for(const t of i)e=e.insert(t.key,t);return e}function Wy(i){let e=Hy;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Hi(){return Ta()}function Ky(){return Ta()}function Ta(){return new Ji(i=>i.toString(),(i,e)=>i.isEqual(e))}const FI=new Je(he.comparator),bI=new pt(he.comparator);function Pe(...i){let e=bI;for(const t of i)e=e.add(t);return e}const UI=new pt(ke);function zI(){return UI}/**
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
 */function xd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ku(e)?"-0":e}}function Gy(i){return{integerValue:""+i}}function jI(i,e){return pI(e)?Gy(e):xd(i,e)}/**
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
 */class Xu{constructor(){this._=void 0}}function BI(i,e,t){return i instanceof Vu?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Nd(u)&&(u=Ku(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):i instanceof Da?Yy(i,e):i instanceof Va?Xy(i,e):function(o,u){const h=Qy(o,u),m=og(h)+og(o.Pe);return rd(h)&&rd(o.Pe)?Gy(m):xd(o.serializer,m)}(i,e)}function $I(i,e,t){return i instanceof Da?Yy(i,e):i instanceof Va?Xy(i,e):t}function Qy(i,e){return i instanceof Ou?function(s){return rd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Vu extends Xu{}class Da extends Xu{constructor(e){super(),this.elements=e}}function Yy(i,e){const t=Jy(e);for(const s of i.elements)t.some(o=>Xn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Va extends Xu{constructor(e){super(),this.elements=e}}function Xy(i,e){let t=Jy(e);for(const s of i.elements)t=t.filter(o=>!Xn(o,s));return{arrayValue:{values:t}}}class Ou extends Xu{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function og(i){return rt(i.integerValue||i.doubleValue)}function Jy(i){return Dd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function qI(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Da&&o instanceof Da||s instanceof Va&&o instanceof Va?so(s.elements,o.elements,Xn):s instanceof Ou&&o instanceof Ou?Xn(s.Pe,o.Pe):s instanceof Vu&&o instanceof Vu}(i.transform,e.transform)}class HI{constructor(e,t){this.version=e,this.transformResults=t}}class wr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _u(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ju{}function Zy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new t_(i.key,wr.none()):new ba(i.key,i.data,wr.none());{const t=i.data,s=yn.empty();let o=new pt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Zi(i.key,s,new On(o.toArray()),wr.none())}}function WI(i,e,t){i instanceof ba?function(o,u,h){const m=o.value.clone(),g=lg(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Zi?function(o,u,h){if(!_u(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=lg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(e_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ia(i,e,t,s){return i instanceof ba?function(u,h,m,g){if(!_u(u.precondition,h))return m;const v=u.value.clone(),w=ug(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof Zi?function(u,h,m,g){if(!_u(u.precondition,h))return m;const v=ug(u.fieldTransforms,g,h),w=h.data;return w.setAll(e_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(i,e,t,s):function(u,h,m){return _u(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function KI(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Qy(s.transform,o||null);u!=null&&(t===null&&(t=yn.empty()),t.set(s.field,u))}return t||null}function ag(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&so(s,o,(u,h)=>qI(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ba extends Ju{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Zi extends Ju{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function e_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function lg(i,e,t){const s=new Map;Fe(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,$I(h,m,t[o]))}return s}function ug(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,BI(u,h,e))}return s}class t_ extends Ju{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GI extends Ju{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&WI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ia(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ia(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ky();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=Zy(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(me.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,(t,s)=>ag(t,s))&&so(this.baseMutations,e.baseMutations,(t,s)=>ag(t,s))}}class Ld{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length);let o=function(){return FI}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Ld(e,t,s,o)}}/**
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
 */class YI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,Ve;function JI(i){switch(i){default:return pe();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function n_(i){if(i===void 0)return Sr("GRPC error has no .code"),W.UNKNOWN;switch(i){case ot.OK:return W.OK;case ot.CANCELLED:return W.CANCELLED;case ot.UNKNOWN:return W.UNKNOWN;case ot.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case ot.INTERNAL:return W.INTERNAL;case ot.UNAVAILABLE:return W.UNAVAILABLE;case ot.UNAUTHENTICATED:return W.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case ot.NOT_FOUND:return W.NOT_FOUND;case ot.ALREADY_EXISTS:return W.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return W.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case ot.ABORTED:return W.ABORTED;case ot.OUT_OF_RANGE:return W.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return W.UNIMPLEMENTED;case ot.DATA_LOSS:return W.DATA_LOSS;default:return pe()}}(Ve=ot||(ot={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ZI(){return new TextEncoder}/**
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
 */const eS=new Wi([4294967295,4294967295],0);function cg(i){const e=ZI().encode(i),t=new Ay;return t.update(e),new Uint8Array(t.digest())}function hg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Wi([t,s],0),new Wi([o,u],0)]}class Md{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new _a(`Invalid padding: ${t}`);if(s<0)throw new _a(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new _a(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Wi.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(Wi.fromNumber(s)));return o.compare(eS)===1&&(o=new Wi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=cg(e),[s,o]=hg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Md(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Te===0)return;const t=cg(e),[s,o]=hg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ee(s,o,u);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zu{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Zu(me.min(),o,new Je(ke),Ar(),Pe())}}class Ua{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ua(s,t,Pe(),Pe(),Pe())}}/**
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
 */class vu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class r_{constructor(e,t){this.targetId=e,this.me=t}}class i_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class dg{constructor(){this.fe=0,this.ge=fg(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),s=Pe();return this.ge.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe()}}),new Ua(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=fg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tS{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ar(),this.qe=lu(),this.Qe=lu(),this.Ke=new Je(ke)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const u=o.target;if(sd(u))if(s===0){const h=new he(u.path);this.We(t,h,Mt.newNoDocument(h,me.min()))}else Fe(s===1);else{const h=this.Ze(t);if(h!==s){const m=this.Xe(e),g=m?this.et(m,e,h):1;if(g!==0){this.He(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=di(s).toUint8Array()}catch(g){if(g instanceof xy)return io("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Md(h,o,u)}catch(g){return io(g instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.Te===0?null:m}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.Le.nt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.We(t,u,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((u,h)=>{const m=this.Ye(h);if(m){if(u.current&&sd(m.target)){const g=new he(m.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,Mt.newNoDocument(g,e))}u.be&&(t.set(h,u.ve()),u.Ce())}});let s=Pe();this.Qe.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const v=this.Ye(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.ke.forEach((u,h)=>h.setReadTime(e));const o=new Zu(e,t,this.Ke,this.ke,s);return this.ke=Ar(),this.qe=lu(),this.Qe=lu(),this.Ke=new Je(ke),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new dg,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new pt(ke),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pt(ke),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new dg),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function lu(){return new Je(he.comparator)}function fg(){return new Je(he.comparator)}const nS={asc:"ASCENDING",desc:"DESCENDING"},rS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iS={and:"AND",or:"OR"};class sS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ad(i,e){return i.useProto3Json||Wu(e)?e:{value:e}}function xu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function s_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function oS(i,e){return xu(i,e.toTimestamp())}function Yn(i){return Fe(!!i),me.fromTimestamp(function(t){const s=hi(t);return new ft(s.seconds,s.nanos)}(i))}function Fd(i,e){return ld(i,e).canonicalString()}function ld(i,e){const t=function(o){return new Qe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function o_(i){const e=Qe.fromString(i);return Fe(h_(e)),e}function ud(i,e){return Fd(i.databaseId,e.path)}function $h(i,e){const t=o_(e);if(t.get(1)!==i.databaseId.projectId)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ae(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new he(l_(t))}function a_(i,e){return Fd(i.databaseId,e)}function aS(i){const e=o_(i);return e.length===4?Qe.emptyPath():l_(e)}function cd(i){return new Qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function l_(i){return Fe(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function pg(i,e,t){return{name:ud(i,e),fields:t.value.mapValue.fields}}function lS(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(Fe(w===void 0||typeof w=="string"),Pt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Pt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?W.UNKNOWN:n_(v.code);return new ae(w,v.message||"")}(h);t=new i_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=$h(i,s.document.name),u=Yn(s.document.updateTime),h=s.document.createTime?Yn(s.document.createTime):me.min(),m=new yn({mapValue:{fields:s.document.fields}}),g=Mt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new vu(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=$h(i,s.document),u=s.readTime?Yn(s.readTime):me.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new vu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=$h(i,s.document),u=s.removedTargetIds||[];t=new vu([],u,o,null)}else{if(!("filter"in e))return pe();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new XI(o,u),m=s.targetId;t=new r_(m,h)}}return t}function uS(i,e){let t;if(e instanceof ba)t={update:pg(i,e.key,e.value)};else if(e instanceof t_)t={delete:ud(i,e.key)};else if(e instanceof Zi)t={update:pg(i,e.key,e.data),updateMask:_S(e.fieldMask)};else{if(!(e instanceof GI))return pe();t={verify:ud(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Vu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Da)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Va)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ou)return{fieldPath:h.field.canonicalString(),increment:m.Pe};throw pe()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:oS(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe()}(i,e.precondition)),t}function cS(i,e){return i&&i.length>0?(Fe(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Yn(o.updateTime):Yn(u);return h.isEqual(me.min())&&(h=Yn(u)),new HI(h,o.transformResults||[])}(t,e))):[]}function hS(i,e){return{documents:[a_(i,e.path)]}}function dS(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=a_(i,o);const u=function(v){if(v.length!==0)return c_(Jn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(F){return{field:Qs(F.field),direction:mS(F.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=ad(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ct:t,parent:o}}function fS(i){let e=aS(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(R){const F=u_(R);return F instanceof Jn&&by(F)?F.getFilters():[F]}(t.where));let h=[];t.orderBy&&(h=function(R){return R.map(F=>function(X){return new Du(Ys(X.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(F))}(t.orderBy));let m=null;t.limit&&(m=function(R){let F;return F=typeof R=="object"?R.value:R,Wu(F)?null:F}(t.limit));let g=null;t.startAt&&(g=function(R){const F=!!R.before,j=R.values||[];return new Nu(j,F)}(t.startAt));let v=null;return t.endAt&&(v=function(R){const F=!R.before,j=R.values||[];return new Nu(j,F)}(t.endAt)),DI(e,o,h,u,m,"F",g,v)}function pS(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function u_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ys(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ys(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ys(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ys(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(i):i.fieldFilter!==void 0?function(t){return dt.create(Ys(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Jn.create(t.compositeFilter.filters.map(s=>u_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe()}}(t.compositeFilter.op))}(i):pe()}function mS(i){return nS[i]}function gS(i){return rS[i]}function yS(i){return iS[i]}function Qs(i){return{fieldPath:i.canonicalString()}}function Ys(i){return Rt.fromServerFormat(i.fieldPath)}function c_(i){return i instanceof dt?function(t){if(t.op==="=="){if(tg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NAN"}};if(eg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NAN"}};if(eg(t.value))return{unaryFilter:{field:Qs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qs(t.field),op:gS(t.op),value:t.value}}}(i):i instanceof Jn?function(t){const s=t.getFilters().map(o=>c_(o));return s.length===1?s[0]:{compositeFilter:{op:yS(t.op),filters:s}}}(i):pe()}function _S(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function h_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ri{constructor(e,t,s,o,u=me.min(),h=me.min(),m=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class vS{constructor(e){this.ht=e}}function ES(i){const e=fS({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?od(e,e.limit,"L"):e}/**
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
 */class wS{constructor(){this.ln=new TS}addToCollectionParentIndex(e,t){return this.ln.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(ci.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class TS{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(Qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(Qe.comparator)).toArray()}}/**
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
 */const mg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class lo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new lo(0)}static Qn(){return new lo(-1)}}/**
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
 */function gg([i,e],[t,s]){const o=ke(i,t);return o===0?ke(e,s):o}class IS{constructor(e){this.Gn=e,this.buffer=new pt(gg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();gg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class SS{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yo(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await go(t)}await this.Yn(3e5)})}}class AS{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Hu.oe);const s=new IS(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(mg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,m,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),o=this.params.maximumSequenceNumbersToCollect):o=R,h=Date.now(),this.nthSequenceNumber(e,o))).next(R=>(s=R,m=Date.now(),this.removeTargets(e,s,t))).next(R=>(u=R,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(v=Date.now(),Ks()<=Re.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${R} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:R})))}}function RS(i,e){return new AS(i,e)}/**
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
 */class PS{constructor(){this.changes=new Ji(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kS{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ia(s.mutation,o,On.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const o=Hi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=ya();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Hi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Ar();const h=Ta(),m=function(){return Ta()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Zi)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Ia(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,On.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var R;return m.set(v,new CS(w,(R=h.get(v))!==null&&R!==void 0?R:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Ta();let o=new Je((h,m)=>h-m),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||On.empty();w=m.applyToLocalView(v,w),s.set(g,w);const R=(o.get(m.batchId)||Pe()).add(g);o=o.insert(m.batchId,R)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,R=Ky();w.forEach(F=>{if(!u.has(F)){const j=Zy(t.get(F),s.get(F));j!==null&&R.set(F,j),u=u.add(F)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,R))}return z.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return he.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):VI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):z.resolve(Hi());let m=-1,g=u;return h.next(v=>z.forEach(v,(w,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(w)?z.resolve():this.remoteDocumentCache.getEntry(e,w).next(F=>{g=g.insert(w,F)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Pe())).next(w=>({batchId:m,changes:Wy(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(s=>{let o=ya();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=ya();return this.indexManager.getCollectionParents(e,u).next(m=>z.forEach(m,g=>{const v=function(R,F){return new Gu(F,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((R,F)=>{h=h.insert(R,F)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))});let m=ya();return h.forEach((g,v)=>{const w=u.get(g);w!==void 0&&Ia(w.mutation,v,On.empty(),ft.now()),Yu(t,v)&&(m=m.insert(g,v))}),m})}}/**
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
 */class NS{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return z.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Yn(o.createTime)}}(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:ES(o.bundledQuery),readTime:Yn(o.readTime)}}(t)),z.resolve()}}/**
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
 */class DS{constructor(){this.overlays=new Je(he.comparator),this.Er=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Hi();return z.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),z.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){const o=Hi(),u=t.length+1,h=new he(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return z.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Hi(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Hi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return z.resolve(m)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new YI(t,s));let u=this.Er.get(t);u===void 0&&(u=Pe(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
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
 */class VS{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
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
 */class bd{constructor(){this.dr=new pt(Et.Ar),this.Rr=new pt(Et.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new Et(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new he(new Qe([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new he(new Qe([])),s=new Et(t,e),o=new Et(t,e+1);let u=Pe();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return he.comparator(e.key,t.key)||ke(e.br,t.br)}static Vr(e,t){return ke(e.br,t.br)||he.comparator(e.key,t.key)}}/**
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
 */class OS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new pt(Et.Ar)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new QI(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.vr=this.vr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return z.resolve(h)}lookupMutationBatch(e,t){return z.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return z.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const m=this.Cr(h.br);u.push(m)}),z.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(ke);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],m=>{s=s.add(m.br)})}),z.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;he.isDocumentKey(u)||(u=u.child(""));const h=new Et(new he(u),0);let m=new pt(ke);return this.vr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.br)),!0)},h),z.resolve(this.Mr(m))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return z.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new Et(t,0),o=this.vr.firstAfterOrEqual(s);return z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class xS{constructor(e){this.Nr=e,this.docs=function(){return new Je(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))}),z.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ar();const h=t.path,m=new he(h.child("")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||cI(uI(w),s)<=0||(o.has(w.key)||Yu(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return z.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe()}Lr(e,t){return z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new LS(this)}getSize(e){return z.resolve(this.size)}}class LS extends PS{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),z.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class MS{constructor(e){this.persistence=e,this.Br=new Ji(t=>Vd(t),Od),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.kr=0,this.qr=new bd,this.targetCount=0,this.Qr=lo.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),z.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new lo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Un(t),z.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Br.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),z.waitFor(u).next(()=>o)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),z.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),z.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this.qr.containsKey(t))}}/**
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
 */class d_{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Hu(0),this.Ur=!1,this.Ur=!0,this.Wr=new VS,this.referenceDelegate=e(this),this.Gr=new MS(this),this.indexManager=new wS,this.remoteDocumentCache=function(o){return new xS(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new vS(t),this.jr=new NS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new OS(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new FS(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return z.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class FS extends dI{constructor(e){super(),this.currentSequenceNumber=e}}class Ud{constructor(e){this.persistence=e,this.Zr=new bd,this.Xr=null}static ei(e){return new Ud(e)}get ti(){if(this.Xr)return this.Xr;throw pe()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),z.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.ti,s=>{const o=he.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,me.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return z.or([()=>z.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Lu{constructor(e,t){this.persistence=e,this.ri=new Ji(s=>mI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=RS(this,t)}static ei(e,t){return new Lu(e,t)}Hr(){}Jr(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return z.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?z.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(m=>{m||(s++,u.removeEntry(h,me.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),z.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gu(e.data.value)),t}ir(e,t,s){return z.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return z.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new zd(e,t.fromCache,s,o)}}/**
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
 */class bS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class US{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return w0()?8:fI(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new bS;return this.ts(e,t,h).next(m=>{if(u.result=m,this.Hi)return this.ns(e,t,h,m.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(Ks()<=Re.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Gs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),z.resolve()):(Ks()<=Re.DEBUG&&te("QueryEngine","Query:",Gs(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(Ks()<=Re.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Gs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(t))):z.resolve())}Xi(e,t){if(sg(t))return z.resolve(null);let s=Qn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=od(t,null,"F"),s=Qn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Pe(...u);return this.Zi.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.rs(t,m);return this.ss(t,v,h,g.readTime)?this.Xi(e,od(t,null,"F")):this.os(e,v,t,g)}))})))}es(e,t,s,o){return sg(t)||o.isEqual(me.min())?z.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?z.resolve(null):(Ks()<=Re.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Gs(t)),this.os(e,h,t,lI(o,-1)).next(m=>m))})}rs(e,t){let s=new pt(qy(e));return t.forEach((o,u)=>{Yu(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return Ks()<=Re.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Gs(t)),this.Zi.getDocumentsMatchingQuery(e,t,ci.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */class zS{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Je(ke),this.cs=new Ji(u=>Vd(u),Od),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kS(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function jS(i,e,t,s){return new zS(i,e,t,s)}async function f_(i,e){const t=ge(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Pe();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:m}))})})}function BS(i,e){const t=ge(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(m,g,v,w){const R=v.batch,F=R.keys();let j=z.resolve();return F.forEach(X=>{j=j.next(()=>w.getEntry(g,X)).next(Q=>{const q=v.docVersions.get(X);Fe(q!==null),Q.version.compareTo(q)<0&&(R.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),w.addEntry(Q)))})}),j.next(()=>m.mutationQueue.removeMutationBatch(g,R))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Pe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function p_(i){const e=ge(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function $S(i,e){const t=ge(i),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const m=[];e.targetChanges.forEach((w,R)=>{const F=o.get(R);if(!F)return;m.push(t.Gr.removeMatchingKeys(u,w.removedDocuments,R).next(()=>t.Gr.addMatchingKeys(u,w.addedDocuments,R)));let j=F.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?j=j.withResumeToken(Pt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,s)),o=o.insert(R,j),function(Q,q,ve){return Q.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=3e8?!0:ve.addedDocuments.size+ve.modifiedDocuments.size+ve.removedDocuments.size>0}(F,j,w)&&m.push(t.Gr.updateTargetData(u,j))});let g=Ar(),v=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(qS(u,h,e.documentUpdates).next(w=>{g=w.Is,v=w.Es})),!s.isEqual(me.min())){const w=t.Gr.getLastRemoteSnapshotVersion(u).next(R=>t.Gr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return z.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.us=o,u))}function qS(i,e,t){let s=Pe(),o=Pe();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Ar();return t.forEach((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(me.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):te("LocalStore","Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)}),{Is:h,Es:o}})}function HS(i,e){const t=ge(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function WS(i,e){const t=ge(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(u=>u?(o=u,z.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new ri(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function hd(i,e,t){const s=ge(i),o=s.us.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!yo(h))throw h;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function yg(i,e,t){const s=ge(i);let o=me.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const R=ge(g),F=R.cs.get(w);return F!==void 0?z.resolve(R.us.get(F)):R.Gr.getTargetData(v,w)}(s,h,Qn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:me.min(),t?u:Pe())).next(m=>(KS(s,xI(e),m),{documents:m,ds:u})))}function KS(i,e,t){let s=i.ls.get(e)||me.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.ls.set(e,s)}class _g{constructor(){this.activeTargetIds=zI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GS{constructor(){this._o=new _g,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new _g,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QS{uo(e){}shutdown(){}}/**
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
 */class vg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uu=null;function qh(){return uu===null?uu=function(){return 268435456+Math.round(2147483648*Math.random())}():uu++,"0x"+uu.toString(16)}/**
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
 */const YS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const xt="WebChannelConnection";class JS extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const m=qh(),g=this.No(t,s.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${m}:`,g,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,u,h),this.Bo(t,g,v,o).then(w=>(te("RestConnection",`Received RPC '${t}' ${m}: `,w),w),w=>{throw io("RestConnection",`RPC '${t}' ${m} failed with error: `,w,"url: ",g,"request:",o),w})}ko(t,s,o,u,h,m){return this.Oo(t,s,o,u,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=YS[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const u=qh();return new Promise((h,m)=>{const g=new Ry;g.setWithCredentials(!0),g.listenOnce(Py.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case mu.NO_ERROR:const w=g.getResponseJson();te(xt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(w)),h(w);break;case mu.TIMEOUT:te(xt,`RPC '${e}' ${u} timed out`),m(new ae(W.DEADLINE_EXCEEDED,"Request time out"));break;case mu.HTTP_ERROR:const R=g.getStatus();if(te(xt,`RPC '${e}' ${u} failed with status:`,R,"response text:",g.getResponseText()),R>0){let F=g.getResponseJson();Array.isArray(F)&&(F=F[0]);const j=F==null?void 0:F.error;if(j&&j.status&&j.message){const X=function(q){const ve=q.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(ve)>=0?ve:W.UNKNOWN}(j.status);m(new ae(X,j.message))}else m(new ae(W.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new ae(W.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{te(xt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);te(xt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}qo(e,t,s){const o=qh(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ny(),m=ky(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");te(xt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const R=h.createWebChannel(w,g);let F=!1,j=!1;const X=new XS({Eo:q=>{j?te(xt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(F||(te(xt,`Opening RPC '${e}' stream ${o} transport.`),R.open(),F=!0),te(xt,`RPC '${e}' stream ${o} sending:`,q),R.send(q))},Ao:()=>R.close()}),Q=(q,ve,_e)=>{q.listen(ve,ye=>{try{_e(ye)}catch(Te){setTimeout(()=>{throw Te},0)}})};return Q(R,ga.EventType.OPEN,()=>{j||(te(xt,`RPC '${e}' stream ${o} transport opened.`),X.So())}),Q(R,ga.EventType.CLOSE,()=>{j||(j=!0,te(xt,`RPC '${e}' stream ${o} transport closed`),X.Do())}),Q(R,ga.EventType.ERROR,q=>{j||(j=!0,io(xt,`RPC '${e}' stream ${o} transport errored:`,q),X.Do(new ae(W.UNAVAILABLE,"The operation could not be completed")))}),Q(R,ga.EventType.MESSAGE,q=>{var ve;if(!j){const _e=q.data[0];Fe(!!_e);const ye=_e,Te=(ye==null?void 0:ye.error)||((ve=ye[0])===null||ve===void 0?void 0:ve.error);if(Te){te(xt,`RPC '${e}' stream ${o} received error:`,Te);const We=Te.status;let Ae=function(A){const C=ot[A];if(C!==void 0)return n_(C)}(We),N=Te.message;Ae===void 0&&(Ae=W.INTERNAL,N="Unknown error status: "+We+" with message "+Te.message),j=!0,X.Do(new ae(Ae,N)),R.close()}else te(xt,`RPC '${e}' stream ${o} received:`,_e),X.vo(_e)}}),Q(m,Cy.STAT_EVENT,q=>{q.stat===td.PROXY?te(xt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===td.NOPROXY&&te(xt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{X.bo()},0),X}}function Hh(){return typeof document<"u"?document:null}/**
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
 */function ec(i){return new sS(i,!0)}/**
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
 */class m_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class g_{constructor(e,t,s,o,u,h,m,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new m_(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ae(W.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZS extends g_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=lS(this.serializer,e),s=function(u){if(!("targetChange"in u))return me.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?me.min():h.readTime?Yn(h.readTime):me.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=cd(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=sd(g)?{documents:hS(u,g)}:{query:dS(u,g).ct},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=s_(u,h.resumeToken);const v=ad(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(me.min())>0){m.readTime=xu(u,h.snapshotVersion.toTimestamp());const v=ad(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=pS(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=cd(this.serializer),t.removeTarget=e,this.c_(t)}}class e1 extends g_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=cS(e.writeResults,e.commitTime),s=Yn(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=cd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>uS(this.serializer,s))};this.c_(t)}}/**
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
 */class t1 extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,ld(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(W.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.ko(e,ld(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(W.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class n1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Sr(t),this.C_=!1):te("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class r1{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{es(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=ge(g);v.k_.add(4),await za(v),v.K_.set("Unknown"),v.k_.delete(4),await tc(v)}(this))})}),this.K_=new n1(s,o)}}async function tc(i){if(es(i))for(const e of i.q_)await e(!0)}async function za(i){for(const e of i.q_)await e(!1)}function y_(i,e){const t=ge(i);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),qd(t)?$d(t):_o(t).s_()&&Bd(t,e))}function jd(i,e){const t=ge(i),s=_o(t);t.B_.delete(e),s.s_()&&__(t,e),t.B_.size===0&&(s.s_()?s.a_():es(t)&&t.K_.set("Unknown"))}function Bd(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_o(i).V_(e)}function __(i,e){i.U_.xe(e),_o(i).m_(e)}function $d(i){i.U_=new tS({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),_o(i).start(),i.K_.F_()}function qd(i){return es(i)&&!_o(i).i_()&&i.B_.size>0}function es(i){return ge(i).k_.size===0}function v_(i){i.U_=void 0}async function i1(i){i.K_.set("Online")}async function s1(i){i.B_.forEach((e,t)=>{Bd(i,e)})}async function o1(i,e){v_(i),qd(i)?(i.K_.O_(e),$d(i)):i.K_.set("Unknown")}async function a1(i,e,t){if(i.K_.set("Online"),e instanceof i_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.B_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.B_.delete(m),o.U_.removeTarget(m))}(i,e)}catch(s){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mu(i,s)}else if(e instanceof vu?i.U_.$e(e):e instanceof r_?i.U_.Je(e):i.U_.Ge(e),!t.isEqual(me.min()))try{const s=await p_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.U_.it(h);return m.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.B_.get(v);w&&u.B_.set(v,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,v)=>{const w=u.B_.get(g);if(!w)return;u.B_.set(g,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),__(u,g);const R=new ri(w.target,g,v,w.sequenceNumber);Bd(u,R)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te("RemoteStore","Failed to raise snapshot:",s),await Mu(i,s)}}async function Mu(i,e,t){if(!yo(e))throw e;i.k_.add(1),await za(i),i.K_.set("Offline"),t||(t=()=>p_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),i.k_.delete(1),await tc(i)})}function E_(i,e){return e().catch(t=>Mu(i,t,e))}async function nc(i){const e=ge(i),t=pi(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;l1(e);)try{const o=await HS(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,u1(e,o)}catch(o){await Mu(e,o)}w_(e)&&T_(e)}function l1(i){return es(i)&&i.L_.length<10}function u1(i,e){i.L_.push(e);const t=pi(i);t.s_()&&t.f_&&t.g_(e.mutations)}function w_(i){return es(i)&&!pi(i).i_()&&i.L_.length>0}function T_(i){pi(i).start()}async function c1(i){pi(i).w_()}async function h1(i){const e=pi(i);for(const t of i.L_)e.g_(t.mutations)}async function d1(i,e,t){const s=i.L_.shift(),o=Ld.from(s,e,t);await E_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await nc(i)}async function f1(i,e){e&&pi(i).f_&&await async function(s,o){if(function(h){return JI(h)&&h!==W.ABORTED}(o.code)){const u=s.L_.shift();pi(s).__(),await E_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await nc(s)}}(i,e),w_(i)&&T_(i)}async function Eg(i,e){const t=ge(i);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const s=es(t);t.k_.add(3),await za(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await tc(t)}async function p1(i,e){const t=ge(i);e?(t.k_.delete(2),await tc(t)):e||(t.k_.add(2),await za(t),t.K_.set("Unknown"))}function _o(i){return i.W_||(i.W_=function(t,s,o){const u=ge(t);return u.b_(),new ZS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:i1.bind(null,i),mo:s1.bind(null,i),po:o1.bind(null,i),R_:a1.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),qd(i)?$d(i):i.K_.set("Unknown")):(await i.W_.stop(),v_(i))})),i.W_}function pi(i){return i.G_||(i.G_=function(t,s,o){const u=ge(t);return u.b_(),new e1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:c1.bind(null,i),po:f1.bind(null,i),p_:h1.bind(null,i),y_:d1.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await nc(i)):(await i.G_.stop(),i.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${i.L_.length} pending writes`),i.L_=[]))})),i.G_}/**
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
 */class Hd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Hd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wd(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),yo(i))return new ae(W.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class to{static emptySet(e){return new to(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||he.comparator(t.key,s.key):(t,s)=>he.comparator(t.key,s.key),this.keyedMap=ya(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof to)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new to;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class wg{constructor(){this.z_=new Je(he.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):pe():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class uo{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new uo(e,t,to.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class m1{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class g1{constructor(){this.queries=Tg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=ge(t),u=o.queries;o.queries=Tg(),u.forEach((h,m)=>{for(const g of m.J_)g.onError(s)})})(this,new ae(W.ABORTED,"Firestore shutting down"))}}function Tg(){return new Ji(i=>$y(i),Qu)}async function y1(i,e){const t=ge(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Y_()&&e.Z_()&&(s=2):(u=new m1,s=e.Z_()?0:1);try{switch(s){case 0:u.H_=await t.onListen(o,!0);break;case 1:u.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Wd(h,`Initialization of query '${Gs(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.J_.push(e),e.ea(t.onlineState),u.H_&&e.ta(u.H_)&&Kd(t)}async function _1(i,e){const t=ge(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.J_.indexOf(e);h>=0&&(u.J_.splice(h,1),u.J_.length===0?o=e.Z_()?0:1:!u.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function v1(i,e){const t=ge(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.J_)m.ta(o)&&(s=!0);h.H_=o}}s&&Kd(t)}function E1(i,e,t){const s=ge(i),o=s.queries.get(e);if(o)for(const u of o.J_)u.onError(t);s.queries.delete(e)}function Kd(i){i.X_.forEach(e=>{e.next()})}var dd,Ig;(Ig=dd||(dd={})).na="default",Ig.Cache="cache";class w1{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new uo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==dd.Cache}}/**
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
 */class I_{constructor(e){this.key=e}}class S_{constructor(e){this.key=e}}class T1{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=qy(e),this.ma=new to(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new wg,o=t?t.ma:this.ma;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,R)=>{const F=o.get(w),j=Yu(this.query,R)?R:null,X=!!F&&this.mutatedKeys.has(F.key),Q=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let q=!1;F&&j?F.data.isEqual(j.data)?X!==Q&&(s.track({type:3,doc:j}),q=!0):this.ya(F,j)||(s.track({type:2,doc:j}),q=!0,(g&&this.Va(j,g)>0||v&&this.Va(j,v)<0)&&(m=!0)):!F&&j?(s.track({type:0,doc:j}),q=!0):F&&!j&&(s.track({type:1,doc:F}),q=!0,(g||v)&&(m=!0)),q&&(j?(h=h.add(j),u=Q?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{ma:h,pa:s,ss:m,mutatedKeys:u}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,R)=>function(j,X){const Q=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return Q(j)-Q(X)}(w.type,R.type)||this.Va(w.doc,R.doc)),this.wa(s),o=o!=null&&o;const m=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,v=g!==this.Aa;return this.Aa=g,h.length!==0||v?{snapshot:new uo(this.query,e.ma,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:m}:{ba:m}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new wg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new S_(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new I_(s))}),t}va(e){this.da=e.ds,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return uo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class I1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class S1{constructor(e){this.key=e,this.Fa=!1}}class A1{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Ji(m=>$y(m),Qu),this.Oa=new Map,this.Na=new Set,this.La=new Je(he.comparator),this.Ba=new Map,this.ka=new bd,this.qa={},this.Qa=new Map,this.Ka=lo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function R1(i,e,t=!0){const s=N_(i);let o;const u=s.xa.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Ca()):o=await A_(s,e,t,!0),o}async function P1(i,e){const t=N_(i);await A_(t,e,!0,!1)}async function A_(i,e,t,s){const o=await WS(i.localStore,Qn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await C1(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&y_(i.remoteStore,o),m}async function C1(i,e,t,s,o){i.Ua=(R,F,j)=>async function(Q,q,ve,_e){let ye=q.view.ga(ve);ye.ss&&(ye=await yg(Q.localStore,q.query,!1).then(({documents:N})=>q.view.ga(N,ye)));const Te=_e&&_e.targetChanges.get(q.targetId),We=_e&&_e.targetMismatches.get(q.targetId)!=null,Ae=q.view.applyChanges(ye,Q.isPrimaryClient,Te,We);return Ag(Q,q.targetId,Ae.ba),Ae.snapshot}(i,R,F,j);const u=await yg(i.localStore,e,!0),h=new T1(e,u.ds),m=h.ga(u.documents),g=Ua.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);Ag(i,t,v.ba);const w=new I1(e,t,h);return i.xa.set(e,w),i.Oa.has(t)?i.Oa.get(t).push(e):i.Oa.set(t,[e]),v.snapshot}async function k1(i,e,t){const s=ge(i),o=s.xa.get(e),u=s.Oa.get(o.targetId);if(u.length>1)return s.Oa.set(o.targetId,u.filter(h=>!Qu(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await hd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&jd(s.remoteStore,o.targetId),fd(s,o.targetId)}).catch(go)):(fd(s,o.targetId),await hd(s.localStore,o.targetId,!0))}async function N1(i,e){const t=ge(i),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),jd(t.remoteStore,s.targetId))}async function D1(i,e,t){const s=b1(i);try{const o=await function(h,m){const g=ge(h),v=ft.now(),w=m.reduce((j,X)=>j.add(X.key),Pe());let R,F;return g.persistence.runTransaction("Locally write mutations","readwrite",j=>{let X=Ar(),Q=Pe();return g.hs.getEntries(j,w).next(q=>{X=q,X.forEach((ve,_e)=>{_e.isValidDocument()||(Q=Q.add(ve))})}).next(()=>g.localDocuments.getOverlayedDocuments(j,X)).next(q=>{R=q;const ve=[];for(const _e of m){const ye=KI(_e,R.get(_e.key).overlayedDocument);ye!=null&&ve.push(new Zi(_e.key,ye,Ly(ye.value.mapValue),wr.exists(!0)))}return g.mutationQueue.addMutationBatch(j,v,ve,m)}).next(q=>{F=q;const ve=q.applyToLocalDocumentSet(R,Q);return g.documentOverlayCache.saveOverlays(j,q.batchId,ve)})}).then(()=>({batchId:F.batchId,changes:Wy(R)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let v=h.qa[h.currentUser.toKey()];v||(v=new Je(ke)),v=v.insert(m,g),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await ja(s,o.changes),await nc(s.remoteStore)}catch(o){const u=Wd(o,"Failed to persist write");t.reject(u)}}async function R_(i,e){const t=ge(i);try{const s=await $S(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ba.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Fe(h.Fa):o.removedDocuments.size>0&&(Fe(h.Fa),h.Fa=!1))}),await ja(t,s,e)}catch(s){await go(s)}}function Sg(i,e,t){const s=ge(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const m=h.view.ea(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=ge(h);g.onlineState=m;let v=!1;g.queries.forEach((w,R)=>{for(const F of R.J_)F.ea(m)&&(v=!0)}),v&&Kd(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function V1(i,e,t){const s=ge(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),u=o&&o.key;if(u){let h=new Je(he.comparator);h=h.insert(u,Mt.newNoDocument(u,me.min()));const m=Pe().add(u),g=new Zu(me.min(),new Map,new Je(ke),h,m);await R_(s,g),s.La=s.La.remove(u),s.Ba.delete(e),Gd(s)}else await hd(s.localStore,e,!1).then(()=>fd(s,e,t)).catch(go)}async function O1(i,e){const t=ge(i),s=e.batch.batchId;try{const o=await BS(t.localStore,e);C_(t,s,null),P_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ja(t,o)}catch(o){await go(o)}}async function x1(i,e,t){const s=ge(i);try{const o=await function(h,m){const g=ge(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next(R=>(Fe(R!==null),w=R.keys(),g.mutationQueue.removeMutationBatch(v,R))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);C_(s,e,t),P_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ja(s,o)}catch(o){await go(o)}}function P_(i,e){(i.Qa.get(e)||[]).forEach(t=>{t.resolve()}),i.Qa.delete(e)}function C_(i,e,t){const s=ge(i);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function fd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Oa.get(e))i.xa.delete(s),t&&i.Ma.Wa(s,t);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(s=>{i.ka.containsKey(s)||k_(i,s)})}function k_(i,e){i.Na.delete(e.path.canonicalString());const t=i.La.get(e);t!==null&&(jd(i.remoteStore,t),i.La=i.La.remove(e),i.Ba.delete(t),Gd(i))}function Ag(i,e,t){for(const s of t)s instanceof I_?(i.ka.addReference(s.key,e),L1(i,s)):s instanceof S_?(te("SyncEngine","Document no longer in limbo: "+s.key),i.ka.removeReference(s.key,e),i.ka.containsKey(s.key)||k_(i,s.key)):pe()}function L1(i,e){const t=e.key,s=t.path.canonicalString();i.La.get(t)||i.Na.has(s)||(te("SyncEngine","New document in limbo: "+t),i.Na.add(s),Gd(i))}function Gd(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const t=new he(Qe.fromString(e)),s=i.Ka.next();i.Ba.set(s,new S1(t)),i.La=i.La.insert(t,s),y_(i.remoteStore,new ri(Qn(By(t.path)),s,"TargetPurposeLimboResolution",Hu.oe))}}async function ja(i,e,t){const s=ge(i),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((m,g)=>{h.push(s.Ua(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const R=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,R?"current":"not-current")}if(v){o.push(v);const R=zd.zi(g.targetId,v);u.push(R)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,v){const w=ge(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>z.forEach(v,F=>z.forEach(F.Wi,j=>w.persistence.referenceDelegate.addReference(R,F.targetId,j)).next(()=>z.forEach(F.Gi,j=>w.persistence.referenceDelegate.removeReference(R,F.targetId,j)))))}catch(R){if(!yo(R))throw R;te("LocalStore","Failed to update sequence numbers: "+R)}for(const R of v){const F=R.targetId;if(!R.fromCache){const j=w.us.get(F),X=j.snapshotVersion,Q=j.withLastLimboFreeSnapshotVersion(X);w.us=w.us.insert(F,Q)}}}(s.localStore,u))}async function M1(i,e){const t=ge(i);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const s=await f_(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(m=>{m.forEach(g=>{g.reject(new ae(W.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ja(t,s.Ts)}}function F1(i,e){const t=ge(i),s=t.Ba.get(e);if(s&&s.Fa)return Pe().add(s.key);{let o=Pe();const u=t.Oa.get(e);if(!u)return o;for(const h of u){const m=t.xa.get(h);o=o.unionWith(m.view.fa)}return o}}function N_(i){const e=ge(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=R_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V1.bind(null,e),e.Ma.R_=v1.bind(null,e.eventManager),e.Ma.Wa=E1.bind(null,e.eventManager),e}function b1(i){const e=ge(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=x1.bind(null,e),e}class Fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return jS(this.persistence,new US,e.initialUser,this.serializer)}ja(e){return new d_(Ud.ei,this.serializer)}za(e){return new GS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fu.provider={build:()=>new Fu};class U1 extends Fu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Fe(this.persistence.referenceDelegate instanceof Lu);const s=this.persistence.referenceDelegate.garbageCollector;return new SS(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new d_(s=>Lu.ei(s,t),this.serializer)}}class pd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=M1.bind(null,this.syncEngine),await p1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new g1}()}createDatastore(e){const t=ec(e.databaseInfo.databaseId),s=function(u){return new JS(u)}(e.databaseInfo);return function(u,h,m,g){return new t1(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new r1(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>Sg(this.syncEngine,t,0),function(){return vg.p()?new vg:new QS}())}createSyncEngine(e,t){return function(o,u,h,m,g,v,w){const R=new A1(o,u,h,m,g,v);return w&&(R.$a=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=ge(o);te("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await za(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}pd.provider={build:()=>new pd};/**
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
 */class z1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class j1{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=Vy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Wd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Wh(i,e){i.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await f_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Rg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await B1(i);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Eg(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Eg(e.remoteStore,o)),i._onlineComponents=e}async function B1(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;io("Error using user provided cache. Falling back to memory cache: "+t),await Wh(i,new Fu)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Wh(i,new U1(void 0));return i._offlineComponents}async function D_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Rg(i,i._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Rg(i,new pd))),i._onlineComponents}function $1(i){return D_(i).then(e=>e.syncEngine)}async function q1(i){const e=await D_(i),t=e.eventManager;return t.onListen=R1.bind(null,e.syncEngine),t.onUnlisten=k1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=P1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=N1.bind(null,e.syncEngine),t}function H1(i,e,t={}){const s=new li;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,v){const w=new z1({next:F=>{w.eu(),h.enqueueAndForget(()=>_1(u,R)),F.fromCache&&g.source==="server"?v.reject(new ae(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(F)},error:F=>v.reject(F)}),R=new w1(m,w,{includeMetadataChanges:!0,ua:!0});return y1(u,R)}(await q1(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function V_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Pg=new Map;/**
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
 */function O_(i,e,t){if(!t)throw new ae(W.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function W1(i,e,t,s){if(e===!0&&s===!0)throw new ae(W.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Cg(i){if(!he.isDocumentKey(i))throw new ae(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function kg(i){if(he.isDocumentKey(i))throw new ae(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Qd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":pe()}function bu(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ae(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qd(i);throw new ae(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */class Ng{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ae(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}W1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ae(W.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ng({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ng(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ZT;switch(s.type){case"firstParty":return new rI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Pg.get(t);s&&(te("ComponentProvider","Removing Datastore"),Pg.delete(t),s.terminate())}(this),Promise.resolve()}}function K1(i,e,t,s={}){var o;const u=(i=bu(i,rc))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Lt.MOCK_USER;else{m=p0(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ae(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Lt(v)}i._authCredentials=new eI(new Dy(m,g))}}/**
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
 */class ic{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ic(this.firestore,e,this._query)}}class xn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xn(this.firestore,e,this._key)}}class ui extends ic{constructor(e,t,s){super(e,t,By(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xn(this.firestore,null,new he(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function x_(i,e,...t){if(i=Jt(i),O_("collection","path",e),i instanceof rc){const s=Qe.fromString(e,...t);return kg(s),new ui(i,null,s)}{if(!(i instanceof xn||i instanceof ui))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return kg(s),new ui(i.firestore,null,s)}}function G1(i,e,...t){if(i=Jt(i),arguments.length===1&&(e=Vy.newId()),O_("doc","path",e),i instanceof rc){const s=Qe.fromString(e,...t);return Cg(s),new xn(i,null,new he(s))}{if(!(i instanceof xn||i instanceof ui))throw new ae(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return Cg(s),new xn(i.firestore,i instanceof ui?i.converter:null,new he(s))}}/**
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
 */class Dg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new m_(this,"async_queue_retry"),this.fu=()=>{const s=Hh();s&&te("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Hh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Hh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new li;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!yo(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Sr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Hd.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(o),o}pu(){this.Au&&pe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Yd extends rc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Dg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dg(e),this._firestoreClient=void 0,await e}}}function Q1(i,e){const t=typeof i=="object"?i:Bg(),s=typeof i=="string"?i:"(default)",o=vd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=d0("firestore");u&&K1(o,...u)}return o}function L_(i){if(i._terminated)throw new ae(W.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Y1(i),i._firestoreClient}function Y1(i){var e,t,s;const o=i._freezeSettings(),u=function(m,g,v,w){return new _I(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,V_(w.experimentalLongPollingOptions),w.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new j1(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
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
 */class co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new co(Pt.fromBase64String(e))}catch(t){throw new ae(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new co(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Xd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class M_{constructor(e){this._methodName=e}}/**
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
 */class Jd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */class Zd{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const X1=/^__.*__$/;class J1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Zi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ba(e,this.data,t,this.fieldTransforms)}}function F_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class ef{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Uu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(F_(this.Mu)&&X1.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Z1{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ec(e)}$u(e,t,s,o=!1){return new ef({Mu:e,methodName:t,Ku:s,path:Rt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eA(i){const e=i._freezeSettings(),t=ec(i._databaseId);return new Z1(i._databaseId,!!e.ignoreUndefinedProperties,t)}function tA(i,e,t,s,o,u={}){const h=i.$u(u.merge||u.mergeFields?2:0,e,t,o);j_("Data must be an object, but it was:",h,s);const m=U_(s,h);let g,v;if(u.merge)g=new On(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const R of u.mergeFields){const F=nA(e,R,t);if(!h.contains(F))throw new ae(W.INVALID_ARGUMENT,`Field '${F}' is specified in your field mask but missing from your input data.`);iA(w,F)||w.push(F)}g=new On(w),v=h.fieldTransforms.filter(R=>g.covers(R.field))}else g=null,v=h.fieldTransforms;return new J1(new yn(m),g,v)}function b_(i,e){if(z_(i=Jt(i)))return j_("Unsupported field value:",e,i),U_(i,e);if(i instanceof M_)return function(s,o){if(!F_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=b_(m,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return jI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:xu(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:xu(o.serializer,u)}}if(s instanceof Jd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof co)return{bytesValue:s_(o.serializer,s._byteString)};if(s instanceof xn){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Fd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Zd)return function(h,m){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw m.qu("VectorValues must only contain numeric values.");return xd(m.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${Qd(s)}`)}(i,e)}function U_(i,e){const t={};return Oy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(i,(s,o)=>{const u=b_(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function z_(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof Jd||i instanceof co||i instanceof xn||i instanceof M_||i instanceof Zd)}function j_(i,e,t){if(!z_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Qd(t);throw s==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+s)}}function nA(i,e,t){if((e=Jt(e))instanceof Xd)return e._internalPath;if(typeof e=="string")return B_(i,e);throw Uu("Field path arguments must be of type string or ",i,!1,void 0,t)}const rA=new RegExp("[~\\*/\\[\\]]");function B_(i,e,t){if(e.search(rA)>=0)throw Uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Xd(...e.split("."))._internalPath}catch{throw Uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Uu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ae(W.INVALID_ARGUMENT,m+i+g)}function iA(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class $_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(q_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sA extends $_{data(){return super.data()}}function q_(i,e){return typeof e=="string"?B_(i,e):e instanceof Xd?e._internalPath:e._delegate._internalPath}/**
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
 */function oA(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ae(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aA{convertValue(e,t="none"){switch(fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Xi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new Zd(u)}convertGeoPoint(e){return new Jd(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ku(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const t=hi(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);Fe(h_(s));const o=new ka(s.get(1),s.get(3)),u=new he(s.popFirst(5));return o.isEqual(t)||Sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function lA(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class cu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uA extends $_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(q_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Eu extends uA{data(e={}){return super.data(e)}}class cA{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new cu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Eu(this._firestore,this._userDataWriter,s.key,s,new cu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new Eu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new cu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Eu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new cu(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:hA(m.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hA(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}class dA extends aA{constructor(e){super(),this.firestore=e}convertBytes(e){return new co(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xn(this.firestore,null,t)}}function fA(i){i=bu(i,ic);const e=bu(i.firestore,Yd),t=L_(e),s=new dA(e);return oA(i._query),H1(t,i._query).then(o=>new cA(e,s,i,o))}function pA(i,e){const t=bu(i.firestore,Yd),s=G1(i),o=lA(i.converter,e);return mA(t,[tA(eA(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,wr.exists(!1))]).then(()=>s)}function mA(i,e){return function(s,o){const u=new li;return s.asyncQueue.enqueueAndForget(async()=>D1(await $1(s),o,u)),u.promise}(L_(i),e)}(function(e,t=!0){(function(o){mo=o})(ho),no(new Ki("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Yd(new tI(s.getProvider("auth-internal")),new sI(s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ae(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ka(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),oi(Gm,"4.7.5",e),oi(Gm,"4.7.5","esm2017")})();const gA={apiKey:"AIzaSyDGCIQPkJQpXxyoQUHDsATPZrELIYRyJCA",authDomain:"cloud-react-ba4ef.firebaseapp.com",projectId:"cloud-react-ba4ef",storageBucket:"cloud-react-ba4ef.firebasestorage.app",messagingSenderId:"862981284028",appId:"1:862981284028:web:bdc1daade64ed6108330b9"},H_=jg(gA),md=QT(H_),W_=Q1(H_);function yA(){const[i,e]=Bt.useState(""),[t,s]=Bt.useState(""),o=async u=>{u.preventDefault();try{await xw(md,i,t).then(h=>{const m=h.user;console.log("User logged in: "+m.email)})}catch(h){console.error("Could not log in, error: ",h),alert("Could not log in, check email and password.")}};return we.jsxs("div",{className:"card",children:[we.jsx("h3",{children:"Sign in to your account"}),we.jsxs("form",{onSubmit:o,className:"justify-content-between align-items-center",children:[we.jsxs("div",{children:[we.jsx("label",{htmlFor:"email",children:"Email:"}),we.jsx("input",{type:"email",id:"email",value:i,onChange:u=>e(u.target.value),required:!0})]}),we.jsxs("div",{children:[we.jsx("label",{htmlFor:"password",children:"Password: "}),we.jsx("input",{type:"password",id:"password",required:!0,value:t,onChange:u=>s(u.target.value)})]}),we.jsx("button",{type:"submit",children:"Sign in"})]})]})}function _A({userId:i,onPlantAdded:e}){const[t,s]=Bt.useState(""),[o,u]=Bt.useState(0),h=v=>{s(v.target.value)},m=v=>{u(parseFloat(v.target.value)||0)},g=async()=>{if(!t||o<=0){alert("Error: Please fill in all fields with valid values.");return}try{const v=x_(W_,"users",i,"Plants");await pA(v,{name:t,water:o}),s(""),u(0),alert(`Plant ${t} added successfully!`),e()}catch(v){console.error("Error adding document: ",v),alert("Error: Failed to add the plant.")}};return we.jsxs("div",{className:"card",children:[we.jsx("h3",{children:"Add a new plant"}),we.jsx("input",{type:"text",value:t,onChange:h,placeholder:"Plant name"}),we.jsx("input",{type:"number",value:o,onChange:m,placeholder:"Watering frequency (days)"}),we.jsx("button",{onClick:g,children:"Add Plant"})]})}const Vg="oyCsTKrkhixnUaOZc0kLOiYqaYxSNVzfJrho2516Vk8";function vA(){const[i,e]=Bt.useState([]),[t,s]=Bt.useState([]),[o,u]=Bt.useState(""),[h,m]=Bt.useState(!1),g="https://trefle.io/api/v1/plants?token=",v=async()=>{m(!0);try{const R=await fetch(`${g}${Vg}`);if(R.ok){const j=(await R.json()).data.map((Q,q)=>({id:q+1,name:Q.family})),X=Array.from(new Set(j.map(Q=>Q.name))).map(Q=>j.find(q=>q.name===Q));e(X)}else console.error("Error, response status: ",R.status)}catch(R){console.error("Error when fetching data: ",R)}finally{m(!1)}},w=async()=>{if(!o){console.error("Please select a family."),alert("Please select a family.");return}m(!0);try{console.log("selectedFamily: ",o);const R=await fetch(`${g}${Vg}&filter%5Bfamily_name%5D=${o}`);if(R.ok){const F=await R.json();s(F.data)}else console.error("Error, response status: ",R.status)}catch(R){console.error("Error when fetching data: ",R)}finally{m(!1)}};return Bt.useEffect(()=>{v()},[]),we.jsxs("div",{className:"card",children:[we.jsx("h3",{className:"mb-2",children:"Plants data from Trefle"}),we.jsx("p",{children:"Using data from %API_URL%"}),we.jsxs("select",{value:o,onChange:R=>u(R.target.value),children:[we.jsx("option",{value:"",children:"Select a family"}),i.map((R,F)=>we.jsx("option",{value:R.name,children:R.name},F))]}),we.jsx("button",{onClick:w,children:h?"Loading..":"Fetch plants by family"}),we.jsx("ul",{className:"list-group",children:t.map(R=>we.jsxs("li",{children:[R.scientific_name," - ",R.family]},R.id))})]})}const EA=({userId:i})=>{const[e,t]=Bt.useState([]),[s,o]=Bt.useState(!0),u=async()=>{try{console.log("Fetching data...");const h=x_(W_,"users",i,"Plants"),m=await fA(h),g=[];m.forEach(v=>{const w=v.data();g.push({name:w.name,water:w.water})}),t(g),console.log("Fetched plants:",g)}catch(h){console.error("Error fetching documents: ",h)}finally{o(!1)}};return Bt.useEffect(()=>{u()},[i]),we.jsxs("div",{className:"card",children:[we.jsx("h3",{className:"mb-2",children:"All your plants:"}),s?we.jsx("p",{children:"Loading..."}):we.jsx("ul",{className:"list-group",children:e.map((h,m)=>we.jsxs("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[h.name,", watering freq. ",h.water," days"]},m))})]})};function wA(){const[i,e]=Bt.useState(null);Bt.useEffect(()=>Fw(md,o=>{e(o)}),[]);const t=async()=>{try{await bw(md),e(null),console.log("User signed out successfully.")}catch(s){console.error("Error signing out: ",s)}};return we.jsx("div",{className:"container mt-4",children:i?we.jsxs("div",{children:[we.jsxs("h2",{className:"mb-2",children:["Welcome, ",i.email]}),we.jsx("button",{onClick:t,className:"mb-2",children:"Logout"}),we.jsx(_A,{userId:i.uid,onPlantAdded:()=>{}}),we.jsx(EA,{userId:i.uid}),we.jsx(vA,{})]}):we.jsx(yA,{})})}i0.createRoot(document.getElementById("root")).render(we.jsx(Bt.StrictMode,{children:we.jsx(wA,{})}));
