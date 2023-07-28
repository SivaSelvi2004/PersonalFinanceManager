package com.neo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Borrow;

public interface BorrowRepo extends JpaRepository<Borrow,Integer>{

}
