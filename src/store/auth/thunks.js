import { loginWithEmailPassword, registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { logoutFirebase } from "../../firebase/providers";

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = (displayName, email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerUserWithEmailAndPassword(displayName, email, password);
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}

export const startLoginWithEmailPassword = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword(email, password);
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }
}