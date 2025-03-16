// src/components/Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './Footer.css'; // Optional: Add custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row className="text-center">
          {/* Footer Links */}
          <Col md={12} className="mb-3">
            <a href="/about" className="text-decoration-none text-muted mx-2">About</a>
            <a href="/help" className="text-decoration-none text-muted mx-2">Help</a>
            <a href="/api" className="text-decoration-none text-muted mx-2">API</a>
            <a href="/jobs" className="text-decoration-none text-muted mx-2">Jobs</a>
            <a href="/privacy" className="text-decoration-none text-muted mx-2">Privacy</a>
            <a href="/terms" className="text-decoration-none text-muted mx-2">Terms</a>
            <a href="/locations" className="text-decoration-none text-muted mx-2">Locations</a>
            <a href="/top-accounts" className="text-decoration-none text-muted mx-2">Top Accounts</a>
            <a href="/hashtags" className="text-decoration-none text-muted mx-2">Hashtags</a>
            <a href="/language" className="text-decoration-none text-muted mx-2">Language</a>
          </Col>

          {/* Copyright Notice */}
          <Col md={12} className="text-muted">
            &copy; {new Date().getFullYear()} Instagram Clone
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;