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
					<view class="expenditure" v-for="(row,index) in expenditure" :key="'info-ex' + index" @tap="select(row)" style="margin-top: 20upx;" v-show="row.spend >=0  && current=== 0">
						<view class="uni-padding-wrap uni-common-mt">
							<view class="uni-flex uni-row">
								<!-- 记录左部分（内容 时间）占位70%，右侧（价格类别）为30% -->
								<view class="detail-left" >
									<view class="uni-flex uni-column" style="font-size: 30upx; color: #595BBC;">
										{{row.content}}
									</view>
									<view class="uni-flex uni-column" style="font-size: 25upx; color: #BFBEBE;">
										{{row.time}}
									</view>
								</view>
								<view class="detail-right">
									<view class="uni-flex uni-column" style="font-size: 30upx; color:#595BBC; font-weight: bold;" >
										{{row.spend}}
									</view>
									<view class="uni-flex uni-column" style="font-size: 25upx; color: #F5B940;">
										{{row.category}}
									</view>
								</view>
							</view>
						</view>
					</view>
					
					<view class="expenditure" v-for="(row,index) in income" :key="'info-in' + index" @tap="select(row)" style="margin-top: 20upx;" v-show="row.spend < 0 && current === 1">
						<view class="uni-padding-wrap uni-common-mt">
							<view class="uni-flex uni-row">
								<!-- 记录左部分（内容 时间）占位70%，右侧（价格类别）为30% -->
								<view class="detail-left" >
									<view class="uni-flex uni-column" style="font-size: 30upx; color: #595BBC;">
										{{row.content}}
									</view>
									<view class="uni-flex uni-column" style="font-size: 25upx; color: #BFBEBE;">
										{{row.time}}
									</view>
								</view>
								<view class="detail-right">
									<view class="uni-flex uni-column" style="font-size: 30upx; color:#DC7004; font-weight: bold;" >
										{{row.spend}}
									</view>
									<view class="uni-flex uni-column" style="font-size: 25upx; color: #F5B940;">
										{{row.category}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				expenditure: [],
				recordList:[],
				income: [],
				items: ['支出明细', '收入明细'],
				current: 0,
				activeColor: '#595BBC',
				styleType: 'button'
			}
		},
		methods: {
			onLoad(e) {
				// 由接口请求后数据存放于recordlist中 花销过滤器
				this.recordList = [
					{ id : 1, content: '这是一个测试', time: '2019年10月1月', spend: 20, category: '运动'},
					{ id : 2, content: '这是一个测试', time: '2019年10月2日', spend: 40, category: '学习'},
					{ id : 3, content: '这是一个测试', time: '2019年10月3日', spend: -50, category: '水果'}
				];
				this.recordList.forEach( item =>{ 
					// 支出为expenditure 收入为income
				    if(item.spend >= 0) {
						this.expenditure.push(item)
					} else {
						this.income.push(item)
					}
				});
			},
			select(row){
				uni.setStorage({
					key:'id',
					data:row,
					success() {
						uni.navigateTo({
							// 点击某记录后 传递row数据about界面 并区分是edit 还是 add
							url:"/pages/about/about?type=edit"
						})
					}
				});
				
			},
			onNavigationBarButtonTap(e) {
				uni.navigateTo({
					url: '/pages/about/about'
				});
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
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


</style>