import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <section className="section flex flex-col gap-4">
                <h1>Gallery Genius</h1>
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
