import React, { useState } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Home.css';

const Home = () => {
  const allPosts = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    username: `user_${index + 1}`,
    profilePic: 'https://avatars.mds.yandex.net/i?id=d2c8321f177c58abf0ee723bd3f31217460ca532-5236662-images-thumbs&n=13',
    image: 'https://avatars.mds.yandex.net/i?id=1602b3f80c3bba90872f8496f05322e9e00e8e64-5334779-images-thumbs&n=13',
    caption: `This is post number ${index + 1}`,
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
  }));

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 10;

  const offset = currentPage * postsPerPage;
  const currentPosts = allPosts.slice(offset, offset + postsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center align-items-center pt-5">
        <Col md={8}>
          {/* List of Posts */}
          {currentPosts.map((post) => (
            <Card key={post.id} className="mb-4">
              {/* Post Header */}
              <Card.Header className="d-flex align-items-center">
                <Image
                  src={post.profilePic}
                  roundedCircle
                  width={40}
                  height={40}
                  className="me-3"
                />
                <strong>{post.username}</strong>
              </Card.Header>

              {/* Post Image */}
              <Card.Img variant="top" src={post.image} width="100%" height={300} />

              {/* Post Caption and Stats */}
              <Card.Body>
                <Card.Text>
                  <strong>{post.username}</strong> {post.caption}
                </Card.Text>
                <Card.Text className="text-muted">
                  <a href="/likes_list" style={{ textDecoration: 'none', color: 'inherit' }}>{post.likes} likes</a> • <a href="/comment_section" style={{ textDecoration: 'none', color: 'inherit' }} className="text-muted">{post.comments} comments</a>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}

          {/* Pagination */}
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={Math.ceil(allPosts.length / postsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;