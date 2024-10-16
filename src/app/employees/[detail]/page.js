import React from 'react'

const EmpolyeeDetail = ({params}) => {
  return (
    <div>
      <h1>Empolyee Detail</h1>
       <h3>Employee Name: {params.detail}</h3>
    </div>
  )
}

export default EmpolyeeDetail
