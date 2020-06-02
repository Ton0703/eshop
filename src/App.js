import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
       <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
