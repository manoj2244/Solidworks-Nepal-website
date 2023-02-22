import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Demo from './demo';

const Header = () => {
  window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle('stickys',window.scrollY >60);
  
  })

  const [click, setClick] = useState(true);
  const [clickSymbol, setSymbol] = useState("");
  const [style, setStyle] = useState('');
  useEffect(()=>{
    if(click===true){
      setStyle("navbar closee")
      setSymbol("bi bi-list mobile-nav-toggle")
    }
    else{
       setStyle('navbar openee')
       setSymbol("bi bi-x mobile-nav-toggle")
      
    }

  },[click])
  

  function Click(){
    setClick(!click);
    
  }
  return (
    <header id="header" className="header fixed-top" data-scrollto-offset="0">
    <div className="container-fluid d-flex align-items-center justify-content-evenly">

      <Link to="/" className="logo1 d-flex align-items-center scrollto me-auto me-lg-0">
        
         {/* <img src="assets/img/logo.png" alt=""/>  */}
        <h1>SWNP<span>.</span></h1>
      </Link>

      <nav id="navbar" className={style}>
        <ul>

          <li className=""><NavLink to="/"><span>Home</span></NavLink>
          
          </li>

          <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
          
          <li className="dropdown"><NavLink to="/services"><span>Services</span> <i className="bi bi-chevron-down dropdown-indicator"></i></NavLink>
            <ul>
              <li><Link to="/services">3D Design</Link></li>
              <li><Link to="/services">Simulation/optimization</Link></li>
              <li><Link to="/services">Fabrication</Link></li>
              <li><Link to="/services">Training</Link></li>
              
            </ul>
          </li>
          <li><NavLink className="nav-link scrollto" to="/work">Work</NavLink></li>
          <li><NavLink className="nav-link scrollto" to="/team">Team</NavLink></li>
          <li><NavLink to="/training">Training</NavLink></li>
         
          <li className="dropdown"><NavLink to="/design"><span>Designs</span> <i className="bi bi-chevron-down dropdown-indicator"></i></NavLink>
            <ul>
              <li><NavLink to="/design/3ddesign">3D Design</NavLink></li>
              <li><NavLink to="/design/simulation">Simulation</NavLink></li>
              
            </ul>
          </li>
          <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
        </ul>
        
      </nav>

      {/* <Link className="btn-getstarted scrollto" to="/"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{ */}
      <i onClick={Click} className={clickSymbol}></i>
        
         
      
      
        
      <button type="button" className="button-getstarted btnmedia" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Get Started
         </button>


         
        
       
        
       


        
        {/* }}>Get Started</Link> */}
        

    </div>
  </header>
  )
}

export default Header;