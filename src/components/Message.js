import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';



const Message = () => {
  const url = "https://knowuvraj.com/solid-admin";


  useEffect(() => {
      window.scrollTo(0, 0);
      Testo();

  }, []);

  const [viewtesto, setViewtesto] = useState([]);

  const Testo = async () => {
      try {
          axios.get(`${url}/testomonial.php`)
              .then(res => {
                  console.log(res.data[0])
                  setViewtesto(res.data[0]);
              })
      } catch (error) { throw error; }

    
  }

  return (
    <section id="testimonials" className="testimonials">
    <div className="container" data-aos="fade-up">

      <div className="testimonials-slider swiper">
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <div className="testimonial-item">
              <img src={`${url}/images/${viewtesto&&viewtesto.image}`} className="testimonial-img" alt=""/>
              <h3>{viewtesto&&viewtesto.name}</h3>
              <h4>{viewtesto&&viewtesto.designation}</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                {viewtesto?viewtesto.message:<p>No Data Found!!</p>}
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>



        </div>
  
      </div>

    </div>
  </section>
  )
}

export default Message