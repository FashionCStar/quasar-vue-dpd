(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"3db5":function(e,t,a){},"4b57":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[[a("div",[a("q-table",{staticClass:"my-sticky-dynamic",attrs:{data:e.reportList,columns:e.columns,"row-key":"report_date",filter:e.filter,"binary-state-sort":"","virtual-scroll":"","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,pagination:e.pagination,"rows-per-page-options":[0]},on:{request:e.getReportsAll,"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("div",{staticClass:"col-6 row justify-start"},[a("q-input",{staticClass:"q-mb-md",staticStyle:{width:"120px"},attrs:{dense:"",debounce:"300",placeholder:"Search","input-class":"text-white border-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search",color:"white"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),e._v("\n             \n            "),a("q-btn",{staticClass:"q-mb-md",staticStyle:{width:"120px",height:"40px"},attrs:{color:"blue-7",label:"Add Record","no-caps":"",dense:""},on:{click:e.showAddRecordDlg}})],1),a("div",{staticClass:"col-6 row justify-end"},[a("q-input",{staticClass:"q-mb-md",staticStyle:{width:"120px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:e.onFromDateChanged},model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}})],1)],1)]},proxy:!0}]),model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}}),a("q-input",{staticClass:"q-ml-xs q-mb-md",staticStyle:{width:"120px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:e.onEndDateChanged},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1)]},proxy:!0}]),model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t},nativeOn:{click:function(a){return e.goToDetail(t.row)}}},[a("q-td",{key:"report_date",attrs:{props:t}},[e._v(e._s(t.row.report_date))]),a("q-td",{key:"is_group",attrs:{props:t}},[e._v(e._s(1===t.row.is_group?"FD Routes":"Extra Routes"))]),a("q-td",{key:"user_name",attrs:{props:t}},[e._v(e._s(t.row.user.name))]),a("q-td",{key:"buttons",attrs:{props:t}},[a("q-btn",{attrs:{rounded:"",icon:"fas fa-pen-alt"},on:{click:function(a){return e.goToDetail(t.row)}},nativeOn:{click:function(e){e.stopPropagation()}}})],1)],1)]}},{key:"bottom",fn:function(){return[a("div",{staticClass:"col-6 row"},[e._v("\n            Total Records: "+e._s(e.pagination.rowsNumber)+"\n          ")]),a("div",{staticClass:"col-6 row justify-end"},[a("q-btn",{staticClass:"q-mr-xs q-mt-xs",staticStyle:{width:"100px",height:"30px"},attrs:{label:"Export",color:"blue-7","no-caps":"",dense:""},on:{click:e.exportTable}})],1)]},proxy:!0}])})],1),a("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"scale","transition-hide":"scale"},model:{value:e.showAddDlg,callback:function(t){e.showAddDlg=t},expression:"showAddDlg"}},[a("q-card",{staticStyle:{"background-color":"#3E444E"}},[a("q-bar",[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1)],1),a("div",{staticClass:"layout-center"},[a("q-card-section",[a("div",{staticClass:"text-h6 text-white text-center"},[e._v("What kind of record do you want to add?")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-option-group",{staticClass:"q-mx-auto text-white",staticStyle:{width:"140px"},attrs:{options:e.add_options,type:"radio",size:"xl",color:"white","keep-color":""},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}})],1),a("q-card-section",{staticClass:"text-center q-pt-none"},[a("q-btn",{staticClass:"q-mt-xs",staticStyle:{width:"100px",height:"40px"},attrs:{label:"Add",color:"blue-7","no-caps":"",dense:"",rounded:""},on:{click:e.addRecord}})],1)],1)],1)],1),a("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"scale","transition-hide":"scale"},model:{value:e.showDetail,callback:function(t){e.showDetail=t},expression:"showDetail"}},[a("q-card",{staticStyle:{"background-color":"#3E444E"}},[a("q-bar",[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1),a("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.dialogTitle))])],1),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[a("q-form",{ref:"selectedRecord",staticStyle:{"max-width":"400px",margin:"auto"},attrs:{model:e.selectedRecord},on:{submit:e.onSubmit}},[a("div",{staticClass:"row justify-between q-col-gutter-md"},[a("div",{staticClass:"col-12"},[a("span",{staticClass:"text-white"},[e._v("Date")]),a("q-input",{attrs:{dense:"",outlined:"",color:"blue-7","bg-color":"white","input-class":"text-black text-center"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:e.onReportDateChanged},model:{value:e.reportDate,callback:function(t){e.reportDate=t},expression:"reportDate"}})],1)],1)]},proxy:!0}]),model:{value:e.reportDate,callback:function(t){e.reportDate=t},expression:"reportDate"}}),a("q-separator",{staticClass:"q-my-md",attrs:{color:"grey-4"}}),a("span",{staticClass:"text-white"},[e._v("Courier")]),a("q-select",{staticClass:"q-mb-xs",attrs:{dense:"",required:"",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:e.filteredNames,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.courier_name},"emit-value":"","map-options":"",behavior:"menu","bg-color":"white","input-class":"text-black",color:"blue-7","hide-dropdown-icon":!0},on:{filter:e.filterFn},model:{value:e.selectedRecord.courier_id,callback:function(t){e.$set(e.selectedRecord,"courier_id",t)},expression:"selectedRecord.courier_id"}}),a("span",{staticClass:"text-white"},[e._v("Route")]),a("q-select",{staticClass:"q-mb-xs",attrs:{dense:"",required:"",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:e.routes,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.route_number},"emit-value":"","map-options":"",behavior:"menu","bg-color":"white","input-class":"text-black",color:"blue-7","hide-dropdown-icon":!0},model:{value:e.selectedRecord.route_id,callback:function(t){e.$set(e.selectedRecord,"route_id",t)},expression:"selectedRecord.route_id"}})],1)]),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{staticClass:"q-mt-xs",staticStyle:{width:"100px",height:"40px"},attrs:{label:e.isNewRecord?"Add":"Update",color:"blue-7","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)],1)],1)],1)],1)]],2)},r=[],s=(a("7514"),a("967e")),i=a.n(s),n=(a("96cf"),a("7f7f"),a("28a5"),a("1e53")),c=a("f508"),l=a("bd4c"),d=a("a357");function u(e,t){console.log("csv",e);var a=void 0!==t?t(e):e;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),'"'.concat(a,'"')}var p={name:"ReportList",data:function(){return{filter:"",showDetail:!1,showAddDlg:!1,add_options:[{label:"FD routes",value:"fd_routes"},{label:"Extra route",value:"extra_route"}],selectedOption:"",pagination:{sortBy:"report_date",descending:!0,page:1,rowsPerPage:0,rowsNumber:20},fromDate:"",fromDateAPI:"",endDate:"",endDateAPI:"",columns:[{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"},{name:"user_name",required:!0,label:"USER",align:"left",field:"user_name"},{name:"buttons",label:"",field:"buttons"}],reportList:[],reportDate:"",selectedRecord:{id:"",report_date:"",report_title:"",courier_id:"",route_id:""},isNewRecord:!1,dialogTitle:"",routes:[],couriers:[],filteredNames:[]}},mounted:function(){this.$store.commit("auth/pageTitle",this.$router.currentRoute.meta.title),this.fromDate=l["b"].formatDate(new Date,"DD/MM/YY ddd"),this.fromDateAPI=l["b"].formatDate(new Date,"YYYY-MM-DD"),this.endDate=l["b"].formatDate(new Date,"DD/MM/YY ddd"),this.endDateAPI=l["b"].formatDate(new Date,"YYYY-MM-DD"),this.getReportsAll({pagination:this.pagination,filter:void 0})},methods:{createNew:function(){this.$router.push({path:"reports/new"})},showAddRecordDlg:function(){this.showAddDlg=!0},hideAddRecordDlg:function(){this.showAddDlg=!1,this.selectedOption=""},onReportDateChanged:function(e){this.selectedRecord.report_date=l["b"].formatDate(l["b"].extractDate(e,"DD/MM/YY ddd"),"YYYY-MM-DD")},onFromDateChanged:function(e){this.fromDateAPI=l["b"].formatDate(l["b"].extractDate(e,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.getReportsAll({pagination:this.pagination,filter:void 0})},onEndDateChanged:function(e){this.endDateAPI=l["b"].formatDate(l["b"].extractDate(e,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.getReportsAll({pagination:this.pagination,filter:void 0})},exportTable:function(){var e=this,t=[this.columns.map((function(e){return u(e.label)}))].concat(this.reportList.map((function(t){return e.columns.map((function(e){return"is_group"===e.field?u(1===t.is_group?"FD Routes":"Extra Routes",e.format):"user_name"===e.field?u(t.user.name,e.format):"report_date"===e.field?u(t.report_date,e.format):void 0})).join(",")}))).join("\r\n"),a=Object(d["a"])("table-export.xls",t,"text/csv");!0!==a&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},addRecord:function(){"extra_route"===this.selectedOption?this.goToDetail():"fd_routes"===this.selectedOption&&this.$router.push({path:"reports/new"})},goToDetail:function(e){return i.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(this.getCourierList());case 2:return t.next=4,i.a.awrap(this.getExtraRoutes());case 4:e?1===e.is_group?this.$router.push({name:"ReportDetail",params:{report_no:e.report_no}}):(this.isNewRecord=!1,this.filteredNames=this.couriers,this.dialogTitle="Edit Extra Route",this.selectedRecord.id=e.id,this.selectedRecord.courier_id=e.courier_id,this.selectedRecord.route_id=e.route_id,this.selectedRecord.report_date=e.report_date,this.reportDate=l["b"].formatDate(l["b"].extractDate(e.report_date,"YYYY-MM-DD"),"DD/MM/YY ddd")):(this.dialogTitle="Add Extra Route",this.isNewRecord=!0,this.selectedRecord.report_date=l["b"].formatDate(new Date,"YYYY-MM-DD"),this.selectedRecord.courier_id="",this.selectedRecord.route_id="",this.reportDate=l["b"].formatDate(new Date,"DD/MM/YY ddd")),this.showDetail=!0;case 6:case"end":return t.stop()}}),null,this)},cancelDetail:function(){this.showDetail=!1,this.selectedRecord={}},onSubmit:function(){var e,t,a;return i.a.async((function(o){while(1)switch(o.prev=o.next){case 0:if(this.selectedRecord.report_date=l["b"].formatDate(l["b"].addToDate(this.selectedRecord.report_date,{days:1}),"YYYY-MM-DD"),this.selectedRecord.courier_id||(this.selectedRecord.courier_id="RNC"),e={data:this.selectedRecord},this.isNewRecord){o.next=21;break}return e.conditions={id:this.selectedRecord.id},c["a"].show(),o.prev=6,o.next=9,i.a.awrap(n["a"].updateSingleRecord(e));case 9:t=o.sent,c["a"].hide(),console.log("result",t.data),o.next=18;break;case 14:o.prev=14,o.t0=o["catch"](6),c["a"].hide(),console.log("error",o.t0);case 18:this.$router.push("/dashboard/reports"),o.next=34;break;case 21:return c["a"].show(),o.prev=22,o.next=25,i.a.awrap(n["a"].createSingleRecord(e));case 25:a=o.sent,c["a"].hide(),console.log("result",a.data),o.next=34;break;case 30:o.prev=30,o.t1=o["catch"](22),c["a"].hide(),console.log("error",o.t1);case 34:this.cancelDetail(),this.hideAddRecordDlg(),this.getReportsAll({pagination:this.pagination,filter:this.filter}),console.log("selected record",this.selectedRecord);case 38:case"end":return o.stop()}}),null,this,[[6,14],[22,30]])},getExtraRoutes:function(){var e;return i.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return c["a"].show(),t.prev=1,t.next=4,i.a.awrap(n["a"].getExtraRoutes());case 4:e=t.sent,c["a"].hide(),this.routes=e.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),c["a"].hide();case 12:case"end":return t.stop()}}),null,this,[[1,9]])},getCourierList:function(){var e;return i.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return c["a"].show(),t.prev=1,t.next=4,i.a.awrap(n["a"].getCourierList());case 4:e=t.sent,c["a"].hide(),this.couriers=e.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),c["a"].hide();case 12:case"end":return t.stop()}}),null,this,[[1,9]])},filterFn:function(e,t,a){var o=this;t((function(){if(""===e)o.filteredNames=[];else{var t=e.toLowerCase();o.filteredNames=o.couriers.filter((function(e){return e.courier_name.toLowerCase().indexOf(t)>-1})),o.filteredNames=o.filteredNames.slice(0,3)}}),(function(t){if(""!==e&&t.options.length>0){var a=t.options.find((function(t){return t.courier_name.toLowerCase()===e.toLowerCase()}));a&&t.add(a)}}))},getReportsAll:function(e){var t,a,o,r,s,l,d,u;return i.a.async((function(p){while(1)switch(p.prev=p.next){case 0:return t=e.pagination,a=t.page,o=t.rowsPerPage,r=t.sortBy,s=t.descending,l=e.filter,d={conditions:{},sortBy:r,descending:s,fromDate:this.fromDateAPI,endDate:this.endDateAPI},l&&(d.conditions.filter=l),c["a"].show(),p.prev=5,p.next=8,i.a.awrap(n["a"].getReportsAll(d));case 8:u=p.sent,c["a"].hide(),this.reportList=u.data.data,this.reportList.forEach((function(e,t){e.index=t+1})),this.pagination.rowsNumber=u.data.totalCount,this.pagination.page=a,this.pagination.rowsPerPage=o,this.pagination.sortBy=r,this.pagination.descending=s,p.next=22;break;case 19:p.prev=19,p.t0=p["catch"](5),c["a"].hide();case 22:case"end":return p.stop()}}),null,this,[[5,19]])},remove:function(e){var t=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove "+e.report_title+"?",cancel:!0,persistent:!0}).onOk((function(){var a,o;return i.a.async((function(r){while(1)switch(r.prev=r.next){case 0:return a={conditions:{report_no:e.report_no}},c["a"].show(),r.prev=2,r.next=5,i.a.awrap(n["a"].removeReport(a));case 5:o=r.sent,c["a"].hide(),console.log("remove result",o),t.$q.notify({color:"positive",position:"top",message:e.report_title+" is removed successfully !"}),t.getReportsAll({pagination:t.pagination,filter:void 0}),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](2),c["a"].hide();case 15:case"end":return r.stop()}}),null,null,[[2,12]])})).onCancel((function(){})).onDismiss((function(){}))}},created:function(){}},h=p,f=(a("ee35"),a("2877")),m=a("9989"),D=a("eaac"),w=a("27f9"),b=a("0016"),g=a("9c40"),x=a("7cbe"),v=a("52ee"),_=a("bd08"),q=a("db86"),y=a("24e8"),R=a("f09f"),C=a("d847"),k=a("05c0"),Y=a("a370"),M=a("9f0a"),A=a("eb85"),S=a("0378"),N=a("ddd8"),P=a("4b7e"),E=a("8572"),Q=a("7f67"),T=a("eebe"),O=a.n(T),L=Object(f["a"])(h,o,r,!1,null,null,null);t["default"]=L.exports;O()(L,"components",{QPage:m["a"],QTable:D["a"],QInput:w["a"],QIcon:b["a"],QBtn:g["a"],QPopupProxy:x["a"],QDate:v["a"],QTr:_["a"],QTd:q["a"],QDialog:y["a"],QCard:R["a"],QBar:C["a"],QTooltip:k["a"],QCardSection:Y["a"],QOptionGroup:M["a"],QSeparator:A["a"],QForm:S["a"],QSelect:N["a"],QCardActions:P["a"],QField:E["a"]}),O()(L,"directives",{ClosePopup:Q["a"]})},ee35:function(e,t,a){"use strict";var o=a("3db5"),r=a.n(o);r.a}}]);