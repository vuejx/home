(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{RyUM:function(t,e,r){"use strict";r.r(e);var n=r("WTW0"),a=r("L2JU"),i=r("Kbks");function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){s(t,e,r[e])})}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={data:function(){return{mobileScreen:!1,defaultPadding:!0,items:[{title:"Dashboard",icon:"mdi-desktop-mac-dashboard",link:"/prototype/dashboard"}]}},mounted:function(){var t=this;t.$nextTick(function(){window.innerWidth<=960?(t.mobileScreen=!0,t.defaultPadding=!1):setTimeout(function(){t.mobileScreen=!1,t.defaultPadding=!1},200);t.$router.history.current.params})},computed:o({},Object(n.b)("user",["user"]),Object(n.b)("toolbar",["navigationDrawer"]),Object(n.b)("vuejx_manager",["lastCall"])),watch:{lastCall:function(){var t=this;if(t.lastCall){var e=t.$router.history.current.params;t.pullData({user:t.user,entity:""!==i.a._resource.type?i.a._resource.type:"_resource",site:null,columns:i.a._resource.columns,sort:i.a._resource.sort}).then(function(r){var n=r.results.hits.hits;for(var a in n)t.items.push({title:n[a]._source.title,icon:"mdi-playlist-plus",link:"/admin/"+(void 0!==e.site?e.site:"guest")+"/entity/"+n[a]._source.shortName})}).catch(function(t){console.error(t)})}}},methods:o({},Object(a.b)("vuejx_manager",["pullData"]))},u=r("KHd+"),l=Object(u.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{mobile_screen:this.mobileScreen,navigation__drawer__open:this.navigationDrawer}},[e("v-content",{class:{default_padding:this.defaultPadding},staticStyle:{width:"100%"}},[e("v-container",{staticClass:"mt-2 pt-1",staticStyle:{width:"100%"},attrs:{transition:"fade-transition"}},[e("v-fade-transition",{attrs:{"leave-absolute":""}},[e("router-view")],1)],1)],1)],1)},[],!1,null,null,null);e.default=l.exports}}]);