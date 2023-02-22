import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { Link, NavLink } from 'react-router-dom';



const Training = () => {
  const url = "https://knowuvraj.com/solid-admin";

    const [event, setEvent] = useState("portfolio-click");
  const [webinar, setWebinar] = useState("portfolio-unclick");

  const [cond, setCond] = useState(true);
  const [active, setActive] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    Event();

}, []);

const [viewevent, setViewevent] = useState();
const [viewwebinar, setViewwebinar] = useState();


const Event = async () => {
    try {
        axios.get(`${url}/event.php`)
            .then(res => {
                console.log(res.data)
                setViewevent(res.data);
            })
    } catch (error) { throw error; }
    try {
      axios.get(`${url}/webinar.php`)
          .then(res => {
              console.log(res.data)
              setViewwebinar(res.data);
          })
  } catch (error) { throw error; }


}

  useEffect(() => {
    if (cond === true) {
      setActive("active")

    }
    else {
      setActive("")

    }

  }, [])
  return (
     <main id="main1">


            <div className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Training Page</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Training</li>
                        </ol>
                    </div>

                </div>
            </div>


<section id="portfolio" className="portfolio" data-aos="fade-up" style={{paddingTop:"40px"}}>

    

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">

        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

          <ul className="portfolio-flters">
            <li data-filter="*" className={`${active} line`} id='design' onClick={() => {
              setEvent("portfolio-click")
              
              setWebinar("portfolio-unclick")
              document.querySelector("#design").classList.add('active');
              document.querySelector("#design").classList.add('line');

              document.querySelector("#simulation").classList.remove('active');
              
              document.querySelector("#simulation").classList.remove('line');
             

            }}>Event</li>
            <li data-filter=".filter-app" id="simulation" onClick={() => {
              setWebinar("portfolio-click")
              
              setEvent("portfolio-unclick")
              document.querySelector("#simulation").classList.add('active');
              document.querySelector("#simulation").classList.add('line');

              
              document.querySelector("#design").classList.remove('active');
             
              document.querySelector("#design").classList.remove('line');


            }}>Webinar</li>
           

          </ul>

          <div className={event}>
          {viewevent&&viewevent.map((data,key)=>{
            return( <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product" key={data&&data.id} style={{paddingBottom:"25px"}}>
            <img src={`${url}/images/${data && data.image}`} className="img-fluid" alt=""  />
            <div className="portfolio-info">
              <h4>{data&&data.subject.substr(0,15)}...</h4>
              <a href={`${url}/images/${data && data.image}`}  target="_blank" title="App 1" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <Link to={`/training/event/${data&&data.eventno}`} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
            </div>
          </div>)
          })}
           


          </div>

          <div className={webinar}>

          {viewwebinar&&viewwebinar.map((data,key)=>{
            return( <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product" key={data&&data.id} style={{paddingBottom:"25px",boxShadow: "3px 1px 5px #888888",marginRight:"32px"}}>
            <img src={`${url}/images/${data && data.image}`} className="img-fluid" alt=""  />
            <div className="portfolio-info">
              <h4>{data&&data.title.substr(0,15)}...</h4>
              <a href={`${url}/images/${data && data.image}`}  target="_blank" title="App 1" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <Link to={`/training/webinar/${data&&data.webno}`} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
            </div>
          </div>)
          })}



          </div>

        </div>

      </div>



    </section>

        </main>
  )
}

export default Training