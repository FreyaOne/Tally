package com.bistu.tally.helper;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFactory {
	/**
	 * 2019-11-10
	 * 
	 * @param str
	 * @return
	 * @throws ParseException
	 */
	@SuppressWarnings("deprecation")
	public Date makeString2Date(String str) throws ParseException {
		int k = 0;
		int[] where = new int[2];
		for (int i = 0; i < str.length(); i++) {
			if (str.charAt(i) == '-') {
				where[k] = i;
				k++;
			}
		}
		String year = str.substring(0, where[0]);
		String month = str.substring(where[0] + 1, where[1]);
		String day = str.substring(where[1] + 1, str.length());
		System.out.println("year=" + year + "month=" + month + "day=" + day);
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();
		date.setYear(Integer.parseInt(year) - 1900);
		date.setMonth(Integer.parseInt(month) - 1);
		date.setDate(Integer.parseInt(day));
		System.out.println("date=" + date);
		String newDate = dateFormat.format(date);
		System.out.println("that is newDate=" + newDate);
		Date lateDate = dateFormat.parse(newDate);
		return lateDate;
	}

	public Date strToDate(String strDate) {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		ParsePosition pos = new ParsePosition(0);
		Date strtodate = formatter.parse(strDate, pos);
		return strtodate;
	}

	public int DateMonthToInt(Date date) {
		String str = date.toString();
		int k = 0;
		int[] where = new int[2];
		for (int i = 0; i < str.length(); i++) {
			if (str.charAt(i) == '-') {
				where[k] = i;
				k++;
			}
		}
		//String year = str.substring(0, where[0]);
		String month = str.substring(where[0] + 1, where[1]);
		//String day = str.substring(where[1] + 1, str.length());
		return Integer.parseInt(month);
	}

}
