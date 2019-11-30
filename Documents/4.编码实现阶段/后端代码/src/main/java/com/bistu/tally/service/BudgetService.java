package com.bistu.tally.service;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.bistu.tally.dao.entity.Budget;
import com.bistu.tally.dao.repository.BudgetRepository;

@Service
public class BudgetService {
	@Autowired
	private BudgetRepository budgetRepository;

	@Transactional
	public ArrayList<Budget> findByUserId(Long userid) {
		ArrayList<Budget> budgets = new ArrayList<>();
		budgets = this.budgetRepository.findByUserid(userid);
		if (budgets.size() == 0) {
			Budget budget = new Budget();
			budget.setUserid(userid);
			budget.setBudget(0);
			budgetRepository.save(budget);
			return this.budgetRepository.findByUserid(userid);
		} else {
			return budgets;
		}
	}

	@Transactional
	public boolean updateBudget(Long userid, float budget) {
		if (budgetRepository.updateBudget(budget, userid) == 1) {
			return true;
		} else {
			return false;
		}
	}

	public boolean addBudget(Long userid, float budgets) {
		Budget budget = new Budget();
		budget.setUserid(userid);
		budget.setBudget(budgets);
		budgetRepository.save(budget);
		return true;
	}

}
