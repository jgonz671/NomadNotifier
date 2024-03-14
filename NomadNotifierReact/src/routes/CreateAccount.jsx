import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase'; // Assuming you have a variable 'db' for the Firestore instance
import '../styles/CreateAccount.css';

export default function CreateAccountPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, username, password);
            const user = userCredential.user;
            
            // Save user info to Firestore
            await setDoc(doc(db, 'users', `${firstName} ${lastName}`), {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            });

            console.log('User information saved to Firestore');
            setUsername('');
            setPassword('');
            setFirstName('');
            setLastName('');
            alert('Account creation successful. You are successfully logged in.');
            setTimeout(() => {
                navigate('/');
            }, 800);
        } catch (error) {
            console.error('Error creating account:', error.message);
            alert(error.message);
        }
    };

    return (
        <div className="create-container">
            <h2>Create New Account</h2>
            <form onSubmit={handleCreateAccount} className="create-form">
                <div>
                    <label htmlFor="first-name">First Name:</label>
                    <input
                        type="text"
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="last-name">Last Name:</label>
                    <input
                        type="text"
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="username">New Email:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">New Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Enter</button>
            </form>
        </div>
    );
}
