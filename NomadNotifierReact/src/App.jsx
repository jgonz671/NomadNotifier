import React from 'react';
import Typewriter from "typewriter-effect";
import './App.css';

function App() {
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
                .typeString("Nomad Notifier")
                .start();
            }}
          />
        </div>
        <div className="buttons">
          <button className="btn plan-travel-btn">Plan a Travel</button>
          <button className="btn login-btn">Login</button>
        </div>
      </header>
    </div>
  );
}

export default App;
