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

import com.neo.security.entity.Expense;
import com.neo.security.entity.Lend;
import com.neo.security.repository.ExpenseRepo;
import com.neo.security.repository.UserRepository;
//import com.neo.security.entity.Income;
import com.neo.security.service.ExpenseService;
import com.neo.security.service.LendService;
//import com.neo.security.service.IncomeService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LendController {
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	ExpenseRepo expenseRepo;
	
	@Autowired
	LendService lendservice;

	@PostMapping("/lend/{email}")
	public String addLend(@RequestBody Lend lend,@PathVariable String email) {
		lendservice.addLendDetails(lend,email);
		return "Added";
    }
//	@GetMapping("/expense")
//	public List<Expense> getAll(){
//		return expenseservice.getAllIncome();
//	}
//	@GetMapping("/getExpenseBalance/{userEmail}")
//	public double getBalance(@PathVariable String userEmail) {
////		userRepo.findByEmail(userEmail).get(0).getBalance
//		
//		return expenseRepo.findBalanceByEmail(userEmail);
//	}
	@GetMapping("/lend/getLend/{email}")
    public List<Lend> getByEmail(@PathVariable String email) {
        return lendservice.findByEmail(email);
    }
//	@GetMapping("/lend/getLend/{email}")
//	public List<Lend> getById(@PathVariable String email){
//		return lendservice.findByEmail(email);
//	}
//	@GetMapping("/income")
//	public List<Income> getAll(){
//		return incomeservice.getAllIncome();
//	}
//	
//	@GetMapping("/income/get/{incomeId}")
//	public Income getById(@PathVariable int incomeId){
//		return incomeservice.getIncomeByEmail(incomeId);
//	}
	@PutMapping("/lend/updatelend/{lendingId}")
	public Lend updateById(@PathVariable int lendingId,@RequestBody Lend lend) {
		return lendservice.updateLendById(lendingId,lend);
	}
	
	@DeleteMapping("/lend/{lendId}")
	public String deleteLend(@PathVariable int lendId) {
		lendservice.deleteByLendId(lendId);
		return "Details deleted";
	}

}