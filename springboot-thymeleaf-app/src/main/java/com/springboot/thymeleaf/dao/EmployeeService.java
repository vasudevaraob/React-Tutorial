package com.springboot.thymeleaf.dao;

import java.util.List;

import com.springboot.thymeleaf.entity.Employee;
import org.springframework.data.domain.Page;

public interface EmployeeService {
	
	List<Employee> getAllEmployees();
	void saveEmployee(Employee employee);
	Employee getEmployeeById(Long id);
	void deleteEmployeeById(long id);
	//Page < Employee > findPaginated(int pageNo, int pageSize);
}
