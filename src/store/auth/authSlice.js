/* eslint-disable no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        login: (state, {payload} ) => {
            // eslint-disable-next-line no-sequences
            state.status = 'authenticated',
            state.uid = payload.uid,
            state.email = payload.email,
            state.displayName = payload.displayName,
            state.photoUrl = payload.photoUrl,
            state.errorMessage = null
        },
        logout: (state, {payload} ) => {
            // eslint-disable-next-line no-sequences
            state.status = 'not-authenticated',
            state.uid = null,
            state.email = null,
            state.displayName = null,
            state.photoUrl = null,
            state.errorMessage = payload.errorMessage
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;