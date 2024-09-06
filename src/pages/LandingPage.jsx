import { Link } from 'react-router-dom';
import { Spotlight } from '../components/ui/SpotLight';

export default function LandingPage() {
    return (
        <div className="sectionCustomHeight w-full dark:bg-black dark:bg-grid-white/[0.2]  relative flex items-center justify-center  bg-black/[0.96]  bg-grid-white/[0.02]">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="section">
                <div className="max-w-4xl grid gap-4">
                    <h1 className="text-white">
                        Upload with Ease, Share with Confidence
                    </h1>
                    <p className="text-gray-400">
                        Welcome to Gallery Genius ! Effortlessly upload and
                        manage your files with just a few clicks. Whether it’s
                        photos, documents, or videos, our intuitive platform
                        ensures your files are safely stored and easily
                        accessible whenever you need them. Start sharing your
                        files today – it’s quick, secure, and simple!
                    </p>
                    <div className="space-x-4">
                        <Link to="/downloads">
                            <button className="white_btn">
                                <span>Downloads</span>
                            </button>
                        </Link>
                        <Link to="/uploads">
                            <button className="btn1">
                                <span>Go to Uploads</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
