package com.bistu.tally.dao.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.bistu.tally.helper.BaseEntity;

import lombok.Data;

@Table(name="t_praise")
@Entity(name="Praise")
@Data
public class Praise extends BaseEntity implements Serializable{
	private static final long serialVersionUID = 1L;
		
	@Column(name="social_id", nullable=false)
	private Long socialId;	//点赞动态编号
}
