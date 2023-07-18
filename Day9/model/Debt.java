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

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Debt {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int d_id;


	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="debt")
	private List<Lend> lend;
	
	@OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL , mappedBy="debt")
	private List<Borrow> borrow; 
}