(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{923:function(e,n,t){"use strict";t.d(n,{l:function(){return r}});var r=(0,t(2804).cn)({key:"countState",default:0})},2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},u=t(1063),i=t(4651),c=t(7426);var l={};function f(e,n,t,r){if(e&&u.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var n=u.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?u.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=s.href,v=s.as,p=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var _=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,g=c.useIntersection({rootMargin:"200px"}),w=r(g,2),x=w[0],j=w[1],E=a.default.useCallback((function(e){x(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,x]);a.default.useEffect((function(){var e=j&&t&&u.isLocalURL(d),n="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+v+(n?"%"+n:"")];e&&!r&&f(o,d,v,{locale:n})}),[v,d,j,b,t,o]);var k={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:c,scroll:i}))}(e,o,d,v,h,y,m,b)},onMouseEnter:function(e){u.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,v,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof b?b:o&&o.locale,C=o&&o.isLocaleDomain&&u.getDomainLocale(v,M,o&&o.locales,o&&o.domainLocales);k.href=C||u.addBasePath(u.addLocale(v,M,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=s},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,c=o.useRef(),l=o.useState(!1),f=r(l,2),s=f[0],d=f[1],v=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||s||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[v,s]};var o=t(7294),a=t(3447),u="undefined"!==typeof IntersectionObserver;var i=new Map},666:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(n),t.d(n,{default:function(){return v}});var a=t(1664),u=t(7294),i=t(2804),c=t(923),l=t(7819),f=t.n(l),s=t(1163),d=t(5893),v=function(){var e=(0,u.useState)(0),n=e[0],t=e[1],r=o((0,i.FV)(c.l),2),l=r[0],v=r[1];return(0,u.useEffect)((function(){t(1+Math.floor(25*Math.random()))}),[]),(0,d.jsx)("div",{className:f().container,children:(0,d.jsxs)("div",{className:f().main,children:[n==l?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{children:"Bomb!!!!"}),(0,d.jsx)("div",{onClick:function(){s.default.reload()},children:"\u3082\u3046\u3044\u3061\u3069"})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("h3",{children:["count : ",l]}),(0,d.jsx)("div",{className:f().btnSquareShadow,onClick:function(){v(l+1)},children:"click!!!"})]}),(0,d.jsx)("div",{children:"button\u306e\u30da\u30fc\u30b8\u3060\u304a"}),(0,d.jsx)(a.default,{href:"/",children:(0,d.jsx)("a",{children:"To main page"})})]})})}},75:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/button",function(){return t(666)}])},7819:function(e){e.exports={btnSquareShadow:"Button_btnSquareShadow__7Dx0r",container:"Button_container__34ogC",main:"Button_main__1Ri9N",grid:"Button_grid__FnBTh"}},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)}},function(e){e.O(0,[774,888,179],(function(){return n=75,e(e.s=n);var n}));var n=e.O();_N_E=n}]);