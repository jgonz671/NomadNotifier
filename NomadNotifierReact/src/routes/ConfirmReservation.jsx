import React from 'react';

const ConfirmReservation = ({ travelChoice, roomNumberChoice, destinationChoice, hotelChoice }) => {
    return (
        <div>
            <h1>Confirm Reservation</h1>
            <p>Travel: {travelChoice}</p>
            <p>Room Number: {roomNumberChoice}</p>
            <p>Destination: {destinationChoice}</p>
            <p>Hotel: {hotelChoice}</p>
            <button>Confirm</button>
        </div>
    );
};

export default ConfirmReservation;