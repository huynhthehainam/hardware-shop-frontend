(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[87],{1383:function(n,e,t){"use strict";t.d(e,"a",(function(){return C}));var a=t(17),i=t(168),o=t(1338),r=t(1346),c=t(1327),s=t(1350),l=t(1351),m=t(6),d=t(1),p=t(8),h=t(127),u=t(100),j=t.n(u),f=t(504),b=t(209),x=t(97),g=t(1386),y=t(51),v=t(14),O=t(1294),w=t(0),k=["children","name"];function S(n){var e=n.children,t=n.document,a=Object(y.a)();d.useEffect((function(){t.body.dir=a.direction}),[t,a.direction]);var i=d.useMemo((function(){return Object(b.a)({key:"iframe-demo-".concat(a.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===a.direction?[f.a]:[]})}),[t,a.direction]),o=d.useCallback((function(){return t.defaultView}),[t]);return Object(w.jsx)(g.a,{target:t.head,stylisPlugins:"rtl"===a.direction?[f.a]:[],children:Object(w.jsxs)(x.a,{value:i,children:[Object(w.jsx)(O.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),d.cloneElement(e,{window:o})]})})}var T=Object(v.a)("iframe")((function(n){var e=n.theme;return{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:e.shadows[1]}}));function N(n){var e,t=n.children,i=n.name,o=Object(h.a)(n,k),r="".concat(i," demo"),c=d.useRef(null),s=d.useReducer((function(){return!0}),!1),l=Object(a.a)(s,2),m=l[0],u=l[1];d.useEffect((function(){var n=c.current.contentDocument;null==n||"complete"!==n.readyState||m||u()}),[m]);var f=null===(e=c.current)||void 0===e?void 0:e.contentDocument;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(T,Object(p.a)({onLoad:u,ref:c,title:r},o)),!1!==m?j.a.createPortal(Object(w.jsx)(S,{document:f,children:t}),f.body):null]})}var A=d.memo(N);function B(n){var e=Object(d.useState)(n.currentTabIndex),t=Object(a.a)(e,2),p=t[0],h=t[1],u=n.component,j=n.raw,f=n.iframe,b=n.className;return Object(w.jsxs)(r.a,{className:Object(m.default)(b,"shadow"),children:[Object(w.jsx)(o.a,{position:"static",color:"default",className:"shadow-0",children:Object(w.jsxs)(l.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(n,e){h(e)},children:[u&&Object(w.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(c.a,{children:"remove_red_eye"})}),j&&Object(w.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(w.jsx)(c.a,{children:"code"})})]})}),Object(w.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(w.jsx)("div",{className:0===p?"flex flex-1 max-w-full":"hidden",children:u&&(f?Object(w.jsx)(A,{children:Object(w.jsx)(u,{})}):Object(w.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(w.jsx)(u,{})}))}),Object(w.jsx)("div",{className:1===p?"flex flex-1":"hidden",children:j&&Object(w.jsx)("div",{className:"flex flex-1",children:Object(w.jsx)(i.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:j.default})})})]})]})}B.defaultProps={currentTabIndex:0};var C=B},2758:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return r}));t(1);var a=t(1572),i=t(1422),o=t(0);function r(){return Object(o.jsxs)(i.a,{spacing:1,children:[Object(o.jsx)(a.a,{variant:"text"}),Object(o.jsx)(a.a,{variant:"circular",width:40,height:40}),Object(o.jsx)(a.a,{variant:"rectangular",width:210,height:118})]})}},2759:function(n,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\nimport Skeleton from '@mui/material/Skeleton';\nimport Stack from '@mui/material/Stack';\n\nexport default function Variants() {\n  return (\n    <Stack spacing={1}>\n      <Skeleton variant=\"text\" />\n      <Skeleton variant=\"circular\" width={40} height={40} />\n      <Skeleton variant=\"rectangular\" width={210} height={118} />\n    </Stack>\n  );\n}\n"},2760:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return r}));t(1);var a=t(1389),i=t(1572),o=t(0);function r(){return Object(o.jsxs)(a.a,{sx:{width:300},children:[Object(o.jsx)(i.a,{}),Object(o.jsx)(i.a,{animation:"wave"}),Object(o.jsx)(i.a,{animation:!1})]})}},2761:function(n,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Skeleton from '@mui/material/Skeleton';\n\nexport default function Animations() {\n  return (\n    <Box sx={{ width: 300 }}>\n      <Skeleton />\n      <Skeleton animation=\"wave\" />\n      <Skeleton animation={false} />\n    </Box>\n  );\n}\n"},2762:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return m}));t(1);var a=t(1456),i=t(1389),o=t(222),r=t(1572),c=t(0),s=[{src:"https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",title:"Don Diablo @ Tomorrowland Main Stage 2019 | Official\u2026",channel:"Don Diablo",views:"396 k views",createdAt:"a week ago"},{src:"https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",title:"Queen - Greatest Hits",channel:"Queen Official",views:"40 M views",createdAt:"3 years ago"},{src:"https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",title:"Calvin Harris, Sam Smith - Promises (Official Video)",channel:"Calvin Harris",views:"130 M views",createdAt:"10 months ago"}];function l(n){var e=n.loading,t=void 0!==e&&e;return Object(c.jsx)(a.a,{container:!0,wrap:"nowrap",children:(t?Array.from(new Array(3)):s).map((function(n,e){return Object(c.jsxs)(i.a,{sx:{width:210,marginRight:.5,my:5},children:[n?Object(c.jsx)("img",{style:{width:210,height:118},alt:n.title,src:n.src}):Object(c.jsx)(r.a,{variant:"rectangular",width:210,height:118}),n?Object(c.jsxs)(i.a,{sx:{pr:2},children:[Object(c.jsx)(o.a,{gutterBottom:!0,variant:"body2",children:n.title}),Object(c.jsx)(o.a,{display:"block",variant:"caption",color:"text.secondary",children:n.channel}),Object(c.jsx)(o.a,{variant:"caption",color:"text.secondary",children:"".concat(n.views," \u2022 ").concat(n.createdAt)})]}):Object(c.jsxs)(i.a,{sx:{pt:.5},children:[Object(c.jsx)(r.a,{}),Object(c.jsx)(r.a,{width:"60%"})]})]},e)}))})}function m(){return Object(c.jsxs)(i.a,{sx:{overflow:"hidden"},children:[Object(c.jsx)(l,{loading:!0}),Object(c.jsx)(l,{})]})}},2763:function(n,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\nimport PropTypes from 'prop-types';\nimport Grid from '@mui/material/Grid';\nimport Box from '@mui/material/Box';\nimport Typography from '@mui/material/Typography';\nimport Skeleton from '@mui/material/Skeleton';\n\nconst data = [\n  {\n    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',\n    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official\u2026',\n    channel: 'Don Diablo',\n    views: '396 k views',\n    createdAt: 'a week ago',\n  },\n  {\n    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',\n    title: 'Queen - Greatest Hits',\n    channel: 'Queen Official',\n    views: '40 M views',\n    createdAt: '3 years ago',\n  },\n  {\n    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',\n    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',\n    channel: 'Calvin Harris',\n    views: '130 M views',\n    createdAt: '10 months ago',\n  },\n];\n\nfunction Media(props) {\n  const { loading = false } = props;\n\n  return (\n    <Grid container wrap=\"nowrap\">\n      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (\n        <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>\n          {item ? (\n            <img\n              style={{ width: 210, height: 118 }}\n              alt={item.title}\n              src={item.src}\n            />\n          ) : (\n            <Skeleton variant=\"rectangular\" width={210} height={118} />\n          )}\n\n          {item ? (\n            <Box sx={{ pr: 2 }}>\n              <Typography gutterBottom variant=\"body2\">\n                {item.title}\n              </Typography>\n              <Typography display=\"block\" variant=\"caption\" color=\"text.secondary\">\n                {item.channel}\n              </Typography>\n              <Typography variant=\"caption\" color=\"text.secondary\">\n                {`${item.views} \u2022 ${item.createdAt}`}\n              </Typography>\n            </Box>\n          ) : (\n            <Box sx={{ pt: 0.5 }}>\n              <Skeleton />\n              <Skeleton width=\"60%\" />\n            </Box>\n          )}\n        </Box>\n      ))}\n    </Grid>\n  );\n}\n\nMedia.propTypes = {\n  loading: PropTypes.bool,\n};\n\nexport default function YouTube() {\n  return (\n    <Box sx={{ overflow: 'hidden' }}>\n      <Media loading />\n      <Media />\n    </Box>\n  );\n}\n"},2764:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return f}));var a=t(1),i=t(1346),o=t(1558),r=t(1348),c=t(1583),s=t(1353),l=t(222),m=t(1328),d=t(1614),p=t.n(d),h=t(1572),u=t(0);function j(n){var e=n.loading,t=void 0!==e&&e;return Object(u.jsxs)(i.a,{sx:{maxWidth:345,m:2},children:[Object(u.jsx)(o.a,{avatar:t?Object(u.jsx)(h.a,{animation:"wave",variant:"circular",width:40,height:40}):Object(u.jsx)(s.a,{alt:"Ted talk",src:"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"}),action:t?null:Object(u.jsx)(m.a,{"aria-label":"settings",children:Object(u.jsx)(p.a,{})}),title:t?Object(u.jsx)(h.a,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}):"Ted",subheader:t?Object(u.jsx)(h.a,{animation:"wave",height:10,width:"40%"}):"5 hours ago"}),t?Object(u.jsx)(h.a,{sx:{height:190},animation:"wave",variant:"rectangular"}):Object(u.jsx)(c.a,{component:"img",height:"140",image:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",alt:"Nicola Sturgeon on a TED talk stage"}),Object(u.jsx)(r.a,{children:t?Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(h.a,{animation:"wave",height:10,style:{marginBottom:6}}),Object(u.jsx)(h.a,{animation:"wave",height:10,width:"80%"})]}):Object(u.jsx)(l.a,{variant:"body2",color:"text.secondary",component:"p",children:"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"})})]})}function f(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{loading:!0}),Object(u.jsx)(j,{})]})}},2765:function(n,e,t){"use strict";t.r(e),e.default='import * as React from \'react\';\nimport PropTypes from \'prop-types\';\nimport Card from \'@mui/material/Card\';\nimport CardHeader from \'@mui/material/CardHeader\';\nimport CardContent from \'@mui/material/CardContent\';\nimport CardMedia from \'@mui/material/CardMedia\';\nimport Avatar from \'@mui/material/Avatar\';\nimport Typography from \'@mui/material/Typography\';\nimport IconButton from \'@mui/material/IconButton\';\nimport MoreVertIcon from \'@mui/icons-material/MoreVert\';\nimport Skeleton from \'@mui/material/Skeleton\';\n\nfunction Media(props) {\n  const { loading = false } = props;\n\n  return (\n    <Card sx={{ maxWidth: 345, m: 2 }}>\n      <CardHeader\n        avatar={\n          loading ? (\n            <Skeleton animation="wave" variant="circular" width={40} height={40} />\n          ) : (\n            <Avatar\n              alt="Ted talk"\n              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"\n            />\n          )\n        }\n        action={\n          loading ? null : (\n            <IconButton aria-label="settings">\n              <MoreVertIcon />\n            </IconButton>\n          )\n        }\n        title={\n          loading ? (\n            <Skeleton\n              animation="wave"\n              height={10}\n              width="80%"\n              style={{ marginBottom: 6 }}\n            />\n          ) : (\n            \'Ted\'\n          )\n        }\n        subheader={\n          loading ? (\n            <Skeleton animation="wave" height={10} width="40%" />\n          ) : (\n            \'5 hours ago\'\n          )\n        }\n      />\n      {loading ? (\n        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />\n      ) : (\n        <CardMedia\n          component="img"\n          height="140"\n          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"\n          alt="Nicola Sturgeon on a TED talk stage"\n        />\n      )}\n\n      <CardContent>\n        {loading ? (\n          <React.Fragment>\n            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />\n            <Skeleton animation="wave" height={10} width="80%" />\n          </React.Fragment>\n        ) : (\n          <Typography variant="body2" color="text.secondary" component="p">\n            {\n              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country\'s success:"\n            }\n          </Typography>\n        )}\n      </CardContent>\n    </Card>\n  );\n}\n\nMedia.propTypes = {\n  loading: PropTypes.bool,\n};\n\nexport default function Facebook() {\n  return (\n    <div>\n      <Media loading />\n      <Media />\n    </div>\n  );\n}\n'},2766:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return l}));t(1);var a=t(222),i=t(1572),o=t(1456),r=t(0),c=["h1","h3","body1","caption"];function s(n){var e=n.loading,t=void 0!==e&&e;return Object(r.jsx)("div",{children:c.map((function(n){return Object(r.jsx)(a.a,{component:"div",variant:n,children:t?Object(r.jsx)(i.a,{}):n},n)}))})}function l(){return Object(r.jsxs)(o.a,{container:!0,spacing:8,children:[Object(r.jsx)(o.a,{item:!0,xs:!0,children:Object(r.jsx)(s,{loading:!0})}),Object(r.jsx)(o.a,{item:!0,xs:!0,children:Object(r.jsx)(s,{})})]})}},2767:function(n,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\nimport PropTypes from 'prop-types';\nimport Typography from '@mui/material/Typography';\nimport Skeleton from '@mui/material/Skeleton';\nimport Grid from '@mui/material/Grid';\n\nconst variants = ['h1', 'h3', 'body1', 'caption'];\n\nfunction TypographyDemo(props) {\n  const { loading = false } = props;\n\n  return (\n    <div>\n      {variants.map((variant) => (\n        <Typography component=\"div\" key={variant} variant={variant}>\n          {loading ? <Skeleton /> : variant}\n        </Typography>\n      ))}\n    </div>\n  );\n}\n\nTypographyDemo.propTypes = {\n  loading: PropTypes.bool,\n};\n\nexport default function SkeletonTypography() {\n  return (\n    <Grid container spacing={8}>\n      <Grid item xs>\n        <TypographyDemo loading />\n      </Grid>\n      <Grid item xs>\n        <TypographyDemo />\n      </Grid>\n    </Grid>\n  );\n}\n"},2768:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return p}));t(1);var a=t(14),i=t(1389),o=t(222),r=t(1353),c=t(1456),s=t(1572),l=t(0),m=Object(a.a)("img")({width:"100%"});function d(n){var e=n.loading,t=void 0!==e&&e;return Object(l.jsxs)("div",{children:[Object(l.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(l.jsx)(i.a,{sx:{margin:1},children:t?Object(l.jsx)(s.a,{variant:"circular",children:Object(l.jsx)(r.a,{})}):Object(l.jsx)(r.a,{src:"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"})}),Object(l.jsx)(i.a,{sx:{width:"100%"},children:t?Object(l.jsx)(s.a,{width:"100%",children:Object(l.jsx)(o.a,{children:"."})}):Object(l.jsx)(o.a,{children:"Ted"})})]}),t?Object(l.jsx)(s.a,{variant:"rectangular",width:"100%",children:Object(l.jsx)("div",{style:{paddingTop:"57%"}})}):Object(l.jsx)(m,{src:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",alt:""})]})}function p(){return Object(l.jsxs)(c.a,{container:!0,spacing:8,children:[Object(l.jsx)(c.a,{item:!0,xs:!0,children:Object(l.jsx)(d,{loading:!0})}),Object(l.jsx)(c.a,{item:!0,xs:!0,children:Object(l.jsx)(d,{})})]})}},2769:function(n,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\nimport PropTypes from 'prop-types';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Typography from '@mui/material/Typography';\nimport Avatar from '@mui/material/Avatar';\nimport Grid from '@mui/material/Grid';\nimport Skeleton from '@mui/material/Skeleton';\n\nconst Image = styled('img')({\n  width: '100%',\n});\n\nfunction SkeletonChildrenDemo(props) {\n  const { loading = false } = props;\n\n  return (\n    <div>\n      <Box sx={{ display: 'flex', alignItems: 'center' }}>\n        <Box sx={{ margin: 1 }}>\n          {loading ? (\n            <Skeleton variant=\"circular\">\n              <Avatar />\n            </Skeleton>\n          ) : (\n            <Avatar src=\"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg\" />\n          )}\n        </Box>\n        <Box sx={{ width: '100%' }}>\n          {loading ? (\n            <Skeleton width=\"100%\">\n              <Typography>.</Typography>\n            </Skeleton>\n          ) : (\n            <Typography>Ted</Typography>\n          )}\n        </Box>\n      </Box>\n      {loading ? (\n        <Skeleton variant=\"rectangular\" width=\"100%\">\n          <div style={{ paddingTop: '57%' }} />\n        </Skeleton>\n      ) : (\n        <Image\n          src=\"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512\"\n          alt=\"\"\n        />\n      )}\n    </div>\n  );\n}\n\nSkeletonChildrenDemo.propTypes = {\n  loading: PropTypes.bool,\n};\n\nexport default function SkeletonChildren() {\n  return (\n    <Grid container spacing={8}>\n      <Grid item xs>\n        <SkeletonChildrenDemo loading />\n      </Grid>\n      <Grid item xs>\n        <SkeletonChildrenDemo />\n      </Grid>\n    </Grid>\n  );\n}\n"},2770:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return r}));t(1);var a=t(1572),i=t(1389),o=t(0);function r(){return Object(o.jsx)(i.a,{sx:{bgcolor:"#121212",p:8,width:"100%",display:"flex",justifyContent:"center"},children:Object(o.jsx)(a.a,{sx:{bgcolor:"grey.900"},variant:"rectangular",width:210,height:118})})}},2771:function(n,e,t){"use strict";t.r(e),e.default="import * as React from 'react';\nimport Skeleton from '@mui/material/Skeleton';\nimport Box from '@mui/material/Box';\n\nexport default function SkeletonColor() {\n  return (\n    <Box\n      sx={{\n        bgcolor: '#121212',\n        p: 8,\n        width: '100%',\n        display: 'flex',\n        justifyContent: 'center',\n      }}\n    >\n      <Skeleton\n        sx={{ bgcolor: 'grey.900' }}\n        variant=\"rectangular\"\n        width={210}\n        height={118}\n      />\n    </Box>\n  );\n}\n"},3299:function(n,e,t){"use strict";t.r(e);var a=t(1383),i=t(168),o=t(1336),r=t(1327),c=t(222),s=t(0);e.default=function(n){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(s.jsxs)(o.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/skeleton",target:"_blank",role:"button",children:[Object(s.jsx)(r.a,{children:"link"}),Object(s.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(s.jsx)(c.a,{className:"text-40 my-16 font-700",component:"h1",children:"Skeleton"}),Object(s.jsx)(c.a,{className:"description",children:"Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration."}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["The data for your components might not be immediately available. You can improve the perceived responsiveness of the page by using skeletons. It feels like things are happening immediately, then the information is incrementally displayed on the screen (Cf."," ",Object(s.jsx)("a",{href:"https://www.lukew.com/ff/entry.asp?1797",children:"Avoid The Spinner"}),")."]}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Usage"}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["The component is designed to be used ",Object(s.jsx)("strong",{children:"directly in your components"}),". For instance:"]}),Object(s.jsx)(i.a,{component:"pre",className:"language-jsx",children:' \n{\n  item ? (\n    <img\n      style={{\n        width: 210,\n        height: 118,\n\n      alt={item.title}\n      src={item.src}\n    />\n  ) : (\n    <Skeleton variant="rectangular" width={210} height={118} />\n  );\n}\n'}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Variants"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:"The component supports 3 shape variants."}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2758).default,raw:t(2759)})}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Animations"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:"By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely."}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2760).default,raw:t(2761)})}),Object(s.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Pulsate example"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2762).default,raw:t(2763)})}),Object(s.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Wave example"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2764).default,raw:t(2765)})}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Inferring dimensions"}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["In addition to accepting ",Object(s.jsx)("code",{children:"width"})," and ",Object(s.jsx)("code",{children:"height"})," props, the component can also infer the dimensions."]}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["It works well when it comes to typography as its height is set using ",Object(s.jsx)("code",{children:"em"})," units."]}),Object(s.jsx)(i.a,{component:"pre",className:"language-jsx",children:" \n<Typography variant=\"h1\">{loading ? <Skeleton /> : 'h1'}</Typography>\n"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2766).default,raw:t(2767)})}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["But when it comes to other components, you may not want to repeat the width and height. In these instances, you can pass ",Object(s.jsx)("code",{children:"children"})," and it will infer its width and height from them."]}),Object(s.jsx)(i.a,{component:"pre",className:"language-jsx",children:' \nloading ? (\n  <Skeleton variant="circular">\n    <Avatar />\n  </Skeleton>\n) : (\n  <Avatar src={data.avatar} />\n);\n'}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2768).default,raw:t(2769)})}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Color"}),Object(s.jsxs)(c.a,{className:"mb-40",component:"div",children:["The color of the component can be customized by changing its ",Object(s.jsx)("code",{children:"background-color"})," ","CSS property. This is especially useful when on a black background (as the skeleton will otherwise be invisible)."]}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:Object(s.jsx)(a.a,{className:"my-24",iframe:!1,component:t(2770).default,raw:t(2771)})}),Object(s.jsx)(c.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:"Skeleton screens provide an alternative to the traditional spinner method. Rather than showing an abstract widget, skeleton screens create anticipation of what is to come and reduce cognitive load."}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:"The background color of the skeleton uses the least amount of luminance to be visible in good conditions (good ambient light, good screen, no visual impairments)."}),Object(s.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:"None."}),Object(s.jsx)(c.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),Object(s.jsx)(c.a,{className:"mb-40",component:"div",children:"The skeleton is not focusable."})]})}}}]);