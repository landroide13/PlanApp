import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyA-zlcwdvQrDArDhEYW-rLzG1lkMGwHyBU",
  authDomain: "plan-app-ac4a2.firebaseapp.com",
  databaseURL: "https://plan-app-ac4a2.firebaseio.com",
  projectId: "plan-app-ac4a2",
  storageBucket: "plan-app-ac4a2.appspot.com",
  messagingSenderId: "296685518136"
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;