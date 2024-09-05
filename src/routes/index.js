import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import LandingPage from '../pages/LandingPage';

import NotFoundPage from '../pages/NotFoundPage';
import AboutUsPage from '../pages/AboutUsPage';
import ContactUsPage from '../pages/ContactUsPage';
import UploadsPage from '../pages/UploadsPage';
import DownloadsPage from '../pages/DownloadsPage';
import FolderPage from '../pages/FolderPage';

export const ALL_ROUTES = [
    {
        id: 1,
        path: '/',
        element: <LandingPage />,
        title: 'Home',
    },
    {
        id: 2,
        path: '/about-us',
        element: <AboutUsPage />,
        title: 'about us',
    },
    {
        id: 3,
        path: '/contact',
        title: 'contact',
        element: <ContactUsPage />,
    },
    {
        id: 4,
        path: '/uploads',
        element: <UploadsPage />,
        excudleNavbar: true,
    },
    {
        id: 5,
        path: '/downloads',
        element: <DownloadsPage />,
        excudleNavbar: true,
    },
    {
        id: 6,
        path: '/folder/:slug',
        element: <FolderPage />,
        excudleNavbar: true,
    },
];

export const PRIVATE_ROUTES =
    (ALL_ROUTES?.length > 0 &&
        ALL_ROUTES.filter((route) => route.isPrivate && !route.ishidden)) ||
    [];

export const PUBLIC_ROUTES =
    (ALL_ROUTES?.length > 0 &&
        ALL_ROUTES.filter((menu) => !menu.isPrivate && !menu.ishidden)) ||
    [];

export const _router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [...PUBLIC_ROUTES, ...PRIVATE_ROUTES],
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);
