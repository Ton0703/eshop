import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';

//pages
import Home from './pages/home';
import Products from './pages/prodeucs';
import Register from './pages/register'
import Login from './pages/login'

function App() {
  return (
    <Router>
      <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/products' component={Products} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
