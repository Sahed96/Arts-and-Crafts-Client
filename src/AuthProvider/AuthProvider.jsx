/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, GithubAuthProvider, signOut,updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
 
    

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update profile
    const profileUpdate = (name, photo) => {
             updateProfile(auth.currentUser, {
             displayName: name, 
             photoURL: photo
             
          })
          .then(()=>{
            setUser( {...user,displayName: name, photoURL: photo})
          })
    }



    // userLogin
    const userLogin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // signOut
    const logout = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }
    

    // googleLogin
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }
    // githubLogin
    const gitHubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
        
    }

    // observer
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
                setUser(currentUser)
                setLoading(false)
             
          });
          return () =>{
            unsubscribe();  
        }
          
    },[])

    const Values = { 
        createUser,
        userLogin,
        user,
        googleLogin,
        gitHubLogin,
        logout,
        loading,
        profileUpdate
        
    }
    
    return (
        <AuthContext.Provider value={Values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;