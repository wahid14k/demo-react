import {initializeApp} from 'firebase/app'
import {getFirestore,doc ,getDoc,setDoc} from 'firebase/firestore'
import {getAuth,signInWithPopup,GoogleAuthProvider }from 'firebase/auth'

const config = {
    apiKey: "AIzaSyBKVkgD4XoKA7nza-UCmo5lRnnTtnNZhf8",
    authDomain: "crwn-14k.firebaseapp.com",
    projectId: "crwn-14k",
    storageBucket: "crwn-14k.appspot.com",
    messagingSenderId: "200172195445",
    appId: "1:200172195445:web:c2d3a9864106cbb410f23c",
    measurementId: "G-Q9TJFC0T98"
  }


export const createUserProfileDocument = async (userAuth,additionalData) =>{
  if(!userAuth) return;
  
  const userRef =  doc(firestore,'users',`${userAuth.uid}`)
  const snapShot =await getDoc(userRef)

  if(!snapShot.exists()){
    const {displayName,email} =userAuth;
    const createdAt = new Date()

    try{
        await setDoc(userRef,{
          displayName,
          email,
          createdAt,
          ...additionalData
        })
    }
    catch(error){
console.log('error',error.message)
    }
  }
  return userRef
  
}


const firebase = initializeApp(config)

export const auth = getAuth(firebase)
export const firestore = getFirestore()

const provider = new GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => signInWithPopup (auth,provider)


