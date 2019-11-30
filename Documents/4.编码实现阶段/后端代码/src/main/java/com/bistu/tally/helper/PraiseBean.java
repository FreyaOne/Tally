package com.bistu.tally.helper;

import org.springframework.stereotype.Component;

import com.bistu.tally.dao.entity.Praise;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
@Data
public class PraiseBean {
	private Long userId;
	private Long socialId;
	private Long id;
	/**
	 * entity转bean
	 * 
	 * @param entity
	 * @return
	 */
	public static PraiseBean of(Praise entity) {
		log.info("entity is: {}", entity);
		PraiseBean bean = new PraiseBean();
		bean.setUserId(entity.getUserId());
		bean.setSocialId(entity.getSocialId());
		log.info("bean is: {}", bean);
		return bean;
	}
	/**
	 * bean转entity
	 * 
	 * @param bean
	 * @return
	 */
	public static Praise of(PraiseBean bean) {
		log.info("bean is: {}", bean);
		Praise entity = new Praise();
		entity.setUserId(bean.getUserId());
		entity.setSocialId(bean.getSocialId());
		log.info("entity is: {}", entity);
		return entity;
	}
}
