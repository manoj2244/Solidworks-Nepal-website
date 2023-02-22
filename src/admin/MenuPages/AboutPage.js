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


const Aboutpages = () => {
    const url = "https://knowuvraj.com/solid-admin";
    const [image, setImage] = useState('');
    const [imageshow, setImageshow] = useState('');
    
    const [show, setShow] = useState(false);
    
    const navigate = useNavigate();
    const [about, setAbout] = useState({
        main_intro: '',
        design: '',
        designdesc: '',
        simulation: '',
        simulationdesc: '',
        fabrication: '',
        fabricationdesc: '',

    });
    useEffect(() => {
        window.scrollTo(0, 0);
        About();

    }, []);

    const [viewAbout, setViewAbout] = useState([]);

    const About = async () => {
        try {
            axios.get(`${url}/About.php`)
                .then(res => {
                    console.log(res.data[0])
                    setViewAbout(res.data[0]);
                })
        } catch (error) { throw error; }

      
    }
    //   const imageurl = `${url}/images/${viewAbout.image}`;

    const onChangeValue = (e) => {
        setAbout({
            ...about,
            [e.target.name]: e.target.value
        });
    }

    const submitAbout = async (event) => {
        try {
            event.preventDefault();
            event.persist();
            const formData = new FormData();
            formData.append("main_intro", about.main_intro);
            formData.append("design", about.design);
            formData.append("designdesc", about.designdesc);
            formData.append("fabrication", about.fabrication);
            formData.append("fabricationdesc", about.fabricationdesc);
            formData.append("simulation", about.simulation);
            formData.append("simulationdesc", about.simulationdesc);

            formData.append("picture", image);

            axios.post(`${url}/About.php`, formData)
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
        navigate('/admin/about')
        About();
    };
   
    useEffect(() => {
        setAbout({
            main_intro:viewAbout&&viewAbout.main_intro,
            design:viewAbout&&viewAbout.design,
            designdesc:viewAbout&&viewAbout.designdesc,
            fabrication:viewAbout&&viewAbout.fab,
            fabricationdesc:viewAbout&&viewAbout.fabdesc,
            simulation:viewAbout&&viewAbout.simu,
            simulationdesc:viewAbout&&viewAbout.simudesc
    
          
        });
    
      }, [viewAbout])
    const onDelete = (id) => {
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
                    axios.post(`${url}/About.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            
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
            About()

        } catch (error) { throw error; }

    }
    const onChangeValueedit = (e) => {
        setAbout({
          ...about,
          [e.target.name]: e.target.value
        });
    
      }
    const submitEdit = async (event) => {
        
    try {
        event.preventDefault();
        event.persist();
        const formData = new FormData();
        formData.append("main_intro", about.main_intro);
        formData.append("design", about.design);
        formData.append("designdesc", about.designdesc);
        formData.append("fabrication", about.fabrication);
        formData.append("fabricationdesc", about.fabricationdesc);
        formData.append("simulation", about.simulation);
        formData.append("simulationdesc", about.simulationdesc);

        formData.append("picture", image);
        formData.append("id", viewAbout.id);
       
        
  
  
        axios.post(`${url}/About.php`, formData)
          .then(res => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: res.data,
              showConfirmButton: false,
              timer: 1500
            })
            
  
          })
          About()
      } catch (error) { throw error; }

    }
    return (
        <div className="admin-main">
                  <div className="modal fade" id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger" id="exampleModalLabel">AboutPage Edit</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="" method="POST" encType="multipart/form-data" onSubmit={submitEdit}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Main Intro</label>
                    <textarea type="text" className="form-control" id="" name="main_intro" value={about&&about.main_intro} row="2" onChange={onChangeValueedit} ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">3D Design title</label>
                    <textarea type="text" className="form-control" id="" name="design" value={about&&about.design} row="1" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">3D Design Description</label>
                    <textarea type="text" className="form-control" id="" name="designdesc" value={about&&about.designdesc} rows="2" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Fabrication Title</label>
                    <textarea type="text" className="form-control" id="" name="fabrication" value={about&&about.fabrication} rows="1" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Fabrication Description</label>
                    <textarea type="text" className="form-control" id="" name="fabricationdesc" value={about&&about.fabricationdesc} rows="2" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Simulation Title</label>
                    <textarea type="text" className="form-control" id="" name="simulation" value={about&&about.simulation} rows="1" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Simulation Description</label>
                    <textarea type="text" className="form-control" id="" name="simulationdesc" value={about&&about.simulationdesc} rows="2" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Images</label>
                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                      setImage(e.target.files[0])
                      
                      setImageshow(URL.createObjectURL(e.target.files[0]));

                      setShow(true)

                    }} />
                    {show? <img src={imageshow} alt="" style={{ width: "300px", height: "200px" }} />:<img src={`${url}/images/${viewAbout&&viewAbout.image}`} alt="" style={{ width: "300px", height: "200px" }} />

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
                    <h2>Aboutpages</h2>
                    <form action="" method="POST" enctype="multipart/form-data" onSubmit={submitAbout}>
                        <div className="form-group">
                            <label for="desc">Main-Intro</label>
                            <textarea className="form-control" id="title" name="main_intro" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">3D design Heading</label>
                            <textarea className="form-control" name="design" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">3D design Description</label>
                            <textarea className="form-control" name="designdesc" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Fabrication Heading</label>
                            <textarea className="form-control" name="fabrication" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Fabrication Description</label>
                            <textarea className="form-control" name="fabricationdesc" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Simulation Heading</label>
                            <textarea className="form-control" name="simulation" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Simulation Description</label>
                            <textarea className="form-control" name="simulationdesc" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Aboutimages</label>
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
                                <th scope="col">MainIntro</th>
                                <th scope="col">3d Title</th>

                                <th scope="col">3d Description</th>
                                <th scope="col">Fab Title</th>
                                <th scope="col">Fab Description</th>
                                <th scope="col">Simu Title</th>
                                <th scope="col">Simu Description</th>
                                <th scope="col">About Image</th>




                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewAbout !== undefined ? <tr>

                                <td>{viewAbout&&viewAbout.main_intro}</td>
                                <td>{viewAbout&&viewAbout.design} </td>
                                <td>{viewAbout&&viewAbout.designdesc} </td>
                                <td>{viewAbout&&viewAbout.fab} </td>
                                <td>{viewAbout&&viewAbout.fabdesc} </td>
                                <td>{viewAbout&&viewAbout.simu} </td>
                                <td>{viewAbout&&viewAbout.simudesc} </td>

                                <td><img src={`${url}/images/${viewAbout&&viewAbout.image}`} alt="" style={{ height: "120px", width: "200px" }} /> </td>


                                <td style={{ display: "flex" }}><button className='btn btn-warning' style={{ marginRight: '15px' }} data-bs-toggle="modal" data-bs-target="#exampleModaledit">Edit</button><button className='btn btn-danger' onClick={() => {
                                    onDelete(viewAbout&&viewAbout.id)
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

export default Aboutpages;