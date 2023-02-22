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




const Faqpage = () => {
  
    const url = "https://knowuvraj.com/solid-admin";
    const navigate = useNavigate();
   
    const [work3d, setWork3d] = useState({

        question:'',
        answer:''
    });
    useEffect(() => {
        window.scrollTo(0, 0);
        Work3d();

    }, []);

    const [viewwork3d, setViewwork3d] = useState();
    const [work3dEdit, setWork3dEdit] = useState();

    const Work3d = async () => {
        try {
            axios.get(`${url}/faq.php`)
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
            
            e.persist();
            const formData = new FormData();
            
            formData.append("question", work3d.question);
            formData.append("answer", work3d.answer);

            axios.post(`${url}/faq.php`, formData)
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

                    navigate('/admin/faq')
                    Work3d();


                    return;
                })
        } catch (error) { throw error; }
        navigate('/admin/faq')
        Work3d();
    };
    const onEdit = (ids) => {

        try {
          axios.post(`${url}/faq.php`, {
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

            question: work3dEdit && work3dEdit.question,
            answer:work3dEdit && work3dEdit.question
        });
        

    }, [work3dEdit])


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
                    axios.post(`${url}/faq.php`, {
                        deletedId: id,
                        delete: true
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate('/admin/faq')
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
            navigate('/admin/faq')
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

            formData.append("question", work3d.question);
            formData.append("answer", work3d.answer);

            formData.append("id", work3dEdit.id);
            axios.post(`${url}/faq.php`, formData)
                .then(res => {
                    navigate('/admin/faq')
                    Work3d();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: res.data,
                        showConfirmButton: false,
                        timer: 1500
                    })


                })
            navigate('/admin/faq')
            Work3d();
        } catch (error) { throw error; }

    }

    return (
        <div className="admin-main">
            <div className="modal fade " id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-question text-danger" id="exampleModalLabel">FAQ Pages Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="POST"  onSubmit={submitEdit}>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Faq - Question</label>
                                    <textarea type="text" className="form-control" id="" name="question" value={work3d && work3d.question} rows="2" onChange={onChangeValueedit}></textarea>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">Faq - Answer</label>
                                    <textarea type="text" className="form-control" id="" name="answer" value={work3d && work3d.answer} rows="3" onChange={onChangeValueedit}></textarea>

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
                    <h2>FAQ Pages</h2>
                    <form action="" method="POST"  onSubmit={submitWork3d}>
                   

                        <div className="form-group">
                            <label for="desc">Faq - Question</label>
                            <textarea className="form-control" name="question" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Faq - Answer</label>
                            <textarea className="form-control" name="answer" rows="3" onChange={onChangeValue}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary my-2">Add</button>
                    </form>
                </div>
                <div className="container my-4">

                    <table className="table" id="myTable">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Question</th>
                                <th scope="col">Answer</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewwork3d !== undefined ? viewwork3d && viewwork3d.map((data, key) => {
                                return (<tr key={data && data.id}>
                                    <td>{key + 1} </td>

                                    <td>{data && data.question} </td>
                                    <td>{data && data.answer}</td>
                
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

export default Faqpage ;