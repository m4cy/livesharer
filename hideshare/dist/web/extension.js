"use strict";var Sr=Object.create;var Y=Object.defineProperty;var Br=Object.getOwnPropertyDescriptor;var Mr=Object.getOwnPropertyNames;var kr=Object.getPrototypeOf,Pr=Object.prototype.hasOwnProperty;var q=(n,r)=>()=>(n&&(r=n(n=0)),r);var Z=(n,r)=>()=>(r||n((r={exports:{}}).exports,r),r.exports),Dr=(n,r)=>{for(var e in r)Y(n,e,{get:r[e],enumerable:!0})},K=(n,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Mr(r))!Pr.call(n,i)&&i!==e&&Y(n,i,{get:()=>r[i],enumerable:!(t=Br(r,i))||t.enumerable});return n};var $=(n,r,e)=>(e=n!=null?Sr(kr(n)):{},K(r||!n||!n.__esModule?Y(e,"default",{value:n,enumerable:!0}):e,n)),Ir=n=>K(Y({},"__esModule",{value:!0}),n);function V(){throw new Error("setTimeout has not been defined")}function rr(){throw new Error("clearTimeout has not been defined")}function er(n){if(R===setTimeout)return setTimeout(n,0);if((R===V||!R)&&setTimeout)return R=setTimeout,setTimeout(n,0);try{return R(n,0)}catch{try{return R.call(null,n,0)}catch{return R.call(this,n,0)}}}function Yr(n){if(_===clearTimeout)return clearTimeout(n);if((_===rr||!_)&&clearTimeout)return _=clearTimeout,clearTimeout(n);try{return _(n)}catch{try{return _.call(null,n)}catch{return _.call(this,n)}}}function Lr(){!I||!U||(I=!1,U.length?y=U.concat(y):L=-1,y.length&&nr())}function nr(){if(!I){var n=er(Lr);I=!0;for(var r=y.length;r;){for(U=y,y=[];++L<r;)U&&U[L].run();L=-1,r=y.length}U=null,I=!1,Yr(n)}}function Nr(n){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];y.push(new tr(n,r)),y.length===1&&!I&&er(nr)}function tr(n,r){this.fun=n,this.array=r}function C(){}function re(n){throw new Error("process.binding is not supported")}function ee(){return"/"}function ne(n){throw new Error("process.chdir is not supported")}function te(){return 0}function oe(n){var r=ie.call(D)*.001,e=Math.floor(r),t=Math.floor(r%1*1e9);return n&&(e=e-n[0],t=t-n[1],t<0&&(e--,t+=1e9)),[e,t]}function ue(){var n=new Date,r=n-ae;return r/1e3}var R,_,y,I,U,L,Fr,br,Gr,Wr,Or,Hr,qr,Qr,zr,Jr,Xr,Zr,Kr,$r,jr,Vr,D,ie,ae,N,j,S=q(()=>{R=V,_=rr;typeof globalThis.setTimeout=="function"&&(R=setTimeout);typeof globalThis.clearTimeout=="function"&&(_=clearTimeout);y=[],I=!1,L=-1;tr.prototype.run=function(){this.fun.apply(null,this.array)};Fr="browser",br="browser",Gr=!0,Wr={},Or=[],Hr="",qr={},Qr={},zr={};Jr=C,Xr=C,Zr=C,Kr=C,$r=C,jr=C,Vr=C;D=globalThis.performance||{},ie=D.now||D.mozNow||D.msNow||D.oNow||D.webkitNow||function(){return new Date().getTime()};ae=new Date;N={nextTick:Nr,title:Fr,browser:Gr,env:Wr,argv:Or,version:Hr,versions:qr,on:Jr,addListener:Xr,once:Zr,off:Kr,removeListener:$r,removeAllListeners:jr,emit:Vr,binding:re,cwd:ee,chdir:ne,umask:te,hrtime:oe,platform:br,release:Qr,config:zr,uptime:ue},j={};Object.keys(j).forEach(n=>{let r=n.split("."),e=N;for(let t=0;t<r.length;t++){let i=r[t];t===r.length-1?e[i]=j[n]:e=e[i]||(e[i]={})}})});function ur(){z=!0;for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,e=n.length;r<e;++r)E[r]=n[r],m[n.charCodeAt(r)]=r;m[45]=62,m[95]=63}function fe(n){z||ur();var r,e,t,i,o,a,s=n.length;if(s%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o=n[s-2]==="="?2:n[s-1]==="="?1:0,a=new se(s*3/4-o),t=o>0?s-4:s;var f=0;for(r=0,e=0;r<t;r+=4,e+=3)i=m[n.charCodeAt(r)]<<18|m[n.charCodeAt(r+1)]<<12|m[n.charCodeAt(r+2)]<<6|m[n.charCodeAt(r+3)],a[f++]=i>>16&255,a[f++]=i>>8&255,a[f++]=i&255;return o===2?(i=m[n.charCodeAt(r)]<<2|m[n.charCodeAt(r+1)]>>4,a[f++]=i&255):o===1&&(i=m[n.charCodeAt(r)]<<10|m[n.charCodeAt(r+1)]<<4|m[n.charCodeAt(r+2)]>>2,a[f++]=i>>8&255,a[f++]=i&255),a}function ce(n){return E[n>>18&63]+E[n>>12&63]+E[n>>6&63]+E[n&63]}function le(n,r,e){for(var t,i=[],o=r;o<e;o+=3)t=(n[o]<<16)+(n[o+1]<<8)+n[o+2],i.push(ce(t));return i.join("")}function ir(n){z||ur();for(var r,e=n.length,t=e%3,i="",o=[],a=16383,s=0,f=e-t;s<f;s+=a)o.push(le(n,s,s+a>f?f:s+a));return t===1?(r=n[e-1],i+=E[r>>2],i+=E[r<<4&63],i+="=="):t===2&&(r=(n[e-2]<<8)+n[e-1],i+=E[r>>10],i+=E[r>>4&63],i+=E[r<<2&63],i+="="),o.push(i),o.join("")}function F(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function T(n,r){if(F()<r)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(r),n.__proto__=u.prototype):(n===null&&(n=new u(r)),n.length=r),n}function u(n,r,e){if(!u.TYPED_ARRAY_SUPPORT&&!(this instanceof u))return new u(n,r,e);if(typeof n=="number"){if(typeof r=="string")throw new Error("If encoding is specified then the first argument must be a string");return J(this,n)}return sr(this,n,r,e)}function sr(n,r,e,t){if(typeof r=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer?xe(n,r,e,t):typeof r=="string"?pe(n,r,e):we(n,r)}function fr(n){if(typeof n!="number")throw new TypeError('"size" argument must be a number');if(n<0)throw new RangeError('"size" argument must not be negative')}function he(n,r,e,t){return fr(r),r<=0?T(n,r):e!==void 0?typeof t=="string"?T(n,r).fill(e,t):T(n,r).fill(e):T(n,r)}function J(n,r){if(fr(r),n=T(n,r<0?0:X(r)|0),!u.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)n[e]=0;return n}function pe(n,r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!u.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var t=cr(r,e)|0;n=T(n,t);var i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),n}function Q(n,r){var e=r.length<0?0:X(r.length)|0;n=T(n,e);for(var t=0;t<e;t+=1)n[t]=r[t]&255;return n}function xe(n,r,e,t){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(t||0))throw new RangeError("'length' is out of bounds");return e===void 0&&t===void 0?r=new Uint8Array(r):t===void 0?r=new Uint8Array(r,e):r=new Uint8Array(r,e,t),u.TYPED_ARRAY_SUPPORT?(n=r,n.__proto__=u.prototype):n=Q(n,r),n}function we(n,r){if(A(r)){var e=X(r.length)|0;return n=T(n,e),n.length===0||r.copy(n,0,0,e),n}if(r){if(typeof ArrayBuffer<"u"&&r.buffer instanceof ArrayBuffer||"length"in r)return typeof r.length!="number"||Ie(r.length)?T(n,0):Q(n,r);if(r.type==="Buffer"&&Array.isArray(r.data))return Q(n,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function X(n){if(n>=F())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+F().toString(16)+" bytes");return n|0}function A(n){return!!(n!=null&&n._isBuffer)}function cr(n,r){if(A(n))return n.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(n)||n instanceof ArrayBuffer))return n.byteLength;typeof n!="string"&&(n=""+n);var e=n.length;if(e===0)return 0;for(var t=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return b(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return gr(n).length;default:if(t)return b(n).length;r=(""+r).toLowerCase(),t=!0}}function de(n,r,e){var t=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,r>>>=0,e<=r))return"";for(n||(n="utf8");;)switch(n){case"hex":return Ue(this,r,e);case"utf8":case"utf-8":return pr(this,r,e);case"ascii":return Re(this,r,e);case"latin1":case"binary":return _e(this,r,e);case"base64":return ye(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ce(this,r,e);default:if(t)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),t=!0}}function B(n,r,e){var t=n[r];n[r]=n[e],n[e]=t}function lr(n,r,e,t,i){if(n.length===0)return-1;if(typeof e=="string"?(t=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:n.length-1),e<0&&(e=n.length+e),e>=n.length){if(i)return-1;e=n.length-1}else if(e<0)if(i)e=0;else return-1;if(typeof r=="string"&&(r=u.from(r,t)),A(r))return r.length===0?-1:or(n,r,e,t,i);if(typeof r=="number")return r=r&255,u.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(n,r,e):Uint8Array.prototype.lastIndexOf.call(n,r,e):or(n,[r],e,t,i);throw new TypeError("val must be string, number or Buffer")}function or(n,r,e,t,i){var o=1,a=n.length,s=r.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(n.length<2||r.length<2)return-1;o=2,a/=2,s/=2,e/=2}function f(v,P){return o===1?v[P]:v.readUInt16BE(P*o)}var h;if(i){var l=-1;for(h=e;h<a;h++)if(f(n,h)===f(r,l===-1?0:h-l)){if(l===-1&&(l=h),h-l+1===s)return l*o}else l!==-1&&(h-=h-l),l=-1}else for(e+s>a&&(e=a-s),h=e;h>=0;h--){for(var c=!0,d=0;d<s;d++)if(f(n,h+d)!==f(r,d)){c=!1;break}if(c)return h}return-1}function ge(n,r,e,t){e=Number(e)||0;var i=n.length-e;t?(t=Number(t),t>i&&(t=i)):t=i;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");t>o/2&&(t=o/2);for(var a=0;a<t;++a){var s=parseInt(r.substr(a*2,2),16);if(isNaN(s))return a;n[e+a]=s}return a}function ve(n,r,e,t){return O(b(r,n.length-e),n,e,t)}function hr(n,r,e,t){return O(Pe(r),n,e,t)}function me(n,r,e,t){return hr(n,r,e,t)}function Ee(n,r,e,t){return O(gr(r),n,e,t)}function Ae(n,r,e,t){return O(De(r,n.length-e),n,e,t)}function ye(n,r,e){return r===0&&e===n.length?ir(n):ir(n.slice(r,e))}function pr(n,r,e){e=Math.min(n.length,e);for(var t=[],i=r;i<e;){var o=n[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=e){var f,h,l,c;switch(s){case 1:o<128&&(a=o);break;case 2:f=n[i+1],(f&192)===128&&(c=(o&31)<<6|f&63,c>127&&(a=c));break;case 3:f=n[i+1],h=n[i+2],(f&192)===128&&(h&192)===128&&(c=(o&15)<<12|(f&63)<<6|h&63,c>2047&&(c<55296||c>57343)&&(a=c));break;case 4:f=n[i+1],h=n[i+2],l=n[i+3],(f&192)===128&&(h&192)===128&&(l&192)===128&&(c=(o&15)<<18|(f&63)<<12|(h&63)<<6|l&63,c>65535&&c<1114112&&(a=c))}}a===null?(a=65533,s=1):a>65535&&(a-=65536,t.push(a>>>10&1023|55296),a=56320|a&1023),t.push(a),i+=s}return Te(t)}function Te(n){var r=n.length;if(r<=ar)return String.fromCharCode.apply(String,n);for(var e="",t=0;t<r;)e+=String.fromCharCode.apply(String,n.slice(t,t+=ar));return e}function Re(n,r,e){var t="";e=Math.min(n.length,e);for(var i=r;i<e;++i)t+=String.fromCharCode(n[i]&127);return t}function _e(n,r,e){var t="";e=Math.min(n.length,e);for(var i=r;i<e;++i)t+=String.fromCharCode(n[i]);return t}function Ue(n,r,e){var t=n.length;(!r||r<0)&&(r=0),(!e||e<0||e>t)&&(e=t);for(var i="",o=r;o<e;++o)i+=ke(n[o]);return i}function Ce(n,r,e){for(var t=n.slice(r,e),i="",o=0;o<t.length;o+=2)i+=String.fromCharCode(t[o]+t[o+1]*256);return i}function p(n,r,e){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+r>e)throw new RangeError("Trying to access beyond buffer length")}function g(n,r,e,t,i,o){if(!A(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+t>n.length)throw new RangeError("Index out of range")}function G(n,r,e,t){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(n.length-e,2);i<o;++i)n[e+i]=(r&255<<8*(t?i:1-i))>>>(t?i:1-i)*8}function W(n,r,e,t){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(n.length-e,4);i<o;++i)n[e+i]=r>>>(t?i:3-i)*8&255}function xr(n,r,e,t,i,o){if(e+t>n.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function wr(n,r,e,t,i){return i||xr(n,r,e,4,34028234663852886e22,-34028234663852886e22),mr(n,r,e,t,23,4),e+4}function dr(n,r,e,t,i){return i||xr(n,r,e,8,17976931348623157e292,-17976931348623157e292),mr(n,r,e,t,52,8),e+8}function Be(n){if(n=Me(n).replace(Se,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function Me(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function ke(n){return n<16?"0"+n.toString(16):n.toString(16)}function b(n,r){r=r||1/0;for(var e,t=n.length,i=null,o=[],a=0;a<t;++a){if(e=n.charCodeAt(a),e>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}else if(a+1===t){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=(i-55296<<10|e-56320)+65536}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return o}function Pe(n){for(var r=[],e=0;e<n.length;++e)r.push(n.charCodeAt(e)&255);return r}function De(n,r){for(var e,t,i,o=[],a=0;a<n.length&&!((r-=2)<0);++a)e=n.charCodeAt(a),t=e>>8,i=e%256,o.push(i),o.push(t);return o}function gr(n){return fe(Be(n))}function O(n,r,e,t){for(var i=0;i<t&&!(i+e>=r.length||i>=n.length);++i)r[i+e]=n[i];return i}function Ie(n){return n!==n}function Ye(n){return n!=null&&(!!n._isBuffer||vr(n)||Le(n))}function vr(n){return!!n.constructor&&typeof n.constructor.isBuffer=="function"&&n.constructor.isBuffer(n)}function Le(n){return typeof n.readFloatLE=="function"&&typeof n.slice=="function"&&vr(n.slice(0,0))}function H(n,r,e,t,i){var o,a,s=i*8-t-1,f=(1<<s)-1,h=f>>1,l=-7,c=e?i-1:0,d=e?-1:1,v=n[r+c];for(c+=d,o=v&(1<<-l)-1,v>>=-l,l+=s;l>0;o=o*256+n[r+c],c+=d,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=t;l>0;a=a*256+n[r+c],c+=d,l-=8);if(o===0)o=1-h;else{if(o===f)return a?NaN:(v?-1:1)*(1/0);a=a+Math.pow(2,t),o=o-h}return(v?-1:1)*a*Math.pow(2,o-t)}function mr(n,r,e,t,i,o){var a,s,f,h=o*8-i-1,l=(1<<h)-1,c=l>>1,d=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=t?0:o-1,P=t?1:-1,Cr=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(s=isNaN(r)?1:0,a=l):(a=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-a))<1&&(a--,f*=2),a+c>=1?r+=d/f:r+=d*Math.pow(2,1-c),r*f>=2&&(a++,f/=2),a+c>=l?(s=0,a=l):a+c>=1?(s=(r*f-1)*Math.pow(2,i),a=a+c):(s=r*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;n[e+v]=s&255,v+=P,s/=256,i-=8);for(a=a<<i|s,h+=i;h>0;n[e+v]=a&255,v+=P,a/=256,h-=8);n[e+v-P]|=Cr*128}var E,m,se,z,ar,Se,Er=q(()=>{S();M();E=[],m=[],se=typeof Uint8Array<"u"?Uint8Array:Array,z=!1;u.TYPED_ARRAY_SUPPORT=globalThis.TYPED_ARRAY_SUPPORT!==void 0?globalThis.TYPED_ARRAY_SUPPORT:!0;u.poolSize=8192;u._augment=function(n){return n.__proto__=u.prototype,n};u.from=function(n,r,e){return sr(null,n,r,e)};u.kMaxLength=F();u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&u[Symbol.species]);u.alloc=function(n,r,e){return he(null,n,r,e)};u.allocUnsafe=function(n){return J(null,n)};u.allocUnsafeSlow=function(n){return J(null,n)};u.isBuffer=Ye;u.compare=function(r,e){if(!A(r)||!A(e))throw new TypeError("Arguments must be Buffers");if(r===e)return 0;for(var t=r.length,i=e.length,o=0,a=Math.min(t,i);o<a;++o)if(r[o]!==e[o]){t=r[o],i=e[o];break}return t<i?-1:i<t?1:0};u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(r,e){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);var t;if(e===void 0)for(e=0,t=0;t<r.length;++t)e+=r[t].length;var i=u.allocUnsafe(e),o=0;for(t=0;t<r.length;++t){var a=r[t];if(!A(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(i,o),o+=a.length}return i};u.byteLength=cr;u.prototype._isBuffer=!0;u.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<r;e+=2)B(this,e,e+1);return this};u.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<r;e+=4)B(this,e,e+3),B(this,e+1,e+2);return this};u.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<r;e+=8)B(this,e,e+7),B(this,e+1,e+6),B(this,e+2,e+5),B(this,e+3,e+4);return this};u.prototype.toString=function(){var r=this.length|0;return r===0?"":arguments.length===0?pr(this,0,r):de.apply(this,arguments)};u.prototype.equals=function(r){if(!A(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0};u.prototype.compare=function(r,e,t,i,o){if(!A(r))throw new TypeError("Argument must be a Buffer");if(e===void 0&&(e=0),t===void 0&&(t=r?r.length:0),i===void 0&&(i=0),o===void 0&&(o=this.length),e<0||t>r.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&e>=t)return 0;if(i>=o)return-1;if(e>=t)return 1;if(e>>>=0,t>>>=0,i>>>=0,o>>>=0,this===r)return 0;for(var a=o-i,s=t-e,f=Math.min(a,s),h=this.slice(i,o),l=r.slice(e,t),c=0;c<f;++c)if(h[c]!==l[c]){a=h[c],s=l[c];break}return a<s?-1:s<a?1:0};u.prototype.includes=function(r,e,t){return this.indexOf(r,e,t)!==-1};u.prototype.indexOf=function(r,e,t){return lr(this,r,e,t,!0)};u.prototype.lastIndexOf=function(r,e,t){return lr(this,r,e,t,!1)};u.prototype.write=function(r,e,t,i){if(e===void 0)i="utf8",t=this.length,e=0;else if(t===void 0&&typeof e=="string")i=e,t=this.length,e=0;else if(isFinite(e))e=e|0,isFinite(t)?(t=t|0,i===void 0&&(i="utf8")):(i=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o=this.length-e;if((t===void 0||t>o)&&(t=o),r.length>0&&(t<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var a=!1;;)switch(i){case"hex":return ge(this,r,e,t);case"utf8":case"utf-8":return ve(this,r,e,t);case"ascii":return hr(this,r,e,t);case"latin1":case"binary":return me(this,r,e,t);case"base64":return Ee(this,r,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,r,e,t);default:if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};ar=4096;u.prototype.slice=function(r,e){var t=this.length;r=~~r,e=e===void 0?t:~~e,r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),e<0?(e+=t,e<0&&(e=0)):e>t&&(e=t),e<r&&(e=r);var i;if(u.TYPED_ARRAY_SUPPORT)i=this.subarray(r,e),i.__proto__=u.prototype;else{var o=e-r;i=new u(o,void 0);for(var a=0;a<o;++a)i[a]=this[a+r]}return i};u.prototype.readUIntLE=function(r,e,t){r=r|0,e=e|0,t||p(r,e,this.length);for(var i=this[r],o=1,a=0;++a<e&&(o*=256);)i+=this[r+a]*o;return i};u.prototype.readUIntBE=function(r,e,t){r=r|0,e=e|0,t||p(r,e,this.length);for(var i=this[r+--e],o=1;e>0&&(o*=256);)i+=this[r+--e]*o;return i};u.prototype.readUInt8=function(r,e){return e||p(r,1,this.length),this[r]};u.prototype.readUInt16LE=function(r,e){return e||p(r,2,this.length),this[r]|this[r+1]<<8};u.prototype.readUInt16BE=function(r,e){return e||p(r,2,this.length),this[r]<<8|this[r+1]};u.prototype.readUInt32LE=function(r,e){return e||p(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};u.prototype.readUInt32BE=function(r,e){return e||p(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};u.prototype.readIntLE=function(r,e,t){r=r|0,e=e|0,t||p(r,e,this.length);for(var i=this[r],o=1,a=0;++a<e&&(o*=256);)i+=this[r+a]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i};u.prototype.readIntBE=function(r,e,t){r=r|0,e=e|0,t||p(r,e,this.length);for(var i=e,o=1,a=this[r+--i];i>0&&(o*=256);)a+=this[r+--i]*o;return o*=128,a>=o&&(a-=Math.pow(2,8*e)),a};u.prototype.readInt8=function(r,e){return e||p(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};u.prototype.readInt16LE=function(r,e){e||p(r,2,this.length);var t=this[r]|this[r+1]<<8;return t&32768?t|4294901760:t};u.prototype.readInt16BE=function(r,e){e||p(r,2,this.length);var t=this[r+1]|this[r]<<8;return t&32768?t|4294901760:t};u.prototype.readInt32LE=function(r,e){return e||p(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};u.prototype.readInt32BE=function(r,e){return e||p(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};u.prototype.readFloatLE=function(r,e){return e||p(r,4,this.length),H(this,r,!0,23,4)};u.prototype.readFloatBE=function(r,e){return e||p(r,4,this.length),H(this,r,!1,23,4)};u.prototype.readDoubleLE=function(r,e){return e||p(r,8,this.length),H(this,r,!0,52,8)};u.prototype.readDoubleBE=function(r,e){return e||p(r,8,this.length),H(this,r,!1,52,8)};u.prototype.writeUIntLE=function(r,e,t,i){if(r=+r,e=e|0,t=t|0,!i){var o=Math.pow(2,8*t)-1;g(this,r,e,t,o,0)}var a=1,s=0;for(this[e]=r&255;++s<t&&(a*=256);)this[e+s]=r/a&255;return e+t};u.prototype.writeUIntBE=function(r,e,t,i){if(r=+r,e=e|0,t=t|0,!i){var o=Math.pow(2,8*t)-1;g(this,r,e,t,o,0)}var a=t-1,s=1;for(this[e+a]=r&255;--a>=0&&(s*=256);)this[e+a]=r/s&255;return e+t};u.prototype.writeUInt8=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[e]=r&255,e+1};u.prototype.writeUInt16LE=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=r&255,this[e+1]=r>>>8):G(this,r,e,!0),e+2};u.prototype.writeUInt16BE=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=r>>>8,this[e+1]=r&255):G(this,r,e,!1),e+2};u.prototype.writeUInt32LE=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=r>>>24,this[e+2]=r>>>16,this[e+1]=r>>>8,this[e]=r&255):W(this,r,e,!0),e+4};u.prototype.writeUInt32BE=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255):W(this,r,e,!1),e+4};u.prototype.writeIntLE=function(r,e,t,i){if(r=+r,e=e|0,!i){var o=Math.pow(2,8*t-1);g(this,r,e,t,o-1,-o)}var a=0,s=1,f=0;for(this[e]=r&255;++a<t&&(s*=256);)r<0&&f===0&&this[e+a-1]!==0&&(f=1),this[e+a]=(r/s>>0)-f&255;return e+t};u.prototype.writeIntBE=function(r,e,t,i){if(r=+r,e=e|0,!i){var o=Math.pow(2,8*t-1);g(this,r,e,t,o-1,-o)}var a=t-1,s=1,f=0;for(this[e+a]=r&255;--a>=0&&(s*=256);)r<0&&f===0&&this[e+a+1]!==0&&(f=1),this[e+a]=(r/s>>0)-f&255;return e+t};u.prototype.writeInt8=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[e]=r&255,e+1};u.prototype.writeInt16LE=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=r&255,this[e+1]=r>>>8):G(this,r,e,!0),e+2};u.prototype.writeInt16BE=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=r>>>8,this[e+1]=r&255):G(this,r,e,!1),e+2};u.prototype.writeInt32LE=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=r&255,this[e+1]=r>>>8,this[e+2]=r>>>16,this[e+3]=r>>>24):W(this,r,e,!0),e+4};u.prototype.writeInt32BE=function(r,e,t){return r=+r,e=e|0,t||g(this,r,e,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),u.TYPED_ARRAY_SUPPORT?(this[e]=r>>>24,this[e+1]=r>>>16,this[e+2]=r>>>8,this[e+3]=r&255):W(this,r,e,!1),e+4};u.prototype.writeFloatLE=function(r,e,t){return wr(this,r,e,!0,t)};u.prototype.writeFloatBE=function(r,e,t){return wr(this,r,e,!1,t)};u.prototype.writeDoubleLE=function(r,e,t){return dr(this,r,e,!0,t)};u.prototype.writeDoubleBE=function(r,e,t){return dr(this,r,e,!1,t)};u.prototype.copy=function(r,e,t,i){if(t||(t=0),!i&&i!==0&&(i=this.length),e>=r.length&&(e=r.length),e||(e=0),i>0&&i<t&&(i=t),i===t||r.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),r.length-e<i-t&&(i=r.length-e+t);var o=i-t,a;if(this===r&&t<e&&e<i)for(a=o-1;a>=0;--a)r[a+e]=this[a+t];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(a=0;a<o;++a)r[a+e]=this[a+t];else Uint8Array.prototype.set.call(r,this.subarray(t,t+o),e);return o};u.prototype.fill=function(r,e,t,i){if(typeof r=="string"){if(typeof e=="string"?(i=e,e=0,t=this.length):typeof t=="string"&&(i=t,t=this.length),r.length===1){var o=r.charCodeAt(0);o<256&&(r=o)}if(i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else typeof r=="number"&&(r=r&255);if(e<0||this.length<e||this.length<t)throw new RangeError("Out of range index");if(t<=e)return this;e=e>>>0,t=t===void 0?this.length:t>>>0,r||(r=0);var a;if(typeof r=="number")for(a=e;a<t;++a)this[a]=r;else{var s=A(r)?r:b(new u(r,i).toString()),f=s.length;for(a=0;a<t-e;++a)this[a+e]=s[a%f]}return this};Se=/[^+\/0-9A-Za-z-_]/g});var M=q(()=>{Er()});var Ar=Z((en,Ne)=>{Ne.exports={name:"vsls",displayName:"VS Live Share extension API",description:"Enables VS Code extensions to access Live Share capabilities.",version:"1.0.4753",publisher:"ms-vsliveshare",main:"vscode.js",preview:!0,license:"SEE LICENSE IN LICENSE.txt",homepage:"https://aka.ms/vsls",bugs:{url:"https://aka.ms/vsls-issues",email:"vsls-feedback@microsoft.com"},author:{name:"Microsoft"},keywords:["Live Share"],categories:["Other"],repository:{url:"https://github.com/MicrosoftDocs/live-share"},dependencies:{"@microsoft/servicehub-framework":"^2.6.74"}}});var Rr=Z(x=>{"use strict";S();M();Object.defineProperty(x,"__esModule",{value:!0});var Fe=require("vscode"),yr=Ar().version;x.extensionId="ms-vsliveshare.vsliveshare";async function Tr(n){let r=Fe.extensions.getExtension(x.extensionId);if(!r)return null;let e=r.isActive?r.exports:await r.activate();return e?e.getApi?e.getApi(yr,n):e.getApiAsync(yr):null}x.getApi=Tr;function be(){return Tr()}x.getApiAsync=be;var Ge;(function(n){n.AllowGuestDebugControl="allowGuestDebugControl",n.AllowGuestTaskControl="allowGuestTaskControl",n.AutoShareServers="autoShareServers",n.AnonymousGuestApproval="anonymousGuestApproval",n.ConnectionMode="connectionMode",n.AllowedDomains="allowedDomains",n.AllowReadWriteTerminals="allowReadWriteTerminals"})(Ge=x.PolicySetting||(x.PolicySetting={}));var We;(function(n){n[n.None=0]="None",n[n.Host=1]="Host",n[n.Guest=2]="Guest"})(We=x.Role||(x.Role={}));var Oe;(function(n){n[n.None=0]="None",n[n.ReadOnly=1]="ReadOnly",n[n.ReadWrite=3]="ReadWrite",n[n.Owner=255]="Owner"})(Oe=x.Access||(x.Access={}));var He;(function(n){n.Session="liveshare.session",n.ExplorerSession="liveshare.session.explorer",n.PlannedSessions="liveshare.plannedSessions",n.Contacts="liveshare.contacts",n.Help="liveshare.help"})(He=x.View||(x.View={}));var qe;(function(n){n.Participants="participants",n.Servers="servers",n.Terminals="terminals",n.Comments="comments",n.Chat="chat",n.CurrentUser="participants.currentuser",n.Guest="participants.guest",n.FollowedGuest="participants.guest.followed",n.Participant="participants.participant",n.FollowedParticipant="participants.participant.followed",n.GuestAnonymous="participants.guest.anonymous",n.FollowedGuestAnonymous="participants.guest.followed.anonymous",n.GuestElevated="participants.guest.elevated",n.FollowedGuestElevated="participants.guest.followed.elevated",n.GuestElevatedAnonymous="participants.guest.elevated.anonymous",n.FollowedGuestElevatedAnonymous="participants.guest.followed.elevated.anonymous",n.LocalServer="servers.local",n.RemoteServer="servers.remote",n.LocalTerminalReadOnly="terminals.local.readonly",n.LocalTerminalReadWrite="terminals.local.readwrite",n.RemoteTerminal="terminals.remote",n.SuggestedContacts="contacts.suggested",n.AvailableContacts="contacts.available",n.ContactsProvider="contacts.provider",n.SelfContact="contacts.selfContact",n.Contact="contacts.contact",n.ContactInvited="contacts.contact.invited",n.ContactOffline="contacts.contact.offline",n.RecentContact="contacts.recentContact",n.RecentContactOffline="contacts.recentContact.offline",n.RecentContactInvited="contacts.recentContact.invited",n.NoContact="contacts.noContact",n.RecentContacts="contacts.RecentContacts",n.NoSuggestedContacts="contacts.NoSuggestedUsers",n.NoRecentContacts="contacts.NoRecentContacts",n.InvitedContact="contacts.invited",n.SessionFeedbackQuestion="help.sessionFeedback",n.ReportAProblem="help.reportAProblem",n.TweetUsYourFeedback="help.tweetUsYourFeedback",n.Survey="help.survey",n.GoodFeedback="help.goodFeedback",n.BadFeedback="help.badFeedback",n.DontAskAgain="help.dontAskAgain",n.Thankyou="help.thankyou",n.MoreInfo="help.moreinfo",n.ConfigureSettings="help.configureSettings",n.Loading="loading",n.Other="other"})(qe=x.ViewItem||(x.ViewItem={}));var k=class{};x.ActivityType=k;k.session="session";k.workspace="workspace";k.debug="debug";k.terminal="terminal"});var Je={};Dr(Je,{activate:()=>Qe,deactivate:()=>ze});module.exports=Ir(Je);S();M();var w=$(require("vscode")),Ur=$(Rr());async function Qe(n){await Ur.getApi()||console.log("Live Share API not available");let e=await w.window.showInformationMessage("Select a HideShare mode","real-time","line","word");console.log("Guest mode activated");let t=w.window.createTextEditorDecorationType({opacity:"0.5",fontStyle:"italic"}),i=-1,o=w.commands.registerCommand("hideshare.enableLineMode",()=>{w.window.showInformationMessage("Changed to Line Mode!"),e="line"});n.subscriptions.push(o);let a=w.commands.registerCommand("hideshare.enableWordMode",()=>{w.window.showInformationMessage("Changed to Word Mode!"),e="word"});n.subscriptions.push(a);let s=w.commands.registerCommand("hideshare.enableRealTimeMode",()=>{w.window.showInformationMessage("Changed to Real-Time Mode!"),e="real-time"}),f=w.workspace.onDidChangeTextDocument(async h=>{for(let l of w.window.visibleTextEditors)h.contentChanges.forEach(c=>{let d=c.range.start.line;e==="line"?_r(d,"line",l,t):e==="word"&&_r(d,"word",l,t)})});n.subscriptions.push(f)}function _r(n,r,e,t){let i;if(r==="line")i=e.document.lineAt(n).range;else{let o=new w.Position(n,e.document.lineAt(n).text.lastIndexOf(" "));i=new w.Range(o,e.document.lineAt(n).range.end)}e.setDecorations(t,[i])}function ze(){}
/*! Bundled license information:

@esbuild-plugins/node-globals-polyfill/Buffer.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   *)
*/
