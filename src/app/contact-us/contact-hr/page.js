'use client'; 
import { useRouter } from 'next/navigation';
import React from 'react';

const ContactHr = () => {
    const router = useRouter();  

    const handleNavigate = (url) => {
        router.push(url);  
    };

    return (
        <div>
            <h1>Welcome to HR</h1>
            <button onClick={() => handleNavigate('/home')}>Go to home page</button>
        </div>
    );
};

export default ContactHr;
