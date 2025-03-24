import React, { useState } from 'react';
import { Container, Card, Form, Button, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AxiosInstance from './Axios';
import { useNavigate } from 'react-router-dom';
import './CreateMemory.css';

const CreateMemory = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [caption, setCaption] = useState('');

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const image = document.getElementById('image-upload').files[0];

    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('image', image);

    AxiosInstance.post('posts/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      alert('Post created successfully!');
      setImagePreview(null);
      setCaption('');
    })
    .catch(error => {
      console.error('Error creating post:', error);
    });
    setImagePreview(null);
    setCaption('');
    navigate('/');
  };

  return (
    <Container className="mt-5 pt-5 pb-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Post your memory...</h2>

              {/* Image Upload Section */}
              <Form.Group className="mb-3 text-center">
                <Form.Label htmlFor="image-upload" className="d-block">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fluid
                      className="mb-3"
                      style={{ maxHeight: '300px', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="image-upload-placeholder">
                      <FontAwesomeIcon icon={faImage} size="3x" className="text-muted" />
                      <p className="mt-2">Upload an image</p>
                    </div>
                  )}
                </Form.Label>
                <Form.Control
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="d-none"
                />
              </Form.Group>
              {/* Title input */}
              {/* <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group> */}

              {/* Caption Input */}
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </Form.Group>

              {/* Submit Button */}
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                onClick={handleSubmit}
                disabled={!imagePreview || !caption}
              > 
                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                Share Post
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateMemory;