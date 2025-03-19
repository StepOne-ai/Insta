// src/components/CommentSection.js

import React, { useState } from "react";
import { Card, ListGroup, Form, Button, InputGroup, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CommentSection.css';
import {
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const CommentSection = ({ post }) => {

  const initialComments = post?.comments || [];
  // State for managing comments
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  // Example comments (if no comments are provided)
  const exampleComments = [
    {
      id: 1,
      user: "user1",
      text: "This is amazing!",
      likes: 5,
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      user: "user2",
      text: "Where was this taken?",
      likes: 3,
      timestamp: "11:00 AM",
    },
  ];

  // Use example comments if no comments are provided
  if (comments.length === 0) {
    setComments(exampleComments);
  }

  // Function to handle adding a new comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const comment = {
      id: comments.length + 1,
      user: "current_user", // Replace with actual user data
      text: newComment,
      likes: 0,
      timestamp: new Date().toLocaleTimeString(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  // Function to handle liking a comment
  const handleLikeComment = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  return (
    <Card style={{ marginTop: "100px", marginBottom: "100px", width: "600px"}}>
      {/* Display the Post */}
      <Card.Img variant="top" style={{ width: "100%", borderRadius: "10px" }} src="https://avatars.mds.yandex.net/i?id=1602b3f80c3bba90872f8496f05322e9e00e8e64-5334779-images-thumbs&n=13" />
      <Card.Body>
        <Card.Text style={{ borderRadius: "5px", border: "1px solid #dbdbdb", padding: "20px", fontWeight: "bold", backgroundColor: "#f8f9fa"}}>Some text about the post</Card.Text>
      </Card.Body>

      {/* Comments Section */}
      <Card.Body>
        <h6>Comments</h6>
        <ListGroup variant="flush">
          {comments.map((comment) => (
            <ListGroup.Item
              key={comment.id}
              className="d-flex justify-content-between align-items-start"
              style={{ borderRadius: "10px", marginBottom: "10px" }}
            >
              <div>
                <strong>{comment.user}</strong>
                <p className="mb-1">{comment.text}</p>
                <small className="text-muted">{comment.timestamp}</small>
              </div>
              <Button
                variant="link"
                size="sm"
                onClick={() => handleLikeComment(comment.id)}
              >
                <FontAwesomeIcon icon={faHeart} className="me-1" />
                {comment.likes}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* Add Comment Form */}
        <Form onSubmit={handleAddComment} className="mt-3">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button type="submit" variant="primary">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </InputGroup>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CommentSection;