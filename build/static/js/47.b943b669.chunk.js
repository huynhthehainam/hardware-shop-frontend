(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[47],{1383:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(17),i=n(168),o=n(1338),s=n(1346),r=n(1327),c=n(1350),m=n(1351),h=n(6),l=n(1),u=n(8),d=n(127),p=n(100),f=n.n(p),b=n(504),j=n(209),g=n(97),x=n(1386),y=n(51),O=n(14),v=n(1294),M=n(0),I=["children","name"];function w(e){var t=e.children,n=e.document,a=Object(y.a)();l.useEffect((function(){n.body.dir=a.direction}),[n,a.direction]);var i=l.useMemo((function(){return Object(j.a)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:n.head,stylisPlugins:"rtl"===a.direction?[b.a]:[]})}),[n,a.direction]),o=l.useCallback((function(){return n.defaultView}),[n]);return Object(M.jsx)(x.a,{target:n.head,stylisPlugins:"rtl"===a.direction?[b.a]:[],children:Object(M.jsxs)(g.a,{value:i,children:[Object(M.jsx)(v.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),l.cloneElement(t,{window:o})]})})}var N=Object(O.a)("iframe")((function(e){var t=e.theme;return{backgroundColor:t.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:t.shadows[1]}}));function B(e){var t,n=e.children,i=e.name,o=Object(d.a)(e,I),s="".concat(i," demo"),r=l.useRef(null),c=l.useReducer((function(){return!0}),!1),m=Object(a.a)(c,2),h=m[0],p=m[1];l.useEffect((function(){var e=r.current.contentDocument;null==e||"complete"!==e.readyState||h||p()}),[h]);var b=null===(t=r.current)||void 0===t?void 0:t.contentDocument;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(N,Object(u.a)({onLoad:p,ref:r,title:s},o)),!1!==h?f.a.createPortal(Object(M.jsx)(w,{document:b,children:n}),b.body):null]})}var C=l.memo(B);function k(e){var t=Object(l.useState)(e.currentTabIndex),n=Object(a.a)(t,2),u=n[0],d=n[1],p=e.component,f=e.raw,b=e.iframe,j=e.className;return Object(M.jsxs)(s.a,{className:Object(h.default)(j,"shadow"),children:[Object(M.jsx)(o.a,{position:"static",color:"default",className:"shadow-0",children:Object(M.jsxs)(m.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,t){d(t)},children:[p&&Object(M.jsx)(c.a,{classes:{root:"min-w-64"},icon:Object(M.jsx)(r.a,{children:"remove_red_eye"})}),f&&Object(M.jsx)(c.a,{classes:{root:"min-w-64"},icon:Object(M.jsx)(r.a,{children:"code"})})]})}),Object(M.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(M.jsx)("div",{className:0===u?"flex flex-1 max-w-full":"hidden",children:p&&(b?Object(M.jsx)(C,{children:Object(M.jsx)(p,{})}):Object(M.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(M.jsx)(p,{})}))}),Object(M.jsx)("div",{className:1===u?"flex flex-1":"hidden",children:f&&Object(M.jsx)("div",{className:"flex flex-1",children:Object(M.jsx)(i.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:f.default})})})]})]})}k.defaultProps={currentTabIndex:0};var S=k},1385:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(2),i=n(13),o=n(1),s=(n(12),n(6)),r=n(397),c=n(1365),m=n(1293),h=n(269),l=n(0),u=["className","component"];function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=Object(r.a)("div")(c.a),d=o.forwardRef((function(e,o){var r=Object(h.a)(t),c=Object(m.a)(e),d=c.className,p=c.component,f=void 0===p?"div":p,b=Object(i.a)(c,u);return Object(l.jsx)(n,Object(a.a)({as:f,ref:o,className:Object(s.default)(d,"MuiBox-root"),theme:r},b))}));return d}},1389:function(e,t,n){"use strict";var a=n(1385),i=n(515),o=Object(i.b)(),s=Object(a.a)({defaultTheme:o});t.a=s},1635:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1636);function i(e,t){var n={};return t.forEach((function(t){n[t]=Object(a.a)(e,t)})),n}},1636:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function i(e,t){return a[t]||"".concat(e,"-").concat(t)}},1638:function(e,t,n){"use strict";function a(e,t,n){var a={};return Object.keys(e).forEach((function(i){a[i]=e[i].reduce((function(e,a){return a&&(n&&n[a]&&e.push(n[a]),e.push(t(a))),e}),[]).join(" ")})),a}n.d(t,"a",(function(){return a}))},1872:function(e,t,n){"use strict";var a=n(1),i=a.createContext({});t.a=i},2538:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(8),i=(n(1),n(14)),o=n(1389),s=n(199),r=n(3414),c=n(3415),m=n(0),h=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],l=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.secondary,display:"flex",alignItems:"center",justifyContent:"center"})}));function u(){return Object(m.jsx)(o.a,{sx:{width:500,minHeight:393},children:Object(m.jsx)(r.a,{columns:4,spacing:1,children:h.map((function(e,t){return Object(m.jsx)(c.a,{children:Object(m.jsx)(l,{sx:{height:e},children:t+1})},t)}))})})}},2539:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\nimport MasonryItem from '@mui/lab/MasonryItem';\n\nconst heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  color: theme.palette.text.secondary,\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}));\n\nexport default function BasicMasonry() {\n  return (\n    <Box sx={{ width: 500, minHeight: 393 }}>\n      <Masonry columns={4} spacing={1}>\n        {heights.map((height, index) => (\n          <MasonryItem key={index}>\n            <Item sx={{ height }}>{index + 1}</Item>\n          </MasonryItem>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},2540:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));n(1);var a=n(1389),i=n(3414),o=n(3415),s=n(0);function r(){return Object(s.jsx)(a.a,{sx:{width:500,minHeight:829},children:Object(s.jsx)(i.a,{columns:3,spacing:1,children:c.map((function(e){return Object(s.jsx)(o.a,{children:Object(s.jsx)("img",{src:"".concat(e.img,"?w=162&auto=format"),srcSet:"".concat(e.img,"?w=162&auto=format&dpr=2 2x"),alt:e.title,loading:"lazy"})},e.img)}))})})}var c=[{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",title:"Snacks"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms"},{img:"https://images.unsplash.com/photo-1529655683826-aba9b3e77383",title:"Tower"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey"},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",title:"Tree"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee"},{img:"https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",title:"Camping Car"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",title:"Mountain"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike"}]},2541:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Masonry from '@mui/lab/Masonry';\nimport MasonryItem from '@mui/lab/MasonryItem';\n\nexport default function ImageMasonry() {\n  return (\n    <Box sx={{ width: 500, minHeight: 829 }}>\n      <Masonry columns={3} spacing={1}>\n        {itemData.map((item) => (\n          <MasonryItem key={item.img}>\n            <img\n              src={`${item.img}?w=162&auto=format`}\n              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}\n              alt={item.title}\n              loading=\"lazy\"\n            />\n          </MasonryItem>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n\nconst itemData = [\n  {\n    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',\n    title: 'Fern',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',\n    title: 'Snacks',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',\n    title: 'Mushrooms',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',\n    title: 'Tower',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',\n    title: 'Sea star',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',\n    title: 'Honey',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',\n    title: 'Basketball',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',\n    title: 'Breakfast',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',\n    title: 'Tree',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',\n    title: 'Burger',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',\n    title: 'Camera',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',\n    title: 'Coffee',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',\n    title: 'Camping Car',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',\n    title: 'Hats',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',\n    title: 'Tomato basil',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',\n    title: 'Mountain',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',\n    title: 'Bike',\n  },\n];\n"},2542:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(8),i=(n(1),n(14)),o=n(1389),s=n(199),r=n(3414),c=n(3415),m=n(0),h=[150,30,90,70,90,100,150,30,50,80],l=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.secondary,display:"flex",alignItems:"center",justifyContent:"center"})}));function u(){return Object(m.jsx)(o.a,{sx:{width:500,minHeight:253},children:Object(m.jsx)(r.a,{columns:4,spacing:1,children:h.map((function(e,t){return Object(m.jsx)(c.a,{children:Object(m.jsx)(l,{sx:{height:e},children:t+1})},t)}))})})}},2543:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\nimport MasonryItem from '@mui/lab/MasonryItem';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  color: theme.palette.text.secondary,\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}));\n\nexport default function FixedColumns() {\n  return (\n    <Box sx={{ width: 500, minHeight: 253 }}>\n      <Masonry columns={4} spacing={1}>\n        {heights.map((height, index) => (\n          <MasonryItem key={index}>\n            <Item sx={{ height }}>{index + 1}</Item>\n          </MasonryItem>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},2544:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(8),i=(n(1),n(14)),o=n(1389),s=n(199),r=n(3414),c=n(3415),m=n(0),h=[150,30,90,70,90,100,150,30,50,80],l=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.secondary,display:"flex",alignItems:"center",justifyContent:"center"})}));function u(){return Object(m.jsx)(o.a,{sx:{width:500,minHeight:253},children:Object(m.jsx)(r.a,{columns:{xs:3,sm:4},spacing:1,children:h.map((function(e,t){return Object(m.jsx)(c.a,{children:Object(m.jsx)(l,{sx:{height:e},children:t+1})},t)}))})})}},2545:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\nimport MasonryItem from '@mui/lab/MasonryItem';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  color: theme.palette.text.secondary,\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}));\n\nexport default function ResponsiveColumns() {\n  return (\n    <Box sx={{ width: 500, minHeight: 253 }}>\n      <Masonry columns={{ xs: 3, sm: 4 }} spacing={1}>\n        {heights.map((height, index) => (\n          <MasonryItem key={index}>\n            <Item sx={{ height }}>{index + 1}</Item>\n          </MasonryItem>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},2546:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(8),i=(n(1),n(14)),o=n(1389),s=n(199),r=n(3414),c=n(3415),m=n(0),h=[150,30,90,70,90,100,150,30,50,80],l=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.secondary,display:"flex",alignItems:"center",justifyContent:"center"})}));function u(){return Object(m.jsx)(o.a,{sx:{width:500,minHeight:377},children:Object(m.jsx)(r.a,{columns:3,spacing:3,children:h.map((function(e,t){return Object(m.jsx)(c.a,{children:Object(m.jsx)(l,{sx:{height:e},children:t+1})},t)}))})})}},2547:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\nimport MasonryItem from '@mui/lab/MasonryItem';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  color: theme.palette.text.secondary,\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}));\n\nexport default function FixedSpacing() {\n  return (\n    <Box sx={{ width: 500, minHeight: 377 }}>\n      <Masonry columns={3} spacing={3}>\n        {heights.map((height, index) => (\n          <MasonryItem key={index}>\n            <Item sx={{ height }}>{index + 1}</Item>\n          </MasonryItem>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},2548:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(8),i=(n(1),n(14)),o=n(1389),s=n(199),r=n(3414),c=n(3415),m=n(0),h=[150,30,90,70,90,100,150,30,50,80],l=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.secondary,display:"flex",alignItems:"center",justifyContent:"center"})}));function u(){return Object(m.jsx)(o.a,{sx:{width:500,minHeight:377},children:Object(m.jsx)(r.a,{columns:3,spacing:{xs:1,sm:2,md:3},children:h.map((function(e,t){return Object(m.jsx)(c.a,{children:Object(m.jsx)(l,{sx:{height:e},children:t+1})},t)}))})})}},2549:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\nimport MasonryItem from '@mui/lab/MasonryItem';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  color: theme.palette.text.secondary,\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}));\n\nexport default function ResponsiveSpacing() {\n  return (\n    <Box sx={{ width: 500, minHeight: 377 }}>\n      <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>\n        {heights.map((height, index) => (\n          <MasonryItem key={index}>\n            <Item sx={{ height }}>{index + 1}</Item>\n          </MasonryItem>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},2550:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(8),i=(n(1),n(14)),o=n(1389),s=n(199),r=n(3414),c=n(3415),m=n(0),h=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.secondary,display:"flex",alignItems:"center",justifyContent:"center"})}));function l(){return Object(m.jsx)(o.a,{sx:{width:500,minHeight:500},children:Object(m.jsx)(r.a,{columns:4,spacing:1,children:u.map((function(e,t){return Object(m.jsx)(c.a,{columnSpan:e.span,children:Object(m.jsx)(h,{sx:{height:e.height},children:t+1})},t)}))})})}var u=[{height:150},{height:30},{height:90,span:2},{height:110},{height:150},{height:150},{height:130,span:2},{height:80,span:2},{height:50},{height:90},{height:100,span:2},{height:150},{height:50},{height:50,span:2},{height:50}]},2551:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\nimport MasonryItem from '@mui/lab/MasonryItem';\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  color: theme.palette.text.secondary,\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}));\n\nexport default function DiffColSizeMasonry() {\n  return (\n    <Box sx={{ width: 500, minHeight: 500 }}>\n      <Masonry columns={4} spacing={1}>\n        {itemData.map((item, index) => (\n          <MasonryItem key={index} columnSpan={item.span}>\n            <Item sx={{ height: item.height }}>{index + 1}</Item>\n          </MasonryItem>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n\nconst itemData = [\n  { height: 150 },\n  { height: 30 },\n  { height: 90, span: 2 },\n  { height: 110 },\n  { height: 150 },\n  { height: 150 },\n  { height: 130, span: 2 },\n  { height: 80, span: 2 },\n  { height: 50 },\n  { height: 90 },\n  { height: 100, span: 2 },\n  { height: 150 },\n  { height: 50 },\n  { height: 50, span: 2 },\n  { height: 50 },\n];\n"},2552:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(8),i=(n(1),n(14)),o=n(1389),s=n(199),r=n(3414),c=n(3415),m=n(0),h=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.secondary,display:"flex",alignItems:"center",justifyContent:"center"})}));function l(){return Object(m.jsx)(o.a,{sx:{width:500,minHeight:503},children:Object(m.jsx)(r.a,{columns:4,spacing:1,children:u.map((function(e,t){return Object(m.jsx)(c.a,{columnSpan:e.span,children:Object(m.jsx)(h,{sx:{height:e.height},children:t+1})},t)}))})})}var u=[{height:150},{height:30},{height:90,span:2},{height:70},{height:150},{height:120},{height:100,span:2},{height:80,span:2},{height:35},{height:70},{height:100,span:2},{height:157},{height:50},{height:50,span:2},{height:50}]},2553:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\nimport MasonryItem from '@mui/lab/MasonryItem';\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  color: theme.palette.text.secondary,\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}));\n\nexport default function DiffColSizeMasonryBroken() {\n  return (\n    <Box sx={{ width: 500, minHeight: 503 }}>\n      <Masonry columns={4} spacing={1}>\n        {itemData.map((item, index) => (\n          <MasonryItem key={index} columnSpan={item.span}>\n            <Item sx={{ height: item.height }}>{index + 1}</Item>\n          </MasonryItem>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n\nconst itemData = [\n  { height: 150 },\n  { height: 30 },\n  { height: 90, span: 2 },\n  { height: 70 },\n  { height: 150 },\n  { height: 120 },\n  { height: 100, span: 2 },\n  { height: 80, span: 2 },\n  { height: 35 },\n  { height: 70 },\n  { height: 100, span: 2 },\n  { height: 157 },\n  { height: 50 },\n  { height: 50, span: 2 },\n  { height: 50 },\n];\n"},2554:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(8),i=(n(1),n(14)),o=n(1389),s=n(199),r=n(3414),c=n(3415),m=n(0),h=[150,30,90,70,90,100,150,30,50,80],l=Object(i.a)(s.a)((function(e){var t=e.theme;return Object(a.a)(Object(a.a)({},t.typography.body2),{},{color:t.palette.text.secondary,display:"flex",alignItems:"center",justifyContent:"center"})}));function u(){return Object(m.jsx)(o.a,{sx:{width:500,minHeight:253},children:Object(m.jsx)(r.a,{columns:4,spacing:1,children:h.map((function(e,t){return Object(m.jsx)(c.a,{defaultHeight:e,children:Object(m.jsx)(l,{children:t+1})},t)}))})})}},2555:function(e,t,n){"use strict";n.r(t),t.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\nimport MasonryItem from '@mui/lab/MasonryItem';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  ...theme.typography.body2,\n  color: theme.palette.text.secondary,\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n}));\n\nexport default function SSRMasonry() {\n  return (\n    <Box sx={{ width: 500, minHeight: 253 }}>\n      <Masonry columns={4} spacing={1}>\n        {heights.map((height, index) => (\n          <MasonryItem key={index} defaultHeight={height}>\n            <Item>{index + 1}</Item>\n          </MasonryItem>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},3282:function(e,t,n){"use strict";n.r(t);var a=n(1383),i=n(1336),o=n(1327),s=n(222),r=n(0);t.default=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(r.jsxs)(i.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/masonry",target:"_blank",role:"button",children:[Object(r.jsx)(o.a,{children:"link"}),Object(r.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(r.jsx)(s.a,{className:"text-40 my-16 font-700",component:"h1",children:"Masonry"}),Object(r.jsx)(s.a,{className:"description",children:"Masonry lays out contents of different sizes as blocks of the same width and variable height with configurable gaps."}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:"Masonry maintains a list of content blocks with a consistent width but variable height. The contents are ordered by row. If a row is already filled with the specified number of columns, the next item starts another row, and it is added to the shortest column."}),Object(r.jsx)("blockquote",{children:Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:["Warning: This component has been developed with the use of CSS Grid Level 2. Unfortunately, Chrome only allows to render at most 1,000 rows for each grid. Hence, with the current design, a masonry component has a maximum height of 2,000px, and the items beyond this height will fail to be rendered. An"," ",Object(r.jsx)("a",{href:"https://github.com/mui-org/material-ui/issues/27934",children:"issue"})," has been created on GitHub to gather workarounds for this limitation. It is worth noting that this limitation does not exist on Firefox or Safari."]})}),Object(r.jsx)(s.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic masonry"}),Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:["A simple example of a ",Object(r.jsx)("code",{children:"<Masonry />"}),". ",Object(r.jsx)("code",{children:"<Masonry />"})," is a container for one or more ",Object(r.jsx)("code",{children:"<MasonryItem />"}),"s."," ",Object(r.jsx)("code",{children:"<MasonryItem />"})," can receive any element including ",Object(r.jsx)("code",{children:"<div />"})," ","and ",Object(r.jsx)("code",{children:"<img />"}),". Also, it is important to note that each"," ",Object(r.jsx)("code",{children:"<MasonryItem />"})," accepts only one element."]}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:n(2538).default,raw:n(2539)})}),Object(r.jsx)(s.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Image masonry"}),Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:["This example demonstrates the use of ",Object(r.jsx)("code",{children:"<Masonry />"})," for images."," ",Object(r.jsx)("code",{children:"<Masonry />"})," orders its children by row. If you would like to order images by column, you can use ",Object(r.jsx)("code",{children:'<ImageList variant="masonry" />'}),". More details on this component can be found in"," ",Object(r.jsx)("a",{href:"/components/image-list/#masonry-image-list",children:"Masonry Image List"}),"."]}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:n(2540).default,raw:n(2541)})}),Object(r.jsx)(s.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Columns"}),Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:["This example demonstrates the use of the ",Object(r.jsx)("code",{children:"columns"})," to configure the number of columns of a ",Object(r.jsx)("code",{children:"<Masonry />"}),"."]}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:n(2542).default,raw:n(2543)})}),Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:[Object(r.jsx)("code",{children:"columns"})," accepts responsive values:"]}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:n(2544).default,raw:n(2545)})}),Object(r.jsx)(s.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Spacing"}),Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:["This example demonstrates the use of the ",Object(r.jsx)("code",{children:"spacing"})," to configure the spacing between ",Object(r.jsx)("code",{children:"<MasonryItem />"}),"s. It is important to note that ",Object(r.jsx)("code",{children:"spacing"})," ","is a factor of the theme's spacing."]}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:n(2546).default,raw:n(2547)})}),Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:[Object(r.jsx)("code",{children:"spacing"})," accepts responsive values:"]}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:n(2548).default,raw:n(2549)})}),Object(r.jsx)(s.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Column spanning"}),Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:["This example demonstrates the use of the ",Object(r.jsx)("code",{children:"columnSpan"})," to configure the number of columns taken up by each ",Object(r.jsx)("code",{children:"<MasonryItem />"}),"."]}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:n(2550).default,raw:n(2551)})}),Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:["However, you have to choose the value of ",Object(r.jsx)("code",{children:"columnSpan"})," for each item carefully or fine-tune heights of items so that your masonry does not break."]}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:n(2552).default,raw:n(2553)})}),Object(r.jsx)(s.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Server-side rendering"}),Object(r.jsxs)(s.a,{className:"mb-40",component:"div",children:["This example demonstrates the use of the ",Object(r.jsx)("code",{children:"defaultHeight"})," to configure a fixed height of each ",Object(r.jsx)("code",{children:"<MasonryItem />"}),". This is used for server-side rendering. By default, ",Object(r.jsx)("code",{children:"height: 100%"})," will be set to the content of"," ",Object(r.jsx)("code",{children:"<MasonryItem />"}),". If you change this, there can be unwanted gap between"," ",Object(r.jsx)("code",{children:"<MasonryItem />"})," and the content that you pass to it."]}),Object(r.jsx)(s.a,{className:"mb-40",component:"div",children:Object(r.jsx)(a.a,{className:"my-24",iframe:!1,component:n(2554).default,raw:n(2555)})})]})}},3414:function(e,t,n){"use strict";var a=n(13),i=n(2),o=n(1),s=(n(12),n(6)),r=n(99),c=n(110),m=n(395),h=n(267),l=n(1638),u=n(14),d=n(24),p=n(1636),f=n(1635);function b(e){return Object(p.a)("MuiMasonry",e)}Object(f.a)("MuiMasonry",["root"]);var j=n(1872),g=n(0),x=["children","className","component","columns","spacing"],y=Object(u.a)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,a={display:"grid",gridAutoRows:0,padding:0,overflow:"auto",width:"100%",rowGap:2,boxSizing:"border-box"},o={};Object.keys(n.breakpoints.values).forEach((function(e){null!=t.spacing[e]&&(o[e]=!0)}));var s=Object(r.d)({values:t.spacing,base:o}),h=Object(c.a)(n);a=Object(i.a)({},a,Object(r.b)({theme:n},s,(function(e){return{columnGap:Object(c.d)(h,e)}})));var l=Object(r.d)({values:t.columns,base:o});return a=Object(m.a)(a,Object(r.b)({theme:n},l,(function(e){return{gridTemplateColumns:"repeat(".concat(e,", 1fr)")}})))})),O=o.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiMasonry"}),r=o.useRef(),c=n.children,m=n.className,u=n.component,p=void 0===u?"div":u,f=n.columns,O=void 0===f?4:f,v=n.spacing,M=void 0===v?1:v,I=Object(a.a)(n,x),w=Object(i.a)({},n,{spacing:M,columns:O}),N=function(e){var t=e.classes;return Object(l.a)({root:["root"]},b,t)}(w),B=o.useMemo((function(){return{spacing:M}}),[M]),C=!1;o.useEffect((function(){var e=function(){1998!==r.current.clientHeight||C||(console.warn(["MUI: The Masonry can have the maximum height of 2,000px on Chrome browser.","Items that go beyond this height fail to be rendered on Chrome browser.","You can find more in this open issue: https://github.com/mui-org/material-ui/issues/27934"].join("\n")),C=!0)},t=r.current;return t.addEventListener("scroll",e),function(){t.removeEventListener("scroll",e)}}),[]);var k=Object(h.a)(t,r);return Object(g.jsx)(j.a.Provider,{value:B,children:Object(g.jsx)(y,Object(i.a)({as:p,className:Object(s.default)(N.root,m),ref:k,ownerState:w},I,{children:c}))})}));t.a=O},3415:function(e,t,n){"use strict";var a=n(17),i=n(13),o=n(2),s=n(1),r=(n(12),n(6)),c=n(99),m=n(110),h=n(267),l=n(1638),u=n(14),d=n(24),p=n(51),f=n(1636),b=n(1635);function j(e){return Object(f.a)("MuiMasonryItem",e)}Object(b.a)("MuiMasonryItem",["root"]);var g=n(1872),x=n(0),y=["children","className","component","columnSpan","defaultHeight"],O=Object(u.a)("div",{name:"MuiMasonryItem",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,a={width:"100%","& > *":Object(o.a)({width:"100%",boxSizing:"inherit"},t.hasDefaultHeight&&{height:"100%"}),visibility:t.height?"visible":"hidden",gridColumnEnd:"span ".concat(t.columnSpan),boxSizing:"inherit"};if(Array.isArray(t.spacing)||"object"===typeof t.spacing){var i={};Object.keys(n.breakpoints.values).forEach((function(e){null!=t.spacing[e]&&(i[e]=!0)}));var s=Object(c.d)({values:t.spacing,base:i}),r=Object(m.a)(n);a=Object(o.a)({},a,Object(c.b)({theme:n},s,(function(e){var n=t.height?Number(Object(m.d)(r,e).replace("px","")):0,a=t.height?Math.ceil((t.height+n)/2):2;return{gridRowEnd:"span ".concat(a),paddingBottom:0===n?0:n-2}})))}return a})),v=s.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiMasonryItem"}),c=s.useRef(null),m=s.useContext(g.a).spacing,u=void 0===m?1:m,f=n.children,b=n.className,v=n.component,M=void 0===v?"div":v,I=n.columnSpan,w=void 0===I?1:I,N=n.defaultHeight,B=Object(i.a)(n,y),C=void 0!==N,k=s.useState(N),S=Object(a.a)(k,2),H=S[0],R=S[1],P=Object(o.a)({},n,{spacing:u,hasDefaultHeight:C,columnSpan:w,height:H<0?0:H}),T=function(e){var t=e.classes;return Object(l.a)({root:["root"]},j,t)}(P);s.useEffect((function(){if(!C&&"undefined"!==typeof ResizeObserver){var e=new ResizeObserver((function(e){var t=Object(a.a)(e,1)[0];R(t.contentRect.height)}));return e.observe(c.current.firstChild),function(){e.disconnect()}}}),[C]);var E=Object(h.a)(t,c),D=Object(p.a)(),z={};if(!Array.isArray(u)&&"object"!==typeof u){var A=H?Number(D.spacing(u).replace("px","")):0,F=H?Math.ceil((H+A)/2):2;z.gridRowEnd="span ".concat(F),z.paddingBottom=0===A?0:A-2}return Object(x.jsx)(O,Object(o.a)({as:M,className:Object(r.default)(T.root,b),ref:E,ownerState:P,style:z},B,{children:s.Children.only(f)}))}));t.a=v}}]);