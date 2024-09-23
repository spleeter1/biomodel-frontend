import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CheckboxState = {
    checkedItems: boolean[];
};

const initialState: CheckboxState = {
    checkedItems: Array(10).fill(false),
};
export const VGPdiseasesSlice = createSlice({
    name: 'VGPdiseasesStore',
    initialState,
    reducers: {
        toggleCheckbox: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            state.checkedItems[index] = !state.checkedItems[index];
        },
        setAllChecked: (state, action: PayloadAction<boolean>) => {
            state.checkedItems = state.checkedItems.map(() => action.payload);
        },
    },
});
export const { toggleCheckbox, setAllChecked } = VGPdiseasesSlice.actions;
export default VGPdiseasesSlice.reducer;
