import {
    FaFileImage,
    FaFileVideo,
    FaFilePdf,
    FaFileAudio,
    FaFileExcel,
    FaFileWord,
    FaFileAlt,
} from 'react-icons/fa';

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
        icon: <FaFileImage size={FILE_ICON_SIZE} className="text-blue-600" />,
        mimeTypes: [
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/gif',
            'image/svg+xml',
            'image/webp',
            'image/bmp',
        ],
    },
    {
        type: 'video',
        icon: <FaFileVideo size={FILE_ICON_SIZE} className="text-red-600" />,
        mimeTypes: [
            'video/mp4',
            'video/quicktime',
            'video/x-msvideo',
            'video/x-matroska',
            'video/webm',
            'video/ogg',
        ],
    },
    {
        type: 'audio',
        icon: <FaFileAudio size={FILE_ICON_SIZE} className="text-pink-500" />,
        mimeTypes: [
            'audio/mpeg',
            'audio/wav',
            'audio/ogg',
            'audio/aac',
            'audio/flac',
            'audio/webm',
            'audio/mp3',
        ],
    },
    {
        type: 'pdf',
        icon: <FaFilePdf size={FILE_ICON_SIZE} className="text-orange-600" />,
        mimeTypes: ['application/pdf'],
    },
    {
        type: 'excel',
        icon: <FaFileExcel size={FILE_ICON_SIZE} className="text-green-600" />,
        mimeTypes: [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ],
    },
    {
        type: 'doc',
        icon: <FaFileWord size={FILE_ICON_SIZE} className="text-blue-300" />,
        mimeTypes: [
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
    },
];

export const getFileIconByMimeType = (mimeType) => {
    const iconData = FILE_ICONS.find((file) =>
        file.mimeTypes.includes(mimeType)
    );

    return iconData ? (
        iconData.icon
    ) : (
        <FaFileAlt size={FILE_ICON_SIZE} className="text-yellow-400" />
    );
};
export const fileSizeConverter = (bytes) => {
    if (!bytes) return null;
    const fileSizeInKB = (bytes / 1024).toFixed(2);
    return fileSizeInKB;
};
