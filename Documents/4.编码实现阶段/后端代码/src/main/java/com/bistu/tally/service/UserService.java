package com.bistu.tally.service;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bistu.tally.dao.entity.User;
import com.bistu.tally.dao.repository.UserRepository;
@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	/**
	 * 通过用户名检查数据库中，是否已经存在该用户名
	 * 
	 * @param username
	 * @return
	 */
	public ArrayList<User> findByUserName(String username) {
		ArrayList<User> users = new ArrayList<User>();
		users = userRepository.findByUserName(username);
		return users;
	}

	/**
	 * 通过用户名以及密码，增加t_user表，增加一条用户信息
	 * 
	 * @param username 用户名
	 * @param password 密码
	 * @return 增加成功 true
	 */
	public @ResponseBody boolean addUser(String username, String password) {
		User user = new User();
		user.setUserName(username);
		user.setUserPassword(password);
		userRepository.save(user);
		return true;
	}

	/**
	 * 通过用户名和密码，查询t_user中是否存在该用户
	 * 
	 * @param username
	 * @param password
	 * @return 该用户的ArrayList
	 */
	public ArrayList<User> findByUserNameAndPassword(String username, String password) {
		ArrayList<User> users = new ArrayList<User>();
		users = userRepository.findByUserNameAndUserPassword(username, password);
		return users;
	}
	@Transactional
	public boolean updatePassword(String username,String password) {
		if(userRepository.updatePassword(password, username)==1) {
			return true;
		}
		else {
			return false;
		}
	}

}
