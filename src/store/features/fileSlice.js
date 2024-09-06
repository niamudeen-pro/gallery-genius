import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
    name: 'files',
    initialState: {
        data: [],
    },
    reducers: {
        fileUpload: (state, action) => {
            const { files, folder_name, folder_created_at } = action.payload;

            if (folder_name) {
                const findIndex = state.data.findIndex(
                    (item) => item.folder_name === folder_name
                );
                if (findIndex !== -1) {
                    state.data[findIndex].list = [
                        ...state.data[findIndex].list,
                        ...files,
                    ];
                    return;
                }
            }

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
