(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[76],{1385:function(e,a,n){"use strict";n.d(a,"a",(function(){return M}));var t=n(17),r=n(168),i=n(1340),o=n(1348),c=n(1330),s=n(1352),d=n(1353),l=n(6),m=n(1),p=n(8),u=n(127),h=n(100),j=n.n(h),x=n(504),b=n(210),f=n(97),g=n(1388),y=n(51),v=n(14),C=n(1297),O=n(0),w=["children","name"];function T(e){var a=e.children,n=e.document,t=Object(y.a)();m.useEffect((function(){n.body.dir=t.direction}),[n,t.direction]);var r=m.useMemo((function(){return Object(b.a)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:n.head,stylisPlugins:"rtl"===t.direction?[x.a]:[]})}),[n,t.direction]),i=m.useCallback((function(){return n.defaultView}),[n]);return Object(O.jsx)(g.a,{target:n.head,stylisPlugins:"rtl"===t.direction?[x.a]:[],children:Object(O.jsxs)(f.a,{value:r,children:[Object(O.jsx)(C.a,{styles:function(){return{html:{fontSize:"62.5%"}}}}),m.cloneElement(a,{window:i})]})})}var A=Object(v.a)("iframe")((function(e){var a=e.theme;return{backgroundColor:a.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:a.shadows[1]}}));function B(e){var a,n=e.children,r=e.name,i=Object(u.a)(e,w),o="".concat(r," demo"),c=m.useRef(null),s=m.useReducer((function(){return!0}),!1),d=Object(t.a)(s,2),l=d[0],h=d[1];m.useEffect((function(){var e=c.current.contentDocument;null==e||"complete"!==e.readyState||l||h()}),[l]);var x=null===(a=c.current)||void 0===a?void 0:a.contentDocument;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(A,Object(p.a)({onLoad:h,ref:c,title:o},i)),!1!==l?j.a.createPortal(Object(O.jsx)(T,{document:x,children:n}),x.body):null]})}var k=m.memo(B);function N(e){var a=Object(m.useState)(e.currentTabIndex),n=Object(t.a)(a,2),p=n[0],u=n[1],h=e.component,j=e.raw,x=e.iframe,b=e.className;return Object(O.jsxs)(o.a,{className:Object(l.default)(b,"shadow"),children:[Object(O.jsx)(i.a,{position:"static",color:"default",className:"shadow-0",children:Object(O.jsxs)(d.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,a){u(a)},children:[h&&Object(O.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(O.jsx)(c.a,{children:"remove_red_eye"})}),j&&Object(O.jsx)(s.a,{classes:{root:"min-w-64"},icon:Object(O.jsx)(c.a,{children:"code"})})]})}),Object(O.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[Object(O.jsx)("div",{className:0===p?"flex flex-1 max-w-full":"hidden",children:h&&(x?Object(O.jsx)(k,{children:Object(O.jsx)(h,{})}):Object(O.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:Object(O.jsx)(h,{})}))}),Object(O.jsx)("div",{className:1===p?"flex flex-1":"hidden",children:j&&Object(O.jsx)("div",{className:"flex flex-1",children:Object(O.jsx)(r.a,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:j.default})})})]})]})}N.defaultProps={currentTabIndex:0};var M=N},2252:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return m}));n(1);var t=n(1391),r=n(1348),i=n(1553),o=n(1350),c=n(1338),s=n(200),d=n(0),l=Object(d.jsx)(t.a,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"\u2022"});function m(){return Object(d.jsxs)(r.a,{sx:{minWidth:275},children:[Object(d.jsxs)(o.a,{children:[Object(d.jsx)(s.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),Object(d.jsxs)(s.a,{variant:"h5",component:"div",children:["be",l,"nev",l,"o",l,"lent"]}),Object(d.jsx)(s.a,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),Object(d.jsxs)(s.a,{variant:"body2",children:["well meaning and kindly.",Object(d.jsx)("br",{}),'"a benevolent smile"']})]}),Object(d.jsx)(i.a,{children:Object(d.jsx)(c.a,{size:"small",children:"Learn More"})})]})}},2253:function(e,a,n){"use strict";n.r(a),a.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Card from '@mui/material/Card';\nimport CardActions from '@mui/material/CardActions';\nimport CardContent from '@mui/material/CardContent';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\n\nconst bull = (\n  <Box\n    component=\"span\"\n    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}\n  >\n    \u2022\n  </Box>\n);\n\nexport default function BasicCard() {\n  return (\n    <Card sx={{ minWidth: 275 }}>\n      <CardContent>\n        <Typography sx={{ fontSize: 14 }} color=\"text.secondary\" gutterBottom>\n          Word of the Day\n        </Typography>\n        <Typography variant=\"h5\" component=\"div\">\n          be{bull}nev{bull}o{bull}lent\n        </Typography>\n        <Typography sx={{ mb: 1.5 }} color=\"text.secondary\">\n          adjective\n        </Typography>\n        <Typography variant=\"body2\">\n          well meaning and kindly.\n          <br />\n          {'\"a benevolent smile\"'}\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button size=\"small\">Learn More</Button>\n      </CardActions>\n    </Card>\n  );\n}\n"},2254:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return u}));var t=n(1),r=n(1391),i=n(1348),o=n(1553),c=n(1350),s=n(1338),d=n(200),l=n(0),m=Object(l.jsx)(r.a,{component:"span",sx:{display:"inline-block",mx:"2px",transform:"scale(0.8)"},children:"\u2022"}),p=Object(l.jsxs)(t.Fragment,{children:[Object(l.jsxs)(c.a,{children:[Object(l.jsx)(d.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Word of the Day"}),Object(l.jsxs)(d.a,{variant:"h5",component:"div",children:["be",m,"nev",m,"o",m,"lent"]}),Object(l.jsx)(d.a,{sx:{mb:1.5},color:"text.secondary",children:"adjective"}),Object(l.jsxs)(d.a,{variant:"body2",children:["well meaning and kindly.",Object(l.jsx)("br",{}),'"a benevolent smile"']})]}),Object(l.jsx)(o.a,{children:Object(l.jsx)(s.a,{size:"small",children:"Learn More"})})]});function u(){return Object(l.jsx)(r.a,{sx:{minWidth:275},children:Object(l.jsx)(i.a,{variant:"outlined",children:p})})}},2255:function(e,a,n){"use strict";n.r(a),a.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Card from '@mui/material/Card';\nimport CardActions from '@mui/material/CardActions';\nimport CardContent from '@mui/material/CardContent';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\n\nconst bull = (\n  <Box\n    component=\"span\"\n    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}\n  >\n    \u2022\n  </Box>\n);\n\nconst card = (\n  <React.Fragment>\n    <CardContent>\n      <Typography sx={{ fontSize: 14 }} color=\"text.secondary\" gutterBottom>\n        Word of the Day\n      </Typography>\n      <Typography variant=\"h5\" component=\"div\">\n        be{bull}nev{bull}o{bull}lent\n      </Typography>\n      <Typography sx={{ mb: 1.5 }} color=\"text.secondary\">\n        adjective\n      </Typography>\n      <Typography variant=\"body2\">\n        well meaning and kindly.\n        <br />\n        {'\"a benevolent smile\"'}\n      </Typography>\n    </CardContent>\n    <CardActions>\n      <Button size=\"small\">Learn More</Button>\n    </CardActions>\n  </React.Fragment>\n);\n\nexport default function OutlinedCard() {\n  return (\n    <Box sx={{ minWidth: 275 }}>\n      <Card variant=\"outlined\">{card}</Card>\n    </Box>\n  );\n}\n"},2256:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return N}));var t=n(17),r=n(8),i=n(127),o=n(1),c=n(14),s=n(1348),d=n(1560),l=n(1585),m=n(1350),p=n(1553),u=n(776),h=n(1355),j=n(1331),x=n(200),b=n(179),f=n(1533),g=n.n(f),y=n(1648),v=n.n(y),C=n(1471),O=n.n(C),w=n(1616),T=n.n(w),A=n(0),B=["expand"],k=Object(c.a)((function(e){e.expand;var a=Object(i.a)(e,B);return Object(A.jsx)(j.a,Object(r.a)({},a))}))((function(e){var a=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest})}}));function N(){var e=o.useState(!1),a=Object(t.a)(e,2),n=a[0],r=a[1];return Object(A.jsxs)(s.a,{sx:{maxWidth:345},children:[Object(A.jsx)(d.a,{avatar:Object(A.jsx)(h.a,{sx:{bgcolor:b.a[500]},"aria-label":"recipe",children:"R"}),action:Object(A.jsx)(j.a,{"aria-label":"settings",children:Object(A.jsx)(T.a,{})}),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),Object(A.jsx)(l.a,{component:"img",height:"194",image:"/material-ui-static/images/cards/paella.jpg",alt:"Paella dish"}),Object(A.jsx)(m.a,{children:Object(A.jsx)(x.a,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),Object(A.jsxs)(p.a,{disableSpacing:!0,children:[Object(A.jsx)(j.a,{"aria-label":"add to favorites",children:Object(A.jsx)(g.a,{})}),Object(A.jsx)(j.a,{"aria-label":"share",children:Object(A.jsx)(v.a,{})}),Object(A.jsx)(k,{expand:n,onClick:function(){r(!n)},"aria-expanded":n,"aria-label":"show more",children:Object(A.jsx)(O.a,{})})]}),Object(A.jsx)(u.a,{in:n,timeout:"auto",unmountOnExit:!0,children:Object(A.jsxs)(m.a,{children:[Object(A.jsx)(x.a,{paragraph:!0,children:"Method:"}),Object(A.jsx)(x.a,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),Object(A.jsx)(x.a,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),Object(A.jsx)(x.a,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"}),Object(A.jsx)(x.a,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})}},2257:function(e,a,n){"use strict";n.r(a),a.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Card from '@mui/material/Card';\nimport CardHeader from '@mui/material/CardHeader';\nimport CardMedia from '@mui/material/CardMedia';\nimport CardContent from '@mui/material/CardContent';\nimport CardActions from '@mui/material/CardActions';\nimport Collapse from '@mui/material/Collapse';\nimport Avatar from '@mui/material/Avatar';\nimport IconButton from '@mui/material/IconButton';\nimport Typography from '@mui/material/Typography';\nimport { red } from '@mui/material/colors';\nimport FavoriteIcon from '@mui/icons-material/Favorite';\nimport ShareIcon from '@mui/icons-material/Share';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\nimport MoreVertIcon from '@mui/icons-material/MoreVert';\n\nconst ExpandMore = styled((props) => {\n  const { expand, ...other } = props;\n  return <IconButton {...other} />;\n})(({ theme, expand }) => ({\n  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',\n  marginLeft: 'auto',\n  transition: theme.transitions.create('transform', {\n    duration: theme.transitions.duration.shortest,\n  }),\n}));\n\nexport default function RecipeReviewCard() {\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleExpandClick = () => {\n    setExpanded(!expanded);\n  };\n\n  return (\n    <Card sx={{ maxWidth: 345 }}>\n      <CardHeader\n        avatar={\n          <Avatar sx={{ bgcolor: red[500] }} aria-label=\"recipe\">\n            R\n          </Avatar>\n        }\n        action={\n          <IconButton aria-label=\"settings\">\n            <MoreVertIcon />\n          </IconButton>\n        }\n        title=\"Shrimp and Chorizo Paella\"\n        subheader=\"September 14, 2016\"\n      />\n      <CardMedia\n        component=\"img\"\n        height=\"194\"\n        image=\"/material-ui-static/images/cards/paella.jpg\"\n        alt=\"Paella dish\"\n      />\n      <CardContent>\n        <Typography variant=\"body2\" color=\"text.secondary\">\n          This impressive paella is a perfect party dish and a fun meal to cook\n          together with your guests. Add 1 cup of frozen peas along with the mussels,\n          if you like.\n        </Typography>\n      </CardContent>\n      <CardActions disableSpacing>\n        <IconButton aria-label=\"add to favorites\">\n          <FavoriteIcon />\n        </IconButton>\n        <IconButton aria-label=\"share\">\n          <ShareIcon />\n        </IconButton>\n        <ExpandMore\n          expand={expanded}\n          onClick={handleExpandClick}\n          aria-expanded={expanded}\n          aria-label=\"show more\"\n        >\n          <ExpandMoreIcon />\n        </ExpandMore>\n      </CardActions>\n      <Collapse in={expanded} timeout=\"auto\" unmountOnExit>\n        <CardContent>\n          <Typography paragraph>Method:</Typography>\n          <Typography paragraph>\n            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set\n            aside for 10 minutes.\n          </Typography>\n          <Typography paragraph>\n            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over\n            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring\n            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a\n            large plate and set aside, leaving chicken and chorizo in the pan. Add\n            piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,\n            stirring often until thickened and fragrant, about 10 minutes. Add\n            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.\n          </Typography>\n          <Typography paragraph>\n            Add rice and stir very gently to distribute. Top with artichokes and\n            peppers, and cook without stirring, until most of the liquid is absorbed,\n            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and\n            mussels, tucking them down into the rice, and cook again without\n            stirring, until mussels have opened and rice is just tender, 5 to 7\n            minutes more. (Discard any mussels that don\u2019t open.)\n          </Typography>\n          <Typography>\n            Set aside off of the heat to let rest for 10 minutes, and then serve.\n          </Typography>\n        </CardContent>\n      </Collapse>\n    </Card>\n  );\n}\n"},2258:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return l}));n(1);var t=n(1348),r=n(1553),i=n(1350),o=n(1585),c=n(1338),s=n(200),d=n(0);function l(){return Object(d.jsxs)(t.a,{sx:{maxWidth:345},children:[Object(d.jsx)(o.a,{component:"img",height:"140",image:"/material-ui-static/images/cards/contemplative-reptile.jpg",alt:"green iguana"}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),Object(d.jsx)(s.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]}),Object(d.jsxs)(r.a,{children:[Object(d.jsx)(c.a,{size:"small",children:"Share"}),Object(d.jsx)(c.a,{size:"small",children:"Learn More"})]})]})}},2259:function(e,a,n){"use strict";n.r(a),a.default='import * as React from \'react\';\nimport Card from \'@mui/material/Card\';\nimport CardActions from \'@mui/material/CardActions\';\nimport CardContent from \'@mui/material/CardContent\';\nimport CardMedia from \'@mui/material/CardMedia\';\nimport Button from \'@mui/material/Button\';\nimport Typography from \'@mui/material/Typography\';\n\nexport default function MediaCard() {\n  return (\n    <Card sx={{ maxWidth: 345 }}>\n      <CardMedia\n        component="img"\n        height="140"\n        image="/material-ui-static/images/cards/contemplative-reptile.jpg"\n        alt="green iguana"\n      />\n      <CardContent>\n        <Typography gutterBottom variant="h5" component="div">\n          Lizard\n        </Typography>\n        <Typography variant="body2" color="text.secondary">\n          Lizards are a widespread group of squamate reptiles, with over 6,000\n          species, ranging across all continents except Antarctica\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button size="small">Share</Button>\n        <Button size="small">Learn More</Button>\n      </CardActions>\n    </Card>\n  );\n}\n'},2260:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return l}));n(1);var t=n(1348),r=n(1553),i=n(1350),o=n(1585),c=n(1338),s=n(200),d=n(0);function l(){return Object(d.jsxs)(t.a,{sx:{maxWidth:345},children:[Object(d.jsx)(o.a,{component:"img",alt:"green iguana",height:"140",image:"/material-ui-static/images/cards/contemplative-reptile.jpg"}),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),Object(d.jsx)(s.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]}),Object(d.jsxs)(r.a,{children:[Object(d.jsx)(c.a,{size:"small",children:"Share"}),Object(d.jsx)(c.a,{size:"small",children:"Learn More"})]})]})}},2261:function(e,a,n){"use strict";n.r(a),a.default='import * as React from \'react\';\nimport Card from \'@mui/material/Card\';\nimport CardActions from \'@mui/material/CardActions\';\nimport CardContent from \'@mui/material/CardContent\';\nimport CardMedia from \'@mui/material/CardMedia\';\nimport Button from \'@mui/material/Button\';\nimport Typography from \'@mui/material/Typography\';\n\nexport default function ImgMediaCard() {\n  return (\n    <Card sx={{ maxWidth: 345 }}>\n      <CardMedia\n        component="img"\n        alt="green iguana"\n        height="140"\n        image="/material-ui-static/images/cards/contemplative-reptile.jpg"\n      />\n      <CardContent>\n        <Typography gutterBottom variant="h5" component="div">\n          Lizard\n        </Typography>\n        <Typography variant="body2" color="text.secondary">\n          Lizards are a widespread group of squamate reptiles, with over 6,000\n          species, ranging across all continents except Antarctica\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button size="small">Share</Button>\n        <Button size="small">Learn More</Button>\n      </CardActions>\n    </Card>\n  );\n}\n'},2262:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return d}));n(1);var t=n(1348),r=n(1350),i=n(1585),o=n(200),c=n(1605),s=n(0);function d(){return Object(s.jsx)(t.a,{sx:{maxWidth:345},children:Object(s.jsxs)(c.a,{children:[Object(s.jsx)(i.a,{component:"img",height:"140",image:"/material-ui-static/images/cards/contemplative-reptile.jpg",alt:"green iguana"}),Object(s.jsxs)(r.a,{children:[Object(s.jsx)(o.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),Object(s.jsx)(o.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]})})}},2263:function(e,a,n){"use strict";n.r(a),a.default='import * as React from \'react\';\nimport Card from \'@mui/material/Card\';\nimport CardContent from \'@mui/material/CardContent\';\nimport CardMedia from \'@mui/material/CardMedia\';\nimport Typography from \'@mui/material/Typography\';\nimport CardActionArea from \'@mui/material/CardActionArea\';\n\nexport default function ActionAreaCard() {\n  return (\n    <Card sx={{ maxWidth: 345 }}>\n      <CardActionArea>\n        <CardMedia\n          component="img"\n          height="140"\n          image="/material-ui-static/images/cards/contemplative-reptile.jpg"\n          alt="green iguana"\n        />\n        <CardContent>\n          <Typography gutterBottom variant="h5" component="div">\n            Lizard\n          </Typography>\n          <Typography variant="body2" color="text.secondary">\n            Lizards are a widespread group of squamate reptiles, with over 6,000\n            species, ranging across all continents except Antarctica\n          </Typography>\n        </CardContent>\n      </CardActionArea>\n    </Card>\n  );\n}\n'},2264:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return m}));n(1);var t=n(1348),r=n(1350),i=n(1585),o=n(200),c=n(1338),s=n(1605),d=n(1553),l=n(0);function m(){return Object(l.jsxs)(t.a,{sx:{maxWidth:345},children:[Object(l.jsxs)(s.a,{children:[Object(l.jsx)(i.a,{component:"img",height:"140",image:"/material-ui-static/images/cards/contemplative-reptile.jpg",alt:"green iguana"}),Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),Object(l.jsx)(o.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(l.jsx)(d.a,{children:Object(l.jsx)(c.a,{size:"small",color:"primary",children:"Share"})})]})}},2265:function(e,a,n){"use strict";n.r(a),a.default='import * as React from \'react\';\nimport Card from \'@mui/material/Card\';\nimport CardContent from \'@mui/material/CardContent\';\nimport CardMedia from \'@mui/material/CardMedia\';\nimport Typography from \'@mui/material/Typography\';\nimport Button from \'@mui/material/Button\';\nimport CardActionArea  from \'@mui/material/CardActionArea\';\nimport CardActions  from \'@mui/material/CardActions\';\n\nexport default function MultiActionAreaCard() {\n  return (\n    <Card sx={{ maxWidth: 345 }}>\n      <CardActionArea>\n        <CardMedia\n          component="img"\n          height="140"\n          image="/material-ui-static/images/cards/contemplative-reptile.jpg"\n          alt="green iguana"\n        />\n        <CardContent>\n          <Typography gutterBottom variant="h5" component="div">\n            Lizard\n          </Typography>\n          <Typography variant="body2" color="text.secondary">\n            Lizards are a widespread group of squamate reptiles, with over 6,000\n            species, ranging across all continents except Antarctica\n          </Typography>\n        </CardContent>\n      </CardActionArea>\n      <CardActions>\n        <Button size="small" color="primary">\n          Share\n        </Button>\n      </CardActions>\n    </Card>\n  );\n}\n'},2266:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return b}));n(1);var t=n(51),r=n(1391),i=n(1348),o=n(1350),c=n(1585),s=n(1331),d=n(200),l=n(2268),m=n.n(l),p=n(2269),u=n.n(p),h=n(2267),j=n.n(h),x=n(0);function b(){var e=Object(t.a)();return Object(x.jsxs)(i.a,{sx:{display:"flex"},children:[Object(x.jsxs)(r.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(x.jsxs)(o.a,{sx:{flex:"1 0 auto"},children:[Object(x.jsx)(d.a,{component:"div",variant:"h5",children:"Live From Space"}),Object(x.jsx)(d.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}),Object(x.jsxs)(r.a,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},children:[Object(x.jsx)(s.a,{"aria-label":"previous",children:"rtl"===e.direction?Object(x.jsx)(j.a,{}):Object(x.jsx)(m.a,{})}),Object(x.jsx)(s.a,{"aria-label":"play/pause",children:Object(x.jsx)(u.a,{sx:{height:38,width:38}})}),Object(x.jsx)(s.a,{"aria-label":"next",children:"rtl"===e.direction?Object(x.jsx)(m.a,{}):Object(x.jsx)(j.a,{})})]})]}),Object(x.jsx)(c.a,{component:"img",sx:{width:151},image:"/material-ui-static/images/cards/live-from-space.jpg",alt:"Live from space album cover"})]})}},2270:function(e,a,n){"use strict";n.r(a),a.default="import * as React from 'react';\nimport { useTheme } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport Card from '@mui/material/Card';\nimport CardContent from '@mui/material/CardContent';\nimport CardMedia from '@mui/material/CardMedia';\nimport IconButton from '@mui/material/IconButton';\nimport Typography from '@mui/material/Typography';\nimport SkipPreviousIcon from '@mui/icons-material/SkipPrevious';\nimport PlayArrowIcon from '@mui/icons-material/PlayArrow';\nimport SkipNextIcon from '@mui/icons-material/SkipNext';\n\nexport default function MediaControlCard() {\n  const theme = useTheme();\n\n  return (\n    <Card sx={{ display: 'flex' }}>\n      <Box sx={{ display: 'flex', flexDirection: 'column' }}>\n        <CardContent sx={{ flex: '1 0 auto' }}>\n          <Typography component=\"div\" variant=\"h5\">\n            Live From Space\n          </Typography>\n          <Typography variant=\"subtitle1\" color=\"text.secondary\" component=\"div\">\n            Mac Miller\n          </Typography>\n        </CardContent>\n        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>\n          <IconButton aria-label=\"previous\">\n            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}\n          </IconButton>\n          <IconButton aria-label=\"play/pause\">\n            <PlayArrowIcon sx={{ height: 38, width: 38 }} />\n          </IconButton>\n          <IconButton aria-label=\"next\">\n            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}\n          </IconButton>\n        </Box>\n      </Box>\n      <CardMedia\n        component=\"img\"\n        sx={{ width: 151 }}\n        image=\"/material-ui-static/images/cards/live-from-space.jpg\"\n        alt=\"Live from space album cover\"\n      />\n    </Card>\n  );\n}\n"},3260:function(e,a,n){"use strict";n.r(a);var t=n(1385),r=n(1338),i=n(1330),o=n(200),c=n(0);a.default=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"flex flex-1 flex-grow-0 items-center justify-end",children:Object(c.jsxs)(r.a,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/cards",target:"_blank",role:"button",children:[Object(c.jsx)(i.a,{children:"link"}),Object(c.jsx)("span",{className:"mx-4",children:"Reference"})]})}),Object(c.jsx)(o.a,{className:"text-40 my-16 font-700",component:"h1",children:"Card"}),Object(c.jsx)(o.a,{className:"description",children:"Cards contain content and actions about a single subject."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"Cards are surfaces that display content and actions on a single topic."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic card"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(t.a,{className:"my-24",iframe:!1,component:n(2252).default,raw:n(2253)})}),Object(c.jsx)(o.a,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Outlined Card"}),Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["Set ",Object(c.jsx)("code",{children:'variant="outlined"'})," to render an outlined card."]}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(t.a,{className:"my-24",iframe:!1,component:n(2254).default,raw:n(2255)})}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Complex Interaction"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"On desktop, card content can expand. (Click the downward chevron to view the recipe.)"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(t.a,{className:"my-24",iframe:!1,component:n(2256).default,raw:n(2257)})}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Media"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"Example of a card using an image to reinforce the content."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(t.a,{className:"my-24",iframe:!1,component:n(2258).default,raw:n(2259)})}),Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["By default, we use the combination of a ",Object(c.jsx)("code",{children:"<div>"})," element and a"," ",Object(c.jsx)("em",{children:"background image"})," to display the media. It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the"," ",Object(c.jsx)("code",{children:"component"})," prop for these use cases:"]}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(t.a,{className:"my-24",iframe:!1,component:n(2260).default,raw:n(2261)})}),Object(c.jsx)("blockquote",{children:Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["\u26a0\ufe0f When ",Object(c.jsx)("code",{children:'component="img"'}),", CardMedia relies on ",Object(c.jsx)("code",{children:"object-fit"})," for centering the image. It's not supported by IE11."]})}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Primary action"}),Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a ",Object(c.jsx)("code",{children:"CardActionArea"})," ","component."]}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(t.a,{className:"my-24",iframe:!1,component:n(2262).default,raw:n(2263)})}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"A card can also offer supplemental actions which should stand detached from the main action area in order to avoid event overlap."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(t.a,{className:"my-24",iframe:!1,component:n(2264).default,raw:n(2265)})}),Object(c.jsx)(o.a,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"UI Controls"}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:"Here's an example of a media control card."}),Object(c.jsx)(o.a,{className:"mb-40",component:"div",children:Object(c.jsx)(t.a,{className:"my-24",iframe:!1,component:n(2266).default,raw:n(2270)})}),Object(c.jsxs)(o.a,{className:"mb-40",component:"div",children:["\ud83c\udfa8 If you are looking for inspiration, you can check"," ",Object(c.jsx)("a",{href:"https://mui-treasury.com/components/card",children:"MUI Treasury's customization examples"}),"."]})]})}}}]);