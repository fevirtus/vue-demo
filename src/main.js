import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHuthRouKHxMdAaaYRTwXMfdLawblef2U",
    authDomain: "fir-vue-a5262.firebaseapp.com",
    projectId: "fir-vue-a5262",
    storageBucket: "fir-vue-a5262.appspot.com",
    messagingSenderId: "297364719328",
    appId: "1:297364719328:web:d3f4e0fe8d30b9b5b8b285",
    measurementId: "G-X8HD1Z49TY"
  };
firebase.initializeApp(firebaseConfig);

createApp(App).mount('#app')
