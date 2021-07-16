import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import userApi from '../api/users';
import { buildUsersData } from '../helpers/helpers';
import Card from '../components/Card';

const UserDetails = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function fetchUsers() {
      const data = await userApi.getUser(id);
      if (data) {
        setUser(buildUsersData(data));
      }
    }
    fetchUsers();
  }, [id]);

  return (
    <div>
      {
        user && <Card {...user} />
      }
    </div>
  );
};

export default UserDetails;
