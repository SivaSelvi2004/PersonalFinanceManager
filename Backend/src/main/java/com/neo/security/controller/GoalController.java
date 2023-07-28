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

import com.neo.security.entity.Goal;
import com.neo.security.entity.Income;
import com.neo.security.repository.ExpenseRepo;
import com.neo.security.repository.GoalRepo;
import com.neo.security.repository.IncomeRepo;
import com.neo.security.repository.UserRepository;
import com.neo.security.service.GoalService;
import com.neo.security.service.IncomeService;

@CrossOrigin(origins="http://loclahost:3000")
@RestController
public class GoalController {
	@Autowired
	UserRepository userRepo;

	@Autowired
	GoalService goalService;
	
	@Autowired
	GoalRepo goalRepo;

	@Autowired
	ExpenseRepo expenseRepo;
	
	@PostMapping("/goal/{email}")
	public String addGoal(@RequestBody Goal goal ,@PathVariable String email) {
		goalService.addGoalDetails(goal,email);
		return "Added";
    }
	
	
	@GetMapping("/goal/getGoal/{email}")
	public List<Goal> getByEmail(@PathVariable String email){
		return goalRepo.findByEmail(email);
	}
	
	@PutMapping("/goal/update/{goalId}")
	public Goal updateById(@PathVariable int incomeId,@RequestBody Goal goal) {
		return goalService.updateGoalById(incomeId,goal);
	}
	
	@DeleteMapping("/goal/delete/{goalId}")
	public String deleteGoal(@PathVariable int goalId) {
		goalService.deleteByGoalId(goalId);
		return "Details deleted";
	}

}