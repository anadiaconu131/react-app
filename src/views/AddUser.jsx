import React, { useState } from 'react';

import UserForm from '../components/UserForm';
import { UserProvider } from '../context/UserContext';
import Card from '../components/Card';
import { buildUserData } from '../helpers/helpers';

const AddUser = () => {
  const initialUser = {
    id: '',
    title: '',
    subtitle: '',
    thumbnail: '',
    description: '',
  };
  const [user, setUser] = useState(initialUser);

  const resetForm = () => {
    if (user.nickname) {
      const id = `user${Math.floor(Math.random() * 100)}`;
      setUser({ ...initialUser, id });
    }
  };

  const submitForm = (data) => {
    setUser(buildUserData({ ...user, ...data }));
  };

  return (
    <UserProvider user={user}>
      <UserForm
        className="mb-3"
        userId={user.id}
        handleSubmit={submitForm}
        resetForm={resetForm}
      />
      { user.id && <Card {...user} /> }
    </UserProvider>
  );
};

export default AddUser;
