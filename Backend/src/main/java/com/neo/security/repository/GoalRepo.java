package com.neo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Goal;

public interface GoalRepo extends JpaRepository<Goal,Integer>{

	 public List<Goal> findByEmail(String email);
	 
}
