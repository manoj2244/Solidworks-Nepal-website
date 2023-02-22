import React from 'react'

const Card = (props) => {
  return (
    <div className={`col-xxl-4 ${props.card.class}`}>
                    <div className="card info-card sales-card">

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

                      <div className="card-body-admin">
                        <h5 className="card-title-admin">{props.card.title} <span>| {props.card.date}</span></h5>

                        <div className="d-flex align-items-center">
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className={props.card.icon}></i>
                          </div>
                          <div className="ps-3">
                            <h6>{props.card.count}</h6>
                            <span className="text-success small pt-1 fw-bold">{props.card.increase}</span> <span className="text-muted small pt-2 ps-1">{props.card.title}</span>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
  )
}

export default Card