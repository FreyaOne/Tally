<template>
	<view>
	        <view class="logo">
				<view class="img">
					<image mode="widthFix" src="../../../static/logo2.png"></image>
				</view>
			</view>
			<view class="form re">
				<view class="username">
					<!-- <view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view> -->
					<input placeholder="请输入用户名" v-model="username" placeholder-style="color: rgba(255,255,255,0.8);"/>
				</view>
				<!-- <view class="code">
					<input placeholder="请输入验证码" v-model="code" placeholder-style="color: rgba(255,255,255,0.8);"/>
				</view> -->
				<view class="password">
					<input placeholder="请输入密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);"/>
				</view>
				<view class="btn" @tap="doReg">立即注册</view>
				<!-- <view class="res">
					<view @tap="toLogin">已有账号立即登录</view>
				</view> -->
			</view>
			
		</view>
	
</template>

<script>
	export default{
		data() {
			return {
				username: '',
				passwd: '',
				// isShowOauth:false,
			}
		},
		methods:{
			doReg() {
				var self = this;
				var username = this.username;
				var passwd = this.passwd;
				uni.hideKeyboard();
				// 验证用户名
				if(username.toString() == ''){ 
					uni.showToast({title: '用户名不能为空',icon:"none"});
					return false; 
				}
				if(passwd.toString() == ''){
					uni.showToast({title:'密码不能为空',icon:"none"});
					return false;
				}
				if(passwd.toString().length<8){
					uni.showToast({title:'密码长度应至少为8位',icon:"none"});
					return false;
				}
				if(passwd.toString().length>=20){
					uni.showToast({title:'密码长度应小于20位',icon:"none"});
					return false;
				}
				// uni.showLoading({
				// 	title: '注册中...'
				// })
				var uri = 'http://39.107.125.67:8080/register/' + username + '&' + passwd;
				uni.request({
					url: uri,
					method:'POST',
					success: (res) => {
						// console.log("111111111" + res.data.code);
						this.text = 'request success';
						// setTimeout(function () {
						//     uni.hideLoading();
						// }, 5);
						if(res.data.code == 0){
							// console.log(res.data);
							// console.log(res.data.code);
							uni.redirectTo({
								 url: './login'
							});
							console.log("注册成功");
						}else{
							uni.showToast({
								title:res.data.mesg,
								icon:"none",
							});
							// console.log(res.data);
							// console.log(uri);
						}
					},
			
				})
			},
		}
	}
</script>

<style lang="scss">
	@import "../../../static/css/login.scss";
</style>
