import React from 'react'

const DynamicMetaData = () => {
  return (
    <div>
      <h2>Dynamic Meta Data </h2>
    </div>
  )
}

export default DynamicMetaData

export function generateMetadata(){
    return{
        title:'My Dynamic Deta',
        description: 'This is My Next js'
    }
}