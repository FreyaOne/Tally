package com.bistu.tally.helper;

import lombok.Data;

@Data
public class SeriesBean_1 {
	private String name;
	private float data;

	public SeriesBean_1(String name, float data) {
		this.name = name;
		this.data = data;
	}
}
