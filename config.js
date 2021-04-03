import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBeNHynBDtgIvLWIZZWtr0LlwlqiU8UYAU",
    authDomain: "storyhub-ff2a1.firebaseapp.com",
    projectId: "storyhub-ff2a1",
    storageBucket: "storyhub-ff2a1.appspot.com",
    messagingSenderId: "429853824550",
    appId: "1:429853824550:web:0a057bd1e6db0a71acb8e7"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();