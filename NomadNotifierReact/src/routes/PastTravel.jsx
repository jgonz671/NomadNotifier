import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import '../styles/HomePage.css';

function PastTravel () {
    const navigate = useNavigate();

    return (
        <div className="HomePage">
                <div className = "home_buttons">
                    <button className="homepage_btn homepage-homepage_btn" onClick={() => navigate('/')}>
                        <Typewriter
                            onInit={(typewriter) => {
                            typewriter
                            .changeDelay(60)
                            .typeString("Nomad Notifier.")
                            .start();
                            }}
                        />
                    </button>
                </div>

             <div>
                <h2>Past Travels</h2>
            </div>
        </div>

    )
}

export default PastTravel;
