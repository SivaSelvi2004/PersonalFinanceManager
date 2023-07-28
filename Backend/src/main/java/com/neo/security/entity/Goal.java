package com.neo.security.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Goal {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int goalId;
	private String goalSource;
	private double targetAmount;
	private double savedAmount;
	private String goalDesc;
	private Date desiredDate;
	
	private String email;
	
//
//	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
//	private User user; 
	
}