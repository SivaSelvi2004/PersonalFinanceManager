package com.neo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.neo.security.entity.Expense;

public interface ExpenseRepo extends JpaRepository<Expense,Integer>{
	
	public List<Expense> findByEmail(String email);
	
	@Query(value="select COALESCE(sum(expense_amount)) from Expense where email=:email",nativeQuery=true)
	public double findBalanceByEmail(String email);
}
