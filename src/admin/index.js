import React from 'react'
import Footer from './component/Footer'
import Main from './component/Main'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import './style.css'


const Index = () => {



  return (

    <>
      <div className="admin-main">
        
        <Navbar/>
        <Sidebar/>
        <Main/>
        
       
    

       

        {/* <!-- ======= Footer ======= --> */}

        <Footer/>
      

      </div>
    </>
  )
}

export default Index