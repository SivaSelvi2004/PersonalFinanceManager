package com.neo.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.neo.security.entity.Income;
import com.neo.security.repository.IncomeRepo;
import com.neo.security.repository.UserRepository;

@Service
public class IncomeService {

	@Autowired
	IncomeRepo incomeRepository;
	@Autowired
	UserRepository userRepository;

//	public String addIncome(IncomeDto incomeDto) {
//		
//		System.err.println("---------------------------------------");
//		System.err.println(incomeDto.toString());
//		Optional<User> optional = userRepository.findById(incomeDto.getId());
//		Income income = Income.builder().incomeAmount(incomeDto.getIncomeAmount()).incomeDate(incomeDto.getIncomeDate())
//				.incomeDesc(incomeDto.getIncomeDesc()).incomeSource(incomeDto.getIncomeSource()).build();
//					
//		if (optional.isPresent()) {
//			User user = optional.get();
//			if (user.getIncome() == null) {
//				user.setIncome(Arrays.asList(income));
//			} else {
//				user.getIncome().add(income);
//			}
//			income.setUser(user);
//			userRepository.save(user);
//			return "Income Added Successfully";
//		}
//		User user = User.builder().build();
//		user.setIncome(Arrays.asList(income));
//		income.setUser(user);
//		userRepository.save(user);
//		return "User not found";
//
//	}
	
	
	public String addIncomeDetails(Income income) {
	incomeRepository.save(income);
	return "Income Details added";
}
	public List<Income> getAllIncome() {
      return incomeRepository.findAll();
  }
  
  public Income getIncomeById(int incomeId) {
      return incomeRepository.findById(incomeId).get();
  }
  
  
  public Income updateIncomeById(int incomeId, Income income) {
  	Income inc = incomeRepository.findById(incomeId).get();
      inc.setIncomeAmount(income.getIncomeAmount());
      inc.setIncomeSource(income.getIncomeSource());
      inc.setIncomeDesc(income.getIncomeDesc());
      inc.setIncomeDate(income.getIncomeDate());
    return incomeRepository.save(inc);
  }
  
  public String deleteByIncomeId(int incomeId) {
      if(incomeRepository.findById(incomeId).isPresent()){
    	  incomeRepository.deleteById(incomeId);
        return "Income Details Deleted"; } 
      return "Id not found";
  }




}
