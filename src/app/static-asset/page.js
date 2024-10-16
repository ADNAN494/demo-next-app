import React from 'react'
import Image from 'next/image'
const StaticAssets = () => {
  return (
    <div>
      <h2>Static Assets in Next jS</h2>
      <Image src="/img.jpg" alt='flower-img' width={500} height={500}/>
    </div>
  )
}

export default StaticAssets
