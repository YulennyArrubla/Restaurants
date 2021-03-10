import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA56iUH5t6rfOwpcM9aA7l9It37QUQEyqE",
    authDomain: "restaurants-b7a26.firebaseapp.com",
    projectId: "restaurants-b7a26",
    storageBucket: "restaurants-b7a26.appspot.com",
    messagingSenderId: "240887833166",
    appId: "1:240887833166:web:686474b40787a47975591f"
}

export const firebaseApp= firebase.initializeApp(firebaseConfig)