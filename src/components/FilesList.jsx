import { fileSizeConverter, getFileIconByMimeType } from '../utils/helper';

export default function FilesList({ files }) {
    const renderIcon = (file) => {
        const { icon: Icon } = getFileIconByMimeType(file.type);
        return Icon;
    };
    return (
        <>
            {files?.length === 0 ? (
                <div className="text-center text-gray-400">
                    Looks like you haven’t added any files yet. Get started by
                    uploading your files and make the most of our platform!
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-14 max-h-[120rem] overflow-y-auto hide-scrollbar">
                    {files?.length > 0 &&
                        files.map((file, index) => (
                            <div
                                key={index}
                                className="bg-gray-50/70
                    p-8 rounded-xl max-w-[40rem] w-full mx-auto relative cursor-pointer 
                    transition-all duration-300 ease-in-out flex_center group"
                            >
                                <div className="w-full  space-y-5">
                                    <div className="flex_center">
                                        {file && file.type ? (
                                            file.type.startsWith('image') ? (
                                                <img
                                                    src={URL.createObjectURL(
                                                        file
                                                    )}
                                                    alt="Product"
                                                    className="w-[250px] h-[200px] object-cover"
                                                    loading="lazy"
                                                />
                                            ) : file.type.startsWith(
                                                  'video'
                                              ) ? (
                                                <video
                                                    controls
                                                    className="w-[250px] h-[200px] object-cover"
                                                >
                                                    <source
                                                        src={URL.createObjectURL(
                                                            file
                                                        )}
                                                        type={file.type}
                                                    />
                                                    Your browser does not
                                                    support the video tag.
                                                </video>
                                            ) : (
                                                renderIcon(file)
                                            )
                                        ) : (
                                            <div>No valid file selected</div>
                                        )}
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
                            </div>
                        ))}
                </div>
            )}
        </>
    );
}
