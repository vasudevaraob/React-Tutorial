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
			-
	ES6:- 
			- let&const
				Let--> have block scope
			- ArrowFunctions
			- template literals
				
				let user = 'Vasudev'
				let greet = 'Welcome to '+user+'New Year' --> **1
				let greet = `Welcome to ${user} New Year` --> ** using String Templates
				
				let greet = `Welcome to ${user} New Year
						this is 2nd line
				this is 3rd line . . . . so on...
				`
				console.log(greet)
				
				
			- default perameters
			- object literals
			- rest and spread operations 
			- distructing assignment
			- Array Destrecture is for useState hook
			- Spread Operator

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
	
	import React from 'react'
	function Greet(){
		return <>Hellow World<>
	}
	export default Greet
	
	---or---
	
	export const Greet = () => <>Hello World<>
	
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
	- prevState()

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

State with callback function:-

callback function is kind of arrow function , which will execute after setState().

	increse(){
        this.setState({
            increseval:this.state.increseval+1
        },()=>(console.log(this.state.increseval)))

        console.log(this.state.increseval)
    }


##  DeStrecturing Props and State

const Greet = (props) => {

    //props.name='Avengers'--> it will never allow for reassignment

    console.log(props)
    return (
        <>
            <>Hello {props.name}</>
            {props.children}
        </>
    )
}

1. Destrecture at function perameter itself

	const Greet = ({name,children}) => {
	
    console.log(name)
    return (
        <div>
            <>Hello {name}</>
            {children}
        </div>
		)
	}

2. Destrecture in the function body

	const Greet = props => {
	const {name,children} = props  ---> defined here  for function component
	//const {name,children} = this.props
    return (
        <div>
            <>Hello {name}</>
            {children}
        </div>
		)
	}

## React Props Validation

	React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, 
	although it is not necessary to define components with propTypes.However, if you use propTypes with your components, it helps you to avoid unexpected bugs.
	
	** when sending any property type it will get working throght console


## Event Handelling

	**when user interacts with UI Events are fired (muse click, mouse over , key events,change events)

Ex:function
	function FunctionClick() {

    function clickHandeler(){
        console.log("Button clicked")

    }
    return (
        <div>
            <button onClick={clickHandeler}>Click</button>  *** we should not keep that function with "()" clickHandeler() that will trigger function if adding that
        </div>
    )
	}
Ex:class

	clickHandeler(){
        console.log('Click me class component')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandeler}>Click me</button>
            </div>
        )
    }

## Binding with Event Header

below are the diff ways to achive event binding in react

	1. bind(this) and using 
	2. arrow function
	3. Binding in the class constrector
	4. ArrowFunction as a class property

{/* <button onClick={this.bindingEventClick.bind(this)}>ClickEventBinding</button> */}  *** using bind(this)
    <button onClick={()=>this.bindingEventClick()}>ClickEventBinding</button>           *** using arrow-function
	<button onClick={this.bindingEventClick}>ClickEventBinding</button>                 *** with class constrector/ArrowFunction as class property

	constructor(props) {
        super(props)
    
        this.state = {
             message:'Hai Guys'
        }
		this.bindingEventClick = this.bindingEventClick.bind(this) ----> *** binding in the class constrector
    }

    bindingEventClick(){    
        this.setState({
            message:'GoodBye'
        })
        console.log('in binding event')
    }
	
	bindingEventClick = () =>{     ---->  *** Approach 4 with ArrowFunction
        this.setState({
            message:'GoodBye'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
             {/* <button onClick={this.bindingEventClick.bind(this)}>ClickEventBinding</button> */}  ---> **1
             <button onClick={()=>this.bindingEventClick()}>ClickEventBinding</button> */}  ---> ***2
			 <button onClick={this.bindingEventClick}>ClickEventBinding</button>  ---> **3 & 4
            </div>
        )


## Methods as Props

 1. Methods as props from chaild to parent

Parent:-

	class ParentComponent extends Component {

	constructor(props) {
    super(props)

    this.state = {
         parentName:'Parent'
    }
    this.greetParent=this.greetParent.bind(this)
	}

	greetParent(){
        alert('Welcome'+this.state.parentName)
	}


    render() {
        return (
            <div>
                <ChildComponent greetHandeler={this.greetParent}></ChildComponent>  ** greetHandeler={this.greetParent} passing method as attribute 
            </div>
        )
    }
	}

Child:-

	function ChildComponent(props) {  ** have to pass props
		return (
			<div>
				<button onClick={props.greetHandeler}>Greet Parent</button>  ** calling the attribute using props
			</div>
		)
	}

 2. Sending props from child to parent
 
	function ChildComponent(props) {  ** have to pass props
		return (
			<div>
				<button onClick={()=> props.greetHandeler(child)}>Greet Parent</button>  ** calling the attribute using props
			</div>
		)
	}
	
	parent function change
	
	greetParent(childName){
        alert(`Welcome ${this.state.parentName} to ${childName}`)
	}
	
## Conditional Rendering

When ever we want render some component based on some condition can go with this
	- if/else
	- ternary operator
	- logical && operator
	- switch case operator
	- Conditional Rendering with enums
	
## List Rendering

to render list of items using Map method its from js only

const names = ['Vasudev','Ramadevi','Cheshvika','Venkatamma','Visweswara Rao']
const namesList = names.map(name=><ul>{name}</ul>)

return (<div>{namesList}</div>)

1. List and keys should be defined for List while rendering that List objects, will get warnings while consuming
	- A key is a special string attribute you need to include when creating list of elements
	- keys will give the elements stable identity
	- keys helps react identify which items changed or added or removed
	
2. Index as a Key  - try to avoid index as key

## Styling React Components

	- CSS Style sheets  -> defining in style.css and write some styles
	- Inline Styling  -> inline styling
	- CSS Modules
		CSS Module is another way of adding styles to your application. It is a CSS file where all class names and animation names are scoped locally by default. 
		It is available only for the component which imports it, means any styling you add can never be applied to other components without your permission, 
		and you never need to worry about name conflicts. You can create CSS Module with the .module.css extension like a myStyles.module.css name.
	- CSS in JS Library
	
## React Forms

React offers a stateful, reactive approach to build a form. The component rather than the DOM usually handles the React form. 
In React, the form is usually implemented by using controlled components.

There are mainly two types of form input in React.

	1. Uncontrolled component - *** similar to traditional HTML  DOM will handle the data & have to use the ref here
			<input type="text" ref={this.input} /> 
			
	2. Controlled component -  *** here will be controlled by component rather then DOM

		handelChangeInput = (event) => {
		this.setState({user:event.target.value})
		}
	
		<input type='text' value={this.state.user} onChange={this.handelChangeInput}></input>
		

## Add Bootstrap to React

-> install Bootstrap using  $ npm install react-bootstrap bootstrap --save  

-> add lib in index.js import 'bootstrap/dist/css/bootstrap.min.css';  

-> the use components ware ever you want  import { SplitButton, Dropdown } from 'react-bootstrap';


## LifeCycle Methods

	1. Initial Phase
	2. Mounting Phase
	3. Updating Phase
	4. Unmounting Phase

1. Initial Phase :- It is the birth phase of the lifecycle of a ReactJS component. Here, the component starts its journey on a way to the DOM

		A. getDefaultProps()
		
			It is used to specify the **default value of this.props**. It is invoked before the creation of the component or any props from the parent is passed into it.
		
		B. getInitialState()
		
			It is used to specify the **default value of this.state**. It is invoked before the creation of the component.

2. Mounting Phase :- In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods.

		A. componentWillMount()

			This is invoked immediately **before** a component gets rendered into the DOM. In the case, when you call setState() inside this method, the component will not re-render.
		
		B. componentDidMount()
			
			This is invoked immediately **after** a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.
		
		C. render()
			
			This method is defined in each and every component. It is **responsible for returning a single root HTML node element**. If you don't want to render anything, you can return a null or false value.
			
3. Updating Phase :- It is the next phase of the lifecycle of a react component. Here, we get new Props and change State. 
			This phase also allows to handle user interaction and provide communication with the components hierarchy. 
			The main aim of this phase is to ensure that the component is displaying the latest version of itself. 
			Unlike the Birth or Death phase, this phase repeats again and again. This phase consists of the following methods.

		A. componentWillRecieveProps()

			It is invoked when a component receives new props. If you want to update the state in response to prop changes, you should compare this.props and nextProps to perform state transition by using this.setState() method.
		
		B. shouldComponentUpdate()
			
			It is invoked when a component decides any changes/updation to the DOM. It allows you to control the component's behavior of updating itself. If this method returns true, the component will update. Otherwise, the component will skip the updating.

		C. componentWillUpdate()
			
			It is invoked just before the component updating occurs. Here, you can't change the component state by invoking this.setState() method. It will not be called, if shouldComponentUpdate() returns false.
		
		D. render()
			
			It is invoked to examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If shouldComponentUpdate() returns false, the code inside render() will be invoked again to ensure that the component displays itself properly.

		E. componentDidUpdate()
			
			It is invoked immediately after the component updating occurs. In this method, you can put any code inside this which you want to execute once the updating occurs. This method is not invoked for the initial render.

4. Unmounting Phase :- It is the final phase of the react component lifecycle. It is called when a component instance is destroyed and unmounted from the DOM. This phase contains only one method and is given below.

		A. componentWillUnmount()
			
			This method is invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary cleanup related task such as invalidating timers, event listener, canceling network requests, or cleaning up DOM elements. If a component instance is unmounted, you cannot mount it again.

## Technical Point

	1. Mounting  **When Instance of a component is created and inserted into DOM
			 
			- constrector() - its a special function that will get called whenever a new component is created. 
							  it will initialize state & Binding the event handlers.
							  Do not cause side effects . Ex HTTP Request
							  have to define super(props) to call parent constructor, Directly override this.state 
							  
			- static getDerivedStateFromProps() -
							  rarely used method in React
			- render() - this is for render UI for html
			- componentDidMount()
	
	2. Updating  **When a component is re-render as a result of changes to either props or state
			
			---> methods under static getDerivedStateFromProps,shouldComponentUpdate,render,getSnapshortBeforeUpdate,componentDidMount
			
	3. Unmounting **When a component is removed from DOM
		
			---> componentWillMount
	
	4. Error Handling **When there is a error during the rendering , in a life cycle methods or in the constructor of any child component
	
			---> getDerivedStateFromError, and componentDidCatch
 


#### Advanced Concepts of React

# Fragments

its just avoid <div> tags can go for <React.Fragments> or shorthand syntax <> will not allow any key </>

<React.Fragments>
	<h1>Hello</h1>
</React.Fragments>

# Pure Components (relates to class)

# Memo components (relates to function)

# Ref's in react

using this auto fucs will go to input text fields while in forms 

 this.inputRef = React.createRef()  --> USING THIS
 
 call back ref --> approach 2
 
# Portals

# Error Boundary

A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary

# Higher order component

Why Higher order components?

When ever the component functionality needed for re-use go for this higher order

HOC:- A pattern where a function takes a component as a argument and returns a new component

const  newComponent = higherOrderComponent (originalComponent)




### Shortcuts

ctrl+k+c  - comment

ctrl+K+U  - uncomment

rce- to create class component

rconst - to create constructor

rfce- to create functional component

rpce- to create Pure Component

      



	







