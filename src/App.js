import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';

//components
import Main from './Main/Main';
import firstDownload from './Main/firstDownload/firstDownload';
import Signup from './Main/Signup/Signup';
import Home from './nova-components/Home/Home';
import notesApp from './nova-components/notesApp/notesApp';

import { store } from './store'

// method to render as fisrt component FIRST-DOWNLOAD page

// else render to current LOGIN/SINGUP pages

// import the Browser-router

console.log(store)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/welcome" component={firstDownload} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={Home} />
          <Route path="/notes" component={notesApp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
