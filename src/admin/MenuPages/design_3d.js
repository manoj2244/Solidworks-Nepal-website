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
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser';



const Design_3D = () => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [content1, setContent1] = useState('');
    const url = "https://knowuvraj.com/solid-admin";
    const [image, setImage] = useState('');
    const [imageshow, setImageshow] = useState('');

    const [show, setShow] = useState(false);
 


    const navigate = useNavigate();
   
    const [work3d, setWork3d] = useState({

        access:''
    
        
        


    });
    useEffect(() => {
        window.scrollTo(0, 0);
        Work3d();

    }, []);

    const [viewwork3d, setViewwork3d] = useState();
    const [work3dEdit, setWork3dEdit] = useState();

    const Work3d = async () => {
        try {
            axios.get(`${url}/design_3d.php`)
                .then(res => {
                    console.log(res.data)
                    setViewwork3d(res.data);
                })
        } catch (error) { throw error; }


    }
    //   const imageurl = `${url}/images/${viewwork3d.image}`;

    const onChangeValue = (e) => {
        
        setWork3d({
            ...work3d,
            [e.target.name]: e.target.value
        });
        
    }

    const submitWork3d = async (e) => {
        try {
            
            e.preventDefault();
            console.log(content);
            e.persist();
            const formData = new FormData();
            

            formData.append("access", work3d.access);
            formData.append("used", content);
            formData.append("detail", content1);
         
            



            formData.append("picture", image);
           

            axios.post(`${url}/design_3d.php`, formData)
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

                    navigate('/admin/design_3d')
                    Work3d();


                    return;
                })
        } catch (error) { throw error; }
        navigate('/admin/design_3d')
        Work3d();
    };
    const onEdit = (ids) => {

        try {
          axios.post(`${url}/design_3d.php`, {
            userids: ids,
            
          })
            .then(res => {
              console.log(res.data[0])
    
              setWork3dEdit(res.data[0]);
    
    
            })
    
        } catch (error) { throw error; }
    
    
      }
    useEffect(() => {
        setWork3d({

            access: work3dEdit && work3dEdit.access,
           

        });
        

    }, [work3dEdit])


    const onDelete = async (id) => {
        try {
            Swal.fire({
                access: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post(`${url}/design_3d.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate('/admin/design_3d')
                            Work3d();
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
            navigate('/admin/design_3d')
            Work3d();

        } catch (error) { throw error; }

    }
    const onChangeValueedit = (e) => {
        setWork3d({
            ...work3d,
            [e.target.name]: e.target.value
        });

    }
    const submitEdit = async (e) => {

        try {
            e.preventDefault();
            e.persist();
            const formData = new FormData();
            

           
            formData.append("access", work3d.access);
            formData.append("used", content);
            formData.append("detail", content1);
         
            



            formData.append("picture", image);
            formData.append("id", work3dEdit.id);



            axios.post(`${url}/design_3d.php`, formData)
                .then(res => {
                    navigate('/admin/design_3d')
                    Work3d();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        access: res.data,
                        showConfirmButton: false,
                        timer: 1500
                    })


                })
            navigate('/admin/design_3d')
            Work3d();
        } catch (error) { throw error; }

    }

    return (
        <div className="admin-main">
            <div className="modal fade " id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-access text-danger" id="exampleModalLabel">Design_3d Pages Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="POST" encType="multipart/form-data" onSubmit={submitEdit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Access</label>
                                    <textarea type="text" className="form-control" id="" name="access" value={work3d && work3d.access} rows="2" onChange={onChangeValueedit}></textarea>

                                </div>
                           
     


                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Image</label>
                                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                                        setImage(e.target.files[0])

                                        setImageshow(URL.createObjectURL(e.target.files[0]));

                                        setShow(true)

                                    }} />
                                    {show ? <img src={imageshow} alt="" style={{ width: "300px", height: "200px" }} /> : <img src={`${url}/images/${work3dEdit && work3dEdit.image}`} alt="" style={{ width: "300px", height: "200px" }} />

                                    }

                                </div>
                             <div className="form-group">
                            <label for="desc" style={{paddingTop:"25px",paddingBottom:"15px"}}>Used By: <b>(please write in the form of list)</b></label>
                            <JoditEditor
                                    ref={editor}
                                    
                                    value={work3dEdit && work3dEdit.used}
                                    tabIndex={1} // tabIndex of textarea
                                    onChange={(newContent)=>{
                                        
                                        setContent(newContent)
                                        

                                    }}
                                   
                                />
                        </div>
                        <div className="form-group">
                            <label for="desc" style={{paddingTop:"25px",paddingBottom:"15px"}}>Details <b>(please write in the form of list)</b></label>
                            <JoditEditor
                                    ref={editor}
                                    
                                    value={work3dEdit && work3dEdit.detail}
                                    tabIndex={1} // tabIndex of textarea
                                    onChange={(newContent)=>{
                                        
                                        setContent1(newContent)
                                        

                                    }}
                                    
                                />
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
                    <h2>Design - 3D Design</h2>
                    <form action="" method="POST" enctype="multipart/form-data" onSubmit={submitWork3d}>
                    <div className="form-group">
                            <label for="desc">Image</label>
                            <input type="file" className="form-control" id="file" name="file" rows="2" onChange={(e) => {

                                setImage(e.target.files[0])

                            }}></input>
                        </div>

                        <div className="form-group">
                            <label for="desc">Access Type</label>
                            <textarea className="form-control" name="access" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                    
               
                       
                        <div className="form-group">
                            <label for="desc" style={{paddingTop:"25px",paddingBottom:"15px"}}>Used By: <b>(please write in the form of list)</b></label>
                            <JoditEditor
                                    ref={editor}
                                    
                                    value={content}
                                    tabIndex={1} // tabIndex of textarea
                                    onChange={(newContent)=>{
                                        
                                        setContent(newContent)
                                        

                                    }}
                                   
                                />
                        </div>
                        <div className="form-group">
                            <label for="desc" style={{paddingTop:"25px",paddingBottom:"15px"}}>Details <b>(please write in the form of list)</b></label>
                            <JoditEditor
                                    ref={editor}
                                    
                                    value={content1}
                                    tabIndex={1} // tabIndex of textarea
                                    onChange={(newContent)=>{
                                        
                                        setContent1(newContent)
                                        

                                    }}
                                    
                                />
                        </div>
                        
                  

                        <button type="submit" className="btn btn-primary my-2">Add</button>
                    </form>
                </div>
                <div className="container my-4">

                    <table className="table" id="myTable">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Access</th>
                                <th scope="col">Used By</th>
                                
                                <th scope="col">Details</th>
                               
                                


                                <th scope="col">Image</th>
                            





                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewwork3d !== undefined ? viewwork3d && viewwork3d.map((data, key) => {
                                return (<tr key={data && data.id}>
                                    <td>{key + 1} </td>

                                    <td>{data && data.access} </td>
                                    <td>{data && HTMLReactParser(data.used)}</td>
                                    <td>{data && HTMLReactParser(data.detail)}</td>
                                
                                   



                                    <td><img src={`${url}/images/${data && data.image}`} alt="" style={{ height: "120px", width: "200px" }} /> </td>
                                    <td>{data && data.main_desc}</td>


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

export default Design_3D ;