package com.bistu.tally.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.bistu.tally.helper.BaseEntity;
import lombok.Data;

@Table(name="t_Social")
@Entity(name="Social")
@Data
public class Social extends BaseEntity implements java.io.Serializable{
	private static final long serialVersionUID = 1L;
	
	@Column(name = "social_content", nullable = false)
	private String socialContent;		//动态内容
		
	@Column(name = "comments_num", nullable = false)
	private int commentsNum;			//评论数
	
	@Column(name = "longitude", nullable = false)
	private double longitude;			//纬度
	
	@Column(name = "latitude", nullable = false)
	private double latitude; 			//经度
}
