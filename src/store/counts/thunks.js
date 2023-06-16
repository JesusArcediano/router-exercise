import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addEmptyNote, savingNewNote, setNotes } from "./countsSlice";
import { loadNotes } from "../../helpers/loadNotes";


export const startNewMovement = (newMovement) => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        console.log(uid)
         
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newMovement);
        
        newMovement.id = newDoc.id;
            
        dispatch(savingNewNote());
        dispatch(addEmptyNote(newMovement));
    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}


// export const startSaveNote = () => {
//     return async(dispatch, getState) => {

//         dispatch(setSaving());

//         const { uid } = getState().auth;
//         const {active:note} = getState().counts;

        
//         const noteToFirestore = {...note};
//         delete noteToFirestore.id;
        
//         const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
//         await setDoc(docRef, noteToFirestore, { merge: true });
        
//         dispatch(updateNote(note));
//     }
// }


// export const startDeletingNote = () => {
//     return async(dispatch, getState) => {
    
//             const { uid } = getState().auth;
//             const {active:note} = getState().counts;

//             console.log({uid, note})

//             const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

//             await deleteDoc(docRef);

//             dispatch(deleteNoteById(note.id));
//     }
// }