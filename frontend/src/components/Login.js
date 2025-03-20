// src/components/Login.js

import React from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Container className="justify-content-center align-items-center pb-5" style={{ height: '100vh', paddingTop: '100px' }}>
      <Card style={{ width: '350px' }} className="p-4">
        <Card.Body>
          <h2 className="text-center mb-4">Instagram Clone</h2>

          {/* Login Form */}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Username or Email"
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
              Log In
            </Button>
          </Form>

          {/* Divider */}
          <div className="text-center my-3">
            <span className="text-muted">OR</span>
          </div>

          {/* Login with Facebook */}
          <Button variant="outline-primary" className="w-100 mb-3">
            Log in with VK ID
          </Button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <Link to="/forgot-password" className="text-decoration-none">
              Forgot password?
            </Link>
          </div>
        </Card.Body>
      </Card>

      {/* Sign Up Section */}
      <Card style={{ width: '350px' }} className="mt-3 p-3 text-center">
        <Card.Body>
          Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;