// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type FileState = {
//     files: File[];
// };

// const initialState: FileState = {
//     files: [],
// };

// export const fileStoreSlice = createSlice({
//     name: 'fileStore',
//     initialState,
//     reducers: {
//         pushFile: (state, action: PayloadAction<File>) => {
//             state.files.push(action.payload);
//         },

//         delFile: (state, action: PayloadAction<number>) => {
//             state.files = state.files.filter((_, index) => {
//                 console.log(`index: ${index}`);
//                 return index !== action.payload;
//                 // console.log(file);
//             });
//             // console.log(`action: ${action.type} `);
//         },

//         resetFiles: state => {
//             state = initialState;
//             return state;
//         },

//         getFile: state => {
//             return state;
//         },
//     },
// });

// export const { pushFile, delFile, getFile, resetFiles } =
//     fileStoreSlice.actions;
// export default fileStoreSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type FileStoreState = {
//     [key: string]: File;
// };

// const initialState: FileStoreState = {};

// export const fileStoreSlice = createSlice({
//     name: 'fileStore',
//     initialState,
//     reducers: {
//         pushFile: (
//             state,
//             action: PayloadAction<{ key: string; file: File }>
//         ) => {
//             state[action.payload.key] = action.payload.file;
//         },
//         delFile: (state, action: PayloadAction<string>) => {
//             delete state[action.payload];
//         },
//         resetFiles: state => {
//             Object.keys(state).forEach(key => {
//                 delete state[key];
//             });
//         },
//     },
// });

// export const { pushFile, delFile, resetFiles } = fileStoreSlice.actions;
// export default fileStoreSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type FileStoreState = {
//     [key: string]: File;
// };

// const initialState: FileStoreState = {};

// export const fileStoreSlice = createSlice({
//     name: 'fileStore',
//     initialState,
//     reducers: {
//         pushFile: (
//             state,
//             action: PayloadAction<{ key: string; file: File }>
//         ) => {
//             state[action.payload.key] = action.payload.file;
//         },
//         pushFiles: (
//             state,
//             action: PayloadAction<Array<{ key: string; file: File }>>
//         ) => {
//             action.payload.forEach(({ key, file }) => {
//                 state[key] = file;
//             });
//         },
//         delFile: (state, action: PayloadAction<string>) => {
//             delete state[action.payload];
//         },
//         resetFiles: state => {
//             Object.keys(state).forEach(key => {
//                 delete state[key];
//             });
//         },
//     },
// });

// export const { pushFile, pushFiles, delFile, resetFiles } =
//     fileStoreSlice.actions;
// export default fileStoreSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FileItem = {
    key: string;
    file: File;
};

type FileStoreState = FileItem[];

const initialState: FileStoreState = [];

export const fileStoreSlice = createSlice({
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
    fileStoreSlice.actions;
export default fileStoreSlice.reducer;
