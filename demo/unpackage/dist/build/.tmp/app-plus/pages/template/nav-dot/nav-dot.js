(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/nav-dot/nav-dot"],{"31ea":function(t,e,n){"use strict";n.r(e);var i=n("81e6"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=o.a},"3e6c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"48f0":function(t,e,n){"use strict";(function(t){n("d105"),n("921b");i(n("66fd"));var e=i(n("b901"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"81e6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/uni-icons/uni-icons").then(n.bind(null,"724c"))},o={data:function(){return{title:"nav-dot"}},onReady:function(){this.setStyle(0,!0),this.setStyle(1,!0,"9")},methods:{setStyle:function(t,e,n){var i=getCurrentPages(),o=i[i.length-1],u=o.$getAppWebview();e?0===t?u.showTitleNViewButtonRedDot({index:t,text:n}):u.setTitleNViewButtonBadge({index:t,text:n}):0===t?u.hideTitleNViewButtonRedDot({index:t}):u.removeTitleNViewButtonBadge({index:t})}},onNavigationBarButtonTap:function(e){t.showToast({title:0===e.index?"你点了消息按钮":"你点了关注按钮",icon:"none"}),this.setStyle(e.index,!1)},components:{uniIcons:i}};e.default=o}).call(this,n("6e42")["default"])},b901:function(t,e,n){"use strict";n.r(e);var i=n("3e6c"),o=n("31ea");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);var a=n("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports}},[["48f0","common/runtime","common/vendor"]]]);