import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {
    
    render() {
        
        const {count,handelCounter} = this.props

        return (
            <div>
                <button onClick={handelCounter}>Click {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
