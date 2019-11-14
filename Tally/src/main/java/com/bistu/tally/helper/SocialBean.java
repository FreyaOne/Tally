package com.bistu.tally.helper;

import java.util.Date;

import java.util.List;
import org.springframework.stereotype.Component;
import com.bistu.tally.dao.entity.Social;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Data
@Component
public class SocialBean {
	private Long userId;
	private Long socialId;
	private String userName;
	private String socialContent;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date time;
	private boolean praise;
	private int commentsNum;
	private Location location;
	private List<CommentBean> comments;
	/**
	 * entity转bean
	 * 
	 * @param entity
	 * @return
	 */
	public static SocialBean of(Social entity) {
		log.info("entity is: {}", entity);
		SocialBean bean = new SocialBean();
		bean.setUserId(entity.getUserId());
		bean.setSocialId(entity.getId());
		bean.setSocialContent(entity.getSocialContent());
		bean.setTime(entity.getTime());
		bean.setCommentsNum(entity.getCommentsNum());
		bean.setLocation(new Location(entity.getLatitude(), entity.getLongitude()));
		
		log.info("bean is: {}", bean);
		return bean;
	}
	/**
	 * bean转entity
	 * 
	 * @param bean
	 * @return
	 */
	public static Social of(SocialBean bean) {
		log.info("bean is: {}", bean);
		Social entity = new Social();
		entity.setUserId(bean.getUserId());
		entity.setSocialContent(bean.getSocialContent());
		entity.setTime(bean.getTime());
		entity.setCommentsNum(bean.getCommentsNum());
		entity.setLatitude(bean.getLocation().getLatitude());
		entity.setLongitude(bean.getLocation().getLongitude());
		log.info("entity is: {}", entity);
		return entity;
	}
}
