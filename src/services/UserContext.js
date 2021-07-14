import React, { createContext, useContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({children, user}) => {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserConsumer = () => {
    return useContext(UserContext);
}
