import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Footer from './components/Footer';
import Header from './components/Header';
import TeamDetails from './components/subcomponenet/TeamDetails';
import WorkDetails from './components/subcomponenet/WorkDetails';
import IndividualWorkDetails from './components/subcomponenet/IndividualWorkDetails';
import Contactpage from './components/subcomponenet/Contactpage';
import Aboutpage from './components/subcomponenet/Aboutpage';

import Training from './components/subcomponenet/Training';
import Servicepage from './components/subcomponenet/Servicepage';
import Design3D from './components/subcomponenet/design-3d';
import Simulation from './components/subcomponenet/Simulation';
import Event from './components/subcomponenet/Event'
import Webinar from './components/subcomponenet/Webinar'
import './main.css'
import ProfileDetails from './admin/profile-component/ProfileDetails';
import { useState,useEffect } from 'react';
import Logins from './components/Login'

import axios from 'axios';
import Swal from 'sweetalert2'
import Error from './Error';









function App() {
   const navigate = useNavigate();

   const url = "https://knowuvraj.com/solid-admin";


   // for website visitor

   useEffect(() => {
      window.scrollTo(0, 0);
      Visitor();

  }, []);

  

  const Visitor = async () => {
      try {
          axios.post(`${url}/visitor.php`)
              .then(res => {
                 
              })
      } catch (error) { throw error; }


  }


  

   const [hire, setHire] = useState({

      company:'',
      email:'',
      phone:'',
      category:''
  
      
      


  });
  const onChangeValue = (e) => {
        
   setHire({
       ...hire,
       [e.target.name]: e.target.value
   });
   
}

   const HireForm = async (e) => {

      try {
          e.preventDefault();
          e.persist();
          
          const formData = new FormData();
          formData.append("company", hire.company);
          formData.append("email", hire.email);
          formData.append("phone", hire.phone);
          formData.append("category", hire.category);
          


          axios.post(`${url}/hire.php`, formData)
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
   
const Login = () => {

   navigate('/admin');
}
  return (
   
    <div className="App">
      
      {/* modal for Getstarded section */}

         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
               <h5 className="modal-title text-danger" id="exampleModalLabel">GetStarted Form</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <form method='POST' onSubmit={Login}>
                <div className="mb-3">
                     <label for="" className="form-label">Full Name</label>
                     <input type="text" className="form-control" id=""   placeholder='Enter your fullname name'/>
                     
                  </div>
                  <div className="mb-3">
                     <label for="exampleInputEmail1" className="form-label">Email address</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email' />
                     
                  </div>
                  <div className="mb-3">
                  <select className="form-select" aria-label="Default select example">
                      <option selected>Please Select your Interest</option>
                      <option value="1">3D design</option>
                      <option value="2">Fabrication</option>
                      <option value="3">Simulation</option>
                    </select>

                    </div>
               <button type="submit" className="btn btn-primary">Submit</button>
               </form>
               </div>
               <div className="modal-footer">
               <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
               </div>
            </div>
         </div>
         </div>
         {/* Modal for HireUs Section */}
         <div className="modal fade" id="exampleModals" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
               <h5 className="modal-title text-danger" id="exampleModalLabel">Hire Form</h5>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
               <form  method="POST" encType="multipart/form-data"  onSubmit={HireForm}>
                <div className="mb-3">
                     <label for="" className="form-label">Company name</label>
                     <input type="text" className="form-control" id="" onChange={onChangeValue} name="company" />
                     
                  </div>
                  <div className="mb-3">
                     <label for="exampleInputEmail1" className="form-label">Email address</label>
                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={onChangeValue} />
                     
                  </div>
                  <div className="mb-3">
                     <label for="phone" className="form-label">Phone Number</label>
                     <input type="number" className="form-control" id=""  name="phone" onChange={onChangeValue}/>
                     
                  </div>
                  <div className="mb-3">
                  <select className="form-select" aria-label="Default select example" name="category" onChange={onChangeValue}>
                      <option selected>Please Select For Your Requirements</option>
                      <option value="3D design">3D design</option>
                      <option value="Fabrication">Fabrication</option>
                      <option value="Simulation">Simulation</option>
                    </select>

                    </div>
               <button type="submit" className="btn btn-primary">Submit</button>
               </form>
               </div>
               <div className="modal-footer">
               <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
               </div>
            </div>
         </div>
         </div>
      <Header />

      
      

      <Routes>
      {/* <Url.Provider value={{url:"https://knowuvraj.com/solid-admin"}}> */}
      
      <Route path='/' element={<Home/>} />
      <Route path="/*" element={<Error/>} />
      
      <Route path='/team' element={<TeamDetails/>} />
      <Route path='/login' element={<Logins/>} />
      
      <Route path='/work' element={<WorkDetails/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/training' element={<Training/>}/>
      <Route path='/training/event/:id' element={<Event/>}/>
      <Route path='/training/webinar/:id' element={<Webinar/>}/>
         
      <Route path='/services' element={<Servicepage/>}/>
      <Route path='/design/3ddesign' element={<Design3D/>}/>
      <Route path='/design/simulation' element={<Simulation/>}/>
      <Route path='/work/:work/:id' element={<IndividualWorkDetails/>} />
      

      
{/* </Url.Provider> */}
      
        {/* <About />
        <Mission />
        <HireUS />
        <Message />
        <Services />
        <Work />
        <Team />
        <Blog />
        <Faq />
        <Contact /> */}
    
      </Routes>

      <Footer />
      

      

    </div>
  );
}

export default App;