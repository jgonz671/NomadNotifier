import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, query, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebase";


const db = getFirestore(app);


export default function Destination() {
   const [attractions, setAttractions] = useState([]);
   const [selectedAttraction, setSelectedAttraction] = useState('');
   const navigate = useNavigate();
   const location = useLocation();


   const { people } = location.state || { people: 1 };


   useEffect(() => {
       const fetchAttractions = async () => {
           try {
               const q = query(collection(db, "attractions"));
               const querySnapshot = await getDocs(q);
               const attractionsArray = [];
               querySnapshot.forEach((doc) => {
                   attractionsArray.push({
                       id: doc.id,
                       ...doc.data(),
                   });
               });
               setAttractions(attractionsArray);
           } catch (error) {
               console.error('Error fetching attractions:', error); //catching my errors
           }
       };


       fetchAttractions();
   }, []);


   const handleNext = () => {
       const selectedAttractionDetails = attractions.find(attraction => attraction.id === selectedAttraction); //uses user selected attraction properties
       navigate('/hotel', { state: { people, selectedAttraction: selectedAttractionDetails } });
   };


   return (
       <div className="web-container">
           <h2>Where would you like to visit?</h2>
           <label htmlFor="places">Select a destination:</label>
           <select
               id="places"
               value={selectedAttraction}
               onChange={(e) => setSelectedAttraction(e.target.value)}
           >
               <option value="">Choose an option:</option>
               {attractions.map((attraction) => (
                   <option key={attraction.id} value={attraction.id}>
                       {`${attraction.city}, ${attraction.country}`}
                   </option>
               ))}
           </select>
           <br />
           <button className="next-button" onClick={handleNext} disabled={!selectedAttraction}>Next</button>
       </div>
   );
}
