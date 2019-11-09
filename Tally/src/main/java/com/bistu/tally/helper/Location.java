package com.bistu.tally.helper;

import java.io.Serializable;

import lombok.Data;

@Data
public class Location implements Serializable{

	private static final long serialVersionUID = 1L;
	private float latitude;
	private float longitude;
	
	public Location() {}
	public Location(float lati, float longi) {
		this.latitude = lati;
		this.longitude = longi;
	}
}
