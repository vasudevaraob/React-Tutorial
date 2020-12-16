import React, { Component } from 'react'

export class Count extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             increseval: 0
        }
    }
    
    

    increse(){
        this.setState({
            increseval:this.state.increseval+1
        },()=>(console.log(this.state.increseval)))

        console.log(this.state.increseval)
    }

    render() {
        return (
            <div>
                <p>Count--{this.state.increseval}</p>
        <button onClick={()=>this.increse()}>Increment</button>
            </div>
        )
    }
}

export default Count
