import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Axios from "axios";

const Navigation = (props) => {
    const {loggedUser, setLoggedUser} = props;
    let history = useHistory();

    const addRental = () => {
      history.push('/add-rental');
    };

    const reservations = () => {
      history.push('/reservations');
    };

    const profile = () => {
      history.push('/profile');
    };

    const logout = () => {
      Axios.get("http://localhost:3001/logout").then((res) => {
        if (res.status == 200){
          setLoggedUser(null);
          history.push('/');
        }
      });
    };

    return(
        <Navbar className="color-nav">
          <Container fluid>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end sign-in-navbar">
              <Nav>
                  {loggedUser == null && <Nav.Link varaint="light" href="/signin">
                    Sign In
                  </Nav.Link>}
                  {loggedUser != null && 
                  <NavDropdown
                    id="nav-dropdown-dark-example" title={loggedUser.firstName} to="/profile" >
                    <NavDropdown.Item onClick={profile}>Profile</NavDropdown.Item>  
                    <NavDropdown.Item onClick={addRental}>Add Rental</NavDropdown.Item>
                    <NavDropdown.Item onClick={reservations}>Reservations</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Log Out</NavDropdown.Item>
                  </NavDropdown>}
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation;