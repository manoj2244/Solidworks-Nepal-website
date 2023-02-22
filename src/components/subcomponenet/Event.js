
import './Event.css'
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const Event = () => {

  const url = "https://knowuvraj.com/solid-admin";

  const params = useParams();
  const id = params.id;


  useEffect(() => {
    window.scrollTo(0, 0);
    Webinar();

}, []);

const [viewwebinar, setViewwebinar] = useState();
const [vieweventimage, setVieweventimage] = useState();


const Webinar = async () => {
  try {
    axios.post(`${url}/event.php`, {
      eventid: id,
      
    })
      .then(res => {
        console.log(res.data[0])

        setViewwebinar(res.data[0]);


      })

  } catch (error) { throw error; }

  try {
    axios.post(`${url}/event.php`, {
      eventimageid: id,
      
    })
      .then(res => {
       

        setVieweventimage(res.data);


      })

  } catch (error) { throw error; }


}
  return (

    <main id="main1">


      <div className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Event Details</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Event</li>
            </ol>
          </div>

        </div>
      </div>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container" data-aos="fade-up">

          <div className="row gy-4">

            <div className="col-lg-8">
          
              <div className="portfolio-details-slider swipers">
                <div className="swipers-wrapper align-items-center">


                  <Swiper loop={true} spaceBetween={10} navigation={true} modules={[Navigation, Pagination, Autoplay]} grabCursor={true} autoplay={{ delay: 2000 }} pagination={{ clickable: true }} >

                    {vieweventimage&&vieweventimage.map((data,key)=>{
                      return(
                        <SwiperSlide key={data&&data.id}>

                      
                        <img src={`${url}/images/${data && data.image_name}`} alt="" />
  
                      </SwiperSlide>
                      )
                    })}
                  
                

                  </Swiper>

                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Event information</h3>
                <ul>
                  <li><strong>Subject</strong>: {viewwebinar&&viewwebinar.subject}</li>
                  <li><strong>Venue</strong>: {viewwebinar&&viewwebinar.venue}</li>
                  <li><strong>Training date</strong>: {viewwebinar&&viewwebinar.training_date}</li>
                  <li><strong>Duration</strong>: {viewwebinar&&viewwebinar.duration}</li>
                  <li><strong>Training URL</strong>: <a href={viewwebinar&&viewwebinar.url}>Youtube Video</a></li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Description About Training</h2>
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