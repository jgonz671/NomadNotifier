import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Destination() {
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();

    const destinations = [
        { id: 1, name: 'New York, United States' },
        { id: 2, name: 'Paris, France' },
        { id: 3, name: 'Tokyo, Japan' },
        { id: 4, name: 'New Dehli, India' },
        { id: 5, name: 'London, United Kingdom' },
        { id: 6, name: 'Sydney, Australia' }
    ];

    const handleNext = () => {
        navigate('/hotel', { destination }); 
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
            <button className="next-button" onClick={handleNext} disabled={!destination}>Next</button>
        </div>
    );
}
