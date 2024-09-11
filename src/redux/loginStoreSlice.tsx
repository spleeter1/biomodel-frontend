import { createSlice } from '@reduxjs/toolkit';

export const LoginStoreSlice = createSlice({
    name: 'loginStore',
    initialState: { value: false },
    reducers: {
        loggedIn: state => {
            state.value = true;
        },
        resetLogin: state => {
            state.value = false;
        },
    },
});

export const { loggedIn, resetLogin } = LoginStoreSlice.actions;
export default LoginStoreSlice.reducer;
