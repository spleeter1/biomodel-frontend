import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FileItem = {
    key: string;
    file: File;

    // [key: string]: string;
};

type HistoryFileStoreState = FileItem[];

const initialState: HistoryFileStoreState = [];

export const historyFileStoreSlice = createSlice({
    name: 'fileStore',
    initialState,
    reducers: {
        pushFile: (state, action: PayloadAction<FileItem>) => {
            state.push(action.payload);
        },
        pushFiles: (state, action: PayloadAction<FileItem[]>) => {
            state.push(...action.payload);
        },
        delFile: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.key !== action.payload);
        },
        resetFiles: () => initialState,
    },
});

export const { pushFile, pushFiles, delFile, resetFiles } =
    historyFileStoreSlice.actions;
export default historyFileStoreSlice.reducer;
