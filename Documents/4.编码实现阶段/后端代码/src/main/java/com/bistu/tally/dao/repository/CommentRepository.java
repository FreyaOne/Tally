package com.bistu.tally.dao.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bistu.tally.dao.entity.Comment;


public interface CommentRepository extends JpaRepository<Comment, Long>{
	/**
	 * 通过动态编号删除记录
	 * @param id 动态编号
	 */
	public void deleteBySocialId(Long id); 
	/**
	 * 通过动态编号查询记录是否存在
	 * @param id 动态编号
	 * @return true or false
	 */
	public boolean existsBySocialId(Long id);
	/**
	 * 通过动态编号查找所有记录
	 * @param id 动态编号
	 * @return ArrayList
	 */
	public List<Comment> findAllBySocialId(Long id);
	/**
	 * 通过编号和用户编号查找记录是否存在
	 * @param id 编号
	 * @param userId 用户编号
	 * @return true or false
	 */
	public boolean existsByIdAndUserId(Long id, Long userId);
	
}
