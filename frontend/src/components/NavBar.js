import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faPlus, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const username = localStorage.getItem('username');

  return (
    <Navbar bg="light" expand="lg" fixed="top" className={styles.navbar}>
      <Container>
        {/* Instagram Logo */}
        <Navbar.Brand href="/home">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Navbar.Brand>

        {/* Navigation Links */}
        <Nav className="ms-auto">
          {/* Home Button */}
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Nav.Link>

          {/* Discover Button */}
          <Nav.Link as={Link} to="/discover">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </Nav.Link>

          {/* Add Memory Button */}
          <Nav.Link as={Link} to="/create_memory">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </Nav.Link>

          {/* Notifications centre */}
          <Nav.Link as={Link} to="/notifications">
            <FontAwesomeIcon icon={faHeart} size="lg" />
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