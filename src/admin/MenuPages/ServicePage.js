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


const ServicePage = () => {
    const url = "https://knowuvraj.com/solid-admin";
    const [image, setImage] = useState('');
    const [imageshow, setImageshow] = useState('');

    const [show, setShow] = useState(false);


    const navigate = useNavigate();
    const [services, setServices] = useState({

        description: '',
        title: '',


    });
    useEffect(() => {
        window.scrollTo(0, 0);
        Services();

    }, []);

    const [viewservices, setViewservices] = useState();
    const [serviceEdit, setServiceEdit] = useState();

    const Services = async () => {
        try {
            axios.get(`${url}/services.php`)
                .then(res => {
                    console.log(res.data)
                    setViewservices(res.data);
                })
        } catch (error) { throw error; }


    }
    //   const imageurl = `${url}/images/${viewservices.image}`;

    const onChangeValue = (e) => {
        setServices({
            ...services,
            [e.target.name]: e.target.value
        });
    }

    const submitservices = async (event) => {
        try {
            event.preventDefault();
            event.persist();
            const formData = new FormData();

            formData.append("description", services.description);
            formData.append("title", services.title);


            formData.append("picture", image);

            axios.post(`${url}/services.php`, formData)
                .then(res => {
                    console.log(res.data.msg);
                    if (res.data.success === true) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Sucessfully Added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else {
                        Swal.fire(
                            'Carefull?',
                            res.data.msg,
                            'question'
                        )
                    }

                    navigate('/admin/services')
                    Services();


                    return;
                })
        } catch (error) { throw error; }
        navigate('/admin/services')
        Services();
    };
    const onEdit = (ids) => {

        try {
          axios.post(`${url}/services.php`, {
            userids: ids,
            
          })
            .then(res => {
              console.log(res.data[0])
    
              setServiceEdit(res.data[0]);
    
    
            })
    
        } catch (error) { throw error; }
    
    
      }
    useEffect(() => {
        setServices({

            description: serviceEdit && serviceEdit.description,
            title: serviceEdit && serviceEdit.title,
        });

    }, [serviceEdit])


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
                    axios.post(`${url}/services.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate('/admin/services')
                            Services();
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
            navigate('/admin/services')
            Services();

        } catch (error) { throw error; }

    }
    const onChangeValueedit = (e) => {
        setServices({
            ...services,
            [e.target.name]: e.target.value
        });

    }
    const submitEdit = async (event) => {

        try {
            event.preventDefault();
            event.persist();
            const formData = new FormData();

            formData.append("description", services.description);
            formData.append("title", services.title);


            formData.append("picture", image);
            formData.append("id", serviceEdit.id);




            axios.post(`${url}/services.php`, formData)
                .then(res => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: res.data,
                        showConfirmButton: false,
                        timer: 1500
                    })


                })
            navigate('/admin/services')
            Services();
        } catch (error) { throw error; }

    }

    return (
        <div className="admin-main">
            <div className="modal fade" id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger" id="exampleModalLabel">Services Pages Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="POST" encType="multipart/form-data" onSubmit={submitEdit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <textarea type="text" className="form-control" id="" name="title" value={services && services.title} rows="2" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="" name="description" value={services && services.description} row="1" onChange={onChangeValueedit}></textarea>

                                </div>


                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Images</label>
                                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                                        setImage(e.target.files[0])

                                        setImageshow(URL.createObjectURL(e.target.files[0]));

                                        setShow(true)

                                    }} />
                                    {show ? <img src={imageshow} alt="" style={{ width: "300px", height: "200px" }} /> : <img src={`${url}/images/${serviceEdit && serviceEdit.image}`} alt="" style={{ width: "300px", height: "200px" }} />

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
                    <h2>Services Pages</h2>
                    <form action="" method="POST" enctype="multipart/form-data" onSubmit={submitservices}>
                        <div className="form-group">
                            <label for="desc">Title</label>
                            <textarea className="form-control" name="title" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Description</label>
                            <textarea className="form-control" name="description" rows="3" onChange={onChangeValue}></textarea>
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
                                <th scope="col">S.no</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>


                                <th scope="col">Image</th>





                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewservices !== undefined ? viewservices && viewservices.map((data, key) => {
                                return (<tr key={data && data.id}>
                                    <td>{key + 1} </td>

                                    <td>{data && data.title} </td>
                                    <td>{data && data.description.substr(0,240)} . . . </td>



                                    <td><img src={`${url}/images/${data && data.image}`} alt="" style={{ height: "120px", width: "200px" }} /> </td>


                                    <td style={{ display: "flex" }}><button className='btn btn-warning' style={{ marginRight: '15px' }} data-bs-toggle="modal" data-bs-target="#exampleModaledit" onClick={() => {
                                        onEdit(data && data.id)
                                    }}>Edit</button><button className='btn btn-danger' onClick={() => {
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

export default ServicePage;