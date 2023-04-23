(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[107],{1383:function(e,n,t){"use strict";t.d(n,"a",(function(){return P}));var o=t(17),a=t(168),i=t(1338),c=t(1346),r=t(1327),l=t(1350),s=t(1351),m=t(6),d=t(1),p=t(8),u=t(127),j=t(97),h=t.n(j),b=t(504),x=t(208),f=t(94),O=t(1386),S=t(50),v=t(14),D=t(1294),g=t(0),y=["children","name"];function I(e){var n=e.children,t=e.document,o=Object(S.a)();d.useEffect((function(){t.body.dir=o.direction}),[t,o.direction]);var a=d.useMemo((function(){return Object(x.a)({key:"iframe-demo-".concat(o.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===o.direction?[b.a]:[]})}),[t,o.direction]),i=d.useCallback((function(){return t.defaultView}),[t]);return Object(g.jsx)(O.a,{target:t.head,stylisPlugins:"rtl"===o.direction?[b.a]:[],children:Object(g.jsxs)(f.a,{value:a,children:[Object(g.jsx)(D.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),d.cloneElement(n,{window:i})]})})}var C=Object(v.a)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function w(e){var n,t=e.children,a=e.name,i=Object(u.a)(e,y),c="".concat(a," demo"),r=d.useRef(null),l=d.useReducer((function(){return!0}),!1),s=Object(o.a)(l,2),m=s[0],j=s[1];d.useEffect((function(){var e=r.current.contentDocument;null==e||"complete"!==e.readyState||m||j()}),[m]);var b=null===(n=r.current)||void 0===n?void 0:n.contentDocument;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C,Object(p.a)({onLoad:j,ref:r,title:c},i)),!1!==m?h.a.createPortal(Object(g.jsx)(I,{document:b,children:t}),b.body):null]})}var N=d.memo(w);function F(e){var n=Object(d.useState)(e.currentTabIndex),t=Object(o.a)(n,2),p=t[0],u=t[1],j=e.component,h=e.raw,b=e.iframe,x=e.className;return Object(g.jsxs)(c.a,{className:Object(m.default)(x,"shadow"),children:[Object(g.jsx)(i.a,{position:"static",color:"default",className:"shadow-0",children:Object(g.jsxs)(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,n){u(n)},children:[j&&Object(g.jsx)(l.a,{classes:{root:"min-w-64"},icon:Object(g.jsx)(r.a,{children:"remove_red_eye"})}),h&&Object(g.jsx)(l.a,{classes:{root:"min-w-64"},icon:Object(g.jsx)(r.a,{children:"code"})})]})}),Object(g.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(g.jsx)("div",{className:0===p?"flex flex-1 max-w-full":"hidden",children:j&&(b?Object(g.jsx)(N,{children:Object(g.jsx)(j,{})}):Object(g.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(g.jsx)(j,{})}))}),Object(g.jsx)("div",{className:1===p?"flex flex-1":"hidden",children:h&&Object(g.jsx)("div",{className:"flex flex-1",children:Object(g.jsx)(a.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}F.defaultProps={currentTabIndex:0};var P=F},2835:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return x}));t(1);var o=t(1389),a=t(1609),i=t(1618),c=t(1610),r=t(1704),l=t.n(r),s=t(1591),m=t.n(s),d=t(1705),p=t.n(d),u=t(1647),j=t.n(u),h=t(0),b=[{icon:Object(h.jsx)(l.a,{}),name:"Copy"},{icon:Object(h.jsx)(m.a,{}),name:"Save"},{icon:Object(h.jsx)(p.a,{}),name:"Print"},{icon:Object(h.jsx)(j.a,{}),name:"Share"}];function x(){return Object(h.jsx)(o.a,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:Object(h.jsx)(a.a,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:Object(h.jsx)(i.a,{}),children:b.map((function(e){return Object(h.jsx)(c.a,{icon:e.icon,tooltipTitle:e.name},e.name)}))})})}},2836:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function BasicSpeedDial() {\n  return (\n    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <SpeedDial\n        ariaLabel=\"SpeedDial basic example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon />}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},2837:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return w}));var o=t(17),a=t(1),i=t(14),c=t(1389),r=t(767),l=t(1333),s=t(760),m=t(1352),d=t(1332),p=t(1334),u=t(1609),j=t(1618),h=t(1610),b=t(1704),x=t.n(b),f=t(1591),O=t.n(f),S=t(1705),v=t.n(S),D=t(1647),g=t.n(D),y=t(0),I=Object(i.a)(u.a)((function(e){var n=e.theme;return{position:"absolute","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:n.spacing(2),right:n.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:n.spacing(2),left:n.spacing(2)}}})),C=[{icon:Object(y.jsx)(x.a,{}),name:"Copy"},{icon:Object(y.jsx)(O.a,{}),name:"Save"},{icon:Object(y.jsx)(v.a,{}),name:"Print"},{icon:Object(y.jsx)(g.a,{}),name:"Share"}];function w(){var e=a.useState("up"),n=Object(o.a)(e,2),t=n[0],i=n[1],u=a.useState(!1),b=Object(o.a)(u,2),x=b[0],f=b[1];return Object(y.jsxs)(c.a,{sx:{transform:"translateZ(0px)",flexGrow:1},children:[Object(y.jsx)(l.a,{control:Object(y.jsx)(p.a,{checked:x,onChange:function(e){f(e.target.checked)},color:"primary"}),label:"Hidden"}),Object(y.jsxs)(r.a,{component:"fieldset",sx:{mt:1,display:"flex"},children:[Object(y.jsx)(s.b,{component:"legend",children:"Direction"}),Object(y.jsxs)(d.a,{"aria-label":"direction",name:"direction",value:t,onChange:function(e){i(e.target.value)},row:!0,children:[Object(y.jsx)(l.a,{value:"up",control:Object(y.jsx)(m.a,{}),label:"Up"}),Object(y.jsx)(l.a,{value:"right",control:Object(y.jsx)(m.a,{}),label:"Right"}),Object(y.jsx)(l.a,{value:"down",control:Object(y.jsx)(m.a,{}),label:"Down"}),Object(y.jsx)(l.a,{value:"left",control:Object(y.jsx)(m.a,{}),label:"Left"})]})]}),Object(y.jsx)(c.a,{sx:{position:"relative",mt:3,height:320},children:Object(y.jsx)(I,{ariaLabel:"SpeedDial playground example",hidden:x,icon:Object(y.jsx)(j.a,{}),direction:t,children:C.map((function(e){return Object(y.jsx)(h.a,{icon:e.icon,tooltipTitle:e.name},e.name)}))})})]})}},2838:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport FormControl from '@mui/material/FormControl';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport FormLabel from '@mui/material/FormLabel';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport Switch from '@mui/material/Switch';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({\n  position: 'absolute',\n  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {\n    bottom: theme.spacing(2),\n    right: theme.spacing(2),\n  },\n  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {\n    top: theme.spacing(2),\n    left: theme.spacing(2),\n  },\n}));\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function PlaygroundSpeedDial() {\n  const [direction, setDirection] = React.useState('up');\n  const [hidden, setHidden] = React.useState(false);\n\n  const handleDirectionChange = (event) => {\n    setDirection(event.target.value);\n  };\n\n  const handleHiddenChange = (event) => {\n    setHidden(event.target.checked);\n  };\n\n  return (\n    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <FormControlLabel\n        control={\n          <Switch checked={hidden} onChange={handleHiddenChange} color=\"primary\" />\n        }\n        label=\"Hidden\"\n      />\n      <FormControl component=\"fieldset\" sx={{ mt: 1, display: 'flex' }}>\n        <FormLabel component=\"legend\">Direction</FormLabel>\n        <RadioGroup\n          aria-label=\"direction\"\n          name=\"direction\"\n          value={direction}\n          onChange={handleDirectionChange}\n          row\n        >\n          <FormControlLabel value=\"up\" control={<Radio />} label=\"Up\" />\n          <FormControlLabel value=\"right\" control={<Radio />} label=\"Right\" />\n          <FormControlLabel value=\"down\" control={<Radio />} label=\"Down\" />\n          <FormControlLabel value=\"left\" control={<Radio />} label=\"Left\" />\n        </RadioGroup>\n      </FormControl>\n      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>\n        <StyledSpeedDial\n          ariaLabel=\"SpeedDial playground example\"\n          hidden={hidden}\n          icon={<SpeedDialIcon />}\n          direction={direction}\n        >\n          {actions.map((action) => (\n            <SpeedDialAction\n              key={action.name}\n              icon={action.icon}\n              tooltipTitle={action.name}\n            />\n          ))}\n        </StyledSpeedDial>\n      </Box>\n    </Box>\n  );\n}\n"},2839:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var o=t(17),a=t(1),i=t(1389),c=t(1609),r=t(1618),l=t(1610),s=t(1704),m=t.n(s),d=t(1591),p=t.n(d),u=t(1705),j=t.n(u),h=t(1647),b=t.n(h),x=t(0),f=[{icon:Object(x.jsx)(m.a,{}),name:"Copy"},{icon:Object(x.jsx)(p.a,{}),name:"Save"},{icon:Object(x.jsx)(j.a,{}),name:"Print"},{icon:Object(x.jsx)(b.a,{}),name:"Share"}];function O(){var e=a.useState(!1),n=Object(o.a)(e,2),t=n[0],s=n[1],m=function(){return s(!1)};return Object(x.jsx)(i.a,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:Object(x.jsx)(c.a,{ariaLabel:"SpeedDial uncontrolled open example",sx:{position:"absolute",bottom:16,right:16},icon:Object(x.jsx)(r.a,{}),onClose:m,onOpen:function(){return s(!0)},open:t,children:f.map((function(e){return Object(x.jsx)(l.a,{icon:e.icon,tooltipTitle:e.name,onClick:m},e.name)}))})})}},2840:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function ControlledOpenSpeedDial() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <SpeedDial\n        ariaLabel=\"SpeedDial uncontrolled open example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon />}\n        onClose={handleClose}\n        onOpen={handleOpen}\n        open={open}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n            onClick={handleClose}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},2841:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));t(1);var o=t(1389),a=t(1609),i=t(1618),c=t(1610),r=t(1704),l=t.n(r),s=t(1591),m=t.n(s),d=t(1705),p=t.n(d),u=t(1647),j=t.n(u),h=t(1672),b=t.n(h),x=t(0),f=[{icon:Object(x.jsx)(l.a,{}),name:"Copy"},{icon:Object(x.jsx)(m.a,{}),name:"Save"},{icon:Object(x.jsx)(p.a,{}),name:"Print"},{icon:Object(x.jsx)(j.a,{}),name:"Share"}];function O(){return Object(x.jsx)(o.a,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:Object(x.jsx)(a.a,{ariaLabel:"SpeedDial openIcon example",sx:{position:"absolute",bottom:16,right:16},icon:Object(x.jsx)(i.a,{openIcon:Object(x.jsx)(b.a,{})}),children:f.map((function(e){return Object(x.jsx)(c.a,{icon:e.icon,tooltipTitle:e.name},e.name)}))})})}},2842:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\nimport EditIcon from '@mui/icons-material/Edit';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function OpenIconSpeedDial() {\n  return (\n    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <SpeedDial\n        ariaLabel=\"SpeedDial openIcon example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon openIcon={<EditIcon />} />}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},2843:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return S}));var o=t(17),a=t(1),i=t(1389),c=t(540),r=t(1609),l=t(1618),s=t(1610),m=t(1704),d=t.n(m),p=t(1591),u=t.n(p),j=t(1705),h=t.n(j),b=t(1647),x=t.n(b),f=t(0),O=[{icon:Object(f.jsx)(d.a,{}),name:"Copy"},{icon:Object(f.jsx)(u.a,{}),name:"Save"},{icon:Object(f.jsx)(h.a,{}),name:"Print"},{icon:Object(f.jsx)(x.a,{}),name:"Share"}];function S(){var e=a.useState(!1),n=Object(o.a)(e,2),t=n[0],m=n[1],d=function(){return m(!1)};return Object(f.jsxs)(i.a,{sx:{height:330,transform:"translateZ(0px)",flexGrow:1},children:[Object(f.jsx)(c.b,{open:t}),Object(f.jsx)(r.a,{ariaLabel:"SpeedDial tooltip example",sx:{position:"absolute",bottom:16,right:16},icon:Object(f.jsx)(l.a,{}),onClose:d,onOpen:function(){return m(!0)},open:t,children:O.map((function(e){return Object(f.jsx)(s.a,{icon:e.icon,tooltipTitle:e.name,tooltipOpen:!0,onClick:d},e.name)}))})]})}},2844:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Backdrop from '@mui/material/Backdrop';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function SpeedDialTooltipOpen() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <Backdrop open={open} />\n      <SpeedDial\n        ariaLabel=\"SpeedDial tooltip example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon />}\n        onClose={handleClose}\n        onOpen={handleOpen}\n        open={open}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n            tooltipOpen\n            onClick={handleClose}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},3302:function(e,n,t){"use strict";t.r(n);var o=t(1383),a=t(1336),i=t(1327),c=t(222),r=t(0);n.default=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(r.jsxs)(a.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/speed-dial",target:"_blank",role:"button",children:[Object(r.jsx)(i.a,{children:"link"}),Object(r.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(r.jsx)(c.a,{className:"text-40 my-16 font-700",component:"h1",children:"Speed Dial"}),Object(r.jsx)(c.a,{className:"description",children:"When pressed, a floating action button can display three to six related actions in the form of a speed dial."}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:"If more than six actions are needed, something other than a FAB should be used to present them."}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic speed dial"}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:"The floating action button can display related actions."}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2835).default,raw:t(2836)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Playground"}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2837).default,raw:t(2838)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Controlled speed dial"}),Object(r.jsxs)(c.a,{className:"mb-40",component:"div",children:["The open state of the component can be controlled with the ",Object(r.jsx)("code",{children:"open"}),"/",Object(r.jsx)("code",{children:"onOpen"}),"/",Object(r.jsx)("code",{children:"onClose"})," props."]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2839).default,raw:t(2840)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Custom close icon"}),Object(r.jsxs)(c.a,{className:"mb-40",component:"div",children:["You can provide an alternate icon for the closed and open states using the ",Object(r.jsx)("code",{children:"icon"})," ","and ",Object(r.jsx)("code",{children:"openIcon"})," props of the ",Object(r.jsx)("code",{children:"SpeedDialIcon"})," component."]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2841).default,raw:t(2842)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Persistent action tooltips"}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:"The SpeedDialActions tooltips can be displayed persistently so that users don't have to long-press to see the tooltip on touch devices."}),Object(r.jsxs)(c.a,{className:"mb-40",component:"div",children:["It is enabled here across all devices for demo purposes, but in production it could use the"," ",Object(r.jsx)("code",{children:"isTouch"})," logic to conditionally set the prop."]}),Object(r.jsx)(c.a,{className:"mb-40",component:"div",children:Object(r.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2843).default,raw:t(2844)})}),Object(r.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),Object(r.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),Object(r.jsx)(c.a,{className:"text-16 mt-16 mb-10",component:"h4",children:"Required"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["You should provide an ",Object(r.jsx)("code",{children:"ariaLabel"})," for the speed dial component."]}),Object(r.jsxs)("li",{children:["You should provide a ",Object(r.jsx)("code",{children:"tooltipTitle"})," for each speed dial action."]})]}),Object(r.jsx)(c.a,{className:"text-16 mt-16 mb-10",component:"h4",children:"Provided"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["The Fab has ",Object(r.jsx)("code",{children:"aria-haspopup"}),", ",Object(r.jsx)("code",{children:"aria-expanded"})," and"," ",Object(r.jsx)("code",{children:"aria-controls"})," attributes."]}),Object(r.jsxs)("li",{children:["The speed dial actions container has ",Object(r.jsx)("code",{children:'role="menu"'})," and"," ",Object(r.jsx)("code",{children:"aria-orientation"})," set according to the direction."]}),Object(r.jsxs)("li",{children:["The speed dial actions have ",Object(r.jsx)("code",{children:'role="menuitem"'}),", and an"," ",Object(r.jsx)("code",{children:"aria-describedby"})," attribute that references the associated tooltip."]})]}),Object(r.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"The speed dial opens on focus."}),Object(r.jsx)("li",{children:"The Space and Enter keys trigger the selected speed dial action, and toggle the speed dial open state."}),Object(r.jsx)("li",{children:"The cursor keys move focus to the next or previous speed dial action. (Note that any cursor direction can be used initially to open the speed dial. This enables the expected behavior for the actual or perceived orientation of the speed dial, for example for a screen reader user who perceives the speed dial as a drop-down menu.)"}),Object(r.jsx)("li",{children:"The Escape key closes the speed dial and, if a speed dial action was focused, returns focus to the Fab."})]})]})}}}]);