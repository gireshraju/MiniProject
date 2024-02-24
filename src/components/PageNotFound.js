import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
        <center>
      <h1>404 Error</h1>
      <h2>Page Not Found</h2>
      <Link to='/'><button>Go back to Home</button></Link>
      </center>
    </div>
  )
}

export default PageNotFound
