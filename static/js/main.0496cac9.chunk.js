(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),i=s(7),a=s.n(i),r=(s(13),s(3)),j="light",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"setTheme"===t.type?t.theme:e},d=s(4),m={name:"Visitante",email:"visitante@gmail.com"},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"setName":return Object(d.a)(Object(d.a)({},e),{},{name:t.name});case"setEmail":return Object(d.a)(Object(d.a)({},e),{},{email:t.email})}return e},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"increment":return e+1;case"decrement":return e-1;case"double":return 2*e;case"zero":return 0}return e},h=s(1),O={theme:o(),user:l(),count:b()},u=function(e,t){return{theme:o(e.theme,t),user:l(e.user,t),count:b(e.count,t)}},p=Object(c.createContext)(),x=JSON.parse(localStorage.getItem("ctx")),y=function(e){var t=e.children,s=Object(c.useReducer)(u,x||O),n=Object(r.a)(s,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){localStorage.setItem("ctx",JSON.stringify(i))}),[i]),Object(h.jsx)(p.Provider,{value:[i,a],children:t})},g=function(){return Object(c.useContext)(p)},f=s.p+"static/media/logo.fc2d0d03.png",v=function(){var e=g(),t=Object(r.a)(e,2);t[0],t[1];return Object(h.jsxs)("header",{children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("img",{src:f})}),Object(h.jsx)("nav",{className:"menu",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Home"}),Object(h.jsx)("li",{children:"Sobre"}),Object(h.jsx)("li",{children:"Projetos"}),Object(h.jsx)("li",{className:"key",children:"Contatos"})]})})]})},A=s.p+"static/media/codejs.e2751c12.jpg",H=s.p+"static/media/me.f316263f.jpg",D=s(8),k=function(){var e=g(),t=Object(r.a)(e,2);t[0],t[1];return Object(h.jsxs)("div",{className:"buttonNext",children:[Object(h.jsx)("span",{children:"AVAN\xc7AR"}),Object(h.jsx)(D.a,{})]})},I=function(e){return Object(h.jsx)("div",{className:"box",children:Object(h.jsxs)("p",{children:[" ",e.name]})})},P=function(){return Object(h.jsxs)("form",{className:"form",children:[Object(h.jsx)("h1",{children:"Entre em contato:"}),Object(h.jsx)("label",{children:Object(h.jsx)("input",{placeholder:"Digite seu nome",type:"text"})}),Object(h.jsx)("label",{children:Object(h.jsx)("input",{placeholder:"Digite seu e-mail",type:"email"})}),Object(h.jsx)("label",{children:Object(h.jsx)("textarea",{placeholder:"Diga-nos, o que precisa?"})}),Object(h.jsx)("button",{type:"button",children:"Enviar"})]})},w=s.p+"static/media/app1.a64a37cd.gif",z=s.p+"static/media/site1.430e76bc.jpg",N=s.p+"static/media/site2.6c2f7b8f.jpg",E=s.p+"static/media/system1.aeae509c.png",T=s(5),M=function(){var e=g(),t=Object(r.a)(e,2);t[0],t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("section",{children:Object(h.jsxs)("figure",{children:[Object(h.jsx)("img",{className:"codeimg",src:A}),Object(h.jsxs)("div",{className:"stacks",children:[Object(h.jsxs)("h1",{children:["FULLSTACK WEB ",Object(h.jsx)("br",{})," DEVELOPER"]}),Object(h.jsxs)("aside",{children:[Object(h.jsx)("p",{children:"APPS"}),Object(h.jsx)("p",{children:"WEBSITES"}),Object(h.jsx)("p",{children:"SISTEMAS"})]}),Object(h.jsx)(k,{})]})]})}),Object(h.jsxs)("section",{className:"about",children:[Object(h.jsx)("div",{className:"box-content",children:Object(h.jsx)(I,{name:"SOBRE"})}),Object(h.jsxs)("article",{children:[Object(h.jsx)("img",{src:H,className:"me"}),Object(h.jsxs)("main",{children:[Object(h.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."})]})]})]}),Object(h.jsxs)("section",{className:"projects",children:[Object(h.jsx)("div",{className:"box-content",children:Object(h.jsx)(I,{name:"PROJETOS"})}),Object(h.jsxs)("article",{className:"optionsProject",children:[Object(h.jsx)("p",{className:"selected",children:"TODOS"}),Object(h.jsx)("p",{children:"APPS"}),Object(h.jsx)("p",{children:"WEBSITES"}),Object(h.jsx)("p",{children:"SISTEMAS"})]}),Object(h.jsxs)("div",{className:"imgProjects",children:[Object(h.jsx)("img",{className:"keyImg",src:w}),Object(h.jsx)("img",{className:"keyImg",src:z}),Object(h.jsx)("img",{className:"keyImg",src:"data:image/png;base64,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"}),Object(h.jsx)("img",{className:"keyImg site2",src:N}),Object(h.jsx)("img",{className:"keyImg system1",src:E})]})]}),Object(h.jsxs)("section",{className:"contactSection",children:[Object(h.jsx)("div",{className:"box-content",children:Object(h.jsx)(I,{name:"CONTATO"})}),Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)(P,{}),Object(h.jsxs)("div",{className:"profile",children:[Object(h.jsx)("h1",{children:"Redes Sociais:"}),Object(h.jsx)("br",{}),Object(h.jsxs)("a",{target:"blank",href:"https://api.whatsapp.com/send?phone=5583986538971&text=Ol%C3%A1!",children:[Object(h.jsx)(T.c,{}),"   (83) 98653-8971"]}),Object(h.jsxs)("a",{target:"blank",href:"https://www.instagram.com/anderson.afonso.dev/",children:[Object(h.jsx)(T.b,{}),"   @anderson.afonso.dev"]}),Object(h.jsxs)("a",{target:"blank",href:"https://github.com/Ands97",children:[Object(h.jsx)(T.a,{}),"   https://github.com/Ands97"]})]})]})]})]})},Q=function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)("p",{children:"Todos os direiros reservados."}),Object(h.jsx)("p",{children:"Powered by: Anderson Afonso"})]})},C=function(){return Object(h.jsx)(y,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(v,{}),Object(h.jsx)("section",{children:Object(h.jsx)(M,{})}),Object(h.jsx)("footer",{children:Object(h.jsx)(Q,{})})]})})};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0496cac9.chunk.js.map