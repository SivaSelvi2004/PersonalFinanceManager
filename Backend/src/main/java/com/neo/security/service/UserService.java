package com.neo.security.service;

import java.util.List;
import java.util.Optional;

import com.neo.security.entity.User;


public interface UserService {
	
	Boolean addUser(User user);

	List<User> getAllUsers();
	
	User getUserByEmail(String email);
	
	Optional<User> findByEmail(String email);
}