import { FaFile } from 'react-icons/fa6';
// import { BsFileEarmarkExcelFill } from 'react-icons/bs';
// import { BsFileEarmarkPdfFill } from 'react-icons/bs';
// import { FaFileAudio } from 'react-icons/fa6';
// import { BiSolidFileDoc } from 'react-icons/bi';
// import { BiSolidFileJpg } from 'react-icons/bi';
// import { FaFileVideo } from 'react-icons/fa6';

export const setDataIntoLc = (key, value, isJson = false) => {
    if (isJson) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
    localStorage.setItem(key, JSON.stringify(value));
};

export const getDataFromLc = (key, isJson = false) => {
    if (isJson) {
        return JSON.parse(localStorage.getItem(key));
    }
    return localStorage.getItem(key);
};

export const removeDataFromLc = (key) => {
    localStorage.removeItem(key);
};

// files

const FILE_ICON_SIZE = 44;

export const FILE_ICONS = [
    {
        type: 'image',
        icon: <FaFile size={FILE_ICON_SIZE} className="text-purple-600" />,
        mimeTypes: [
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/gif',
            'image/svg+xml',
            'image/webp',
            'image/bmp',
        ],
        color: 'bg-purple-500',
    },
    {
        type: 'video',
        icon: <FaFile size={FILE_ICON_SIZE} className="text-red-600" />,
        mimeTypes: [
            'video/mp4',
            'video/quicktime',
            'video/x-msvideo',
            'video/x-matroska',
            'video/webm',
            'video/ogg',
        ],
        color: 'bg-red-500',
    },
    {
        type: 'audio',
        icon: <FaFile size={FILE_ICON_SIZE} className="text-pink-500" />,
        mimeTypes: [
            'audio/mpeg',
            'audio/wav',
            'audio/ogg',
            'audio/aac',
            'audio/flac',
            'audio/webm',
            'audio/mp3',
        ],
        color: 'bg-pink-500',
    },
    {
        type: 'pdf',
        icon: <FaFile size={FILE_ICON_SIZE} className="text-orange-600" />,
        mimeTypes: ['application/pdf'],
        color: 'bg-orange-500',
    },
    {
        type: 'excel',
        icon: <FaFile size={FILE_ICON_SIZE} className="text-green-600" />,
        mimeTypes: [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ],
        color: 'bg-green-500',
    },
    {
        type: 'doc',
        icon: <FaFile size={FILE_ICON_SIZE} className="text-blue-300" />,
        mimeTypes: [
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
        color: 'bg-blue-500',
    },
];

export const getFileIconByMimeType = (mimeType) => {
    const menu = FILE_ICONS.find((file) => file.mimeTypes.includes(mimeType));

    if (!menu)
        return {
            icon: <FaFile size={FILE_ICON_SIZE} className="text-gray-600" />,
            color: 'bg-gray-500',
        };

    return {
        icon: menu.icon,
        color: menu.color,
    };
};
export const fileSizeConverter = (bytes) => {
    if (!bytes) return null;
    const fileSizeInKB = (bytes / 1024).toFixed(2);
    return fileSizeInKB;
};
