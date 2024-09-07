import { Link } from 'react-router-dom';
import { MovingBorderButton } from '../components/button';

const buttonsActionsList = [
    {
        name: 'Go to uploads',
        path: '/uploads',
        hasMovingBorder: true,
    },
    {
        name: 'Downloads',
        path: '/uploads',
        className: 'white_btn',
    },
];

export default function LandingPage() {
    return (
        <section className="sectionCustomHeight  w-full  relative flex items-center justify-center  bg-black/[0.96]  bg-grid-white/[0.02]">
            <div className="custom_container flex_center">
                <div className="max-w-4xl space-y-4">
                    <h1 className="font-bold  text-white">
                        Upload with Ease, Share & Confidence
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                        Welcome to Gallery Genius ! Effortlessly upload and
                        manage your files with just a few clicks. Whether it’s
                        photos, documents, or videos, our intuitive platform
                        ensures your files are safely stored and easily
                        accessible whenever you need them. Start sharing your
                        files today – it’s quick, secure, and simple!
                    </p>
                    {/* action buttons */}
                    <div className="space-x-4">
                        {buttonsActionsList?.length > 0 &&
                            buttonsActionsList.map((button, index) => (
                                <ActionButtons
                                    key={index}
                                    className={button.className}
                                    path={button.path}
                                    item={button}
                                >
                                    {button.name}
                                </ActionButtons>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ActionButtons({ children, className, path, item }) {
    return (
        <>
            {item.hasMovingBorder ? (
                <Link to={path}>
                    <MovingBorderButton>{children}</MovingBorderButton>
                </Link>
            ) : (
                <Link to={path}>
                    <button className={className}>{children}</button>
                </Link>
            )}
        </>
    );
}
