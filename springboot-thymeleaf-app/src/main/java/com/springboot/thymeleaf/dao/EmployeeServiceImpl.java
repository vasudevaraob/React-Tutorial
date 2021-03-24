package com.springboot.thymeleaf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.springboot.thymeleaf.entity.Employee;

@Component
public class EmployeeServiceImpl implements EmployeeService{

	private static final String GET_EMPLOYEES_ENDPOINT_URL = "http://localhost:8081/api/v1/employees";
	private static final String CREATE_EMPLOYEE_ENDPOINT_URL = "http://localhost:8081/api/v1/employees";
	private static final String GET_EMPLOYEE_ENDPOINT_URL = "http://localhost:8081/api/v1/employees/{id}";
	private static final String DELETE_EMPLOYEE_ENDPOINT_URL = "http://localhost:8081/api/v1/employees/{id}";

	private static RestTemplate restTemplate = new RestTemplate();
	
	@Override
	public List<Employee> getAllEmployees() {
		System.out.println("------------------------->In Get Employee<------------------------------");
		List<Employee> usersMap = restTemplate.getForObject(GET_EMPLOYEES_ENDPOINT_URL,List.class);
		return usersMap;
	}

	@Override
	public void saveEmployee(Employee employee) {
		Employee result = restTemplate.postForObject(CREATE_EMPLOYEE_ENDPOINT_URL, employee, Employee.class);
		System.out.println(result);
	}

	@Override
	public Employee getEmployeeById(Long id) {
		
		Map < String, Long > params = new HashMap < String, Long > ();
        params.put("id", id);
        System.out.println("------------------------->In Get by ID Employee<------------------------------");
        Employee result = restTemplate.getForObject(GET_EMPLOYEE_ENDPOINT_URL, Employee.class, params);
        
		return result;
	}

	@Override
	public void deleteEmployeeById(long id) {
		Map < String, Long > params = new HashMap < String, Long > ();
        params.put("id", id);
        System.out.println("------------------------->In Delete Employee<------------------------------");
        restTemplate.delete(DELETE_EMPLOYEE_ENDPOINT_URL, params);
	}

	/*
	 * @Override public Page<Employee> findPaginated(int pageNo, int pageSize) {
	 * Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
	 * 
	 * Page<Employee> usersMap = (Page<Employee>)
	 * restTemplate.getForObject(GET_EMPLOYEES_ENDPOINT_URL,List.class,pageable);
	 * return usersMap; // return this.employeeRepository.findAll(pageable); }
	 */
}
