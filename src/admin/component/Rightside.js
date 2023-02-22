import React from 'react'

const Rightside = () => {
  return (
    <div className="col-lg-4">

    {/* <!-- Recent Activity --> */}
    <div className="card card-info">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>

        </ul>
      </div>

      <div className="card-body-admin">
        <h5 className="card-title-admin">Recent Activity <span>| Today</span></h5>

        <div className="activity">

       

        </div>

      </div>
    </div>



    {/* <!-- Website Traffic --> */}
    <div className="card card-info">
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>

          <li><a className="dropdown-item" href="#">Today</a></li>
          <li><a className="dropdown-item" href="#">This Month</a></li>
          <li><a className="dropdown-item" href="#">This Year</a></li>
        </ul>
      </div>

      <div className="card-body-admin pb-0">
        <h5 className="card-title-admin">Website Traffic <span>| Today</span></h5>

        <div id="trafficChart" style={{ minHeight: "400px" }} className="echart"></div>



      </div>
    </div>

  

  </div>
  )
}

export default Rightside