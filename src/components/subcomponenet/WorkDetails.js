import React from 'react'
import Work from '../Work'
import './WorkDetails.css'

const WorkDetails = () => {
  return (
    <main id="main-work">


            <div className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Work Details</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Works</li>
                        </ol>
                    </div>

                </div>
            </div>


          <Work/>

        </main>
  )
}

export default WorkDetails