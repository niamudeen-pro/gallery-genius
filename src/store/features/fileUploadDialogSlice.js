import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
};

const fileUploadDialogSlice = createSlice({
    name: 'fileUploadDialog',
    initialState,
    reducers: {
        open: (state) => {
            state.open = true;
        },
        close: (state) => {
            state.open = false;
        },
    },
});

export const { open, close } = fileUploadDialogSlice.actions;

export default fileUploadDialogSlice.reducer;
