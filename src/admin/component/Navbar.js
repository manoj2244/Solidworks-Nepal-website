import React from 'react'
import { Link } from 'react-router-dom'
import Message from '../sub-component/Message'
import Notification from '../sub-component/Notification'
import Profile from '../sub-component/Profile'

const Navbar = () => {
  return (
    <header id="header-admin" className="header-admin fixed-top d-flex align-items-center">

          <div className="d-flex align-items-center justify-content-between">
            <Link to="/admin" className="logo d-flex align-items-center">
              {/* <img src="assets/img/logo.png" alt=""/> */}
              <span className="d-none d-lg-block">doEngineer</span>
            </Link>
            <i className="bi bi-list toggle-sidebar-btn"></i>
          </div>

          <div className="search-bar">
            <form className="search-form d-flex align-items-center" method="POST" action="#">
              <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
              <button type="submit" title="Search"><i className="bi bi-search"></i></button>
            </form>
          </div>

          <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">

              <li className="nav-item d-block d-lg-none">
                <a className="nav-link nav-icon search-bar-toggle " href="#">
                  <i className="bi bi-search"></i>
                </a>
              </li>
                    <Notification/>
                    <Message/>
                    <Profile/>
            
            </ul>
          </nav>

        </header>
  )
}

export default Navbar