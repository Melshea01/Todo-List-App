import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from './components/Navbar.jsx';
import Button from 'react-bootstrap/Button' 


function App() {
  return (
    <div className="App"> {/* Utilisation de d-flex et flex-column pour créer une disposition en colonne et s'étirer sur toute la hauteur */}
      <Navbar />
      <header className="App-header d-flex align-items-center justify-content-center text-center flex-grow-1"> {/* Utilisation de d-flex, align-items-center, justify-content-center, text-center et flex-grow-1 */}
        <div className="cover-container" >
        <main role="main">
            <h1 className="cover-heading display-4">Plan all your <span class="highlight">task</span> to finish on time</h1>
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
        </div>
      </header>
      <footer className="footer">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
