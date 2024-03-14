import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebase";


const db = getFirestore(app);


export default function Hotel() {
   const [hotels, setHotels] = useState([]);
   const [selectedHotel, setSelectedHotel] = useState('');
   const navigate = useNavigate();
   const location = useLocation();


   const { people, selectedAttraction } = location.state || { people: 1, selectedAttraction: {} };


   useEffect(() => {
       console.log(selectedAttraction); //test statement to see if selectedAttraction is being passed
       const fetchHotels = async () => {
           if (selectedAttraction.city) {
               try {
                   const q = query(collection(db, "hotels"), where("city", "==", selectedAttraction.city));
                   const querySnapshot = await getDocs(q);
                   const hotelsArray = [];
                   querySnapshot.forEach((doc) => {
                       console.log("Hotel Data: ", doc.data());  //making sure objeect is being passed
                       hotelsArray.push({
                           id: doc.id,
                           ...doc.data(),
                       });
                   });
                   setHotels(hotelsArray);
               } catch (error) {
                   console.error('Error fetching hotels:', error); //error handling stuff
               }
           }
       };


       fetchHotels();
   }, [selectedAttraction.city]);


   const handleNext = () => {
       navigate('/roomnumber', { state: { people, destination: selectedAttraction, hotel: selectedHotel } });
   };
   console.log(hotels);


   return (
       <div className="web-container">
           <h2>Where would you like to stay in {selectedAttraction.city}?</h2>
           <label htmlFor="stays">Select a stay:</label>
           <select
               id="stays"
               value={selectedHotel}
               onChange={(e) => setSelectedHotel(e.target.value)}
           >
               <option value="">Choose an option:</option>
               {hotels.map((hotel) => (
                   <option key={hotel.id} value={hotel.id}>
                       {hotel.id}
                   </option>
               ))}
           </select>
           <br />
           <button className="next-button" onClick={handleNext} disabled={!selectedHotel}>Next</button>
       </div>
   );
}
