"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 102);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    packName = uni.getAccountInfoSync().miniProgram.appId || '';
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 102:
/*!***************************************************************************************************!*\
  !*** /Users/sonata/Desktop/Tally/demo/main.js?{"page":"pages%2FAPI%2Fsubnvue%2Fsubnvue%2Fpopup"} ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_API_subnvue_subnvue_popup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/API/subnvue/subnvue/popup.nvue?mpType=page */ 103);

        
        
        
        _pages_API_subnvue_subnvue_popup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_API_subnvue_subnvue_popup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/API/subnvue/subnvue/popup'
        _pages_API_subnvue_subnvue_popup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_API_subnvue_subnvue_popup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 103:
/*!*****************************************************************************************!*\
  !*** /Users/sonata/Desktop/Tally/demo/pages/API/subnvue/subnvue/popup.nvue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_nvue_vue_type_template_id_5d2a5178_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.nvue?vue&type=template&id=5d2a5178&mpType=page */ 104);
/* harmony import */ var _popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.nvue?vue&type=script&lang=js&mpType=page */ 106);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./popup.nvue?vue&type=style&index=0&lang=css&mpType=page */ 108).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./popup.nvue?vue&type=style&index=0&lang=css&mpType=page */ 108).default)
          }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _popup_nvue_vue_type_template_id_5d2a5178_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _popup_nvue_vue_type_template_id_5d2a5178_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "b31b05f2"
  
)

injectStyles.call(component)
component.options.__file = "Users/sonata/Desktop/Tally/demo/pages/API/subnvue/subnvue/popup.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 104:
/*!***********************************************************************************************************************!*\
  !*** /Users/sonata/Desktop/Tally/demo/pages/API/subnvue/subnvue/popup.nvue?vue&type=template&id=5d2a5178&mpType=page ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_template_id_5d2a5178_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./popup.nvue?vue&type=template&id=5d2a5178&mpType=page */ 105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_template_id_5d2a5178_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_template_id_5d2a5178_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 105:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/sonata/Desktop/Tally/demo/pages/API/subnvue/subnvue/popup.nvue?vue&type=template&id=5d2a5178&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c("div", { staticClass: ["wrapper"] }, [
        _c("u-text", { staticClass: ["title"] }, [_vm._v(_vm._s(_vm.title))]),
        _c(
          "scroller",
          { staticClass: ["scroller"] },
          [
            _c("div", [
              _c("u-text", { staticClass: ["content"] }, [
                _vm._v(_vm._s(_vm.content))
              ])
            ]),
            _c("div", [
              _c(
                "u-text",
                { staticStyle: { color: "red", fontSize: "30upx" } },
                [_vm._v("以下为 Popup 内部滚动示例：")]
              )
            ]),
            _vm._l(_vm.lists, function(item, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: ["cell"],
                  on: {
                    click: function($event) {
                      _vm.handle(item)
                    }
                  }
                },
                [
                  _c("u-text", { staticClass: ["text"] }, [
                    _vm._v(_vm._s(item))
                  ])
                ]
              )
            })
          ],
          2
        ),
        _c("div", { staticClass: ["message-wrapper"] }, [
          _c(
            "u-text",
            { staticClass: ["send-message"], on: { click: _vm.sendMessage } },
            [_vm._v("向页面发送消息")]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 106:
/*!*****************************************************************************************************************!*\
  !*** /Users/sonata/Desktop/Tally/demo/pages/API/subnvue/subnvue/popup.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./popup.nvue?vue&type=script&lang=js&mpType=page */ 107);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 107:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/sonata/Desktop/Tally/demo/pages/API/subnvue/subnvue/popup.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      title: '',
      content: '',
      lists: [] };

  },
  created: function created() {
    var vm = this;
    for (var i = 1; i < 20; i++) {
      this.lists.push('item' + i);
    }
    uni.$on('page-popup', function (data) {
      vm.title = data.title;
      vm.content = data.content;
    });
  },
  beforeDestroy: function beforeDestroy() {
    uni.$off('drawer-page');
  },
  methods: {
    sendMessage: function sendMessage() {
      var subNVue = uni.getCurrentSubNVue();
      uni.$emit('popup-page', {
        title: '已读完!' });

    },
    handle: function handle(item, index) {
      var subNVue = uni.getCurrentSubNVue();
      uni.$emit('popup-page', {
        type: 'interactive',
        info: item + ' 该元素被点击了!' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 108:
/*!*************************************************************************************************************************!*\
  !*** /Users/sonata/Desktop/Tally/demo/pages/API/subnvue/subnvue/popup.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./popup.nvue?vue&type=style&index=0&lang=css&mpType=page */ 109);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_popup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 109:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!/Users/sonata/Desktop/Tally/demo/pages/API/subnvue/subnvue/popup.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "flexDirection": "column",
    "justifyContent": "space-between",
    "paddingTop": "10rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "15rpx",
    "backgroundColor": "#F4F5F6",
    "borderRadius": "4rpx"
  },
  "title": {
    "height": "100rpx",
    "lineHeight": "100rpx",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1rpx",
    "borderBottomColor": "#CBCBCB",
    "flex": 0,
    "fontSize": "30rpx"
  },
  "scroller": {
    "height": "400rpx",
    "paddingTop": "8rpx",
    "paddingRight": "15rpx",
    "paddingBottom": "8rpx",
    "paddingLeft": "15rpx"
  },
  "content": {
    "color": "#555555",
    "fontSize": "32rpx"
  },
  "message-wrapper": {
    "flex": 0,
    "borderTopStyle": "solid",
    "borderTopWidth": "1rpx",
    "borderTopColor": "#CBCBCB",
    "height": "80rpx",
    "alignItems": "flex-end"
  },
  "send-message": {
    "fontSize": "30rpx",
    "lineHeight": "80rpx",
    "color": "#00CE47",
    "marginLeft": "20rpx"
  },
  "cell": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0,
    "top": "10rpx",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "10rpx",
    "backgroundColor": "#5989B9"
  },
  "text": {
    "fontSize": "30rpx",
    "textAlign": "center",
    "color": "#FFFFFF"
  }
}

/***/ }),

/***/ 16:
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),

/***/ 3:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-23320190923002","_inBundle":false,"_integrity":"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz","_shasum":"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a","_spec":"@dcloudio/uni-stat@next","_where":"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"fed4c73fb9142a1b277dd79313939cad90693d3e","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-23320190923002"};

/***/ }),

/***/ 4:
/*!********************************************************************!*\
  !*** /Users/sonata/Desktop/Tally/demo/pages.json?{"type":"style"} ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/component/view/view":{"navigationBarTitleText":"view","usingComponents":{}},"pages/component/scroll-view/scroll-view":{"navigationBarTitleText":"scroll-view","usingComponents":{}},"pages/component/swiper/swiper":{"navigationBarTitleText":"swiper","usingComponents":{}},"pages/component/movable-view/movable-view":{"navigationBarTitleText":"movable-view","usingComponents":{}},"pages/component/text/text":{"navigationBarTitleText":"text","usingComponents":{}},"pages/component/rich-text/rich-text":{"navigationBarTitleText":"rich-text","usingComponents":{}},"pages/component/progress/progress":{"navigationBarTitleText":"progress","usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/component/button/button":{"navigationBarTitleText":"button","usingComponents":{}},"pages/component/checkbox/checkbox":{"navigationBarTitleText":"checkbox","usingComponents":{}},"pages/component/form/form":{"navigationBarTitleText":"form","usingComponents":{}},"pages/component/input/input":{"navigationBarTitleText":"input","softinputNavBar":"none","usingComponents":{}},"pages/component/label/label":{"navigationBarTitleText":"label","usingComponents":{}},"pages/component/picker/picker":{"navigationBarTitleText":"picker","usingComponents":{}},"pages/component/picker-view/picker-view":{"navigationBarTitleText":"picker-view","usingComponents":{}},"pages/component/radio/radio":{"navigationBarTitleText":"radio","usingComponents":{}},"pages/component/slider/slider":{"navigationBarTitleText":"slider","usingComponents":{}},"pages/component/switch/switch":{"navigationBarTitleText":"switch","usingComponents":{}},"pages/component/textarea/textarea":{"navigationBarTitleText":"textarea","usingComponents":{}},"pages/component/editor/editor":{"navigationBarTitleText":"editor","usingComponents":{}},"pages/component/navigator/navigator":{"navigationBarTitleText":"navigator","usingComponents":{}},"pages/component/navigator/navigate/navigate":{"navigationBarTitleText":"navigatePage","usingComponents":{}},"pages/component/navigator/redirect/redirect":{"navigationBarTitleText":"redirectPage","usingComponents":{}},"pages/component/image/image":{"navigationBarTitleText":"image","usingComponents":{}},"pages/component/audio/audio":{"navigationBarTitleText":"audio","usingComponents":{}},"pages/component/canvas/canvas":{"navigationBarTitleText":"canvas","usingComponents":{}},"pages/component/web-view/web-view":{"navigationBarTitleText":"web-view","usingComponents":{}},"pages/component/web-view-local/web-view-local":{"usingComponents":{}},"platforms/app-plus/speech/speech":{"navigationBarTitleText":"语音识别","usingComponents":{}},"platforms/app-plus/orientation/orientation":{"navigationBarTitleText":"方向传感器","usingComponents":{}},"platforms/app-plus/proximity/proximity":{"navigationBarTitleText":"距离传感器","usingComponents":{}},"platforms/app-plus/push/push":{"navigationBarTitleText":"推送","usingComponents":{}},"platforms/app-plus/shake/shake":{"navigationBarTitleText":"摇一摇","usingComponents":{}},"pages/about/about":{"navigationBarTitleText":"关于","usingComponents":{"u-link":"/components/uLink"}},"platforms/app-plus/feedback/feedback":{"navigationBarTitleText":"问题反馈","usingComponents":{}},"pages/API/login/login":{"navigationBarTitleText":"授权登录","usingComponents":{}},"pages/API/subnvue/subnvue":{"navigationBarTitleText":"SubNvue","titleNView":false,"subNVues":[{"id":"drawer","path":"pages/API/subnvue/subnvue/drawer","type":"popup","style":{"width":"50%"}},{"id":"popup","path":"pages/API/subnvue/subnvue/popup","type":"popup","style":{"margin":"auto","width":"80%","height":"600upx"}},{"id":"video_mask","path":"pages/API/subnvue/subnvue/video-mask","style":{"position":"absolute","bottom":"30px","left":"0","width":"230px","height":"110px","background":"transparent"}},{"id":"nav","path":"pages/API/subnvue/subnvue/nav","type":"navigationBar"}],"usingComponents":{}},"pages/API/get-user-info/get-user-info":{"navigationBarTitleText":"获取用户信息","usingComponents":{}},"pages/API/request-payment/request-payment":{"navigationBarTitleText":"发起支付","usingComponents":{}},"pages/API/share/share":{"navigationBarTitleText":"分享","usingComponents":{}},"pages/API/set-navigation-bar-title/set-navigation-bar-title":{"navigationBarTitleText":"设置界面标题","usingComponents":{}},"pages/API/show-loading/show-loading":{"navigationBarTitleText":"加载提示框","usingComponents":{}},"pages/API/navigator/navigator":{"navigationBarTitleText":"页面跳转","usingComponents":{}},"pages/API/navigator/new-page/new-page":{"navigationBarTitleText":"新页面","usingComponents":{}},"pages/API/pull-down-refresh/pull-down-refresh":{"navigationBarTitleText":"下拉刷新","enablePullDownRefresh":true,"usingComponents":{}},"pages/API/animation/animation":{"navigationBarTitleText":"创建动画","usingComponents":{}},"pages/API/get-node-info/get-node-info":{"navigationBarTitleText":"节点信息","usingComponents":{}},"pages/API/intersection-observer/intersection-observer":{"navigationBarTitleText":"节点布局相交状态","usingComponents":{}},"pages/API/canvas/canvas":{"navigationBarTitleText":"创建绘画","usingComponents":{}},"pages/API/action-sheet/action-sheet":{"navigationBarTitleText":"操作菜单","usingComponents":{}},"pages/API/modal/modal":{"navigationBarTitleText":"模态弹窗","usingComponents":{}},"pages/API/toast/toast":{"navigationBarTitleText":"消息提示框","usingComponents":{}},"pages/API/get-network-type/get-network-type":{"navigationBarTitleText":"获取手机网络状态","usingComponents":{}},"pages/API/get-system-info/get-system-info":{"navigationBarTitleText":"获取手机系统信息","usingComponents":{}},"pages/API/add-phone-contact/add-phone-contact":{"navigationBarTitleText":"添加手机联系人","usingComponents":{}},"pages/API/on-accelerometer-change/on-accelerometer-change":{"navigationBarTitleText":"监听加速度计数据","usingComponents":{}},"pages/API/on-compass-change/on-compass-change":{"navigationBarTitleText":"监听罗盘数据","usingComponents":{}},"pages/API/make-phone-call/make-phone-call":{"navigationBarTitleText":"打电话","usingComponents":{}},"pages/API/scan-code/scan-code":{"navigationBarTitleText":"扫码","usingComponents":{}},"pages/API/clipboard/clipboard":{"navigationBarTitleText":"剪贴板","usingComponents":{}},"pages/API/request/request":{"navigationBarTitleText":"网络请求","usingComponents":{}},"pages/API/upload-file/upload-file":{"navigationBarTitleText":"上传文件","usingComponents":{}},"pages/API/download-file/download-file":{"navigationBarTitleText":"下载文件","usingComponents":{}},"pages/API/image/image":{"navigationBarTitleText":"图片","usingComponents":{}},"pages/API/voice/voice":{"navigationBarTitleText":"录音","usingComponents":{}},"pages/API/background-audio/background-audio":{"navigationBarTitleText":"背景音频","usingComponents":{}},"pages/API/video/video":{"navigationBarTitleText":"视频","usingComponents":{}},"pages/API/file/file":{"navigationBarTitleText":"文件","usingComponents":{}},"pages/API/get-location/get-location":{"navigationBarTitleText":"获取位置","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup"}},"pages/API/open-location/open-location":{"navigationBarTitleText":"查看位置","usingComponents":{}},"pages/API/choose-location/choose-location":{"navigationBarTitleText":"使用地图选择位置","usingComponents":{}},"pages/API/storage/storage":{"navigationBarTitleText":"数据存储","usingComponents":{}},"pages/API/sqlite/sqlite":{"navigationBarTitleText":"SQLite","usingComponents":{}},"pages/API/brightness/brightness":{"navigationBarTitleText":"屏幕亮度","usingComponents":{}},"pages/API/save-media/save-media":{"navigationBarTitleText":"保存媒体到本地","usingComponents":{}},"pages/API/bluetooth/bluetooth":{"navigationBarTitleText":"蓝牙","usingComponents":{}},"pages/API/fingerprint/fingerprint":{"navigationBarTitleText":"指纹","usingComponents":{}},"pages/API/ibeacon/ibeacon":{"navigationBarTitleText":"iBeacon","usingComponents":{}},"pages/API/vibrate/vibrate":{"navigationBarTitleText":"震动","usingComponents":{}},"pages/extUI/badge/badge":{"navigationBarTitleText":"Badge 数字角标","usingComponents":{"uni-badge":"/components/uni-badge/uni-badge"}},"pages/extUI/count-down/count-down":{"navigationBarTitleText":"CountDown 倒计时","usingComponents":{"uni-count-down":"/components/uni-count-down/uni-count-down"}},"pages/extUI/drawer/drawer":{"navigationBarTitleText":"Drawer 抽屉","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px"}]},"bounce":"none","usingComponents":{"uni-drawer":"/components/uni-drawer/uni-drawer","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/extUI/icon/icon":{"navigationBarTitleText":"Icon 图标","usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/extUI/load-more/load-more":{"navigationBarTitleText":"LoadMore 加载更多","usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/extUI/nav-bar/nav-bar":{"navigationBarTitleText":"NavBar 导航栏","navigationStyle":"custom","enablePullDownRefresh":true,"titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"70px"},"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons","uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}},"pages/extUI/number-box/number-box":{"navigationBarTitleText":"NumberBox 数字输入框","usingComponents":{"uni-number-box":"/components/uni-number-box/uni-number-box"}},"pages/extUI/popup/popup":{"navigationBarTitleText":"Popup 弹出层","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup"}},"pages/extUI/segmented-control/segmented-control":{"navigationBarTitleText":"SegmentedControl 分段器","usingComponents":{"uni-segmented-control":"/components/uni-segmented-control/uni-segmented-control"}},"pages/extUI/tag/tag":{"navigationBarTitleText":"Tag 标签","usingComponents":{"uni-tag":"/components/uni-tag/uni-tag"}},"pages/extUI/list/list":{"navigationBarTitleText":"List 列表","usingComponents":{"uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/extUI/card/card":{"navigationBarTitleText":"Card 卡片","usingComponents":{"uni-card":"/components/uni-card/uni-card"}},"pages/extUI/collapse/collapse":{"navigationBarTitleText":"Collapse 折叠面板","usingComponents":{"uni-collapse":"/components/uni-collapse/uni-collapse","uni-collapse-item":"/components/uni-collapse-item/uni-collapse-item","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/extUI/pagination/pagination":{"navigationBarTitleText":"Pagination 分页器","usingComponents":{"uni-pagination":"/components/uni-pagination/uni-pagination","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/extUI/swiper-dot/swiper-dot":{"navigationBarTitleText":"SwiperDot 轮播图指示点","usingComponents":{"uni-swiper-dot":"/components/uni-swiper-dot/uni-swiper-dot"}},"pages/extUI/grid/grid":{"navigationBarTitleText":"Grid 宫格","usingComponents":{"uni-grid":"/components/uni-grid/uni-grid","uni-grid-item":"/components/uni-grid-item/uni-grid-item"}},"pages/extUI/rate/rate":{"navigationBarTitleText":"Rate 评分","usingComponents":{"uni-rate":"/components/uni-rate/uni-rate"}},"pages/extUI/steps/steps":{"navigationBarTitleText":"Steps 步骤条","usingComponents":{"uni-steps":"/components/uni-steps/uni-steps"}},"pages/extUI/notice-bar/notice-bar":{"navigationBarTitleText":"NoticeBar 通告栏","usingComponents":{"uni-notice-bar":"/components/uni-notice-bar/uni-notice-bar"}},"pages/extUI/swipe-action/swipe-action":{"navigationBarTitleText":"SwipeAction 滑动操作","bounce":"none","usingComponents":{"uni-swipe-action":"/components/uni-swipe-action/uni-swipe-action","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/extUI/search-bar/search-bar":{"navigationBarTitleText":"SearchBar 搜索栏","usingComponents":{"uni-search-bar":"/components/uni-search-bar/uni-search-bar"}},"pages/extUI/calendar/calendar":{"navigationBarTitleText":"Calendar 日历","usingComponents":{"uni-calendar":"/components/uni-calendar/uni-calendar"}},"pages/extUI/indexed-list/indexed-list":{"navigationBarTitleText":"IndexedList 索引列表","bounce":"none","usingComponents":{"uni-indexed-list":"/components/uni-indexed-list/uni-indexed-list"}},"pages/extUI/fab/fab":{"navigationBarTitleText":"Fab 悬浮按钮","usingComponents":{"uni-fab":"/components/uni-fab/uni-fab"}},"pages/extUI/fav/fav":{"navigationBarTitleText":"Fav 收藏按钮","usingComponents":{"uni-fav":"/components/uni-fav/uni-fav","uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}},"pages/extUI/goods-nav/goods-nav":{"navigationBarTitleText":"GoodsNav 商品导航","usingComponents":{"uni-goods-nav":"/components/uni-goods-nav/uni-goods-nav"}},"pages/extUI/title/title":{"navigationBarTitleText":"Title 标题栏","usingComponents":{"uni-title":"/components/uni-title/uni-title","uni-list":"/components/uni-list/uni-list","uni-list-item":"/components/uni-list-item/uni-list-item"}},"pages/template/product-list/product-list":{"navigationBarTitleText":"商品列表","enablePullDownRefresh":true,"onReachBottomDistance":20,"usingComponents":{}},"pages/template/uparse-md/uparse-md":{"navigationBarTitleText":"富文本渲染示例-markdown","usingComponents":{"u-parse":"/components/uParse/src/wxParse"}},"pages/template/uparse-html/uparse-html":{"navigationBarTitleText":"富文本渲染示例-html","usingComponents":{"u-parse":"/components/uParse/src/wxParse"}},"pages/template/ucharts/ucharts":{"navigationBarTitleText":"uCharts 图表","usingComponents":{}},"pages/template/gesture-lock/gesture-lock":{"navigationBarTitleText":"手势图案锁屏","usingComponents":{"mpvue-gesture-lock":"/components/mpvueGestureLock/index"}},"pages/template/nav-default/nav-default":{"navigationBarTitleText":"默认导航栏","usingComponents":{}},"pages/template/nav-transparent/nav-transparent":{"navigationBarTitleText":"透明渐变导航栏","titleNView":{"type":"transparent"},"usingComponents":{}},"pages/template/nav-button/nav-button":{"navigationBarTitleText":"导航栏带自定义按钮","titleNView":{"buttons":[{"type":"share"},{"type":"favorite"}]},"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/template/nav-image/nav-image":{"titleNView":{"titleText":"","tags":[{"tag":"img","src":"/static/nav.png","position":{"left":"auto","top":"auto","width":"110px","height":"26px"}}]},"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/template/nav-city-dropdown/nav-city-dropdown":{"navigationBarTitleText":"导航栏带城市选择","titleNView":{"buttons":[{"text":"北京市","fontSize":"14","select":true,"width":"auto"}]},"usingComponents":{"mpvue-picker":"/components/mpvue-picker/mpvuePicker"}},"pages/template/nav-dot/nav-dot":{"navigationBarTitleText":"导航栏带红点和角标","titleNView":{"buttons":[{"text":"消息","fontSize":"14","redDot":true},{"text":"关注","fontSize":"14","badgeText":"12"}]},"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"}},"pages/template/nav-search-input/nav-search-input":{"navigationBarTitleText":"导航栏带搜索框","titleNView":{"type":"transparent","titleColor":"#fff","backgroundColor":"#007AFF","buttons":[{"fontSrc":"/static/uni.ttf","text":"","width":"40px","fontSize":"28px","color":"#fff","background":"rgba(0,0,0,0)"}],"searchInput":{"backgroundColor":"#fff","borderRadius":"6px","placeholder":"请输入地址 如：大钟寺","disabled":true}},"usingComponents":{}},"pages/template/nav-search-input/detail/detail":{"navigationBarTitleText":"搜索","titleNView":{"titleColor":"#fff","backgroundColor":"#007AFF","buttons":[{"fontSrc":"/static/uni.ttf","text":"","width":"auto","fontSize":"28px","color":"#fff"}],"searchInput":{"backgroundColor":"#fff","borderRadius":"6px","placeholder":"请输入地址 如：大钟寺","autoFocus":true}},"usingComponents":{}},"pages/template/mpvue-picker/mpvue-picker":{"navigationBarTitleText":"多列选择picker","usingComponents":{"mpvue-picker":"/components/mpvue-picker/mpvuePicker","mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}},"pages/template/left-category/left-category":{"navigationBarTitleText":"侧边分类导航","usingComponents":{}},"pages/template/list-triplex-row/list-triplex-row":{"navigationBarTitleText":"三行列表","usingComponents":{}},"pages/template/list2detail-list/list2detail-list":{"navigationBarTitleText":"列表到详情示例","enablePullDownRefresh":true,"usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}},"pages/template/list2detail-detail/list2detail-detail":{"navigationBarTitleText":"详情","titleNView":{"type":"transparent","buttons":[{"type":"share"}]},"usingComponents":{}},"pages/template/tabbar/detail/detail":{"navigationBarTitleText":"详情页面","usingComponents":{}},"pages/template/media-list/media-list":{"navigationBarTitleText":"图文列表","usingComponents":{}},"pages/template/lazy-load/lazy-load":{"navigationBarTitleText":"懒加载","usingComponents":{}},"pages/template/lazy-load-custom/lazy-load-custom":{"navigationBarTitleText":"懒加载","usingComponents":{}},"pages/template/scheme/scheme":{"navigationBarTitleText":"打开外部应用","usingComponents":{}},"pages/template/im-chat/im-chat":{"navigationBarTitleText":"聊天窗口chat","softinputMode":"adjustResize","softinputNavBar":"none","usingComponents":{"chat-input":"/components/im-chat/chatinput","message-show":"/components/im-chat/messageshow"}},"pages/template/scrollmsg/scrollmsg":{"navigationBarTitleText":"滚动公告","usingComponents":{}},"pages/template/comments/comments":{"navigationBarTitleText":"评论界面","usingComponents":{}},"pages/template/timeline/timeline":{"navigationBarTitleText":"时间轴 timeline","usingComponents":{}},"pages/template/vant-button/vant-button":{"navigationBarTitleText":"微信自定义组件示例","usingComponents":{}},"pages/template/datachecker/datachecker":{"navigationBarTitleText":"表单校验","usingComponents":{}},"pages/template/global/global":{"navigationBarTitleText":"GlobalData和vuex","usingComponents":{}}},"globalStyle":{"navigationBarTextStyle":"white","navigationBarTitleText":"Hello uniapp","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#F8F8F8","backgroundColorTop":"#F4F5F6","backgroundColorBottom":"#F4F5F6","animationType":"pop-in"}});

/***/ }),

/***/ 5:
/*!*******************************************************************!*\
  !*** /Users/sonata/Desktop/Tally/demo/pages.json?{"type":"stat"} ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":""});

/***/ }),

/***/ 6:
/*!********************************************************************!*\
  !*** /Users/sonata/Desktop/Tally/demo/main.js?{"type":"appStyle"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 7:
/*!********************************************************************************!*\
  !*** /Users/sonata/Desktop/Tally/demo/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 8:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!/Users/sonata/Desktop/Tally/demo/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8vVXNlcnMvc29uYXRhL0Rlc2t0b3AvVGFsbHkvZGVtby9tYWluLmpzP2RiNDAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zb25hdGEvRGVza3RvcC9UYWxseS9kZW1vL3BhZ2VzL0FQSS9zdWJudnVlL3N1Ym52dWUvcG9wdXAubnZ1ZT8wNTA0Iiwid2VicGFjazovLy8vVXNlcnMvc29uYXRhL0Rlc2t0b3AvVGFsbHkvZGVtby9wYWdlcy9BUEkvc3VibnZ1ZS9zdWJudnVlL3BvcHVwLm52dWU/MjJhNSIsIndlYnBhY2s6Ly8vL1VzZXJzL3NvbmF0YS9EZXNrdG9wL1RhbGx5L2RlbW8vcGFnZXMvQVBJL3N1Ym52dWUvc3VibnZ1ZS9wb3B1cC5udnVlPzIzMWIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zb25hdGEvRGVza3RvcC9UYWxseS9kZW1vL3BhZ2VzL0FQSS9zdWJudnVlL3N1Ym52dWUvcG9wdXAubnZ1ZT84N2Y4IiwidW5pLWFwcDovLy9wYWdlcy9BUEkvc3VibnZ1ZS9zdWJudnVlL3BvcHVwLm52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zb25hdGEvRGVza3RvcC9UYWxseS9kZW1vL3BhZ2VzL0FQSS9zdWJudnVlL3N1Ym52dWUvcG9wdXAubnZ1ZT9lYTQ4Iiwid2VicGFjazovLy8vVXNlcnMvc29uYXRhL0Rlc2t0b3AvVGFsbHkvZGVtby9wYWdlcy9BUEkvc3VibnZ1ZS9zdWJudnVlL3BvcHVwLm52dWU/YTMxNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzPzI4NzciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUtdjgvZGlzdC9pbmRleC5qcz85OTJhIiwid2VicGFjazovLy8vVXNlcnMvc29uYXRhL0Rlc2t0b3AvVGFsbHkvZGVtby9wYWdlcy5qc29uPzUzMWEiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zb25hdGEvRGVza3RvcC9UYWxseS9kZW1vL3BhZ2VzLmpzb24/MTQxZSIsIndlYnBhY2s6Ly8vL1VzZXJzL3NvbmF0YS9EZXNrdG9wL1RhbGx5L2RlbW8vbWFpbi5qcz9hYTNjIiwid2VicGFjazovLy8vVXNlcnMvc29uYXRhL0Rlc2t0b3AvVGFsbHkvZGVtby9BcHAudnVlPzc1MGYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9zb25hdGEvRGVza3RvcC9UYWxseS9kZW1vL0FwcC52dWU/ZjgwOSJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJpbml0VW5pIiwiaXNGbiIsImhhbmRsZVByb21pc2UiLCJwcm9taXNlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiUkVHRVgiLCJBUElfTk9STUFMX0xJU1QiLCJzaG91bGRQcm9taXNlIiwibmFtZSIsInRlc3QiLCJpbmRleE9mIiwicHJvbWlzaWZ5IiwiYXBpIiwiX2xlbiIsImFyZ3VtZW50cyIsInBhcmFtcyIsIkFycmF5IiwiX2tleSIsInVuZGVmaW5lZCIsImFwcGx5IiwiY29uY2F0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaW5hbGx5IiwiY2FsbGJhY2siLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsIm9uTWVzc2FnZUNhbGxiYWNrcyIsIm9yaWdpbiIsIm9uU3ViTlZ1ZU1lc3NhZ2UiLCJ3ZWJ2aWV3SWQiLCJ3ZWV4UGx1cyIsIndlYnZpZXciLCJjdXJyZW50V2VidmlldyIsImlkIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsImV2ZW50IiwidG8iLCJ3cmFwcGVyIiwiJHByb2Nlc3NlZCIsImN1cnJlbnRXZWJ2aWV3SWQiLCJpc1BvcHVwTlZ1ZSIsImhvc3ROVnVlSWQiLCJfX3VuaWFwcF9vcmlnaW5fdHlwZSIsIl9fdW5pYXBwX29yaWdpbl9pZCIsInBvcHVwTlZ1ZUlkIiwicG9zdE1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJfX3VuaWFwcF9tYXNrX2lkIiwiX191bmlhcHBfaG9zdCIsIm1hc2tDb2xvciIsIl9fdW5pYXBwX21hc2siLCJtYXNrV2VidmlldyIsImdldFdlYnZpZXdCeUlkIiwicGFyZW50Iiwib2xkU2hvdyIsIm9sZEhpZGUiLCJvbGRDbG9zZSIsImNsb3NlIiwic2hvd01hc2siLCJzZXRTdHlsZSIsIm1hc2siLCJjbG9zZU1hc2siLCJfbGVuMiIsIl9rZXkyIiwiX2xlbjMiLCJfa2V5MyIsImdldFN1Yk5WdWVCeUlkIiwiZ2V0Q3VycmVudFN1Yk5WdWUiLCJ3ZWV4IiwicmVxdWlyZU1vZHVsZSIsImdsb2JhbEV2ZW50IiwiY2FsbGJhY2tzIiwiVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrIiwiY3JlYXRlQ2FsbGJhY2siLCJyZXMiLCJlcnJNc2ciLCJrZWVwQWxpdmUiLCJjYWxsYmFja0lkIiwicHVibGlzaCIsIl9yZWYiLCJjcmVhdGVQdWJsaXNoIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQiLCJyZXF1aXJlTmF0aXZlUGx1Z2luIiwicGx1Z2luTmFtZSIsImRvbSIsImxvYWRGb250RmFjZSIsImZhbWlseSIsInNvdXJjZSIsImRlc2MiLCJhZGRSdWxlIiwiZm9udEZhbWlseSIsInN0YXR1cyIsImdsb2JhbEV2ZW50JDEiLCJjYWxsYmFja3MkMSIsImlzVW5pQXBwUmVhZHkiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJzdHJlYW0iLCJNRVRIT0RfR0VUIiwiTUVUSE9EX1BPU1QiLCJDT05URU5UX1RZUEVfSlNPTiIsIkNPTlRFTlRfVFlQRV9GT1JNIiwic2VyaWFsaXplIiwiY29udGVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibWFwIiwiam9pbiIsImhlYWRlciIsIl9yZWYkbWV0aG9kIiwiX3JlZiRkYXRhVHlwZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUeXBlIiwiYWJvcnRlZCIsImhhc0NvbnRlbnRUeXBlIiwiaGVhZGVycyIsImZldGNoIiwiYm9keSIsIl9yZWYyIiwib2siLCJzdGF0dXNUZXh0IiwicmV0Iiwic3RhdHVzQ29kZSIsImFib3J0Iiwic3RvcmFnZSIsIlVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSIsImdldFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZVN0b3JhZ2UiLCJfcmVmMyIsInJlbW92ZUl0ZW0iLCJjbGVhclN0b3JhZ2UiLCJfcmVmNCIsImNsaXBib2FyZCIsImdldENsaXBib2FyZERhdGEiLCJnZXRTdHJpbmciLCJzZXRDbGlwYm9hcmREYXRhIiwic2V0U3RyaW5nIiwiZ2V0RW1pdHRlciIsImdldFVuaUVtaXR0ZXIiLCJFbWl0dGVyIiwiJG9uIiwid2FybiIsIiRvZmYiLCIkb25jZSIsIiRlbWl0IiwiY3R4Iiwic2xpY2UiLCJmcmVlemUiLCJ3eCIsInVwbG9hZEZpbGUiLCJkb3dubG9hZEZpbGUiLCJjaG9vc2VJbWFnZSIsInByZXZpZXdJbWFnZSIsImdldEltYWdlSW5mbyIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJjaG9vc2VWaWRlbyIsInNhdmVWaWRlb1RvUGhvdG9zQWxidW0iLCJzYXZlRmlsZSIsImdldFNhdmVkRmlsZUxpc3QiLCJnZXRTYXZlZEZpbGVJbmZvIiwicmVtb3ZlU2F2ZWRGaWxlIiwib3BlbkRvY3VtZW50IiwiZ2V0U3RvcmFnZUluZm8iLCJjaG9vc2VMb2NhdGlvbiIsIm9wZW5Mb2NhdGlvbiIsImdldFN5c3RlbUluZm8iLCJtYWtlUGhvbmVDYWxsIiwic2NhbkNvZGUiLCJzZXRTY3JlZW5CcmlnaHRuZXNzIiwiZ2V0U2NyZWVuQnJpZ2h0bmVzcyIsInNldEtlZXBTY3JlZW5PbiIsInZpYnJhdGVMb25nIiwidmlicmF0ZVNob3J0IiwiYWRkUGhvbmVDb250YWN0Iiwic2hvd1RvYXN0Iiwic2hvd0xvYWRpbmciLCJoaWRlVG9hc3QiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsInNob3dBY3Rpb25TaGVldCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInNldE5hdmlnYXRpb25CYXJDb2xvciIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicmVMYXVuY2giLCJzd2l0Y2hUYWIiLCJuYXZpZ2F0ZUJhY2siLCJnZXRQcm92aWRlciIsImxvZ2luIiwiZ2V0VXNlckluZm8iLCJzaGFyZSIsInJlcXVlc3RQYXltZW50Iiwic3Vic2NyaWJlUHVzaCIsInVuc3Vic2NyaWJlUHVzaCIsIm9uUHVzaCIsIm9mZlB1c2giLCJiYXNlVW5pIiwib3MiLCJudnVlIiwiUHJveHkiLCJnZXQiLCJ0YXJn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RztBQUFBO0FBQUE7QUFBQTtBQUF3NUIsQ0FBZ0IsazVCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBNTZCLG1CIiwiZmlsZSI6InBhZ2VzL0FQSS9zdWJudnVlL3N1Ym52dWUvcG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTAyKTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xuXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcbmNvbnN0IFNUQVRfSDVfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdC5naWYnOyBcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XG5jb25zdCBPUEVSQVRJTkdfVElNRSA9IDEwO1xuXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XG5jb25zdCBVVUlEX1ZBTFVFID0gJ19fRENfVVVJRF9WQUxVRSc7XG5cbmZ1bmN0aW9uIGdldFV1aWQoKSB7XG4gIGxldCB1dWlkID0gJyc7XG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHV1aWQgPSBwbHVzLnJ1bnRpbWUuZ2V0RENsb3VkSWQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB1dWlkID0gJyc7XG4gICAgfVxuICAgIHJldHVybiB1dWlkXG4gIH1cblxuICB0cnkge1xuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XG4gIH1cblxuICBpZiAoIXV1aWQpIHtcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcbiAgICB0cnkge1xuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIFVVSURfVkFMVUUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdXVpZDtcbn1cblxuY29uc3QgZ2V0U2dpbiA9IChzdGF0RGF0YSkgPT4ge1xuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XG4gIGxldCBzZ2luID0ge307XG4gIGxldCBzZ2luU3RyID0gJyc7XG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xuICAgIHNnaW5bc29ydEFycltpXV0gPSBzdGF0RGF0YVtzb3J0QXJyW2ldXTtcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcbiAgfVxuICAvLyBjb25zdCBvcHRpb25zID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XG4gIHJldHVybiB7XG4gICAgc2lnbjogJycsXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxuICB9O1xufTtcblxuY29uc3QgZ2V0U3BsaWNpbmcgPSAoZGF0YSkgPT4ge1xuICBsZXQgc3RyID0gJyc7XG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xuICAgIHN0ciArPSBpICsgJz0nICsgZGF0YVtpXSArICcmJztcbiAgfVxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcbn07XG5cbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gIHJldHVybiBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xufTtcblxuY29uc3QgZ2V0UGxhdGZvcm1OYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XG4gICAgJ2FwcC1wbHVzJzogJ24nLFxuICAgICdoNSc6ICdoNScsXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxuICAgICdtcC1iYWlkdSc6ICdiZCcsXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxuICAgICdtcC1xcSc6ICdxcSdcbiAgfTtcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcbn07XG5cbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xuICBsZXQgcGFja05hbWUgPSAnJztcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnd3gnIHx8IGdldFBsYXRmb3JtTmFtZSgpID09PSAncXEnKSB7XG4gICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XG4gIH1cbiAgcmV0dXJuIHBhY2tOYW1lXG59O1xuXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XG59O1xuXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcbiAgbGV0IGNoYW5uZWwgPSAnJztcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xuICB9XG4gIHJldHVybiBjaGFubmVsO1xufTtcblxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcbiAgbGV0IHNjZW5lID0gJyc7XG4gIGlmIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XG4gIH1cbiAgcmV0dXJuIHNjZW5lO1xufTtcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcblxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xuICBsZXQgdGltZSA9IDA7XG4gIGlmICh0aW1lU3RvcmdlKSB7XG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XG4gIH0gZWxzZSB7XG4gICAgdGltZSA9IGdldFRpbWUoKTtcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcbiAgfVxuICByZXR1cm4gdGltZTtcbn07XG5cbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XG4gIGxldCB0aW1lID0gMDtcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcbiAgfSBlbHNlIHtcbiAgICB0aW1lID0gJyc7XG4gIH1cbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XG4gIHJldHVybiB0aW1lO1xufTtcblxuXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xuXG5cbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xuICB9XG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXG59O1xuXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XG4gIH1cbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcbn07XG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xuICBsZXQgY291bnQgPSAxO1xuICBpZiAodGltZVN0b3JnZSkge1xuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcbiAgICBjb3VudCsrO1xuICB9XG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XG4gIHJldHVybiBjb3VudDtcbn07XG5cbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcbiAgbGV0IGRhdGEgPSB7fTtcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xuICB9XG4gIHJldHVybiBkYXRhO1xufTtcblxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XG5cbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XG4gIHJldHVybiB0aW1lO1xufTtcblxuXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcbiAgcmV0dXJuIHRpbWU7XG59O1xuXG5cbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XG4gIH1cblxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2lkZW5jZVRpbWUsXG4gICAgICBvdmVydGltZVxuICAgIH07XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzaWRlbmNlVGltZSxcbiAgICAgIG92ZXJ0aW1lXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzaWRlbmNlVGltZVxuICB9O1xuXG59O1xuXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xuXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xuICAvLyBjbGVhclxuICBzZWxmLl9xdWVyeSA9ICcnO1xuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XG4gIH1cbn07XG5cbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXG4gIGlmKCFldmVudE5hbWUpe1xuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59O1xuXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XG5cbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblxuY2xhc3MgVXRpbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VsZiA9ICcnO1xuICAgIHRoaXMuX3JldHJ5ID0gMDtcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xuICAgIHRoaXMuX3F1ZXJ5ID0ge307XG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xuICAgICAgY29uZmlnOiAnJyxcbiAgICAgIHBhZ2U6ICcnLFxuICAgICAgcmVwb3J0OiAnJyxcbiAgICAgIGx0OiAnJ1xuICAgIH07XG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XG4gICAgICAnMSc6IFtdLFxuICAgICAgJzExJzogW11cbiAgICB9O1xuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xuICAgIHRoaXMuc3RhdERhdGEgPSB7XG4gICAgICB1dWlkOiBnZXRVdWlkKCksXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcbiAgICAgIGNuOiAnJyxcbiAgICAgIHBuOiAnJyxcbiAgICAgIGN0OiAnJyxcbiAgICAgIHQ6IGdldFRpbWUoKSxcbiAgICAgIHR0OiAnJyxcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxuICAgIH07XG5cbiAgfVxuXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcbiAgICAgIGdldExhc3RUaW1lKCk7XG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xuXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XG4gICAgZ2V0TGFzdFRpbWUoKTtcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xuICAgIGdldEZpcnN0VGltZSgpO1xuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XG4gICAgICB1cmxyZWY6IHJvdXRlLFxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcbiAgICB9LCB0eXBlKTtcbiAgfVxuXG4gIF9wYWdlU2hvdygpIHtcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxuICAgICAgUGFnZXNKc29uICYmXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcblxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XG4gICAgICBnZXRGaXJzdFRpbWUoKTtcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2V0TGFzdFRpbWUoKTtcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXG4gICAgICB9O1xuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxuICAgIGdldEZpcnN0VGltZSgpO1xuICB9XG5cbiAgX3BhZ2VIaWRlKCkge1xuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xuICAgICAgZ2V0TGFzdFRpbWUoKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xuICAgICAgICBjb25maWc6ICcnLFxuICAgICAgICBwYWdlOiAnJyxcbiAgICAgICAgcmVwb3J0OiAnJyxcbiAgICAgICAgbHQ6ICcnXG4gICAgICB9O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIF9sb2dpbigpIHtcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcbiAgICAgIGtleTogJ2xvZ2luJ1xuICAgIH0sIDApO1xuICB9XG5cbiAgX3NoYXJlKCkge1xuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xuICAgICAga2V5OiAnc2hhcmUnXG4gICAgfSwgMCk7XG4gIH1cbiAgX3BheW1lbnQoa2V5KSB7XG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XG4gICAgICBrZXlcbiAgICB9LCAwKTtcbiAgfVxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xuXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XG4gICAgfVxuICB9XG5cbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcbiAgICBsZXQge1xuICAgICAgdXJsLFxuICAgICAgdXJscmVmLFxuICAgICAgdXJscmVmX3RzXG4gICAgfSA9IG9wdDtcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXG4gICAgICBsdDogJzExJyxcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxuICAgICAgdXJsLFxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXG4gICAgICB1cmxyZWYsXG4gICAgICB1cmxyZWZfdHMsXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXG4gICAgICB0OiBnZXRUaW1lKCksXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcbiAgICB9O1xuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgfVxuXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XG4gICAgbGV0IHtcbiAgICAgIHVybHJlZixcbiAgICAgIHVybHJlZl90c1xuICAgIH0gPSBvcHQ7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcbiAgICAgIGx0OiAnMycsXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcbiAgICAgIHVybHJlZixcbiAgICAgIHVybHJlZl90cyxcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcbiAgICAgIHQ6IGdldFRpbWUoKSxcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxuICAgIH07XG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xuICB9XG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcbiAgICBrZXkgPSAnJyxcbiAgICB2YWx1ZSA9IFwiXCJcbiAgfSA9IHt9KSB7XG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXG4gICAgICBsdDogJzIxJyxcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxuICAgICAgdXJsOiByb3V0ZSxcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxuICAgICAgZV9uOiBrZXksXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXG4gICAgICB0OiBnZXRUaW1lKCksXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcbiAgICB9O1xuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcbiAgfVxuXG4gIGdldE5ldHdvcmtJbmZvKCkge1xuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TG9jYXRpb24oKSB7XG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xuXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xuICAgIH1cbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xuICAgIH1cbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xuXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XG4gICAgfVxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XG4gICAgfVxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XG4gICAgbGV0IGZpcnN0QXJyID0gW107XG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcbiAgICB9O1xuXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xuICB9XG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xuICAgIHVuaS5yZXF1ZXN0KHtcbiAgICAgIHVybDogU1RBVF9VUkwsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIC8vIGhlYWRlcjoge1xuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxuICAgICAgLy8gfSxcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChlKSA9PiB7XG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIGg1IOivt+axglxuICAgKi9cbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XG4gIH1cblxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXG5cbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XG4gICAgICBrZXksXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxuICAgIH0sIDEpO1xuICB9XG59XG5cblxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcbiAgICAvLyDms6jlhozmi6bmiKrlmahcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XG4gICAgfVxuICB9XG5cbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcbiAgICAgIGludm9rZShhcmdzKSB7XG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGludGVyY2VwdExvZ2luKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xuICAgICAgY29tcGxldGUoKSB7XG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghdHlwZSkge1xuICAgICAgc2VsZi5fc2hhcmUoKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xuICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcbiAgICAgIH0sXG4gICAgICBmYWlsKCkge1xuICAgICAgICBzZWxmLl9zaGFyZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XG4gICAgICBzdWNjZXNzKCkge1xuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGZhaWwoKSB7XG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xuICAgIHRoaXMuc2VsZiA9IHNlbGY7XG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcbiAgICAvLyB9XG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcbiAgfVxuXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgdGhpcy5zZWxmID0gc2VsZjtcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XG4gIH1cblxuICBzaG93KHNlbGYpIHtcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XG4gICAgfVxuICB9XG5cbiAgcmVhZHkoc2VsZikge1xuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XG4gICAgLy8gfVxuICB9XG4gIGhpZGUoc2VsZikge1xuICAgIHRoaXMuc2VsZiA9IHNlbGY7XG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgZXJyb3IoZW0pIHtcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZW1WYWwgPSAnJztcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxuICAgICAgbHQ6ICczMScsXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxuICAgICAgZW06IGVtVmFsLFxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcbiAgICAgIHQ6IGdldFRpbWUoKSxcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxuICAgIH07XG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XG5sZXQgaXNIaWRlID0gZmFsc2U7XG5jb25zdCBsaWZlY3ljbGUgPSB7XG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcbiAgfSxcbiAgb25SZWFkeSgpIHtcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xuICB9LFxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgb25TaG93KCkge1xuICAgIGlzSGlkZSA9IGZhbHNlO1xuICAgIHN0YXQuc2hvdyh0aGlzKTtcbiAgfSxcbiAgb25IaWRlKCkge1xuICAgIGlzSGlkZSA9IHRydWU7XG4gICAgc3RhdC5oaWRlKHRoaXMpO1xuICB9LFxuICBvblVubG9hZCgpIHtcbiAgICBpZiAoaXNIaWRlKSB7XG4gICAgICBpc0hpZGUgPSBmYWxzZTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzdGF0LmhpZGUodGhpcyk7XG4gIH0sXG4gIG9uRXJyb3IoZSkge1xuICAgIHN0YXQuZXJyb3IoZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcbiAgfWVsc2V7XG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgfVxufVxuXG5tYWluKCk7XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9BUEkvc3VibnZ1ZS9zdWJudnVlL3BvcHVwLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL0FQSS9zdWJudnVlL3N1Ym52dWUvcG9wdXAnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcG9wdXAubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDJhNTE3OCZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BvcHVwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcG9wdXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9wb3B1cC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9wb3B1cC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImIzMWIwNWYyXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvc29uYXRhL0Rlc2t0b3AvVGFsbHkvZGVtby9wYWdlcy9BUEkvc3VibnZ1ZS9zdWJudnVlL3BvcHVwLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL3BvcHVwLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQyYTUxNzgmbXBUeXBlPXBhZ2VcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ3cmFwcGVyXCJdIH0sIFtcbiAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widGl0bGVcIl0gfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzY3JvbGxlclwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInNjcm9sbGVyXCJdIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJjb250ZW50XCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jb250ZW50KSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIsIGZvbnRTaXplOiBcIjMwdXB4XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLku6XkuIvkuLogUG9wdXAg5YaF6YOo5rua5Yqo56S65L6L77yaXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ubGlzdHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiY2VsbFwiXSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaGFuZGxlKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm1lc3NhZ2Utd3JhcHBlclwiXSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wic2VuZC1tZXNzYWdlXCJdLCBvbjogeyBjbGljazogX3ZtLnNlbmRNZXNzYWdlIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLlkJHpobXpnaLlj5HpgIHmtojmga9cIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL3BvcHVwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9wb3B1cC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG5cdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvdGV4dD5cblx0XHQ8c2Nyb2xsZXIgY2xhc3M9XCJzY3JvbGxlclwiPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJjb250ZW50XCI+e3tjb250ZW50fX08L3RleHQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6IHJlZDsgZm9udC1zaXplOiAzMHVweDtcIj7ku6XkuIvkuLogUG9wdXAg5YaF6YOo5rua5Yqo56S65L6L77yaPC90ZXh0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2VsbFwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBsaXN0c1wiIEBjbGljaz1cImhhbmRsZShpdGVtKVwiIDprZXk9XCJpbmRleFwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj57e2l0ZW19fTwvdGV4dD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvc2Nyb2xsZXI+XG5cdFx0PGRpdiBjbGFzcz1cIm1lc3NhZ2Utd3JhcHBlclwiPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJzZW5kLW1lc3NhZ2VcIiBAY2xpY2s9XCJzZW5kTWVzc2FnZVwiPuWQkemhtemdouWPkemAgea2iOaBrzwvdGV4dD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRpdGxlOiAnJyxcblx0XHRcdFx0Y29udGVudDogJycsXG5cdFx0XHRcdGxpc3RzOiBbXSxcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRjb25zdCB2bSA9IHRoaXM7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IDIwOyBpKyspIHtcblx0XHRcdFx0dGhpcy5saXN0cy5wdXNoKCdpdGVtJyArIGkpO1xuXHRcdFx0fVxuXHRcdFx0dW5pLiRvbigncGFnZS1wb3B1cCcsIChkYXRhKSA9PiB7XG5cdFx0XHRcdHZtLnRpdGxlID0gZGF0YS50aXRsZTtcblx0XHRcdFx0dm0uY29udGVudCA9IGRhdGEuY29udGVudDtcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRiZWZvcmVEZXN0cm95KCkge1xuXHRcdFx0dW5pLiRvZmYoJ2RyYXdlci1wYWdlJylcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHNlbmRNZXNzYWdlKCkge1xuXHRcdFx0XHRjb25zdCBzdWJOVnVlID0gdW5pLmdldEN1cnJlbnRTdWJOVnVlKClcblx0XHRcdFx0dW5pLiRlbWl0KCdwb3B1cC1wYWdlJywge1xuXHRcdFx0XHRcdHRpdGxlOiAn5bey6K+75a6MIScsXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0aGFuZGxlKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRcdGNvbnN0IHN1Yk5WdWUgPSB1bmkuZ2V0Q3VycmVudFN1Yk5WdWUoKVxuXHRcdFx0XHR1bmkuJGVtaXQoJ3BvcHVwLXBhZ2UnLCB7XG5cdFx0XHRcdFx0dHlwZTogJ2ludGVyYWN0aXZlJyxcblx0XHRcdFx0XHRpbmZvOiBpdGVtICsgJyDor6XlhYPntKDooqvngrnlh7vkuoYhJyxcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdC53cmFwcGVyIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRwYWRkaW5nOiAxMHVweCAxNXVweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUY2O1xuXHRcdGJvcmRlci1yYWRpdXM6IDR1cHg7XG5cdH1cblxuXHQudGl0bGUge1xuXHRcdGhlaWdodDogMTAwdXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAxMDB1cHg7XG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXVweDtcblx0XHRib3JkZXItYm90dG9tLWNvbG9yOiAjQ0JDQkNCO1xuXHRcdGZsZXg6IDA7XG5cdFx0Zm9udC1zaXplOiAzMHVweDtcblx0fVxuXG5cdC5zY3JvbGxlciB7XG5cdFx0aGVpZ2h0OiA0MDB1cHg7XG5cdFx0cGFkZGluZzogOHVweCAxNXVweDtcblx0fVxuXG5cdC5jb250ZW50IHtcblx0XHRjb2xvcjogIzU1NTU1NTtcblx0XHRmb250LXNpemU6IDMydXB4O1xuXHR9XG5cblx0Lm1lc3NhZ2Utd3JhcHBlciB7XG5cdFx0ZmxleDogMDtcblx0XHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcblx0XHRib3JkZXItdG9wLXdpZHRoOiAxdXB4O1xuXHRcdGJvcmRlci10b3AtY29sb3I6ICNDQkNCQ0I7XG5cdFx0aGVpZ2h0OiA4MHVweDtcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdH1cblxuXHQuc2VuZC1tZXNzYWdlIHtcblx0XHRmb250LXNpemU6IDMwdXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA4MHVweDtcblx0XHRjb2xvcjogIzAwQ0U0Nztcblx0XHRtYXJnaW4tbGVmdDogMjB1cHg7XG5cdH1cblxuXHQuY2VsbCB7XG5cdFx0bWFyZ2luOiAxMHVweDtcblx0XHRwYWRkaW5nOiAyMHVweCAwO1xuXHRcdHRvcDogMTB1cHg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRib3JkZXItcmFkaXVzOiAxMHVweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTk4OUI5O1xuXHR9XG5cblx0LnRleHQge1xuXHRcdGZvbnQtc2l6ZTogMzB1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL3BvcHVwLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9wb3B1cC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBwZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGNEY1RjZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjRycHhcIlxuICB9LFxuICBcInRpdGxlXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNDQkNCQ0JcIixcbiAgICBcImZsZXhcIjogMCxcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInNjcm9sbGVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjQwMHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjhycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiOHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNXJweFwiXG4gIH0sXG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzJycHhcIlxuICB9LFxuICBcIm1lc3NhZ2Utd3JhcHBlclwiOiB7XG4gICAgXCJmbGV4XCI6IDAsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI0NCQ0JDQlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwic2VuZC1tZXNzYWdlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDBDRTQ3XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcImNlbGxcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJ0b3BcIjogXCIxMHJweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNTk4OUI5XCJcbiAgfSxcbiAgXCJ0ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJmdW5jdGlvbiBpbml0VW5pKCkge1xuXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xuICAgIH07XG5cbiAgICB2YXIgaGFuZGxlUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcbiAgICB2YXIgQVBJX05PUk1BTF9MSVNUID0gWydvcycsICdnZXRDdXJyZW50U3ViTlZ1ZScsICdnZXRTdWJOVnVlQnlJZCcsICdzdG9wUmVjb3JkJywgJ3N0b3BWb2ljZScsXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcbiAgICAgICAgJ3BhZ2VTY3JvbGxUbycsICdkcmF3Q2FudmFzJ1xuICAgIF07XG5cbiAgICB2YXIgc2hvdWxkUHJvbWlzZSA9IGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICAgICAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cbiAgICAgICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XG5cbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwO1xuXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XG4gICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xuXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS50byA9PT0gd2Vidmlld0lkKSB7XG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XG4gICAgICAgIHdlYnZpZXcuJHByb2Nlc3NlZCA9IHRydWU7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XG4gICAgICAgIHZhciBpc1BvcHVwTlZ1ZSA9IGN1cnJlbnRXZWJ2aWV3SWQgPT09IHdlYnZpZXcuaWQ7XG5cbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xuICAgICAgICB2YXIgcG9wdXBOVnVlSWQgPSB3ZWJ2aWV3LmlkO1xuXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBpZiAoaG9zdE5WdWVJZCkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICB0bzogaXNQb3B1cE5WdWUgPyBob3N0TlZ1ZUlkIDogcG9wdXBOVnVlSWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2Vidmlldy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xuXG4gICAgICAgIHZhciBtYXNrQ29sb3IgPSB3ZWJ2aWV3Ll9fdW5pYXBwX21hc2s7XG5cbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xuICAgICAgICBtYXNrV2VidmlldyA9IG1hc2tXZWJ2aWV3LnBhcmVudCgpIHx8IG1hc2tXZWJ2aWV3Oy8v5YaN5qyh5qOA5rWL54i2XG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcbiAgICAgICAgdmFyIG9sZENsb3NlID0gd2Vidmlldy5jbG9zZTtcblxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xuICAgICAgICAgICAgICAgIG1hc2s6ICdub25lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHdlYnZpZXcuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2hvd01hc2soKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2Vidmlldy5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICB3ZWJ2aWV3LmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xuICAgICAgICB2YXIgd2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQoaWQpO1xuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcbiAgICB9XG5cbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xuICAgIHZhciBnbG9iYWxFdmVudCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcblxuICAgIHZhciBpZCA9IDA7XG4gICAgdmFyIGNhbGxiYWNrcyA9IHt9O1xuXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xuXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xuICAgICAgICAgICAgaW52b2tlKGUuZGF0YS5pZCwgZS5kYXRhLmRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XG4gICAgICAgICAgICBpZiAoaXNGbihhcmdzKSkge1xuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xuICAgICAgICAgICAgICAgIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6b2snKSkge1xuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5mYWlsKSAmJiBhcmdzLmZhaWwocmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xuICAgICAgICAgICAgY2FsbGJhY2sua2VlcEFsaXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmtlZXBBbGl2ZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XG4gICAgICAgIHZhciBpZCA9IF9yZWYuaWQsXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XG5cbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH0sIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZShkYXRhKSB7XG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XG4gICAgfVxuXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgICAgIHB1Ymxpc2goe1xuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBhcmdzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IHZvaWQgMDtcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XG5cbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZChjYWxsYmFjaykge1xuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XG4gICAgICAgIHJldHVybiB3ZWV4LnJlcXVpcmVNb2R1bGUocGx1Z2luTmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XG5cbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xuICAgICAgICB2YXIgZmFtaWx5ID0gX3JlZi5mYW1pbHksXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcblxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXG4gICAgICAgICAgICBzcmM6IHNvdXJjZS5yZXBsYWNlKC9cIi9nLCAnXFwnJylcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXMgPSB7XG4gICAgICAgICAgICBlcnJNc2c6ICdsb2FkRm9udEZhY2U6b2snLFxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xuICAgICAgICB9O1xuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcbiAgICB9XG5cbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcblxuICAgIHZhciBjYWxsYmFja3MkMSA9IFtdO1xuXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwUmVhZHknKSB7XG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgP1xuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xuXG4gICAgLy8gbGV0IHJlcXVlc3RUYXNrSWQgPSAwXG5cbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xuICAgIHZhciBNRVRIT0RfUE9TVCA9ICdQT1NUJztcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG5cbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBDT05URU5UX1RZUEVfRk9STTtcblxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09IE1FVEhPRF9QT1NUICYmIGNvbnRlbnRUeXBlLnRvTG93ZXJDYXNlKCkgPT09IENPTlRFTlRfVFlQRV9KU09OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xuICAgICAgICB2YXIgdXJsID0gX3JlZi51cmwsXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXG4gICAgICAgICAgICBfcmVmJG1ldGhvZCA9IF9yZWYubWV0aG9kLFxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcbiAgICAgICAgICAgIGRhdGFUeXBlID0gX3JlZiRkYXRhVHlwZSA9PT0gdW5kZWZpbmVkID8gJ2pzb24nIDogX3JlZiRkYXRhVHlwZSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XG5cbiAgICAgICAgLy8gcmVxdWVzdFRhc2tJZCsrXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGhhc0NvbnRlbnRUeXBlID0gZmFsc2U7XG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBoZWFkZXJbbmFtZV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gTUVUSE9EX0dFVCAmJiBkYXRhKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxuICAgICAgICAgICAgYm9keTogbWV0aG9kICE9PSBNRVRIT0RfR0VUID8gc2VyaWFsaXplKGRhdGEsIG1ldGhvZCwgaGVhZGVyc1snQ29udGVudC1UeXBlJ10pIDogJydcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXG4gICAgICAgICAgICAgICAgb2sgPSBfcmVmMi5vayxcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzID0gX3JlZjIuaGVhZGVycztcblxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xuICAgICAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAtMSB8fCBhYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XG4gICAgICAgICAgICAgICAgcmV0LmhlYWRlciA9IGhlYWRlcnM7XG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgc3RvcmFnZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1c3N0b3JhZ2UnKTtcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XG5cbiAgICBmdW5jdGlvbiBnZXRTdG9yYWdlKF9yZWYpIHtcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xuXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhVHlwZSA9IHJldC5kYXRhO1xuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldFN0b3JhZ2U6b2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFN0b3JhZ2UoX3JlZjIpIHtcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYyLnN1Y2Nlc3MsXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XG5cbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGRhdGFUeXBlID0gJ09iamVjdCc7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcbiAgICAgICAgdmFyIGtleSA9IF9yZWYzLmtleSxcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XG5cbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAncmVtb3ZlU3RvcmFnZTpvaydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdyZW1vdmVTdG9yYWdlOmZhaWwnO1xuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xuICAgICAgICB2YXIga2V5ID0gX3JlZjQua2V5LFxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmNC5mYWlsLFxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcbiAgICB9XG5cbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcblxuICAgIGZ1bmN0aW9uIGdldENsaXBib2FyZERhdGEoX3JlZikge1xuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XG5cbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xuXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xuICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldENsaXBib2FyZERhdGE6b2snLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBfcmVmMy5kYXRhLFxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XG5cbiAgICAgICAgdmFyIHJlcyA9IHtcbiAgICAgICAgICAgIGVyck1zZzogJ3NldENsaXBib2FyZERhdGE6b2snXG4gICAgICAgIH07XG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xuICAgIH1cblxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBFbWl0dGVyID0ge1xuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBFbWl0dGVyO1xuICAgICAgICB9O1xuICAgIH0oKTtcblxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRvbigpIHtcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJG9mZigpIHtcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgIH1cblxuXG5cbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgbG9hZEZvbnRGYWNlOiBsb2FkRm9udEZhY2UsXG4gICAgICAgIHJlYWR5OiByZWFkeSxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgICAgZ2V0U3RvcmFnZTogZ2V0U3RvcmFnZSxcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcbiAgICAgICAgY2xlYXJTdG9yYWdlOiBjbGVhclN0b3JhZ2UsXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXG4gICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2U6IG9uU3ViTlZ1ZU1lc3NhZ2UsXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxuICAgICAgICAkb246ICRvbixcbiAgICAgICAgJG9mZjogJG9mZixcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxuICAgICAgICAkZW1pdDogJGVtaXRcbiAgICB9KTtcblxuXG4gICAgdmFyIHd4ID0ge1xuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxuICAgICAgICBkb3dubG9hZEZpbGU6IHRydWUsXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXG4gICAgICAgIGdldEltYWdlSW5mbzogdHJ1ZSxcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXG4gICAgICAgIHNhdmVWaWRlb1RvUGhvdG9zQWxidW06IHRydWUsXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxuICAgICAgICBnZXRTYXZlZEZpbGVJbmZvOiB0cnVlLFxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcbiAgICAgICAgc2V0U3RvcmFnZTogdHJ1ZSxcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHRydWUsXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXG4gICAgICAgIGNob29zZUxvY2F0aW9uOiB0cnVlLFxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXG4gICAgICAgIGdldE5ldHdvcmtUeXBlOiB0cnVlLFxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcbiAgICAgICAgc2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxuICAgICAgICB2aWJyYXRlTG9uZzogdHJ1ZSxcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXG4gICAgICAgIHNob3dUb2FzdDogdHJ1ZSxcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcbiAgICAgICAgaGlkZUxvYWRpbmc6IHRydWUsXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyVGl0bGU6IHRydWUsXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcbiAgICAgICAgcmVkaXJlY3RUbzogdHJ1ZSxcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcbiAgICAgICAgbmF2aWdhdGVCYWNrOiB0cnVlLFxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcbiAgICAgICAgbG9naW46IHRydWUsXG4gICAgICAgIGdldFVzZXJJbmZvOiB0cnVlLFxuICAgICAgICBzaGFyZTogdHJ1ZSxcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXG4gICAgICAgIHN1YnNjcmliZVB1c2g6IHRydWUsXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcbiAgICAgICAgb25QdXNoOiB0cnVlLFxuICAgICAgICBvZmZQdXNoOiB0cnVlXG4gICAgfTtcblxuICAgIHZhciBiYXNlVW5pID0ge1xuICAgICAgICBvczoge1xuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciB1bmkgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHVuaSA9IG5ldyBQcm94eSh7fSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2lmeShtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhiYXNlVW5pKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xuXG4gICAgICAgIHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luID0gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcblxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xuXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XG5cbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XG5cbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcblxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xuICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gbWV0aG9kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHVuaTtcbn1cblxudmFyIGNyZWF0ZVVuaTtcblxuaWYgKHR5cGVvZiBnZXRVbmkgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XG59IGVsc2Uge1xuICAgIGNyZWF0ZVVuaSA9IGluaXRVbmk7XG59XG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbmkod2VleCwgd2VleFBsdXMsIEJyb2FkY2FzdENoYW5uZWwpO1xuZXhwb3J0IHtcbiAgICB3ZWV4UGx1c1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e1wicGFnZXMvY29tcG9uZW50L3ZpZXcvdmlld1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcInZpZXdcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2NvbXBvbmVudC9zY3JvbGwtdmlldy9zY3JvbGwtdmlld1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcInNjcm9sbC12aWV3XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvc3dpcGVyL3N3aXBlclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcInN3aXBlclwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvY29tcG9uZW50L21vdmFibGUtdmlldy9tb3ZhYmxlLXZpZXdcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJtb3ZhYmxlLXZpZXdcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2NvbXBvbmVudC90ZXh0L3RleHRcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJ0ZXh0XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvcmljaC10ZXh0L3JpY2gtdGV4dFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcInJpY2gtdGV4dFwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvY29tcG9uZW50L3Byb2dyZXNzL3Byb2dyZXNzXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwicHJvZ3Jlc3NcIixcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1pY29uc1wiOlwiL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29uc1wifX0sXCJwYWdlcy9jb21wb25lbnQvYnV0dG9uL2J1dHRvblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcImJ1dHRvblwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvY29tcG9uZW50L2NoZWNrYm94L2NoZWNrYm94XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiY2hlY2tib3hcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2NvbXBvbmVudC9mb3JtL2Zvcm1cIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJmb3JtXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvaW5wdXQvaW5wdXRcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJpbnB1dFwiLFwic29mdGlucHV0TmF2QmFyXCI6XCJub25lXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvbGFiZWwvbGFiZWxcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJsYWJlbFwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvY29tcG9uZW50L3BpY2tlci9waWNrZXJcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJwaWNrZXJcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2NvbXBvbmVudC9waWNrZXItdmlldy9waWNrZXItdmlld1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcInBpY2tlci12aWV3XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvcmFkaW8vcmFkaW9cIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJyYWRpb1wiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvY29tcG9uZW50L3NsaWRlci9zbGlkZXJcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJzbGlkZXJcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2NvbXBvbmVudC9zd2l0Y2gvc3dpdGNoXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwic3dpdGNoXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvdGV4dGFyZWEvdGV4dGFyZWFcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJ0ZXh0YXJlYVwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvY29tcG9uZW50L2VkaXRvci9lZGl0b3JcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJlZGl0b3JcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2NvbXBvbmVudC9uYXZpZ2F0b3IvbmF2aWdhdG9yXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwibmF2aWdhdG9yXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvbmF2aWdhdG9yL25hdmlnYXRlL25hdmlnYXRlXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwibmF2aWdhdGVQYWdlXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvbmF2aWdhdG9yL3JlZGlyZWN0L3JlZGlyZWN0XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwicmVkaXJlY3RQYWdlXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvaW1hZ2UvaW1hZ2VcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJpbWFnZVwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvY29tcG9uZW50L2F1ZGlvL2F1ZGlvXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiYXVkaW9cIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2NvbXBvbmVudC9jYW52YXMvY2FudmFzXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiY2FudmFzXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9jb21wb25lbnQvd2ViLXZpZXcvd2ViLXZpZXdcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJ3ZWItdmlld1wiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvY29tcG9uZW50L3dlYi12aWV3LWxvY2FsL3dlYi12aWV3LWxvY2FsXCI6e1widXNpbmdDb21wb25lbnRzXCI6e319LFwicGxhdGZvcm1zL2FwcC1wbHVzL3NwZWVjaC9zcGVlY2hcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLor63pn7Por4bliKtcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBsYXRmb3Jtcy9hcHAtcGx1cy9vcmllbnRhdGlvbi9vcmllbnRhdGlvblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaWueWQkeS8oOaEn+WZqFwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGxhdGZvcm1zL2FwcC1wbHVzL3Byb3hpbWl0eS9wcm94aW1pdHlcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLot53nprvkvKDmhJ/lmahcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBsYXRmb3Jtcy9hcHAtcGx1cy9wdXNoL3B1c2hcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmjqjpgIFcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBsYXRmb3Jtcy9hcHAtcGx1cy9zaGFrZS9zaGFrZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaRh+S4gOaRh1wiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvYWJvdXQvYWJvdXRcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLlhbPkuo5cIixcInVzaW5nQ29tcG9uZW50c1wiOntcInUtbGlua1wiOlwiL2NvbXBvbmVudHMvdUxpbmtcIn19LFwicGxhdGZvcm1zL2FwcC1wbHVzL2ZlZWRiYWNrL2ZlZWRiYWNrXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6Zeu6aKY5Y+N6aaIXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvbG9naW4vbG9naW5cIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmjojmnYPnmbvlvZVcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9zdWJudnVlL3N1Ym52dWVcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJTdWJOdnVlXCIsXCJ0aXRsZU5WaWV3XCI6ZmFsc2UsXCJzdWJOVnVlc1wiOlt7XCJpZFwiOlwiZHJhd2VyXCIsXCJwYXRoXCI6XCJwYWdlcy9BUEkvc3VibnZ1ZS9zdWJudnVlL2RyYXdlclwiLFwidHlwZVwiOlwicG9wdXBcIixcInN0eWxlXCI6e1wid2lkdGhcIjpcIjUwJVwifX0se1wiaWRcIjpcInBvcHVwXCIsXCJwYXRoXCI6XCJwYWdlcy9BUEkvc3VibnZ1ZS9zdWJudnVlL3BvcHVwXCIsXCJ0eXBlXCI6XCJwb3B1cFwiLFwic3R5bGVcIjp7XCJtYXJnaW5cIjpcImF1dG9cIixcIndpZHRoXCI6XCI4MCVcIixcImhlaWdodFwiOlwiNjAwdXB4XCJ9fSx7XCJpZFwiOlwidmlkZW9fbWFza1wiLFwicGF0aFwiOlwicGFnZXMvQVBJL3N1Ym52dWUvc3VibnZ1ZS92aWRlby1tYXNrXCIsXCJzdHlsZVwiOntcInBvc2l0aW9uXCI6XCJhYnNvbHV0ZVwiLFwiYm90dG9tXCI6XCIzMHB4XCIsXCJsZWZ0XCI6XCIwXCIsXCJ3aWR0aFwiOlwiMjMwcHhcIixcImhlaWdodFwiOlwiMTEwcHhcIixcImJhY2tncm91bmRcIjpcInRyYW5zcGFyZW50XCJ9fSx7XCJpZFwiOlwibmF2XCIsXCJwYXRoXCI6XCJwYWdlcy9BUEkvc3VibnZ1ZS9zdWJudnVlL25hdlwiLFwidHlwZVwiOlwibmF2aWdhdGlvbkJhclwifV0sXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvZ2V0LXVzZXItaW5mby9nZXQtdXNlci1pbmZvXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6I635Y+W55So5oi35L+h5oGvXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvcmVxdWVzdC1wYXltZW50L3JlcXVlc3QtcGF5bWVudFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWPkei1t+aUr+S7mFwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL3NoYXJlL3NoYXJlXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5YiG5LqrXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvc2V0LW5hdmlnYXRpb24tYmFyLXRpdGxlL3NldC1uYXZpZ2F0aW9uLWJhci10aXRsZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuiuvue9rueVjOmdouagh+mimFwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL3Nob3ctbG9hZGluZy9zaG93LWxvYWRpbmdcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLliqDovb3mj5DnpLrmoYZcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9uYXZpZ2F0b3IvbmF2aWdhdG9yXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6aG16Z2i6Lez6L2sXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvbmF2aWdhdG9yL25ldy1wYWdlL25ldy1wYWdlXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5paw6aG16Z2iXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvcHVsbC1kb3duLXJlZnJlc2gvcHVsbC1kb3duLXJlZnJlc2hcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLkuIvmi4nliLfmlrBcIixcImVuYWJsZVB1bGxEb3duUmVmcmVzaFwiOnRydWUsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvYW5pbWF0aW9uL2FuaW1hdGlvblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWIm+W7uuWKqOeUu1wiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL2dldC1ub2RlLWluZm8vZ2V0LW5vZGUtaW5mb1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuiKgueCueS/oeaBr1wiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL2ludGVyc2VjdGlvbi1vYnNlcnZlci9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLoioLngrnluIPlsYDnm7jkuqTnirbmgIFcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9jYW52YXMvY2FudmFzXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5Yib5bu657uY55S7XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvYWN0aW9uLXNoZWV0L2FjdGlvbi1zaGVldFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaTjeS9nOiPnOWNlVwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL21vZGFsL21vZGFsXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5qih5oCB5by556qXXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvdG9hc3QvdG9hc3RcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmtojmga/mj5DnpLrmoYZcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9nZXQtbmV0d29yay10eXBlL2dldC1uZXR3b3JrLXR5cGVcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLojrflj5bmiYvmnLrnvZHnu5znirbmgIFcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9nZXQtc3lzdGVtLWluZm8vZ2V0LXN5c3RlbS1pbmZvXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6I635Y+W5omL5py657O757uf5L+h5oGvXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvYWRkLXBob25lLWNvbnRhY3QvYWRkLXBob25lLWNvbnRhY3RcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmt7vliqDmiYvmnLrogZTns7vkurpcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9vbi1hY2NlbGVyb21ldGVyLWNoYW5nZS9vbi1hY2NlbGVyb21ldGVyLWNoYW5nZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuebkeWQrOWKoOmAn+W6puiuoeaVsOaNrlwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL29uLWNvbXBhc3MtY2hhbmdlL29uLWNvbXBhc3MtY2hhbmdlXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi55uR5ZCs572X55uY5pWw5o2uXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvbWFrZS1waG9uZS1jYWxsL21ha2UtcGhvbmUtY2FsbFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaJk+eUteivnVwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL3NjYW4tY29kZS9zY2FuLWNvZGVcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmiavnoIFcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9jbGlwYm9hcmQvY2xpcGJvYXJkXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5Ymq6LS05p2/XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvcmVxdWVzdC9yZXF1ZXN0XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi572R57uc6K+35rGCXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGVcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLkuIrkvKDmlofku7ZcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9kb3dubG9hZC1maWxlL2Rvd25sb2FkLWZpbGVcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLkuIvovb3mlofku7ZcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9pbWFnZS9pbWFnZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWbvueJh1wiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL3ZvaWNlL3ZvaWNlXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5b2V6Z+zXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvYmFja2dyb3VuZC1hdWRpby9iYWNrZ3JvdW5kLWF1ZGlvXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6IOM5pmv6Z+z6aKRXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvdmlkZW8vdmlkZW9cIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLop4bpopFcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9maWxlL2ZpbGVcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmlofku7ZcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9nZXQtbG9jYXRpb24vZ2V0LWxvY2F0aW9uXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi6I635Y+W5L2N572uXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktcG9wdXBcIjpcIi9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXBcIn19LFwicGFnZXMvQVBJL29wZW4tbG9jYXRpb24vb3Blbi1sb2NhdGlvblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuafpeeci+S9jee9rlwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL2Nob29zZS1sb2NhdGlvbi9jaG9vc2UtbG9jYXRpb25cIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLkvb/nlKjlnLDlm77pgInmi6nkvY3nva5cIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9zdG9yYWdlL3N0b3JhZ2VcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmlbDmja7lrZjlgqhcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL0FQSS9zcWxpdGUvc3FsaXRlXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiU1FMaXRlXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvYnJpZ2h0bmVzcy9icmlnaHRuZXNzXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5bGP5bmV5Lqu5bqmXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvc2F2ZS1tZWRpYS9zYXZlLW1lZGlhXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5L+d5a2Y5aqS5L2T5Yiw5pys5ZywXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvYmx1ZXRvb3RoL2JsdWV0b290aFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuiTneeJmVwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL2ZpbmdlcnByaW50L2ZpbmdlcnByaW50XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5oyH57q5XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9BUEkvaWJlYWNvbi9pYmVhY29uXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiaUJlYWNvblwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvQVBJL3ZpYnJhdGUvdmlicmF0ZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIumch+WKqFwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvZXh0VUkvYmFkZ2UvYmFkZ2VcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJCYWRnZSDmlbDlrZfop5LmoIdcIixcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1iYWRnZVwiOlwiL2NvbXBvbmVudHMvdW5pLWJhZGdlL3VuaS1iYWRnZVwifX0sXCJwYWdlcy9leHRVSS9jb3VudC1kb3duL2NvdW50LWRvd25cIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJDb3VudERvd24g5YCS6K6h5pe2XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktY291bnQtZG93blwiOlwiL2NvbXBvbmVudHMvdW5pLWNvdW50LWRvd24vdW5pLWNvdW50LWRvd25cIn19LFwicGFnZXMvZXh0VUkvZHJhd2VyL2RyYXdlclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIkRyYXdlciDmir3lsYlcIixcInRpdGxlTlZpZXdcIjp7XCJidXR0b25zXCI6W3tcInRleHRcIjpcIu6Vo1wiLFwiZm9udFNyY1wiOlwiL3N0YXRpYy91bmkudHRmXCIsXCJmb250U2l6ZVwiOlwiMjJweFwifV19LFwiYm91bmNlXCI6XCJub25lXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktZHJhd2VyXCI6XCIvY29tcG9uZW50cy91bmktZHJhd2VyL3VuaS1kcmF3ZXJcIixcInVuaS1saXN0XCI6XCIvY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdFwiLFwidW5pLWxpc3QtaXRlbVwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QtaXRlbS91bmktbGlzdC1pdGVtXCJ9fSxcInBhZ2VzL2V4dFVJL2ljb24vaWNvblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIkljb24g5Zu+5qCHXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktaWNvbnNcIjpcIi9jb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnNcIn19LFwicGFnZXMvZXh0VUkvbG9hZC1tb3JlL2xvYWQtbW9yZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIkxvYWRNb3JlIOWKoOi9veabtOWkmlwiLFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLWxvYWQtbW9yZVwiOlwiL2NvbXBvbmVudHMvdW5pLWxvYWQtbW9yZS91bmktbG9hZC1tb3JlXCJ9fSxcInBhZ2VzL2V4dFVJL25hdi1iYXIvbmF2LWJhclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIk5hdkJhciDlr7zoiKrmoI9cIixcIm5hdmlnYXRpb25TdHlsZVwiOlwiY3VzdG9tXCIsXCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjp0cnVlLFwidGl0bGVOVmlld1wiOmZhbHNlLFwiYm91bmNlXCI6XCJub25lXCIsXCJwdWxsVG9SZWZyZXNoXCI6e1wic3R5bGVcIjpcImNpcmNsZVwiLFwib2Zmc2V0XCI6XCI3MHB4XCJ9LFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLWljb25zXCI6XCIvY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zXCIsXCJ1bmktbmF2LWJhclwiOlwiL2NvbXBvbmVudHMvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXJcIn19LFwicGFnZXMvZXh0VUkvbnVtYmVyLWJveC9udW1iZXItYm94XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiTnVtYmVyQm94IOaVsOWtl+i+k+WFpeahhlwiLFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLW51bWJlci1ib3hcIjpcIi9jb21wb25lbnRzL3VuaS1udW1iZXItYm94L3VuaS1udW1iZXItYm94XCJ9fSxcInBhZ2VzL2V4dFVJL3BvcHVwL3BvcHVwXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiUG9wdXAg5by55Ye65bGCXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktcG9wdXBcIjpcIi9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXBcIn19LFwicGFnZXMvZXh0VUkvc2VnbWVudGVkLWNvbnRyb2wvc2VnbWVudGVkLWNvbnRyb2xcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJTZWdtZW50ZWRDb250cm9sIOWIhuauteWZqFwiLFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLXNlZ21lbnRlZC1jb250cm9sXCI6XCIvY29tcG9uZW50cy91bmktc2VnbWVudGVkLWNvbnRyb2wvdW5pLXNlZ21lbnRlZC1jb250cm9sXCJ9fSxcInBhZ2VzL2V4dFVJL3RhZy90YWdcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJUYWcg5qCH562+XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktdGFnXCI6XCIvY29tcG9uZW50cy91bmktdGFnL3VuaS10YWdcIn19LFwicGFnZXMvZXh0VUkvbGlzdC9saXN0XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiTGlzdCDliJfooahcIixcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1saXN0XCI6XCIvY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdFwiLFwidW5pLWxpc3QtaXRlbVwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QtaXRlbS91bmktbGlzdC1pdGVtXCJ9fSxcInBhZ2VzL2V4dFVJL2NhcmQvY2FyZFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIkNhcmQg5Y2h54mHXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktY2FyZFwiOlwiL2NvbXBvbmVudHMvdW5pLWNhcmQvdW5pLWNhcmRcIn19LFwicGFnZXMvZXh0VUkvY29sbGFwc2UvY29sbGFwc2VcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJDb2xsYXBzZSDmipjlj6DpnaLmnb9cIixcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1jb2xsYXBzZVwiOlwiL2NvbXBvbmVudHMvdW5pLWNvbGxhcHNlL3VuaS1jb2xsYXBzZVwiLFwidW5pLWNvbGxhcHNlLWl0ZW1cIjpcIi9jb21wb25lbnRzL3VuaS1jb2xsYXBzZS1pdGVtL3VuaS1jb2xsYXBzZS1pdGVtXCIsXCJ1bmktbGlzdFwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QvdW5pLWxpc3RcIixcInVuaS1saXN0LWl0ZW1cIjpcIi9jb21wb25lbnRzL3VuaS1saXN0LWl0ZW0vdW5pLWxpc3QtaXRlbVwifX0sXCJwYWdlcy9leHRVSS9wYWdpbmF0aW9uL3BhZ2luYXRpb25cIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJQYWdpbmF0aW9uIOWIhumhteWZqFwiLFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLXBhZ2luYXRpb25cIjpcIi9jb21wb25lbnRzL3VuaS1wYWdpbmF0aW9uL3VuaS1wYWdpbmF0aW9uXCIsXCJ1bmktbGlzdFwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QvdW5pLWxpc3RcIixcInVuaS1saXN0LWl0ZW1cIjpcIi9jb21wb25lbnRzL3VuaS1saXN0LWl0ZW0vdW5pLWxpc3QtaXRlbVwifX0sXCJwYWdlcy9leHRVSS9zd2lwZXItZG90L3N3aXBlci1kb3RcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJTd2lwZXJEb3Qg6L2u5pKt5Zu+5oyH56S654K5XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktc3dpcGVyLWRvdFwiOlwiL2NvbXBvbmVudHMvdW5pLXN3aXBlci1kb3QvdW5pLXN3aXBlci1kb3RcIn19LFwicGFnZXMvZXh0VUkvZ3JpZC9ncmlkXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiR3JpZCDlrqvmoLxcIixcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1ncmlkXCI6XCIvY29tcG9uZW50cy91bmktZ3JpZC91bmktZ3JpZFwiLFwidW5pLWdyaWQtaXRlbVwiOlwiL2NvbXBvbmVudHMvdW5pLWdyaWQtaXRlbS91bmktZ3JpZC1pdGVtXCJ9fSxcInBhZ2VzL2V4dFVJL3JhdGUvcmF0ZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIlJhdGUg6K+E5YiGXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktcmF0ZVwiOlwiL2NvbXBvbmVudHMvdW5pLXJhdGUvdW5pLXJhdGVcIn19LFwicGFnZXMvZXh0VUkvc3RlcHMvc3RlcHNcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJTdGVwcyDmraXpqqTmnaFcIixcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1zdGVwc1wiOlwiL2NvbXBvbmVudHMvdW5pLXN0ZXBzL3VuaS1zdGVwc1wifX0sXCJwYWdlcy9leHRVSS9ub3RpY2UtYmFyL25vdGljZS1iYXJcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJOb3RpY2VCYXIg6YCa5ZGK5qCPXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktbm90aWNlLWJhclwiOlwiL2NvbXBvbmVudHMvdW5pLW5vdGljZS1iYXIvdW5pLW5vdGljZS1iYXJcIn19LFwicGFnZXMvZXh0VUkvc3dpcGUtYWN0aW9uL3N3aXBlLWFjdGlvblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIlN3aXBlQWN0aW9uIOa7keWKqOaTjeS9nFwiLFwiYm91bmNlXCI6XCJub25lXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktc3dpcGUtYWN0aW9uXCI6XCIvY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uL3VuaS1zd2lwZS1hY3Rpb25cIixcInVuaS1saXN0XCI6XCIvY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdFwiLFwidW5pLWxpc3QtaXRlbVwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QtaXRlbS91bmktbGlzdC1pdGVtXCJ9fSxcInBhZ2VzL2V4dFVJL3NlYXJjaC1iYXIvc2VhcmNoLWJhclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIlNlYXJjaEJhciDmkJzntKLmoI9cIixcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1zZWFyY2gtYmFyXCI6XCIvY29tcG9uZW50cy91bmktc2VhcmNoLWJhci91bmktc2VhcmNoLWJhclwifX0sXCJwYWdlcy9leHRVSS9jYWxlbmRhci9jYWxlbmRhclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIkNhbGVuZGFyIOaXpeWOhlwiLFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLWNhbGVuZGFyXCI6XCIvY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyXCJ9fSxcInBhZ2VzL2V4dFVJL2luZGV4ZWQtbGlzdC9pbmRleGVkLWxpc3RcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJJbmRleGVkTGlzdCDntKLlvJXliJfooahcIixcImJvdW5jZVwiOlwibm9uZVwiLFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLWluZGV4ZWQtbGlzdFwiOlwiL2NvbXBvbmVudHMvdW5pLWluZGV4ZWQtbGlzdC91bmktaW5kZXhlZC1saXN0XCJ9fSxcInBhZ2VzL2V4dFVJL2ZhYi9mYWJcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJGYWIg5oKs5rWu5oyJ6ZKuXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1bmktZmFiXCI6XCIvY29tcG9uZW50cy91bmktZmFiL3VuaS1mYWJcIn19LFwicGFnZXMvZXh0VUkvZmF2L2ZhdlwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIkZhdiDmlLbol4/mjInpkq5cIixcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1mYXZcIjpcIi9jb21wb25lbnRzL3VuaS1mYXYvdW5pLWZhdlwiLFwidW5pLW5hdi1iYXJcIjpcIi9jb21wb25lbnRzL3VuaS1uYXYtYmFyL3VuaS1uYXYtYmFyXCJ9fSxcInBhZ2VzL2V4dFVJL2dvb2RzLW5hdi9nb29kcy1uYXZcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJHb29kc05hdiDllYblk4Hlr7zoiKpcIixcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1nb29kcy1uYXZcIjpcIi9jb21wb25lbnRzL3VuaS1nb29kcy1uYXYvdW5pLWdvb2RzLW5hdlwifX0sXCJwYWdlcy9leHRVSS90aXRsZS90aXRsZVwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIlRpdGxlIOagh+mimOagj1wiLFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLXRpdGxlXCI6XCIvY29tcG9uZW50cy91bmktdGl0bGUvdW5pLXRpdGxlXCIsXCJ1bmktbGlzdFwiOlwiL2NvbXBvbmVudHMvdW5pLWxpc3QvdW5pLWxpc3RcIixcInVuaS1saXN0LWl0ZW1cIjpcIi9jb21wb25lbnRzL3VuaS1saXN0LWl0ZW0vdW5pLWxpc3QtaXRlbVwifX0sXCJwYWdlcy90ZW1wbGF0ZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5ZWG5ZOB5YiX6KGoXCIsXCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjp0cnVlLFwib25SZWFjaEJvdHRvbURpc3RhbmNlXCI6MjAsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy90ZW1wbGF0ZS91cGFyc2UtbWQvdXBhcnNlLW1kXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5a+M5paH5pys5riy5p+T56S65L6LLW1hcmtkb3duXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJ1LXBhcnNlXCI6XCIvY29tcG9uZW50cy91UGFyc2Uvc3JjL3d4UGFyc2VcIn19LFwicGFnZXMvdGVtcGxhdGUvdXBhcnNlLWh0bWwvdXBhcnNlLWh0bWxcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLlr4zmlofmnKzmuLLmn5PnpLrkvostaHRtbFwiLFwidXNpbmdDb21wb25lbnRzXCI6e1widS1wYXJzZVwiOlwiL2NvbXBvbmVudHMvdVBhcnNlL3NyYy93eFBhcnNlXCJ9fSxcInBhZ2VzL3RlbXBsYXRlL3VjaGFydHMvdWNoYXJ0c1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcInVDaGFydHMg5Zu+6KGoXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy90ZW1wbGF0ZS9nZXN0dXJlLWxvY2svZ2VzdHVyZS1sb2NrXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5omL5Yq/5Zu+5qGI6ZSB5bGPXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJtcHZ1ZS1nZXN0dXJlLWxvY2tcIjpcIi9jb21wb25lbnRzL21wdnVlR2VzdHVyZUxvY2svaW5kZXhcIn19LFwicGFnZXMvdGVtcGxhdGUvbmF2LWRlZmF1bHQvbmF2LWRlZmF1bHRcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLpu5jorqTlr7zoiKrmoI9cIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3RlbXBsYXRlL25hdi10cmFuc3BhcmVudC9uYXYtdHJhbnNwYXJlbnRcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLpgI/mmI7muJDlj5jlr7zoiKrmoI9cIixcInRpdGxlTlZpZXdcIjp7XCJ0eXBlXCI6XCJ0cmFuc3BhcmVudFwifSxcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3RlbXBsYXRlL25hdi1idXR0b24vbmF2LWJ1dHRvblwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWvvOiIquagj+W4puiHquWumuS5ieaMiemSrlwiLFwidGl0bGVOVmlld1wiOntcImJ1dHRvbnNcIjpbe1widHlwZVwiOlwic2hhcmVcIn0se1widHlwZVwiOlwiZmF2b3JpdGVcIn1dfSxcInVzaW5nQ29tcG9uZW50c1wiOntcInVuaS1pY29uc1wiOlwiL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29uc1wifX0sXCJwYWdlcy90ZW1wbGF0ZS9uYXYtaW1hZ2UvbmF2LWltYWdlXCI6e1widGl0bGVOVmlld1wiOntcInRpdGxlVGV4dFwiOlwiXCIsXCJ0YWdzXCI6W3tcInRhZ1wiOlwiaW1nXCIsXCJzcmNcIjpcIi9zdGF0aWMvbmF2LnBuZ1wiLFwicG9zaXRpb25cIjp7XCJsZWZ0XCI6XCJhdXRvXCIsXCJ0b3BcIjpcImF1dG9cIixcIndpZHRoXCI6XCIxMTBweFwiLFwiaGVpZ2h0XCI6XCIyNnB4XCJ9fV19LFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLWljb25zXCI6XCIvY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zXCJ9fSxcInBhZ2VzL3RlbXBsYXRlL25hdi1jaXR5LWRyb3Bkb3duL25hdi1jaXR5LWRyb3Bkb3duXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5a+86Iiq5qCP5bim5Z+O5biC6YCJ5oupXCIsXCJ0aXRsZU5WaWV3XCI6e1wiYnV0dG9uc1wiOlt7XCJ0ZXh0XCI6XCLljJfkuqzluIJcIixcImZvbnRTaXplXCI6XCIxNFwiLFwic2VsZWN0XCI6dHJ1ZSxcIndpZHRoXCI6XCJhdXRvXCJ9XX0sXCJ1c2luZ0NvbXBvbmVudHNcIjp7XCJtcHZ1ZS1waWNrZXJcIjpcIi9jb21wb25lbnRzL21wdnVlLXBpY2tlci9tcHZ1ZVBpY2tlclwifX0sXCJwYWdlcy90ZW1wbGF0ZS9uYXYtZG90L25hdi1kb3RcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLlr7zoiKrmoI/luKbnuqLngrnlkozop5LmoIdcIixcInRpdGxlTlZpZXdcIjp7XCJidXR0b25zXCI6W3tcInRleHRcIjpcIua2iOaBr1wiLFwiZm9udFNpemVcIjpcIjE0XCIsXCJyZWREb3RcIjp0cnVlfSx7XCJ0ZXh0XCI6XCLlhbPms6hcIixcImZvbnRTaXplXCI6XCIxNFwiLFwiYmFkZ2VUZXh0XCI6XCIxMlwifV19LFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLWljb25zXCI6XCIvY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zXCJ9fSxcInBhZ2VzL3RlbXBsYXRlL25hdi1zZWFyY2gtaW5wdXQvbmF2LXNlYXJjaC1pbnB1dFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWvvOiIquagj+W4puaQnOe0ouahhlwiLFwidGl0bGVOVmlld1wiOntcInR5cGVcIjpcInRyYW5zcGFyZW50XCIsXCJ0aXRsZUNvbG9yXCI6XCIjZmZmXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIjpcIiMwMDdBRkZcIixcImJ1dHRvbnNcIjpbe1wiZm9udFNyY1wiOlwiL3N0YXRpYy91bmkudHRmXCIsXCJ0ZXh0XCI6XCLulLdcIixcIndpZHRoXCI6XCI0MHB4XCIsXCJmb250U2l6ZVwiOlwiMjhweFwiLFwiY29sb3JcIjpcIiNmZmZcIixcImJhY2tncm91bmRcIjpcInJnYmEoMCwwLDAsMClcIn1dLFwic2VhcmNoSW5wdXRcIjp7XCJiYWNrZ3JvdW5kQ29sb3JcIjpcIiNmZmZcIixcImJvcmRlclJhZGl1c1wiOlwiNnB4XCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl5Zyw5Z2AIOWmgu+8muWkp+mSn+WvulwiLFwiZGlzYWJsZWRcIjp0cnVlfX0sXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy90ZW1wbGF0ZS9uYXYtc2VhcmNoLWlucHV0L2RldGFpbC9kZXRhaWxcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmkJzntKJcIixcInRpdGxlTlZpZXdcIjp7XCJ0aXRsZUNvbG9yXCI6XCIjZmZmXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIjpcIiMwMDdBRkZcIixcImJ1dHRvbnNcIjpbe1wiZm9udFNyY1wiOlwiL3N0YXRpYy91bmkudHRmXCIsXCJ0ZXh0XCI6XCLulLdcIixcIndpZHRoXCI6XCJhdXRvXCIsXCJmb250U2l6ZVwiOlwiMjhweFwiLFwiY29sb3JcIjpcIiNmZmZcIn1dLFwic2VhcmNoSW5wdXRcIjp7XCJiYWNrZ3JvdW5kQ29sb3JcIjpcIiNmZmZcIixcImJvcmRlclJhZGl1c1wiOlwiNnB4XCIsXCJwbGFjZWhvbGRlclwiOlwi6K+36L6T5YWl5Zyw5Z2AIOWmgu+8muWkp+mSn+WvulwiLFwiYXV0b0ZvY3VzXCI6dHJ1ZX19LFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdGVtcGxhdGUvbXB2dWUtcGlja2VyL21wdnVlLXBpY2tlclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWkmuWIl+mAieaLqXBpY2tlclwiLFwidXNpbmdDb21wb25lbnRzXCI6e1wibXB2dWUtcGlja2VyXCI6XCIvY29tcG9uZW50cy9tcHZ1ZS1waWNrZXIvbXB2dWVQaWNrZXJcIixcIm1wdnVlLWNpdHktcGlja2VyXCI6XCIvY29tcG9uZW50cy9tcHZ1ZS1jaXR5cGlja2VyL21wdnVlQ2l0eVBpY2tlclwifX0sXCJwYWdlcy90ZW1wbGF0ZS9sZWZ0LWNhdGVnb3J5L2xlZnQtY2F0ZWdvcnlcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLkvqfovrnliIbnsbvlr7zoiKpcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3RlbXBsYXRlL2xpc3QtdHJpcGxleC1yb3cvbGlzdC10cmlwbGV4LXJvd1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuS4ieihjOWIl+ihqFwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdGVtcGxhdGUvbGlzdDJkZXRhaWwtbGlzdC9saXN0MmRldGFpbC1saXN0XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5YiX6KGo5Yiw6K+m5oOF56S65L6LXCIsXCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjp0cnVlLFwidXNpbmdDb21wb25lbnRzXCI6e1widW5pLWxvYWQtbW9yZVwiOlwiL2NvbXBvbmVudHMvdW5pLWxvYWQtbW9yZS91bmktbG9hZC1tb3JlXCJ9fSxcInBhZ2VzL3RlbXBsYXRlL2xpc3QyZGV0YWlsLWRldGFpbC9saXN0MmRldGFpbC1kZXRhaWxcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLor6bmg4VcIixcInRpdGxlTlZpZXdcIjp7XCJ0eXBlXCI6XCJ0cmFuc3BhcmVudFwiLFwiYnV0dG9uc1wiOlt7XCJ0eXBlXCI6XCJzaGFyZVwifV19LFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdGVtcGxhdGUvdGFiYmFyL2RldGFpbC9kZXRhaWxcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLor6bmg4XpobXpnaJcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3RlbXBsYXRlL21lZGlhLWxpc3QvbWVkaWEtbGlzdFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWbvuaWh+WIl+ihqFwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdGVtcGxhdGUvbGF6eS1sb2FkL2xhenktbG9hZFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaHkuWKoOi9vVwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdGVtcGxhdGUvbGF6eS1sb2FkLWN1c3RvbS9sYXp5LWxvYWQtY3VzdG9tXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5oeS5Yqg6L29XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy90ZW1wbGF0ZS9zY2hlbWUvc2NoZW1lXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5omT5byA5aSW6YOo5bqU55SoXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy90ZW1wbGF0ZS9pbS1jaGF0L2ltLWNoYXRcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLogYrlpKnnqpflj6NjaGF0XCIsXCJzb2Z0aW5wdXRNb2RlXCI6XCJhZGp1c3RSZXNpemVcIixcInNvZnRpbnB1dE5hdkJhclwiOlwibm9uZVwiLFwidXNpbmdDb21wb25lbnRzXCI6e1wiY2hhdC1pbnB1dFwiOlwiL2NvbXBvbmVudHMvaW0tY2hhdC9jaGF0aW5wdXRcIixcIm1lc3NhZ2Utc2hvd1wiOlwiL2NvbXBvbmVudHMvaW0tY2hhdC9tZXNzYWdlc2hvd1wifX0sXCJwYWdlcy90ZW1wbGF0ZS9zY3JvbGxtc2cvc2Nyb2xsbXNnXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5rua5Yqo5YWs5ZGKXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy90ZW1wbGF0ZS9jb21tZW50cy9jb21tZW50c1wiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuivhOiuuueVjOmdolwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdGVtcGxhdGUvdGltZWxpbmUvdGltZWxpbmVcIjp7XCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLml7bpl7TovbQgdGltZWxpbmVcIixcInVzaW5nQ29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL3RlbXBsYXRlL3ZhbnQtYnV0dG9uL3ZhbnQtYnV0dG9uXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5b6u5L+h6Ieq5a6a5LmJ57uE5Lu256S65L6LXCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy90ZW1wbGF0ZS9kYXRhY2hlY2tlci9kYXRhY2hlY2tlclwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuihqOWNleagoemqjFwiLFwidXNpbmdDb21wb25lbnRzXCI6e319LFwicGFnZXMvdGVtcGxhdGUvZ2xvYmFsL2dsb2JhbFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIkdsb2JhbERhdGHlkox2dWV4XCIsXCJ1c2luZ0NvbXBvbmVudHNcIjp7fX19LFwiZ2xvYmFsU3R5bGVcIjp7XCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlXCI6XCJ3aGl0ZVwiLFwibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiSGVsbG8gdW5pYXBwXCIsXCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6XCIjMDA3QUZGXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIjpcIiNGOEY4RjhcIixcImJhY2tncm91bmRDb2xvclRvcFwiOlwiI0Y0RjVGNlwiLFwiYmFja2dyb3VuZENvbG9yQm90dG9tXCI6XCIjRjRGNUY2XCIsXCJhbmltYXRpb25UeXBlXCI6XCJwb3AtaW5cIn19IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIlwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7fSJdLCJzb3VyY2VSb290IjoiIn0=