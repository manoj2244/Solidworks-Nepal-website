import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Footer = () => {
  const url = "https://knowuvraj.com/solid-admin";
  useEffect(() => {
    window.scrollTo(0, 0);
    Profile();

  }, []);
 
  const [profile, setProfile] = useState([]);
  const [subscribe, setSubscribe] = useState("");


  const Profile = async () => {
    try {
      axios.get(`${url}/profile.php`)
        .then(res => {
          console.log(res.data[0])
          setProfile(res.data[0]);
          


        })
    } catch (error) { throw error; }
  }

  const onChangeValue = (e) => {
        
    setSubscribe(e.target.value);
    
 }
 
    const Subscribe = async (e) => {
 
       try {
           e.preventDefault();
           e.persist();
           
           const formData = new FormData();
           formData.append("subscribe", subscribe);
          
           
 
 
           axios.post(`${url}/subscribe.php`, formData)
                 .then(res => {
                     console.log(res.data.msg);
                     if (res.data.success === true) {
                         Swal.fire({
                             position: 'top-end',
                             icon: 'success',
                             title: 'Thank You for keep updating with us !! Our team will send update through Email',
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
//    { useEffect(()=>{
    
//      setWords(profile&&profile.facebook)
   
    
//   },[])}

//   { useEffect(()=>{
    
//     setWordss(words.split())
  
   
//  },[])}
   
 
  //  const URL_REGEX =
	// /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
  
  return (
      <footer id="footer" className="footer" style={{paddingTop:"40px"}}>
      

    <div className="footer-content">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="footer-info">
              <h3>DoEngineer</h3>
              <p>
              {profile&&profile.address}<br/><br/>
                <strong>Phone: </strong>{profile&&profile.phone}<br/>
                <strong>Email: </strong>{profile&&profile.email}<br/>
              </p>
        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>

          
	
		
			{/* {words&&words.map((word) => {
				return word.match(URL_REGEX) ? (
					<>
						<a href={word}>{word}</a>{' '}
					</>
				) : (
					word + ' '
				);
			})} */}
		
	
          <a href={profile&&profile.facebook} className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram" target="_blank"></i></a>
          <a href={profile&&profile.youtube} className="google-plus" target="_blank"><i className="bi bi-youtube"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin" target="_blank"></i></a>
        </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/about">About us</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/contact">Contact</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/training">Training</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/team">Team Member</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> 3D Design</li>
              <li><i className="bi bi-chevron-right"></i> Simulation and Optimization</li>
              <li><i className="bi bi-chevron-right"></i> Fabrication</li>
     
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Plesase Subscribe Our Newsletter for Updates</p>
            <form action="" method="post" onSubmit={Subscribe}>
              <input type="email" name="email" onChange={onChangeValue}/><input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div className="footer-legal text-center">
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div className="copyright"><Link to="/login" style={{color:"#fff"}}>
         
         
            &copy;</Link> Copyright <strong><span>DoEngineer</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
         
            Designed by <a href="https://www.facebook.com/manoj.nepali.5891" target="_blank">Manoj Nepali</a>
          </div>
        </div>

        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
          
          <a href="https://www.facebook.com/manoj.nepali.5891" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
          <a href="https://www.youtube.com/@codingwithmanoj3615" target="_blank" className="google-plus"><i className="bi bi-youtube"></i></a>
          <a href="https://www.linkedin.com/in/manoj-nepali-50b91a228/" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

      </div>
    </div>

  </footer>
  )
}

export default Footer