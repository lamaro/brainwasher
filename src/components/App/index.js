import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Search from '../../pages/Search'
import Nav from '../Nav'

function App() {
  return (
    <div>
      <Router>
      <Nav />      
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category/:slug" component={Category} />
            <Route path="/search/:slug" component={Search} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
