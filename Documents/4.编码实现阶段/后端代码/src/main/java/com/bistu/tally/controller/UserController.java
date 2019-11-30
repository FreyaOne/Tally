package com.bistu.tally.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bistu.tally.bean.ResultInfo;
import com.bistu.tally.dao.entity.User;
import com.bistu.tally.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class UserController {
	@Autowired
	private UserService userService;

	/**
	 * Url接受参数，通过userService检查数据库，登入功能
	 * 
	 * @param username 用户名
	 * @param password 密码
	 * @return 登入成功返回code 1 失败返回 -1
	 */
	@GetMapping({ "/login/{username}&{password}" })
	public ResultInfo login(@PathVariable("username") String username, @PathVariable("password") String password) {
		log.info("get requesting...");
		ArrayList<User> users = new ArrayList<User>();
		users = userService.findByUserNameAndPassword(username, password);
		if (users.size() != 0) {
			ResultInfo resultInfo = ResultInfo.success();
			log.info("users is: {}", users);
			resultInfo.setData(users);
			return resultInfo;
		} else {
			log.info("db do not have this username or password is wrong");
			ResultInfo resultInfo = ResultInfo.failure();
			return resultInfo;
		}
	}

	/**
	 * Url接受参数，通过userService检查数据库，已经存在的用户名不得再次注册，注册功能
	 * 
	 * @param username
	 * @param password
	 * @return
	 */
	@PostMapping({ "/register/{username}&{password}" })
	public ResultInfo register(@PathVariable("username") String username, @PathVariable("password") String password) {
		log.info("get requesting...");
		if (userService.findByUserName(username).size() == 0) {
			if (userService.addUser(username, password)) {
				ResultInfo resultInfo = ResultInfo.success();
				resultInfo.setData(userService.findByUserName(username));
				return resultInfo;
			} else {
				log.info("db can not add this username");
				ResultInfo resultInfo = ResultInfo.failure();
				resultInfo.setMesg("系统无法添加该用户！");
				return resultInfo;
			}
		} else {
			log.info("db has this username already");
			ResultInfo resultInfo = ResultInfo.failure();
			resultInfo.setMesg("该用户已经被注册过！");
			return resultInfo;
		}
	}

	@PutMapping("/forget/{username}&{password}")
	public ResultInfo forgetPassword(@PathVariable("username") String username,
			@PathVariable("password") String password) {
		if (userService.updatePassword(username, password)) {
			ResultInfo resultInfo = ResultInfo.success();
			resultInfo.setData(userService.findByUserName(username));
			return resultInfo;
		} else {
			ResultInfo resultInfo = ResultInfo.failure();
			resultInfo.setMesg("修改密码失败");
			return resultInfo;
		}
	}
}
