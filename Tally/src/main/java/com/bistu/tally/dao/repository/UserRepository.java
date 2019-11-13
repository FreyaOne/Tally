package com.bistu.tally.dao.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bistu.tally.dao.entity.User;


public interface UserRepository extends JpaRepository<User, Long> {
	/**
	 * 通过用户名和密码查询数据库
	 * 
	 * @param userName
	 * @param password
	 * @return ArrayList
	 */
	ArrayList<User> findByUserNameAndUserPassword(String userName, String password);

	/**
	 * 通过用户名查询数据库
	 * 
	 * @param userName
	 * @return
	 */
	ArrayList<User> findByUserName(String userName);
	
	@Modifying
	@Query("update User user set user.userPassword=?1 where userName=?2")
	public int updatePassword(String password,String username);
	

	@Query(value="select user_name from t_user where id = ?1", nativeQuery = true)
	public String findCase(Long id);

}
