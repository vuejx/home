(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"0p1g":function(e,t,n){"use strict";n.r(t);var u=n("WTW0"),r=n("L2JU");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={name:"vuejx-screen",components:{VuejxComponent:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4)]).then(n.bind(null,"teDi"))}},props:{user:{type:Object,default:{}},page:{type:String,default:""},site:{type:String,default:"guest"},type:{type:String,default:"group"}},data:function(){return{vuejx:null}},computed:o({},Object(u.b)("user",["user"]),Object(u.b)("vuejx_manager",["lastCall"])),mounted:function(){},watch:{$route:function(e,t){var n=this;n.$nextTick(function(){console.log("watch"),n.lastCall=!0,n.pullDataDetailGuest({user:n.user,page:n.page,entity:"page",site:n.site}).then(function(e){n.vuejx=e.hits.hits[0]._source.vuejx,console.log(n.vuejx)}).catch(function(e){console.error(e),n.vuejx=null})})}},methods:o({},Object(r.b)("vuejx_manager",["pullDataDetailGuest"]))},c=n("KHd+"),i=Object(c.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page__container"},[null!==this.vuejx&&void 0!==this.vuejx?t("vuejx-component",{attrs:{vuejx_form:this.vuejx}}):this._e()],1)},[],!1,null,null,null);t.default=i.exports}}]);