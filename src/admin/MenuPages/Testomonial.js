import React, { useState, useEffect } from 'react'
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Footer from '../component/Footer'
import Breadcum from '../component/Breadcum';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Testomonial = () => {
    const url = "https://knowuvraj.com/solid-admin";
    const [image, setImage] = useState('');
    const [imageshow, setImageshow] = useState('');
    
    const [show, setShow] = useState(false);
    
    const navigate = useNavigate();
    const [testo, setTesto] = useState({
        name: '',
        designation: '',
        message: '',
        

    });
    useEffect(() => {
        window.scrollTo(0, 0);
        Testo();

    }, []);

    const [viewtesto, setViewtesto] = useState([]);

    const Testo = async () => {
        try {
            axios.get(`${url}/testomonial.php`)
                .then(res => {
                    console.log(res.data[0])
                    setViewtesto(res.data[0]);
                })
        } catch (error) { throw error; }

      
    }
    //   const imageurl = `${url}/images/${viewtesto.image}`;

    const onChangeValue = (e) => {
        setTesto({
            ...testo,
            [e.target.name]: e.target.value
        });
    }

    const submittesto = async (event) => {
        try {
            event.preventDefault();
            event.persist();
            const formData = new FormData();
            formData.append("name", testo.name);
            formData.append("designation", testo.designation);
            formData.append("message", testo.message);
            

            formData.append("picture", image);

            axios.post(`${url}/testomonial.php`, formData)
                .then(res => {
                    console.log(res.data);
                    // navigate(`/admin/`);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Sucessfully Added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    return;
                })
        } catch (error) { throw error; }
        navigate('/admin/testomonial')
        Testo();
    };
   
    useEffect(() => {
        setTesto({
            name:viewtesto&&viewtesto.name,
            designation:viewtesto&&viewtesto.designation,
            message:viewtesto&&viewtesto.message,

    
          
        });
    
      }, [viewtesto])
    const onDelete = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post(`${url}/testomonial.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate('/admin/testomonial')
            Testo();
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
            navigate('/admin/testomonial')
            Testo();

        } catch (error) { throw error; }

    }
    const onChangeValueedit = (e) => {
        setTesto({
          ...testo,
          [e.target.name]: e.target.value
        });
    
      }
    const submitEdit = async (event) => {
        
    try {
        event.preventDefault();
        event.persist();
        const formData = new FormData();
        formData.append("name", testo.name);
        formData.append("designation", testo.designation);
        formData.append("message", testo.message);
        

        formData.append("picture", image);
        formData.append("id", viewtesto.id);
       
        
  
  
        axios.post(`${url}/testomonial.php`, formData)
          .then(res => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: res.data,
              showConfirmButton: false,
              timer: 1500
            })
            
  
          })
          navigate('/admin/testomonial')
            Testo();
      } catch (error) { throw error; }

    }
    return (
        <div className="admin-main">
                  <div className="modal fade" id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger" id="exampleModalLabel">Testomonial Pages Edit</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="" method="POST" encType="multipart/form-data" onSubmit={submitEdit}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Name</label>
                    <textarea type="text" className="form-control" id="" name="name" value={testo&&testo.name} row="1" onChange={onChangeValueedit} ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Designation</label>
                    <textarea type="text" className="form-control" id="" name="designation" value={testo&&testo.designation} row="1" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Message</label>
                    <textarea type="text" className="form-control" id="" name="message" value={testo&&testo.message} rows="2" onChange={onChangeValueedit}></textarea>

                  </div>
                
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Images</label>
                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                      setImage(e.target.files[0])
                      
                      setImageshow(URL.createObjectURL(e.target.files[0]));

                      setShow(true)

                    }} />
                    {show? <img src={imageshow} alt="" style={{ width: "300px", height: "200px" }} />:<img src={`${url}/images/${viewtesto&&viewtesto.image}`} alt="" style={{ width: "300px", height: "200px" }} />

                  }

                  </div>

                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
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
                    <h2>Testomonial Pages</h2>
                    <form action="" method="POST" enctype="multipart/form-data" onSubmit={submittesto}>
                        <div className="form-group">
                            <label for="desc">Name</label>
                            <textarea className="form-control" id="title" name="name" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Desigantion</label>
                            <textarea className="form-control" name="designation" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Message</label>
                            <textarea className="form-control" name="message" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                      
                        <div className="form-group">
                            <label for="desc">Images</label>
                            <input type="file" className="form-control" id="file" name="file" rows="2" onChange={(e) => {

                                setImage(e.target.files[0])

                            }}></input>
                        </div>


                        <button type="submit" className="btn btn-primary my-2">Add</button>
                    </form>
                </div>
                <div className="container my-4">

                    <table className="table" id="myTable">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Designation</th>

                                <th scope="col">Message</th>
                                <th scope="col">Image</th>
                              




                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewtesto !== undefined ? <tr>

                                <td>{viewtesto&&viewtesto.name}</td>
                                <td>{viewtesto&&viewtesto.designation} </td>
                                <td>{viewtesto&&viewtesto.message} </td>
                              

                                <td><img src={`${url}/images/${viewtesto&&viewtesto.image}`} alt="" style={{ height: "120px", width: "200px" }} /> </td>


                                <td style={{ display: "flex" }}><button className='btn btn-warning' style={{ marginRight: '15px' }} data-bs-toggle="modal" data-bs-target="#exampleModaledit">Edit</button><button className='btn btn-danger' onClick={() => {
                                    onDelete(viewtesto&&viewtesto.id)
                                }}>Delete</button></td>
                            </tr> : <tr>
                                <td style={{textAlign:"center"}} colSpan={9}>No Records Found</td>
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

export default Testomonial;