<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
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
			<uni-calendar ref="calendar" :date="date" @confirm="confirm" @change="change" />
		
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		components: {
			uniSegmentedControl,
			uniCalendar
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
				return y + '-' + m + '-' + d
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
				userinfo : {
					username: '',
					userid: ''
				},
				expenditure: [],
				recordList:[],
				income: [],
				items: ['支出明细', '收入明细'],
				current: 0,
				activeColor: '#595BBC',
				styleType: 'button',
				tags,
				date: '',
				startDate: '',
				endDate: '',
				timeData: {
					clockinfo: '',
					date: '',
					fulldate: '',
					lunar: '',
					month: '',
					range: '',
					year: ''
				},
				selected: [],
				infoShow: false,
				showCalendar: false
			}
		},
		methods: {
			onLoad(e) {
				uni.getStorage({
					key: 'userinfo',
					success: (res) => {
						this.userinfo = res.data
					},
					fail: (e) => {
						//this.toLogin(); 
					}
				});
				console.log(this.userinfo.userid)
				uni.request({
					url: 'http://39.107.125.67:8080/bill/get/user/' + this.userinfo.userid,
					success: (res) => {
						let recordList = res.data.data;
						this.recordList = recordList
						this.recordList.forEach( item =>{
							// 支出为expenditure 收入为income
						    if(item.category == 1) {
								this.expenditure.push(item)
							} else {
								this.income.push(item)
							}
						});
					}
				})
			},
			cal() {
				console.log("tets")
			},
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
			onNavigationBarButtonTap(e) {
				uni.navigateTo({
					url: '/pages/about/about?type=add'
				});
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
				}
			},
			change(e) {
				console.log('change 返回:', e)
				this.timeData = e
				this.infoShow = true
			},
			confirm(e) {
				console.log('confirm 返回:', e)
				console.log(this.startDate)
				this.expenditure.forEach( item =>{
					console.log(item.time)
					// 支出为expenditure 收入为income
				    if(item.time == this.timeData.fulldate) {
						this.expenditure = []
						this.expenditure.push(item)
					}
				});
				this.income.forEach( item =>{
					// 支出为expenditure 收入为income
				    if(item.time == this.timeData.fulldate) {
						this.income = []
						this.income.push(item)
					}
				});
				this.infoShow = true
			},
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
			}
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
		background-color: #F5B940;
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
		height: 70upx;
	}
</style>