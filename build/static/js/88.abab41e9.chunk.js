(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[88],{1383:function(e,n,t){"use strict";t.d(n,"a",(function(){return F}));var a=t(17),c=t(168),r=t(1338),o=t(1346),i=t(1327),l=t(1350),s=t(1351),m=t(6),d=t(1),u=t(8),j=t(127),b=t(97),p=t.n(b),x=t(504),f=t(209),h=t(94),v=t(1386),g=t(50),O=t(14),w=t(1294),y=t(0),S=["children","name"];function I(e){var n=e.children,t=e.document,a=Object(g.a)();d.useEffect((function(){t.body.dir=a.direction}),[t,a.direction]);var c=d.useMemo((function(){return Object(f.a)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===a.direction?[x.a]:[]})}),[t,a.direction]),r=d.useCallback((function(){return t.defaultView}),[t]);return Object(y.jsx)(v.a,{target:t.head,stylisPlugins:"rtl"===a.direction?[x.a]:[],children:Object(y.jsxs)(h.a,{value:c,children:[Object(y.jsx)(w.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),d.cloneElement(n,{window:r})]})})}var C=Object(O.a)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function k(e){var n,t=e.children,c=e.name,r=Object(j.a)(e,S),o="".concat(c," demo"),i=d.useRef(null),l=d.useReducer((function(){return!0}),!1),s=Object(a.a)(l,2),m=s[0],b=s[1];d.useEffect((function(){var e=i.current.contentDocument;null==e||"complete"!==e.readyState||m||b()}),[m]);var x=null===(n=i.current)||void 0===n?void 0:n.contentDocument;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(C,Object(u.a)({onLoad:b,ref:i,title:o},r)),!1!==m?p.a.createPortal(Object(y.jsx)(I,{document:x,children:t}),x.body):null]})}var R=d.memo(k);function N(e){var n=Object(d.useState)(e.currentTabIndex),t=Object(a.a)(n,2),u=t[0],j=t[1],b=e.component,p=e.raw,x=e.iframe,f=e.className;return Object(y.jsxs)(o.a,{className:Object(m.default)(f,"shadow"),children:[Object(y.jsx)(r.a,{position:"static",color:"default",className:"shadow-0",children:Object(y.jsxs)(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,n){j(n)},children:[b&&Object(y.jsx)(l.a,{classes:{root:"min-w-64"},icon:Object(y.jsx)(i.a,{children:"remove_red_eye"})}),p&&Object(y.jsx)(l.a,{classes:{root:"min-w-64"},icon:Object(y.jsx)(i.a,{children:"code"})})]})}),Object(y.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(y.jsx)("div",{className:0===u?"flex flex-1 max-w-full":"hidden",children:b&&(x?Object(y.jsx)(R,{children:Object(y.jsx)(b,{})}):Object(y.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(y.jsx)(b,{})}))}),Object(y.jsx)("div",{className:1===u?"flex flex-1":"hidden",children:p&&Object(y.jsx)("div",{className:"flex flex-1",children:Object(y.jsx)(c.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:p.default})})})]})]})}N.defaultProps={currentTabIndex:0};var F=N},1392:function(e,n,t){"use strict";t.d(n,"b",(function(){return o}));var a=t(20),c=t(36),r=t(34);function o(e){return Object(c.a)("MuiGrid",e)}var i=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],l=Object(r.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(a.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),Object(a.a)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),Object(a.a)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),Object(a.a)(i.map((function(e){return"grid-xs-".concat(e)}))),Object(a.a)(i.map((function(e){return"grid-sm-".concat(e)}))),Object(a.a)(i.map((function(e){return"grid-md-".concat(e)}))),Object(a.a)(i.map((function(e){return"grid-lg-".concat(e)}))),Object(a.a)(i.map((function(e){return"grid-xl-".concat(e)})))));n.a=l},1422:function(e,n,t){"use strict";var a=t(4),c=t(13),r=t(2),o=t(1),i=(t(12),t(96)),l=t(108),s=t(1293),m=t(395),d=t(14),u=t(24),j=t(0),b=["component","direction","spacing","divider","children"];function p(e,n){var t=o.Children.toArray(e).filter(Boolean);return t.reduce((function(e,a,c){return e.push(a),c<t.length-1&&e.push(o.cloneElement(n,{key:"separator-".concat(c)})),e}),[])}var x=Object(d.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,c=Object(r.a)({display:"flex"},Object(i.b)({theme:t},n.direction,(function(e){return{flexDirection:e}})));if(n.spacing){var o=Object(l.a)(t),s=Object.keys(t.breakpoints.values).reduce((function(e,t){return null==n.spacing[t]&&null==n.direction[t]||(e[t]=!0),e}),{}),d=Object(i.d)({values:n.direction,base:s}),u=Object(i.d)({values:n.spacing,base:s});c=Object(m.a)(c,Object(i.b)({theme:t},u,(function(e,t){return{"& > :not(style) + :not(style)":Object(a.a)({margin:0},"margin".concat((c=t?d[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[c])),Object(l.d)(o,e))};var c})))}return c})),f=o.forwardRef((function(e,n){var t=Object(u.a)({props:e,name:"MuiStack"}),a=Object(s.a)(t),o=a.component,i=void 0===o?"div":o,l=a.direction,m=void 0===l?"column":l,d=a.spacing,f=void 0===d?0:d,h=a.divider,v=a.children,g=Object(c.a)(a,b),O={direction:m,spacing:f};return Object(j.jsx)(x,Object(r.a)({as:i,ownerState:O,ref:n},g,{children:h?p(v,h):v}))}));n.a=f},1457:function(e,n,t){"use strict";var a=t(4),c=t(13),r=t(2),o=t(1),i=(t(12),t(6)),l=t(96),s=t(1293),m=t(38),d=t(14),u=t(24);var j=o.createContext(),b=t(1392),p=t(0),x=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function f(e){var n=parseFloat(e);return"".concat(n).concat(String(e).replace(String(n),"")||"px")}var h=Object(d.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,a=t.container,c=t.direction,r=t.item,o=t.lg,i=t.md,l=t.sm,s=t.spacing,m=t.wrap,d=t.xl,u=t.xs,j=t.zeroMinWidth;return[n.root,a&&n.container,r&&n.item,j&&n.zeroMinWidth,a&&0!==s&&n["spacing-xs-".concat(String(s))],"row"!==c&&n["direction-xs-".concat(String(c))],"wrap"!==m&&n["wrap-xs-".concat(String(m))],!1!==u&&n["grid-xs-".concat(String(u))],!1!==l&&n["grid-sm-".concat(String(l))],!1!==i&&n["grid-md-".concat(String(i))],!1!==o&&n["grid-lg-".concat(String(o))],!1!==d&&n["grid-xl-".concat(String(d))]]}})((function(e){var n=e.ownerState;return Object(r.a)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"nowrap"===n.wrap&&{flexWrap:"nowrap"},"reverse"===n.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var n=e.theme,t=e.ownerState;return Object(l.b)({theme:n},t.direction,(function(e){var n={flexDirection:e};return 0===e.indexOf("column")&&(n["& > .".concat(b.a.item)]={maxWidth:"none"}),n}))}),(function(e){var n=e.theme,t=e.ownerState,c=t.container,r=t.rowSpacing,o={};return c&&0!==r&&(o=Object(l.b)({theme:n},r,(function(e){var t=n.spacing(e);return"0px"!==t?Object(a.a)({marginTop:"-".concat(f(t))},"& > .".concat(b.a.item),{paddingTop:f(t)}):{}}))),o}),(function(e){var n=e.theme,t=e.ownerState,c=t.container,r=t.columnSpacing,o={};return c&&0!==r&&(o=Object(l.b)({theme:n},r,(function(e){var t=n.spacing(e);return"0px"!==t?Object(a.a)({width:"calc(100% + ".concat(f(t),")"),marginLeft:"-".concat(f(t))},"& > .".concat(b.a.item),{paddingLeft:f(t)}):{}}))),o}),(function(e){var n=e.theme,t=e.ownerState;return n.breakpoints.keys.reduce((function(e,a){return function(e,n,t,a){var c=a[t];if(c){var o={};if(!0===c)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===c)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var i=Object(l.d)({values:a.columns,base:n.breakpoints.values}),s="".concat(Math.round(c/i[t]*1e8)/1e6,"%"),m={};if(a.container&&a.item&&0!==a.columnSpacing){var d=n.spacing(a.columnSpacing);if("0px"!==d){var u="calc(".concat(s," + ").concat(f(d),")");m={flexBasis:u,maxWidth:u}}}o=Object(r.a)({flexBasis:s,flexGrow:0,maxWidth:s},m)}0===n.breakpoints.values[t]?Object.assign(e,o):e[n.breakpoints.up(t)]=o}}(e,n,a,t),e}),{})})),v=o.forwardRef((function(e,n){var t,a=Object(u.a)({props:e,name:"MuiGrid"}),l=Object(s.a)(a),d=l.className,f=l.columns,v=void 0===f?12:f,g=l.columnSpacing,O=l.component,w=void 0===O?"div":O,y=l.container,S=void 0!==y&&y,I=l.direction,C=void 0===I?"row":I,k=l.item,R=void 0!==k&&k,N=l.lg,F=void 0!==N&&N,G=l.md,L=void 0!==G&&G,P=l.rowSpacing,W=l.sm,M=void 0!==W&&W,z=l.spacing,D=void 0===z?0:z,A=l.wrap,T=void 0===A?"wrap":A,B=l.xl,$=void 0!==B&&B,E=l.xs,H=void 0!==E&&E,J=l.zeroMinWidth,_=void 0!==J&&J,U=Object(c.a)(l,x),Y=P||D,V=g||D,q=o.useContext(j)||v,K=Object(r.a)({},l,{columns:q,container:S,direction:C,item:R,lg:F,md:L,sm:M,rowSpacing:Y,columnSpacing:V,wrap:T,xl:$,xs:H,zeroMinWidth:_}),Q=function(e){var n=e.classes,t=e.container,a=e.direction,c=e.item,r=e.lg,o=e.md,i=e.sm,l=e.spacing,s=e.wrap,d=e.xl,u=e.xs,j={root:["root",t&&"container",c&&"item",e.zeroMinWidth&&"zeroMinWidth",t&&0!==l&&"spacing-xs-".concat(String(l)),"row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==s&&"wrap-xs-".concat(String(s)),!1!==u&&"grid-xs-".concat(String(u)),!1!==i&&"grid-sm-".concat(String(i)),!1!==o&&"grid-md-".concat(String(o)),!1!==r&&"grid-lg-".concat(String(r)),!1!==d&&"grid-xl-".concat(String(d))]};return Object(m.a)(j,b.b,n)}(K);return t=Object(p.jsx)(h,Object(r.a)({ownerState:K,className:Object(i.default)(Q.root,d),as:w,ref:n},U)),12!==q?Object(p.jsx)(j.Provider,{value:q,children:t}):t}));n.a=v},1563:function(e,n,t){"use strict";var a=t(8),c=t(127),r=t(1),o=t(542),i=t(0),l=["code","language"],s=Object(r.forwardRef)((function(e,n){var t=e.code,r=e.language,s=Object(c.a)(e,l);return Object(i.jsx)(o.a,Object(a.a)(Object(a.a)({component:"pre",className:"language-".concat(r||"jsx"),ref:n},s),{},{children:t}))}));n.a=s},2845:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(8),c=(t(1),t(199)),r=t(1422),o=t(14),i=t(0),l=Object(o.a)(c.a)((function(e){var n=e.theme;return Object(a.a)(Object(a.a)({},n.typography.body2),{},{padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary})}));function s(){return Object(i.jsx)("div",{children:Object(i.jsxs)(r.a,{spacing:2,children:[Object(i.jsx)(l,{children:"Item 1"}),Object(i.jsx)(l,{children:"Item 2"}),Object(i.jsx)(l,{children:"Item 3"})]})})}},2846:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Paper from '@mui/material/Paper';\nimport Stack from '@mui/material/Stack';\nimport { styled } from '@mui/material/styles';\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  padding: theme.spacing(1),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function BasicStack() {\n  return (\n    <div>\n      <Stack spacing={2}>\n        <Item>Item 1</Item>\n        <Item>Item 2</Item>\n        <Item>Item 3</Item>\n      </Stack>\n    </div>\n  );\n}\n"},2847:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(8),c=(t(1),t(199)),r=t(1422),o=t(14),i=t(0),l=Object(o.a)(c.a)((function(e){var n=e.theme;return Object(a.a)(Object(a.a)({},n.typography.body2),{},{padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary})}));function s(){return Object(i.jsx)("div",{children:Object(i.jsxs)(r.a,{direction:"row",spacing:2,children:[Object(i.jsx)(l,{children:"Item 1"}),Object(i.jsx)(l,{children:"Item 2"}),Object(i.jsx)(l,{children:"Item 3"})]})})}},2848:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Paper from '@mui/material/Paper';\nimport Stack from '@mui/material/Stack';\nimport { styled } from '@mui/material/styles';\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  padding: theme.spacing(1),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function DirectionStack() {\n  return (\n    <div>\n      <Stack direction=\"row\" spacing={2}>\n        <Item>Item 1</Item>\n        <Item>Item 2</Item>\n        <Item>Item 3</Item>\n      </Stack>\n    </div>\n  );\n}\n"},2849:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var a=t(8),c=(t(1),t(1344)),r=t(199),o=t(1422),i=t(14),l=t(0),s=Object(i.a)(r.a)((function(e){var n=e.theme;return Object(a.a)(Object(a.a)({},n.typography.body2),{},{padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary})}));function m(){return Object(l.jsx)("div",{children:Object(l.jsxs)(o.a,{direction:"row",divider:Object(l.jsx)(c.a,{orientation:"vertical",flexItem:!0}),spacing:2,children:[Object(l.jsx)(s,{children:"Item 1"}),Object(l.jsx)(s,{children:"Item 2"}),Object(l.jsx)(s,{children:"Item 3"})]})})}},2850:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Divider from '@mui/material/Divider';\nimport Paper from '@mui/material/Paper';\nimport Stack from '@mui/material/Stack';\nimport { styled } from '@mui/material/styles';\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  padding: theme.spacing(1),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function DividerStack() {\n  return (\n    <div>\n      <Stack\n        direction=\"row\"\n        divider={<Divider orientation=\"vertical\" flexItem />}\n        spacing={2}\n      >\n        <Item>Item 1</Item>\n        <Item>Item 2</Item>\n        <Item>Item 3</Item>\n      </Stack>\n    </div>\n  );\n}\n"},2851:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var a=t(8),c=(t(1),t(199)),r=t(1422),o=t(14),i=t(0),l=Object(o.a)(c.a)((function(e){var n=e.theme;return Object(a.a)(Object(a.a)({},n.typography.body2),{},{padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary})}));function s(){return Object(i.jsx)("div",{children:Object(i.jsxs)(r.a,{direction:{xs:"column",sm:"row"},spacing:{xs:1,sm:2,md:4},children:[Object(i.jsx)(l,{children:"Item 1"}),Object(i.jsx)(l,{children:"Item 2"}),Object(i.jsx)(l,{children:"Item 3"})]})})}},2852:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Paper from '@mui/material/Paper';\nimport Stack from '@mui/material/Stack';\nimport { styled } from '@mui/material/styles';\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  padding: theme.spacing(1),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function ResponsiveStack() {\n  return (\n    <div>\n      <Stack\n        direction={{ xs: 'column', sm: 'row' }}\n        spacing={{ xs: 1, sm: 2, md: 4 }}\n      >\n        <Item>Item 1</Item>\n        <Item>Item 2</Item>\n        <Item>Item 3</Item>\n      </Stack>\n    </div>\n  );\n}\n"},2853:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var a=t(17),c=t(1),r=t(767),o=t(760),i=t(1333),l=t(1457),s=t(1563),m=t(199),d=t(1332),u=t(1352),j=t(1422),b=t(0);function p(){var e=c.useState("row"),n=Object(a.a)(e,2),t=n[0],p=n[1],x=c.useState("center"),f=Object(a.a)(x,2),h=f[0],v=f[1],g=c.useState("center"),O=Object(a.a)(g,2),w=O[0],y=O[1],S=c.useState(2),I=Object(a.a)(S,2),C=I[0],k=I[1],R='\n<Stack\n  direction="'.concat(t,'"\n  justifyContent="').concat(h,'"\n  alignItems="').concat(w,'"\n  spacing={').concat(C,"}\n>\n");return Object(b.jsxs)(j.a,{sx:{flexGrow:1},children:[Object(b.jsx)(j.a,{direction:t,justifyContent:h,alignItems:w,spacing:C,sx:{height:240},children:[0,1,2].map((function(e){return Object(b.jsx)(m.a,{sx:{p:2,pt:e+1,pb:e+1,color:"text.secondary",typography:"body2"},children:"Item ".concat(e+1)},e)}))}),Object(b.jsx)(m.a,{sx:{p:2},children:Object(b.jsxs)(l.a,{container:!0,spacing:3,children:[Object(b.jsx)(l.a,{item:!0,xs:12,children:Object(b.jsxs)(r.a,{component:"fieldset",children:[Object(b.jsx)(o.b,{component:"legend",children:"direction"}),Object(b.jsxs)(d.a,{row:!0,name:"direction","aria-label":"direction",value:t,onChange:function(e){p(e.target.value)},children:[Object(b.jsx)(i.a,{value:"row",control:Object(b.jsx)(u.a,{}),label:"row"}),Object(b.jsx)(i.a,{value:"row-reverse",control:Object(b.jsx)(u.a,{}),label:"row-reverse"}),Object(b.jsx)(i.a,{value:"column",control:Object(b.jsx)(u.a,{}),label:"column"}),Object(b.jsx)(i.a,{value:"column-reverse",control:Object(b.jsx)(u.a,{}),label:"column-reverse"})]})]})}),Object(b.jsx)(l.a,{item:!0,xs:12,children:Object(b.jsxs)(r.a,{component:"fieldset",children:[Object(b.jsx)(o.b,{component:"legend",children:"alignItems"}),Object(b.jsxs)(d.a,{row:!0,name:"alignItems","aria-label":"align items",value:w,onChange:function(e){y(e.target.value)},children:[Object(b.jsx)(i.a,{value:"flex-start",control:Object(b.jsx)(u.a,{}),label:"flex-start"}),Object(b.jsx)(i.a,{value:"center",control:Object(b.jsx)(u.a,{}),label:"center"}),Object(b.jsx)(i.a,{value:"flex-end",control:Object(b.jsx)(u.a,{}),label:"flex-end"}),Object(b.jsx)(i.a,{value:"stretch",control:Object(b.jsx)(u.a,{}),label:"stretch"}),Object(b.jsx)(i.a,{value:"baseline",control:Object(b.jsx)(u.a,{}),label:"baseline"})]})]})}),Object(b.jsx)(l.a,{item:!0,xs:12,children:Object(b.jsxs)(r.a,{component:"fieldset",children:[Object(b.jsx)(o.b,{component:"legend",children:"justifyContent"}),Object(b.jsxs)(d.a,{row:!0,name:"justifyContent","aria-label":"justifyContent",value:h,onChange:function(e){v(e.target.value)},children:[Object(b.jsx)(i.a,{value:"flex-start",control:Object(b.jsx)(u.a,{}),label:"flex-start"}),Object(b.jsx)(i.a,{value:"center",control:Object(b.jsx)(u.a,{}),label:"center"}),Object(b.jsx)(i.a,{value:"flex-end",control:Object(b.jsx)(u.a,{}),label:"flex-end"}),Object(b.jsx)(i.a,{value:"space-between",control:Object(b.jsx)(u.a,{}),label:"space-between"}),Object(b.jsx)(i.a,{value:"space-around",control:Object(b.jsx)(u.a,{}),label:"space-around"}),Object(b.jsx)(i.a,{value:"space-evenly",control:Object(b.jsx)(u.a,{}),label:"space-evenly"})]})]})}),Object(b.jsx)(l.a,{item:!0,xs:12,children:Object(b.jsxs)(r.a,{component:"fieldset",children:[Object(b.jsx)(o.b,{component:"legend",children:"spacing"}),Object(b.jsx)(d.a,{row:!0,name:"spacing","aria-label":"spacing",value:C.toString(),onChange:function(e){k(Number(e.target.value))},children:[0,.5,1,2,3,4,8,12].map((function(e){return Object(b.jsx)(i.a,{value:e.toString(),control:Object(b.jsx)(u.a,{}),label:e},e)}))})]})})]})}),Object(b.jsx)(s.a,{code:R,language:"jsx"})]})}},2854:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport FormControl from \'@mui/material/FormControl\';\nimport FormLabel from \'@mui/material/FormLabel\';\nimport FormControlLabel from \'@mui/material/FormControlLabel\';\nimport Grid from \'@mui/material/Grid\';\nimport HighlightedCode from \'app/main/documentation/material-ui-components/utils/HighlightedCode\';\nimport Paper from \'@mui/material/Paper\';\nimport RadioGroup from \'@mui/material/RadioGroup\';\nimport Radio from \'@mui/material/Radio\';\nimport Stack from \'@mui/material/Stack\';\n\nexport default function InteractiveStack() {\n  const [direction, setDirection] = React.useState(\'row\');\n  const [justifyContent, setJustifyContent] = React.useState(\'center\');\n  const [alignItems, setAlignItems] = React.useState(\'center\');\n  const [spacing, setSpacing] = React.useState(2);\n\n  const jsx = `\n<Stack\n  direction="${direction}"\n  justifyContent="${justifyContent}"\n  alignItems="${alignItems}"\n  spacing={${spacing}}\n>\n`;\n\n  return (\n    <Stack sx={{ flexGrow: 1 }}>\n      <Stack\n        direction={direction}\n        justifyContent={justifyContent}\n        alignItems={alignItems}\n        spacing={spacing}\n        sx={{ height: 240 }}\n      >\n        {[0, 1, 2].map((value) => (\n          <Paper\n            key={value}\n            sx={{\n              p: 2,\n              pt: value + 1,\n              pb: value + 1,\n              color: \'text.secondary\',\n              typography: \'body2\',\n            }}\n          >\n            {`Item ${value + 1}`}\n          </Paper>\n        ))}\n      </Stack>\n      <Paper sx={{ p: 2 }}>\n        <Grid container spacing={3}>\n          <Grid item xs={12}>\n            <FormControl component="fieldset">\n              <FormLabel component="legend">direction</FormLabel>\n              <RadioGroup\n                row\n                name="direction"\n                aria-label="direction"\n                value={direction}\n                onChange={(event) => {\n                  setDirection(event.target.value);\n                }}\n              >\n                <FormControlLabel value="row" control={<Radio />} label="row" />\n                <FormControlLabel\n                  value="row-reverse"\n                  control={<Radio />}\n                  label="row-reverse"\n                />\n                <FormControlLabel\n                  value="column"\n                  control={<Radio />}\n                  label="column"\n                />\n                <FormControlLabel\n                  value="column-reverse"\n                  control={<Radio />}\n                  label="column-reverse"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12}>\n            <FormControl component="fieldset">\n              <FormLabel component="legend">alignItems</FormLabel>\n              <RadioGroup\n                row\n                name="alignItems"\n                aria-label="align items"\n                value={alignItems}\n                onChange={(event) => {\n                  setAlignItems(event.target.value);\n                }}\n              >\n                <FormControlLabel\n                  value="flex-start"\n                  control={<Radio />}\n                  label="flex-start"\n                />\n                <FormControlLabel\n                  value="center"\n                  control={<Radio />}\n                  label="center"\n                />\n                <FormControlLabel\n                  value="flex-end"\n                  control={<Radio />}\n                  label="flex-end"\n                />\n                <FormControlLabel\n                  value="stretch"\n                  control={<Radio />}\n                  label="stretch"\n                />\n                <FormControlLabel\n                  value="baseline"\n                  control={<Radio />}\n                  label="baseline"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12}>\n            <FormControl component="fieldset">\n              <FormLabel component="legend">justifyContent</FormLabel>\n              <RadioGroup\n                row\n                name="justifyContent"\n                aria-label="justifyContent"\n                value={justifyContent}\n                onChange={(event) => {\n                  setJustifyContent(event.target.value);\n                }}\n              >\n                <FormControlLabel\n                  value="flex-start"\n                  control={<Radio />}\n                  label="flex-start"\n                />\n                <FormControlLabel\n                  value="center"\n                  control={<Radio />}\n                  label="center"\n                />\n                <FormControlLabel\n                  value="flex-end"\n                  control={<Radio />}\n                  label="flex-end"\n                />\n                <FormControlLabel\n                  value="space-between"\n                  control={<Radio />}\n                  label="space-between"\n                />\n                <FormControlLabel\n                  value="space-around"\n                  control={<Radio />}\n                  label="space-around"\n                />\n                <FormControlLabel\n                  value="space-evenly"\n                  control={<Radio />}\n                  label="space-evenly"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12}>\n            <FormControl component="fieldset">\n              <FormLabel component="legend">spacing</FormLabel>\n              <RadioGroup\n                row\n                name="spacing"\n                aria-label="spacing"\n                value={spacing.toString()}\n                onChange={(event) => {\n                  setSpacing(Number(event.target.value));\n                }}\n              >\n                {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (\n                  <FormControlLabel\n                    key={value}\n                    value={value.toString()}\n                    control={<Radio />}\n                    label={value}\n                  />\n                ))}\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n        </Grid>\n      </Paper>\n      <HighlightedCode code={jsx} language="jsx" />\n    </Stack>\n  );\n}\n'},3303:function(e,n,t){"use strict";t.r(n);var a=t(1383),c=t(168),r=t(1336),o=t(1327),i=t(222),l=t(0);n.default=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(l.jsxs)(r.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/stack",target:"_blank",role:"button",children:[Object(l.jsx)(o.a,{children:"link"}),Object(l.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(l.jsx)(i.a,{className:"text-40 my-16 font-700",component:"h1",children:"Stack"}),Object(l.jsx)(i.a,{className:"description",children:"The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child."}),Object(l.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Usage"}),Object(l.jsxs)(i.a,{className:"mb-40",component:"div",children:[Object(l.jsx)("code",{children:"Stack"})," is concerned with one-dimensional layouts, while"," ",Object(l.jsx)("a",{href:"/components/grid/",children:"Grid"})," that handles two-dimensional layouts. The default direction is ",Object(l.jsx)("code",{children:"column"})," which stacks children vertically."]}),Object(l.jsx)(i.a,{className:"mb-40",component:"div",children:Object(l.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2845).default,raw:t(2846)})}),Object(l.jsxs)(i.a,{className:"mb-40",component:"div",children:["To control space between children, use the ",Object(l.jsx)("code",{children:"spacing"})," prop. The spacing value can be any number, including decimals and any string. The prop is converted into a CSS property using the"," ",Object(l.jsx)("a",{href:"/customization/spacing/",children:Object(l.jsx)("code",{children:"theme.spacing()"})})," ","helper."]}),Object(l.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Direction"}),Object(l.jsxs)(i.a,{className:"mb-40",component:"div",children:["By default, ",Object(l.jsx)("code",{children:"Stack"})," arranges items vertically in a ",Object(l.jsx)("code",{children:"column"}),". However, the ",Object(l.jsx)("code",{children:"direction"})," prop can be used to position items horizontally in a"," ",Object(l.jsx)("code",{children:"row"})," as well."]}),Object(l.jsx)(i.a,{className:"mb-40",component:"div",children:Object(l.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2847).default,raw:t(2848)})}),Object(l.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Dividers"}),Object(l.jsxs)(i.a,{className:"mb-40",component:"div",children:["Use the ",Object(l.jsx)("code",{children:"divider"})," prop to insert an element between each child. This works particularly well with the ",Object(l.jsx)("a",{href:"/components/dividers/",children:"Divider"})," component."]}),Object(l.jsx)(i.a,{className:"mb-40",component:"div",children:Object(l.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2849).default,raw:t(2850)})}),Object(l.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Responsive values"}),Object(l.jsxs)(i.a,{className:"mb-40",component:"div",children:["You can switch the ",Object(l.jsx)("code",{children:"direction"})," or ",Object(l.jsx)("code",{children:"spacing"})," values based on the active breakpoint."]}),Object(l.jsx)(i.a,{className:"mb-40",component:"div",children:Object(l.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2851).default,raw:t(2852)})}),Object(l.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Interactive"}),Object(l.jsx)(i.a,{className:"mb-40",component:"div",children:"Below is an interactive demo that lets you explore the visual results of the different settings:"}),Object(l.jsx)(i.a,{className:"mb-40",component:"div",children:Object(l.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2853).default,raw:t(2854)})}),Object(l.jsx)(i.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"System props"}),Object(l.jsxs)(i.a,{className:"mb-40",component:"div",children:["As a CSS utility component, the ",Object(l.jsx)("code",{children:"Stack"})," supports all"," ",Object(l.jsx)("a",{href:"/system/properties/",children:Object(l.jsx)("code",{children:"system"})})," ","properties. You can use them as props directly on the component. For instance, a margin-top:"]}),Object(l.jsx)(c.a,{component:"pre",className:"language-jsx",children:" \n<Stack mt={2}>\n"})]})}}}]);