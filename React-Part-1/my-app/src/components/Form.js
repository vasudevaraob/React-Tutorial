import React, { Component } from 'react'
import { Button } from 'reactstrap';


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
                <div class="form-group">
                    <label>UserName:</label>
                    <input type='text' class="form-control" value={this.state.user} onChange={this.handelChangeInput}></input>
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
                    <Button type='submit'>Submit</Button>
                </div>
                </div>
            </form>
        )
    }
}

export default Form
