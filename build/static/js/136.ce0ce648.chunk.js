(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[136],{1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var r=a(101),n=a(4),c=a(54),o=a(14),i=a(6),s=a(1),d=a(1297),l=a(51),u=a(1379),p=a(41),b=a(15),j=a(0);var m=function(e){var t=Object(l.a)(),a=Object(b.useSelector)(Object(p.c)(t.palette.primary.main));return Object(j.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(j.jsx)(u.a,{theme:a,children:e.header})})},h=a(8),f=a(17),g=a(133),O=a(1376),x=a(1380);var C=function(e){var t=Object(l.a)(),a=Object(b.useSelector)(Object(p.c)(t.palette.primary.main));return Object(j.jsxs)(j.Fragment,{children:[e.header&&Object(j.jsx)(u.a,{theme:a,children:Object(j.jsx)("div",{className:Object(i.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(j.jsx)(c.default,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function P(e,t){var a=Object(s.useState)(!1),r=Object(f.a)(a,2),n=r[0],c=r[1];Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:o}}));var o=function(){c(!n)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O.a,{lgUp:"permanent"===e.variant,children:Object(j.jsx)(x.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return o()},disableSwipeToOpen:!0,classes:{root:Object(i.default)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(j.jsx)(C,Object(h.a)({},e))})}),"permanent"===e.variant&&Object(j.jsx)(O.a,{lgDown:!0,children:Object(j.jsx)(g.a,{variant:"permanent",className:Object(i.default)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:Object(i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(j.jsx)(C,Object(h.a)({},e))})})]})}var v,S=Object(s.forwardRef)(P),w=Object(o.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:y,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:T,minHeight:T,maxHeight:T,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:N,minHeight:N,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:F,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:y,minHeight:y,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),F=240,y=200,N=64,T=y-N,E=Object(s.forwardRef)((function(e,t){var a=Object(s.useRef)(null),r=Object(s.useRef)(null),n=Object(s.useRef)(null),o=e.rightSidebarHeader||e.rightSidebarContent,l=e.leftSidebarHeader||e.leftSidebarContent;return Object(s.useImperativeHandle)(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(j.jsxs)(w,{className:Object(i.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[Object(j.jsx)("div",{className:"FusePageCarded-topBg"}),Object(j.jsxs)("div",{className:"flex container w-full",children:[l&&Object(j.jsx)(S,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n}),Object(j.jsxs)("div",{className:Object(i.default)("FusePageCarded-contentWrapper",l&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",o&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(j.jsx)(m,{header:e.header}),Object(j.jsxs)("div",{className:Object(i.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(j.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(j.jsx)(c.default,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),o&&Object(j.jsx)(S,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:n})]})]})]})}));E.defaultProps={};var R=Object(s.memo)(Object(o.a)(E)(v||(v=Object(r.a)([""]))))},1632:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"f",(function(){return p})),a.d(t,"g",(function(){return b})),a.d(t,"d",(function(){return j})),a.d(t,"a",(function(){return m})),a.d(t,"l",(function(){return h})),a.d(t,"h",(function(){return f})),a.d(t,"m",(function(){return g})),a.d(t,"j",(function(){return P})),a.d(t,"k",(function(){return S})),a.d(t,"i",(function(){return F}));var r=a(8),n=a(55),c=a(331),o=a.n(c),i=(a(1741).ExpandRounded,a(37)),s=i.createSlice,d=i.createAsyncThunk,l=d("products/newUpdateProduct/getCategories",(function(e,t){var a=t.dispatch;t.getState;return new Promise((function(e,t){n.a.get(n.c.getCategories).then((function(t){var r=t.data.data;a(C(r)),e()}))}))})),u=d("products/newUpdateProduct/getUnitCategories",(function(e,t){var a=t.dispatch;return new Promise((function(e,t){n.a.get(n.c.getUnitCategories).then((function(t){var r=t.data.data;a(v(r)),e()}))}))})),p=d("products/newUpdateProduct/getUnits",(function(e,t){var a=t.dispatch,r=t.getState;return new Promise((function(e,t){var c=r().products.newUpdateProduct.unitCategoryId;n.a.get(n.c.getUnits,{params:{categoryId:c}}).then((function(t){var r=t.data.data;a(w(r)),e()}))}))})),b=d("products/newUpdateProduct/getWarehouses",(function(e,t){t.dispatch;return new Promise((function(e,t){n.a.get(n.c.getWarehouses).then((function(t){var a=t.data.data;e(a)}))}))})),j=d("products/newUpdateProduct/getProductById",(function(e,t){t.getState;var a=t.dispatch,c=e.id;return new Promise((function(e,t){n.a.get(n.c.getProductDetailById(c)).then((function(t){var c=t.data.data,i=c.assets.map((function(e){return new Promise((function(t,a){var r=e.id,o=e.assetType;n.a.get(n.c.getAssetByProductIdAndAssetId(c.id,r),{responseType:"blob"}).then((function(e){var a=new FileReader,n=e.data,c=URL.createObjectURL(n);a.onloadend=function(){t({id:r,url:c,type:"image",blob:n,assetType:o})},a.readAsDataURL(n)})).catch((function(e){a()}))}))}));Promise.all(i).then((function(t){var n,i=t.map((function(e){return e.blob})),s=Object(r.a)({},c);s.imageUrls=t,s.images=i,s.thumbnailId=null===(n=o.a.find(t,(function(e){return"thumbnail"===e.assetType})))||void 0===n?void 0:n.id,s.warehouses=c.warehouses.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{name:e.warehouseName})})),a(y(s)),e()}))}))}))})),m=d("products/newUpdateProduct/createProduct",(function(e,t){t.dispatch;var a=e.images;return delete e.images,new Promise((function(t,r){n.a.post(n.c.createProduct,e).then((function(e){var r=e.data.data.id,c=a.map((function(e){return new Promise((function(t,a){var c=new FormData;c.append("image",e),c.append("assetType",e.assetType),n.a.post(n.c.uploadProductImageById(r),c).then((function(e){t(e)})).catch((function(e){a()}))}))}));Promise.all(c).then((function(){t()}))})).catch((function(e){r()}))}))})),h=d("products/newUpdateProduct/updateProduct",(function(e,t){t.dispatch;return new Promise((function(t,a){n.a.post(n.c.updateProductById(e.id),e).then((function(e){t()}))}))})),f=d("products/newUpdateProduct/selectThumbnail",(function(e){return new Promise((function(t,a){n.a.post(n.c.selectProductThumbnailById(e.productId),{assetId:e.assetId}).then((function(e){t()}))}))})),g=d("products/newUpdateProduct/uploadImage",(function(e,t){t.dispatch;var a=e.productId,r=e.image;return new Promise((function(e,t){var c=new FormData;c.append("image",r),c.append("assetType",r.assetType),n.a.post(n.c.uploadProductImageById(a),c).then((function(t){var a=t.data.data.id;e({id:a})})).catch((function(e){t()}))}))})),O=s({name:"newProduct",initialState:{product:{},categories:[],unitCategories:[],units:[],mode:"new",unitCategoryId:null},reducers:{resetState:function(e,t){},setCategories:function(e,t){e.categories=t.payload},setUnits:function(e,t){e.units=t.payload},setUnitCategories:function(e,t){e.unitCategories=t.payload},setUnitCategoryId:function(e,t){e.unitCategoryId=t.payload},setProduct:function(e,t){e.product=t.payload},setMode:function(e,t){e.mode=t.payload},setNewProduct:function(e,t){e.product={id:0,name:"",categories:[],description:"",images:[],imageUrls:[],thumbnailId:null,mass:null,pricePerMass:null,unitId:null,unitName:"",percentForFamiliarCustomer:null,percentForCustomer:null,priceForFamiliarCustomer:null,priceForCustomer:null,warehouses:[]}}}}),x=O.actions,C=(x.resetState,x.setCategories),P=x.setNewProduct,v=x.setUnitCategories,S=x.setUnitCategoryId,w=x.setUnits,F=x.setMode,y=x.setProduct;t.b=O.reducer},1651:function(e,t,a){"use strict";a.d(t,"b",(function(){return E})),a.d(t,"a",(function(){return R}));var r=a(77),n=a(8),c=a(17),o=a(1337),i=a(770),s=a(779),d=a(1333),l=a(1349),u=a(1),p=a(47),b=a(1377),j=a(15),m=a(1338),h=a(1470),f=a(1469),g=a(1500),O=a(318),x=a(76),C=a(189),P=a(1335),v=a(1336),S=a(55),w=a(331),F=a.n(w),y=a(322),N=a(0),T=x.e().shape({name:x.g().required(),phone:x.g().length(9),address:x.g(),isFamiliar:x.b()}),E=function(e){var t=e.customer,a=Object(j.useDispatch)(),r=Object(p.useForm)({mode:"onChange",defaultValues:{},resolver:Object(C.a)(T)}),x=Object(u.useState)([]),w=Object(c.a)(x,2),E=w[0],R=w[1],I=Object(b.a)("invoices").t,U=r.control,k=r.formState,_=(r.setValue,r.reset),A=r.watch,L=r.getValues,B=k.errors;Object(u.useEffect)((function(){Object(S.b)().then((function(e){R(e)}))}),[R,_]),Object(u.useEffect)((function(){if(E.length>0)if(t){var e,a=Object(n.a)({},t);a.phoneCountryId=null!==(e=a.phoneCountryId)&&void 0!==e?e:E[0].id,_(a)}else _({id:0,name:"",phone:"",address:"",isFamiliar:!1,phoneCountryId:E[0].id})}),[t,E,_]);var M=A();return F.a.isEmpty(M)?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(f.a,{children:Object(N.jsx)(y.a,{})})}):Object(N.jsxs)(p.FormProvider,Object(n.a)(Object(n.a)({},r),{},{children:[Object(N.jsx)(g.a,{id:"alert-dialog-title",children:I("CREATE_CUSTOMER_TITLE",{name:M.name})}),Object(N.jsxs)(f.a,{children:[Object(N.jsx)(p.Controller,{name:"name",control:U,render:function(e){var t=e.field;return Object(N.jsx)(o.a,Object(n.a)(Object(n.a)({},t),{},{className:"mt-8 mb-16",error:!!B.name,required:!0,label:I("CUSTOMER_NAME_LABEL"),autoFocus:!0,id:"name",variant:"outlined",fullWidth:!0}))}}),Object(N.jsxs)("div",{className:"flex w-full mt-8 mb-16",children:[Object(N.jsx)(p.Controller,{name:"phoneCountryId",control:U,render:function(e){var t=e.field;return Object(N.jsx)(i.a,{className:"w-1/5",children:Object(N.jsx)(s.a,{id:"phone-country-select",value:t.value,onChange:function(e){t.onChange(e.target.value)},children:E.map((function(e,t){return Object(N.jsx)(d.a,{value:e.id,children:Object(N.jsx)("img",{className:"max-w-none w-auto h-20",src:e.logoUrl,alt:"product"})},e.id)}))})})}}),Object(N.jsx)(p.Controller,{name:"phone",control:U,render:function(e){var t=e.field;return Object(N.jsx)(o.a,Object(n.a)(Object(n.a)({},t),{},{className:"ml-8 flex-1",error:!!B.phone,required:!0,label:I("CUSTOMER_PHONE_LABEL"),id:"phone",variant:"outlined",fullWidth:!0,InputProps:{startAdornment:Object(N.jsx)(l.a,{position:"start",children:F.a.find(E,(function(e){return e.id===M.phoneCountryId})).phonePrefix})}}))}})]}),Object(N.jsx)(p.Controller,{name:"address",control:U,render:function(e){var t=e.field;return Object(N.jsx)(o.a,Object(n.a)(Object(n.a)({},t),{},{className:"mt-8 mb-16",error:!!B.address,required:!0,label:I("CUSTOMER_ADDRESS_LABEL"),id:"address",variant:"outlined",fullWidth:!0}))}}),Object(N.jsx)(p.Controller,{name:"isFamiliar",control:U,render:function(e){var t=e.field,a=t.onChange,r=t.value;return Object(N.jsx)(P.a,{className:"mt-8 mb-16",label:I("CUSTOMER_IS_FAMILIAR_LABEL"),control:Object(N.jsx)(v.a,{onChange:function(e){a(e.target.checked)},checked:r,name:"hasAutoCalculatePermission"})})}})]}),Object(N.jsxs)(h.a,{children:[Object(N.jsx)(m.a,{onClick:function(){return a(Object(O.a)())},color:"error",children:I("CANCEL_BUTTON")}),Object(N.jsx)(m.a,{onClick:function(){var t=L();console.log("create customer data",t),0===t.id?e.createCustomer(t):e.updateCustomer(t)},color:"secondary",children:I("SAVE_BUTTON")})]})]}))},R=function(e){var t=e.title,a=e.content,r=e.onAccept,n=Object(j.useDispatch)(),c=Object(b.a)("common").t;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{children:t}),Object(N.jsx)(f.a,{children:a}),Object(N.jsxs)(h.a,{children:[Object(N.jsx)(m.a,{onClick:function(){return n(Object(O.a)())},color:"error",children:c("CANCEL_BUTTON")}),Object(N.jsx)(m.a,{onClick:function(){r()},color:"primary",children:c("OK_BUTTON")})]})]})},I={},U={OK_BUTTON:"\u0110\u1ed3ng \xfd",CANCEL_BUTTON:"Hu\u1ef7"};r.a.addResourceBundle("en","common",I),r.a.addResourceBundle("vi","common",U)},1666:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return p})),a.d(t,"f",(function(){return b})),a.d(t,"c",(function(){return m}));var r=a(8),n=a(37),c=a(55),o=Object(n.createAsyncThunk)("products/products/getProducts",(function(e,t){var a=t.dispatch,r=(0,t.getState)().products.products,n=r.searchText,o=r.page,s=r.rowsPerPage,d=r.order;return new Promise((function(e,t){c.a.get(c.c.getProducts,{params:{search:n,pageIndex:o,pageSize:s,sortFieldName:d.id,isSortAscending:"asc"===d.direction}}).then((function(t){t.data.data.forEach((function(e){e.image=null,e.categories=e.productCategoryNames})),a(u(t.data.data)),a(i()),a(j(t.data.totalItems)),e(t.data.data)}))}))})),i=Object(n.createAsyncThunk)("products/products/getThumbnails",(function(e,t){var a=t.dispatch,n=t.getState;return new Promise((function(e,t){var o=n().products.products.products.map((function(e,t){return new Promise((function(t){var a=Object(r.a)({},e),n=c.c.getProductThumbnailById(e.id);c.a.get(n,{responseType:"blob"}).then((function(e){var r=e.data,n=URL.createObjectURL(r);a.image=n,t(a)})).catch((function(e){t(a)}))}))}));Promise.all(o).then((function(t){a(u(t)),e()}))}))})),s=Object(n.createSlice)({name:"products",initialState:{selectedProduct:null,searchText:"",products:[],rowsPerPage:20,page:0,totalRecords:0,order:{id:"name",direction:"asc"}},reducers:{setProducts:function(e,t){e.products=t.payload},setSelectedProduct:function(e,t){e.selectedProduct=t.payload},setProductsSearchText:function(e,t){e.searchText=t.payload},setPage:function(e,t){e.page=t.payload},setRowsPerPage:function(e,t){e.rowsPerPage=t.payload},setTotalRecords:function(e,t){e.totalRecords=t.payload},setOrder:function(e,t){e.order=t.payload}}}),d=s.actions,l=d.setProductsSearchText,u=(d.setSelectedProduct,d.setProducts),p=(d.setThumbnails,d.setPage),b=d.setRowsPerPage,j=d.setTotalRecords,m=d.setOrder;t.a=s.reducer},1762:function(e,t,a){"use strict";var r=a(1666),n=a(1632),c=(0,a(37).combineReducers)({products:r.a,newUpdateProduct:n.b});t.a=c},3407:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(1392),c=a(191),o=a(14),i=a(1762),s=a(1338),d=a(1330),l=a(768),u=a(199),p=a(1379),b=a(200),j=a(1374),m=a(15),h=a(43),f=a(41),g=a(128),O=a(1377),x=a(318),C=a(1666),P=a(8),v=a(20),S=a(17),w=a(1500),F=a(1469),y=a(1664),N=a(1337),T=a(1515),E=a(1349),R=a(1470),I=a(1),U=a(76),k=a(47),_=a(189),A=a(516),L=a(331),B=a.n(L),M=a(0),D=U.e().shape({categories:U.a().min(1),amount:U.d().required()}),H=function(e){var t=e.onUpdated,a=Object(I.useState)([]),r=Object(S.a)(a,2),n=r[0],c=r[1],o=Object(I.useState)(!0),i=Object(S.a)(o,2),d=i[0],l=i[1],u=Object(O.a)("products").t,p=Object(m.useDispatch)(),b=Object(k.useForm)({mode:"onChange",defaultValues:{},resolver:Object(_.a)(D)});Object(I.useEffect)((function(){console.log("get categories"),Object(A.g)().then((function(e){c(e),l(!1)}))}),[]);var j=b.control,h=b.getValues,f=b.formState,g=f.isValid,C=f.dirtyFields,U=Object(m.useSelector)((function(e){return e.auth.user.shop}));return Object(M.jsxs)(k.FormProvider,Object(P.a)(Object(P.a)({},b),{},{children:[Object(M.jsx)(w.a,{children:u("UPDATE_PRICE_PER_MASS_TITLE")}),Object(M.jsxs)(F.a,{children:[Object(M.jsx)(k.Controller,{name:"categories",control:j,defaultValue:[],render:function(e){var t=e.field,a=t.onChange,r=t.value;return Object(M.jsx)(y.a,{loading:d,className:"mt-8 mb-16",multiple:!0,getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.id===t.id},options:Object(v.a)(n),value:r,onChange:function(e,t){a(t)},renderInput:function(e){return Object(M.jsx)(N.a,Object(P.a)(Object(P.a)({},e),{},{placeholder:u("CATEGORIES_PLACE_HOLDER"),label:u("CATEGORIES_LABEL"),variant:"outlined",inputLabelProps:{shrink:!0},InputProps:Object(P.a)(Object(P.a)({},e.InputProps),{},{endAdornment:Object(M.jsxs)(M.Fragment,{children:[d?Object(M.jsx)(T.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}}),Object(M.jsx)(k.Controller,{name:"amount",control:j,render:function(e){var t,a=e.field;return Object(M.jsx)(N.a,{value:null===(t=a.value)||void 0===t?void 0:t.toLocaleString(),inputMode:"numeric",onChange:function(e){var t=e.target.value;t=t.replaceAll(",","");var r=parseFloat(t);r||(r=0),a.onChange(r)},className:"mt-8 mb-16",label:u("AMOUNT_LABEL"),id:"pricePerMass",InputProps:{startAdornment:Object(M.jsx)(E.a,{position:"start",children:U.cashUnitName})},variant:"outlined",fullWidth:!0})}})]}),Object(M.jsxs)(R.a,{children:[Object(M.jsx)(s.a,{onClick:function(){return p(Object(x.a)())},color:"error",children:u("CANCEL_BUTTON")}),Object(M.jsx)(s.a,{onClick:function(){var e=h();console.log(e);var a={categoryIds:e.categories.map((function(e){return e.id})),amountOfCash:e.amount};Object(A.a)(a).then((function(){p(Object(x.a)()),t&&t()}))},disabled:B.a.isEmpty(C)||!g,color:"secondary",children:u("UPDATE_BUTTON")})]})]}))};var W=function(){var e=Object(m.useDispatch)(),t=Object(m.useSelector)((function(e){return e.products.products.searchText})),a=Object(m.useSelector)(f.e),r=Object(O.a)("products").t,n=Object(g.a)((function(t){e(Object(C.d)(0)),e(Object(C.b)())}),500);return Object(M.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(M.jsxs)("div",{className:"flex items-center",children:[Object(M.jsx)(d.a,{component:j.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"shopping_basket"}),Object(M.jsx)(b.a,{component:j.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"hidden sm:flex text-16 md:text-24 mx-12 font-semibold",children:r("PRODUCTS_HEADER")})]}),Object(M.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:Object(M.jsx)(p.a,{theme:a,children:Object(M.jsxs)(u.a,{component:j.a.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[Object(M.jsx)(d.a,{color:"action",children:"search"}),Object(M.jsx)(l.a,{placeholder:r("SEARCH_PLACEHOLDER"),className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(t){return function(t){var a;e(Object(C.e)(null!==(a=t.target.value)&&void 0!==a?a:"")),n(t)}(t)}})]})})}),Object(M.jsx)(j.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(M.jsxs)(s.a,{component:h.a,to:"/apps/product/new",className:"whitespace-nowrap",variant:"contained",color:"secondary",children:[Object(M.jsx)("span",{className:"hidden sm:flex",children:r("ADD_NEW_PRODUCT_BUTTON")}),Object(M.jsx)("span",{className:"flex sm:hidden",children:r("NEW_BUTTON")})]})}),Object(M.jsx)(j.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(M.jsx)(s.a,{onClick:function(){e(Object(x.c)({maxWidth:"xs",fullWidth:!0,children:Object(M.jsx)(H,{onUpdated:function(){e(Object(C.b)())}})}))},className:"whitespace-nowrap ml-4",variant:"contained",color:"secondary",children:Object(M.jsx)("span",{className:"flex",children:r("UPDATE_PRICE_PER_MASS_BUTTON")})})})]})},V=a(54),z=a(1459),q=a(1522),G=a(1526),K=a(1525),J=a(1680),Q=a(1524),X=a(66),Y=a(322),Z=a(1331),$=a(1347),ee=a(1344),te=a(545),ae=a(1333),re=a(1302),ne=a(1679),ce=a(1339),oe=a(1555),ie=a(1523),se=a(1651),de=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"right",disablePadding:!1,translate:"NAME_LABEL",label:"Name",sort:!0},{id:"categories",align:"left",disablePadding:!1,label:"Categories",translate:"CATEGORIES_LABEL",sort:!1},{id:"unit",align:"center",disablePadding:!1,label:"Unit",translate:"UNIT_LABEL",sort:!1},{id:"mass",align:"right",disablePadding:!1,label:"Price",translate:"MASS_LABEL",sort:!0},{id:"pricePerMass",align:"right",disablePadding:!1,label:"Price per mass",translate:"PRICE_PER_MASS_LABEL",sort:!0},{id:"percentForFamiliarCustomer",align:"right",disablePadding:!1,label:"Percent for familiar customer",translate:"PERCENT_FOR_FAMILIAR_CUSTOMER_LABEL",sort:!0},{id:"percentForCustomer",align:"right",disablePadding:!1,label:"Percent for familiar customer",translate:"PERCENT_FOR_CUSTOMER_LABEL",sort:!0},{id:"priceForFamiliarCustomer",align:"right",disablePadding:!1,label:"Price",translate:"PRICE_FOR_FAMILIAR_CUSTOMER_LABEL",sort:!0},{id:"priceForCustomer",align:"right",disablePadding:!1,label:"Price",translate:"PRICE_FOR_CUSTOMER_LABEL",sort:!0}];var le=function(e){var t=Object(O.a)("products").t,a=e.selectedProducts,r=a.length,n=e.onMenuItemClick,c=Object(I.useState)(null),o=Object(S.a)(c,2),i=o[0],s=o[1],l=Object(m.useDispatch)(),u=function(t){return function(a){t.sort&&e.onRequestSort(a,t.id)}};function p(){s(null)}return Object(M.jsx)(ie.a,{children:Object(M.jsxs)(Q.a,{className:"h-48 sm:h-64",children:[Object(M.jsxs)(K.a,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[Object(M.jsx)(z.a,{indeterminate:r>0&&r<e.rowCount,checked:0!==e.rowCount&&r===e.rowCount,onChange:e.onSelectAllClick}),r>0&&Object(M.jsxs)(oe.a,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.paper}},children:[Object(M.jsx)(Z.a,{"aria-owns":i?"selectedProductsMenu":null,"aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},size:"large",children:Object(M.jsx)(d.a,{children:"more_horiz"})}),Object(M.jsx)(te.a,{id:"selectedProductsMenu",anchorEl:i,open:Boolean(i),onClose:p,children:Object(M.jsx)(re.a,{children:Object(M.jsxs)(ae.a,{onClick:function(){n(),p(),l(Object(x.c)({maxWidth:"xs",fullWidth:!0,children:Object(M.jsx)(se.a,{title:t("REMOVE_PRODUCTS_DIALOG_TITLE"),content:t("REMOVE_PRODUCTS_CONTENT",{products:a.map((function(e){return e.name})).join(", ")}),onAccept:function(){var e=a.map((function(e){return Object(A.o)(e.id)}));Promise.all(e).then((function(e){l(Object(x.a)()),l(Object(C.b)())}))}})}))},children:[Object(M.jsx)($.a,{className:"min-w-40",children:Object(M.jsx)(d.a,{children:"delete"})}),Object(M.jsx)(ee.a,{primary:t("REMOVE_BUTTON")})]})})})]})]}),de.map((function(a){var r;return Object(M.jsx)(K.a,{className:"p-4 md:p-16",align:a.align,padding:a.disablePadding?"none":"normal",sortDirection:e.order.id===a.id&&e.order.direction,children:Object(M.jsx)(ce.a,{title:"Sort",placement:"right"===a.align?"bottom-end":"bottom-start",enterDelay:300,children:Object(M.jsx)(ne.a,{active:e.order.id===a.id,direction:e.order.id===a.id?e.order.direction:"asc",onClick:u(a),className:"font-semibold",hideSortIcon:!a.sort,children:t(null!==(r=a.translate)&&void 0!==r?r:"")})})},a.id)}),this)]})})};var ue=Object(X.k)((function(e){var t=Object(m.useDispatch)(),a=Object(m.useSelector)((function(e){return e.products.products.products})),r=Object(m.useSelector)((function(e){return e.products.products.page})),n=Object(m.useSelector)((function(e){return e.products.products.totalRecords})),c=Object(m.useSelector)((function(e){return e.products.products.rowsPerPage})),o=Object(I.useState)(!0),i=Object(S.a)(o,2),s=i[0],d=i[1],l=Object(m.useSelector)((function(e){return e.auth.user.shop})),u=Object(I.useState)([]),p=Object(S.a)(u,2),h=p[0],f=p[1],g=Object(m.useSelector)((function(e){return e.products.products.order}));return Object(I.useEffect)((function(){t(Object(C.b)({search:""})).then((function(){d(!1)}))}),[t]),s?Object(M.jsx)(Y.a,{}):0===a.length?Object(M.jsx)(j.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:Object(M.jsx)(b.a,{color:"textSecondary",variant:"h5",children:"There are no products!"})}):Object(M.jsxs)("div",{className:"w-full flex flex-col",children:[Object(M.jsx)(V.default,{className:"flex-grow overflow-x-auto",children:Object(M.jsxs)(q.a,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[Object(M.jsx)(le,{selectedProducts:h,order:g,onSelectAllClick:function(e){e.target.checked?f(a.map((function(e){return e}))):f([])},onRequestSort:function(e,a){var r=a,n="desc";g.id===a&&"desc"===g.direction&&(n="asc"),t(Object(C.c)({direction:n,id:r})),t(Object(C.b)())},rowCount:a.length,onMenuItemClick:function(){f([])}}),Object(M.jsx)(G.a,{children:a.map((function(t,a){var r=-1!==h.indexOf(t);return Object(M.jsxs)(Q.a,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,onClick:function(a){return r=t,void e.history.push("/apps/product/".concat(r.id));var r},children:[Object(M.jsx)(K.a,{className:"w-40 md:w-64 text-center",padding:"none",children:Object(M.jsx)(z.a,{checked:r,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var a=h.indexOf(t);console.log("handle check",a);var r=[];-1===a?r=r.concat(h,t):0===a?r=r.concat(h.slice(1)):a===h.length-1?r=r.concat(h.slice(0,-1)):a>0&&(r=r.concat(h.slice(0,a),h.slice(a+1))),f(r)}(0,t)}})}),Object(M.jsx)(K.a,{className:"w-52 px-4 md:px-0",component:"th",scope:"row",padding:"none",children:t.image?Object(M.jsx)("img",{className:"w-full block rounded",src:t.image,alt:t.name}):Object(M.jsx)("img",{className:"w-full block rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:t.name})}),Object(M.jsx)(K.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.name}),Object(M.jsx)(K.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:t.categories.join(", ")}),Object(M.jsx)(K.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:t.unitName}),Object(M.jsxs)(K.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[t.mass&&t.mass.toLocaleString()," ",t.mass&&Object(M.jsx)("span",{children:" Kg "})]}),Object(M.jsxs)(K.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.pricePerMass&&void 0!==t.pricePerMass&&t.pricePerMass.toLocaleString(),null!==t.pricePerMass&&void 0!==t.pricePerMass&&Object(M.jsx)("span",{children:"VND"})]}),Object(M.jsxs)(K.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.percentForFamiliarCustomer&&void 0!==t.percentForFamiliarCustomer&&t.percentForFamiliarCustomer,null!==t.percentForFamiliarCustomer&&void 0!==t.percentForFamiliarCustomer&&Object(M.jsx)("span",{children:"%"})]}),Object(M.jsxs)(K.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.percentForCustomer&&void 0!==t.percentForCustomer&&t.percentForCustomer,null!==t.percentForCustomer&&void 0!==t.percentForCustomer&&Object(M.jsx)("span",{children:"%"})]}),Object(M.jsxs)(K.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.priceForFamiliarCustomer&&void 0!==t.priceForFamiliarCustomer&&t.priceForFamiliarCustomer.toLocaleString(),null!==t.priceForFamiliarCustomer&&void 0!==t.priceForFamiliarCustomer&&Object(M.jsxs)("span",{children:[" ",l.cashUnitName," "]})]}),Object(M.jsxs)(K.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.priceForCustomer&&void 0!==t.priceForCustomer&&t.priceForCustomer.toLocaleString(),null!==t.priceForCustomer&&void 0!==t.priceForCustomer&&Object(M.jsxs)("span",{children:[" ",l.cashUnitName," "]})]})]},t.id)}))})]})}),Object(M.jsx)(J.a,{className:"flex-shrink-0 border-t-1",component:"div",count:n,rowsPerPage:c,rowsPerPageOptions:[10,20,50],page:r,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,a){t(Object(C.d)(a)),t(Object(C.b)())},onRowsPerPageChange:function(e){t(Object(C.f)(e.target.value)),t(Object(C.b)())}})]})})),pe=Object(o.a)(n.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(r.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136}),"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));t.default=Object(c.a)("products",i.a)((function(){return Object(M.jsx)(pe,{header:Object(M.jsx)(W,{}),content:Object(M.jsx)(ue,{}),innerScroll:!0})}))}}]);