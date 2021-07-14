import React from 'react';

import PropTypes from 'prop-types';
import UserDetails from './UserDetails';

const UsersList = ({ users }) => (
  <div>
    {users.map((user) => <UserDetails user={user} />)}
  </div>
);
UsersList.defaultProps = {
  users: [],
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default UsersList;
