import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const About = () => {
  const url = "https://knowuvraj.com/solid-admin";
  useEffect(() => {
    window.scrollTo(0, 0);
    About();

}, []);

const [viewAbout, setViewAbout] = useState([]);

const About = async () => {
    try {
        axios.get(`${url}/About.php`)
            .then(res => {
                console.log(res.data[0])
                setViewAbout(res.data[0]);
            })
    } catch (error) { throw error; }

  
}

  return (
    <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <h2>About Us</h2>
     
      </div>

      <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">

        <div className="col-lg-5">
          <div className="about-img">
            {/* <img src={`${url}/images/${viewAbout.image}`} className="img-fluid" alt="" style={{height:"400px"}}/> */}
          </div>
        </div>

        <div className="col-lg-7">
          <h3 className="pt-0 pt-lg-5"></h3>



         
          <div className="tab-content">

            <div className="tab-pane fade show active" id="tab1">

              <p className="">{viewAbout?viewAbout.main_intro:<p>No Data Found!!</p>}</p>

              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-check2"></i>
                <h4>{viewAbout&&viewAbout.design}</h4>
              </div>
              <p>{viewAbout&&viewAbout.designdesc}</p>

              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-check2"></i>
                <h4>{viewAbout&&viewAbout.simu}</h4>
              </div>
              <p>{viewAbout&&viewAbout.simudesc}</p>

              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-check2"></i>
                <h4>{viewAbout&&viewAbout.fab}</h4>
              </div>
              <p>{viewAbout&&viewAbout.fabdesc}</p>

            </div>



          </div>

        </div>

      </div>

    </div>
  </section>
  )
}

export default About