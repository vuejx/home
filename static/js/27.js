(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Kbks:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a={_resource:{title:"Entities management",type:"_resource",columns:["shortName","title","description","order","status"],config_columns:[{field:"_source.shortName",field_query:"shortName",field_sort:"shortName.keyword",headerText:"Sort Name",textAlign:"left",width:220,minWidth:220},{field:"_source.title",field_query:"title",field_sort:"title.keyword",headerText:"Title",textAlign:"left",width:320,minWidth:320},{field:"_source.description",field_query:"description",field_sort:"description.keyword",headerText:"Description",textAlign:"left"},{field:"_source.order",field_query:"order",field_sort:"order",headerText:"Order",textAlign:"right",width:120,minWidth:120},{field:"_source.status._source.title",field_query:"status._source.title",field_sort:"status._source.title.keyword",headerText:"Status",textAlign:"center",width:120,minWidth:120}],sort:[{order:"asc"},"_score"],add:"add",update:"update",delete:"delete",config:{type:0,form:[{model:"createdAt",dataType:"number",type:"view",format:"MM/dd/yyyy",class:"xs6 sm3",label:"Created date:"},{model:"modifiedAt",dataType:"number",type:"view",format:"MM/dd/yyyy",class:"xs6 sm3",label:"Modified date:"},{model:"shortName",dataType:"string",type:"text",class:"xs12 sm6",label:"Sort Name:"},{model:"title",dataType:"string",type:"text",class:"xs12",label:"Title:"},{model:"description",dataType:"string",type:"textarea",class:"xs12",label:"Description:"},{model:"config",dataType:"string",type:"codemirror",class:"xs12",label:"Config:"},{model:"order",dataType:"number",type:"number",class:"xs6",label:"Order:"},{model:"status",dataType:"object",type:"autocomplete",object:!0,class:"xs6",label:"Status:",itemText:"_source.title",itemValue:"_source.shortName",data:[{_source:{shortName:"activate",title:"Activate"}},{_source:{shortName:"deactivate",title:"Deactivate"}}]},{model:"role",dataType:"object",type:"autocomplete",object:!0,multiple:!0,class:"xs12",label:"Roles:",itemText:"_source.title",itemValue:"_source.shortName",link:"role",column:["shortName","title"],sort:[{order:"asc"},"_score"]},{model:"databaseType",dataType:"object",type:"autocomplete",object:!0,multiple:!0,class:"xs12 sm6",label:"DatabaseType:",itemText:"_source.title",itemValue:"_source.shortName",link:"dict_item",link_item:"database",link_columns:["shortName","title"],link_sort:[{order:"asc"},"_score"]},{model:"syncSite",dataType:"boolean",type:"autocomplete",class:"xs12 sm6",label:"Public data:",itemText:"_source.title",itemValue:"_source.shortName",data:[{_source:{shortName:!0,title:"Public"}},{_source:{shortName:!1,title:"Private"}}]}]}}}},RyUM:function(e,t,r){"use strict";r.r(t);var a=r("WTW0"),i=r("L2JU"),s=r("Kbks");function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){l(e,t,r[t])})}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var n={data:function(){return{mobileScreen:!1,defaultPadding:!0,items:[{title:"Dashboard",icon:"mdi-desktop-mac-dashboard",link:"/prototype/dashboard"}]}},mounted:function(){var e=this;e.$nextTick(function(){window.innerWidth<=960?(e.mobileScreen=!0,e.defaultPadding=!1):setTimeout(function(){e.mobileScreen=!1,e.defaultPadding=!1},200);e.$router.history.current.params})},computed:o({},Object(a.b)("user",["user"]),Object(a.b)("toolbar",["navigationDrawer"]),Object(a.b)("vuejx_manager",["lastCall"])),watch:{lastCall:function(){var e=this;if(e.lastCall){var t=e.$router.history.current.params;e.pullData({user:e.user,entity:""!==s.a._resource.type?s.a._resource.type:"_resource",site:null,columns:s.a._resource.columns,sort:s.a._resource.sort}).then(function(r){var a=r.results.hits.hits;for(var i in a)e.items.push({title:a[i]._source.title,icon:"mdi-playlist-plus",link:"/admin/"+(void 0!==t.site?t.site:"guest")+"/entity/"+a[i]._source.shortName})}).catch(function(e){console.error(e)})}}},methods:o({},Object(i.b)("vuejx_manager",["pullData"]))},c=r("KHd+"),d=Object(c.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{mobile_screen:this.mobileScreen,navigation__drawer__open:this.navigationDrawer}},[t("v-content",{class:{default_padding:this.defaultPadding},staticStyle:{width:"100%"}},[t("v-container",{staticClass:"mt-2 pt-1",staticStyle:{width:"100%"},attrs:{transition:"fade-transition"}},[t("v-fade-transition",{attrs:{"leave-absolute":""}},[t("router-view")],1)],1)],1)],1)},[],!1,null,null,null);t.default=d.exports}}]);