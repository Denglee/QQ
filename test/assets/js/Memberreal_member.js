(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Memberreal_member"],{"145a":function(r,t,e){"use strict";var l=e("9519"),a=e.n(l);a.a},9519:function(r,t,e){},f8d5:function(r,t,e){"use strict";e.r(t);var l=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"layoutR-main"},[e("iframe",{attrs:{src:r.localSrc,frameborder:"0",id:"iframe"}})])},a=[],o={name:"Memberreal_member",data:function(){return{localUrl:this.GLOBAL.localUrl,localSrc:""}},methods:{},created:function(){var r=this.$route.params.user_id;console.log(r);var t="";t=r?this.localUrl+"/Admin"+this.$route.fullPath+"/user_id/"+r+".html":this.localUrl+"/Admin"+this.$route.fullPath+"/user_id/.html",console.log(t),this.localSrc=t},watch:{$route:function(r,t){console.log(t),this.$router.go(0)}}},c=o,i=(e("145a"),e("2877")),n=Object(i["a"])(c,l,a,!1,null,"26d8a647",null);t["default"]=n.exports}}]);