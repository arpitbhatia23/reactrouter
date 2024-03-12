import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id}=useParams()

  return (
    <div className='bg-gray-600  text-white text-center'>
      user:{id}
    </div>
  )
}

export default User
