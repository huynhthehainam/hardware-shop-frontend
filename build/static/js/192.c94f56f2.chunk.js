(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[192],{3334:function(e,n,t){"use strict";t.r(n);var a=t(168),o=t(222),r=t(0);n.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{variant:"h4",className:"mb-40 font-700",children:"Routing"}),Object(r.jsxs)(o.a,{className:"mb-16",component:"p",children:["Fuse React routing system based on"," ",Object(r.jsx)("a",{href:"https://reacttraining.com/react-router/",target:"_blank",rel:"noopener noreferrer",children:"react-router"})," ","and its package"," ",Object(r.jsx)("a",{href:"https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config",target:"_blank",rel:"noopener noreferrer",children:"react-router-config"}),"."]}),Object(r.jsx)(o.a,{className:"mb-16",component:"p",children:"For the modular approach and route based Fuse settings, we are using config files and generate routes from those files."}),Object(r.jsxs)(o.a,{className:"mb-16",component:"p",children:["For example, have a look at the code below",Object(r.jsx)("code",{children:"MailAppConfig.js"}),". You can override all settings for a particular route as"," ",Object(r.jsx)("code",{children:"/apps/mail"})," for this example."]}),Object(r.jsx)(a.a,{component:"pre",className:"language-jsx mb-32",children:"\n                            import MailApp from './MailApp';\n                            import {Redirect} from 'react-router-dom';\n\n                            export const MailAppConfig = {\n                                settings: {\n                                    layout          : {\n                                        style : 'layout1',\n                                        config: {\n                                            scroll : 'content',\n                                            navbar : {\n                                                display : true,\n                                                folded  : false,\n                                                position: 'left'\n                                            },\n                                            toolbar: {\n                                                display : true,\n                                                style   : 'fixed',\n                                                position: 'below'\n                                            },\n                                            footer : {\n                                                display : true,\n                                                style   : 'fixed',\n                                                position: 'below'\n                                            },\n                                            mode   : 'fullwidth'\n                                        }\n                                    },\n                                    customScrollbars: true,\n                                    theme           : {\n                                        main   : 'default',\n                                        navbar : 'mainThemeDark',\n                                        toolbar: 'mainThemeLight',\n                                        footer : 'mainThemeDark'\n                                    }\n                                },\n                                routes  : [\n                                    {\n                                        path     : '/apps/mail/label/:labelHandle/:mailId?',\n                                        component: MailApp\n                                    },\n                                    {\n                                        path     : '/apps/mail/filter/:filterHandle/:mailId?',\n                                        component: MailApp\n                                    },\n                                    {\n                                        path     : '/apps/mail/:folderHandle/:mailId?',\n                                        component: MailApp\n                                    },\n                                    {\n                                        path     : '/apps/mail',\n                                        component: () => <Redirect to=\"/apps/mail/inbox\"/>\n                                    }\n                                ]\n                            };\n                            "}),Object(r.jsxs)(o.a,{className:"mb-16",component:"p",children:["Then we import and generate routes from that file in ",Object(r.jsx)("code",{children:"fuse-configs/routesConfig"})]}),Object(r.jsx)(a.a,{component:"pre",className:"language-jsx mb-32",children:"\n                                import {appsRoutes} from 'app/main/apps/mail/MailAppConfig.js';\n                                import FuseUtils from '@fuse/utils';\n                                import {Redirect} from 'react-router-dom';\n\n                                const routeConfigs = [\n                                    MailAppConfig\n                                ];\n\n                                export const routes = [\n                                    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),\n                                    {\n                                        path     : '/',\n                                        component: () => <Redirect to=\"/pages/errors/error-404\"/>\n                                    }\n                                ];\n                            "})]})}}}]);