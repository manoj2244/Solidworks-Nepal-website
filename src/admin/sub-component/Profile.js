import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const url = "https://knowuvraj.com/solid-admin";
    const [not ,setNot] = useState("")
    const [check,setCheck] = useState(false);
    const Profile = () =>{
        if(check===true){
            setNot("")
            setCheck(false)

        }
        else{
            setNot("profile");
            setCheck(true);

        }
        
        
    }
    useEffect(() => {
      window.scrollTo(0, 0);
      Profiles();
  
    }, []);
  
    const [profile, setProfile] = useState([]);
  
    const Profiles = async () => {
      try {
        axios.get(`${url}/profile.php`)
          .then(res => {
            console.log(res.data[0])
            setProfile(res.data[0]);
  
  
          })
      } catch (error) { throw error; }
    }
  return (
    <li className="nav-item dropdown pe-3">

                <div className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown" onClick={Profile}>
                  <img src={`${url}/images/${profile.image}`} alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block dropdown-toggle ps-2">SolidWorks</span>
                </div>

                <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow ${not}`}>
                  <li className="dropdown-header">
                    <h6>SolidWorks</h6>
                    <span>3D Modelling</span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/admin/profile">
                      <i className="bi bi-person"></i>
                      <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/admin/profile">
                      <i className="bi bi-gear"></i>
                      <span>Account Settings</span>
                    </Link>
                  </li>
                  

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/" >
                      <i className="bi bi-box-arrow-right"></i>
                      <span>Sign Out</span>
                    </Link>
                  </li>

                </ul>
              </li>
  )
}

export default Profile