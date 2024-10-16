'use client'
import React, { useState } from 'react'
const EventsFunctionsState = () => {
    const [firstName, setFirstName] = useState('Ali');
    // let firstName = 'Ali'
    function showAlert() {
        alert('hello');
    }

    function handleClick(message) {
        alert(message)
    }
    function handleClick1(param1, param2) {
        alert(`Param1: ${param1}, Param2: ${param2}`);
    }
    const changeName = () => {
        setFirstName('Adnan');  
        console.log('Name changed to Adnan'); 
      };
    return (
        <>
            <h2>Events Functions State</h2>
            <button onClick={() => alert('helo')}>Click Me</button>
            <button onClick={showAlert}>Click Me</button>
            <button onClick={() => handleClick('Helo world')}>Click Me</button>
            <button onClick={() => handleClick1('First Param', 'Second Param')}>Multiple Params</button>
            <h3>My name is: {firstName}</h3>
            <button onClick={changeName}>Change Name</button>
        </>
    )
}

export default EventsFunctionsState
