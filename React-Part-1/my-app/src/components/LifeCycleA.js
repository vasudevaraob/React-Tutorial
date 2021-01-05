import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vasudev'
        }
        console.log('in LifeCycleA Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('in LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('in LifecycleA componentDidMount')
    }

    render() {
        console.log('in LifeCycleA render')
        return (
            <div>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
