(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{c0e1:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"q-mt-none",staticStyle:{"background-color":"#3E444E"}},[[s("div",[s("q-bar",{staticStyle:{"background-color":"#3E444E"}},[s("q-btn",{attrs:{dense:"",flat:"",icon:"close",color:"white"},on:{click:function(t){return e.$router.push("/dashboard/schedules")}}}),s("div",{staticClass:"text-h6 text-white"},[e._v("Edit Profile")])],1)],1),s("div",{staticClass:"q-pa-md",staticStyle:{"background-color":"#3E444E"}},[s("q-form",{ref:"userForm",staticClass:"text-center q-pa-md",staticStyle:{"max-width":"400px",width:"100%","border-radius":"10px",margin:"auto"},attrs:{rounded:"",model:e.userForm},on:{submit:e.onSubmit}},[s("q-card",{staticStyle:{"background-color":"#3E444E","box-shadow":"none"}},[s("q-card-section",{staticClass:"text-left q-pb-none"},[s("span",{staticClass:"text-white"},[e._v("First Name")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userForm.first_name,callback:function(t){e.$set(e.userForm,"first_name",t)},expression:"userForm.first_name"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Last Name")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userForm.last_name,callback:function(t){e.$set(e.userForm,"last_name",t)},expression:"userForm.last_name"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Username")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Email")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userForm.email,callback:function(t){e.$set(e.userForm,"email",t)},expression:"userForm.email"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Mobile")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userForm.phone,callback:function(t){e.$set(e.userForm,"phone",t)},expression:"userForm.phone"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("ZipCode")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userForm.zipcode,callback:function(t){e.$set(e.userForm,"zipcode",t)},expression:"userForm.zipcode"}})],1),s("q-card-actions",{attrs:{align:"center"}},[s("div",{staticClass:"q-px-md"},[s("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{"no-caps":"",dense:"",rounded:"",label:"Logout",color:"blue-7"},on:{click:function(t){return e.logout()}}}),e._v("  \n              "),s("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:"Update","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)])],1)],1)],1)],s("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[s("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"purple-7"}})],1)],2)},r=[],o=s("967e"),n=s.n(o),i=(s("96cf"),s("1e53")),c=s("f508"),l={name:"Profile",data:function(){return{isNewPage:!1,userForm:{first_name:"",last_name:"",name:"",phone:"",email:"",zipcode:""},currentUserID:""}},created:function(){this.getUserInfo()},methods:{logout:function(){this.$store.commit("auth/token",""),this.$store.commit("auth/user",{}),this.$router.push("/login")},getUserInfo:function(){var e,t;return n.a.async((function(s){while(1)switch(s.prev=s.next){case 0:return e={},c["a"].show(),s.prev=2,s.next=5,n.a.awrap(i["a"].getMyProfile(e));case 5:t=s.sent,this.userForm=t.data.user,c["a"].hide(),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](2),c["a"].hide();case 13:case"end":return s.stop()}}),null,this,[[2,10]])},onSubmit:function(){var e,t;return n.a.async((function(s){while(1)switch(s.prev=s.next){case 0:return e={data:this.userForm},s.prev=1,s.next=4,n.a.awrap(i["a"].updateUserInfo(e));case 4:t=s.sent,console.log("res",t),this.$q.notify({color:"positive",position:"top",textColor:"white",message:"User is updated successfully"}),this.$router.push("/dashboard/schedules"),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](1),this.$router.push("/dashboard/schedules");case 13:case"end":return s.stop()}}),null,this,[[1,10]])}}},u=l,d=s("2877"),p=s("9989"),m=s("d847"),h=s("9c40"),b=s("0378"),f=s("f09f"),x=s("a370"),q=s("27f9"),w=s("4b7e"),g=s("de5e"),v=s("5096"),C=s("eebe"),k=s.n(C),F=Object(d["a"])(u,a,r,!1,null,null,null);t["default"]=F.exports;k()(F,"components",{QPage:p["a"],QBar:m["a"],QBtn:h["a"],QForm:b["a"],QCard:f["a"],QCardSection:x["a"],QInput:q["a"],QCardActions:w["a"],QPageSticky:g["a"],QPageScroller:v["a"]})}}]);