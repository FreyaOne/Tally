<template>
	<view id="moments">
		<view class="moments__post" v-for="(row, index) in chatList" :key="index">
			<view class="post_right">
				<text class="post-username" v-model="username">{{row.userName}}</text>
				<view id="paragraph" class="paragraph" v-model="content">{{row.socialContent}}</view>
				<view class="toolbar">
					<view class="timestamp" v-model="time">{{row.time}}</view>
					<!-- <view class="like" @tap="like(index)"> -->
					<view class="like">
						<!-- <image :src="islike===0?'../../../static/indexAboutChat/islike.png':'../../../static/indexAboutChat/like.png'"></image> -->
						<image src='../../../static/indexAboutChat/islike.png'></image>
					</view>
					<view class="comment" @tap="comment(index)">
						<image src="../../../static/indexAboutChat/comment.png"></image>
					</view>
				</view>
				<!-- 赞／评论区 -->
				<!-- <view class="post-footer">
					<view class="footer_content" v-for="(comment,comment_index) in post.comments.comment" :key="comment_index" @tap="reply(index,comment_index)">
						<text class="comment-nickname">{{commentUsername}}: <text class="comment-content">{{commentContent}}</text></text>
					</view>
				</view> -->
			</view>
			
			<!-- 结束 post -->
		</view>

		<view class="foot" v-show="showInput">
			<chat-input @send-message="send_comment" @blur="blur" :focus="focus" :placeholder="input_placeholder"></chat-input>
			<!-- <chat-input @send-message="send_comment" @blur="blur" :placeholder="input_placeholder"></chat-input> -->
		</view>
		<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
	</view>

</template>

<script>
	import chatInput from '../../../components/im-chat/chatinput.vue'; //input框
	// import postData from '../../../commonAboutChat/index/index.post.data.js'; //朋友圈数据

	export default {
		components: {
			chatInput
		},
		data() {
			return {
				// posts: postData, //模拟数据
				userid: '',
				username: '',
				latitude: 11.05,
				longitude : 12.01,
				content: '',
				time:'',
				index: '',
				comment_index: '',
				chatList:[],

				input_placeholder: '评论', //占位内容
				focus: false, //是否自动聚焦输入框
				is_reply: false, //回复还是评论
				showInput: false, //评论输入框

				screenHeight: '', //屏幕高度(系统)
				platform: '',
				windowHeight: '', //可用窗口高度(不计入软键盘)

				loadMoreText: "加载中...",
				showLoadMore: false,
			}
		},
		mounted() {
			// let chatList;
			uni.getStorage({
				key: 'userinfo',
				success: (res) => {
					console.log("获取成功");
					this.userid = res.data.userid;
					this.username = res.data.username;
				},
				fail: (e) => {
					console.log(e.data);
				}
			});
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
				if (this.platform === 'ios') {
					this.windowHeight = res.size.windowHeight;
					this.adjust();
				} else {
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
		onUnload() {
			this.max = 0,
				this.data = [],
				this.loadMoreText = "加载更多",
				this.showLoadMore = false;
		},
		// onReachBottom() { //监听上拉触底事件
		// 	console.log('onReachBottom');
		// 	this.showLoadMore = true;
		// 	setTimeout(() => {
		// 		//获取数据
		// 		if (this.posts.length < 20) { //测试数据
		// 			this.posts = this.posts.concat(this.posts);
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
			onReady(){
				var uri = 'http://39.107.125.67:8080/socials/v1/'+ this.latitude + '&' + this.longitude +'&' + this.userid;
				uni.request({
					url:uri,
					success: (res) => {
						console.log("URL是" + this.uri);
						// this.text = 'request success';
						if (res.data.code == 0) {
							this.chatList = res.data.data
							console.log(res.data.data);
							// uni.switchTab({
							// 	url: './extUI' //从非tabBar主页面跳转到tabBar页面，不可使用navigateTo方法	
							// });
						}
					},
					fail: (e) => {
						console.log(e.data);
					}
				
				})
			},
			test() {
				this.navigateTo('../test/test');
			},
			navigateTo(url) {
				uni.navigateTo({
					url: url
				});
			},
			// like(index) {
			// 	if (this.islike === 0) {
			// 		this.posts[indislike = 1;
			// 		this.posts[index].like.push({
			// 			"uid": this.user_id,
			// 			"username": "," + this.username
			// 		});
			// 	} else {
			// 		this.posts[index].islike = 0;
			// 		this.posts[index].like.splice(this.posts[index].like.indexOf({
			// 			"uid": this.user_id,
			// 			"username": "," + this.username
			// 		}), 1);
			// 	}
			// },
			comment(index) {
				this.showInput = true; //调起input框
				this.focus = true;
				this.index = index;
			},
			adjust() { //当弹出软键盘发生评论动作时,调整页面位置pageScrollTo
				return;
				uni.createSelectorQuery().selectViewport().scrollOffset(res => {
					var scrollTop = res.scrollTop;
					let view = uni.createSelectorQuery().select("#post-" + this.index);
					view.boundingClientRect(data => {
						console.log("data:" + JSON.stringify(data));
						console.log("手机屏幕高度:" + this.screenHeight);
						console.log("竖直滚动位置" + scrollTop);
						console.log("节点离页面顶部的距离为" + data.top);
						console.log("节点高度为" + data.height);
						console.log("窗口高度为" + this.windowHeight);

						uni.pageScrollTo({
							scrollTop: scrollTop - (this.windowHeight - (data.height + data.top + 45)), //一顿乱算
							// scrollTop: 50, 
							duration: 300
						});
					}).exec();
				}).exec();
			},
			// reply(index, comment_index) {
			// 	this.is_reply = true; //回复中
			// 	this.showInput = true; //调起input框
			// 	let replyTo = this.posts[index].comments.comment[comment_index].username;
			// 	this.input_placeholder = '回复' + replyTo;
			// 	this.index = index; //post索引
			// 	this.comment_index = comment_index; //评论索引
			// 	this.focus = true;
			// },
			// blur: function() {
			// 	this.init_input();
			// },
			// send_comment: function(message) {

			// 	if (this.is_reply) {
			// 		var reply_username = this.posts[this.index].comments.comment[this.comment_index].username;
			// 		var comment_content = '回复' + reply_username + ':' + message.content;
			// 	} else {
			// 		var comment_content = message.content;
			// 	}
			// 	this.posts[this.index].comments.total += 1;
			// 	this.posts[this.index].comments.comment.push({
			// 		"uid": this.user_id,
			// 		"username": this.username,
			// 		"content": comment_content //直接获取input中的值
			// 	});
			// 	this.init_input();
			// },
			init_input() {
				this.showInput = false;
				this.focus = false;
				this.input_placeholder = '评论';
				this.is_reply = false;
			},
			previewImage(imageList, image_index) {
				var current = imageList[image_index];
				uni.previewImage({
					current: current,
					urls: imageList
				});
			},
			goPublish() {
				uni.navigateTo({
					url: './publish/publish',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
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
</style>
