(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[178],{1803:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var a=s(17),c=s(200),n=s(6),r=s(1633),i=s.n(r),o=s(1),l=s(0);function d(e){var t=e.onComplete,s=Object(o.useState)(i.a.isMoment(e.endDate)?e.endDate:i()(e.endDate)),r=Object(a.a)(s,1)[0],d=Object(o.useState)({days:0,hours:0,minutes:0,seconds:0}),j=Object(a.a)(d,2),u=j[0],m=j[1],b=Object(o.useRef)(),x=Object(o.useCallback)((function(){window.clearInterval(b.current),t&&t()}),[t]),h=Object(o.useCallback)((function(){var e=i()(),t=r.diff(e,"seconds");if(t<0)x();else{var s=i.a.duration(t,"seconds");m({days:s.asDays().toFixed(0),hours:s.hours(),minutes:s.minutes(),seconds:s.seconds()})}}),[x,r]);return Object(o.useEffect)((function(){return b.current=setInterval(h,1e3),function(){clearInterval(b.current)}}),[h]),Object(l.jsxs)("div",{className:Object(n.default)("flex items-center",e.className),children:[Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(l.jsx)(c.a,{variant:"h4",className:"mb-4",children:u.days}),Object(l.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"days"})]}),Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(l.jsx)(c.a,{variant:"h4",className:"mb-4",children:u.hours}),Object(l.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"hours"})]}),Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(l.jsx)(c.a,{variant:"h4",className:"mb-4",children:u.minutes}),Object(l.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"minutes"})]}),Object(l.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[Object(l.jsx)(c.a,{variant:"h4",className:"mb-4",children:u.seconds}),Object(l.jsx)(c.a,{variant:"caption",color:"textSecondary",children:"seconds"})]})]})}d.defaultProps={endDate:i()().add(15,"days")};var j=Object(o.memo)(d)},3241:function(e,t,s){"use strict";s.r(t);var a=s(1803),c=s(168),n=s(200),r=s(43),i=s(0);t.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(n.a,{variant:"h4",className:"mb-40 font-700",children:"FuseCountdown"}),Object(i.jsxs)(n.a,{className:"mb-16",component:"p",children:[Object(i.jsx)("code",{children:"FuseCountdown"})," is a custom-built Fuse component that allows you to create countdowns."]}),Object(i.jsx)(n.a,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Usage"}),Object(i.jsx)(c.a,{component:"pre",className:"language-jsx",children:'\n                              <FuseCountdown endDate="2020-07-28" className="my-48"/>\n                            '}),Object(i.jsx)(n.a,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Preview"}),Object(i.jsx)(a.a,{endDate:"2020-07-28",className:"my-48"}),Object(i.jsx)(n.a,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Demos"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{className:"mb-8",children:Object(i.jsx)(r.a,{to:"/pages/coming-soon",children:"Coming Soon"})})})]})}}}]);