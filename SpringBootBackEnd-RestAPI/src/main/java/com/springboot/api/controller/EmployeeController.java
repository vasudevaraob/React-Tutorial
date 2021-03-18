package com.springboot.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.api.exception.ResourceNotFoundException;
import com.springboot.api.model.Employee;
import com.springboot.api.repository.EmployeeRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository repo;

	// get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return repo.findAll();
	}

	// save employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return repo.save(employee);
	}

	// get employee by ID
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee emp = repo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("id is Not available in database"));
		return ResponseEntity.ok(emp);
	}

	// update employee
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {

		Employee employee = repo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("id is Not available in database"));
		employee.setFirstName(emp.getFirstName());
		employee.setLastName(emp.getLastName());
		employee.setEmailId(emp.getEmailId());
		final Employee emp1 = repo.save(employee);
		return ResponseEntity.ok(emp1);
	}

	// delete Employee Details
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		Employee emp = repo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("id is Not available in database"));
		repo.delete(emp);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Employee details Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
