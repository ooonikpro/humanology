import { useLocation, useMatch, useResolvedPath } from 'react-router';

export const useIsActiveRoute = (path: string, strict = false) => {
    const { pathname } = useResolvedPath(path);

    if (strict) {
        return useMatch({ path: pathname, end: true });
    }

    const location = useLocation();

    return (pathname && location.pathname.includes(pathname));
};
