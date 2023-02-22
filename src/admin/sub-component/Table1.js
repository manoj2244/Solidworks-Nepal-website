import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';


const Table1 = () => {
  const url = "https://knowuvraj.com/solid-admin";
  
 
  useEffect(() => {
      window.scrollTo(0, 0);
      Hire();

  }, []);

  const [viewHire, setViewHire] = useState();
  

  const Hire = async () => {
      try {
          axios.get(`${url}/hire.php`)
              .then(res => {
                  console.log(res.data)
                  setViewHire(res.data);
              })
      } catch (error) { throw error; }


  }
  return (
    <div className="col-12">
    <div className="card recent-sales overflow-auto card-info">

      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>

          
        </ul>
      </div>

      <div className="card-body-admin">
        <h5 className="card-title-admin">Status Of Hire Your Company <span>| Today</span></h5>

        <table className="table table-borderless datatable">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {viewHire !== undefined ? viewHire && viewHire.map((data, key) =>{
              return(<tr key={data && data.id}>
                <th scope="row"><a href="#">{key + 1}</a></th>
                <td>{data && data.company}</td>
                <td><a href="#" className="text-primary">{data && data.phone}</a></td>
                <td>{data && data.category}</td>
                <td><span className="badge bg-success">Approved</span></td>
              </tr>)
            }):<tr>
            <td style={{ textAlign: "center" }} colSpan={9}>No Records Found</td>
        </tr>}
            
      
          </tbody>
        </table>

      </div>

    </div>
  </div>
  )
}

export default Table1