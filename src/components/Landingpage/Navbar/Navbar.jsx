import React from 'react'
import Button from 'react-bootstrap/Button' 
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <div className='logo-container'>
          <img src={process.env.PUBLIC_URL + "/assets/svg/logoBrightTask.svg"} alt="Logo" />
            <p><span className="highlight">Bright</span>Task</p>
        </div >
      </div>
      <ul className="navbar-links">
        <div className='navbar-button'>
        <Link to="/login">          
          <Button variant="text"  style={{ backgroundColor: '#F0F0F0' , color: '#5247FE'}}>Login</Button> 
        </Link>
        <Link to="/">
          <Button variant="text"style={{ backgroundColor: '#5247FE', color: 'white' }}>Sign Up</Button>
        </Link>
        </div>
      </ul>
    </nav>
  )
}

