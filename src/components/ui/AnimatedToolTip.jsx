export const AnimatedTooltip = ({ files }) => {
    const imageFiles = files
        .filter((file) => file.type.startsWith('image'))
        .slice(0, 4);
    return (
        <>
            {imageFiles.map((file, index) => (
                <div className="-mr-4  relative group" key={index}>
                    <img
                        height={100}
                        width={100}
                        src={URL.createObjectURL(file)}
                        alt=""
                        className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-4 group-hover:scale-105 group-hover:z-30 border-gray-100  relative transition duration-500"
                    />
                </div>
            ))}
        </>
    );
};
