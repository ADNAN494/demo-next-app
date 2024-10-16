import React from 'react'
import Image from 'next/image'
import img from "../../../public/img.jpg"
const ImageOpz = () => {
  return (
    <div>
      <h2>Image Optimaztion in Next js</h2>
      <Image
        src={img} alt='flower-img' height={500} width={1000}
      />
      <Image
        src='https://images.pexels.com/photos/25636678/pexels-photo-25636678/free-photo-of-red-sky-over-a-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='city-img'
        height={500}
        width={1000}
      />
    </div>
  )
}

export default ImageOpz
