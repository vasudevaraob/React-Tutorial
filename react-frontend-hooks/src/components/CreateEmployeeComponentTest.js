import React,{useState,useEffect} from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateEmployeeComponentTest(props) {

    const [id, setId] = useState(props.match.params.id)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    useEffect(() => {
        if (id === '_add') {
            return
        }
        else {

            getEmployeeById(id).then(
                (res) => {
                    let employee = res.data
                    //this.setState({firstName: employee.firstName,lastName: employee.lastName,emailId: employee.emailId})
                    setFirstName(employee.firstName)
                    setLastName(employee.lastName)
                    setEmailId(employee.emailId)
                }
            )
        }
    }, [])
    const getTitle = () => {
        if (id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value);
    }
    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    }
    const changeEmailNameHandler = (event) => {
        setEmailId(event.target.value);
    }

    const saveOrUpdateEmployee=(e)=>{
        e.preventDefault();
        let employee = { firstName: firstName, lastName: lastName, emailId: emailId }
        console.log('employee => ' + JSON.stringify(employee))

        if (id === '_add') {
            createEmployee(employee).then(
                (res) => {
                    props.history.push('/employees');
                    console.log('employee => ' + JSON.stringify(employee))
                }
            )
            toast.success("Added Employee successfully!", { position: toast.POSITION.TOP_CENTER, autoClose: 8000 });
        } else {
            updateEmployee(employee, id).then(res => {
                props.history.push('/employees');
                console.log('employee => ' + JSON.stringify(employee))
            });
            toast.success("Updated Employee successfully!", { position: toast.POSITION.TOP_CENTER, autoClose: false });
        }

    }

    const cancel=()=>{
        props.history.push('/employees');
    }

    return (
        <div>
                <div className='container'>
                    <div className='row'>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                                 {
                                    getTitle()
                                }
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name</label>
                                        <input placeholder="First Name" className='form-control' name='firstName' value={firstName} onChange={changeFirstNameHandler} ></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" className='form-control' name='lastName' value={lastName} onChange={changeLastNameHandler} ></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email ID</label>
                                        <input placeholder="Email ID" className='form-control' name='emailId' value={emailId} onChange={changeEmailNameHandler} ></input>
                                    </div>
                                    <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CreateEmployeeComponentTest
