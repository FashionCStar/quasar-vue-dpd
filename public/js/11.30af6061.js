(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"3db5":function(e,t,r){},"4b57":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[[r("div",[r("q-table",{class:"ios"===e.is_mobile?"my-sticky-dynamic table-top-ios":"android"===e.is_mobile?"my-sticky-dynamic table-top-android":"my-sticky-dynamic",attrs:{data:e.reportList,columns:"admin"===e.userLevel?e.columns_admin:e.columns,"row-key":"report_date",filter:e.filter,"binary-state-sort":"",pagination:e.pagination,"virtual-scroll":"","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"rows-per-page-options":[0]},on:{request:e.getReportList,"update:pagination":function(t){e.pagination=t},"virtual-scroll":e.onScroll},scopedSlots:e._u([{key:"top",fn:function(){return[r("div",{staticClass:"col-6 row justify-start"},[r("q-btn",{staticStyle:{width:"168px",height:"40px"},attrs:{color:"blue-7",label:"+Add Record","no-caps":"",dense:"",rounded:""},on:{click:e.showAddRecordDlg}})],1),r("div",{staticClass:"col-6 row justify-end"},[r("q-input",{staticClass:"q-mb-sm",staticStyle:{width:"168px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:e.onFromDateChanged},model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}})],1)],1)]},proxy:!0}]),model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}}),r("q-input",{staticClass:"q-ml-xs q-mb-sm",staticStyle:{width:"168px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:e.onEndDateChanged},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1)]},proxy:!0}]),model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)]},proxy:!0},{key:"body",fn:function(t){return[r("q-tr",{attrs:{props:t},nativeOn:{click:function(r){1===t.row.is_group?e.goToDailyDetail(t.row):e.goToExtraDetail(t.row)}}},[r("q-td",{key:"no",attrs:{props:t}},[e._v(e._s(t.row.index))]),r("q-td",{key:"report_date",staticClass:"text-uppercase",attrs:{props:t}},[e._v(e._s(e.changeDateFormat(t.row.report_date)))]),r("q-td",{key:"is_group",attrs:{props:t}},[e._v(e._s(1===t.row.is_group?"DAILY":"EXTRA"))]),"admin"===e.userLevel?r("q-td",{key:"full_name",attrs:{props:t}},[e._v(e._s(t.row.user.full_name))]):e._e(),r("q-td",{key:"buttons",attrs:{props:t}},[r("q-btn",{attrs:{rounded:"",flat:"",icon:"fas fa-pen-alt"},on:{click:function(r){1===t.row.is_group?e.goToDailyDetail(t.row):e.goToExtraDetail(t.row)}},nativeOn:{click:function(e){e.stopPropagation()}}})],1)],1)]}},{key:"bottom",fn:function(){return[r("div",{staticClass:"col-12 row justify-between"},[r("div",{staticClass:"q-my-auto"}),r("div",{staticClass:"row justify-end items-center"},[e._v("\n              Total Records: "+e._s(e.pagination.rowsNumber)+"\n            ")])])]},proxy:!0}])})],1),r("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.showAddDlg,callback:function(t){e.showAddDlg=t},expression:"showAddDlg"}},[r("q-card",{staticStyle:{"background-color":"#3E444E","max-width":"500px","min-width":"352px","min-height":"500px"}},[r("q-bar",{staticStyle:{"background-color":"#272B33"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[r("q-tooltip",{attrs:{"content-class":"bg-white text-black"}},[e._v("Close")])],1)],1),r("q-separator"),r("div",{staticClass:"layout-center"},[r("q-card-section",[r("div",{staticClass:"text-h6 text-white text-center"},[e._v("What kind of record do you want to add?")])]),r("q-card-section",{staticClass:"q-pt-none"},[r("q-option-group",{staticClass:"q-mx-auto text-white",staticStyle:{width:"140px"},attrs:{options:e.add_options,type:"radio",size:"xl",color:"white","keep-color":""},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}})],1),r("q-card-section",{staticClass:"text-center q-pt-none"},[r("q-btn",{staticClass:"q-mt-xs",staticStyle:{width:"100px",height:"40px"},attrs:{label:"Add",color:"blue-7","no-caps":"",dense:"",rounded:""},on:{click:e.addRecord}})],1)],1)],1)],1),r("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.showExtraDetail,callback:function(t){e.showExtraDetail=t},expression:"showExtraDetail"}},[r("q-card",{staticStyle:{"background-color":"#3E444E","max-width":"500px","min-height":"500px"}},[r("q-bar",{staticStyle:{"background-color":"#272B33"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[r("q-tooltip",{attrs:{"content-class":"bg-white text-black"}},[e._v("Close")])],1),r("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.extraRecordTitle))])],1),r("q-separator"),r("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[r("q-form",{ref:"selectedRecord",staticStyle:{width:"320px",margin:"auto"},attrs:{model:e.selectedRecord},on:{submit:e.onSubmitExtra}},[r("div",{staticClass:"row justify-between q-col-gutter-md"},[r("div",{staticClass:"col-12"},[r("span",{staticClass:"text-white"},[e._v("Date")]),r("q-input",{attrs:{dense:"",outlined:"",color:"blue-7","bg-color":"white","input-class":"text-black text-center"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:e.onExtraReportDateChanged},model:{value:e.extraReportDate,callback:function(t){e.extraReportDate=t},expression:"extraReportDate"}})],1)],1)]},proxy:!0}]),model:{value:e.extraReportDate,callback:function(t){e.extraReportDate=t},expression:"extraReportDate"}}),r("q-separator",{staticClass:"q-my-md",attrs:{color:"grey-4"}}),r("span",{staticClass:"text-white"},[e._v("Driver")]),r("q-select",{staticClass:"q-mb-xs",attrs:{dense:"",required:"",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:e.filteredDriverNames,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.driver_name},"emit-value":"","map-options":"",behavior:"menu","bg-color":"white","input-class":"text-black",color:"blue-7","hide-dropdown-icon":!0},on:{filter:e.filterFnDrivers},model:{value:e.selectedRecord.driver_id,callback:function(t){e.$set(e.selectedRecord,"driver_id",t)},expression:"selectedRecord.driver_id"}}),r("span",{staticClass:"text-white"},[e._v("Route")]),r("q-select",{staticClass:"q-mb-xs",attrs:{dense:"",required:"",outlined:"",options:e.extraRoutes,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.route_number},"emit-value":"","map-options":"",behavior:"menu","bg-color":"white","input-class":"text-black",color:"blue-7","hide-dropdown-icon":!0},model:{value:e.selectedRecord.route_id,callback:function(t){e.$set(e.selectedRecord,"route_id",t)},expression:"selectedRecord.route_id"}})],1)]),r("q-card-actions",{attrs:{align:"center"}},[e.isNewExtraRecord?e._e():r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{"no-caps":"",dense:"",rounded:"",label:"Delete",color:"blue-7"},on:{click:e.removeExtra}}),r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{label:e.isNewExtraRecord?"Add":"Update",color:"blue-7","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)],1)],1)],1)],1),r("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.showDailyDetail,callback:function(t){e.showDailyDetail=t},expression:"showDailyDetail"}},[r("q-card",{staticStyle:{"background-color":"#3E444E","max-width":"500px","min-height":"500px"}},[r("q-bar",{staticStyle:{"background-color":"#272B33"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[r("q-tooltip",{attrs:{"content-class":"bg-white text-black"}},[e._v("Close")])],1),r("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.dailyRecordTitle))])],1),r("q-separator"),r("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"80vh"}},[r("q-form",{ref:"dailyReportForm",staticStyle:{width:"320px",margin:"auto"},attrs:{model:e.dailyReportForm},on:{submit:e.onSubmitDaily}},[r("div",{staticClass:"row justify-between q-col-gutter-md"},[r("div",{staticClass:"col-12"},[r("span",{staticClass:"text-white"},[e._v("Date")]),r("q-input",{staticClass:"q-py-none",attrs:{dense:"",outlined:"","bg-color":"white",color:"blue-7","input-class":"text-black"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"black"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:e.onDailyReportDateChanged},model:{value:e.dailyReportDate,callback:function(t){e.dailyReportDate=t},expression:"dailyReportDate"}})],1)],1)]},proxy:!0}]),model:{value:e.dailyReportDate,callback:function(t){e.dailyReportDate=t},expression:"dailyReportDate"}}),r("q-separator",{staticClass:"q-mt-md",attrs:{color:"grey-4"}}),e._l(e.dailyReportForm.report_data,(function(t,a){return r("div",{key:t.route_id,staticClass:"q-pt-md"},[r("span",{staticClass:"text-white"},[e._v("Driver")]),r("q-select",{staticClass:"q-ma-none q-pb-md",attrs:{dense:"",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:e.filteredDriverNames,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.driver_name},"emit-value":"","map-options":"","label-color":"grey-7",behavior:"menu","bg-color":"white","input-class":"text-black",rules:[function(t){return e.checkDriverDuplicates(t)||"This record is duplicated"}],"hide-dropdown-icon":!0,color:"blue-7"},on:{filter:e.filterFnDrivers},scopedSlots:e._u([{key:"append",fn:function(){return[""!==t.driver_id?r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(t){return e.removeSelectedDriver(a)}}}):e._e()]},proxy:!0}],null,!0),model:{value:t.driver_id,callback:function(r){e.$set(t,"driver_id",r)},expression:"data.driver_id"}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 q-pr-sm"},[r("span",{staticClass:"text-white"},[e._v("Route")]),r("q-input",{staticClass:"q-pb-md",attrs:{required:"",dense:"",outlined:"","bg-color":"blue-grey-4","input-class":"text-white q-pr-xl","label-color":"grey-3",color:"blue-7",value:t.route_number,disable:""}})],1),r("div",{staticClass:"col-6 q-pl-sm"},[r("span",{staticClass:"text-white"},[e._v("Stops")]),r("q-input",{staticClass:"q-pb-md",attrs:{dense:"",outlined:"","bg-color":"white","input-class":"text-black q-pr-xl","label-color":"grey-3",color:"blue-7"},model:{value:t.stops,callback:function(r){e.$set(t,"stops",r)},expression:"data.stops"}})],1)]),a<e.dailyReportForm.report_data.length-1?r("q-separator",{attrs:{color:"grey-4"}}):e._e()],1)}))],2)]),r("q-card-actions",{attrs:{align:"center"}},[r("div",{staticClass:"q-px-md"},[e.isNewDailyRecord?e._e():r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{"no-caps":"",dense:"",rounded:"",label:"Delete",color:"blue-7"},on:{click:function(t){return e.removeDaily(e.dailyReportForm.report_no)}}}),e._v("  \n                "),r("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:e.isNewDailyRecord?"Add":"Update","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)])],1)],1)],1)],1),r("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.showEmptyConfirm,callback:function(t){e.showEmptyConfirm=t},expression:"showEmptyConfirm"}},[r("q-card",{staticStyle:{"background-color":"#3E444E","max-width":"500px","min-width":"370px","min-height":"90vh"}},[r("q-bar",{staticStyle:{"background-color":"#272B33"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[r("q-tooltip",{attrs:{"content-class":"bg-white text-black"}},[e._v("Close")])],1)],1),r("div",{staticClass:"layout-center"},[r("q-card-section",{staticClass:"text-white"},[r("div",{staticClass:"text-h6 text-center"},[e._v("You did not provide the driver name of the routes "+e._s(e.checkEmptyDrivers().join(", "))+".")]),r("div",{staticClass:"text-h6 text-center"},[e._v("Do you want to continue?")])]),r("q-card-section",{staticClass:"text-center q-pt-none"},[r("q-btn",{staticClass:"q-mt-xs q-mx-xs",staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:"Back","no-caps":"",dense:"",rounded:""},on:{click:function(t){e.showEmptyConfirm=!1}}}),r("q-btn",{staticClass:"q-mt-xs q-mx-xs",staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:"Yes","no-caps":"",dense:"",rounded:""},on:{click:e.addDailyRecords}})],1)],1)],1)],1)]],2)},o=[],i=(r("7514"),r("a34a")),n=r.n(i),s=(r("96cf"),r("c973")),l=r.n(s),c=(r("28a5"),r("1e53")),d=r("f508"),p=r("bd4c"),u=r("a357");function h(e,t){console.log("csv",e);var r=void 0!==t?t(e):e;return r=void 0===r||null===r?"":String(r),r=r.split('"').join('""'),'"'.concat(r,'"')}var m={name:"ReportList",data:function(){return{filter:"",showExtraDetail:!1,showDailyDetail:!1,showAddDlg:!1,add_options:[{label:"DAILY",value:"daily"},{label:"EXTRA",value:"extra"}],selectedOption:"",pagination:{sortBy:"report_date",descending:!0,page:1,rowsPerPage:100,rowsNumber:20},fromDate:"",fromDateAPI:"",endDate:"",endDateAPI:"",columns:[{name:"no",required:!0,label:"NO",align:"left",field:"no"},{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"},{name:"buttons",label:"",field:"buttons"}],columns_admin:[{name:"no",required:!0,label:"NO",align:"left",field:"no"},{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"},{name:"full_name",required:!0,label:"USER",align:"left",field:"full_name"},{name:"buttons",label:"",field:"buttons"}],reportList:[],extraReportDate:"",dailyReportDate:"",selectedRecord:{id:"",report_date:"",report_title:"",driver_id:"",route_id:""},dailyReportForm:{report_date:"",report_title:"",report_no:"",user_id:"",report_data:[]},isNewExtraRecord:!1,isNewDailyRecord:!1,dailyRecordTitle:"",extraRecordTitle:"",extraRoutes:[],dailyRoutes:[],drivers:[],filteredDriverNames:[],filteredNames:[],is_mobile:"web",rnc_id:"",isDateFilter:!1,showEmptyConfirm:!1}},computed:{userLevel:{get:function(){return this.$store.state.auth.userLevel}}},mounted:function(){var e=this;return l()(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.checkPlatform(),e.$store.commit("auth/pageTitle",e.$router.currentRoute.meta.title),e.fromDate=p["b"].formatDate(new Date,"DD/MM/YY ddd"),e.fromDateAPI=p["b"].formatDate(p["b"].startOfDate(new Date,"month"),"YYYY-MM-DD"),e.endDate=p["b"].formatDate(new Date,"DD/MM/YY ddd"),e.endDateAPI=p["b"].formatDate(new Date,"YYYY-MM-DD"),t.next=8,e.getReportList({pagination:e.pagination,filter:void 0});case 8:return t.next=10,e.getRNCID();case 10:return t.next=12,e.getDriverList();case 12:return t.next=14,e.getExtraRoutes();case 14:return t.next=16,e.getRegularRoutes();case 16:case"end":return t.stop()}}),t)})))()},methods:{checkPlatform:function(){this.$q.platform.is.mobile?this.$q.platform.is.ios?this.is_mobile="ios":this.is_mobile="android":this.is_mobile="web"},changeDateFormat:function(e){var t=p["b"].formatDate(p["b"].addToDate(p["b"].extractDate(e,"YYYY-MM-DD"),{hours:5}),"DD-MM-YY ddd");return t},showAddRecordDlg:function(){this.showAddDlg=!0},hideAddRecordDlg:function(){this.showAddDlg=!1,this.selectedOption=""},onDailyReportDateChanged:function(e){this.dailyReportForm.report_date=p["b"].formatDate(p["b"].extractDate(e,"DD/MM/YY ddd"),"YYYY-MM-DD")},onExtraReportDateChanged:function(e){this.selectedRecord.report_date=p["b"].formatDate(p["b"].extractDate(e,"DD/MM/YY ddd"),"YYYY-MM-DD")},onFromDateChanged:function(e){this.fromDateAPI=p["b"].formatDate(p["b"].extractDate(e,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.isDateFilter=!0,this.pagination.page=1,this.getReportList({pagination:this.pagination,filter:this.filter})},onEndDateChanged:function(e){this.endDateAPI=p["b"].formatDate(p["b"].extractDate(e,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.isDateFilter=!0,this.pagination.page=1,this.getReportList({pagination:this.pagination,filter:this.filter})},exportTable:function(){var e="admin"===this.userLevel?this.columns_admin:this.columns,t=[e.map((function(e){return h(e.label)}))].concat(this.reportList.map((function(t){return e.map((function(e){return"is_group"===e.field?h(1===t.is_group?"DAILY":"EXTRA",e.format):"user_name"===e.field?h(t.user.full_name,e.format):"report_date"===e.field?h(t.report_date,e.format):h(t[e.field],e.format)})).join(",")}))).join("\r\n"),r=Object(u["a"])("table-export.csv",t,"text/csv");!0!==r&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},addRecord:function(){"extra"===this.selectedOption?this.goToExtraDetail():"daily"===this.selectedOption&&this.goToDailyDetail()},goToExtraDetail:function(e){var t=this;return l()(n.a.mark((function r(){return n.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e?(t.isNewExtraRecord=!1,t.filteredDriverNames=t.drivers,t.extraRecordTitle="Edit Extra Route",t.selectedRecord.id=e.id,t.selectedRecord.driver_id=e.driver_id,t.selectedRecord.route_id=e.route_id,t.selectedRecord.report_date=e.report_date,t.extraReportDate=p["b"].formatDate(p["b"].extractDate(e.report_date,"YYYY-MM-DD"),"DD/MM/YY ddd")):(t.isNewExtraRecord=!0,t.filteredDriverNames=[],t.extraRecordTitle="Add Extra Route",t.selectedRecord.report_date=p["b"].formatDate(new Date,"YYYY-MM-DD"),t.selectedRecord.driver_id="",t.selectedRecord.route_id="",t.extraReportDate=p["b"].formatDate(new Date,"DD/MM/YY ddd")),t.showExtraDetail=!0;case 2:case"end":return r.stop()}}),r)})))()},goToDailyDetail:function(e){var t=this;return l()(n.a.mark((function r(){var a;return n.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e){r.next=10;break}return t.isNewDailyRecord=!1,t.dailyRecordTitle="Edit Daily Record",t.filteredDriverNames=t.drivers,a=e.report_no,r.next=7,t.getReportInfo(a);case 7:t.dailyReportDate=p["b"].formatDate(p["b"].extractDate(t.dailyReportForm.report_date,"YYYY-MM-DD"),"DD/MM/YY ddd"),r.next=16;break;case 10:t.isNewDailyRecord=!0,t.dailyRecordTitle="Add Daily Record",t.filteredDriverNames=[],t.dailyReportDate=p["b"].formatDate(new Date,"DD/MM/YY ddd"),t.dailyReportForm.report_date=p["b"].formatDate(new Date,"YYYY-MM-DD"),t.dailyReportForm.report_data=t.dailyRoutes.map((function(e){return{driver_id:"",route_id:e.id,route_number:e.route_number,stops:""}}));case 16:t.showDailyDetail=!0;case 17:case"end":return r.stop()}}),r)})))()},removeSelectedDriver:function(e){this.dailyReportForm.report_data[e].driver_id=""},checkDriverDuplicates:function(e){var t=this;if(e){var r=this.dailyReportForm.report_data.map((function(e){return e.driver_id}));r=r.filter((function(e,r){return""!==e&&e!==t.rnc_id}));var a=r.filter((function(t,a){return t===e&&r.indexOf(t)!==a}));return!(a.length>0)}return!0},checkEmptyDrivers:function(){var e=this.dailyReportForm.report_data.filter((function(e,t){return""===e.driver_id})),t=e.map((function(e){return e.route_number}));return t},getReportInfo:function(){var e=l()(n.a.mark((function e(t){var r;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return d["a"].show(),e.prev=1,e.next=4,c["a"].getReportInfo(t);case 4:r=e.sent,d["a"].hide(),this.reportDate=p["b"].formatDate(p["b"].extractDate(r.data.data[0].report_date,"YYYY-MM-DD"),"DD/MM/YY ddd"),this.dailyReportForm.report_date=r.data.data[0].report_date,this.dailyReportForm.report_title=r.data.data[0].report_title,this.dailyReportForm.report_no=r.data.data[0].report_no,this.dailyReportForm.report_data=r.data.data.map((function(e){var t={id:e.id,driver_id:e.driver_id,route_id:e.route_id,route_number:e.route.route_number,stops:e.stops};return t})),this.reportCreatedAt=r.data.data[0].created_at,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](1),d["a"].hide();case 17:case"end":return e.stop()}}),e,this,[[1,14]])})));function t(t){return e.apply(this,arguments)}return t}(),cancelExtraDetail:function(){this.showExtraDetail=!1,this.selectedRecord={id:"",report_date:"",report_title:"",driver_id:"",route_id:""}},cancelDailyDetail:function(){this.showEmptyConfirm=!1,this.showDailyDetail=!1,this.dailyReportForm={report_date:"",report_title:"",report_no:"",user_id:"",report_data:[]}},getRNCID:function(){var e=l()(n.a.mark((function e(){var t;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getRNCID();case 3:t=e.sent,this.rnc_id=t.data.data,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),onSubmitExtra:function(){var e=this;return l()(n.a.mark((function t(){var r,a,o;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectedRecord.report_date=p["b"].formatDate(p["b"].extractDate(e.extraReportDate,"DD/MM/YY ddd"),"YYYY-MM-DD"),e.selectedRecord.driver_id||(e.selectedRecord.driver_id=e.rnc_id),r={data:e.selectedRecord},e.isNewExtraRecord){t.next=20;break}return r.conditions={id:e.selectedRecord.id},d["a"].show(),t.prev=6,t.next=9,c["a"].updateSingleRecord(r);case 9:a=t.sent,d["a"].hide(),console.log("result",a.data),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](6),d["a"].hide(),console.log("error",t.t0);case 18:t.next=33;break;case 20:return d["a"].show(),t.prev=21,t.next=24,c["a"].createSingleRecord(r);case 24:o=t.sent,d["a"].hide(),console.log("result",o.data),t.next=33;break;case 29:t.prev=29,t.t1=t["catch"](21),d["a"].hide(),console.log("error",t.t1);case 33:e.cancelExtraDetail(),e.hideAddRecordDlg(),e.getReportList({pagination:e.pagination,filter:e.filter}),console.log("selected record",e.selectedRecord);case 37:case"end":return t.stop()}}),t,null,[[6,14],[21,29]])})))()},addDailyRecords:function(){var e=this;return l()(n.a.mark((function t(){var r,a,o;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.dailyReportForm.report_data=e.dailyReportForm.report_data.map((function(t){var r={};return t.driver_id?r=t:(t.id&&(r.id=t.id),r.driver_id=e.rnc_id,r.route_id=t.route_id),r})),r={data:e.dailyReportForm},e.isNewDailyRecord){t.next=19;break}return r.conditions={report_no:e.dailyReportForm.report_no},d["a"].show(),t.prev=5,t.next=8,c["a"].updateReport(r);case 8:a=t.sent,d["a"].hide(),console.log("result",a.data),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](5),d["a"].hide(),console.log("error",t.t0);case 17:t.next=32;break;case 19:return d["a"].show(),t.prev=20,t.next=23,c["a"].createReport(r);case 23:o=t.sent,d["a"].hide(),console.log("result",o.data),t.next=32;break;case 28:t.prev=28,t.t1=t["catch"](20),d["a"].hide(),console.log("error",t.t1);case 32:e.cancelDailyDetail(),e.hideAddRecordDlg(),e.getReportList({pagination:e.pagination,filter:e.filter});case 35:case"end":return t.stop()}}),t,null,[[5,13],[20,28]])})))()},onSubmitDaily:function(){var e=this;return l()(n.a.mark((function t(){return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.checkEmptyDrivers().length?e.showEmptyConfirm=!0:e.addDailyRecords();case 1:case"end":return t.stop()}}),t)})))()},getExtraRoutes:function(){var e=l()(n.a.mark((function e(){var t;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getExtraRoutes();case 3:t=e.sent,this.extraRoutes=t.data.data,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),getRegularRoutes:function(){var e=l()(n.a.mark((function e(){var t;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getRegularRoutes();case 3:t=e.sent,this.dailyRoutes=t.data.data,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),getDriverList:function(){var e=l()(n.a.mark((function e(){var t;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c["a"].getDriverList();case 3:t=e.sent,this.drivers=t.data.data,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),filterFnDrivers:function(e,t,r){var a=this;t((function(){if(""===e)a.filteredDriverNames=[];else{var t=e.toLowerCase();a.filteredDriverNames=a.drivers.filter((function(e){return e.driver_name.toLowerCase().indexOf(t)>-1})),a.filteredDriverNames=a.filteredDriverNames.slice(0,3)}}),(function(t){if(""!==e&&t.options.length>0){var r=t.options.find((function(t){return t.driver_name.toLowerCase()===e.toLowerCase()}));r&&t.add(r)}}))},onScroll:function(e){var t=this;return l()(n.a.mark((function r(){var a,o,i,s,l,c,d;return n.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.index,e.from,e.to,e.ref,o=t.pagination,i=o.page,s=o.rowsPerPage,l=o.rowsNumber,c=t.reportList.length-1,d=Math.ceil(l/s),!(a>0&&i<d&&a===c)){r.next=8;break}return t.pagination.page++,r.next=8,t.getReportList({pagination:t.pagination,filter:t.filter,isScroll:!0});case 8:case"end":return r.stop()}}),r)})))()},getReportList:function(){var e=l()(n.a.mark((function e(t){var r,a,o,i,s,l,p,u,h,m,f;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.pagination,a=r.page,o=r.rowsPerPage,i=r.rowsNumber,s=r.sortBy,l=r.descending,p=t.filter,u=0===o?i:o,h=(a-1)*o,m={conditions:{is_date_filter:!0},start:h,numPerPage:u,sortBy:s,descending:l,fromDate:this.fromDateAPI,endDate:this.endDateAPI},p&&(m.conditions.filter=p),this.isDateFilter||(m.conditions.is_date_filter=!1),d["a"].show(),e.prev=8,e.next=11,c["a"].getReports(m);case 11:f=e.sent,d["a"].hide(),this.reportList=f.data.data,this.reportList.forEach((function(e,t){e.index=10*(a-1)+t+1})),this.pagination.rowsNumber=f.data.totalCount,this.pagination.page=a,this.pagination.rowsPerPage=o,this.pagination.sortBy=s,this.pagination.descending=l,e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](8),d["a"].hide();case 25:case"end":return e.stop()}}),e,this,[[8,22]])})));function t(t){return e.apply(this,arguments)}return t}(),removeExtra:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove this report?",cancel:!0,persistent:!0,color:"blue-7"}).onOk(l()(n.a.mark((function t(){var r,a;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={conditions:{id:e.selectedRecord.id}},d["a"].show(),t.prev=2,t.next=5,c["a"].removeSingleRecord(r);case 5:a=t.sent,d["a"].hide(),console.log("remove result",a),e.$q.notify({color:"positive",position:"top",message:"Report is removed successfully !"}),e.cancelExtraDetail(),e.hideAddRecordDlg(),e.getReportList({pagination:e.pagination,filter:e.filter}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),d["a"].hide();case 17:case"end":return t.stop()}}),t,null,[[2,14]])})))).onCancel((function(){})).onDismiss((function(){}))},removeDaily:function(e){var t=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove this report?",cancel:!0,persistent:!0,color:"blue-7"}).onOk(l()(n.a.mark((function r(){var a,o;return n.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={conditions:{report_no:e}},d["a"].show(),r.prev=2,r.next=5,c["a"].removeReport(a);case 5:o=r.sent,d["a"].hide(),console.log("remove result",o),t.$q.notify({color:"positive",position:"top",message:"Report is removed successfully !"}),t.cancelDailyDetail(),t.hideAddRecordDlg(),t.getReportList({pagination:t.pagination,filter:t.filter}),r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](2),d["a"].hide();case 17:case"end":return r.stop()}}),r,null,[[2,14]])})))).onCancel((function(){})).onDismiss((function(){}))}},created:function(){}},f=m,D=(r("ee35"),r("2877")),v=r("9989"),x=r("eaac"),b=r("9c40"),w=r("27f9"),g=r("0016"),y=r("7cbe"),_=r("52ee"),R=r("bd08"),q=r("db86"),k=r("24e8"),Y=r("f09f"),C=r("d847"),E=r("05c0"),M=r("eb85"),S=r("a370"),N=r("9f0a"),A=r("0378"),F=r("ddd8"),L=r("4b7e"),T=r("7f67"),P=r("eebe"),I=r.n(P),O=Object(D["a"])(f,a,o,!1,null,null,null);t["default"]=O.exports;I()(O,"components",{QPage:v["a"],QTable:x["a"],QBtn:b["a"],QInput:w["a"],QIcon:g["a"],QPopupProxy:y["a"],QDate:_["a"],QTr:R["a"],QTd:q["a"],QDialog:k["a"],QCard:Y["a"],QBar:C["a"],QTooltip:E["a"],QSeparator:M["a"],QCardSection:S["a"],QOptionGroup:N["a"],QForm:A["a"],QSelect:F["a"],QCardActions:L["a"]}),I()(O,"directives",{ClosePopup:T["a"]})},ee35:function(e,t,r){"use strict";var a=r("3db5"),o=r.n(a);o.a}}]);