(this["webpackJsonpmonster-app"]=this["webpackJsonpmonster-app"]||[]).push([[0],{25:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),a=t.n(c),o=t(10),s=t.n(o),i=t(5),u=t.n(i),j=t(11),d=t(8),l=t(2),b=t(3);function f(){var n=Object(l.a)(["\n  border-radius: 8px;\n  padding: 8px;\n  margin-bottom: 16px;\n"]);return f=function(){return n},n}var p=b.a.input(f()),m=function(n){var e=n.onSearchChange,t=n.placeholder;return Object(r.jsx)(p,{type:"search",placeholder:t,onChange:e})};function h(){var n=Object(l.a)(["\n  margin: 0.2rem 0;\n"]);return h=function(){return n},n}function x(){var n=Object(l.a)(["\n  margin-bottom: 1rem;\n"]);return x=function(){return n},n}function O(){var n=Object(l.a)(["\n  font-weight: 900;\n"]);return O=function(){return n},n}function v(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 1rem;\n  padding: 1rem;\n  border: 1px solid #222;\n  border-radius: 1rem;\n  background-color: #3b3b3b;\n\n  &:hover {\n    background-color: #303030;\n    cursor: pointer;\n  }\n"]);return v=function(){return n},n}var g=b.a.div(v()),w=b.a.h2(O()),y=b.a.img(x()),S=b.a.p(h()),k=function(n){var e=n.monster;return Object(r.jsxs)(g,{children:[Object(r.jsxs)(w,{children:[" ",e.name," "]}),Object(r.jsx)(y,{className:"monster-img",alt:"monster",src:"https://robohash.org/".concat(e.id,"?set=set2&size=180x180")}),Object(r.jsxs)(S,{children:[" ",e.username," "]}),Object(r.jsxs)(S,{children:[" ",e.email," "]}),Object(r.jsxs)(S,{children:[" ",e.website," "]}),Object(r.jsxs)(S,{children:[" ",e.id," "]})]})};function C(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return C=function(){return n},n}var M=b.a.div(C()),E=function(n){var e=n.monsters;return Object(r.jsx)(M,{children:e.map((function(n){return Object(r.jsx)(k,{monster:n},n.id)}))})};t(25);function J(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return J=function(){return n},n}function L(){var n=Object(l.a)(["\n  margin: 32px 0 16px 0;\n"]);return L=function(){return n},n}var N=b.a.h1(L()),z=b.a.div(J()),A=function(){var n=Object(c.useState)([]),e=Object(d.a)(n,2),t=e[0],a=e[1],o=Object(c.useState)(""),s=Object(d.a)(o,2),i=s[0],l=s[1];Object(c.useEffect)((function(){(function(){var n=Object(j.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,a(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var b=t.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(N,{children:"Monsters Rolodex"}),Object(r.jsx)(m,{onSearchChange:function(n){l(n.target.value)},placeholder:"Search monsters..."}),Object(r.jsx)(z,{children:b.length>0?Object(r.jsx)(E,{monsters:b}):"Monster not found."})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a83acdc1.chunk.js.map