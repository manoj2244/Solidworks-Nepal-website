
import './TeamDetails.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
const TeamDetails = () => {
    const url = "https://knowuvraj.com/solid-admin";
  
 

    useEffect(() => {
        window.scrollTo(0, 0);
        Team();
  
    }, []);
  
    const [viewteam, setViewteam] = useState();
    const [viewdesigner, setViewdesigner] = useState();
    
  
    const Team = async () => {
        try {
            axios.get(`${url}/team.php`)
                .then(res => {
                    console.log(res.data)
                    setViewteam(res.data);
                })
        } catch (error) { throw error; }

         try {
            axios.get(`${url}/designer.php`)
                .then(res => {
                    console.log(res.data)
                    setViewdesigner(res.data);
                })
        } catch (error) { throw error; }
  
  
    }
    return (
        <main id="main1">


            <div className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Team Member</h2>
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Team</li>
                        </ol>
                    </div>

                </div>
            </div>


            <section id="team" className="team">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Founders</h2>
                        
                    </div>

                    <div className="row gy-5">

                    {viewteam && viewteam.map((data,key)=>{
          return(<div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay={(key+1)*200} key={data&&data.id}>
          <div className="team-member">
            <div className="member-img">
              <img src={`${url}/images/${data && data.image}`} className="img-fluid" alt="" style={{height:"350px"}}/>
            </div>
            <div className="member-info">
              <div className="social">
                <a href={data && data.twitter}><i className="bi bi-twitter"></i></a>
                <a href={data && data.facebook}><i className="bi bi-facebook"></i></a>
                <a href={data && data.insta}><i className="bi bi-instagram"></i></a>
                <a href={data && data.linkdin}><i className="bi bi-linkedin"></i></a>
              </div>
              <h4>{data && data.name}</h4>
              <span>{data && data.designation}</span>
             
            </div>
          </div>
        </div>)
        })}

                      

                    </div>

                </div>
                <div className="container" data-aos="fade-up" style={{paddingBottom:"55px"}}>

                    <div className="section-header">
                        <h2>Our Designers</h2>
                        
                    </div>

                    <div className="row gy-5">

                    {viewdesigner && viewdesigner.map((data,key)=>{
          return(<div className="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay={(key+1)*200} key={data&&data.id}>
          <div className="team-member">
            <div className="member-img">
              <img src={`${url}/images/${data && data.image}`} className="img-fluid" alt="" style={{height:"350px"}}/>
            </div>
            <div className="member-info">
              <div className="social">
                <a href={data && data.twitter}><i className="bi bi-twitter"></i></a>
                <a href={data && data.facebook}><i className="bi bi-facebook"></i></a>
                <a href={data && data.insta}><i className="bi bi-instagram"></i></a>
                <a href={data && data.linkdin}><i className="bi bi-linkedin"></i></a>
              </div>
              <h4>{data && data.name}</h4>
              <span>{data && data.designation}</span>
             
            </div>
          </div>
        </div>)
        })}

                      

                    </div>

                </div>
            </section>

        </main>

    )
}

export default TeamDetails