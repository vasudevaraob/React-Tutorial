import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

constructor(props) {
    super(props)

    this.state = {
         parentName:'Parent'
    }
    this.greetParent=this.greetParent.bind(this)
}

//greetParent(){
  //      alert('Welcome'+this.state.parentName)
//}
greetParent(childName){
    alert(`Welcome ${this.state.parentName} from ${childName}`)
}


    render() {
        return (
            <div>
                <ChildComponent greetHandeler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
