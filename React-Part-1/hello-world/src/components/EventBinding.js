import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hai Guys'
        }
    }

    // bindingEventClick(){
    //     this.setState({
    //         message:'GoodBye'
    //     })
    //     console.log('in binding event')
    // }

    bindingEventClick = () =>{
        this.setState({
            message:'GoodBye'
        })
    }


    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
             {/* <button onClick={this.bindingEventClick.bind(this)}>ClickEventBinding</button> */}
             <button onClick={()=>this.bindingEventClick()}>ClickEventBinding</button>
            </div>
        )
    }
}

export default EventBinding
