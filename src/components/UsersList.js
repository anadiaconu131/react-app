import React from 'react';

import UserDetails from "./UserDetails";

const UsersList = ({users}) => {
    return (
        <div>
            {users.map(user => <UserDetails user={user} />)}
        </div>
    )
};

export default UsersList;
