import React from 'react'
import Component from 'react'

class Message extends React.Component{

    constructor(){
        super()

        this.state = {
                message: 'Welcome to The World of Development'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for Subscription'
        })
    }
    
    render(){

        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscription</button>
            </div>
        ) 
    }
}

export default Message