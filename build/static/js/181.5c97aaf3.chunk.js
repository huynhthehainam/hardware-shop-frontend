(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[181],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var r=a(101),n=a(4),i=a(54),o=a(14),d=a(6),c=a(1),l=a(1294),s=a(51),u=a(1377),b=a(41),p=a(15),g=a(0);var h=function(e){var t=Object(s.a)(),a=Object(p.useSelector)(Object(b.c)(t.palette.primary.main));return Object(g.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(g.jsx)(u.a,{theme:a,children:e.header})})},f=a(8),j=a(17),m=a(133),O=a(1374),x=a(1378);var C=function(e){var t=Object(s.a)(),a=Object(p.useSelector)(Object(b.c)(t.palette.primary.main));return Object(g.jsxs)(g.Fragment,{children:[e.header&&Object(g.jsx)(u.a,{theme:a,children:Object(g.jsx)("div",{className:Object(d.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(g.jsx)(i.default,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function v(e,t){var a=Object(c.useState)(!1),r=Object(j.a)(a,2),n=r[0],i=r[1];Object(c.useImperativeHandle)(t,(function(){return{toggleSidebar:o}}));var o=function(){i(!n)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(O.a,{lgUp:"permanent"===e.variant,children:Object(g.jsx)(x.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return o()},disableSwipeToOpen:!0,classes:{root:Object(d.default)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(d.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(g.jsx)(C,Object(f.a)({},e))})}),"permanent"===e.variant&&Object(g.jsx)(O.a,{lgDown:!0,children:Object(g.jsx)(m.a,{variant:"permanent",className:Object(d.default)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:Object(d.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(g.jsx)(C,Object(f.a)({},e))})})]})}var S,F=Object(c.forwardRef)(v),P=Object(o.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:y,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:H,minHeight:H,maxHeight:H,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:w,minHeight:w,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:k,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:y,minHeight:y,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),k=240,y=200,w=64,H=y-w,N=Object(c.forwardRef)((function(e,t){var a=Object(c.useRef)(null),r=Object(c.useRef)(null),n=Object(c.useRef)(null),o=e.rightSidebarHeader||e.rightSidebarContent,s=e.leftSidebarHeader||e.leftSidebarContent;return Object(c.useImperativeHandle)(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(l.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(g.jsxs)(P,{className:Object(d.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[Object(g.jsx)("div",{className:"FusePageCarded-topBg"}),Object(g.jsxs)("div",{className:"flex container w-full",children:[s&&Object(g.jsx)(F,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n}),Object(g.jsxs)("div",{className:Object(d.default)("FusePageCarded-contentWrapper",s&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",o&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(g.jsx)(h,{header:e.header}),Object(g.jsxs)("div",{className:Object(d.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(g.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(g.jsx)(i.default,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),o&&Object(g.jsx)(F,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:n})]})]})]})}));N.defaultProps={};var R=Object(c.memo)(Object(o.a)(N)(S||(S=Object(r.a)([""]))))},3412:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(1390),i=a(191),o=a(14),d=a(160),c=(0,a(37).createSlice)({name:"units",initialState:{units:[]},reducers:{setUnits:function(e,t){e.units=t.payload}}}),l=(c.actions.setUnits,c.reducer),s=Object(d.d)({units:l}),u=a(0),b=Object(o.a)(n.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(r.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136}),"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));t.default=Object(i.a)("shops",s)((function(){return Object(u.jsx)(b,{innerScroll:!0})}))}}]);