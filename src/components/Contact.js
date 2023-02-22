import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2'


const Contact = () => {
  const url = "https://knowuvraj.com/solid-admin";
  useEffect(() => {
    window.scrollTo(0, 0);
    Profile();

  }, []);

  const [profile, setProfile] = useState([]);

  const Profile = async () => {
    try {
      axios.get(`${url}/profile.php`)
        .then(res => {
          console.log(res.data[0])
          setProfile(res.data[0]);


        })
    } catch (error) { throw error; }
  }


  
   
   const [contact_message, setContact_Message] = useState({

      name:'',
      email:'',
      subject:'',
      message:''
  
      
      


  });
  const onChangeValue = (e) => {
        
   setContact_Message({
       ...contact_message,
       [e.target.name]: e.target.value
   });
   
}

   const ContactMessage = async (e) => {

      try {
          e.preventDefault();
          e.persist();
          
          const formData = new FormData();
          formData.append("name", contact_message.name);
          formData.append("email", contact_message.email);
          formData.append("subject", contact_message.subject);
          formData.append("message", contact_message.message);
          


          axios.post(`${url}/contact_message.php`, formData)
                .then(res => {
                    console.log(res.data.msg);
                    if (res.data.success === true) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Sucessfully Submitted!! Our team will respond to your application soon',
                            showConfirmButton: false,
                            timer: 5000
                        })
                    }
                    else {
                        Swal.fire(
                            'Carefull?',
                            res.data.msg,
                            'question'
                        )
                    }

                    
                })
          

         
         
      } catch (error) { throw error; }

  }
   

  return (
        <section id="contact" className="contact">
      <div className="container">

        <div className="section-header">
          <h2>Contact Us</h2>

        </div>

      </div>



      <div className="container">

        <div className="row gy-5 gx-lg-5">

          <div className="col-lg-4">

            <div className="info">
              <h3>Get in touch</h3>
              <p>Whether you have a question, suggestion, use the form below to send us a message. Our team will get back to you as soon as possible.</p>

              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>{profile&&profile.address}</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p> {profile&&profile.email}</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-subject flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>{profile&&profile.subject}</p>
                </div>
              </div>

            </div>

          </div>

          <div className="col-lg-8">
            <form method="POST" encType="multipart/form-data"  onSubmit={ContactMessage} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required onChange={onChangeValue}/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required onChange={onChangeValue}/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required onChange={onChangeValue}/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" placeholder="Message" required onChange={onChangeValue}></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact