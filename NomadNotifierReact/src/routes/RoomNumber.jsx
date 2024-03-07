import React, { useState } from 'react';


export default function PlanTravel() {
   const [number, setNumber] = useState(1);



   return (
       <div className="web-container">
           <h2>How many rooms do you need?</h2>
           <label htmlFor="rooms">Select the number of rooms:</label>
           <select id="rooms" value={number} onChange={e => setNumber(e.target.value)}>
               {Array.from({ length: 10 }, (_, i) => (
                   <option key={i + 1} value={i + 1}>{i + 1}</option>
               ))}
           </select>
           <br />
       </div>
   );
}
