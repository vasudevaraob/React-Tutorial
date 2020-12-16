import React, { Component } from 'react'

class StatePropExample extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div>
              <h1>State & Props Example</h1>  
              <h3>Welcome to {this.props.testprop}</h3>
            </div>
                )
             }
}

export default StatePropExample
