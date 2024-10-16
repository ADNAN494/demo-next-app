'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const home = () => {
    const router = useRouter();
    const handleNavigation = (url)=>{
        router.push(url)
    }
    return (
        <div>
            <h1>Home Page</h1>
            <Link href={'/about'}>About</Link><br/>
            <button onClick={()=> router.push('/contact-us')}>Navigate to Contact page</button><br/>
            <button onClick={()=> handleNavigation('/about')}>Navigate to About page</button><br/>
            <Link href={'/contact-us/contact-hr'}>Nested Hr page</Link><br/>
            <button onClick={()=> handleNavigation('/contact-us/contact-it')}>Nested Routing</button><br/>
            <h2>Employees</h2>
            <ul>
                <li>
                    <Link href="/home/adnan">Adnan</Link>
                </li>
                <li>
                    <Link href="/home/salman">Salman</Link>
                </li>
                <li>
                    <Link href="/home/nauman">Nauman</Link>
                </li>
            </ul>
        </div>
    )
}

export default home
