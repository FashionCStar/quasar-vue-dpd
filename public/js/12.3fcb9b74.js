(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"86e6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[[n("div",[n("q-table",{class:"ios"===e.is_mobile?"my-sticky-dynamic table-top-ios":"android"===e.is_mobile?"my-sticky-dynamic table-top-android":"my-sticky-dynamic",attrs:{title:"Users",data:e.userList,columns:e.columns,"row-key":"name",pagination:e.pagination,filter:e.filter,"binary-state-sort":""},on:{"update:pagination":function(t){e.pagination=t},request:e.getUsers},scopedSlots:e._u([{key:"top-left",fn:function(){return[n("div",{staticClass:"items-center"},[n("q-btn",{staticStyle:{width:"168px",height:"40px"},attrs:{rounded:"",dense:"","no-caps":"",label:"+Add User",color:"blue-7"},on:{click:function(t){return e.createNew()}}})],1)]},proxy:!0},{key:"top-right",fn:function(){return[n("q-input",{staticStyle:{width:"168px"},attrs:{dense:"",debounce:"300",placeholder:"Search","input-class":"text-white border-white",color:"blue-7"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search",color:"white"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[n("q-tr",{attrs:{props:t},nativeOn:{click:function(n){return e.goToDetail(t.row.id)}}},[n("q-td",{key:"full_name",attrs:{props:t}},[e._v(e._s(t.row.full_name))]),n("q-td",{key:"name",attrs:{props:t}},[e._v(e._s(t.row.name))]),n("q-td",{key:"email",attrs:{props:t}},[e._v(e._s(t.row.email))]),n("q-td",{key:"phone",attrs:{props:t}},[e._v(e._s(t.row.phone))]),n("q-td",{key:"zipcode",attrs:{props:t}},[e._v(e._s(t.row.zipcode))]),n("q-td",{key:"location",attrs:{props:t}},[e._v(e._s(t.row.belongs))]),n("q-td",{key:"parent_name",attrs:{props:t}},[e._v(e._s(t.row.parent_name))]),n("q-td",{key:"active_status",attrs:{props:t}},[e._v(e._s(t.row.is_active?"ACTIVATED":"DEACTIVATED"))]),n("q-td",{key:"buttons",attrs:{props:t}},[n("q-btn",{attrs:{flat:"",icon:"fas fa-trash-alt"},on:{click:function(n){return e.remove(t.row)}},nativeOn:{click:function(e){e.stopPropagation()}}})],1)],1)]}},{key:"bottom",fn:function(t){return[n("div",{staticClass:"col-12 row justify-end items-center"},[e._v("\n            Total Records: "+e._s(t.pagination.rowsNumber)+"\n            "),n("q-btn",{attrs:{icon:"chevron_left",color:"grey-8",round:"",dense:"",flat:"",disable:t.isFirstPage},on:{click:t.prevPage}}),n("span",[e._v(e._s(t.pagination.page)+" / "+e._s(Math.ceil(t.pagination.rowsNumber/t.pagination.rowsPerPage)))]),n("q-btn",{attrs:{icon:"chevron_right",color:"grey-8",round:"",dense:"",flat:"",disable:t.isLastPage},on:{click:t.nextPage}})],1)]}}])})],1)]],2)},i=[],r=(n("7f7f"),n("a34a")),o=n.n(r),s=(n("96cf"),n("c973")),l=n.n(s),c=n("1e53"),u=n("f508"),d={name:"Users",data:function(){return{filter:"",showDetail:!1,pagination:{sortBy:"name",descending:!1,page:1,rowsPerPage:10,rowsNumber:20},columns:[{name:"full_name",required:!0,label:"Full Name",align:"left",field:"full_name",sortable:!1},{name:"name",required:!0,label:"Name",align:"left",field:"name",sortable:!1},{name:"email",required:!0,label:"Email",align:"center",field:"email",sortable:!1},{name:"phone",required:!0,label:"Phone",align:"center",field:"phone",sortable:!1},{name:"zipcode",required:!0,label:"Zipcode",align:"center",field:"zipcode",sortable:!1},{name:"location",required:!0,label:"Location",align:"center",field:"location",sortable:!1},{name:"parent_name",required:!0,label:"Parent Name",align:"center",field:"parent_name",sortable:!1},{name:"active_status",required:!0,label:"Active Status",align:"center",field:"active_status",sortable:!1},{name:"buttons",label:"",field:"buttons"}],userList:[],is_mobile:"web"}},mounted:function(){this.checkPlatform(),this.$store.commit("auth/pageTitle",this.$router.currentRoute.meta.title),this.getUsers({pagination:this.pagination,filter:void 0})},methods:{checkPlatform:function(){this.$q.platform.is.mobile?this.$q.platform.is.ios?this.is_mobile="ios":this.is_mobile="android":this.is_mobile="web"},createNew:function(){this.$router.push({name:"New User"})},goToDetail:function(e){this.$router.push({name:"User Detail",params:{id:e}})},getUsers:function(){var e=l()(o.a.mark((function e(t){var n,a,i,r,s,l,d,p,m,f,g;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.pagination,a=n.page,i=n.rowsPerPage,r=n.rowsNumber,s=n.sortBy,l=n.descending,d=t.filter,p=0===i?r:i,m=(a-1)*i,f={conditions:{},start:m,numPerPage:p,sortBy:s,descending:l},d&&(f.conditions.filter=d),u["a"].show(),e.prev=7,e.next=10,c["a"].getUsers(f);case 10:g=e.sent,u["a"].hide(),this.userList=g.data.data,this.pagination.rowsNumber=g.data.totalCount,this.pagination.page=a,this.pagination.rowsPerPage=i,this.pagination.sortBy=s,this.pagination.descending=l,e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](7),u["a"].hide(),console.log("errorrrrrrrrrr",e.t0);case 24:case"end":return e.stop()}}),e,this,[[7,20]])})));function t(t){return e.apply(this,arguments)}return t}(),remove:function(e){var t=this;this.$q.dialog({title:"Confirm",message:"Are you surely remove "+e.name+"?",cancel:!0,persistent:!0}).onOk(l()(o.a.mark((function n(){var a,i;return o.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={conditions:{id:e.id}},u["a"].show(),n.prev=2,n.next=5,c["a"].removeUser(a);case 5:i=n.sent,u["a"].hide(),console.log("remove result",i),t.$q.notify({color:"positive",position:"top",message:e.name+" is removed successfully !"}),t.getUsers({pagination:t.pagination,filter:void 0}),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](2),u["a"].hide();case 15:case"end":return n.stop()}}),n,null,[[2,12]])})))).onCancel((function(){})).onDismiss((function(){}))}},created:function(){}},p=d,m=(n("a07f"),n("2877")),f=n("9989"),g=n("eaac"),h=n("27f9"),b=n("0016"),v=n("9c40"),w=n("bd08"),_=n("db86"),y=n("eebe"),k=n.n(y),q=Object(m["a"])(p,a,i,!1,null,null,null);t["default"]=q.exports;k()(q,"components",{QPage:f["a"],QTable:g["a"],QInput:h["a"],QIcon:b["a"],QBtn:v["a"],QTr:w["a"],QTd:_["a"]})},"8dd1":function(e,t,n){},a07f:function(e,t,n){"use strict";var a=n("8dd1"),i=n.n(a);i.a}}]);