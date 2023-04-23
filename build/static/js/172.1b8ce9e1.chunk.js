(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[172],{1395:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var r=a(36),o=a(34);function c(e){return Object(r.a)("MuiCheckbox",e)}var n=Object(o.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);t.a=n},1465:function(e,t,a){"use strict";var r=a(4),o=a(13),c=a(2),n=a(1),i=(a(12),a(38)),s=a(58),l=a(321),d=a(125),m=a(0),j=Object(d.a)(Object(m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(d.a)(Object(m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=Object(d.a)(Object(m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(18),f=a(24),x=a(14),h=a(1395),O=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],v=Object(x.a)(l.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat(Object(p.a)(a.color))]]}})((function(e){var t,a=e.theme,o=e.ownerState;return Object(c.a)({color:a.palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===o.color?a.palette.action.active:a.palette[o.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},Object(r.a)(t,"&.".concat(h.a.checked,", &.").concat(h.a.indeterminate),{color:a.palette[o.color].main}),Object(r.a)(t,"&.".concat(h.a.disabled),{color:a.palette.action.disabled}),t))})),w=Object(m.jsx)(u,{}),y=Object(m.jsx)(j,{}),g=Object(m.jsx)(b,{}),C=n.forwardRef((function(e,t){var a,r,s=Object(f.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?w:l,j=s.color,u=void 0===j?"primary":j,b=s.icon,x=void 0===b?y:b,C=s.indeterminate,N=void 0!==C&&C,k=s.indeterminateIcon,S=void 0===k?g:k,z=s.inputProps,P=s.size,R=void 0===P?"medium":P,T=Object(o.a)(s,O),M=N?S:x,q=N?S:d,E=Object(c.a)({},s,{color:u,indeterminate:N,size:R}),F=function(e){var t=e.classes,a=e.indeterminate,r=e.color,o={root:["root",a&&"indeterminate","color".concat(Object(p.a)(r))]},n=Object(i.a)(o,h.b,t);return Object(c.a)({},t,n)}(E);return Object(m.jsx)(v,Object(c.a)({type:"checkbox",inputProps:Object(c.a)({"data-indeterminate":N},z),icon:n.cloneElement(M,{fontSize:null!=(a=M.props.fontSize)?a:R}),checkedIcon:n.cloneElement(q,{fontSize:null!=(r=q.props.fontSize)?r:R}),ownerState:E,ref:t},T,{classes:F}))}));t.a=C},3346:function(e,t,a){"use strict";a.r(t);var r=a(8),o=a(188),c=a(14),n=a(58),i=a(770),s=a(1372),l=a(47),d=a(1336),m=a(1346),j=a(1348),u=a(1465),b=a(767),p=a(1333),f=a(1335),x=a(222),h=a(43),O=a(76),v=a(21),w=a(0),y=Object(c.a)("div")((function(e){var t=e.theme;return{"& .Register3-leftSection":{},"& .Register3-rightSection":{background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(Object(n.b)(t.palette.primary.dark,.5)," 100%)"),color:t.palette.primary.contrastText}}})),g=O.e().shape({name:O.g().required("You must enter your name"),email:O.g().email("You must enter a valid email").required("You must enter a email"),password:O.g().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum."),passwordConfirm:O.g().oneOf([O.f("password"),null],"Passwords must match"),acceptTermsConditions:O.c().oneOf([!0],"The terms and conditions must be accepted.")}),C={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1};t.default=function(){var e=Object(l.useForm)({mode:"onChange",defaultValues:C,resolver:Object(o.a)(g)}),t=e.control,a=e.formState,c=e.handleSubmit,n=e.reset,O=a.isValid,N=a.dirtyFields,k=a.errors;return Object(w.jsx)(y,{className:"flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24",children:Object(w.jsxs)(s.a.div,{initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},className:"flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden",children:[Object(w.jsxs)(m.a,{className:"Register3-leftSection  flex flex-col w-full max-w-sm items-center justify-center shadow-0",square:!0,children:[Object(w.jsxs)(j.a,{className:"flex flex-col items-center justify-center w-full py-96 max-w-320",children:[Object(w.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.2}},children:Object(w.jsxs)("div",{className:"flex items-center mb-48",children:[Object(w.jsx)("img",{className:"logo-icon w-48",src:"assets/images/logos/fuse.svg",alt:"logo"}),Object(w.jsx)("div",{className:"border-l-1 mr-4 w-1 h-40"}),Object(w.jsxs)("div",{children:[Object(w.jsx)(x.a,{className:"text-24 font-semibold logo-text",color:"inherit",children:"FUSE"}),Object(w.jsx)(x.a,{className:"text-16 tracking-widest -mt-8 font-700",color:"textSecondary",children:"REACT"})]})]})}),Object(w.jsxs)("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full",onSubmit:c((function(){n(C)})),children:[Object(w.jsx)(l.Controller,{name:"name",control:t,render:function(e){var t,a=e.field;return Object(w.jsx)(f.a,Object(r.a)(Object(r.a)({},a),{},{className:"mb-16",label:"Name",autoFocus:!0,type:"name",error:!!k.name,helperText:null===k||void 0===k||null===(t=k.name)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsx)(l.Controller,{name:"email",control:t,render:function(e){var t,a=e.field;return Object(w.jsx)(f.a,Object(r.a)(Object(r.a)({},a),{},{className:"mb-16",label:"Email",type:"email",error:!!k.email,helperText:null===k||void 0===k||null===(t=k.email)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsx)(l.Controller,{name:"password",control:t,render:function(e){var t,a=e.field;return Object(w.jsx)(f.a,Object(r.a)(Object(r.a)({},a),{},{className:"mb-16",label:"Password",type:"password",error:!!k.password,helperText:null===k||void 0===k||null===(t=k.password)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsx)(l.Controller,{name:"passwordConfirm",control:t,render:function(e){var t,a=e.field;return Object(w.jsx)(f.a,Object(r.a)(Object(r.a)({},a),{},{className:"mb-16",label:"Password (Confirm)",type:"password",error:!!k.passwordConfirm,helperText:null===k||void 0===k||null===(t=k.passwordConfirm)||void 0===t?void 0:t.message,variant:"outlined",required:!0,fullWidth:!0}))}}),Object(w.jsx)(l.Controller,{name:"acceptTermsConditions",control:t,render:function(e){var t,a=e.field;return Object(w.jsxs)(b.a,{className:"items-center",error:!!k.acceptTermsConditions,children:[Object(w.jsx)(p.a,{label:"I read and accept terms and conditions",control:Object(w.jsx)(u.a,Object(r.a)({},a))}),Object(w.jsx)(i.a,{children:null===k||void 0===k||null===(t=k.acceptTermsConditions)||void 0===t?void 0:t.message})]})}}),Object(w.jsx)(d.a,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16","aria-label":"Register",disabled:v.a.isEmpty(N)||!O,type:"submit",children:"Create an account"})]})]}),Object(w.jsxs)("div",{className:"flex flex-col items-center justify-center pb-32",children:[Object(w.jsx)("span",{className:"font-normal",children:"Already have an account?"}),Object(w.jsx)(h.a,{className:"font-normal",to:"/pages/auth/login-3",children:"Login"})]})]}),Object(w.jsx)("div",{className:"Register3-rightSection hidden md:flex flex-1 items-center justify-center p-64",children:Object(w.jsxs)("div",{className:"max-w-320",children:[Object(w.jsx)(s.a.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.2}},children:Object(w.jsxs)(x.a,{color:"inherit",className:"text-32 sm:text-44 font-semibold leading-tight",children:["Welcome ",Object(w.jsx)("br",{}),"to the ",Object(w.jsx)("br",{})," FUSE React!"]})}),Object(w.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:Object(w.jsx)(x.a,{variant:"subtitle1",color:"inherit",className:"mt-32 font-medium",children:"Powerful and professional admin template for Web Applications, CRM, CMS, Admin Panels and more."})})]})})]})})}}}]);