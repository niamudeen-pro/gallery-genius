import { Link, useLocation } from 'react-router-dom';

export function NavLinks({ route, setIsNavOpen }) {
    const currentRoute = useLocation().pathname;

    const navLinkClass = `text-base ${
        currentRoute === route.path && 'font-semibold'
    }`;

    return (
        <>
            {/* {route?.isButton ? (
                <Link to={route.path}>
                    <button className={navLinkClass}>Login</button>
                </Link>
            ) : (
                <li
                    className={navLinkClass}
                    onClick={() => setIsNavOpen(false)}
                >
                    <Link to={route.path}>{route.title}</Link>
                </li>
            )} */}
            <li className={navLinkClass} onClick={() => setIsNavOpen(false)}>
                <Link to={route.path}>{route.title}</Link>
            </li>
        </>
    );
}
