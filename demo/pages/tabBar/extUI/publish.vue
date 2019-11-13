<template>
	<view class="page" @touchstart="touchStart" @touchend="touchEnd">
		<form>
			<view class="uni-textarea" style="height:180px;">
				<textarea placeholder="这一刻的想法..." v-model="input_content" />
			</view>
			<view>
				
			</view>
			<view class="footer">
				<button type="default" class="feedback-submit" @click="publish">提交</button>
			</view>
		</form>
		<!-- <view v-model="userid"></view> -->
	</view>
</template>

<script>
	import image from '@/commonAboutChat/image.js';
	
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				// title: 'choose/previewImage',
				input_content:'',
				userid:'',
				// sourceTypeIndex: 2,
				// sizeTypeIndex: 2,
				// countIndex: 8,
				longitude: '',   //经度
				latitude: '',   //纬度
				// count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				
				//侧滑返回start
				startX: 0, //点击屏幕起始位置
				movedX: 0, //横向移动的距离
				endX: 0, //接触屏幕后移开时的位置
				//end
			}
		},
		// onUnload() {
		// 		this.sourceTypeIndex = 2,
		// 		this.sizeTypeIndex = 2,
		// 		this.countIndex = 8;
		// },
		mounted(){
			uni.getStorage({
				key: 'userinfo',
				success: (res) => {
					console.log("获取成功");
					// this.username = res.data.username;
					this.userid = res.data.userid;
					console.log("userid为" + this.userid);
				},
				fail: (e) => {
					console.log(e.data);
				}
			});
		},
		
		methods: {
			getLocation(){    //h5中可能不支持
				return new Promise((resolve, reject) => {
					uni.getLocation({
						type: 'wgs84',
						success: function (res) {
							resolve(res);
							this.latitude = res.latitude;
							this.longitude = res.longitude;
						},
						fail: (e) => {  
							reject(e);
						}
					});
				} )
			},
			
			async publish(){
				if (!this.input_content) {
					uni.showModal({ content: '内容不能为空', showCancel: false, });
					return;
				}
				// uni.showLoading({title:'发布中'});
				// var location = await this.getLocation();  //位置信息,可删除,主要想记录一下异步转同步处理
				uni.request({
					url: 'http://39.107.125.67:8080/socials',
					dataType:'json',
					method:'POST',
					data:{
						"userId" : this.userid,
						"socialContent" : this.input_content,
						"time": "2019-11-17 13:34:00",
						"location" : { 
							"latitude": 11.05, 
							"longitude" : 12.01,
						}
					},
					success: (res) => {
						this.text = 'request success';
						if (res.data.code == 0) {
							// console.log("11111" + res.data);
							uni.reLaunch({
								url:'./extUI'
							})
						} else {
							uni.showToast({
								title: '发表出现错误',
								icon: "none",
							})
						}
					},
					fail:(e)=>{
						console.log(e.data);
					}
				
				})
			},
			
			
			close(e){
			    this.imageList.splice(e,1);
			},
			chooseImage: async function() {
				if (this.imageList.length === 9) {
					let isContinue = await this.isFullImg();
					console.log("是否继续?", isContinue);
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {

						// #ifdef APP-PLUS
						//提交压缩,因为使用了H5+ Api,所以自定义压缩目前仅支持APP平台
						var compressd = cp_images=> {
							this.imageList = this.imageList.concat(cp_images)//压缩后的图片路径
						}
						image.compress(res.tempFilePaths,compressd);
						// #endif
						
						// #ifndef APP-PLUS
						this.imageList = this.imageList.concat(res.tempFilePaths)//非APP平台不支持自定义压缩,暂时没有处理,可通过uni-app上传组件的sizeType属性压缩
						// #endif
						
					}
				})
			},
			isFullImg: function() {
				return new Promise((res) => {
					uni.showModal({
						content: "已经有9张图片了,是否清空现有图片？",
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
								res(true);
							} else {
								res(false)
							}
						},
						fail: () => {
							res(false)
						}
					})
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			touchStart: function(e) {
				this.startX = e.mp.changedTouches[0].pageX;
			},
			
			touchEnd: function(e) {
				this.endX = e.mp.changedTouches[0].pageX;
				if (this.endX - this.startX > 200) {
					uni.navigateBack();
				}
			}
		}
	}
</script>

<style scoped>
	
	.footer {
		margin-top: 80upx;
	}
	
	.cell-pd {
		padding: 20upx 30upx;
	}

	.uni-textarea {
		width: auto;
		padding: 20upx 25upx;
		line-height: 1.6;
		height: 150upx;
	}
	.uni-list::before {
		height: 0;
	}
	.uni-list:after {
		height: 0;
	}
	.list-pd {
		margin-top: 0;
	}
	.close-view{
	    text-align: center;
		line-height:30upx;
		height: 35upx;
		width: 35upx;
		background: #ef5350;
		color: #FFFFFF;
		position: absolute;
		top: 1upx;
		right: 1upx;
		font-size: 35upx;
		border-radius: 8upx;
	}
	.page {
		width: 750upx;
		height: 100%;
	}
</style>
