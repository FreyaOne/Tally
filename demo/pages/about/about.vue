<template>
	<view class="about">
		<form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
				<view class="monetary">金额</view>
				<input class="uni-input" name="input" placeholder="这是一个输入框"/>
			</view>
			<!-- <view class="uni-form-item uni-column">
				<view class="title">switch</view>
				<view>
					<switch name="switch" />
				</view>
			</view> -->
			<view class="uni-form-item uni-column">
				<view class="title">明细类别</view>
				<radio-group name="radio">
					<label>
						<radio value="radio1" /><text>分类1</text>
					</label>
					<label>
						<radio value="radio2" /><text>分类2</text>
					</label>
					<label>
						<radio value="radio2" /><text>分类3</text>
					</label>
					<label>
						<radio value="radio2" /><text>分类4</text>
					</label>
					<label>
						<radio value="radio2" /><text>分类5</text>
					</label>
					<label>
						<radio value="radio2" /><text>分类6</text>
					</label>
				</radio-group>
			</view>
			<view class="uni-title uni-common-pl">日期选择器</view>
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						当前选择
					</view>
					<view class="uni-list-cell-db">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="uni-btn-v">
				<button form-type="submit">确定</button>
				<button type="default" form-type="reset">重置</button>
			</view>
		</form>
		
			<!-- <view class="qrcode">
				<image src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/app_download.png" @longtap="save"></image>
				<text class="tip">扫码体验uni-app</text>
			</view>
			<view class="desc">
				<text class="code">uni-app</text>
				是一个使用 <text class="code">Vue.js</text> 开发跨平台应用的前端框架。
			</view> -->
			<!-- <view class="source">
				<view class="title">本示例源码获取方式：</view>
				<view class="source-list">
					<view class="source-cell">
						<text space="nbsp">1. </text>
						<text>下载 HBuilderX，新建 uni-app 项目时选择 <text class="code">Hello uni-app</text> 模板。</text>
					</view>
					<view class="source-cell">
						<text space="nbsp">2. </text>
						<u-link class="link" :href="'https://github.com/dcloudio/hello-uniapp'" :text="'https://github.com/dcloudio/hello-uniapp'"></u-link>
					</view>
				</view>
			</view> -->
			<!-- #ifdef APP-PLUS -->
			<!--<button type="primary" @click="share">确定</button> -->
			<!-- #endif -->
		<!-- #ifdef APP-PLUS -->
		<view class="version">
			当前版本：{{version}}
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import uLink from "@/components/uLink.vue"
	function getDate(type) {
		const date = new Date();
	
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
	
		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;
	
		return `${year}-${month}-${day}`;
	}
	export default {
		components: {
			uLink
		},
		data() {
			return {
				providerList: [],
				version: '',
				date: getDate({
					format: true
				}),
				startDate:getDate('start'),
				endDate:getDate('end')
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.version = plus.runtime.version;
			uni.getProvider({
				service: 'share',
				success: (result) => {
					const data = [];
					for (let i = 0; i < result.provider.length; i++) {
						switch (result.provider[i]) {
							case 'weixin':
								data.push({
									name: '分享到微信好友',
									id: 'weixin'
								});
								data.push({
									name: '分享到微信朋友圈',
									id: 'weixin',
									type: 'WXSenceTimeline'
								});
								break;
							case 'qq':
								data.push({
									name: '分享到QQ',
									id: 'qq'
								});
								break;
							default:
								break;
						}
					}
					this.providerList = data;
				},
				fail: (error) => {
					console.log('获取分享通道失败' + JSON.stringify(error));
				}
			});
			// #endif
		},
		methods: {
			// #ifdef APP-PLUS
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			save() {
				uni.showActionSheet({
					itemList: ['保存图片到相册'],
					success: () => {
						plus.gallery.save('https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/app_download.png', function() {
							uni.showToast({
								title: '保存成功',
								icon: 'none'
							});
						}, function() {
							uni.showToast({
								title: '保存失败，请重试！',
								icon: 'none'
							});
						});
					}
				});
			},
			share(e) {
				if (this.providerList.length === 0) {
					uni.showModal({
						title: '当前环境无分享渠道!',
						showCancel: false
					});
					return;
				}
				let itemList = this.providerList.map(function(value) {
					return value.name;
				})
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						let provider = this.providerList[res.tapIndex].id;
						uni.share({
							provider: provider,
							scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ?
								'WXSenceTimeline' : "WXSceneSession",
							type: (provider === "qq") ? 1 : 0,
							title: '欢迎体验uni-app',
							summary: 'uni-app 是一个使用 Vue.js 开发跨平台应用的前端框架',
							imageUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/8.jpg',
							href: "https://m3w.cn/uniapp",
							success: (res) => {
								console.log("success:" + JSON.stringify(res));
							},
							fail: (e) => {
								uni.showModal({
									content: e.errMsg,
									showCancel: false
								})
							}
						});
					}
				})
			}
			// #endif
		}
	}
</script>

<style>
	page,
	view {
		display: flex;
	}

	page {
		min-height: 100%;
		background-color: #FFFFFF;
	}

	image {
		width: 360upx;
		height: 360upx;
	}
	.uni-form-item .monetary {
			padding: 20rpx 0;
	},
	.about {
		flex-direction: column;
		flex: 1;
		padding-top: 30upx;
		padding-left: 30upx;
	}

	.content {
		flex: 1;
		padding: 30upx;
		flex-direction: column;
		justify-content: center;
	}

	.qrcode {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.qrcode .tip {
		margin-top: 20upx;
	}

	.desc {
		margin-top: 30upx;
		display: block;
	}

	.code {
		color: #e96900;
		background-color: #f8f8f8;
	}

	button {
		width: 100%;
		margin-top: 40upx;
	}

	.version {
		height: 80upx;
		line-height: 80upx;
		justify-content: center;
		color: #ccc;
	}

	.source {
		margin-top: 30upx;
		flex-direction: column;
	}

	.source-list {
		flex-direction: column;
	}

	.link {
		color: #007AFF;
	}
</style>
