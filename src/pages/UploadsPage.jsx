import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { open } from '../store/features/fileUploadDialogSlice';
import FileUploadDialog from '../components/shared/FileUploadDialog';
import FilesList from '../components/FilesList';
import useFileAndFolder from '../hooks/useFileAndFolder';

// const folders = [
//     {
//         id: 1,
//         name: 'Project Details',
//         size: '2GB',
//         files: [
//             { id: 101, name: 'file1.txt', size: '500MB' },
//             { id: 102, name: 'file2.jpg', size: '1.5GB' },
//         ],
//         createdAt: '2024-01-01',
//     },
// ];

export default function UploadsPage() {
    const { folders, files } = useFileAndFolder();

    const dispatch = useDispatch();

    const handleOpenFileDialog = () => {
        dispatch(open());
    };

    return (
        <>
            <FileUploadDialog />
            <section
                className={` sectionCustomHeight  custom_container  p-8 ${
                    files?.length === 0 ? 'flex_center' : ''
                }`}
            >
                {folders?.length === 0 && <FilesList files={files} />}

                {/* open file uploader button */}
                <div className="fixed bottom-20 left-0 w-full flex_center">
                    <button
                        className="bg-black rounded-full w-14 h-14 shadow-lg flex_center cursor-pointer"
                        type="button"
                        onClick={handleOpenFileDialog}
                    >
                        <FiPlus className="text-white" size={24} />
                    </button>
                </div>
            </section>
        </>
    );
}
