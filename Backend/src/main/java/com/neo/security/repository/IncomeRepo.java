package com.neo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.transaction.annotation.Transactional;

import com.neo.security.entity.Income;

public interface IncomeRepo extends JpaRepository<Income, Integer> {
    public List<Income> findByEmail(String email);
    
    @Query(value="select COALESCE(sum(income_amount), 0) from Income where email=:email", nativeQuery=true)
    public double findBalanceByEmail(String email);
}