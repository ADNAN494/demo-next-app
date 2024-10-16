import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <div>
            <h2>Employee Details</h2>
            <h3>Employee Name: {params.detail}</h3>
        </div>
    </div>
  )
}

export default page
