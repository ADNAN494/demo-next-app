'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const layout = ({ children }) => {
  const currentPath = usePathname();
  return (
    <div>
      {
        currentPath !== '/contact-us/contact-it' ? <h2>Common LAYOUT</h2> : null
      }
      {children}
    </div>
  )
}

export default layout
