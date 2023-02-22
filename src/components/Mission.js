import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';


const Mission = () => {
  const url = "https://knowuvraj.com/solid-admin";
  useEffect(() => {
    window.scrollTo(0, 0);
    mission();

}, []);



const [viewmission, setViewmission] = useState([]);

const mission = async () => {
    try {
        axios.get(`${url}/mission.php`)
            .then(res => {
                console.log(res.data[0])
                setViewmission(res.data[0]);
            })
    } catch (error) { throw error; }

  
}
  return (
    <section id="about-boxes" className="about-boxes" style={{padding:"32px 0"}}>
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
          <div className="card">
            <img src={`${url}/images/${viewmission&&viewmission.missionimage}`} className="card-img-top" alt="..."/>
            <div className="card-icon">
              <i className="bi bi-globe"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title"><a href="">Our Mission</a></h5>
              <p className="card-text">{viewmission&&viewmission.mission}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
          <div className="card">
            <img src={`${url}/images/${viewmission&&viewmission.planimage}`} className="card-img-top" alt="..."/>
            <div className="card-icon">
              <i className="bi bi-brightness-high-fill"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title"><a href="">Our Plan</a></h5>
              <p className="card-text">{viewmission&&viewmission.plan}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
          <div className="card">
            <img src={`${url}/images/${viewmission&&viewmission.goalimage}`} className="card-img-top" alt="..."/>
            <div className="card-icon">
              <i className="bi bi-hypnotize"></i>
            </div>
            <div className="card-body">
              <h5 className="card-title"><a href="">Our Goal</a></h5>
              <p className="card-text">{viewmission&&viewmission.goal}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Mission