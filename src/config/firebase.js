import Firebase from 'firebase'
let appFirebase = Firebase.initializeApp({
    apiKey: "AIzaSyALV57J1ee8o_7GYA6-EcdI6DhaG-ANz9A",
    authDomain: "miinventario-675b5.firebaseapp.com",
    databaseURL: "https://miinventario-675b5.firebaseio.com",
    projectId: "miinventario-675b5",
    storageBucket: "",
    messagingSenderId: "256454650397",
    appId: "1:256454650397:web:6379443e142347de"
})

export const dbFirebase = appFirebase.database()