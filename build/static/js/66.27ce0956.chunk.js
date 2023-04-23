(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[66],{1383:function(e,n,t){"use strict";t.d(n,"a",(function(){return G}));var o=t(17),a=t(168),r=t(1338),l=t(1346),c=t(1327),i=t(1350),s=t(1351),d=t(6),m=t(1),u=t(8),b=t(127),j=t(97),p=t.n(j),h=t(504),f=t(208),x=t(94),O=t(1386),v=t(50),g=t(14),R=t(1294),C=t(0),F=["children","name"];function w(e){var n=e.children,t=e.document,o=Object(v.a)();m.useEffect((function(){t.body.dir=o.direction}),[t,o.direction]);var a=m.useMemo((function(){return Object(f.a)({key:"iframe-demo-".concat(o.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===o.direction?[h.a]:[]})}),[t,o.direction]),r=m.useCallback((function(){return t.defaultView}),[t]);return Object(C.jsx)(O.a,{target:t.head,stylisPlugins:"rtl"===o.direction?[h.a]:[],children:Object(C.jsxs)(x.a,{value:a,children:[Object(C.jsx)(R.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),m.cloneElement(n,{window:r})]})})}var y=Object(g.a)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function L(e){var n,t=e.children,a=e.name,r=Object(b.a)(e,F),l="".concat(a," demo"),c=m.useRef(null),i=m.useReducer((function(){return!0}),!1),s=Object(o.a)(i,2),d=s[0],j=s[1];m.useEffect((function(){var e=c.current.contentDocument;null==e||"complete"!==e.readyState||d||j()}),[d]);var h=null===(n=c.current)||void 0===n?void 0:n.contentDocument;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(y,Object(u.a)({onLoad:j,ref:c,title:l},r)),!1!==d?p.a.createPortal(Object(C.jsx)(w,{document:h,children:t}),h.body):null]})}var k=m.memo(L);function N(e){var n=Object(m.useState)(e.currentTabIndex),t=Object(o.a)(n,2),u=t[0],b=t[1],j=e.component,p=e.raw,h=e.iframe,f=e.className;return Object(C.jsxs)(l.a,{className:Object(d.default)(f,"shadow"),children:[Object(C.jsx)(r.a,{position:"static",color:"default",className:"shadow-0",children:Object(C.jsxs)(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,n){b(n)},children:[j&&Object(C.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(C.jsx)(c.a,{children:"remove_red_eye"})}),p&&Object(C.jsx)(i.a,{classes:{root:"min-w-64"},icon:Object(C.jsx)(c.a,{children:"code"})})]})}),Object(C.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(C.jsx)("div",{className:0===u?"flex flex-1 max-w-full":"hidden",children:j&&(h?Object(C.jsx)(k,{children:Object(C.jsx)(j,{})}):Object(C.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(C.jsx)(j,{})}))}),Object(C.jsx)("div",{className:1===u?"flex flex-1":"hidden",children:p&&Object(C.jsx)("div",{className:"flex flex-1",children:Object(C.jsx)(a.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:p.default})})})]})]})}N.defaultProps={currentTabIndex:0};var G=N},2689:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));t(1);var o=t(1352),a=t(1332),r=t(1333),l=t(767),c=t(760),i=t(0);function s(){return Object(i.jsxs)(l.a,{component:"fieldset",children:[Object(i.jsx)(c.b,{component:"legend",children:"Gender"}),Object(i.jsxs)(a.a,{"aria-label":"gender",defaultValue:"female",name:"radio-buttons-group",children:[Object(i.jsx)(r.a,{value:"female",control:Object(i.jsx)(o.a,{}),label:"Female"}),Object(i.jsx)(r.a,{value:"male",control:Object(i.jsx)(o.a,{}),label:"Male"}),Object(i.jsx)(r.a,{value:"other",control:Object(i.jsx)(o.a,{}),label:"Other"})]})]})}},2690:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport Radio from \'@mui/material/Radio\';\nimport RadioGroup from \'@mui/material/RadioGroup\';\nimport FormControlLabel from \'@mui/material/FormControlLabel\';\nimport FormControl from \'@mui/material/FormControl\';\nimport FormLabel from \'@mui/material/FormLabel\';\n\nexport default function RadioButtonsGroup() {\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">Gender</FormLabel>\n      <RadioGroup\n        aria-label="gender"\n        defaultValue="female"\n        name="radio-buttons-group"\n      >\n        <FormControlLabel value="female" control={<Radio />} label="Female" />\n        <FormControlLabel value="male" control={<Radio />} label="Male" />\n        <FormControlLabel value="other" control={<Radio />} label="Other" />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n'},2691:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));t(1);var o=t(1352),a=t(1332),r=t(1333),l=t(767),c=t(760),i=t(0);function s(){return Object(i.jsxs)(l.a,{component:"fieldset",children:[Object(i.jsx)(c.b,{component:"legend",children:"Gender"}),Object(i.jsxs)(a.a,{row:!0,"aria-label":"gender",name:"row-radio-buttons-group",children:[Object(i.jsx)(r.a,{value:"female",control:Object(i.jsx)(o.a,{}),label:"Female"}),Object(i.jsx)(r.a,{value:"male",control:Object(i.jsx)(o.a,{}),label:"Male"}),Object(i.jsx)(r.a,{value:"other",control:Object(i.jsx)(o.a,{}),label:"Other"}),Object(i.jsx)(r.a,{value:"disabled",disabled:!0,control:Object(i.jsx)(o.a,{}),label:"other"})]})]})}},2692:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport Radio from \'@mui/material/Radio\';\nimport RadioGroup from \'@mui/material/RadioGroup\';\nimport FormControlLabel from \'@mui/material/FormControlLabel\';\nimport FormControl from \'@mui/material/FormControl\';\nimport FormLabel from \'@mui/material/FormLabel\';\n\nexport default function RowRadioButtonsGroup() {\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">Gender</FormLabel>\n      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">\n        <FormControlLabel value="female" control={<Radio />} label="Female" />\n        <FormControlLabel value="male" control={<Radio />} label="Male" />\n        <FormControlLabel value="other" control={<Radio />} label="Other" />\n        <FormControlLabel\n          value="disabled"\n          disabled\n          control={<Radio />}\n          label="other"\n        />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n'},2693:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return m}));var o=t(17),a=t(1),r=t(1352),l=t(1332),c=t(1333),i=t(767),s=t(760),d=t(0);function m(){var e=a.useState("female"),n=Object(o.a)(e,2),t=n[0],m=n[1];return Object(d.jsxs)(i.a,{component:"fieldset",children:[Object(d.jsx)(s.b,{component:"legend",children:"Gender"}),Object(d.jsxs)(l.a,{"aria-label":"gender",name:"controlled-radio-buttons-group",value:t,onChange:function(e){m(e.target.value)},children:[Object(d.jsx)(c.a,{value:"female",control:Object(d.jsx)(r.a,{}),label:"Female"}),Object(d.jsx)(c.a,{value:"male",control:Object(d.jsx)(r.a,{}),label:"Male"})]})]})}},2694:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport Radio from \'@mui/material/Radio\';\nimport RadioGroup from \'@mui/material/RadioGroup\';\nimport FormControlLabel from \'@mui/material/FormControlLabel\';\nimport FormControl from \'@mui/material/FormControl\';\nimport FormLabel from \'@mui/material/FormLabel\';\n\nexport default function ControlledRadioButtonsGroup() {\n  const [value, setValue] = React.useState(\'female\');\n\n  const handleChange = (event) => {\n    setValue(event.target.value);\n  };\n\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">Gender</FormLabel>\n      <RadioGroup\n        aria-label="gender"\n        name="controlled-radio-buttons-group"\n        value={value}\n        onChange={handleChange}\n      >\n        <FormControlLabel value="female" control={<Radio />} label="Female" />\n        <FormControlLabel value="male" control={<Radio />} label="Male" />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n'},2695:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var o=t(17),a=t(1),r=t(1352),l=t(0);function c(){var e=a.useState("a"),n=Object(o.a)(e,2),t=n[0],c=n[1],i=function(e){c(e.target.value)};return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{checked:"a"===t,onChange:i,value:"a",name:"radio-buttons",inputProps:{"aria-label":"A"}}),Object(l.jsx)(r.a,{checked:"b"===t,onChange:i,value:"b",name:"radio-buttons",inputProps:{"aria-label":"B"}})]})}},2696:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Radio from '@mui/material/Radio';\n\nexport default function RadioButtons() {\n  const [selectedValue, setSelectedValue] = React.useState('a');\n\n  const handleChange = (event) => {\n    setSelectedValue(event.target.value);\n  };\n\n  return (\n    <div>\n      <Radio\n        checked={selectedValue === 'a'}\n        onChange={handleChange}\n        value=\"a\"\n        name=\"radio-buttons\"\n        inputProps={{ 'aria-label': 'A' }}\n      />\n      <Radio\n        checked={selectedValue === 'b'}\n        onChange={handleChange}\n        value=\"b\"\n        name=\"radio-buttons\"\n        inputProps={{ 'aria-label': 'B' }}\n      />\n    </div>\n  );\n}\n"},2697:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var o=t(8),a=t(17),r=t(1),l=t(1352),c=t(0);function i(){var e=r.useState("a"),n=Object(a.a)(e,2),t=n[0],i=n[1],s=function(e){i(e.target.value)},d=function(e){return{checked:t===e,onChange:s,value:e,name:"size-radio-button-demo",inputProps:{"aria-label":e}}};return Object(c.jsxs)("div",{children:[Object(c.jsx)(l.a,Object(o.a)(Object(o.a)({},d("a")),{},{size:"small"})),Object(c.jsx)(l.a,Object(o.a)({},d("b"))),Object(c.jsx)(l.a,Object(o.a)(Object(o.a)({},d("c")),{},{sx:{"& .MuiSvgIcon-root":{fontSize:28}}}))]})}},2698:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Radio from '@mui/material/Radio';\n\nexport default function SizeRadioButtons() {\n  const [selectedValue, setSelectedValue] = React.useState('a');\n  const handleChange = (event) => {\n    setSelectedValue(event.target.value);\n  };\n\n  const controlProps = (item) => ({\n    checked: selectedValue === item,\n    onChange: handleChange,\n    value: item,\n    name: 'size-radio-button-demo',\n    inputProps: { 'aria-label': item },\n  });\n\n  return (\n    <div>\n      <Radio {...controlProps('a')} size=\"small\" />\n      <Radio {...controlProps('b')} />\n      <Radio\n        {...controlProps('c')}\n        sx={{\n          '& .MuiSvgIcon-root': {\n            fontSize: 28,\n          },\n        }}\n      />\n    </div>\n  );\n}\n"},2699:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var o=t(8),a=t(17),r=t(1),l=t(566),c=t(1352),i=t(0);function s(){var e=r.useState("a"),n=Object(a.a)(e,2),t=n[0],s=n[1],d=function(e){s(e.target.value)},m=function(e){return{checked:t===e,onChange:d,value:e,name:"color-radio-button-demo",inputProps:{"aria-label":e}}};return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,Object(o.a)({},m("a"))),Object(i.jsx)(c.a,Object(o.a)(Object(o.a)({},m("b")),{},{color:"secondary"})),Object(i.jsx)(c.a,Object(o.a)(Object(o.a)({},m("c")),{},{color:"success"})),Object(i.jsx)(c.a,Object(o.a)(Object(o.a)({},m("d")),{},{color:"default"})),Object(i.jsx)(c.a,Object(o.a)(Object(o.a)({},m("e")),{},{sx:{color:l.a[800],"&.Mui-checked":{color:l.a[600]}}}))]})}},2700:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport { pink } from '@mui/material/colors';\nimport Radio from '@mui/material/Radio';\n\nexport default function ColorRadioButtons() {\n  const [selectedValue, setSelectedValue] = React.useState('a');\n\n  const handleChange = (event) => {\n    setSelectedValue(event.target.value);\n  };\n\n  const controlProps = (item) => ({\n    checked: selectedValue === item,\n    onChange: handleChange,\n    value: item,\n    name: 'color-radio-button-demo',\n    inputProps: { 'aria-label': item },\n  });\n\n  return (\n    <div>\n      <Radio {...controlProps('a')} />\n      <Radio {...controlProps('b')} color=\"secondary\" />\n      <Radio {...controlProps('c')} color=\"success\" />\n      <Radio {...controlProps('d')} color=\"default\" />\n      <Radio\n        {...controlProps('e')}\n        sx={{\n          color: pink[800],\n          '&.Mui-checked': {\n            color: pink[600],\n          },\n        }}\n      />\n    </div>\n  );\n}\n"},2701:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));t(1);var o=t(1352),a=t(1332),r=t(1333),l=t(767),c=t(760),i=t(0);function s(){return Object(i.jsxs)(l.a,{component:"fieldset",children:[Object(i.jsx)(c.b,{component:"legend",children:"labelPlacement"}),Object(i.jsxs)(a.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[Object(i.jsx)(r.a,{value:"top",control:Object(i.jsx)(o.a,{}),label:"Top",labelPlacement:"top"}),Object(i.jsx)(r.a,{value:"start",control:Object(i.jsx)(o.a,{}),label:"Start",labelPlacement:"start"}),Object(i.jsx)(r.a,{value:"bottom",control:Object(i.jsx)(o.a,{}),label:"Bottom",labelPlacement:"bottom"}),Object(i.jsx)(r.a,{value:"end",control:Object(i.jsx)(o.a,{}),label:"End"})]})]})}},2702:function(e,n,t){"use strict";t.r(n),n.default='import * as React from \'react\';\nimport Radio from \'@mui/material/Radio\';\nimport RadioGroup from \'@mui/material/RadioGroup\';\nimport FormControlLabel from \'@mui/material/FormControlLabel\';\nimport FormControl from \'@mui/material/FormControl\';\nimport FormLabel from \'@mui/material/FormLabel\';\n\nexport default function FormControlLabelPlacement() {\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">labelPlacement</FormLabel>\n      <RadioGroup row aria-label="position" name="position" defaultValue="top">\n        <FormControlLabel\n          value="top"\n          control={<Radio />}\n          label="Top"\n          labelPlacement="top"\n        />\n        <FormControlLabel\n          value="start"\n          control={<Radio />}\n          label="Start"\n          labelPlacement="start"\n        />\n        <FormControlLabel\n          value="bottom"\n          control={<Radio />}\n          label="Bottom"\n          labelPlacement="bottom"\n        />\n        <FormControlLabel value="end" control={<Radio />} label="End" />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n'},2703:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var o=t(17),a=t(1),r=t(1352),l=t(1332),c=t(1333),i=t(767),s=t(770),d=t(760),m=t(1336),u=t(0);function b(){var e=a.useState(""),n=Object(o.a)(e,2),t=n[0],b=n[1],j=a.useState(!1),p=Object(o.a)(j,2),h=p[0],f=p[1],x=a.useState("Choose wisely"),O=Object(o.a)(x,2),v=O[0],g=O[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),"best"===t?(g("You got it!"),f(!1)):"worst"===t?(g("Sorry, wrong answer!"),f(!0)):(g("Please select an option."),f(!0))},children:Object(u.jsxs)(i.a,{sx:{m:3},component:"fieldset",error:h,variant:"standard",children:[Object(u.jsx)(d.b,{component:"legend",children:"Pop quiz: MUI is..."}),Object(u.jsxs)(l.a,{"aria-label":"quiz",name:"quiz",value:t,onChange:function(e){b(e.target.value),g(" "),f(!1)},children:[Object(u.jsx)(c.a,{value:"best",control:Object(u.jsx)(r.a,{}),label:"The best!"}),Object(u.jsx)(c.a,{value:"worst",control:Object(u.jsx)(r.a,{}),label:"The worst."})]}),Object(u.jsx)(s.a,{children:v}),Object(u.jsx)(m.a,{sx:{mt:1,mr:1},type:"submit",variant:"outlined",children:"Check Answer"})]})})}},2704:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport FormControl from '@mui/material/FormControl';\nimport FormHelperText from '@mui/material/FormHelperText';\nimport FormLabel from '@mui/material/FormLabel';\nimport Button from '@mui/material/Button';\n\nexport default function ErrorRadios() {\n  const [value, setValue] = React.useState('');\n  const [error, setError] = React.useState(false);\n  const [helperText, setHelperText] = React.useState('Choose wisely');\n\n  const handleRadioChange = (event) => {\n    setValue(event.target.value);\n    setHelperText(' ');\n    setError(false);\n  };\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n\n    if (value === 'best') {\n      setHelperText('You got it!');\n      setError(false);\n    } else if (value === 'worst') {\n      setHelperText('Sorry, wrong answer!');\n      setError(true);\n    } else {\n      setHelperText('Please select an option.');\n      setError(true);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <FormControl\n        sx={{ m: 3 }}\n        component=\"fieldset\"\n        error={error}\n        variant=\"standard\"\n      >\n        <FormLabel component=\"legend\">Pop quiz: MUI is...</FormLabel>\n        <RadioGroup\n          aria-label=\"quiz\"\n          name=\"quiz\"\n          value={value}\n          onChange={handleRadioChange}\n        >\n          <FormControlLabel value=\"best\" control={<Radio />} label=\"The best!\" />\n          <FormControlLabel value=\"worst\" control={<Radio />} label=\"The worst.\" />\n        </RadioGroup>\n        <FormHelperText>{helperText}</FormHelperText>\n        <Button sx={{ mt: 1, mr: 1 }} type=\"submit\" variant=\"outlined\">\n          Check Answer\n        </Button>\n      </FormControl>\n    </form>\n  );\n}\n"},2705:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return j}));var o=t(8),a=(t(1),t(14)),r=t(1352),l=t(1332),c=t(1333),i=t(767),s=t(760),d=t(0),m=Object(a.a)("span")((function(e){var n=e.theme;return{borderRadius:"50%",width:16,height:16,boxShadow:"dark"===n.palette.mode?"0 0 0 1px rgb(16 22 26 / 40%)":"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"dark"===n.palette.mode?"#394b59":"#f5f8fa",backgroundImage:"dark"===n.palette.mode?"linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))":"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",".Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"dark"===n.palette.mode?"#30404d":"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"dark"===n.palette.mode?"rgba(57,75,89,.5)":"rgba(206,217,224,.5)"}}})),u=Object(a.a)(m)({backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}});function b(e){return Object(d.jsx)(r.a,Object(o.a)({sx:{"&:hover":{bgcolor:"transparent"}},disableRipple:!0,color:"default",checkedIcon:Object(d.jsx)(u,{}),icon:Object(d.jsx)(m,{})},e))}function j(){return Object(d.jsxs)(i.a,{component:"fieldset",children:[Object(d.jsx)(s.b,{component:"legend",children:"Gender"}),Object(d.jsxs)(l.a,{defaultValue:"female","aria-label":"gender",name:"customized-radios",children:[Object(d.jsx)(c.a,{value:"female",control:Object(d.jsx)(b,{}),label:"Female"}),Object(d.jsx)(c.a,{value:"male",control:Object(d.jsx)(b,{}),label:"Male"}),Object(d.jsx)(c.a,{value:"other",control:Object(d.jsx)(b,{}),label:"Other"}),Object(d.jsx)(c.a,{value:"disabled",disabled:!0,control:Object(d.jsx)(b,{}),label:"(Disabled option)"})]})]})}},2706:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport FormControl from '@mui/material/FormControl';\nimport FormLabel from '@mui/material/FormLabel';\n\nconst BpIcon = styled('span')(({ theme }) => ({\n  borderRadius: '50%',\n  width: 16,\n  height: 16,\n  boxShadow:\n    theme.palette.mode === 'dark'\n      ? '0 0 0 1px rgb(16 22 26 / 40%)'\n      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',\n  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',\n  backgroundImage:\n    theme.palette.mode === 'dark'\n      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'\n      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',\n  '.Mui-focusVisible &': {\n    outline: '2px auto rgba(19,124,189,.6)',\n    outlineOffset: 2,\n  },\n  'input:hover ~ &': {\n    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',\n  },\n  'input:disabled ~ &': {\n    boxShadow: 'none',\n    background:\n      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',\n  },\n}));\n\nconst BpCheckedIcon = styled(BpIcon)({\n  backgroundColor: '#137cbd',\n  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',\n  '&:before': {\n    display: 'block',\n    width: 16,\n    height: 16,\n    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',\n    content: '\"\"',\n  },\n  'input:hover ~ &': {\n    backgroundColor: '#106ba3',\n  },\n});\n\n// Inspired by blueprintjs\nfunction BpRadio(props) {\n  return (\n    <Radio\n      sx={{\n        '&:hover': {\n          bgcolor: 'transparent',\n        },\n      }}\n      disableRipple\n      color=\"default\"\n      checkedIcon={<BpCheckedIcon />}\n      icon={<BpIcon />}\n      {...props}\n    />\n  );\n}\n\nexport default function CustomizedRadios() {\n  return (\n    <FormControl component=\"fieldset\">\n      <FormLabel component=\"legend\">Gender</FormLabel>\n      <RadioGroup defaultValue=\"female\" aria-label=\"gender\" name=\"customized-radios\">\n        <FormControlLabel value=\"female\" control={<BpRadio />} label=\"Female\" />\n        <FormControlLabel value=\"male\" control={<BpRadio />} label=\"Male\" />\n        <FormControlLabel value=\"other\" control={<BpRadio />} label=\"Other\" />\n        <FormControlLabel\n          value=\"disabled\"\n          disabled\n          control={<BpRadio />}\n          label=\"(Disabled option)\"\n        />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n"},2707:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var o=t(8),a=(t(1),t(14)),r=t(546),l=t(1332),c=t(1333),i=t(1352),s=t(0),d=Object(a.a)((function(e){return Object(s.jsx)(c.a,Object(o.a)({},e))}))((function(e){var n=e.theme;return{".MuiFormControlLabel-label":e.checked&&{color:n.palette.primary.main}}}));function m(e){var n=Object(r.a)(),t=!1;return n&&(t=n.value===e.value),Object(s.jsx)(d,Object(o.a)({checked:t},e))}function u(){return Object(s.jsxs)(l.a,{name:"use-radio-group",defaultValue:"first",children:[Object(s.jsx)(m,{value:"first",label:"First",control:Object(s.jsx)(i.a,{})}),Object(s.jsx)(m,{value:"second",label:"Second",control:Object(s.jsx)(i.a,{})})]})}},2708:function(e,n,t){"use strict";t.r(n),n.default="import * as React from 'react';\nimport PropTypes from 'prop-types';\nimport { styled } from '@mui/material/styles';\nimport RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport Radio from '@mui/material/Radio';\n\nconst StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(\n  ({ theme, checked }) => ({\n    '.MuiFormControlLabel-label': checked && {\n      color: theme.palette.primary.main,\n    },\n  }),\n);\n\nfunction MyFormControlLabel(props) {\n  const radioGroup = useRadioGroup();\n\n  let checked = false;\n\n  if (radioGroup) {\n    checked = radioGroup.value === props.value;\n  }\n\n  return <StyledFormControlLabel checked={checked} {...props} />;\n}\n\nMyFormControlLabel.propTypes = {\n  /**\n   * The value of the component.\n   */\n  value: PropTypes.any,\n};\n\nexport default function UseRadioGroup() {\n  return (\n    <RadioGroup name=\"use-radio-group\" defaultValue=\"first\">\n      <MyFormControlLabel value=\"first\" label=\"First\" control={<Radio />} />\n      <MyFormControlLabel value=\"second\" label=\"Second\" control={<Radio />} />\n    </RadioGroup>\n  );\n}\n"},3296:function(e,n,t){"use strict";t.r(n);var o=t(1383),a=t(168),r=t(1336),l=t(1327),c=t(222),i=t(0);n.default=function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(i.jsxs)(r.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/radio-buttons",target:"_blank",role:"button",children:[Object(i.jsx)(l.a,{children:"link"}),Object(i.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(i.jsx)(c.a,{className:"text-40 my-16 font-700",component:"h1",children:"Radio"}),Object(i.jsx)(c.a,{className:"description",children:"Radio buttons allow the user to select one option from a set."}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:"Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a dropdown menu because it uses less space."}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:"Radio buttons should have the most commonly used option selected by default."}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Radio group"}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:[Object(i.jsx)("code",{children:"RadioGroup"})," is a helpful wrapper used to group ",Object(i.jsx)("code",{children:"Radio"})," components that provides an easier API, and proper keyboard accessibility to the group."]}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2689).default,raw:t(2690)})}),Object(i.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Direction"}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:["To lay out the buttons horizontally, set the ",Object(i.jsx)("code",{children:"row"})," prop:"]}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2691).default,raw:t(2692)})}),Object(i.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Controlled"}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:["You can control the radio with the ",Object(i.jsx)("code",{children:"value"})," and ",Object(i.jsx)("code",{children:"onChange"})," props:"]}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2693).default,raw:t(2694)})}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Standalone radio buttons"}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:[Object(i.jsx)("code",{children:"Radio"})," can also be used standalone, without the RadioGroup wrapper."]}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2695).default,raw:t(2696)})}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Size"}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:["Use the ",Object(i.jsx)("code",{children:"size"})," prop or customize the font size of the svg icons to change the size of the radios."]}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2697).default,raw:t(2698)})}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Color"}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2699).default,raw:t(2700)})}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Label placement"}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:["You can change the placement of the label with the ",Object(i.jsx)("code",{children:"FormControlLabel"})," ","component's ",Object(i.jsx)("code",{children:"labelPlacement"})," prop:"]}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2701).default,raw:t(2702)})}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Show error"}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:"In general, radio buttons should have a value selected by default. If this is not the case, you can display an error if no value is selected when the form is submitted:"}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2703).default,raw:t(2704)})}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Customization"}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the"," ",Object(i.jsx)("a",{href:"/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2705).default,raw:t(2706)})}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:Object(i.jsx)("code",{children:"useRadioGroup"})}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:["For advanced customization use cases, a ",Object(i.jsx)("code",{children:"useRadioGroup()"})," hook is exposed. It returns the context value of the parent radio group. The Radio component uses this hook internally."]}),Object(i.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"API"}),Object(i.jsx)(a.a,{component:"pre",className:"language-jsx",children:" \nimport { useRadioGroup } from '@mui/material/RadioGroup';\n"}),Object(i.jsx)(c.a,{className:"text-16 mt-16 mb-10",component:"h4",children:"Returns"}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:[Object(i.jsx)("code",{children:"value"})," (",Object(i.jsx)("em",{children:"object"}),"):"]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("code",{children:"value.name"})," (",Object(i.jsx)("em",{children:"string"})," [optional]): The name used to reference the value of the control."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("code",{children:"value.onChange"})," (",Object(i.jsx)("em",{children:"func"})," [optional]): Callback fired when a radio button is selected."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("code",{children:"value.value"})," (",Object(i.jsx)("em",{children:"any"})," [optional]): Value of the selected radio button."]})]}),Object(i.jsx)(c.a,{className:"text-16 mt-16 mb-10",component:"h4",children:"Example"}),Object(i.jsx)(c.a,{className:"mb-40",component:"div",children:Object(i.jsx)(o.a,{className:"my-24",iframe:!1,component:t(2707).default,raw:t(2708)})}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"When to use"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/",children:"Checkboxes vs. Radio Buttons"})})}),Object(i.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),Object(i.jsxs)(c.a,{className:"mb-40",component:"div",children:["(WAI-ARIA:"," ",Object(i.jsx)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#radiobutton",children:"https://www.w3.org/TR/wai-aria-practices/#radiobutton"}),")"]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",Object(i.jsx)("code",{children:"<label>"})," element (",Object(i.jsx)("a",{href:"/api/form-control-label/",children:"FormControlLabel"}),")."]}),Object(i.jsxs)("li",{children:["When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g."," ",Object(i.jsx)("code",{children:"aria-label"}),", ",Object(i.jsx)("code",{children:"aria-labelledby"}),", ",Object(i.jsx)("code",{children:"title"}),") via the"," ",Object(i.jsx)("code",{children:"inputProps"})," property."]})]}),Object(i.jsx)(a.a,{component:"pre",className:"language-jsx",children:" \n<Radio\n  value=\"radioA\"\n  inputProps={{\n    'aria-label': 'Radio A',\n\n/>\n"})]})}}}]);