import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email, uid} = result.user;
        return {
            ok: true,
            displayName, email, uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        return {
            ok: false,
            errorMessage,
            errorCode
        }
    }
}


export const registerUserWithEmailAndPassword = async(displayName, email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(result.user)
        const { uid } = result.user;

        await updateProfile(FirebaseAuth.currentUser, displayName);

        return {
            ok:true,
            uid, displayName, email, password
        }
    } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        return {
            ok:false,
            errorMessage
        }
    }
}



export const loginWithEmailPassword = async(email, password) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(result);
        const { displayName, uid } = result.user;
        return {
            ok:true,
            displayName, uid, email
        }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok:false,
            errorMessage
        }
    }
}


export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}

