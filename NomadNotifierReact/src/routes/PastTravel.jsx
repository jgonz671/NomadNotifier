import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import '../styles/HomePage.css';

function PastTravel () {
    const navigate = useNavigate();

    return (
        <div className="pastTravel-to-homepage">
                <div className = "home_button">
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
            <h2>Past Travels</h2>
        </div>

    )
}

export default PastTravel;
