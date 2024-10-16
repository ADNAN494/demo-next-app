"use client";

import { useEffect, useState } from "react";
import Loader from "./loader.js";

async function myList() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users');
    data = await data.json();
    return data;
}

const LoaderData = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let fetchDataUser = await myList();
            setUser(fetchDataUser);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Loading data with loader in Next.js</h2>
            {
                loading ? <Loader /> : (
                    user.map((user, i) => (
                        <h3 key={i}>Name: {user.username}</h3>
                    ))
                )
            }
        </div>
    );
}

export default LoaderData;
