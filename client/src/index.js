import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar';

ReactDOM.render(

 <Router>
   <Navbar/>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/Account" component={App} />
   </Switch>
 </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
