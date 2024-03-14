import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ConfirmReservation.css'
/*
ConfirmReservation first displays user data: 
1. # of people 2. Destination 3. Hotel 4. Rooms
It forwards these to the attraction page. 
Users may proceed to the attraction page with the confirm button
or
Users may return to homepage, resetting trip.
*/
export default function ConfirmReservation(){
    const location = useLocation(); 
    const { people, destination, hotel, number } = location.state || {}; 

    const handleNext = () => {
        navigate('/attraction', { state: { people, destination, hotel, number } });
    };

    const navigate = useNavigate();

    return (
        <div className="web-container">
            <h2>Confirm Reservation</h2>
            <p>Number of people going: <strong>{people}</strong></p>
            <p>Where we're headed: <strong>{destination}</strong></p>
            <p>Where we're staying: <strong>{hotel}</strong></p>
            <p>How many rooms we have: <strong>{number}</strong></p>
            <button className="next-button" onClick={handleNext}>Confirm</button> 

            <div className='HomeButton'>
            <button className="returnHomePageButton" onClick={() => navigate('/')}>return Home</button>
            </div>
        </div>
    );
};


