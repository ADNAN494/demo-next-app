"use client"; // Add this at the top

import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        async function getUser() {
            const userData = await fetch('https://jsonplaceholder.typicode.com/users');
            setUser(await userData.json());
        }
        getUser();
    }, []);

    return (
        <div>
            <h2>Fetch Api Data</h2>
            {
                user.map((user) => (
                    <ul key={user.id}>
                        <li>
                            {user.username}
                        </li>
                        <li>
                            {user.address.street}
                        </li>
                    </ul>
                ))
            }
        </div>
    );
};

export default UserList;
