(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[120],{1385:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(2),n=r(13),c=r(1),i=(r(12),r(6)),o=r(397),s=r(1365),d=r(1293),l=r(269),u=r(0),p=["className","component"];function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,r=Object(o.a)("div")(s.a),b=c.forwardRef((function(e,c){var o=Object(l.a)(t),s=Object(d.a)(e),b=s.className,j=s.component,m=void 0===j?"div":j,f=Object(n.a)(s,p);return Object(u.jsx)(r,Object(a.a)({as:m,ref:c,className:Object(i.default)(b,"MuiBox-root"),theme:o},f))}));return b}},1390:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));var a=r(98),n=r(4),c=r(54),i=r(14),o=r(6),s=r(1),d=r(1294),l=r(50),u=r(1377),p=r(41),b=r(15),j=r(0);var m=function(e){var t=Object(l.a)(),r=Object(b.useSelector)(Object(p.c)(t.palette.primary.main));return Object(j.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(j.jsx)(u.a,{theme:r,children:e.header})})},f=r(8),h=r(17),g=r(133),x=r(1374),O=r(1378);var v=function(e){var t=Object(l.a)(),r=Object(b.useSelector)(Object(p.c)(t.palette.primary.main));return Object(j.jsxs)(j.Fragment,{children:[e.header&&Object(j.jsx)(u.a,{theme:r,children:Object(j.jsx)("div",{className:Object(o.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(j.jsx)(c.default,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function C(e,t){var r=Object(s.useState)(!1),a=Object(h.a)(r,2),n=a[0],c=a[1];Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:i}}));var i=function(){c(!n)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.a,{lgUp:"permanent"===e.variant,children:Object(j.jsx)(O.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return i()},disableSwipeToOpen:!0,classes:{root:Object(o.default)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(o.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(j.jsx)(v,Object(f.a)({},e))})}),"permanent"===e.variant&&Object(j.jsx)(x.a,{lgDown:!0,children:Object(j.jsx)(g.a,{variant:"permanent",className:Object(o.default)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:Object(o.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(j.jsx)(v,Object(f.a)({},e))})})]})}var y,S=Object(s.forwardRef)(C),w=Object(i.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:k,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:F,minHeight:F,maxHeight:F,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:N,minHeight:N,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:P,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:k,minHeight:k,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),P=240,k=200,N=64,F=k-N,A=Object(s.forwardRef)((function(e,t){var r=Object(s.useRef)(null),a=Object(s.useRef)(null),n=Object(s.useRef)(null),i=e.rightSidebarHeader||e.rightSidebarContent,l=e.leftSidebarHeader||e.leftSidebarContent;return Object(s.useImperativeHandle)(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){r.current.toggleSidebar()},toggleRightSidebar:function(){a.current.toggleSidebar()}}})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(j.jsxs)(w,{className:Object(o.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[Object(j.jsx)("div",{className:"FusePageCarded-topBg"}),Object(j.jsxs)("div",{className:"flex container w-full",children:[l&&Object(j.jsx)(S,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:n}),Object(j.jsxs)("div",{className:Object(o.default)("FusePageCarded-contentWrapper",l&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",i&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(j.jsx)(m,{header:e.header}),Object(j.jsxs)("div",{className:Object(o.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(j.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(j.jsx)(c.default,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),i&&Object(j.jsx)(S,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n})]})]})]})}));A.defaultProps={};var T=Object(s.memo)(Object(i.a)(A)(y||(y=Object(a.a)([""]))))},1553:function(e,t,r){"use strict";var a=r(1385),n=Object(a.a)();t.a=n},1578:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return h}));var a,n=r(4),c=r(3),i=r.n(c),o=r(7),s=r(37),d=r(89),l=r.n(d),u=Object(s.createAsyncThunk)("eCommerceApp/orders/getOrders",Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/e-commerce-app/orders");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),p=Object(s.createAsyncThunk)("eCommerceApp/orders/removeOrders",function(){var e=Object(o.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,l.a.post("/api/e-commerce-app/remove-orders",{orderIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),b=Object(s.createEntityAdapter)({}),j=b.getSelectors((function(e){return e.eCommerceApp.orders})),m=j.selectAll,f=(j.selectById,Object(s.createSlice)({name:"eCommerceApp/orders",initialState:b.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(a={},Object(n.a)(a,u.fulfilled,b.setAll),Object(n.a)(a,p.fulfilled,(function(e,t){return b.removeMany(e,t.payload)})),a)})),h=f.actions.setOrdersSearchText;t.a=f.reducer},1579:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return h}));var a,n=r(4),c=r(3),i=r.n(c),o=r(7),s=r(37),d=r(89),l=r.n(d),u=Object(s.createAsyncThunk)("eCommerceApp/products/getProducts",Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/e-commerce-app/products");case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),p=Object(s.createAsyncThunk)("eCommerceApp/products/removeProducts",function(){var e=Object(o.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,r.getState,e.next=3,l.a.post("/api/e-commerce-app/remove-products",{productIds:t});case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),b=Object(s.createEntityAdapter)({}),j=b.getSelectors((function(e){return e.eCommerceApp.products})),m=j.selectAll,f=(j.selectById,Object(s.createSlice)({name:"eCommerceApp/products",initialState:b.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(a={},Object(n.a)(a,u.fulfilled,b.setAll),Object(n.a)(a,p.fulfilled,(function(e,t){return b.removeMany(e,t.payload)})),a)})),h=f.actions.setProductsSearchText;t.a=f.reducer},1596:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"d",(function(){return j})),r.d(t,"f",(function(){return m})),r.d(t,"c",(function(){return g})),r.d(t,"e",(function(){return x}));var a,n=r(4),c=r(8),i=r(3),o=r.n(i),s=r(7),d=r(37),l=r(89),u=r.n(l),p=r(68),b=Object(d.createAsyncThunk)("eCommerceApp/product/getProduct",function(){var e=Object(s.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/e-commerce-app/product",{params:t});case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",void 0===a?null:a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(d.createAsyncThunk)("eCommerceApp/product/removeProduct",function(){var e=Object(s.a)(o.a.mark((function e(t,r){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,a=r.getState,n=a().eCommerceApp.product.id,e.next=4,u.a.post("/api/e-commerce-app/remove-product",{id:n});case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),m=Object(d.createAsyncThunk)("eCommerceApp/product/saveProduct",function(){var e=Object(s.a)(o.a.mark((function e(t,r){var a,n,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.dispatch,a=r.getState,n=a().eCommerceApp.product,e.next=4,u.a.post("/api/e-commerce-app/product/save",Object(c.a)(Object(c.a)({},n),t));case 4:return i=e.sent,e.next=7,i.data;case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),f=Object(d.createSlice)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:function(){return null},newProduct:{reducer:function(e,t){return t.payload},prepare:function(e){return{payload:{id:p.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(a={},Object(n.a)(a,b.fulfilled,(function(e,t){return t.payload})),Object(n.a)(a,m.fulfilled,(function(e,t){return t.payload})),Object(n.a)(a,j.fulfilled,(function(e,t){return null})),a)}),h=f.actions,g=h.newProduct,x=h.resetProduct;t.a=f.reducer},1626:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return j}));var a,n=r(4),c=r(3),i=r.n(c),o=r(7),s=r(37),d=r(89),l=r.n(d),u=Object(s.createAsyncThunk)("eCommerceApp/order/getOrder",function(){var e=Object(o.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/e-commerce-app/order",{params:t});case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",void 0===a?null:a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(s.createAsyncThunk)("eCommerceApp/order/saveOrder",function(){var e=Object(o.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/api/e-commerce-app/order/save",t);case 2:return r=e.sent,e.next=5,r.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(s.createSlice)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:function(){return null}},extraReducers:(a={},Object(n.a)(a,u.fulfilled,(function(e,t){return t.payload})),Object(n.a)(a,p.fulfilled,(function(e,t){return t.payload})),a)}),j=b.actions.resetOrder;t.a=b.reducer},1639:function(e,t,r){"use strict";var a=r(160),n=r(1626),c=r(1578),i=r(1596),o=r(1579),s=Object(a.d)({products:o.a,product:i.a,orders:c.a,order:n.a});t.a=s},3406:function(e,t,r){"use strict";r.r(t);var a=r(4),n=r(1390),c=r(190),i=r(14),o=r(1639),s=r(1336),d=r(1327),l=r(765),u=r(198),p=r(1377),b=r(222),j=r(1372),m=r(15),f=r(43),h=r(41),g=r(1579),x=r(0);var O=function(e){var t=Object(m.useDispatch)(),r=Object(m.useSelector)((function(e){return e.eCommerceApp.products.searchText})),a=Object(m.useSelector)(h.e);return Object(x.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)(d.a,{component:j.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"shopping_basket"}),Object(x.jsx)(b.a,{component:j.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"hidden sm:flex text-16 md:text-24 mx-12 font-semibold",children:"Products"})]}),Object(x.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:Object(x.jsx)(p.a,{theme:a,children:Object(x.jsxs)(u.a,{component:j.a.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[Object(x.jsx)(d.a,{color:"action",children:"search"}),Object(x.jsx)(l.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:r,inputProps:{"aria-label":"Search"},onChange:function(e){return t(Object(g.e)(e))}})]})})}),Object(x.jsx)(j.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(x.jsxs)(s.a,{component:f.a,to:"/apps/e-commerce/products/new",className:"whitespace-nowrap",variant:"contained",color:"secondary",children:[Object(x.jsx)("span",{className:"hidden sm:flex",children:"Add New Product"}),Object(x.jsx)("span",{className:"flex sm:hidden",children:"New"})]})})]})},v=r(17),C=r(54),y=r(21),S=r(1465),w=r(1520),P=r(1524),k=r(1523),N=r(1678),F=r(1522),A=r(6),T=r(1),I=r(66),R=r(322),H=r(1328),B=r(1345),D=r(1342),W=r(545),q=r(1331),M=r(1299),z=r(1677),E=r(1337),V=r(1553),_=r(1521),L=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"categories",align:"left",disablePadding:!1,label:"Category",sort:!0},{id:"priceTaxIncl",align:"right",disablePadding:!1,label:"Price",sort:!0},{id:"quantity",align:"right",disablePadding:!1,label:"Quantity",sort:!0},{id:"active",align:"right",disablePadding:!1,label:"Active",sort:!0}];var U=function(e){var t=e.selectedProductIds,r=t.length,a=Object(T.useState)(null),n=Object(v.a)(a,2),c=n[0],i=n[1],o=Object(m.useDispatch)();function s(){i(null)}return Object(x.jsx)(_.a,{children:Object(x.jsxs)(F.a,{className:"h-48 sm:h-64",children:[Object(x.jsxs)(k.a,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[Object(x.jsx)(S.a,{indeterminate:r>0&&r<e.rowCount,checked:0!==e.rowCount&&r===e.rowCount,onChange:e.onSelectAllClick}),r>0&&Object(x.jsxs)(V.a,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.paper}},children:[Object(x.jsx)(H.a,{"aria-owns":c?"selectedProductsMenu":null,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},size:"large",children:Object(x.jsx)(d.a,{children:"more_horiz"})}),Object(x.jsx)(W.a,{id:"selectedProductsMenu",anchorEl:c,open:Boolean(c),onClose:s,children:Object(x.jsx)(M.a,{children:Object(x.jsxs)(q.a,{onClick:function(){o(Object(g.c)(t)),e.onMenuItemClick(),s()},children:[Object(x.jsx)(B.a,{className:"min-w-40",children:Object(x.jsx)(d.a,{children:"delete"})}),Object(x.jsx)(D.a,{primary:"Remove"})]})})})]})]}),L.map((function(t){return Object(x.jsx)(k.a,{className:"p-4 md:p-16",align:t.align,padding:t.disablePadding?"none":"normal",sortDirection:e.order.id===t.id&&e.order.direction,children:t.sort&&Object(x.jsx)(E.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300,children:Object(x.jsx)(z.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(r=t.id,function(t){e.onRequestSort(t,r)}),className:"font-semibold",children:t.label})})},t.id);var r}),this)]})})};var J=Object(I.k)((function(e){var t=Object(m.useDispatch)(),r=Object(m.useSelector)(g.d),a=Object(m.useSelector)((function(e){return e.eCommerceApp.products.searchText})),n=Object(T.useState)(!0),c=Object(v.a)(n,2),i=c[0],o=c[1],s=Object(T.useState)([]),l=Object(v.a)(s,2),u=l[0],p=l[1],f=Object(T.useState)(r),h=Object(v.a)(f,2),O=h[0],I=h[1],H=Object(T.useState)(0),B=Object(v.a)(H,2),D=B[0],W=B[1],q=Object(T.useState)(10),M=Object(v.a)(q,2),z=M[0],E=M[1],V=Object(T.useState)({direction:"asc",id:null}),_=Object(v.a)(V,2),L=_[0],J=_[1];return Object(T.useEffect)((function(){t(Object(g.b)()).then((function(){return o(!1)}))}),[t]),Object(T.useEffect)((function(){0!==a.length?(I(y.a.filter(r,(function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))),W(0)):I(r)}),[r,a]),i?Object(x.jsx)(R.a,{}):0===O.length?Object(x.jsx)(j.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:Object(x.jsx)(b.a,{color:"textSecondary",variant:"h5",children:"There are no products!"})}):Object(x.jsxs)("div",{className:"w-full flex flex-col",children:[Object(x.jsx)(C.default,{className:"flex-grow overflow-x-auto",children:Object(x.jsxs)(w.a,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[Object(x.jsx)(U,{selectedProductIds:u,order:L,onSelectAllClick:function(e){e.target.checked?p(O.map((function(e){return e.id}))):p([])},onRequestSort:function(e,t){var r=t,a="desc";L.id===t&&"desc"===L.direction&&(a="asc"),J({direction:a,id:r})},rowCount:O.length,onMenuItemClick:function(){p([])}}),Object(x.jsx)(P.a,{children:y.a.orderBy(O,[function(e){return"categories"===L.id?e.categories[0]:e[L.id]}],[L.direction]).slice(D*z,D*z+z).map((function(t){var r=-1!==u.indexOf(t.id);return Object(x.jsxs)(F.a,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,onClick:function(r){return a=t,void e.history.push("/apps/e-commerce/products/".concat(a.id,"/").concat(a.handle));var a},children:[Object(x.jsx)(k.a,{className:"w-40 md:w-64 text-center",padding:"none",children:Object(x.jsx)(S.a,{checked:r,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var r=u.indexOf(t),a=[];-1===r?a=a.concat(u,t):0===r?a=a.concat(u.slice(1)):r===u.length-1?a=a.concat(u.slice(0,-1)):r>0&&(a=a.concat(u.slice(0,r),u.slice(r+1))),p(a)}(0,t.id)}})}),Object(x.jsx)(k.a,{className:"w-52 px-4 md:px-0",component:"th",scope:"row",padding:"none",children:t.images.length>0&&t.featuredImageId?Object(x.jsx)("img",{className:"w-full block rounded",src:y.a.find(t.images,{id:t.featuredImageId}).url,alt:t.name}):Object(x.jsx)("img",{className:"w-full block rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:t.name})}),Object(x.jsx)(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.name}),Object(x.jsx)(k.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:t.categories.join(", ")}),Object(x.jsxs)(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[Object(x.jsx)("span",{children:"$"}),t.priceTaxIncl]}),Object(x.jsxs)(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[t.quantity,Object(x.jsx)("i",{className:Object(A.default)("inline-block w-8 h-8 rounded mx-8",t.quantity<=5&&"bg-red",t.quantity>5&&t.quantity<=25&&"bg-orange",t.quantity>25&&"bg-green")})]}),Object(x.jsx)(k.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:t.active?Object(x.jsx)(d.a,{className:"text-green text-20",children:"check_circle"}):Object(x.jsx)(d.a,{className:"text-red text-20",children:"remove_circle"})})]},t.id)}))})]})}),Object(x.jsx)(N.a,{className:"flex-shrink-0 border-t-1",component:"div",count:O.length,rowsPerPage:z,page:D,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,t){W(t)},onRowsPerPageChange:function(e){E(e.target.value)}})]})})),G=Object(i.a)(n.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(a.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136}),"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));t.default=Object(c.a)("eCommerceApp",o.a)((function(){return Object(x.jsx)(G,{header:Object(x.jsx)(O,{}),content:Object(x.jsx)(J,{}),innerScroll:!0})}))}}]);