(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[197],{3231:function(e,t,a){"use strict";a.r(t);var s=a(168),c=a(222),r=a(0);t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a,{variant:"h4",className:"mb-40 font-700",children:"HEROKU Notes"}),Object(r.jsx)(c.a,{className:"mb-16",component:"p",children:"You may encounter some issues if you want to deploy fuse-react to heroku, here is the solution:"}),Object(r.jsxs)(c.a,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:["Use the"," ",Object(r.jsx)("a",{href:"https://github.com/mars/create-react-app-buildpack#user-content-quick-start",target:"_blank",rel:"noreferrer noopener",children:"mars/create-react-app"})," ","buildpack:"]}),Object(r.jsx)(s.a,{component:"pre",className:"mb-24",children:" heroku buildpacks:set mars/create-react-app "}),Object(r.jsx)(c.a,{className:"mb-16",component:"p",children:"the next build will be created with this official pack."}),Object(r.jsx)(c.a,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Install devDependencies:"}),Object(r.jsx)(s.a,{component:"pre",className:"mb-24",children:" heroku config:set NPM_CONFIG_PRODUCTION=false "}),Object(r.jsx)(c.a,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Push skeleton branch to master of heroku"}),Object(r.jsx)(s.a,{component:"pre",className:"mb-24",children:" git push heroku skeleton:master "})]})}}}]);