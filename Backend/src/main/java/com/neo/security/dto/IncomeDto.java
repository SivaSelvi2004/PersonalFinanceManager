package com.neo.security.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class IncomeDto {
	private int incomeId;
	private double incomeAmount;
	private String incomeSource;
	private String incomeDesc;
	private Date incomeDate;
}
