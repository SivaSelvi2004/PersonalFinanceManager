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
public class Lend{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int lendId;
	private String lendName;
	private double lendAmount;
	private Date lendDate;
	private Date lendDueDate;
	private String lendDesc;
    private String email;

	
	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
	private Debt debt; 
	
}