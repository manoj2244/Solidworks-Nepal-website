import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Notification.css'

const Notification = () => {
  const [not, setNot] = useState("")
  const [check, setCheck] = useState(false);
  const Notfi = () => {
    if (check === true) {
      setNot("")
      setCheck(false)

    }
    else {
      setNot("notification");
      setCheck(true);

    }


  }

  const url = "https://knowuvraj.com/solid-admin";



  useEffect(() => {
    window.scrollTo(0, 0);
    Notifications();

  }, []);

  const [viewnotification, setViewnotification] = useState();


  const Notifications = async () => {
    try {
      axios.get(`${url}/notification.php`)
        .then(res => {

          setViewnotification(res.data);
        })
    } catch (error) { throw error; }


  }
  return (

    <li className="nav-item dropdown">

      <div className="nav-link nav-icon show" href="#">
        <i className="bi bi-bell" onClick={Notfi}></i>
        <span className="badge bg-primary badge-number">{viewnotification !== undefined ? viewnotification && viewnotification.length:0}</span>
      </div>

      <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications ${not}`}>
        <li className="dropdown-header">
          You have {viewnotification && viewnotification.length} new notifications
          <Link ><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        {viewnotification !== undefined ? viewnotification && viewnotification.map((data, key) => {

          return (
            <>
              <li key={data && data.id} className="notification-item" >
              <i className="bi bi-exclamation-circle text-warning"></i>

                
                 
                  <div>

                    <p style={{fontSize:"14px",color:"forestgreen"}}>{data && data.notification}</p>
                    <p style={{fontStyle:"italic",fontWeight:"600"}}>few minutes ago..</p>
                  </div>
                
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </>
          )

        }) : <p>No New Notification !!</p>

        }

        <li className="dropdown-footer">
          <Link to="">Show all notifications</Link>
        </li>

      </ul>

    </li>
  )
}

export default Notification