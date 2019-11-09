package com.bistu.tally.dao.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bistu.tally.dao.entity.Social;
import com.bistu.tally.dao.repository.custom.SocialCustomRepository;

public interface SocialRepository extends JpaRepository<Social, Long>, SocialCustomRepository{
	/**
	 * 通过用户编号查找所有记录
	 * @param id 用户编号
	 * @return List
	 */
	public List<Social> findSocialByUserId(Long id);

}
