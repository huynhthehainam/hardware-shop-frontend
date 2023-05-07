(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[78],{1383:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var i=n(17),r=n(168),a=n(1338),o=n(1346),c=n(1327),s=n(1350),m=n(1351),l=n(6),d=n(1),u=n(8),j=n(127),x=n(100),b=n.n(x),p=n(504),h=n(209),f=n(97),v=n(1386),O=n(51),y=n(14),g=n(1294),I=n(0),L=["children","name"];function w(t){var e=t.children,n=t.document,i=Object(O.a)();d.useEffect((function(){n.body.dir=i.direction}),[n,i.direction]);var r=d.useMemo((function(){return Object(h.a)({key:"iframe-demo-".concat(i.direction),prepend:!0,container:n.head,stylisPlugins:"rtl"===i.direction?[p.a]:[]})}),[n,i.direction]),a=d.useCallback((function(){return n.defaultView}),[n]);return Object(I.jsx)(v.a,{target:n.head,stylisPlugins:"rtl"===i.direction?[p.a]:[],children:Object(I.jsxs)(f.a,{value:r,children:[Object(I.jsx)(g.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),d.cloneElement(e,{window:a})]})})}var A=Object(y.a)("iframe")((function(t){var e=t.theme;return{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:e.shadows[1]}}));function D(t){var e,n=t.children,r=t.name,a=Object(j.a)(t,L),o="".concat(r," demo"),c=d.useRef(null),s=d.useReducer((function(){return!0}),!1),m=Object(i.a)(s,2),l=m[0],x=m[1];d.useEffect((function(){var t=c.current.contentDocument;null==t||"complete"!==t.readyState||l||x()}),[l]);var p=null===(e=c.current)||void 0===e?void 0:e.contentDocument;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(A,Object(u.a)({onLoad:x,ref:c,title:o},a)),!1!==l?b.a.createPortal(Object(I.jsx)(w,{document:p,children:n}),p.body):null]})}var N=d.memo(D);function T(t){var e=Object(d.useState)(t.currentTabIndex),n=Object(i.a)(e,2),u=n[0],j=n[1],x=t.component,b=t.raw,p=t.iframe,h=t.className;return Object(I.jsxs)(o.a,{className:Object(l.default)(h,"shadow"),children:[Object(I.jsx)(a.a,{position:"static",color:"default",className:"shadow-0",children:Object(I.jsxs)(m.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(t,e){j(e)},children:[x&&Object(I.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(I.jsx)(c.a,{children:"remove_red_eye"})}),b&&Object(I.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(I.jsx)(c.a,{children:"code"})})]})}),Object(I.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(I.jsx)("div",{className:0===u?"flex flex-1 max-w-full":"hidden",children:x&&(p?Object(I.jsx)(N,{children:Object(I.jsx)(x,{})}):Object(I.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(I.jsx)(x,{})}))}),Object(I.jsx)("div",{className:1===u?"flex flex-1":"hidden",children:b&&Object(I.jsx)("div",{className:"flex flex-1",children:Object(I.jsx)(r.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:b.default})})})]})]})}T.defaultProps={currentTabIndex:0};var k=T},2412:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));n(1);var i=n(1330),r=n(1341),a=n(1342),o=n(1344),c=n(0),s={width:"100%",maxWidth:360,bgcolor:"background.paper"};function m(){return Object(c.jsxs)(i.a,{sx:s,component:"nav","aria-label":"mailbox folders",children:[Object(c.jsx)(r.a,{button:!0,children:Object(c.jsx)(a.a,{primary:"Inbox"})}),Object(c.jsx)(o.a,{}),Object(c.jsx)(r.a,{button:!0,divider:!0,children:Object(c.jsx)(a.a,{primary:"Drafts"})}),Object(c.jsx)(r.a,{button:!0,children:Object(c.jsx)(a.a,{primary:"Trash"})}),Object(c.jsx)(o.a,{light:!0}),Object(c.jsx)(r.a,{button:!0,children:Object(c.jsx)(a.a,{primary:"Spam"})})]})}},2413:function(t,e,n){"use strict";n.r(e),e.default="import * as React from 'react';\nimport List from '@mui/material/List';\nimport ListItem from '@mui/material/ListItem';\nimport ListItemText from '@mui/material/ListItemText';\nimport Divider from '@mui/material/Divider';\n\nconst style = {\n  width: '100%',\n  maxWidth: 360,\n  bgcolor: 'background.paper',\n};\n\nexport default function ListDividers() {\n  return (\n    <List sx={style} component=\"nav\" aria-label=\"mailbox folders\">\n      <ListItem button>\n        <ListItemText primary=\"Inbox\" />\n      </ListItem>\n      <Divider />\n      <ListItem button divider>\n        <ListItemText primary=\"Drafts\" />\n      </ListItem>\n      <ListItem button>\n        <ListItemText primary=\"Trash\" />\n      </ListItem>\n      <Divider light />\n      <ListItem button>\n        <ListItemText primary=\"Spam\" />\n      </ListItem>\n    </List>\n  );\n}\n"},2414:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));n(1);var i=n(1330),r=n(1341),a=n(1342),o=n(1547),c=n(1353),s=n(1772),m=n.n(s),l=n(1773),d=n.n(l),u=n(1734),j=n.n(u),x=n(1344),b=n(0);function p(){return Object(b.jsxs)(i.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(b.jsxs)(r.a,{children:[Object(b.jsx)(o.a,{children:Object(b.jsx)(c.a,{children:Object(b.jsx)(m.a,{})})}),Object(b.jsx)(a.a,{primary:"Photos",secondary:"Jan 9, 2014"})]}),Object(b.jsx)(x.a,{variant:"inset",component:"li"}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(o.a,{children:Object(b.jsx)(c.a,{children:Object(b.jsx)(d.a,{})})}),Object(b.jsx)(a.a,{primary:"Work",secondary:"Jan 7, 2014"})]}),Object(b.jsx)(x.a,{variant:"inset",component:"li"}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(o.a,{children:Object(b.jsx)(c.a,{children:Object(b.jsx)(j.a,{})})}),Object(b.jsx)(a.a,{primary:"Vacation",secondary:"July 20, 2014"})]})]})}},2415:function(t,e,n){"use strict";n.r(e),e.default="import * as React from 'react';\nimport List from '@mui/material/List';\nimport ListItem from '@mui/material/ListItem';\nimport ListItemText from '@mui/material/ListItemText';\nimport ListItemAvatar from '@mui/material/ListItemAvatar';\nimport Avatar from '@mui/material/Avatar';\nimport ImageIcon from '@mui/icons-material/Image';\nimport WorkIcon from '@mui/icons-material/Work';\nimport BeachAccessIcon from '@mui/icons-material/BeachAccess';\nimport Divider from '@mui/material/Divider';\n\nexport default function InsetDividers() {\n  return (\n    <List\n      sx={{\n        width: '100%',\n        maxWidth: 360,\n        bgcolor: 'background.paper',\n      }}\n    >\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <ImageIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary=\"Photos\" secondary=\"Jan 9, 2014\" />\n      </ListItem>\n      <Divider variant=\"inset\" component=\"li\" />\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <WorkIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary=\"Work\" secondary=\"Jan 7, 2014\" />\n      </ListItem>\n      <Divider variant=\"inset\" component=\"li\" />\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <BeachAccessIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary=\"Vacation\" secondary=\"July 20, 2014\" />\n      </ListItem>\n    </List>\n  );\n}\n"},2416:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return j}));n(1);var i=n(1330),r=n(1341),a=n(1547),o=n(1342),c=n(1353),s=n(1734),m=n.n(s),l=n(1344),d=n(222),u=n(0);function j(){return Object(u.jsxs)(i.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(u.jsx)(r.a,{children:Object(u.jsx)(o.a,{primary:"Photos",secondary:"Jan 9, 2014"})}),Object(u.jsx)(l.a,{component:"li"}),Object(u.jsx)("li",{children:Object(u.jsx)(d.a,{sx:{mt:.5,ml:2},color:"text.secondary",display:"block",variant:"caption",children:"Divider"})}),Object(u.jsx)(r.a,{children:Object(u.jsx)(o.a,{primary:"Work",secondary:"Jan 7, 2014"})}),Object(u.jsx)(l.a,{component:"li",variant:"inset"}),Object(u.jsx)("li",{children:Object(u.jsx)(d.a,{sx:{mt:.5,ml:9},color:"text.secondary",display:"block",variant:"caption",children:"Leisure"})}),Object(u.jsxs)(r.a,{children:[Object(u.jsx)(a.a,{children:Object(u.jsx)(c.a,{children:Object(u.jsx)(m.a,{})})}),Object(u.jsx)(o.a,{primary:"Vacation",secondary:"July 20, 2014"})]})]})}},2417:function(t,e,n){"use strict";n.r(e),e.default='import * as React from \'react\';\nimport List from \'@mui/material/List\';\nimport ListItem from \'@mui/material/ListItem\';\nimport ListItemAvatar from \'@mui/material/ListItemAvatar\';\nimport ListItemText from \'@mui/material/ListItemText\';\nimport Avatar from \'@mui/material/Avatar\';\nimport BeachAccessIcon from \'@mui/icons-material/BeachAccess\';\nimport Divider from \'@mui/material/Divider\';\nimport Typography from \'@mui/material/Typography\';\n\nexport default function SubheaderDividers() {\n  return (\n    <List\n      sx={{\n        width: \'100%\',\n        maxWidth: 360,\n        bgcolor: \'background.paper\',\n      }}\n    >\n      <ListItem>\n        <ListItemText primary="Photos" secondary="Jan 9, 2014" />\n      </ListItem>\n      <Divider component="li" />\n      <li>\n        <Typography\n          sx={{ mt: 0.5, ml: 2 }}\n          color="text.secondary"\n          display="block"\n          variant="caption"\n        >\n          Divider\n        </Typography>\n      </li>\n      <ListItem>\n        <ListItemText primary="Work" secondary="Jan 7, 2014" />\n      </ListItem>\n      <Divider component="li" variant="inset" />\n      <li>\n        <Typography\n          sx={{ mt: 0.5, ml: 9 }}\n          color="text.secondary"\n          display="block"\n          variant="caption"\n        >\n          Leisure\n        </Typography>\n      </li>\n      <ListItem>\n        <ListItemAvatar>\n          <Avatar>\n            <BeachAccessIcon />\n          </Avatar>\n        </ListItemAvatar>\n        <ListItemText primary="Vacation" secondary="July 20, 2014" />\n      </ListItem>\n    </List>\n  );\n}\n'},2418:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));n(1);var i=n(1389),r=n(1564),a=n(1336),o=n(1456),c=n(1422),s=n(1344),m=n(222),l=n(0);function d(){return Object(l.jsxs)(i.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(l.jsxs)(i.a,{sx:{my:3,mx:2},children:[Object(l.jsxs)(o.a,{container:!0,alignItems:"center",children:[Object(l.jsx)(o.a,{item:!0,xs:!0,children:Object(l.jsx)(m.a,{gutterBottom:!0,variant:"h4",component:"div",children:"Toothbrush"})}),Object(l.jsx)(o.a,{item:!0,children:Object(l.jsx)(m.a,{gutterBottom:!0,variant:"h6",component:"div",children:"$4.50"})})]}),Object(l.jsx)(m.a,{color:"text.secondary",variant:"body2",children:"Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall."})]}),Object(l.jsx)(s.a,{variant:"middle"}),Object(l.jsxs)(i.a,{sx:{m:2},children:[Object(l.jsx)(m.a,{gutterBottom:!0,variant:"body1",children:"Select type"}),Object(l.jsxs)(c.a,{direction:"row",spacing:1,children:[Object(l.jsx)(r.a,{label:"Extra Soft"}),Object(l.jsx)(r.a,{color:"primary",label:"Soft"}),Object(l.jsx)(r.a,{label:"Medium"}),Object(l.jsx)(r.a,{label:"Hard"})]})]}),Object(l.jsx)(i.a,{sx:{mt:3,ml:1,mb:1},children:Object(l.jsx)(a.a,{children:"Add to cart"})})]})}},2419:function(t,e,n){"use strict";n.r(e),e.default='import * as React from \'react\';\nimport Box from \'@mui/material/Box\';\nimport Chip from \'@mui/material/Chip\';\nimport Button from \'@mui/material/Button\';\nimport Grid from \'@mui/material/Grid\';\nimport Stack from \'@mui/material/Stack\';\nimport Divider from \'@mui/material/Divider\';\nimport Typography from \'@mui/material/Typography\';\n\nexport default function MiddleDividers() {\n  return (\n    <Box sx={{ width: \'100%\', maxWidth: 360, bgcolor: \'background.paper\' }}>\n      <Box sx={{ my: 3, mx: 2 }}>\n        <Grid container alignItems="center">\n          <Grid item xs>\n            <Typography gutterBottom variant="h4" component="div">\n              Toothbrush\n            </Typography>\n          </Grid>\n          <Grid item>\n            <Typography gutterBottom variant="h6" component="div">\n              $4.50\n            </Typography>\n          </Grid>\n        </Grid>\n        <Typography color="text.secondary" variant="body2">\n          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or\n          just down the hall.\n        </Typography>\n      </Box>\n      <Divider variant="middle" />\n      <Box sx={{ m: 2 }}>\n        <Typography gutterBottom variant="body1">\n          Select type\n        </Typography>\n        <Stack direction="row" spacing={1}>\n          <Chip label="Extra Soft" />\n          <Chip color="primary" label="Soft" />\n          <Chip label="Medium" />\n          <Chip label="Hard" />\n        </Stack>\n      </Box>\n      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>\n        <Button>Add to cart</Button>\n      </Box>\n    </Box>\n  );\n}\n'},2420:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var i=n(8),r=(n(1),n(14)),a=n(1344),o=n(1564),c=n(0),s=Object(r.a)("div")((function(t){var e=t.theme;return Object(i.a)(Object(i.a)({width:"100%"},e.typography.body2),{},{"& > :not(style) + :not(style)":{marginTop:e.spacing(2)}})}));function m(){var t=Object(c.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.\n   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n   Sed malesuada lobortis pretium."});return Object(c.jsxs)(s,{children:[t,Object(c.jsx)(a.a,{children:"CENTER"}),t,Object(c.jsx)(a.a,{textAlign:"left",children:"LEFT"}),t,Object(c.jsx)(a.a,{textAlign:"right",children:"RIGHT"}),t,Object(c.jsx)(a.a,{children:Object(c.jsx)(o.a,{label:"CHIP"})}),t]})}},2421:function(t,e,n){"use strict";n.r(e),e.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Divider from '@mui/material/Divider';\nimport Chip from '@mui/material/Chip';\n\nconst Root = styled('div')(({ theme }) => ({\n  width: '100%',\n  ...theme.typography.body2,\n  '& > :not(style) + :not(style)': {\n    marginTop: theme.spacing(2),\n  },\n}));\n\nexport default function DividerText() {\n  const content = (\n    <div>\n      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.\n   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n   Sed malesuada lobortis pretium.`}\n    </div>\n  );\n\n  return (\n    <Root>\n      {content}\n      <Divider>CENTER</Divider>\n      {content}\n      <Divider textAlign=\"left\">LEFT</Divider>\n      {content}\n      <Divider textAlign=\"right\">RIGHT</Divider>\n      {content}\n      <Divider>\n        <Chip label=\"CHIP\" />\n      </Divider>\n      {content}\n    </Root>\n  );\n}\n"},2422:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));n(1);var i=n(1646),r=n.n(i),a=n(1647),o=n.n(a),c=n(1648),s=n.n(c),m=n(1698),l=n.n(m),d=n(1699),u=n.n(d),j=n(1389),x=n(1344),b=n(0);function p(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{sx:{display:"flex",alignItems:"center",width:"fit-content",border:function(t){return"1px solid ".concat(t.palette.divider)},borderRadius:1,bgcolor:"background.paper",color:"text.secondary","& svg":{m:1.5},"& hr":{mx:.5}},children:[Object(b.jsx)(r.a,{}),Object(b.jsx)(o.a,{}),Object(b.jsx)(s.a,{}),Object(b.jsx)(x.a,{orientation:"vertical",flexItem:!0}),Object(b.jsx)(l.a,{}),Object(b.jsx)(u.a,{})]})})}},2423:function(t,e,n){"use strict";n.r(e),e.default="import * as React from 'react';\nimport FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';\nimport FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';\nimport FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';\nimport FormatBoldIcon from '@mui/icons-material/FormatBold';\nimport FormatItalicIcon from '@mui/icons-material/FormatItalic';\nimport Box from '@mui/material/Box';\nimport Divider from '@mui/material/Divider';\n\nexport default function VerticalDividers() {\n  return (\n    <div>\n      <Box\n        sx={{\n          display: 'flex',\n          alignItems: 'center',\n          width: 'fit-content',\n          border: (theme) => `1px solid ${theme.palette.divider}`,\n          borderRadius: 1,\n          bgcolor: 'background.paper',\n          color: 'text.secondary',\n          '& svg': {\n            m: 1.5,\n          },\n          '& hr': {\n            mx: 0.5,\n          },\n        }}\n      >\n        <FormatAlignLeftIcon />\n        <FormatAlignCenterIcon />\n        <FormatAlignRightIcon />\n        <Divider orientation=\"vertical\" flexItem />\n        <FormatBoldIcon />\n        <FormatItalicIcon />\n      </Box>\n    </div>\n  );\n}\n"},2424:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));n(1);var i=n(1646),r=n.n(i),a=n(1647),o=n.n(a),c=n(1648),s=n.n(c),m=n(1698),l=n.n(m),d=n(1699),u=n.n(d),j=n(1389),x=n(1344),b=n(0);function p(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{sx:{display:"flex",alignItems:"center",width:"fit-content",border:function(t){return"1px solid ".concat(t.palette.divider)},borderRadius:1,bgcolor:"background.paper",color:"text.secondary","& svg":{m:1.5},"& hr":{mx:.5}},children:[Object(b.jsx)(r.a,{}),Object(b.jsx)(o.a,{}),Object(b.jsx)(s.a,{}),Object(b.jsx)(x.a,{orientation:"vertical",variant:"middle",flexItem:!0}),Object(b.jsx)(l.a,{}),Object(b.jsx)(u.a,{})]})})}},2425:function(t,e,n){"use strict";n.r(e),e.default="import * as React from 'react';\nimport FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';\nimport FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';\nimport FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';\nimport FormatBoldIcon from '@mui/icons-material/FormatBold';\nimport FormatItalicIcon from '@mui/icons-material/FormatItalic';\nimport Box from '@mui/material/Box';\nimport Divider from '@mui/material/Divider';\n\nexport default function VerticalDividerMiddle() {\n  return (\n    <div>\n      <Box\n        sx={{\n          display: 'flex',\n          alignItems: 'center',\n          width: 'fit-content',\n          border: (theme) => `1px solid ${theme.palette.divider}`,\n          borderRadius: 1,\n          bgcolor: 'background.paper',\n          color: 'text.secondary',\n          '& svg': {\n            m: 1.5,\n          },\n          '& hr': {\n            mx: 0.5,\n          },\n        }}\n      >\n        <FormatAlignLeftIcon />\n        <FormatAlignCenterIcon />\n        <FormatAlignRightIcon />\n        <Divider orientation=\"vertical\" variant=\"middle\" flexItem />\n        <FormatBoldIcon />\n        <FormatItalicIcon />\n      </Box>\n    </div>\n  );\n}\n"},2426:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var i=n(8),r=(n(1),n(14)),a=n(1456),o=n(1344),c=n(0),s=Object(r.a)(a.a)((function(t){var e=t.theme;return Object(i.a)(Object(i.a)({width:"100%"},e.typography.body2),{},{'& [role="separator"]':{margin:e.spacing(0,2)}})}));function m(){var t=Object(c.jsx)("div",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.\n   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n   Sed malesuada lobortis pretium."});return Object(c.jsxs)(s,{container:!0,children:[Object(c.jsx)(s,{item:!0,xs:!0,children:t}),Object(c.jsx)(o.a,{orientation:"vertical",flexItem:!0,children:"VERTICAL"}),Object(c.jsx)(s,{item:!0,xs:!0,children:t})]})}},2427:function(t,e,n){"use strict";n.r(e),e.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport MuiGrid from '@mui/material/Grid';\nimport Divider from '@mui/material/Divider';\n\nconst Grid = styled(MuiGrid)(({ theme }) => ({\n  width: '100%',\n  ...theme.typography.body2,\n  '& [role=\"separator\"]': {\n    margin: theme.spacing(0, 2),\n  },\n}));\n\nexport default function VerticalDividerText() {\n  const content = (\n    <div>\n      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.\n   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n   Sed malesuada lobortis pretium.`}\n    </div>\n  );\n\n  return (\n    <Grid container>\n      <Grid item xs>\n        {content}\n      </Grid>\n      <Divider orientation=\"vertical\" flexItem>\n        VERTICAL\n      </Divider>\n      <Grid item xs>\n        {content}\n      </Grid>\n    </Grid>\n  );\n}\n"},3275:function(t,e,n){"use strict";n.r(e);var i=n(1383),r=n(1336),a=n(1327),o=n(222),c=n(0);e.default=function(t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(c.jsxs)(r.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/dividers",target:"_blank",role:"button",children:[Object(c.jsx)(a.a,{children:"link"}),Object(c.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(c.jsx)(o.a,{className:"text-40 my-16 font-700",component:"h1",children:"Divider"}),Object(c.jsx)(o.a,{className:"description",children:"A divider is a thin line that groups content in lists and layouts."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"Dividers separate content into clear groups."}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"List dividers"}),Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["The divider renders as an ",Object(c.jsx)("code",{children:"<hr>"})," by default. You can save rendering this DOM element by using the ",Object(c.jsx)("code",{children:"divider"})," prop on the ",Object(c.jsx)("code",{children:"ListItem"})," component."]}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(i.a,{className:"my-24",iframe:!1,component:n(2412).default,raw:n(2413)})}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"HTML5 specification"}),Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["In a list, you should ensure the ",Object(c.jsx)("code",{children:"Divider"})," is rendered as an"," ",Object(c.jsx)("code",{children:"<li>"})," to match the HTML5 specification. The examples below show two ways of achieving this."]}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Inset dividers"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(i.a,{className:"my-24",iframe:!1,component:n(2414).default,raw:n(2415)})}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Subheader dividers"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(i.a,{className:"my-24",iframe:!1,component:n(2416).default,raw:n(2417)})}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Middle divider"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(i.a,{className:"my-24",iframe:!1,component:n(2418).default,raw:n(2419)})}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Dividers with text"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"You can also render a divider with content."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(i.a,{className:"my-24",iframe:!1,component:n(2420).default,raw:n(2421)})}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Vertical divider"}),Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["You can also render a divider vertically using the ",Object(c.jsx)("code",{children:"orientation"})," prop."]}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(i.a,{className:"my-24",iframe:!1,component:n(2422).default,raw:n(2423)})}),Object(c.jsx)("blockquote",{children:Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["Note the use of the ",Object(c.jsx)("code",{children:"flexItem"})," prop to accommodate for the flex container."]})}),Object(c.jsx)(o.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Vertical with variant middle"}),Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["You can also render a vertical divider with ",Object(c.jsx)("code",{children:'variant="middle"'}),"."]}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(i.a,{className:"my-24",iframe:!1,component:n(2424).default,raw:n(2425)})}),Object(c.jsx)(o.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Vertical with text"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"You can also render a vertical divider with content."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(i.a,{className:"my-24",iframe:!1,component:n(2426).default,raw:n(2427)})})]})}}}]);