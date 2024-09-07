import { useRef } from 'react';
import { fileSizeConverter, getFileIconByMimeType } from '../utils/helper';

export default function FileUploader({
    setFiles,
    files,
    folderName,
    setFolderName,
}) {
    const inputRef = useRef();
    const handleOnChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setFiles([...files, ...newFiles]);
        updateInputFileCount([...files, ...newFiles]);
    };

    const handleDeleteFile = (index) => {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        updateInputFileCount(newFiles);
    };

    const updateInputFileCount = (newFiles) => {
        // Manually clear the input value
        inputRef.current.value = '';

        const dataTransfer = new DataTransfer();
        newFiles.forEach((file) => dataTransfer.items.add(file));

        // Update the input value
        inputRef.current.files = dataTransfer.files;
    };

    const renderIcon = (file) => {
        const { icon } = getFileIconByMimeType(file.type);

        return icon;
    };

    const findProgressbarColor = (file) => {
        const { color } = getFileIconByMimeType(file.type);

        return color;
    };
    return (
        <>
            <div className="space-y-8">
                {/* folder name section */}

                {/* file uploader section */}

                <h2>Upload your files</h2>

                <div className="space-y-2">
                    <label>Folder name</label>
                    <input
                        type="text"
                        className="custom_input"
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                    />
                </div>
                <p className="text-xs">
                    Please note that storing images in this folder is optional.
                    You can choose to use this folder for your images, or you
                    can store them elsewhere if you prefer.
                </p>

                {/* file upload input */}
                <input
                    type="file"
                    multiple
                    onChange={handleOnChange}
                    ref={inputRef}
                />

                {/* files */}
                <div className="max-h-[300px] overflow-auto hide_scrollbar space-y-4">
                    {files.length > 0 &&
                        files.map((file, index) => (
                            <div
                                className="p-5 flex_between rounded-md"
                                key={index}
                            >
                                <div className="flex items-center gap-4 w-[90%]">
                                    {renderIcon(file)}
                                    <div className="w-full space-y-2">
                                        <p className="text-black">
                                            {file.name.substring(0, 35)}
                                        </p>
                                        <p className="text-xs">
                                            {fileSizeConverter(file.size)} KB
                                        </p>

                                        {/* progress bar */}
                                        <div
                                            className={`h-1 w-full rounded-lg ${findProgressbarColor(
                                                file
                                            )}`}
                                        ></div>
                                    </div>
                                </div>

                                {/* close button */}
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
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
