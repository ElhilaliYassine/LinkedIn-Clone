import firebase from 'firebase/compat'
const firebaseConfig = {
    //firebase config
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };