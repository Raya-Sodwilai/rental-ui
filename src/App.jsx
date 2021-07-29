import React, { useState } from 'react';
import About from './About';
import Search from './Search';
import Signin from './Signin';
import Profile from './Profile';
import Home from './Home';
import Navigation from './Navigation';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddRental from './AddRental';

function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <BrowserRouter>
    <div className="App">
      <h1>Luxury Purse Rentals</h1>
      {loggedUser != null && <h2>{loggedUser.email}</h2>}
      <Search />

      <Navigation loggedUser={loggedUser} />

      <Switch>
        <Route path='/' exact render={(props) => <Home />} />
        <Route path='/about' exact render={(props) => <About />} />
        <Route path='/signin' exact render={(props) => <Signin setLoggedUser={setLoggedUser} />} />
        <Route path='/profile' exact render={(props) => <Profile loggedUser={loggedUser} authorize={true} />} />
        <Route path='/add-rental' exact render={(props) => <AddRental loggedUser={loggedUser} authorize={true} />} />
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
