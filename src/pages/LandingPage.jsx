import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <section className="section flex flex-col gap-8">
                <div className="max-w-4xl space-y-4">
                    <h1>Upload with Ease, Share with Confidence</h1>
                    <p className="text-gray-400">
                        Welcome to Gallery Genius ! Effortlessly upload and
                        manage your files with just a few clicks. Whether it’s
                        photos, documents, or videos, our intuitive platform
                        ensures your files are safely stored and easily
                        accessible whenever you need them. Start sharing your
                        files today – it’s quick, secure, and simple!
                    </p>
                </div>
                <div className="space-x-4">
                    <Link to="/downloads">
                        <button className="btn1 active_btn">
                            <span>Downloads</span>
                        </button>
                    </Link>
                    <Link to="/uploads">
                        <button className="btn1 ">
                            <span>Go to Uploads</span>
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}
