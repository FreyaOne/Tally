(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/template/register"],{"445f":function(e,t,n){"use strict";(function(e){n("d105"),n("921b");a(n("66fd"));var t=a(n("dd79"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"59d9":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"742e":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{username:"",passwd:""}},methods:{doReg:function(){var t=this,a=this.username,o=this.passwd;if(e.hideKeyboard(),a.toString().length<=2)return e.showToast({title:"用户名请输入大于两位字符",icon:"none"}),!1;e.showLoading({title:"注册中..."});var r="http://39.107.125.67:8080/register/"+a+"&"+o;e.request({url:r,method:"POST",success:function(a){t.text="request success",setTimeout(function(){e.hideLoading()},2),0==a.data.code?(e.showToast({title:"注册成功,请登录",icon:"none"}),e.redirectTo({url:"./login"}),setTimeout(function(){e.hideToast()},3),console.log(n("注册成功"," at pages/tabBar/template/register.vue:98"))):(e.showToast({title:"注册失败,请重新注册",icon:"none"}),console.log(n(a.data," at pages/tabBar/template/register.vue:104")),console.log(n(r," at pages/tabBar/template/register.vue:105")))}})}}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},a72b:function(e,t,n){},dd79:function(e,t,n){"use strict";n.r(t);var a=n("59d9"),o=n("ee0e");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("ddb7");var u=n("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},ddb7:function(e,t,n){"use strict";var a=n("a72b"),o=n.n(a);o.a},ee0e:function(e,t,n){"use strict";n.r(t);var a=n("742e"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=o.a}},[["445f","common/runtime","common/vendor"]]]);