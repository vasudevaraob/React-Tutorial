import React, { Component } from 'react'

export class ConditionalRendering extends Component {
constructor(props) {
    super(props)

    this.state = {
         isEnable:true
    }
}


    render() {


        //short circute operator &&
        return this.state.isEnable && <div>Welcome to Admin</div>


        //Element veriables
        // let message 
        // if (this.state.isEnable) {
        //    message= <h1>Welcome to Admin</h1>
        // } else {
        //    message= <h1>Welcome to Guest</h1>
        // }

        // if/else
        // if (this.state.isEnable) {
        //    return(<div><h1>Welcome to Admin</h1></div>)
        // } else {
        //     return(<div><h1>Welcome to Guest</h1></div>) 
        // }

       // return (
            // <div>
            //     {message}
            // </div>

            //Terneary operator
            // this.state.isEnable?<div><h1>Welcome to Admin</h1></div>:<div><h1>Welcome to Guest</h1></div>
       //)
    }
}

export default ConditionalRendering
