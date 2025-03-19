// src/components/SignUp.js

import React from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your signup logic here
    navigate('/'); // Redirect to home after signup
  };

  return (
    <Container className="justify-content-center align-items-center pb-5" style={{ height: '100vh', paddingTop: '100px' }}>
      <Card style={{ width: '350px' }} className="p-4">
        <Card.Body>
          <h2 className="text-center mb-4">Instagram Clone</h2>

          {/* Sign Up Form */}
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Username"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Sign Up
            </Button>
          </Form>

          {/* Terms and Conditions */}
          <div className="text-center text-muted">
            By signing up, you agree to our <a href="/terms" className="text-decoration-none">Terms</a> and <a href="/privacy" className="text-decoration-none">Privacy Policy</a>.
          </div>
        </Card.Body>
      </Card>

      {/* Login Section */}
      <Card style={{ width: '350px' }} className="mt-3 p-3 text-center">
        <Card.Body>
          Have an account? <Link to="/login" className="text-decoration-none">Log In</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUp;