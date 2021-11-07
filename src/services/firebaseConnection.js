import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyCflx30VDeCHClkMdMNKq8DRz77SK-DPi4",
  authDomain: "sistema-chamados-react-f8831.firebaseapp.com",
  projectId: "sistema-chamados-react-f8831",
  storageBucket: "sistema-chamados-react-f8831.appspot.com",
  messagingSenderId: "416915495824",
  appId: "1:416915495824:web:604938718a20c26891b115",
  measurementId: "G-LCM2NYKQ4K"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;