"use strict";(self.webpackChunksmardex_web=self.webpackChunksmardex_web||[]).push([[5218],{72356:function(t,e,r){r.d(e,{JQ:function(){return p},_4:function(){return S},X3:function(){return E},R0:function(){return w},jD:function(){return m},Yh:function(){return C},bL:function(){return D},Ls:function(){return k},UV:function(){return x},Ax:function(){return b},A9:function(){return v},w1:function(){return $},NK:function(){return d},RY:function(){return y},Pu:function(){return g},Vk:function(){return h},nh:function(){return u},kG:function(){return s},qH:function(){return a},JH:function(){return c},vJ:function(){return L},o5:function(){return B},AE:function(){return z},I5:function(){return U}});var n=r(16139),i=r(65527),o=r(67069);const s=65535,h=32,c=1,a=1,u=2,l=/^([a-z\d[\](),]+)\[(0|[1-9][\d]*)]$/,f=/^ufixed([1-9][\d]*)x([1-9][\d]*)$/;class d{static from(t){if(t.endsWith("[]")){const e=d.from(t.slice(0,t.length-2));return new S(e)}if(t.endsWith("]")){const e=t.match(l);if(3!==e.length)throw new Error(`malformed static array string: ${t}`);const r=e[2],n=parseInt(r,10);if(n>s)throw new Error(`array length exceeds limit ${s}`);const i=d.from(e[1]);return new E(i,n)}if(t.startsWith("uint")){const e=t=>[...t].every((t=>"0123456789".includes(t))),r=t.slice(4,t.length);if(!e(r))throw new Error(`malformed uint string: ${r}`);const n=parseInt(r,10);if(n>s)throw new Error(`malformed uint string: ${n}`);return new g(n)}if("byte"===t)return new m;if(t.startsWith("ufixed")){const e=t.match(f);if(3!==e.length)throw new Error(`malformed ufixed type: ${t}`);const r=parseInt(e[1],10),n=parseInt(e[2],10);return new y(r,n)}if("bool"===t)return new w;if("address"===t)return new p;if("string"===t)return new b;if(t.length>=2&&"("===t[0]&&")"===t[t.length-1]){const e=$.parseTupleContent(t.slice(1,t.length-1)),r=[];for(let t=0;t<e.length;t++){const n=d.from(e[t]);r.push(n)}return new $(r)}throw new Error(`cannot convert a string ${t} to an ABI type`)}}class g extends d{constructor(t){if(super(),t%8!=0||t<8||t>512)throw new Error(`unsupported uint type bitSize: ${t}`);this.bitSize=t}toString(){return`uint${this.bitSize}`}equals(t){return t instanceof g&&this.bitSize===t.bitSize}isDynamic(){return!1}byteLen(){return this.bitSize/8}encode(t){if("bigint"!=typeof t&&"number"!=typeof t)throw new Error(`Cannot encode value as uint${this.bitSize}: ${t}`);if(t>=BigInt(2**this.bitSize)||t<BigInt(0))throw new Error(`${t} is not a non-negative int or too big to fit in size uint${this.bitSize}`);if("number"==typeof t&&!Number.isSafeInteger(t))throw new Error(`${t} should be converted into a BigInt before it is encoded`);return(0,i.j)(t,this.bitSize/8)}decode(t){if(t.length!==this.bitSize/8)throw new Error(`byte string must correspond to a uint${this.bitSize}`);return(0,i.v)(t)}}class y extends d{constructor(t,e){if(super(),t%8!=0||t<8||t>512)throw new Error(`unsupported ufixed type bitSize: ${t}`);if(e>160||e<1)throw new Error(`unsupported ufixed type precision: ${e}`);this.bitSize=t,this.precision=e}toString(){return`ufixed${this.bitSize}x${this.precision}`}equals(t){return t instanceof y&&this.bitSize===t.bitSize&&this.precision===t.precision}isDynamic(){return!1}byteLen(){return this.bitSize/8}encode(t){if("bigint"!=typeof t&&"number"!=typeof t)throw new Error(`Cannot encode value as ${this.toString()}: ${t}`);if(t>=BigInt(2**this.bitSize)||t<BigInt(0))throw new Error(`${t} is not a non-negative int or too big to fit in size ${this.toString()}`);if("number"==typeof t&&!Number.isSafeInteger(t))throw new Error(`${t} should be converted into a BigInt before it is encoded`);return(0,i.j)(t,this.bitSize/8)}decode(t){if(t.length!==this.bitSize/8)throw new Error(`byte string must correspond to a ${this.toString()}`);return(0,i.v)(t)}}class p extends d{toString(){return"address"}equals(t){return t instanceof p}isDynamic(){return!1}byteLen(){return h}encode(t){if("string"!=typeof t&&!(t instanceof Uint8Array))throw new Error(`Cannot encode value as ${this.toString()}: ${t}`);if("string"==typeof t){return(0,n.decodeAddress)(t).publicKey}if(32!==t.byteLength)throw new Error("byte string must be 32 bytes long for an address");return t}decode(t){if(32!==t.byteLength)throw new Error("byte string must be 32 bytes long for an address");return(0,n.encodeAddress)(t)}}class w extends d{toString(){return"bool"}equals(t){return t instanceof w}isDynamic(){return!1}byteLen(){return a}encode(t){if("boolean"!=typeof t)throw new Error(`Cannot encode value as bool: ${t}`);return t?new Uint8Array([128]):new Uint8Array([0])}decode(t){if(1!==t.byteLength)throw new Error("bool string must be 1 byte long");const e=t[0];if(128===e)return!0;if(0===e)return!1;throw new Error("boolean could not be decoded from the byte string")}}class m extends d{toString(){return"byte"}equals(t){return t instanceof m}isDynamic(){return!1}byteLen(){return c}encode(t){if("number"!=typeof t&&"bigint"!=typeof t)throw new Error(`Cannot encode value as byte: ${t}`);if("bigint"==typeof t&&(t=Number(t)),t<0||t>255)throw new Error(`${t} cannot be encoded into a byte`);return new Uint8Array([t])}decode(t){if(1!==t.byteLength)throw new Error("byte string must be 1 byte long");return t[0]}}class b extends d{toString(){return"string"}equals(t){return t instanceof b}isDynamic(){return!0}byteLen(){throw new Error(`${this.toString()} is a dynamic type`)}encode(t){if("string"!=typeof t&&!(t instanceof Uint8Array))throw new Error(`Cannot encode value as string: ${t}`);const e=Buffer.from(t),r=(0,i.j)(e.length,u),n=new Uint8Array(e.length+u);return n.set(r),n.set(e,u),n}decode(t){if(t.length<u)throw new Error(`byte string is too short to be decoded. Actual length is ${t.length}, but expected at least ${u}`);const e=Buffer.from(t).readUIntBE(0,u),r=t.slice(u,t.length);if(e!==r.length)throw new Error(`string length bytes do not match the actual length of string. Expected ${e}, got ${r.length}`);return Buffer.from(r).toString("utf-8")}}class E extends d{constructor(t,e){if(super(),e<0)throw new Error(`static array must have a non negative length: ${e}`);this.childType=t,this.staticLength=e}toString(){return`${this.childType.toString()}[${this.staticLength}]`}equals(t){return t instanceof E&&this.staticLength===t.staticLength&&this.childType.equals(t.childType)}isDynamic(){return this.childType.isDynamic()}byteLen(){return this.childType.constructor===w?Math.ceil(this.staticLength/8):this.staticLength*this.childType.byteLen()}encode(t){if(!(Array.isArray(t)||t instanceof Uint8Array))throw new Error(`Cannot encode value as ${this.toString()}: ${t}`);if(t.length!==this.staticLength)throw new Error(`Value array does not match static array length. Expected ${this.staticLength}, got ${t.length}`);return this.toABITupleType().encode(t)}decode(t){return this.toABITupleType().decode(t)}toABITupleType(){return new $(Array(this.staticLength).fill(this.childType))}}class S extends d{constructor(t){super(),this.childType=t}toString(){return`${this.childType.toString()}[]`}equals(t){return t instanceof S&&this.childType.equals(t.childType)}isDynamic(){return!0}byteLen(){throw new Error(`${this.toString()} is a dynamic type`)}encode(t){if(!(Array.isArray(t)||t instanceof Uint8Array))throw new Error(`Cannot encode value as ${this.toString()}: ${t}`);const e=this.toABITupleType(t.length),r=e.encode(t),n=(0,i.j)(e.childTypes.length,u);return(0,o.concatArrays)(n,r)}decode(t){const e=Buffer.from(t).readUIntBE(0,u);return this.toABITupleType(e).decode(t.slice(u,t.length))}toABITupleType(t){return new $(Array(t).fill(this.childType))}}class $ extends d{constructor(t){if(super(),t.length>=s)throw new Error("tuple type child type number larger than maximum uint16 error");this.childTypes=t}toString(){const t=[];for(let e=0;e<this.childTypes.length;e++)t[e]=this.childTypes[e].toString();return`(${t.join(",")})`}equals(t){return t instanceof $&&this.childTypes.length===t.childTypes.length&&this.childTypes.every(((e,r)=>e.equals(t.childTypes[r])))}isDynamic(){return this.childTypes.some((t=>t.isDynamic()))}byteLen(){let t=0;for(let e=0;e<this.childTypes.length;e++)if(this.childTypes[e].constructor===w){const r=T(this.childTypes,e,1),n=r+1;e+=r,t+=Math.trunc((n+7)/8)}else{t+=this.childTypes[e].byteLen()}return t}encode(t){if(!(Array.isArray(t)||t instanceof Uint8Array))throw new Error(`Cannot encode value as ${this.toString()}: ${t}`);const e=Array.from(t);if(t.length>s)throw new Error("length of tuple array should not exceed a uint16");const r=this.childTypes,n=[],h=[],c=new Map;let a=0;for(;a<r.length;){const t=r[a];if(t.isDynamic())c.set(n.length,!0),n.push(new Uint8Array([0,0])),h.push(t.encode(e[a]));else{if(t.constructor===w){const t=T(r,a,-1);let o=T(r,a,1);if(t%8!=0)throw new Error("expected before index should have number of bool mod 8 equal 0");o=Math.min(7,o);const s=A(e.slice(a,a+o+1));n.push((0,i.j)(s,1)),a+=o}else{const r=t.encode(e[a]);n.push(r)}c.set(a,!1),h.push(new Uint8Array)}a+=1}let l=0;for(const t of n)l+=t.length;let f=0;for(let t=0;t<n.length;t++){if(c.get(t)){const e=l+f;if(e>s)throw new Error(`byte length of ${e} should not exceed a uint16`);n[t]=(0,i.j)(e,u)}f+=h[t].length}return(0,o.concatArrays)(...n,...h)}decode(t){const e=this.childTypes,r=[],n=[];let i=0,o=0;const s=Buffer.from(t);for(;i<e.length;){const h=e[i];if(h.isDynamic()){if(t.slice(o,t.length).length<u)throw new Error("dynamic type in tuple is too short to be decoded");const e=s.readUIntBE(o,u);if(r.length>0&&(r[r.length-1].right=e,e<r[r.length-1].left))throw new Error("dynamic index segment miscalculation: left is greater than right index");const i={left:e,right:-1};r.push(i),n.push(null),o+=u}else if(h.constructor===w){const e=T(this.childTypes,i,-1);let r=T(this.childTypes,i,1);if(e%8!=0)throw new Error("expected before bool number mod 8 === 0");r=Math.min(7,r);for(let e=0;e<=r;e++){const r=128>>e;(t[o]&r)>0?n.push(new Uint8Array([128])):n.push(new Uint8Array([0]))}i+=r,o+=1}else{const e=h.byteLen();n.push(t.slice(o,o+e)),o+=e}if(i!==e.length-1&&o>=t.length)throw new Error("input byte not enough to decode");i+=1}if(r.length>0&&(r[r.length-1].right=t.length,o=t.length),o<t.length)throw new Error("input byte not fully consumed");for(let t=0;t<r.length;t++){const e=r[t];if(e.left>e.right)throw new Error("dynamic segment should display a [l, r] space with l <= r");if(t!==r.length-1&&e.right!==r[t+1].left)throw new Error("dynamic segment should be consecutive")}let h=0;for(let i=0;i<e.length;i++)e[i].isDynamic()&&(n[i]=t.slice(r[h].left,r[h].right),h+=1);const c=[];for(let t=0;t<e.length;t++){const r=e[t].decode(n[t]);c.push(r)}return c}static parseTupleContent(t){if(0===t.length)return[];if(t.endsWith(",")||t.startsWith(","))throw new Error("tuple string should not start with comma");if(t.includes(",,"))throw new Error("tuple string should not have consecutive commas");const e=[];let r=0,n="";for(const i of t)n+=i,"("===i?r+=1:")"===i?r-=1:","===i&&0===r&&(e.push(n.slice(0,n.length-1)),n="");if(0!==n.length&&e.push(n),0!==r)throw new Error("tuple string has mismatched parentheses");return e}}function A(t){let e=0;if(t.length>8)throw new Error("value list passed in should be no greater than length 8");for(let r=0;r<t.length;r++){const n=t[r];if("boolean"!=typeof n)throw new Error("non-boolean values cannot be compressed into a byte");n&&(e|=1<<7-r)}return e}function T(t,e,r){let n=0;for(;;){const i=e+r*n;if(t[i].constructor!==w){n-=1;break}if(i!==t.length-1&&1===r)n+=1;else{if(!(i>0&&-1===r))break;n+=1}}return n}var v,x,I=r(71569);function z(t){return t===v.any||t===v.pay||t===v.keyreg||t===v.acfg||t===v.axfer||t===v.afrz||t===v.appl}function L(t,e){return t===v.any||e.type&&e.type.toString()===t.toString()}function B(t){return t===x.account||t===x.application||t===x.asset}!function(t){t.any="txn",t.pay="pay",t.keyreg="keyreg",t.acfg="acfg",t.axfer="axfer",t.afrz="afrz",t.appl="appl"}(v||(v={})),function(t){t.account="account",t.application="application",t.asset="asset"}(x||(x={}));class k{constructor(t){if("string"!=typeof t.name||"object"!=typeof t.returns||!Array.isArray(t.args))throw new Error("Invalid ABIMethod parameters");this.name=t.name,this.description=t.desc,this.args=t.args.map((({type:t,name:e,desc:r})=>z(t)||B(t)?{type:t,name:e,description:r}:{type:d.from(t),name:e,description:r})),this.returns={type:"void"===t.returns.type?t.returns.type:d.from(t.returns.type),description:t.returns.desc}}getSignature(){const t=this.args.map((t=>t.type.toString())).join(","),e=this.returns.type.toString();return`${this.name}(${t})${e}`}getSelector(){const t=(0,I.genericHash)(this.getSignature());return new Uint8Array(t.slice(0,4))}txnCount(){let t=1;for(const e of this.args)"string"==typeof e.type&&z(e.type)&&(t+=1);return t}toJSON(){return{name:this.name,desc:this.description,args:this.args.map((({type:t,name:e,description:r})=>({type:t.toString(),name:e,desc:r}))),returns:{type:this.returns.type.toString(),desc:this.returns.description}}}static fromSignature(t){const{name:e,args:r,returns:n}=function(t){const e=t.indexOf("(");if(-1===e)throw new Error(`Invalid method signature: ${t}`);let r=-1,n=0;for(let i=e;i<t.length;i++){const e=t[i];if("("===e)n+=1;else if(")"===e){if(0===n)break;if(n-=1,0===n){r=i;break}}}if(-1===r)throw new Error(`Invalid method signature: ${t}`);return{name:t.slice(0,e),args:$.parseTupleContent(t.slice(e+1,r)),returns:t.slice(r+1)}}(t);return new k({name:e,args:r.map((t=>({type:t}))),returns:{type:n}})}}function U(t,e){if(null===t||!Array.isArray(t)||!t.every((t=>t instanceof k)))throw new Error("Methods list provided is null or not the correct type");const r=t.filter((t=>t.name===e));if(r.length>1)throw new Error(`found ${r.length} methods with the same name ${r.map((t=>t.getSignature())).join(",")}`);if(0===r.length)throw new Error(`found 0 methods with the name ${e}`);return r[0]}class C{constructor(t){if("string"!=typeof t.name||!Array.isArray(t.methods)||t.networks&&"object"!=typeof t.networks)throw new Error("Invalid ABIContract parameters");this.name=t.name,this.description=t.desc,this.networks=t.networks?{...t.networks}:{},this.methods=t.methods.map((t=>new k(t)))}toJSON(){return{name:this.name,desc:this.description,networks:this.networks,methods:this.methods.map((t=>t.toJSON()))}}getMethodByName(t){return U(this.methods,t)}}class D{constructor(t){if("string"!=typeof t.name||!Array.isArray(t.methods))throw new Error("Invalid ABIInterface parameters");this.name=t.name,this.description=t.desc,this.methods=t.methods.map((t=>new k(t)))}toJSON(){return{name:this.name,desc:this.description,methods:this.methods.map((t=>t.toJSON()))}}getMethodByName(t){return U(this.methods,t)}}},35993:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(71569),i=r(16139);function o(){const t=n.keyPair();return{addr:i.encodeAddress(t.publicKey),sk:t.secretKey}}}}]);