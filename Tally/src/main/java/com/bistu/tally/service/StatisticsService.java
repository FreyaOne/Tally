package com.bistu.tally.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bistu.tally.dao.entity.Bill;
import com.bistu.tally.dao.repository.BillRepository;
import com.bistu.tally.helper.DateFactory;

@Service
public class StatisticsService {
	@Autowired
	private BillRepository billRepository;

	private DateFactory dateFactory = new DateFactory();

	public ArrayList<Bill> findByUserId(Long userid) {
		ArrayList<Bill> bills = new ArrayList<Bill>();
		bills = billRepository.findByUserId(userid);
		return bills;
	}

	public ArrayList<Bill> findByUserIdAndCategory(Long userid, int category) {
		return billRepository.findByUserIdAndCategory(userid, category);
	}

	public ArrayList<Bill> findByUserIdAndCategoryAndMonth(Long userid, int category, int month) {
		return billRepository.findByUserIdAndCategoryAndMonth(userid, category, month);
	}

	/**
	 * 查找指定日子，指定收支类型的账单
	 * 
	 * @param userid
	 * @param category
	 * @param day
	 * @return
	 */
	public ArrayList<Bill> findByUserIdAndCategoryAndDay(Long userid, int category, int day) {
		return billRepository.findByUserIdAndCategoryAndMonth(userid, category, day);
	}

	/**
	 * 获得指定年份，指定收支类型的订单
	 * 
	 * @param userid
	 * @param category
	 * @param year
	 * @return
	 */
	public ArrayList<Bill> findByUserIdAndCategoryAndYear(Long userid, int category, int year) {
		return billRepository.findByUserIdAndCategoryAndMonth(userid, category, year);
	}

	/**
	 * 通过消费类型获得指定用户的订单
	 * 
	 * @param userid
	 * @param classify
	 * @param month
	 * @param category
	 * @return
	 */
	public ArrayList<Bill> findByUserIdAndClassifyAndMonth(Long userid, String classify, int month, int category) {
		return billRepository.findByUserIdAndClassifyAndMonthAndCategoty(userid, classify, month, category);
	}

	public ArrayList<Bill> findByUserIdAndClassifyAndYear(Long userid, String classify, int year, int category) {
		return billRepository.findByUserIdAndClassifyAndMonthAndCategoty(userid, classify, year, category);
	}

	public ArrayList<Bill> findByUserIdAndClassifyAndDay(Long userid, String classify, int day, int category) {
		return billRepository.findByUserIdAndClassifyAndMonthAndCategoty(userid, classify, day, category);
	}

	public float sumCategoryByYear(Long userid, int category, int year) {
		float sum = 0;
		ArrayList<Bill> bills = new ArrayList<Bill>();
		bills = billRepository.findCategoryFromYear(userid, category, year);
		for (int i = 0; i < bills.size(); i++) {
			sum += bills.get(i).getAmount();
		}
		return sum;
	}

	public float sumCategoryByMonth(Long userid, int category, int year, int month) {
		float sum = 0;
		ArrayList<Bill> bills = new ArrayList<Bill>();
		bills = billRepository.findCategoryFromMonth(userid, category, year, month);
		for (int i = 0; i < bills.size(); i++) {
			sum += bills.get(i).getAmount();
		}
		System.out.print(sum);
		System.out.print("111111");
		return sum;
	}

	public float sumCategoryByDay(Long userid, int category, int year, int month, int day) {
		float sum = 0;
		ArrayList<Bill> bills = new ArrayList<Bill>();
		bills = billRepository.findCategoryFromDay(userid, category, year, month, day);
		for (int i = 0; i < bills.size(); i++) {
			sum += bills.get(i).getAmount();
		}
		return sum;
	}

	public float[] findEachMonthFromUserIdAndYear(Long userid, int year, int category) {
		ArrayList<Bill> bills = new ArrayList<Bill>();
		bills = this.billRepository.findCategoryFromYear(userid, category, year);
		float[] eachMonth = new float[13];
		for (int i = 0; i < eachMonth.length; i++) {
			eachMonth[i] = 0;
		}
		for (int i = 0; i < bills.size(); i++) {
			System.out.print(dateFactory.DateMonthToInt(bills.get(i).getTime()));
			eachMonth[dateFactory.DateMonthToInt(bills.get(i).getTime())] += bills.get(i).getAmount();
		}
		return eachMonth;
	}

	public float[] findEachClassifyFromUserIdAndYear(Long userid, int year, int category) {
		ArrayList<Bill> bills = this.billRepository.findCategoryFromYear(userid, category, year);
		float[] eachClassiyf = new float[6];
		for (int i = 0; i < bills.size(); i++) {
			switch (bills.get(i).getClassify()) {
			case "餐饮":
				eachClassiyf[0] += bills.get(i).getAmount();
				break;
			case "购物":
				eachClassiyf[1] += bills.get(i).getAmount();
				break;
			case "交通":
				eachClassiyf[2] += bills.get(i).getAmount();
				break;
			case "娱乐":
				eachClassiyf[3] += bills.get(i).getAmount();
				break;
			case "书籍":
				eachClassiyf[4] += bills.get(i).getAmount();
				break;
			case "其他":
				eachClassiyf[5] += bills.get(i).getAmount();
				break;
			default:
				break;
			}
		}
		return eachClassiyf;
	}

	public float[] findEachClassifyFromUserIdAndMonth(Long userid, int year, int month, int category) {
		ArrayList<Bill> bills = this.billRepository.findCategoryFromMonth(userid, category, year, month);
		float[] eachClassiyf = new float[6];
		for (int i = 0; i < bills.size(); i++) {
			switch (bills.get(i).getClassify()) {
			case "餐饮":
				eachClassiyf[0] += bills.get(i).getAmount();
				break;
			case "购物":
				eachClassiyf[1] += bills.get(i).getAmount();
				break;
			case "交通":
				eachClassiyf[2] += bills.get(i).getAmount();
				break;
			case "娱乐":
				eachClassiyf[3] += bills.get(i).getAmount();
				break;
			case "书籍":
				eachClassiyf[4] += bills.get(i).getAmount();
				break;
			case "其他":
				eachClassiyf[5] += bills.get(i).getAmount();
				break;
			default:
				break;
			}
		}
		return eachClassiyf;
	}

	public float[] findEachClassifyFromUserIdAndDay(Long userid, int year, int month, int day, int category) {
		ArrayList<Bill> bills = this.billRepository.findCategoryFromDay(userid, category, year, month, day);
		float[] eachClassiyf = new float[6];
		for (int i = 0; i < bills.size(); i++) {
			switch (bills.get(i).getClassify()) {
			case "餐饮":
				eachClassiyf[0] += bills.get(i).getAmount();
				break;
			case "购物":
				eachClassiyf[1] += bills.get(i).getAmount();
				break;
			case "交通":
				eachClassiyf[2] += bills.get(i).getAmount();
				break;
			case "娱乐":
				eachClassiyf[3] += bills.get(i).getAmount();
				break;
			case "书籍":
				eachClassiyf[4] += bills.get(i).getAmount();
				break;
			case "其他":
				eachClassiyf[5] += bills.get(i).getAmount();
				break;
			default:
				break;
			}
		}
		return eachClassiyf;
	}
}
