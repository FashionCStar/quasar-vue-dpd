(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"9d4a":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"q-mt-none",staticStyle:{"background-color":"#3E444E"}},[[a("div",[a("div",[a("q-bar",{staticStyle:{"background-color":"#3E444E"}},[a("q-btn",{attrs:{dense:"",flat:"",icon:"close",color:"white"},on:{click:function(t){return e.$router.push("/dashboard/users")}}}),a("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.isNewPage?"Add User":"Edit User"))])],1)],1),a("div",{staticClass:"q-px-md",staticStyle:{"background-color":"#3E444E"}},[a("q-form",{ref:"userForm",staticClass:"text-center q-px-md",staticStyle:{"max-width":"400px",width:"100%",margin:"auto"},attrs:{model:e.userData},on:{submit:e.onSubmit}},[a("q-card",{staticStyle:{"background-color":"#3E444E","box-shadow":"none"}},[a("q-card-section",{staticClass:"text-left q-pb-none"},[a("span",{staticClass:"text-white"},[e._v("Name")]),a("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userData.full_name,callback:function(t){e.$set(e.userData,"full_name",t)},expression:"userData.full_name"}})],1),a("q-card-section",{staticClass:"text-left q-py-none"},[a("span",{staticClass:"text-white"},[e._v("Username")]),a("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userData.name,callback:function(t){e.$set(e.userData,"name",t)},expression:"userData.name"}})],1),a("q-card-section",{staticClass:"text-left q-py-none"},[a("span",{staticClass:"text-white"},[e._v("Email")]),a("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userData.email,callback:function(t){e.$set(e.userData,"email",t)},expression:"userData.email"}})],1),a("q-card-section",{staticClass:"text-left q-py-none"},[a("span",{staticClass:"text-white"},[e._v("Mobile")]),a("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userData.phone,callback:function(t){e.$set(e.userData,"phone",t)},expression:"userData.phone"}})],1),a("q-card-section",{staticClass:"text-left q-py-none"},[a("span",{staticClass:"text-white"},[e._v("ZipCode")]),a("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userData.zipcode,callback:function(t){e.$set(e.userData,"zipcode",t)},expression:"userData.zipcode"}})],1),a("q-card-section",{staticClass:"text-left q-py-none"},[a("span",{staticClass:"text-white"},[e._v("Location")]),a("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.userData.belongs,callback:function(t){e.$set(e.userData,"belongs",t)},expression:"userData.belongs"}})],1),a("q-card-section",{staticClass:"text-left q-py-none"},[a("span",{staticClass:"text-white"},[e._v("Password")]),a("base-text-field",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","normalize-bottom":"",icon:"mdi-card",clearable:"",type:"password","hide-show-password":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"mdi-account-key"}})]},proxy:!0}]),model:{value:e.userData.password,callback:function(t){e.$set(e.userData,"password",t)},expression:"userData.password"}})],1),a("q-card-section",{staticClass:"text-left q-py-none"},[a("span",{staticClass:"text-white"},[e._v("Confirm")]),a("base-text-field",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","normalize-bottom":"",icon:"mdi-card",clearable:"",type:"password",rules:[function(t){return t===e.userData.password||"Password is not match"}],"hide-show-password":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"mdi-account-key"}})]},proxy:!0}]),model:{value:e.userData.confirmPassword,callback:function(t){e.$set(e.userData,"confirmPassword",t)},expression:"userData.confirmPassword"}})],1),a("q-card-section",{staticClass:"text-left q-py-none row"},[a("div",{staticClass:"col-12"},[a("q-checkbox",{staticClass:"q-mx-auto text-white",attrs:{value:e.allSelected,label:"ALL PLATFORM",color:"grey",dark:""},on:{input:e.selectAll}}),a("q-option-group",{staticClass:"q-mx-auto text-white",attrs:{type:"checkbox",color:"grey",dark:"",inline:"",options:e.roleOptions},model:{value:e.userData.user_roles,callback:function(t){e.$set(e.userData,"user_roles",t)},expression:"userData.user_roles"}})],1)]),a("q-card-actions",{attrs:{align:"center"}},[a("div",{staticClass:"q-px-md"},[a("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:e.isNewPage?"Add New":"Update","no-caps":"",dense:"",rounded:"",type:"submit"}}),e._v("  \n                "),"admin"===e.userLevel?a("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{"no-caps":"",dense:"",rounded:"",label:e.userData.is_active?"DEACTIVATE":"ACTIVATE",color:"blue-7"},on:{click:function(t){return e.activeUser()}}}):e._e()],1)])],1)],1)],1)])]],2)},r=[],o=(a("28a5"),a("a34a")),n=a.n(o),i=(a("96cf"),a("c973")),c=a.n(i),l=a("f508"),u=a("1e53"),d={name:"NewUser",data:function(){return{userData:{id:"",parent_id:"",user_roles:[],name:"",password:"",confirmPassword:"",phone:"",email:"",full_name:"",belongs:"",zipcode:"",user_type:1},userAvatar:{},isNewPage:!1,roleOptions:[{label:"SCHEDULE",value:"schedules"},{label:"PERFORMANCE",value:"performance"}]}},created:function(){var e=this;return c()(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.commit("auth/pageTitle",e.$router.currentRoute.meta.title),e.isNew(),e.isNewPage){t.next=5;break}return t.next=5,e.getUserInfo(e.userData.id);case 5:case"end":return t.stop()}}),t)})))()},computed:{selectLabel:function(){return this.allSelected?"DESELECT ALL":"SELECT ALL"},allSelected:function(){return this.userData.user_roles.length===this.roleOptions.length},userLevel:{get:function(){return this.$store.state.auth.userLevel}}},methods:{isNew:function(){null!==this.$router.currentRoute.params.id&&void 0!==this.$router.currentRoute.params.id&&""!==this.$router.currentRoute.params.id?(this.isNewPage=!1,this.userData.id=this.$router.currentRoute.params.id):this.isNewPage=!0},selectAll:function(){this.allSelected?this.userData.user_roles=[]:this.userData.user_roles=this.roleOptions.map((function(e){return e.value}))},getUserInfo:function(){var e=c()(n.a.mark((function e(t){var a;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l["a"].show(),e.prev=1,e.next=4,u["a"].getUserInfo(t);case 4:a=e.sent,this.userData=a.data.user,this.userData.user_roles?this.userData.user_roles=this.userData.user_roles.split(","):this.userData.user_roles=[],console.log("user details",this.userData.user_roles),l["a"].hide(),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),l["a"].hide(),this.$router.push("/dashboard/users");case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),addAvatar:function(e){this.userAvatar=e[0]},onSubmit:function(){var e=this;return c()(n.a.mark((function t(){var a,s,r;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isNewPage){t.next=17;break}return l["a"].show(),t.prev=2,t.next=5,u["a"].registerUser(e.userData);case 5:a=t.sent,console.log("res",a.data),l["a"].hide(),e.$q.notify({color:"positive",textColor:"white",position:"top",message:"User is registered successfully"}),e.$router.push("/dashboard/users"),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](2),l["a"].hide();case 15:t.next=33;break;case 17:return s={data:e.userData},s.conditions={id:e.userData.id},l["a"].show(),t.prev=20,t.next=23,u["a"].updateUser(s);case 23:r=t.sent,l["a"].hide(),console.log("result",r.data),t.next=32;break;case 28:t.prev=28,t.t1=t["catch"](20),l["a"].hide(),console.log("error",t.t1);case 32:e.$router.push("/dashboard/users");case 33:case"end":return t.stop()}}),t,null,[[2,12],[20,28]])})))()},activeUser:function(){var e=this;return c()(n.a.mark((function t(){var a,s;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={is_active:!e.userData.is_active},a.conditions={id:e.userData.id},l["a"].show(),t.prev=3,t.next=6,u["a"].activeUser(a);case 6:s=t.sent,console.log("res",s.data),l["a"].hide(),e.$q.notify({color:"positive",textColor:"white",position:"top",message:e.userData.is_active?"User is deactivated":"User is activated"}),e.$router.push("/dashboard/users"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),l["a"].hide();case 16:case"end":return t.stop()}}),t,null,[[3,13]])})))()}}},p=d,h=a("2877"),b=a("9989"),m=a("9c40"),x=a("d847"),f=a("0378"),w=a("f09f"),v=a("ee89"),q=a("a370"),D=a("27f9"),g=a("0016"),C=a("8f8e"),k=a("9f0a"),_=a("4b7e"),y=a("eebe"),$=a.n(y),E=Object(h["a"])(p,s,r,!1,null,null,null);t["default"]=E.exports;$()(E,"components",{QPage:b["a"],QBtn:m["a"],QBar:x["a"],QForm:f["a"],QCard:w["a"],QUploader:v["a"],QCardSection:q["a"],QInput:D["a"],QIcon:g["a"],QCheckbox:C["a"],QOptionGroup:k["a"],QCardActions:_["a"]})}}]);