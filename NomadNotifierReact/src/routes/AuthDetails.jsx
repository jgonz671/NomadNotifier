import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import "../styles/AuthDetails.css";

export default function AuthDetails(){
  const [authUser, setAuthUser] = useState(null);

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
          <button className="auth-btn" onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

