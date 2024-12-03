"use strict";var Sr=Object.create;var I=Object.defineProperty;var Cr=Object.getOwnPropertyDescriptor;var Br=Object.getOwnPropertyNames;var kr=Object.getPrototypeOf,Dr=Object.prototype.hasOwnProperty;var q=(e,r)=>()=>(e&&(r=e(e=0)),r);var Z=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),Pr=(e,r)=>{for(var n in r)I(e,n,{get:r[n],enumerable:!0})},K=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Br(r))!Dr.call(e,i)&&i!==n&&I(e,i,{get:()=>r[i],enumerable:!(t=Cr(r,i))||t.enumerable});return e};var $=(e,r,n)=>(n=e!=null?Sr(kr(e)):{},K(r||!e||!e.__esModule?I(n,"default",{value:e,enumerable:!0}):n,e)),Yr=e=>K(I({},"__esModule",{value:!0}),e);function V(){throw new Error("setTimeout has not been defined")}function rr(){throw new Error("clearTimeout has not been defined")}function nr(e){if(R===setTimeout)return setTimeout(e,0);if((R===V||!R)&&setTimeout)return R=setTimeout,setTimeout(e,0);try{return R(e,0)}catch{try{return R.call(null,e,0)}catch{return R.call(this,e,0)}}}function Mr(e){if(_===clearTimeout)return clearTimeout(e);if((_===rr||!_)&&clearTimeout)return _=clearTimeout,clearTimeout(e);try{return _(e)}catch{try{return _.call(null,e)}catch{return _.call(this,e)}}}function Ir(){!M||!U||(M=!1,U.length?m=U.concat(m):N=-1,m.length&&er())}function er(){if(!M){var e=nr(Ir);M=!0;for(var r=m.length;r;){for(U=m,m=[];++N<r;)U&&U[N].run();N=-1,r=m.length}U=null,M=!1,Mr(e)}}function Nr(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];m.push(new tr(e,r)),m.length===1&&!M&&nr(er)}function tr(e,r){this.fun=e,this.array=r}function S(){}function Vr(e){throw new Error("process.binding is not supported")}function rn(){return"/"}function nn(e){throw new Error("process.chdir is not supported")}function en(){return 0}function on(e){var r=tn.call(Y)*.001,n=Math.floor(r),t=Math.floor(r%1*1e9);return e&&(n=n-e[0],t=t-e[1],t<0&&(n--,t+=1e9)),[n,t]}function un(){var e=new Date,r=e-an;return r/1e3}var R,_,m,M,U,N,Lr,Fr,br,Gr,Wr,Or,Hr,qr,Qr,zr,Jr,Xr,Zr,Kr,$r,jr,Y,tn,an,L,j,C=q(()=>{R=V,_=rr;typeof globalThis.setTimeout=="function"&&(R=setTimeout);typeof globalThis.clearTimeout=="function"&&(_=clearTimeout);m=[],M=!1,N=-1;tr.prototype.run=function(){this.fun.apply(null,this.array)};Lr="browser",Fr="browser",br=!0,Gr={},Wr=[],Or="",Hr={},qr={},Qr={};zr=S,Jr=S,Xr=S,Zr=S,Kr=S,$r=S,jr=S;Y=globalThis.performance||{},tn=Y.now||Y.mozNow||Y.msNow||Y.oNow||Y.webkitNow||function(){return new Date().getTime()};an=new Date;L={nextTick:Nr,title:Lr,browser:br,env:Gr,argv:Wr,version:Or,versions:Hr,on:zr,addListener:Jr,once:Xr,off:Zr,removeListener:Kr,removeAllListeners:$r,emit:jr,binding:Vr,cwd:rn,chdir:nn,umask:en,hrtime:on,platform:Fr,release:qr,config:Qr,uptime:un},j={};Object.keys(j).forEach(e=>{let r=e.split("."),n=L;for(let t=0;t<r.length;t++){let i=r[t];t===r.length-1?n[i]=j[e]:n=n[i]||(n[i]={})}})});function ur(){z=!0;for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,n=e.length;r<n;++r)g[r]=e[r],E[e.charCodeAt(r)]=r;E[45]=62,E[95]=63}function sn(e){z||ur();var r,n,t,i,a,o,f=e.length;if(f%4>0)throw new Error("Invalid string. Length must be a multiple of 4");a=e[f-2]==="="?2:e[f-1]==="="?1:0,o=new fn(f*3/4-a),t=a>0?f-4:f;var s=0;for(r=0,n=0;r<t;r+=4,n+=3)i=E[e.charCodeAt(r)]<<18|E[e.charCodeAt(r+1)]<<12|E[e.charCodeAt(r+2)]<<6|E[e.charCodeAt(r+3)],o[s++]=i>>16&255,o[s++]=i>>8&255,o[s++]=i&255;return a===2?(i=E[e.charCodeAt(r)]<<2|E[e.charCodeAt(r+1)]>>4,o[s++]=i&255):a===1&&(i=E[e.charCodeAt(r)]<<10|E[e.charCodeAt(r+1)]<<4|E[e.charCodeAt(r+2)]>>2,o[s++]=i>>8&255,o[s++]=i&255),o}function cn(e){return g[e>>18&63]+g[e>>12&63]+g[e>>6&63]+g[e&63]}function ln(e,r,n){for(var t,i=[],a=r;a<n;a+=3)t=(e[a]<<16)+(e[a+1]<<8)+e[a+2],i.push(cn(t));return i.join("")}function ir(e){z||ur();for(var r,n=e.length,t=n%3,i="",a=[],o=16383,f=0,s=n-t;f<s;f+=o)a.push(ln(e,f,f+o>s?s:f+o));return t===1?(r=e[n-1],i+=g[r>>2],i+=g[r<<4&63],i+="=="):t===2&&(r=(e[n-2]<<8)+e[n-1],i+=g[r>>10],i+=g[r>>4&63],i+=g[r<<2&63],i+="="),a.push(i),a.join("")}function F(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function y(e,r){if(F()<r)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(r),e.__proto__=u.prototype):(e===null&&(e=new u(r)),e.length=r),e}function u(e,r,n){if(!u.TYPED_ARRAY_SUPPORT&&!(this instanceof u))return new u(e,r,n);if(typeof e=="number"){if(typeof r=="string")throw new Error("If encoding is specified then the first argument must be a string");return J(this,e)}return fr(this,e,r,n)}function fr(e,r,n,t){if(typeof r=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer?xn(e,r,n,t):typeof r=="string"?pn(e,r,n):wn(e,r)}function sr(e){if(typeof e!="number")throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function hn(e,r,n,t){return sr(r),r<=0?y(e,r):n!==void 0?typeof t=="string"?y(e,r).fill(n,t):y(e,r).fill(n):y(e,r)}function J(e,r){if(sr(r),e=y(e,r<0?0:X(r)|0),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<r;++n)e[n]=0;return e}function pn(e,r,n){if((typeof n!="string"||n==="")&&(n="utf8"),!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var t=cr(r,n)|0;e=y(e,t);var i=e.write(r,n);return i!==t&&(e=e.slice(0,i)),e}function Q(e,r){var n=r.length<0?0:X(r.length)|0;e=y(e,n);for(var t=0;t<n;t+=1)e[t]=r[t]&255;return e}function xn(e,r,n,t){if(r.byteLength,n<0||r.byteLength<n)throw new RangeError("'offset' is out of bounds");if(r.byteLength<n+(t||0))throw new RangeError("'length' is out of bounds");return n===void 0&&t===void 0?r=new Uint8Array(r):t===void 0?r=new Uint8Array(r,n):r=new Uint8Array(r,n,t),u.TYPED_ARRAY_SUPPORT?(e=r,e.__proto__=u.prototype):e=Q(e,r),e}function wn(e,r){if(A(r)){var n=X(r.length)|0;return e=y(e,n),e.length===0||r.copy(e,0,0,n),e}if(r){if(typeof ArrayBuffer<"u"&&r.buffer instanceof ArrayBuffer||"length"in r)return typeof r.length!="number"||Mn(r.length)?y(e,0):Q(e,r);if(r.type==="Buffer"&&Array.isArray(r.data))return Q(e,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function X(e){if(e>=F())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+F().toString(16)+" bytes");return e|0}function A(e){return!!(e!=null&&e._isBuffer)}function cr(e,r){if(A(e))return e.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;typeof e!="string"&&(e=""+e);var n=e.length;if(n===0)return 0;for(var t=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return b(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return n*2;case"hex":return n>>>1;case"base64":return dr(e).length;default:if(t)return b(e).length;r=(""+r).toLowerCase(),t=!0}}function vn(e,r,n){var t=!1;if((r===void 0||r<0)&&(r=0),r>this.length||((n===void 0||n>this.length)&&(n=this.length),n<=0)||(n>>>=0,r>>>=0,n<=r))return"";for(e||(e="utf8");;)switch(e){case"hex":return Un(this,r,n);case"utf8":case"utf-8":return pr(this,r,n);case"ascii":return Rn(this,r,n);case"latin1":case"binary":return _n(this,r,n);case"base64":return yn(this,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Sn(this,r,n);default:if(t)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),t=!0}}function B(e,r,n){var t=e[r];e[r]=e[n],e[n]=t}function lr(e,r,n,t,i){if(e.length===0)return-1;if(typeof n=="string"?(t=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0)if(i)n=0;else return-1;if(typeof r=="string"&&(r=u.from(r,t)),A(r))return r.length===0?-1:or(e,r,n,t,i);if(typeof r=="number")return r=r&255,u.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(e,r,n):Uint8Array.prototype.lastIndexOf.call(e,r,n):or(e,[r],n,t,i);throw new TypeError("val must be string, number or Buffer")}function or(e,r,n,t,i){var a=1,o=e.length,f=r.length;if(t!==void 0&&(t=String(t).toLowerCase(),t==="ucs2"||t==="ucs-2"||t==="utf16le"||t==="utf-16le")){if(e.length<2||r.length<2)return-1;a=2,o/=2,f/=2,n/=2}function s(d,P){return a===1?d[P]:d.readUInt16BE(P*a)}var c;if(i){var h=-1;for(c=n;c<o;c++)if(s(e,c)===s(r,h===-1?0:c-h)){if(h===-1&&(h=c),c-h+1===f)return h*a}else h!==-1&&(c-=c-h),h=-1}else for(n+f>o&&(n=o-f),c=n;c>=0;c--){for(var l=!0,w=0;w<f;w++)if(s(e,c+w)!==s(r,w)){l=!1;break}if(l)return c}return-1}function dn(e,r,n,t){n=Number(n)||0;var i=e.length-n;t?(t=Number(t),t>i&&(t=i)):t=i;var a=r.length;if(a%2!==0)throw new TypeError("Invalid hex string");t>a/2&&(t=a/2);for(var o=0;o<t;++o){var f=parseInt(r.substr(o*2,2),16);if(isNaN(f))return o;e[n+o]=f}return o}function En(e,r,n,t){return O(b(r,e.length-n),e,n,t)}function hr(e,r,n,t){return O(Pn(r),e,n,t)}function gn(e,r,n,t){return hr(e,r,n,t)}function An(e,r,n,t){return O(dr(r),e,n,t)}function mn(e,r,n,t){return O(Yn(r,e.length-n),e,n,t)}function yn(e,r,n){return r===0&&n===e.length?ir(e):ir(e.slice(r,n))}function pr(e,r,n){n=Math.min(e.length,n);for(var t=[],i=r;i<n;){var a=e[i],o=null,f=a>239?4:a>223?3:a>191?2:1;if(i+f<=n){var s,c,h,l;switch(f){case 1:a<128&&(o=a);break;case 2:s=e[i+1],(s&192)===128&&(l=(a&31)<<6|s&63,l>127&&(o=l));break;case 3:s=e[i+1],c=e[i+2],(s&192)===128&&(c&192)===128&&(l=(a&15)<<12|(s&63)<<6|c&63,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:s=e[i+1],c=e[i+2],h=e[i+3],(s&192)===128&&(c&192)===128&&(h&192)===128&&(l=(a&15)<<18|(s&63)<<12|(c&63)<<6|h&63,l>65535&&l<1114112&&(o=l))}}o===null?(o=65533,f=1):o>65535&&(o-=65536,t.push(o>>>10&1023|55296),o=56320|o&1023),t.push(o),i+=f}return Tn(t)}function Tn(e){var r=e.length;if(r<=ar)return String.fromCharCode.apply(String,e);for(var n="",t=0;t<r;)n+=String.fromCharCode.apply(String,e.slice(t,t+=ar));return n}function Rn(e,r,n){var t="";n=Math.min(e.length,n);for(var i=r;i<n;++i)t+=String.fromCharCode(e[i]&127);return t}function _n(e,r,n){var t="";n=Math.min(e.length,n);for(var i=r;i<n;++i)t+=String.fromCharCode(e[i]);return t}function Un(e,r,n){var t=e.length;(!r||r<0)&&(r=0),(!n||n<0||n>t)&&(n=t);for(var i="",a=r;a<n;++a)i+=Dn(e[a]);return i}function Sn(e,r,n){for(var t=e.slice(r,n),i="",a=0;a<t.length;a+=2)i+=String.fromCharCode(t[a]+t[a+1]*256);return i}function p(e,r,n){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+r>n)throw new RangeError("Trying to access beyond buffer length")}function v(e,r,n,t,i,a){if(!A(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<a)throw new RangeError('"value" argument is out of bounds');if(n+t>e.length)throw new RangeError("Index out of range")}function G(e,r,n,t){r<0&&(r=65535+r+1);for(var i=0,a=Math.min(e.length-n,2);i<a;++i)e[n+i]=(r&255<<8*(t?i:1-i))>>>(t?i:1-i)*8}function W(e,r,n,t){r<0&&(r=4294967295+r+1);for(var i=0,a=Math.min(e.length-n,4);i<a;++i)e[n+i]=r>>>(t?i:3-i)*8&255}function xr(e,r,n,t,i,a){if(n+t>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function wr(e,r,n,t,i){return i||xr(e,r,n,4,34028234663852886e22,-34028234663852886e22),gr(e,r,n,t,23,4),n+4}function vr(e,r,n,t,i){return i||xr(e,r,n,8,17976931348623157e292,-17976931348623157e292),gr(e,r,n,t,52,8),n+8}function Bn(e){if(e=kn(e).replace(Cn,""),e.length<2)return"";for(;e.length%4!==0;)e=e+"=";return e}function kn(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Dn(e){return e<16?"0"+e.toString(16):e.toString(16)}function b(e,r){r=r||1/0;for(var n,t=e.length,i=null,a=[],o=0;o<t;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(r-=3)>-1&&a.push(239,191,189);continue}else if(o+1===t){(r-=3)>-1&&a.push(239,191,189);continue}i=n;continue}if(n<56320){(r-=3)>-1&&a.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(r-=3)>-1&&a.push(239,191,189);if(i=null,n<128){if((r-=1)<0)break;a.push(n)}else if(n<2048){if((r-=2)<0)break;a.push(n>>6|192,n&63|128)}else if(n<65536){if((r-=3)<0)break;a.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((r-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return a}function Pn(e){for(var r=[],n=0;n<e.length;++n)r.push(e.charCodeAt(n)&255);return r}function Yn(e,r){for(var n,t,i,a=[],o=0;o<e.length&&!((r-=2)<0);++o)n=e.charCodeAt(o),t=n>>8,i=n%256,a.push(i),a.push(t);return a}function dr(e){return sn(Bn(e))}function O(e,r,n,t){for(var i=0;i<t&&!(i+n>=r.length||i>=e.length);++i)r[i+n]=e[i];return i}function Mn(e){return e!==e}function In(e){return e!=null&&(!!e._isBuffer||Er(e)||Nn(e))}function Er(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function Nn(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&Er(e.slice(0,0))}function H(e,r,n,t,i){var a,o,f=i*8-t-1,s=(1<<f)-1,c=s>>1,h=-7,l=n?i-1:0,w=n?-1:1,d=e[r+l];for(l+=w,a=d&(1<<-h)-1,d>>=-h,h+=f;h>0;a=a*256+e[r+l],l+=w,h-=8);for(o=a&(1<<-h)-1,a>>=-h,h+=t;h>0;o=o*256+e[r+l],l+=w,h-=8);if(a===0)a=1-c;else{if(a===s)return o?NaN:(d?-1:1)*(1/0);o=o+Math.pow(2,t),a=a-c}return(d?-1:1)*o*Math.pow(2,a-t)}function gr(e,r,n,t,i,a){var o,f,s,c=a*8-i-1,h=(1<<c)-1,l=h>>1,w=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=t?0:a-1,P=t?1:-1,Ur=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,o=h):(o=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-o))<1&&(o--,s*=2),o+l>=1?r+=w/s:r+=w*Math.pow(2,1-l),r*s>=2&&(o++,s/=2),o+l>=h?(f=0,o=h):o+l>=1?(f=(r*s-1)*Math.pow(2,i),o=o+l):(f=r*Math.pow(2,l-1)*Math.pow(2,i),o=0));i>=8;e[n+d]=f&255,d+=P,f/=256,i-=8);for(o=o<<i|f,c+=i;c>0;e[n+d]=o&255,d+=P,o/=256,c-=8);e[n+d-P]|=Ur*128}var g,E,fn,z,ar,Cn,Ar=q(()=>{C();k();g=[],E=[],fn=typeof Uint8Array<"u"?Uint8Array:Array,z=!1;u.TYPED_ARRAY_SUPPORT=globalThis.TYPED_ARRAY_SUPPORT!==void 0?globalThis.TYPED_ARRAY_SUPPORT:!0;u.poolSize=8192;u._augment=function(e){return e.__proto__=u.prototype,e};u.from=function(e,r,n){return fr(null,e,r,n)};u.kMaxLength=F();u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&u[Symbol.species]);u.alloc=function(e,r,n){return hn(null,e,r,n)};u.allocUnsafe=function(e){return J(null,e)};u.allocUnsafeSlow=function(e){return J(null,e)};u.isBuffer=In;u.compare=function(r,n){if(!A(r)||!A(n))throw new TypeError("Arguments must be Buffers");if(r===n)return 0;for(var t=r.length,i=n.length,a=0,o=Math.min(t,i);a<o;++a)if(r[a]!==n[a]){t=r[a],i=n[a];break}return t<i?-1:i<t?1:0};u.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};u.concat=function(r,n){if(!Array.isArray(r))throw new TypeError('"list" argument must be an Array of Buffers');if(r.length===0)return u.alloc(0);var t;if(n===void 0)for(n=0,t=0;t<r.length;++t)n+=r[t].length;var i=u.allocUnsafe(n),a=0;for(t=0;t<r.length;++t){var o=r[t];if(!A(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(i,a),a+=o.length}return i};u.byteLength=cr;u.prototype._isBuffer=!0;u.prototype.swap16=function(){var r=this.length;if(r%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<r;n+=2)B(this,n,n+1);return this};u.prototype.swap32=function(){var r=this.length;if(r%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<r;n+=4)B(this,n,n+3),B(this,n+1,n+2);return this};u.prototype.swap64=function(){var r=this.length;if(r%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<r;n+=8)B(this,n,n+7),B(this,n+1,n+6),B(this,n+2,n+5),B(this,n+3,n+4);return this};u.prototype.toString=function(){var r=this.length|0;return r===0?"":arguments.length===0?pr(this,0,r):vn.apply(this,arguments)};u.prototype.equals=function(r){if(!A(r))throw new TypeError("Argument must be a Buffer");return this===r?!0:u.compare(this,r)===0};u.prototype.compare=function(r,n,t,i,a){if(!A(r))throw new TypeError("Argument must be a Buffer");if(n===void 0&&(n=0),t===void 0&&(t=r?r.length:0),i===void 0&&(i=0),a===void 0&&(a=this.length),n<0||t>r.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&n>=t)return 0;if(i>=a)return-1;if(n>=t)return 1;if(n>>>=0,t>>>=0,i>>>=0,a>>>=0,this===r)return 0;for(var o=a-i,f=t-n,s=Math.min(o,f),c=this.slice(i,a),h=r.slice(n,t),l=0;l<s;++l)if(c[l]!==h[l]){o=c[l],f=h[l];break}return o<f?-1:f<o?1:0};u.prototype.includes=function(r,n,t){return this.indexOf(r,n,t)!==-1};u.prototype.indexOf=function(r,n,t){return lr(this,r,n,t,!0)};u.prototype.lastIndexOf=function(r,n,t){return lr(this,r,n,t,!1)};u.prototype.write=function(r,n,t,i){if(n===void 0)i="utf8",t=this.length,n=0;else if(t===void 0&&typeof n=="string")i=n,t=this.length,n=0;else if(isFinite(n))n=n|0,isFinite(t)?(t=t|0,i===void 0&&(i="utf8")):(i=t,t=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-n;if((t===void 0||t>a)&&(t=a),r.length>0&&(t<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var o=!1;;)switch(i){case"hex":return dn(this,r,n,t);case"utf8":case"utf-8":return En(this,r,n,t);case"ascii":return hr(this,r,n,t);case"latin1":case"binary":return gn(this,r,n,t);case"base64":return An(this,r,n,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mn(this,r,n,t);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}};u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};ar=4096;u.prototype.slice=function(r,n){var t=this.length;r=~~r,n=n===void 0?t:~~n,r<0?(r+=t,r<0&&(r=0)):r>t&&(r=t),n<0?(n+=t,n<0&&(n=0)):n>t&&(n=t),n<r&&(n=r);var i;if(u.TYPED_ARRAY_SUPPORT)i=this.subarray(r,n),i.__proto__=u.prototype;else{var a=n-r;i=new u(a,void 0);for(var o=0;o<a;++o)i[o]=this[o+r]}return i};u.prototype.readUIntLE=function(r,n,t){r=r|0,n=n|0,t||p(r,n,this.length);for(var i=this[r],a=1,o=0;++o<n&&(a*=256);)i+=this[r+o]*a;return i};u.prototype.readUIntBE=function(r,n,t){r=r|0,n=n|0,t||p(r,n,this.length);for(var i=this[r+--n],a=1;n>0&&(a*=256);)i+=this[r+--n]*a;return i};u.prototype.readUInt8=function(r,n){return n||p(r,1,this.length),this[r]};u.prototype.readUInt16LE=function(r,n){return n||p(r,2,this.length),this[r]|this[r+1]<<8};u.prototype.readUInt16BE=function(r,n){return n||p(r,2,this.length),this[r]<<8|this[r+1]};u.prototype.readUInt32LE=function(r,n){return n||p(r,4,this.length),(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};u.prototype.readUInt32BE=function(r,n){return n||p(r,4,this.length),this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};u.prototype.readIntLE=function(r,n,t){r=r|0,n=n|0,t||p(r,n,this.length);for(var i=this[r],a=1,o=0;++o<n&&(a*=256);)i+=this[r+o]*a;return a*=128,i>=a&&(i-=Math.pow(2,8*n)),i};u.prototype.readIntBE=function(r,n,t){r=r|0,n=n|0,t||p(r,n,this.length);for(var i=n,a=1,o=this[r+--i];i>0&&(a*=256);)o+=this[r+--i]*a;return a*=128,o>=a&&(o-=Math.pow(2,8*n)),o};u.prototype.readInt8=function(r,n){return n||p(r,1,this.length),this[r]&128?(255-this[r]+1)*-1:this[r]};u.prototype.readInt16LE=function(r,n){n||p(r,2,this.length);var t=this[r]|this[r+1]<<8;return t&32768?t|4294901760:t};u.prototype.readInt16BE=function(r,n){n||p(r,2,this.length);var t=this[r+1]|this[r]<<8;return t&32768?t|4294901760:t};u.prototype.readInt32LE=function(r,n){return n||p(r,4,this.length),this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};u.prototype.readInt32BE=function(r,n){return n||p(r,4,this.length),this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};u.prototype.readFloatLE=function(r,n){return n||p(r,4,this.length),H(this,r,!0,23,4)};u.prototype.readFloatBE=function(r,n){return n||p(r,4,this.length),H(this,r,!1,23,4)};u.prototype.readDoubleLE=function(r,n){return n||p(r,8,this.length),H(this,r,!0,52,8)};u.prototype.readDoubleBE=function(r,n){return n||p(r,8,this.length),H(this,r,!1,52,8)};u.prototype.writeUIntLE=function(r,n,t,i){if(r=+r,n=n|0,t=t|0,!i){var a=Math.pow(2,8*t)-1;v(this,r,n,t,a,0)}var o=1,f=0;for(this[n]=r&255;++f<t&&(o*=256);)this[n+f]=r/o&255;return n+t};u.prototype.writeUIntBE=function(r,n,t,i){if(r=+r,n=n|0,t=t|0,!i){var a=Math.pow(2,8*t)-1;v(this,r,n,t,a,0)}var o=t-1,f=1;for(this[n+o]=r&255;--o>=0&&(f*=256);)this[n+o]=r/f&255;return n+t};u.prototype.writeUInt8=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,1,255,0),u.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),this[n]=r&255,n+1};u.prototype.writeUInt16LE=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[n]=r&255,this[n+1]=r>>>8):G(this,r,n,!0),n+2};u.prototype.writeUInt16BE=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[n]=r>>>8,this[n+1]=r&255):G(this,r,n,!1),n+2};u.prototype.writeUInt32LE=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[n+3]=r>>>24,this[n+2]=r>>>16,this[n+1]=r>>>8,this[n]=r&255):W(this,r,n,!0),n+4};u.prototype.writeUInt32BE=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255):W(this,r,n,!1),n+4};u.prototype.writeIntLE=function(r,n,t,i){if(r=+r,n=n|0,!i){var a=Math.pow(2,8*t-1);v(this,r,n,t,a-1,-a)}var o=0,f=1,s=0;for(this[n]=r&255;++o<t&&(f*=256);)r<0&&s===0&&this[n+o-1]!==0&&(s=1),this[n+o]=(r/f>>0)-s&255;return n+t};u.prototype.writeIntBE=function(r,n,t,i){if(r=+r,n=n|0,!i){var a=Math.pow(2,8*t-1);v(this,r,n,t,a-1,-a)}var o=t-1,f=1,s=0;for(this[n+o]=r&255;--o>=0&&(f*=256);)r<0&&s===0&&this[n+o+1]!==0&&(s=1),this[n+o]=(r/f>>0)-s&255;return n+t};u.prototype.writeInt8=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,1,127,-128),u.TYPED_ARRAY_SUPPORT||(r=Math.floor(r)),r<0&&(r=255+r+1),this[n]=r&255,n+1};u.prototype.writeInt16LE=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[n]=r&255,this[n+1]=r>>>8):G(this,r,n,!0),n+2};u.prototype.writeInt16BE=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[n]=r>>>8,this[n+1]=r&255):G(this,r,n,!1),n+2};u.prototype.writeInt32LE=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[n]=r&255,this[n+1]=r>>>8,this[n+2]=r>>>16,this[n+3]=r>>>24):W(this,r,n,!0),n+4};u.prototype.writeInt32BE=function(r,n,t){return r=+r,n=n|0,t||v(this,r,n,4,2147483647,-2147483648),r<0&&(r=4294967295+r+1),u.TYPED_ARRAY_SUPPORT?(this[n]=r>>>24,this[n+1]=r>>>16,this[n+2]=r>>>8,this[n+3]=r&255):W(this,r,n,!1),n+4};u.prototype.writeFloatLE=function(r,n,t){return wr(this,r,n,!0,t)};u.prototype.writeFloatBE=function(r,n,t){return wr(this,r,n,!1,t)};u.prototype.writeDoubleLE=function(r,n,t){return vr(this,r,n,!0,t)};u.prototype.writeDoubleBE=function(r,n,t){return vr(this,r,n,!1,t)};u.prototype.copy=function(r,n,t,i){if(t||(t=0),!i&&i!==0&&(i=this.length),n>=r.length&&(n=r.length),n||(n=0),i>0&&i<t&&(i=t),i===t||r.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(t<0||t>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),r.length-n<i-t&&(i=r.length-n+t);var a=i-t,o;if(this===r&&t<n&&n<i)for(o=a-1;o>=0;--o)r[o+n]=this[o+t];else if(a<1e3||!u.TYPED_ARRAY_SUPPORT)for(o=0;o<a;++o)r[o+n]=this[o+t];else Uint8Array.prototype.set.call(r,this.subarray(t,t+a),n);return a};u.prototype.fill=function(r,n,t,i){if(typeof r=="string"){if(typeof n=="string"?(i=n,n=0,t=this.length):typeof t=="string"&&(i=t,t=this.length),r.length===1){var a=r.charCodeAt(0);a<256&&(r=a)}if(i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!u.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else typeof r=="number"&&(r=r&255);if(n<0||this.length<n||this.length<t)throw new RangeError("Out of range index");if(t<=n)return this;n=n>>>0,t=t===void 0?this.length:t>>>0,r||(r=0);var o;if(typeof r=="number")for(o=n;o<t;++o)this[o]=r;else{var f=A(r)?r:b(new u(r,i).toString()),s=f.length;for(o=0;o<t-n;++o)this[o+n]=f[o%s]}return this};Cn=/[^+\/0-9A-Za-z-_]/g});var k=q(()=>{Ar()});var mr=Z((ne,Ln)=>{Ln.exports={name:"vsls",displayName:"VS Live Share extension API",description:"Enables VS Code extensions to access Live Share capabilities.",version:"1.0.4753",publisher:"ms-vsliveshare",main:"vscode.js",preview:!0,license:"SEE LICENSE IN LICENSE.txt",homepage:"https://aka.ms/vsls",bugs:{url:"https://aka.ms/vsls-issues",email:"vsls-feedback@microsoft.com"},author:{name:"Microsoft"},keywords:["Live Share"],categories:["Other"],repository:{url:"https://github.com/MicrosoftDocs/live-share"},dependencies:{"@microsoft/servicehub-framework":"^2.6.74"}}});var Rr=Z(x=>{"use strict";C();k();Object.defineProperty(x,"__esModule",{value:!0});var Fn=require("vscode"),yr=mr().version;x.extensionId="ms-vsliveshare.vsliveshare";async function Tr(e){let r=Fn.extensions.getExtension(x.extensionId);if(!r)return null;let n=r.isActive?r.exports:await r.activate();return n?n.getApi?n.getApi(yr,e):n.getApiAsync(yr):null}x.getApi=Tr;function bn(){return Tr()}x.getApiAsync=bn;var Gn;(function(e){e.AllowGuestDebugControl="allowGuestDebugControl",e.AllowGuestTaskControl="allowGuestTaskControl",e.AutoShareServers="autoShareServers",e.AnonymousGuestApproval="anonymousGuestApproval",e.ConnectionMode="connectionMode",e.AllowedDomains="allowedDomains",e.AllowReadWriteTerminals="allowReadWriteTerminals"})(Gn=x.PolicySetting||(x.PolicySetting={}));var Wn;(function(e){e[e.None=0]="None",e[e.Host=1]="Host",e[e.Guest=2]="Guest"})(Wn=x.Role||(x.Role={}));var On;(function(e){e[e.None=0]="None",e[e.ReadOnly=1]="ReadOnly",e[e.ReadWrite=3]="ReadWrite",e[e.Owner=255]="Owner"})(On=x.Access||(x.Access={}));var Hn;(function(e){e.Session="liveshare.session",e.ExplorerSession="liveshare.session.explorer",e.PlannedSessions="liveshare.plannedSessions",e.Contacts="liveshare.contacts",e.Help="liveshare.help"})(Hn=x.View||(x.View={}));var qn;(function(e){e.Participants="participants",e.Servers="servers",e.Terminals="terminals",e.Comments="comments",e.Chat="chat",e.CurrentUser="participants.currentuser",e.Guest="participants.guest",e.FollowedGuest="participants.guest.followed",e.Participant="participants.participant",e.FollowedParticipant="participants.participant.followed",e.GuestAnonymous="participants.guest.anonymous",e.FollowedGuestAnonymous="participants.guest.followed.anonymous",e.GuestElevated="participants.guest.elevated",e.FollowedGuestElevated="participants.guest.followed.elevated",e.GuestElevatedAnonymous="participants.guest.elevated.anonymous",e.FollowedGuestElevatedAnonymous="participants.guest.followed.elevated.anonymous",e.LocalServer="servers.local",e.RemoteServer="servers.remote",e.LocalTerminalReadOnly="terminals.local.readonly",e.LocalTerminalReadWrite="terminals.local.readwrite",e.RemoteTerminal="terminals.remote",e.SuggestedContacts="contacts.suggested",e.AvailableContacts="contacts.available",e.ContactsProvider="contacts.provider",e.SelfContact="contacts.selfContact",e.Contact="contacts.contact",e.ContactInvited="contacts.contact.invited",e.ContactOffline="contacts.contact.offline",e.RecentContact="contacts.recentContact",e.RecentContactOffline="contacts.recentContact.offline",e.RecentContactInvited="contacts.recentContact.invited",e.NoContact="contacts.noContact",e.RecentContacts="contacts.RecentContacts",e.NoSuggestedContacts="contacts.NoSuggestedUsers",e.NoRecentContacts="contacts.NoRecentContacts",e.InvitedContact="contacts.invited",e.SessionFeedbackQuestion="help.sessionFeedback",e.ReportAProblem="help.reportAProblem",e.TweetUsYourFeedback="help.tweetUsYourFeedback",e.Survey="help.survey",e.GoodFeedback="help.goodFeedback",e.BadFeedback="help.badFeedback",e.DontAskAgain="help.dontAskAgain",e.Thankyou="help.thankyou",e.MoreInfo="help.moreinfo",e.ConfigureSettings="help.configureSettings",e.Loading="loading",e.Other="other"})(qn=x.ViewItem||(x.ViewItem={}));var D=class{};x.ActivityType=D;D.session="session";D.workspace="workspace";D.debug="debug";D.terminal="terminal"});var Jn={};Pr(Jn,{activate:()=>Qn,deactivate:()=>zn});module.exports=Yr(Jn);C();k();var T=$(require("vscode")),_r=$(Rr());async function Qn(e){await _r.getApi()||T.window.showInformationMessage("Live Share API not available");let n="line";T.window.showInformationMessage("Guest mode activated");let t=T.window.createTextEditorDecorationType({opacity:"0.5",fontStyle:"italic"}),i=-1,a=[],o=T.workspace.onDidChangeTextDocument(async s=>{for(let c of T.window.visibleTextEditors){let h=c.selection.active.line;s.contentChanges.forEach(l=>{let w=l.range.start.line;c.setDecorations(t,[new T.Range(w,0,w,c.document.lineAt(w).range.end.character)])}),i!==-1&&i!==h&&f(c,t),i=h}e.subscriptions.push(o)});function f(s,c){s.setDecorations(c,[])}}function zn(){}
/*! Bundled license information:

@esbuild-plugins/node-globals-polyfill/Buffer.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   *)
*/
