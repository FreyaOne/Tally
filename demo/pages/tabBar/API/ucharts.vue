<template>
	<view class="qiun-columns">
		<view class="qiun-padding" style="font-size: 32upx;">
			<text>{{tips}}</text>
		</view>
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">同比支出</view>
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
		
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
			<view class="qiun-title-dot-light">同期对比</view>
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
</template>

<script>
	import uCharts from '../../../components/u-charts/u-charts.js';
	var _self;
	var canvasObj = {};

	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				cWidth2: '', //横屏图表
				cHeight2: '', //横屏图表
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
				tips: '',
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
			this.cWidth2 = uni.upx2px(700);
			this.cHeight2 = uni.upx2px(1100);
			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.arcbarWidth = uni.upx2px(24);
			this.gaugeWidth = uni.upx2px(30);

			//this.fillData(Data);
		},
		onReady() {
			this.getServerData();
		},
		methods: {
			getServerData() {
				uni.showLoading({
					title: "正在加载数据..."
				})
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					data: {},
					success: function(res) {
						_self.fillData(res.data);
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
				this.serverData = data;
				this.tips = data.tips;
				this.sliderMax = data.Candle.categories.length;
				let Column = {
					categories: [],
					series: []
				};
				let ColumnMeter = {
					categories: [],
					series: []
				};
				let LineA = {
					categories: [],
					series: []
				};
				let Pie = {
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Column.categories = data.Column.categories;
				//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
				Column.series = data.Column.series;
				ColumnMeter.categories = data.ColumnMeter.categories;
				//这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
				ColumnMeter.series = data.ColumnMeter.series;
				LineA.categories = data.LineA.categories;
				LineA.series = data.LineA.series;
				Pie.series = data.Pie.series;
				this.showColumn("canvasColumn", Column);
				this.showColumnMeter("canvasColumnMeter", ColumnMeter);
				this.showLineA("canvasLineA", LineA);
				this.showPie("canvasPie", Pie);
			},
			showColumn(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					animation: false,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid:true,
					},
					yAxis: {
						format:(val)=>{return val.toFixed(0)+'元'}
					},
					dataLabel: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
						}
					  }
				});
			},
			showColumnMeter(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: false,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'meter',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length,
							meter: {
								border: 4,
								fillColor: '#E5FDC3'
							}
						}
					}
				});

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
			showLineB(canvasId, chartData) {
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
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					rotate: true, //开启图表横屏
					// #ifdef MP-ALIPAY
					rotateLock: true, //百度及支付宝需要锁定旋转
					// #endif
					categories: chartData.categories,
					animation: false,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					width: _self.cWidth2 * _self.pixelRatio,
					height: _self.cHeight2 * _self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
						lineStyle: 'curve'
					},
				});
			},
			showArea(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'area',
					fontSize:11,
					padding:[0,15,10,15],
					legend:{
						show:true,
						position:'top',
						float:'center',
						itemGap:30,
						padding:5,
						lineHeight:18,
						margin:0,
					},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8,
            boundaryGap:'justify'//两端不留白配置
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						area:{
							type: 'curve',
							opacity:0.2,
							addLine:true,
							width:2
						}
					}
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

			touchCandle(e) {
				canvasObj['canvasCandle'].scrollStart(e);
			},
			moveCandle(e) {
				canvasObj['canvasCandle'].scroll(e);
			},
			touchEndCandle(e) {
				canvasObj['canvasCandle'].scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvasObj['canvasCandle'].showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			changeData() {
				canvasObj['canvasColumn'].updateData({
					series: _self.serverData.ColumnB.series,
					categories: _self.serverData.ColumnB.categories
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
			showMix(canvasId, chartData) {
				canvasObj[canvasId] = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'mix',
					fontSize:11,
					padding:[15,15,0,15],
					legend:{
						show:true,
						padding:5,
						lineHeight:11,
						margin:6,
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: false,
					enableScroll: true,//开启图表拖拽功能
					xAxis: {
						disableGrid:false,
						type:'grid',
						gridType:'dash',
						itemCount:4,
						scrollShow:true,
						scrollAlign:'left',
					},
					yAxis: {
						gridType:'dash',
						dashLength:4,
						splitNumber:5,
						min:10,
						max:180,
						format:(val)=>{return val.toFixed(0)}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
					dataPointShape: true,
					extra: {
            column:{
              width:20*_self.pixelRatio
            },
						tooltip:{
							bgColor:'#000000',
							bgOpacity:0.7,
							gridType:'dash',
							dashLength:8,
							gridColor:'#1890ff',
							fontColor:'#FFFFFF',
							horizentalLine:true,
							xAxisLabel:true,
							yAxisLabel:true,
							labelBgColor:'#DFE8FF',
							labelBgOpacity:0.95,
							labelAlign:'left',
							labelFontColor:'#666666'
						}
					},
				});
			},
			touchMix(e) {
				canvasObj['canvasMix'].scrollStart(e);
			},
			moveMix(e) {
				canvasObj['canvasMix'].scroll(e);
			},
			touchEndMix(e) {
				canvasObj['canvasMix'].scrollEnd(e);
        canvasObj['canvasMix'].touchLegend(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvasObj['canvasMix'].showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			touchIt(e,id) {
        canvasObj[id].touchLegend(e, {
        	animation : false
        });
				canvasObj[id].showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return category + ' ' + item.name + ':' + item.data.value 
						}else{
							return category + ' ' + item.name + ':' + item.data 
						}
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
		background: #F2F2F2;
		width: 750upx;
		overflow-x: hidden;
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
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	/* 通用样式 */
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
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
