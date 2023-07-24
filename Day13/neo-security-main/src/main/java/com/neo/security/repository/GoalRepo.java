package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Goal;

public interface GoalRepo extends JpaRepository<Goal,Integer>{

}
