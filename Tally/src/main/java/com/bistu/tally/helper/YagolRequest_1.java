package com.bistu.tally.helper;

import java.util.ArrayList;

import com.alibaba.fastjson.JSON;

import lombok.Data;

@Data
public class YagolRequest_1 extends Request {
	private ArrayList<SeriesBean_1> series = new ArrayList<SeriesBean_1>();

}
