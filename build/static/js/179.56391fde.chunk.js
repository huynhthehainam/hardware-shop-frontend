(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[179],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var r=a(98),n=a(4),c=a(54),l=a(14),i=a(6),s=a(1),o=a(1294),d=a(50),j=a(1377),u=a(41),b=a(15),m=a(0);var p=function(e){var t=Object(d.a)(),a=Object(b.useSelector)(Object(u.c)(t.palette.primary.main));return Object(m.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(m.jsx)(j.a,{theme:a,children:e.header})})},f=a(8),h=a(17),O=a(133),x=a(1374),g=a(1378);var v=function(e){var t=Object(d.a)(),a=Object(b.useSelector)(Object(u.c)(t.palette.primary.main));return Object(m.jsxs)(m.Fragment,{children:[e.header&&Object(m.jsx)(j.a,{theme:a,children:Object(m.jsx)("div",{className:Object(i.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(m.jsx)(c.default,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function y(e,t){var a=Object(s.useState)(!1),r=Object(h.a)(a,2),n=r[0],c=r[1];Object(s.useImperativeHandle)(t,(function(){return{toggleSidebar:l}}));var l=function(){c(!n)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x.a,{lgUp:"permanent"===e.variant,children:Object(m.jsx)(g.a,{variant:"temporary",anchor:e.position,open:n,onOpen:function(e){},onClose:function(e){return l()},disableSwipeToOpen:!0,classes:{root:Object(i.default)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(m.jsx)(v,Object(f.a)({},e))})}),"permanent"===e.variant&&Object(m.jsx)(x.a,{lgDown:!0,children:Object(m.jsx)(O.a,{variant:"permanent",className:Object(i.default)("FusePageCarded-sidebarWrapper",e.variant),open:n,classes:{paper:Object(i.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(m.jsx)(v,Object(f.a)({},e))})})]})}var S,C=Object(s.forwardRef)(y),N=Object(l.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:w,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:P,minHeight:P,maxHeight:P,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:A,minHeight:A,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:k,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:w,minHeight:w,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(n.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),k=240,w=200,A=64,P=w-A,F=Object(s.forwardRef)((function(e,t){var a=Object(s.useRef)(null),r=Object(s.useRef)(null),n=Object(s.useRef)(null),l=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return Object(s.useImperativeHandle)(t,(function(){return{rootRef:n,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(m.jsxs)(N,{className:Object(i.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:n,children:[Object(m.jsx)("div",{className:"FusePageCarded-topBg"}),Object(m.jsxs)("div",{className:"flex container w-full",children:[d&&Object(m.jsx)(C,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:n}),Object(m.jsxs)("div",{className:Object(i.default)("FusePageCarded-contentWrapper",d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",l&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(m.jsx)(p,{header:e.header}),Object(m.jsxs)("div",{className:Object(i.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(m.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(m.jsx)(c.default,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),l&&Object(m.jsx)(C,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:n})]})]})]})}));F.defaultProps={};var I=Object(s.memo)(Object(l.a)(F)(S||(S=Object(r.a)([""]))))},3392:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(1390),c=a(190),l=a(1),i=a(15),s=a(66),o=a(14),d=a(17),j=a(21),u=a(1353),b=a(1344),m=a(1327),p=a(1328),f=a(222),h=a(1372),O=a(128),x=a(0),g=Object(o.a)("div")((function(e){e.theme;return{display:"flex",alignItems:"center",height:20,borderRadius:10,padding:"0 6px",fontSize:10,backgroundColor:"rgba(0,0,0,.08);","& > span":{width:8,height:8,marginRight:4,borderRadius:"50%",backgroundColor:e.color}}}));var v,y=function(e){return Object(x.jsxs)(g,{className:e.className,color:e.color,children:[Object(x.jsx)("span",{}),Object(x.jsx)("div",{children:e.title})]})},S=a(3),C=a.n(S),N=a(7),k=a(37),w=a(89),A=a.n(w),P=Object(k.createAsyncThunk)("mailApp/labels/getLabels",Object(N.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/api/mail-app/labels");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),F=Object(k.createEntityAdapter)({}),I=F.getSelectors((function(e){return e.mailApp.labels})),M=I.selectAll,T=I.selectEntities,R=(I.selectById,Object(k.createSlice)({name:"mailApp/labels",initialState:F.getInitialState(null),reducers:{},extraReducers:Object(r.a)({},P.fulfilled,F.setAll)}).reducer),E=a(8),z=a(62),D=Object(k.createAsyncThunk)("mailApp/mail/getMail",function(){var e=Object(N.a)(C.a.mark((function e(t){var a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/api/mail-app/mail",{params:t});case 2:return a=e.sent,e.next=5,a.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),H=Object(k.createAsyncThunk)("mailApp/mail/updateMail",function(){var e=Object(N.a)(C.a.mark((function e(t,a){var r,n,c,l,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.getState,n=a.dispatch,c=r().mailApp.mail.id,e.next=4,A.a.post("/api/mail-app/update-mail",Object(E.a)({id:c},t));case 4:return l=e.sent,e.next=7,l.data;case 7:return i=e.sent,n(Object(z.c)({message:"Mail Saved"})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),B=Object(k.createSlice)({name:"mailApp/mail",initialState:null,reducers:{},extraReducers:(v={},Object(r.a)(v,D.fulfilled,(function(e,t){return t.payload})),Object(r.a)(v,H.fulfilled,(function(e,t){return Object(E.a)(Object(E.a)({},e),t.payload)})),v)}).reducer;var W=Object(s.k)((function(e){var t=Object(i.useDispatch)(),a=Object(i.useSelector)((function(e){return e.mailApp.mail})),r=Object(i.useSelector)(T),n=Object(s.j)(),c=Object(l.useState)(!1),o=Object(d.a)(c,2),g=o[0],v=o[1];return Object(O.b)((function(){t(D(n))}),[t,n]),a?Object(x.jsxs)("div",{className:"p-16 sm:p-24",children:[Object(x.jsx)("div",{className:"flex items-center justify-between overflow-hidden",children:Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},children:Object(x.jsx)(f.a,{variant:"subtitle1",className:"flex",children:a.subject})}),!j.a.isEmpty(r)&&a.labels.length>0&&Object(x.jsx)("div",{className:"flex flex-wrap mt-8 -mx-2",children:a.labels.map((function(e){return Object(x.jsx)(y,{className:"mt-4 mx-2",title:r[e].title,color:r[e].color},e)}))})]})}),Object(x.jsx)(b.a,{className:"my-24"}),Object(x.jsxs)(h.a.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},children:[Object(x.jsxs)("div",{className:"flex items-start justify-between",children:[Object(x.jsxs)("div",{className:"flex items-center justify-start",children:[a.from.avatar?Object(x.jsx)(u.a,{alt:a.from.name,src:a.from.avatar}):Object(x.jsx)(u.a,{children:a.from.name[0]}),Object(x.jsxs)("div",{className:"flex flex-col mx-8",children:[Object(x.jsx)("span",{children:a.from.name}),Object(x.jsxs)(f.a,{component:"div",color:"textSecondary",variant:"body1",className:"flex items-center justify-start",children:[Object(x.jsx)("div",{children:"to"}),Object(x.jsx)("div",{className:"mx-4",children:a.to[0].name})]})]})]}),Object(x.jsx)(p.a,{size:"large",children:Object(x.jsx)(m.a,{children:"more_vert"})})]}),Object(x.jsxs)("div",{className:"my-16",children:[Object(x.jsx)(f.a,{color:"primary",className:"cursor-pointer underline mb-8",onClick:function(){v(!g)},children:g?Object(x.jsx)("span",{children:"Hide Details"}):Object(x.jsx)("span",{children:"Show Details"})}),g&&Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsxs)(f.a,{variant:"body2",className:"flex flex-col",children:[Object(x.jsx)("span",{children:"From:"}),Object(x.jsx)("span",{children:"To:"}),Object(x.jsx)("span",{children:"Date:"})]}),Object(x.jsxs)(f.a,{variant:"body2",color:"textSecondary",className:"px-4 flex flex-col",children:[Object(x.jsx)("span",{children:a.from.email}),Object(x.jsx)("span",{children:a.to[0].email}),Object(x.jsx)("span",{children:a.time})]})]})]}),Object(x.jsx)(f.a,{className:"text-14 my-24 leading-normal",variant:"body2",dangerouslySetInnerHTML:{__html:a.message}}),Object(x.jsx)(b.a,{className:"my-24"}),a.attachments&&Object(x.jsxs)("div",{children:[Object(x.jsxs)(f.a,{variant:"subtitle1",className:"mb-16",children:[Object(x.jsx)("span",{className:"mx-4 font-medium",children:"Attachments"}),Object(x.jsxs)("span",{children:["(",a.attachments.length,")"]})]}),Object(x.jsx)("div",{className:"flex flex-wrap -mx-8",children:a.attachments.map((function(e){return Object(x.jsxs)("div",{className:"w-128 px-8 pb-16",children:[Object(x.jsx)("img",{className:"w-full rounded-16",src:e.preview,alt:e.fileName}),Object(x.jsxs)("div",{className:"flex flex-col pt-8",children:[Object(x.jsx)(f.a,{color:"primary",className:"hover:underline cursor-pointer",onClick:function(e){return e.preventDefault()},children:"View"}),Object(x.jsx)(f.a,{color:"primary",className:"hover:underline cursor-pointer",onClick:function(e){return e.preventDefault()},children:"Download"}),Object(x.jsxs)(f.a,{className:"text-12",children:["(",e.size,")"]})]})]},e.fileName)}))})]})]})]}):null})),L=a(50),_=a(1823);var V=Object(s.k)((function(e){var t=Object(i.useDispatch)(),a=Object(i.useSelector)((function(e){return e.mailApp.mail})),r=Object(L.a)(),n=_.compile(e.match.path),c=Object(s.j)(),l=Object(E.a)({},c);delete l.mailId;var o=n(l);return a?Object(x.jsxs)("div",{className:"flex flex-1 items-center justify-between overflow-hidden sm:px-16",children:[Object(x.jsx)(p.a,{onClick:function(){return e.history.push(o)},size:"large",children:Object(x.jsx)(m.a,{children:"ltr"===r.direction?"arrow_back":"arrow_forward"})}),Object(x.jsxs)("div",{className:"flex items-center justify-start","aria-label":"Toggle star",children:[Object(x.jsx)(h.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.1}},children:Object(x.jsx)(p.a,{onClick:function(){return t(H({starred:!a.starred}))},size:"large",children:a.starred?Object(x.jsx)(m.a,{children:"star"}):Object(x.jsx)(m.a,{children:"star_border"})})}),Object(x.jsx)(h.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.1}},children:Object(x.jsx)(p.a,{onClick:function(){return t(H({important:!a.important}))},size:"large",children:a.important?Object(x.jsx)(m.a,{children:"label"}):Object(x.jsx)(m.a,{children:"label_off"})})})]})]}):null})),U=a(1374),q=a(765),J=a(198),Y=a(1377),G=a(1375),K=a(41),Q=a(20),X=Object(k.createAsyncThunk)("mailApp/mails/getMails",function(){var e=Object(N.a)(C.a.mark((function e(t,a){var r,n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.getState,t=t||r().mailApp.mails.routeParams,e.next=4,A.a.get("/api/mail-app/mails",{params:t});case 4:return n=e.sent,e.next=7,n.data;case 7:return c=e.sent,e.abrupt("return",{data:c,routeParams:t});case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Z=Object(k.createAsyncThunk)("mailApp/mails/setFolderOnSelectedMails",function(){var e=Object(N.a)(C.a.mark((function e(t,a){var r,n,c,l,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=n().mailApp.mails.selectedMailIds,e.next=4,A.a.post("/api/mail-app/set-folder",{selectedMailIds:c,folderId:t});case 4:return l=e.sent,e.next=7,l.data;case 7:return i=e.sent,r(X()),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),$=Object(k.createAsyncThunk)("mailApp/mails/toggleLabelOnSelectedMails",function(){var e=Object(N.a)(C.a.mark((function e(t,a){var r,n,c,l,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.dispatch,n=a.getState,c=n().mailApp.mails.selectedMailIds,e.next=4,A.a.post("/api/mail-app/toggle-label",{selectedMailIds:c,labelId:t});case 4:return l=e.sent,e.next=7,l.data;case 7:return i=e.sent,r(X()),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ee=Object(k.createEntityAdapter)({}),te=ee.getSelectors((function(e){return e.mailApp.mails})),ae=te.selectAll,re=(te.selectById,Object(k.createSlice)({name:"mailApp/mails",initialState:ee.getInitialState({searchText:"",routeParams:{},selectedMailIds:[]}),reducers:{setMailsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}},selectAllMails:function(e,t){e.selectedMailIds=e.ids},deselectAllMails:function(e,t){e.selectedMailIds=[]},selectMailsByParameter:function(e,t){var a=Object(d.a)(t.payload,2),r=a[0],n=a[1];e.selectedMailIds=e.ids.filter((function(t){return e.entities[t][r]===n}))},toggleInSelectedMails:function(e,t){var a=t.payload;e.selectedMailIds=e.selectedMailIds.includes(a)?e.selectedMailIds.filter((function(e){return e!==a})):[].concat(Object(Q.a)(e.selectedMailIds),[a])}},extraReducers:Object(r.a)({},X.fulfilled,(function(e,t){var a=t.payload,r=a.data,n=a.routeParams;ee.setAll(e,r),e.routeParams=n,e.selectedMailIds=[]}))})),ne=re.actions,ce=ne.setMailsSearchText,le=ne.selectAllMails,ie=ne.deselectAllMails,se=ne.selectMailsByParameter,oe=ne.toggleInSelectedMails,de=re.reducer;var je=function(e){var t=Object(i.useDispatch)(),a=Object(i.useSelector)((function(e){return e.mailApp.mails.searchText})),r=Object(i.useSelector)(K.e),n=Object(G.a)("mailApp").t;return Object(x.jsx)(Y.a,{theme:r,children:Object(x.jsx)("div",{className:"flex flex-1",children:Object(x.jsxs)(J.a,{className:"flex items-center w-full h-48 sm:h-56 p-16 ltr:pl-4 lg:ltr:pl-16 rtl:pr-4 lg:rtl:pr-16 shadow",children:[Object(x.jsx)(U.a,{lgUp:!0,children:Object(x.jsx)(p.a,{onClick:function(t){return e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar",size:"large",children:Object(x.jsx)(m.a,{children:"menu"})})}),Object(x.jsx)(m.a,{color:"action",children:"search"}),Object(x.jsx)(q.a,{placeholder:n("SEARCH_PLACEHOLDER"),className:"px-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t(ce(e))}})]})})})},ue=a(111),be=a(1330),me=a(1341),pe=a(1342),fe=a(1343),he=a(188),Oe=a(1338),xe=a(1336),ge=a(1325),ve=a(1467),ye=a(1466),Se=a(1335),Ce=a(1339),Ne=a(47),ke=a(76),we=a(1824),Ae=a(2018),Pe=a(2019),Fe=a.n(Pe),Ie=(a(2020),a(6)),Me=Object(o.a)("div")({"& .rdw-dropdown-selectedtext":{color:"inherit"},"& .rdw-editor-toolbar":{borderWidth:"0 0 1px 0!important",margin:"0!important"},"& .rdw-editor-main":{padding:"8px 12px",height:"".concat(256,"px!important")}}),Te=Object(l.forwardRef)((function(e,t){var a=Object(l.useState)(we.EditorState.createEmpty()),r=Object(d.a)(a,2),n=r[0],c=r[1];return Object(x.jsx)(Me,{className:Object(Ie.default)("rounded-4 border-1 overflow-hidden w-full",e.className),ref:t,children:Object(x.jsx)(Ae.Editor,{editorState:n,onEditorStateChange:function(t){return c(t),e.onChange(Fe()(Object(we.convertToRaw)(t.getCurrentContent())))}})})})),Re=Object(o.a)("div")({fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.08)",border:"1px solid rgba(0, 0, 0, 0.16)",paddingLeft:16,marginBottom:8,borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center","& .filename":{fontWeight:600},"& .size":{marginLeft:8,fontWeight:300}});var Ee=function(e){return Object(x.jsxs)(Re,{className:e.className,children:[Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)(f.a,{variant:"caption",className:"filename",children:e.fileName}),Object(x.jsxs)(f.a,{variant:"caption",className:"size",children:["(",e.size,")"]})]}),Object(x.jsx)(p.a,{size:"large",children:Object(x.jsx)(m.a,{className:"text-16",children:"close"})})]})},ze=ke.e().shape({to:ke.g().required("You must enter an e-mail").email("You must enter a valid e-mail.")});var De=function(){var e=Object(l.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(Ne.useForm)({mode:"onChange",defaultValues:{from:"johndoe@creapond.com",to:"",cc:"",bcc:"",subject:"",message:""},resolver:Object(he.a)(ze)}),c=(n.watch,n.handleSubmit),i=n.formState,s=n.control,o=i.isValid,u=i.dirtyFields,b=i.errors,h=Object(G.a)("mailApp").t;return Object(x.jsxs)("div",{className:"p-24 pb-8",children:[Object(x.jsx)(xe.a,{variant:"contained",color:"secondary",className:"w-full",onClick:function(){r(!0)},children:h("COMPOSE")}),Object(x.jsxs)(ge.a,{open:a,onClose:function(){r(!1)},"aria-labelledby":"form-dialog-title",children:[Object(x.jsx)(Oe.a,{position:"static",elevation:0,children:Object(x.jsx)(Ce.a,{className:"flex w-full",children:Object(x.jsx)(f.a,{variant:"subtitle1",color:"inherit",children:"New Message"})})}),Object(x.jsxs)("form",{noValidate:!0,onSubmit:c((function(e){console.info(e),r(!1)})),className:"flex flex-col",children:[Object(x.jsxs)(ye.a,{classes:{root:"p-16 pb-0 sm:p-24 sm:pb-0"},children:[Object(x.jsx)(Ne.Controller,{name:"from",control:s,render:function(e){var t=e.field;return Object(x.jsx)(Se.a,Object(E.a)(Object(E.a)({},t),{},{className:"mt-8 mb-16",label:"From",id:"from",variant:"outlined",fullWidth:!0,inputProps:{readOnly:!0}}))}}),Object(x.jsx)(Ne.Controller,{name:"to",control:s,render:function(e){var t,a=e.field;return Object(x.jsx)(Se.a,Object(E.a)(Object(E.a)({},a),{},{className:"mt-8 mb-16",label:"To",autoFocus:!0,id:"to",error:!!b.to,helperText:null===b||void 0===b||null===(t=b.to)||void 0===t?void 0:t.message,variant:"outlined",fullWidth:!0,required:!0}))}}),Object(x.jsx)(Ne.Controller,{name:"cc",control:s,render:function(e){var t=e.field;return Object(x.jsx)(Se.a,Object(E.a)(Object(E.a)({},t),{},{className:"mt-8 mb-16",label:"Cc",id:"cc",variant:"outlined",fullWidth:!0}))}}),Object(x.jsx)(Ne.Controller,{name:"bcc",control:s,render:function(e){var t=e.field;return Object(x.jsx)(Se.a,Object(E.a)(Object(E.a)({},t),{},{className:"mt-8 mb-16",label:"Bcc",id:"bcc",name:"bcc",variant:"outlined",fullWidth:!0}))}}),Object(x.jsx)(Ne.Controller,{name:"subject",control:s,render:function(e){var t=e.field;return Object(x.jsx)(Se.a,Object(E.a)(Object(E.a)({},t),{},{className:"mt-8 mb-16",label:"Subject",id:"subject",name:"subject",variant:"outlined",fullWidth:!0}))}}),Object(x.jsx)(Ne.Controller,{className:"mt-8 mb-16",render:function(e){var t=e.field;return Object(x.jsx)(Te,Object(E.a)({},t))},name:"message",control:s}),Object(x.jsxs)("div",{className:"pt-8",children:[Object(x.jsx)(Ee,{fileName:"attachment-2.doc",size:"12 kb"}),Object(x.jsx)(Ee,{fileName:"attachment-1.jpg",size:"350 kb"})]})]}),Object(x.jsxs)(ve.a,{className:"justify-between px-8 py-16",children:[Object(x.jsxs)("div",{className:"px-16",children:[Object(x.jsx)(xe.a,{variant:"contained",color:"primary",type:"submit",disabled:j.a.isEmpty(u)||!o,children:"Send"}),Object(x.jsx)(p.a,{size:"large",children:Object(x.jsx)(m.a,{children:"attach_file"})})]}),Object(x.jsx)(p.a,{onClick:function(){r(!1)},size:"large",children:Object(x.jsx)(m.a,{children:"delete"})})]})]})]})]})},He=Object(k.createAsyncThunk)("mailApp/filters/getFilters",Object(N.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/api/mail-app/filters");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),Be=Object(k.createEntityAdapter)({}),We=Be.getSelectors((function(e){return e.mailApp.filters})),Le=We.selectAll,_e=(We.selectById,Object(k.createSlice)({name:"mailApp/filters",initialState:Be.getInitialState({}),reducers:{},extraReducers:Object(r.a)({},He.fulfilled,Be.setAll)}).reducer),Ve=Object(k.createAsyncThunk)("mailApp/folders/getFolders",Object(N.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/api/mail-app/folders");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),Ue=Object(k.createEntityAdapter)({}),qe=Ue.getSelectors((function(e){return e.mailApp.folders})),Je=qe.selectAll,Ye=(qe.selectById,Object(k.createSlice)({name:"mailApp/folders",initialState:Ue.getInitialState({}),reducers:{},extraReducers:Object(r.a)({},Ve.fulfilled,Ue.setAll)}).reducer),Ge=Object(o.a)(me.a)((function(e){return{color:"inherit!important",textDecoration:"none!important",height:40,width:"100%",borderRadius:6,paddingLeft:12,paddingRight:12,marginBottom:4,"&.active":{backgroundColor:"light"===e.theme.palette.mode?"rgba(0, 0, 0, .05)!important":"rgba(255, 255, 255, .1)!important",pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16,marginRight:16}}}));var Ke=function(e){var t=Object(i.useSelector)(Je),a=Object(i.useSelector)(M),r=Object(i.useSelector)(Le),n=Object(G.a)("mailApp").t;return Object(x.jsxs)(h.a.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1,transition:{delay:.4}},className:"flex-auto border-l-1",children:[Object(x.jsx)(De,{}),Object(x.jsxs)("div",{className:"px-12",children:[Object(x.jsxs)(be.a,{children:[Object(x.jsx)(fe.a,{className:"pl-12",disableSticky:!0,children:n("FOLDERS")}),t.length>0&&t.map((function(e){return Object(x.jsxs)(Ge,{button:!0,component:ue.a,to:"/apps/mail/".concat(e.handle),activeClassName:"active",children:[Object(x.jsx)(m.a,{className:"list-item-icon",color:"action",children:e.icon}),Object(x.jsx)(pe.a,{primary:e.translate?n(e.translate):e.title,disableTypography:!0})]},e.id)}))]}),Object(x.jsxs)(be.a,{children:[Object(x.jsx)(fe.a,{className:"pl-12",disableSticky:!0,children:n("FILTERS")}),r.length>0&&r.map((function(e){return Object(x.jsxs)(Ge,{button:!0,component:ue.a,to:"/apps/mail/filter/".concat(e.handle),activeClassName:"active",children:[Object(x.jsx)(m.a,{className:"list-item-icon",color:"action",children:e.icon}),Object(x.jsx)(pe.a,{primary:e.translate?n(e.translate):e.title,disableTypography:!0})]},e.id)}))]}),Object(x.jsxs)(be.a,{children:[Object(x.jsx)(fe.a,{className:"pl-12",disableSticky:!0,children:n("LABELS")}),a&&a.map((function(e){return Object(x.jsxs)(Ge,{button:!0,component:ue.a,to:"/apps/mail/label/".concat(e.handle),children:[Object(x.jsx)(m.a,{className:"list-item-icon",style:{color:e.color},color:"action",children:"label"}),Object(x.jsx)(pe.a,{primary:e.title,disableTypography:!0})]},e.id)}))]})]})]})},Qe=a(1331),Xe={creapond:"johndoe@creapond.com",withinpixels:"johndoe@withinpixels.com"};var Ze=function(e){var t=Object(l.useState)("creapond"),a=Object(d.a)(t,2),r=a[0],n=a[1],c=Object(G.a)("mailApp").t;return Object(x.jsxs)("div",{className:"flex flex-col justify-center h-full p-24",children:[Object(x.jsxs)("div",{className:"flex items-center flex-1",children:[Object(x.jsx)(m.a,{component:h.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"mail"}),Object(x.jsx)(f.a,{component:h.a.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:c("APP_TITLE")})]}),Object(x.jsx)(h.a.div,{initial:{y:20,opacity:.8},animate:{y:0,opacity:1,transition:{delay:.3}},children:Object(x.jsx)(Se.a,{className:"w-full",id:"account-selection",select:!0,label:r,value:r,onChange:function(e){n(e.target.value)},placeholder:"Select Account",margin:"normal",variant:"filled",children:Object.keys(Xe).map((function(e,t){return Object(x.jsx)(Qe.a,{value:e,children:Xe[e]},e)}))})})]})},$e=a(68),et=a(1465),tt=Object(o.a)(me.a)((function(e){var t=e.theme,a=e.unread,r=e.selected;return Object(E.a)(Object(E.a)({},a&&{background:"rgba(0,0,0,0.03)"}),r&&{"&::after":{content:'""',position:"absolute",top:0,left:0,display:"block",height:"100%",width:3,backgroundColor:t.palette.primary.main}})})),at=a(1823),rt=Object(s.k)((function(e){var t=Object(i.useDispatch)(),a=Object(i.useSelector)((function(e){return e.mailApp.mails.selectedMailIds})),r=Object(i.useSelector)(T),n=Object(s.j)(),c=at.compile(e.match.path),l=a.length>0&&void 0!==a.find((function(t){return t===e.mail.id}));return Object(x.jsxs)(tt,{dense:!0,button:!0,onClick:function(){return e.history.push(c(Object(E.a)(Object(E.a)({},n),{},{mailId:e.mail.id})))},selected:l,unread:e.mail.read?0:1,className:"items-start py-20 px-0 md:px-8 relative",children:[Object(x.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-start",children:[Object(x.jsx)(et.a,{tabIndex:-1,disableRipple:!0,checked:l,onChange:function(){return t(oe(e.mail.id))},onClick:function(e){return e.stopPropagation()}}),Object(x.jsx)("div",{className:"px-8 order-first sm:order-none",children:e.mail.from.avatar?Object(x.jsx)(u.a,{alt:e.mail.from.name,src:e.mail.from.avatar}):Object(x.jsx)(u.a,{sx:{backgroundColor:function(e){return e.palette.primary[500]}},children:e.mail.from.name[0]})})]}),Object(x.jsxs)("div",{className:"flex flex-1 flex-col relative overflow-hidden px-8",children:[Object(x.jsx)(f.a,{className:"font-medium",children:e.mail.from.name}),Object(x.jsxs)("div",{className:"flex flex-col py-4",children:[Object(x.jsx)(f.a,{className:"truncate text-14 pb-2",children:e.mail.subject}),Object(x.jsx)(f.a,{color:"textSecondary",className:"truncate",children:j.a.truncate(e.mail.message.replace(/<(?:.|\n)*?>/gm,""),{length:180})})]}),Object(x.jsx)("div",{className:"flex -mx-2",children:!j.a.isEmpty(r)&&e.mail.labels.map((function(e){return Object(x.jsx)(y,{className:"mx-2 mt-4",title:r[e].title,color:r[e].color},e)}))})]}),Object(x.jsx)("div",{className:"px-8",children:Object(x.jsx)(f.a,{className:"text-12",color:"textSecondary",children:e.mail.time})})]})}));var nt=Object(s.k)((function(e){var t=Object(i.useDispatch)(),a=Object(i.useSelector)(ae),r=Object(i.useSelector)((function(e){return e.mailApp.mails.searchText})),n=Object(s.j)(),c=Object(l.useState)(null),o=Object(d.a)(c,2),j=o[0],u=o[1],b=Object(G.a)("mailApp").t;if(Object(O.b)((function(){t(X(n))}),[t,n]),Object(l.useEffect)((function(){a&&u(0===r.length?a:$e.a.filterArrayByString(a,r))}),[a,r]),!j)return null;if(0===j.length)return Object(x.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-1 items-center justify-center h-full",children:Object(x.jsx)(f.a,{color:"textSecondary",variant:"h5",children:b("NO_MESSAGES")})});var m={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return Object(x.jsx)(be.a,{className:"p-0",children:Object(x.jsx)(h.a.div,{variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",v:!0,children:j.map((function(e){return Object(x.jsx)(h.a.div,{variants:m,children:Object(x.jsx)(rt,{mail:e})},e.id)}))})})})),ct=a(545);var lt=function(e){var t=Object(i.useDispatch)(),a=Object(i.useSelector)((function(e){return e.mailApp.mails.selectedMailIds})),n=Object(i.useSelector)(ae),c=Object(i.useSelector)(M),s=Object(i.useSelector)(Je),o=Object(l.useState)({selectMenu:null,foldersMenu:null,labelsMenu:null}),j=Object(d.a)(o,2),u=j[0],b=j[1];function f(e,t){b(Object(E.a)(Object(E.a)({},t),{},Object(r.a)({},t,e.currentTarget)))}function h(e,t){b(Object(E.a)(Object(E.a)({},t),{},Object(r.a)({},t,null)))}return Object(x.jsxs)("div",{className:"flex flex-1 items-center sm:px-8",children:[Object(x.jsx)(et.a,{onChange:function(e){return e.target.checked?t(le()):t(ie())},checked:a.length===Object.keys(n).length&&a.length>0,indeterminate:a.length!==Object.keys(n).length&&a.length>0}),Object(x.jsx)(p.a,{className:"",size:"small","aria-label":"More","aria-owns":u.select?"select-menu":null,"aria-haspopup":"true",onClick:function(e){return f(e,"select")},children:Object(x.jsx)(m.a,{children:"arrow_drop_down"})}),Object(x.jsxs)(ct.a,{id:"select-menu",anchorEl:u.select,open:Boolean(u.select),onClose:function(e){return h(0,"select")},children:[Object(x.jsx)(Qe.a,{onClick:function(e){t(le()),h(0,"select")},children:"All"}),Object(x.jsx)(Qe.a,{onClick:function(e){t(ie()),h(0,"select")},children:"None"}),Object(x.jsx)(Qe.a,{onClick:function(e){t(se(["read",!0])),h(0,"select")},children:"Read"}),Object(x.jsx)(Qe.a,{onClick:function(e){t(se(["read",!1])),h(0,"select")},children:"Unread"}),Object(x.jsx)(Qe.a,{onClick:function(e){t(se(["starred",!0])),h(0,"select")},children:"Starred"}),Object(x.jsx)(Qe.a,{onClick:function(e){t(se(["starred",!1])),h(0,"select")},children:"Unstarred"}),Object(x.jsx)(Qe.a,{onClick:function(e){t(se(["important",!0])),h(0,"select")},children:"Important"}),Object(x.jsx)(Qe.a,{onClick:function(e){t(se(["important",!1])),h(0,"select")},children:"Unimportant"})]}),a.length>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"border-r-1 h-48 w-1 mx-12 my-0"}),Object(x.jsx)(p.a,{onClick:function(e){return t(Z(4))},"aria-label":"Delete",size:"large",children:Object(x.jsx)(m.a,{children:"delete"})}),Object(x.jsx)(p.a,{"aria-label":"More","aria-owns":u.folders?"folders-menu":null,"aria-haspopup":"true",onClick:function(e){return f(e,"folders")},size:"large",children:Object(x.jsx)(m.a,{children:"folder"})}),Object(x.jsx)(ct.a,{id:"folders-menu",anchorEl:u.folders,open:Boolean(u.folders),onClose:function(e){return h(0,"folders")},children:s.length>0&&s.map((function(e){return Object(x.jsx)(Qe.a,{onClick:function(a){t(Z(e.id)),h(0,"folders")},children:e.title},e.id)}))}),Object(x.jsx)(p.a,{"aria-label":"More","aria-owns":u.labels?"labels-menu":null,"aria-haspopup":"true",onClick:function(e){return f(e,"labels")},size:"large",children:Object(x.jsx)(m.a,{children:"label"})}),Object(x.jsx)(ct.a,{id:"folders-menu",anchorEl:u.labels,open:Boolean(u.labels),onClose:function(e){return h(0,"labels")},children:c.length>0&&c.map((function(e){return Object(x.jsx)(Qe.a,{onClick:function(a){t($(e.id)),h(0,"labels")},children:e.title},e.id)}))})]})]})},it=a(160),st=Object(it.d)({mails:de,mail:B,folders:Ye,labels:R,filters:_e}),ot=Object(o.a)(n.a)((function(e){var t=e.theme;return{"& .FusePageCarded-header":Object(r.a)({minHeight:72,height:72,alignItems:"center"},t.breakpoints.up("sm"),{minHeight:136,height:136}),"& .FusePageCarded-content":{display:"flex",flexDirection:"column"}}}));t.default=Object(c.a)("mailApp",st)((function(e){var t=Object(i.useDispatch)(),a=Object(l.useRef)(null),r=Object(s.j)();return Object(l.useEffect)((function(){t(He()),t(Ve()),t(P())}),[t]),Object(x.jsx)(ot,{header:Object(x.jsx)(je,{pageLayout:a}),contentToolbar:r.mailId?Object(x.jsx)(V,{}):Object(x.jsx)(lt,{}),content:r.mailId?Object(x.jsx)(W,{}):Object(x.jsx)(nt,{}),leftSidebarHeader:Object(x.jsx)(Ze,{}),leftSidebarContent:Object(x.jsx)(Ke,{}),ref:a,innerScroll:!0})}))}}]);