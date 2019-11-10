(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-card/uni-card"],{"488c":function(t,n,e){"use strict";e.r(n);var a=e("bc95"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a},"6ef6":function(t,n,e){},bc95:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return e.e("components/uni-fav/uni-fav").then(e.bind(null,"a517"))},u=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"0a6b"))},i={components:{uniFav:a,uniNavBar:u},name:"UniCard",props:{title:{type:String,default:""},extra:{type:String,default:""},note:{type:String,default:""},thumbnail:{type:String,default:""},mode:{type:String,default:"basic"},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("click")},favClick:function(t){this.checkList[t]=!this.checkList[t],this.$forceUpdate()}},data:function(){return{checkList:[!1],contentText:{contentDefault:"点赞",contentFav:"已点赞"}}}};n.default=i},c4bb:function(t,n,e){"use strict";e.r(n);var a=e("e616"),u=e("488c");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("cea6");var c=e("2877"),o=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},cea6:function(t,n,e){"use strict";var a=e("6ef6"),u=e.n(a);u.a},e616:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-card/uni-card-create-component',
    {
        'components/uni-card/uni-card-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("c4bb"))
        })
    },
    [['components/uni-card/uni-card-create-component']]
]);                
