# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



# App.js  specified  Router and switch between the route's

    <Router>
    <Switch>
    <Route>

# List Employee Component Just having table with Map function

    map() --> function from ES6
    Arrow Function () => {}
    this.props.history.push  --> bind with router to redirect to respective page
    this.state.employees.filter --> used to delete
    componentDidMount()  --> it will lode initial loading of the component

# CreateEmployee this only for update and create

    render Expression with in template {this.getTitle()}
    event.target.value -- bind the value from input text field  (this.setState({firstName: event.target.value}))


# React Icons

npm install react-icons --save
import { IconName } from "react-icons/ai";

https://react-icons.github.io/react-icons/

# React-Tostify:

https://fkhadra.github.io/react-toastify/introduction/

npm install --save react-toastify

toast.configure()
toast.success("Deleted successfully!",{position: toast.POSITION.TOP_CENTER});
toast.success("Updated Employee successfully!",{position: toast.POSITION.TOP_CENTER,autoClose: false});

# React Modal:

http://reactcommunity.org/react-modal/

npm install react-modal

#### Good Example

https://www.taniarascia.com/crud-app-in-react-with-hooks/