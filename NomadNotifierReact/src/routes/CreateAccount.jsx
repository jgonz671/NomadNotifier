import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/CreateAccount.css';

export default function CreateAccountPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleCreateAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, username, password)
            .then((userLogin) => {
                console.log(userLogin);
                setUsername('');
                setPassword('');
                alert('Account creation successful. You are successfully logged in.');
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
                alert(error.message);
            });
    };

    return (
        <div className="create-container">
            <h2>Create New Account</h2>
            <form onSubmit={handleCreateAccount} className="create-form">
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