package com.bistu.tally.dao.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bistu.tally.dao.entity.Budget;

public interface BudgetRepository extends JpaRepository<Budget, Long> {
	ArrayList<Budget> findByUserid(Long userid);
	
	@Modifying
	@Query(nativeQuery = true,value = "UPDATE t_budget SET budget = ?1 WHERE userid = ?2")
	public int updateBudget(float budget, Long userid);
}
