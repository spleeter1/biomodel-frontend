// fileKeysSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FileKeysState = string[];

const initialState: FileKeysState = [];

const fileKeysSlice = createSlice({
    name: 'fileKeysStore',
    initialState,
    reducers: {
        setFileKeys: (_, action: PayloadAction<string[]>) => {
            return action.payload;
        },
        resetFileKeys: () => {
            return [];
        },
        updateFileKey: (
            state,
            action: PayloadAction<{ index: number; value: string }>
        ) => {
            const { index, value } = action.payload;
            if (index >= 0 && index < state.length) {
                state[index] = value;
            }
        },
    },
});

export const { setFileKeys, resetFileKeys, updateFileKey } =
    fileKeysSlice.actions;
export default fileKeysSlice.reducer;
