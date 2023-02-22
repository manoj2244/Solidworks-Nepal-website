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

const MainScreenpage = () => {
  const url = "https://knowuvraj.com/solid-admin";


  const [mainintro, setMainintro] = useState([])
  
  const [image, setImage] = useState('');
  const [imageshow, setImageshow] = useState('');
  const [imageedit, setImageedit] = useState('');
  const [show,setShow] = useState(false);
  

  const navigate = useNavigate();
  const [intro, setIntro] = useState({
    title: '',
    slogan: '',
    youtubeurl: '',
    image: ''
  });
  const [intro2, setIntro2] = useState({
    title: '',
    slogan: '',
    youtubeurl: '',
    image: ''
  });

  const onChangeValue = (e) => {
    setIntro({
      ...intro,
      [e.target.name]: e.target.value
    });
  }

  const submitIntro = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      const formData = new FormData();
      formData.append("title", intro.title);
      formData.append("slogan", intro.slogan);
      formData.append("youtubeurl", intro.youtubeurl);
      formData.append("picture", image);
      

      axios.post(`${url}/mainscreen.php`, formData)
        .then(res => {
          
          Swal.fire(
            'Noticed?',
            res.data,
            'question'
          )
           navigate(`/admin/main`);
           Intro()
          return;
        })
    } catch (error) { throw error }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    Intro();

  }, []);

  const [intro1, setIntro1] = useState([]);

  const Intro = async () => {
    try {
      axios.get(`${url}/mainscreen.php`)
        .then(res => {
          console.log(res.data[0])
          setIntro1(res.data[0]);
        })
    } catch (error) { throw error; }
  }
  const imageurl = `${url}/images/${intro1.image}`;

  const onEdit = (ids) => {

    try {
      axios.post(`${url}/mainscreen.php`, {
        userids: ids,
        
      })
        .then(res => {
          console.log(res.data.userlist.userdata[0])

          setMainintro(res.data.userlist.userdata[0]);


        })

    } catch (error) { throw error; }


  }
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
          axios.post(`${url}/mainscreen.php`, {
            deletedId: id,
            delete:true
          })
            .then(res => {
              console.log(res.data);
              navigate(`/admin/main`);
              Intro()
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

    } catch (error) { throw error; }

  }
  const imageurledit = `${url}/images/${mainintro.image}`;


  useEffect(() => {
    setIntro2({

      title: mainintro.title,
      slogan: mainintro.slogan,
      youtubeurl: mainintro.youtubeurl,
      image: mainintro.image
    });

  }, [mainintro])

  const onChangeValueedit = (e) => {
    setIntro2({
      ...intro2,
      [e.target.name]: e.target.value
    });

  }
  const submitEdit = async (event) => {
    

    try {
      event.preventDefault();
      event.persist();
      const formData = new FormData();
      formData.append("title", intro2.title);
      formData.append("slogan", intro2.slogan);
      formData.append("youtubeurl", intro2.youtubeurl);
      formData.append("picture", imageedit);
      formData.append("id", intro1.id);
      


      axios.post(`${url}/mainscreen.php`, formData)
        .then(res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data,
            showConfirmButton: false,
            timer: 1500
          })
          Intro()

        })
    } catch (error) { throw error; }
  };
  return (
    <>

      <div className="admin-main">

        <div className="modal fade" id="exampleModaledit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger" id="exampleModalLabel">Main Intro Edit</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="" method="POST" encType="multipart/form-data" onSubmit={submitEdit}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" id="" name="title" value={intro2.title} onChange={onChangeValueedit} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Slogan</label>
                    <textarea type="text" className="form-control" id="" name="slogan" value={intro2.slogan} row="2" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Youtubeurl</label>
                    <textarea type="text" className="form-control" id="" name="youtubeurl" value={intro2.youtubeurl} rows="1" onChange={onChangeValueedit}></textarea>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Images</label>
                    <input type="file" style={{ width: "50%", padding: "20px" }} onChange={(e) => {

                      setImageedit(e.target.files[0])
                      
                      setImageshow(URL.createObjectURL(e.target.files[0]));

                      setShow(true)

                    }} />
                    {show? <img src={imageshow} alt="" style={{ width: "300px", height: "200px" }} />:<img src={imageurledit} alt="" style={{ width: "300px", height: "200px" }} />

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
            <h2>Main-Intro Slogan</h2>
            <form action="" method="POST" encType="multipart/form-data" onSubmit={submitIntro}>
              <div className="form-group">
                <label htmlFor="desc">intro</label>
                <textarea className="form-control" id="title" name="title" rows="2" onChange={onChangeValue}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="desc">slogan</label>
                <textarea className="form-control" id="title1" name="slogan" rows="2" onChange={onChangeValue}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="desc">YoutubeLink</label>
                <textarea className="form-control" id="title2" name="youtubeurl" rows="2" onChange={onChangeValue}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="desc">backgroundImage</label>
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
                  <th scope="col">Intro</th>
                  <th scope="col">Slogan</th>

                  <th scope="col">YoutubeLink</th>
                  <th scope="col">Background Image</th>




                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>

                <tr>

                  <td>{intro1.title}</td>
                  <td>{intro1.slogan} </td>
                  <td>{intro1.youtubeurl} </td>
                  <td><img src={imageurl} alt="" style={{ height: "120px", width: "200px" }} /> </td>


                  <td style={{ display: "flex" }}><button className='btn btn-warning' style={{ marginRight: '15px' }} data-bs-toggle="modal" data-bs-target="#exampleModaledit" onClick={() => {
                    onEdit(intro1.id)
                  }}>Edit</button><button className='btn btn-danger' onClick={() => {
                    onDelete(intro1.id)
                  }}>Delete</button></td>
                </tr>




              </tbody>
            </table>

          </div>
        </main>
        <Footer />
        <ToastContainer>

        </ToastContainer>



      </div>
    </>
  )
}

export default MainScreenpage