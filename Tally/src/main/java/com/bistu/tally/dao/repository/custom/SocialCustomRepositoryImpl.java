package com.bistu.tally.dao.repository.custom;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;

import com.bistu.tally.dao.entity.Social;
import com.bistu.tally.helper.Location;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SocialCustomRepositoryImpl implements SocialCustomRepository{

	@Autowired
    private EntityManager entityManager;
	/**
	 * 通过定位信息查找记录
	 * @param location 定位信息
	 * @return List
	 */
	public List<Social> findByDistance(Location location) {
		//sql语句 查找和所给的定位信息距离在1000米内的所有记录，按时间排序
		String jpql = "SELECT entity from Social entity "
				+ "where round(6367000 * 2 * asin(sqrt(pow(sin(((latitude * pi()) "
				+ "/ 180 - (" + location.getLatitude() + " * pi()) / 180) / 2), 2) + "
				+ "cos((" + location.getLatitude() + " * pi()) / 180) * "
				+ "cos((latitude * pi()) / 180) * pow(sin(((longitude * pi()) "
				+ "/ 180 - (" + location.getLongitude() + " * pi()) / 180) / 2), 2))))<1000 order by time desc";
		log.info("select query is: {}", jpql);
        List<Social> entities = this.entityManager.createQuery(String.format(jpql, location))
                .getResultList();

        log.info("entities:{}", entities);
        return entities;
	}

	
}
