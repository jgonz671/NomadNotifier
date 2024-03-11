import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/SignIn.css';


export default function LoginPage() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();


   const handleLogin = (e) => {
       e.preventDefault();
       console.log('Login:', username, password);
       signInWithEmailAndPassword(auth, username, password)
       .then((userLogin) => {
       console.log(userLogin);
       setUsername('');
       setPassword('');
       alert('Login successful. Redirecting...');
       setTimeout(() => {
       navigate('/auth-details'); 
       }, 800);
       })
       .catch((error) => {
           console.log(error);
           alert('Invalid login credentials.');
       });
   };


   const handleCreateAccount = () => {
       navigate('/create-account');
   };


   return (
       <div className="login-container">
           <h2>Login</h2>
           <form onSubmit={handleLogin} className="login-form">
               <div>
                   <label htmlFor="username">Email:</label>
                   <input
                       type="text"
                       id="username"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                   />
               </div>
               <div>
                   <label htmlFor="password">Password:</label>
                   <input
                       type="password"
                       id="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                   />
               </div>
               <button type="submit">Enter</button>
           </form>
           <button onClick={handleCreateAccount} className="create-account-btn">Create New Account</button>
       </div>
   );
}
