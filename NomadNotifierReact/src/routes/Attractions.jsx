import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebase";


const db = getFirestore(app);


export default function Attraction() {
   const [attractions, setAttractions] = useState([]);
   const [selectedAttraction, setselectedAttraction] = useState('');
   const navigate = useNavigate();
   const location = useLocation();


   const { people, destination, hotel, number } = location.state || { people: 1, destination: '', hotel: '', number: 1 };


   useEffect(() => {
       console.log(destination); //test statement to see if destination is being passed
       const fetchAttractions = async () => {
           if (destination.city) {
               try {
                   const q = query(collection(db, "attractions"), where("city", "==", destination.city));
                   const querySnapshot = await getDocs(q);
                   const attractionsArray = [];
                   querySnapshot.forEach((doc) => {
                       console.log("Attraction Data: ", doc.data());  //making sure objeect is being passed
                       attractionsArray.push({
                           id: doc.id,
                           ...doc.data(),
                       });
                   });
                   setAttractions(attractionsArray);
               } catch (error) {
                   console.error('Error fetching attractions:', error); //error handling stuff
               }
           }
       };


       fetchAttractions();
   }, [destination.city]);


   const handleNext = () => {
       navigate('/confirm-reservation', { state: { people, destination, hotel, number, attraction: selectedAttraction } });
   };
   console.log(attractions);


   return (
       <div className="web-container">
           <h2>What would you like to do in {destination.city}?</h2>
           <label htmlFor="attractions">Select an attraction:</label>
           <select
               id="attractions"
               value={selectedAttraction}
               onChange={(e) => setselectedAttraction(e.target.value)}
           >
               <option value="">Choose an option:</option>
               {attractions.map((attraction) => (
                   <option key={attraction.id} value={attraction.id}>
                       {attraction.id}
                   </option>
               ))}
           </select>
           <br />
           <button className="next-button" onClick={handleNext} disabled={!selectedAttraction}>Next</button>
       </div>
   );
}
