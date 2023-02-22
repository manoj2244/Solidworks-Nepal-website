import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../sub-component/Card'
import Table1 from '../sub-component/Table1'
import Table2 from '../sub-component/Table2'
import Breadcum from './Breadcum'
import Rightside from './Rightside'


const Main = () => {
  const url = "https://knowuvraj.com/solid-admin";
  const [visit, setVisit] = useState();
  const [noti, setNoti] = useState();
  const [mess, setMess] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    Visitor();

}, []);



const Visitor = async () => {
    try {
        axios.get(`${url}/visitor.php`)
            .then(res => {
              
              setVisit(res.data[0].visitor_count);
               
            })
            axios.get(`${url}/notification.php`)
            .then(res => {
              
              setNoti(res.data.length);
               
            })
            axios.get(`${url}/contact_message.php`)
            .then(res => {
              
              setMess(res.data.length);
               
            })
    } catch (error) { throw error; }


}
   
    const card1={
        title:"Visitors",
        date:"Total",
        count:visit,
        icon:"bi bi-person-square",
        
        class:"col-md-6"
    }
    const card2={
        title:"Notification",
        date:"Today",
        count:noti,
        icon:"bi bi-bell-fill",
        increase:"12%",
        class:"col-md-6"
    }
    const card3={
        title:"Messages",
        date:"Today",
        count:mess,
        icon:"bi bi-envelope",
        increase:"12%",
        class:"col-md-12"
    }
  return (
    <main id="main" className="main">

         <Breadcum Breadcum="Dashboard"/>

          <section className="section dashboard">
            <div className="row">


              <div className="col-lg-8">
                <div className="row">


                  <Card card={card1}/>
                  <Card card={card2}/>
                  <Card card={card3}/>
                  <Table1/>
                  <Table2/>

                </div>
              </div>

              {/* <!-- Right side columns --> */}

              <Rightside/>
             

            </div>
          </section>

        </main>
  )
}

export default Main