<template>
	<view class="about">
		<view class="uni-padding-wrap uni-common-mt" style="align-items: center; display: flex; justify-content: center;">
			<view class="record-card">
				<form @submit="formSubmit" @reset="formReset">
					<!-- 消费金额 手动输入 -->
					<view class="uni-form-item uni-column">
						<view class="monetary">金额</view>
						<input class="uni-input" name="input" v-model="content" placeholder-style="color: #BFBEBE" placeholder="请输入金额"/>
					</view>
					<!-- 花销类型 -->
					<view class="uni-form-item uni-column">
						<view class="catagory">类型选择</view>
						<view class="example-body">
							<uni-grid :column="3" :highlight="true" @change="change">
								<uni-grid-item v-for="(item, index) in list" :key="index" :value="item.category">
									<image :src="item.url" class="image" mode="aspectFill" />
									<text class="text" value="">{{ item.category }}</text>
								</uni-grid-item>
							</uni-grid>
						</view>
					</view>
					<view class="uni-form-item uni-column">
					<!-- 日期选择 -->
						<view class="uni-list" style="height: 80upx;">
							<view class="uni-list-cell">
								<view class="uni-list-cell-left" style="margin-top: 15upx;">
									选择时间
								</view>
								<view class="uni-list-cell-db" style="height: 50upx;">
									<!-- 时间选择器高度50upx -->
									<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
										<view class="uni-input" style="font-size: 30upx;">{{date}}</view>
									</picker>
								</view>
							</view>
						</view>
					</view>
					<view class="save" @tap="save">
						<view class="btn">
							保存地址
						</view>
					</view>
					<view class="button-area">
						<view class="uni-btn-v" style="width: 50%; align-items: center; display: flex; flex-direction: column;">
							<button form-type="submit" style="height: 70upx; font-size: 30upx;">确定</button>
						</view>
					</view>
				</form>
			</view>
		</view>
	</view>
</template>
<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
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
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				list: [{
						url: '/static/img/category/7.png',
						category: '学习'
					},
					{
						url: '/static/img/category/6.png',
						category: '运动'
					},
					{
						url: '/static/img/category/2.png',
						category: '交通'
					},
					{
						url: '/static/img/category/1.png',
						category: '衣服'
					},
					{
						url: '/static/img/category/4.png',
						category: '工具'
					},
					{
						url: '/static/img/category/5.png',
						category: '食物'
					}
				],
				date: getDate({
					format: true
				}),
				// 作为表单内容回传
				content: '',
				category: 0,
				startDate:getDate('start'),
				endDate:getDate('end')
			}
		},
		
		// 接收由component传的数据
		onLoad(e) {
			this.editType = e.type;
			if(e.type == 'edit') {
				uni.getStorage({
					key:'id',
					success: (e) => {
						console.log(e.data)
					}
				})
			}
		},
		methods: {
			// 获取表单数据 存入data
			save(){
				let data={"content":this.content, "category":this.category}
				console.log(data.content)
				console.log(data.category)
			},
			formSubmit: function(e) {
				// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			
			formReset: function(e) {
				console.log('清空数据')
			},
			// 种类选择
			change(e) {
				let {
					index
				} = e.detail
				this.category = index
				console.log(index)
			},
			// 日期选择器
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			}
		}
	}
</script>

<style>
	
	.uni-form-item .monetary {
		padding: 20rpx 0;
		margin-left: 35upx;
		color: #595BBC;
		
	}
	.picktime {
		margin-left: 35upx;
		margin-bottom: 10upx;
		color: #595BBC;
	}
	.uni-form-item .catagory {
		margin-left: 35upx;
		margin-top: 15upx;
		color: #595BBC;
	}
	.uni-input {
		height: 40upx;
		width: 80%;
		margin-left: 20upx;
		background-color:#F9F9F9;
		color: #F5B940;
	}
	.uni-list-cell-left {
		color: #595BBC;
	}
	.about {
		width: 100%;
		flex-direction: column;
		/* flex: 1; */
		display: flex;
		/*!*flex-direction: column;*!可写可不写*/
		align-items: center;
	}
	.button-area {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 20upx;
	}
	
	button {
		width: 100%;
		background-color: #595BBC;
		color: #FFFFFF;
		font-size: 40upx;
	}
	
	.record-card {
		width: 92%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		height: 140upx;
		padding-top: 15upx;
		margin-top: 25upx;
		height: 1000upx;
	}
	
	/* 九宫格 */
	.example {
		padding: 0 30upx 30upx
	}
	
	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}
	
	.example-title__after {
		position: relative;
		color: #031e3c
	}
	
	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}
	
	.example .example-title {
		margin: 40upx 0
	}
	
	.example-body  {
		padding: 30upx;
		background: #fff
	}
	
	
	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}
	
	.image {
		width: 50upx;
		height: 50upx;
	}
	
	.text {
		font-size: 26upx;
		margin-top: 10upx;
		color: #F5B940;
	}
</style>
