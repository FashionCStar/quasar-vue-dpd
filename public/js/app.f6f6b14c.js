(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"1e53":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("967e"),s=n.n(r),a=(n("96cf"),n("7f7f"),n("551c"),n("06db"),n("fc74")),o=n.n(a),i=n("59a1"),u=n.n(i),c=n("c47a"),l=n.n(c),p=n("bc3a"),f=n.n(p),h=n("2a19"),d="/api",m=function(){function e(){o()(this,e),l()(this,"instance",void 0),l()(this,"uploadinstance",void 0),l()(this,"__token",void 0),this.instance=f.a.create({baseURL:d,headers:{"Content-Type":"application/json"}})}return u()(e,[{key:"config",value:function(e){var t=e.router,n=e.store;this.token=n.state.auth.token;var r=this;this.instance.interceptors.request.use((function(e){return e.headers.Authorization="Bearer "+r.token,e}),(function(e){return Promise.reject(e)})),this.instance.interceptors.response.use((function(e){return e}),(function(e){if(401===e.response.status)return h["a"].create({color:"red-5",textColor:"white",position:"top",icon:"fas fa-exclamation-triangle",message:e.response.data.message}),n.commit("auth/token",""),n.commit("auth/user",{}),"Login"!==t.currentRoute.name&&t.push("/"),Promise.reject(e);var r=e.response.data||{},s=r.message;return h["a"].create({color:"red-5",textColor:"white",position:"top",icon:"fas fa-exclamation-triangle",message:s}),Promise.reject(e)}))}},{key:"getMyProfile",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.get("/my-profile",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"updateUserInfo",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/update-profile",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"sendVerifyEmail",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/sendVerifyEmail",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"sendVerifyPhone",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/sendVerifyPhone",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"uploadUserAvatar",value:function(e,t){return s.a.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",this.instance.post("/uploadUserAvatar",e,t));case 1:case"end":return n.stop()}}),null,this)}},{key:"getUsers",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/getUsers",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getUserInfo",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.get("/getUserDetails?id="+e));case 1:case"end":return t.stop()}}),null,this)}},{key:"updateUser",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/updateUser",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"removeUser",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/removeUser",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getReports",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/getReports",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getReportsAll",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/getReportsAll",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getMonthlyReports",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/getMonthlyReports",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getMonthlyReportsAll",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/getMonthlyReportsAll",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getReportInfo",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.get("/getReportDetails?reportNo="+e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getRegularRoutes",value:function(){return s.a.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.instance.get("/getRegularRoutes"));case 1:case"end":return e.stop()}}),null,this)}},{key:"getExtraRoutes",value:function(){return s.a.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.instance.get("/getExtraRoutes"));case 1:case"end":return e.stop()}}),null,this)}},{key:"getCourierList",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.get("/getCourierList?report_datetime="+e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getRNCID",value:function(){return s.a.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.instance.get("/getRNCID"));case 1:case"end":return e.stop()}}),null,this)}},{key:"getCouriers",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/getCouriers",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"createCourier",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/createCourier",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"updateCourier",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/updateCourier",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"removeCourier",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/removeCourier",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"getRoutes",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/getRoutes",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"createRoute",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/createRoute",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"updateRoute",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/updateRoute",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"removeRoute",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/removeRoute",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"createSingleRecord",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/createSingleRecord",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"updateSingleRecord",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/updateSingleRecord",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"removeSingleRecord",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/removeSingleRecord",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"createReport",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/createReport",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"updateReport",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/updateReport",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"removeReport",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/removeReport",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"registerUser",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/registerUser",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"login",value:function(e){var t;return s.a.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(this.instance.post("/loginUser",e));case 2:return t=n.sent,this.token=t.data.token,n.abrupt("return",t);case 5:case"end":return n.stop()}}),null,this)}},{key:"forgotPassword",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/forgotPassword",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"resetPassword",value:function(e){return s.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.instance.post("/resetPassword",e));case 1:case"end":return t.stop()}}),null,this)}},{key:"confirmUser",value:function(e,t){return s.a.async((function(n){while(1)switch(n.prev=n.next){case 0:return this.token=t,n.abrupt("return",this.instance.post("/confirmUser",e));case 2:case"end":return n.stop()}}),null,this)}}]),e}(),g=new m;t["b"]=function(e){var t=e.Vue,n=e.router,r=e.store;g.config({router:n,store:r}),t.prototype.$api=g}},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"BaseSelect",(function(){return Fe})),n.d(r,"BaseSelectField",(function(){return Ne})),n.d(r,"BaseTextField",(function(){return He})),n.d(r,"BaseCurrencyInput",(function(){return Ze}));var s=n("967e"),a=n.n(s),o=(n("a481"),n("96cf"),n("7d6e"),n("e54f"),n("1194"),n("573e"),n("4439"),n("4605"),n("f580"),n("5b2b"),n("8753"),n("2967"),n("7e67"),n("d770"),n("dd82"),n("922c"),n("d7fb"),n("a533"),n("c32e"),n("a151"),n("8bc7"),n("e80f"),n("5fec"),n("e42f"),n("57fc"),n("d67f"),n("880e"),n("1c10"),n("9482"),n("e797"),n("4848"),n("53d0"),n("63b1"),n("e9fd"),n("195c"),n("64e9"),n("33c5"),n("4f62"),n("0dbc"),n("7c38"),n("0756"),n("4953"),n("81db"),n("2e52"),n("22485"),n("7797"),n("12a1"),n("ce96"),n("70ca"),n("2318"),n("24bd"),n("8f27"),n("3064"),n("c9a2"),n("8767"),n("4a8e"),n("b828"),n("3c1c"),n("21cb"),n("c00e"),n("e4a8"),n("e4d3"),n("f4d9"),n("fffd"),n("f645"),n("639e"),n("34ee"),n("b794"),n("af24"),n("7c9c"),n("7bb2"),n("64f7"),n("c382"),n("053c"),n("c48f"),n("f5d1"),n("3cec"),n("c00ee"),n("d450"),n("ca07"),n("14e3"),n("9393"),n("9227"),n("1dba"),n("674a"),n("de26"),n("6721"),n("9cb5"),n("ed9b"),n("fc83"),n("98e5"),n("605a"),n("ba60"),n("df07"),n("7903"),n("e046"),n("58af"),n("7713"),n("0571"),n("3e27"),n("6837"),n("3fc9"),n("0693"),n("bf41"),n("985d"),n("0047"),n("b6d8"),n("2b0e")),i=n("b3f7"),u=n("b05d"),c=n("9c40"),l=n("714f"),p=n("2a19"),f=n("436b"),h=n("18d6"),d=n("a639"),m=n("1b3f"),g=n("f508"),b=n("a357");o["a"].use(u["a"],{config:{loadingBar:{color:"accent"},loading:{}},iconSet:i["a"],components:{QBtn:c["a"]},directives:{Ripple:l["a"]},plugins:{Notify:p["a"],Dialog:f["a"],LocalStorage:h["a"],SessionStorage:d["a"],LoadingBar:m["a"],Loading:g["a"],exportFile:b["a"]}});var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},y=[],w={name:"App"},O=w,P=n("2877"),k=Object(P["a"])(O,v,y,!1,null,null,null),x=k.exports,S=(n("ac6a"),n("cadf"),n("06db"),n("456d"),n("2f62")),j=n("0e44"),R=(n("8e6e"),n("8a81"),n("c47a")),E=n.n(R),$=n("f3e3"),C=n.n($);n("28a5");function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){var n=t.split(".").slice(-1)[0];if(e[n])throw new Error("The key `".concat(n,"` is already in use."));return e[n]=t,e}),{})}function L(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s="string"===typeof n[0]?[].concat(n):[""].concat(n),a=C()(s,4),o=a[0],i=a[1],u=a[2],c=a[3];return o.length&&"/"!==o.charAt(o.length-1)&&(o+="/"),u="".concat(o).concat(u||"getField"),c="".concat(o).concat(c||"updateField"),e(o,i,u,c)}}function U(e){return function(t){return t.split(/[.[\]]+/).reduce((function(e,t){return e[t]}),e)}}function A(e,t){var n=t.path,r=t.value;n.split(/[.[\]]+/).reduce((function(e,t,n,s){return s.length===n+1&&(e[t]=r),e[t]}),e)}L((function(e,t,n,r){var s=Array.isArray(t)?D(t):t;return Object.keys(s).reduce((function(e,t){var a=s[t],o={get:function(){return this.$store.getters[n](a)},set:function(e){this.$store.commit(r,{path:a,value:e})}};return e[t]=o,e}),{})})),L((function(e,t,n,r){var s=t;return Object.keys(s).reduce((function(e,t){var a=s[t].replace(/\.?\*/g,"");return e[t]={get:function(){var e=this.$store,t=e.getters[n](a);return t?Object.keys(t).reduce((function(t,s){var o=a?"".concat(a,".").concat(s):s;return Object.defineProperty(t,s,{enumerable:!0,get:function(){return e.getters[n](o)},set:function(t){e.commit(r,{path:o,value:t})}})}),{}):t},set:function(e){this.$store.commit(r,{path:a,value:e})}},e}),{})})),L((function(e,t,n,r){var s=Array.isArray(t)?D(t):t;return Object.keys(s).reduce((function(e,t){var a=s[t];return e[t]={get:function(){var e=this.$store,t=e.getters[n](a);return t?t.map((function(t,s){return Object.keys(t).reduce((function(t,o){var i="".concat(a,"[").concat(s,"].").concat(o);return Object.defineProperty(t,o,{get:function(){return e.getters[n](i)},set:function(t){e.commit(r,{path:i,value:t})}})}),{})})):t},set:function(e){this.$store.commit(r,{path:a,value:e})}},e}),{})}));function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(){return{apiResponse:null,apiErrorResponse:null,requestedBy:null}},_=F({initState:B},B()),V={getField:U},T={updateField:A},q={},N={namespaced:!0,state:_,getters:V,mutations:T,actions:q};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(){return{tableDate:null,tableColumns:null,tablePagination:null,tableSelected:null}},J=z({initState:Q},Q()),H={getField:U},W={updateField:A},Y={},G={namespaced:!0,state:J,getters:H,mutations:W,actions:Y};function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(){return{token:null,pageMeta:null}},ee=X({initState:Z},Z()),te={getField:U},ne={updateField:A},re={testRouter:function(){}},se={namespaced:!0,state:ee,getters:te,mutations:ne,actions:re},ae={commons:se,apcStore:N,teStore:G},oe={loggedIn:!1,user:{},token:"",isAdmin:"",pageTitle:"",userLevel:""},ie={isLoggedIn:function(e){return e.loggedIn},token:function(e){return e.token},user:function(e){return e.user},isAdmin:function(e){return e.isAdmin},pageTitle:function(e){return e.pageTitle},userLevel:function(e){return e.userLevel}},ue={},ce={user:function(e,t){e.user=t},login:function(e,t){e.loggedIn=!!t.token,e.token=t.token,e.user=t.user},token:function(e,t){e.token=t},isAdmin:function(e,t){e.isAdmin=t},pageTitle:function(e,t){e.pageTitle=t},userLevel:function(e,t){e.userLevel=t},logout:function(e){e.loggedIn=!1,e.token="",e.user={}}},le={namespaced:!0,state:oe,getters:ie,actions:ue,mutations:ce};o["a"].use(S["a"]);var pe=function(){var e=new S["a"].Store({strict:!1,modules:{modules:ae,auth:le},actions:{resetAllState:function(e){var t=e.dispatch;for(var n in ae)ae[n].state.hasOwnProperty("initState")&&t("resetModuleState",n)},resetModuleState:function(e,t){var n=e.commit,r=ae[t].state.initState;n("RESET_STATES",{namespace:t,initState:r})}},mutations:{RESET_STATES:function(e,t){var n=t.initState(),r=t.namespace;Object.keys(e[r]).forEach((function(t){"initState"!==t&&(e[r][t]=n[t])}))}},plugins:[Object(j["a"])()]});return e},fe=n("8c4f"),he=[{path:"/",meta:{title:"Report Management",needAuth:!0},component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"bc13"))}},{path:"/",component:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"5f5f"))},children:[{path:"/login",name:"Login",meta:{title:"DPD Login"},component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"00cc"))}},{path:"/signup",name:"Signup",meta:{title:"DPD Sign Up"},component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"544f"))}},{path:"/forgot-password",name:"ForgotPassword",meta:{title:"Forgot Password"},component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"e988"))}},{path:"/reset-password",name:"ResetPassword",meta:{title:"Reset Password"},component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"a2b5"))},props:function(e){return{query:e.query.token}}},{path:"/confirm-user",name:"ConfirmUser",meta:{title:"Confirm User"},component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"5ad5"))},props:function(e){return{query:e.query.token}}},{path:"/dashboard",name:"Dashboard",meta:{title:"Dashboard",needAuth:!0},component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"f241"))},children:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"fad3"))}},{path:"my-profile",name:"MyProfile",meta:{title:"Profile"},component:function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"c0e1"))}},{path:"users",name:"Users",meta:{title:"USERS",roles:["admin"]},component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"86e6"))}},{path:"users/new",name:"New User",meta:{title:"Create New User",roles:["admin"]},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"9d4a"))}},{path:"users/:id/detail",name:"User Detail",meta:{title:"User Detail",roles:["admin"]},component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"9d4a"))}},{path:"schedules",name:"Schedules",meta:{title:"SCHEDULE",roles:["admin","user"]},component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"4b57"))}},{path:"schedules/new",name:"New Schedule",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"30c4"))},meta:{title:"Create New Schedule",roles:["admin","user"]}},{path:"schedules/:report_no/detail",name:"Edit Schedule",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"ca5e"))},meta:{title:"Schedule Detail",roles:["admin","user"]}},{path:"performance",name:"Performance",meta:{title:"PERFORMANCE",roles:["admin","user"]},component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"4fc9"))}},{path:"couriers",name:"Couriers",meta:{title:"COURIERS",roles:["admin","user"]},component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"a72c"))}},{path:"routes",name:"Routes",meta:{title:"ROUTES",roles:["admin","user"]},component:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"7eaf"))}}]}]}];he.push({path:"*",component:function(){return n.e(17).then(n.bind(null,"e51e"))}});var de=he;o["a"].use(fe["a"]);var me=function(e){var t=e.store,n=new fe["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:de,mode:"history",base:"/"}),r=function(){};return n.beforeEach((function(e,n,s){e.matched.some((function(e){return e.meta.needAuth}))?t.getters["auth/token"]?s():(r(),r=p["a"].create({color:"negative",icon:"mdi-alert-circle",message:"You need to login."}),s({path:"/login"})):s()})),n};function ge(){var e,t,n;return a.a.async((function(r){while(1)switch(r.prev=r.next){case 0:if("function"!==typeof pe){r.next=6;break}return r.next=3,a.a.awrap(pe({Vue:o["a"]}));case 3:r.t0=r.sent,r.next=7;break;case 6:r.t0=pe;case 7:if(e=r.t0,"function"!==typeof me){r.next=14;break}return r.next=11,a.a.awrap(me({Vue:o["a"],store:e}));case 11:r.t1=r.sent,r.next=15;break;case 14:r.t1=me;case 15:return t=r.t1,e.$router=t,n={router:t,store:e,render:function(e){return e(x)}},n.el="#q-app",r.abrupt("return",{app:n,store:e,router:t});case 20:case"end":return r.stop()}}))}var be=n("1e53"),ve=(n("551c"),n("bc3a")),ye=n.n(ve),we=function(){},Oe=function(e){ye.a.interceptors.request.use((function(e){return console.log("%c[REQUEST] sent -> "+e.url,"color: blue; font-weight: bold;",e),e}),(function(e){return console.log("%c[REQUEST] error -> "+e.config.url,"color: red; font-weight: bold;",e.message||e),Promise.reject(e)})),ye.a.interceptors.response.use((function(t){return console.log("%c[RESPONSE] received -> "+t.config.url,"color: green; font-weight: bold;",t),e.dispatch("commons/testRouter"),we(),we=p["a"].create({color:"positive",icon:"mdi-check",message:t.data.msg,timeout:1500}),t}),(function(e){return console.log("%c[RESPONSE] error ->"+e.config.url,"color: red; font-weight: bold;",e.response||e.message),we(),we=p["a"].create({color:"negative",icon:"mdi-alert-circle-outline",message:e.response?e.response.data.msg:e.message,timeout:2e3}),Promise.reject(e)}))},Pe=function(e){return{test:"https://b9g95.sse.codesandbox.io/",laravel:"localhost:8000/api"}[e]},ke=function(e){var t=e.Vue,n=e.store;ye.a.defaults.baseURL=Pe("laravel"),ye.a.defaults.headers.post["Content-Type"]="application/json",ye.a.defaults.timeout=2e3,Oe(n),t.prototype.$axios=ye.a};n("6762"),n("2fdb");function xe(e,t){var n=t.state.auth.userLevel;return!!n&&(Array.isArray(e)?e.includes(n):e===n)}var Se=function(e){var t=e.router,n=e.store;t.beforeEach((function(e,t,r){e.meta.roles&&!xe(e.meta.roles,n)?r("/dashboard"):r()}))},je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",e._g(e._b({ref:"select",attrs:{options:e.computedOptions},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$_setValue(t)}},scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,n){return{key:n,fn:function(t){return[e._t(n,null,null,t)]}}}))],null,!0),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},"q-select",e.$attrs,!1),e.listeners))},Re=[];function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce={props:{selfFilter:{type:Boolean,default:!1},autoSelect:{type:Boolean,default:!1}},data:function(){return{model:this.$attrs.value,options:this.$attrs.options}},methods:{filterFn:function(e,t){var n=this;t((function(){var t=e.toLowerCase();n.options=n.$attrs.options.filter((function(e){var n=(e["option-label"]||e.label).toLowerCase();return n.includes(t)}))}))},filterFunc:function(e,t,n){this.selfFilter?this.filterFn(e,t):this.$emit("filter",e,t,n)},$_setValue:function(){if(1===this.options.length&&this.autoSelect){var e=this.options[0];if(e.disable)return;this.model=this.$attrs["option-value"]?e[this.$attrs["option-value"]]:e.value,this.$emit("input",this.model),this.$refs.select.updateInputValue(this.$attrs["option-label"]?e[this.$attrs["option-label"]]:e.label,!0)}}},computed:{computedOptions:function(){return this.selfFilter?this.options:this.$attrs.options},listeners:function(){return this.$listeners.filter||this.selfFilter?$e({filter:this.filterFunc},this.$listeners):$e({},this.$listeners)}},created:function(){console.log("attrs",this.$attrs)}},De=Ce,Le=n("ddd8"),Ue=n("eebe"),Ae=n.n(Ue),Me=Object(P["a"])(De,je,Re,!1,null,null,null),Fe=Me.exports;Ae()(Me,"components",{QSelect:Le["a"]});n("f559"),n("3b2b");var Be=function(e,t,n){return e.replace(new RegExp(t,"g"),n)},_e={inheritAttrs:!1,props:{fieldName:String,localMessages:Object,asyncErrorMessage:{type:String,default:null},errorMessages:{type:Object,default:function(){return{required:"field is required.",minLength:"field requires minimum length of",maxLength:"field exceeds maximum length of",email:"field is an invalid email."}}}},methods:{replaceAll:Be,getErrMessage:function(e){if(!e.$error)return"";var t=this.$attrs.label||this.fieldName,n=this.localMessages||this.errorMessages;if(e.hasOwnProperty("required")&&!e.required)return"".concat(t," ").concat(n.required||this.errorMessages.required);if(e.hasOwnProperty("maxLength")&&!e.maxLength)return"".concat(t," ").concat(n.maxLength||this.errorMessages.maxLength," ").concat(e.$params.maxLength.max,".");if(e.hasOwnProperty("minLength")&&!e.minLength&&n.minLength)return"".concat(t," ").concat(n.minLength||this.errorMessages.minLength," ").concat(e.$params.minLength.min,".");if(e.hasOwnProperty("email")&&!e.email&&n.minLength)return"".concat(t," ").concat(n.email||this.errorMessages.email);if(null!==this.asyncErrorMessage&&""!==this.asyncErrorMessage&&!e.$pending)return this.asyncErrorMessage;var r=Object.keys(e.$params).filter((function(t){return!t.startsWith("_$")&&!e[t]})),s=[];return r.length?(r.forEach((function(e){Object.keys(n).filter((function(t){return t===e})).length>0&&s.push(n[e])})),"".concat(t," ").concat(s)):"".concat(t," has invalid value.")}}},Ve={mixins:[_e],props:["val"],computed:{hasErrors:function(){return this.val?this.val.$error:null},errMessage:function(){return this.val?this.getErrMessage(this.val):null}}};function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ne={name:"BaseSelectField",mixins:[Ve],inheritAttrs:!1,props:{normalizeBottom:{type:Boolean,default:!1}},render:function(e){return e(Le["a"],{props:qe({error:this.val?this.hasErrors:null,errorMessage:this.val?this.errMessage:null,bottomSlots:this.normalizeBottom||this.hasErrors},this.$attrs),on:this.$listeners,scopedSlots:this.$scopedSlots})}},Ie=n("27f9"),ze=n("0016");function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qe(n,!0).forEach((function(t){E()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var He={name:"BaseTextField",mixins:[Ve],props:{hideShowPassword:{type:Boolean,default:!1},type:{type:String,default:function(){}},normalizeBottom:{type:Boolean,default:!1},upperCase:{type:Boolean,default:!1}},data:function(){return{isPwShown:!1}},computed:{computedType:function(){return"password"===this.type&&this.isPwShown?"text":this.type}},render:function(e){var t=this;return e(Ie["a"],{props:Je({error:this.val?this.hasErrors:null,errorMessage:this.val?this.errMessage:null,type:this.computedType,bottomSlots:this.normalizeBottom||this.hasErrors},this.$attrs),on:Je({},this.$listeners,{input:function(e){e&&t.upperCase?t.$emit("input",e.toUpperCase()):t.$emit("input",e)}}),attrs:this.$attrs,scopedSlots:Je({append:function(){return"password"===t.type&&t.hideShowPassword&&void 0===t.$scopedSlots.append?e(ze["a"],{class:"cursor-pointer relative-position",props:{name:t.isPwShown?"mdi-eye":"mdi-eye-off"},on:{click:function(){t.isPwShown=!t.isPwShown}},directives:[{name:"ripple",value:!0}]}):null}},this.$scopedSlots)})}},We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-text-field",e._b({ref:"priceField",attrs:{prefix:"$",inputmode:"decimal"},on:{input:e.formatCurrency,blur:function(t){e.formatCurrency(t.target.value,"blur")}},scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,n){return{key:n,fn:function(t){return[e._t(n,null,null,t)]}}}))],null,!0),model:{value:e.localVal,callback:function(t){e.localVal=t},expression:"localVal"}},"base-text-field",e.$attrs,!1))},Ye=[],Ge=(n("c5f6"),{name:"BaseCurrencyInput",inheritAttrs:!1,props:{value:{type:[String,Number]}},data:function(){return{localVal:null}},methods:{formatCurrency:function(e,t){if(null!==e){var n=this.$refs.priceField,r=e,s=n.$children.length>0?n.$children[0].$refs.input:n.$refs.input,a=r.length,o=s.selectionStart;if(r.indexOf(".")>=0){var i=r.indexOf("."),u=r.substring(0,i),c=r.substring(i);u=this.formatNumber(u),c=this.formatNumber(c),"blur"===t&&(c+="00"),c=c.substring(0,2),r=u+"."+c}else r=this.formatNumber(r),"blur"===t&&r.length>0&&(r+=".00");var l=r.length;o=l-a+o,this.$nextTick((function(){s.setSelectionRange(o,o)})),this.localVal=r,this.$emit("input",parseFloat(this.localVal.replace(/[^\d.]/g,""))||r)}},formatNumber:function(e){return e.replace(/^0+/,"").replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")}},created:function(){this.localVal=this.value}}),Ke=Ge,Xe=Object(P["a"])(Ke,We,Ye,!1,null,null,null),Ze=Xe.exports,et=function(e){var t;return a.a.async((function(n){while(1)switch(n.prev=n.next){case 0:t=e.Vue,Object.keys(r).forEach((function(e){t.component(e,r[e])}));case 2:case"end":return n.stop()}}))},tt=n("1dce"),nt=n.n(tt),rt=function(e){var t=e.Vue;t.use(nt.a)},st=n("7bb1"),at=function(e){var t;return a.a.async((function(n){while(1)switch(n.prev=n.next){case 0:t=e.Vue,t.use(st["a"],{validity:!0});case 2:case"end":return n.stop()}}))},ot=n("1918"),it=n.n(ot),ut=function(e){var t=e.Vue;t.use(it.a)},ct=function(e){var t,n;return a.a.async((function(r){while(1)switch(r.prev=r.next){case 0:t=e.Vue,n=t.extend({name:"custom-input",extends:Ie["a"],props:{upperCase:{type:Boolean,default:!0}},watch:{value:function(e){this.upperCase&&e&&this.$emit("input",e.toUpperCase())}}}),t.component("CustomInput",n);case 3:case"end":return r.stop()}}))},lt=n("9ce1");function pt(){var e,t,n,r,s,i,u,c,l;return a.a.async((function(p){while(1)switch(p.prev=p.next){case 0:return p.next=2,a.a.awrap(ge());case 2:e=p.sent,t=e.app,n=e.store,r=e.router,s=!0,i=function(e){s=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),c=[be["b"],ke,Se,et,rt,at,ut,ct,lt["default"]],l=0;case 11:if(!(!0===s&&l<c.length)){p.next=29;break}if("function"===typeof c[l]){p.next=14;break}return p.abrupt("continue",26);case 14:return p.prev=14,p.next=17,a.a.awrap(c[l]({app:t,router:r,store:n,Vue:o["a"],ssrContext:null,redirect:i,urlPath:u}));case 17:p.next=26;break;case 19:if(p.prev=19,p.t0=p["catch"](14),!p.t0||!p.t0.url){p.next=24;break}return window.location.href=p.t0.url,p.abrupt("return");case 24:return console.error("[Quasar] boot error:",p.t0),p.abrupt("return");case 26:l++,p.next=11;break;case 29:if(!1!==s){p.next=31;break}return p.abrupt("return");case 31:new o["a"](t);case 32:case"end":return p.stop()}}),null,null,[[14,19]])}pt()}},[[0,3,0]]]);