(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4436)}])},9720:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return l},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return o},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u},isThenable:function(){return f}});let l="refresh",i="navigate",o="restore",a="server-patch",s="prefetch",c="fast-refresh",u="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(9082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(8754),l=r(1757)._(r(7294)),i=n._(r(3935)),o=n._(r(4764)),a=r(8484),s=r(2666),c=r(4845);r(9982);let u=r(4167),f=n._(r(4148)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/hermanovarvet/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,l,i){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&l(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,l=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function p(e){let[t,r]=l.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:o,width:a,decoding:s,className:c,style:u,fetchPriority:f,placeholder:d,loading:m,unoptimized:g,fill:v,onLoadRef:x,onLoadingCompleteRef:b,setBlurComplete:y,setShowAltText:j,onLoad:_,onError:A,...w}=e;return l.default.createElement("img",{...w,...p(f),loading:m,width:a,height:o,decoding:s,"data-nimg":v?"fill":"1",className:c,style:u,sizes:i,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(A&&(e.src=e.src),e.complete&&h(e,d,x,b,y,g))},[r,d,x,b,y,A,g,t]),onLoad:e=>{h(e.currentTarget,d,x,b,y,g)},onError:e=>{j(!0),"empty"!==d&&y(!0),A&&A(e)}})});function g(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...p(r.fetchPriority)};return t&&i.default.preload?(i.default.preload(r.src,n),null):l.default.createElement(o.default,null,l.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let v=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(u.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=d||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:o,onLoadingComplete:h}=e,p=(0,l.useRef)(o);(0,l.useEffect)(()=>{p.current=o},[o]);let v=(0,l.useRef)(h);(0,l.useEffect)(()=>{v.current=h},[h]);let[x,b]=(0,l.useState)(!1),[y,j]=(0,l.useState)(!1),{props:_,meta:A}=(0,a.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:x,showAltText:y});return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,{..._,unoptimized:A.unoptimized,placeholder:A.placeholder,fill:A.fill,onLoadRef:p,onLoadingCompleteRef:v,setBlurComplete:b,setShowAltText:j,ref:t}),A.priority?l.default.createElement(g,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1032:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let n=r(8754)._(r(7294)),l=r(4879),i=r(1572),o=r(8373),a=r(6221),s=r(5933),c=r(4167),u=r(8874),f=r(6342),d=r(245),h=r(6015),p=r(9720),m=new Set;function g(e,t,r,n,l,o){if(o||(0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(l))return;m.add(l)}Promise.resolve(o?e.prefetch(t,l):e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}let x=n.default.forwardRef(function(e,t){let r,o;let{href:m,as:x,children:b,prefetch:y=null,passHref:j,replace:_,shallow:A,scroll:w,locale:C,onClick:N,onMouseEnter:E,onTouchStart:O,legacyBehavior:S=!1,...P}=e;r=b,S&&("string"==typeof r||"number"==typeof r)&&(r=n.default.createElement("a",null,r));let k=n.default.useContext(c.RouterContext),R=n.default.useContext(u.AppRouterContext),z=null!=k?k:R,M=!k,I=!1!==y,T=null===y?p.PrefetchKind.AUTO:p.PrefetchKind.FULL,{href:L,as:H}=n.default.useMemo(()=>{if(!k){let e=v(m);return{href:e,as:x?v(x):e}}let[e,t]=(0,l.resolveHref)(k,m,!0);return{href:e,as:x?(0,l.resolveHref)(k,x):t||e}},[k,m,x]),B=n.default.useRef(L),U=n.default.useRef(H);S&&(o=n.default.Children.only(r));let V=S?o&&"object"==typeof o&&o.ref:t,[D,F,K]=(0,f.useIntersection)({rootMargin:"200px"}),G=n.default.useCallback(e=>{(U.current!==H||B.current!==L)&&(K(),U.current=H,B.current=L),D(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[H,V,L,K,D]);n.default.useEffect(()=>{z&&F&&I&&g(z,L,H,{locale:C},{kind:T},M)},[H,L,F,C,I,null==k?void 0:k.locale,z,M,T]);let W={ref:G,onClick(e){S||"function"!=typeof N||N(e),S&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,l,o,a,s,c,u){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,l,{shallow:a,locale:c,scroll:e}):t[o?"replace":"push"](l||r,{scroll:e})};u?n.default.startTransition(d):d()}(e,z,L,H,_,A,w,C,M)},onMouseEnter(e){S||"function"!=typeof E||E(e),S&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),z&&(I||!M)&&g(z,L,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:T},M)},onTouchStart(e){S||"function"!=typeof O||O(e),S&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),z&&(I||!M)&&g(z,L,H,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:T},M)}};if((0,a.isAbsoluteUrl)(H))W.href=H;else if(!S||j||"a"===o.type&&!("href"in o.props)){let e=void 0!==C?C:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,d.getDomainLocale)(H,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);W.href=t||(0,h.addBasePath)((0,s.addLocale)(H,e,null==k?void 0:k.defaultLocale))}return S?n.default.cloneElement(o,W):n.default.createElement("a",{...P,...W},r)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(7294),l=r(6231),i="function"==typeof IntersectionObserver,o=new Map,a=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!i,[u,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(c||u)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:l,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=o.get(n)))return t;let l=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:l},a.push(r),o.set(r,t),t}(r);return i.set(e,t),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),o.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,l.requestIdleCallback)(()=>f(!0));return()=>(0,l.cancelIdleCallback)(e)}},[c,r,t,u,d.current]),[h,u,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(9982);let n=r(2528),l=r(2666);function i(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,c,{src:u,sizes:f,unoptimized:d=!1,priority:h=!1,loading:p,className:m,quality:g,width:v,height:x,fill:b=!1,style:y,onLoad:j,onLoadingComplete:_,placeholder:A="empty",blurDataURL:w,fetchPriority:C,layout:N,objectFit:E,objectPosition:O,lazyBoundary:S,lazyRoot:P,...k}=e,{imgConf:R,showAltText:z,blurComplete:M,defaultLoader:I}=t,T=R||l.imageConfigDefault;if("allSizes"in T)a=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);a={...T,allSizes:e,deviceSizes:t}}let L=k.loader||I;delete k.loader,delete k.srcSet;let H="__next_img_default"in L;if(H){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(N){"fill"===N&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!f&&(f=t)}let B="",U=o(v),V=o(x);if("object"==typeof(r=u)&&(i(r)||void 0!==r.src)){let e=i(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,w=w||e.blurDataURL,B=e.src,!b){if(U||V){if(U&&!V){let t=U/e.width;V=Math.round(e.height*t)}else if(!U&&V){let t=V/e.height;U=Math.round(e.width*t)}}else U=e.width,V=e.height}}let D=!h&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:B)||u.startsWith("data:")||u.startsWith("blob:"))&&(d=!0,D=!1),a.unoptimized&&(d=!0),H&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(d=!0),h&&(C="high");let F=o(g),K=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},z?{}:{color:"transparent"},y),G=M||"empty"===A?null:"blur"===A?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:U,heightInt:V,blurWidth:s,blurHeight:c,blurDataURL:w||"",objectFit:K.objectFit})+'")':'url("'+A+'")',W=G?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:l,quality:i,sizes:o,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:l}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:l.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:l,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>l.find(t=>t>=e)||l[l.length-1]))],kind:"x"}}(t,l,o),u=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:i,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:a({config:t,src:r,quality:i,width:s[u]})}}({config:a,src:u,unoptimized:d,width:U,quality:F,sizes:f,loader:L});return{props:{...k,loading:D?"lazy":p,fetchPriority:C,width:U,height:V,decoding:"async",className:m,style:{...K,...W},sizes:X.sizes,srcSet:X.srcSet,src:X.src},meta:{unoptimized:d,priority:h,placeholder:A,fill:b}}}},2528:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:l,blurDataURL:i,objectFit:o}=e,a=n?40*n:t,s=l?40*l:r,c=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},256:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return s},default:function(){return c}});let n=r(8754),l=r(8484),i=r(9982),o=r(1100),a=n._(r(4148)),s=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/hermanovarvet/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=o.Image},4148:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:l}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(l||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4436:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(5893),l=r(2359),i=r.n(l);r(9166);var o=r(7294),a=r(1664),s=r.n(a),c=r(5675),u=r.n(c),f={src:"/hermanovarvet/_next/static/media/logo.63a0b236.png",height:188,width:444,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAACVBMVEUAAAAAAAAAAACDY+nAAAAAA3RSTlMaKRCyNm33AAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAGklEQVR4nBXCgQ0AAAyDINz/Ry8VXZW4PSs8AS8AERuamCkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=o.createContext&&o.createContext(d),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function g(e){return function(t){return o.createElement(v,p({attr:p({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return o.createElement(t.tag,p({key:r},t.attr),e(t.child))})}(e.child))}}function v(e){var t=function(t){var r,n=e.attr,l=e.size,i=e.title,a=m(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,a,{className:r,style:p(p({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&o.createElement("title",null,i),e.children)};return void 0!==h?o.createElement(h.Consumer,null,function(e){return t(e)}):t(d)}function x(e){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(e)}function b(e){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"}}]})(e)}function y(e){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"}}]})(e)}function j(e){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}var _=()=>{let[e,t]=(0,o.useState)(!1),[r,l]=(0,o.useState)(!1),i=()=>{t(!e),l(!1)},a=()=>{l(!r)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("nav",{className:"fixed w-full h-24 shadow-xl bg-white rounded-b-lg z-10",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center h-full w-full px-8 2xl: px16",children:[(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)(u(),{src:f,alt:"logo",width:120,height:120})}),(0,n.jsx)("div",{className:"hidden lg:flex",children:(0,n.jsxs)("ul",{className:"hidden lg:flex",children:[(0,n.jsx)(s(),{href:"/register",children:(0,n.jsx)("li",{className:"ml-10 hover:border-b text-l",children:"Anm\xe4lan"})}),(0,n.jsxs)("li",{className:"ml-10 hover:border-b text-l cursor-pointer",onClick:a,children:["Lopp",r&&(0,n.jsxs)("ul",{className:"absolute mt-2 bg-white border border-gray-300",children:[(0,n.jsx)("li",{className:"py-2 px-4 hover:bg-gray-200",children:(0,n.jsx)(s(),{href:"/hermanovarvet",children:"Herman\xf6varvet"})}),(0,n.jsx)("li",{className:"py-2 px-4 hover:bg-gray-200",children:(0,n.jsx)(s(),{href:"/lopp2",children:"Herman\xf6varvet Trail"})}),(0,n.jsx)("li",{className:"py-2 px-4 hover:bg-gray-200",children:(0,n.jsx)(s(),{href:"/lopp3",children:"Herman\xf6varvet Barnloppet"})})]})]}),(0,n.jsx)(s(),{href:"/afterRun",children:(0,n.jsx)("li",{className:"ml-10 hover:border-b text-l",children:"After Run"})}),(0,n.jsx)(s(),{href:"/find",children:(0,n.jsx)("li",{className:"ml-10 hover:border-b text-l",children:"Hitta hit"})}),(0,n.jsx)(s(),{href:"/contact",children:(0,n.jsx)("li",{className:"ml-10 hover:border-b text-l",children:"Kontakt"})}),(0,n.jsx)(s(),{href:"/terms",children:(0,n.jsx)("li",{className:"ml-10 hover:border-b text-l",children:"Amml\xe4nna villkor"})})]})}),(0,n.jsx)("div",{onClick:i,className:"lg:hidden cursor-pointer pl-24",children:(0,n.jsx)(j,{size:35})})]}),(0,n.jsxs)("div",{className:"fixed top-0 w-[75%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 transform ".concat(e?"translate-x-0":"-translate-x-full"),children:[(0,n.jsx)("div",{className:"flex w-full items-center justify-end",children:(0,n.jsx)("div",{onClick:i,className:"cursor-pointer",children:(0,n.jsx)(x,{size:35})})}),(0,n.jsx)("div",{className:"flex col py-4 text-xl",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)("li",{onClick:()=>{t(!1),l(!1)},className:"py-4 cursor-pointer",children:"Hem"})}),(0,n.jsx)(s(),{href:"/register",children:(0,n.jsx)("li",{onClick:()=>{t(!1),l(!1)},className:"py-4 cursor-pointer",children:"Anm\xe4lan"})}),(0,n.jsxs)("li",{onClick:a,className:"py-4 cursor-pointer",children:["Lopp",r&&(0,n.jsxs)("ul",{className:" mt-2",children:[(0,n.jsx)("li",{onClick:()=>{t(!1),l(!1)},className:"pl-3 py-3 hover:bg-gray-200",children:(0,n.jsx)(s(),{href:"/hermanovarvet",children:"Herman\xf6varvet"})}),(0,n.jsx)("li",{onClick:()=>{t(!1),l(!1)},className:"pl-3 py-3 hover:bg-gray-200",children:(0,n.jsx)(s(),{href:"/trail",children:"Herman\xf6varvet Trail"})}),(0,n.jsx)("li",{onClick:()=>{t(!1),l(!1)},className:"pl-3 py-3 hover:bg-gray-200",children:(0,n.jsx)(s(),{href:"/barn",children:"Barnloppet"})})]})]}),(0,n.jsx)(s(),{href:"/afterRun",children:(0,n.jsx)("li",{onClick:()=>{t(!1),l(!1)},className:"py-4 cursor-pointer",children:"After Run"})}),(0,n.jsx)(s(),{href:"/find",children:(0,n.jsx)("li",{onClick:()=>{t(!1),l(!1)},className:"py-4 cursor-pointer",children:"Hitta hit"})}),(0,n.jsx)(s(),{href:"/contact",children:(0,n.jsx)("li",{onClick:()=>{t(!1),l(!1)},className:"py-4 cursor-pointer",children:"Kontakt"})}),(0,n.jsx)(s(),{href:"/terms",children:(0,n.jsx)("li",{onClick:()=>{t(!1),l(!1)},className:"py-4 cursor-pointer",children:"Allm\xe4nna villkor"})})]})}),(0,n.jsxs)("div",{className:"flex flex-col items-center pt-10",children:[(0,n.jsxs)("div",{className:"flex flex-row justify-between w-24 mb-4",children:[(0,n.jsx)(b,{size:40,className:"cursor-pointer"}),(0,n.jsx)(y,{size:40,className:"cursor-pointer"})]}),(0,n.jsx)("div",{children:(0,n.jsx)(s(),{href:"/",children:(0,n.jsx)(u(),{src:f,alt:"logo",width:100,height:100})})})]})]})]})})},A=()=>(0,n.jsxs)("footer",{className:"h-24 bg-hv-yellow flex items-center justify-center",children:[(0,n.jsx)(b,{size:40,className:"cursor-pointer mx-2"}),(0,n.jsx)(y,{size:40,className:"cursor-pointer mx-2"})]});function w(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_,{}),(0,n.jsx)("div",{className:"h-[90px] w-full"}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(A,{})]})}var C=r(9008),N=r.n(C);function E(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)("main",{className:i().className,children:(0,n.jsxs)(w,{children:[(0,n.jsxs)(N(),{children:[(0,n.jsx)("title",{children:"Herman\xf6varvet - V\xe4stkustens gulligaste sommarlopp"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,n.jsx)(t,{...r})]})})}},9166:function(){},2359:function(e){e.exports={style:{fontFamily:"'__Source_Sans_3_1fbd4a', '__Source_Sans_3_Fallback_1fbd4a'",fontStyle:"normal"},className:"__className_1fbd4a"}},9008:function(e,t,r){e.exports=r(4764)},5675:function(e,t,r){e.exports=r(256)},1664:function(e,t,r){e.exports=r(1032)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(2937)}),_N_E=e.O()}]);