(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[138],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var r=a(101),n=a(4),c=a(54),o=a(14),i=a(6),s=a(1),d=a(1294),l=a(51),u=a(1377),p=a(41),b=a(15),m=a(0);var h=function(e){var t=Object(l.a)(),a=Object(b.useSelector)(Object(p.c)(t.palette.primary.main));return Object(m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(m.jsx)(u.a,{theme:a,children:e.header})})},j=a(8),g=a(17),f=a(133),O=a(1374),x=a(1378);var P=function(e){var t=Object(l.a)(),a=Object(b.useSelector)(Object(p.c)(t.palette.primary.main));return Object(m.jsxs)(m.Fragment,{children:[e.header&&Object(m.jsx)(u.a,{theme:a,children:Object(m.jsx)("div",{className:Object(i.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(m.jsx)(c.default,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function C(e,t){var a=Object(s.useState)(!1),r=Object(g.a)(a,2),n=r[0],c=r[1];Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:o}}));var o=function(){c(!n)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O.a,{lgUp:"permanent"===e.variant,children:Object(m.jsx)(x.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return o()},disableSwipeToOpen:!0,classes:{root:Object(i.default)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(m.jsx)(P,Object(j.a)({},e))})}),"permanent"===e.variant&&Object(m.jsx)(O.a,{lgDown:!0,children:Object(m.jsx)(f.a,{variant:"permanent",className:Object(i.default)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:Object(i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(m.jsx)(P,Object(j.a)({},e))})})]})}var v,S=Object(s.forwardRef)(C),w=Object(o.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:F,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:T,minHeight:T,maxHeight:T,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:N,minHeight:N,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:y,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:F,minHeight:F,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),y=240,F=200,N=64,T=F-N,I=Object(s.forwardRef)((function(e,t){var a=Object(s.useRef)(null),r=Object(s.useRef)(null),n=Object(s.useRef)(null),o=e.rightSidebarHeader||e.rightSidebarContent,l=e.leftSidebarHeader||e.leftSidebarContent;return Object(s.useImperativeHandle)(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(m.jsxs)(w,{className:Object(i.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[Object(m.jsx)("div",{className:"FusePageCarded-topBg"}),Object(m.jsxs)("div",{className:"flex container w-full",children:[l&&Object(m.jsx)(S,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n}),Object(m.jsxs)("div",{className:Object(i.default)("FusePageCarded-contentWrapper",l&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",o&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(m.jsx)(h,{header:e.header}),Object(m.jsxs)("div",{className:Object(i.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(m.jsx)(c.default,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),o&&Object(m.jsx)(S,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:n})]})]})]})}));I.defaultProps={};var R=Object(s.memo)(Object(o.a)(I)(v||(v=Object(r.a)([""]))))},1630:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"f",(function(){return p})),a.d(t,"g",(function(){return b})),a.d(t,"d",(function(){return m})),a.d(t,"a",(function(){return h})),a.d(t,"l",(function(){return j})),a.d(t,"h",(function(){return g})),a.d(t,"m",(function(){return f})),a.d(t,"j",(function(){return C})),a.d(t,"k",(function(){return S})),a.d(t,"i",(function(){return y}));var r=a(8),n=a(55),c=a(332),o=a.n(c),i=(a(1795).ExpandRounded,a(37)),s=i.createSlice,d=i.createAsyncThunk,l=d("products/newUpdateProduct/getCategories",(function(e,t){var a=t.dispatch;t.getState;return new Promise((function(e,t){n.a.get(n.c.getCategories).then((function(t){var r=t.data.data;a(P(r)),e()}))}))})),u=d("products/newUpdateProduct/getUnitCategories",(function(e,t){var a=t.dispatch;return new Promise((function(e,t){n.a.get(n.c.getUnitCategories).then((function(t){var r=t.data.data;a(v(r)),e()}))}))})),p=d("products/newUpdateProduct/getUnits",(function(e,t){var a=t.dispatch,r=t.getState;return new Promise((function(e,t){var c=r().products.newUpdateProduct.unitCategoryId;n.a.get(n.c.getUnits,{params:{categoryId:c}}).then((function(t){var r=t.data.data;a(w(r)),e()}))}))})),b=d("products/newUpdateProduct/getWarehouses",(function(e,t){t.dispatch;return new Promise((function(e,t){n.a.get(n.c.getWarehouses).then((function(t){var a=t.data.data;e(a)}))}))})),m=d("products/newUpdateProduct/getProductById",(function(e,t){t.getState;var a=t.dispatch,c=e.id;return new Promise((function(e,t){n.a.get(n.c.getProductDetailById(c)).then((function(t){var c=t.data.data,i=c.assets.map((function(e){return new Promise((function(t,a){var r=e.id,o=e.assetType;n.a.get(n.c.getAssetByProductIdAndAssetId(c.id,r),{responseType:"blob"}).then((function(e){var a=new FileReader,n=e.data,c=URL.createObjectURL(n);a.onloadend=function(){t({id:r,url:c,type:"image",blob:n,assetType:o})},a.readAsDataURL(n)})).catch((function(e){a()}))}))}));Promise.all(i).then((function(t){var n,i=t.map((function(e){return e.blob})),s=Object(r.a)({},c);s.imageUrls=t,s.images=i,s.thumbnailId=null===(n=o.a.find(t,(function(e){return"thumbnail"===e.assetType})))||void 0===n?void 0:n.id,s.warehouses=c.warehouses.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{name:e.warehouseName})})),a(F(s)),e()}))}))}))})),h=d("products/newUpdateProduct/createProduct",(function(e,t){t.dispatch;var a=e.images;return delete e.images,new Promise((function(t,r){n.a.post(n.c.createProduct,e).then((function(e){var r=e.data.data.id,c=a.map((function(e){return new Promise((function(t,a){var c=new FormData;c.append("image",e),c.append("assetType",e.assetType),n.a.post(n.c.uploadProductImageById(r),c).then((function(e){t(e)})).catch((function(e){a()}))}))}));Promise.all(c).then((function(){t()}))})).catch((function(e){r()}))}))})),j=d("products/newUpdateProduct/updateProduct",(function(e,t){t.dispatch;return new Promise((function(t,a){n.a.post(n.c.updateProductById(e.id),e).then((function(e){t()}))}))})),g=d("products/newUpdateProduct/selectThumbnail",(function(e){return new Promise((function(t,a){n.a.post(n.c.selectProductThumbnailById(e.productId),{assetId:e.assetId}).then((function(e){t()}))}))})),f=d("products/newUpdateProduct/uploadImage",(function(e,t){t.dispatch;var a=e.productId,r=e.image;return new Promise((function(e,t){var c=new FormData;c.append("image",r),c.append("assetType",r.assetType),n.a.post(n.c.uploadProductImageById(a),c).then((function(t){var a=t.data.data.id;e({id:a})})).catch((function(e){t()}))}))})),O=s({name:"newProduct",initialState:{product:{},categories:[],unitCategories:[],units:[],mode:"new",unitCategoryId:null},reducers:{resetState:function(e,t){},setCategories:function(e,t){e.categories=t.payload},setUnits:function(e,t){e.units=t.payload},setUnitCategories:function(e,t){e.unitCategories=t.payload},setUnitCategoryId:function(e,t){e.unitCategoryId=t.payload},setProduct:function(e,t){e.product=t.payload},setMode:function(e,t){e.mode=t.payload},setNewProduct:function(e,t){e.product={id:0,name:"",categories:[],description:"",images:[],imageUrls:[],thumbnailId:null,mass:null,pricePerMass:null,unitId:null,unitName:"",percentForFamiliarCustomer:null,percentForCustomer:null,priceForFamiliarCustomer:null,priceForCustomer:null,warehouses:[]}}}}),x=O.actions,P=(x.resetState,x.setCategories),C=x.setNewProduct,v=x.setUnitCategories,S=x.setUnitCategoryId,w=x.setUnits,y=x.setMode,F=x.setProduct;t.b=O.reducer},1663:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return u})),a.d(t,"e",(function(){return b})),a.d(t,"g",(function(){return m})),a.d(t,"d",(function(){return j}));var r=a(8),n=a(37),c=a(55),o=Object(n.createAsyncThunk)("products/products/getProducts",(function(e,t){var a=t.dispatch,r=(0,t.getState)().products.products,n=r.searchText,o=r.page,s=r.rowsPerPage,d=r.order;return new Promise((function(e,t){c.a.get(c.c.getProducts,{params:{search:n,pageIndex:o,pageSize:s,sortFieldName:d.id,isSortAscending:"asc"===d.direction}}).then((function(t){t.data.data.forEach((function(e){e.image=null,e.categories=e.productCategoryNames})),a(p(t.data.data)),a(i()),a(h(t.data.totalItems)),e(t.data.data)}))}))})),i=Object(n.createAsyncThunk)("products/products/getThumbnails",(function(e,t){var a=t.dispatch,n=t.getState;return new Promise((function(e,t){var o=n().products.products.products.map((function(e,t){return new Promise((function(t){var a=Object(r.a)({},e),n=c.c.getProductThumbnailById(e.id);c.a.get(n,{responseType:"blob"}).then((function(e){var r=e.data,n=URL.createObjectURL(r);a.image=n,t(a)})).catch((function(e){t(a)}))}))}));Promise.all(o).then((function(t){a(p(t)),e()}))}))})),s=Object(n.createAsyncThunk)("products/products/removeProducts",(function(e,t){t.dispatch,t.getState;return new Promise((function(t){var a=e.map((function(e){return new Promise((function(t){c.a.post(c.c.softlyRemoveProductById(e)).then(t(e)).catch((function(a){t(e)}))}))}));Promise.all(a).then((function(e){t(e)}))}))})),d=Object(n.createSlice)({name:"products",initialState:{selectedProduct:null,searchText:"",products:[],rowsPerPage:20,page:0,totalRecords:0,order:{id:"name",direction:"asc"}},reducers:{setProducts:function(e,t){e.products=t.payload},setSelectedProduct:function(e,t){e.selectedProduct=t.payload},setProductsSearchText:function(e,t){e.searchText=t.payload},setPage:function(e,t){e.page=t.payload},setRowsPerPage:function(e,t){e.rowsPerPage=t.payload},setTotalRecords:function(e,t){e.totalRecords=t.payload},setOrder:function(e,t){e.order=t.payload}}}),l=d.actions,u=l.setProductsSearchText,p=(l.setSelectedProduct,l.setProducts),b=(l.setThumbnails,l.setPage),m=l.setRowsPerPage,h=l.setTotalRecords,j=l.setOrder;t.a=d.reducer},1759:function(e,t,a){"use strict";var r=a(1663),n=a(1630),c=(0,a(37).combineReducers)({products:r.a,newUpdateProduct:n.b});t.a=c},3404:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(1390),c=a(191),o=a(14),i=a(1759),s=a(1336),d=a(1327),l=a(765),u=a(199),p=a(1377),b=a(222),m=a(1372),h=a(15),j=a(43),g=a(41),f=a(128),O=a(1375),x=a(322),P=a(1663),C=a(8),v=a(20),S=a(17),w=a(1498),y=a(1466),F=a(1661),N=a(1335),T=a(1513),I=a(1347),R=a(1467),k=a(1),E=a(76),U=a(47),A=a(189),L=a(540),_=a(332),B=a.n(_),M=a(0),D=E.e().shape({categories:E.a().min(1),amount:E.d().required()}),H=function(e){var t=e.onUpdated,a=Object(k.useState)([]),r=Object(S.a)(a,2),n=r[0],c=r[1],o=Object(k.useState)(!0),i=Object(S.a)(o,2),d=i[0],l=i[1],u=Object(O.a)("products").t,p=Object(h.useDispatch)(),b=Object(U.useForm)({mode:"onChange",defaultValues:{},resolver:Object(A.a)(D)});Object(k.useEffect)((function(){console.log("get categories"),Object(L.g)().then((function(e){c(e),l(!1)}))}),[]);var m=b.control,j=b.getValues,g=b.formState,f=g.isValid,P=g.dirtyFields,E=Object(h.useSelector)((function(e){return e.auth.user.shop}));return Object(M.jsxs)(U.FormProvider,Object(C.a)(Object(C.a)({},b),{},{children:[Object(M.jsx)(w.a,{children:u("UPDATE_PRICE_PER_MASS_TITLE")}),Object(M.jsxs)(y.a,{children:[Object(M.jsx)(U.Controller,{name:"categories",control:m,defaultValue:[],render:function(e){var t=e.field,a=t.onChange,r=t.value;return Object(M.jsx)(F.a,{loading:d,className:"mt-8 mb-16",multiple:!0,getOptionLabel:function(e){return e.name},isOptionEqualToValue:function(e,t){return e.id===t.id},options:Object(v.a)(n),value:r,onChange:function(e,t){a(t)},renderInput:function(e){return Object(M.jsx)(N.a,Object(C.a)(Object(C.a)({},e),{},{placeholder:u("CATEGORIES_PLACE_HOLDER"),label:u("CATEGORIES_LABEL"),variant:"outlined",inputLabelProps:{shrink:!0},InputProps:Object(C.a)(Object(C.a)({},e.InputProps),{},{endAdornment:Object(M.jsxs)(M.Fragment,{children:[d?Object(M.jsx)(T.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}}),Object(M.jsx)(U.Controller,{name:"amount",control:m,render:function(e){var t,a=e.field;return Object(M.jsx)(N.a,{value:null===(t=a.value)||void 0===t?void 0:t.toLocaleString(),inputMode:"numeric",onChange:function(e){var t=e.target.value;t=t.replaceAll(",","");var r=parseFloat(t);r||(r=0),a.onChange(r)},className:"mt-8 mb-16",label:u("AMOUNT_LABEL"),id:"pricePerMass",InputProps:{startAdornment:Object(M.jsx)(I.a,{position:"start",children:E.cashUnitName})},variant:"outlined",fullWidth:!0})}})]}),Object(M.jsxs)(R.a,{children:[Object(M.jsx)(s.a,{onClick:function(){return p(Object(x.a)())},color:"error",children:u("CANCEL_BUTTON")}),Object(M.jsx)(s.a,{onClick:function(){var e=j();console.log(e);var a={categoryIds:e.categories.map((function(e){return e.id})),amountOfCash:e.amount};Object(L.a)(a).then((function(){p(Object(x.a)()),t&&t()}))},disabled:B.a.isEmpty(P)||!f,color:"secondary",children:u("UPDATE_BUTTON")})]})]}))};var W=function(){var e=Object(h.useDispatch)(),t=Object(h.useSelector)((function(e){return e.products.products.searchText})),a=Object(h.useSelector)(g.e),r=Object(O.a)("products").t,n=Object(f.a)((function(t){e(Object(P.e)(0)),e(Object(P.b)())}),500);return Object(M.jsxs)("div",{className:"flex flex-1 w-full items-center justify-between",children:[Object(M.jsxs)("div",{className:"flex items-center",children:[Object(M.jsx)(d.a,{component:m.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"shopping_basket"}),Object(M.jsx)(b.a,{component:m.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"hidden sm:flex text-16 md:text-24 mx-12 font-semibold",children:r("PRODUCTS_HEADER")})]}),Object(M.jsx)("div",{className:"flex flex-1 items-center justify-center px-12",children:Object(M.jsx)(p.a,{theme:a,children:Object(M.jsxs)(u.a,{component:m.a.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow",children:[Object(M.jsx)(d.a,{color:"action",children:"search"}),Object(M.jsx)(l.a,{placeholder:r("SEARCH_PLACEHOLDER"),className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(t){return function(t){var a;e(Object(P.f)(null!==(a=t.target.value)&&void 0!==a?a:"")),n(t)}(t)}})]})})}),Object(M.jsx)(m.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(M.jsxs)(s.a,{component:j.a,to:"/apps/product/new",className:"whitespace-nowrap",variant:"contained",color:"secondary",children:[Object(M.jsx)("span",{className:"hidden sm:flex",children:r("ADD_NEW_PRODUCT_BUTTON")}),Object(M.jsx)("span",{className:"flex sm:hidden",children:r("NEW_BUTTON")})]})}),Object(M.jsx)(m.a.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0,transition:{delay:.2}},children:Object(M.jsx)(s.a,{onClick:function(){e(Object(x.c)({maxWidth:"xs",fullWidth:!0,children:Object(M.jsx)(H,{onUpdated:function(){e(Object(P.b)())}})}))},className:"whitespace-nowrap ml-4",variant:"contained",color:"secondary",children:Object(M.jsx)("span",{className:"flex",children:r("UPDATE_PRICE_PER_MASS_BUTTON")})})})]})},V=a(54),z=a(1465),q=a(1520),G=a(1524),J=a(1523),K=a(1677),Q=a(1522),X=a(66),Y=a(323),Z=a(1328),$=a(1345),ee=a(1342),te=a(545),ae=a(1331),re=a(1299),ne=a(1676),ce=a(1337),oe=a(1553),ie=a(1521),se=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"right",disablePadding:!1,translate:"NAME_LABEL",label:"Name",sort:!0},{id:"categories",align:"left",disablePadding:!1,label:"Categories",translate:"CATEGORIES_LABEL",sort:!1},{id:"unit",align:"center",disablePadding:!1,label:"Unit",translate:"UNIT_LABEL",sort:!1},{id:"mass",align:"right",disablePadding:!1,label:"Price",translate:"MASS_LABEL",sort:!0},{id:"pricePerMass",align:"right",disablePadding:!1,label:"Price per mass",translate:"PRICE_PER_MASS_LABEL",sort:!0},{id:"percentForFamiliarCustomer",align:"right",disablePadding:!1,label:"Percent for familiar customer",translate:"PERCENT_FOR_FAMILIAR_CUSTOMER_LABEL",sort:!0},{id:"percentForCustomer",align:"right",disablePadding:!1,label:"Percent for familiar customer",translate:"PERCENT_FOR_CUSTOMER_LABEL",sort:!0},{id:"priceForFamiliarCustomer",align:"right",disablePadding:!1,label:"Price",translate:"PRICE_FOR_FAMILIAR_CUSTOMER_LABEL",sort:!0},{id:"priceForCustomer",align:"right",disablePadding:!1,label:"Price",translate:"PRICE_FOR_CUSTOMER_LABEL",sort:!0}];var de=function(e){var t=Object(O.a)("products").t,a=e.selectedProductIds,r=a.length,n=e.onMenuItemClick,c=Object(k.useState)(null),o=Object(S.a)(c,2),i=o[0],s=o[1],l=Object(h.useDispatch)(),u=function(t){return function(a){t.sort&&e.onRequestSort(a,t.id)}};function p(){s(null)}return Object(M.jsx)(ie.a,{children:Object(M.jsxs)(Q.a,{className:"h-48 sm:h-64",children:[Object(M.jsxs)(J.a,{padding:"none",className:"w-40 md:w-64 text-center z-99",children:[Object(M.jsx)(z.a,{indeterminate:r>0&&r<e.rowCount,checked:0!==e.rowCount&&r===e.rowCount,onChange:e.onSelectAllClick}),r>0&&Object(M.jsxs)(oe.a,{className:"flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1",sx:{background:function(e){return e.palette.background.paper}},children:[Object(M.jsx)(Z.a,{"aria-owns":i?"selectedProductsMenu":null,"aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},size:"large",children:Object(M.jsx)(d.a,{children:"more_horiz"})}),Object(M.jsx)(te.a,{id:"selectedProductsMenu",anchorEl:i,open:Boolean(i),onClose:p,children:Object(M.jsx)(re.a,{children:Object(M.jsxs)(ae.a,{onClick:function(){l(Object(P.c)(a)).then((function(e){console.log("finish ",e),n(),p(),l(Object(P.b)())}))},children:[Object(M.jsx)($.a,{className:"min-w-40",children:Object(M.jsx)(d.a,{children:"delete"})}),Object(M.jsx)(ee.a,{primary:"Remove"})]})})})]})]}),se.map((function(a){var r;return Object(M.jsx)(J.a,{className:"p-4 md:p-16",align:a.align,padding:a.disablePadding?"none":"normal",sortDirection:e.order.id===a.id&&e.order.direction,children:Object(M.jsx)(ce.a,{title:"Sort",placement:"right"===a.align?"bottom-end":"bottom-start",enterDelay:300,children:Object(M.jsx)(ne.a,{active:e.order.id===a.id,direction:e.order.id===a.id?e.order.direction:"asc",onClick:u(a),className:"font-semibold",hideSortIcon:!a.sort,children:t(null!==(r=a.translate)&&void 0!==r?r:"")})})},a.id)}),this)]})})};var le=Object(X.k)((function(e){var t=Object(h.useDispatch)(),a=Object(h.useSelector)((function(e){return e.products.products.products})),r=Object(h.useSelector)((function(e){return e.products.products.page})),n=Object(h.useSelector)((function(e){return e.products.products.totalRecords})),c=Object(h.useSelector)((function(e){return e.products.products.rowsPerPage})),o=Object(k.useState)(!0),i=Object(S.a)(o,2),s=i[0],d=i[1],l=Object(h.useSelector)((function(e){return e.auth.user.shop})),u=Object(k.useState)([]),p=Object(S.a)(u,2),j=p[0],g=p[1],f=Object(h.useSelector)((function(e){return e.products.products.order}));return Object(k.useEffect)((function(){t(Object(P.b)({search:""})).then((function(){d(!1)}))}),[t]),s?Object(M.jsx)(Y.a,{}):0===a.length?Object(M.jsx)(m.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:Object(M.jsx)(b.a,{color:"textSecondary",variant:"h5",children:"There are no products!"})}):Object(M.jsxs)("div",{className:"w-full flex flex-col",children:[Object(M.jsx)(V.default,{className:"flex-grow overflow-x-auto",children:Object(M.jsxs)(q.a,{stickyHeader:!0,className:"min-w-xl","aria-labelledby":"tableTitle",children:[Object(M.jsx)(de,{selectedProductIds:j,order:f,onSelectAllClick:function(e){e.target.checked?g(a.map((function(e){return e.id}))):g([])},onRequestSort:function(e,a){var r=a,n="desc";f.id===a&&"desc"===f.direction&&(n="asc"),t(Object(P.d)({direction:n,id:r})),t(Object(P.b)())},rowCount:a.length,onMenuItemClick:function(){g([])}}),Object(M.jsx)(G.a,{children:a.map((function(t,a){var r=-1!==j.indexOf(t.id);return Object(M.jsxs)(Q.a,{className:"h-72 cursor-pointer",hover:!0,role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,onClick:function(a){return r=t,void e.history.push("/apps/product/".concat(r.id));var r},children:[Object(M.jsx)(J.a,{className:"w-40 md:w-64 text-center",padding:"none",children:Object(M.jsx)(z.a,{checked:r,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var a=j.indexOf(t),r=[];-1===a?r=r.concat(j,t):0===a?r=r.concat(j.slice(1)):a===j.length-1?r=r.concat(j.slice(0,-1)):a>0&&(r=r.concat(j.slice(0,a),j.slice(a+1))),g(r)}(0,t.id)}})}),Object(M.jsx)(J.a,{className:"w-52 px-4 md:px-0",component:"th",scope:"row",padding:"none",children:t.image?Object(M.jsx)("img",{className:"w-full block rounded",src:t.image,alt:t.name}):Object(M.jsx)("img",{className:"w-full block rounded",src:"assets/images/ecommerce/product-image-placeholder.png",alt:t.name})}),Object(M.jsx)(J.a,{className:"p-4 md:p-16",component:"th",scope:"row",children:t.name}),Object(M.jsx)(J.a,{className:"p-4 md:p-16 truncate",component:"th",scope:"row",children:t.categories.join(", ")}),Object(M.jsx)(J.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:t.unitName}),Object(M.jsxs)(J.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[t.mass&&t.mass.toLocaleString()," ",t.mass&&Object(M.jsx)("span",{children:" Kg "})]}),Object(M.jsxs)(J.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.pricePerMass&&void 0!==t.pricePerMass&&t.pricePerMass.toLocaleString(),null!==t.pricePerMass&&void 0!==t.pricePerMass&&Object(M.jsx)("span",{children:"VND"})]}),Object(M.jsxs)(J.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.percentForFamiliarCustomer&&void 0!==t.percentForFamiliarCustomer&&t.percentForFamiliarCustomer,null!==t.percentForFamiliarCustomer&&void 0!==t.percentForFamiliarCustomer&&Object(M.jsx)("span",{children:"%"})]}),Object(M.jsxs)(J.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.percentForCustomer&&void 0!==t.percentForCustomer&&t.percentForCustomer,null!==t.percentForCustomer&&void 0!==t.percentForCustomer&&Object(M.jsx)("span",{children:"%"})]}),Object(M.jsxs)(J.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.priceForFamiliarCustomer&&void 0!==t.priceForFamiliarCustomer&&t.priceForFamiliarCustomer.toLocaleString(),null!==t.priceForFamiliarCustomer&&void 0!==t.priceForFamiliarCustomer&&Object(M.jsxs)("span",{children:[" ",l.cashUnitName," "]})]}),Object(M.jsxs)(J.a,{className:"p-4 md:p-16",component:"th",scope:"row",align:"right",children:[null!==t.priceForCustomer&&void 0!==t.priceForCustomer&&t.priceForCustomer.toLocaleString(),null!==t.priceForCustomer&&void 0!==t.priceForCustomer&&Object(M.jsxs)("span",{children:[" ",l.cashUnitName," "]})]})]},t.id)}))})]})}),Object(M.jsx)(K.a,{className:"flex-shrink-0 border-t-1",component:"div",count:n,rowsPerPage:c,rowsPerPageOptions:[10,20,50],page:r,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onPageChange:function(e,a){t(Object(P.e)(a)),t(Object(P.b)())},onRowsPerPageChange:function(e){t(Object(P.g)(e.target.value)),t(Object(P.b)())}})]})})),ue=Object(o.a)(n.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(r.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136}),"& .FusePageCarded-content":{display:"flex"},"& .FusePageCarded-contentCard":{overflow:"hidden"}}}));t.default=Object(c.a)("products",i.a)((function(){return Object(M.jsx)(ue,{header:Object(M.jsx)(W,{}),content:Object(M.jsx)(le,{}),innerScroll:!0})}))}}]);