 package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neo.security.entity.Lend;
import com.neo.security.repository.LendRepo;
@Service
public class LendService {
	@Autowired
	LendRepo lendRepo;
	
	public String addLendDetails(Lend lend,String email) {
		lend.setEmail(email);
//		lend.setExpenseAmt((-1)*expense.getExpenseAmt());
		lendRepo.save(lend);
		return "Income Details added";
}
//	public List<Expense> getAllIncome() {
//      return lendrepo.findAll();
//  }
  
//  public Lend getIncomeById(int lendingId) {
//      return lendrepo.findById(lendingId).get();
//  }
  
  public List<Lend> findByEmail(String email) {
      return lendRepo.findByEmail(email);
  }
  
  public Lend updateLendById(int LendId, Lend lend) {
  	Lend le = lendRepo.findById(LendId).get();
  	  le.setLendName(lend.getLendName());
  	  le.setLendAmount(lend.getLendAmount());
  	  le.setLendDate(lend.getLendDate());
  	  le.setLendDueDate(lend.getLendDueDate());
  	  le.setLendDesc(lend.getLendDesc());
    return lendRepo.save(le);
  }
  
  public String deleteByLendId(int lendId) {
      if(lendRepo.findById(lendId).isPresent()){
    	  lendRepo.deleteById(lendId);
        return "Lend Details Deleted"; } 
      return "Id not found";
  }

}