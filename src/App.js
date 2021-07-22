import React from 'react';
import Search from './Search';
import Signin from './Signin';
import './App.css';

import { Home } from './Home';
import { HowItWorks } from './HowItWorks';
import { Rent } from './Rent';
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
        <Route path='/signin' exact render={(props) => <Signin />} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
