import React from 'react';
import './App.css';
import Search from './Search';

import { Home } from './Home';
import { HowItWorks } from './HowItWorks';
import { Rent } from './Rent';
import { Signin } from './Signin';
import { Navigation } from './Navigation';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Luxury Purse Rentals</h1>
      <Search />

      <Navigation/>

      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/howitworks' component={HowItWorks} exact/>
        <Route path='/rent' component={Rent} exact/>
        <Route path='/signin' component={Signin} exact/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
