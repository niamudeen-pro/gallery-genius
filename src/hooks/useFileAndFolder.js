import { useSelector } from 'react-redux';

export default function useFileAndFolder() {
    const allFilesData = useSelector((state) => state.files.data);

    const processFileData = (data) => {
        const folders = [];
        const files = [];

        data.forEach((item) => {
            if (item.folder_name) {
                // Item is a folder
                folders.push({
                    name: item.folder_name,
                    createdAt: item.folder_created_at,
                    files: item.list, // No nested folder list here
                });
            } else {
                // Item is a file list (no folder name, so it's a top-level file list)
                files.push(...item.list);
            }
        });

        return { folders, files };
    };

    const { folders, files } = processFileData(allFilesData);

    return {
        folders,
        files,
    };
}
