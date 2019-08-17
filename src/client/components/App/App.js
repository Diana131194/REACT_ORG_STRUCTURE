import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import EmployeeList from '../EmployeeList';

class App extends Component{

  render(){
    return(
        <div className="app-root">  
            <div className="app-header">
              <h2>Organization Website</h2>
            </div>   
          <EmployeeList />            
        </div>
    )
  }
}

export default App;
