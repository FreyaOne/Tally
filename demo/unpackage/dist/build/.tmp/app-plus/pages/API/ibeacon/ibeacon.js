(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/ibeacon/ibeacon"],{"16b7":function(e,n,o){"use strict";var t=o("d4d0"),a=o.n(t);a.a},"473e":function(e,n,o){"use strict";o.r(n);var t=o("9842"),a=o.n(t);for(var c in t)"default"!==c&&function(e){o.d(n,e,function(){return t[e]})}(c);n["default"]=a.a},"86a8":function(e,n,o){"use strict";(function(e){o("d105"),o("921b");t(o("66fd"));var n=t(o("90c1"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,o("6e42")["createPage"])},"90c1":function(e,n,o){"use strict";o.r(n);var t=o("cf16"),a=o("473e");for(var c in a)"default"!==c&&function(e){o.d(n,e,function(){return a[e]})}(c);o("16b7");var s=o("2877"),i=Object(s["a"])(a["default"],t["a"],t["b"],!1,null,null,null);n["default"]=i.exports},9842:function(e,n,o){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t="FDA50693-A4E2-4FB1-AFCF-C6EB07647825",a={data:function(){return{title:"iBeacon",isOpen:!1,isStarted:!1,deviceList:[],isPageOpened:!1}},onLoad:function(){this.onBeaconUpdate()},onShow:function(){this.isPageOpened=!0},methods:{maskclose:function(){this.maskShow=!1},openBluetoothAdapter:function(){var n=this;e.openBluetoothAdapter({success:function(e){console.log(o("初始化蓝牙成功:"+e.errMsg," at pages/API/ibeacon/ibeacon.vue:52")),console.log(o(e," at pages/API/ibeacon/ibeacon.vue:53")),n.isOpen=!0,n.deviceList=[]},fail:function(e){console.log(o("初始化蓝牙失败，错误码："+(e.errCode||e.errMsg)," at pages/API/ibeacon/ibeacon.vue:58")),0!==e.errCode&&c(e.errCode,e.errMsg)}})},closeBluetoothAdapter:function(e){var n=this;this.stopBeaconDiscovery(),wx.closeBluetoothAdapter({success:function(e){n.isOpen=!1,console.log(o("断开蓝牙模块成功"," at pages/API/ibeacon/ibeacon.vue:70"))}})},onBeaconUpdate:function(){var n=this;e.onBeaconUpdate(function(e){n.isPageOpened&&n.isOpen&&n.isStarted&&(console.log(o(e," at pages/API/ibeacon/ibeacon.vue:79")),e.beacons&&e.beacons.length>0?n.getBeacons():e.connected||(n.deviceList=[]))})},startBeaconDiscovery:function(){var n=this;e.startBeaconDiscovery({uuids:this.getUUIDList(),success:function(e){n.isStarted=!0,console.log(o(e," at pages/API/ibeacon/ibeacon.vue:95"))},fail:function(e){console.error(o(e," at pages/API/ibeacon/ibeacon.vue:98"))}})},stopBeaconDiscovery:function(n){var t=this;this.isStarted&&e.stopBeaconDiscovery({success:function(e){t.isStarted=!1},fail:function(e){console.error(o(e," at pages/API/ibeacon/ibeacon.vue:109"))}})},getBeacons:function(){var n=this;e.getBeacons({success:function(e){e.beacons&&e.beacons.length>0&&(console.log(o(e.beacons," at pages/API/ibeacon/ibeacon.vue:118")),n.deviceList=e.beacons)},fail:function(e){console.log(o("获取设备服务失败，错误码："+e.errCode," at pages/API/ibeacon/ibeacon.vue:123")),0!==errCode.errCode&&c(errCode.errCode)}})},getUUIDList:function(){var n=e.getSystemInfoSync();if(!n)return[];var o=!!n.platform&&"ios"===n.platform.toLowerCase();return o?[t]:[]}},onUnload:function(){this.isPageOpened=!1}};function c(e,n){switch(e){case 1e4:s("未初始化蓝牙适配器");break;case 10001:s("未检测到蓝牙，请打开蓝牙重试！");break;case 10002:s("没有找到指定设备");break;case 10003:s("连接失败");break;case 10004:s("没有找到指定服务");break;case 10005:s("没有找到指定特征值");break;case 10006:s("当前连接已断开");break;case 10007:s("当前特征值不支持此操作");break;case 10008:s("其余所有系统上报的异常");break;case 10009:s("Android 系统特有，系统版本低于 4.3 不支持 BLE");break;default:s(n)}}function s(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.showModal({title:"提示",content:n,showCancel:o})}n.default=a}).call(this,o("6e42")["default"],o("0de9")["default"])},cf16:function(e,n,o){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},a=[];o.d(n,"a",function(){return t}),o.d(n,"b",function(){return a})},d4d0:function(e,n,o){}},[["86a8","common/runtime","common/vendor"]]]);