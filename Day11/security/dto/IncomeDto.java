package com.neo.security.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class IncomeDto {
	private int incomeId;
	private double incomeAmount;
	private String incomeSource;
	private String incomeDesc;
	private Date incomeDate;
}
