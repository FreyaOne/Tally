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
				<view class="dailyExpen">本月预算:
					<text style="color: #F5B940; margin-left: 10upx;" v-show="editbudget == true">{{spend}}</text>
					<input placeholder="请输入预算..." v-show="editbudget == false" style="placeholder-color: #F5B940; width: 300upx; font-size: 20upx;"></input>
				</view>
			</view>
			 <view style="width: 30%; text-align: right;margin-right: 40upx; flex-direction: column; display: flex;">
			 	<view class="dailyExpen" @click="edit()" v-show="editbudget == true">修改预算</view>
				<view class="dailyExpen" @click="save()" v-show="editbudget == false">确认修改</view>
			 </view>
		</view>
		<view class="chart-card">
			<view style="display: flex; flex-direction: row;">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" style="width: 70%;">
					<view class="qiun-title-dot-light">分类对比</view>
					<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
				</view>
				<view class="chage_button" style="width: 30%; display: flex; flex-direction: row; justify-content: center; align-items: center;">
					<view class="" @click="changeYear(-1)" style="margin-right: 20upx;">上年</view>
					<view class="" @click="changeYear(1)" >下年</view>
				</view>	
			</view>
			<view class="chart_title">{{LineDate.year}}年收支折线图</view>
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
		<view class="chart-card">
			<view style="display: flex; flex-direction: row;">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" style="width: 70%;">
					<view class="qiun-title-dot-light">分类对比</view>
					<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
				</view>
				<view class="chage_button" style="width: 30%; display: flex; flex-direction: row; justify-content: center; align-items: center; margin-right: 30upx;">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange_pie">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>	
			</view>
			<view class="chart_title">{{PieDate.year}}年{{PieDate.month}}月{{PieDate.day}}日收支饼图</view>
			<view class="qiun-charts">
				<!--#ifdef MP-ALIPAY -->
				<canvas canvas-id="canvasPie" id="canvasPie" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchPie($event,'canvasPie')"></canvas>
				<!--#endif-->
				<!--#ifndef MP-ALIPAY -->
				<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie($event,'canvasPie')"></canvas>
				<!--#endif-->
			</view>
		</view>
		<!-- <view>
			<button @click="test"> 测试</button>
		</view> -->
		<view class="chart-card">
			<view style="display: flex; flex-direction: row;">
				<view class="qiun-bg-white qiun-title-bar qiun-common-mt" style="width: 70%;">
					<view class="qiun-title-dot-light">分类对比</view>
					<!-- 使用图表拖拽功能时，建议给canvas增加disable-scroll=true属性，在拖拽时禁止屏幕滚动 -->
				</view>
				<view class="chage_button" style="width: 30%; display: flex; flex-direction: row; justify-content: center; align-items: center; margin-right: 30upx;">
					<picker mode="date" :value="date2" :start="startDate" :end="endDate" @change="bindDateChange_column">
						<view class="uni-input">{{date2}}</view>
					</picker>
				</view>	
			</view>
			<view class="chart_title">{{ColumnDate.year}}年{{ColumnDate.month}}月{{ColumnDate.day}}日收支饼图</view>
			<view class="qiun-charts" style="background-color: #FFFFFF;">
			  <!--#ifdef MP-ALIPAY -->
			  <canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #FFFFFF;" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchIt($event,'canvasColumn')"></canvas>
			  <!--#endif-->
			  <!--#ifndef MP-ALIPAY -->
			  <canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" style="background-color: #FFFFFF;" @touchstart="touchIt($event,'canvasColumn')"></canvas>
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

	function formatDate2(time){
		var date = new Date(time);
	 
		var year = date.getFullYear(),
			month = date.getMonth()+1,//月份是从0开始的
			day = date.getDate(),
			hour = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds();
		var newTime = year + '-' +
			(month < 10? '0' + month : month) + '-' +
			(day < 10? '0' + day : day) + ' ' +
			(hour < 10? '0' + hour : hour) + ':' +
			(min < 10? '0' + min : min) + ':' +
			(sec < 10? '0' + sec : sec);
	 
		return newTime;
	};
	
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
	
	const startDay = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1 ,
		day: new Date().getDate(),
	}
	export default {
		data() {
			return {
				userinfo: '',
				cWidth: '',
				cHeight: '',
				tips: '',
				index: 0,
				// 支出与结余
				spend: '1000',
				surplus: '200',
				pixelRatio: 1,
				serverData: '',
				date: getDate({
					format: true
				}),
				date2: getDate({
					format : true
				}),
				editbudget: true,
				LineDate:  startDay,
				PieDate: startDay,
				ColumnDate: startDay,
				startDate:getDate('start'),
				endDate:getDate('end'),
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
			this.LineDate = startDay
			console.log(this.LineDate.year)
			this.PieDate = startDay
			this.ColumnDate = startDay
			
			this.LineChartYear(startDay.year)
			this.PieChart(startDay.year, startDay.month, startDay.day)
			this.ColumnChart(startDay.year, startDay.month, startDay.day)
		},
		methods: {
			//修改预算
			edit() {
				this.editbudget = false
				
			},
			
			// 确认修改预算
			save() {
				this.editbudget = true
				uni.showToast({
					'title' : '修改成功'
				})
			},
			//修改
			bindDateChange_pie: function(e) {
				// this.month = e.target.value
				let time = e.target.value.toString()
				this.PieDate.year = time.substring(0,4)
				this.PieDate.month = time.substring(5,7)
				this.PieDate.day = time.substring(8,10)
				this.date = e.target.value
				this.PieChart(this.PieDate.year, this.PieDate.month, this.PieDate.day)
				// this.PieChart(this.year, this.month, this.day)
			},
			
			bindDateChange_column: function(e) {
				// this.month = e.target.value
				let time = e.target.value.toString()
				this.ColumnDate.year = time.substring(0,4)
				this.ColumnDate.month = time.substring(5,7)
				this.ColumnDate.day = time.substring(8,10)
				this.date2 = e.target.value
				this.ColumnChart(this.ColumnDate.year, this.ColumnDate.month, this.ColumnDate.day)
				// this.PieChart(this.year, this.month, this.day)
			},
			
			//折线图切换年份显示
			changeYear(val) {
				this.LineDate.year += val
				this.LineChartYear(this.LineDate.year);
			},
			
			// 折线图显示某年的12个月的收入支出变化 仅支持年份
			LineChartYear(year) {
				uni.request({
					url: 'http://39.107.125.67:8080/bill/category/each/?userid=' + this.userinfo.userid + '&' + 'year=' + year,
					success: function(res) {
						//_self.fillData(res.data);
						let resp = res.data.data
						_self.fill_data('LineA', resp);
					},
					fail: () => {
						_self.tips = "账单拉取失败，请检查网络！";
					}
				});
			},
			
			// 饼状图显示收入与支出 支持年月日
			PieChart(year, month, day) {
				uni.request({
					url: 'http://39.107.125.67:8080/bill/category/sum?userid=' + this.userinfo.userid + '&' + 'year=' + year +  '&' + 'month=' + month + '&' + 'day=' + day,
					// data: {},
					success: function(res) {
						//_self.fillData(res.data);
						let resp = res.data.data
						_self.fill_data('Pie', resp);
					},
					fail: () => {
						_self.tips = "账单拉取失败，请检查网络！";
					},
					complete() {
						
					}
				});
			},
			
			// 柱状图显示 classify 支持年月日
			ColumnChart(year, month, day) {
				uni.request({
					url: 'http://39.107.125.67:8080/bill/classify/each?userid=' + this.userinfo.userid + '&' + 'year=' + year +  '&' + 'month=' + month + '&' + 'day=' + day,
					success: (res) => {
						let resp = res.data.data
						_self.fill_data('Column', resp);
					}, 
					fail: () => {
						_self.tips = "账单拉取失败，请检查网络！"
					}
				})
			},
			
			// 拉取数据 填充至图表内
			fill_data(type, data) {
				if(type == 'LineA') {
					let LineA = {
						categories: [],
						series: []
					};
					LineA.categories = data.categories;
					LineA.series = data.series;
					this.showLineA("canvasLineA", LineA);
				} else if (type == 'Pie'){
					let Pie = {
						series: []
					}
					Pie.series = data.series;
					this.showPie("canvasPie", Pie)
				} else {
					let Column = {
						categories: [],
						series: []
					};
					Column.categories = data.categories;
					Column.series = data.series;
					this.showColumn("canvasColumn", Column);
				}
			}, 
			
			// 柱状图显示
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
			
			// 折线图显示
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
						itemCount: 8, 
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
					console.log(item)
                    return item.name + ':' + item.data
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
	.chart_title {
		color: #595BBC;
		width: 100%;
		text-align: center;
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
	.chage_button {
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
