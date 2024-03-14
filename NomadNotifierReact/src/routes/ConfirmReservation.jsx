import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/ConfirmReservation.css';

export default function ConfirmReservation() {
    const location = useLocation();
    const navigate = useNavigate();
    const { people, destination, hotel, number, attraction } = location.state || { people: 1, destination: "", hotel: "", number: 1, attraction: "" };
    const [username, ] = useState(''); 

    const handleNext = async () => {
        try {
            // Get the number of trips for this user
            const tripQuery = query(collection(db, 'pasttravels'), where('username', '==', username));
            const tripSnapshot = await getDocs(tripQuery);
            const tripCount = tripSnapshot.size + 1; 


            const documentId = `${username} #${tripCount}`;

            // Save the trip information to Firestore
            await addDoc(collection(db, 'pasttravels'), {
                attendees: people,
                destination: `${destination.city}, ${destination.country}`,
                hotel: hotel,
                attraction: attraction,
                username: username,
                documentId: documentId
            });

            console.log('Trip information saved to Firestore');
            alert('You\'re all set! Enjoy your trip!');
            setTimeout(() => {
                navigate('/');
            }, 200);
        } catch (error) {
            console.error('Error saving trip information:', error);
            alert('Error saving trip information. Please try again.');
        }
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
    );
}