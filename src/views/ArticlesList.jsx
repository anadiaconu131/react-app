import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import userApi from '../api/users';
import Card from '../components/Card';
import { buildArticlesData } from '../helpers/helpers';

const ArticlesList = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchUsers() {
      const data = await userApi.getUserArticles(id);
      if (data.length) {
        setUsers(buildArticlesData(data));
      }
    }
    fetchUsers();
  }, [id]);

  return (
    <>
      <h2>Articles List</h2>
      <Row xs={1} md={2} className="g-4">
        { users.map((user) => <Card key={user.id} {...user} fullDisplay />) }
      </Row>
    </>
  );
};

export default ArticlesList;
