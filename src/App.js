import React from 'react';
import { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MainContent from './components/main-content/MainContent'
import Header from './components/template/Header'
import Footer from './components/template/Footer'
import Landing from './components/template/Landing'

import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'

import {Provider} from 'react-redux'
import store from './store'

import './App.css';


class App extends Component{

render(){
  return(
    <Provider store={ store}>
      <MainContent />
      </Provider>
    /* <Router>
        <div className="App">
          <Header/>
            <Route exact path="/" component={Landing} /> 
         
            <div className="container">
              <Route exact path="/login" component={Login} /> 
              <Route exact path="/signup" component={SignUp} /> 
            </div>

          <Footer/>
        </div>
    </Router> */
   
  );
}
}

export default App;
