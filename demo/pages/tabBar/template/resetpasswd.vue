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
				<input v-model="username" placeholder="请输入用户名" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<!-- <view class="code">
				<input placeholder="请输入验证码" v-model="code" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view> -->
			<view class="password">
				<input placeholder="请输入新密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="btn" @tap="doReset()">重置密码</view>
		</view>

	</view>

</template>

<script>
	export default{
		data(){
			return {
				username:'',
				passwd:'',
			}
		},
		methods:{
			onLoad() {},
			doReset() {
				var self = this;
				var username = this.username;
				var passwd = this.passwd;
				uni.hideKeyboard();
				var uri = 'http://39.107.125.67:8080/forget/' + username + '&' + passwd;
				uni.request({
					url: uri,
					method:'PUT',
					success: (res) => {
						// console.log("111111111" + res.data.code);
						this.text = 'request success';
						if(res.data.code == 0){
							uni.navigateTo({
								url: './login'
							});
						}else{
							uni.showToast({
								title:'无该用户,请重新输入用户名',
								icon:"none",
							})
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
