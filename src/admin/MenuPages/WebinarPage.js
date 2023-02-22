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


const EventPage = () => {
    const url = "https://knowuvraj.com/solid-admin";
    const [image, setImage] = useState('');
    const [imageshow, setImageshow] = useState('');

    const [show, setShow] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState(null);


    const navigate = useNavigate();
   
    const [webinar, setWebinar] = useState({

        title:'',
        guest: '',
        webinar_date:'',
        duration:'',
        url:'',
        desc:''
        


    });
    useEffect(() => {
        window.scrollTo(0, 0);
        Webinar();

    }, []);

    const [viewwebinar, setViewwebinar] = useState();
    const [webinarEdit, setWebinarEdit] = useState();

    const Webinar = async () => {
        try {
            axios.get(`${url}/webinar.php`)
                .then(res => {
                    console.log(res.data)
                    setViewwebinar(res.data);
                })
        } catch (error) { throw error; }


    }
    //   const imageurl = `${url}/images/${viewwebinar.image}`;

    const onChangeValue = (e) => {
        
        setWebinar({
            ...webinar,
            [e.target.name]: e.target.value
        });
        
    }

    const submitEvent = async (e) => {
        try {
            e.preventDefault();
            e.persist();
            const formData = new FormData();
            

            formData.append("title", webinar.title);
            formData.append("guest", webinar.guest);
            formData.append("webinar_date", webinar.webinar_date);
            formData.append("duration", webinar.duration);
            formData.append("url", webinar.url);
            formData.append("desc", webinar.desc);
            



            formData.append("picture", image);
            

            axios.post(`${url}/webinar.php`, formData)
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

                    navigate('/admin/webinar')
                    Webinar();


                    return;
                })
        } catch (error) { throw error; }
        navigate('/admin/webinar')
        Webinar();
    };
    const onEdit = (ids) => {

        try {
          axios.post(`${url}/webinar.php`, {
            userids: ids,
            
          })
            .then(res => {
              console.log(res.data[0])
    
              setWebinarEdit(res.data[0]);
    
    
            })
    
        } catch (error) { throw error; }
    
    
      }
    useEffect(() => {
        setWebinar({

            title: webinarEdit && webinarEdit.title,
            guest: webinarEdit && webinarEdit.guest,
            duration: webinarEdit && webinarEdit.duration,
            webinar_date: webinarEdit && webinarEdit.webinar_date,
            url: webinarEdit && webinarEdit.url,
            desc: webinarEdit && webinarEdit.desc,
           

        });

    }, [webinarEdit])


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
                    axios.post(`${url}/webinar.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate('/admin/webinar')
                            Webinar();
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
            navigate('/admin/webinar')
            Webinar();

        } catch (error) { throw error; }

    }
    const onChangeValueedit = (e) => {
        setWebinar({
            ...webinar,
            [e.target.name]: e.target.value
        });

    }
    const submitEdit = async (e) => {

        try {
            e.preventDefault();
            e.persist();
            const formData = new FormData();
            

            formData.append("title", webinar.title);
            formData.append("guest", webinar.guest);
            formData.append("webinar_date", webinar.webinar_date);
            formData.append("duration", webinar.duration);
            formData.append("url", webinar.url);
            formData.append("desc", webinar.desc);


            formData.append("picture", image);
            formData.append("id", webinarEdit.id);




            axios.post(`${url}/webinar.php`, formData)
                .then(res => {
                    navigate('/admin/webinar')
                    Webinar();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: res.data,
                        showConfirmButton: false,
                        timer: 1500
                    })


                })
            navigate('/admin/webinar')
            Webinar();
        } catch (error) { throw error; }

    }

    return (
        <div className="admin-main">
            <div className="modal fade" id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger" id="exampleModalLabel">Webinar Pages Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="POST" encType="multipart/form-data" onSubmit={submitEdit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <textarea type="text" className="form-control" id="" name="title" value={webinar && webinar.title} rows="2" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Guest</label>
                                    <textarea type="text" className="form-control" id="" name="guest" value={webinar && webinar.guest} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Webinar Date</label>
                                    <textarea type="text" className="form-control" id="" name="webinar_date" value={webinar && webinar.webinar_date} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Duration</label>
                                    <textarea type="text" className="form-control" id="" name="duration" value={webinar && webinar.duration} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Url</label>
                                    <textarea type="text" className="form-control" id="" name="url" value={webinar && webinar.url} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="" name="desc" value={webinar && webinar.desc} row="2" onChange={onChangeValueedit}></textarea>

                                </div>
     


                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Image</label>
                                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                                        setImage(e.target.files[0])

                                        setImageshow(URL.createObjectURL(e.target.files[0]));

                                        setShow(true)

                                    }} />
                                    {show ? <img src={imageshow} alt="" style={{ width: "300px", height: "200px" }} /> : <img src={`${url}/images/${webinarEdit && webinarEdit.image}`} alt="" style={{ width: "300px", height: "200px" }} />

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
                    <h2>webinar Pages</h2>
                    <form action="" method="POST" enctype="multipart/form-data" onSubmit={submitEvent}>
             

                        <div className="form-group">
                            <label for="desc">Title</label>
                            <textarea className="form-control" name="title" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Guest</label>
                            <textarea className="form-control" name="guest" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Webinar Date</label>
                            <textarea className="form-control" name="webinar_date" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Duration</label>
                            <textarea className="form-control" name="duration" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Url</label>
                            <textarea className="form-control" name="url" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Description</label>
                            <textarea className="form-control" name="desc" rows="2" onChange={onChangeValue}></textarea>
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
                                <th scope="col">guest</th>
                                <th scope="col">Webinar Date</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Description</th>
                                <th scope="col">URL</th>
                                


                                <th scope="col">Image</th>





                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewwebinar !== undefined ? viewwebinar && viewwebinar.map((data, key) => {
                                return (<tr key={data && data.id}>
                                    <td>{key + 1} </td>

                                    <td>{data && data.title} </td>
                                    <td>{data && data.guest}</td>
                                    <td>{data && data.webinar_date}</td>
                                    <td>{data && data.duration}</td>
                                    <td>{data && data.description}</td>
                                    <td>{data && data.url}</td>
                                   



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

export default EventPage ;