(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[127],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a(101),r=a(4),c=a(54),i=a(14),o=a(6),s=a(1),l=a(1294),d=a(51),u=a(1377),b=a(41),j=a(15),m=a(0);var p=function(e){var t=Object(d.a)(),a=Object(j.useSelector)(Object(b.c)(t.palette.primary.main));return Object(m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(m.jsx)(u.a,{theme:a,children:e.header})})},O=a(8),h=a(17),f=a(133),x=a(1374),v=a(1378);var g=function(e){var t=Object(d.a)(),a=Object(j.useSelector)(Object(b.c)(t.palette.primary.main));return Object(m.jsxs)(m.Fragment,{children:[e.header&&Object(m.jsx)(u.a,{theme:a,children:Object(m.jsx)("div",{className:Object(o.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(m.jsx)(c.default,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function C(e,t){var a=Object(s.useState)(!1),n=Object(h.a)(a,2),r=n[0],c=n[1];Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:i}}));var i=function(){c(!r)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x.a,{lgUp:"permanent"===e.variant,children:Object(m.jsx)(v.a,{variant:"temporary",anchor:e.position,open:r,onOpen:function(e){},onClose:function(e){return i()},disableSwipeToOpen:!0,classes:{root:Object(o.default)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(o.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(m.jsx)(g,Object(O.a)({},e))})}),"permanent"===e.variant&&Object(m.jsx)(x.a,{lgDown:!0,children:Object(m.jsx)(f.a,{variant:"permanent",className:Object(o.default)("FusePageCarded-sidebarWrapper",e.variant),open:r,classes:{paper:Object(o.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(m.jsx)(g,Object(O.a)({},e))})})]})}var E,S=Object(s.forwardRef)(C),N=Object(i.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:I,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:T,minHeight:T,maxHeight:T,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:w,minHeight:w,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:P,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:I,minHeight:I,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(r.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),P=240,I=200,w=64,T=I-w,L=Object(s.forwardRef)((function(e,t){var a=Object(s.useRef)(null),n=Object(s.useRef)(null),r=Object(s.useRef)(null),i=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(s.useImperativeHandle)(t,(function(){return{rootRef:r,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(m.jsxs)(N,{className:Object(o.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:r,children:[Object(m.jsx)("div",{className:"FusePageCarded-topBg"}),Object(m.jsxs)("div",{className:"flex container w-full",children:[d&&Object(m.jsx)(S,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:r}),Object(m.jsxs)("div",{className:Object(o.default)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",i&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(m.jsx)(p,{header:e.header}),Object(m.jsxs)("div",{className:Object(o.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(m.jsx)(c.default,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),i&&Object(m.jsx)(S,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:n,rootRef:r})]})]})]})}));L.defaultProps={};var _=Object(s.memo)(Object(i.a)(L)(E||(E=Object(n.a)([""]))))},1664:function(e,t,a){"use strict";t.a={THUMBNAIL_ASSET_TYPE:"thumbnail",SLIDE_ASSET_TYPE:"slide",NEW_MODE:"new",UPDATE_MODE:"update",REVIEW_MODE:"review"}},1694:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return u})),a.d(t,"f",(function(){return b}));var n=a(55),r=a(37),c=r.createSlice,i=(0,r.createAsyncThunk)("invoices/invoices/getInvoices",(function(e,t){var a=t.dispatch,r=t.getState;return new Promise((function(e,t){var c=r().invoices.invoices.page,i=r().invoices.invoices.rowsPerPage,o=r().invoices.invoices,s=o.searchText,l=o.order;n.a.get(n.c.getInvoices,{params:{pageIndex:c,pageSize:i,search:s,sortFieldName:l.id,isSortAscending:"asc"===l.direction}}).then((function(t){a(m(t.data.data)),a(j(t.data.totalItems)),e()}))}))})),o=c({initialState:{searchText:"",data:[],order:{id:"code",direction:"asc"},totalRecords:0,rowsPerPage:5,page:0},name:"invoices",reducers:{resetState:function(e,t){},setTotalRecords:function(e,t){e.totalRecords=t.payload},setData:function(e,t){e.data=t.payload},setInvoiceSearchText:function(e,t){e.searchText=t.payload},setOrder:function(e,t){e.order=t.payload},setPage:function(e,t){e.page=t.payload},setRowsPerPage:function(e,t){e.rowsPerPage=t.payload}}}),s=o.actions,l=(s.resetState,s.setInvoiceSearchText),d=s.setOrder,u=s.setPage,b=s.setRowsPerPage,j=s.setTotalRecords,m=s.setData;t.a=o.reducer},1695:function(e,t,a){"use strict";a.d(t,"d",(function(){return d})),a.d(t,"f",(function(){return u})),a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return j})),a.d(t,"e",(function(){return m})),a.d(t,"g",(function(){return p})),a.d(t,"i",(function(){return x})),a.d(t,"h",(function(){return v}));var n=a(8),r=a(55),c=a(540),i=a(1664),o=a(37),s=o.createSlice,l=o.createAsyncThunk,d=l("invoices/createUpdateInvoice/getCustomers",(function(e,t){var a=t.dispatch;return new Promise((function(e,t){r.a.get(r.c.getCustomers).then((function(t){var n=t.data.data;a(f(n)),e()}))}))})),u=l("invoices/createUpdateInvoice/getProducts",(function(e,t){var a=t.dispatch;return new Promise((function(e,t){Object(c.i)().then((function(t){a(g(t)),e();var r=t.map((function(e){return new Promise((function(t){Object(c.f)(e.id).then((function(a){var r=Object(n.a)({},e);r.thumbnail=a,t(r)}))}))}));Promise.all(r).then((function(e){a(g(e))}))}))}))})),b=l("invoices/createUpdateInvoice/createCustomer",(function(e,t){t.dispatch;return e.phone&&""!==e.phone&&(e.phone="+84".concat(e.phone)),new Promise((function(t,a){r.a.post(r.c.createCustomer,e).then((function(e){t()}))}))})),j=l("invoices/createUpdateInvoice/createInvoice",(function(e,t){t.dispatch,t.getState;return new Promise((function(t,a){r.a.post(r.c.createInvoice,e).then((function(e){t(e.data.data)})).catch((function(e){a()}))}))})),m=l("invoices/createUpdateInvoice/getInvoiceById",(function(e,t){var a=t.dispatch;t.getState;return new Promise((function(t,n){r.a.get(r.c.getInvoiceById(e)).then((function(e){var n=e.data.data,r={id:n.id,customer:{id:n.customerId,name:n.customerName,phone:n.customerPhone,address:n.customerAddress,phonePrefix:n.customerPhonePrefix},code:"",date:n.createdDate,customerDebt:n.debt,totalCost:n.totalCost,deposit:n.deposit,rest:n.rest,details:n.details.map((function(e){return{productId:e.productId,description:e.description,quantity:e.quantity,originalPrice:e.originalPrice,price:e.price,productName:"".concat(e.productName," | ").concat(e.unitName),totalCost:e.totalCost}}))};a(C(r)),t()}))}))})),p=l("invoices/createUpdateInvoice/restoreInvoiceById",(function(e,t){var a=t.dispatch;t.getState;return new Promise((function(t,n){r.a.post(r.c.restoreInvoiceById(e)).then((function(e){a(v(i.a.NEW_MODE)),t()}))}))})),O=s({initialState:{customers:[],invoice:{},mode:i.a.NEW_MODE,products:[]},name:"createUpdateInvoice",reducers:{resetState:function(e,t){},setCustomers:function(e,t){e.customers=t.payload},setProducts:function(e,t){e.products=t.payload},setInvoice:function(e,t){e.invoice=t.payload},setNewInvoice:function(e,t){e.invoice={customer:null,code:"",date:new Date,customerDebt:0,totalCost:0,deposit:0,rest:0,details:[]}},setMode:function(e,t){e.mode=t.payload}}}),h=O.actions,f=(h.resetState,h.setCustomers),x=h.setNewInvoice,v=h.setMode,g=h.setProducts,C=h.setInvoice;t.c=O.reducer},1739:function(e,t,a){"use strict";a.d(t,"a",(function(){return T}));var n=a(8),r=a(17),c=a(1335),i=a(767),o=a(776),s=a(1331),l=a(1347),d=a(1),u=a(47),b=a(1375),j=a(15),m=a(1336),p=a(1467),O=a(1466),h=a(1498),f=a(322),x=a(76),v=a(189),g=a(1333),C=a(1334),E=a(55),S=a(332),N=a.n(S),P=a(323),I=a(0),w=x.e().shape({name:x.g().required(),phone:x.g().length(9),address:x.g(),isFamiliar:x.b()}),T=function(e){var t=e.customer,a=Object(j.useDispatch)(),x=Object(u.useForm)({mode:"onChange",defaultValues:{},resolver:Object(v.a)(w)}),S=Object(d.useState)([]),T=Object(r.a)(S,2),L=T[0],_=T[1],y=Object(b.a)("invoices").t,A=x.control,D=x.formState,F=(x.setValue,x.reset),U=x.watch,R=x.getValues,k=D.errors;Object(d.useEffect)((function(){Object(E.b)().then((function(e){_(e)}))}),[_,F]),Object(d.useEffect)((function(){if(L.length>0)if(t){var e,a=Object(n.a)({},t);a.phoneCountryId=null!==(e=a.phoneCountryId)&&void 0!==e?e:L[0].id,F(a)}else F({id:0,name:"",phone:"",address:"",isFamiliar:!1,phoneCountryId:L[0].id})}),[t,L,F]);var M=U();return N.a.isEmpty(M)?Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(O.a,{children:Object(I.jsx)(P.a,{})})}):Object(I.jsxs)(u.FormProvider,Object(n.a)(Object(n.a)({},x),{},{children:[Object(I.jsx)(h.a,{id:"alert-dialog-title",children:y("CREATE_CUSTOMER_TITLE",{name:M.name})}),Object(I.jsxs)(O.a,{children:[Object(I.jsx)(u.Controller,{name:"name",control:A,render:function(e){var t=e.field;return Object(I.jsx)(c.a,Object(n.a)(Object(n.a)({},t),{},{className:"mt-8 mb-16",error:!!k.name,required:!0,label:y("CUSTOMER_NAME_LABEL"),autoFocus:!0,id:"name",variant:"outlined",fullWidth:!0}))}}),Object(I.jsxs)("div",{className:"flex w-full mt-8 mb-16",children:[Object(I.jsx)(u.Controller,{name:"phoneCountryId",control:A,render:function(e){var t=e.field;return Object(I.jsx)(i.a,{className:"w-1/5",children:Object(I.jsx)(o.a,{id:"phone-country-select",value:t.value,onChange:function(e){t.onChange(e.target.value)},children:L.map((function(e,t){return Object(I.jsx)(s.a,{value:e.id,children:Object(I.jsx)("img",{className:"max-w-none w-auto h-20",src:e.logoUrl,alt:"product"})},e.id)}))})})}}),Object(I.jsx)(u.Controller,{name:"phone",control:A,render:function(e){var t=e.field;return Object(I.jsx)(c.a,Object(n.a)(Object(n.a)({},t),{},{className:"ml-8 flex-1",error:!!k.phone,required:!0,label:y("CUSTOMER_PHONE_LABEL"),id:"phone",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:Object(I.jsx)(l.a,{position:"start",children:N.a.find(L,(function(e){return e.id===M.phoneCountryId})).phonePrefix})}}))}})]}),Object(I.jsx)(u.Controller,{name:"address",control:A,render:function(e){var t=e.field;return Object(I.jsx)(c.a,Object(n.a)(Object(n.a)({},t),{},{className:"mt-8 mb-16",error:!!k.address,required:!0,label:y("CUSTOMER_ADDRESS_LABEL"),id:"address",variant:"outlined",fullWidth:!0}))}}),Object(I.jsx)(u.Controller,{name:"isFamiliar",control:A,render:function(e){var t=e.field,a=t.onChange,n=t.value;return Object(I.jsx)(g.a,{className:"mt-8 mb-16",label:y("CUSTOMER_IS_FAMILIAR_LABEL"),control:Object(I.jsx)(C.a,{onChange:function(e){a(e.target.checked)},checked:n,name:"hasAutoCalculatePermission"})})}})]}),Object(I.jsxs)(p.a,{children:[Object(I.jsx)(m.a,{onClick:function(){return a(Object(f.a)())},color:"error",children:y("CANCEL_BUTTON")}),Object(I.jsx)(m.a,{onClick:function(){var t=R();console.log("create customer data",t),0===t.id?e.createCustomer(t):e.updateCustomer(t)},color:"secondary",children:y("SAVE_BUTTON")})]})]}))}},1760:function(e,t,a){"use strict";var n=a(224),r=a(1),c=a(15).useDispatch;t.a=function(){var e=c();return{showNotification:Object(r.useCallback)((function(t){console.log("show notification",t),e(Object(n.b)(t))}),[e])}}},1763:function(e,t,a){"use strict";var n=a(160),r=a(1694),c=a(1695);t.a=Object(n.d)({invoices:r.a,createUpdateInvoice:c.c})},3409:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(20),c=a(17),i=a(4),o=a(14),s=a(1390),l=a(47),d=a(189),u=a(1),b=a(66),j=a(332),m=a.n(j),p=a(191),O=a(128),h=a(76),f=a(323),x=a(1375),v=a(15),g=a(1661),C=a(1335),E=a(1513),S=a(1347),N=a(1389),P=a(1336),I=a(1327),w=a(322),T=a(1763),L=a(1664),_=a(1695),y=a(51),A=a(222),D=a(1372),F=a(43),U=a(1885),R=a(1760),k=a(540),M=a(170),B=a(1346),V=a(1348),W=a(1520),H=a(1524),q=a(1523),z=a(1521),Y=a(1522),J=a(1467),Q=a(1466),G=a(1498),K=a(0),X=Object(o.a)("div")((function(e){var t=e.theme;return{"& table ":{"& th:first-child, & td:first-child":{paddingLeft:"".concat(0,"!important")},"& th:last-child, & td:last-child":{paddingRight:"".concat(0,"!important")}},"& .divider":{width:1,backgroundColor:t.palette.divider,height:144},"& .seller":{backgroundColor:t.palette.primary.dark,color:t.palette.getContrastText(t.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:t.palette.getContrastText(t.palette.primary.dark),opacity:.5}}}})),Z=function(e){var t=e.formContext,a=Object(x.a)("invoices").t,n=Object(v.useSelector)((function(e){return e.auth.user.shop})),r=(t.control,(0,t.watch)()),c=Object(v.useDispatch)();return console.log("invoice",r),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(G.a,{id:"alert-dialog-title",children:a("PREVIEW_INVOICE_TITLE",{customerName:r.customer.name})}),Object(K.jsx)(Q.a,{children:Object(K.jsx)(X,{className:"flex-grow flex-shrink-0 p-0",children:Object(K.jsx)(B.a,{className:"w-xl mx-auto shadow-0",children:Object(K.jsxs)(V.a,{className:"p-20 print:p-0",children:[Object(K.jsxs)("div",{className:"flex justify-between",children:[Object(K.jsxs)("div",{children:[Object(K.jsx)("table",{className:"mb-8",children:Object(K.jsx)("tbody",{children:Object(K.jsxs)("tr",{children:[Object(K.jsx)("td",{className:"pb-4",children:Object(K.jsx)(A.a,{className:"font-light",variant:"h6",color:"textSecondary",children:a("INVOICE_PDF_HEADER")})}),Object(K.jsx)("td",{className:"pb-4 px-8",children:Object(K.jsx)(A.a,{className:"font-light",variant:"h6",color:"inherit",children:r.code})})]})})}),Object(K.jsx)(A.a,{color:"textSecondary",children:r.customer&&r.customer.name}),Object(K.jsx)(A.a,{color:"textSecondary",children:r.customer&&r.customer.phone}),Object(K.jsx)(A.a,{color:"textSecondary",children:r.customer&&r.customer.address}),Object(K.jsxs)(A.a,{color:"textSecondary",children:[a("TOTAL_COST_LABEL"),": ",r.totalCost.toLocaleString()," ",n.cashUnitName]}),Object(K.jsx)(A.a,{color:"textSecondary",children:r.customerDebt>0&&"".concat(a("DEBT_LABEL"),": ").concat(r.customerDebt.toLocaleString()," ").concat(n.cashUnitName)}),Object(K.jsxs)(A.a,{color:"textSecondary",children:[a("DEPOSIT_LABEL"),": ",r.deposit.toLocaleString()," ",n.cashUnitName]}),Object(K.jsxs)(A.a,{color:"textSecondary",children:[a("REST_LABEL"),": ",r.rest.toLocaleString()," ",n.cashUnitName]})]}),Object(K.jsxs)("div",{className:"seller flex items-center p-16",children:[Object(K.jsx)("img",{className:"w-80",src:n.logoUrl,alt:"logo"}),Object(K.jsx)("div",{className:"divider mx-8 h-96"}),Object(K.jsxs)("div",{className:"px-8",children:[Object(K.jsxs)(A.a,{color:"inherit",children:[n.name,"."]}),Object(K.jsx)(A.a,{color:"inherit",children:n.address}),n.phones&&n.phones.map((function(e,t){return Object(K.jsx)(A.a,{color:"inherit",children:"".concat(e.ownerName," (").concat(e.phonePrefix).concat(e.phone,")")},t)})),n.emails&&n.emails.map((function(e){return Object(K.jsx)(A.a,{color:"inherit",children:e})}))]})]})]}),Object(K.jsx)("div",{className:"mt-6",children:Object(K.jsxs)(W.a,{className:"simple",children:[Object(K.jsx)(z.a,{children:Object(K.jsxs)(Y.a,{children:[Object(K.jsx)(q.a,{children:a("PRODUCT_LABEL")}),Object(K.jsx)(q.a,{align:"right",children:a("PRICE_LABEL")}),Object(K.jsx)(q.a,{align:"right",children:a("QUANTITY_LABEL")}),Object(K.jsx)(q.a,{align:"right",children:a("TOTAL_COST_LABEL")})]})}),Object(K.jsx)(H.a,{children:r.details.map((function(e,t){return Object(K.jsxs)(Y.a,{children:[Object(K.jsxs)(q.a,{children:[Object(K.jsx)(A.a,{variant:"subtitle1",children:e.productName}),Object(K.jsx)(A.a,{children:e.description})]}),Object(K.jsx)(q.a,{align:"right",children:"".concat(e.price.toLocaleString()," ").concat(n.cashUnitName)}),Object(K.jsx)(q.a,{align:"right",children:e.quantity}),Object(K.jsx)(q.a,{align:"right",children:"".concat(e.totalCost.toLocaleString()," ").concat(n.cashUnitName)})]},t)}))})]})})]})})})}),Object(K.jsx)(J.a,{children:Object(K.jsx)(P.a,{onClick:function(){return c(Object(w.a)())},color:"error",children:a("CANCEL_BUTTON")})})]})},$=function(){var e=Object(u.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(u.useState)(!1),i=Object(c.a)(r,2),o=i[0],s=i[1],d=Object(v.useDispatch)(),j=Object(l.useFormContext)(),m=j.formState,p=j.watch,O=j.getValues,h=(j.handleSubmit,m.isValid),f=(m.dirtyFields,m.errors,Object(x.a)("invoices").t),g=p("customer"),C=Object(y.a)(),E=Object(b.h)(),S=Object(v.useSelector)((function(e){return e.invoices.createUpdateInvoice.mode})),N=Object(R.a)().showNotification,T=Object(v.useSelector)((function(e){return e.i18n.language})),B=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=O();n(!0);var a={customerId:t.customer.id,deposit:t.deposit,details:t.details.map((function(e){return{productId:e.productId,quantity:e.quantity,price:e.price,description:e.description,originalPrice:e.originalPrice}}))};console.log("validated data",a),d(Object(_.b)(a)).then((function(t){if(e){var a=t.payload.id;Object(k.e)(a,T).then((function(e){M.a.downloadUrl(e),N({translation:"CREATE_SUCCESSFULLY",options:{variant:"success"}}),n(!1),E.push("/apps/invoices")}))}else N({translation:"CREATE_SUCCESSFULLY",options:{variant:"success"}}),n(!1),E.push("/apps/invoices")})).catch((function(e){n(!1)}))};return Object(K.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(K.jsxs)("div",{className:"flex flex-col items-start max-w-full min-w-0",children:[Object(K.jsx)(D.a.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:Object(K.jsxs)(A.a,{className:"flex items-center sm:mb-12",component:F.a,role:"button",to:"/apps/invoices",color:"inherit",children:[Object(K.jsx)(I.a,{className:"text-20",children:"ltr"===C.direction?"arrow_back":"arrow_forward"}),Object(K.jsx)("span",{className:"hidden sm:flex mx-4 font-medium",children:f("MANAGE_INVOICES_LABEL")})]})}),Object(K.jsx)("div",{className:"flex items-center max-w-full",children:Object(K.jsx)("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16",children:Object(K.jsxs)(D.a.div,{initial:{x:-20},animate:{x:0,transition:{delay:.3}},children:[Object(K.jsx)(A.a,{className:"text-16 sm:text-20 truncate font-semibold",children:g?g.name:f("NEW_INVOICE_LABEL")}),Object(K.jsx)(A.a,{variant:"caption",className:"font-medium",children:f("INVOICE_DETAIL")})]})})})]}),Object(K.jsxs)(D.a.div,{className:"flex",initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.3}},children:[S===L.a.REVIEW_MODE&&Object(K.jsx)(U.a,{className:"whitespace-nowrap mx-4",variant:"contained",loading:o,color:"warning",onClick:function(){var e=O();s(!0),d(Object(_.g)(e.id)).then((function(){s(!1)}))},startIcon:Object(K.jsx)(I.a,{className:"hidden sm:flex",children:"restore"}),children:f("RESTORE_BUTTON")}),S===L.a.REVIEW_MODE&&Object(K.jsx)(P.a,{className:"whitespace-nowrap mx-4",variant:"contained",color:"secondary",onClick:function(){var e=O();Object(k.e)(e.id,T).then((function(e){M.a.downloadUrl(e)}))},startIcon:Object(K.jsx)(I.a,{className:"hidden sm:flex",children:"download"}),children:f("DOWNLOAD_BUTTON")}),(S===L.a.UPDATE_MODE||S===L.a.NEW_MODE)&&Object(K.jsx)(U.a,{className:"whitespace-nowrap mx-4",variant:"contained",loading:a,color:"secondary",disabled:!h,onClick:function(){B(!1)},children:f("SAVE_BUTTON")}),(S===L.a.UPDATE_MODE||S===L.a.NEW_MODE)&&Object(K.jsx)(U.a,{className:"whitespace-nowrap mx-4",variant:"contained",loading:a,color:"secondary",disabled:!h,onClick:function(){B(!0)},children:f("SAVE_DOWNLOAD_BUTTON")}),(S===L.a.UPDATE_MODE||S===L.a.NEW_MODE)&&Object(K.jsx)(U.a,{className:"whitespace-nowrap mx-4",variant:"contained",loading:a,color:"secondary",disabled:!h,onClick:function(){d(Object(w.c)({maxWidth:"lg",fullWidth:!0,children:Object(K.jsx)(Z,{formContext:j})}))},children:f("PREVIEW_BUTTON")})]})]})},ee=a(1739),te=function(e){var t=e.index,a=Object(l.useFormContext)(),r=a.control,c=(a.watch,a.getValues),i=a.setValue,o=Object(x.a)("invoices").t,s=Object(v.useSelector)((function(e){return e.auth.user.shop})),d=Object(v.useSelector)((function(e){return e.invoices.createUpdateInvoice.mode})),u=Object(O.a)((function(e){M.a.convertUnitValue(s.cashUnitId,e).then((function(e){i("details.".concat(t,".totalCost"),e);var a=c("details"),n=0;a.forEach((function(e){n+=e.totalCost})),i("totalCost",n);var r=c("deposit"),o=c("customerDebt");i("rest",n+o-r)}))}),500),b=c("details.".concat(t,".inventoryNumber"));return Object(K.jsx)("div",{className:"flex w-full",children:Object(K.jsxs)("div",{className:"flex flex-col sm:flex-row w-full items-center sm:space-x-16",children:[Object(K.jsx)(l.Controller,{control:r,name:"details.".concat(t,".productName"),render:function(e){var t=e.field;return Object(K.jsx)(C.a,Object(n.a)(Object(n.a)({disabled:!0},t),{},{className:"mt-8 mb-16 w-full",label:o("PRODUCT_NAME_LABEL"),id:"productName",variant:"outlined",autoFocus:!0}))}}),Object(K.jsx)(l.Controller,{name:"details.".concat(t,".quantity"),control:r,render:function(e){var a=e.field;return Object(K.jsx)(C.a,{value:a.value.toLocaleString(),disabled:d===L.a.REVIEW_MODE,onChange:function(e){var n=e.target.value;n=n.replaceAll(",","");var r=parseFloat(n);r||(r=0),r>b&&(r=0),a.onChange(r);var i=c("details.".concat(t,".price")),o=parseFloat(i)*r;o&&u(o)},className:"mt-8 mb-16  w-full",label:o("QUANTITY_LABEL"),id:"pricePerMass",InputProps:{endAdornment:d===L.a.NEW_MODE?Object(K.jsx)(S.a,{position:"end",children:"< ".concat(b)}):void 0},type:"number",variant:"outlined"})}}),Object(K.jsx)(l.Controller,{name:"details.".concat(t,".price"),control:r,render:function(e){var a=e.field;return Object(K.jsx)(C.a,Object(n.a)(Object(n.a)({},a),{},{value:a.value.toLocaleString(),inputMode:"numeric",disabled:d===L.a.REVIEW_MODE,onChange:function(e){var n=e.target.value;n=n.replaceAll(",","");var r=parseFloat(n);r||(r=0),a.onChange(r);var i=c("details.".concat(t,".quantity")),o=r*parseFloat(i);o&&u(o)},className:"mt-8 mb-16 w-full",label:o("PRICE_LABEL"),id:"pricePerMass",InputProps:{lang:"en-US",startAdornment:Object(K.jsx)(S.a,{position:"start",children:s.cashUnitName})},variant:"outlined"}))}}),Object(K.jsx)(l.Controller,{name:"details.".concat(t,".totalCost"),control:r,render:function(e){var t=e.field;return Object(K.jsx)(C.a,Object(n.a)(Object(n.a)({},t),{},{value:t.value.toLocaleString(),inputMode:"numeric",disabled:!0,className:"mt-8 mb-16 w-full",label:o("TOTAL_COST_LABEL"),id:"pricePerMass",InputProps:{startAdornment:Object(K.jsx)(S.a,{position:"start",children:s.cashUnitName})},variant:"outlined"}))}}),Object(K.jsx)(l.Controller,{name:"details.".concat(t,".description"),control:r,render:function(e){var t=e.field;return Object(K.jsx)(C.a,Object(n.a)(Object(n.a)({},t),{},{disabled:d===L.a.REVIEW_MODE,className:"mt-8 mb-16 w-full",id:"description",label:o("DESCRIPTION_LABEL"),type:"text",variant:"outlined",fullWidth:!0}))}}),d!==L.a.REVIEW_MODE&&Object(K.jsx)("div",{className:"flex flex-col w-1/9 mx-4 items-center justify-center",children:Object(K.jsx)(P.a,{className:"whitespace-nowrap mx-8 mt-8 mb-16",variant:"contained",color:"error",onClick:function(){e.handleRemoveRow(t)},startIcon:Object(K.jsx)(I.a,{className:"hidden sm:flex",children:"delete"}),children:o("REMOVE_BUTTON")})})]})})},ae=Object(o.a)(s.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(i.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136})}})),ne=h.e().shape({customer:h.e().required(),details:h.a().min(1)});t.default=Object(p.a)("invoices",T.a)((function(){var e=Object(u.useState)(0),t=Object(c.a)(e,2),a=(t[0],t[1],Object(x.a)("invoices").t),i=Object(v.useSelector)((function(e){return e.invoices.createUpdateInvoice.invoice})),o=Object(b.j)(),s=Object(v.useSelector)((function(e){return e.invoices.createUpdateInvoice.products})),j=Object(x.a)("units").t,p=Object(v.useSelector)((function(e){return e.auth.user.shop})),h=Object(u.useState)(!0),T=Object(c.a)(h,2),y=T[0],A=T[1],D=Object(v.useSelector)((function(e){return e.invoices.createUpdateInvoice.mode})),F=Object(v.useSelector)((function(e){return e.invoices.createUpdateInvoice.customers})),U=Object(u.useState)(null),R=Object(c.a)(U,2),k=R[0],M=R[1],B=Object(u.useState)(!0),V=Object(c.a)(B,2),W=V[0],H=V[1],q=Object(v.useDispatch)();Object(O.b)((function(){var e=o.invoiceId;"new"===e?(q(Object(_.h)(L.a.NEW_MODE)),q(Object(_.i)())):(q(Object(_.h)(L.a.REVIEW_MODE)),console.log("get invoice",e),q(Object(_.e)(e)))}),[o]);var z=Object(l.useForm)({mode:"onChange",defaultValues:{},resolver:Object(d.a)(ne)}),Y=z.watch,J=z.reset,Q=z.control,G=z.formState,X=z.setValue,Z=z.getValues,re=Object(l.useFieldArray)({control:Q,name:"details"}),ce=re.append,ie=re.remove,oe=re.fields;G.errors;Object(u.useEffect)((function(){J(i)}),[J,i]),Object(u.useEffect)((function(){q(Object(_.d)()).then((function(){A(!1)})),q(Object(_.f)()).then((function(){H(!1)}))}),[q]);var se=Y(),le=Y("customer"),de=function(e){ie(e)};return m.a.isEmpty(se)?Object(K.jsx)(f.a,{}):Object(K.jsx)(l.FormProvider,Object(n.a)(Object(n.a)({},z),{},{children:Object(K.jsx)(ae,{innerScroll:!0,header:Object(K.jsx)($,{}),content:Object(K.jsxs)("div",{className:"p-16 sm:p-24 w-full",children:[Object(K.jsx)(l.Controller,{name:"customer",control:Q,defaultValue:[],render:function(e){var t=e.field,c=t.onChange,i=t.value;return Object(K.jsx)(g.a,{loading:y,disabled:D===L.a.REVIEW_MODE,className:"mt-8 mb-16",disablePortal:!0,getOptionLabel:function(e){var t=e.name;return e.phone?t+=" | ".concat(e.phonePrefix).concat(e.phone):e.address&&(t+=" | ".concat(e.address)),t},filterOptions:function(e,t){var n=[],r=t.inputValue;return e.forEach((function(e){var a,r,c;"".concat(null!==(a=e.name)&&void 0!==a?a:"").concat(null!==(r=e.phone)&&void 0!==r?r:"").concat(null!==(c=e.address)&&void 0!==c?c:"").toLowerCase().includes(t.inputValue.toLowerCase())&&n.push(e)})),""!==r&&0===n.length&&n.push({id:0,inputValue:r,name:"".concat(a("ADD_BUTTON"),' "').concat(r,'"')}),n},isOptionEqualToValue:function(e,t){return e.id===t.id},options:Object(r.a)(F),value:i,onChange:function(e,t){0===t.id?q(Object(w.c)({children:Object(K.jsx)(ee.a,{customer:{id:0,address:"",name:t.inputValue,phone:"",isFamiliar:!1},createCustomer:function(e){q(Object(_.a)(e)).then((function(){q(Object(w.a)()),A(!0),q(Object(_.d)()).then((function(){A(!1)}))}))}})})):(X("customerDebt",t.debt),c(t))},renderInput:function(e){return Object(K.jsx)(C.a,Object(n.a)(Object(n.a)({},e),{},{placeholder:a("SELECT_CUSTOMER_PLACE_HOLDER"),label:a("CUSTOMER_LABEL"),variant:"outlined",InputLabelProps:{shrink:!0},InputProps:Object(n.a)(Object(n.a)({},e.InputProps),{},{endAdornment:Object(K.jsxs)(K.Fragment,{children:[y?Object(K.jsx)(E.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}}),Object(K.jsxs)("div",{className:"flex flex-col sm:flex-row w-full items-center sm:space-x-16",children:[Object(K.jsx)(l.Controller,{name:"customerDebt",control:Q,render:function(e){var t=e.field;return Object(K.jsx)(C.a,Object(n.a)(Object(n.a)({disabled:!0},t),{},{value:t.value.toLocaleString(),className:"mt-8 mb-16",label:a("DEBT_LABEL"),id:"pricePerMass",InputProps:{startAdornment:Object(K.jsx)(S.a,{position:"start",children:p.cashUnitName})},variant:"outlined",fullWidth:!0}))}}),Object(K.jsx)(l.Controller,{name:"totalCost",control:Q,render:function(e){var t=e.field;return Object(K.jsx)(C.a,Object(n.a)(Object(n.a)({},t),{},{value:t.value.toLocaleString(),disabled:!0,className:"mt-8 mb-16",label:a("TOTAL_COST_LABEL"),id:"pricePerMass",InputProps:{startAdornment:Object(K.jsx)(S.a,{position:"start",children:p.cashUnitName})},variant:"outlined",fullWidth:!0}))}})]}),Object(K.jsxs)("div",{className:"flex flex-col sm:flex-row w-full items-center sm:space-x-16",children:[Object(K.jsx)(l.Controller,{name:"deposit",control:Q,render:function(e){var t=e.field;return Object(K.jsx)(C.a,{value:t.value.toLocaleString(),inputMode:"numeric",disabled:D===L.a.REVIEW_MODE,onChange:function(e){var a=e.target.value;a=a.replaceAll(",","");var n=parseFloat(a);n||(n=0),t.onChange(n);var r=Z("totalCost"),c=Z("customerDebt");X("rest",r+c-n)},className:"mt-8 mb-16",label:a("DEPOSIT_LABEL"),id:"pricePerMass",InputProps:{startAdornment:Object(K.jsx)(S.a,{position:"start",children:p.cashUnitName})},variant:"outlined",fullWidth:!0})}}),Object(K.jsx)(l.Controller,{name:"rest",control:Q,render:function(e){var t=e.field;return Object(K.jsx)(C.a,{value:t.value.toLocaleString(),inputMode:"numeric",disabled:!0,onChange:function(e){},className:"mt-8 mb-16",label:a("REST_LABEL"),id:"pricePerMass",InputProps:{startAdornment:Object(K.jsx)(S.a,{position:"start",children:p.cashUnitName})},variant:"outlined",fullWidth:!0})}})]}),le&&Object(K.jsxs)("div",{className:"flex w-full",children:[Object(K.jsx)(g.a,{className:"mt-8 mb-16 flex-1",disablePortal:!0,disabled:D===L.a.REVIEW_MODE,options:Object(r.a)(s),value:k,onChange:function(e,t){M(t)},getOptionDisabled:function(e){return e.inventoryNumber<=0},getOptionLabel:function(e){return"".concat(e.name," (").concat(e.inventoryNumber,")")},renderOption:function(e,t){return Object(K.jsxs)(N.a,Object(n.a)(Object(n.a)({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),{},{children:[Object(K.jsx)("img",{loading:"lazy",width:"20",src:t.thumbnail,srcSet:t.thumbnail,alt:""}),"".concat(t.name," (").concat(t.inventoryNumber,")")]}))},loading:W,renderInput:function(e){return Object(K.jsx)(C.a,Object(n.a)(Object(n.a)({},e),{},{placeholder:a("SELECT_PRODUCT_PLACE_HOLDER"),label:a("PRODUCT_LABEL"),variant:"outlined",InputLabelProps:{shrink:!0},InputProps:Object(n.a)(Object(n.a)({},e.InputProps),{},{endAdornment:Object(K.jsxs)(K.Fragment,{children:[W?Object(K.jsx)(E.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}}),D!==L.a.REVIEW_MODE&&Object(K.jsx)(P.a,{className:"whitespace-nowrap mx-8 mt-8 mb-16",variant:"contained",color:"primary",onClick:function(){var e;k&&(console.log("select",k),m.a.find(oe,(function(e){return e.productId===k.id}))||(console.log("selected product",k),ce({productId:k.id,inventoryNumber:k.inventoryNumber,description:"",quantity:0,originalPrice:null!==(e=k.originalPrice)&&void 0!==e?e:0,price:le.isFamiliar&&k.priceForFamiliarCustomer?k.priceForFamiliarCustomer:k.priceForCustomer,productName:"".concat(k.name," | ").concat(j(k.unitName.toUpperCase())),totalCost:0})))},startIcon:Object(K.jsx)(I.a,{className:"hidden sm:flex",children:"add"}),children:a("ADD_BUTTON")})]}),oe.map((function(e,t){return Object(K.jsx)(te,{index:t,handleRemoveRow:de},t)}))]})})}))}))}}]);