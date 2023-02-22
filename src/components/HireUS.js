import React from 'react'

const HireUS = () => {
  return (
    <section id="cta" className="cta">
    <div className="container" data-aos="zoom-out">

      <div className="row g-5">

        <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
          <h3>Hire <em>SolidWork Nepal</em> to Meet Your Design Requirements.</h3>
          <p> Join our dynamic team and take the next step in your career. With opportunities to make a difference and drive success, our company is the perfect place to unleash your potential and grow your skills.</p>
            <button type="button" className="hire-btn" data-bs-toggle="modal" data-bs-target="#exampleModals">
         Hire Us!!
         </button>
        </div>

        <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
          <div className="img" style={{height:"100%"}}>
            <img src="assets/img/hire.jpg" alt="" className="img-fluid"/>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default HireUS