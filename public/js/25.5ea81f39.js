(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{9952:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[[a("div",[a("q-table",{class:"ios"===t.is_mobile?"my-sticky-dynamic table-top-ios":"android"===t.is_mobile?"my-sticky-dynamic table-top-android":"my-sticky-dynamic",attrs:{data:t.monthlyList,columns:t.columns,"row-key":"report_date",filter:t.filter,"binary-state-sort":"",pagination:t.pagination,"virtual-scroll":"","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"rows-per-page-options":[0]},on:{request:t.getMonthlyListByDriver,"update:pagination":function(e){t.pagination=e},"virtual-scroll":t.onScroll},scopedSlots:t._u([{key:"top",fn:function(){return[a("div",{staticClass:"col-6 row justify-start"},[a("q-input",{staticStyle:{width:"168px"},attrs:{dense:"",debounce:"300",placeholder:"Search","input-class":"text-white",color:"blue-7"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search",color:"white"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),a("div",{staticClass:"col-6 row justify-end"},[a("q-input",{staticClass:"q-mb-sm",staticStyle:{width:"168px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:t.onFromDateChanged},model:{value:t.fromDate,callback:function(e){t.fromDate=e},expression:"fromDate"}})],1)],1)]},proxy:!0}]),model:{value:t.fromDate,callback:function(e){t.fromDate=e},expression:"fromDate"}}),a("q-input",{staticClass:"q-ml-xs q-mb-sm",staticStyle:{width:"168px"},attrs:{dense:"","input-class":"text-white",color:"blue-7"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event",color:"white"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{minimal:"",mask:"DD/MM/YY ddd",color:"blue-7"},on:{input:t.onEndDateChanged},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)],1)]},proxy:!0}]),model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"index",attrs:{props:e}},[t._v(t._s(e.row.index))]),a("q-td",{key:"report_date",staticClass:"text-uppercase",attrs:{props:e}},[t._v(t._s(t.changeDateFormat(e.row.report_date)))]),a("q-td",{key:"route_number",attrs:{props:e}},[t._v(t._s(e.row.route_number))]),a("q-td",{key:"driver_name",attrs:{props:e}},[t._v(t._s(e.row.driver_name))]),a("q-td",{key:"is_group",attrs:{props:e}},[t._v(t._s(1===e.row.is_group?"DAILY":"EXTRA"))])],1)]}},{key:"bottom",fn:function(){return[a("div",{staticClass:"col-12 row justify-between"},[a("div",{staticClass:"q-my-auto"},[a("q-btn",{staticClass:"q-ma-none",staticStyle:{width:"60px",height:"30px"},attrs:{label:"Export","no-caps":"",dense:"",rounded:"",outline:""},on:{click:t.exportTable}})],1),a("div",{staticClass:"row justify-end items-center"},[t._v("\n              Total Records: "+t._s(t.pagination.rowsNumber)+"\n            ")])])]},proxy:!0}])})],1)]],2)},i=[],n=a("a34a"),o=a.n(n),s=(a("96cf"),a("c973")),l=a.n(s),d=(a("28a5"),a("1e53")),c=a("f508"),u=a("bd4c"),p=a("a357");function f(t,e){var a=void 0!==e?e(t):t;return a=void 0===a||null===a?"":String(a),a=a.split('"').join('""'),'"'.concat(a,'"')}var m={name:"MonthlyReportList",components:{},data:function(){return{filter:"",fromDate:"",fromDateAPI:"",endDate:"",endDateAPI:"",showDetail:!1,pagination:{sortBy:"report_date",descending:!0,page:1,rowsPerPage:100,rowsNumber:2e4},columns:[{name:"index",required:!0,label:"NO",align:"left",field:"index"},{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"driver_name",required:!0,label:"DRIVER",align:"left",field:"driver_name"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"}],columns_admin:[{name:"index",required:!0,label:"NO",align:"left",field:"index"},{name:"report_date",required:!0,label:"DATE",align:"left",field:"report_date"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"driver_name",required:!0,label:"DRIVER",align:"left",field:"driver_name"},{name:"is_group",required:!0,label:"TYPE",align:"left",field:"is_group"},{name:"user_name",required:!0,label:"USER",align:"left",field:"user_name"}],monthlyList:[],monthlyAll:[],is_mobile:"web",isDateFilter:!1}},computed:{driver:{get:function(){return this.$store.state.auth.driver}}},mounted:function(){this.checkPlatform(),this.$store.commit("auth/pageTitle",this.$router.currentRoute.meta.title),this.fromDate=u["b"].formatDate(new Date,"DD/MM/YY ddd"),this.fromDateAPI=u["b"].formatDate(u["b"].startOfDate(new Date,"month"),"YYYY-MM-DD"),this.endDate=u["b"].formatDate(new Date,"DD/MM/YY ddd"),this.endDateAPI=u["b"].formatDate(new Date,"YYYY-MM-DD"),this.getMonthlyListByDriver({pagination:this.pagination,filter:void 0})},methods:{checkPlatform:function(){this.$q.platform.is.mobile?this.$q.platform.is.ios?this.is_mobile="ios":this.is_mobile="android":this.is_mobile="web"},changeDateFormat:function(t){var e=u["b"].formatDate(u["b"].addToDate(u["b"].extractDate(t,"YYYY-MM-DD"),{hours:5}),"DD-MM-YY dddd");return e},onFromDateChanged:function(t){this.fromDateAPI=u["b"].formatDate(u["b"].extractDate(t,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.isDateFilter=!0,this.pagination.page=1,this.getMonthlyListByDriver({pagination:this.pagination,filter:this.filter})},onEndDateChanged:function(t){this.endDateAPI=u["b"].formatDate(u["b"].extractDate(t,"DD/MM/YY ddd"),"YYYY-MM-DD"),this.isDateFilter=!0,this.pagination.page=1,this.getMonthlyListByDriver({pagination:this.pagination,filter:this.filter})},onScroll:function(t){var e=this;return l()(o.a.mark((function a(){var r,i,n,s,l,d,c;return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.index,t.from,t.to,t.ref,i=e.pagination,n=i.page,s=i.rowsPerPage,l=i.rowsNumber,d=e.monthlyList.length-1,c=Math.ceil(l/s),!(r>0&&n<c&&r===d)){a.next=8;break}return e.pagination.page++,a.next=8,e.getMonthlyListByDriver({pagination:e.pagination,filter:e.filter,isScroll:!0});case 8:case"end":return a.stop()}}),a)})))()},getMonthlyListByDriver:function(){var t=l()(o.a.mark((function t(e){var a,r,i,n,s,l,u,p,f,m,h,D;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.pagination,r=a.page,i=a.rowsPerPage,n=a.rowsNumber,s=a.sortBy,l=a.descending,u=e.filter,p=e.isScroll,f=0===i?n:i,m=(r-1)*i,h={conditions:{is_date_filter:!0,driver_id:this.driver.id},start:m,numPerPage:f,sortBy:s,descending:l,fromDate:this.fromDateAPI,endDate:this.endDateAPI},u&&(h.conditions.filter=u),this.isDateFilter||(h.conditions.is_date_filter=!1),c["a"].show(),t.prev=9,t.next=12,d["a"].getMonthlyReportsByDriver(h);case 12:D=t.sent,c["a"].hide(),D.data.data.forEach((function(t,e){t.index=100*(r-1)+e+1})),this.monthlyList=p?this.monthlyList.concat(D.data.data):D.data.data,this.pagination.rowsNumber=D.data.totalCount,this.pagination.page=r,this.pagination.rowsPerPage=i,this.pagination.sortBy=s,this.pagination.descending=l,t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](9),c["a"].hide(),console.log("errorrrrrrrrrr",t.t0);case 27:case"end":return t.stop()}}),t,this,[[9,23]])})));function e(e){return t.apply(this,arguments)}return e}(),getMonthlyAll:function(){var t=l()(o.a.mark((function t(e){var a,r,i;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.filter,r={conditions:{is_date_filter:!0},fromDate:this.fromDateAPI,endDate:this.endDateAPI},a&&(r.conditions.filter=a),this.isDateFilter||(r.conditions.is_date_filter=!1),c["a"].show(),t.prev=5,t.next=8,d["a"].getMonthlyReportsAll(r);case 8:i=t.sent,c["a"].hide(),i.data.data.forEach((function(t,e){t.index=e+1})),this.monthlyAll=i.data.data,t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](5),c["a"].hide(),console.log("errorrrrrrrrrr",t.t0);case 18:case"end":return t.stop()}}),t,this,[[5,14]])})));function e(e){return t.apply(this,arguments)}return e}(),exportTable:function(){var t=this;return l()(o.a.mark((function e(){var a,r,i;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getMonthlyAll({filter:t.filter});case 2:a=t.columns,r=[a.map((function(t){return f(t.label)}))].concat(t.monthlyAll.map((function(t){return a.map((function(e){return"is_group"===e.field?f(1===t.is_group?"DAILY":"EXTRA",e.format):"user_name"===e.field?f(t.user.full_name,e.format):f(t[e.field],e.format)})).join(",")}))).join("\r\n"),i=Object(p["a"])("table-export.csv",r,"text/csv"),!0!==i&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"});case 6:case"end":return e.stop()}}),e)})))()}},created:function(){}},h=m,D=a("2877"),g=a("9989"),b=a("eaac"),y=a("27f9"),v=a("0016"),_=a("7cbe"),w=a("52ee"),x=a("bd08"),q=a("db86"),Y=a("9c40"),M=a("eebe"),k=a.n(M),P=Object(D["a"])(h,r,i,!1,null,null,null);e["default"]=P.exports;k()(P,"components",{QPage:g["a"],QTable:b["a"],QInput:y["a"],QIcon:v["a"],QPopupProxy:_["a"],QDate:w["a"],QTr:x["a"],QTd:q["a"],QBtn:Y["a"]})}}]);