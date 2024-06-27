import React from 'react'
import Button from 'react-bootstrap/Button' 
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <div className='logo-container'>
          <img src={process.env.PUBLIC_URL + "/assets/svg/logoBrightTask.svg"} alt="Logo" />
          <a href="#home"> <span class="highlight">Bright</span>Task</a>
        </div >
      </div>
      <ul className="navbar-links">
        <div className='navbar-button'>
          <Button variant="text"  style={{ backgroundColor: '#F0F0F0' , color: '#5247FE'}}>Login</Button>
          <Button variant="text"style={{ backgroundColor: '#5247FE', color: 'white' }}>Sign Up</Button>
        </div>
      </ul>
    </nav>
  )
}

