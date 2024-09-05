import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../store/features/fileUploadDialogSlice';
import FileUploadDialog from '../components/shared/FileUploadDialog';
import { fileSizeConverter } from '../utils/helper';

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
    const allFiles = useSelector((state) => state.files.data);
    console.log(allFiles);
    const dispatch = useDispatch();

    const handleOpenFileDialog = () => {
        dispatch(open());
    };

    return (
        <>
            <FileUploadDialog />
            <section className="sectionCustomHeight  custom_container   p-8">
                {/* <div className="w-full">
                    <div className="w-full space-y-8">
                        <h2>Folders</h2>
                        <div className="">
                            {folders.map((folder) => (
                                <div
                                    key={folder.id}
                                    className="bg-white shadow-lg  p-8 rounded-lg space-y-3 max-w-[350px] w-full"
                                >
                                    <div className="flex_between">
                                        <div className="flex gap-4 items-center">
                                            <FaFolder
                                                size={28}
                                                className="text-yellow-400"
                                            />
                                            <p className="text-xl">
                                                {folder.name}
                                            </p>
                                        </div>
                                        <PiDotsThreeVerticalBold size={22} />
                                    </div>
                                    <div className="flex gap-4 items-center text-gray-400">
                                        <p>{folder.size} </p>
                                        <p>{folder.files.length} files</p>
                                    </div>
                                    <div>
                                        <img
                                            src="https://media.istockphoto.com/id/1227633050/photo/african-guy-keeps-hands-on-chest-showing-gratitude-studio-shot.webp?b=1&s=612x612&w=0&k=20&c=_mLlCXJ6TNkQIEuG8aOQISYy3HNlLXHxue-qX2ihJd4="
                                            alt=""
                                            className="h-10 w-10 object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-14
           max-h-[120rem] overflow-y-auto hide-scrollbar"
                >
                    {allFiles &&
                        allFiles.map((file, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-xl max-w-[40rem] w-full mx-auto relative cursor-pointer  space-y-3
                                    transition-all duration-300 ease-in-out border border-transparent hover:border-gray-200  group
                                    `}
                            >
                                <div className="flex_center">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt="Product"
                                        className="w-[250px] h-[200px] object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                <p className="text-center">
                                    {file.name.substring(0, 20)}
                                </p>
                                <p className="text-xs text-center text-gray-500">
                                    {fileSizeConverter(file.size)} KB
                                </p>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="btn w-full hover:bg-transparent hover:border-black hover:shadow-none hover:border hover:text-black transition-all duration-300">
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                {allFiles?.length === 0 && (
                    <div className="text-center text-gray-400">
                        Looks like you haven’t added any files yet. Get started
                        by uploading your files and make the most of our
                        platform!
                    </div>
                )}
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
