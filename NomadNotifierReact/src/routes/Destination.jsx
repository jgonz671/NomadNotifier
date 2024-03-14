import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
/*
Destination displays a menu with six destination choices
setDestination records choice upon selection
people and destination variables are forwarded to next state
1. Next: takes user to hotel page
2. Back: takes user to travel page
*/
export default function Destination() {
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const { people } = location.state || { people: 1 }; 

    const destinations = [
        { id: 1, name: 'New York, United States' },
        { id: 2, name: 'Paris, France' },
        { id: 3, name: 'Tokyo, Japan' },
        { id: 4, name: 'New Dehli, India' },
        { id: 5, name: 'London, United Kingdom' },
        { id: 6, name: 'Sydney, Australia' }
    ];

    const handleNext = () => {
        navigate('/hotel', { state: { people, destination } }); 
    };

    const handleBack = () => {
        navigate('/Travel', { state: { people, destination } }); 
    };

    return (
        <div className="web-container">
            <h2>Where would you like to visit?</h2>
            <label htmlFor="places">Select a destination:</label>
            <select
                id="places"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            >
                <option value="">Choose an option:</option>
                {destinations.map((dest) => (
                    <option key={dest.id} value={dest.name}>
                        {dest.name}
                    </option>
                ))}
            </select>
            <br />
            <button className="back-button" onClick={handleBack}>Back</button>
            <button className="next-button" onClick={handleNext} disabled={!destination}>Next</button>
        </div>
    );
}
