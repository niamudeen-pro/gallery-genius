import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import fileUploadDialogSlice from './features/fileUploadDialogSlice';
import fileSlice from './features/fileSlice';

export const store = configureStore({
    reducer: {
        authUser: authSlice,
        fileUploadDialog: fileUploadDialogSlice,
        files: fileSlice,
    },
});
