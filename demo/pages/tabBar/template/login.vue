<template>
	<view>
		<view class="logo">
			<view class="img">
				<image mode="widthFix" src="../../../static/logo2.png"></image>
			</view>
		</view>
		<view class="form">
			<view class="username">
				<input placeholder="请输入账号" v-model="username" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="btn" @tap="doLogin">登 录</view>
			<view class="res">
				<!-- <view @tap="toPage('register')">用户注册</view> -->
				<view @tap="topage('register')">用户注册</view>
				<view @tap="topage('resetpasswd')">忘记密码</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// import validate from '@/common/ys-validate.js'
		data() {
			return {
				username: '',
				passwd: '',
				userid: '',
				longitude: 0,
				latitude: 0
				// isShowOauth:false,
			}
		},
		mounted() {
			let pass = uni.getStorageSync('passwd');
			// console.log("密码是啥" + pass);
			this.passwd = pass;
		},
		onShow() {
			// uni.request({
			// 	url: 'http://api.map.baidu.com/reverse_geocoding/v3/?ak=mEGisxA5fZvN1wTsBf8UvjX58BK2OdSC&output=json&coordtype=wgs84ll&location=' +
			// 		this.latitude + ',' + this.longitude,
			// 	success: function(res) {
			// 		console.log("尝试一下");
			// 		console.log(res.status);
			// 		console.log(res.business);
			// 	}
			// })
		},
		onReady() {
			uni.getStorage({
				key: 'userinfo',
				success: (res) => {
					// console.log("获取成功");
					this.username = res.data.username;
					// console.log("userid为" + this.userid);
				},
				fail: (e) => {
					console.log(e.data);
				}
			});
			uni.getLocation({
				type: 'wgs84',
				geocode: true,
				success: function(res) {
					// this.longitude = res.longitude.toString();
					// this.latitude = res.latitude.toString();
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
					uni.setStorageSync('addressRes',res);
					// console.log(res.address.city)
					uni.setStorageSync('longitude', res.longitude);
					uni.setStorageSync('latitude', res.latitude);
					// uni.setStorageSync('city', res.address.city);
					// uni.setStorageSync('district', res.address.district);
					// uni.setStorageSync('poiName', res.address.poiName);
					// var address = res.address;
					// console.log("地址");
					// console.log(res.address.city);
					// console.log(res.address.district);
					// console.log(res.address.poiName);
				}
			});
		},
		methods: {
			cors() {
				// Allow from any origin
				if (isset($_SERVER['HTTP_ORIGIN'])) {
					// Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
					// you want to allow, and if so:
					header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
					header('Access-Control-Allow-Credentials: true');
					header('Access-Control-Max-Age: 86400'); // cache for 1 day
				}
				// Access-Control headers are received during OPTIONS requests
				if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
					if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
						header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
					if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
						header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
				}
			},
			topage(page) {
				uni.hideKeyboard()
				uni.navigateTo({
					url: page
				})
			},
			doLogin() {
				var self = this;
				var username = this.username;
				var passwd = this.passwd;
				uni.hideKeyboard();
				var uri = 'http://39.107.125.67:8080/login/' + username + '&' + passwd;
				uni.request({
					url: uri,
					success: (res) => {
						// console.log("111111111" + res.data.data);
						this.text = 'request success';
						if (res.data.code == 0) {
							uni.setStorageSync('passwd', this.passwd);
							// console.log()
							uni.reLaunch({
								url: '../component/component' //从非tabBar主页面跳转到tabBar页面，不可使用navigateTo方法
								// url:'../component/component'
							});
							let userinfo = {
								"username": res.data.data[0].userName,
								"userid": res.data.data[0].id,
							}
							uni.setStorage({
								key: "userinfo",
								data: userinfo,
								success: function() {
									console.log('success');
									// console.log('用户信息是' + userinfo.passwd);
								}
							})
						} else {
							uni.showToast({
								title: '用户名或密码输入错误',
								icon: "none",
							})
						}
					},

				})
			},
		},
	}
</script>
<style lang="scss">
	@import "../../../static/css/login.scss";

	.form {
		.res {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100upx;
			color: rgba($color: #ffffff, $alpha: 0.8);
		}
	}
</style>
