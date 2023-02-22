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



const Work3dPage = () => {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const url = "https://knowuvraj.com/solid-admin";
    const [image, setImage] = useState('');
    const [imageshow, setImageshow] = useState('');

    const [show, setShow] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState(null);


    const navigate = useNavigate();
   
    const [work3d, setWork3d] = useState({

        title:'',
        category: '',
        project_date:'',
        client:'',
        url:'',
        desc:'',
        
        


    });
    useEffect(() => {
        window.scrollTo(0, 0);
        Work3d();

    }, []);

    const [viewwork3d, setViewwork3d] = useState();
    const [work3dEdit, setWork3dEdit] = useState();

    const Work3d = async () => {
        try {
            axios.get(`${url}/work3d.php`)
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
            

            formData.append("title", work3d.title);
            formData.append("category", work3d.category);
            formData.append("project_date", work3d.project_date);
            formData.append("client", work3d.client);
            formData.append("url", work3d.url);
            formData.append("desc", work3d.desc);
            formData.append("main_desc",content);
            



            formData.append("picture", image);
            for (const key of Object.keys(selectedFiles)) {
                formData.append('files[]', selectedFiles[key]);
              }

            axios.post(`${url}/work3d.php`, formData)
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

                    navigate('/admin/work3d')
                    Work3d();


                    return;
                })
        } catch (error) { throw error; }
        navigate('/admin/work3d')
        Work3d();
    };
    const onEdit = (ids) => {

        try {
          axios.post(`${url}/work3d.php`, {
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

            title: work3dEdit && work3dEdit.title,
            category: work3dEdit && work3dEdit.category,
            client: work3dEdit && work3dEdit.client,
            project_date: work3dEdit && work3dEdit.project_date,
            url: work3dEdit && work3dEdit.url,
            desc: work3dEdit && work3dEdit.description,

           

        });
        

    }, [work3dEdit])


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
                    axios.post(`${url}/work3d.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate('/admin/work3d')
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
            navigate('/admin/work3d')
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
            

            formData.append("title", work3d.title);
            formData.append("category", work3d.category);
            formData.append("project_date", work3d.project_date);
            formData.append("client", work3d.client);
            formData.append("url", work3d.url);
            formData.append("desc", work3d.desc);


            formData.append("picture", image);
            formData.append("id", work3dEdit.id);
            formData.append("main_desc",content);




            axios.post(`${url}/work3d.php`, formData)
                .then(res => {
                    navigate('/admin/work3d')
                    Work3d();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: res.data,
                        showConfirmButton: false,
                        timer: 1500
                    })


                })
            navigate('/admin/work3d')
            Work3d();
        } catch (error) { throw error; }

    }

    return (
        <div className="admin-main">
            <div className="modal fade " id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger" id="exampleModalLabel">work3d Pages Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="POST" encType="multipart/form-data" onSubmit={submitEdit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Title</label>
                                    <textarea type="text" className="form-control" id="" name="title" value={work3d && work3d.title} rows="2" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Category</label>
                                    <textarea type="text" className="form-control" id="" name="category" value={work3d && work3d.category} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Project Date</label>
                                    <textarea type="text" className="form-control" id="" name="project_date" value={work3d && work3d.project_date} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Client</label>
                                    <textarea type="text" className="form-control" id="" name="client" value={work3d && work3d.client} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Url</label>
                                    <textarea type="text" className="form-control" id="" name="url" value={work3d && work3d.url} row="1" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label"> Little Description</label>
                                    <textarea type="text" className="form-control" id="" name="desc" value={work3d && work3d.desc} row="2" onChange={onChangeValueedit}></textarea>

                                </div>
     


                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Front Image</label>
                                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                                        setImage(e.target.files[0])

                                        setImageshow(URL.createObjectURL(e.target.files[0]));

                                        setShow(true)

                                    }} />
                                    {show ? <img src={imageshow} alt="" style={{ width: "300px", height: "200px" }} /> : <img src={`${url}/images/${work3dEdit && work3dEdit.image}`} alt="" style={{ width: "300px", height: "200px" }} />

                                    }

                                </div>
                                <div className="form-group">
                            <label for="desc">Main Description Of Project</label>
                            <JoditEditor
                                    ref={editor}
                                    
                                    value={work3dEdit && work3dEdit.main_desc}
                                    tabIndex={1} // tabIndex of textarea
                                    onChange={(newContent)=>{
                                        
                                        setContent(newContent)
                                        

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
                    <h2>Project - 3D Design</h2>
                    <form action="" method="POST" enctype="multipart/form-data" onSubmit={submitWork3d}>
                    <div className="form-group">
                            <label for="desc">Front Images</label>
                            <input type="file" className="form-control" id="file" name="file" rows="2" onChange={(e) => {

                                setImage(e.target.files[0])

                            }}></input>
                        </div>

                        <div className="form-group">
                            <label for="desc">Title</label>
                            <textarea className="form-control" name="title" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Category</label>
                            <textarea className="form-control" name="category" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Project Date</label>
                            <textarea className="form-control" name="project_date" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Client</label>
                            <textarea className="form-control" name="client" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Url</label>
                            <textarea className="form-control" name="url" rows="1" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc"> Little Description</label>
                            <textarea className="form-control" name="desc" rows="2" onChange={onChangeValue}></textarea>
                        </div>
               
                        <div className="form-group">
                            <label for="desc">Other Project Images</label>
                            <input type="file" multiple className="form-control" id="file" name="file" rows="2" onChange={(e) => {

                            setSelectedFiles(e.target.files)

                            }}></input>
                        </div>
                        <div className="form-group">
                            <label for="desc">Main Description Of Project</label>
                            <JoditEditor
                                    ref={editor}
                                    
                                    value={content}
                                    tabIndex={1} // tabIndex of textarea
                                    onChange={(newContent)=>{
                                        
                                        setContent(newContent)
                                        

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
                                <th scope="col">Title</th>
                                <th scope="col">Category</th>
                                <th scope="col">Project Date</th>
                                <th scope="col">Client</th>
                                <th scope="col">Little Description</th>
                                <th scope="col">URL</th>
                                


                                <th scope="col"> Front Image</th>
                                <th scope="col"> Main Description</th>





                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewwork3d !== undefined ? viewwork3d && viewwork3d.map((data, key) => {
                                return (<tr key={data && data.id}>
                                    <td>{key + 1} </td>

                                    <td>{data && data.title} </td>
                                    <td>{data && data.category}</td>
                                    <td>{data && data.project_date}</td>
                                    <td>{data && data.client}</td>
                                    <td>{data && data.description}</td>
                                    <td>{data && data.url}</td>
                                   



                                    <td><img src={`${url}/images/${data && data.image}`} alt="" style={{ height: "120px", width: "200px" }} /> </td>
                                    <td>{data && HTMLReactParser(data.main_desc)}</td>


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

export default Work3dPage ;