<template>
	<view>
		<view class="example-body">
			<uni-search-bar @confirm="search" @input="input" @cancel="cancel" />
			<view class="" style="margin-bottom: 20px;text-align: center;">
			</view>
		</view>
		<view class="uni-padding-wrap uni-common-mt" style="margin-top: 0px;">
			<uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" />
		</view>
		<view class="content">
			<view style="width: 92%;">
				<view>
					<!-- expenditure 外部卡片样式 内嵌记录列表 -->
					<!-- 循环收支记录列表 -->
					<!-- v-show="row.spend >= 0 && current === 0" -->
					<view class="expenditure" v-for="(row,index) in expenditure" :key="index" @tap="select(row)" style="margin-top: 20upx;" v-if="current == 0">
						<view class="uni-padding-wrap uni-common-mt">
							<view class="uni-flex uni-row">
								<!-- 记录左部分（内容 时间）占位70%，右侧（价格类别）为30% -->
								<view class="detail-left" >
									<view class="uni-flex uni-column" style="font-size: 30upx; color: #595BBC;">
										{{row.remarks}}
									</view>
									<view class="uni-flex uni-column" style="font-size: 25upx; color: #BFBEBE;">
										{{row.time}}
									</view>
								</view>
								<view class="detail-right">
									<view class="uni-flex uni-column" style="font-size: 30upx; color:#595BBC; font-weight: bold;" v-if="current == 0">
										{{row.amount}}
									</view>
									<view class="uni-flex uni-column" style="font-size: 25upx; color: #F5B940;">
										{{row.classify}}
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="expenditure" v-for="(row,index) in income" :key="index" @tap="select(row)" style="margin-top: 20upx;" v-if="current == 1">
						<view class="uni-padding-wrap uni-common-mt">
							<view class="uni-flex uni-row">
								<!-- 记录左部分（内容 时间）占位70%，右侧（价格类别）为30% -->
								<view class="detail-left" >
									<view class="uni-flex uni-column" style="font-size: 30upx; color: #595BBC;">
										{{row.remarks}}
									</view>
									<view class="uni-flex uni-column" style="font-size: 25upx; color: #BFBEBE;">
										{{row.time}}
									</view>
								</view>
								<view class="detail-right">
									<view class="uni-flex uni-column" style="font-size: 30upx; color:#DC7004; font-weight: bold;" >
										{{row.amount}}
									</view>
									<view class="uni-flex uni-column" style="font-size: 25upx; color: #F5B940;">
										{{row.classify}}
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- <button @click="cal()">测试</button> -->
					<!-- 筛选日期 -->
					<view class="choseDate">
						<view class="calendar-tags" @click="open">
							<view class="calendar-tags-item calendar-button">
								<image src="/static/img/category/9.png" class="image"/>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
			<uni-calendar ref="calendar" :date="date"  @confirm="confirm" @change="change"/>
		
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniSegmentedControl,
			uniCalendar,
			uniSearchBar
		},
		data() {
			/**
			 * 时间计算
			 */
			function getDate(date, AddMonthCount = 0, AddDayCount = 0) {
				if (typeof date !== 'object') {
					date = date.replace(/-/g, '/')
				}
				let dd = new Date(date)
				dd.setMonth(dd.getMonth() + AddMonthCount) // 获取AddDayCount天后的日期
				dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期
				let y = dd.getFullYear()
				let m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
				let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
				return dd;
			}
			let tags = [
				{
					id: 1,
					name: '自定义当前日期(' + getDate(new Date(), 1) + ')',
					value: getDate(new Date(), 1),
					checked: false,
					attr: 'date'
				}
			]
			
			return {
				searchVal: '', // 搜索
				userinfo : {
					username: '',
					userid: ''
				},
				expenditure: [], //支出
				ex_temp: [],
				recordList:[], //临时存储所有账单
				income: [], //收入
				in_temp: [],
				items: ['支出明细', '收入明细'],
				current: 0,
				activeColor: '#595BBC',
				styleType: 'button',
				tags,
				date: '',
				infoShow: false
			}
		},
		methods: {
			// 初始界面加载 拉取用户信息 及 本用户的所有账单
			onReady(e) {
				//从缓存中读取userinfo
				uni.getStorage({
					key: 'userinfo',
					success: (res) => {
						this.userinfo = res.data
					},
					fail: (e) => {
					}
				});
				let temp;
				//请求ajax 拉取该用户的所有账单
				uni.request({
					url: 'http://39.107.125.67:8080/bill/get/user/' + this.userinfo.userid,
					success: (res) => {
						let recordList = res.data.data;
						this.recordList = recordList
						this.recordList.forEach( item =>{
							// 支出为expenditure 收入为income
							// 对类型进行过滤
						    if(item.category == 1) {
								temp = item.time.toString();
								item.time = temp.substring(0,10)
								this.expenditure.push(item)
							} else {
								temp = item.time.toString();
								item.time = temp.substring(0,10)
								this.income.push(item)
							}
							this.ex_temp = this.expenditure
							this.in_temp = this.income
						});
					}
				})
				console.log(this.ex_temp)
			},
			cal() {
			},
			
			//选择某一条记录 跳转至修改界面
			select(row){
				let recordInfo = {
					userid: this.userinfo.userid,
					recordID: row.id,
					category: row.category,
					classify: row.classify,
					amount: row.amount,
					time: row.time,
					remarks: row.remarks
				}
				uni.setStorage({
					key:'recordInfo',
					data:recordInfo,
					success() {
						console.log(recordInfo)
						uni.navigateTo({
							// 点击某记录后 传递row数据about界面 并区分是edit 还是 add
							url:"/pages/about/about?type=edit"
						})
					}
				});
				
			},
			
			//导航栏的 ‘+’ 号跳转至about，默认type为添加记录 
			onNavigationBarButtonTap(e) {
				uni.navigateTo({
					url: '/pages/about/about?type=add'
				});
			},
			onNavigationBarSearchInputClicked(e) {
				console.log('事件执行了')
				uni.navigateTo({
					url: '/pages/template/nav-search-input/detail/detail'
				});
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
				}
				this.expenditure = this.ex_temp
				this.income = this.in_temp
			},
			change(e) {},
			
			/*
				按照日历查询 confirm
			*/
			confirm(e) {
				this.expenditure = this.ex_temp
				this.income = this.in_temp
				let curr = []
				if(this.current == 0) {
					this.expenditure.forEach( item =>{
						// 支出为expenditure 收入为income
						if(item.time == e.fulldate) {
							curr.push(item)
						}
						this.expenditure = curr
					})
				} else {
					this.income.forEach( item =>{
						// 支出为expenditure 收入为income
					    if(item.time == e.fulldate) {
							curr.push(item)
						}
						this.income = curr
					});
				}
				this.infoShow = true
			},
			
			/* 日历组件 接口自带方法 */
			retract() {
				this.infoShow = !this.infoShow
			},toggle(index, item) {
				this.tags[index].checked = !item.checked
				this.reckon()
			},
			open() {
				this.reckon()
				this.$refs.calendar.open()
			},
			reckon() {
				if (this.tags[0].checked) {
					this.date = this.tags[0].value
				} else {
					this.date = ''
				}
			},
			
			/*-------------------------------------------*/
			
			// 搜索操作 不分类识别
			search(res) {
				this.searchVal = res.value
				this.expenditure = this.ex_temp
				this.income = this.in_temp
				let curr = []
				if(res.value != null ) {
					if(this.current == 0) {
						this.expenditure.forEach( item=> {
							if(item.remarks == this.searchVal || this.searchVal - '0' == item.amount || this.searchVal == item.classify) {
								curr.push(item)
							}
						})
						this.expenditure = curr;
					} else {
						this.income.forEach( item=> {
							if(item.remarks == this.searchVal || this.searchVal - '0' == item.amount || this.searchVal == item.classify) {
								curr.push(item)
							}
						})
						this.income = curr;
					}
				}
			},
			
			// 搜索栏的 取消 功能
			cancel(res) {
				this.expenditure = this.ex_temp
				this.income = this.in_temp
			},
			input(res) {}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #FFFFFF
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}


	.uni-common-mt {
		margin-top: 20upx;
	}

	.content {
		display: flex;
		justify-content: center;
		height: 300upx;
		margin-top: 20upx;
		text-align: center;
	}
	/* 列表外部卡片 */
	.expenditure {
		width: 100%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		height: 140upx;
		padding-top: 15upx;
	}
	
	/* 
		列表 
		1. 左半部左对其
	*/
	.detail-left {
		text-align: left;
		width: 70%;
		height: 50upx;
	}
	.detail-right {
		width: 30%;
		height: 50upx;
	}
	.color-tag {
		width: 50upx;
		height: 50upx;
	}
	
	.choseDate {
		margin-top: 40upx;
	}
	
	.calendar-button
	{
		width: 90upx;
		height:90upx; 
		border-radius: 47upx; 
		font-size: 30upx;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		background-color: #FFFFFF;
		color: #FFFFFF;
		text-align: center;
		justify-content: center;
		display: flex;
		align-items: center;
	}
	.calendar-tags {
		text-align: center;
		justify-content: center;
		display: flex;
		align-items: center;
	}
	.image {
		width: 50upx;
		height: 50upx;
	}
</style>