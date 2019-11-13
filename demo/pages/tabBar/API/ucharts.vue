<template>
	<view class="qiun-columns">
		<!-- 顶部展示卡 -->
		<view class="top-card">
			<view style="width: 20%;margin-left: 20upx;height: 80upx;">
				<image src="/static/img/category/8.png" class="image"/>
				<text class="topImage" value=""></text>
			</view>
			 <view style="width: 60%; text-align: left; flex-direction: column; display: flex;">
			 	<view class="dailyExpen">本月支出:<text style="color: #F5B940; margin-left: 10upx;">{{spend}}</text></view>
				<view class="dailyExpen">预算结余: <text style="color: #F5B940; margin-left: 10upx;">{{surplus}}</text></view>
			 </view>
		</view>
		<view class="top-card" style="height: 100upx;">
			<view style="width: 60%;margin-left: 40upx;text-align: left; flex-direction: column; display: flex;">
				<view class="dailyExpen">本月预算:<text style="color: #F5B940; margin-left: 10upx;">{{spend}}</text></view>
			</view>
			 <view style="width: 30%; text-align: right;margin-right: 40upx; flex-direction: column; display: flex;">
			 	<view class="dailyExpen" @click="edit()">修改预算</view>
			 </view>
		</view>
		<view class="chart-card">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">分类对比</view>
				<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
			</view>
			<view class="qiun-charts">
				<!--#ifdef MP-ALIPAY -->
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
				<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
				<!--#endif-->
				<!--#ifndef MP-ALIPAY -->
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
				<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
				<!--#endif-->
			</view>
		</view>
		<!-- <view>
			<button @click="test"> 测试</button>
		</view> -->
		<view class="chart-card">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">收入 / 支出</view>
			</view>
			<view class="qiun-charts">
				<!--#ifdef MP-ALIPAY -->
				<canvas canvas-id="canvasPie" id="canvasPie" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,'canvasPie')"></canvas>
				<!--#endif-->
				<!--#ifndef MP-ALIPAY -->
				<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie($event,'canvasPie')"></canvas>
				<!--#endif-->
			</view>
		</view>
		<!-- 占位符 -->
		<view class="occupied"> </view>
	</view>
</template>

<script>
	import uCharts from '../../../components/u-charts/u-charts.js';
	var _self;
	var canvasObj = {};

	export default {
		data() {
			return {
				userinfo: '',
				cWidth: '',
				cHeight: '',
				tips: '',
				// 支出与结余
				spend: '1000',
				surplus: '200',
				pixelRatio: 1,
				serverData: '',
				itemCount: 30, //x轴单屏数据密度
				sliderMax: 50
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);

			//this.fillData(Data);
		},
		onReady() {
			this.LineChartYear()
			this.PieChart()
			// this.getServerData();
			uni.getStorage({
				key: 'userinfo',
				success: (res) => {
					this.userinfo = res.data
				},
				fail: (e) => {
					uni.showToast({'title' : '拉取信息失败，请检查网络连接'})
				}
			});
		},
		methods: {
			
			//修改预算
			edit() {
				
			},
			getServerData() {
				uni.showLoading({
					title: "正在加载数据..."
				})
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					// url: 'http://39.107.125.67:8080/bill/category/sum?userid=3&year=2019&month=0&day=0',
					data: {},
					success: function(res) {
						_self.fillData(res.data);
						// let resp = res.data.data
						// console.log(resp.series)
						// _self.fillData(resp);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
			
			// 折线图显示某年的12个月的收入支出变化
			LineChartYear(year) {
				uni.request({
					// url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					url: 'http://39.107.125.67:8080/bill/category/each/?userid = 1' + '&' + 'year=2019',
					success: function(res) {
						//_self.fillData(res.data);
						let resp = res.data.data
						_self.fill_data('LineA', resp);
						console.log(resp.series)
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
			
			// 饼状图显示收入与支出
			PieChart(year, month, day) {
				uni.request({
					// url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					url: 'http://39.107.125.67:8080/bill/category/sum?userid=1&year=2019&month=11&day=11',
					data: {},
					success: function(res) {
						//_self.fillData(res.data);
						let resp = res.data.data
						_self.fill_data('Pie', resp);
						console.log(resp.series)
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
			fillData(data) {
				let LineA = {
					categories: [],
					series: []
				};
				let Pie = {
					series: []
				};
				
				LineA.categories = data.LineA.categories;
				LineA.series = data.LineA.series;
				Pie.series = data.Pie.series;
				
				this.showLineA("canvasLineA", LineA);
				this.showPie("canvasPie", Pie);
			},
			fill_data(type, data) {
				if(type == 'LineA') {
					let LineA = {
						categories: [],
						series: []
					};
					LineA.categories = data.categories;
					LineA.series = data.series;
					this.showLineA("canvasLineA", LineA);
				} else {
					if(type == 'Pie') {
						let Pie = {
							series: []
						}
						Pie.series = data.series;
						this.showPie("canvasPie", Pie)
					}
				}
			},
			showLineA(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:5,
					},
					dataLabel: false,
					dataPointShape: false,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4, 
						scrollShow: true, 
						scrollAlign: 'left',
						//scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
						//scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 8,
						min: 10,
						max: 180,
						format: (val) => {
							return val.toFixed(0) + '元'
						} //如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'straight'
					},
				});

			},
			showPie(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
			touchLineA(e) {
				canvasObj['canvasLineA'].scrollStart(e);
			},
			moveLineA(e) {
				canvasObj['canvasLineA'].scroll(e);
			},
			touchEndLineA(e) {
				canvasObj['canvasLineA'].scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvasObj['canvasLineA'].showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
          touchPie(e,id) {
            canvasObj[id].showToolTip(e, {
                format: function(item) {
                    return item.name + ':' + item.data
                }
            });
          },
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
		width: 750upx;
		overflow-x: hidden;
		flex-direction:column
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row ;
	}

	.qiun-columns {
		align-items: center;
		display: flex;
		flex-direction: column;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		width: 92%;
		background: #FFFFFF;
		
	}
	.chart-card {
		width: 92%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		margin-top: 20upx;
		padding-bottom: 30upx;
	}
	.top-card {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 92%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		height: 140upx;
		padding-top: 15upx;
		margin-top: 30upx;
	}
	.topImage {
		width: 50upx;
		height: 50upx;
	}
	.occupied {
		height: 30upx;
	}
	.dailyExpen {
		width: 100%;
		color: #595BBC;
	}
	.qiun-title-bar {
		width: 92%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #595BBC;
		padding-left: 10upx;
		font-size: 32upx;
		color: #595BBC
	}

	/* 通用样式 */
	.qiun-charts {
		width: 100%;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 100%;
		height: 500upx;
		background-color: #FFFFFF;
	}
	.image {
		width: 70upx;
		height: 70upx;
	}
	.qiun-tip {
		display: block;
		width: auto;
		overflow: hidden;
		padding: 15upx;
		height: 30upx;
		line-height: 30upx;
		margin: 10upx;
		background: #ff9933;
		font-size: 30upx;
		border-radius: 8upx;
		justify-content: center;
		text-align: center;
		border: 1px solid #dc7004;
		color: #FFFFFF;
	}
</style>
