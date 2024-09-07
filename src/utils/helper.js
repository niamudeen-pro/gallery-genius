import {
    FaFilePdf,
    FaFileExcel,
    FaFileWord,
    FaImage,
    FaMusic,
} from 'react-icons/fa';
import { RiVideoFill } from 'react-icons/ri';
import { FaFileLines } from 'react-icons/fa6';

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

const FILE_ICON_SIZE = 34;

export const FILE_ICONS = [
    {
        type: 'image',
        icon: <FaImage size={FILE_ICON_SIZE} className="text-purple-600" />,
        mimeTypes: [
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/gif',
            'image/svg+xml',
            'image/webp',
            'image/bmp',
        ],
        outerColor: 'bg-purple-100',
        innerColor: 'bg-purple-300',
    },
    {
        type: 'video',
        icon: <RiVideoFill size={FILE_ICON_SIZE} className="text-red-600" />,
        mimeTypes: [
            'video/mp4',
            'video/quicktime',
            'video/x-msvideo',
            'video/x-matroska',
            'video/webm',
            'video/ogg',
        ],
        outerColor: 'bg-red-100',
        innerColor: 'bg-red-300',
    },
    {
        type: 'audio',
        icon: <FaMusic size={FILE_ICON_SIZE} className="text-pink-500" />,
        mimeTypes: [
            'audio/mpeg',
            'audio/wav',
            'audio/ogg',
            'audio/aac',
            'audio/flac',
            'audio/webm',
            'audio/mp3',
        ],
        outerColor: 'bg-pink-100',
        innerColor: 'bg-pink-300',
    },
    {
        type: 'pdf',
        icon: <FaFilePdf size={FILE_ICON_SIZE} className="text-orange-600" />,
        mimeTypes: ['application/pdf'],
        outerColor: 'bg-orange-100',
        innerColor: 'bg-orange-300',
    },
    {
        type: 'excel',
        icon: <FaFileExcel size={FILE_ICON_SIZE} className="text-green-600" />,
        mimeTypes: [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ],
        outerColor: 'bg-green-100',
        innerColor: 'bg-green-300',
    },
    {
        type: 'doc',
        icon: <FaFileWord size={FILE_ICON_SIZE} className="text-blue-300" />,
        mimeTypes: [
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
        outerColor: 'bg-blue-100',
        innerColor: 'bg-blue-300',
    },
];

export const getFileIconByMimeType = (mimeType) => {
    const menu = FILE_ICONS.find((file) => file.mimeTypes.includes(mimeType));

    if (!menu)
        return {
            icon: (
                <FaFileLines size={FILE_ICON_SIZE} className="text-gray-600" />
            ),
            outerColor: 'bg-gray-100',
            innerColor: 'bg-gray-300',
        };

    return {
        icon: menu.icon,
        outerColor: menu.outerColor,
        innerColor: menu.innerColor,
        iconColor: menu.iconColor,
    };
};
export const fileSizeConverter = (bytes) => {
    if (!bytes) return null;
    const fileSizeInKB = (bytes / 1024).toFixed(2);
    return fileSizeInKB;
};
