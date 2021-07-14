import React, { useState } from 'react';

import UserForm from "../components/UserForm";
import UserDetails from "../components/UserDetails";
import { UserProvider } from "../services/UserContext";

const UpdateUser = () => {
    const initialUser = {
        id: 'user001',
        nickname: '',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
        biography: ''
    }
    const [user, setUser] = useState(initialUser);

    const resetForm = () => {
        if(user.nickname) {
            const id = `user${Math.floor(Math.random() * 100)}`
            setUser({...initialUser, id})
        }
    }

    const submitForm = (data) => {
        setUser({...user,...data})
    }

    return (
        <UserProvider user={user}>
            <UserForm
                className="mb-3"
                userId={user.id}
                handleSubmit={submitForm}
                resetForm={resetForm}
            />
            <UserDetails />
        </UserProvider>
    )
};

export default UpdateUser;
