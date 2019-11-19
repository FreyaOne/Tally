<template>
	<view id="moments">
		<view class="moments__post" v-for="(row, index) in chatList" :key="index">
			<view class="post_right" style="width: 98%;">
				<text class="post-username" v-model="username">{{row.userName}}</text>
				<view id="paragraph" class="paragraph" v-model="content" stype="width: 100%"><text>{{row.socialContent}}</text></view>
				<view class="toolbar">
					<view class="timestamp" v-model="time">{{row.time}}</view>
					<view id="deleteShare" style="color:#36648b;font-size:10px;margin-left:5px;" v-show="userid == row.userId" @tap="deleteShare(index)">删除</view>
					<view class="like" @click="like(index)">
						<image :src="row.praise==false?'../../../static/indexAboutChat/islike.png':'../../../static/indexAboutChat/like.png'"></image>
						<!-- <image src='../../../static/indexAboutChat/islike.png'></image> -->
					</view>
					<view class="comment" @click="comment(index)">
						<image src="../../../static/indexAboutChat/comment.png"></image>
					</view>
				</view>
				<view class="address">
					<view style="font-size:11px;margin-top:5px;color:#828282">{{row.address}}</view>
				</view>
				<!-- 赞／评论区 -->
				<view class="post-footer" style="margin-top:10px;">
					<view class="footer_content" v-for="(row_comment,com_index) in row.comments" :key="com_index" @longpress="deleteReview(index,com_index)" style="word-wrap:break-all">
						<text id="comment-nickname" style="word-wrap:break-all;width: 100%;font-size:12px;">{{row_comment.userName}}: <text class="comment-content" style="word-wrap:break-all;width: 200upx;">{{row_comment.commentContent}}</text></text>
					</view>
				</view>
			</view>
			<!-- 结束 post -->
		</view>

		<view class="foot" v-show="showInput">
			<chat-input :focus="focus" @blur="blur" :placeholder="input_placeholder"></chat-input>
			<!-- <chat-input @send-message="send_comment" @blur="blur" :placeholder="input_placeholder"></chat-input> -->
		</view>
		<!-- <view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view> -->
	</view>

</template>

<script>
	import chatInput from '../../../components/im-chat/chatinput.vue'; //input框

	export default {
		components: {
			chatInput
		},
		data() {
			return {
				// posts: postData, //模拟数据
				userid: '',
				username: '',
				latitude: 0,
				longitude: 0,
				content: '',
				time: '',
				index: '',
				com_index: '',
				click_id: '',
				comment_index: '',
				chatList: [],
				address:'',   //用户发表动态的地址
				ob:'',  //存储地址的对象
				// is_like:'',
				input_placeholder: '评论', //占位内容
				focus: false, //是否自动聚焦输入框
				// blur:false,
				is_reply: false, //回复还是评论
				showInput: false, //评论输入框
				screenHeight: '', //屏幕高度(系统)
				platform: '',
				windowHeight: '', //可用窗口高度(不计入软键盘)
				// loadMoreText: "加载中...",
				showLoadMore: false,
			}
		},
		mounted() {

		},
		onLoad() {
			uni.getSystemInfo({ //获取设备信息
				success: (res) => {
					this.screenHeight = res.screenHeight;
					this.platform = res.platform;
				}
			});
			uni.startPullDownRefresh();
		},
		onShow() {
			uni.onWindowResize((res) => { //监听窗口尺寸变化,窗口尺寸不包括底部导航栏
				if(this.platform === 'ios'){
					this.windowHeight = res.size.windowHeight;
					this.adjust();
				}else{
					if (this.screenHeight - res.size.windowHeight > 60 && this.windowHeight <= res.size.windowHeight) {
						this.windowHeight = res.size.windowHeight;
						this.adjust();
					}
				}
			});
		},
		onHide() {
			uni.offWindowResize(); //取消监听窗口尺寸变化
		},
		// onUnload() {
		// 	this.max = 0,
		// 		this.data = [],
		// 		this.loadMoreText = "加载更多",
		// 		this.showLoadMore = true;
		// },
		onReady() { //打开页面时获取全部全部社区内容
			uni.getStorage({
				key: 'userinfo',
				success: (res) => {
					// console.log("获取成功");
					this.userid = res.data.userid;
					this.username = res.data.username;
				},
				fail: (e) => {
					console.log(e.data);
				}
			});
			this.longitude = uni.getStorageSync('longitude');
			this.latitude = uni.getStorageSync('latitude');
			// console.log("输出城市");
			// this.ob = uni.getStorageSync('addressRes');
			// this.address = this.ob.address.city;
			// console.log(this.address);
			console.log("123213 " + this.userid);
			var uri = 'http://39.107.125.67:8080/socials/v1/' + this.latitude + '&' + this.longitude + '&' + this.userid;
			console.log("url是");
			console.log(uri);
			uni.request({
				url: uri,
				success: (res) => {
					console.log("URL是" + uri);
					// this.text = 'request success';
					if (res.data.code == 0) {
						this.chatList = res.data.data;
						uni.setStorageSync('chatList', this.chatList);
						// for(let i in this.chatList){
						console.log("新的");
						console.log(this.chatList);
						// console.log(this.chatList[i].location.longitude);
						// }
					}
				},
				fail: (e) => {
					console.log(e.data);
				}

			});
			// console.log("输出");
			// console.log(this.chatList);
			// this.address = uni.getStorageSync('city') + '-' + uni.getStorageSync('district') + ' ' + uni.getStorageSync('poiName')
		},
		// onReachBottom() { //监听上拉触底事件
		// 	console.log('onReachBottom');
		// 	this.showLoadMore = true;
		// 	setTimeout(() => {
		// 		//获取数据
		// 		if (this.chatList.length < 20) { //测试数据
		// 			// this.chatList = this.chatList.concat(this.chatList);
		// 		} else {
		// 			this.loadMoreText = "暂无更多";
		// 		}
		// 	}, 1000);
		// },
		onPullDownRefresh() { //监听下拉刷新动作
			console.log('onPullDownRefresh');
			// 这里获取数据
			setTimeout(function() {
				//初始化数据
				uni.stopPullDownRefresh(); //停止下拉刷新
			}, 1000);
		},
		onNavigationBarButtonTap(e) { //监听标题栏点击事件
			if (e.index == 0) {
				this.navigateTo('../publish/publish')
			}
		},
		computed: {

		},
		methods: {
			blur: function() {
				this.init_input();
			},
			init_input() {
				this.showInput = false;
				this.focus = false;
				this.input_placeholder = '评论';
				this.is_reply = false;
			},
			deleteReview(index, com_index) {
				this.index = index;
				this.com_index = com_index;
				console.log("测试评论，");
				console.log(this.chatList[index].comments[com_index].userId);
				console.log("31213" + this.userid);
				if (this.chatList[index].comments[com_index].userId == this.userid) {
					uni.showModal({
						content: "确定要删除该条评论吗",
						cancelText: "取消",
						confirmText: "确定",
						success: (res) => {
							if (res.confirm) {
								console.log("评论");
								console.log(this.chatList[index].comments[com_index]);
								uni.request({
									url:'http://39.107.125.67:8080/comments/' + this.chatList[index].comments[com_index].commentId + '&' + this.chatList[index].comments[com_index].userId,
									method:'DELETE',
									success: (res) => {
										console.log("评论");
										console.log(this.chatList[index].comments);
										this.chatList[index].comments.splice(com_index,1);
										uni.showToast({
											title: '删除成功',
											icon: "none",
											duration: 1500,
										});
									}
								});
							} else {
							}
						}
					})
				}
			},
			deleteShare(index) {
				this.index = index;
				uni.showModal({
					content: "确定要删除该条分享吗",
					cancelText: "取消",
					confirmText: "确定",
					success: (res) => {
						if (res.confirm) {
							// console.log(this.chatList);
							// console.log(chatList[index].socialId);
							uni.request({
								url: 'http://39.107.125.67:8080/socials/' + this.chatList[index].socialId,
								method: 'DELETE',
								success: (res) => {
									// console.log("laldasda" + res.data.code)
									if (res.data.code == 0) {
										console.log("删除");
										console.log("什么鬼");
										// console.log(this.chatList[index]);
										this.chatList.splice(index, 1);
										uni.showToast({
											title: '删除成功',
											icon: "none",
											duration: 1500,
										});
										// Window.Location.reload();
									}
									return false;
								}
							});
						}
					}
				})
			},
			like(index) {
				this.index = index;
				if (this.chatList[index].praise == true) {
					this.chatList[index].praise = false;
					console.log("2311userid是" + this.userid);
					console.log("index是" + this.index);

					uni.request({
						url: 'http://39.107.125.67:8080/praise',
						dataType: 'json',
						method: 'DELETE',
						data: {
							"userId": this.userid,
							"socialId": this.chatList[index].socialId,
						},
						success: (res) => {
							this.text = 'request success';
							if (res.data.code == 0) {
								// console.log("2222\\\\" + this.chatList[index].praise);
								console.log("取消点赞成功");
							} else {
								console.log("取消点赞失败");
								console.log(res.data);
							}
						},
						fail: (e) => {
							console.log(e.data);
						},
					})
				} else {
					this.chatList[index].praise = true;
					// console.log("userid是" + this.userid);
					// console.log("index是" + this.chatList[index].socialId);
					uni.request({
						url: 'http://39.107.125.67:8080/praise',
						dataType: 'json',
						method: 'POST',
						data: {
							"userId": this.userid,
							"socialId": this.chatList[index].socialId,
						},
						success: (res) => {
							// this.text = 'request success';
							if (res.data.code == 0) {
								console.log("1111\\\\" + this.chatList[index].praise);
								console.log("点赞成功");
							} else {
								console.log("点赞失败");
								console.log(res.data);
							}
						},
						fail: (e) => {
							console.log(e.data);
						}
					})
				}
			},
			comment(index) {
				this.showInput = true; //调起input框
				this.focus = true;
				this.index = index;
				uni.setStorageSync('index', this.index);
			},
			// adjust() { //当弹出软键盘发生评论动作时,调整页面位置pageScrollTo
			// 	return;
			// 	uni.createSelectorQuery().selectViewport().scrollOffset(res => {
			// 		var scrollTop = res.scrollTop;
			// 		let view = uni.createSelectorQuery().select("#post-" + this.index);
			// 		view.boundingClientRect(data => {
			// 			console.log("data:" + JSON.stringify(data));
			// 			console.log("手机屏幕高度:" + this.screenHeight);
			// 			console.log("竖直滚动位置" + scrollTop);
			// 			console.log("节点离页面顶部的距离为" + data.top);
			// 			console.log("节点高度为" + data.height);
			// 			console.log("窗口高度为" + this.windowHeight);

			// 			uni.pageScrollTo({
			// 				scrollTop: scrollTop - (this.windowHeight - (data.height + data.top + 45)), //一顿乱算
			// 				// scrollTop: 50, 
			// 				duration: 300
			// 			});
			// 		}).exec();
			// 	}).exec();
			// },
		}, //methods
		navigateTo(url) {
			uni.navigateTo({
				url: url
			});
		},
		
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/tabBar/extUI/publish'
			});
		},
	}
</script>

<style scoped>
	@import url("../../../commonAboutChat/index/index.css");
	/* .page {
		width: 92%
	} */
	#paragraph{
		word-wrap:break-word;
		/* width: 300upx; */
	}
	.post-footer {
		word-wrap:break-word;
	}
	
	/* .comment-nickname{
		word-wrap:break-word;
	} */
	/* #comment-content{
		word-wrap:break-word;
	} */
</style>
