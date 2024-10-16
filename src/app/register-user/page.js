"use client";

import { useState } from "react";

const RegisterUser = () => {
    const [id ,setId] = useState();
    const [userName , setUserName] = useState();
    const [age, setAge] = useState();

    const handleRegister = async ()=>{
        try {
            let data = await fetch("http://localhost:3000/api/user" ,{
                method: 'Post',
                body: JSON.stringify({id,userName,age})
            })
            data = await data.json();
            console.log(data);
            if(data.status == 200){
                alert('Data sent sucessfully')
            }else{
                alert('Data Not Sent')
            }
        } catch (error) {
            console.log(error); 
            alert('Data Not sent')
        }
    }
  return (
    <div>
      <h2>Integrate Post  User Api in Next-Js</h2>
      <div>
      <input type="text" placeholder='Enter id' value={id} onChange={(e)=> setId(e.target.value)}/><br/><br/>
      <p>Your ID: {id}</p>
        <input type="text" placeholder='Enter Name' value={userName} onChange={(e)=> setUserName(e.target.value)}/><br/><br/>
        <input type="text"  placeholder='Enter Age' value={age} onChange={(e)=> setAge(e.target.value)}/><br/><br/>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  )
}

export default RegisterUser
