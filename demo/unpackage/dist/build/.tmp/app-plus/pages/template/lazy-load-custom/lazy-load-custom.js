(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/lazy-load-custom/lazy-load-custom"],{"34b0":function(t,n,e){"use strict";var o=e("7c69"),i=e.n(o);i.a},3676:function(t,n,e){"use strict";(function(t){e("d105"),e("921b");o(e("66fd"));var n=o(e("bc57"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"7c69":function(t,n,e){},"9ce0":function(t,n,e){"use strict";e.r(n);var o=e("ee3d"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=i.a},b080:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},bc57:function(t,n,e){"use strict";e.r(n);var o=e("b080"),i=e("9ce0");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("34b0");var c=e("2877"),u=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},ee3d:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){for(var t=["shuijiao","muwu","cbd"],n=[],e=0;e<20;e++)n.push({src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/".concat(t[e%3],".jpg"),show:!1,loaded:!1});return{windowHeight:0,placeholderSrc:"../../../static/60x60.png",list:n,show:!1}},methods:{load:function(){var n=this;t.createSelectorQuery().selectAll(".lazy").boundingClientRect(function(t){t.forEach(function(t,e){t.top<=n.windowHeight&&(n.list[t.dataset.index].show=!0)})}).exec()},imageLoad:function(t){this.list[t.target.dataset.index].loaded=!0}},onLoad:function(){this.windowHeight=t.getSystemInfoSync().windowHeight},onShow:function(){var t=this;this.show||(this.show=!0,setTimeout(function(){t.load()},100))},onPageScroll:function(){this.load()}};n.default=e}).call(this,e("6e42")["default"])}},[["3676","common/runtime","common/vendor"]]]);