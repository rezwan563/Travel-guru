import { createContext, useEffect, useState } from "react";
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser]  = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, passoword);
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name, photourl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl
        })
    }



    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })
        return () =>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        emailLogin,
        googleLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;