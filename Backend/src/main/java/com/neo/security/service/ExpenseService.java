package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Expense;
import com.neo.security.repository.ExpenseRepo;

@Service
public class ExpenseService {

	@Autowired
	ExpenseRepo expenseRepository;
	
	
	public String addExpenseDetails(Expense expense,String email) {
		expense.setEmail(email);
		expenseRepository.save(expense);
	return "Expense Details added";
}
	public List<Expense> getAllExpense() {
      return expenseRepository.findAll();
  }
  
 
  
  
  public Expense updateExpenseById(int expenseId, Expense expense) {
	  Expense exp = expenseRepository.findById(expenseId).get();
	  exp.setExpenseAmount(expense.getExpenseAmount());
      exp.setExpenseSource(expense.getExpenseSource());
      exp.setExpenseDesc(expense.getExpenseDesc());
      exp.setExpenseDate(expense.getExpenseDate());
    return expenseRepository.save(exp);
  }
  
  public String deleteByExpenseId(int expenseId) {
      if(expenseRepository.findById(expenseId).isPresent()){
    	  expenseRepository.deleteById(expenseId);
        return "Expense Details Deleted"; } 
      return "Id not found";
  }




}
