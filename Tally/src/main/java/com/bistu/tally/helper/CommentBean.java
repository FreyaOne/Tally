package com.bistu.tally.helper;
import java.util.Date;

import org.springframework.stereotype.Component;

import com.bistu.tally.dao.entity.Comment;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@Data
@Component
public class CommentBean {
	private Long socialId;
	private Long userId;
	private String commentContent;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date time;
	private Long commentId;
	/**
	 * entity转bean
	 * 
	 * @param entity
	 * @return
	 */
	public static CommentBean of(Comment entity) {
		log.info("entity is: {}", entity);
		CommentBean bean = new CommentBean();
		bean.setUserId(entity.getUserId());
		bean.setSocialId(entity.getSocialId());
		bean.setCommentId(entity.getId());
		bean.setCommentContent(entity.getCommentContent());
		bean.setTime(entity.getTime());
		log.info("bean is: {}", bean);
		return bean;
	}
	/**
	 * bean转entity
	 * 
	 * @param bean
	 * @return
	 */
	public static Comment of(CommentBean bean) {
		log.info("bean is: {}", bean);
		Comment entity = new Comment();
		entity.setId(bean.getSocialId());
		entity.setSocialId(bean.getSocialId());
		entity.setUserId(bean.getUserId());
		entity.setTime(bean.getTime());
		entity.setCommentContent(bean.getCommentContent());
		return entity;
	}
}
