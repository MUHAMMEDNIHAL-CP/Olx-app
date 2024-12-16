import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCcmUo_TqoQftjuEJtWfJDAilGQJnJv8aU",
    authDomain: "olx-clone-37f81.firebaseapp.com",
    projectId: "olx-clone-37f81",
    storageBucket: "olx-clone-37f81.firebasestorage.app",
    messagingSenderId: "105525626872",
    appId: "1:105525626872:web:7b5702694b38d83648b80d",
    measurementId: "G-6JR8Z80YYM"
  };

  export default firebase.initializeApp(firebaseConfig)