import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
    name: 'files',
    initialState: {
        data: [],
    },
    reducers: {
        addFiles: (state, action) => {
            state.data = action.payload;
        },
        clearFiles: (state) => {
            state.data = [];
        },
    },
});

export const { addFiles, clearFiles } = fileSlice.actions;
export default fileSlice.reducer;
