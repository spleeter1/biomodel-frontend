import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
    name: 'loadingStore',
    initialState: {
        value: false,
    },
    reducers: {
        setIsLoadingState: state => {
            state.value = !state.value;
        },
    },
});
export const { setIsLoadingState } = loadingSlice.actions;
export default loadingSlice.reducer;
