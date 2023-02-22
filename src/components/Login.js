import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const url = "https://knowuvraj.com/solid-admin";
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
        Log();

    }, []);

    const [viewlogin, setViewlogin] = useState([]);

    const Log = async () => {
        try {
            axios.get(`${url}/login.php`)
                .then(res => {
                    console.log(res.data[0])
                    setViewlogin(res.data[0]);
                })
        } catch (error) { throw error; }

      
    }

    const LOGIN = async (e)=>{
        e.preventDefault();
        e.persist();
        if(email===viewlogin.email&&pass===viewlogin.pass){
            navigate('/admin')
            toast.success('login sucessfully', {

                theme: "colored",

            });
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Credentials',
                footer: '<a href="">please try again</a>'
              })
            navigate('/login')
        }
    
    }
  return (
    <div className="mainss">
        <div className="main-login">
            <div className="login">
                <div className="login-heading">
                    <p>LOGIN - only admin</p>
                </div>
                <div className="login-content">
                    <form action="" method="post" onSubmit={LOGIN}>
                    <div className="email">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Enter your email" name="email" onChange={((e)=>{setEmail(e.target.value)})}/>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your password" name="password" onChange={((e)=>{setPass(e.target.value)})}/>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox"/>
                        <label htmlFor="">Remember me</label>
                     
                    </div>
                    <div className="login-button">
                        <button>LOGIN</button>
                    </div>
                    </form>

                    <div className="forget">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="or">
                        <span>OR</span>
                    </div>
                    <div className="social-media">
                        <a href="#" className="fab fa-google"></a>
                        <a href="#" className="fab fa-facebook-f"></a>
                        
                        <a href="#" className="fab fa-linkedin-in"></a>
                       
                    </div>
                    <div className="create">
                        <p>Need an account?<a href="#">SIGN UP</a></p>

                    </div>
                </div>
            </div>
        </div>
        <ToastContainer>

</ToastContainer>

    </div>
    
  )
}

export default Login