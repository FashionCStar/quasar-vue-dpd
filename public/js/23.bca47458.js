(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{9952:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[[r("div",[r("q-table",{class:"ios"===e.is_mobile?"my-sticky-dynamic table-top-ios":"android"===e.is_mobile?"my-sticky-dynamic table-top-android":"my-sticky-dynamic",attrs:{data:e.monthlyList,columns:e.columns,"row-key":"report_date",filter:e.filter,"binary-state-sort":"",pagination:e.pagination,"virtual-scroll":"","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"rows-per-page-options":[0]},on:{request:e.getMonthlyListByDriver,"update:pagination":function(t){e.pagination=t},"virtual-scroll":e.onScroll},scopedSlots:e._u([{key:"top",fn:function(){return[r("div",{staticClass:"col-6 row justify-start"},[r("q-input",{staticStyle:{width:"168px"},attrs:{dense:"",debounce:"300",placeholder:"Search","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{attrs:{name:"search",color:"white"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),r("div",{staticClass:"col-6 row justify-end"},[r("q-input",{staticClass:"q-mb-sm",staticStyle:{width:"168px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:e.onFromDateChanged},model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}})],1)],1)]},proxy:!0}]),model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}}),r("q-input",{staticClass:"q-ml-xs q-mb-sm",staticStyle:{width:"168px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:e.onEndDateChanged},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1)]},proxy:!0}]),model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)]},proxy:!0},{key:"body",fn:function(t){return[r("q-tr",{attrs:{props:t}},[r("q-td",{key:"index",attrs:{props:t}},[e._v(e._s(t.row.index))]),r("q-td",{key:"report_date",staticClass:"text-uppercase",attrs:{props:t}},[e._v(e._s(e.changeDateFormat(t.row.report_date)))]),r("q-td",{key:"route_number",attrs:{props:t}},[e._v(e._s(t.row.route_number))]),r("q-td",{key:"driver_name",attrs:{props:t}},[e._v(e._s(t.row.driver_name))]),r("q-td",{key:"is_group",attrs:{props:t}},[e._v(e._s(1===t.row.is_group?"DAILY":"EXTRA"))])],1)]}},{key:"bottom",fn:function(){return[r("div",{staticClass:"col-12 row justify-between"},[r("div",{staticClass:"q-my-auto"},[r("q-btn",{staticClass:"q-ma-none",staticStyle:{width:"60px",height:"30px"},attrs:{label:"Export","no-caps":"",dense:"",rounded:"",outline:""},on:{click:e.exportTable}})],1),r("div",{staticClass:"row justify-end items-center"},[e._v("\n              Total Records: "+e._s(e.pagination.rowsNumber)+"\n              ")])])]},proxy:!0}])})],1),r("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"scale","transition-hide":"scale"},model:{value:e.showDetail,callback:function(t){e.showDetail=t},expression:"showDetail"}},[r("q-card",{staticStyle:{"background-color":"#3E444E"}},[r("q-bar",[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[r("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1),r("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.dialogTitle))])],1),r("q-separator"),r("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[r("q-form",{ref:"selectedRecord",staticStyle:{"max-width":"400px",margin:"auto"},attrs:{model:e.selectedRecord},on:{submit:e.onSubmit}},[r("q-card",{staticStyle:{"background-color":"#3E444E"}},[r("q-card-section",[r("q-input",{attrs:{dense:"",outlined:"","bg-color":"white","input-class":"text-black text-center",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-calendar",{ref:"calendar",class:e.$q.dark.isActive?"bg-blue-grey-3":"bg-grey-1",staticStyle:{"max-width":"300px","max-height":"180px","min-width":"auto",overflow:"hidden"},attrs:{"show-work-weeks":"",view:"month","mini-mode":"","enable-outside-days":"",bordered:"",locale:"en-us"},model:{value:e.selectedRecord.report_date,callback:function(t){e.$set(e.selectedRecord,"report_date",t)},expression:"selectedRecord.report_date"}})],1)],1)]},proxy:!0}]),model:{value:e.selectedRecord.report_date,callback:function(t){e.$set(e.selectedRecord,"report_date",t)},expression:"selectedRecord.report_date"}})],1),r("q-separator",{attrs:{color:"grey-4"}}),r("q-card-section",[r("q-select",{staticClass:"q-mb-xs",attrs:{dense:"",label:"Driver",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:e.filteredNames,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.driver_name},"emit-value":"","map-options":"",behavior:"menu","bg-color":"white","input-class":"text-black",color:"blue-7"},on:{filter:e.filterFn},model:{value:e.selectedRecord.driver_id,callback:function(t){e.$set(e.selectedRecord,"driver_id",t)},expression:"selectedRecord.driver_id"}}),r("q-select",{staticClass:"q-mb-xs",attrs:{dense:"",required:"",label:"Route",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:e.routes,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.route_number},"emit-value":"","map-options":"",behavior:"menu","bg-color":"white","input-class":"text-black",color:"blue-7"},model:{value:e.selectedRecord.route_id,callback:function(t){e.$set(e.selectedRecord,"route_id",t)},expression:"selectedRecord.route_id"}})],1),r("q-card-actions",{attrs:{align:"center"}},[r("q-btn",{staticClass:"q-mt-xs",staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:e.isNewRecord?"Add":"Update","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)],1)],1)],1)],1)],1)]],2)},i=[],n=(r("7514"),r("a34a")),o=r.n(n),s=(r("96cf"),r("c973")),l=r.n(s),c=(r("28a5"),r("1e53")),d=r("f508"),u=r("bd4c"),p=r("a357");function f(e,t){var r=void 0!==t?t(e):e;return r=void 0===r||null===r?"":String(r),r=r.split('"').join('""'),'"'.concat(r,'"')}var h={name:"MonthlyReportList",components:{},data:function(){return{filter:"",fromDate:"",fromDateAPI:"",endDate:"",endDateAPI:"",showDetail:!1,pagination:{sortBy:"report_date",descending:!0,page:1,rowsPerPage:100,rowsNumber:2e4},columns:[{name:"index",required:!0,label:"NO",align:"left",field:"index"},{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"driver_name",required:!0,label:"DRIVER",align:"left",field:"driver_name"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"}],columns_admin:[{name:"index",required:!0,label:"NO",align:"left",field:"index"},{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"driver_name",required:!0,label:"DRIVER",align:"left",field:"driver_name"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"},{name:"user_name",required:!0,label:"USER",align:"left",field:"user_name"}],monthlyList:[],monthlyAll:[],selectedRecord:{id:"",report_date:"",report_title:"",driver_id:"",route_id:""},isNewRecord:!1,dialogTitle:"",routes:[],drivers:[],filteredNames:[],rnc_id:"",is_mobile:"web",isDateFilter:!1}},computed:{driver:{get:function(){return this.$store.state.auth.driver}}},mounted:function(){this.checkPlatform(),this.$store.commit("auth/pageTitle",this.$router.currentRoute.meta.title),this.fromDate=u["b"].formatDate(new Date,"DD/MM/YY ddd"),this.fromDateAPI=u["b"].formatDate(u["b"].startOfDate(new Date,"month"),"YYYY-MM-DD"),this.endDate=u["b"].formatDate(new Date,"DD/MM/YY ddd"),this.endDateAPI=u["b"].formatDate(new Date,"YYYY-MM-DD"),this.getMonthlyListByDriver({pagination:this.pagination,filter:void 0})},methods:{checkPlatform:function(){this.$q.platform.is.mobile?this.$q.platform.is.ios?this.is_mobile="ios":this.is_mobile="android":this.is_mobile="web"},changeDateFormat:function(e){var t=u["b"].formatDate(u["b"].addToDate(u["b"].extractDate(e,"YYYY-MM-DD"),{hours:5}),"DD-MM-YY dddd");return t},onFromDateChanged:function(e){this.fromDateAPI=u["b"].formatDate(u["b"].extractDate(e,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.isDateFilter=!0,this.pagination.page=1,this.getMonthlyListByDriver({pagination:this.pagination,filter:this.filter})},onEndDateChanged:function(e){this.endDateAPI=u["b"].formatDate(u["b"].extractDate(e,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.isDateFilter=!0,this.pagination.page=1,this.getMonthlyListByDriver({pagination:this.pagination,filter:this.filter})},goToSingleDetail:function(e){var t=this;return l()(o.a.mark((function r(){return o.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.getDriverList();case 2:return r.next=4,t.getExtraRoutes();case 4:1===e.is_group?t.$router.push({name:"Edit Schedule",params:{report_no:e.report_no}}):(t.isNewRecord=!1,t.filteredNames=t.drivers,t.dialogTitle="Edit Extra Route",t.selectedRecord.id=e.id,t.selectedRecord.driver_id=e.driver_id,t.selectedRecord.route_id=e.route_id,t.selectedRecord.report_date=e.report_date),t.showDetail=!0;case 6:case"end":return r.stop()}}),r)})))()},addGroup:function(){this.$router.push("/dashboard/schedules/new")},cancelDetail:function(){this.showDetail=!1,this.selectedRecord={}},onSubmit:function(){var e=this;return l()(o.a.mark((function t(){var r,a;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selectedRecord.driver_id||(e.selectedRecord.driver_id="RNC"),r={data:e.selectedRecord},r.conditions={id:e.selectedRecord.id},d["a"].show(),t.prev=4,t.next=7,c["a"].updateSingleRecord(r);case 7:a=t.sent,d["a"].hide(),console.log("result",a.data),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](4),d["a"].hide(),console.log("error",t.t0);case 16:e.cancelDetail(),e.getMonthlyListByDriver({pagination:e.pagination,filter:e.filter}),console.log("selected record",e.selectedRecord);case 19:case"end":return t.stop()}}),t,null,[[4,12]])})))()},getExtraRoutes:function(){var e=l()(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return d["a"].show(),e.prev=1,e.next=4,c["a"].getExtraRoutes();case 4:t=e.sent,d["a"].hide(),this.routes=t.data.data,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),d["a"].hide();case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),getDriverList:function(){var e=l()(o.a.mark((function e(){var t;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return d["a"].show(),e.prev=1,e.next=4,c["a"].getDriverList();case 4:t=e.sent,d["a"].hide(),this.drivers=t.data.data,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),d["a"].hide();case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(){return e.apply(this,arguments)}return t}(),filterFn:function(e,t,r){var a=this;t((function(){if(""===e)a.filteredNames=[];else{var t=e.toLowerCase();a.filteredNames=a.drivers.filter((function(e){return e.driver_name.toLowerCase().indexOf(t)>-1})),a.filteredNames=a.filteredNames.slice(0,3)}}),(function(t){if(""!==e&&t.options.length>0){var r=t.options.find((function(t){return t.driver_name.toLowerCase()===e.toLowerCase()}));r&&t.add(r)}}))},onScroll:function(e){var t=this;return l()(o.a.mark((function r(){var a,i,n,s,l,c,d;return o.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.index,e.from,e.to,e.ref,i=t.pagination,n=i.page,s=i.rowsPerPage,l=i.rowsNumber,c=t.monthlyList.length-1,d=Math.ceil(l/s),!(a>0&&n<d&&a===c)){r.next=8;break}return t.pagination.page++,r.next=8,t.getMonthlyListByDriver({pagination:t.pagination,filter:t.filter,isScroll:!0});case 8:case"end":return r.stop()}}),r)})))()},getMonthlyListByDriver:function(){var e=l()(o.a.mark((function e(t){var r,a,i,n,s,l,u,p,f,h,m,v;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.pagination,a=r.page,i=r.rowsPerPage,n=r.rowsNumber,s=r.sortBy,l=r.descending,u=t.filter,p=t.isScroll,f=0===i?n:i,h=(a-1)*i,m={conditions:{is_date_filter:!0,driver_id:this.driver.id},start:h,numPerPage:f,sortBy:s,descending:l,fromDate:this.fromDateAPI,endDate:this.endDateAPI},u&&(m.conditions.filter=u),this.isDateFilter||(m.conditions.is_date_filter=!1),d["a"].show(),e.prev=9,e.next=12,c["a"].getMonthlyReportsByDriver(m);case 12:v=e.sent,d["a"].hide(),v.data.data.forEach((function(e,t){e.index=100*(a-1)+t+1})),this.monthlyList=p?this.monthlyList.concat(v.data.data):v.data.data,this.pagination.rowsNumber=v.data.totalCount,this.pagination.page=a,this.pagination.rowsPerPage=i,this.pagination.sortBy=s,this.pagination.descending=l,e.next=27;break;case 23:e.prev=23,e.t0=e["catch"](9),d["a"].hide(),console.log("errorrrrrrrrrr",e.t0);case 27:case"end":return e.stop()}}),e,this,[[9,23]])})));function t(t){return e.apply(this,arguments)}return t}(),getMonthlyAll:function(){var e=l()(o.a.mark((function e(t){var r,a,i;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.filter,a={conditions:{is_date_filter:!0},fromDate:this.fromDateAPI,endDate:this.endDateAPI},r&&(a.conditions.filter=r),this.isDateFilter||(a.conditions.is_date_filter=!1),d["a"].show(),e.prev=5,e.next=8,c["a"].getMonthlyReportsAll(a);case 8:i=e.sent,d["a"].hide(),i.data.data.forEach((function(e,t){e.index=t+1})),this.monthlyAll=i.data.data,e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](5),d["a"].hide(),console.log("errorrrrrrrrrr",e.t0);case 18:case"end":return e.stop()}}),e,this,[[5,14]])})));function t(t){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove "+e.report_title+"?",cancel:!0,persistent:!0}).onOk(l()(o.a.mark((function r(){var a,i;return o.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={conditions:{id:e.id}},d["a"].show(),r.prev=2,r.next=5,c["a"].removeReport(a);case 5:i=r.sent,d["a"].hide(),console.log("remove result",i),t.$q.notify({color:"positive",position:"top",message:e.report_title+" is removed successfully !"}),t.getMonthlyListByDriver({pagination:t.pagination,filter:t.filter}),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](2),d["a"].hide();case 15:case"end":return r.stop()}}),r,null,[[2,12]])})))).onCancel((function(){})).onDismiss((function(){}))},exportTable:function(){var e=this;return l()(o.a.mark((function t(){var r,a,i;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMonthlyAll({filter:e.filter});case 2:r=e.columns,a=[r.map((function(e){return f(e.label)}))].concat(e.monthlyAll.map((function(e){return r.map((function(t){return"is_group"===t.field?f(1===e.is_group?"DAILY":"EXTRA",t.format):"user_name"===t.field?f(e.user.full_name,t.format):f(e[t.field],t.format)})).join(",")}))).join("\r\n"),i=Object(p["a"])("table-export.csv",a,"text/csv"),!0!==i&&e.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"});case 6:case"end":return t.stop()}}),t)})))()}},created:function(){}},m=h,v=r("2877"),g=r("9989"),b=r("eaac"),D=r("27f9"),w=r("0016"),_=r("7cbe"),x=r("52ee"),y=r("bd08"),q=r("db86"),k=r("9c40"),R=r("24e8"),M=r("f09f"),Y=r("d847"),C=r("05c0"),P=r("eb85"),S=r("a370"),E=r("0378"),A=r("ddd8"),L=r("4b7e"),N=r("7f67"),T=r("eebe"),Q=r.n(T),B=Object(v["a"])(m,a,i,!1,null,null,null);t["default"]=B.exports;Q()(B,"components",{QPage:g["a"],QTable:b["a"],QInput:D["a"],QIcon:w["a"],QPopupProxy:_["a"],QDate:x["a"],QTr:y["a"],QTd:q["a"],QBtn:k["a"],QDialog:R["a"],QCard:M["a"],QBar:Y["a"],QTooltip:C["a"],QSeparator:P["a"],QCardSection:S["a"],QForm:E["a"],QSelect:A["a"],QCardActions:L["a"]}),Q()(B,"directives",{ClosePopup:N["a"]})}}]);