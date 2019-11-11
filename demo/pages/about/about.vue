<template>
	<view class="about">
		<view class="uni-padding-wrap uni-common-mt" style="align-items: center; display: flex; justify-content: center;">
			<view class="record-card">
				<form @submit="formSubmit" @reset="formReset">
					<!-- 消费金额 手动输入 -->
					<view class="uni-form-item uni-column">
						<view class="monetary">金额</view>
						<input class="uni-input" name="input" v-model="amount" placeholder-style="color: #BFBEBE" placeholder="请输入金额"/>
					</view>
					<view class="uni-form-item uni-column">
						<view class="monetary">备注</view>
						<input class="uni-input" name="input" v-model="remarks" placeholder-style="color: #BFBEBE" placeholder="备注..."/>
					</view>
					
					<view class="uni-form-item uni-column">
						<view class="catagory">收入 or 支出：<text style="margin-left: 30upx; color: #F5B940;">{{category_type}}</text></view>
						<view class="example-body">
							<uni-grid :column="3" :highlight="true" @change="changeCl">
								<uni-grid-item v-for="(item, index) in list1" :key="index" :value="item.key">
									<image :src="item.url" class="image" mode="aspectFill" />
									<text class="text" value="">{{ item.category }}</text>
								</uni-grid-item>
							</uni-grid>
						</view>
					</view>
					<!-- 收入/支出类型 -->
					<view class="uni-form-item uni-column">
						<view class="catagory">类型选择：<text style="margin-left: 30upx; color: #F5B940;">{{classify_type}}</text></view>
						<view class="example-body">
							<uni-grid :column="3" :highlight="true" @change="changeCate">
								<uni-grid-item v-for="(item, index) in list2" :key="index" :value="item.classify">
									<image :src="item.url" class="image" mode="aspectFill" />
									<text class="text" value="">{{ item.classify }}</text>
								</uni-grid-item>
							</uni-grid>
						</view>
					</view>
					
					<!-- 日期选择 -->
					<view class="uni-form-item uni-column" v-show="editType == 'edit'">
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
					
					<!-- 修改记录按钮 -->
					<view class="button-area" v-show="this.editType == 'edit'" style="flex-direction: column; justify-content: space-between;">
						<view class="uni-btn-v" style="width: 50%; align-items: center; display: flex;">
							<button @tap="edit" style="height: 70upx; font-size: 27upx; margin-right: 20upx;">修改</button>
							<button @tap="del" style="height: 70upx; font-size: 27upx; background-color: #DD524D;">删除</button>
						</view>
					</view>
					
					<!-- 新建记录传递 -->
					<view class="button-area" v-show="this.editType == 'add'">
						<view class="uni-btn-v" style="width: 50%; align-items: center; display: flex; flex-direction: column;">
							<button @tap="save" style="height: 70upx; font-size: 30upx;">新建</button>
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
	const recordInfo = ''
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
	// const data = {
	// 	"money": null,
	// 	"content": null,
	// 	"category": null,
	// 	"classify": null
	// }
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		data() {
			return {
				list1: [{
						url: '/static/img/category/7.png',
						category: '支出',
						key: 1
					},
					{
						url: '/static/img/category/6.png',
						category: '收入',
						key: 2
					}
				],
				list2: [{
						url: '/static/img/category/7.png',
						classify: '学习',
						key: 1
					},
					{
						url: '/static/img/category/6.png',
						classify: '运动',
						key: 2
					},
					{
						url: '/static/img/category/2.png',
						classify: '交通',
						key: 3
					},
					{
						url: '/static/img/category/1.png',
						classify: '衣服',
						key: 4
					},
					{
						url: '/static/img/category/4.png',
						classify: '工具',
						key: 5
					},
					{
						url: '/static/img/category/5.png',
						classify: '食物',
						key: 6
					}
				],
				userid: '',
				recordID: '',
				editType: '',
				date: getDate({
					format: true
				}),
				
				// 作为表单内容回传
				remarks: '',
				// 金额需要转成整数
				amount: '',
				category_key: 1,
				classify_key: 1,
				category_type: '支出',
				classify_type: '学习',
				startDate:getDate('start'),
				endDate:getDate('end')
			}
		},
		
		// 接收由component传的数据
		onLoad(e) {
			this.editType = e.type;
			console.log(this.editType)
			if(e.type == 'edit') {
				uni.getStorage({
					key:'recordInfo',
					success: (e) => {
						this.userid = e.data.userid;
						this.recordID = e.data.recordID;
						this.remarks = e.data.remarks;
						this.amount = e.data.amount;
						this.category_key = e.data.category;
						this.classify_type = e.data.classify;
					}
				})
			} else {
				uni.getStorage({
					key:'userinfo',
					success: (e) => {
						this.userid = e.data.userid;
					}
				})
			}
		},
		methods: {
			// 获取表单数据 存入data
			// 添加
			save(){
				let data={
					// string转number,content可以省略,
					// 支出为1 收入为2
					"amount": this.amount - '0',
					"remarks":this.remarks, 
					"category":this.category_key, 
					"classify": this.classify_type
				};
				console.log(data)
				if(this.editType=='edit'){
					data.id = this.id
				}
				if(!data.amount){
					uni.showToast({title:'请输入金额',icon:'none'});
					return ;
				}
				if(!data.remarks){
					// uni.showToast({title:'请输入备注',icon:'none'});
					data.remarks = '未备注'
					// return ;
				}
				uni.request({
					url: 'http://39.107.125.67:8080/bill/add/' + this.userid + '&' + data.category + '&' + encodeURI(data.classify) + '&' + data.amount + '&' + encodeURI(data.remarks),
					method: 'POST',
					success: (res) => {
						uni.reLaunch({
							url:"/pages/tabBar/component/component"	
						})
					}
				})
				//实际应用中请提交ajax,模板定时器模拟提交效果
				
			},
			edit(){
				console.log("我点击了修改")
				let data={
					"amount": this.amount - '0',
					"remarks":this.remarks, 
					"category":this.category_key, 
					"classify": this.classify_type
				};
				if(this.editType=='edit'){
					data.id = this.id
				}
				if(!data.amount){
					uni.showToast({title:'请输入金额',icon:'none'});
					return ;
				}
				if(!data.remarks){
					data.remarks = '未备注'
				}
				uni.request({
					url: 'http://39.107.125.67:8080/bill/update/' + this.userid + '&' + this.date + '&' + data.category + '&' + encodeURI(data.classify) + '&' + data.amount + '&' + encodeURI(data.remarks),
					method: 'POST',
					success: (res) => {
						uni.reLaunch({
							url:"/pages/tabBar/component/component"	
						})
					}
				})
				//实际应用中请提交ajax,模板定时器模拟提交效果
				
			},
			del(){
				console.log("带删除id" + this.recordID)
				uni.showModal({
					title: '删除提示',
					content: '你将删除这条记录',
					success: (res)=>{
						if (res.confirm) {
							uni.request({
								url: 'http://39.107.125.67:8080/bill/delete/' + this.recordID,
								method: 'DELETE',
								success: (res) => {
									uni.reLaunch({
										url:"/pages/tabBar/component/component"	
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
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
			// 类型选择
			changeCate(e) {
				let {
					index
				} = e.detail
				this.classify_key = index - '0' + 1
				// 显示用户选择
				switch(this.classify_key) {
					// category_type是为了给用户看的 且回传给数据库
					case 1: this.classify_type = '学习'; break;
					case 2: this.classify_type = '运动'; break;
					case 3: this.classify_type = '交通'; break;
					case 4: this.classify_type = '衣服'; break;
					case 5: this.classify_type = '工具'; break;
					case 6: this.classify_type = '食物'; break;
					default: this.classify_type = '无';
				}
			},
			// 收入支出选择
			changeCl(e) {
				let {
					index
				} = e.detail
				console.log(this.category_key)
				this.category_key = index - '0' + 1
				switch(this.category_key) {
					// 给用户选择 回传数据库使用string
					case 1: this.category_type = '支出'; break;
					case 2: this.category_type = '收入'; break;
					default: this.category_type = '无';
				}
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
	}
	
	button {
		width: 50%;
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
		height: 1350upx;
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
