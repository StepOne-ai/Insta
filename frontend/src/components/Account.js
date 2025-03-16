// src/pages/Account.js

import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Account.css'; // Optional: Add custom CSS for styling

const Account = () => {
  // Example user data
  const user = {
    username: 'john_doe',
    profilePic: 'https://avatars.mds.yandex.net/i?id=d2c8321f177c58abf0ee723bd3f31217460ca532-5236662-images-thumbs&n=13',
    bio: 'Travel enthusiast 🌍 | Photographer 📸 | Coffee lover ☕',
    posts: [
      {
        id: 1,
        image: 'https://avatars.mds.yandex.net/i?id=1602b3f80c3bba90872f8496f05322e9e00e8e64-5334779-images-thumbs&n=13',
        caption: 'Beautiful sunset!',
      },
      {
        id: 2,
        image: 'https://avatars.mds.yandex.net/i?id=1602b3f80c3bba90872f8496f05322e9e00e8e64-5334779-images-thumbs&n=13',
        caption: 'Exploring the mountains 🏔️',
      },
      {
        id: 3,
        image: 'https://avatars.mds.yandex.net/i?id=1602b3f80c3bba90872f8496f05322e9e00e8e64-5334779-images-thumbs&n=13',
        caption: 'Coffee and code ☕💻',
      },
      // Add more posts as needed
    ],
  };

  return (
    <Container className="mt-5 pt-5 pb-5">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Profile Header */}
          <Row className="align-items-center mb-4">
            {/* Profile Picture */}
            <Col xs={4} className="text-center">
              <Image
                src={user.profilePic}
                roundedCircle
                width={150}
                height={150}
                className="border"
              />
            </Col>

            {/* Profile Info */}
            <Col xs={8}>
              <h2>{user.username}</h2>
              <p>{user.bio}</p>
              <Button variant="outline-secondary" size="sm" href='/settings'>
                <FontAwesomeIcon icon={faEdit} className="me-2" />
                Edit Profile
              </Button>
            </Col>
          </Row>

          {/* User's Posts Grid */}
          <Row className="g-3">
            {user.posts.map((post) => (
              <Col key={post.id} xs={6} md={4}>
                <Card className="post-card">
                  <Card.Img variant="top" src={post.image} />
                  <Card.Body className="p-2">
                    <Card.Text className="text-muted">{post.caption}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Account;