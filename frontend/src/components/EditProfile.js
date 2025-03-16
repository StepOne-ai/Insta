// src/pages/EditProfile.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCamera } from '@fortawesome/free-solid-svg-icons';
import './EditProfile.css'; // Optional: Add custom CSS for styling

const EditProfile = () => {
  // Example user data
  const [user, setUser] = useState({
    username: 'john_doe',
    profilePic: 'https://avatars.mds.yandex.net/i?id=d2c8321f177c58abf0ee723bd3f31217460ca532-5236662-images-thumbs&n=13',
    bio: 'Travel enthusiast 🌍 | Photographer 📸 | Coffee lover ☕',
    email: 'john.doe@example.com',
    phone: '+1234567890',
  });

  const [imagePreview, setImagePreview] = useState(user.profilePic);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setUser({ ...user, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle profile updates here
    console.log('Updated Profile:', user);
    alert('Profile updated successfully!');
  };

  return (
    <Container className="mt-5 pt-5 pb-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Edit Profile</h2>

          {/* Profile Picture Upload */}
          <Row className="mb-4">
            <Col className="text-center">
              <div className="profile-picture-container">
                <Image
                  src={imagePreview}
                  roundedCircle
                  width={150}
                  height={150}
                  className="border"
                />
                <label htmlFor="profile-picture-upload" className="camera-icon">
                  <FontAwesomeIcon icon={faCamera} size="lg" />
                </label>
                <input
                  type="file"
                  id="profile-picture-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="d-none"
                />
              </div>
            </Col>
          </Row>

          {/* Edit Profile Form */}
          <Form onSubmit={handleSubmit}>
            {/* Username */}
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </Form.Group>

            {/* Bio */}
            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={user.bio}
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Group>

            {/* Phone */}
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="w-100">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;