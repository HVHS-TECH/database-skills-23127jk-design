/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8h8LLKS8QGQ9SOUJWneUQrbzK_tZBLW8",
  authDomain: "jason-kim-12comp.firebaseapp.com",
  databaseURL: "https://jason-kim-12comp-default-rtdb.firebaseio.com",
  projectId: "jason-kim-12comp",
  storageBucket: "jason-kim-12comp.firebasestorage.app",
  messagingSenderId: "660928520644",
  appId: "1:660928520644:web:524757d3aa7ff1c46a0491"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
