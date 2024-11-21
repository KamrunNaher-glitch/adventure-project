import React, { createContext, useEffect, useState } from 'react';
 export const authContext = createContext();
 import
  {  createUserWithEmailAndPassword,
     signOut,
      GoogleAuthProvider,
      signInWithEmailAndPassword,
       signInWithPopup,
        onAuthStateChanged, 
        updateProfile} from "firebase/auth";
 import auth from "../../firebase/firebase.config";
const AuthProvider = ({routes}) => {
    const googleProvider = new GoogleAuthProvider() 
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const handleRegister = (email,password) =>{
       return  createUserWithEmailAndPassword(auth, email, password)
        
      
    };
    const handleLogin =(email,password) =>{
       return  signInWithEmailAndPassword(auth, email, password);
        
    };
    const handleLogout = () => {
        signOut(auth)
    };
    const handleGoogleLogin = () =>{
      return  signInWithPopup(auth,googleProvider)
    }
    const manageProfile = (name,image) =>{
        return updateProfile(auth.currentUser,{
             displayName:name,photoURL:image
         })
       }
     

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
        manageProfile,
        user,
        setUser,
        loading 
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
              }
              setLoading(false)

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