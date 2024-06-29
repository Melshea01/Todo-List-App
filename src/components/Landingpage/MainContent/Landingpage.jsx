import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import Button from 'react-bootstrap/Button' 
import './Landingpage.css';


export default function Landingpage() {
  return(
    <div className="Landingpage">
    <Navbar/>
      <main role="main" className='home-main App-header d-flex align-items-center justify-content-center text-center flex-grow-1'>
          <h1 className="cover-heading display-4">Plan all your <span className="highlight">task</span> to finish on time</h1>
          <p className="lead">Use Bright Task to enlight your task</p>
          <p className="lead">
            <Button style={{ backgroundColor: '#5247FE', color: 'white' }}>Start now</Button>
          </p>
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/homeBackground.png`}
              alt="Background"
              className="background-image"
            />
          </div>
        </main>
    <footer className="footer">
      <p>&copy; 2024 Company Name. All rights reserved.</p>
    </footer>
  </div>
  );
}