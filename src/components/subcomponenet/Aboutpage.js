import React from 'react'
import About from '../About'
import Mission from '../Mission'

const Aboutpage = () => {
  return (
     <main id="main1">


            <div className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>About Page</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>About</li>
                        </ol>
                    </div>

                </div>
            </div>

            <About/>
            <Mission/>
          

        </main>
  )
}

export default Aboutpage