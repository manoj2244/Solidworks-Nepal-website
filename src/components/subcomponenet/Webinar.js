import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Event.css'





const Event = () => {
  const url = "https://knowuvraj.com/solid-admin";

  const params = useParams();
  const id = params.id;


  useEffect(() => {
    window.scrollTo(0, 0);
    Webinar();

}, []);

const [viewwebinar, setViewwebinar] = useState();


const Webinar = async () => {
  try {
    axios.post(`${url}/webinar.php`, {
      webinarid: id,
      
    })
      .then(res => {
        console.log(res.data[0])

        setViewwebinar(res.data[0]);


      })

  } catch (error) { throw error; }


}
  return (

    <main id="main1">


      <div className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Webinar Details</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Webinar</li>
            </ol>
          </div>

        </div>
      </div>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container" data-aos="fade-up">

          <div className="row gy-4">

            
            <div className="col-lg-8">
            <img src={`${url}/images/${viewwebinar && viewwebinar.image}`} alt="" />
              </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Webinar information</h3>
                <ul>
                  <li><strong>Title</strong>: {viewwebinar&&viewwebinar.title}</li>
                  <li><strong>Guest</strong>: {viewwebinar&&viewwebinar.guest}</li>
                  <li><strong>Webinar date</strong>: {viewwebinar&&viewwebinar.webinar_date}</li>
                  <li><strong>Duration</strong>: {viewwebinar&&viewwebinar.duration}</li>
                  <li><strong>Webinar URL</strong>: <a href={viewwebinar&&viewwebinar.url}>Youtube Video</a></li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Description About Webinar</h2>
                <p>
                  {viewwebinar&&viewwebinar.description}
                </p>
              </div>
            </div>

            

          </div>

        </div>
      </section>

    </main>

  )
}

export default Event;