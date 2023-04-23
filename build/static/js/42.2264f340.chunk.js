(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[42],{1300:function(a,t,e){"use strict";t.a=function(a,t,e,r,n){return null}},1380:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=e(502)},1382:function(a,t,e){"use strict";e(2);t.a=function(a,t){return function(){return null}}},1383:function(a,t,e){"use strict";e.d(t,"a",(function(){return I}));var r=e(17),n=e(168),c=e(1338),i=e(1346),o=e(1327),s=e(1350),l=e(1351),u=e(6),m=e(1),d=e(8),j=e(127),f=e(97),b=e.n(f),p=e(504),v=e(208),h=e(94),g=e(1386),x=e(50),O=e(14),A=e(1294),w=e(0),y=["children","name"];function k(a){var t=a.children,e=a.document,r=Object(x.a)();m.useEffect((function(){e.body.dir=r.direction}),[e,r.direction]);var n=m.useMemo((function(){return Object(v.a)({key:"iframe-demo-".concat(r.direction),prepend:!0,container:e.head,stylisPlugins:"rtl"===r.direction?[p.a]:[]})}),[e,r.direction]),c=m.useCallback((function(){return e.defaultView}),[e]);return Object(w.jsx)(g.a,{target:e.head,stylisPlugins:"rtl"===r.direction?[p.a]:[],children:Object(w.jsxs)(h.a,{value:n,children:[Object(w.jsx)(A.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),m.cloneElement(t,{window:c})]})})}var S=Object(O.a)("iframe")((function(a){var t=a.theme;return{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:t.shadows[1]}}));function N(a){var t,e=a.children,n=a.name,c=Object(j.a)(a,y),i="".concat(n," demo"),o=m.useRef(null),s=m.useReducer((function(){return!0}),!1),l=Object(r.a)(s,2),u=l[0],f=l[1];m.useEffect((function(){var a=o.current.contentDocument;null==a||"complete"!==a.readyState||u||f()}),[u]);var p=null===(t=o.current)||void 0===t?void 0:t.contentDocument;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,Object(d.a)({onLoad:f,ref:o,title:i},c)),!1!==u?b.a.createPortal(Object(w.jsx)(k,{document:p,children:e}),p.body):null]})}var R=m.memo(N);function C(a){var t=Object(m.useState)(a.currentTabIndex),e=Object(r.a)(t,2),d=e[0],j=e[1],f=a.component,b=a.raw,p=a.iframe,v=a.className;return Object(w.jsxs)(i.a,{className:Object(u.default)(v,"shadow"),children:[Object(w.jsx)(c.a,{position:"static",color:"default",className:"shadow-0",children:Object(w.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(a,t){j(t)},children:[f&&Object(w.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(o.a,{children:"remove_red_eye"})}),b&&Object(w.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(o.a,{children:"code"})})]})}),Object(w.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(w.jsx)("div",{className:0===d?"flex flex-1 max-w-full":"hidden",children:f&&(p?Object(w.jsx)(R,{children:Object(w.jsx)(f,{})}):Object(w.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(w.jsx)(f,{})}))}),Object(w.jsx)("div",{className:1===d?"flex flex-1":"hidden",children:b&&Object(w.jsx)("div",{className:"flex flex-1",children:Object(w.jsx)(n.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:b.default})})})]})]})}C.defaultProps={currentTabIndex:0};var I=C},1422:function(a,t,e){"use strict";var r=e(4),n=e(13),c=e(2),i=e(1),o=(e(12),e(96)),s=e(108),l=e(1293),u=e(395),m=e(14),d=e(24),j=e(0),f=["component","direction","spacing","divider","children"];function b(a,t){var e=i.Children.toArray(a).filter(Boolean);return e.reduce((function(a,r,n){return a.push(r),n<e.length-1&&a.push(i.cloneElement(t,{key:"separator-".concat(n)})),a}),[])}var p=Object(m.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(a,t){return[t.root]}})((function(a){var t=a.ownerState,e=a.theme,n=Object(c.a)({display:"flex"},Object(o.b)({theme:e},t.direction,(function(a){return{flexDirection:a}})));if(t.spacing){var i=Object(s.a)(e),l=Object.keys(e.breakpoints.values).reduce((function(a,e){return null==t.spacing[e]&&null==t.direction[e]||(a[e]=!0),a}),{}),m=Object(o.d)({values:t.direction,base:l}),d=Object(o.d)({values:t.spacing,base:l});n=Object(u.a)(n,Object(o.b)({theme:e},d,(function(a,e){return{"& > :not(style) + :not(style)":Object(r.a)({margin:0},"margin".concat((n=e?m[e]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n])),Object(s.d)(i,a))};var n})))}return n})),v=i.forwardRef((function(a,t){var e=Object(d.a)({props:a,name:"MuiStack"}),r=Object(l.a)(e),i=r.component,o=void 0===i?"div":i,s=r.direction,u=void 0===s?"column":s,m=r.spacing,v=void 0===m?0:m,h=r.divider,g=r.children,x=Object(n.a)(r,f),O={direction:u,spacing:v};return Object(j.jsx)(p,Object(c.a)({as:o,ownerState:O,ref:t},x,{children:h?b(g,h):g}))}));t.a=v},1472:function(a,t,e){"use strict";e.d(t,"b",(function(){return c}));var r=e(36),n=e(34);function c(a){return Object(r.a)("MuiAvatarGroup",a)}var i=Object(n.a)("MuiAvatarGroup",["root","avatar"]);t.a=i},1600:function(a,t,e){"use strict";var r=e(4),n=e(13),c=e(2),i=e(1),o=(e(12),e(317),e(6)),s=e(38),l=e(14),u=e(24),m=e(1353),d=e(1472),j=e(0),f=["children","className","max","spacing","variant"],b={small:-16,medium:null},p=Object(l.a)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(a,t){return Object(c.a)(Object(r.a)({},"& .".concat(d.a.avatar),t.avatar),t.root)}})((function(a){var t,e=a.theme;return t={},Object(r.a)(t,"& .MuiAvatar-root",{border:"2px solid ".concat(e.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),Object(r.a)(t,"display","flex"),Object(r.a)(t,"flexDirection","row-reverse"),t})),v=Object(l.a)(m.a,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(a,t){return t.avatar}})((function(a){var t=a.theme;return{border:"2px solid ".concat(t.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),h=i.forwardRef((function(a,t){var e=Object(u.a)({props:a,name:"MuiAvatarGroup"}),r=e.children,l=e.className,m=e.max,h=void 0===m?5:m,g=e.spacing,x=void 0===g?"medium":g,O=e.variant,A=void 0===O?"circular":O,w=Object(n.a)(e,f),y=h<2?2:h,k=Object(c.a)({},e,{max:h,spacing:x,variant:A}),S=function(a){var t=a.classes;return Object(s.a)({root:["root"],avatar:["avatar"]},d.b,t)}(k),N=i.Children.toArray(r).filter((function(a){return i.isValidElement(a)})),R=N.length>y?N.length-y+1:0,C=x&&void 0!==b[x]?b[x]:-x;return Object(j.jsxs)(p,Object(c.a)({ownerState:k,className:Object(o.default)(S.root,l),ref:t},w,{children:[R?Object(j.jsxs)(v,{ownerState:k,className:S.avatar,style:{marginLeft:C},variant:A,children:["+",R]}):null,N.slice(0,N.length-R).reverse().map((function(a){return i.cloneElement(a,{className:Object(o.default)(a.props.className,S.avatar),style:Object(c.a)({marginLeft:C},a.props.style),variant:a.props.variant||A})}))]}))}));t.a=h},1697:function(a,t,e){"use strict";var r=e(739);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(e(1380)),c=e(0),i=(0,n.default)((0,c.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");t.default=i},1864:function(a,t,e){"use strict";var r=e(739);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(e(1380)),c=e(0),i=(0,n.default)((0,c.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");t.default=i},2123:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return i}));e(1);var r=e(1353),n=e(1422),c=e(0);function i(){return Object(c.jsxs)(n.a,{direction:"row",spacing:2,children:[Object(c.jsx)(r.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),Object(c.jsx)(r.a,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),Object(c.jsx)(r.a,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"})]})}},2124:function(a,t,e){"use strict";e.r(t),t.default='import * as React from \'react\';\nimport Avatar from \'@mui/material/Avatar\';\nimport Stack from \'@mui/material/Stack\';\n\nexport default function ImageAvatars() {\n  return (\n    <Stack direction="row" spacing={2}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />\n      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />\n    </Stack>\n  );\n}\n'},2125:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return s}));e(1);var r=e(1353),n=e(1422),c=e(568),i=e(567),o=e(0);function s(){return Object(o.jsxs)(n.a,{direction:"row",spacing:2,children:[Object(o.jsx)(r.a,{children:"H"}),Object(o.jsx)(r.a,{sx:{bgcolor:c.a[500]},children:"N"}),Object(o.jsx)(r.a,{sx:{bgcolor:i.a[500]},children:"OP"})]})}},2126:function(a,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\nimport { deepOrange, deepPurple } from '@mui/material/colors';\n\nexport default function LetterAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <Avatar>H</Avatar>\n      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>\n      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>\n    </Stack>\n  );\n}\n"},2127:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return l}));var r=e(8),n=(e(1),e(1353)),c=e(1422),i=e(0);function o(a){var t,e=0;for(t=0;t<a.length;t+=1)e=a.charCodeAt(t)+((e<<5)-e);var r="#";for(t=0;t<3;t+=1){r+="00".concat((e>>8*t&255).toString(16)).substr(-2)}return r}function s(a){return{sx:{bgcolor:o(a)},children:"".concat(a.split(" ")[0][0]).concat(a.split(" ")[1][0])}}function l(){return Object(i.jsxs)(c.a,{direction:"row",spacing:2,children:[Object(i.jsx)(n.a,Object(r.a)({},s("Kent Dodds"))),Object(i.jsx)(n.a,Object(r.a)({},s("Jed Watson"))),Object(i.jsx)(n.a,Object(r.a)({},s("Tim Neutkens")))]})}},2128:function(a,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\n\nfunction stringToColor(string) {\n  let hash = 0;\n  let i;\n\n  /* eslint-disable no-bitwise */\n  for (i = 0; i < string.length; i += 1) {\n    hash = string.charCodeAt(i) + ((hash << 5) - hash);\n  }\n\n  let color = '#';\n\n  for (i = 0; i < 3; i += 1) {\n    const value = (hash >> (i * 8)) & 0xff;\n    color += `00${value.toString(16)}`.substr(-2);\n  }\n  /* eslint-enable no-bitwise */\n\n  return color;\n}\n\nfunction stringAvatar(name) {\n  return {\n    sx: {\n      bgcolor: stringToColor(name),\n    },\n    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,\n  };\n}\n\nexport default function BackgroundLetterAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <Avatar {...stringAvatar('Kent Dodds')} />\n      <Avatar {...stringAvatar('Jed Watson')} />\n      <Avatar {...stringAvatar('Tim Neutkens')} />\n    </Stack>\n  );\n}\n"},2129:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return i}));e(1);var r=e(1353),n=e(1422),c=e(0);function i(){return Object(c.jsxs)(n.a,{direction:"row",spacing:2,children:[Object(c.jsx)(r.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",sx:{width:24,height:24}}),Object(c.jsx)(r.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),Object(c.jsx)(r.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg",sx:{width:56,height:56}})]})}},2130:function(a,t,e){"use strict";e.r(t),t.default='import * as React from \'react\';\nimport Avatar from \'@mui/material/Avatar\';\nimport Stack from \'@mui/material/Stack\';\n\nexport default function ImageAvatars() {\n  return (\n    <Stack direction="row" spacing={2}>\n      <Avatar\n        alt="Remy Sharp"\n        src="/material-ui-static/images/avatar/1.jpg"\n        sx={{ width: 24, height: 24 }}\n      />\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar\n        alt="Remy Sharp"\n        src="/material-ui-static/images/avatar/1.jpg"\n        sx={{ width: 56, height: 56 }}\n      />\n    </Stack>\n  );\n}\n'},2131:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return f}));e(1);var r=e(566),n=e(166),c=e(1353),i=e(1422),o=e(1697),s=e.n(o),l=e(2132),u=e.n(l),m=e(1864),d=e.n(m),j=e(0);function f(){return Object(j.jsxs)(i.a,{direction:"row",spacing:2,children:[Object(j.jsx)(c.a,{children:Object(j.jsx)(s.a,{})}),Object(j.jsx)(c.a,{sx:{bgcolor:r.a[500]},children:Object(j.jsx)(u.a,{})}),Object(j.jsx)(c.a,{sx:{bgcolor:n.a[500]},children:Object(j.jsx)(d.a,{})})]})}},2132:function(a,t,e){"use strict";var r=e(739);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(e(1380)),c=e(0),i=(0,n.default)((0,c.jsx)("path",{d:"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"}),"Pageview");t.default=i},2133:function(a,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\nimport { green, pink } from '@mui/material/colors';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\nimport FolderIcon from '@mui/icons-material/Folder';\nimport PageviewIcon from '@mui/icons-material/Pageview';\nimport AssignmentIcon from '@mui/icons-material/Assignment';\n\nexport default function IconAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <Avatar>\n        <FolderIcon />\n      </Avatar>\n      <Avatar sx={{ bgcolor: pink[500] }}>\n        <PageviewIcon />\n      </Avatar>\n      <Avatar sx={{ bgcolor: green[500] }}>\n        <AssignmentIcon />\n      </Avatar>\n    </Stack>\n  );\n}\n"},2134:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return u}));e(1);var r=e(1353),n=e(1422),c=e(568),i=e(166),o=e(1864),s=e.n(o),l=e(0);function u(){return Object(l.jsxs)(n.a,{direction:"row",spacing:2,children:[Object(l.jsx)(r.a,{sx:{bgcolor:c.a[500]},variant:"square",children:"N"}),Object(l.jsx)(r.a,{sx:{bgcolor:i.a[500]},variant:"rounded",children:Object(l.jsx)(s.a,{})})]})}},2135:function(a,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\nimport { deepOrange, green } from '@mui/material/colors';\nimport AssignmentIcon from '@mui/icons-material/Assignment';\n\nexport default function VariantAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <Avatar sx={{ bgcolor: deepOrange[500] }} variant=\"square\">\n        N\n      </Avatar>\n      <Avatar sx={{ bgcolor: green[500] }} variant=\"rounded\">\n        <AssignmentIcon />\n      </Avatar>\n    </Stack>\n  );\n}\n"},2136:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return o}));e(1);var r=e(1353),n=e(1422),c=e(568),i=e(0);function o(){return Object(i.jsxs)(n.a,{direction:"row",spacing:2,children:[Object(i.jsx)(r.a,{sx:{bgcolor:c.a[500]},alt:"Remy Sharp",src:"/broken-image.jpg",children:"B"}),Object(i.jsx)(r.a,{sx:{bgcolor:c.a[500]},alt:"Remy Sharp",src:"/broken-image.jpg"}),Object(i.jsx)(r.a,{src:"/broken-image.jpg"})]})}},2137:function(a,t,e){"use strict";e.r(t),t.default='import * as React from \'react\';\nimport Avatar from \'@mui/material/Avatar\';\nimport Stack from \'@mui/material/Stack\';\nimport { deepOrange } from \'@mui/material/colors\';\n\nexport default function FallbackAvatars() {\n  return (\n    <Stack direction="row" spacing={2}>\n      <Avatar\n        sx={{ bgcolor: deepOrange[500] }}\n        alt="Remy Sharp"\n        src="/broken-image.jpg"\n      >\n        B\n      </Avatar>\n      <Avatar\n        sx={{ bgcolor: deepOrange[500] }}\n        alt="Remy Sharp"\n        src="/broken-image.jpg"\n      />\n      <Avatar src="/broken-image.jpg" />\n    </Stack>\n  );\n}\n'},2138:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return i}));e(1);var r=e(1353),n=e(1600),c=e(0);function i(){return Object(c.jsxs)(n.a,{max:4,children:[Object(c.jsx)(r.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),Object(c.jsx)(r.a,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"}),Object(c.jsx)(r.a,{alt:"Cindy Baker",src:"/material-ui-static/images/avatar/3.jpg"}),Object(c.jsx)(r.a,{alt:"Agnes Walker",src:"/material-ui-static/images/avatar/4.jpg"}),Object(c.jsx)(r.a,{alt:"Trevor Henderson",src:"/material-ui-static/images/avatar/5.jpg"})]})}},2139:function(a,t,e){"use strict";e.r(t),t.default='import * as React from \'react\';\nimport Avatar from \'@mui/material/Avatar\';\nimport AvatarGroup from \'@mui/material/AvatarGroup\';\n\nexport default function GroupAvatars() {\n  return (\n    <AvatarGroup max={4}>\n      <Avatar alt="Remy Sharp" src="/material-ui-static/images/avatar/1.jpg" />\n      <Avatar alt="Travis Howard" src="/material-ui-static/images/avatar/2.jpg" />\n      <Avatar alt="Cindy Baker" src="/material-ui-static/images/avatar/3.jpg" />\n      <Avatar alt="Agnes Walker" src="/material-ui-static/images/avatar/4.jpg" />\n      <Avatar alt="Trevor Henderson" src="/material-ui-static/images/avatar/5.jpg" />\n    </AvatarGroup>\n  );\n}\n'},2140:function(a,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return u}));e(1);var r=e(14),n=e(1322),c=e(1353),i=e(1422),o=e(0),s=Object(r.a)(n.b)((function(a){var t=a.theme;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(t.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}})),l=Object(r.a)(c.a)((function(a){var t=a.theme;return{width:22,height:22,border:"2px solid ".concat(t.palette.background.paper)}}));function u(){return Object(o.jsxs)(i.a,{direction:"row",spacing:2,children:[Object(o.jsx)(s,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot",children:Object(o.jsx)(c.a,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"})}),Object(o.jsx)(n.b,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:Object(o.jsx)(l,{alt:"Remy Sharp",src:"/material-ui-static/images/avatar/1.jpg"}),children:Object(o.jsx)(c.a,{alt:"Travis Howard",src:"/material-ui-static/images/avatar/2.jpg"})})]})}},2141:function(a,t,e){"use strict";e.r(t),t.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Badge from '@mui/material/Badge';\nimport Avatar from '@mui/material/Avatar';\nimport Stack from '@mui/material/Stack';\n\nconst StyledBadge = styled(Badge)(({ theme }) => ({\n  '& .MuiBadge-badge': {\n    backgroundColor: '#44b700',\n    color: '#44b700',\n    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,\n    '&::after': {\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: '100%',\n      borderRadius: '50%',\n      animation: 'ripple 1.2s infinite ease-in-out',\n      border: '1px solid currentColor',\n      content: '\"\"',\n    },\n  },\n  '@keyframes ripple': {\n    '0%': {\n      transform: 'scale(.8)',\n      opacity: 1,\n    },\n    '100%': {\n      transform: 'scale(2.4)',\n      opacity: 0,\n    },\n  },\n}));\n\nconst SmallAvatar = styled(Avatar)(({ theme }) => ({\n  width: 22,\n  height: 22,\n  border: `2px solid ${theme.palette.background.paper}`,\n}));\n\nexport default function BadgeAvatars() {\n  return (\n    <Stack direction=\"row\" spacing={2}>\n      <StyledBadge\n        overlap=\"circular\"\n        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}\n        variant=\"dot\"\n      >\n        <Avatar alt=\"Remy Sharp\" src=\"/material-ui-static/images/avatar/1.jpg\" />\n      </StyledBadge>\n      <Badge\n        overlap=\"circular\"\n        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}\n        badgeContent={\n          <SmallAvatar alt=\"Remy Sharp\" src=\"/material-ui-static/images/avatar/1.jpg\" />\n        }\n      >\n        <Avatar alt=\"Travis Howard\" src=\"/material-ui-static/images/avatar/2.jpg\" />\n      </Badge>\n    </Stack>\n  );\n}\n"},3250:function(a,t,e){"use strict";e.r(t);var r=e(1383),n=e(1336),c=e(1327),i=e(222),o=e(0);t.default=function(a){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(o.jsxs)(n.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/avatars",target:"_blank",role:"button",children:[Object(o.jsx)(c.a,{children:"link"}),Object(o.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(o.jsx)(i.a,{className:"text-40 my-16 font-700",component:"h1",children:"Avatar"}),Object(o.jsx)(i.a,{className:"description",children:"Avatars are found throughout material design with uses in everything from tables to dialog menus."}),Object(o.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Image avatars"}),Object(o.jsxs)(i.a,{className:"mb-40",component:"div",children:["Image avatars can be created by passing standard ",Object(o.jsx)("code",{children:"img"})," props ",Object(o.jsx)("code",{children:"src"})," or"," ",Object(o.jsx)("code",{children:"srcSet"})," to the component."]}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:Object(o.jsx)(r.a,{className:"my-24",iframe:!1,component:e(2123).default,raw:e(2124)})}),Object(o.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Letter avatars"}),Object(o.jsxs)(i.a,{className:"mb-40",component:"div",children:["Avatars containing simple characters can be created by passing a string as"," ",Object(o.jsx)("code",{children:"children"}),"."]}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:Object(o.jsx)(r.a,{className:"my-24",iframe:!1,component:e(2125).default,raw:e(2126)})}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:"You can use different background colors for the avatar. The following demo generates the color based on the name of the person."}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:Object(o.jsx)(r.a,{className:"my-24",iframe:!1,component:e(2127).default,raw:e(2128)})}),Object(o.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Sizes"}),Object(o.jsxs)(i.a,{className:"mb-40",component:"div",children:["You can change the size of the avatar with the ",Object(o.jsx)("code",{children:"height"})," and ",Object(o.jsx)("code",{children:"width"})," ","CSS properties."]}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:Object(o.jsx)(r.a,{className:"my-24",iframe:!1,component:e(2129).default,raw:e(2130)})}),Object(o.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Icon avatars"}),Object(o.jsxs)(i.a,{className:"mb-40",component:"div",children:["Icon avatars are created by passing an icon as ",Object(o.jsx)("code",{children:"children"}),"."]}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:Object(o.jsx)(r.a,{className:"my-24",iframe:!1,component:e(2131).default,raw:e(2133)})}),Object(o.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Variants"}),Object(o.jsxs)(i.a,{className:"mb-40",component:"div",children:["If you need square or rounded avatars, use the ",Object(o.jsx)("code",{children:"variant"})," prop."]}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:Object(o.jsx)(r.a,{className:"my-24",iframe:!1,component:e(2134).default,raw:e(2135)})}),Object(o.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fallbacks"}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:"If there is an error loading the avatar image, the component falls back to an alternative in the following order:"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"the provided children"}),Object(o.jsxs)("li",{children:["the first letter of the ",Object(o.jsx)("code",{children:"alt"})," text"]}),Object(o.jsx)("li",{children:"a generic avatar icon"})]}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:Object(o.jsx)(r.a,{className:"my-24",iframe:!1,component:e(2136).default,raw:e(2137)})}),Object(o.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Grouped"}),Object(o.jsxs)(i.a,{className:"mb-40",component:"div",children:[Object(o.jsx)("code",{children:"AvatarGroup"})," renders its children as a stack."]}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:Object(o.jsx)(r.a,{className:"my-24",iframe:!1,component:e(2138).default,raw:e(2139)})}),Object(o.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"With badge"}),Object(o.jsx)(i.a,{className:"mb-40",component:"div",children:Object(o.jsx)(r.a,{className:"my-24",iframe:!1,component:e(2140).default,raw:e(2141)})})]})}},502:function(a,t,e){"use strict";e.r(t),e.d(t,"capitalize",(function(){return r.a})),e.d(t,"createChainedFunction",(function(){return n.a})),e.d(t,"createSvgIcon",(function(){return c.a})),e.d(t,"debounce",(function(){return i.a})),e.d(t,"deprecatedPropType",(function(){return o})),e.d(t,"isMuiElement",(function(){return s.a})),e.d(t,"ownerDocument",(function(){return l.a})),e.d(t,"ownerWindow",(function(){return u.a})),e.d(t,"requirePropFactory",(function(){return m.a})),e.d(t,"setRef",(function(){return d})),e.d(t,"unstable_useEnhancedEffect",(function(){return j.a})),e.d(t,"unstable_useId",(function(){return f.a})),e.d(t,"unsupportedProp",(function(){return b.a})),e.d(t,"useControlled",(function(){return p.a})),e.d(t,"useEventCallback",(function(){return v.a})),e.d(t,"useForkRef",(function(){return h.a})),e.d(t,"useIsFocusVisible",(function(){return g.a}));var r=e(18),n=e(503),c=e(125),i=e(136);var o=function(a,t){return function(){return null}},s=e(229),l=e(77),u=e(101),m=e(1382),d=e(307).a,j=e(85),f=e(311),b=e(1300),p=e(185),v=e(81),h=e(40),g=e(310)}}]);