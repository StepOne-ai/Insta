import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";

const NotificationFeed = () => {
  const notifications = [
    {
      id: 1,
      type: "like",
      user: "user1",
      post: "My awesome post",
      time: "2m ago",
    },
    {
      id: 2,
      type: "follow",
      user: "user2",
      time: "10m ago",
    },
    {
      id: 3,
      type: "like",
      user: "user3",
      post: "My cat photo",
      time: "1h ago",
    },
    {
      id: 4,
      type: "follow",
      user: "user4",
      time: "3h ago",
    },
  ];

  return (
    <Card className="mb-5" style={{ width: "100%", maxWidth: "600px", marginTop: "100px" }}>
      <Card.Header>
        <h5>Notifications</h5>
      </Card.Header>
      <ListGroup variant="flush">
        {notifications.map((notification) => (
          <ListGroup.Item key={notification.id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                {notification.type === "like" ? (
                  <span>
                    <strong>{notification.user}</strong> liked your post:{" "}
                    <em>{notification.post}</em>
                  </span>
                ) : (
                  <span>
                    <strong>{notification.user}</strong> started following you.
                  </span>
                )}
              </div>
              <Badge bg="secondary" pill>
                {notification.time}
              </Badge>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default NotificationFeed;