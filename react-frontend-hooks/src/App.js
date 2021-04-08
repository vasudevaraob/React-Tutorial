import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponentTest from './components/ListEmployeeComponentTest';
import CreateEmployeeComponentTest from './components/CreateEmployeeComponentTest'
import ViewEmployeeComponentTest from './components/ViewEmployeeComponentTest'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'



function App() {
  return (
    <div>
      <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponentTest}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponentTest}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponentTest}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponentTest}></Route>
                          {/* <Route path = "/update-employee/:id" component = {CreateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
