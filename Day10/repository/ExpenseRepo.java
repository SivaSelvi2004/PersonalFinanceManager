package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Expense;

public interface ExpenseRepo extends JpaRepository<Expense,Integer>{

}
