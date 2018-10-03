import React, { Component } from 'react';
import BooksTabs from './components/BooksTabs';
import ButtonAppBar from './components/AppBar';
import './App.css';
import BookIndex from './components/BookIndex';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ButtonAppBar></ButtonAppBar>
          <Route exact path="/" component={BooksTabs} />
          <Route path="/index" component={BookIndex} />
        </div>
      </Router>
    );
  }
}

export default App;
