(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/editor/editor"],{"117b":function(t,e,n){"use strict";n.r(e);var o=n("fc4a"),c=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=c.a},"163c":function(t,e,n){"use strict";var o=n("47ef"),c=n.n(o);c.a},"450a":function(t,e,n){"use strict";n.r(e);var o=n("c72c"),c=n("117b");for(var i in c)"default"!==i&&function(t){n.d(e,t,function(){return c[t]})}(i);n("163c");var r=n("2877"),a=Object(r["a"])(c["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"47ef":function(t,e,n){},"7f35":function(t,e,n){"use strict";(function(t){n("1b86"),n("921b");o(n("66fd"));var e=o(n("450a"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c72c:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c})},fc4a:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{formats:{}}},methods:{readOnlyChange:function(){this.readOnly=!this.readOnly},onEditorReady:function(){var e=this;t.createSelectorQuery().select("#editor").context(function(t){e.editorCtx=t.context}).exec()},undo:function(){this.editorCtx.undo()},redo:function(){this.editorCtx.redo()},format:function(t){var e=t.target.dataset,n=e.name,o=e.value;n&&this.editorCtx.format(n,o)},onStatusChange:function(t){var e=t.detail;this.formats=e},insertDivider:function(){this.editorCtx.insertDivider({success:function(){console.log(n("insert divider success"," at pages/component/editor/editor.vue:109"))}})},clear:function(){this.editorCtx.clear({success:function(t){console.log(n("clear success"," at pages/component/editor/editor.vue:116"))}})},removeFormat:function(){this.editorCtx.removeFormat()},insertDate:function(){var t=new Date,e="".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate());this.editorCtx.insertText({text:e})},insertImage:function(){var e=this;t.chooseImage({count:1,success:function(t){e.editorCtx.insertImage({src:t.tempFilePaths[0],alt:"图像",success:function(){console.log(n("insert image success"," at pages/component/editor/editor.vue:138"))}})}})}},onLoad:function(){t.loadFontFace({family:"Pacifico",source:'url("https://sungd.github.io/Pacifico.ttf")'})}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["7f35","common/runtime","common/vendor"]]]);