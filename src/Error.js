import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='main-error'>

        <div className="error">
            <h2>404 Error</h2>
            <h4>Oops, looks like the page is lost.</h4>
            <p>This is not a fault, just an accident that was not intentional.</p>
            <Link to="/"><button className='btn btn-primary'>Go back to Homepage</button></Link>
        </div>
    </div>
  )
}

export default Error