import React, { Component, Fragment } from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Fragment>
      </Router>

    );
  }
}

export default App;
