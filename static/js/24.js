(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6KhT":function(e,_,t){"use strict";t.r(_);var r=t("O8CU").a,o=t("KHd+"),u=Object(o.a)(r,function(){var e=this.$createElement,_=this._self._c||e;return null!==this.vuejx_form&&void 0!==this.vuejx_form&&"undefined"!==this.vuejx_form?_("my-dynamic-view-header"):this._e()},[],!1,null,null,null);_.default=u.exports},O8CU:function(module,__webpack_exports__,__webpack_require__){"use strict";var axios__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("vDqi"),axios__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__),_config__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("8SHQ");__webpack_exports__.a={name:"vuejx-component-header",props:{vuejx_form:{type:Object,default:null},user:{type:Object,default:{}},page:{type:String,default:""},site:{type:String,default:""},csstext:{type:String,default:""}},data:function(){return{api:_config__WEBPACK_IMPORTED_MODULE_1__.a.vuejx}},mounted:function mounted(){var vm=this;null!==vm.vuejx_form&&void 0!==vm.vuejx_form&&"undefined"!==vm.vuejx_form&&(vm.vuejx_form=eval("( "+vm.vuejx_form+" ) "),Vue.component("my-dynamic-view-header",{metaInfo:function(){return{style:[{cssText:vm.csstext,type:"text/css"}]}},template:vm.vuejx_form.template,data:eval(" ( "+vm.vuejx_form.data+" ) "),beforeCreate:eval(" ( "+vm.vuejx_form.beforeCreate+" ) "),created:eval(" ( "+vm.vuejx_form.created+" ) "),beforeMount:eval(" ( "+vm.vuejx_form.beforeMount+" ) "),mounted:eval(" ( "+vm.vuejx_form.mounted+" ) "),beforeUpdate:eval(" ( "+vm.vuejx_form.beforeMount+" ) "),updated:eval(" ( "+vm.vuejx_form.updated+" ) "),beforeDestroy:eval(" ( "+vm.vuejx_form.beforeDestroy+" ) "),destroyed:eval(" ( "+vm.vuejx_form.destroyed+" ) "),methods:vm.vuejx_form.methods}))}}}}]);