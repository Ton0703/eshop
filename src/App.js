import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';

import AuthRoute from './utils/authRoute'

//pages
import Home from './pages/home';
import Products from './pages/product';
import Register from './pages/register'
import Login from './pages/login'
import User from './pages/user';

function App() {
  return (
    <Router>
      <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/products' component={Products} />
       <AuthRoute path='/login' component={Login} />
       <AuthRoute path='/register' component={Register} />
       <Route path='/user' component={User} />
      </Switch>
    </Router>
  );
}

export default App;
