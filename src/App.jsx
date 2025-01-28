import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Event from './pages/Event';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/event" component={Event} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;