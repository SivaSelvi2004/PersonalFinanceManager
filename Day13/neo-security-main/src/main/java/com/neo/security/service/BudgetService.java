package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Budget;
import com.neo.security.repository.BudgetRepo;

@Service
public class BudgetService {

	@Autowired
	BudgetRepo budgetRepository;
	
	
	public String addBudgetDetails(Budget budget) {
		budgetRepository.save(budget);
	return "Budget Details added";
}
	public List<Budget> getAllBudget() {
      return budgetRepository.findAll();
  }
  
  public Budget getBudgetById(int budgetId) {
      return budgetRepository.findById(budgetId).get();
  }
  
  
  public Budget updateBudgetById(int budgetId, Budget budget) {
	  Budget bud = budgetRepository.findById(budgetId).get();
	  bud.setBudgetAmount(budget.getBudgetAmount());
	  bud.setBudgetSource(budget.getBudgetSource());
	  
    return budgetRepository.save(bud);
  }
  
  public String deleteByBudgetId(int expenseId) {
      if(budgetRepository.findById(expenseId).isPresent()){
    	  budgetRepository.deleteById(expenseId);
        return "Budget Details Deleted"; } 
      return "Id not found";
  }




}
