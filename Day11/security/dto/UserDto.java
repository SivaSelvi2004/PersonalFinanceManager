package com.neo.security.dto;


import java.util.List;

import lombok.Data;

@Data
public class UserDto {
	
	private int id;
	
	private String email;
	
	private String userName;
	
	private List<IncomeDto> incm;

}
