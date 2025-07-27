import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const githubProvider = new GithubAuthProvider();
export const googleProvider = new GoogleAuthProvider();
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub=()=>{
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
});
        return()=>{
            unsubscribe();
        }
    },[])
    const valueInfo={createUser,signIn,user,logOut,signInWithGoogle,signInWithGithub}
    return (
        <div>
            <AuthContext.Provider value={valueInfo}>
             {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;