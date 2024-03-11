import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";
import { auth } from './firebase'; 
import { useLocation, useNavigate } from 'react-router-dom';
import Nomad from '../src/assets/Nomad-Walker.jpg';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const listen = auth.onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      if (!!user && location.pathname === '/sign-in') {
        navigate('/auth-details');
      } else if (!user && location.pathname === '/auth-details') {
        navigate('/sign-in');
      }
    });

    return () => listen(); 
  }, [navigate, location.pathname]);

  const handleLoginButtonClick = () => {
    if (isSignedIn) {
      navigate('/auth-details');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="typewriter-container">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(60)
                .typeString("Create. Plan. Enjoy.")
                .pauseFor(1000)
                .deleteAll()
                .changeDelay(60)
                .typeString("Nomad Notifier.")
                .start();
            }}
          />
        </div>
        
        {/*</div>
        <div className="Images">
         <img src={Nomad} alt="" /> 
          </div> */}

        <div className="buttons">
          <button className="btn plan-travel-btn" onClick={() => navigate('/Travel')}>Plan a Travel</button>
          <button className="btn signin-btn" onClick={handleLoginButtonClick}>Login</button>          
          <button className="btn past-travel-btn" onClick={() => navigate('/past-travel')}>Past Travels</button>
          <button className="btn calender-btn" onClick={() => navigate('/Calendar')}>Calendar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
