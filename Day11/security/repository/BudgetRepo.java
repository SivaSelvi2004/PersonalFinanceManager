package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Budget;

public interface BudgetRepo extends JpaRepository<Budget,Integer>{

}
