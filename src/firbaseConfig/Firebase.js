import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup,inMemoryPersistence,setPersistence} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyABxCLMDHtgdzpRxXswHPwngnxl8kALbyc",
    authDomain: "react-analytics-1504e.firebaseapp.com",
    projectId: "react-analytics-1504e",
    storageBucket: "react-analytics-1504e.appspot.com",
    messagingSenderId: "1056498683163",
    appId: "1:1056498683163:web:47c2c3e2584a303e90d7be"
};

console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

setPersistence(auth,inMemoryPersistence)
  .then(() => {
    return signInWithPopup(auth, googleProvider);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  });


// signOut(auth).then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });

// const useAuth = () => {
//     const [currentUser, setCurrentUser] = useState({});
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//             setCurrentUser(user);
//             } else {
//             setCurrentUser(null);
//             }
//         });
//     });
//     return currentUser;
// };


