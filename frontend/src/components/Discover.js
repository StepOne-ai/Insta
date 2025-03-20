import React, { useState } from 'react';
import { Container, Form, FormControl, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Discover.module.css'; // Создайте файл стилей

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Примерные данные для постов
  const posts = [
    {
      id: 1,
      image: 'https://avatars.mds.yandex.net/i?id=7d5f40ec847127703846e7ed40acd6ffa072d241-12376819-images-thumbs&n=13',
      link: '/post/1', // Ссылка на пост
    },
    {
      id: 2,
      image: 'https://avatars.mds.yandex.net/i?id=7d5f40ec847127703846e7ed40acd6ffa072d241-12376819-images-thumbs&n=13',
      link: '/post/2',
    },
    {
      id: 3,
      image: 'https://avatars.mds.yandex.net/i?id=7d5f40ec847127703846e7ed40acd6ffa072d241-12376819-images-thumbs&n=13',
      link: '/post/3',
    },
    {
      id: 4,
      image: 'https://avatars.mds.yandex.net/i?id=7d5f40ec847127703846e7ed40acd6ffa072d241-12376819-images-thumbs&n=13',
      link: '/post/4',
    },
    {
      id: 5,
      image: 'https://avatars.mds.yandex.net/i?id=7d5f40ec847127703846e7ed40acd6ffa072d241-12376819-images-thumbs&n=13',
      link: '/post/5',
    },
    {
      id: 6,
      image: 'https://avatars.mds.yandex.net/i?id=7d5f40ec847127703846e7ed40acd6ffa072d241-12376819-images-thumbs&n=13',
      link: '/post/6',
    },
  ];

  // Фильтрация постов по поисковому запросу (если нужно)
  const filteredPosts = posts.filter((post) =>
    post.link.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-5 pt-5 pb-5">
      {/* Поисковая строка */}
      <Form className="mb-4">
        <FormControl
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchBar}
        />
      </Form>

      {/* Сетка постов */}
      <Row className="g-3">
        {filteredPosts.map((post) => (
          <Col key={post.id} xs={12} md={6} lg={4}>
            <Link to={post.link} className={styles.postLink}>
              <div className={styles.postContainer}>
                <Image src={post.image} alt={`Post ${post.id}`} fluid className={styles.postImage} />
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Discover;