import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navigation = (props) => {
    const loggedUser = props.loggedUser;

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
                    id="nav-dropdown-dark-example" title="Profile" menuVariant="dark" to="/profile" >
                    <NavDropdown.Item href="#rentals/reservations">Rentals/Reservations</NavDropdown.Item>
                    <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
                  </NavDropdown>}
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation;