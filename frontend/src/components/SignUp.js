import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!passwordError && !emailError) {
      navigate('/');
    }
  };

  const validatePassword = (value) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*]/.test(value);

    if (value.length < minLength) {
      setPasswordError('Password must be at least 8 characters long.');
    } else if (!hasUpperCase) {
      setPasswordError('Password must contain at least one uppercase letter.');
    } else if (!hasNumber) {
      setPasswordError('Password must contain at least one number.');
    } else if (!hasSpecialChar) {
      setPasswordError('Password must contain at least one special character.');
    } else {
      setPasswordError('');
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const isFormValid = () => {
    return (
      email &&
      fullName &&
      username &&
      password &&
      !passwordError &&
      !emailError
    );
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
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <Alert variant="danger" className="mt-2">{emailError}</Alert>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <Alert variant="danger" className="mt-2">{passwordError}</Alert>}
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={!isFormValid()}
            >
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