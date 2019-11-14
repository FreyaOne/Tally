package com.bistu.tally.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Table(name = "t_Budget")
@Entity(name = "Budget")
@Data
public class Budget {
	@Id
	@Column(name = "userid", nullable = false)
	private Long userid;

	@Column(name = "budget", nullable = false)
	private float budget = 0;

}
