// src/components/NavBar.js

import React, { Component } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  return (
    <Navbar bg="light" expand="lg" fixed="top" className={styles.navbar}>
      <Container>
        {/* Instagram Logo */}
        <Navbar.Brand href="/home">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Navbar.Brand>

        {/* Search Bar */}
        <Form className="d-none d-md-flex mx-auto" style={{ width: '400px', paddingLeft: '100px'}}>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
        </Form>

        {/* Navigation Links */}
        <Nav className="ms-auto">
          {/* Home Button */}
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Nav.Link>

          {/* Add Memory Button */}
          <Nav.Link as={Link} to="/create_memory">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </Nav.Link>

          {/* Profile Button */}
          <Nav.Link as={Link} to={`/account/${username}`}>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;