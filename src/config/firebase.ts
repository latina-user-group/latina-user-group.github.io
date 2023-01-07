// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCxMJCxGgQ3uCVR3Ys5R-mDt-GLvwE96YY',
  authDomain: 'latina-user-group.firebaseapp.com',
  projectId: 'latina-user-group',
  storageBucket: 'latina-user-group.appspot.com',
  messagingSenderId: '27142445450',
  appId: '1:27142445450:web:40c1ddb8f451e6a9ab5073',
  measurementId: 'G-1B9YN6C6V9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
