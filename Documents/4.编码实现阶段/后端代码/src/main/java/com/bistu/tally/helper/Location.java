package com.bistu.tally.helper;

import java.io.Serializable;

import lombok.Data;

@Data
public class Location implements Serializable{

	private static final long serialVersionUID = 1L;
	private double latitude;
	private double longitude;
	
	public Location() {}
	public Location(double d, double e) {
		this.latitude = d;
		this.longitude = e;
	}
}
