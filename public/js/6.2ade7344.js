(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"2b87":function(t,e,a){"use strict";var s=a("9e07"),o=a.n(s);o.a},"9e07":function(t,e,a){},f241:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh lpr lFf"}},[a("q-header",{staticClass:"toolbar-grad",attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{directives:[{name:"touch-hold",rawName:"v-touch-hold:1000.mouse.stop",value:t.touchHeld,expression:"touchHeld",arg:"1000",modifiers:{mouse:!0,stop:!0}}],attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[t._v(t._s(t.pageTitle))]),a("div",{staticClass:"q-py-sm"},[a("q-btn-dropdown",{staticClass:"q-px-xs",staticStyle:{"box-shadow":"none"},attrs:{"text-color":"white"},scopedSlots:t._u([{key:"label",fn:function(){return[a("div",{staticClass:"row items-center no-wrap"},[a("q-avatar",{attrs:{size:"50px;"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar.png"}})]),a("div",{staticClass:"text-center q-px-sm"},[t._v("\n                "+t._s(t.user.first_name)+"\n              ")])],1)]},proxy:!0}])},[a("q-list",[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:{name:"MyProfile"}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{icon:"far fa-user-circle","text-color":"black"}})],1),a("q-item-section",[a("q-item-label",[t._v("My Profile")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.logout}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{icon:"logout","text-color":"black"}})],1),a("q-item-section",[a("q-item-label",[t._v("Logout")])],1)],1)],1)],1)],1),a("q-btn",{attrs:{icon:t.$q.dark.isActive?"mdi-brightness-5":"mdi-brightness-4",flat:"",dense:"",round:"","no-caps":""},on:{click:function(e){t.$q.dark.isActive?t.$q.dark.set(!1):t.$q.dark.set(!0)}}},[a("q-badge",{attrs:{color:"red",floating:"",transparent:""}},[t._v("new")])],1)],1),a("router-view",{ref:"mainTab",attrs:{name:"tabs"}})],1),a("q-drawer",{attrs:{bordered:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("base-drawer")],1)],1),t._e(),a("q-page-container",[a("transition",{attrs:{"enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutRight",mode:"out-in"}},[a("router-view")],1)],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-item-label",{attrs:{header:""}},[t._v("Menu")]),"admin"===t.userLevel?a("q-item",{attrs:{clickable:"",to:"/dashboard/users"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-user-alt"}})],1),a("q-item-section",[a("q-item-label",[t._v("USERS")])],1)],1):t._e(),a("q-item",{attrs:{clickable:"",to:"/dashboard/reports"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-user-alt"}})],1),a("q-item-section",[a("q-item-label",[t._v("SCHEDULE")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/dashboard/performance"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"school"}})],1),a("q-item-section",[a("q-item-label",[t._v("PERFORMANCE")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/dashboard/couriers"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"school"}})],1),a("q-item-section",[a("q-item-label",[t._v("COURIERS")])],1)],1),a("q-item",{attrs:{clickable:"",to:"/dashboard/routes"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"school"}})],1),a("q-item-section",[a("q-item-label",[t._v("ROUTES")])],1)],1)],1)},i=[],n={name:"BaseDrawer",computed:{userLevel:{get:function(){return this.$store.state.auth.userLevel}}}},c=n,l=a("2877"),u=a("0170"),m=a("66e5"),d=a("4074"),b=a("0016"),p=a("eebe"),f=a.n(p),h=Object(l["a"])(c,r,i,!1,null,null,null),q=h.exports;f()(h,"components",{QItemLabel:u["a"],QItem:m["a"],QItemSection:d["a"],QIcon:b["a"]});var v=a("b06b"),w={name:"MyLayout",components:{BaseDrawer:q},data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop,hasTabs:!1}},computed:{user:{get:function(){return this.$store.state.auth.user},set:function(t){this.$store.commit("auth/user",t)}},pageTitle:{get:function(){return this.$store.state.auth.pageTitle}}},created:function(){},methods:{openURL:v["a"],logout:function(){this.$store.commit("auth/token",""),this.$store.commit("auth/user",{}),this.$router.push("/login")},touchHeld:function(){console.log("Touch held!"),alert("Touch held!")},checkTabs:function(){var t=this;this.$nextTick((function(){t.hasTabs=!(!t.$refs.toolbarTab&&!t.$refs.mainTab),console.log("hasTabs =>",t.hasTabs)}))}},mounted:function(){console.log(this.$q.platform.is.desktop),this.checkTabs()},updated:function(){this.checkTabs()}},g=w,k=(a("2b87"),a("4d5a")),Q=a("e359"),T=a("65c6"),_=a("9c40"),$=a("6ac5"),x=a("f20b"),L=a("cb32"),O=a("1c1c"),D=a("58a8"),y=a("9404"),C=a("eb85"),I=a("7ff0"),S=a("09e3"),E=a("f449"),R=a("7f67"),H=Object(l["a"])(g,s,o,!1,null,"bddd3b3c",null);e["default"]=H.exports;f()(H,"components",{QLayout:k["a"],QHeader:Q["a"],QToolbar:T["a"],QBtn:_["a"],QIcon:b["a"],QToolbarTitle:$["a"],QBtnDropdown:x["a"],QAvatar:L["a"],QList:O["a"],QItem:m["a"],QItemSection:d["a"],QItemLabel:u["a"],QBadge:D["a"],QDrawer:y["a"],QSeparator:C["a"],QFooter:I["a"],QPageContainer:S["a"]}),f()(H,"directives",{TouchHold:E["a"],ClosePopup:R["a"]})}}]);