(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[163],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var r=a(98),n=a(4),c=a(54),i=a(14),o=a(6),s=a(1),l=a(1294),d=a(50),u=a(1377),b=a(41),p=a(15),j=a(0);var m=function(e){var t=Object(d.a)(),a=Object(p.useSelector)(Object(b.c)(t.palette.primary.main));return Object(j.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(j.jsx)(u.a,{theme:a,children:e.header})})},h=a(8),f=a(17),g=a(133),O=a(1374),x=a(1378);var v=function(e){var t=Object(d.a)(),a=Object(p.useSelector)(Object(b.c)(t.palette.primary.main));return Object(j.jsxs)(j.Fragment,{children:[e.header&&Object(j.jsx)(u.a,{theme:a,children:Object(j.jsx)("div",{className:Object(o.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(j.jsx)(c.default,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function C(e,t){var a=Object(s.useState)(!1),r=Object(f.a)(a,2),n=r[0],c=r[1];Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:i}}));var i=function(){c(!n)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O.a,{lgUp:"permanent"===e.variant,children:Object(j.jsx)(x.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return i()},disableSwipeToOpen:!0,classes:{root:Object(o.default)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(o.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(j.jsx)(v,Object(h.a)({},e))})}),"permanent"===e.variant&&Object(j.jsx)(O.a,{lgDown:!0,children:Object(j.jsx)(g.a,{variant:"permanent",className:Object(o.default)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:Object(o.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(j.jsx)(v,Object(h.a)({},e))})})]})}var S,w=Object(s.forwardRef)(C),P=Object(i.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:k,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:F,minHeight:F,maxHeight:F,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:N,minHeight:N,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:y,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:k,minHeight:k,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),y=240,k=200,N=64,F=k-N,T=Object(s.forwardRef)((function(e,t){var a=Object(s.useRef)(null),r=Object(s.useRef)(null),n=Object(s.useRef)(null),i=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(s.useImperativeHandle)(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(j.jsxs)(P,{className:Object(o.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[Object(j.jsx)("div",{className:"FusePageCarded-topBg"}),Object(j.jsxs)("div",{className:"flex container w-full",children:[d&&Object(j.jsx)(w,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n}),Object(j.jsxs)("div",{className:Object(o.default)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",i&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(j.jsx)(m,{header:e.header}),Object(j.jsxs)("div",{className:Object(o.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(j.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(j.jsx)(c.default,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),i&&Object(j.jsx)(w,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:n})]})]})]})}));T.defaultProps={};var R=Object(s.memo)(Object(i.a)(T)(S||(S=Object(r.a)([""]))))},1553:function(e,t,a){"use strict";var r=a(1385),n=Object(r.a)();t.a=n},3399:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(1390),c=a(2),i=a(13),o=a(1),s=a(6),l=(a(12),a(132)),d=a.n(l),u=a(3391),b=a(0),p=["name"],j=["children","className","clone","component"];function m(e,t){var a={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(a[r]=e[r])})),a}var h=a(190),f=a(3),g=a.n(f),O=a(7),x=a(37),v=a(89),C=a.n(v),S=Object(x.createAsyncThunk)("eCommerceApp/orders/getOrders",Object(O.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/e-commerce-app/orders");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),w=Object(x.createAsyncThunk)("eCommerceApp/orders/removeOrders",function(){var e=Object(O.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.dispatch,a.getState,e.next=3,C.a.post("/api/e-commerce-app/remove-orders",{orderIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),P=Object(x.createSlice)({name:"orders",initialState:{selectedOrder:null,searchText:"",orders:[]},reducers:{setSelectedOrder:function(e,t){e.selectedOrder=t.payload},setOrdersSearchText:{reducer:function(e,t){e.searchText=t.payload}}}}),y=P.actions,k=(y.setSelectedOrder,y.setOrdersSearchText),N=P.reducer,F=(0,a(37).combineReducers)({orders:N}),T=a(17),R=a(1327),H=a(765),I=a(198),D=a(1377),W=a(222),A=a(1372),B=a(15),z=a(41),E=a(128);var M=function(e){var t=Object(B.useDispatch)(),a=Object(o.useState)(""),r=Object(T.a)(a,2),n=r[0],c=r[1],i=Object(B.useSelector)(z.e),s=Object(E.a)((function(e){t(k(e))}),500);return Object(b.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsx)(R.a,{component:A.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"receipt"}),Object(b.jsx)(W.a,{component:A.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:"Orders"})]}),Object(b.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:Object(b.jsx)(D.a,{theme:i,children:Object(b.jsxs)(I.a,{component:A.a.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[Object(b.jsx)(R.a,{color:"action",children:"search"}),Object(b.jsx)(H.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:n,inputProps:{"aria-label":"Search"},onChange:function(e){c(e.target.value),s(e)}})]})})})]})},V=a(54),q=a(21),J=a(1465),U=a(1520),L=a(1524),$=a(1523),_=a(1678),G=a(1522),K=a(66),Q=a(322),X=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];var Y=function(e){return Object(b.jsx)("div",{className:Object(s.default)("inline text-12 font-semibold py-4 px-12 rounded-full truncate",q.a.find(X,{name:e.name}).color),children:e.name})},Z=a(1328),ee=a(1345),te=a(1342),ae=a(545),re=a(1331),ne=a(1299),ce=a(1677),ie=a(1337),oe=a(1553),se=a(1521),le=[{id:"id",align:"left",disablePadding:!1,label:"ID",sort:!0},{id:"reference",align:"left",disablePadding:!1,label:"Reference",sort:!0},{id:"customer",align:"left",disablePadding:!1,label:"Customer",sort:!0},{id:"total",align:"right",disablePadding:!1,label:"Total",sort:!0},{id:"payment",align:"left",disablePadding:!1,label:"Payment",sort:!0},{id:"status",align:"left",disablePadding:!1,label:"Status",sort:!0},{id:"date",align:"left",disablePadding:!1,label:"Date",sort:!0}];var de=function(e){var t=e.selectedOrderIds,a=t.length,r=Object(o.useState)(null),n=Object(T.a)(r,2),c=n[0],i=n[1],s=Object(B.useDispatch)();function l(){i(null)}return Object(b.jsx)(se.a,{children:Object(b.jsxs)(G.a,{className:"h-48 sm:h-64",children:[Object(b.jsxs)($.a,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[Object(b.jsx)(J.a,{indeterminate:a>0&&a<e.rowCount,checked:0!==e.rowCount&&a===e.rowCount,onChange:e.onSelectAllClick}),a>0&&Object(b.jsxs)(oe.a,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.paper}},children:[Object(b.jsx)(Z.a,{"aria-owns":c?"selectedOrdersMenu":null,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},size:"large",children:Object(b.jsx)(R.a,{children:"more_horiz"})}),Object(b.jsx)(ae.a,{id:"selectedOrdersMenu",anchorEl:c,open:Boolean(c),onClose:l,children:Object(b.jsx)(ne.a,{children:Object(b.jsxs)(re.a,{onClick:function(){s(w(t)),e.onMenuItemClick(),l()},children:[Object(b.jsx)(ee.a,{className:"min-w-40",children:Object(b.jsx)(R.a,{children:"delete"})}),Object(b.jsx)(te.a,{primary:"Remove"})]})})})]})]}),le.map((function(t){return Object(b.jsx)($.a,{className:"p-4 md:p-16",align:t.align,padding:t.disablePadding?"none":"normal",sortDirection:e.order.id===t.id&&e.order.direction,children:t.sort&&Object(b.jsx)(ie.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300,children:Object(b.jsx)(ce.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(a=t.id,function(t){e.onRequestSort(t,a)}),className:"font-semibold",children:t.label})})},t.id);var a}),this)]})})};var ue,be=Object(K.k)((function(e){var t=Object(B.useDispatch)(),a=Object(B.useSelector)((function(e){return e.orders.orders.orders})),r=Object(B.useSelector)((function(e){return e.orders.orders.searchText})),n=Object(o.useState)(!0),c=Object(T.a)(n,2),i=c[0],s=c[1],l=Object(o.useState)([]),d=Object(T.a)(l,2),u=d[0],p=d[1],j=Object(o.useState)(a),m=Object(T.a)(j,2),h=m[0],f=m[1],g=Object(o.useState)(0),O=Object(T.a)(g,2),x=O[0],v=O[1],C=Object(o.useState)(10),w=Object(T.a)(C,2),P=w[0],y=w[1],k=Object(o.useState)({direction:"asc",id:null}),N=Object(T.a)(k,2),F=N[0],R=N[1];return Object(o.useEffect)((function(){t(S()).then((function(){return s(!1)}))}),[t]),Object(o.useEffect)((function(){0!==r.length?v(0):f(a)}),[a,r]),i?Object(b.jsx)(Q.a,{}):0===h.length?Object(b.jsx)(A.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:Object(b.jsx)(W.a,{color:"textSecondary",variant:"h5",children:"There are no orders!"})}):Object(b.jsxs)("div",{className:"w-full flex flex-col",children:[Object(b.jsx)(V.default,{className:"flex-grow overflow-x-auto",children:Object(b.jsxs)(U.a,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[Object(b.jsx)(de,{selectedOrderIds:u,order:F,onSelectAllClick:function(e){e.target.checked?p(h.map((function(e){return e.id}))):p([])},onRequestSort:function(e,t){var a=t,r="desc";F.id===t&&"desc"===F.direction&&(r="asc"),R({direction:r,id:a})},rowCount:h.length,onMenuItemClick:function(){p([])}}),Object(b.jsx)(L.a,{children:q.a.orderBy(h,[function(e){switch(F.id){case"id":return parseInt(e.id,10);case"customer":return e.customer.firstName;case"payment":return e.payment.method;case"status":return e.status[0].name;default:return e[F.id]}}],[F.direction]).slice(x*P,x*P+P).map((function(t){var a=-1!==u.indexOf(t.id);return Object(b.jsxs)(G.a,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,onClick:function(a){return r=t,void e.history.push("/apps/e-commerce/orders/".concat(r.id));var r},children:[Object(b.jsx)($.a,{className:"w-40 md:w-64 text-center",padding:"none",children:Object(b.jsx)(J.a,{checked:a,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var a=u.indexOf(t),r=[];-1===a?r=r.concat(u,t):0===a?r=r.concat(u.slice(1)):a===u.length-1?r=r.concat(u.slice(0,-1)):a>0&&(r=r.concat(u.slice(0,a),u.slice(a+1))),p(r)}(0,t.id)}})}),Object(b.jsx)($.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.id}),Object(b.jsx)($.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.reference}),Object(b.jsx)($.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:"".concat(t.customer.firstName," ").concat(t.customer.lastName)}),Object(b.jsxs)($.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[Object(b.jsx)("span",{children:"$"}),t.total]}),Object(b.jsx)($.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.payment.method}),Object(b.jsx)($.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:Object(b.jsx)(Y,{name:t.status[0].name})}),Object(b.jsx)($.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.date})]},t.id)}))})]})}),Object(b.jsx)(_.a,{className:"flex-shrink-0 border-t-1",component:"div",count:h.length,rowsPerPage:P,page:x,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,t){v(t)},onRowsPerPageChange:function(e){y(e.target.value)}})]})})),pe=(ue=n.a,function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.name,n=Object(i.a)(a,p),l=r,h="function"===typeof e?function(t){return{root:function(a){return e(Object(c.a)({theme:t},a))}}}:{root:e},f=Object(u.a)(h,Object(c.a)({Component:ue,name:r||ue.displayName,classNamePrefix:l},n));e.filterProps&&(t=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var g=o.forwardRef((function(e,a){var r=e.children,n=e.className,l=e.clone,d=e.component,u=Object(i.a)(e,j),p=f(e),h=Object(s.default)(p.root,n),g=u;if(t&&(g=m(g,t)),l)return o.cloneElement(r,Object(c.a)({className:Object(s.default)(r.props.className,h)},g));if("function"===typeof r)return r(Object(c.a)({className:h},g));var O=d||ue;return Object(b.jsx)(O,Object(c.a)({ref:a,className:h},g,{children:r}))}));return d()(g,ue),g})((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(r.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136}),"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));t.default=Object(h.a)("orders",F)((function(){return Object(b.jsx)(pe,{header:Object(b.jsx)(M,{}),content:Object(b.jsx)(be,{}),innerScroll:!0})}))}}]);