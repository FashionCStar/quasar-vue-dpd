(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"9d4a":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"q-mt-none",staticStyle:{"background-color":"#3E444E"}},[[s("div",[s("div",[s("q-bar",{staticStyle:{"background-color":"#3E444E"}},[s("q-btn",{attrs:{dense:"",flat:"",icon:"close",color:"white"},on:{click:function(t){return e.$router.push("/dashboard/users")}}}),s("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.isNewPage?"Add User":"Edit User"))])],1)],1),s("div",{staticClass:"q-px-md",staticStyle:{"background-color":"#3E444E"}},[s("q-form",{ref:"userForm",staticClass:"text-center q-px-md",staticStyle:{"max-width":"400px",width:"100%",margin:"auto"},attrs:{model:e.user},on:{submit:e.onSubmit}},[s("q-card",{staticStyle:{"background-color":"#3E444E","box-shadow":"none"}},[s("q-card-section",{staticClass:"text-left q-pb-none"},[s("span",{staticClass:"text-white"},[e._v("First Name")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.user.first_name,callback:function(t){e.$set(e.user,"first_name",t)},expression:"user.first_name"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Last Name")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.user.last_name,callback:function(t){e.$set(e.user,"last_name",t)},expression:"user.last_name"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Username")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Email")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Mobile")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("ZipCode")]),s("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.user.zipcode,callback:function(t){e.$set(e.user,"zipcode",t)},expression:"user.zipcode"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Password")]),s("base-text-field",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","normalize-bottom":"",icon:"mdi-card",clearable:"",type:"password","hide-show-password":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"mdi-account-key"}})]},proxy:!0}]),model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),s("q-card-section",{staticClass:"text-left q-py-none"},[s("span",{staticClass:"text-white"},[e._v("Confirm")]),s("base-text-field",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","normalize-bottom":"",icon:"mdi-card",clearable:"",type:"password",rules:[function(t){return t===e.user.password||"Password is not match"}],"hide-show-password":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"mdi-account-key"}})]},proxy:!0}]),model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1),s("q-card-actions",{attrs:{align:"center"}},[s("div",{staticClass:"q-px-md"},[s("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:e.isNewPage?"Add New":"Update","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)])],1)],1)],1)])]],2)},r=[],n=s("a34a"),o=s.n(n),i=(s("96cf"),s("c973")),c=s.n(i),l=s("f508"),u=s("1e53"),d={name:"NewUser",data:function(){return{user:{id:"",name:"",password:"",confirmPassword:"",phone:"",email:"",first_name:"",last_name:"",zipcode:"",user_type:1},userAvatar:{},isNewPage:!1}},created:function(){var e=this;return c()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.commit("auth/pageTitle",e.$router.currentRoute.meta.title),e.isNew(),e.isNewPage){t.next=5;break}return t.next=5,e.getUserInfo(e.user.id);case 5:case"end":return t.stop()}}),t)})))()},methods:{isNew:function(){null!==this.$router.currentRoute.params.id&&void 0!==this.$router.currentRoute.params.id&&""!==this.$router.currentRoute.params.id?(this.isNewPage=!1,this.user.id=this.$router.currentRoute.params.id):this.isNewPage=!0},getUserInfo:function(){var e=c()(o.a.mark((function e(t){var s;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l["a"].show(),e.prev=1,e.next=4,u["a"].getUserInfo(t);case 4:s=e.sent,this.user=s.data.user,console.log("user details",s.data.user),l["a"].hide(),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),l["a"].hide(),this.$router.push("/dashboard/users");case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));function t(t){return e.apply(this,arguments)}return t}(),addAvatar:function(e){this.userAvatar=e[0]},onSubmit:function(){var e=this;return c()(o.a.mark((function t(){var s,a,r;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isNewPage){t.next=17;break}return l["a"].show(),t.prev=2,t.next=5,u["a"].registerUser(e.user);case 5:s=t.sent,console.log("res",s.data),l["a"].hide(),e.$q.notify({color:"positive",textColor:"white",position:"top",message:"User is registered successfully"}),e.$router.push("/dashboard/users"),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](2),l["a"].hide();case 15:t.next=33;break;case 17:return a={data:e.user},a.conditions={id:e.user.id},l["a"].show(),t.prev=20,t.next=23,u["a"].updateUser(a);case 23:r=t.sent,l["a"].hide(),console.log("result",r.data),t.next=32;break;case 28:t.prev=28,t.t1=t["catch"](20),l["a"].hide(),console.log("error",t.t1);case 32:e.$router.push("/dashboard/users");case 33:case"end":return t.stop()}}),t,null,[[2,12],[20,28]])})))()}}},p=d,m=s("2877"),h=s("9989"),b=s("9c40"),w=s("d847"),x=s("0378"),f=s("f09f"),q=s("ee89"),v=s("a370"),g=s("27f9"),C=s("0016"),k=s("4b7e"),y=s("eebe"),_=s.n(y),$=Object(m["a"])(p,a,r,!1,null,null,null);t["default"]=$.exports;_()($,"components",{QPage:h["a"],QBtn:b["a"],QBar:w["a"],QForm:x["a"],QCard:f["a"],QUploader:q["a"],QCardSection:v["a"],QInput:g["a"],QIcon:C["a"],QCardActions:k["a"]})}}]);