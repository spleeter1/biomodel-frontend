import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};
export const urlStoreSlice = createSlice({
    name: 'urlStore',
    initialState,
    reducers: {
        setURL: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        resetURL: () => {
            return initialState;
        },
    },
});

export const { resetURL, setURL } = urlStoreSlice.actions;
export default urlStoreSlice.reducer;
