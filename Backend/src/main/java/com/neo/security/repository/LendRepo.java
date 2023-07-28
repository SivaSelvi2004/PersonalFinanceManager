package com.neo.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.neo.security.entity.Lend;

public interface LendRepo extends JpaRepository<Lend, Integer> {
	List<Lend> findByEmail(String email);

}