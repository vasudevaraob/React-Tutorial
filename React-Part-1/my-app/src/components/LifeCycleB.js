import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vasudev'
        }
        console.log('in LifeCycleB Constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('in LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('in LifecycleB componentDidMount')
    }

    render() {
        console.log('in LifeCycleB render')
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleB
