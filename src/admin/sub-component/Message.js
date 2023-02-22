import axios from 'axios';
import React, {useState} from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Message = () => {

  const url = "https://knowuvraj.com/solid-admin";



  useEffect(() => {
    window.scrollTo(0, 0);
    Messages();

}, []);

const [viewmessage, setViewmessage] = useState();


const Messages = async () => {
    try {
        axios.get(`${url}/contact_message.php`)
            .then(res => {
                
                setViewmessage(res.data);
            })
    } catch (error) { throw error; }


}
      const [not ,setNot] = useState("")
    const [check,setCheck] = useState(false);
    const Mess = () =>{
        if(check===true){
            setNot("")
            setCheck(false)

        }
        else{
            setNot("message-show");
            setCheck(true);

        }
        
        
    }
  return (
    <li className="nav-item dropdown">

                <div className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-chat-left-text" onClick={Mess}></i>
                  <span className="badge bg-success badge-number">{viewmessage !== undefined ? viewmessage && viewmessage.length:0}</span>
                </div>

                <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow messages ${not}`}>
                  <li className="dropdown-header">
                    You have {viewmessage&&viewmessage.length} new messages 
                    <Link to="/admin/contact"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
              {viewmessage !== undefined ? viewmessage && viewmessage.map((data,key)=>{

                  return(
                        <>
                    <li key={data && data.id} className="message-item" >
                    <a href="#">
                      <img src="assets/img/user.jpg" alt="" className="rounded-circle" />
                      <div>
                        
                        <p style={{fontSize:"16px",color:"chocolate",fontWeight:"600"}}>{data && data.name}</p>
                        <p style={{color:"forestgreen"}}>{data && data.message.substr(0,50)} . . .</p>
                        <p style={{fontStyle:"italic",fontWeight:"600"}}>few minutes ago..</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  </>
                  )

              }):<p style={{textAlign:"center"}}>No Messages !!</p>
            
            }
                  

                 

               

                  <li className="dropdown-footer">
                    <Link to="/admin/contact" >Show all messages</Link>
                  </li>

                </ul>
              </li>
  )
}

export default Message