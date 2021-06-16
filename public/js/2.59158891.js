(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"59c5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"q-mt-none",staticStyle:{"background-color":"#3E444E"}},[[r("div",[r("div",[r("q-bar",{staticStyle:{"background-color":"#3E444E"}},[r("q-btn",{attrs:{dense:"",flat:"",icon:"close",color:"white"},on:{click:function(t){return e.$router.push("/dashboard/drivers")}}}),r("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.isNewPage?"Add Driver":"Edit Driver"))])],1)],1),r("div",{staticClass:"q-px-md",staticStyle:{"background-color":"#3E444E"}},[r("q-form",{ref:"driverForm",staticClass:"text-center q-px-md",staticStyle:{"max-width":"400px",width:"100%",margin:"auto"},attrs:{model:e.driver},on:{submit:e.onSubmit}},[r("q-card",{staticStyle:{"background-color":"#3E444E","box-shadow":"none"}},[r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Full Name")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.driver.driver_name,callback:function(t){e.$set(e.driver,"driver_name",t)},expression:"driver.driver_name"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Mobile")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.driver.phone,callback:function(t){e.$set(e.driver,"phone",t)},expression:"driver.phone"}})],1),"admin"===e.userLevel||"client"===e.userLevel?r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Depot Location")]),r("q-select",{staticClass:"q-ma-none q-pb-md",attrs:{dense:"",required:"",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:e.filteredDepots,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.depot_location},"emit-value":"","map-options":"","label-color":"grey-7",behavior:"menu","bg-color":"white","input-class":"text-black","hide-dropdown-icon":!0,color:"blue-7"},on:{filter:e.filterFnDepots},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.driver.depot_id?r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(t){return e.removeSelectedDepot()}}}):e._e()]},proxy:!0}],null,!1,871140911),model:{value:e.driver.depot_id,callback:function(t){e.$set(e.driver,"depot_id",t)},expression:"driver.depot_id"}})],1):e._e(),r("q-card-section",{staticClass:"text-left q-py-none row"},[r("div",{staticClass:"col-6"},[r("q-radio",{staticClass:"q-mx-auto text-white",attrs:{val:"per_stop",label:"PAY PER STOP",color:"white","keep-color":""},model:{value:e.driver.pay_type,callback:function(t){e.$set(e.driver,"pay_type",t)},expression:"driver.pay_type"}})],1),r("div",{staticClass:"col-6"},[r("q-radio",{staticClass:"q-mx-auto text-white",attrs:{val:"fixed",label:"FIXED RATE",color:"white","keep-color":""},model:{value:e.driver.pay_type,callback:function(t){e.$set(e.driver,"pay_type",t)},expression:"driver.pay_type"}})],1)]),r("q-card-section",{staticClass:"text-left q-py-none row"},[r("div",{staticClass:"col-6"},[r("q-radio",{staticClass:"q-mx-auto text-white",attrs:{val:.2,label:"VAT 20.00%",color:"white","keep-color":""},model:{value:e.driver.vat_percentage,callback:function(t){e.$set(e.driver,"vat_percentage",t)},expression:"driver.vat_percentage"}})],1),r("div",{staticClass:"col-6"},[r("q-radio",{staticClass:"q-mx-auto text-white",attrs:{val:0,label:"VAT 0.00%",color:"white","keep-color":""},model:{value:e.driver.vat_percentage,callback:function(t){e.$set(e.driver,"vat_percentage",t)},expression:"driver.vat_percentage"}})],1)]),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Payment")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.driver.pay_amount,callback:function(t){e.$set(e.driver,"pay_amount",t)},expression:"driver.pay_amount"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("E-Mail")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","input-class":"text-black text-center"},model:{value:e.driver.email,callback:function(t){e.$set(e.driver,"email",t)},expression:"driver.email"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Password")]),r("base-text-field",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","normalize-bottom":"",icon:"mdi-card",clearable:"",type:"password","hide-show-password":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"mdi-account-key"}})]},proxy:!0}]),model:{value:e.driver.password,callback:function(t){e.$set(e.driver,"password",t)},expression:"driver.password"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("span",{staticClass:"text-white"},[e._v("Confirm")]),r("base-text-field",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"",required:"","bg-color":"white",color:"blue-7","normalize-bottom":"",icon:"mdi-card",clearable:"",type:"password",rules:[function(t){return t===e.driver.password||"Password is not match"}],"hide-show-password":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("q-icon",{attrs:{name:"mdi-account-key"}})]},proxy:!0}]),model:{value:e.driver.confirmPassword,callback:function(t){e.$set(e.driver,"confirmPassword",t)},expression:"driver.confirmPassword"}})],1),r("q-card-section",{staticClass:"text-left q-py-none"},[r("q-checkbox",{staticClass:"q-mx-auto text-white",attrs:{val:!0,label:"Allow login to see performance",color:"grey",dark:""},model:{value:e.driver.has_access,callback:function(t){e.$set(e.driver,"has_access",t)},expression:"driver.has_access"}})],1),r("q-card-actions",{attrs:{align:"center"}},[r("div",{staticClass:"q-px-md"},[e.isNewPage?e._e():r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{"no-caps":"",dense:"",rounded:"",label:"Delete",color:"blue-7"},on:{click:e.remove}}),e._v("  \n                "),r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:e.isNewPage?"Add New":"Update","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)])],1)],1)],1)])]],2)},s=[],i=(r("7514"),r("a34a")),o=r.n(i),n=(r("96cf"),r("c973")),c=r.n(n),l=r("f508"),d=r("1e53"),u={name:"NewDriver",data:function(){return{driver:{id:"",full_name:"",driver_name:"",password:"",confirmPassword:"",phone:"",email:"",pay_type:"",vat_percentage:"",pay_amount:"",has_access:0,depot_id:""},pay_options:[{label:"PAY PER STOP",value:"per_stop"},{label:"FIXED RATE",value:"fixed"}],vat_options:[{label:"VAT 20.00%",value:.2},{label:"VAT 0.00%",value:0}],userAvatar:{},isNewPage:!1,depots:[],filteredDepots:[]}},created:function(){var e=this;return c()(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("auth/pageTitle",e.$router.currentRoute.meta.title),e.isNew(),t.next=4,e.getDepotList();case 4:if(e.isNewPage){t.next=8;break}return e.filteredDepots=e.depots,t.next=8,e.getDriverInfo(e.driver.id);case 8:case"end":return t.stop()}}),t)})))()},computed:{user:{get:function(){return this.$store.state.auth.user}},userLevel:{get:function(){return this.$store.state.auth.userLevel}}},methods:{isNew:function(){null!==this.$router.currentRoute.params.id&&void 0!==this.$router.currentRoute.params.id&&""!==this.$router.currentRoute.params.id?(this.isNewPage=!1,this.driver.id=this.$router.currentRoute.params.id):this.isNewPage=!0},getDepotList:function(){var e=c()(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["a"].getDepotList();case 3:t=e.sent,this.depots=t.data.data,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),getDriverInfo:function(){var e=c()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l["a"].show(),e.prev=1,e.next=4,d["a"].getDriverInfo(t);case 4:r=e.sent,this.driver=r.data.driver,console.log("driver details",r.data.driver),l["a"].hide(),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),l["a"].hide(),this.$router.push("/dashboard/drivers");case 14:case"end":return e.stop()}}),e,this,[[1,10]])})));function t(t){return e.apply(this,arguments)}return t}(),addAvatar:function(e){this.userAvatar=e[0]},onSubmit:function(){var e=this;return c()(o.a.mark((function t(){var r,a,s;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("user"===e.userLevel&&(e.driver.depot_id=e.user.depot_id),!e.isNewPage){t.next=18;break}return l["a"].show(),t.prev=3,t.next=6,d["a"].createDriver(e.driver);case 6:r=t.sent,console.log("res",r.data),l["a"].hide(),e.$q.notify({color:"positive",textColor:"white",position:"top",message:"Driver is registered successfully"}),e.$router.push("/dashboard/drivers"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),l["a"].hide();case 16:t.next=34;break;case 18:return a={data:e.driver},a.conditions={id:e.driver.id},l["a"].show(),t.prev=21,t.next=24,d["a"].updateDriver(a);case 24:s=t.sent,l["a"].hide(),console.log("result",s.data),t.next=33;break;case 29:t.prev=29,t.t1=t["catch"](21),l["a"].hide(),console.log("error",t.t1);case 33:e.$router.push("/dashboard/drivers");case 34:case"end":return t.stop()}}),t,null,[[3,13],[21,29]])})))()},remove:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove "+this.driver.driver_name+"?",cancel:!0,persistent:!0}).onOk(c()(o.a.mark((function t(){var r,a;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={conditions:{id:e.driver.id}},l["a"].show(),t.prev=2,t.next=5,d["a"].removeDriver(r);case 5:a=t.sent,l["a"].hide(),console.log("remove result",a),e.$q.notify({color:"positive",position:"top",message:e.driver.driver_name+" is removed successfully !"}),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),l["a"].hide();case 14:e.$router.push("/dashboard/drivers");case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).onCancel((function(){})).onDismiss((function(){}))},filterFnDepots:function(e,t,r){var a=this;t((function(){if(""===e)a.filteredDepots=[];else{var t=e.toLowerCase();a.filteredDepots=a.depots.filter((function(e){return e.depot_location.toLowerCase().indexOf(t)>-1})),a.filteredDepots=a.filteredDepots.slice(0,3)}}),(function(t){if(""!==e&&t.options.length>0){var r=t.options.find((function(t){return t.depot_location.toLowerCase()===e.toLowerCase()}));r&&t.add(r)}}))},removeSelectedDepot:function(){this.driver.depot_id=""}}},p=u,v=r("2877"),h=r("9989"),f=r("d847"),m=r("9c40"),b=r("0378"),w=r("f09f"),x=r("ee89"),q=r("a370"),_=r("27f9"),y=r("ddd8"),g=r("0016"),k=r("3786"),C=r("8f8e"),D=r("4b7e"),$=r("eebe"),P=r.n($),S=Object(v["a"])(p,a,s,!1,null,null,null);t["default"]=S.exports;P()(S,"components",{QPage:h["a"],QBar:f["a"],QBtn:m["a"],QForm:b["a"],QCard:w["a"],QUploader:x["a"],QCardSection:q["a"],QInput:_["a"],QSelect:y["a"],QIcon:g["a"],QRadio:k["a"],QCheckbox:C["a"],QCardActions:D["a"]})}}]);