import React, { Component } from 'react'

export class EventBindingExe extends Component {
constructor(props) {
    super(props)

    this.state = {
         message:''
    }
    this.enterText = this.enterText.bind(this)
}
enterText(event){

    this.setState({
        message:event.target.value
    })
}

    render() {
        return (
            <div>
                <label>Enter Content: </label>
                <input type='text' id='message' onChange={this.enterText}></input>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default EventBindingExe
