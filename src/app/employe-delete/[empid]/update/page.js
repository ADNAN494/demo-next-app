"use client";

import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
    const id = params.empid;
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    useEffect(() => {
        const getEmpInfo = async () => {
            let response = await fetch(`http://localhost:3000/api/employee/${id}`);
            let data = await response.json();
            if (Array.isArray(data.result) && data.result.length > 0) {
                const employee = data.result[0];
                console.log(employee);
                setName(employee.name);
                setSalary(employee.salary);
            }
        };
        getEmpInfo();
    }, [id]);

    const update = async () => {
        try {
            let response = await fetch(`http://localhost:3000/api/employee/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, salary }),
            });
            let data = await response.json();

            if (data.success === true) {
                alert(data.result);
            } else {
                alert(data.result);
            }
        } catch (error) {
            console.error('Error updating employee information:', error);
            alert('An error occurred while updating the employee information.');
        }
    };

    return (
        <div>
            <h2>Update Info</h2>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Enter Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />
            <br />
            <br />
            <button onClick={update}>Update</button>
        </div>
    );
};

export default Page;
