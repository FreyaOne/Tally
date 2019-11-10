package com.bistu.tally.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bistu.tally.dao.entity.Comment;
import com.bistu.tally.dao.entity.Praise;
import com.bistu.tally.dao.entity.Social;
import com.bistu.tally.dao.repository.CommentRepository;
import com.bistu.tally.dao.repository.PraiseRepository;
import com.bistu.tally.dao.repository.SocialRepository;
import com.bistu.tally.helper.CommentBean;
import com.bistu.tally.helper.Location;
import com.bistu.tally.helper.PraiseBean;
import com.bistu.tally.helper.SocialBean;

import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.asm.Advice.This;

@Slf4j
@Service
public class SocialService {
	@Autowired
	private SocialRepository socialRepository;
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private PraiseRepository praiseRepository;
	/**
	 * 通过作者编号获取数据库中所有动态
	 * @param authorId
	 * @param userId
	 * @return 所有记录
	 */
	public List<SocialBean> getByUserId(Long authorId, Long userId) {
		List<Social> socials =  socialRepository.findSocialByUserId(authorId);
		List<SocialBean> beans = new ArrayList<SocialBean>();
		for(int i = 0; i < socials.size(); i++) {
			SocialBean bean = SocialBean.of(socials.get(i));
			bean.setPraise(this.praiseRepository.existsByUserIdAndSocialId(userId, bean.getSocialId()));
			if(bean.getCommentsNum() > 0)
				bean.setComments(getBySocialId(bean.getSocialId()));
			beans.add(bean);
		}
		log.info("entities is: {}", beans);
		return beans;
	}
	/**
	 * 通过动态编号获取数据库中所有动态评论
	 * @param id 动态编号
	 * @return 所有记录
	 */
	private List<CommentBean> getBySocialId(Long id) {
		List<Comment> comments = commentRepository.findAllBySocialId(id);
		List<CommentBean> entities = new ArrayList<CommentBean>();
		for(int i = 0; i < comments.size(); i++) {
			CommentBean bean = CommentBean.of(comments.get(i));
			entities.add(bean);
		}
		return entities;
	}
	/**
	 * 通过定位获取数据库中所有动态
	 * @param location 定位信息
	 * @param userId 用户编号
	 * @return 所有记录
	 */
	public List<SocialBean> getByDistance(Location location, Long userId) {
		List<Social> socials =  socialRepository.findByDistance(location);
		List<SocialBean> beans = new ArrayList<SocialBean>();
		for(int i = 0; i < socials.size(); i++) {
			SocialBean bean = SocialBean.of(socials.get(i));
			bean.setPraise(this.praiseRepository.existsByUserIdAndSocialId(userId, bean.getSocialId()));
			if(bean.getCommentsNum() > 0)
				bean.setComments(getBySocialId(bean.getSocialId()));
			beans.add(bean);
			
		}
		log.info("entities is: {}", beans);
		return beans;
	}
	/**
	 * 通过bean，增加t_social表，增加一条动态信息
	 * 
	 * @param bean 动态信息
	 * @return 增加成功返回保存成功的动态信息
	 */
	public SocialBean create(SocialBean bean) {
		Social entity = SocialBean.of(bean);
		log.info("entity before save: {}", entity);
		entity = this.socialRepository.save(entity);
		log.info("entity saved: {}", entity);
		SocialBean bean2 = SocialBean.of(entity);
		return bean2;
	}
	/**
	 * 通过动态编号，删除一条动态信息
	 * 
	 * @param id 动态编号
	 * @param password 密码
	 * @return 增加成功 true
	 */
	public boolean delete(Long id) {
		this.socialRepository.deleteById(id);
		//删除相关评论
		this.commentRepository.deleteBySocialId(id);
		//删除相关点赞信息
		this.praiseRepository.deleteBySocialId(id);
		boolean result = this.socialRepository.existsById(id) && this.commentRepository.existsBySocialId(id) &&
				this.praiseRepository.existsBySocialId(id);
        log.info("Social id:{}, exist:{}", id, result);
        if(result)
            return false;
        else
            return true;
	}
	/**
	 * 通过bean，增加t_praise表，增加一条点赞
	 * 
	 * @param bean 点赞信息
	 * @return 增加成功点赞信息
	 */
	public PraiseBean create(PraiseBean bean) {
		Praise entity = PraiseBean.of(bean);
		log.info("entity before save: {}", entity);
		entity = this.praiseRepository.save(entity);
		log.info("entity saved: {}", entity);
		PraiseBean bean2 = PraiseBean.of(entity);
		return bean2;
		
	}
	/**
	 * 通过bean，删除点赞信息
	 * 
	 * @param bean 点赞信息
	 * @return 删除成功 true
	 */
	public boolean delete(PraiseBean bean) {
		this.praiseRepository.deleteCase(bean.getUserId(), bean.getSocialId());
		boolean result = this.praiseRepository.existsByUserIdAndSocialId(bean.getUserId(), bean.getSocialId());
		log.info("exist:{}", result);
        if(result)
            return false;
        else
            return true;
	}
}
