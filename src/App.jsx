import React, { useState, useEffect } from 'react';
import About from './pages/About';
import Search from './components/Search';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import './App.css';
import Axios from "axios";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddRental from './pages/AddRental';
import Reservations from './pages/Reservations';

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoggedUser(response.data.user[0]);
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <h1>Luxury Purse Rentals</h1>
      <Search />

      <Navigation setLoggedUser={setLoggedUser} loggedUser={loggedUser} />

      <Switch>
        <Route path='/' exact render={(props) => <Home />} />
        <Route path='/about' exact render={(props) => <About />} />
        <Route path='/signin' exact render={(props) => <Signin setLoggedUser={setLoggedUser} />} />
        <Route path='/profile' exact render={(props) => <Profile loggedUser={loggedUser} authorize={true} />} />
        <Route path='/add-rental' exact render={(props) => <AddRental loggedUser={loggedUser} authorize={true} />} />
        <Route path='/reservations' exact render={(props) => <Reservations />} />
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
