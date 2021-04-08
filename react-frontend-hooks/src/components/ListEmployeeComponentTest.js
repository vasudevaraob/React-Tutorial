import React,{useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import { AiFillDelete } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import { deleteEmployee, getAllEmployees } from '../services/EmployeeService';

function ListEmployeeComponentTest(props) {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees().then(
            (response) => {
                setEmployees(response.data)
            });
    }, [])

    const addEmployee = () => {
        props.history.push('/add-employee/_add');
    }

    const editEmployee = (id) => {
        props.history.push(`/add-employee/${id}`);
    }

    const deleteEmp = (id) => {

        deleteEmployee(id).then(res => {
            setEmployees(employees.filter(employee => employee.id !== id));
        });
        toast.success("Deleted successfully!", { position: toast.POSITION.TOP_CENTER });
    }
    const viewEmployee = (id) => {
        props.history.push(`/view-employee/${id}`);
    }

    return (
        <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.emailId}</td>
                                             <td>
                                               <button onClick={ () => editEmployee(employee.id)} className="btn btn-info">Update</button>
                                               <button style={{ marginLeft: "10px" }} onClick={() => deleteEmp(employee.id)} className="btn btn-danger"><AiFillDelete></AiFillDelete> </button>
                                               <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View </button>
                                            </td> 
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default ListEmployeeComponentTest
