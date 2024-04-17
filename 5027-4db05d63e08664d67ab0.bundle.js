"use strict";(self.webpackChunksmardex_web=self.webpackChunksmardex_web||[]).push([[5027],{56417:function(t,e,n){function r(t,e){let n=0;if(void 0===e)for(let e of t)(e=+e)&&(n+=e);else{let r=-1;for(let o of t)(o=+e(o,++r,t))&&(n+=o)}return n}function o(t,e){let n;if(void 0===e)for(const e of t)null!=e&&(n<e||void 0===n&&e>=e)&&(n=e);else{let r=-1;for(let o of t)null!=(o=e(o,++r,t))&&(n<o||void 0===n&&o>=o)&&(n=o)}return n}function i(t,e){return t.sourceLinks.length?t.depth:e-1}function u(t){return function(){return t}}function s(t,e){return l(t.source,e.source)||t.index-e.index}function c(t,e){return l(t.target,e.target)||t.index-e.index}function l(t,e){return t.y0-e.y0}function f(t){return t.value}function a(t){return t.index}function h(t){return t.nodes}function d(t){return t.links}function y(t,e){const n=t.get(e);if(!n)throw new Error("missing: "+e);return n}function p({nodes:t}){for(const e of t){let t=e.y0,n=t;for(const n of e.sourceLinks)n.y0=t+n.width/2,t+=n.width;for(const t of e.targetLinks)t.y1=n+t.width/2,n+=t.width}}function g(){let t,e,n,g=0,v=0,k=1,m=1,_=24,b=8,x=a,w=i,L=h,M=d,S=6;function T(){const i={nodes:L.apply(null,arguments),links:M.apply(null,arguments)};return function({nodes:t,links:e}){for(const[e,n]of t.entries())n.index=e,n.sourceLinks=[],n.targetLinks=[];const r=new Map(t.map(((e,n)=>[x(e,n,t),e])));for(const[t,n]of e.entries()){n.index=t;let{source:e,target:o}=n;"object"!=typeof e&&(e=n.source=y(r,e)),"object"!=typeof o&&(o=n.target=y(r,o)),e.sourceLinks.push(n),o.targetLinks.push(n)}if(null!=n)for(const{sourceLinks:e,targetLinks:r}of t)e.sort(n),r.sort(n)}(i),function({nodes:t}){for(const e of t)e.value=void 0===e.fixedValue?Math.max(r(e.sourceLinks,f),r(e.targetLinks,f)):e.fixedValue}(i),function({nodes:t}){const e=t.length;let n=new Set(t),r=new Set,o=0;for(;n.size;){for(const t of n){t.depth=o;for(const{target:e}of t.sourceLinks)r.add(e)}if(++o>e)throw new Error("circular link");n=r,r=new Set}}(i),function({nodes:t}){const e=t.length;let n=new Set(t),r=new Set,o=0;for(;n.size;){for(const t of n){t.height=o;for(const{source:e}of t.targetLinks)r.add(e)}if(++o>e)throw new Error("circular link");n=r,r=new Set}}(i),function(n){const i=function({nodes:t}){const n=o(t,(t=>t.depth))+1,r=(k-g-_)/(n-1),i=new Array(n);for(const e of t){const t=Math.max(0,Math.min(n-1,Math.floor(w.call(null,e,n))));e.layer=t,e.x0=g+t*r,e.x1=e.x0+_,i[t]?i[t].push(e):i[t]=[e]}if(e)for(const t of i)t.sort(e);return i}(n);t=Math.min(b,(m-v)/(o(i,(t=>t.length))-1)),function(e){const n=function(t,e){let n;if(void 0===e)for(const e of t)null!=e&&(n>e||void 0===n&&e>=e)&&(n=e);else{let r=-1;for(let o of t)null!=(o=e(o,++r,t))&&(n>o||void 0===n&&o>=o)&&(n=o)}return n}(e,(e=>(m-v-(e.length-1)*t)/r(e,f)));for(const r of e){let e=v;for(const o of r){o.y0=e,o.y1=e+o.value*n,e=o.y1+t;for(const t of o.sourceLinks)t.width=t.value*n}e=(m-e+t)/(r.length+1);for(let t=0;t<r.length;++t){const n=r[t];n.y0+=e*(t+1),n.y1+=e*(t+1)}N(r)}}(i);for(let t=0;t<S;++t){const e=Math.pow(.99,t),n=Math.max(1-e,(t+1)/S);E(i,e,n),C(i,e,n)}}(i),p(i),i}function C(t,n,r){for(let o=1,i=t.length;o<i;++o){const i=t[o];for(const t of i){let e=0,r=0;for(const{source:n,value:o}of t.targetLinks){let i=o*(t.layer-n.layer);e+=O(n,t)*i,r+=i}if(!(r>0))continue;let o=(e/r-t.y0)*n;t.y0+=o,t.y1+=o,D(t)}void 0===e&&i.sort(l),P(i,r)}}function E(t,n,r){for(let o=t.length-2;o>=0;--o){const i=t[o];for(const t of i){let e=0,r=0;for(const{target:n,value:o}of t.sourceLinks){let i=o*(n.layer-t.layer);e+=j(t,n)*i,r+=i}if(!(r>0))continue;let o=(e/r-t.y0)*n;t.y0+=o,t.y1+=o,D(t)}void 0===e&&i.sort(l),P(i,r)}}function P(e,n){const r=e.length>>1,o=e[r];z(e,o.y0-t,r-1,n),A(e,o.y1+t,r+1,n),z(e,m,e.length-1,n),A(e,v,0,n)}function A(e,n,r,o){for(;r<e.length;++r){const i=e[r],u=(n-i.y0)*o;u>1e-6&&(i.y0+=u,i.y1+=u),n=i.y1+t}}function z(e,n,r,o){for(;r>=0;--r){const i=e[r],u=(i.y1-n)*o;u>1e-6&&(i.y0-=u,i.y1-=u),n=i.y0-t}}function D({sourceLinks:t,targetLinks:e}){if(void 0===n){for(const{source:{sourceLinks:t}}of e)t.sort(c);for(const{target:{targetLinks:e}}of t)e.sort(s)}}function N(t){if(void 0===n)for(const{sourceLinks:e,targetLinks:n}of t)e.sort(c),n.sort(s)}function O(e,n){let r=e.y0-(e.sourceLinks.length-1)*t/2;for(const{target:o,width:i}of e.sourceLinks){if(o===n)break;r+=i+t}for(const{source:t,width:o}of n.targetLinks){if(t===e)break;r-=o}return r}function j(e,n){let r=n.y0-(n.targetLinks.length-1)*t/2;for(const{source:o,width:i}of n.targetLinks){if(o===e)break;r+=i+t}for(const{target:t,width:o}of e.sourceLinks){if(t===n)break;r-=o}return r}return T.update=function(t){return p(t),t},T.nodeId=function(t){return arguments.length?(x="function"==typeof t?t:u(t),T):x},T.nodeAlign=function(t){return arguments.length?(w="function"==typeof t?t:u(t),T):w},T.nodeSort=function(t){return arguments.length?(e=t,T):e},T.nodeWidth=function(t){return arguments.length?(_=+t,T):_},T.nodePadding=function(e){return arguments.length?(b=t=+e,T):b},T.nodes=function(t){return arguments.length?(L="function"==typeof t?t:u(t),T):L},T.links=function(t){return arguments.length?(M="function"==typeof t?t:u(t),T):M},T.linkSort=function(t){return arguments.length?(n=t,T):n},T.size=function(t){return arguments.length?(g=v=0,k=+t[0],m=+t[1],T):[k-g,m-v]},T.extent=function(t){return arguments.length?(g=+t[0][0],k=+t[1][0],v=+t[0][1],m=+t[1][1],T):[[g,v],[k,m]]},T.iterations=function(t){return arguments.length?(S=+t,T):S},T}n.d(e,{Z:function(){return g}})},61928:function(t,e,n){n.d(e,{Z:function(){return _}});var r=Math.PI,o=2*r,i=1e-6,u=o-i;function s(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function c(){return new s}s.prototype=c.prototype={constructor:s,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,r){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(t,e,n,r,o,i){this._+="C"+ +t+","+ +e+","+ +n+","+ +r+","+(this._x1=+o)+","+(this._y1=+i)},arcTo:function(t,e,n,o,u){t=+t,e=+e,n=+n,o=+o,u=+u;var s=this._x1,c=this._y1,l=n-t,f=o-e,a=s-t,h=c-e,d=a*a+h*h;if(u<0)throw new Error("negative radius: "+u);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(d>i)if(Math.abs(h*l-f*a)>i&&u){var y=n-s,p=o-c,g=l*l+f*f,v=y*y+p*p,k=Math.sqrt(g),m=Math.sqrt(d),_=u*Math.tan((r-Math.acos((g+d-v)/(2*k*m)))/2),b=_/m,x=_/k;Math.abs(b-1)>i&&(this._+="L"+(t+b*a)+","+(e+b*h)),this._+="A"+u+","+u+",0,0,"+ +(h*y>a*p)+","+(this._x1=t+x*l)+","+(this._y1=e+x*f)}else this._+="L"+(this._x1=t)+","+(this._y1=e);else;},arc:function(t,e,n,s,c,l){t=+t,e=+e,l=!!l;var f=(n=+n)*Math.cos(s),a=n*Math.sin(s),h=t+f,d=e+a,y=1^l,p=l?s-c:c-s;if(n<0)throw new Error("negative radius: "+n);null===this._x1?this._+="M"+h+","+d:(Math.abs(this._x1-h)>i||Math.abs(this._y1-d)>i)&&(this._+="L"+h+","+d),n&&(p<0&&(p=p%o+o),p>u?this._+="A"+n+","+n+",0,1,"+y+","+(t-f)+","+(e-a)+"A"+n+","+n+",0,1,"+y+","+(this._x1=h)+","+(this._y1=d):p>i&&(this._+="A"+n+","+n+",0,"+ +(p>=r)+","+y+","+(this._x1=t+n*Math.cos(c))+","+(this._y1=e+n*Math.sin(c))))},rect:function(t,e,n,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}};var l=c,f=Array.prototype.slice;function a(t){return function(){return t}}function h(t){return t[0]}function d(t){return t[1]}function y(t){return t.source}function p(t){return t.target}function g(t){var e=y,n=p,r=h,o=d,i=null;function u(){var u,s=f.call(arguments),c=e.apply(this,s),a=n.apply(this,s);if(i||(i=u=l()),t(i,+r.apply(this,(s[0]=c,s)),+o.apply(this,s),+r.apply(this,(s[0]=a,s)),+o.apply(this,s)),u)return i=null,u+""||null}return u.source=function(t){return arguments.length?(e=t,u):e},u.target=function(t){return arguments.length?(n=t,u):n},u.x=function(t){return arguments.length?(r="function"==typeof t?t:a(+t),u):r},u.y=function(t){return arguments.length?(o="function"==typeof t?t:a(+t),u):o},u.context=function(t){return arguments.length?(i=null==t?null:t,u):i},u}function v(t,e,n,r,o){t.moveTo(e,n),t.bezierCurveTo(e=(e+r)/2,n,e,o,r,o)}function k(t){return[t.source.x1,t.y0]}function m(t){return[t.target.x0,t.y1]}function _(){return g(v).source(k).target(m)}},95389:function(t,e,n){n.d(e,{_:function(){return d},b:function(){return a}});var r=n(67294),o=n(19946),i=n(12351),u=n(16723),s=n(23784),c=n(73781);let l=(0,r.createContext)(null);function f(){let t=(0,r.useContext)(l);if(null===t){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return t}function a(){let[t,e]=(0,r.useState)([]);return[t.length>0?t.join(" "):void 0,(0,r.useMemo)((()=>function(t){let n=(0,c.z)((t=>(e((e=>[...e,t])),()=>e((e=>{let n=e.slice(),r=n.indexOf(t);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:t.slot,name:t.name,props:t.props})),[n,t.slot,t.name,t.props]);return r.createElement(l.Provider,{value:o},t.children)}),[e])]}let h=(0,i.yV)((function(t,e){let n=(0,o.M)(),{id:r=`headlessui-label-${n}`,passive:c=!1,...l}=t,a=f(),h=(0,s.T)(e);(0,u.e)((()=>a.register(r)),[r,a.register]);let d={ref:h,...a.props,id:r};return c&&("onClick"in d&&(delete d.htmlFor,delete d.onClick),"onClick"in l&&delete l.onClick),(0,i.sY)({ourProps:d,theirProps:l,slot:a.slot||{},defaultTag:"label",name:a.name||"Label"})})),d=Object.assign(h,{})},77768:function(t,e,n){n.d(e,{r:function(){return b}});var r=n(67294),o=n(12351),i=n(19946),u=n(61363),s=n(64103),c=n(95389),l=n(39516),f=n(14157),a=n(23784),h=n(46045),d=n(18689),y=n(73781),p=n(31147),g=n(94192);let v=(0,r.createContext)(null);v.displayName="GroupContext";let k=r.Fragment;let m=(0,o.yV)((function(t,e){let n=(0,i.M)(),{id:c=`headlessui-switch-${n}`,checked:l,defaultChecked:k=!1,onChange:m,name:_,value:b,form:x,...w}=t,L=(0,r.useContext)(v),M=(0,r.useRef)(null),S=(0,a.T)(M,e,null===L?null:L.setSwitch),[T,C]=(0,p.q)(l,m,k),E=(0,y.z)((()=>null==C?void 0:C(!T))),P=(0,y.z)((t=>{if((0,s.P)(t.currentTarget))return t.preventDefault();t.preventDefault(),E()})),A=(0,y.z)((t=>{t.key===u.R.Space?(t.preventDefault(),E()):t.key===u.R.Enter&&(0,d.g)(t.currentTarget)})),z=(0,y.z)((t=>t.preventDefault())),D=(0,r.useMemo)((()=>({checked:T})),[T]),N={id:c,ref:S,role:"switch",type:(0,f.f)(t,M),tabIndex:0,"aria-checked":T,"aria-labelledby":null==L?void 0:L.labelledby,"aria-describedby":null==L?void 0:L.describedby,onClick:P,onKeyUp:A,onKeyPress:z},O=(0,g.G)();return(0,r.useEffect)((()=>{var t;let e=null==(t=M.current)?void 0:t.closest("form");e&&void 0!==k&&O.addEventListener(e,"reset",(()=>{C(k)}))}),[M,C]),r.createElement(r.Fragment,null,null!=_&&T&&r.createElement(h._,{features:h.A.Hidden,...(0,o.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:x,checked:T,name:_,value:b})}),(0,o.sY)({ourProps:N,theirProps:w,slot:D,defaultTag:"button",name:"Switch"}))})),_=function(t){var e;let[n,i]=(0,r.useState)(null),[u,s]=(0,c.b)(),[f,a]=(0,l.f)(),h=(0,r.useMemo)((()=>({switch:n,setSwitch:i,labelledby:u,describedby:f})),[n,i,u,f]),d=t;return r.createElement(a,{name:"Switch.Description"},r.createElement(s,{name:"Switch.Label",props:{htmlFor:null==(e=h.switch)?void 0:e.id,onClick(t){n&&("LABEL"===t.currentTarget.tagName&&t.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},r.createElement(v.Provider,{value:h},(0,o.sY)({ourProps:{},theirProps:d,defaultTag:k,name:"Switch.Group"}))))},b=Object.assign(m,{Group:_,Label:c._,Description:l.d})},31147:function(t,e,n){n.d(e,{q:function(){return i}});var r=n(67294),o=n(73781);function i(t,e,n){let[i,u]=(0,r.useState)(n),s=void 0!==t,c=(0,r.useRef)(s),l=(0,r.useRef)(!1),f=(0,r.useRef)(!1);return!s||c.current||l.current?!s&&c.current&&!f.current&&(f.current=!0,c.current=s,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(l.current=!0,c.current=s,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[s?t:i,(0,o.z)((t=>(s||u(t),null==e?void 0:e(t))))]}},18689:function(t,e,n){function r(t={},e=null,n=[]){for(let[r,u]of Object.entries(t))i(n,o(e,r),u);return n}function o(t,e){return t?t+"["+e+"]":e}function i(t,e,n){if(Array.isArray(n))for(let[r,u]of n.entries())i(t,o(e,r.toString()),u);else n instanceof Date?t.push([e,n.toISOString()]):"boolean"==typeof n?t.push([e,n?"1":"0"]):"string"==typeof n?t.push([e,n]):"number"==typeof n?t.push([e,`${n}`]):null==n?t.push([e,""]):r(n,e,t)}function u(t){var e;let n=null!=(e=null==t?void 0:t.form)?e:t.closest("form");if(n)for(let t of n.elements)if("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)return void t.click()}n.d(e,{g:function(){return u},t:function(){return r}})}}]);