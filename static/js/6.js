(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{vt7Y:function(t,e,a){"use strict";a.r(e);var s={name:"BackToTop",props:{text:{type:String,default:"Voltar ao topo"},visibleoffset:{type:[String,Number],default:600},visibleoffsetbottom:{type:[String,Number],default:0},right:{type:String,default:"30px"},bottom:{type:String,default:"40px"},scrollFn:{type:Function,default:function(t){}}},data:()=>({visible:!1}),mounted(){window.smoothscroll=(()=>{let t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(window.smoothscroll),window.scrollTo(0,Math.floor(t-t/5)))}),window.addEventListener("scroll",this.catchScroll)},destroyed(){window.removeEventListener("scroll",this.catchScroll)},methods:{catchScroll(){const t=window.pageYOffset>parseInt(this.visibleoffset),e=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-parseInt(this.visibleoffsetbottom);this.visible=parseInt(this.visibleoffsetbottom)>0?t&&!e:t,this.scrollFn(this)},backToTop(){window.smoothscroll(),this.$emit("scrolled")}}},i=(a("zZvG"),a("KHd+")),o=Object(i.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"back-to-top-fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"vue-back-to-top",style:"bottom:"+this.bottom+";right:"+this.right+";",on:{click:this.backToTop}},[this._t("default",[e("div",{staticClass:"default"},[e("span",[this._v("\n          "+this._s(this.text)+"\n        ")])])])],2)])},[],!1,null,null,null).exports;o.install=function(t,e){t.component(o.name,o)};var n={name:"home",components:{BackToTop:o},methods:{toWorkspace:function(t){window.location.href="http://workspace.vuejx.com/login?url_redirect="+t}}},r=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"position-relative"},[a("section",{staticClass:"section-shaped my-0"},[t._m(0),t._v(" "),a("div",{staticClass:"container shape-container d-flex"},[a("div",{staticClass:"col px-0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"btn-wrapper"},[a("base-button",{staticClass:"mb-3 mb-sm-0",attrs:{tag:"a",href:"https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html",type:"white"}},[t._v("\n                                    Get Started\n                                ")]),t._v(" "),a("base-button",{staticClass:"mb-3 mb-sm-0 btn-outline",attrs:{tag:"a",href:"https://www.creative-tim.com/product/argon-design-system",type:"white",icon:"fa fa-github"}},[t._v("\n                                    Github\n                                ")]),t._v(" "),a("base-button",{staticClass:"mb-3 mb-sm-0 btn-outline",attrs:{tag:"a",href:"https://www.creative-tim.com/product/argon-design-system",type:"white",icon:"fa fa-comments"}},[t._v("\n                                    Get Help\n                                ")])],1)])])])])])]),t._v(" "),a("section",{staticClass:"section section-lg pt-lg-0 mt--200"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"row row-grid"},[a("div",{staticClass:"col-lg-3 mb-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",staticStyle:{float:"left"},attrs:{name:"ni ni-cart",type:"primary",rounded:""}}),t._v(" "),a("h6",{staticClass:"text-primary text-uppercase",staticStyle:{"line-height":"52px","padding-left":"62px"}},[t._v("E-commerce")]),t._v(" "),a("base-button",{staticClass:"btn-block",staticStyle:{"text-align":"left",float:"left"},attrs:{tag:"a",href:"javascript:;",type:"primary"},on:{click:function(e){return t.toWorkspace("/e-commerce")}}},[t._v("\n                                    Learn more\n                                    "),a("badge",{attrs:{type:"white"}},[t._v("pro")])],1)],1)],1),t._v(" "),a("div",{staticClass:"col-lg-3 mb-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",staticStyle:{float:"left"},attrs:{name:"ni ni-world",type:"primary",rounded:""}}),t._v(" "),a("h6",{staticClass:"text-primary text-uppercase",staticStyle:{"line-height":"52px","padding-left":"62px"}},[t._v("Website")]),t._v(" "),a("base-button",{staticClass:"btn-block",staticStyle:{"text-align":"left",float:"left"},attrs:{tag:"a",href:"javascript:;",type:"primary"},on:{click:function(e){return t.toWorkspace("/website")}}},[t._v("\n                                    Learn more\n                                    "),a("badge",{attrs:{type:"white"}},[t._v("pro")])],1)],1)],1),t._v(" "),a("div",{staticClass:"col-lg-3 mb-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",staticStyle:{float:"left"},attrs:{name:"ni ni-mobile-button",type:"primary",rounded:""}}),t._v(" "),a("h6",{staticClass:"text-primary text-uppercase",staticStyle:{"line-height":"52px","padding-left":"62px"}},[t._v("Mobile")]),t._v(" "),a("base-button",{staticClass:"btn-block",staticStyle:{"text-align":"left",float:"left"},attrs:{tag:"a",href:"javascript:;",type:"primary"},on:{click:function(e){return t.toWorkspace("/mobile")}}},[t._v("\n                                    Learn more\n                                    "),a("badge",{attrs:{type:"white"}},[t._v("pro")])],1)],1)],1),t._v(" "),a("div",{staticClass:"col-lg-3 mb-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",staticStyle:{float:"left"},attrs:{name:"ni ni-laptop",type:"primary",rounded:""}}),t._v(" "),a("h6",{staticClass:"text-primary text-uppercase",staticStyle:{"line-height":"52px","padding-left":"62px"}},[t._v("Desktop")]),t._v(" "),a("base-button",{staticClass:"btn-block",staticStyle:{"text-align":"left",float:"left"},attrs:{tag:"a",href:"javascript:;",type:"primary"},on:{click:function(e){return t.toWorkspace("/desktop")}}},[t._v("\n                                    Learn more\n                                    "),a("badge",{attrs:{type:"white"}},[t._v("pro")])],1)],1)],1),t._v(" "),a("div",{staticClass:"col-lg-3 mb-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",staticStyle:{float:"left"},attrs:{name:"ni ni-single-copy-04",type:"warning",rounded:""}}),t._v(" "),a("h6",{staticClass:"text-warning text-uppercase",staticStyle:{"line-height":"52px","padding-left":"62px"}},[t._v("EForm")]),t._v(" "),a("base-button",{staticClass:"btn-block",staticStyle:{"text-align":"left",float:"left"},attrs:{tag:"a",href:"javascript:;",type:"warning"},on:{click:function(e){return t.toWorkspace("/eform")}}},[t._v("\n                                    Learn more\n                                    "),a("badge",{attrs:{type:"white"}},[t._v("free")])],1)],1)],1),t._v(" "),a("div",{staticClass:"col-lg-3 mb-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",staticStyle:{float:"left"},attrs:{name:"fa fa-file-pdf-o",type:"warning",rounded:""}}),t._v(" "),a("h6",{staticClass:"text-warning text-uppercase",staticStyle:{"line-height":"52px","padding-left":"62px"}},[t._v("Report")]),t._v(" "),a("base-button",{staticClass:"btn-block",staticStyle:{"text-align":"left",float:"left"},attrs:{tag:"a",href:"javascript:;",type:"warning"},on:{click:function(e){return t.toWorkspace("/report")}}},[t._v("\n                                    Learn more\n                                    "),a("badge",{attrs:{type:"white"}},[t._v("free")])],1)],1)],1),t._v(" "),a("div",{staticClass:"col-lg-3 mb-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",staticStyle:{float:"left"},attrs:{name:"fa fa-wpforms",type:"warning",rounded:""}}),t._v(" "),a("h6",{staticClass:"text-warning text-uppercase",staticStyle:{"line-height":"52px","padding-left":"62px"}},[t._v("Layout")]),t._v(" "),a("base-button",{staticClass:"btn-block",staticStyle:{"text-align":"left",float:"left"},attrs:{tag:"a",href:"javascript:;",type:"warning"},on:{click:function(e){return t.toWorkspace("/layout")}}},[t._v("\n                                    Learn more\n                                    "),a("badge",{attrs:{type:"white"}},[t._v("free")])],1)],1)],1),t._v(" "),a("div",{staticClass:"col-lg-3 mb-4"},[a("card",{staticClass:"border-0",attrs:{hover:"",shadow:"","body-classes":"py-5"}},[a("icon",{staticClass:"mb-4",staticStyle:{float:"left"},attrs:{name:"fa fa-wpforms",type:"warning",rounded:""}}),t._v(" "),a("h6",{staticClass:"text-warning text-uppercase",staticStyle:{"line-height":"52px","padding-left":"62px"}},[t._v("Blogs")]),t._v(" "),a("base-button",{staticClass:"btn-block",staticStyle:{"text-align":"left",float:"left"},attrs:{tag:"a",href:"http://blogs.vuejx.com",type:"warning"}},[t._v("\n                                    Learn more\n                                    "),a("badge",{attrs:{type:"white"}},[t._v("free")])],1)],1)],1)])])])])]),t._v(" "),a("back-to-top",{staticClass:"mb-5",attrs:{bottom:"50px",right:"50px"}},[a("icon",{attrs:{name:"ni ni-bold-up text-white",type:"primary",rounded:""}})],1)],1)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shape shape-style-1 shape-primary shape-skew"},[a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"display-3  text-white"},[this._v("A beautiful Design System\n                                "),e("span",[this._v("completed with examples")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"lead  text-white"},[this._v("The design system come up with your business idea.\n                                "),e("br"),this._v("\n                                Do anything you want with your own application to make your Startup better.\n                            ")])}],!1,null,null,null);e.default=r.exports}}]);