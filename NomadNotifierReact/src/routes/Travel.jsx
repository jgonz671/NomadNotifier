import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function PlanTravel() {
   const [people, setPeople] = useState(1);
   const navigate = useNavigate();


   const handleNext = () => {
       navigate('/destination', { state: { people } });
   };

   const handleBack = () => {
    navigate('/', { state: { people } });
   };

   return (
       <div className="web-container">
           <h2>Plan Your Travel</h2>
           <label htmlFor="people">How many people?</label>
           <select id="people" value={people} onChange={e => setPeople(e.target.value)}>
               {Array.from({ length: 10 }, (_, i) => (
                   <option key={i + 1} value={i + 1}>{i + 1}</option>
               ))}
           </select>
           <br />
           <button className="back-button" onClick={handleBack}>Back</button>
           <button className="next-button" onClick={handleNext}>Next</button>
       </div>
   );
}
