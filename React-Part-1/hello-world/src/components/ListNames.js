import React from 'react'
import { Table } from 'reactstrap';
import ListEmployee from './ListEmployee';

function ListNames() {

    const names = ['Vasudev','Ramadevi','Cheshvika','Venkatamma','Visweswara Rao']

    const namesList = names.map(name=><ul>{name}</ul>)

    const detailsList = [
        {
            ename: 'Ganesh',
            esalary: 1000,
            eid: 1
        },
        {
            ename: 'Ramesh',
            esalary: 2000,
            eid: 2
        }, {
            ename: 'Suresh',
            esalary: 3000,
            eid: 3
        }, {
            ename: 'Denesh',
            esalary: 4000,
            eid: 4
        }
    ]
    const eDetailsList = detailsList.map(employee=><ListEmployee key={employee.eid } employee={employee}></ListEmployee>
        // <div>
        //     <Table dark>
        //         <thead>
        //             <tr>
        //                 <th>#</th>
        //                 <th>Employee Name</th>
        //                 <th>Last Name</th>
        //                 <th>Username</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //                 <th scope="row">1</th>
        //                 <td>{employee.eid}</td>
        //                 <td>{employee.ename}</td>
        //                 <td>{employee.esalary}</td>
        //             </tr>
        //         </tbody>
        //     </Table>
        // </div>
    
    )
    
    return (
        <div>
            <h1>Employee Details</h1>

            {/* <ul>{names[0]}</ul>
            <ul>{names[1]}</ul>
            <ul>{names[2]}</ul>
            <ul>{names[3]}</ul>
            <ul>{names[4]}</ul> */}

            {
                //names.map(name=><ul>{name}</ul>)
                //namesList
                eDetailsList
            }
        
        </div>
    )
}

export default ListNames
