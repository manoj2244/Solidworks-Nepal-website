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


const Mission = () => {
    const url = "https://knowuvraj.com/solid-admin";
    const [missionimage, setMissionimage] = useState('');
    const [planimage, setPlanimage] = useState('');
    const [goalimage, setGoalimage] = useState('');
    const [imageshow1, setImageshow1] = useState('');
    const [imageshow2, setImageshow2] = useState('');
    const [imageshow3, setImageshow3] = useState('');
    
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    
    const navigate = useNavigate();
    const [missiondata, setMissiondata] = useState({
      mission:'',
      plan:'',
      goal:''

    });
    useEffect(() => {
        window.scrollTo(0, 0);
        mission();

    }, []);

    const [viewmission, setViewmission] = useState([]);

    const mission = async () => {
        try {
            axios.get(`${url}/mission.php`)
                .then(res => {
                    console.log(res.data[0])
                    setViewmission(res.data[0]);
                })
        } catch (error) { throw error; }

      
    }
    //   const imageurl = `${url}/images/${viewAbout.image}`;

    const onChangeValue = (e) => {
        setMissiondata({
            ...missiondata,
            [e.target.name]: e.target.value
        });
    }

    const submitmission = async (event) => {
        try {
            event.preventDefault();
            event.persist();
            const formData = new FormData();
            formData.append("mission", missiondata.mission);
            formData.append("plan", missiondata.plan);
            formData.append("goal", missiondata.goal);
          

            formData.append("mission_picture", missionimage);
            formData.append("plan_picture", planimage);
            formData.append("goal_picture", goalimage);

            axios.post(`${url}/mission.php`, formData)
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
                      navigate("/admin/mission")
                mission()
                      
                    return;
                })
                navigate("/admin/mission")
                mission()
        } catch (error) { throw error; }
       
    };
  
   
    useEffect(() => {
        setMissiondata({
            mission:viewmission&&viewmission.mission,
            plan:viewmission&&viewmission.plan,
            goal:viewmission&&viewmission.goal
    
          
        });
    
      }, [viewmission])


    const onDelete = async(id) => {
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
                    axios.post(`${url}/mission.php`, {
                        deletedId: id,
                        
                    })
                        .then(res => {
                            console.log(res.data);
                            navigate("/admin/mission")
                            mission()
                            return;
                        })
                        navigate("/admin/mission")
                mission()
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
            navigate("/admin/mission")
            mission()

        } catch (error) { throw error; }

    }
    const onChangeValueedit = (e) => {
        setMissiondata({
          ...missiondata,
          [e.target.name]: e.target.value
        });
    
      }
    const missionSubmit = async (event) => {
        
    try {
        event.preventDefault();
        event.persist();
        const formData = new FormData();
      

        formData.append("mission", missiondata.mission);
        formData.append("plan", missiondata.plan);
        formData.append("goal", missiondata.goal);
      

        formData.append("mission_picture", missionimage);
        formData.append("plan_picture", planimage);
        formData.append("goal_picture", goalimage);
        formData.append("id", viewmission.id);
       
        
  
  
        axios.post(`${url}/mission.php`, formData)
          .then(res => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: res.data,
              showConfirmButton: false,
              timer: 1500
            })
            
            navigate("/admin/mission")
            mission()
          })
          navigate("/admin/mission")
          mission()
      } catch (error) { throw error; }

    }
    return (
        <div className="admin-main">
       <div className="modal fade" id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger" id="exampleModalLabel">Mission, Plan, goal Pages Edit</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="" method="POST" encType="multipart/form-data" onSubmit={missionSubmit}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Mission Description</label>
                    <textarea type="text" className="form-control" id="" name="mission" value={missiondata&&missiondata.mission} row="2" onChange={onChangeValueedit} ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Plan Description</label>
                    <textarea type="text" className="form-control" id="" name="plan" value={missiondata&&missiondata.plan} row="2" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Goal Description</label>
                    <textarea type="text" className="form-control" id="" name="goal" value={missiondata&&missiondata.goal} rows="2" onChange={onChangeValueedit}></textarea>

                  </div>
                
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Mission Image</label>
                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                      setMissionimage(e.target.files[0])
                      
                      setImageshow1(URL.createObjectURL(e.target.files[0]));

                      setShow1(true)

                    }} />
                    {show1? <img src={imageshow1} alt="" style={{ width: "300px", height: "200px" }} />:<img src={`${url}/images/${viewmission&&viewmission.missionimage}`} alt="" style={{ width: "300px", height: "200px" }} />

                  }

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Plan Image</label>
                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                      setPlanimage(e.target.files[0])
                      
                      setImageshow2(URL.createObjectURL(e.target.files[0]));

                      setShow2(true)

                    }} />
                    {show2? <img src={imageshow2} alt="" style={{ width: "300px", height: "200px" }} />:<img src={`${url}/images/${viewmission&&viewmission.planimage}`} alt="" style={{ width: "300px", height: "200px" }} />

                  }

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Goal Image</label>
                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                      setGoalimage(e.target.files[0])
                      
                      setImageshow3(URL.createObjectURL(e.target.files[0]));

                      setShow3(true)

                    }} />
                    {show3? <img src={imageshow3} alt="" style={{ width: "300px", height: "200px" }} />:<img src={`${url}/images/${viewmission&&viewmission.goalimage}`} alt="" style={{ width: "300px", height: "200px" }} />

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
                    <h2>Mission,Plan,Goal</h2>
                    <form action="" method="POST" enctype="multipart/form-data" onSubmit={submitmission}>
                        <div className="form-group">
                            <label for="desc">Mission Description</label>
                            <textarea className="form-control" id="title" name="mission" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Plan Description</label>
                            <textarea className="form-control" name="plan" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                        <div className="form-group">
                            <label for="desc">Goal Description</label>
                            <textarea className="form-control" name="goal" rows="2" onChange={onChangeValue}></textarea>
                        </div>
                      
                        <div className="form-group">
                            <label for="desc">Mission Image</label>
                            <input type="file" className="form-control" id="file" name="file" rows="2" onChange={(e) => {

                                setMissionimage(e.target.files[0])

                            }}></input>
                        </div>
                        <div className="form-group">
                            <label for="desc">Plan Image</label>
                            <input type="file" className="form-control" id="file" name="file" rows="2" onChange={(e) => {

                                setPlanimage(e.target.files[0])

                            }}></input>
                        </div>
                        <div className="form-group">
                            <label for="desc">Goal Image</label>
                            <input type="file" className="form-control" id="file" name="file" rows="2" onChange={(e) => {

                                setGoalimage(e.target.files[0])

                            }}></input>
                        </div>


                        <button type="submit" className="btn btn-primary my-2">Add</button>
                    </form>
                </div>
                <div className="container my-4">

                    <table className="table" id="myTable">
                        <thead>
                            <tr>
                                <th scope="col">Mission Description</th>
                                <th scope="col">Mission Image</th>

                                <th scope="col">Plan Description</th>
                                <th scope="col">Plan Image</th>
                                <th scope="col">Goal Description</th>
                                <th scope="col">Goal Image</th>
                                

                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {viewmission !== undefined ? <tr>

                                <td>{viewmission&&viewmission.mission}</td>
                                <td><img src={`${url}/images/${viewmission&&viewmission.missionimage}`} alt="" style={{ height: "120px", width: "200px" }} /> </td>
                                <td>{viewmission&&viewmission.plan} </td>
                                <td><img src={`${url}/images/${viewmission&&viewmission.planimage}`} alt="" style={{ height: "120px", width: "200px" }} /> </td>
                                <td>{viewmission&&viewmission.goal} </td>
                                <td><img src={`${url}/images/${viewmission&&viewmission.goalimage}`} alt="" style={{ height: "120px", width: "200px" }} /> </td>
                                


                                <td style={{ display: "flex" }}><button className='btn btn-warning' style={{ marginRight: '15px' }} data-bs-toggle="modal" data-bs-target="#exampleModaledit">Edit</button><button className='btn btn-danger' onClick={() => {
                                    onDelete(viewmission&&viewmission.id)
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

export default Mission;