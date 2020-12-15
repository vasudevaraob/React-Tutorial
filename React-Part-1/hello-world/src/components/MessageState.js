import React,{Component} from 'react'

class MessageState extends Component{

    constructor(){
        super()
        this.state ={displayBio:false}
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
    }
    changeMessage(){

        this.setState ={
            displayBio:!this.state.displayBio
        }
    }
    toggleDisplayBio(){  
        this.setState({displayBio: !this.state.displayBio});  
        }

    render(){
        return(
            <dev>
                <h1>Welcome to My Course</h1>
                
                {this.state.displayBio ? (
                    <div>
                        <p><h4>React is one of the hot technology in the UI development for front end, which is supported by FaceBook</h4></p>
                        <button onClick={this.toggleDisplayBio}> Show Less </button>
                    </div>
                ):(  
                    <div>  
                        <button onClick={this.toggleDisplayBio}> Read More </button>  
                    </div>)}
            </dev>
        )
    }
}

export default MessageState