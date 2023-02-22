import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

const Table2 = () => {
  const url = "https://knowuvraj.com/solid-admin";
  useEffect(() => {
    window.scrollTo(0, 0);
    Contact_message();

}, []);

const [viewHire, setViewHire] = useState();


const Contact_message = async () => {
    try {
        axios.get(`${url}/contact_message.php`)
            .then(res => {
                console.log(res.data)
                setViewHire(res.data);
            })
    } catch (error) { throw error; }


}
  return (
    <div className="col-12">
                    <div className="card top-selling overflow-auto card-info">

                      <div className="filter">
                        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                         
                        </ul>
                      </div>

                      <div className="card-body-admin pb-0">
                        <h5 className="card-title-admin">Messages From Visitors <span>| Today</span></h5>

                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Subject</th>
                              <th scope="col">Messages</th>
                            </tr>
                          </thead>
                          <tbody>
                          {viewHire !== undefined ? viewHire && viewHire.map((data, key) => {
                                return (<tr key={data && data.id}>
                                    <td>{key + 1} </td>

                                    <td className='text-primary fw-bold'>{data && data.name} </td>
                                    <td>{data && data.email}</td>
                                    <td className='fw-bold'>{data && data.subject} </td>
                                    <td>{data && data.message.substr(0,70)} . . .</td>
                
                                   
                                </tr>

                                )



                            }) : <tr>
                                <td style={{ textAlign: "center" }} colSpan={9}>No Records Found</td>
                            </tr>

                        }
                          
                          </tbody>
                        </table>

                      </div>

                    </div>
                  </div>
  )
}

export default Table2