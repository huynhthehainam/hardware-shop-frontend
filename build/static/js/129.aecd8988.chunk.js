(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[129],{1430:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(36),r=a(34);function o(e){return Object(n.a)("MuiAccordion",e)}var i=Object(r.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);t.a=i},1431:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(36),r=a(34);function o(e){return Object(n.a)("MuiAccordionSummary",e)}var i=Object(r.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);t.a=i},1432:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(36),r=a(34);function o(e){return Object(n.a)("MuiAccordionDetails",e)}var i=Object(r.a)("MuiAccordionDetails",["root"]);t.a=i},1497:function(e,t,a){"use strict";var n=a(1),r=n.createContext({});t.a=r},1569:function(e,t,a){"use strict";var n=a(543),r=a(17),o=a(4),i=a(13),s=a(2),c=a(1),d=(a(317),a(12),a(6)),l=a(38),u=a(14),b=a(24),p=a(773),f=a(199),m=a(1497),j=a(185),x=a(1430),h=a(0),O=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],v=Object(u.a)(f.a,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(o.a)({},"& .".concat(x.a.region),t.region),t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n={duration:a.transitions.duration.shortest};return t={position:"relative",transition:a.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:a.palette.divider,transition:a.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}}},Object(o.a)(t,"&.".concat(x.a.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(o.a)(t,"&.".concat(x.a.disabled),{backgroundColor:a.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,a=e.ownerState;return Object(s.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(o.a)({},"&.".concat(x.a.expanded),{margin:"16px 0"}))})),g=c.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiAccordion"}),o=a.children,u=a.className,f=a.defaultExpanded,g=void 0!==f&&f,y=a.disabled,w=void 0!==y&&y,R=a.disableGutters,N=void 0!==R&&R,S=a.expanded,C=a.onChange,k=a.square,A=void 0!==k&&k,q=a.TransitionComponent,M=void 0===q?p.a:q,G=a.TransitionProps,I=Object(i.a)(a,O),T=Object(j.a)({controlled:S,default:g,name:"Accordion",state:"expanded"}),P=Object(r.a)(T,2),V=P[0],W=P[1],B=c.useCallback((function(e){W(!V),C&&C(e,!V)}),[V,C,W]),E=c.Children.toArray(o),F=Object(n.a)(E),D=F[0],L=F.slice(1),H=c.useMemo((function(){return{expanded:V,disabled:w,disableGutters:N,toggle:B}}),[V,w,N,B]),J=Object(s.a)({},a,{square:A,disabled:w,disableGutters:N,expanded:V}),_=function(e){var t=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(l.a)(a,x.b,t)}(J);return Object(h.jsxs)(v,Object(s.a)({className:Object(d.default)(_.root,u),ref:t,ownerState:J,square:A},I,{children:[Object(h.jsx)(m.a.Provider,{value:H,children:D}),Object(h.jsx)(M,Object(s.a)({in:V,timeout:"auto"},G,{children:Object(h.jsx)("div",{"aria-labelledby":D.props.id,id:D.props["aria-controls"],role:"region",className:_.region,children:L})}))]}))}));t.a=g},1570:function(e,t,a){"use strict";var n=a(4),r=a(13),o=a(2),i=a(1),s=(a(12),a(6)),c=a(38),d=a(14),l=a(24),u=a(223),b=a(1497),p=a(1431),f=a(0),m=["children","className","expandIcon","focusVisibleClassName","onClick"],j=Object(d.a)(u.a,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme,r=e.ownerState,i={duration:a.transitions.duration.shortest};return Object(o.a)((t={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],i)},Object(n.a)(t,"&.".concat(p.a.focusVisible),{backgroundColor:a.palette.action.focus}),Object(n.a)(t,"&.".concat(p.a.disabled),{opacity:a.palette.action.disabledOpacity}),Object(n.a)(t,"&:hover:not(.".concat(p.a.disabled,")"),{cursor:"pointer"}),t),!r.disableGutters&&Object(n.a)({},"&.".concat(p.a.expanded),{minHeight:64}))})),x=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,a=e.ownerState;return Object(o.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(n.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(p.a.expanded),{margin:"20px 0"}))})),h=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(n.a)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(p.a.expanded),{transform:"rotate(180deg)"})})),O=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),n=a.children,d=a.className,u=a.expandIcon,O=a.focusVisibleClassName,v=a.onClick,g=Object(r.a)(a,m),y=i.useContext(b.a),w=y.disabled,R=void 0!==w&&w,N=y.disableGutters,S=y.expanded,C=y.toggle,k=Object(o.a)({},a,{expanded:S,disabled:R,disableGutters:N}),A=function(e){var t=e.classes,a=e.expanded,n=e.disabled,r=e.disableGutters,o={root:["root",a&&"expanded",n&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(c.a)(o,p.b,t)}(k);return Object(f.jsxs)(j,Object(o.a)({focusRipple:!1,disableRipple:!0,disabled:R,component:"div","aria-expanded":S,className:Object(s.default)(A.root,d),focusVisibleClassName:Object(s.default)(A.focusVisible,O),onClick:function(e){C&&C(e),v&&v(e)},ref:t,ownerState:k},g,{children:[Object(f.jsx)(x,{className:A.content,ownerState:k,children:n}),u&&Object(f.jsx)(h,{className:A.expandIconWrapper,ownerState:k,children:u})]}))}));t.a=O},1571:function(e,t,a){"use strict";var n=a(2),r=a(13),o=a(1),i=(a(12),a(6)),s=a(38),c=a(14),d=a(24),l=a(1432),u=a(0),b=["className"],p=Object(c.a)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),f=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),o=a.className,c=Object(r.a)(a,b),f=a,m=function(e){var t=e.classes;return Object(s.a)({root:["root"]},l.b,t)}(f);return Object(u.jsx)(p,Object(n.a)({className:Object(i.default)(m.root,o),ref:t,ownerState:f},c))}));t.a=f},3353:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(68),o=a(14),i=a(1569),s=a(1571),c=a(1570),d=a(1327),l=a(765),u=a(199),b=a(222),p=a(89),f=a.n(p),m=a(1372),j=a(1),x=a(0),h=Object(o.a)("div")((function(e){var t=e.theme;return{"& .FaqPage-header":{background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),color:t.palette.primary.contrastText},"& .FaqPage-panel":{margin:0,border:"none","&:before":{display:"none"},"&:first-of-type":{borderRadius:"20px 20px 0 0"},"&:last-of-type":{borderRadius:"0 0 20px 20px"},"&.Mui-expanded":{margin:"auto"}}}}));t.default=function(){var e=Object(j.useState)([]),t=Object(n.a)(e,2),a=t[0],o=t[1],p=Object(j.useState)([]),O=Object(n.a)(p,2),v=O[0],g=O[1],y=Object(j.useState)(null),w=Object(n.a)(y,2),R=w[0],N=w[1],S=Object(j.useState)(""),C=Object(n.a)(S,2),k=C[0],A=C[1];return Object(j.useEffect)((function(){f.a.get("/api/faq").then((function(e){o(e.data)}))}),[]),Object(j.useEffect)((function(){var e,t;g((e=a,0===(t=k).length?e:r.a.filterArrayByString(e,t)))}),[a,k]),Object(x.jsxs)(h,{className:"w-full flex flex-col flex-auto",children:[Object(x.jsxs)("div",{className:"FaqPage-header flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360",children:[Object(x.jsx)(m.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:Object(x.jsx)(b.a,{variant:"subtitle1",color:"inherit",className:"opacity-75 mt-8 sm:mt-16 mx-auto max-w-512 font-medium",children:"Frequently asked questions"})}),Object(x.jsx)(m.a.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0,transition:{delay:.1}},children:Object(x.jsx)(b.a,{color:"inherit",className:"text-32 sm:text-56 font-bold tracking-tight",children:"We're here to help"})}),Object(x.jsxs)(u.a,{className:"flex flex-shrink-0 items-center h-56 w-full max-w-md mt-16 sm:mt-32 rounded-16 shadow",children:[Object(x.jsx)(d.a,{color:"action",className:"mx-16",children:"search"}),Object(x.jsx)(l.a,{placeholder:"Search in faqs...",className:"",disableUnderline:!0,fullWidth:!0,inputProps:{"aria-label":"Search"},value:k,onChange:function(e){A(e.target.value)}})]})]}),Object(x.jsxs)("div",{className:"flex flex-col flex-1 flex-shrink-0 max-w-xl w-full mx-auto px-16 sm:px-24 py-24 sm:py-32",children:[0===v.length&&Object(x.jsx)("div",{className:"flex flex-auto items-center justify-center w-full h-full",children:Object(x.jsx)(b.a,{color:"textSecondary",variant:"h5",children:"There are no faqs!"})}),Object(j.useMemo)((function(){var e={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return v.length>0&&Object(x.jsx)(m.a.div,{variants:{show:{transition:{staggerChildren:.05}}},initial:"hidden",animate:"show",className:"shadow rounded-20",children:v.map((function(t){return Object(x.jsxs)(i.a,{component:m.a.div,variants:e,classes:{root:"FaqPage-panel shadow-0"},expanded:R===t.id,onChange:(a=t.id,function(e,t){N(!!t&&a)}),children:[Object(x.jsx)(c.a,{expandIcon:Object(x.jsx)(d.a,{children:"expand_more"}),children:Object(x.jsxs)("div",{className:"flex items-center py-4",children:[Object(x.jsx)(d.a,{color:"action",children:"help_outline"}),Object(x.jsx)(b.a,{className:"px-12 font-medium",children:t.question})]})}),Object(x.jsx)(s.a,{children:Object(x.jsx)(b.a,{className:"text-14 px-32 pb-8 -mt-8",children:t.answer})})]},t.id);var a}))})}),[v,R])]})]})}}}]);