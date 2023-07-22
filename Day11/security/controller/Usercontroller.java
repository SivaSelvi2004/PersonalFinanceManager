package com.neo.security.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.neo.security.dto.UserDto;
import com.neo.security.entity.User;
import com.neo.security.service.UserServiceImpl;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v4/user")
public class Usercontroller {

	@Autowired
	private UserServiceImpl service;
	
//	@PostMapping("/user")
//	public Boolean addUsers(@RequestBody User user) {
//        return service.addUser(user);
//    }

	@GetMapping("/get")
	public List<User> getUsers(){
		return service.getAllUsers();
	}
	
	@GetMapping("/get/{email}")
	public User getUserByEmail(@PathVariable String email){
		return service.getUserByEmail(email);
	}
	
	@PutMapping("/user/update/{id}")
	public User updateById(@PathVariable int id,@RequestBody User user) {
		user.setId(id);
		return service.updateUserById(user);
	}
	@DeleteMapping("/user/{id}")
	public String deleteUser(@PathVariable int id) {
		return service.deleteUser(id);
	}
	
	
}
