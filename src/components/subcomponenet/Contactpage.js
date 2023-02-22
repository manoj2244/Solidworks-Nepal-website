import React from 'react'
import Contact from '../Contact'

const Contactpage = () => {
  return (
     <main id="main1">


            <div className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Contact Page</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Contact</li>
                        </ol>
                    </div>

                </div>
            </div>

            <Contact/>

        </main>
  )
}

export default Contactpage