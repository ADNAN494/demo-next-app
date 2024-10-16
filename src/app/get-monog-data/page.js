import React from 'react';
import Link from 'next/link';
import Delete from '../components/Delete';

const getData = async () => {
    const response = await fetch('http://localhost:3000/api/db-data');
    const data = await response.json();
    return data;
};

const Page = async () => {
    const { success, data: empData } = await getData(); // Fetch data server-side

    if (!success) {
        return <div>Error fetching data</div>; // Handle error case
    }

    return (
        <div>
            <h2>Get data From MongoDB</h2>
            <button><Link href="/">Back</Link></button>
            <table border={2} cellSpacing={10}>
                <thead cellSpacing={5}>
                    <tr cellSpacing={5}>
                        <td>Name</td>
                        <td>Salary</td>
                        <td>Edit</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {empData.map((data, i) => (
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.salary}</td>
                            <td>
                                <Link href={`get-monog-data/${data._id}`}>Update</Link>
                            </td>
                            <td>
                                <Delete id={data._id}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page;
