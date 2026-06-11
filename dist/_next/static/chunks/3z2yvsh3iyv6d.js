(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,23527,e=>{"use strict";let t=Symbol.for("apollo.skipToken");e.s(["skipToken",0,t])},83733,e=>{"use strict";var t=e.i(72837),r=e.i(24720);e.s(["useDeepMemo",0,function(e,n){let a=r.useRef(void 0);return a.current&&(0,t.equal)(a.current.deps,n)||(a.current={value:e(),deps:n}),a.current.value}])},19906,e=>{"use strict";var t=e.i(24720);let r=Symbol.for("apollo.hook.wrappers");var n=e.i(85054);e.s(["wrapHook",0,function(e,a,l){let i=[l.queryManager,e.startsWith("use")?t.useContext((0,n.getApolloContext)()):void 0],u=a;for(let t of i){let n=t?.[r]?.[e];n&&(u=n(u))}return u}],19906)},32003,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return u},formatWithValidation:function(){return s},urlObjectKeys:function(){return o}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let l=e.r(31334)._(e.r(256)),i=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",u=e.hash||"",o=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(s+=":"+e.port)),o&&"object"==typeof o&&(o=String(l.urlQueryToSearchParams(o)));let c=e.search||o&&`?${o}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),a=a.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${s}${a}${c}${u}`}let o=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return u(e)}},84538,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(24720);function a(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=l(e,n)),t&&(a.current=l(t,n))},[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},48163,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return l}});let n=e.r(55804),a=e.r(81718);function l(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},68524,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},86556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return m}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let l=e.r(31334),i=e.r(39858),u=l._(e.r(24720)),o=e.r(32003),s=e.r(26442),c=e.r(84538),d=e.r(55804),f=e.r(12e3);e.r(15036);let g=e.r(45329),p=e.r(32272),h=e.r(48163),y=e.r(74531);function b(t){var r,n;let a,l,b,[m,_]=(0,u.useOptimistic)(p.IDLE_LINK_STATUS),x=(0,u.useRef)(null),{href:P,as:S,children:k,prefetch:j=null,passHref:C,replace:M,shallow:$,scroll:E,onClick:T,onMouseEnter:O,onTouchStart:q,legacyBehavior:A=!1,onNavigate:w,transitionTypes:R,ref:N,unstable_dynamicOnHover:I,...F}=t;a=k,A&&("string"==typeof a||"number"==typeof a)&&(a=(0,i.jsx)("a",{children:a}));let D=u.default.useContext(s.AppRouterContext),L=!1!==j,U=!1!==j?null===(n=j)||"auto"===n?y.FetchStrategy.PPR:y.FetchStrategy.Full:y.FetchStrategy.PPR,G="string"==typeof(r=S||P)?r:(0,o.formatUrl)(r);if(A){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});l=u.default.Children.only(a)}let B=A?l&&"object"==typeof l&&l.ref:N,K=u.default.useCallback(e=>(null!==D&&(x.current=(0,p.mountLinkInstance)(e,G,D,U,L,_)),()=>{x.current&&((0,p.unmountLinkForCurrentNavigation)(x.current),x.current=null),(0,p.unmountPrefetchableInstance)(e)}),[L,G,D,U,_]),Q={ref:(0,c.useMergedRef)(K,B),onClick(t){A||"function"!=typeof T||T(t),A&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t),!D||t.defaultPrevented||function(t,r,n,a,l,i,o){if("u">typeof window){let s,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(32250);u.default.startTransition(()=>{d(r,a?"replace":"push",!1===l?g.ScrollBehavior.NoScroll:g.ScrollBehavior.Default,n.current,o)})}}(t,G,x,M,E,w,R)},onMouseEnter(e){A||"function"!=typeof O||O(e),A&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),D&&L&&(0,p.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){A||"function"!=typeof q||q(e),A&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),D&&L&&(0,p.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,d.isAbsoluteUrl)(G)?Q.href=G:A&&!C&&("a"!==l.type||"href"in l.props)||(Q.href=(0,f.addBasePath)(G)),b=A?u.default.cloneElement(l,Q):(0,i.jsx)("a",{...F,...Q,children:a}),(0,i.jsx)(v.Provider,{value:m,children:b})}e.r(68524);let v=(0,u.createContext)(p.IDLE_LINK_STATUS),m=()=>(0,u.useContext)(v);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},57306,38332,e=>{"use strict";var t,r=e.i(72837),n=e.i(24720),a=e.i(98124),l=e.i(61842),i=1,u={};function o(e){return e in u&&(delete u[e],!0)}var s=function(e){var r=i++;return u[r]=!0,t||(t=Promise.resolve()),t.then(function(){return o(r)&&e()}),r},c=function(e){o(e)},d={setImmediate:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=d.delegate;return((null==r?void 0:r.setImmediate)||s).apply(void 0,(0,a.__spreadArray)([],(0,a.__read)(e)))},clearImmediate:function(e){var t=d.delegate;return((null==t?void 0:t.clearImmediate)||c)(e)},delegate:void 0},f=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.scheduler=t,n.work=r,n}return(0,a.__extends)(t,e),t.prototype.requestAsyncId=function(t,r,n){return(void 0===n&&(n=0),null!==n&&n>0)?e.prototype.requestAsyncId.call(this,t,r,n):(t.actions.push(this),t._scheduled||(t._scheduled=d.setImmediate(t.flush.bind(t,void 0))))},t.prototype.recycleAsyncId=function(t,r,n){if(void 0===n&&(n=0),null!=n?n>0:this.delay>0)return e.prototype.recycleAsyncId.call(this,t,r,n);var a,l=t.actions;null!=r&&(null==(a=l[l.length-1])?void 0:a.id)!==r&&(d.clearImmediate(r),t._scheduled===r&&(t._scheduled=void 0))},t}(l.AsyncAction),g=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,a.__extends)(t,e),t.prototype.flush=function(e){this._active=!0;var t,r=this._scheduled;this._scheduled=void 0;var n=this.actions;e=e||n.shift();do if(t=e.execute(e.state,e.delay))break;while((e=n[0])&&e.id===r&&n.shift())if(this._active=!1,t){for(;(e=n[0])&&e.id===r&&n.shift();)e.unsubscribe();throw t}},t}(e.i(79541).AsyncScheduler))(f),p=e.i(72453),h=e.i(51081),y=e.i(56286),b=e.i(36462),v=e.i(16267),m=e.i(23527),_=e.i(83733),x=e.i(19906),P=e.i(35770),S=e.i(64127),k=e.i(73494);let j="function"==typeof(0,k.maybe)(()=>window.document.createElement);var C=e.i(78830);let M=!1,$=n.useSyncExternalStore,E="ReactNative"==(0,k.maybe)(()=>navigator.product),T=(0,k.maybe)(()=>navigator.userAgent.indexOf("jsdom")>=0)||!1,O=(j||E)&&!T,q=$||((e,t,r)=>{let a=t();S.__DEV__&&!M&&a!==t()&&(M=!0,C.invariant.error(34));let[{inst:l},i]=n.useState({inst:{value:a,getSnapshot:t}});return O?n.useLayoutEffect(()=>{Object.assign(l,{value:a,getSnapshot:t}),A(l)&&i({inst:l})},[e,a,t]):Object.assign(l,{value:a,getSnapshot:t}),n.useEffect(()=>(A(l)&&i({inst:l}),e(function(){A(l)&&i({inst:l})})),[e]),a});function A({value:e,getSnapshot:t}){try{return e!==t()}catch{return!0}}let w=Symbol(),R=function(e,...[t]){return(0,x.wrapHook)("useQuery",N,(0,P.useApolloClient)("object"==typeof t?t.client:void 0))(e,t)};function N(e,t={}){var a,l,i,u,o,s,c,d;let f,h=(0,P.useApolloClient)("object"==typeof t?t.client:void 0),{ssr:y}="object"==typeof t?t:{},x=(a=e,l=t,i=h.defaultOptions.watchQuery,(0,_.useDeepMemo)(()=>{if(l===m.skipToken){let e={...(0,b.mergeOptions)(i,{query:a,fetchPolicy:"standby"}),[v.variablesUnknownSymbol]:!0};return e[I]=!0,e}let e=(0,b.mergeOptions)(i,{...l,query:a});return l.skip&&(e.initialFetchPolicy=l.initialFetchPolicy||l.fetchPolicy,e.fetchPolicy="standby"),e},[a,l,i]));function S(t){let r=h.watchQuery(x);return{client:h,query:e,observable:r,resultData:{current:r.getCurrentResult(),previousData:t?.resultData.current.data,variables:r.variables}}}let[k,j]=n.useState(S);(h!==k.client||e!==k.query)&&j(k=S(k));let{observable:C,resultData:M}=k;u=x,o=C,u.fetchPolicy||(u.fetchPolicy=o.options.initialFetchPolicy),function(e,t,n){if(t[w]&&!(0,r.equal)(t[w],n)){var a,l;t[w][I]&&!n.initialFetchPolicy&&(n.initialFetchPolicy=n.fetchPolicy),(a=t[w],l=n,a.query===l.query&&(0,r.equal)(a.variables,l.variables)&&(a.fetchPolicy===l.fetchPolicy||"standby"!==l.fetchPolicy&&"standby"!==a.fetchPolicy))?t.applyOptions(n):t.reobserve(n);let i=t.getCurrentResult();(0,r.equal)(i.data,e.current.data)||(e.previousData=e.current.data||e.previousData),e.current=i,e.variables=t.variables}t[w]=n}(M,C,x);let $=(s=C,c=M,d=y,f=s.options.fetchPolicy,q(n.useCallback(e=>{let t=s.pipe((0,p.observeOn)(g)).subscribe(t=>{let n=c.current;(0,r.equal)(n,t)&&(0,r.equal)(c.variables,s.variables)||(c.variables=s.variables,n.data&&!(0,r.equal)(n.data,t.data)&&(c.previousData=n.data),c.current=t,e())});return()=>{setTimeout(()=>t.unsubscribe())}},[s,c]),()=>c.current,()=>"standby"!==f&&!1===d||"no-cache"===f?R.ssrDisabledResult:c.current)),E=n.useMemo(()=>({refetch:C.refetch.bind(C),fetchMore:C.fetchMore.bind(C),updateQuery:C.updateQuery.bind(C),startPolling:C.startPolling.bind(C),stopPolling:C.stopPolling.bind(C),subscribeToMore:C.subscribeToMore.bind(C)}),[C]),T=M.previousData;return n.useMemo(()=>{let{partial:e,...t}=$;return{...t,client:h,observable:C,variables:C.variables,previousData:T,...E}},[$,h,C,T,E])}let I=Symbol();R.ssrDisabledResult=(0,y.maybeDeepFreeze)({loading:!0,data:void 0,dataState:"empty",error:void 0,networkStatus:h.NetworkStatus.loading,partial:!0}),e.s(["useQuery",0,R],57306);var F=e.i(56078);F.gql`
  query GetPages($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      status
    }
  }
`,F.gql`
  query GetPageBySlug($slug: String, $language: String) {
    cpPages(slug: $slug, language: $language) {
      _id
      name
      slug
      content
      status
    }
  }
`,F.gql`
  query GetPosts($language: String, $status: PostStatus) {
    cpPosts(language: $language, status: $status) {
      _id
      title
      slug
      excerpt
      content
      status
      categoryIds
      tagIds
    }
  }
`,F.gql`
  query GetPostBySlug($slug: String, $language: String) {
    cpPosts(slug: $slug, language: $language, status: published) {
      _id
      title
      slug
      excerpt
      content
      status
      categoryIds
      tagIds
    }
  }
`,F.gql`
  query GetCategories($language: String) {
    cpCategories(language: $language) {
      list {
        _id
        name
        slug
      }
    }
  }
`,F.gql`
  query GetTags($language: String) {
    cpCmsTags(language: $language) {
      tags {
        _id
        name
        slug
      }
    }
  }
`;let D=F.gql`
  query GetHeaderMenu($language: String, $kind: String) {
    cpMenus(language: $language, kind: $kind) {
      _id
      label
      url
      order
      kind
    }
  }
`,L=F.gql`
  query GetFooterMenu($language: String, $kind: String) {
    cpMenus(language: $language, kind: $kind) {
      _id
      label
      url
      order
      kind
    }
  }
`;F.gql`
  query VerifyStaticSiteCMS($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      status
    }
    cpPosts(language: $language, status: published) {
      _id
      title
      slug
      categoryIds
      tagIds
    }
    cpCategories(language: $language) {
      list {
        _id
        name
        slug
      }
    }
    cpCmsTags(language: $language) {
      tags {
        _id
        name
        slug
      }
    }
    header: cpMenus(language: $language, kind: "header") {
      _id
      label
      url
      order
    }
    footer: cpMenus(language: $language, kind: "footer") {
      _id
      label
      url
      order
    }
  }
`,e.s(["GET_FOOTER_MENU",0,L,"GET_HEADER_MENU",0,D],38332)},70844,e=>{"use strict";var t=e.i(39858),r=e.i(86556),n=e.i(24720),a=e.i(57306),l=e.i(38332);e.s(["default",0,function(){let[e,i]=(0,n.useState)(!1),u=(0,a.useQuery)(l.GET_HEADER_MENU,{variables:{language:"mn",kind:"header"}}).data,o=u?.cpMenus||[];return(0,t.jsx)("header",{className:"bg-[#0C0A09] border-b border-[#44403C]",children:(0,t.jsxs)("div",{className:"max-w-[1440px] mx-auto px-10",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,t.jsx)(r.default,{href:"/",className:"text-white text-2xl font-bold tracking-tight",children:"CERESIT"}),(0,t.jsx)("nav",{className:"hidden lg:flex items-center gap-8",children:o.map(e=>(0,t.jsx)(r.default,{href:e.url,className:"text-sm font-bold text-[#FAFAF9] hover:text-[#E3000F] transition-colors duration-150",children:e.label},e._id))}),(0,t.jsx)("button",{className:"lg:hidden text-white p-2",onClick:()=>i(!e),children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e?(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),e&&(0,t.jsx)("nav",{className:"lg:hidden py-4 border-t border-[#44403C]",children:o.map(e=>(0,t.jsx)(r.default,{href:e.url,className:"block py-2 text-sm font-bold text-[#FAFAF9] hover:text-[#E3000F] transition-colors",onClick:()=>i(!1),children:e.label},e._id))})]})})}])},97816,e=>{"use strict";var t=e.i(39858),r=e.i(86556),n=e.i(57306),a=e.i(38332);e.s(["default",0,function(){let e=(0,n.useQuery)(a.GET_FOOTER_MENU,{variables:{language:"mn",kind:"footer"}}).data,l=e?.cpMenus||[];return(0,t.jsx)("footer",{className:"bg-black border-t border-[#44403C]",children:(0,t.jsxs)("div",{className:"max-w-[1440px] mx-auto px-10 py-10",children:[(0,t.jsx)("div",{className:"flex flex-wrap gap-6 mb-8",children:l.map(e=>(0,t.jsx)(r.default,{href:e.url,className:"text-xs text-[#78716C] hover:text-[#FAFAF9] transition-colors",children:e.label},e._id))}),(0,t.jsx)("p",{className:"text-xs text-[#78716C]",children:"© 2024 Ceresit. Бүх эрх хуулиар хамгаалагдсан."})]})})}])}]);