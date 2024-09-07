import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar';
import useAuth from '../../hooks/useAuth';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../routes';
import { useDispatch } from 'react-redux';
import { open } from '../../store/features/fileUploadDialogSlice';
import { FiPlus } from 'react-icons/fi';
import FileUploadDialog from '../shared/FileUploadDialog';

export default function AppLayout() {
    const privateRoutes = PRIVATE_ROUTES.map((menu) => menu.path);

    const publicRoutes = PUBLIC_ROUTES.map((menu) => menu.path);

    const { isLoggedIn } = useAuth();
    const { pathname: currentRoute } = useLocation();
    const dispatch = useDispatch();

    const handleOpenFileDialog = () => {
        dispatch(open());
    };
    if (!isLoggedIn && privateRoutes.includes(currentRoute))
        return <Navigate to="/" />;

    if (isLoggedIn && publicRoutes.includes(currentRoute))
        return <Navigate to="/products" />;

    return (
        <>
            <FileUploadDialog />
            <Navbar />
            <Outlet />
            {/* open file uploader button */}

            {currentRoute !== '/' && (
                <div className="fixed bottom-20 left-0 w-full flex_center cursor-pointer">
                    <button
                        className="bg-black rounded-full w-14 h-14 shadow-lg flex_center "
                        type="button"
                        onClick={handleOpenFileDialog}
                    >
                        <FiPlus className="text-white" size={24} />
                    </button>
                </div>
            )}
        </>
    );
}
