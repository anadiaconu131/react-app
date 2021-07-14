import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

export const UserProvider = ({ children, user }) => (
  <UserContext.Provider value={user}>
    {children}
  </UserContext.Provider>
);

UserProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};

export const useUserConsumer = () => useContext(UserContext);
