<template>
	<view class="page" @touchstart="touchStart" @touchend="touchEnd">
		<form>
			<view class="uni-textarea" style="height:180px;">
				<textarea placeholder="这一刻的想法..." v-model="input_content" maxlength="150" style="word-wrap:break-word"/>
				</view>
			<view>
			</view>
			<view class="footer">
				<button type="default" class="feedback-submit" @click="publish()">提交</button>
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
				type: 'add',
				// title: 'choose/previewImage',
				input_content:'',
				userid:'',
				time:'',
				category_type: '',
				// sourceTypeIndex: 2,
				// sizeTypeIndex: 2,
				// countIndex: 8,
				longitude: 0,   //经度
				latitude: 0,   //纬度
				addressRes:'', //存储地址的对象
				address:'', //解析后的地址
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
			
		},
		methods: {
			// 用于接收从 component传递的 用户分享数据
			onLoad(e) {
				// 类型为share时 拉取分享缓存
				this.type = e.type
				if(this.type == 'share') {
					uni.getStorage({
						key: 'userShareInfo',
						success: (res) => {
							let curr = res.data
							switch(curr.category) {
								case 1: this.category_type = '支出'; break;
								case 2: this.category_type = '收入'; break;
								default: this.category_type = '无';
							}
							// textarea内容为自动填充
							let info = '类型: ' + this.category_type + ', 种类: ' + curr.classify + ', 金额: ' + curr.amount + ', 备注: ' + curr.remarks;
							this.input_content = info
						},
						fail: (e) => {
							console.log(e.data);
						}
					});
				}
			},
			onReady(){
				uni.getStorage({    //获取缓存
					key: 'userinfo',
					success: (res) => {
						this.username = res.data.username;
						this.userid = res.data.userid;
					},
					fail: (e) => {
						console.log(e.data);
					}
				});
				
				let long = uni.getStorageSync('longitude');
				let lat = uni.getStorageSync('latitude');
				this.addressRes = uni.getStorageSync('addressRes');
				this.longitude = long;
				this.latitude = lat;
				console.log(long);
				console.log(lat);
				
			},
			publish(){
				console.log(uni.getStorageSync('addressRes').address.city);
				let city = uni.getStorageSync('addressRes').address.city;
				let district = uni.getStorageSync('addressRes').address.district;
				let poiName = uni.getStorageSync('addressRes').address.poiName;
				// console.log("你好");
				// console.log(city);
				// console.log(district);
				// console.log(poiName);
				if (!this.input_content) {
					uni.showModal({ content: '内容不能为空', showCancel: false, });
					return;
				}
				var date = new Date();
				var time = date.pattern("yyyy-MM-dd HH:mm:ss");    //格式化时间
				this.time = time;
				let address = city + "-" + district + "-" + poiName;
				this.address = address;
				// console.log("发表的地址是");
				// console.log(address);
				uni.request({   //请求分享
					url: 'http://39.107.125.67:8080/socials',
					dataType:'json',
					method:'POST',
					data:{
						"userId" : this.userid,
						"socialContent" : this.input_content,
						"time": this.time,
						"address": this.address,
						"location":{ 
							"latitude": this.latitude, 
							"longitude" : this.longitude,
						}
					},
					success: (res) => {
						this.text = 'request success';
						// console.log("时间是" + date.pattern("yyyy-MM-dd hh:mm:ss"));
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
