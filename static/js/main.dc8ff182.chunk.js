(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(6),o=n.n(s),u=(n(16),n(5));n(4);var i=function(e){return Object(c.jsxs)("div",{className:"country",children:[Object(c.jsx)("h5",{children:e.country.name}),Object(c.jsxs)("p",{children:["Capital: ",e.capital]})]})};var l=function(e){return e.countries.map((function(e,t){return Object(c.jsx)(i,{country:e,capital:e.capital},t)}))};n(17);var j=function(e){return Object(c.jsx)("form",{action:"#",className:"search-form",onSubmit:function(e){return e.preventDefault()},children:Object(c.jsx)("input",{className:"search-input",placeholder:e.placeholder,onChange:e.handleInput})})},h=n(7),b=n(8),d=n(2),f=n(10),p=n(9),O=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){console.log(Object(d.a)(e))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:this.handleClick,children:"button"})})}}]),n}(r.Component);var v=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),o=Object(u.a)(s,2),i=o[0],h=o[1];Object(r.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){a(e)})),document.querySelector(".search-input").focus()}),[]);var b=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Searc for Country"}),Object(c.jsx)(O,{}),Object(c.jsx)(j,{placeholder:"Search...",handleInput:function(e){h(e.target.value)}}),Object(c.jsx)("div",{className:"card-list",children:Object(c.jsx)(l,{countries:b})})]})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))},4:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.dc8ff182.chunk.js.map