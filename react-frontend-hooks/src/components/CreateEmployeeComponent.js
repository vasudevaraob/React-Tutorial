import React, { Component } from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
        this.changeEmailNameHandler = this.changeEmailNameHandler.bind(this)
       // this.saveEmployee = this.saveEmployee.bind(this)
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){

        if(this.state.id ==='_add'){
            return
        }
        else{

            getEmployeeById(this.state.id).then(
                (res) => {
                    let employee = res.data
                    this.setState({firstName: employee.firstName,lastName: employee.lastName,emailId: employee.emailId})
                }
            )
        }

    }

    saveOrUpdateEmployee(e){
            e.preventDefault();
            let employee = {firstName: this.state.firstName,lastName: this.state.lastName,emailId:this.state.emailId}
            console.log('employee => '+JSON.stringify(employee))

            if(this.state.id === '_add'){
                createEmployee(employee).then(
                             (res) => {
                                 this.props.history.push('/employees');
                                 console.log('employee => '+JSON.stringify(employee))
                             } 
                       )
                       toast.success("Added Employee successfully!",{position: toast.POSITION.TOP_CENTER,autoClose: 8000});
            } else {
                updateEmployee(employee, this.state.id).then( res => {
                    this.props.history.push('/employees');
                    console.log('employee => '+JSON.stringify(employee))
                });
                toast.success("Updated Employee successfully!",{position: toast.POSITION.TOP_CENTER,autoClose: false});
            }

    }


    // saveEmployee(e){
    //     e.preventDefault();
    //     let employee = {firstName: this.state.firstName,lastName: this.state.lastName,emailId:this.state.emailId}
    //     console.log('employee => '+JSON.stringify(employee))
    //     EmployeeService.createEmployee(employee).then(
    //         (res) => {
    //             this.props.history.push('/employees');
    //         } 
    //     )
    // }



    cancel(){
        this.props.history.push('/employees');
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailNameHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
        
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                                 {
                                    this.getTitle()
                                }
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name</label>
                                        <input placeholder="First Name" className='form-control' name='firstName' value={this.state.firstName} onChange={this.changeFirstNameHandler} ></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" className='form-control' name='lastName' value={this.state.lastName} onChange={this.changeLastNameHandler} ></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email ID</label>
                                        <input placeholder="Email ID" className='form-control' name='emailId' value={this.state.emailId} onChange={this.changeEmailNameHandler} ></input>
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
