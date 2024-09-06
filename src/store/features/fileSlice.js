import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
    name: 'files',
    initialState: {
        data: [],
    },
    reducers: {
        fileUpload: (state, action) => {
            const { files, folder_name, folder_created_at } = action.payload;

            // Convert files to metadata
            // const fileMetadata = files.map((file) => ({
            //     ...file, // Spread all properties of the file object
            // }));

            state.data.push({
                list: files,
                folder_name: folder_name || null,
                folder_created_at: folder_created_at || null,
            });
        },
        clearFiles: (state) => {
            state.data = [];
        },
    },
});

export const { fileUpload, clearFiles } = fileSlice.actions;
export default fileSlice.reducer;
