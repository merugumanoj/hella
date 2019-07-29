import React from 'react';
import './App.css';
import 'tachyons';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
// var ReactRouter =require('react-router-dom');
// var Route = ReactRouter.Route;
import Home from './components/home';
import Nav from './components/nav';
import Register from './components/register';

function App() {
  return (
    <Router>
    <div className="app">
       <Nav/>
        <Switch>
          <Home exact path='/home'/>
          <Route path='/register' component={Register}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
