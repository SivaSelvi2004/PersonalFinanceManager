package com.example.pfm.model;

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
public class Borrow{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bo_id;
	private String bo_name;
	private double bo_amount;
	private Date bo_date;
	private Date bo_dueDate;
	private String bo_desc;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
	private Debt debt; 
	
}