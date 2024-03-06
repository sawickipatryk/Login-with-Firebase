// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnmr57rAIiAFyNl_1WgkBOz8ml6CxHmnk',
  authDomain: 'login-react-tutorial.firebaseapp.com',
  projectId: 'login-react-tutorial',
  storageBucket: 'login-react-tutorial.appspot.com',
  messagingSenderId: '835959469011',
  appId: '1:835959469011:web:cc2d770de018556c167526'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
