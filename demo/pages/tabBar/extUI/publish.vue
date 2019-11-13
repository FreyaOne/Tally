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
	
	Date.prototype.pattern=function(fmt) {     //日期格式化
	    var o = {         
	    "M+" : this.getMonth()+1, //月份         
	    "d+" : this.getDate(), //日         
	    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
	    "H+" : this.getHours(), //小时         
	    "m+" : this.getMinutes(), //分         
	    "s+" : this.getSeconds(), //秒         
	    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
	    "S" : this.getMilliseconds() //毫秒         
	    };         
	    var week = {         
	    "0" : "/u65e5",         
	    "1" : "/u4e00",         
	    "2" : "/u4e8c",         
	    "3" : "/u4e09",         
	    "4" : "/u56db",         
	    "5" : "/u4e94",         
	    "6" : "/u516d"        
	    };         
	    if(/(y+)/.test(fmt)){         
	        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
	    }         
	    if(/(E+)/.test(fmt)){         
	        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
	    }         
	    for(var k in o){         
	        if(new RegExp("("+ k +")").test(fmt)){         
	            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
	        }         
	    }         
	    return fmt;         
	}     
	
	// var sourceType = [
	// 	['camera'],
	// 	['album'],
	// 	['camera', 'album']
	// ]
	// var sizeType = [
	// 	['compressed'],
	// 	['original'],
	// 	['compressed', 'original']
	// ]
	export default {
		data() {
			return {
				// title: 'choose/previewImage',
				input_content:'',
				userid:'',
				time:'',
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
			uni.getStorage({    //获取缓存
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
			// getLocation(){    //h5中可能不支持
			// 	return new Promise((resolve, reject) => {
			// 		uni.getLocation({
			// 			type: 'wgs84',
			// 			success: function (res) {
			// 				resolve(res);
			// 				this.latitude = res.latitude;
			// 				this.longitude = res.longitude;
			// 			},
			// 			fail: (e) => {  
			// 				reject(e);
			// 			}
			// 		});
			// 	} )
			// },
			async publish(){
				// var myDate = new Date();
				// var time = myDate.Format("yyyy-MM-dd hh:mm:ss");
				// console.log("格式化时间为" + time);
				if (!this.input_content) {
					uni.showModal({ content: '内容不能为空', showCancel: false, });
					return;
				}
				var date = new Date();
				var time = date.pattern("yyyy-MM-dd hh:mm:ss");    //格式化时间
				this.time = time;
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
						this.longitude = res.longitude;
						this.latitude = res.latitude;
				        console.log('当前位置的经度：' + res.longitude);
				        console.log('当前位置的纬度：' + res.latitude);
						// var address = res.address;
						console.log(res.country);
				    }
				});
				// uni.showLoading({title:'发布中'});
				// var location = await this.getLocation();  //位置信息,可删除,主要想记录一下异步转同步处理
				uni.request({   //请求分享
					url: 'http://39.107.125.67:8080/socials',
					dataType:'json',
					method:'POST',
					data:{
						"userId" : this.userid,
						"socialContent" : this.input_content,
						"time": this.time,
						"location" : { 
							"latitude": this.latitude, 
							"longitude" : this.longitude,
						}
					},
					success: (res) => {
						this.text = 'request success';
						console.log("时间是" + date.pattern("yyyy-MM-dd hh:mm:ss"));
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
