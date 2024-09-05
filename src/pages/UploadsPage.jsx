import React from 'react';
import { FaFolder } from 'react-icons/fa';
import { PiDotsThreeVerticalBold } from 'react-icons/pi';
import { FiPlus } from 'react-icons/fi';

const folders = [
    {
        id: 1,
        name: 'Project Details',
        size: '2GB',
        files: [
            { id: 101, name: 'file1.txt', size: '500MB' },
            { id: 102, name: 'file2.jpg', size: '1.5GB' },
        ],
        createdAt: '2024-01-01',
    },
];

export default function UploadsPage() {
    return (
        <section className="sectionCustomHeight  custom_container   p-8">
            <div className="w-full">
                {/* folders */}
                <div className="w-full space-y-8">
                    <h2>Folders</h2>
                    <div className="">
                        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"> */}
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
                                        <p className="text-xl">{folder.name}</p>
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
            </div>
            <div className="fixed bottom-20 left-0 w-full flex_center">
                <button
                    className="bg-black rounded-full w-14 h-14 shadow-lg flex_center"
                    type="button"
                >
                    <FiPlus className="text-white" size={24} />
                </button>
            </div>
        </section>
    );
}
