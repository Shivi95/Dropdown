(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{27:function(e,t,n){e.exports=n(54)},36:function(e,t,n){},37:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),o=n(24),r=n.n(o),l=n(14),u=n.n(l),s=n(25),i=n(9),m=n(11);m.a.initializeApp({apiKey:"AIzaSyChrE4vabWJzwxhZYvQzZ732nUnwlxqG_s",authDomain:"dropdown-3fc31.firebaseapp.com",projectId:"dropdown-3fc31",storageBucket:"dropdown-3fc31.appspot.com",messagingSenderId:"249167116685",appId:"1:249167116685:web:9725bfae6a991b681325c4",measurementId:"G-6D2LB1Y7MK"});var d=m.a.auth(),p=new m.a.auth.GoogleAuthProvider,f=(n(36),Object(a.createContext)()),v=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],r=n[1];return Object(a.useEffect)((function(){d.onAuthStateChanged(r)}),[]),c.a.createElement(f.Provider,{value:[o,r]},e.children)};function b(e){var t=e.options,n=e.value,o=e.prompt,r=e.onChange,l=e.maxItems,u=Object(a.useState)(!1),s=Object(i.a)(u,2),m=s[0],v=s[1],b=Object(a.useState)(""),h=Object(i.a)(b,2),E=h[0],j=h[1],O=Object(a.useState)(l),g=Object(i.a)(O,2),w=g[0],_=g[1],S=t.length-w,x=Object(a.useState)(!0),C=Object(i.a)(x,2),N=C[0],k=C[1],I=Object(a.useContext)(f),y=Object(i.a)(I,2),A=y[0],L=y[1];function z(e){return e.filter((function(e){return e.name.toLowerCase().indexOf(null===E||void 0===E?void 0:E.toLowerCase())>-1}))}return c.a.createElement("div",{className:"dropdown"},c.a.createElement("div",{className:"head__control",onClick:function(){return v((function(e){return!e}))}},c.a.createElement("div",{className:"selected__value"},n?n.name:o),c.a.createElement("div",{className:"down__arrow ".concat(m?"open":null)})),c.a.createElement("div",{className:"options ".concat(m?"open":null)},c.a.createElement("div",{className:"search__box"},c.a.createElement("input",{className:"search",type:"text",placeholder:"Search",value:E,onChange:function(e){j(e.target.value),k(!1)}})),0===z(t).length?c.a.createElement("div",{className:"option"},'"',E,'" not found',null===A?c.a.createElement("button",{className:"add__button",onClick:function(){d.signInWithPopup(p).then((function(e){L(e.user)})).catch((function(e){return console.log(e.message)}))}},"Login"):c.a.createElement("button",{className:"add__button"},"Add & Select")):z(t).slice(0,w).map((function(e){return c.a.createElement("div",{className:"option",key:e.id,onClick:function(){r(e)}},e.id===w-1?c.a.createElement("div",null,e.name,c.a.createElement("div",{className:"more__items",onClick:function(){_(t.length),k(!1)}},!0===N||""===E?"".concat(S," more.."):" ")):e.name)}))))}n(37);var h=n(26),E=n.n(h);function j(){var e=E.a.create({baseURL:"https://5fe0e88d04f0780017de96fc.mockapi.io/v3/countries"}),t=Object(a.useState)([]),n=Object(i.a)(t,2),o=n[0],r=n[1],l=Object(a.useState)(null),m=Object(i.a)(l,2),d=m[0],p=m[1];return Object(a.useEffect)((function(){Object(s.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.get("/").then((function(e){return e.data}));case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[]),console.log("From the parent",d),c.a.createElement("div",{className:"app__container",style:{width:450}},c.a.createElement(b,{options:o,prompt:"Select a location",maxItems:4,value:d,onChange:function(e){return p(e)}}))}var O=document.getElementById("root");r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null,c.a.createElement(j,null))),O)}},[[27,1,2]]]);
//# sourceMappingURL=main.3e1d87de.chunk.js.map