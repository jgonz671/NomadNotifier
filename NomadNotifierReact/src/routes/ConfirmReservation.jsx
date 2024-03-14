import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ConfirmReservation.css'
/*
ConfirmReservation first displays user data: 
1. # of people 2. Destination 3. Hotel 4. Rooms 5. Attraction
It forwards these to the attraction page. 
Users may proceed to the attraction page with the confirm button
or
Users may return to homepage, resetting trip.
*/
export default function ConfirmReservation(){
    const location = useLocation(); 
    const navigate = useNavigate();
    const { people, destination, hotel, number, attraction } = location.state || { people: 1, destination: "", hotel: "", number: 1, attraction: ""}; 

    const handleNext = () => {
        // navigate('/attraction', { state: { people, destination, hotel, number, attraction } });
        alert('You\'re all set! Enjoy your trip!')
        setTimeout(() => {
        navigate('/'); 
        }, 200);
    };

    return (
        <div className="web-container">
            <h2>Confirm Reservation</h2>
            <p>Number of people going: <strong>{people}</strong></p>
            <p>Where we're headed: <strong>{destination.city}, <strong>{destination.country}</strong></strong></p>
            <p>Where we're staying: <strong>{hotel}</strong></p>
            <p>How many rooms needed: <strong>{number}</strong></p>
            <p>Where we're planning to visit: <strong>{attraction}</strong></p>
            <div className='action-btn'>
                <button className="returnHomePageButton" onClick={() => navigate('/')}>Cancel</button>
                <button className="next-button" onClick={handleNext}>Confirm</button> 
            </div>
        </div>
        // <h2>Test</h2>
    );
};


