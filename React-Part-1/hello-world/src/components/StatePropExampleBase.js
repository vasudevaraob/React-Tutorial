import React, { Component } from 'react'
import StatePropExample from './StatePropExample'

export class StatePropExampleBase extends Component {

    constructor(){
        super()
        this.state = {
            name: 'React Learning Session'
        }
    }


    render() {
        return (
            <div>
                <StatePropExample testprop={this.state.name}></StatePropExample>
            </div>
        )
    }
}

export default StatePropExampleBase
