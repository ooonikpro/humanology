import { useLocation, useMatch, useResolvedPath } from 'react-router';
import { ROUTES } from 'src/constants/routes';

export const useIsActiveRoute = (path: string) => {
    const { pathname } = useResolvedPath(path);
    const location = useLocation();

    return useMatch({ path: pathname }) || (pathname !== ROUTES.START && location.pathname.includes(pathname));
};
