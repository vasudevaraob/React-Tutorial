package com.springboot.thymeleaf.entity;

import java.util.List;

public class EmployeeList {
	
	private List<Employee> EmployeeList;

	public List<Employee> getEmployeeList() {
		return EmployeeList;
	}

	public void setEmployeeList(List<Employee> employeeList) {
		EmployeeList = employeeList;
	}

	@Override
	public String toString() {
		return "EmployeeList [EmployeeList=" + EmployeeList + "]";
	}
	

}
