import firebase from "firebase"
import "firebase/firestore"

if(!firebase.apps.length) {
    firebase.initializeApp({
        api_Key: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
        alth_Domain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        project_Id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase