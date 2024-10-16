"use client"; // Correct directive

import { useState } from "react";

const AddEmployee = () => {
  const [name, setName] = useState(''); // Set default state to an empty string
  const [salary, setSalary] = useState(''); // Set default state to an empty string

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/db-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify JSON format
        },
        body: JSON.stringify({ name, salary }),
      });

      const data = await response.json(); // Await the JSON response

      if (data.success) {
        alert('Employee Created');
        setName(''); // Reset the name input
        setSalary(''); // Reset the salary input
      } else {
        alert('Failed to create employee');
      }
    } catch (error) {
      console.error('Error creating employee:', error);
      alert('An error occurred while creating the employee');
    }
  };

  return (
    <div>
      <h2>Create Employee Data</h2>
      <input
        type="text"
        placeholder="Enter Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Enter Employee Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      /><br /><br />
      <button onClick={handleSave}>Create</button>
    </div>
  );
};

export default AddEmployee;
