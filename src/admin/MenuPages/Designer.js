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


const Designer = () => {
    const url = "https://knowuvraj.com/solid-admin";
    const [image, setImage] = useState('');
    const [imageshow, setImageshow] = useState('');

    const [show, setShow] = useState(false);


    const navigate = useNavigate();
    const [team, setTeam] = useState({

        heading: 'uuu',
        name: '',
        designation:"",
        facebook:'',
        insta:'',
        linkdin:'',
        twitter:''


    });
    useEffect(() => {
        window.scrollTo(0, 0);
        Team();

    }, []);

    const [viewteam, setViewteam] = useState();
    const [teamEdit, setTeamEdit] = useState();

    const Team = async () => {
        try {
            axios.get(`${url}/designer.php`)
                .then(res => {
                    console.log(res.data)
                    setViewteam(res.data);
                })
        } catch (error) { throw error; }


    }
    //   const imageurl = `${url}/images/${viewteam.image}`;

    const onChangeValue = (e) => {
        setTeam({
            ...team,
            [e.target.name]: e.target.value
        });
    }

    const submitTeam = async (event) => {
        try {
            event.preventDefault();
            event.persist();
            const formData = new FormData();

            formData.append("heading", team.heading);
            formData.append("name", team.name);
            formData.append("designation", team.designation);
            formData.append("linkdin", team.linkdin);
            formData.append("insta", team.insta);
            formData.append("facebook", team.facebook);
            formData.append("twitter", team.twitter);



            formData.append("picture", image);

            axios.post(`${url}/designer.php`, formData)
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

                    navigate('/admin/designer')
                    Team();


                    return;
                })
        } catch (error) { throw error; }
        navigate('/admin/designer')
        Team();
    };
    const onEdit = (ids) => {

        try {
          axios.post(`${url}/designer.php`, {
            userids: ids,
            
          })
            .then(res => {
              console.log(res.data[0])
    
              setTeamEdit(res.data[0]);
    
    
            })
    
        } catch (error) { throw error; }
    
    
      }
    useEffect(() => {
        setTeam({

            
            designation: teamEdit && teamEdit.name,
            name: teamEdit && teamEdit.designation,
            facebook: teamEdit && teamEdit.facebook,
            insta: teamEdit && teamEdit.insta,
            linkdin: teamEdit && teamEdit.linkdin,
            twitter: teamEdit && teamEdit.twitter,

        });

    }, [teamEdit])


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
                    axios.post(`${url}/designer.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate('/admin/designer')
                            Team();
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
            navigate('/admin/designer')
            Team();

        } catch (error) { throw error; }

    }
    const onChangeValueedit = (e) => {
        setTeam({
            ...team,
            [e.target.name]: e.target.value
        });

    }
    const submitEdit = async (event) => {

        try {
            event.preventDefault();
            event.persist();
            const formData = new FormData();

         formData.append("heading", team.heading);
            formData.append("name", team.name);
            formData.append("designation", team.designation);
            formData.append("linkdin", team.linkdin);
            formData.append("insta", team.insta);
            formData.append("facebook", team.facebook);
            formData.append("twitter", team.twitter);


            formData.append("picture", image);
            formData.append("id", teamEdit.id);




            axios.post(`${url}/designer.php`, formData)
                .then(res => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: res.data,
                        showConfirmButton: false,
                        timer: 1500
                    })


                })
            navigate('/admin/designer')
            Team();
        } catch (error) { throw error; }

    }

    return (
        <div className="admin-main">
            <div className="modal fade" id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger" id="exampleModalLabel">Designer Pages Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="POST" encType="multipart/form-data" onSubmit={submitEdit}>
                              
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <textarea type="text" className="form-control" id="" name="name" value={team && team.name} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Designation</label>
                                    <textarea type="text" className="form-control" id="" name="designation" value={team && team.designation} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">facebook</label>
                                    <textarea type="text" className="form-control" id="" name="facebook" value={team && team.facebook} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Twitter</label>
                                    <textarea type="text" className="form-control" id="" name="twitter" value={team && team.twitter} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Instagram</label>
                                    <textarea type="text" className="form-control" id="" name="insta" value={team && team.insta} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Linkdin</label>
                                    <textarea type="text" className="form-control" id="" name="linkdin" value={team && team.linkdin} row="1" onChange={onChangeValueedit}></textarea>

                                </div>


                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Images</label>
                                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                                        setImage(e.target.files[0])

                                        setImageshow(URL.createObjectURL(e.target.files[0]));

                                        setShow(true)

                                    }} />
                                    {show ? <img src={imageshow} alt="" style={{ width: "300px", height: "200px" }} /> : <img src={`${url}/images/${teamEdit && teamEdit.image}`} alt="" style={{ width: "300px", height: "200px" }} />

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
                    <h2>Designer Pages</h2>
                    <form action="" method="POST" enctype="multipart/form-data" onSubmit={submitTeam}>
                      
                        <div className="form-group">
                            <label for="desc">Name</label>
                            <textarea className="form-control" name="name" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Designation</label>
                            <textarea className="form-control" name="designation" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">facebook</label>
                            <textarea className="form-control" name="facebook" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Instagram</label>
                            <textarea className="form-control" name="insta" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Linkdin</label>
                            <textarea className="form-control" name="linkdin" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Twitter</label>
                            <textarea className="form-control" name="twitter" rows="1" onChange={onChangeValue}></textarea>
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
                                
                                <th scope="col">Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Facebook</th>
                                <th scope="col">Instagram</th>
                                <th scope="col">Twitter</th>
                                <th scope="col">Linkdin</th>


                                <th scope="col">Image</th>





                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewteam !== undefined ? viewteam && viewteam.map((data, key) => {
                                return (<tr key={data && data.id}>
                                    <td>{key + 1} </td>

                                    
                                    <td>{data && data.name}</td>
                                    <td>{data && data.designation}</td>
                                    <td>{data && data.facebook}</td>
                                    <td>{data && data.insta}</td>
                                    <td>{data && data.twitter}</td>
                                    <td>{data && data.linkdin}</td>



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

export default Designer;