// src/components/LikesList.js

import React from "react";
import { ListGroup, Image } from "react-bootstrap";

const LikesList = ({ likes }) => {
  // Example list of users who liked the post
  const usersWhoLiked = likes || [
    {
      id: 1,
      username: "user1",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      username: "user2",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      username: "user3",
      profilePic: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div style={{ maxHeight: "200px", marginTop: "100px", marginBottom: "40px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
      <h6>Liked by:</h6>
      <ListGroup variant="flush">
        {usersWhoLiked.map((user) => (
          <ListGroup.Item key={user.id} className="d-flex align-items-center" style={{ marginBottom: "10px" }}>
            <Image
              src="https://avatars.mds.yandex.net/i?id=d2c8321f177c58abf0ee723bd3f31217460ca532-5236662-images-thumbs&n=13"
              roundedCircle
              width={40}
              height={40}
              className="me-3"
            />
            <span>{user.username}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default LikesList;