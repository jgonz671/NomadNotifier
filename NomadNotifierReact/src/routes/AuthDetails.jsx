import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import "../styles/AuthDetails.css";

export default function AuthDetails(){
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully signed out");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="web-container">
      {authUser ? (
        <>
          <p>{`Signed in as ${authUser.email}`}</p>
          <div className="action-btn">
            <button className="button home-btn" onClick={() => navigate('/')}>Home</button>
            <button className="button auth-btn" onClick={userSignOut}>Sign Out</button>
          </div>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

