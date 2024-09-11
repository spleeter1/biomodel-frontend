import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: String[] = [];
export const resultsStringSlice = createSlice({
    name: 'resultsStringStore',
    initialState,
    reducers: {
        pushResultsString: (state, action: PayloadAction<String[]>) => {
            state.push(...action.payload);
        },
        resetResultsString: () => initialState,
    },
});

export const { pushResultsString, resetResultsString } =
    resultsStringSlice.actions;
export default resultsStringSlice.reducer;
