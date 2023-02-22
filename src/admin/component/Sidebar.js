import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <Link className="nav-link " to="/admin">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-menu-button-wide"></i><span>Training Pages</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/admin/event">
              <i className="bi bi-circle"></i><span>Events</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/webinar">
              <i className="bi bi-circle"></i><span>Webinar</span>
            </Link>
          </li>
        

         
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-journal-text"></i><span>Projects</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/admin/work3d">
              <i className="bi bi-circle"></i><span>3D Design</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/simulation">
              <i className="bi bi-circle"></i><span>Simulation and Optimization</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/fabrication">
              <i className="bi bi-circle"></i><span>Fabrication</span>
            </Link>
          </li>
        
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-layout-text-window-reverse"></i><span>Designs</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/admin/design_3d">
              <i className="bi bi-circle"></i><span>3D- Design</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/design_simula">
              <i className="bi bi-circle"></i><span>Simula-Design</span>
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-layout-text-window-reverse"></i><span>Hire, Getstarted, Subscribe Form</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/admin/hire">
              <i className="bi bi-circle"></i><span>Hire Page</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/subscribe">
              <i className="bi bi-circle"></i><span>Subscribed Page</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/contact">
              <i className="bi bi-circle"></i><span>Contact - Messages</span>
            </Link>
          </li>
        </ul>
      </li>

  

      <li className="nav-heading">Pages</li>

      <li className="nav-item">
        <Link to="/admin/main" className="nav-link collapsed">
          <i className="bi bi-person"></i>
          <span>MainScreen</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/admin/about">
          <i className="bi bi-question-circle"></i>
          <span>AboutPage</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/admin/contact">
          <i className="bi bi-envelope"></i>
          <span>Contact</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/admin/mission">
          <i className="bi bi-card-list"></i>
          <span>Mission, Goal, Plan</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/admin/testomonial">
          <i className="bi bi-box-arrow-in-right"></i>
          <span>Testomonial</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/admin/services">
          <i className="bi bi-dash-circle"></i>
          <span>Services</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/admin/team">
          <i className="bi bi-file-earmark"></i>
          <span>Founder Member</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/admin/designer">
          <i className="bi bi-file-earmark"></i>
          <span>Designer Member</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link collapsed" to="/admin/faq">
          <i className="bi bi-file-earmark"></i>
          <span>FAQ Page</span>
        </Link>
      </li>

    </ul>

  </aside>
  )
}

export default Sidebar