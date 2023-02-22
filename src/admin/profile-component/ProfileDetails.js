import React from 'react'
import Breadcum from '../component/Breadcum';

import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Footer from '../component/Footer'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const ProfileDetails = () => {
  const [imageshow, setImageshow] = useState('');
  const [imageedit, setImageedit] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const url = "https://knowuvraj.com/solid-admin";

  const [profileDetails, setProfileDetails] = useState({
    about: '',
    company: '',
    address: '',
    phone: '',
    email: '',
    country: '',
    services: '',
    youtube: '',
    facebook: ''

  });
  useEffect(() => {
    window.scrollTo(0, 0);
    Profile();

  }, []);

  const [profile, setProfile] = useState([]);

  const Profile = async () => {
    try {
      axios.get(`${url}/profile.php`)
        .then(res => {
          console.log(res.data[0])
          setProfile(res.data[0]);


        })
    } catch (error) { throw error; }
  }
  useEffect(() => {
    setProfileDetails({
      about: profile.about,
      company: profile.company,
      address: profile.address,
      phone: profile.phone,
      email: profile.email,
      country: profile.country,
      services: profile.services,
      youtube: profile.youtube,
      facebook: profile.facebook

    });

  }, [profile])




  const onchangeProfile = (e) => {
    setProfileDetails({
      ...profileDetails,
      [e.target.name]: e.target.value
    });
  }

  const ProfileEdit = (event) => {
    try {
      event.preventDefault();
      event.persist();
      
      const formData = new FormData();
      formData.append("about", profileDetails.about);
      formData.append("company", profileDetails.company);
      formData.append("services", profileDetails.services);
      formData.append("country", profileDetails.country);
      formData.append("phone", profileDetails.phone);
      formData.append("email", profileDetails.email);
      formData.append("address", profileDetails.address);
      formData.append("facebook", profileDetails.facebook);
      formData.append("youtube", profileDetails.youtube);
      formData.append("picture", imageedit);
      formData.append("id", profile.id);


      axios.post(`${url}/profile.php`, formData)
        .then(res => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data,
            showConfirmButton: false,
            timer: 1500
          })
          navigate(`/admin`);

        })
    } catch (error) { throw error; }

  }

  return (
    <>
      <div className="admin-main">
        <Navbar />
        <Sidebar />
        <main id="main" className="main">
          <Breadcum Breadcum="profile" />
          <section className="section profile">
            <div className="row">
              <div className="col-xl-4">

                <div className="card">
                  <div className="card-body-admin profile-card pt-4 d-flex flex-column align-items-center">

                    <img src={`${url}/images/${profile.image}`} alt="Profile" className="rounded-circle" />
                    <h2>SolidWorks Nepal</h2>
                    <h3>3D Design</h3>
                    <div className="social-links mt-2">
                      <a href={profile.youtube} className="twitter"><i className="bi bi-youtube"></i></a>
                      <a href={profile.facebook} className="facebook"><i className="bi bi-facebook"></i></a>
                      <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                      <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-xl-8">

                <div className="card">
                  <div className="card-body-admin pt-3">

                    <ul className="nav nav-tabs nav-tabs-bordered">

                      <li className="nav-item">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                      </li>

                      <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                      </li>

                      <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                      </li>

                    </ul>
                    <div className="tab-content pt-2">

                      <div className="tab-pane fade show active profile-overview" id="profile-overview">
                        <h5 className="card-title-admin">About</h5>
                        <p className="fst-italic">{profile.about}</p>

                        <h5 className="card-title-admin">Profile Details</h5>



                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Company</div>
                          <div className="col-lg-9 col-md-8">{profile.company}</div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Services</div>
                          <div className="col-lg-9 col-md-8">{profile.services}</div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Country</div>
                          <div className="col-lg-9 col-md-8">{profile.country}</div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Address</div>
                          <div className="col-lg-9 col-md-8">{profile.address}</div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Phone</div>
                          <div className="col-lg-9 col-md-8">{profile.phone}</div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">Email</div>
                          <div className="col-lg-9 col-md-8">{profile.email}</div>
                        </div>

                      </div>

                      <div className="tab-pane fade profile-edit pt-3" id="profile-edit">


                        <form action="" method="POST" encType="multipart/form-data" onSubmit={ProfileEdit}>
                          <div className="row mb-3">
                            <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                            <div className="col-md-8 col-lg-9">
                            {show? <img src={imageshow} alt=""  />:<img src={`${url}/images/${profile.image}`} alt=""/>

                              }
                              <div className="pt-2">
                                <label htmlFor="upload" className="btn btn-danger btn-sm" style={{ marginTop: "9px", marginRight: "4px" }}><i className="bi bi-upload" style={{ color: "white" }} ></i></label>
                                <input type="file" id='upload' style={{ display: 'none' }} onChange={(e) => {

                                  setImageedit(e.target.files[0])
                                  setImageshow(URL.createObjectURL(e.target.files[0]));
                                  
                                  
                                  setShow(true)

                                }} />
                                <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
                              </div>
                            </div>
                          </div>


                          <div className="row mb-3">
                            <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                            <div className="col-md-8 col-lg-9">
                              <textarea name="about" className="form-control" id="about" style={{ height: "100px" }} value={profileDetails.about} onChange={onchangeProfile}></textarea>
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="company" type="text" className="form-control" id="company" value={profileDetails.company} onChange={onchangeProfile} />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">Services</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="services" type="text" className="form-control" id="Job" value={profileDetails.services} onChange={onchangeProfile} />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="country" type="text" className="form-control" id="Country" value={profileDetails.country} onChange={onchangeProfile} />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="address" type="text" className="form-control" id="Address" value={profileDetails.address} onChange={onchangeProfile} />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="phone" type="text" className="form-control" id="Phone" value={profileDetails.phone} onChange={onchangeProfile} />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="email" type="email" className="form-control" id="Email" value={profileDetails.email} onChange={onchangeProfile} />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Youtube Link</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="youtube" type="text" className="form-control" id="Twitter" value={profileDetails.youtube} onChange={onchangeProfile} />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="facebook" type="text" className="form-control" id="Facebook" value={profileDetails.facebook} onChange={onchangeProfile} />
                            </div>
                          </div>



                          <div className="text-center">
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                          </div>
                        </form>

                      </div>

                      <div className="tab-pane fade pt-3" id="profile-change-password">

                        <form>

                          <div className="row mb-3">
                            <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="password" type="password" className="form-control" id="currentPassword" />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="newpassword" type="password" className="form-control" id="newPassword" />
                            </div>
                          </div>

                          <div className="row mb-3">
                            <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                            <div className="col-md-8 col-lg-9">
                              <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                            </div>
                          </div>

                          <div className="text-center">
                            <button type="submit" className="btn btn-primary">Change Password</button>
                          </div>
                        </form>

                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>


        </main>
        <Footer />

      </div>

    </>
  )
}

export default ProfileDetails