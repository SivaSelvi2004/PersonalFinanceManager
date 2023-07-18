package com.example.pfm.model;
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
	private int b_id;
	private double b_amount;
	private String b_source;
	public int getB_id() {
		return b_id;
	}
	public void setB_id(int b_id) {
		this.b_id = b_id;
	}
	public double getB_amount() {
		return b_amount;
	}
	public void setB_amount(double b_amount) {
		this.b_amount = b_amount;
	}
	public String getB_source() {
		return b_source;
	}
	public void setB_source(String b_source) {
		this.b_source = b_source;
	}

	@ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL )
	private User user; 
	
}