package com.bistu.tally.dao.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.bistu.tally.helper.BaseEntity;

import lombok.Data;

@Table(name = "t_User")
@Entity(name = "User")
@Data
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;				//Id 自增
	@Column(name = "user_name", nullable = false)
	private String userName;		//用户名

	@Column(name = "user_password", nullable = false)
	private String userPassword;	//密码

}
