import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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

    const logout = () => {
      Axios.get("http://localhost:3001/logout").then((res) => {
        if (res.status == 200){
          setLoggedUser(null);
          history.push('/');
        }
      });
    };

    return(
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbar-dark-nav"/>
            <Navbar.Collapse id="navbar-dark-nav">
              <Nav> 
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                  Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/about">
                  About
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end sign-in-navbar">
              <Nav>
                  {loggedUser == null && <NavLink className="d-inline p-2 bg-dark text-white" to="/signin">
                    Sign In
                  </NavLink>}
                  {loggedUser != null && 
                  <NavDropdown
                    id="nav-dropdown-dark-example" title={loggedUser.firstName} menuVariant="dark" to="/profile" >
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