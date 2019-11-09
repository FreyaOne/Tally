package com.bistu.tally.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import com.bistu.tally.dao.entity.Comment;
import com.bistu.tally.dao.entity.Social;
import com.bistu.tally.dao.repository.CommentRepository;
import com.bistu.tally.dao.repository.SocialRepository;
import com.bistu.tally.helper.CommentBean;
import com.bistu.tally.helper.SocialBean;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CommentService {
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private SocialRepository socialRepository;
	/**
	 * 通过bean，增加t_comment表，增加一条评论信息
	 * 
	 * @param bean 动态信息
	 * @return 增加成功返回当前数据库保存的动态信息
	 */
	public SocialBean create(CommentBean bean) {
		Comment entity = CommentBean.of(bean);
		log.info("entity before save: {}", entity);
		entity = this.commentRepository.save(entity);
		log.info("entity saved: {}", entity);
		Social entity2 = this.socialRepository.findById(entity.getSocialId()).get();
		entity2.setCommentsNum(entity2.getCommentsNum() + 1);
		entity2 = this.socialRepository.save(entity2);
		SocialBean bean2 = SocialBean.of(entity2);
		return bean2;
	}
	/**
	 * 通过cid和uid，删除t_comment表中记录
	 * 
	 * @param cid 评论编号
	 * @param uid 用户编号
	 * @return 删除成功 true
	 */
	public boolean delete(Long cid, Long uid) {
		boolean result = this.commentRepository.existsByIdAndUserId(cid, uid);
		if (result) {
			this.commentRepository.deleteById(cid);
		}
		else 
			return false;
		result = this.commentRepository.existsById(cid);
        log.info("comment id:{}, exist:{}", cid, result);
        if(result)
            return false;
        else
            return true;
	}
}
