import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import userApi from '../api/users';
import { buildUsersData } from '../helpers/helpers';
import Card from '../components/Card';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await userApi.getUsers();
      if (data.length) {
        setUsers(buildUsersData(data));
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <h2>Users List</h2>
      <Row xs={1} md={2} className="g-4">
        { users.map((user) => <Card key={user.id} {...user} />) }
      </Row>
    </>
  );
};

export default UsersList;
