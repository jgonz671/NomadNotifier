import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
      <div className="typewriter-container">
        <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Create. Plan. Enjoy.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Nomad Notifier.")
                .start();
            }}
          />
        </div>
        <div className="buttons">
        <button className="btn plan-travel-btn" onClick={() => navigate('/error')}>Plan a Travel</button>
          <button className="btn login-btn" onClick={() => navigate('/error')}>Login</button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
