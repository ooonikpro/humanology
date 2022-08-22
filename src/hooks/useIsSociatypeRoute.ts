import { useMatch, useResolvedPath } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const useIsSociatypeRoute = (): boolean => {
    const { pathname: sociotypePath } = useResolvedPath(ROUTES.SOCIATYPES() + '/*');

    return Boolean(useMatch({ path: sociotypePath }));
};