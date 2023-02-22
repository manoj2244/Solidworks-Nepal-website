import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Work = () => {

  const url = "https://knowuvraj.com/solid-admin";

  const [designTab, setDesign] = useState("portfolio-click");
  const [simulationTab, setSimulation] = useState("portfolio-unclick");
  const [fabricationTab, setFabrication] = useState("portfolio-unclick");
  const [cond, setCond] = useState(true);
  const [active, setActive] = useState("");



  useEffect(() => {
    if (cond == true) {
      setActive("active")

    }
    else {
      setActive("")

    }

  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    Work3d();

}, []);

const [viewwork3d, setViewwork3d] = useState();
const [viewsimu, setViewsimu] = useState();
const [viewfab, setViewfab] = useState();


const Work3d = async () => {
    try {
        axios.get(`${url}/work3d.php`)
            .then(res => {
                console.log(res.data)
                setViewwork3d(res.data);
            })
    } catch (error) { throw error; }
    try {
      axios.get(`${url}/worksimu.php`)
          .then(res => {
              console.log(res.data)
              setViewsimu(res.data);
          })
  } catch (error) { throw error; }
  try {
    axios.get(`${url}/fabrication.php`)
        .then(res => {
            console.log(res.data)
            setViewfab(res.data);
        })
} catch (error) { throw error; }


}


  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">

      <div className="container">

        <div className="section-header">
          <h2>Works</h2>
          <p>At SolidWorks Nepal, we are dedicated to revolutionizing the field of designing with our innovative approach and cutting-edge technology. Our team's expertise and use of SolidWorks software sets us apart as leaders in the industry, delivering unparalleled results and bringing ideas to life..</p>
        </div>

      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">

        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

          <ul className="portfolio-flters">
            <li data-filter="*" className={`${active} line`} id='design' onClick={() => {
              setDesign("portfolio-click")
              setFabrication("portfolio-unclick")
              setSimulation("portfolio-unclick")
              document.querySelector("#design").classList.add('active');
              document.querySelector("#design").classList.add('line');

              document.querySelector("#simulation").classList.remove('active');
              document.querySelector("#fabrication").classList.remove('active');
              document.querySelector("#simulation").classList.remove('line');
              document.querySelector("#fabrication").classList.remove('line');

            }}>3D Design</li>
            <li data-filter=".filter-app" id="simulation" onClick={() => {
              setSimulation("portfolio-click")
              setFabrication("portfolio-unclick")
              setDesign("portfolio-unclick")
              document.querySelector("#simulation").classList.add('active');
              document.querySelector("#simulation").classList.add('line');

              document.querySelector("#fabrication").classList.remove('active');
              document.querySelector("#design").classList.remove('active');
              document.querySelector("#fabrication").classList.remove('line');
              document.querySelector("#design").classList.remove('line');


            }}>Simulation/Optimization</li>
            <li data-filter=".filter-product" id='fabrication' onClick={() => {
              setFabrication("portfolio-click")
              setSimulation("portfolio-unclick")
              setDesign("portfolio-unclick")
              document.querySelector("#fabrication").classList.add('active');
              document.querySelector("#fabrication").classList.add('line');
              document.querySelector("#simulation").classList.remove('active');
              document.querySelector("#simulation").classList.remove('line');
              document.querySelector("#design").classList.remove('line');
              document.querySelector("#design").classList.remove('active');


            }}>Fabrication</li>

          </ul>

          <div className={designTab}>

            {viewwork3d&&viewwork3d.map((data,key)=>{
              return(

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product" key={data&&data.id} style={{paddingBottom:"20px"}}>
                <img src={`${url}/images/${data && data.image}`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>{data&&data.title}</h4>
                  <a href={`${url}/images/${data && data.image}`} title="App 1" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to={`/work/3ddesign/${data&&data.work3d_id}`} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
              )
            })}



          </div>

          <div className={simulationTab}>

          {viewsimu&&viewsimu.map((data,key)=>{
              return(

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product" key={data&&data.id} style={{paddingBottom:"20px"}}>
                <img src={`${url}/images/${data && data.image}`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>{data&&data.title}</h4>
                  <a href={`${url}/images/${data && data.image}`} title="App 1" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to={`/work/simulation/${data&&data.simu_id}`} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
              )
            })}



          </div>
          <div className={fabricationTab}>

          {viewfab&&viewfab.map((data,key)=>{
              return(

                <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-product" key={data&&data.id} style={{paddingBottom:"20px"}}>
                <img src={`${url}/images/${data && data.image}`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>{data&&data.title}</h4>
                  <a href={`${url}/images/${data && data.image}`} title="App 1" data-gallery="portfolio-gallery" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                  <Link to={`/work/fabrication/${data&&data.fab_id}`} title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                </div>
              </div>
              )
            })}


          </div>

        </div>

      </div>



    </section>
  )
}

export default Work