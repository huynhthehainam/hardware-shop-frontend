(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[16],{3190:function(e,a,t){"use strict";t.r(a),t.d(a,"fuseReactLatestVersion",(function(){return b}));var n=t(8),d=t(222),s=t(1346),o=t(14),i=t(58),r=t(166),c=t(165),l=t(178),p=t(6),u=t(0),h=Object(o.a)("div")((function(e){e.theme;var a=e.value;return Object(n.a)(Object(n.a)(Object(n.a)({display:"inline-flex",fontSize:14,fontWeight:700,color:"#FFF",lineHeight:1,padding:"4px 12px",borderRadius:4},"new"===a&&{backgroundColor:r.a[50],color:Object(i.a)(r.a[500],.8)}),"fix"===a&&{backgroundColor:c.a[50],color:Object(i.a)(c.a[500],.8)}),"breaking"===a&&{backgroundColor:l.a[50],color:Object(i.a)(l.a[500],.8)})}));function g(e){return Object(u.jsxs)(s.a,{className:Object(p.default)("py-24 px-32 shadow",e.className),children:[Object(u.jsxs)("div",{className:"flex items-center",children:[e.version&&Object(u.jsx)(d.a,{className:"text-24 font-700",component:"h2",children:"v".concat(e.version)}),e.date&&Object(u.jsxs)(d.a,{className:"text-17 mx-8 font-600",color:"textSecondary",component:"h3",children:["(",e.date,")"]})]}),e.newChanges.length>0&&Object(u.jsxs)("div",{className:"mt-40",children:[Object(u.jsx)(h,{value:"new",children:"New"}),Object(u.jsx)("ul",{className:"my-16 px-24 list-disc",children:e.newChanges.map((function(e,a){return Object(u.jsx)("li",{className:"mb-6",children:Object(u.jsx)(d.a,{children:e})},a)}))})]}),e.fixedChanges.length>0&&Object(u.jsxs)("div",{className:"mt-40",children:[Object(u.jsx)(h,{value:"fix",children:"Fixed"}),Object(u.jsx)("ul",{className:"my-16 px-24 list-disc",children:e.fixedChanges.map((function(e,a){return Object(u.jsx)("li",{className:"mb-6",children:Object(u.jsx)(d.a,{children:e})},a)}))})]}),e.breakingChanges.length>0&&Object(u.jsxs)("div",{className:"mt-40",children:[Object(u.jsx)(h,{value:"breaking",children:"Breaking Changes"}),Object(u.jsx)("ul",{className:"my-16 px-24 list-disc",children:e.breakingChanges.map((function(e,a){return Object(u.jsx)("li",{className:"mb-6",children:Object(u.jsx)(d.a,{children:e})},a)}))})]}),e.notes]})}g.defaultProps={version:null,date:null,newChanges:[],fixedChanges:[],breakingChanges:[],notes:null};var m=g,f=[{version:"7.0.1",date:"2021-10-30",newChanges:["material-ui updated to v5.0.2","tailwindcss updated to v2.2.16","All dependency packages updated.","Codebase improved, minor fixes."]},{version:"7.0.0",date:"2021-09-22",newChanges:["material-ui migrated from v4 to v5","All dependency packages updated.","Codebase improved."],breakingChanges:["Switched yarn to npm.","react-charjs2, Formsy libraries not support anymore.","FuseAnimate, FuseGroupAnimate, FuseChipSelect Components are deprecated."],notes:Object(u.jsx)("div",{className:"text-14 p-24 border-2 rounded-16 w-full max-w-lg mt-40 mb-24",children:Object(u.jsxs)("ul",{className:"list-disc",children:[Object(u.jsx)(d.a,{component:"li",className:"leading-loose mb-16",children:"Migrating to the new major version (v7.0.0) can be difficult because of latest material-ui (v5) integration."}),Object(u.jsxs)(d.a,{component:"li",className:"leading-loose",children:["You should migrate to material v5 to get the benefits of bug fixes and a lot of improvements such as the new styling engine. Checkout material-ui migration guide at"," ",Object(u.jsx)("a",{href:"https://mui.com/guides/migration-v4",target:"_blank",rel:"noopener noreferrer",children:"https://mui.com/guides/migration-v4/"})]})]})})},{version:"6.2.0",date:"2021-08-13",newChanges:["material-ui updated to v4.12.3","tailwindcss updated to v2.2.7","All dependency packages updated.","prettier config (.prettierrc) moved into eslint configuration file.","Code formatting matched with Airbnb's style guide, eslint configuration file updated, code re-formatted."],fixedChanges:["Chrome's autofill background color removed."]},{version:"6.1.4",date:"2021-06-12",fixedChanges:["ChatPanel responsive positioning.","Main Theme light or Main Theme Dark values shouldn't be listed in main theme select."]},{version:"6.1.3",date:"2021-06-03",fixedChanges:["ChatPanel doesn't render correctly after changing the layout and reloading the page."]},{version:"6.1.2",date:"2021-06-03",newChanges:["All dependency packages updated."]},{version:"6.1.1",date:"2021-04-07",newChanges:["jss, jss-plugin-extend updated to v10.6.0"],fixedChanges:["Page layouts inner scroll issue."]},{version:"6.1.0",date:"2021-04-07",newChanges:[Object(u.jsxs)(u.Fragment,{children:["react-hook-form migrated v6 to v7, ",Object(u.jsx)("br",{}),"- Checkout migration guide at:"," ",Object(u.jsx)("a",{href:"https://react-hook-form.com/migrate-v6-to-v7/",target:"_blank",rel:"noopener noreferrer",children:"https://react-hook-form.com/migrate-v6-to-v7"})]}),"tailwindcss updated to v2.1.0"],fixedChanges:["Yarn2 pnp warnings resolved."]},{version:"6.0.0",date:"2021-04-02",newChanges:["Calendar App: react-big-calendar changed with fullCalendar/react","draft-js and react-draft-wysiwyg added, an example created at mail compose form.","croco added to extend webpack config.","tailwindcss moved inside postcss config with croco.","framer-motion added, all Animations migrated to framer-motion.","Charts changed from 'react-chartjs-2' to 'react-apexcharts'","All forms changed with react-hook-form, yup is used for form validation.","The theme design refreshed with more modern approach.","redux serializableCheck middleware disabled by default for development performance concerns.","Default theme color scheme changed","Default font changed to 'Poppins'","All theme layouts updated, now body scroll is default.","Theme vertical-layout-1 has new navigation styles (Slide, Tabbed, Tabbed dense, folded).","redux-logger configuration: collapse all except errors on dev console.","Unnecessary React imports removed.","Notification Panel created.","AdjustFontSize toolbar component created.","react updated to v17.0.2","react-scripts updated to v4.0.3","material-ui updated to v4.11.3","All dependency packages updated."]},{version:"5.3.1",date:"2021-01-15",newChanges:["material-ui updated to v4.11.2","All dependency packages updated.","Minor design refinements.","Reset the whole redux store when user logged out.","reportWebVitals added.","data Model classes changed with function versions."],fixedChanges:["FuseChipSelect empty input height."]},{version:"5.3.0",date:"2020-12-02",newChanges:["tailwindcss updated to v2","material-ui updated to v4.11.1","All dependency packages updated.","E-Commerce App: Removing items functionality added into the Products and Orders Table. No result message created for non existed product/order page routes.","Smooth shadows: Material design shadows changed with tailwindcss classes."],fixedChanges:["NotesApp dialog do not close when item removed."]},{version:"5.2.1",date:"2020-11-19",fixedChanges:["ClickAwayListener included components not work."]},{version:"5.2.0",date:"2020-11-17",newChanges:["react updated to v17.0.1,","E-commerce App: showing loading indicator while fetching products/orders table data.","NavbarFoldedToggleButton icon changed with push_pin","FuseSearch: placeholder and noResults props added for localization.","material ui icons updated and all variations added for to choose from.","Mobile refinements: Drawer components changed with SwipeableDrawer, react-swipeable library added.","Native scrollbar styles updated.","tailwindcss updated to v1.9.6","All dependency packages updated."],fixedChanges:["Language change dispatching should be called in the callback of the i18n.changeLanguage","firebase individual SDK import error."],breakingChanges:["customScrollbars disabled by default due to performance reasons on development.","tailwind.config.js updated.","redux-toolkit immutableCheck middleware disabled by default for development performance.","material ui icon fonts import location changed, checkout public/index.html"]},{version:"5.1.0",date:"2020-09-09",newChanges:["FullScreenToggle added into the theme toolbars,","i18nSlice created to store current language in redux store. changeLanguage action created and used in LanguageSwitcher.js","Adjustments for better responsive design","tailwindcss updated to v1.8.6","All dependency packages updated."],fixedChanges:["FuseDialog and FuseMessage actions added into serializableCheck ignoredActions list.","ScrumboardApp: non-existent board redirect error fixed.","Formsy components missing color attribute added.","theme layout footer cannot scroll on mobile.","FuseSearch, FuseShortcuts cannot find translated navigation item, translation process moved into the redux store."]},{version:"5.0.0",date:"2020-07-18",newChanges:[Object(u.jsxs)(u.Fragment,{children:["Migrated to the"," ",Object(u.jsx)("a",{href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux-toolkit"})," ","(Official Redux library)'"]}),"Theme Color Schemes updated","Color Schemes selection added into the SettingsPanel","New Documentation layout created, and content updated.","Default highlighting added to external links ('a.link, a:not([role=button])[target=_blank]').","New Login/Register page added (LaginPage3, RegisterPage3) default login/register pages updated.","Style changes applied for better theming","material-ui updated to v4.11","All dependency packages updated."],notes:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{className:"text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16",component:"div",children:"Migrating to the new major version (v5.0.0) can be difficult because of redux-toolkit integration."}),Object(u.jsxs)(d.a,{className:"text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16 leading-loose",component:"div",children:["Some of the benefits of the redux-toolkit,",Object(u.jsxs)("ul",{className:"list-disc ml-16",children:[Object(u.jsx)("li",{children:"redux-toolkit is an official redux library."}),Object(u.jsx)("li",{children:"The common redux dependencies included in the library"}),Object(u.jsxs)("ul",{className:"ml-8",children:[Object(u.jsx)("li",{children:'"immer": "^7.0.3",'}),Object(u.jsx)("li",{children:'"redux": "^4.0.0",'}),Object(u.jsx)("li",{children:'"redux-thunk": "^2.3.0",'}),Object(u.jsx)("li",{children:'"reselect": "^4.0.0"'})]}),Object(u.jsxs)("li",{children:["RTK resolves many of the arguments related to boilerplate and unnecessary code.",Object(u.jsx)("br",{}),Object(u.jsxs)("ul",{className:"ml-8",children:["As mentioned in its official docs, it helps to solve three major problems people had with Redux:",Object(u.jsx)("li",{children:"\u201cConfiguring a Redux store is too complicated.\u201d"}),Object(u.jsx)("li",{children:"\u201cI have to add a lot of packages to get Redux to do anything useful.\u201d"}),Object(u.jsx)("li",{children:"\u201cRedux requires too much boilerplate code.\u201d"})]})]}),Object(u.jsx)("li",{children:"It makes writing redux easier with the best practices. - Includes popular middlewares by default (redux-immutable-state-invariant, serializable-state-invariant-middleware thunk)"}),Object(u.jsx)("li",{children:"Redux DevTools are supported by default and with a simple flag true or false - With the CreateSlice function, you don't always have to define action type, action, and reducer separately."}),Object(u.jsx)("li",{children:"It's possible to mutate state with included ImmerJS."}),Object(u.jsxs)("li",{children:["With the help of another included library Reselect, the performance can be improved.",Object(u.jsx)("br",{}),"- createEntityAdapter function generates a set of prebuilt reducers and selectors for performing CRUD operations more easily."]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"With the changes, We've removed ~57 redux related files from the fuse-react."})]})]})},{version:"4.1.6",date:"2020-05-28",newChanges:["material-ui updated to v4.10","tailwindcss updated to v1.4.6","All dependency packages updated."],fixedChanges:["Tooltip z-index issue."]},{version:"4.1.5",date:"2020-04-16",newChanges:["material-ui updated to v4.9.10","react updated to v16.13.1","All dependency packages updated.","hide/reveal button added to password input at the login page."]},{version:"4.1.1",date:"2020-03-14",newChanges:["important note added into the installation doc for to prevent yarn v2 issues."],fixedChanges:["Possible yarn, yarn2 package manager issues."]},{version:"4.1.0",date:"2020-03-13",newChanges:["react updated to v16.13.0","react-table updated to v7, also react-table docs and Contacts App table updated.","formsy-react and its HOC`s updated","material-ui updated to v4.9.5","All dependency packages updated.","performance improvements.","input autofill backgroundColor changed to transparent."],fixedChanges:["FuseChipSelect error highligting."]},{version:"4.0.1",date:"2020-02-16",fixedChanges:["react-scripts updated to v3.4.0 which is minor release and included mostly bug fixes."]},{version:"4.0.0",date:"2020-02-10",newChanges:["Eslint, Prettier configuration based on Airbnb javascript style guide.","Yarn v2 (package-manager) support",".yarnrc.yml created for to resolve dependency issues (missing dependencies etc) for PnP","IDEs (Webstorm, VSCode) titled documentation created.","Toggle animations setting added.","Codebase improved.","material-ui updated to v4.9.1","All dependency packages updated."],fixedChanges:["Mutation fixed on route settings.","Circular Dependency issues.","RTL FuseScrollbars issue solved."],breakingChanges:[Object(u.jsxs)("span",{children:["Bundle Size optimizations: top level imports changed with path imports:",Object(u.jsx)("a",{href:"https://material-ui.com/guides/minimizing-bundle-size/#how-to-reduce-the-bundle-size",target:"_blank",rel:"noopener noreferrer",children:"#how-to-reduce-the-bundle-size"})]}),"@fuse directories re-structured (@fuse/components > @fuse/core etc.), top level imports removed from @fuse/index, import paths updated.","All Import paths re-ordered.","All project reformated with the eslint, prettier configuration","jss-extend changed with jss-plugin-extend","webpack-bundle-analyzer changed with source-map-explorer"]},{version:"3.4.0",date:"2020-01-16",newChanges:["RTL language support added.","Multi language support added.","All dependency packages updated.","Allow everyone(guest,user) for accessing root (/) page as a landing page while whole app auth protected.",'"redirect the logged-in user to a specific route depending on his role" title added into the FuseAuthorization Doc.'],fixedChanges:["react-scripts reverted back to v3.2.0 : v3.3.0 doesn't work in development mode on IE or edge","Scrumboard App: Board list header menu not working.","Chat Panel: Toggle Button not working on mobile; ClickAwayListener changed with custom event handler."]},{version:"3.3.0",date:"2019-12-17",newChanges:["material-ui updated to v4.8.0","Default theme scheme changed.","All dependency packages updated."],fixedChanges:["E-Commerce App: reset table page when listing search results.","Project Dashboard: 'scales.[x/y]Axes.categoryPercentage' is deprecated changed with 'dataset.categoryPercentage'"]},{version:"3.2.5",date:"2019-11-20",newChanges:["material-ui updated to v4.6.1","react updated to v16.12.0","All dependency packages updated."],fixedChanges:["FusePage layout components: Drawer closes whenever click on it."]},{version:"3.2.4",date:"2019-10-24",newChanges:["material-ui updated to v4.5.1","react updated to 16.11.0","All dependency packages updated.","Fake-db delay option added for testing purposes (src/@fake-db/mock.js).","E-Commerce App, shows FuseLoading component while product data is loading.","Contacts App Contact Dialog Mobile refinement for scroll.","Calendar App Native date input changed with DateTimePicker.","FuseNavigation, dense attr added for densed variation."],fixedChanges:["NavbarMobileToggleFab Button added for to display absence of the toolbar.",Object(u.jsxs)("span",{children:["react-select returns null despite of empty array, workaround applied for FuseChipSelect.",Object(u.jsx)("a",{href:"https://github.com/intljusticemission/react-big-calendar/issues/1387#issuecomment-531465438",target:"_blank",rel:"noopener noreferrer",children:"the related issue"})]}),"Fix for Safari: Contacts App column filter input text is not visible.","Fix for Firefox: ScrumboardApp scroll issue.","suppressScrollX for the navigation at layout-1 for to fix showing horizontal scroll while fold.","Calendar App New Event, moment js deprecation warning - Not in a recognized ISO format",Object(u.jsxs)("span",{children:["Calendar App drag drop fix:",Object(u.jsx)("a",{href:"https://github.com/JedWatson/react-select/issues/3632",target:"_blank",rel:"noopener noreferrer",children:"the related issue"})]})]},{version:"3.2.3",date:"2019-09-09",newChanges:["material-ui updated to v4.4.1","react updated to 16.9.0","All dependency packages updated.","FuseChipSelectFormsy Component added.","Default FuseSuspense loading delay changed to 0."],fixedChanges:["FuseHorizontalNav items minor theming issues.","Minor fixes for dependency updates."]},{version:"3.2.2",date:"2019-08-09",newChanges:["withRouterAndRef hoc added for use forwardRef with withRouter.","scrollToTopOnRouteChange added to FuseScrollbars.",Object(u.jsxs)("span",{children:["Nested Object support added for useForm hook. ",Object(u.jsx)("br",{}),"(use with attribute ",Object(u.jsx)("code",{children:'name="profile.username" value={form.profile.username}'}),")"]})],fixedChanges:["scrollToTopOnChildChange changed with scrollToTopOnRouteChange in FusePageCarded.","Route component theme settings do not applied if the route is the entry path of the app."]},{version:"3.2.1",date:"2019-08-08",newChanges:["material-ui updated to v4.3.1","tailwind config updated.","All dependency packages updated.","Some import paths optimized.","HorizontalNavigation active highlighting added for group and collapse navigation items."],fixedChanges:["FuseLayout do not hold render until settings at the redux state is updated. This causes multiple mount of the route component which has different layout settings.","Layout style issues due to browser updates.","Removal of event listeners in FuseScrollbars (@stephankaag)."]},{version:"3.2.0",date:"2019-07-31",newChanges:["material-ui updated to v4.3.0","tailwind config updated.","All dependency packages updated."],fixedChanges:["Academy App is not scroll correctly when the theme footer is static.","Scrumboard App list name form not works."],breakingChanges:["tailwindcss colors matched with material colors (shade values changed with hues for example: .bg-red-dark to .bg-red-700)"]},{version:"3.1.0",date:"2019-06-27",newChanges:["material-ui updated to v4.1.3","react-big-calendar updated to v0.22.0","Await render while auto re-login on refresh or revisit of the authenticated user. It also solves extra redirection.","All dependency packages updated."]},{version:"3.0.1",date:"2019-06-18",newChanges:["material-ui updated to v4.1.1","react-redux updated to v7.1.0","react-router updated to v5.0.1","tailwindcss updated to v1.0.4","All dependency packages updated."]},{version:"3.0.0",date:"2019-06-02",newChanges:[Object(u.jsxs)("span",{children:["All of the code migrated to",Object(u.jsx)("a",{href:"https://reactjs.org/docs/hooks-intro.html",target:"_blank",rel:"noopener noreferrer",children:"the hooks"}),"(New feature of react let you use state and other React features without writing a class.)"]}),"material-ui updated to v4","react-scripts updated to v3","react-redux updated to v7.1 (for hooks support)","tailwindcss updated to v1.0.2",Object(u.jsxs)("span",{children:["user.role can be array to assign multiple permission roles. For details checkout",Object(u.jsx)("a",{href:"http://react-material.fusetheme.com/documentation/fuse-components/fuse-authorization",target:"_blank",rel:"noopener noreferrer",children:"FuseAuthorization Docs"}),"."]}),"All dependency packages updated.","Codebase improved."],fixedChanges:[Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{children:'"createBrowserHistroy is not exported from history.js"'})," error on windows environment(rare)"]})],breakingChanges:[Object(u.jsx)("span",{children:"react-loadable changed with React.suspense, React.lazy. All route configs updated with React.lazy"}),"classNames() replaced with clsx().",Object(u.jsxs)("span",{children:["We have no longer support Internet Explorer by default. If you still need it, you can install",Object(u.jsx)("a",{href:"https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill",target:"_blank",rel:"noopener noreferrer",children:"react-app-polyfill"}),"for to support."]})],notes:Object(u.jsxs)(d.a,{className:"text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16",component:"div",children:["Migrating to the new major version (",Object(u.jsx)("b",{children:"v3.0.0"}),") can be difficult because of the hooks support and major dependency releases."]})},{version:"2.2.5",date:"2019-03-25",newChanges:["Dependency packages updated (react v16.8.5, react-router v5 etc).","Mail, Todo apps route configs updated.","Changelog page design updated."],fixedChanges:["Minor text color refinement."]},{version:"2.2.4",date:"2019-03-06",newChanges:["Dependency packages updated (react v16.8.4 etc).","setRef prop added to FuseAnimate."],fixedChanges:["Whitelist added to purgecss config for to prevent removing dynamically created navigation classes.","Layout issues on safari <= v10"]},{version:"2.2.3",date:"2019-02-27",newChanges:["Dependency packages updated (react v16.8.3 etc).","purgecss added to decrease file size of the production build."],fixedChanges:["Fuse vertical navigation collapse items don\u2019t have to be collapsed whenever navigation updated or location path changed."],breakingChanges:["src/styles/fuse-helpers.css renamed with src/styles/tailwind.css","src/styles/fuse-helpers.tailwind.css renamed with src/styles/tailwind.base.css"]},{version:"2.2.2",date:"2019-02-18",newChanges:["Dependency packages updated (react v16.8.1, react-scripts etc).","PSD files updated."],fixedChanges:['Rendering Dom in "window.onload" function to wait all files loaded (esp css files).',"Theming issues (FuseCountdown, tables of Invoice pages)."]},{version:"2.2.1",date:"2019-02-11",newChanges:["Dependency packages updated (react, material-ui etc).","FuseNavigation update,remove,append,prepend actions created, documentation page is updated.","react-chartjs-2-defaults.js file created."],fixedChanges:["react, react-dom are added to resolutions to prevent loading two versions of the react. +\nthe issue's main reason is auth0-lock uses react as dependency not peerDependency and they don't change it with kinda valid reason\n(https://github.com/auth0/lock/issues/1148#issuecomment-336765301).","Calendar App Header updating issue fixed."]},{version:"2.2.0",date:"2019-02-03",newChanges:["Project Dashboard App added.","External Link Item added to FuseNavigation (type:'link').",'"metecons" extra icon fonts added.',"Dependency packages updated."]},{version:"2.1.0",date:"2019-01-22",newChanges:["Notes App Added.","Dependency packages updated."],fixedChanges:["dir-glob error is fixed with globby 8.0.2 via locking it's version. (This error only occurs when you use npm to install node_modules instead of yarn).","FuseSearch did not hide auth protected navigation items."]},{version:"2.0.0",date:"2019-01-11",newChanges:["New theme layout added (layout-3)",'Container layout mode created for layout-2 and layout-3."container" class added to relevant places.',"FuseSidePanel created and used in layout-3.","FuseNavigation: dense variant added for horizontal layout only.","FuseShortcuts: vertical variant added.","FuseSearch: basic variant added (checkout layout-3)","dark-material-bg.jpg changed to gradient background.","IconsUI page refined.","Generating source map disabled by default on production build.","Navigation data refactored on the demo.","Documentation updated.","Dependency packages updated."],fixedChanges:["Codebase improvements.","Some IE fixes.","FuseAuthorization must have state to prevent restricted route component mount when unauthorized user redirects.","E-Commerce App, navigating product to new product didn't update the form state.","Authentication timing issues fixed."],breakingChanges:["Theme layouts moved out of the @fuse core files which gives developers to create or edit theme layouts easily.","Project structure changed after new layout system.","Theme configuration state moved from FuseTheme to redux store (fuse.settings)."],notes:Object(u.jsx)(d.a,{className:"text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16",component:"div",children:"Migrating to the new major version (v2.0.0) can be difficult because of the project structure and layout system changes."})},{version:"1.2.8",date:"2018-11-28",newChanges:["Academy App added.","FuseSearch Component added (located at the main toolbar and searches in the navigation).","FuseChipSelect documentation page added.","Dependency packages updated (Material-ui etc)."],fixedChanges:["Missing input variants added to Formsy Higher Order Components.","FuseChipSelect variant styles fixed.","FuseNavHorizontalItem missing exact prop added.","E-Commerce App, navigating product to new product didn't update the form state.","Authentication timing issues fixed."]},{version:"1.2.7",date:"2018-11-18",newChanges:["JWT support added to Regular Authentication.","FuseMessage variations added (error, success, alert, info).","Dependency packages updated (Material-ui etc)."],fixedChanges:["FuseMessage relocated (position changed absolute to fixed).","Hide navbar button when navbar display set to false on mobile.","Layout-1 folded navigation mobile fix.","react-router-config react-router-dom versions matched.","tabs style fix for tabbed page layouts."]},{version:"1.2.6",date:"2018-11-07",fixedChanges:["Theme Layout-1 Mobile fix (!important)"]},{version:"1.2.5",date:"2018-11-06",newChanges:["FuseDialog Component added to theme layout for easily show dialog messages via redux action.","Dependency packages updated (Material-ui, react-redux etc)."],fixedChanges:["Layout-1 folded navigation broken in macOS safari browser."]},{version:"1.2.4",date:"2018-10-26",newChanges:["Dependency packages updated (React, Material-ui etc)."]},{version:"1.2.3",date:"2018-10-14",newChanges:["Dependency packages updated (Redux etc).","Redux developer tools disabled on production."],fixedChanges:["Redux Developer Tools Extension fix: problem occurs if the extension is enabled on Firefox."]},{version:"1.2.2",date:"2018-10-09",newChanges:["Initial loading time reduced with code splitting (lazy loading) components and also reducers.","redux-loadable library added.","FuseLoadable component created for to avoid repetition.","webpack-bundle-analyzer package added to devDependencies for to analyze build.","Material UI updated to v3.2.0.","Dependency packages updated."]},{version:"1.2.1",date:"2018-10-04",newChanges:["create-react-app updated to v2","Material UI updated to v3.1.2","Navigation active item style option added for to use square highlighting(old style).","Dependency packages updated.","E-commerce App data/assets updated."],fixedChanges:["Synthetically trigger event onChange for higher-order components of formsy.","Edge, Ie font icon ligature fix."]},{version:"1.2.0",date:"2018-09-25",newChanges:["The design is modernized with Google Material Design's new specs. + Icons replaced with outlined material icons, + Main Font Family changed to Muli","Scrumboard App added.","Material UI updated to v3.1.1",'FuseChipSelect: "variant" attr added for to choose creatable or fixed multi selection.',"Dependency packages updated.","@lodash path created to use lodash's mixins.","Webkit scrollbar styles added.","Auth Services(Auth0, Firebase) are revised for to easily disable.","Various mobile device refinements applied."],fixedChanges:["Cleaner approach for Mail App."]},{version:"1.1.8",date:"2018-09-08",newChanges:["E-commerce App added.","FuseChipSelect Component added.","Material UI updated to v3.0.2","Dependency packages updated."]},{version:"1.1.7",date:"2018-08-27",newChanges:["FuseSplashScreen added.",Object(u.jsxs)("span",{children:[Object(u.jsx)("b",{children:"firebaseService"})," and ",Object(u.jsx)("b",{children:"auth0Service"})," created, ",Object(u.jsx)("b",{children:"Auth"})," component added as entry point for authentication."]}),"Login, register pages updated due to adding Auth0 authentication.","404 page redirection added to the routes.","Material UI updated to v1.5.1","Dependency packages updated."],breakingChanges:["FirebaseAuth Component removed, using Auth component instead."]},{version:"1.1.6",date:"2018-08-12",newChanges:["Chat App added.","Material UI updated to v1.4.3","Dependency packages updated."]},{version:"1.1.5",date:"2018-07-18",newChanges:["Chat Panel added.","LeftSidePanel RightSidePanel Layout areas added.","Navbar style refined.","Material UI updated to v1.4.0","Other Dependency packages updated."]},{version:"1.1.4",date:"2018-07-09",newChanges:["Todo App added.","Material UI updated to v1.3.1","Other Dependency packages updated."]},{version:"1.1.3",date:"2018-06-28",newChanges:["Material UI updated to v1.3.0","Dependency packages updated."]},{version:"1.1.2",date:"2018-06-18",newChanges:["Changing default settings with route params.","Dependency packages updated."],fixedChanges:["FuseAnimate, FuseAnimateGroup inject error.","Folded Navigation extra space fixed between 960px and 1280px of window width."]},{version:"1.1.1",date:"2018-06-10",newChanges:[Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"velocity-react"})," added as dependency, its used for fuseAnimation"]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"FuseAnimation"})," ",Object(u.jsx)("code",{children:"FuseAnimationGroup"})," created for easily animate components and applied most of the pages."]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"exact"})," property option added to navigation item for matching location exactly."]}),"Dependency packages updated."]},{version:"1.1.0",date:"2018-06-06",newChanges:["Layout system enhanced.","New Horizontal Layout added (layout-2).",Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"react-poper"})," added as dependency, its used for horizontal navigation"]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"Material UI"})," updated to v1.2.0"]}),"Dependency packages updated."],fixedChanges:["Dialog form of Contacts App and Calendar App fixed due to React 16.4.0 bugfix for getDeriveredStateFromProps","(https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).","Actions and reducers of fuse navigation fixed."],breakingChanges:["Layout and Theme settings data structure changed.","If you are storing the user data at database, old saved user settings will not work with this version.","Page Layouts default scroll behaviour changed to singleScroll due to new layout mechanism, additional innerScroll attribute also added.","FuseSettings separated from the settings panel."]},{version:"1.0.5",date:"2018-05-29",newChanges:[Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"Material UI"})," updated to v1.1.0"]}),"Dependency packages updated."],fixedChanges:["Extra control added if user.data exist in Firebase Db","Navigation Collapse fixed due to React 16.4.0 bugfix for getDeriveredStateFromProps","(https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops)."]},{version:"1.0.4",date:"2018-05-22",newChanges:[Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"Material UI"})," updated to v1.0.0"]}),"Firebase integration added as an example for authentication (Also saves user data to firebase/db).","Register Page Created for Firebase.","FuseMessage Component added to theme layout for easily show snackbar messages via redux action."],breakingChanges:[Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"FuseAuth"})," renamed with FuseAuthorization"]}),"Shortcuts data storage moved under the user.data."]},{version:"1.0.3",date:"2018-05-16",newChanges:[Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"Material UI"})," updated to v1.0.0-rc.0"]}),Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:"https://github.com/mui-org/material-ui/releases/tag/v1.0.0-rc.0",target:"_blank",rel:"noopener noreferrer",children:"Checkout the breaking changes"})}),Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"google-map-react"})," updated."]})]},{version:"1.0.2",date:"2018-05-12",fixedChanges:["Tailwind error on windows.",Object(u.jsxs)("span",{children:["missing ",Object(u.jsx)("code",{children:".env"})," ",Object(u.jsx)("code",{children:".babelrc"})," files added."]})]},{version:"1.0.1",date:"2018-05-10",newChanges:["All dependencies updated."],fixedChanges:[Object(u.jsxs)("span",{children:[Object(u.jsx)("code",{children:"cross-env"})," library added for absolute path across platforms."]})]},{version:"1.0.0",date:"2018-04-21",notes:Object(u.jsx)("ul",{className:"mt-24 pl-24",children:Object(u.jsx)("li",{children:Object(u.jsx)(d.a,{children:"Initial Release"})})})}];var b=f[0].version;a.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{variant:"h4",className:"mb-40 font-700",children:"Changelog"}),f.map((function(e){return Object(u.jsx)(m,Object(n.a)({className:"mb-24"},e),e.version)}))]})}}}]);