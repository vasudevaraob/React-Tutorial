import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class Form extends Component {
constructor(props) {
    super(props)

    this.state = {
        user:'',
        message:'',
        topic:'React'
         
    }
}

handelChangeInput = (event) => {
    this.setState({user:event.target.value})
}
handelChangeTestArea = (event) => {
    this.setState({
        message:event.target.value
    })
}

handelTopicChange = (event) => {
    this.setState({topic:event.target.value})
}
handelSubmit= event =>{
    alert(`${this.state.user} ${this.state.message} ${this.state.topic}`)
    event.preventDefault()
}


    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <div>
                    <label>UserName:</label>
                    <input type='text' value={this.state.user} onChange={this.handelChangeInput}></input>
                </div>
                <div>
                    <label>Comments </label>
                    <textarea value={this.state.message} onChange={this.handelChangeTestArea}></textarea>
                </div>
                <div>
                    <label>Language</label>
                    <select value={this.state.topic} onChange={this.handelTopicChange}>
                        <option>React</option>
                        <option>Vue</option>
                        <option>Angular</option>
                    </select>
                <div>
                    <button type='submit'>Submit Button</button>
                </div>
                </div>
            </form>
        )
    }
}

export default Form
