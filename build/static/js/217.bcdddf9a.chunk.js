(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[217],{3340:function(e,s,t){"use strict";t.r(s);var a=t(8),l=t(188),r=t(1353),c=t(1336),i=t(1346),o=t(1348),n=t(1327),m=t(1335),d=t(222),j=t(1372),u=t(47),f=t(43),b=t(76),x=t(21),h=t(0),p=b.e().shape({password:b.g().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum.")}),O={password:""};s.default=function(){var e=Object(u.useForm)({mode:"onChange",defaultValues:O,resolver:Object(l.a)(p)}),s=e.control,t=e.formState,b=e.handleSubmit,v=e.reset,w=t.isValid,y=t.dirtyFields,N=t.errors;return Object(h.jsx)("div",{className:"flex flex-col flex-auto items-center justify-center p-16 sm:p-32",children:Object(h.jsx)("div",{className:"flex flex-col items-center justify-center w-full",children:Object(h.jsx)(j.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},children:Object(h.jsx)(i.a,{className:"w-full max-w-sm",children:Object(h.jsxs)(o.a,{className:"flex flex-col items-center justify-center p-16 sm:p-24 md:p-32",children:[Object(h.jsxs)("div",{className:"min-w-full flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:items-center -mx-8",children:[Object(h.jsxs)("div",{className:"relative mx-8",children:[Object(h.jsx)(r.a,{className:"w-72 h-72",src:"assets/images/avatars/katherine.jpg"}),Object(h.jsx)(n.a,{className:"text-32 absolute right-0 bottom-0",color:"error",children:"lock"})]}),Object(h.jsxs)("div",{className:"mx-8 flex flex-col items-center sm:items-start",children:[Object(h.jsx)(d.a,{variant:"h6",className:"mb-4 font-semibold",children:"Your session is locked"}),Object(h.jsx)(d.a,{color:"textSecondary",className:"font-medium",children:"Due to inactivity, your session is locked. Enter your password to continue."})]})]}),Object(h.jsxs)("form",{name:"lockForm",noValidate:!0,className:"flex flex-col justify-center w-full mt-32",onSubmit:b((function(){v(O)})),children:[Object(h.jsx)(u.Controller,{name:"name",control:s,render:function(e){var s=e.field;return Object(h.jsx)(m.a,Object(a.a)(Object(a.a)({},s),{},{className:"mb-16",label:"Username",value:"Katherine",variant:"outlined",fullWidth:!0,disabled:!0}))}}),Object(h.jsx)(u.Controller,{name:"password",control:s,render:function(e){var s,t=e.field;return Object(h.jsx)(m.a,Object(a.a)(Object(a.a)({},t),{},{className:"mb-16",label:"Password",type:"password",error:!!N.password,helperText:null===N||void 0===N||null===(s=N.password)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(h.jsx)(c.a,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"Reset",disabled:x.a.isEmpty(y)||!w,type:"submit",children:"Unlock"})]}),Object(h.jsx)("div",{className:"flex flex-col items-center justify-center pt-32 pb-24",children:Object(h.jsx)(f.a,{className:"font-normal",to:"/pages/auth/login",children:"Are you not Katherine?"})})]})})})})})}}}]);