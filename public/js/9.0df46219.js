(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"1e37":function(e,t,r){},"4fc9":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[[r("div",[r("q-table",{staticClass:"my-sticky-dynamic",attrs:{data:e.monthlyList,columns:"admin"===e.userLevel?e.columns_admin:e.columns,"row-key":"report_date",filter:e.filter,"binary-state-sort":"","virtual-scroll":"","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,pagination:e.pagination,"rows-per-page-options":[0]},on:{request:e.getMonthlyAll,"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[r("div",{staticClass:"col-6 row justify-start"},[r("q-input",{staticStyle:{width:"120px"},attrs:{dense:"",debounce:"300",placeholder:"Search","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{attrs:{name:"search",color:"white"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),r("div",{staticClass:"col-6 row justify-end"},[r("q-input",{staticStyle:{width:"120px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("div",[r("q-calendar",{ref:"calendar",class:e.$q.dark.isActive?"bg-blue-grey-3":"bg-grey-1",staticStyle:{"max-width":"300px","max-height":"180px","min-width":"auto",overflow:"hidden"},attrs:{"show-work-weeks":"",view:"month","mini-mode":"","enable-outside-days":"",bordered:"",locale:"en-us"},on:{input:e.onFromDateChanged},model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}})],1)])],1)]},proxy:!0}]),model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}}),r("q-input",{staticClass:"q-ml-xs",staticStyle:{width:"120px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-calendar",{ref:"calendar",class:e.$q.dark.isActive?"bg-blue-grey-3":"bg-grey-1",staticStyle:{"max-width":"300px","max-height":"180px","min-width":"auto",overflow:"hidden"},attrs:{"show-work-weeks":"",view:"month","mini-mode":"","enable-outside-days":"",bordered:"",locale:"en-us"},on:{input:e.onEndDateChanged},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)],1)]},proxy:!0}]),model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1)]},proxy:!0},{key:"body",fn:function(t){return[r("q-tr",{attrs:{props:t},on:{click:function(r){return e.goToSingleDetail(t.row)}}},[r("q-td",{key:"report_date",attrs:{props:t}},[e._v(e._s(t.row.report_date))]),"admin"===e.userLevel?r("q-td",{key:"user_name",attrs:{props:t}},[e._v(e._s(t.row.user.name))]):e._e(),r("q-td",{key:"courier_name",attrs:{props:t}},[e._v(e._s(t.row.courier_name))]),r("q-td",{key:"route_number",attrs:{props:t}},[e._v(e._s(t.row.route_number))]),r("q-td",{key:"is_group",attrs:{props:t}},[e._v(e._s(1===t.row.is_group?"FD Routes":"Extra Routes"))])],1)]}},{key:"bottom",fn:function(){return[r("div",{staticClass:"col-6 row"},[e._v("\n            Total Records: "+e._s(e.pagination.rowsNumber)+"\n          ")]),r("div",{staticClass:"col-6 row justify-end"},[r("q-btn",{staticClass:"q-mr-xs q-mt-xs",staticStyle:{width:"100px",height:"30px"},attrs:{color:"blue-7",label:"Export","no-caps":"",dense:""},on:{click:e.exportTable}})],1)]},proxy:!0}])})],1),r("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"scale","transition-hide":"scale"},model:{value:e.showDetail,callback:function(t){e.showDetail=t},expression:"showDetail"}},[r("q-card",{staticStyle:{"background-color":"#3E444E"}},[r("q-bar",[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[r("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1),r("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.dialogTitle))])],1),r("q-separator"),r("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[r("q-form",{ref:"selectedRecord",staticStyle:{"max-width":"400px",margin:"auto"},attrs:{model:e.selectedRecord},on:{submit:e.onSubmit}},[r("q-card",{staticStyle:{"background-color":"#3E444E"}},[r("q-card-section",[r("q-input",{attrs:{dense:"",outlined:"","bg-color":"white","input-class":"text-black text-center",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-calendar",{ref:"calendar",class:e.$q.dark.isActive?"bg-blue-grey-3":"bg-grey-1",staticStyle:{"max-width":"300px","max-height":"180px","min-width":"auto",overflow:"hidden"},attrs:{"show-work-weeks":"",view:"month","mini-mode":"","enable-outside-days":"",bordered:"",locale:"en-us"},model:{value:e.selectedRecord.report_date,callback:function(t){e.$set(e.selectedRecord,"report_date",t)},expression:"selectedRecord.report_date"}})],1)],1)]},proxy:!0}]),model:{value:e.selectedRecord.report_date,callback:function(t){e.$set(e.selectedRecord,"report_date",t)},expression:"selectedRecord.report_date"}})],1),r("q-separator",{attrs:{color:"grey-4"}}),r("q-card-section",[r("q-select",{staticClass:"q-mb-xs",attrs:{dense:"",label:"Courier",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:e.filteredNames,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.courier_name},"emit-value":"","map-options":"",behavior:"menu","bg-color":"white","input-class":"text-black",color:"blue-7"},on:{filter:e.filterFn},model:{value:e.selectedRecord.courier_id,callback:function(t){e.$set(e.selectedRecord,"courier_id",t)},expression:"selectedRecord.courier_id"}}),r("q-select",{staticClass:"q-mb-xs",attrs:{dense:"",required:"",label:"Route",outlined:"","use-input":"","hide-selected":"","fill-input":"",options:e.routes,"option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"- Null -":e.route_number},"emit-value":"","map-options":"",behavior:"menu","bg-color":"white","input-class":"text-black",color:"blue-7"},model:{value:e.selectedRecord.route_id,callback:function(t){e.$set(e.selectedRecord,"route_id",t)},expression:"selectedRecord.route_id"}})],1),r("q-card-actions",{attrs:{align:"center"}},[r("q-btn",{staticClass:"q-mt-xs",staticStyle:{width:"100px",height:"40px"},attrs:{color:"blue-7",label:e.isNewRecord?"Add":"Update","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)],1)],1)],1)],1)],1)]],2)},o=[],i=(r("7514"),r("967e")),n=r.n(i),s=(r("96cf"),r("28a5"),r("1e53")),l=r("f508"),c=r("bd4c"),d=r("a357");function u(e,t){var r=void 0!==t?t(e):e;return r=void 0===r||null===r?"":String(r),r=r.split('"').join('""'),'"'.concat(r,'"')}var p={name:"MonthlyReportList",components:{},data:function(){return{filter:"",fromDate:"",endDate:"",showDetail:!1,pagination:{sortBy:"report_date",descending:!1,page:1,rowsPerPage:10,rowsNumber:20},columns:[{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"courier_name",required:!0,label:"DRIVER",align:"left",field:"courier_name"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"}],columns_admin:[{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"user_name",required:!0,label:"USER",align:"left",field:"user_name"},{name:"courier_name",required:!0,label:"DRIVER",align:"left",field:"courier_name"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"}],monthlyList:[],selectedRecord:{id:"",report_date:"",report_title:"",courier_id:"",route_id:""},isNewRecord:!1,dialogTitle:"",routes:[],couriers:[],filteredNames:[],rnc_id:""}},watch:{fromDate:{handler:function(e,t){},deep:!0},endDate:{handler:function(e,t){},deep:!0}},computed:{userLevel:{get:function(){return this.$store.state.auth.userLevel}}},mounted:function(){this.$store.commit("auth/pageTitle",this.$router.currentRoute.meta.title),this.fromDate=c["b"].formatDate(new Date,"YYYY-MM-DD"),this.endDate=c["b"].formatDate(new Date,"YYYY-MM-DD"),this.getMonthlyAll({pagination:this.pagination,filter:void 0})},methods:{onFromDateChanged:function(e){this.getMonthlyAll({pagination:this.pagination,filter:void 0})},onEndDateChanged:function(e){this.getMonthlyAll({pagination:this.pagination,filter:void 0})},goToSingleDetail:function(e){return n.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.a.awrap(this.getCourierList());case 2:return t.next=4,n.a.awrap(this.getExtraRoutes());case 4:1===e.is_group?this.$router.push({name:"ReportDetail",params:{report_no:e.report_no}}):(this.isNewRecord=!1,this.filteredNames=this.couriers,this.dialogTitle="Edit Extra Route",this.selectedRecord.id=e.id,this.selectedRecord.courier_id=e.courier_id,this.selectedRecord.route_id=e.route_id,this.selectedRecord.report_date=e.report_date),this.showDetail=!0;case 6:case"end":return t.stop()}}),null,this)},addGroup:function(){this.$router.push({path:"reports/new"})},cancelDetail:function(){this.showDetail=!1,this.selectedRecord={}},onSubmit:function(){var e,t;return n.a.async((function(r){while(1)switch(r.prev=r.next){case 0:return this.selectedRecord.courier_id||(this.selectedRecord.courier_id="RNC"),e={data:this.selectedRecord},e.conditions={id:this.selectedRecord.id},l["a"].show(),r.prev=4,r.next=7,n.a.awrap(s["a"].updateSingleRecord(e));case 7:t=r.sent,l["a"].hide(),console.log("result",t.data),r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](4),l["a"].hide(),console.log("error",r.t0);case 16:this.cancelDetail(),this.getMonthlyAll({pagination:this.pagination,filter:this.filter}),console.log("selected record",this.selectedRecord);case 19:case"end":return r.stop()}}),null,this,[[4,12]])},getExtraRoutes:function(){var e;return n.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return l["a"].show(),t.prev=1,t.next=4,n.a.awrap(s["a"].getExtraRoutes());case 4:e=t.sent,l["a"].hide(),this.routes=e.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),l["a"].hide();case 12:case"end":return t.stop()}}),null,this,[[1,9]])},getCourierList:function(){var e;return n.a.async((function(t){while(1)switch(t.prev=t.next){case 0:return l["a"].show(),t.prev=1,t.next=4,n.a.awrap(s["a"].getCourierList());case 4:e=t.sent,l["a"].hide(),this.couriers=e.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),l["a"].hide();case 12:case"end":return t.stop()}}),null,this,[[1,9]])},filterFn:function(e,t,r){var a=this;t((function(){if(""===e)a.filteredNames=[];else{var t=e.toLowerCase();a.filteredNames=a.couriers.filter((function(e){return e.courier_name.toLowerCase().indexOf(t)>-1})),a.filteredNames=a.filteredNames.slice(0,3)}}),(function(t){if(""!==e&&t.options.length>0){var r=t.options.find((function(t){return t.courier_name.toLowerCase()===e.toLowerCase()}));r&&t.add(r)}}))},getMonthlyAll:function(e){var t,r,a,o,i,c,d,u;return n.a.async((function(p){while(1)switch(p.prev=p.next){case 0:return t=e.pagination,r=t.page,a=t.rowsPerPage,o=t.sortBy,i=t.descending,c=e.filter,d={conditions:{},sortBy:o,descending:i,fromDate:this.fromDate,endDate:this.endDate},c&&(d.conditions.filter=c),l["a"].show(),p.prev=5,p.next=8,n.a.awrap(s["a"].getMonthlyReportsAll(d));case 8:u=p.sent,l["a"].hide(),this.monthlyList=u.data.data,this.monthlyList.forEach((function(e,t){e.index=t+1})),this.pagination.rowsNumber=u.data.totalCount,this.pagination.page=r,this.pagination.rowsPerPage=a,this.pagination.sortBy=o,this.pagination.descending=i,p.next=23;break;case 19:p.prev=19,p.t0=p["catch"](5),l["a"].hide(),console.log("errorrrrrrrrrr",p.t0);case 23:case"end":return p.stop()}}),null,this,[[5,19]])},remove:function(e){var t=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove "+e.report_title+"?",cancel:!0,persistent:!0}).onOk((function(){var r,a;return n.a.async((function(o){while(1)switch(o.prev=o.next){case 0:return r={conditions:{id:e.id}},l["a"].show(),o.prev=2,o.next=5,n.a.awrap(s["a"].removeReport(r));case 5:a=o.sent,l["a"].hide(),console.log("remove result",a),t.$q.notify({color:"positive",position:"top",message:e.report_title+" is removed successfully !"}),t.getReportList({pagination:t.pagination,filter:void 0}),o.next=15;break;case 12:o.prev=12,o.t0=o["catch"](2),l["a"].hide();case 15:case"end":return o.stop()}}),null,null,[[2,12]])})).onCancel((function(){})).onDismiss((function(){}))},exportTable:function(){var e=this,t=[this.columns.map((function(e){return u(e.label)}))].concat(this.monthlyList.map((function(t){return e.columns.map((function(e){return"is_group"===e.field?u(1===t.is_group?"FD Routes":"Extra Routes",e.format):u(t[e.field],e.format)})).join(",")}))).join("\r\n"),r=Object(d["a"])("table-export.xls",t,"text/csv");!0!==r&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}},created:function(){}},h=p,f=(r("e0b0"),r("2877")),m=r("9989"),g=r("eaac"),w=r("27f9"),b=r("0016"),v=r("7cbe"),x=r("bd08"),_=r("db86"),y=r("9c40"),q=r("24e8"),D=r("f09f"),R=r("d847"),k=r("05c0"),C=r("eb85"),S=r("a370"),E=r("0378"),T=r("ddd8"),L=r("4b7e"),N=r("7f67"),Q=r("eebe"),$=r.n(Q),A=Object(f["a"])(h,a,o,!1,null,null,null);t["default"]=A.exports;$()(A,"components",{QPage:m["a"],QTable:g["a"],QInput:w["a"],QIcon:b["a"],QPopupProxy:v["a"],QTr:x["a"],QTd:_["a"],QBtn:y["a"],QDialog:q["a"],QCard:D["a"],QBar:R["a"],QTooltip:k["a"],QSeparator:C["a"],QCardSection:S["a"],QForm:E["a"],QSelect:T["a"],QCardActions:L["a"]}),$()(A,"directives",{ClosePopup:N["a"]})},e0b0:function(e,t,r){"use strict";var a=r("1e37"),o=r.n(a);o.a}}]);