(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[37],{1300:function(e,t,n){"use strict";t.a=function(e,t,n,r,c){return null}},1380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(502)},1382:function(e,t,n){"use strict";n(2);t.a=function(e,t){return function(){return null}}},1383:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r=n(17),c=n(168),i=n(1338),a=n(1346),s=n(1327),o=n(1350),l=n(1351),u=n(6),d=n(1),m=n(8),h=n(127),f=n(97),j=n.n(f),b=n(504),p=n(208),v=n(94),x=n(1386),O=n(50),g=n(14),A=n(1294),y=n(0),k=["children","name"];function w(e){var t=e.children,n=e.document,r=Object(O.a)();d.useEffect((function(){n.body.dir=r.direction}),[n,r.direction]);var c=d.useMemo((function(){return Object(p.a)({key:"iframe-demo-".concat(r.direction),prepend:!0,container:n.head,stylisPlugins:"rtl"===r.direction?[b.a]:[]})}),[n,r.direction]),i=d.useCallback((function(){return n.defaultView}),[n]);return Object(y.jsx)(x.a,{target:n.head,stylisPlugins:"rtl"===r.direction?[b.a]:[],children:Object(y.jsxs)(v.a,{value:c,children:[Object(y.jsx)(A.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),d.cloneElement(t,{window:i})]})})}var T=Object(g.a)("iframe")((function(e){var t=e.theme;return{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:t.shadows[1]}}));function N(e){var t,n=e.children,c=e.name,i=Object(h.a)(e,k),a="".concat(c," demo"),s=d.useRef(null),o=d.useReducer((function(){return!0}),!1),l=Object(r.a)(o,2),u=l[0],f=l[1];d.useEffect((function(){var e=s.current.contentDocument;null==e||"complete"!==e.readyState||u||f()}),[u]);var b=null===(t=s.current)||void 0===t?void 0:t.contentDocument;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(T,Object(m.a)({onLoad:f,ref:s,title:a},i)),!1!==u?j.a.createPortal(Object(y.jsx)(w,{document:b,children:n}),b.body):null]})}var S=d.memo(N);function C(e){var t=Object(d.useState)(e.currentTabIndex),n=Object(r.a)(t,2),m=n[0],h=n[1],f=e.component,j=e.raw,b=e.iframe,p=e.className;return Object(y.jsxs)(a.a,{className:Object(u.default)(p,"shadow"),children:[Object(y.jsx)(i.a,{position:"static",color:"default",className:"shadow-0",children:Object(y.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){h(t)},children:[f&&Object(y.jsx)(o.a,{classes:{root:"min-w-64"},icon:Object(y.jsx)(s.a,{children:"remove_red_eye"})}),j&&Object(y.jsx)(o.a,{classes:{root:"min-w-64"},icon:Object(y.jsx)(s.a,{children:"code"})})]})}),Object(y.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(y.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:f&&(b?Object(y.jsx)(S,{children:Object(y.jsx)(f,{})}):Object(y.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(y.jsx)(f,{})}))}),Object(y.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:j&&Object(y.jsx)("div",{className:"flex flex-1",children:Object(y.jsx)(c.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:j.default})})})]})]})}C.defaultProps={currentTabIndex:0};var M=C},1385:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(2),c=n(13),i=n(1),a=(n(12),n(6)),s=n(397),o=n(1365),l=n(1293),u=n(269),d=n(0),m=["className","component"];function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=Object(s.a)("div")(o.a),h=i.forwardRef((function(e,i){var s=Object(u.a)(t),o=Object(l.a)(e),h=o.className,f=o.component,j=void 0===f?"div":f,b=Object(c.a)(o,m);return Object(d.jsx)(n,Object(r.a)({as:j,ref:i,className:Object(a.default)(h,"MuiBox-root"),theme:s},b))}));return h}},1389:function(e,t,n){"use strict";var r=n(1385),c=n(515),i=Object(c.b)(),a=Object(r.a)({defaultTheme:i});t.a=a},1422:function(e,t,n){"use strict";var r=n(4),c=n(13),i=n(2),a=n(1),s=(n(12),n(96)),o=n(108),l=n(1293),u=n(395),d=n(14),m=n(24),h=n(0),f=["component","direction","spacing","divider","children"];function j(e,t){var n=a.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,c){return e.push(r),c<n.length-1&&e.push(a.cloneElement(t,{key:"separator-".concat(c)})),e}),[])}var b=Object(d.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,c=Object(i.a)({display:"flex"},Object(s.b)({theme:n},t.direction,(function(e){return{flexDirection:e}})));if(t.spacing){var a=Object(o.a)(n),l=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),d=Object(s.d)({values:t.direction,base:l}),m=Object(s.d)({values:t.spacing,base:l});c=Object(u.a)(c,Object(s.b)({theme:n},m,(function(e,n){return{"& > :not(style) + :not(style)":Object(r.a)({margin:0},"margin".concat((c=n?d[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[c])),Object(o.d)(a,e))};var c})))}return c})),p=a.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiStack"}),r=Object(l.a)(n),a=r.component,s=void 0===a?"div":a,o=r.direction,u=void 0===o?"column":o,d=r.spacing,p=void 0===d?0:d,v=r.divider,x=r.children,O=Object(c.a)(r,f),g={direction:u,spacing:p};return Object(h.jsx)(b,Object(i.a)({as:s,ownerState:g,ref:t},O,{children:v?j(x,v):x}))}));t.a=p},1444:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(36),c=n(34);function i(e){return Object(r.a)("MuiAlert",e)}var a=Object(c.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);t.a=a},1471:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(36),c=n(34);function i(e){return Object(r.a)("MuiAlertTitle",e)}var a=Object(c.a)("MuiAlertTitle",["root"]);t.a=a},1573:function(e,t,n){"use strict";var r=n(739);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(1380)),i=n(0),a=(0,c.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=a},1590:function(e,t,n){"use strict";var r=n(739);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(1380)),i=n(0),a=(0,c.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=a},1592:function(e,t,n){"use strict";var r,c=n(4),i=n(13),a=n(2),s=n(1),o=(n(12),n(6)),l=n(38),u=n(58),d=n(14),m=n(24),h=n(18),f=n(198),j=n(1444),b=n(1328),p=n(125),v=n(0),x=Object(p.a)(Object(v.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),O=Object(p.a)(Object(v.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),g=Object(p.a)(Object(v.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),A=Object(p.a)(Object(v.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),y=n(1627),k=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],w=Object(d.a)(f.a,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(h.a)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,r="light"===t.palette.mode?u.b:u.i,i="light"===t.palette.mode?u.i:u.b,s=n.color||n.severity;return Object(a.a)({},t.typography.body2,{borderRadius:t.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&"standard"===n.variant&&Object(c.a)({color:r(t.palette[s].light,.6),backgroundColor:i(t.palette[s].light,.9)},"& .".concat(j.a.icon),{color:"dark"===t.palette.mode?t.palette[s].main:t.palette[s].light}),s&&"outlined"===n.variant&&Object(c.a)({color:r(t.palette[s].light,.6),border:"1px solid ".concat(t.palette[s].light)},"& .".concat(j.a.icon),{color:"dark"===t.palette.mode?t.palette[s].main:t.palette[s].light}),s&&"filled"===n.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[s].dark:t.palette[s].main})})),T=Object(d.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),N=Object(d.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),S=Object(d.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),C={success:Object(v.jsx)(x,{fontSize:"inherit"}),warning:Object(v.jsx)(O,{fontSize:"inherit"}),error:Object(v.jsx)(g,{fontSize:"inherit"}),info:Object(v.jsx)(A,{fontSize:"inherit"})},M=s.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiAlert"}),c=n.action,s=n.children,u=n.className,d=n.closeText,f=void 0===d?"Close":d,p=n.color,x=n.icon,O=n.iconMapping,g=void 0===O?C:O,A=n.onClose,M=n.role,R=void 0===M?"alert":M,z=n.severity,I=void 0===z?"success":z,B=n.variant,L=void 0===B?"standard":B,E=Object(i.a)(n,k),P=Object(a.a)({},n,{color:p,severity:I,variant:L}),_=function(e){var t=e.variant,n=e.color,r=e.severity,c=e.classes,i={root:["root","".concat(t).concat(Object(h.a)(n||r)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(l.a)(i,j.b,c)}(P);return Object(v.jsxs)(w,Object(a.a)({role:R,square:!0,elevation:0,ownerState:P,className:Object(o.default)(_.root,u),ref:t},E,{children:[!1!==x?Object(v.jsx)(T,{ownerState:P,className:_.icon,children:x||g[I]||C[I]}):null,Object(v.jsx)(N,{ownerState:P,className:_.message,children:s}),null!=c?Object(v.jsx)(S,{className:_.action,children:c}):null,null==c&&A?Object(v.jsx)(S,{ownerState:P,className:_.action,children:Object(v.jsx)(b.a,{size:"small","aria-label":f,title:f,color:"inherit",onClick:A,children:r||(r=Object(v.jsx)(y.a,{fontSize:"small"}))})}):null]}))}));t.a=M},1599:function(e,t,n){"use strict";var r=n(2),c=n(13),i=n(1),a=(n(12),n(6)),s=n(38),o=n(14),l=n(24),u=n(222),d=n(1471),m=n(0),h=["className"],f=Object(o.a)(u.a,{name:"MuiAlertTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{fontWeight:e.theme.typography.fontWeightMedium,marginTop:-2}})),j=i.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiAlertTitle"}),i=n.className,o=Object(c.a)(n,h),u=n,j=function(e){var t=e.classes;return Object(s.a)({root:["root"]},d.b,t)}(u);return Object(m.jsx)(f,Object(r.a)({gutterBottom:!0,component:"div",ownerState:u,ref:t,className:Object(a.default)(j.root,i)},o))}));t.a=j},1627:function(e,t,n){"use strict";n(1);var r=n(125),c=n(0);t.a=Object(r.a)(Object(c.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},2031:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(1);var r=n(1592),c=n(1422),i=n(0);function a(){return Object(i.jsxs)(c.a,{sx:{width:"100%"},spacing:2,children:[Object(i.jsx)(r.a,{severity:"error",children:"This is an error alert \u2014 check it out!"}),Object(i.jsx)(r.a,{severity:"warning",children:"This is a warning alert \u2014 check it out!"}),Object(i.jsx)(r.a,{severity:"info",children:"This is an info alert \u2014 check it out!"}),Object(i.jsx)(r.a,{severity:"success",children:"This is a success alert \u2014 check it out!"})]})}},2032:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Alert from '@mui/material/Alert';\nimport Stack from '@mui/material/Stack';\n\nexport default function BasicAlerts() {\n  return (\n    <Stack sx={{ width: '100%' }} spacing={2}>\n      <Alert severity=\"error\">This is an error alert \u2014 check it out!</Alert>\n      <Alert severity=\"warning\">This is a warning alert \u2014 check it out!</Alert>\n      <Alert severity=\"info\">This is an info alert \u2014 check it out!</Alert>\n      <Alert severity=\"success\">This is a success alert \u2014 check it out!</Alert>\n    </Stack>\n  );\n}\n"},2033:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(1);var r=n(1592),c=n(1599),i=n(1422),a=n(0);function s(){return Object(a.jsxs)(i.a,{sx:{width:"100%"},spacing:2,children:[Object(a.jsxs)(r.a,{severity:"error",children:[Object(a.jsx)(c.a,{children:"Error"}),"This is an error alert \u2014 ",Object(a.jsx)("strong",{children:"check it out!"})]}),Object(a.jsxs)(r.a,{severity:"warning",children:[Object(a.jsx)(c.a,{children:"Warning"}),"This is a warning alert \u2014 ",Object(a.jsx)("strong",{children:"check it out!"})]}),Object(a.jsxs)(r.a,{severity:"info",children:[Object(a.jsx)(c.a,{children:"Info"}),"This is an info alert \u2014 ",Object(a.jsx)("strong",{children:"check it out!"})]}),Object(a.jsxs)(r.a,{severity:"success",children:[Object(a.jsx)(c.a,{children:"Success"}),"This is a success alert \u2014 ",Object(a.jsx)("strong",{children:"check it out!"})]})]})}},2034:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Alert from '@mui/material/Alert';\nimport AlertTitle from '@mui/material/AlertTitle';\nimport Stack from '@mui/material/Stack';\n\nexport default function DescriptionAlerts() {\n  return (\n    <Stack sx={{ width: '100%' }} spacing={2}>\n      <Alert severity=\"error\">\n        <AlertTitle>Error</AlertTitle>\n        This is an error alert \u2014 <strong>check it out!</strong>\n      </Alert>\n      <Alert severity=\"warning\">\n        <AlertTitle>Warning</AlertTitle>\n        This is a warning alert \u2014 <strong>check it out!</strong>\n      </Alert>\n      <Alert severity=\"info\">\n        <AlertTitle>Info</AlertTitle>\n        This is an info alert \u2014 <strong>check it out!</strong>\n      </Alert>\n      <Alert severity=\"success\">\n        <AlertTitle>Success</AlertTitle>\n        This is a success alert \u2014 <strong>check it out!</strong>\n      </Alert>\n    </Stack>\n  );\n}\n"},2035:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(1);var r=n(1592),c=n(1336),i=n(1422),a=n(0);function s(){return Object(a.jsxs)(i.a,{sx:{width:"100%"},spacing:2,children:[Object(a.jsx)(r.a,{onClose:function(){},children:"This is a success alert \u2014 check it out!"}),Object(a.jsx)(r.a,{action:Object(a.jsx)(c.a,{color:"inherit",size:"small",children:"UNDO"}),children:"This is a success alert \u2014 check it out!"})]})}},2036:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Alert from '@mui/material/Alert';\nimport Button from '@mui/material/Button';\nimport Stack from '@mui/material/Stack';\n\nexport default function ActionAlerts() {\n  return (\n    <Stack sx={{ width: '100%' }} spacing={2}>\n      <Alert onClose={() => {}}>This is a success alert \u2014 check it out!</Alert>\n      <Alert\n        action={\n          <Button color=\"inherit\" size=\"small\">\n            UNDO\n          </Button>\n        }\n      >\n        This is a success alert \u2014 check it out!\n      </Alert>\n    </Stack>\n  );\n}\n"},2037:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(17),c=n(1),i=n(1389),a=n(1592),s=n(1328),o=n(773),l=n(1336),u=n(1590),d=n.n(u),m=n(0);function h(){var e=c.useState(!0),t=Object(r.a)(e,2),n=t[0],u=t[1];return Object(m.jsxs)(i.a,{sx:{width:"100%"},children:[Object(m.jsx)(o.a,{in:n,children:Object(m.jsx)(a.a,{action:Object(m.jsx)(s.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){u(!1)},children:Object(m.jsx)(d.a,{fontSize:"inherit"})}),sx:{mb:2},children:"Close me!"})}),Object(m.jsx)(l.a,{disabled:n,variant:"outlined",onClick:function(){u(!0)},children:"Re-open"})]})}},2038:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Alert from '@mui/material/Alert';\nimport IconButton from '@mui/material/IconButton';\nimport Collapse from '@mui/material/Collapse';\nimport Button from '@mui/material/Button';\nimport CloseIcon from '@mui/icons-material/Close';\n\nexport default function TransitionAlerts() {\n  const [open, setOpen] = React.useState(true);\n\n  return (\n    <Box sx={{ width: '100%' }}>\n      <Collapse in={open}>\n        <Alert\n          action={\n            <IconButton\n              aria-label=\"close\"\n              color=\"inherit\"\n              size=\"small\"\n              onClick={() => {\n                setOpen(false);\n              }}\n            >\n              <CloseIcon fontSize=\"inherit\" />\n            </IconButton>\n          }\n          sx={{ mb: 2 }}\n        >\n          Close me!\n        </Alert>\n      </Collapse>\n      <Button\n        disabled={open}\n        variant=\"outlined\"\n        onClick={() => {\n          setOpen(true);\n        }}\n      >\n        Re-open\n      </Button>\n    </Box>\n  );\n}\n"},2039:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));n(1);var r=n(1592),c=n(1573),i=n.n(c),a=n(2040),s=n.n(a),o=n(1422),l=n(0);function u(){return Object(l.jsxs)(o.a,{sx:{width:"100%"},spacing:2,children:[Object(l.jsx)(r.a,{icon:Object(l.jsx)(i.a,{fontSize:"inherit"}),severity:"success",children:"This is a success alert \u2014 check it out!"}),Object(l.jsx)(r.a,{iconMapping:{success:Object(l.jsx)(s.a,{fontSize:"inherit"})},children:"This is a success alert \u2014 check it out!"}),Object(l.jsx)(r.a,{icon:!1,severity:"success",children:"This is a success alert \u2014 check it out!"})]})}},2040:function(e,t,n){"use strict";var r=n(739);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(1380)),i=n(0),a=(0,c.default)((0,i.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");t.default=a},2041:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Alert from '@mui/material/Alert';\nimport CheckIcon from '@mui/icons-material/Check';\nimport CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';\nimport Stack from '@mui/material/Stack';\n\nexport default function IconAlerts() {\n  return (\n    <Stack sx={{ width: '100%' }} spacing={2}>\n      <Alert icon={<CheckIcon fontSize=\"inherit\" />} severity=\"success\">\n        This is a success alert \u2014 check it out!\n      </Alert>\n      <Alert\n        iconMapping={{\n          success: <CheckCircleOutlineIcon fontSize=\"inherit\" />,\n        }}\n      >\n        This is a success alert \u2014 check it out!\n      </Alert>\n      <Alert icon={false} severity=\"success\">\n        This is a success alert \u2014 check it out!\n      </Alert>\n    </Stack>\n  );\n}\n"},2042:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(1);var r=n(1592),c=n(1422),i=n(0);function a(){return Object(i.jsxs)(c.a,{sx:{width:"100%"},spacing:2,children:[Object(i.jsx)(r.a,{variant:"outlined",severity:"error",children:"This is an error alert \u2014 check it out!"}),Object(i.jsx)(r.a,{variant:"outlined",severity:"warning",children:"This is a warning alert \u2014 check it out!"}),Object(i.jsx)(r.a,{variant:"outlined",severity:"info",children:"This is an info alert \u2014 check it out!"}),Object(i.jsx)(r.a,{variant:"outlined",severity:"success",children:"This is a success alert \u2014 check it out!"})]})}},2043:function(e,t,n){"use strict";n.r(t),t.default='import * as React from \'react\';\nimport Alert from \'@mui/material/Alert\';\nimport Stack from \'@mui/material/Stack\';\n\nexport default function BasicAlerts() {\n  return (\n    <Stack sx={{ width: \'100%\' }} spacing={2}>\n      <Alert variant="outlined" severity="error">\n        This is an error alert \u2014 check it out!\n      </Alert>\n      <Alert variant="outlined" severity="warning">\n        This is a warning alert \u2014 check it out!\n      </Alert>\n      <Alert variant="outlined" severity="info">\n        This is an info alert \u2014 check it out!\n      </Alert>\n      <Alert variant="outlined" severity="success">\n        This is a success alert \u2014 check it out!\n      </Alert>\n    </Stack>\n  );\n}\n'},2044:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(1);var r=n(1592),c=n(1422),i=n(0);function a(){return Object(i.jsxs)(c.a,{sx:{width:"100%"},spacing:2,children:[Object(i.jsx)(r.a,{variant:"filled",severity:"error",children:"This is an error alert \u2014 check it out!"}),Object(i.jsx)(r.a,{variant:"filled",severity:"warning",children:"This is a warning alert \u2014 check it out!"}),Object(i.jsx)(r.a,{variant:"filled",severity:"info",children:"This is an info alert \u2014 check it out!"}),Object(i.jsx)(r.a,{variant:"filled",severity:"success",children:"This is a success alert \u2014 check it out!"})]})}},2045:function(e,t,n){"use strict";n.r(t),t.default='import * as React from \'react\';\nimport Alert from \'@mui/material/Alert\';\nimport Stack from \'@mui/material/Stack\';\n\nexport default function BasicAlerts() {\n  return (\n    <Stack sx={{ width: \'100%\' }} spacing={2}>\n      <Alert variant="filled" severity="error">\n        This is an error alert \u2014 check it out!\n      </Alert>\n      <Alert variant="filled" severity="warning">\n        This is a warning alert \u2014 check it out!\n      </Alert>\n      <Alert variant="filled" severity="info">\n        This is an info alert \u2014 check it out!\n      </Alert>\n      <Alert variant="filled" severity="success">\n        This is a success alert \u2014 check it out!\n      </Alert>\n    </Stack>\n  );\n}\n'},2046:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n(1);var r=n(1592),c=n(0);function i(){return Object(c.jsx)(r.a,{severity:"success",color:"info",children:"This is a success alert \u2014 check it out!"})}},2047:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Alert from '@mui/material/Alert';\n\nexport default function ColorAlerts() {\n  return (\n    <Alert severity=\"success\" color=\"info\">\n      This is a success alert \u2014 check it out!\n    </Alert>\n  );\n}\n"},3247:function(e,t,n){"use strict";n.r(t);var r=n(1383),c=n(1336),i=n(1327),a=n(222),s=n(0);t.default=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(s.jsxs)(c.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/alert",target:"_blank",role:"button",children:[Object(s.jsx)(i.a,{children:"link"}),Object(s.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(s.jsx)(a.a,{className:"text-40 my-16 font-700",component:"h1",children:"Alert"}),Object(s.jsx)(a.a,{className:"description",children:"An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task."}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:[Object(s.jsx)("strong",{children:"Note:"})," This component is not documented in the"," ",Object(s.jsx)("a",{href:"https://material.io/",children:"Material Design guidelines"}),", but MUI supports it."]}),Object(s.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic alerts"}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:"The alert offers four severity levels that set a distinctive icon and color."}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:Object(s.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2031).default,raw:n(2032)})}),Object(s.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Description"}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:["You can use the ",Object(s.jsx)("code",{children:"AlertTitle"})," component to display a formatted title above the content."]}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:Object(s.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2033).default,raw:n(2034)})}),Object(s.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Actions"}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:"An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert."}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:["If an ",Object(s.jsx)("code",{children:"onClose"})," callback is provided and no ",Object(s.jsx)("code",{children:"action"})," prop is set, a close icon is displayed. The ",Object(s.jsx)("code",{children:"action"})," prop can be used to provide an alternative action, for example using a Button or IconButton."]}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:Object(s.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2035).default,raw:n(2036)})}),Object(s.jsx)(a.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Transition"}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:["You can use a ",Object(s.jsx)("a",{href:"/components/transitions/",children:"transition component"})," such as"," ",Object(s.jsx)("code",{children:"Collapse"})," to transition the appearance of the alert."]}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:Object(s.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2037).default,raw:n(2038)})}),Object(s.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Icons"}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:["The ",Object(s.jsx)("code",{children:"icon"})," prop allows you to add an icon to the beginning of the alert component. This will override the default icon for the specified severity."]}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:["You can change the default severity to icon mapping with the ",Object(s.jsx)("code",{children:"iconMapping"})," prop. This can be defined globally using"," ",Object(s.jsx)("a",{href:"/customization/theme-components/#default-props",children:"theme customization"}),"."]}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:["Setting the icon prop to ",Object(s.jsx)("code",{children:"false"})," will remove the icon altogether."]}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:Object(s.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2039).default,raw:n(2041)})}),Object(s.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Variants"}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:"Two additional variants are available \u2013 outlined, and filled:"}),Object(s.jsx)(a.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Outlined"}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:Object(s.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2042).default,raw:n(2043)})}),Object(s.jsx)(a.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Filled"}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:Object(s.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2044).default,raw:n(2045)})}),Object(s.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Toast"}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:["You can use the Snackbar to"," ",Object(s.jsx)("a",{href:"/components/snackbars/#customized-snackbars",children:"display a toast"})," with the Alert."]}),Object(s.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Color"}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:["The ",Object(s.jsx)("code",{children:"color"})," prop will override the default color for the specified severity."]}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:Object(s.jsx)(r.a,{className:"my-24",iframe:!1,component:n(2046).default,raw:n(2047)})}),Object(s.jsx)(a.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),Object(s.jsxs)(a.a,{className:"mb-40",component:"div",children:["(WAI-ARIA:"," ",Object(s.jsx)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#alert",children:"https://www.w3.org/TR/wai-aria-practices/#alert"}),")"]}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:"When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads."}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text."}),Object(s.jsx)(a.a,{className:"mb-40",component:"div",children:"Actions must have a tab index of 0 so that they can be reached by keyboard-only users."})]})}},502:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return c.a})),n.d(t,"createSvgIcon",(function(){return i.a})),n.d(t,"debounce",(function(){return a.a})),n.d(t,"deprecatedPropType",(function(){return s})),n.d(t,"isMuiElement",(function(){return o.a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return u.a})),n.d(t,"requirePropFactory",(function(){return d.a})),n.d(t,"setRef",(function(){return m})),n.d(t,"unstable_useEnhancedEffect",(function(){return h.a})),n.d(t,"unstable_useId",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return j.a})),n.d(t,"useControlled",(function(){return b.a})),n.d(t,"useEventCallback",(function(){return p.a})),n.d(t,"useForkRef",(function(){return v.a})),n.d(t,"useIsFocusVisible",(function(){return x.a}));var r=n(18),c=n(503),i=n(125),a=n(136);var s=function(e,t){return function(){return null}},o=n(229),l=n(77),u=n(101),d=n(1382),m=n(307).a,h=n(85),f=n(311),j=n(1300),b=n(185),p=n(81),v=n(40),x=n(310)}}]);