import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { close } from '../../store/features/fileUploadDialogSlice';
import FileUploader from '../FileUploader';
import { fileUpload } from '../../store/features/fileSlice';
import { useNavigate } from 'react-router-dom';
import { sendNotification } from '../../utils/notifications';

export default function FileUploadDialog() {
    const isOpen = useSelector((state) => state.fileUploadDialog.open);

    const [files, setFiles] = useState([]);
    const [folderName, setFolderName] = useState('');

    const naviagte = useNavigate();

    const dispatch = useDispatch();

    const handleCloseDialog = () => {
        dispatch(close());
        setFiles([]);
    };

    // file upload hanlde **********************************************
    const handleUpload = () => {
        if (folderName && files?.length === 0) {
            sendNotification('warning', 'Please select atleast one file');
            return;
        }

        const currentDate = new Date().toLocaleDateString();
        dispatch(
            fileUpload({
                files,
                folder_name: folderName || null,
                folder_created_at: folderName ? currentDate : null,
            })
        );
        setFiles([]);
        setFolderName('');
        dispatch(close());
        sendNotification('success', 'Files uploaded successfully');
        if (folderName) return naviagte(`/folder/${folderName}`);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed bg-backdrop inset-0 w-full h-full z-50 flex_center px-[8%]">
                    <div className="relative bg-white rounded-3xl shadow max-w-2xl w-full min-h-[600px] p-8">
                        {/* close button */}
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                onClick={handleCloseDialog}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Form  */}
                        <div className="mt-8 mb-16">
                            <FileUploader
                                files={files}
                                setFiles={setFiles}
                                folderName={folderName}
                                setFolderName={setFolderName}
                            />
                        </div>
                        <div className="absolute bottom-8 right-8">
                            <button className="btn" onClick={handleUpload}>
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
