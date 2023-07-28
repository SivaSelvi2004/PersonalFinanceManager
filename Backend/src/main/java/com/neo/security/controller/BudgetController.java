package com.neo.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.entity.Budget;
import com.neo.security.service.BudgetService;

@CrossOrigin(origins="http://loclahost:3000")
@RestController
public class BudgetController {
	

	@Autowired
	BudgetService budgetservice;

	@PostMapping("/budget")
	public String addBudget(@RequestBody Budget budget) {
		budgetservice.addBudgetDetails(budget);
		return "Added";
    }
	@GetMapping("/budget")
	public List<Budget> getAll(){
		return budgetservice.getAllBudget();
	}
	
	@GetMapping("/budget/get/{budgetId}")
	public Budget getById(@PathVariable int budgetId){
		return budgetservice.getBudgetById(budgetId);
	}
	
	@PutMapping("/budget/update/{budgetId}")
	public Budget updateById(@PathVariable int budgetId,@RequestBody Budget budget) {
		return budgetservice.updateBudgetById(budgetId,budget);
	}
	
	@DeleteMapping("/budget/delete/{budgetId}")
	public String deleteIncome(@PathVariable int budgetId) {
		budgetservice.deleteByBudgetId(budgetId);
		return "Details deleted";
	}

}
