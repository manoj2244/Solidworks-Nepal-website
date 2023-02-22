import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../Services'

const Servicepage = () => {
  return (
     <main id="main1">


            <div className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Services Page</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>services</li>
                        </ol>
                    </div>

                </div>
            </div>

            <Services/>



        </main>
  )
}

export default Servicepage;