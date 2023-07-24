package com.neo.security.controller;

import java.util.List;

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

import com.neo.security.entity.Expense;
import com.neo.security.service.ExpenseService;

@CrossOrigin(origins="http://loclahost:3000")
@RestController
public class ExpenseController {
	

	@Autowired
	ExpenseService expenseService;

	@PostMapping("/expense")
	public String addExpense(@RequestBody Expense expense) {
		expenseService.addExpenseDetails(expense);
		return "Added";
    }
	@GetMapping("/expense")
	public List<Expense> getAll(){
		return expenseService.getAllExpense();
	}
	
	@GetMapping("/expense/get/{expenseId}")
	public Expense getById(@PathVariable int expenseId){
		return expenseService.getExpenseById(expenseId);
	}
	
	@PutMapping("/expense/update/{expenseId}")
	public Expense updateById(@PathVariable int expenseId,@RequestBody Expense expense) {
		return expenseService.updateExpenseById(expenseId,expense);
	}
	
	@DeleteMapping("/expense/delete/{expenseId}")
	public String deleteExpense(@PathVariable int expenseId) {
		expenseService.deleteByExpenseId(expenseId);
		return "Details deleted";
	}

}