(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"5ad5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{staticClass:"shadow-2 rounded-borders",attrs:{view:"lHh lpr lFf"}},[r("q-header",{staticClass:"bg-white text-primary",attrs:{bordered:""}},[r("q-toolbar",[r("router-link",{attrs:{to:"/"}},[r("q-img",{staticStyle:{width:"150px"},attrs:{src:a("9d64")}})],1),r("q-toolbar-title")],1)],1),r("div",{staticClass:"q-pa-md",staticStyle:{"margin-top":"63px"}})],1)},s=[],n=a("967e"),o=a.n(n),i=(a("96cf"),a("f508")),c=a("1e53"),u={name:"ConfirmUser",data:function(){return{token:""}},created:function(){this.token=this.$router.currentRoute.query.token,this.confirmUser(this.token)},methods:{confirmUser:function(t){var e;return o.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return i["a"].show(),t.prev=1,t.next=4,o.a.awrap(c["a"].confirmUser({},this.token));case 4:e=t.sent,i["a"].hide(),this.$q.notify({color:"positive",position:"top",message:e.data.success}),this.$router.push("/"),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),i["a"].hide();case 13:case"end":return t.stop()}}),null,this,[[1,10]])}}},l=u,p=a("2877"),d=a("4d5a"),h=a("e359"),f=a("65c6"),m=a("068f"),w=a("6ac5"),b=a("0378"),k=a("27f9"),v=a("9c40"),g=a("eebe"),q=a.n(g),x=Object(p["a"])(l,r,s,!1,null,null,null);e["default"]=x.exports;q()(x,"components",{QLayout:d["a"],QHeader:h["a"],QToolbar:f["a"],QImg:m["a"],QToolbarTitle:w["a"],QForm:b["a"],QInput:k["a"],QBtn:v["a"]})},"9d64":function(t,e,a){t.exports=a.p+"img/logo.a1ee02c8.png"}}]);