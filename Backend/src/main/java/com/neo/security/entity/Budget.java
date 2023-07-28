package com.neo.security.entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
public class Budget {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int budgetId;
	private double budgetAmount;
	private String budgetSource;

//	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
//	private User user; 
	
}