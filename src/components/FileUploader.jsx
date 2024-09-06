import { fileSizeConverter, getFileIconByMimeType } from '../utils/helper';
import { FaImage } from 'react-icons/fa6';

export default function FileUploader({
    setFiles,
    files,
    folderName,
    setFolderName,
}) {
    const handleOnChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setFiles([...files, ...newFiles]);
    };

    const handleDeleteFile = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    return (
        <>
            <div className="space-y-8">
                <p className="text-gray-400 text-sm">
                    Please note that storing images in this folder is optional.
                    You can choose to use this folder for your images, or you
                    can store them elsewhere if you prefer.
                </p>

                <div className="space-y-2">
                    <label>Folder name</label>
                    <input
                        type="text"
                        className="custom_input"
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                    />
                </div>
                <div className="bg-soft_gray rounded-md p-16 flex_center">
                    <label
                        htmlFor="file-uploader"
                        className="text-base cursor-pointer flex justify-center flex-col items-center gap-3"
                    >
                        <FaImage size={34} className="text-gray-200" />
                        <p className="text-base">Browse Files</p>
                        {/* <p className="text-xs text-gray-400">
                                JPG, PNG or JPEG (size. 200KB)
                            </p> */}
                    </label>
                    <input
                        id="file-uploader"
                        type="file"
                        multiple
                        hidden
                        onChange={handleOnChange}
                    />
                </div>

                {/* files */}
                <div className="max-h-[300px] overflow-auto hide_scrollbar space-y-4">
                    {files.length > 0 &&
                        files.map((file, index) => (
                            <div
                                className="bg-soft_gray rounded-md p-5 flex_between"
                                key={index}
                            >
                                <div className="flex items-center gap-4 w-[90%]">
                                    {getFileIconByMimeType(file.type)}

                                    <div className="space-y-2 w-full">
                                        <p className="text-base">
                                            {file.name.substring(0, 35)}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {fileSizeConverter(file.size)} KB
                                        </p>
                                    </div>
                                </div>

                                {/* close button */}
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                    onClick={() => handleDeleteFile(index)}
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
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
