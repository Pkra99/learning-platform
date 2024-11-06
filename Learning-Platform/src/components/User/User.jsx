import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className="bg-gray-500 text-white p-4 text-3xl text-center">
      User: {id}
    </div>    
  );
}

export default User