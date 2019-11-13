package com.bistu.tally.controller;

import java.util.ArrayList;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bistu.tally.bean.ResultInfo;
import com.bistu.tally.dao.entity.Bill;
import com.bistu.tally.helper.SeriesBean_1;
import com.bistu.tally.helper.SeriesBean_2;
import com.bistu.tally.helper.YagolRequest_1;
import com.bistu.tally.helper.YagolRequest_2;
import com.bistu.tally.service.StatisticsService;
import com.sun.net.httpserver.HttpServer;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class StatisticsController {
	@Autowired
	private StatisticsService statisticsService;

	private YagolRequest_1 yagolRequest_1 = new YagolRequest_1();
	private YagolRequest_2 yagolRequest_2 = new YagolRequest_2();

	/**
	 * 获得指定用户，指定的收支类型的，账单数据，返回该用户所有该收支类型，否则返回指定月份/年份/日的账单的总金额
	 * http://127.0.0.1:8080/bill/category/?userid=1&category=1&month=11&day=0&year=0
	 * 
	 * @param userid
	 * @param category
	 * @param month
	 * @param day
	 * @param year
	 * @return
	 */
	@GetMapping("/bill/category/sum")
	public ResultInfo getAllBillFromUserIdAndCategoryAndTimeToSum(@RequestParam("userid") Long userid,
			@RequestParam("month") String month, @RequestParam("day") String day, @RequestParam("year") String year) {
		log.info("get requsting...");
		ResultInfo resultInfo = ResultInfo.success();
		int yearInt = Integer.parseInt(year);
		int monthInt = Integer.parseInt(month);
		int dayInt = Integer.parseInt(day);
		log.info(monthInt+"");
		if (Integer.parseInt(year) != 0) {
			if (Integer.parseInt(month) != 0) {
				if (Integer.parseInt(day) != 0) {
					// TODO 返回这一天的
					ArrayList<SeriesBean_1> seriesBeans = new ArrayList<SeriesBean_1>();
					seriesBeans.add(new SeriesBean_1("支出", this.statisticsService.sumCategoryByDay(userid, 1,
							Integer.parseInt(year), monthInt, dayInt)));
					seriesBeans.add(new SeriesBean_1("收入", this.statisticsService.sumCategoryByDay(userid, 2,
							Integer.parseInt(year), monthInt, dayInt)));
					yagolRequest_1.setCategories(null);// 年请求的饼状图，不需要Categories
					yagolRequest_1.setSeries(seriesBeans);
					resultInfo.setData(yagolRequest_1);
					return resultInfo;
				} else {
					// TODO 这个年，月的
					ArrayList<SeriesBean_1> seriesBeans = new ArrayList<SeriesBean_1>();
					log.info("start");
					seriesBeans.add(new SeriesBean_1("支出",
							this.statisticsService.sumCategoryByMonth(userid, 1, Integer.parseInt(year), monthInt)));
					seriesBeans.add(new SeriesBean_1("收入",
							this.statisticsService.sumCategoryByMonth(userid, 2, Integer.parseInt(year), monthInt)));
					yagolRequest_1.setCategories(null);// 年请求的饼状图，不需要Categories
					yagolRequest_1.setSeries(seriesBeans);
					resultInfo.setData(yagolRequest_1);
					return resultInfo;
				}
			} else {
				// TODO 这一年的
				ArrayList<SeriesBean_1> seriesBeans = new ArrayList<SeriesBean_1>();
				seriesBeans.add(new SeriesBean_1("支出", this.statisticsService.sumCategoryByYear(userid, 1, yearInt)));

				seriesBeans.add(new SeriesBean_1("收入", this.statisticsService.sumCategoryByYear(userid, 2, yearInt)));

				yagolRequest_1.setCategories(null);// 日请求的饼状图，不需要Categories
				yagolRequest_1.setSeries(seriesBeans);
				resultInfo.setData(yagolRequest_1);
				return resultInfo;
			}
		} else {
			// 都为空
			return resultInfo;
		}
	}

	@GetMapping({ "/bill/category/each/" })
	public ResultInfo getAllBillFromUserIdAndCategoryAndYearToEach(@RequestParam("userid") Long userid,
			@RequestParam("year") String year) {
		ResultInfo resultInfo = ResultInfo.success();
		yagolRequest_2.setCategoriesToMonth();// 一年的十二个月初始化
		ArrayList<SeriesBean_2> seriesBean_2s = new ArrayList<SeriesBean_2>();
		seriesBean_2s.add(new SeriesBean_2("支出",
				statisticsService.findEachMonthFromUserIdAndYear(userid, Integer.parseInt(year), 1)));
		seriesBean_2s.add(new SeriesBean_2("收入",
				statisticsService.findEachMonthFromUserIdAndYear(userid, Integer.parseInt(year), 2)));
		yagolRequest_2.setSeries(seriesBean_2s);
		resultInfo.setData(yagolRequest_2);
		return resultInfo;
	}

	/**
	 * 通过用户id以及类别，寻找指定类别的账单，可以指定月份
	 * 
	 * @param userid
	 * @param classify
	 * @return
	 */
	@GetMapping({ "/bill/classify/each" })
	public ResultInfo getBillFromUserIdAndClassify(@RequestParam("userid") Long userid,
			@RequestParam("month") String month, @RequestParam("day") String day, @RequestParam("year") String year) {
		ResultInfo resultInfo = ResultInfo.success();
		yagolRequest_2.setCategoriesToClassify();
		ArrayList<SeriesBean_2> seriesBean_2s = new ArrayList<SeriesBean_2>();
		int yearInt = Integer.parseInt(year);
		int monthInt = Integer.parseInt(month);
		int dayInt = Integer.parseInt(day);
		if (yearInt != 0) {
			if (monthInt != 0) {
				if (dayInt != 0) {
					// 返回日
					seriesBean_2s.add(new SeriesBean_2("支出",
							statisticsService.findEachClassifyFromUserIdAndDay(userid, yearInt, monthInt, dayInt, 1)));
					seriesBean_2s.add(new SeriesBean_2("收入",
							statisticsService.findEachClassifyFromUserIdAndDay(userid, yearInt, monthInt, dayInt, 2)));
					yagolRequest_2.setSeries(seriesBean_2s);
					resultInfo.setData(yagolRequest_2);
					return resultInfo;
				} else {
					// 返回月
					seriesBean_2s.add(new SeriesBean_2("支出",
							statisticsService.findEachClassifyFromUserIdAndMonth(userid, yearInt, monthInt, 1)));
					seriesBean_2s.add(new SeriesBean_2("收入",
							statisticsService.findEachClassifyFromUserIdAndMonth(userid, yearInt, monthInt, 2)));
					yagolRequest_2.setSeries(seriesBean_2s);
					resultInfo.setData(yagolRequest_2);
					return resultInfo;
				}
			} else {
				// 返回年
				seriesBean_2s.add(new SeriesBean_2("支出",
						statisticsService.findEachClassifyFromUserIdAndYear(userid, yearInt, 1)));
				seriesBean_2s.add(new SeriesBean_2("收入",
						statisticsService.findEachClassifyFromUserIdAndYear(userid, yearInt, 2)));
				yagolRequest_2.setSeries(seriesBean_2s);
				resultInfo.setData(yagolRequest_2);
				return resultInfo;
			}
		} else {
			// 都为零
			return resultInfo;
		}
	}

}