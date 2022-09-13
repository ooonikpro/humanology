import { useLocation, useMatch, useResolvedPath } from 'react-router';
import { ROUTES } from 'src/constants/routes';

export const useIsActiveRoute = (path: string, strict = false) => {
    const { pathname } = useResolvedPath(path);

    if (strict) {
        return useMatch({ path: pathname, end: true });
    }

    const location = useLocation();

    return (pathname !== ROUTES.START && location.pathname.includes(pathname));
};
