"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = (props) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const id = props.params.updateemp;
const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, salary };
    try {
      const response = await fetch(`http://localhost:3000/api/db-data/${id}`, { 
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Employee info updated successfully!');
        router.push('/get-monog-data')
      } else {
        alert('Failed to update employee info');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
      alert('Error updating employee info');
    }
  };

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/db-data/${id}`);
                
                // Check if the response is OK
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json(); 
                console.log(data?.result?.name);
                console.log(data?.result?.salary);
                if (data.success) {
                    setName(data.result.name);
                    setSalary(data.result.salary);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, [id]); 

  return (
    <div>
      <h2>Update the Employee Info</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div><br/>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div><br/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Page;
