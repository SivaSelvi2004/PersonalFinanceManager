package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Debt;

public interface DebtRepo extends JpaRepository<Debt,Integer>{

}
