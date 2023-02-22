import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import HTMLReactParser from 'html-react-parser';



const IndividualWorkDetails = () => {
  const url = "https://knowuvraj.com/solid-admin";

  const params = useParams();
  const id = params.id;
  const type = params.work;


  useEffect(() => {
    window.scrollTo(0, 0);
    if(type ==='3ddesign'){
      View("work3d")
    }
    else if(type==='simulation'){
      View("worksimu")
    }
    else{View("fabrication");}
    

}, []);

const [viewwork, setViewwork] = useState();
const [vieweventimage, setVieweventimage] = useState();


const View = async (type) => {
  try {
    axios.post(`${url}/${type}.php`, {
      eventid: id,
      
    })
      .then(res => {
        console.log(res.data[0])

        setViewwork(res.data[0]);


      })

  } catch (error) { throw error; }

  try {
    axios.post(`${url}/${type}.php`, {
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
          <h2>Portfolio Details</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Work Details</li>
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

            
              <Swiper loop={true}  spaceBetween={10} navigation={true} modules={[Navigation,Pagination,Autoplay]} grabCursor={true} autoplay={{delay:2000}} pagination={{clickable:true}} >


                 {vieweventimage&&vieweventimage.map((data,key)=>{
                      return(
                        <SwiperSlide key={data&&data.id}>

                      
                        <img src={`${url}/images/${data && data.image}`} alt="" />
  
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
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: {viewwork&&viewwork.category}</li>
                <li><strong>Client</strong>: {viewwork&&viewwork.client}</li>
                <li><strong>Project date</strong>: {viewwork&&viewwork.project_date}</li>
                <li><strong>Project URL</strong>: <a href={viewwork&&viewwork.url}>{viewwork&&viewwork.category}</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>Project Description</h2>
              <p>
              {viewwork&&viewwork.description}
              </p>
            </div>
          </div>

        </div>
                    <div className="details-project">
                      <h2 style={{paddingBottom:"20px"}}>Project Details</h2>
                      {viewwork && HTMLReactParser(viewwork.main_desc)}
                    </div>
      </div>
    </section>

  </main>
    
  )
}

export default IndividualWorkDetails;