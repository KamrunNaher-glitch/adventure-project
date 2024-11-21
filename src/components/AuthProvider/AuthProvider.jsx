import React, { createContext, useEffect, useState } from 'react';
 export const authContext = createContext();
 import
  {  createUserWithEmailAndPassword,
     signOut,
      GoogleAuthProvider,
      signInWithEmailAndPassword,
       signInWithPopup,
        onAuthStateChanged } from "firebase/auth";
 import auth from "../../firebase/firebase.config";
const AuthProvider = ({routes}) => {
    const googleProvider = new GoogleAuthProvider() 
    const [user,setUser] = useState(null)

    const handleRegister = (email,password) =>{
        createUserWithEmailAndPassword(auth, email, password)
      
    };
    const handleLogin =(email,password) =>{
        signInWithEmailAndPassword(auth, email, password);
        
    };
    const handleLogout = () => {
        signOut(auth)
    };
    const handleGoogleLogin = () =>{
        signInWithPopup(auth,googleProvider)
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{

            return ()=>{
               unsubscribe() 
            }

            

        })
    },[])

    return (
        <div>
            <authContext.Provider value={authInfo}>
               {
                routes
               } 
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;