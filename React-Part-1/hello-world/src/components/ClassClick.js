import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandeler(){
        console.log('Click me class component')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandeler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
