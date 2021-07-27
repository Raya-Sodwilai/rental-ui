import React, { useState } from 'react';
import Search from './Search';
import Signin from './Signin';
import Rent from './Rent';
import './App.css';

import { Home } from './Home';
import { HowItWorks } from './HowItWorks';
import { Navigation } from './Navigation';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [loggedUser, setLoggedUser] = useState("");

  return (
    <BrowserRouter>
    <div className="App">
      <h1>Luxury Purse Rentals</h1>
      <h2>{loggedUser.email}</h2>
      <h2>{loggedUser.id}</h2>
      <Search />

      <Navigation/>

      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/howitworks' component={HowItWorks} exact/>
        <Route path='/rent' exact render={(props) => <Rent userId={loggedUser.id}/>}/>
        <Route path='/signin' exact render={(props) => <Signin setLoggedUser={setLoggedUser} />} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
