<template>    <!--输入评论-->
	<view class="footer">
		<!-- <view class="footer-left">
			<view class="uni-icon uni-icon-mic" @tap="startRecognize"> </view>
		</view> -->
		<view class="footer-center">
			<input class="input-text" type="text" v-model="inputValue"></input>
		</view>
		<view class="footer-right" @tap="sendMessge">
			<view id='msg-type'>发送</view>
		</view>
	</view>
</template>

<script>
	Date.prototype.pattern = function(fmt) { //日期格式化
		var o = {
			"M+": this.getMonth() + 1, //月份         
			"d+": this.getDate(), //日         
			"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时         
			"H+": this.getHours(), //小时         
			"m+": this.getMinutes(), //分         
			"s+": this.getSeconds(), //秒         
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度         
			"S": this.getMilliseconds() //毫秒         
		};
		var week = {
			"0": "/u65e5",
			"1": "/u4e00",
			"2": "/u4e8c",
			"3": "/u4e09",
			"4": "/u56db",
			"5": "/u4e94",
			"6": "/u516d"
		};
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		if (/(E+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") +
				week[this.getDay() + ""]);
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	}

	export default {
		name: "chat-input",
		data() {
			return {
				inputValue: '',
				time: '',
				userid: '',
				socialId: '',
				index: '',
				chatList:[],
			}
		},
		methods: {
			sendMessge: function() {
				var that = this;
				if (that.inputValue.trim() == '') {
					that.inputValue = '';
				} else {
					var date = new Date();
					var time = date.pattern("yyyy-MM-dd HH:mm:ss"); //格式化时间
					this.time = time;
					this.index = uni.getStorageSync('index');
					this.chatList = uni.getStorageSync('chatList');
					// console.log("index " + this.index);
					// console.log(this.inputValue);
					// console.log(this.userid);
					// console.log(this.time);
					// console.log(this.chatList);
					uni.request({ //请求分享
						url: 'http://39.107.125.67:8080/comments',
						dataType: 'json',
						method: 'POST',
						data: {
							"userId": this.userid,
							"socialId": this.chatList[this.index].socialId,
							"time": this.time,
							"commentContent": this.inputValue
						},
						success: (res) => {
							if (res.data.code == 0) {
								uni.reLaunch({
									url: './extUI'
								})
								console.log("测试");
							} else {
								uni.showToast({
									title: '评论出现错误',
									icon: "none",
								});
								console.log("urlshi");
								console.log(url);
							}
						},
						fail: (e) => {
							console.log(e.data);
						}
					})
					// 点击发送按钮时，通知父组件用户输入的内容
					this.$emit('send-message', {
						type: 'text',
						content: that.inputValue
					});
					that.inputValue = '';
				}
			},
			onReady() {
				uni.getStorage({
					key: 'userinfo',
					success: (res) => {
						// console.log("获取成功");
						this.userid = res.data.userid;
						// this.username = res.data.username;
					},
					fail: (e) => {
						console.log(e.data);
					}
				});
			}
		}
	}
</script>

<style>
	.footer {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 80upx;
		min-height: 80upx;
		border-top: solid 1px #bbb;
		overflow: hidden;
		padding: 5upx;
		background-color: #fafafa;
	}

	.footer-left {

		width: 80upx;
		height: 80upx;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer-right {
		width: 120upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #1482D1;
	}

	.footer-center {
		flex: 1;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer-center .input-text {
		flex: 1;
		background: #fff;
		border: solid 1upx #ddd;
		padding: 10upx !important;
		font-family: verdana !important;
		overflow: hidden;
		border-radius: 15upx;
	}
</style>
