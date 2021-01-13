import {firebase} from "@firebase/app"
import "@firebase/firestore"

const config = {
  apiKey: "AIzaSyBXXL-Aac6ey_32Tz1u7YeusmqYaDdKmCs",
  authDomain: "bulma-project.firebaseapp.com",
  databaseURL: "https://bulma-project.firebaseio.com",
  projectId: "bulma-project",
  storageBucket: "bulma-project.appspot.com",
  messagingSenderId: "1047454154993",
  appId: "1:1047454154993:web:759acdab34858af3"
};

export const db = firebase.initializeApp(config).firestore()
