(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/add-phone-contact/add-phone-contact"],{"4c2c":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(e("a34a")),o=c(e("51e8"));function c(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,a,o,c,u){try{var r=n[c](u),i=r.value}catch(s){return void e(s)}r.done?t(i):Promise.resolve(i).then(a,o)}function r(n){return function(){var t=this,e=arguments;return new Promise(function(a,o){var c=n.apply(t,e);function r(n){u(c,a,o,r,i,"next",n)}function i(n){u(c,a,o,r,i,"throw",n)}r(void 0)})}}var i={data:function(){return{title:"addPhoneContact",name:"",phone:""}},methods:{nameChange:function(n){this.name=n.detail.value},phoneChange:function(n){this.phone=n.detail.value},add:function(){1===this.checkPermission()&&n.addPhoneContact({firstName:this.name,mobilePhoneNumber:this.phone,success:function(){n.showModal({content:"已成功添加联系人！",showCancel:!1})},fail:function(){n.showModal({content:"添加联系人失败！",showCancel:!1})}})},checkPermission:function(){var t=r(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!o.default.isIOS){t.next=6;break}return t.next=3,o.default.requestIOS("contact");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,o.default.requestAndroid("android.permission.WRITE_CONTACTS");case 8:t.t0=t.sent;case 9:return e=t.t0,null===e||1===e?e=1:n.showModal({content:"需要联系人权限",confirmText:"设置",success:function(n){n.confirm&&o.default.gotoAppSetting()}}),t.abrupt("return",e);case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};t.default=i}).call(this,e("6e42")["default"])},"6bc9":function(n,t,e){"use strict";e.r(t);var a=e("ee5c"),o=e("c70a");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);var u=e("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},af2b:function(n,t,e){"use strict";(function(n){e("d105"),e("921b");a(e("66fd"));var t=a(e("6bc9"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},c70a:function(n,t,e){"use strict";e.r(t);var a=e("4c2c"),o=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t["default"]=o.a},ee5c:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})}},[["af2b","common/runtime","common/vendor"]]]);