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
public class Lend{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int l_id;
	private String l_name;
	private double l_amount;
	private Date l_date;
	private Date l_dueDate;
	private String l_desc;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
	private Debt debt; 
	
}