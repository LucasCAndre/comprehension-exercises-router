import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Users from './components/Users'
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/strct-access'>StrictAccess</Link></li>
        </ul>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About}/>
        <Route path='/users/:id' render={(props) => <Users { ...props } greetingMessage="Good morning" />} />
        <Route path='/strct-access' render={() => <StrictAccess user={{ username: 'joao', password: '1234' }} /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
