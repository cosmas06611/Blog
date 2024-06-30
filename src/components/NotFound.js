import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>the page you are looking for is not found</p>
      <Link to="/">Back to HOME</Link>
    </div>
  )
}

export default NotFound
