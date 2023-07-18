package com.example.pfm.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String fName;
	private String lName;
	private String userName;
	private String password;
	private double balance;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="user")
	private List<Income> income; 
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="user")
	private List<Expense> expense; 
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="user")
	private List<Budget> budget; 
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="user")
	private List<Goal> goal; 
	
	@OneToOne(targetEntity=Debt.class)
	private Debt debt;

		
}