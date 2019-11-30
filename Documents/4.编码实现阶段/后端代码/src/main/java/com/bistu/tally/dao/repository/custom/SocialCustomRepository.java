package com.bistu.tally.dao.repository.custom;

import java.util.List;

import com.bistu.tally.dao.entity.Social;
import com.bistu.tally.helper.Location;

public interface SocialCustomRepository{
	/**
	 * 通过定位信息查找记录
	 * @param location 定位信息
	 * @return List
	 */
	public List<Social> findByDistance(Location location);

}
