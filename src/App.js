import React, { Component, Fragment } from 'react';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Game2 from './Components/Game2';
import Game3 from './Components/Game3';
import Game4 from './Components/Game4';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/2kejhfjebifbzeifbherbfehrbfzbeiferhlbjh" exact component={Game2} />
            <Route path="/3oiegjopekhvoznovuhzofhuozihffoiz" exact component={Game3} />
            <Route path="/4jshdbkjbkjbzkjbzkjebkzjebfkzeh" exact component={Game4} />
          </Switch>
        </Fragment>
      </Router>

    );
  }
}

export default App;
