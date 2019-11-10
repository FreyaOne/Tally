<template>
	<!--我的设置界面-->
	<view class="page">
		<!-- <page-head :title="title" style="height: 250upx;"></page-head> -->
		<!-- <view class="login" style="height: 250upx;">
			<button style="width:100px; margin-top:75upx; padding-left:25px;padding-right: 25px; background-color: #a59adf;" @tap="navigateTo">登 录</button>
		</view> -->
		<view class="logo">
			<view class="img">
				<image mode="widthFix" src="../../../static/tabBar/user.png" @tap="navigateTo"><text style="text-align: center;margin-left: 20px;"
					 v-model="username">{{username}}</text></image>
			</view>
		</view>
		<view class="uni-list">
			<!-- <block v-for="(item,index) in lists" :key="index"> -->
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
						<text class="uni-title uni-ellipsis">退出登录</text>
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
				lists: [],
				username: '点击登录',
			}
		},
		methods: {
			navigateTo() {
				uni.navigateTo({
					url: 'login'
				})
			},
			// doRequire() {
			// 	onLoad(options){
			// 		var data = this.username
			// 		console.log(data)
			// 	}
			// }
		},
		onLoad() {
			let list = [];
			for (let i = 0; i < 9; i++) {
				list.push(i)
			}
			this.lists = list;
		}
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

		.img {
			width: 25%;
			height: 30vw;

			image {
				width: 100%;
				border-radius: 50%;
			}
		}
	}
</style>
