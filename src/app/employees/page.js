import Link from 'next/link';
import React from 'react';

const Employees = () => {
    return (
        <div>
            <h2>Employees</h2>
            <ul>
                <li>
                    <Link href="/employees/adnan">Adnan</Link>
                </li>
                <li>
                    <Link href="/employees/salman">Salman</Link>
                </li>
                <li>
                    <Link href="/employees/nauman">Nauman</Link>
                </li>
            </ul>
        </div>
    );
};

export default Employees;
