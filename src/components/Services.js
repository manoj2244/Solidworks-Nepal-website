import axios from 'axios';
import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';




const Services = () => {
  
  
  const url = "https://knowuvraj.com/solid-admin";




  useEffect(() => {
      window.scrollTo(0, 0);
      Services();

  }, []);

  const [viewservices, setViewservices] = useState();
  

  const Services = async () => {
      try {
          axios.get(`${url}/services.php`)
              .then(res => {
                  
                  setViewservices(res.data);
              })
      } catch (error) { throw error; }


  }
  return (

    
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our Services</h2>
          <p>Discover the unmatched solutions that drive business success. Our innovative services are tailored to meet the unique needs of your business, empowering you to reach your full potential.  our team of experts is dedicated to transforming your business and elevating it to new heights. </p>
        </div>

        <div className="row gy-5">
          {
            viewservices && viewservices.slice(0,3).map((data) => {
              return(<div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200" key={data && data.id}>
            <div className="service-item">
              <div className="img">
                <img src={`${url}/images/${data && data.image}`} className="img-fluid" alt="" style={{height:"260px"}}/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                <i className="bi bi-gear-wide-connected"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>{data && data.title}</h3>
                </a>
                <p >{data && data.description.substr(0,170)}. . .</p>
              </div>
            </div>
            
          </div>)
            })
          }

          

 
          



        </div>

      </div>
    </section>
  )
}

export default Services