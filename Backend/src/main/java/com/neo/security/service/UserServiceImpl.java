package com.neo.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.neo.security.entity.User;
import com.neo.security.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	public Boolean addUser(User user) {
		
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		
		User user1 = User.builder()
				.userName(user.getUsername())
				.email(user.getEmail())
				.password(encodedPassword)
				.build();
		
		return repo.save(user1)!=null ? true:false;
	}

	@Override
	public List<User> getAllUsers() {
		return repo.findAll();
	}

	@Override
	public User getUserByEmail(String email) {
	
		return repo.findByEmail(email).get();
	}
	
	@Override
	public Optional<User> findByEmail(String email){
		return repo.findByEmail(email);
	}
	

}