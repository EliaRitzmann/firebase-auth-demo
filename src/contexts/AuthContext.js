import { createContext, useContext, useEffect, useState } from "react";

//Firebase connection
import {auth} from "../api/firebase"

//Firebase functions
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    signInWithRedirect,
    sendPasswordResetEmail
} from "firebase/auth"

//Create Context
const userAuthContext = createContext();

//Provider
const googleProvider = new GoogleAuthProvider();

//Custom Provider parameters (none)

//Custom Provider scopes (none)

export function useAuth(){
    return useContext(userAuthContext);
}

export function UserAuthContextProvider({children}){
    const [user, setUser] = useState({});

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function googleLogin(){
        return signInWithRedirect(auth, googleProvider);
        
    }


    function logOut(){
        return signOut(auth)
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            if(currentUser){
                setUser(currentUser);
            }
            else{
                setUser(null)
            }
            
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return(
        <userAuthContext.Provider value={{user, signup, login, logOut, googleLogin, resetPassword}}>
            {children}
        </userAuthContext.Provider>
    )
}