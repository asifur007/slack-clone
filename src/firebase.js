import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHyzdf3imINkBgbnHhOHBxmf94F4cQmmI",
    authDomain: "slack-clone-c212c.firebaseapp.com",
    projectId: "slack-clone-c212c",
    storageBucket: "slack-clone-c212c.appspot.com",
    messagingSenderId: "946299536927",
    appId: "1:946299536927:web:7e8ecda56fbe17f529372a"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();



  export {db, auth, provider};