import React, { Component } from 'react';
import BooksTabs from './components/BooksTabs';
import ButtonAppBar from './components/AppBar';
import './App.css';
import BookIndex from './components/BookIndex';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookArticle from './components/BookArticle';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ButtonAppBar></ButtonAppBar>
          <Route exact path="/" component={BooksTabs} />
          <Route path="/index/:number" component={BookIndex} />
          <Route path="/article/:number" component={BookArticle} />
          <Route onEnter={() => window.location.reload()} />
        </div>
      </Router>
    );
  }
}

export default App;
