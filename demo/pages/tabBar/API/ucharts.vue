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
				<!-- <view class="dailyExpen">预算结余: <text style="color: #F5B940; margin-left: 10upx;">{{surplus}}</text></view> -->
			 </view>
		</view>
		<view class="top-card" style="height: 100upx;">
			<view style="width: 60%;margin-left: 40upx;text-align: left; flex-direction: column; display: flex;">
				<view class="dailyExpen">本月预算:
					<text style="color: #F5B940; margin-left: 10upx;" v-show="editbudget == true">{{budget}}</text>
					<input placeholder="请输入预算..." v-model="budget" v-show="editbudget == false" placeholder-style="color: #BFBEBE" style=" color: #F5B940; width: 150upx; font-size: 30upx;"></input>
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
			<view class="chart_title">{{Line_data}}年收支折线图</view>
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
				<view class="chage_button" style="width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center; margin-right: 30upx;">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="uni-input" style="width: 100upx;">{{array[index].name}}</view>
					</picker>
					<!-- <picker mode="date" :value="toYear" start="startDate" end="endDate" @change="bindTimeChange" v-show="index == 0">
						<view class="uni-input">{{toYear}}</view>
					</picker>
					<picker mode="date" :value="toMonth" start="startDate" end="endDate" @change="bindTimeChange" v-show="index == 1">
						<view class="uni-input">{{toMonth}}</view>
					</picker>
					<picker mode="date" :value="toDay" start="startDate" end="endDate"  @change="bindTimeChange" v-show="index == 2">
						<view class="uni-input">{{toDay}}</view>
					</picker> -->
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindTimeChange">
						<view class="uni-input" style="font-size: 30upx;">{{date}}</view>
					</picker>
				</view>	
			</view>
			<view class="chart_title">{{t_year}}年 {{t_month}}月 {{t_day}}日汇总图</view>
			<!-- <view class="chart_title">{{}}年{{ColumnDate.month}}月{{ColumnDate.day}}日收支饼图</view> -->
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
				array: [{name:'按年'},{name: '按月'}, {name:'按日'}],
				index: 0,
				userinfo: '',
				cWidth: '',
				cHeight: '',
				tips: '',
				date: getDate({
					format: true
				}),
				// 支出与结余
				spend: '1000',
				surplus: '200',
				pixelRatio: 1,
				serverData: '',
				budget: '',
				editbudget: true,
				Line_data: '',
				startDate:getDate('start'),
				endDate:getDate('end'),
				itemCount: 30, //x轴单屏数据密度
				sliderMax: 50,
				toYear: '2019',
				toMonth: '2019-11',
				toDay: getDate({
					format: true
				}),
				t_year:2019,
				t_month: '-',
				t_day: '-'
				
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
			this.index = 0
			console.log(this.index)
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
			this.Line_data = startDay.year
			this.getUserBudget(this.userinfo.userid)
			this.LineChartYear(this.Line_data)
			this.ColumnChart(2019)
			
		},
		methods: {
			//修改预算
			edit() {
				this.editbudget = false
			},
			// 分类选择器
			bindPickerChange: function(e) {
				this.index = e.target.value
				if(this.index == 0 ) {
					this.LineChartYear()
					this.t_month = '-'
					this.t_day = '-'
				} else if(this.index == 1) {
					this.ColumnChart(2019, startDay.month)
					this.t_month = startDay.month
					this.t_day = '-'
				} else {
					this.ColumnChart(2019, startDay.month, startDay.day)
					this.t_month = startDay.month
					this.t_day = startDay.day
				}
				// 年 0 / 月 1 / 日 2
				
			},
			bindTimeChange: function(e) {
				this.date = e.target.value
				let pickerTime = e.target.value
				let yyyy = pickerTime.substring(0, 4) - '0'
				let mm = pickerTime.substring(5,7) - '0'
				let dd = pickerTime.substring(8,10) - '0'
				console.log(typeof(pickerTime))
				if(this.index == 0 ) {
					this.ColumnChart(yyyy)
					this.t_year = yyyy
					this.t_month = '-'
					this.t_day = '-'
					console.log("本次选择的是年份：" + yyyy)
				} else if(this.index == 1) {
					this.ColumnChart(yyyy, mm)
					this.t_year = yyyy
					this.t_month = mm
					this.t_day = '-'
					console.log("本次选择的是：" + yyyy + " " + mm)
				} else {
					this.ColumnChart(yyyy, mm, dd)
					this.t_year = yyyy
					this.t_month = mm
					this.t_day = dd
					console.log("本次选择的是：" + yyyy + " " + mm + " " + dd)
				} 
			},
			// 确认修改预算
			save() {
				let bud = this.budget
				if(bud){
					let x = String(bud).indexOf(".") + 1
					let count = String(bud).length - x
					if(count > 2 && x!=0) {
						uni.showToast({title:'仅保留小数点后两位',icon:'none'});
						return;
					}
				}
				bud = bud - '0'
				uni.request({
					url : 'http://39.107.125.67:8080/budget/update/?userid=' + this.userinfo.userid + '&' + 'budget=' + bud,
					method: 'POST',
					success: (res) => {
						// console.log(res.data.data[0].budget)
						// this.budget = res.data.data
						uni.showToast({
							'title' : '修改成功'
						})
					}
				})
				this.editbudget = true
			},
			
			getUserBudget(id) {
				uni.request({
					 url : 'http://39.107.125.67:8080/budget/get/?userid=' + id,
					 method: 'GET',
					 success: (res) => {
						 this.budget = res.data.data[0].budget
					 },
					 fail: (res) => {
					 	
					 }
				})
				
				uni.request({
					 url : 'http://39.107.125.67:8080/bill/category/sum?userid='+ this.userinfo.userid + '&year=2019&month=' + startDay.month + '&day=0',
					 method: 'GET',
					 success: (res) => {
						 let amount = res.data.data;
						 this.spend = this.budget - amount.series[0].data + amount.series[1].data
					 },
					 fail: (res) => {
					 	
					 }
				})
			},
			
			//折线图切换年份显示
			changeYear(val) {
				this.Line_data = this.Line_data - '0' + val
				this.LineChartYear(this.Line_data);
			},
			
			// 折线图显示某年的12个月的收入支出变化 仅支持年份
			LineChartYear(year=2019) {
				uni.request({
					url: 'http://39.107.125.67:8080/bill/category/each/?userid=' + this.userinfo.userid + '&' + 'year=' + year,
					success: function(res) {
						let resp = res.data.data
						_self.fill_data('LineA', resp);
					},
					fail: () => {
						_self.tips = "账单拉取失败，请检查网络！";
					}
				});
			},
			// 柱状图显示 classify 支持年月日
			ColumnChart(year, month=0, day=0) {
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
