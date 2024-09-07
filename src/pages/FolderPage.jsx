import { useParams } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa6';
import FilesList from '../components/FilesList';
import useFileAndFolder from '../hooks/useFileAndFolder';

export default function FolderPage() {
    const { slug: folderName } = useParams();

    const { folders } = useFileAndFolder();

    const currentFolder = folders.find(
        (folder) =>
            folder.name.toLocaleLowerCase() === folderName?.toLocaleLowerCase()
    );

    const isFolderNameExist = currentFolder ? true : false;

    return (
        <>
            <section
                className={` sectionCustomHeight  custom_container  p-8 ${
                    folders?.length === 0 ? 'flex_center' : ''
                }`}
            >
                {isFolderNameExist ? (
                    <div className="w-full">
                        <h2 className="flex items-center gap-4 capitalize">
                            <FaFolderOpen className="text-yellow-400" />
                            <span>{folderName}</span>
                        </h2>
                        <FilesList files={currentFolder?.files} />
                    </div>
                ) : (
                    <div className="text-center text-gray-400">
                        Looks like you haven’t added any folders yet. Get
                        started by uploading your files and make the most of our
                        platform!
                    </div>
                )}
            </section>
        </>
    );
}
