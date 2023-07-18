package com.example.pfm.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;

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
public class Income {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int i_id;
	private double i_amount;
	private String i_source;
	private String i_desc;
	private Date i_date;
	private Time i_time;

	
	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
	private User user; 
	
}