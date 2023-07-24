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

import com.neo.security.entity.Income;
import com.neo.security.service.IncomeService;

@CrossOrigin(origins="http://loclahost:3000")
@RestController
public class IncomeController {
	

	@Autowired
	IncomeService incomeservice;

	@PostMapping("/income")
	public String addIncome(@RequestBody Income income) {
		incomeservice.addIncomeDetails(income);
		return "Added";
    }
	@GetMapping("/income")
	public List<Income> getAll(){
		return incomeservice.getAllIncome();
	}
	
	@GetMapping("/income/get/{incomeId}")
	public Income getById(@PathVariable int incomeId){
		return incomeservice.getIncomeById(incomeId);
	}
	
	@PutMapping("/income/update/{incomeId}")
	public Income updateById(@PathVariable int incomeId,@RequestBody Income income) {
		return incomeservice.updateIncomeById(incomeId,income);
	}
	
	@DeleteMapping("/income/delete/{incomeId}")
	public String deleteIncome(@PathVariable int incomeId) {
		incomeservice.deleteByIncomeId(incomeId);
		return "Details deleted";
	}

}
