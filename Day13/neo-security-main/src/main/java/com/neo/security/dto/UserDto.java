package com.neo.security.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	
	private int id;
	private String email;
	private String userName;
	
	private List<IncomeDto> incomes;

}
