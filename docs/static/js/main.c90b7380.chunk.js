(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(8),r=n.n(c),i=(n(15),n(5)),s=n(2),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(i.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})})})},j=n(10),d=n(7),l=n.n(d),b=n(9),f=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a,c,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=9d8UvkQog36jNVZk33s7QFbsDvsulvo6&q=".concat(encodeURI(e),"}&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},p=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",e," "]}),r?Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}):null,Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(u.jsx)(m,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(a.useState)(["goku"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{onClick:function(){c((function(t){return[].concat(Object(i.a)(n),["caminito"])}))},children:"Agregar"}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(p,{category:t},t)}))})]})};r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c90b7380.chunk.js.map