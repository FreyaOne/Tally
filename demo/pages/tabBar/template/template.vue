<template>
	<!--我的设置界面-->
	<view class="page">
		<view class="logo">
			<view class="img">
				<image mode="widthFix" src="../../../static/tabBar/user.png"></image>
			</view>
			<view>
				<!-- <text style="text-align: center;margin-left: 20px;">{{username}}</text> -->
				<view style="">{{username}}</view>
			</view>
		</view>
		<view class="uni-list">
			<!-- <block v-for="(item,index) in lists" :key="index"> -->
			<view class="uni-list-cell" hover-class="uni-list-cell-hover">
				<view class="uni-triplex-row" style="height: 47px;">
					<view class="uni-triplex-left" style="width:78%">
						<text class="uni-title uni-ellipsis" style="float:left">用户ID</text>
					</view>
					<view class="uni-triplex-right" style="width:22%">
						<text class="uni-title" style="float:right;color: #666666;" v-model="userId">{{userId}}</text>	
					</view>
				</view>
			</view>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover">
				<view class="uni-triplex-row">
					<view class="uni-triplex-left">
						<text class="uni-title uni-ellipsis">我的设置</text>
					</view>
				</view>
			</view>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover">
				<view class="uni-triplex-row">
					<view class="uni-triplex-left">
						<text class="uni-title uni-ellipsis">使用帮助</text>
					</view>
				</view>
			</view>
			<view class="uni-list-cell" hover-class="uni-list-cell-hover">
				<view class="uni-triplex-row">
					<view class="uni-triplex-left">
						<text class="uni-title uni-ellipsis" @tap="remove">退出登录</text>
					</view>
				</view>
			</view>
			<!-- </block> -->
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// title: 'list-triplex-row',
				// lists: [],
				username: "",
				userId:"",
			}
		},
		// onLoad(e){
		// 	console.log("hahahahahhahahaha");
		// 	if(e.username){
		// 		this.username = e.username;
		// 	}
		// },
		onLoad() {
			// var  username;
			let temp;
			uni.getStorage({
				key: 'userinfo',
				success: (res) => {
					console.log("获取成功");
					// console.log("2222131231" + res.data.userid);
					this.username = res.data.username;
					temp = res.data.userid;
					console.log("用户名为" + this.username);
					// console.log("userid为" + this.userid);
				},
				fail: (e) => {
					console.log(e.data);
				}
			});
			
			this.userId = "T" + this.PrefixInteger(temp,8);
		},
		methods: {
			remove() {
				uni.showModal({
					content: "确定要退出该账户吗",
					confirmText: "确定",
					cancelText: "取消",
					success: function(res) {
						if (res.confirm) {
							uni.removeStorage({
								key: 'userinfo',
								success: function(res) {
									console.log('清除本地缓存成功');
								}
							});
							uni.reLaunch({
								url: './untemplate'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			
			PrefixInteger(num, length){
				return ( "0000000000000000" + num ).substr( -length );
			}
		},
	}
</script>

<style lang="scss">
	// @import "../../../static/css/login.scss";
	.logo {
		width: 100%;
		height: 50vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.img {
			width: 25%;
			height: 26vw;

			image {
				width: 100%;
				border-radius: 50%;
			}
		}
	}
</style>
