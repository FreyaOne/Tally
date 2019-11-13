package com.bistu.tally.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bistu.tally.bean.ResultInfo;
import com.bistu.tally.service.BudgetService;

import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.asm.Advice.This;

@Slf4j
@RestController
public class BudgetController {
	@Autowired
	private BudgetService budgetService;

	@PostMapping({ "/budget/update/" })
	public ResultInfo updateBudgetFromUserId(@RequestParam("userid") Long userid,
			@RequestParam("budget") float budget) {
		log.info("get requesting...");
		System.out.print("userid" + userid);
		System.out.print("budget" + budget);
		if (this.budgetService.updateBudget(userid, budget)) {
			ResultInfo resultInfo = ResultInfo.success();
			resultInfo.setData(budgetService.findByUserId(userid));
			return resultInfo;
		} else {
			ResultInfo resultInfo = ResultInfo.failure();
			return resultInfo;
		}
	}

	@GetMapping({ "/budget/get" })
	public ResultInfo getBudgetFromUserId(@RequestParam("userid") Long userid) {
		log.info("get requesting...");
		ResultInfo resultInfo = ResultInfo.success();
		resultInfo.setData(budgetService.findByUserId(userid));
		return resultInfo;
	}

	@PostMapping({ "/budget/add/" })
	public ResultInfo addBudget(@RequestParam("userid") Long userid, @RequestParam("budget") float budget) {
		ResultInfo resultInfo = ResultInfo.success();
		this.budgetService.addBudget(userid, budget);
		resultInfo.setData(budgetService.findByUserId(userid));
		return resultInfo;
	}

}
