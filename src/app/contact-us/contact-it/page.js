'use-client'
import Link from 'next/link'
import React from 'react'

const ContactIt = () => {
  return (
    <div>
      <h1>Welcome to It</h1>
      <Link href={'/contact-us'}>Go back</Link>
    </div>
  )
}

export default ContactIt
