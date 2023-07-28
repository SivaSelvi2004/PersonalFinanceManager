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
import com.neo.security.repository.ExpenseRepo;
import com.neo.security.repository.IncomeRepo;
import com.neo.security.repository.UserRepository;
import com.neo.security.service.IncomeService;

@CrossOrigin(origins="http://loclahost:3000")
@RestController
public class IncomeController {
	@Autowired
	UserRepository userRepo;

	@Autowired
	IncomeService incomeservice;
	
	@Autowired
	IncomeRepo incomerepo;

	@Autowired
	ExpenseRepo expenseRepo;
	
	@PostMapping("/income/{email}")
	public String addIncome(@RequestBody Income income ,@PathVariable String email) {
		incomeservice.addIncomeDetails(income,email);
		return "Added";
    }
//	@GetMapping("/income")
//	public List<Income> getAll(){
//		return incomeservice.getAllIncome();
//	}
	
	@GetMapping("/getBalance/{userEmail}")
	public double getBalance(@PathVariable String userEmail) {
//		userRepo.findByEmail(userEmail).get(0).getBalance
		
		return incomerepo.findBalanceByEmail(userEmail) + expenseRepo.findBalanceByEmail(userEmail);
	}
	
	@GetMapping("/income/getIncome/{email}")
	public List<Income> getByEmail(@PathVariable String email){
		return incomerepo.findByEmail(email);
	}
	
	@PutMapping("/income/update/{incomeId}")
	public Income updateById(@PathVariable int incomeId,@RequestBody Income income) {
		return incomeservice.updateIncomeById(incomeId,income);
	}
	
	@DeleteMapping("/income/{incomeId}")
	public String deleteIncome(@PathVariable int incomeId) {
		incomeservice.deleteByIncomeId(incomeId);
		return "Details deleted";
	}

}