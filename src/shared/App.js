import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { LogIn, SignUpPage, Index } from '../pages/Index.js';
import Switch from 'react-bootstrap-switch';


class App extends Component {
  render() {
  return (
    <div>
      <Route exact path="/" render={props => <Index {...props} />} />
      <Switch>
        <Route path="/login" component={LogIn}/>
        <Route path="/signup" component={SignUpPage}/>
      </Switch>
    </div>
  );
  }
}

export default App;