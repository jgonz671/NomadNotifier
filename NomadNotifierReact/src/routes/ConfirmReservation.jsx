import React from 'react';

const ConfirmReservation = ({ people, destination, hotel, number }) => {
    return (
        <div className="web-container">
            <h1>Confirm Reservation</h1>
            <p>How many people are going: {people}</p>
            <p>City visiting: {destination}</p>
            <p>Hotel Name: {hotel}</p>
            <p>Number of Rooms: {number}</p>
            <button>Confirm</button>
        </div>
    );
};

export default ConfirmReservation;