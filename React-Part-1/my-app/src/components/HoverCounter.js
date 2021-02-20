import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {

    render() {
        const {count,handelCounter} = this.props
        return (
            <div>
                <h1 onMouseOver={handelCounter}>Hover {count} counter</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
