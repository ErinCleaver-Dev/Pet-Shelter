import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import {BrowserRouter as Router,Route, Switch,Redirect} from 'react-router-dom'
import Navbar from './components/Navbar/index'
import axios from 'axios'

ReactDOM.render(
  <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Switch>
    <Route exact path="/account" component={App} />
    <Route exact path="/logout" render={() =>     
    {      
      axios.get('http://localhost:5000/api/logout').then(resp => {
      if(resp.status ===200) {
        localStorage.removeItem('user');
        console.log('user logged out')
        return(<Redirect to="/" component={App}/>);
      }

      });
      return (
      // Write logic
      <Redirect to="/"/>
    )}} />
    </Switch>
  </Router>
   
,
  document.getElementById('root')
);


