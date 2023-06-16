import { createSlice } from '@reduxjs/toolkit';
export const countsSlice = createSlice({
    name: 'counts',
    initialState: {
        isSaving: false,
        movements: [],
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addEmptyNote: (state, action) => {
           state.movements.push(action.payload);
           state.isSaving = false;
        },
        setNotes: (state, action) => {
            state.movements = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.movements = state.movements.map(movement => movement.id === action.payload.id ? action.payload : movement);
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.movements = [];
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.movements = state.movements.filter(movement => movement.id !== action.payload);
        },
    }
});

export const { savingNewNote, addEmptyNote, setNotes, setSaving, updateNote, clearNotesLogout, deleteNoteById} = countsSlice.actions;