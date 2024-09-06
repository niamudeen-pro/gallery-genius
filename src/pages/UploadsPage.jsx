import FilesList from '../components/FilesList';
import useFileAndFolder from '../hooks/useFileAndFolder';
import { FaFolder } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { GoDotFill } from 'react-icons/go';

export default function UploadsPage() {
    const { folders, files } = useFileAndFolder();

    return (
        <>
            <section
                className={` sectionCustomHeight  custom_container  p-8 ${
                    files?.length === 0 && folders?.length === 0
                        ? 'flex_center'
                        : ''
                }`}
            >
                {folders?.length === 0 && files?.length === 0 && (
                    <div className="text-center text-gray-400">
                        Looks like you haven’t added any files yet. Get started
                        by uploading your files and make the most of our
                        platform!
                    </div>
                )}
                {folders?.length > 0 && (
                    <div>
                        <h2>Folders</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-14">
                            {folders?.length > 0 &&
                                folders.map((folder, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50/70 p-8 rounded-xl max-w-[40rem] w-full mx-auto relative cursor-pointer 
                                transition-all duration-300 ease-in-out group space-y-8"
                                    >
                                        {/* folder title */}
                                        <div className="flex items-center gap-4">
                                            <FaFolder
                                                size={34}
                                                className="text-yellow-400"
                                            />
                                            <div>
                                                <p className="text-lg capitalize">
                                                    {folder.name}
                                                </p>
                                            </div>
                                        </div>

                                        {/* date */}
                                        <div className="flex gap-4">
                                            <p className="text-xs  text-gray-500">
                                                {folder?.createdAt}
                                            </p>

                                            <div className="flex items-center gap-2">
                                                <GoDotFill size={10} />
                                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                                    {folder?.files?.length}
                                                    <span>Files</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Link
                                                to={`/folder/${(folder?.name).toLowerCase()}`}
                                            >
                                                <button className="btn w-full hover:bg-transparent hover:border-black hover:shadow-none hover:border hover:text-black transition-all duration-300">
                                                    View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
                {files?.length > 0 && <FilesList files={files} />}
            </section>
        </>
    );
}
