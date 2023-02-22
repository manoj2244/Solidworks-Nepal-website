import React, {useEffect,useState} from 'react'
import Typewriter from 'typewriter-effect';
import axios from 'axios';


const MainScreen = () => {

   useEffect( () => {
    window.scrollTo(0, 0);
    Intro();
   
  }, []); 

  const [intro, setIntro] = useState([]);
  
  const Intro = async () => {
    try {
      axios.get(`https://knowuvraj.com/solid-admin/view.php`)
      .then(res => {
        console.log(res.data[0]);
        setIntro(res.data[0]);
      })
    } catch (error) { throw error;}    
  }
  const imageurl= `url(https://knowuvraj.com/solid-admin/images/${intro.image})`;
  return (
    
    <section id="hero" style={{background: `${imageurl} top center`}}>
      
    <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
      <h1>{intro.title}</h1>
  
      {/* <h2>You can't do better design with a computer but you can speed up your work enormously.</h2> */}
      <h2>
      <Typewriter
  options={{
    strings: intro.slogan,
    autoStart: true,
    loop: true,
    typeSpeed:70,
    delay:200,
    deleteSpeed:10,
    pauseFor:1000
  }}
/>
</h2>
      <div className="d-flex">
         <button type="button" className="button-getstarted" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Get Started
         </button>
        <a href={intro.youtubeurl} className="glightbox btn-watch-video" target="_blank"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section>
  )
}

export default MainScreen;