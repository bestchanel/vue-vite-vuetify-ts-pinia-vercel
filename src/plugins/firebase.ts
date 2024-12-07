import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBO0u6Y_yF5vh5dQ_TniEhInOCAFb7p5ok",
    authDomain: "vue-vite-ts-vuetify-woraprat.firebaseapp.com",
    projectId: "vue-vite-ts-vuetify-woraprat",
    storageBucket: "vue-vite-ts-vuetify-woraprat.firebasestorage.app",
    messagingSenderId: "526722469931",
    appId: "1:526722469931:web:d7ef9c899ff419307e1a6e",
    measurementId: "G-HT4GTHTFN1"
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const db = firebase.firestore()

export { storage, db }