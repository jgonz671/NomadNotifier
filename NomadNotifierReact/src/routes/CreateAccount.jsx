// import React, { useState } from 'react';
// import '../styles/CreateAccount.css'; 

// export default function CreateAccountPage() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleCreateAccount = (e) => {
//         e.preventDefault();
//         console.log('Login:', username, password);
//     };
//     return (
//         <div className="create-container">
//             <h2>Create New Account</h2>
//             <form onSubmit={handleCreateAccount} className="create-form">
//                 <div>
//                     <label htmlFor="username">New Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">New Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Enter</button>
//             </form>
//         </div>
//     );
// }
import React from 'react';
import '../styles/CreateAccount.css';

const CreateAccount = () => {
    return (
        <div>
            <h2>Create New Account</h2>
        </div>
    );
}

export default CreateAccount;