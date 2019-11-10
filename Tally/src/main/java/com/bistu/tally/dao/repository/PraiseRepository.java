package com.bistu.tally.dao.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bistu.tally.dao.entity.Praise;

public interface PraiseRepository extends JpaRepository<Praise, Long>{
	/**
	 * 通过用户编号和动态编号删除记录
	 * @param uid 用户编号
	 * @param sid 动态编号
	 */
	@Transactional
    @Modifying
    @Query(value = "delete from t_praise where user_id =?1 and social_id =?2",nativeQuery = true)
    public void deleteCase(Long uid, Long sid);
	/**
	 * 通过动态编号和用户编号查找记录是否存在
	 * @param socialId 动态编号
	 * @param userId 用户编号
	 * @return true or false
	 */
	public boolean existsByUserIdAndSocialId(Long userId, Long socialId);
	/**
	 * 通过动态编号删除记录
	 * @param id 动态编号
	 */
	public void deleteBySocialId(Long id);
	/**
	 * 通过动态编号查找记录是否存在
	 * @param id 动态编号
	 * @return true or false
	 */
	public boolean existsBySocialId(Long id);
}
