(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),a=s(6),i=s.n(a),l=(s(13),s(3)),o=window.scrollTo(0,0),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"scrollHome":return{state:window.scrollTo({top:0,left:0,behavior:"smooth"})};case"scrollAbout":return{state:window.scrollTo({top:600,left:0,behavior:"smooth"})};case"scrollProjects":return{state:window.scrollTo({top:1100,left:0,behavior:"smooth"})};case"scrollContacts":return{state:window.scrollTo({top:2374,left:0,behavior:"smooth"})}}return e},j=s(1),d={scroll:r()},b=function(e,t){return{scroll:r(e.scroll,t)}},m=Object(c.createContext)(),h=JSON.parse(localStorage.getItem("ctx")),O=function(e){var t=e.children,s=Object(c.useReducer)(b,h||d),n=Object(l.a)(s,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){localStorage.setItem("ctx",JSON.stringify(a))}),[a]),Object(j.jsx)(m.Provider,{value:[a,i],children:t})},x=function(){return Object(c.useContext)(m)},p=s(7),u=s.p+"static/media/logo.fc2d0d03.png",g=function(){var e=x(),t=Object(l.a)(e,2),s=(t[0],t[1]);return Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{onClick:function(){s({type:"scrollHome"})},className:"logo",children:Object(j.jsx)("img",{src:u})}),Object(j.jsx)("div",{className:"menu-burguer",children:Object(j.jsx)(p.a,{className:"ioMenu"})}),Object(j.jsx)("nav",{className:"menu",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){s({type:"scrollHome"})},children:"Home"}),Object(j.jsx)("li",{onClick:function(){s({type:"scrollAbout"})},children:"Sobre"}),Object(j.jsx)("li",{onClick:function(){s({type:"scrollProjects"})},children:"Projetos"}),Object(j.jsx)("li",{onClick:function(){s({type:"scrollContacts"})},className:"key",children:"Contatos"})]})})]})},f=s.p+"static/media/codejs.e2751c12.jpg",y=s.p+"static/media/me.f316263f.jpg",v=s(8),N=function(){var e=x(),t=Object(l.a)(e,2),s=(t[0],t[1]);return Object(j.jsxs)("div",{onClick:function(){s({type:"scrollAbout"})},className:"buttonNext",children:[Object(j.jsx)("span",{children:"AVAN\xc7AR"}),Object(j.jsx)(v.a,{})]})},k=function(e){return Object(j.jsx)("div",{className:"box",children:Object(j.jsxs)("p",{children:[" ",e.name]})})},S=function(){return Object(j.jsxs)("form",{className:"form",children:[Object(j.jsx)("h1",{children:"Entre em contato:"}),Object(j.jsx)("label",{children:Object(j.jsx)("input",{placeholder:"Digite seu nome",type:"text"})}),Object(j.jsx)("label",{children:Object(j.jsx)("input",{placeholder:"Digite seu e-mail",type:"email"})}),Object(j.jsx)("label",{children:Object(j.jsx)("textarea",{placeholder:"Diga-nos, o que precisa?"})}),Object(j.jsx)("button",{type:"button",children:"Enviar"})]})},w=s.p+"static/media/calculator.76abc6e1.gif",I=s.p+"static/media/Todolist.b6b855db.gif",C=s.p+"static/media/WppClone.f215b041.gif",A=s.p+"static/media/javascriptlogo.7f875163.png",T=s.p+"static/media/nodejs.8e341cc0.png",E=s.p+"static/media/reactjs.2b5b91e6.png",P=s.p+"static/media/mongodb.068e7f0d.png",L=s(4),F=function(){var e=Object(c.useState)("selected"),t=Object(l.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),i=Object(l.a)(a,2),o=i[0],r=i[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),m=b[0],h=b[1],O=Object(c.useState)(""),x=Object(l.a)(O,2),p=x[0],u=x[1],g=Object(c.useState)(!0),v=Object(l.a)(g,2),F=(v[0],v[1]),J=Object(c.useState)(!1),R=Object(l.a)(J,2),W=(R[0],R[1]),B=Object(c.useState)(!1),D=Object(l.a)(B,2),H=(D[0],D[1]),M=Object(c.useState)(!1),K=Object(l.a)(M,2),V=(K[0],K[1]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("section",{children:Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{alt:"codeimage",className:"codeimg",src:f}),Object(j.jsxs)("div",{className:"stacks",children:[Object(j.jsxs)("h1",{children:["FULLSTACK WEB ",Object(j.jsx)("br",{})," DEVELOPER"]}),Object(j.jsxs)("aside",{children:[Object(j.jsx)("p",{children:"APPS"}),Object(j.jsx)("p",{children:"WEBSITES"}),Object(j.jsx)("p",{children:"SISTEMAS"})]}),Object(j.jsx)(N,{})]})]})}),Object(j.jsxs)("section",{className:"about",children:[Object(j.jsx)("div",{className:"box-content",children:Object(j.jsx)(k,{name:"SOBRE"})}),Object(j.jsxs)("article",{children:[Object(j.jsx)("img",{alt:"myimage",src:y,className:"me"}),Object(j.jsxs)("main",{children:[Object(j.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."}),Object(j.jsx)("p",{children:"It has survived not only five centuries, but also the leap into.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."})]})]})]}),Object(j.jsxs)("section",{children:[Object(j.jsx)("div",{className:"box-content",children:Object(j.jsx)(k,{name:"STACKS"})}),Object(j.jsxs)("div",{className:"imgProjects",children:[Object(j.jsx)("div",{className:"imgFile-stacks",children:Object(j.jsx)("img",{alt:"JS",className:"keyImg-stacks-js",src:A})}),Object(j.jsx)("div",{className:"imgFile-stacks",children:Object(j.jsx)("img",{alt:"JS",className:"keyImg-stacks",src:T})}),Object(j.jsx)("div",{className:"imgFile-stacks",children:Object(j.jsx)("img",{alt:"JS",className:"keyImg-stacks",src:E})}),Object(j.jsx)("div",{className:"imgFile-stacks",children:Object(j.jsx)("img",{alt:"JS",className:"keyImg-stacks-js",src:P})})]})]}),Object(j.jsxs)("section",{className:"projects",children:[Object(j.jsx)("div",{className:"box-content",children:Object(j.jsx)(k,{name:"PROJETOS"})}),Object(j.jsxs)("article",{className:"optionsProject",children:[Object(j.jsx)("p",{onClick:function(){""===s&&(n("selected"),r(""),h(""),u(""),F(!0),W(!1),H(!1),V(!1))},className:s,children:"TODOS"}),Object(j.jsx)("p",{onClick:function(){""===o&&(r("selected"),n(""),h(""),u(""),W(!0),F(!1),H(!1),V(!1))},className:o,children:"APPS"}),Object(j.jsx)("p",{onClick:function(){""===m&&(h("selected"),r(""),n(""),u(""),H(!0),W(!1),F(!1),V(!1))},className:m,children:"WEBSITES"}),Object(j.jsx)("p",{onClick:function(){""===p&&(u("selected"),r(""),h(""),n(""),V(!0),W(!1),H(!1),F(!1))},className:p,children:"SISTEMAS"})]}),Object(j.jsxs)("div",{className:"imgProjects",children:[Object(j.jsxs)("div",{className:"imgFile",children:[Object(j.jsx)("img",{alt:"WhatsAppClone",className:"keyImg",src:C}),Object(j.jsx)("span",{children:"WhatsApp Clone"})]}),Object(j.jsxs)("div",{className:"imgFile",children:[Object(j.jsx)("img",{alt:"Calculator",className:"keyImg",src:w}),Object(j.jsx)("span",{children:"Calculadora com Hist\xf3rico"})]}),Object(j.jsxs)("div",{className:"imgFile",children:[Object(j.jsx)("img",{alt:"Todolist",className:"keyImg",src:I}),Object(j.jsx)("span",{children:"Todolist"})]})]})]}),Object(j.jsxs)("section",{className:"contactSection",children:[Object(j.jsx)("div",{className:"box-content",children:Object(j.jsx)(k,{name:"CONTATO"})}),Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)(S,{}),Object(j.jsxs)("div",{className:"profile",children:[Object(j.jsx)("h1",{children:"Redes Sociais:"}),Object(j.jsx)("br",{}),Object(j.jsxs)("a",{target:"blank",href:"https://api.whatsapp.com/send?phone=5583986538971&text=Ol%C3%A1!",children:[Object(j.jsx)(L.c,{}),"   (83) 98653-8971"]}),Object(j.jsxs)("a",{target:"blank",href:"https://www.instagram.com/anderson.afonso.dev/",children:[Object(j.jsx)(L.b,{}),"   @anderson.afonso.dev"]}),Object(j.jsxs)("a",{target:"blank",href:"https://github.com/Ands97",children:[Object(j.jsx)(L.a,{}),"   https://github.com/Ands97"]})]}),Object(j.jsxs)("div",{className:"profile-mobile",children:[Object(j.jsx)("h1",{children:"Redes Sociais:"}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{target:"blank",href:"https://api.whatsapp.com/send?phone=5583986538971&text=Ol%C3%A1!",children:Object(j.jsx)(L.c,{className:"profile-icons"})}),Object(j.jsx)("a",{target:"blank",href:"https://www.instagram.com/anderson.afonso.dev/",children:Object(j.jsx)(L.b,{className:"profile-icons"})}),Object(j.jsx)("a",{target:"blank",href:"https://github.com/Ands97",children:Object(j.jsx)(L.a,{className:"profile-icons"})})]})]})]})]})},J=function(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("p",{children:"Todos os direiros reservados."}),Object(j.jsx)("p",{children:"Powered by: Anderson Afonso"})]})},R=function(){return Object(j.jsx)(O,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(g,{}),Object(j.jsx)("section",{children:Object(j.jsx)(F,{})}),Object(j.jsx)("footer",{children:Object(j.jsx)(J,{})})]})})};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.65569977.chunk.js.map