# React-Tutorial

What is React ?

OpenSource Lib,Not a framework,Focus on UI,Rich EchoSystem(to make webApplication)

Why Should We learn?

Maintained by FB,More starters on Github,Hug Community(Stack Overflow),In Demand Skill Set

## Techinical Aspects:-

->Component Based Arch (Header,Footer,MainContent,SUBNAV)
->ReUsable Code
->Declarative 
->Virtual DOM

## Prerequisite:-

1.JavaScript, HTML5, and CSS. 
2.ES6(ECMAScript)

	javascript:-
			- this keyword
			- filter()
			- map() 
			- reduce()
	ES6:- 
			- let&const
			- ArrowFunctions
			- template literals
			- default perameters
			- object literals
			- rest and spread operations 
			- distructing assignment

3.React from Scrach
			- Fundamentals
			- HTTP
			- Routing
			- Redux
			- Utilities
			
## Create-react-app

npx create-react-app my-app
cd my-app
npm start

->using npx we can create instently (nothing but npm package runner)
	npx creat-react-app <app-name>
->Using npm we need to create globally then create react app
	npm install create-react-app -globally
	npm  create-react-app <my-app>

## Folder Strecture

->Package.json  (will have all dependencies)
->node_modules
->Public Folder
->SRC Folder

## React Features

	- JSX
	- Components
	- One-way Data Binding
	- Virtual DOM
	- Simplicity
	- Performance

## Advantage of ReactJS

	- Creating Dynamic Web Applications Becomes Easier
	- Reusable Components
	- Performance Enhancement
	- The Support of Handy Tools
	- Known to be SEO Friendly
	- The Benefit of Having JavaScript Library
	- Scope for Testing the Codes

## Component

Component is a part of UI, can be reuse

1. Stateless functional components
	- create first functional components	
	/**
	import React from 'react'
	
	function Greet(){
	return <>Hellow World<>
	}
	
	export default Greet
	
	or
	
	export const Greet = () => <>Hello World<>
	
	*/
	
2. Statefull class components
	
import React from 'react'
import Component from 'react'

class Welcome extends React.Component{
    
    render(){

        return <h1>Hello Class component</h1>
    }
}

export default Welcome


3. Functional vs Class component?

## JSX & some diff using attributes

----------------------------------------------------

Rendering is 2 ways  A. Props ,B. State

## Props:

Send data from parent to chaild using props

Parent-->   <Greet name="Vasudev">
				<button>Action</button>
			</Greet>

Child:-

functional component---	
	const Greet = (props) => {
	
	props.name='avengers'---> never allow for reassignment
	
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}--->to print children elements
        </div>
    )
}
class component --({this.props.name})

## State (Component state in React)

State will change the state of your object when ever doing action or event

	- setState()---> to set the state
	- getInitialState() --> To set an initial state before any interaction occurs, we need to use the getInitialState() method.

Defining State
To define a state, you have to first declare a default set of values for defining the component's initial state. 
To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.

Message.json

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
	
	<button onClick={()=>this.changeMessage()}>Subscription</button>


--> Props vs State

Props                               							State

1.	Props are read-only.										1. State changes can be asynchronous.
2.	Props are immutable.										2. State is mutable.
3.	Props allow you to pass data from one component 			3. State holds information about the components.
	to other components as an argument.	
4.	Props can be accessed by the child component.				4. State cannot be accessed by child components.
5.	Props are used to communicate between components.			5. States can be used for rendering dynamic changes with the component.
6.	Stateless component can have Props.							6. Stateless components cannot have State.
7.	Props make components reusable.								7. State cannot make components reusable.
8.	Props are external and controlled by whatever 				8. The State is internal and controlled by the React Component itself.
	renders the component.	

	
	





	







