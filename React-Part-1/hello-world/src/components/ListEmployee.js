import React from 'react'

function ListEmployee(employee) {
    return (
        <div>
            <ul>The Name of employee {employee.ename} and the salary is {employee.esalary}  and Employee id is {employee.eid}</ul>
        </div>
    )
}

export default ListEmployee
