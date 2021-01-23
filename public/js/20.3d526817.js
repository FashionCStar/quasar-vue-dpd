(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"7eaf":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[[a("div",[a("q-table",{class:"ios"===e.is_mobile?"my-sticky-dynamic table-top-ios":"android"===e.is_mobile?"my-sticky-dynamic table-top-android":"my-sticky-dynamic",attrs:{title:"ROUTES",data:e.routeList,columns:"admin"===e.userLevel?e.columns_admin:e.columns,"row-key":"route_number",pagination:e.pagination,filter:e.filter,"binary-state-sort":"","virtual-scroll":"","virtual-scroll-item-size":48,"virtual-scroll-sticky-size-start":48,"rows-per-page-options":[0]},on:{"update:pagination":function(t){e.pagination=t},request:e.getRoutes,"virtual-scroll":e.onScroll},scopedSlots:e._u([{key:"top-left",fn:function(){return[a("div",{staticClass:"items-center"},[a("q-btn",{staticStyle:{width:"168px",height:"40px"},attrs:{rounded:"",dense:"","no-caps":"",label:"+Add Route",color:"blue-7"},on:{click:function(t){return e.goToDetail()}}})],1)]},proxy:!0},{key:"top-right",fn:function(){return[a("q-input",{staticClass:"q-mb-sm",staticStyle:{width:"168px"},attrs:{dense:"",debounce:"300",placeholder:"Search","input-class":"text-white border-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search",color:"white"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t},nativeOn:{click:function(a){return e.goToDetail(t.row)}}},[a("q-td",{key:"no",attrs:{props:t}},[e._v(e._s(t.row.index))]),a("q-td",{key:"route_number",attrs:{props:t}},[e._v(e._s(t.row.route_number))]),a("q-td",{key:"route_type",attrs:{props:t}},[e._v(e._s(t.row.route_type?"EXTRA":"DAILY"))]),"admin"===e.userLevel?a("q-td",{key:"user_name",attrs:{props:t}},[e._v(e._s(t.row.user.name))]):e._e()],1)]}},{key:"bottom",fn:function(t){return[a("div",{staticClass:"col-12 row justify-end items-center"},[e._v("\n            Total Records: "+e._s(e.pagination.rowsNumber)+"\n            "),a("q-btn",{attrs:{icon:"chevron_left",color:"grey-8",round:"",dense:"",flat:"",disable:t.isFirstPage},on:{click:t.prevPage}}),a("span",[e._v(e._s(t.pagination.page)+" / "+e._s(Math.ceil(t.pagination.rowsNumber/t.pagination.rowsPerPage)))]),a("q-btn",{attrs:{icon:"chevron_right",color:"grey-8",round:"",dense:"",flat:"",disable:t.isLastPage},on:{click:t.nextPage}})],1)]}}])})],1),a("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.showDetail,callback:function(t){e.showDetail=t},expression:"showDetail"}},[a("q-card",{staticStyle:{"background-color":"#3E444E","max-width":"500px","min-height":"500px"}},[a("q-bar",{staticStyle:{"background-color":"#272B33"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"white"}},[a("q-tooltip",{attrs:{"content-class":"bg-white text-black"}},[e._v("Close")])],1),a("div",{staticClass:"text-h6 text-white"},[e._v(e._s(e.dialogTitle))])],1),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},[a("q-form",{ref:"selectedNumber",staticStyle:{width:"320px",margin:"auto"},attrs:{model:e.selectedNumber},on:{submit:e.onSubmit}},[a("div",{staticClass:"row justify-between q-col-gutter-md"},[a("div",{staticClass:"col-12"},[a("span",{staticClass:"text-white"},[e._v("Route")]),a("q-input",{attrs:{dense:"",outlined:"",required:"",color:"blue-7","bg-color":"white","input-class":"text-black"},model:{value:e.selectedNumber.route_number,callback:function(t){e.$set(e.selectedNumber,"route_number",t)},expression:"selectedNumber.route_number"}}),a("q-separator",{staticClass:"q-my-md",attrs:{color:"grey-4"}}),a("span",{staticClass:"text-white"},[e._v("Type")]),a("q-select",{staticClass:"q-mb-xs",attrs:{dense:"",required:"",outlined:"",options:e.route_types,"option-value":function(e){return null===e?null:e.value},"option-label":function(e){return null===e?"- Null -":e.label},"emit-value":"","map-options":"",behavior:"menu",color:"blue-7","bg-color":"white","input-class":"text-black"},model:{value:e.selectedNumber.route_type,callback:function(t){e.$set(e.selectedNumber,"route_type",t)},expression:"selectedNumber.route_type"}})],1)]),a("q-card-actions",{attrs:{align:"center"}},[e.isNewRecord?e._e():a("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{"no-caps":"",dense:"",rounded:"",label:"Delete",color:"blue-7"},on:{click:e.remove}}),a("q-btn",{staticStyle:{width:"100px",height:"40px"},attrs:{label:e.isNewRecord?"Add":"Update",color:"blue-7","no-caps":"",dense:"",rounded:"",type:"submit"}})],1)],1)],1)],1)],1)]],2)},o=[],i=a("a34a"),n=a.n(i),s=(a("96cf"),a("c973")),l=a.n(s),c=a("1e53"),u=a("f508"),d={name:"RouteList",data:function(){return{filter:"",showDetail:!1,pagination:{sortBy:"route_number",descending:!1,page:1,rowsPerPage:100,rowsNumber:20},route_types:[{label:"DAILY",value:0},{label:"EXTRA",value:1}],columns:[{name:"no",required:!0,label:"NO",align:"left",field:"no"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"route_type",required:!0,label:"TYPE",align:"left",field:"route_type"}],columns_admin:[{name:"no",required:!0,label:"NO",align:"left",field:"no"},{name:"route_number",required:!0,label:"ROUTE",align:"left",field:"route_number"},{name:"route_type",required:!0,label:"TYPE",align:"left",field:"route_type"},{name:"user_name",required:!0,label:"USER",align:"left",field:"user_name"}],routeList:[],selectedNumber:{route_number:"",route_type:""},dialogTitle:"",is_mobile:"web",isNewRecord:!0}},mounted:function(){this.checkPlatform(),this.$store.commit("auth/pageTitle",this.$router.currentRoute.meta.title),this.getRoutes({pagination:this.pagination,filter:void 0})},computed:{userLevel:{get:function(){return this.$store.state.auth.userLevel}}},methods:{checkPlatform:function(){this.$q.platform.is.mobile?this.$q.platform.is.ios?this.is_mobile="ios":this.is_mobile="android":this.is_mobile="web"},goToDetail:function(e){e?(this.isNewRecord=!1,this.dialogTitle="Edit Route",this.selectedNumber.id=e.id,this.selectedNumber.route_number=e.route_number,this.selectedNumber.route_type=e.route_type):(this.isNewRecord=!0,this.dialogTitle="Add Route",this.selectedNumber={route_number:"",route_type:""}),this.showDetail=!0},onScroll:function(e){var t=this;return l()(n.a.mark((function a(){var r,o,i,s,l,c,u;return n.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.index,e.from,e.to,e.ref,o=t.pagination,i=o.page,s=o.rowsPerPage,l=o.rowsNumber,c=t.routeList.length-1,u=Math.ceil(l/s),!(r>0&&i<u&&r===c)){a.next=8;break}return t.pagination.page++,a.next=8,t.getRoutes({pagination:t.pagination,filter:t.filter,isScroll:!0});case 8:case"end":return a.stop()}}),a)})))()},getRoutes:function(){var e=l()(n.a.mark((function e(t){var a,r,o,i,s,l,d,p,m,b,h,f;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.pagination,r=a.page,o=a.rowsPerPage,i=a.rowsNumber,s=a.sortBy,l=a.descending,d=t.filter,p=t.isScroll,m=0===o?i:o,b=(r-1)*o,h={conditions:{},start:b,numPerPage:m,sortBy:s,descending:l},d&&(h.conditions.filter=d),u["a"].show(),e.prev=8,e.next=11,c["a"].getRoutes(h);case 11:f=e.sent,u["a"].hide(),f.data.data.forEach((function(e,t){e.index=10*(r-1)+t+1})),this.routeList=p?this.routeList.concat(f.data.data):f.data.data,this.pagination.rowsNumber=f.data.totalCount,this.pagination.page=r,this.pagination.rowsPerPage=o,this.pagination.sortBy=s,this.pagination.descending=l,e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](8),u["a"].hide(),console.log("errorrrrrrrrrr",e.t0);case 26:case"end":return e.stop()}}),e,this,[[8,22]])})));function t(t){return e.apply(this,arguments)}return t}(),cancelDetail:function(){this.showDetail=!1,this.selectedNumber={}},onSubmit:function(){var e=this;return l()(n.a.mark((function t(){var a,r,o;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a={data:e.selectedNumber},!e.selectedNumber.id){t.next=19;break}return a.conditions={id:e.selectedNumber.id},u["a"].show(),t.prev=4,t.next=7,c["a"].updateRoute(a);case 7:r=t.sent,u["a"].hide(),console.log("result",r.data),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](4),u["a"].hide(),console.log("error",t.t0);case 16:e.cancelDetail(),t.next=33;break;case 19:return u["a"].show(),t.prev=20,t.next=23,c["a"].createRoute(a);case 23:o=t.sent,u["a"].hide(),console.log("result",o.data),t.next=32;break;case 28:t.prev=28,t.t1=t["catch"](20),u["a"].hide(),console.log("error",t.t1);case 32:e.cancelDetail();case 33:e.getRoutes({pagination:e.pagination,filter:void 0});case 34:case"end":return t.stop()}}),t,null,[[4,12],[20,28]])})))()},remove:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove "+this.selectedNumber.route_number+"?",cancel:!0,persistent:!0,color:"blue-7"}).onOk(l()(n.a.mark((function t(){var a,r;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={conditions:{id:e.selectedNumber.id}},u["a"].show(),t.prev=2,t.next=5,c["a"].removeRoute(a);case 5:r=t.sent,u["a"].hide(),console.log("remove result",r),e.$q.notify({color:"positive",position:"top",message:e.selectedNumber.route_number+" is removed successfully !"}),e.cancelDetail(),e.getRoutes({pagination:e.pagination,filter:void 0}),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](2),u["a"].hide();case 16:case"end":return t.stop()}}),t,null,[[2,13]])})))).onCancel((function(){})).onDismiss((function(){}))}},created:function(){}},p=d,m=a("2877"),b=a("9989"),h=a("eaac"),f=a("9c40"),g=a("27f9"),v=a("0016"),w=a("bd08"),_=a("db86"),y=a("24e8"),x=a("f09f"),k=a("d847"),q=a("05c0"),N=a("eb85"),R=a("a370"),P=a("0378"),S=a("ddd8"),T=a("4b7e"),C=a("7f67"),D=a("eebe"),Q=a.n(D),E=Object(m["a"])(p,r,o,!1,null,null,null);t["default"]=E.exports;Q()(E,"components",{QPage:b["a"],QTable:h["a"],QBtn:f["a"],QInput:g["a"],QIcon:v["a"],QTr:w["a"],QTd:_["a"],QDialog:y["a"],QCard:x["a"],QBar:k["a"],QTooltip:q["a"],QSeparator:N["a"],QCardSection:R["a"],QForm:P["a"],QSelect:S["a"],QCardActions:T["a"]}),Q()(E,"directives",{ClosePopup:C["a"]})}}]);