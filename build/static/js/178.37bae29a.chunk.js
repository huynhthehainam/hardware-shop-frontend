(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[178],{1801:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var s=t(17),c=t(222),l=t(6),n=t(1631),i=t.n(n),r=t(1),o=t(0);function d(e){var a=e.onComplete,t=Object(r.useState)(i.a.isMoment(e.endDate)?e.endDate:i()(e.endDate)),n=Object(s.a)(t,1)[0],d=Object(r.useState)({days:0,hours:0,minutes:0,seconds:0}),u=Object(s.a)(d,2),m=u[0],j=u[1],b=Object(r.useRef)(),f=Object(r.useCallback)((function(){window.clearInterval(b.current),a&&a()}),[a]),x=Object(r.useCallback)((function(){var e=i()(),a=n.diff(e,"seconds");if(a<0)f();else{var t=i.a.duration(a,"seconds");j({days:t.asDays().toFixed(0),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds()})}}),[f,n]);return Object(r.useEffect)((function(){return b.current=setInterval(x,1e3),function(){clearInterval(b.current)}}),[x]),Object(o.jsxs)("div",{className:Object(l.default)("flex items-center",e.className),children:[Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:m.days}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"days"})]}),Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:m.hours}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"hours"})]}),Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:m.minutes}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"minutes"})]}),Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(o.jsx)(c.a,{variant:"h4",className:"mb-4",children:m.seconds}),Object(o.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"seconds"})]})]})}d.defaultProps={endDate:i()().add(15,"days")};var u=Object(r.memo)(d)},3350:function(e,a,t){"use strict";t.r(a);var s=t(8),c=t(1801),l=t(1372),n=t(47),i=t(188),r=t(1336),o=t(1346),d=t(1348),u=t(1344),m=t(1335),j=t(222),b=t(76),f=t(21),x=t(0),h=b.e().shape({email:b.g().email("You must enter a valid email").required("You must enter a email")}),O={email:""};a.default=function(){var e=Object(n.useForm)({mode:"onChange",defaultValues:O,resolver:Object(i.a)(h)}),a=e.control,t=e.formState,b=e.handleSubmit,y=e.reset,p=t.isValid,v=t.dirtyFields,N=t.errors;return Object(x.jsx)("div",{className:"flex flex-col flex-auto items-center justify-center p-16 sm:p-32",children:Object(x.jsx)("div",{className:"flex flex-col items-center justify-center w-full",children:Object(x.jsx)(l.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},children:Object(x.jsx)(o.a,{className:"w-full max-w-384",children:Object(x.jsxs)(d.a,{className:"flex flex-col items-center justify-center p-16 sm:p-32 text-center",children:[Object(x.jsx)("img",{className:"w-128 m-32",src:"assets/images/logos/fuse.svg",alt:"logo"}),Object(x.jsx)(j.a,{variant:"subtitle1",className:"mb-16 font-semibold",children:"Hey! Thank you for checking out our app."}),Object(x.jsx)(j.a,{color:"textSecondary",className:"max-w-288",children:"It\u2019s not quite ready yet, but we are working hard and it will be ready in approximately:"}),Object(x.jsx)(c.a,{endDate:"2023-07-28",className:"my-48"}),Object(x.jsx)(u.a,{className:"w-48"}),Object(x.jsx)(j.a,{className:"font-semibold my-32 w-full",children:"If you would like to be notified when the app is ready, you can subscribe to our e-mail list."}),Object(x.jsxs)("form",{name:"subscribeForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:b((function(){y(O)})),children:[Object(x.jsx)(n.Controller,{name:"email",control:a,render:function(e){var a,t=e.field;return Object(x.jsx)(m.a,Object(s.a)(Object(s.a)({},t),{},{className:"mb-16",label:"Email",autoFocus:!0,type:"email",error:!!N.email,helperText:null===N||void 0===N||null===(a=N.email)||void 0===a?void 0:a.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(x.jsx)(r.a,{variant:"contained",color:"secondary",className:"w-224 mx-auto my-16","aria-label":"Subscribe",disabled:f.a.isEmpty(v)||!p,type:"submit",children:"Subscribe"})]})]})})})})})}}}]);