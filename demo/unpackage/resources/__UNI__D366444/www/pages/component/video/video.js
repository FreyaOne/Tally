!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=83)}({0:function(t,e){t.exports={}},1:function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.weexPlus=e.default=void 0,o="function"==typeof getUni?getUni:function(){var t=function(t){return"function"==typeof t},e=/^\$|^on|^create|Sync$|Manager$|^pause/,n=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],o=function(t){return!(e.test(t)&&"createBLEConnection"!==t||~n.indexOf(t))},a=function(e){return function(){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(a.success)||t(a.fail)||t(a.complete)?e.apply(void 0,[a].concat(o)):new Promise(function(t,n){e.apply(void 0,[Object.assign({},a,{success:t,fail:n})].concat(o)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},r=[],s=void 0;function u(t){r.forEach(function(e){return e({origin:s,data:t})})}var c=i.webview.currentWebview().id,l=new BroadcastChannel("UNI-APP-SUBNVUE");function p(t){t.$processed=!0;var e=i.webview.currentWebview().id===t.id,n="uniNView"===t.__uniapp_origin_type&&t.__uniapp_origin_id,o=t.id;if(t.postMessage=function(t){n?l.postMessage({data:t,to:e?n:o}):S({type:"UniAppSubNVue",data:t})},t.onMessage=function(t){r.push(t)},t.__uniapp_mask_id){s=t.__uniapp_host;var a=t.__uniapp_mask,u=i.webview.getWebviewById(t.__uniapp_mask_id);u=u.parent()||u;var c=t.show,p=t.hide,f=t.close,d=function(){u.setStyle({mask:"none"})};t.show=function(){u.setStyle({mask:a});for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return c.apply(t,n)},t.hide=function(){d();for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return p.apply(t,n)},t.close=function(){d();for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return f.apply(t,n)}}}function f(t){var e=i.webview.getWebviewById(t);return e&&!e.$processed&&p(e),e}l.onmessage=function(t){t.data.to===c&&u(t.data.data)};var d=weex.requireModule("plus"),g=weex.requireModule("globalEvent"),v=0,h={},_="__uniapp__service";g.addEventListener("plusMessage",function(t){"UniAppJsApi"===t.data.type?y(t.data.id,t.data.data):"UniAppSubNVue"===t.data.type?u(t.data.data,t.data.options):"onNavigationBarButtonTap"===t.data.type?"function"==typeof w&&w(t.data.data):"onNavigationBarSearchInputChanged"===t.data.type?"function"==typeof k&&k(t.data.data):"onNavigationBarSearchInputConfirmed"===t.data.type?"function"==typeof D&&D(t.data.data):"onNavigationBarSearchInputClicked"===t.data.type&&"function"==typeof T&&T(t.data.data)});var y=function(t,e){var n=h[t];n?(n(e),n.keepAlive||delete h[t]):console.error("callback["+t+"] is undefined")},m=function(e){var n,o,i=e.id,a=e.type,r=e.params;h[i]=(o=function(e){t(n)?n(e):n&&(~e.errMsg.indexOf(":ok")?t(n.success)&&n.success(e):~e.errMsg.indexOf(":fail")&&t(n.fail)&&n.fail(e),t(n.complete)&&n.complete(e))},(t(n=r)||n&&t(n.callback))&&(o.keepAlive=!0),o),d.postMessage({id:i,type:a,params:r},_)};function S(t){d.postMessage(t,_)}var b=function(t){return function(e){m({id:v++,type:t,params:e})}},w=void 0,k=void 0,D=void 0,T=void 0;function N(t){w=t}function C(t){k=t}function O(t){D=t}function x(t){T=t}function I(t){return weex.requireModule(t)}var E=weex.requireModule("dom"),B=weex.requireModule("globalEvent"),R=[];function q(t){"function"==typeof t&&(this.isUniAppReady?t():R.push(t))}B.addEventListener("plusMessage",function(t){"UniAppReady"===t.data.type&&(q.isUniAppReady=!0,R.length&&(R.forEach(function(t){return t()}),R=[]))});var P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A=weex.requireModule("stream"),$="GET",j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===t?"undefined":P(t))?"POST"===e.toUpperCase()&&"application/json"===n.toLowerCase()?JSON.stringify(t):Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):t},M=weex.requireModule("plusstorage"),V="__TYPE",U=weex.requireModule("clipboard"),L=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var t={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return t}}();function F(t,e,n){return t[e].apply(t,n)}var J=Object.freeze({loadFontFace:function(e){var n=e.family,o=e.source,i=(e.desc,e.success),a=(e.fail,e.complete);E.addRule("fontFace",{fontFamily:n,src:o.replace(/"/g,"'")});var r={errMsg:"loadFontFace:ok",status:"loaded"};t(i)&&i(r),t(a)&&a(r)},ready:q,request:function(e){var n=e.url,o=e.data,i=e.header,a=e.method,r=void 0===a?"GET":a,s=e.dataType,u=void 0===s?"json":s,c=(e.responseType,e.success),l=e.fail,p=e.complete,f=!1,d=!1,g={};if(i)for(var v in i)d||"content-type"!==v.toLowerCase()?g[v]=i[v]:(d=!0,g["Content-Type"]=i[v]);return r===$&&o&&(n=n+(~n.indexOf("?")?"&"===n.substr(-1)||"?"===n.substr(-1)?"":"&":"?")+j(o)),A.fetch({url:n,method:r,headers:g,type:"json"===u?"json":"text",body:r!==$?j(o,r,g["Content-Type"]):""},function(e){var n=e.status,o=(e.ok,e.statusText,e.data),i=e.headers,a={};!n||-1===n||f?(a.errMsg="request:fail",t(l)&&l(a)):(a.data=o,a.statusCode=n,a.header=i,t(c)&&c(a)),t(p)&&p(a)}),{abort:function(){f=!0}}},getStorage:function(e){var n=e.key,o=(e.data,e.success),i=e.fail,a=e.complete;M.getItem(n+V,function(e){if("success"===e.result){var r=e.data;M.getItem(n,function(e){if("success"===e.result){var n=e.data;r&&n?("String"!==r&&(n=JSON.parse(n)),t(o)&&o({errMsg:"getStorage:ok",data:n})):(e.errMsg="setStorage:fail",t(i)&&i(e))}else e.errMsg="setStorage:fail",t(i)&&i(e);t(a)&&a(e)})}else e.errMsg="setStorage:fail",t(i)&&i(e),t(a)&&a(e)})},setStorage:function(e){var n=e.key,o=e.data,i=e.success,a=e.fail,r=e.complete,s="String";"object"===(void 0===o?"undefined":P(o))&&(s="Object",o=JSON.stringify(o)),M.setItem(n,o,function(e){"success"===e.result?M.setItem(n+V,s,function(e){"success"===e.result?t(i)&&i({errMsg:"setStorage:ok"}):(e.errMsg="setStorage:fail",t(a)&&a(e))}):(e.errMsg="setStorage:fail",t(a)&&a(e)),t(r)&&r(e)})},removeStorage:function(e){var n=e.key,o=(e.data,e.success),i=e.fail,a=e.complete;M.removeItem(n,function(e){"success"===e.result?t(o)&&o({errMsg:"removeStorage:ok"}):(e.errMsg="removeStorage:fail",t(i)&&i(e)),t(a)&&a(e)}),M.removeItem(n+V)},clearStorage:function(t){t.key,t.data,t.success,t.fail,t.complete},getClipboardData:function(e){var n=e.success,o=(e.fail,e.complete);U.getString(function(e){var i={errMsg:"getClipboardData:ok",data:e.data};t(n)&&n(i),t(o)&&o(i)})},setClipboardData:function(e){var n=e.data,o=e.success,i=(e.fail,e.complete),a={errMsg:"setClipboardData:ok"};U.setString(n),t(o)&&o(a),t(i)&&i(a)},onSubNVueMessage:u,getSubNVueById:f,getCurrentSubNVue:function(){return f(i.webview.currentWebview().id)},$on:function(){return F(L(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return F(L(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return F(L(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return F(L(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),H={os:{nvue:!0}},W={};return"undefined"!=typeof Proxy?W=new Proxy({},{get:function(t,e){if("os"===e)return{nvue:!0};if("postMessage"===e)return S;if("requireNativePlugin"===e)return I;if("onNavigationBarButtonTap"===e)return N;if("onNavigationBarSearchInputChanged"===e)return C;if("onNavigationBarSearchInputConfirmed"===e)return O;if("onNavigationBarSearchInputClicked"===e)return x;var n=J[e];return n||(n=b(e)),o(e)?a(n):n}}):(Object.keys(H).forEach(function(t){W[t]=H[t]}),W.postMessage=S,W.requireNativePlugin=I,W.onNavigationBarButtonTap=N,W.onNavigationBarSearchInputChanged=C,W.onNavigationBarSearchInputConfirmed=O,W.onNavigationBarSearchInputClicked=x,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(t){var e=J[t];e||(e=b(t)),o(t)?W[t]=a(e):W[t]=e})),W};var i=new WeexPlus(weex);e.weexPlus=i;var a=o(weex,i,BroadcastChannel);e.default=a},10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=function(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}},12:function(t,e,n){"use strict";var o=n(58),i=n(25),a=n(2);var r=Object(a.a)(i.default,o.a,o.b,!1,null,null,"101a6ab6");(function(){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(71).default,this.options.style):Object.assign(this.options.style,n(71).default)}).call(r),e.default=r.exports},2:function(t,e,n){"use strict";function o(t,e,n,o,i,a,r,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return o})},25:function(t,e,n){"use strict";var o=n(26),i=n.n(o);e.default=i.a},26:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",fil:!0,list:[{text:"要显示的sdfa本",color:"#FF0000",time:9}]},onReady:function(){this.context=t.createVideoContext("video1",this)},methods:{onstart:function(t){console.log(n("onstart:"+JSON.stringify(t)," at pages/component/video/video.nvue:34"))},onpause:function(t){console.log(n("onpause:"+JSON.stringify(t)," at pages/component/video/video.nvue:37"))},onfinish:function(t){console.log(n("onfinish:"+JSON.stringify(t)," at pages/component/video/video.nvue:40"))},onfail:function(t){console.log(n("onfail:"+JSON.stringify(t)," at pages/component/video/video.nvue:43"))},fullscreenchange:function(t){console.log(n("fullscreenchange:"+JSON.stringify(t)," at pages/component/video/video.nvue:46"))},waiting:function(t){console.log(n("waiting:"+JSON.stringify(t)," at pages/component/video/video.nvue:49"))},timeupdate:function(t){console.log(n("timeupdate:"+JSON.stringify(t)," at pages/component/video/video.nvue:52"))},play:function(){this.context.play()},pause:function(){this.context.pause()},seek:function(){this.context.seek(20)},stop:function(){this.context.stop()},fullScreen:function(){this.context.requestFullScreen({direction:90})},exitFullScreen:function(){this.context.exitFullScreen()},sendDanmu:function(){this.context.sendDanmu({text:"要显示的弹幕文本",color:"#FF0000"})},playbackRate:function(){this.context.playbackRate(2)}}};e.default=o}).call(this,n(1).default,n(10).default)},27:function(t,e){t.exports={video:{width:"750rpx",height:"400rpx",backgroundColor:"#808080"},btn:{marginTop:"5",marginBottom:"5"}}},3:function(t,e,n){"use strict";n.r(e),e.default={appid:"__UNI__D366444"}},4:function(t,e,n){"use strict";(function(t,e){function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var c=n(5).version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE";function f(){var n="";if("n"===v()){try{n=t.runtime.getDCloudId()}catch(t){n=""}return n}try{n=e.getStorageSync(l)}catch(t){n=p}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(l,n)}catch(t){e.setStorageSync(l,p)}}return n}var d,g=function(){return parseInt((new Date).getTime()/1e3)},v=function(){return"n"},h=function(){var t="";return"wx"!==v()&&"qq"!==v()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},_=function(){return"n"===v()?t.runtime.version:""},y=function(){var e="";return"n"===v()&&(e=t.runtime.channel),e},m=0,S=0,b=function(){return m=g(),"n"===v()&&e.setStorageSync("__page__residence__time",g()),m},w=0,k=0,D=function(){var t=(new Date).getTime();return w=t,k=0,t},T=function(){var t=(new Date).getTime();return k=t,t},N=function(t){var e=0;return 0!==w&&(e=k-w),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},C=function(t){var e=getCurrentPages(),n=e[e.length-1].$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===v()?n.$mp&&n.$mp.page.is+i:n.$scope&&n.$scope.route+i||n.$mp&&n.$mp.page.route+i},O=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},x=n(6).default,I=n(3).default||n(3),E=e.getSystemInfoSync(),B=function(){function n(){r(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:f(),ut:v(),mpn:h(),ak:I.appid,usv:c,v:_(),ch:y(),cn:"",pn:"",ct:"",t:g(),tt:"",p:"android"===E.platform?"a":"i",brand:E.brand||"",md:E.model,sv:E.system.replace(/(Android|iOS)\s/,""),mpsdk:E.SDKVersion||"",mpv:E.version||"",lang:E.language,pr:E.pixelRatio,ww:E.windowWidth,wh:E.windowHeight,sw:E.screenWidth,sh:E.screenHeight}}return u(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(T(),N("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,T();var n=N();D();var o=C(this);this._sendHideRequest({urlref:o,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,n=C(this),o=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===v()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=x&&x.pages[o]&&x.pages[o].titleNView&&x.pages[o].titleNView.titleText||x&&x.pages[o]&&x.pages[o].navigationBarTitleText||"",this.__licationShow)return D(),this.__licationShow=!1,void(this._lastPageRoute=n);if(T(),this._lastPageRoute=n,N("page").overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}D()}},{key:"_pageHide",value:function(){if(!this.__licationHide){T();var t=N("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var n,o,i=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+i||"",this.statData.t=g(),this.statData.sc=function(t){var n=v(),o="";return t||("wx"===n&&(o=e.getLaunchOptionsSync().scene),o)}(t.scene),this.statData.fvts=(n=e.getStorageSync("First__Visit__Time"),o=0,n?o=n:(o=g(),e.setStorageSync("First__Visit__Time",o),e.removeStorageSync("Last__Visit__Time")),o),this.statData.lvts=function(){var t=e.getStorageSync("Last__Visit__Time"),n=0;return n=t||"",e.setStorageSync("Last__Visit__Time",g()),n}(),this.statData.tvc=function(){var t=e.getStorageSync("Total__Visit__Count"),n=1;return t&&(n=t,n++),e.setStorageSync("Total__Visit__Count",n),n}(),"n"===v()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,o=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,o=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(i,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,o=t.value,i=void 0===o?"":o,a=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"==typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:g(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;t.runtime.getProperty(t.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;I.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,n){var o=this,i=g(),a=this._navigationBarTitle;t.ttn=a.page,t.ttpj=a.config,t.ttc=a.report;var r=this._reportingRequestData;if("n"===v()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[t.lt]||(r[t.lt]=[]),r[t.lt].push(t),"n"===v()&&e.setStorageSync("__UNI__STAT__DATA",r),S=g(),"n"===v()&&(m=e.getStorageSync("__page__residence__time")),!(S-m<10)||n){var s=this._reportingRequestData;"n"===v()&&(s=e.getStorageSync("__UNI__STAT__DATA")),b();var u=[],l=[],p=[],f=function(t){s[t].forEach(function(e){var n=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)}(e);0===t?u.push(n):3===t?p.push(n):l.push(n)})};for(var d in s)f(d);u.push.apply(u,l.concat(p));var h={usv:c,t:i,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===v()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==v()||"a"!==this.statData.p?this._sendRequest(h):setTimeout(function(){o._sendRequest(h)},200):this.imageRequest(h)}}},{key:"_sendRequest",value:function(t){var n=this;e.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(e){++n._retry<3&&setTimeout(function(){n._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=function(t){var e=Object.keys(t).sort(),n={},o="";for(var i in e)n[e[i]]=t[e[i]],o+=e[i]+"="+t[e[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}}(function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(t,e){var n,o;(o=e,(n=t)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof o&&"object"!=typeof o?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof o&&o.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof o?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),n}(),R=function(t){function n(){var t;return r(this,n),(t=o(this,i(n).call(this))).instance=null,"function"==typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,B),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var n=this;t?e.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,b(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,O(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,O(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(n)}}]),n}().getInstance(),q=!1,P={onLaunch:function(t){R.report(t,this)},onReady:function(){R.ready(this)},onLoad:function(t){if(R.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return R.interceptShare(!1),e.call(this,t)}}},onShow:function(){q=!1,R.show(this)},onHide:function(){q=!0,R.hide(this)},onUnload:function(){q?q=!1:R.hide(this)},onError:function(t){R.error(t)}};((d=n(7)).default||d).mixin(P),e.report=function(t,e){R.sendEvent(t,e)}}).call(this,n(1).weexPlus,n(1).default)},5:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23720191024001",_inBundle:!1,_integrity:"sha512-vJEk493Vdb8KueNzR2otzDi23rfyRcQBo/t1R41MwNGPk+AUB94gh10+HVLo98DRcvMzkuVofz3KXTAfEx24iw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23720191024001.tgz",_shasum:"18272814446a9bc6053bc92666ec7064a1767588",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"a725c04ef762e5df78a9a69d140c2666e0de05fc",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23720191024001"}},58:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("div",[n("u-video",{staticClass:["video"],attrs:{id:"video1",src:t.src,autoplay:"false",duration:"",controls:"true",danmuList:t.list,danmuBtn:"true",enableDanmu:"true",loop:!0,muted:"true",initialTime:"",direction:"-90",showMuteBtn:"true"},on:{play:t.onstart,pause:t.onpause,ended:t.onfinish,error:t.onfail,waiting:t.waiting,timeupdate:t.timeupdate,fullscreenchange:t.fullscreenchange}}),n("button",{staticClass:["btn"],on:{click:t.play}},[t._v("播放")]),n("button",{staticClass:["btn"],on:{click:t.pause}},[t._v("暂停")]),n("button",{staticClass:["btn"],on:{click:t.seek}},[t._v("跳转到指定位置")]),n("button",{staticClass:["btn"],on:{click:t.stop}},[t._v("停止")]),n("button",{staticClass:["btn"],on:{click:t.fullScreen}},[t._v("全屏")]),n("button",{staticClass:["btn"],on:{click:t.exitFullScreen}},[t._v("退出全屏")]),n("button",{staticClass:["btn"],on:{click:t.playbackRate}},[t._v("设置倍速")]),n("button",{staticClass:["btn"],on:{click:t.sendDanmu}},[t._v("发送弹幕")])],1)])},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},6:function(t,e,n){"use strict";n.r(e),e.default={pages:{},globalStyle:{}}},7:function(t,e){t.exports=Vue},71:function(t,e,n){"use strict";n.r(e);var o=n(27),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a},8:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(9).default,Vue.prototype.__$appStyle__)},83:function(t,e,n){"use strict";n.r(e);n(4),n(8);var o=n(12);o.default.mpType="page",o.default.route="pages/component/video/video",o.default.el="#root",new Vue(o.default)},9:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a}});