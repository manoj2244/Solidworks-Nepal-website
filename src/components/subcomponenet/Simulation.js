import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser';

import './design.css'

const Simulation = () => {


  const url = "https://knowuvraj.com/solid-admin";

 


  useEffect(() => {
    window.scrollTo(0, 0);
    Designs();

  
    

}, []);

const [viewdesign, setViewdesign] = useState();



const Designs = async () => {
  try {
    axios.get(`${url}/design_simula.php`)
      .then(res => {
        

        setViewdesign(res.data);


      })

  } catch (error) { throw error; }




}
  const [click, setClick] = useState(true);
  const [clickSymbol, setSymbol] = useState("");
  const [style, setStyle] = useState({});
  useEffect(()=>{
    if(click===true){
      setStyle({height:"0px", overflow:"hidden"})
      setSymbol("bi bi-plus-circle-fill plus")
    }
    else{
       setStyle({height:"100%", overflow:"hidden"})
       setSymbol("bi bi-dash-circle-fill plus")
      
    }

  },[click])
  

  function Click(){
    setClick(!click);
    
  }
  return (
    <>
      <section id="design3d" className='simulation'>
        <div className="hero-container-design" data-aos="fade-up" data-aos-delay="150">
          <h1>3DExperience - SIMULIA</h1>
          <h2>Advanced Simulation Analysis Tools</h2>
        </div>

      </section>

      <div className="container my-5">
        <h2 style={{textAlign:"center",marginBottom:"40px"}}>Simula Model</h2>

        <div className="main-card">
        {viewdesign&&viewdesign.map((data,key)=>{
            return(
              <div className="card" style={{ width: "18rem" }}>
              <img src={`${url}/images/${data && data.image}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <p>Access Type:</p>
                <h5>{data&&data.access}</h5>
                <hr />
                <p>Typically used by:</p>
                {data&& HTMLReactParser(data.used)}
                
                <div className="overview">
                  <h5 onClick={Click}><i className={clickSymbol}></i>Overview:</h5>
                  <ul className='overviews' style={style}>

                    {data&& HTMLReactParser(data.detail)}
  
                  </ul>
                </div>
                
                <div className="learn-more" style={{textAlign:"center"}}>
                  <button  className="btn btn-success">Learn More</button>
                </div>
              </div>
            </div>

            )
          })}
       

        </div>
       

      </div>
    </>

  )
}

export default Simulation;