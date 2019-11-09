package com.bistu.tally.dao.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.bistu.tally.helper.BaseEntity;

import lombok.Data;

@Entity(name="Comment")
@Table(name="t_comment")
@Data
public class Comment extends BaseEntity implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Column(name="social_id", nullable=false)
	private Long socialId;			//评论动态编号
	
	@Column(name="comment_content", nullable=false)
	private String commentContent;	//评论内容
}
