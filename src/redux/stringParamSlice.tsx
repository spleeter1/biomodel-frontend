// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export const stringParamSlice = createSlice({
//     name: 'stringParam',
//     initialState: {
//         value: '',
//     },
//     reducers: {
//         updateValue: (state, action: PayloadAction<string>) => {
//             state.value = action.payload;
//         },
//         resetValue: (state, _) => {
//             state.value = '';
//         },
//     },
// });
// export const { updateValue, resetValue } = stringParamSlice.actions;
// export default stringParamSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type StringParamState = {
//     [key: string]: string;
// };

// const initialState: StringParamState = {};

// export const stringParamSlice = createSlice({
//     name: 'stringParam',
//     initialState,
//     reducers: {
//         updateValue: (
//             state,
//             action: PayloadAction<{ key: string; value: string }>
//         ) => {
//             state[action.payload.key] = action.payload.value;
//         },
//         resetValue: (state, action: PayloadAction<string>) => {
//             state[action.payload] = '';
//         },
//         resetAllValues: state => {
//             Object.keys(state).forEach(key => {
//                 state[key] = '';
//             });
//         },
//     },
// });

// export const { updateValue, resetValue, resetAllValues } =
//     stringParamSlice.actions;
// export default stringParamSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StringItem = {
    key: string;
    value: string;
};

type StringParamState = StringItem[];

const initialState: StringParamState = [];

export const stringParamSlice = createSlice({
    name: 'stringParam',
    initialState,
    reducers: {
        updateValue: (state, action: PayloadAction<StringItem>) => {
            const { key, value } = action.payload;
            const index = state.findIndex(item => item.key === key);
            if (index !== -1) {
                state[index].value = value;
            } else {
                state.push(action.payload);
            }
        },
        delValue: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.key !== action.payload);
        },
        resetValue: (state, action: PayloadAction<string>) => {
            const key = action.payload;
            const item = state.find(item => item.key === key);
            if (item) {
                item.value = '';
            }
        },
        resetAllValues: () => initialState,
    },
});

export const { updateValue, delValue, resetValue, resetAllValues } =
    stringParamSlice.actions;
export default stringParamSlice.reducer;
