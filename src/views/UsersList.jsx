import React from 'react';

import { buildUsersData } from '../helpers/helpers';
import DataList from '../components/DataList';

const UsersList = () => (
  <DataList title="Users List" processData={buildUsersData} url="users" />
);

export default UsersList;
