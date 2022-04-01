import firebase from 'firebase'
// require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAYXFpVfncO1uGAdfeQ3jLianJLNbVxKfQ",
  authDomain: "e-library-d5916.firebaseapp.com",
  projectId: "e-library-d5916",
  storageBucket: "e-library-d5916.appspot.com",
  messagingSenderId: "986153825509",
  appId: "1:986153825509:web:0247fa6c0f59a4bbd9500c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  export default firebase.firestore();
