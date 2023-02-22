import React, { useState, useEffect,useRef } from 'react'
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Footer from '../component/Footer'
import Breadcum from '../component/Breadcum';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ContactMessage = () => {
  
    const url = "https://knowuvraj.com/solid-admin";
    const navigate = useNavigate();
   
    const [contact_message, setContact_Message] = useState({

        name:'',
      email:'',
      subject:'',
      message:''
    });
    useEffect(() => {
        window.scrollTo(0, 0);
        Contact_message();

    }, []);

    const [viewHire, setViewHire] = useState();
    const [hireEdit, setHireEdit] = useState();

    const Contact_message = async () => {
        try {
            axios.get(`${url}/contact_message.php`)
                .then(res => {
                    console.log(res.data)
                    setViewHire(res.data);
                })
        } catch (error) { throw error; }


    }
 

  
    const onEdit = (ids) => {

        try {
          axios.post(`${url}/contact_message.php`, {
            userids: ids,
            
          })
            .then(res => {
              console.log(res.data[0])
    
              setHireEdit(res.data[0]);
    
    
            })
    
        } catch (error) { throw error; }
    
    
      }
    useEffect(() => {
        setContact_Message({

            name: hireEdit && hireEdit.name,
            email:hireEdit && hireEdit.email,
            subject: hireEdit && hireEdit.subject,
            message:hireEdit && hireEdit.message
        });
        

    }, [hireEdit])


    const onDelete = async (id) => {
        try {
            Swal.fire({
                question: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post(`${url}/contact_message.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate('/admin/contact')
                            Contact_message();
                            return;
                        })
                    toast.success('Sucessfully Deleted', {

                        theme: "colored",

                    });
                    Swal.fire(

                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
            navigate('/admin/contact')
            Contact_message();

        } catch (error) { throw error; }

    }
 
 

    return (
        <div className="admin-main">
            <div className="modal fade " id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-question text-danger" id="exampleModalLabel">View Who Send Message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <textarea type="text" className="form-control" id="" name="question" value={contact_message && contact_message.name} rows="1"></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <textarea type="text" className="form-control" id="" name="answer" value={contact_message && contact_message.email} rows="1" ></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Subject</label>
                                    <textarea type="text" className="form-control" id="" name="question" value={contact_message && contact_message.subject} rows="1"></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Message</label>
                                    <textarea type="text" className="form-control" id="" name="answer" value={contact_message && contact_message.message} rows="4" ></textarea>

                                </div>
                               
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />
            <Sidebar />
            <main id="main" className="main">
                <Breadcum Breadcum="Mainscreen" />
                
                <div className="container my-4">

                    <table className="table" id="myTable">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Message</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewHire !== undefined ? viewHire && viewHire.map((data, key) => {
                                return (<tr key={data && data.id}>
                                    <td>{key + 1} </td>

                                    <td>{data && data.name} </td>
                                    <td>{data && data.email}</td>
                                    <td>{data && data.subject} </td>
                                    <td>{data && data.message}</td>
                
                                    <td style={{ display: "flex" }}><button className='btn btn-warning' style={{ marginRight: '15px' }} data-bs-toggle="modal" data-bs-target="#exampleModaledit" onClick={() => {
                                        onEdit(data && data.id)
                                    }}>View</button><button className='btn btn-danger' onClick={() => {
                                        onDelete(data && data.id)
                                    }}>Delete</button></td>
                                </tr>

                                )



                            }) : <tr>
                                <td style={{ textAlign: "center" }} colSpan={9}>No Records Found</td>
                            </tr>

                        }
                        </tbody>
                    </table>

                </div>
            </main>
            <Footer />
            <ToastContainer>

            </ToastContainer>

        </div>
    )
}

export default ContactMessage ;