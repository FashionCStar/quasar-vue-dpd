(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"59c5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"q-mt-none",staticStyle:{"background-color":"#3E444E"}},[[r("div",[r("div",[r("q-bar",{staticStyle:{"background-color":"#3E444E"}},[r("q-btn",{attrs:{dense:"",flat:"",icon:"close",color:"white"},on:{click:function(t){return e.$router.push("/dashboard/drivers")}}}),r("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.isNewPage?"Add Driver":"Edit Driver"))])],1)],1),r("div",{staticClass:"q-px-md",staticStyle:{"background-color":"#3E444E"}},[r("q-form",{ref:"driverForm",staticClass:"text-center q-px-md",staticStyle:{"max-width":"400px",width:"100%",margin:"auto"},attrs:{model:e.driver},on:{submit:e.onSubmit}},[r("q-card",{staticStyle:{"background-color":"#3E444E","box-shadow":"none"}},[r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Full Name")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.driver.driver_name,callback:function(t){e.$set(e.driver,"driver_name",t)},expression:"driver.driver_name"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Mobile")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.driver.phone,callback:function(t){e.$set(e.driver,"phone",t)},expression:"driver.phone"}})],1),r("q-card-section",{staticClass:"text-left q-py-none row"},[r("div",{staticClass:"col-6"},[r("q-radio",{staticClass:"q-mx-auto text-white",attrs:{val:"per_stop",label:"PAY PER STOP",color:"white","keep-color":""},model:{value:e.driver.pay_type,callback:function(t){e.$set(e.driver,"pay_type",t)},expression:"driver.pay_type"}})],1),r("div",{staticClass:"col-6"},[r("q-radio",{staticClass:"q-mx-auto text-white",attrs:{val:"fixed",label:"FIXED RATE",color:"white","keep-color":""},model:{value:e.driver.pay_type,callback:function(t){e.$set(e.driver,"pay_type",t)},expression:"driver.pay_type"}})],1)]),r("q-card-section",{staticClass:"text-left q-py-none row"},[r("div",{staticClass:"col-6"},[r("q-radio",{staticClass:"q-mx-auto text-white",attrs:{val:.2,label:"VAT 20.00%",color:"white","keep-color":""},model:{value:e.driver.vat_percentage,callback:function(t){e.$set(e.driver,"vat_percentage",t)},expression:"driver.vat_percentage"}})],1),r("div",{staticClass:"col-6"},[r("q-radio",{staticClass:"q-mx-auto text-white",attrs:{val:0,label:"VAT 0.00%",color:"white","keep-color":""},model:{value:e.driver.vat_percentage,callback:function(t){e.$set(e.driver,"vat_percentage",t)},expression:"driver.vat_percentage"}})],1)]),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Payment")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.driver.pay_amount,callback:function(t){e.$set(e.driver,"pay_amount",t)},expression:"driver.pay_amount"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("E-Mail")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.driver.email,callback:function(t){e.$set(e.driver,"email",t)},expression:"driver.email"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Password")]),r("base-text-field",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","normalize-bottom":"",icon:"mdi-card",clearable:"",type:"password","hide-show-password":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"mdi-account-key"}})]},proxy:!0}]),model:{value:e.driver.password,callback:function(t){e.$set(e.driver,"password",t)},expression:"driver.password"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Confirm")]),r("base-text-field",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","normalize-bottom":"",icon:"mdi-card",clearable:"",type:"password",rules:[function(t){return t===e.driver.password||"Password is not match"}],"hide-show-password":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"mdi-account-key"}})]},proxy:!0}]),model:{value:e.driver.confirmPassword,callback:function(t){e.$set(e.driver,"confirmPassword",t)},expression:"driver.confirmPassword"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("q-checkbox",{staticClass:"q-mx-auto text-white",attrs:{val:!0,label:"Allow login to see performance",color:"grey",dark:""},model:{value:e.driver.has_access,callback:function(t){e.$set(e.driver,"has_access",t)},expression:"driver.has_access"}})],1),r("q-card-actions",{attrs:{align:"center"}},[r("div",{staticClass:"q-px-md"},[e.isNewPage?e._e():r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{"no-caps":"",dense:"",rounded:"",label:"Delete",color:"blue-7"},on:{click:e.remove}}),e._v("  \n                "),r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:e.isNewPage?"Add New":"Update","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)])],1)],1)],1)])]],2)},s=[],i=r("a34a"),o=r.n(i),n=(r("96cf"),r("c973")),c=r.n(n),l=r("f508"),d=r("1e53"),u={name:"NewDriver",data:function(){return{driver:{id:"",full_name:"",driver_name:"",password:"",confirmPassword:"",phone:"",email:"",pay_type:"",vat_percentage:"",pay_amount:"",has_access:0},pay_options:[{label:"PAY PER STOP",value:"per_stop"},{label:"FIXED RATE",value:"fixed"}],vat_options:[{label:"VAT 20.00%",value:.2},{label:"VAT 0.00%",value:0}],userAvatar:{},isNewPage:!1}},created:function(){var e=this;return c()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.commit("auth/pageTitle",e.$router.currentRoute.meta.title),e.isNew(),e.isNewPage){t.next=5;break}return t.next=5,e.getDriverInfo(e.driver.id);case 5:case"end":return t.stop()}}),t)})))()},methods:{isNew:function(){null!==this.$router.currentRoute.params.id&&void 0!==this.$router.currentRoute.params.id&&""!==this.$router.currentRoute.params.id?(this.isNewPage=!1,this.driver.id=this.$router.currentRoute.params.id):this.isNewPage=!0},getDriverInfo:function(){var e=c()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l["a"].show(),e.prev=1,e.next=4,d["a"].getDriverInfo(t);case 4:r=e.sent,this.driver=r.data.driver,console.log("driver details",r.data.driver),l["a"].hide(),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),l["a"].hide(),this.$router.push("/dashboard/drivers");case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));function t(t){return e.apply(this,arguments)}return t}(),addAvatar:function(e){this.userAvatar=e[0]},onSubmit:function(){var e=this;return c()(o.a.mark((function t(){var r,a,s;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isNewPage){t.next=18;break}return console.log("driver",e.driver),l["a"].show(),t.prev=3,t.next=6,d["a"].createDriver(e.driver);case 6:r=t.sent,console.log("res",r.data),l["a"].hide(),e.$q.notify({color:"positive",textColor:"white",position:"top",message:"User is registered successfully"}),e.$router.push("/dashboard/drivers"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),l["a"].hide();case 16:t.next=34;break;case 18:return a={data:e.driver},a.conditions={id:e.driver.id},l["a"].show(),t.prev=21,t.next=24,d["a"].updateDriver(a);case 24:s=t.sent,l["a"].hide(),console.log("result",s.data),t.next=33;break;case 29:t.prev=29,t.t1=t["catch"](21),l["a"].hide(),console.log("error",t.t1);case 33:e.$router.push("/dashboard/drivers");case 34:case"end":return t.stop()}}),t,null,[[3,13],[21,29]])})))()},remove:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove "+this.driver.driver_name+"?",cancel:!0,persistent:!0}).onOk(c()(o.a.mark((function t(){var r,a;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={conditions:{id:e.driver.id}},l["a"].show(),t.prev=2,t.next=5,d["a"].removeDriver(r);case 5:a=t.sent,l["a"].hide(),console.log("remove result",a),e.$q.notify({color:"positive",position:"top",message:e.driver.driver_name+" is removed successfully !"}),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),l["a"].hide();case 14:e.$router.push("/dashboard/drivers");case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).onCancel((function(){})).onDismiss((function(){}))}}},p=u,v=r("2877"),h=r("9989"),m=r("d847"),b=r("9c40"),w=r("0378"),x=r("f09f"),f=r("ee89"),q=r("a370"),y=r("27f9"),g=r("3786"),_=r("0016"),k=r("8f8e"),C=r("4b7e"),$=r("eebe"),P=r.n($),E=Object(v["a"])(p,a,s,!1,null,null,null);t["default"]=E.exports;P()(E,"components",{QPage:h["a"],QBar:m["a"],QBtn:b["a"],QForm:w["a"],QCard:x["a"],QUploader:f["a"],QCardSection:q["a"],QInput:y["a"],QRadio:g["a"],QIcon:_["a"],QCheckbox:k["a"],QCardActions:C["a"]})}}]);