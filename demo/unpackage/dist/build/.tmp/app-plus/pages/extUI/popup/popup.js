(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/popup/popup"],{1421:function(n,t,e){"use strict";e.r(t);var i=e("5d8a"),u=e("b1c2");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("3b39");var c=e("2877"),a=Object(c["a"])(u["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},"26a1":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"ca95"))},u={components:{uniPopup:i},data:function(){return{show:!1,type:"",list:["1","2","3","4","5","6","7","8","9","10"],content:"顶部弹 popup",bottomData:[{text:"微信",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png",name:"wx"},{text:"支付宝",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png",name:"wx"},{text:"QQ",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png",name:"qq"},{text:"新浪",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png",name:"sina"},{text:"百度",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png",name:"copy"},{text:"其他",icon:"https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png",name:"more"}]}},methods:{togglePopup:function(n,t){switch(n){case"top":this.content="顶部弹出 popup";break;case"bottom":this.content="底部弹出 popup";break;case"center":this.content="居中弹出 popup";break}this.type=n,"tip"===t?this.show=!0:this.$refs[t].open()},cancel:function(n){"tip"!==n?this.$refs[n].close():this.show=!1},change:function(t){console.log(n(t.show," at pages/extUI/popup/popup.vue:128"))}}};t.default=u}).call(this,e("0de9")["default"])},"3b39":function(n,t,e){"use strict";var i=e("e0da"),u=e.n(i);u.a},"5d8a":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return u})},b1c2:function(n,t,e){"use strict";e.r(t);var i=e("26a1"),u=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);t["default"]=u.a},b70c:function(n,t,e){"use strict";(function(n){e("d105"),e("921b");i(e("66fd"));var t=i(e("1421"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},e0da:function(n,t,e){}},[["b70c","common/runtime","common/vendor"]]]);