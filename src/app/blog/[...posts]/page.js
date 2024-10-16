'use-client'
import React from 'react'

const page = ({params}) => {
    console.log('params',params);
  return (
    <div>
      <h2>Posts</h2>
      <h3>Blog:{params.posts[0]}</h3>
      <h3>Posts:{params.posts[1]}</h3>
      <h3>comments:{params.posts[3]}</h3>
    </div>
  )
}

export default page
