package com.bistu.tally.helper;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

import com.bistu.tally.dao.entity.User;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Data
@Component
public class UserBean {
	private Long userId;
	private String username;
	private String password;

	/**
	 * entity转bean
	 * 
	 * @param entity
	 * @return
	 */
	public static UserBean of(User entity) {
		log.info("entity is {}", entity);
		UserBean bean = new UserBean();
		bean.setUserId(entity.getId());
		bean.setUsername(entity.getUserName());
		bean.setPassword(entity.getUserPassword());
		log.info("bean is: {}", bean);
		return bean;
	}

	/**
	 * bean转entity
	 * 
	 * @param bean
	 * @return
	 */
	public static User of(UserBean bean) {
		log.info("bean is {}", bean);
		User user = new User();
		user.setId(bean.getUserId());
		user.setUserName(bean.getUsername());
		user.setUserPassword(bean.getPassword());
		log.info("entity is: {}", user);
		return user;
	}
}
