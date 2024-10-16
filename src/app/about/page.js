import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href={'/home'}>Home</Link>
    </div>
  )
}

export default About
