import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/api/v1/employees"

export function getEmployeeById(employeeId){
    return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeId);
}

export function getAllEmployees(){
    return axios.get(EMPLOYEE_API_BASE_URL);
}

export function deleteEmployee(employeeId){
    return axios.delete(EMPLOYEE_API_BASE_URL+'/'+employeeId);
 }

 export function updateEmployee(employee,employeeId){
    return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
}

export function createEmployee(employee){
    return axios.post(EMPLOYEE_API_BASE_URL,employee);}