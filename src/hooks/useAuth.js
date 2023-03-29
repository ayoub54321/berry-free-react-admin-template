import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { auth } from "firbaseConfig/Firebase";
import { indexedDBLocalPersistence,setPersistence } from "firebase/auth"; 
import { redirect } from 'react-router-dom;'

export const useAuth = () => {

    const userID = useSelector((state) => state.authentication.uid);
    const [currentUser, setCurrentUser] = useState();
    
    useEffect(() => {
            if (userID) {
                setCurrentUser(userID);
                setPersistence(auth, indexedDBLocalPersistence)
                .then(() => {
                    return currentUser ?  null : redirect('/pages/login/login3') ;
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
            } 
            else {
                setCurrentUser(null);
            }
    },[]);

    return currentUser;
};




