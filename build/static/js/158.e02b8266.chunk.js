(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[158],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return H}));var r=a(98),o=a(4),n=a(54),i=a(14),s=a(6),l=a(1),d=a(1294),h=a(50),c=a(1377),u=a(41),b=a(15),g=a(0);var m=function(e){var t=Object(h.a)(),a=Object(b.useSelector)(Object(u.c)(t.palette.primary.main));return Object(g.jsx)("div",{className:"FusePageCarded-header",children:e.header&&Object(g.jsx)(c.a,{theme:a,children:e.header})})},p=a(8),j=a(17),f=a(133),w=a(1374),O=a(1378);var x=function(e){var t=Object(h.a)(),a=Object(b.useSelector)(Object(u.c)(t.palette.primary.main));return Object(g.jsxs)(g.Fragment,{children:[e.header&&Object(g.jsx)(c.a,{theme:a,children:Object(g.jsx)("div",{className:Object(s.default)("FusePageCarded-sidebarHeader",e.variant),children:e.header})}),e.content&&Object(g.jsx)(n.default,{className:"FusePageCarded-sidebarContent",enable:e.innerScroll,children:e.content})]})};function v(e,t){var a=Object(l.useState)(!1),r=Object(j.a)(a,2),o=r[0],n=r[1];Object(l.useImperativeHandle)(t,(function(){return{toggleSidebar:i}}));var i=function(){n(!o)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w.a,{lgUp:"permanent"===e.variant,children:Object(g.jsx)(O.a,{variant:"temporary",anchor:e.position,open:o,onOpen:function(e){},onClose:function(e){return i()},disableSwipeToOpen:!0,classes:{root:Object(s.default)("FusePageCarded-sidebarWrapper",e.variant),paper:Object(s.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:"FusePageCarded-backdrop"}},style:{position:"absolute"},children:Object(g.jsx)(x,Object(p.a)({},e))})}),"permanent"===e.variant&&Object(g.jsx)(w.a,{lgDown:!0,children:Object(g.jsx)(f.a,{variant:"permanent",className:Object(s.default)("FusePageCarded-sidebarWrapper",e.variant),open:o,classes:{paper:Object(s.default)("FusePageCarded-sidebar",e.variant,"left"===e.position?"FusePageCarded-leftSidebar":"FusePageCarded-rightSidebar")},children:Object(g.jsx)(x,Object(p.a)({},e))})})]})}var y,k=Object(l.forwardRef)(v),C=Object(i.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"row",minWidth:0,minHeight:"100%",position:"relative",flex:"1 1 auto",width:"100%",height:"auto",backgroundColor:t.palette.background.default,"& .FusePageCarded-innerScroll":{height:"100%"},"& .FusePageCarded-topBg":{position:"absolute",left:0,right:0,top:0,height:F,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},"& .FusePageCarded-contentWrapper":Object(o.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("sm"),{padding:"0 1.6rem"}),"& .FusePageCarded-header":{height:I,minHeight:I,maxHeight:I,display:"flex",color:t.palette.primary.contrastText},"& .FusePageCarded-headerSidebarToggleButton":{color:t.palette.primary.contrastText},"& .FusePageCarded-contentCard":{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",minHeight:0,borderRadius:"20px 20px 0 0"},"& .FusePageCarded-toolbar":{height:P,minHeight:P,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},"& .FusePageCarded-content":{flex:"1 1 auto",height:"100%",overflow:"auto",WebkitOverflowScrolling:"touch"},"& .FusePageCarded-sidebarWrapper":{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(o.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},"& .FusePageCarded-sidebar":{position:"absolute","&.permanent":Object(o.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:S,height:"100%"},"& .FusePageCarded-leftSidebar":{},"& .FusePageCarded-rightSidebar":{},"& .FusePageCarded-sidebarHeader":{height:F,minHeight:F,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(o.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},"& .FusePageCarded-sidebarContent":Object(o.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto",WebkitOverflowScrolling:"touch"}),"& .FusePageCarded-backdrop":{position:"absolute"}}})),S=240,F=200,P=64,I=F-P,N=Object(l.forwardRef)((function(e,t){var a=Object(l.useRef)(null),r=Object(l.useRef)(null),o=Object(l.useRef)(null),i=e.rightSidebarHeader||e.rightSidebarContent,h=e.leftSidebarHeader||e.leftSidebarContent;return Object(l.useImperativeHandle)(t,(function(){return{rootRef:o,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{styles:function(t){return{"#fuse-main":{height:e.innerScroll&&"100vh"}}}}),Object(g.jsxs)(C,{className:Object(s.default)("FusePageCarded-root",e.innerScroll&&"FusePageCarded-innerScroll",e.className),ref:o,children:[Object(g.jsx)("div",{className:"FusePageCarded-topBg"}),Object(g.jsxs)("div",{className:"flex container w-full",children:[h&&Object(g.jsx)(k,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:a,rootRef:o}),Object(g.jsxs)("div",{className:Object(s.default)("FusePageCarded-contentWrapper",h&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",i&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0"),children:[Object(g.jsx)(m,{header:e.header}),Object(g.jsxs)("div",{className:Object(s.default)("FusePageCarded-contentCard",e.innerScroll&&"inner-scroll"),children:[e.contentToolbar&&Object(g.jsx)("div",{className:"FusePageCarded-toolbar",children:e.contentToolbar}),e.content&&Object(g.jsx)(n.default,{className:"FusePageCarded-content",enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll,children:e.content})]})]}),i&&Object(g.jsx)(k,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,ref:r,rootRef:o})]})]})]})}));N.defaultProps={};var H=Object(l.memo)(Object(i.a)(N)(y||(y=Object(r.a)([""]))))},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(1),o=a(0);function n(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:"assets/images/demo-content/morain-lake.jpg",alt:"beach",style:{maxWidth:"640px",width:"100%"},className:"rounded-6"}),Object(o.jsx)("h1",{className:"py-16 font-semibold",children:"Early Sunrise"}),Object(o.jsx)("h4",{className:"pb-12 font-medium",children:"Demo Content"}),Object(o.jsx)("p",{children:"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections."}),Object(o.jsxs)("blockquote",{children:[Object(o.jsx)("p",{children:"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me? \" he thought. It wasn't a dream."}),Object(o.jsx)("footer",{children:"John Doe"})]}),Object(o.jsx)("p",{children:"His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame."}),Object(o.jsx)("p",{children:"It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad."}),Object(o.jsx)("p",{children:'"How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn\'t get into that position. However hard he threw himself onto his right, he always rolled back to where he was.'}),Object(o.jsx)("p",{children:'He must have tried it a hundred times, shut his eyes so that he wouldn\'t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. "Oh, God", he thought, "what a strenuous career it is that I\'ve chosen!'}),Object(o.jsx)("p",{children:"Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them."}),Object(o.jsx)("p",{children:"\"He felt a slight itch up on his belly; pushed himself slowly up on his back towards the headboard so that he could lift his head better; found where the itch was, and saw that it was covered with lots of little white spots which he didn't know what to make of; and when he tried to feel the place with one of his legs he drew it quickly back because as soon as he touched it he was overcome by a cold shudder. He slid back into his former position."}),Object(o.jsx)("p",{children:'"Getting up early all the time", he thought, "it makes you stupid. You\'ve got to get enough sleep. Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that with my boss; I\'d get kicked out on the spot. But who knows, maybe that would be the best thing for me...'}),Object(o.jsx)("p",{children:"His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame."}),Object(o.jsx)("p",{children:"It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad."}),Object(o.jsx)("p",{children:'"How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn\'t get into that position. However hard he threw himself onto his right, he always rolled back to where he was.'}),Object(o.jsx)("p",{children:'He must have tried it a hundred times, shut his eyes so that he wouldn\'t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. "Oh, God", he thought, "what a strenuous career it is that I\'ve chosen!'}),Object(o.jsx)("p",{children:"Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them."}),Object(o.jsx)("p",{children:"\"He felt a slight itch up on his belly; pushed himself slowly up on his back towards the headboard so that he could lift his head better; found where the itch was, and saw that it was covered with lots of little white spots which he didn't know what to make of; and when he tried to feel the place with one of his legs he drew it quickly back because as soon as he touched it he was overcome by a cold shudder. He slid back into his former position."}),Object(o.jsx)("p",{children:'"Getting up early all the time", he thought, "it makes you stupid. You\'ve got to get enough sleep. Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that with my boss; I\'d get kicked out on the spot. But who knows, maybe that would be the best thing for me...'})]})}var i=Object(r.memo)(n)},3370:function(e,t,a){"use strict";a.r(t);var r=a(17),o=a(1397),n=a(14),i=a(1390),s=a(1350),l=a(1351),d=a(1),h=a(0),c=Object(n.a)(i.a)({"& .FusePageCarded-header":{},"& .FusePageCarded-toolbar":{},"& .FusePageCarded-content":{},"& .FusePageCarded-sidebarHeader":{},"& .FusePageCarded-sidebarContent":{}});t.default=function(){var e=Object(d.useState)(0),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(h.jsx)(c,{header:Object(h.jsx)("div",{className:"py-24",children:Object(h.jsx)("h4",{children:"Header"})}),contentToolbar:Object(h.jsxs)(l.a,{value:a,onChange:function(e,t){n(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:!1,className:"w-full h-64",children:[Object(h.jsx)(s.a,{className:"h-64",label:"Item One"}),Object(h.jsx)(s.a,{className:"h-64",label:"Item Two"}),Object(h.jsx)(s.a,{className:"h-64",label:"Item Three"}),Object(h.jsx)(s.a,{className:"h-64",label:"Item Four"}),Object(h.jsx)(s.a,{className:"h-64",label:"Item Five"}),Object(h.jsx)(s.a,{className:"h-64",label:"Item Six"}),Object(h.jsx)(s.a,{className:"h-64",label:"Item Seven"})]}),content:Object(h.jsxs)("div",{className:"p-24",children:[0===a&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"mb-16",children:"Item One"}),Object(h.jsx)(o.a,{})]}),1===a&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"mb-16",children:"Item Two"}),Object(h.jsx)(o.a,{})]}),2===a&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"mb-16",children:"Item Three"}),Object(h.jsx)(o.a,{})]}),3===a&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"mb-16",children:"Item Four"}),Object(h.jsx)(o.a,{})]}),4===a&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"mb-16",children:"Item Five"}),Object(h.jsx)(o.a,{})]}),5===a&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"mb-16",children:"Item Six"}),Object(h.jsx)(o.a,{})]}),6===a&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"mb-16",children:"Item Seven"}),Object(h.jsx)(o.a,{})]})]}),innerScroll:!0})}}}]);