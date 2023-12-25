
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Topbar() {
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    // Close the navbar collapse when a link is clicked
    const navbarToggle = document.getElementById('navbarToggle');
    if (navbarToggle) {
      navbarToggle.click();
    }
  };

  return (
    <div>
      <div className='top'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-dark">
          <div className="container-fluid mt-3">
            <NavLink className="navbar-brand" to='/'><span className='bg-danger p-2 fw-bolder fs-2' style={{ borderRadius: '50%' }}>ELITE</span><span className=' p-1 fw-bolder fs-3'>Academy</span></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" id="navbarToggle">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse me-5" id="navbarNavDropdown">
            <ul className="navbar-nav text-light">
              <li className="nav-item me-5 fs-4 fw-bold mt-4">
                <NavLink className="nav-link" to='/' onClick={() => { navigate('/'); handleNavLinkClick(); }}>Home</NavLink>
              </li>
              <li className="nav-item me-5 fs-4 fw-bold mt-4">
                <NavLink className="nav-link" to='/course' onClick={() => { navigate('/course'); handleNavLinkClick(); }}>Course</NavLink>
              </li>
              <li className="nav-item me-5 fs-4 fw-bold mt-4">
                <NavLink className="nav-link" to='/register' onClick={() => { navigate('/register'); handleNavLinkClick(); }}>Register</NavLink>
              </li>
             
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Topbar;

