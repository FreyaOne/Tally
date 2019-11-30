package com.bistu.tally.helper;

import java.util.ArrayList;

import lombok.Data;

@Data
public class YagolRequest_2 extends Request {
	private ArrayList<SeriesBean_2> series = new ArrayList<SeriesBean_2>();

	public void setCategoriesToMonth() {
		this.categories=new ArrayList<String>();
		for (int i = 1; i <= 12; i++) {
			this.categories.add(i + "");
		}
	}

	public void setCategoriesToClassify() {
		this.categories=new ArrayList<String>();
		this.categories.add("餐饮");
		this.categories.add("购物");
		this.categories.add("交通");
		this.categories.add("娱乐");
		this.categories.add("书籍");
		this.categories.add("其他");
	}
}