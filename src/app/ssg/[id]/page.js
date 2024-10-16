import React from 'react'
import getData from "../../../../Apis/userApi.js"
const UserId = async (props) => {
    const data = await getData();
    const users = await data;
    const userId = props.params.id;
    const userInfo = users[userId-1]
    return (
        <div>
            <h2>User Info</h2>
            <h3>ID: {userInfo.id}</h3>
            <h3>UserName: {userInfo.username}</h3>
            <h3>Email: {userInfo.email}</h3>
        </div>
    )
}

export default UserId
