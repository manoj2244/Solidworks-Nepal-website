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
   
    const [event, setEvent] = useState({

        subject:'',
        venue: '',
        training_date:'',
        duration:'',
        url:'',
        desc:''
        


    });
    useEffect(() => {
        window.scrollTo(0, 0);
        Event();

    }, []);

    const [viewevent, setViewevent] = useState();
    const [eventEdit, setEventEdit] = useState();

    const Event = async () => {
        try {
            axios.get(`${url}/event.php`)
                .then(res => {
                    console.log(res.data)
                    setViewevent(res.data);
                })
        } catch (error) { throw error; }


    }
    //   const imageurl = `${url}/images/${viewevent.image}`;

    const onChangeValue = (e) => {
        
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });
        
    }

    const submitEvent = async (e) => {
        try {
            e.preventDefault();
            e.persist();
            const formData = new FormData();
            

            formData.append("subject", event.subject);
            formData.append("venue", event.venue);
            formData.append("training_date", event.training_date);
            formData.append("duration", event.duration);
            formData.append("url", event.url);
            formData.append("desc", event.desc);
            



            formData.append("picture", image);
            for (const key of Object.keys(selectedFiles)) {
                formData.append('files[]', selectedFiles[key]);
              }

            axios.post(`${url}/event.php`, formData)
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

                    navigate('/admin/event')
                    Event();


                    return;
                })
        } catch (error) { throw error; }
        navigate('/admin/event')
        Event();
    };
    const onEdit = (ids) => {

        try {
          axios.post(`${url}/event.php`, {
            userids: ids,
            
          })
            .then(res => {
              console.log(res.data[0])
    
              setEventEdit(res.data[0]);
    
    
            })
    
        } catch (error) { throw error; }
    
    
      }
    useEffect(() => {
        setEvent({

            subject: eventEdit && eventEdit.subject,
            venue: eventEdit && eventEdit.venue,
            duration: eventEdit && eventEdit.duration,
            training_date: eventEdit && eventEdit.training_date,
            url: eventEdit && eventEdit.url,
            desc: eventEdit && eventEdit.desc,
           

        });

    }, [eventEdit])


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
                    axios.post(`${url}/event.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate('/admin/event')
                            Event();
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
            navigate('/admin/event')
            Event();

        } catch (error) { throw error; }

    }
    const onChangeValueedit = (e) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        });

    }
    const submitEdit = async (e) => {

        try {
            e.preventDefault();
            e.persist();
            const formData = new FormData();
            

            formData.append("subject", event.subject);
            formData.append("venue", event.venue);
            formData.append("training_date", event.training_date);
            formData.append("duration", event.duration);
            formData.append("url", event.url);
            formData.append("desc", event.desc);


            formData.append("picture", image);
            formData.append("id", eventEdit.id);




            axios.post(`${url}/event.php`, formData)
                .then(res => {
                    navigate('/admin/event')
                    Event();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: res.data,
                        showConfirmButton: false,
                        timer: 1500
                    })


                })
            navigate('/admin/event')
            Event();
        } catch (error) { throw error; }

    }

    return (
        <div className="admin-main">
            <div className="modal fade" id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger" id="exampleModalLabel">Event Pages Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="POST" encType="multipart/form-data" onSubmit={submitEdit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Subject</label>
                                    <textarea type="text" className="form-control" id="" name="subject" value={event && event.subject} rows="2" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">venue</label>
                                    <textarea type="text" className="form-control" id="" name="venue" value={event && event.venue} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Training Date</label>
                                    <textarea type="text" className="form-control" id="" name="training_date" value={event && event.training_date} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Duration</label>
                                    <textarea type="text" className="form-control" id="" name="duration" value={event && event.duration} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Url</label>
                                    <textarea type="text" className="form-control" id="" name="url" value={event && event.url} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="" name="desc" value={event && event.desc} row="2" onChange={onChangeValueedit}></textarea>

                                </div>
     


                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Front Image</label>
                                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                                        setImage(e.target.files[0])

                                        setImageshow(URL.createObjectURL(e.target.files[0]));

                                        setShow(true)

                                    }} />
                                    {show ? <img src={imageshow} alt="" style={{ width: "300px", height: "200px" }} /> : <img src={`${url}/images/${eventEdit && eventEdit.image}`} alt="" style={{ width: "300px", height: "200px" }} />

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
                    <h2>Event Pages</h2>
                    <form action="" method="POST" enctype="multipart/form-data" onSubmit={submitEvent}>
                    <div className="form-group">
                            <label for="desc">Front Images</label>
                            <input type="file" className="form-control" id="file" name="file" rows="2" onChange={(e) => {

                                setImage(e.target.files[0])

                            }}></input>
                        </div>

                        <div className="form-group">
                            <label for="desc">Subject</label>
                            <textarea className="form-control" name="subject" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Venue</label>
                            <textarea className="form-control" name="venue" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Training Date</label>
                            <textarea className="form-control" name="training_date" rows="1" onChange={onChangeValue}></textarea>
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
                            <label for="desc">Other Images</label>
                            <input type="file" multiple className="form-control" id="file" name="file" rows="2" onChange={(e) => {

                            setSelectedFiles(e.target.files)

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
                                <th scope="col">Subject</th>
                                <th scope="col">Venue</th>
                                <th scope="col">Training Date</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Description</th>
                                <th scope="col">URL</th>
                                


                                <th scope="col">Image</th>





                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewevent !== undefined ? viewevent && viewevent.map((data, key) => {
                                return (<tr key={data && data.id}>
                                    <td>{key + 1} </td>

                                    <td>{data && data.subject} </td>
                                    <td>{data && data.venue}</td>
                                    <td>{data && data.training_date}</td>
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