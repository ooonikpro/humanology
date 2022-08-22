import { useMatch, useResolvedPath } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const useIsSociatypeCardRoute = (): boolean => {
    const { pathname: sociotypePath } = useResolvedPath(ROUTES.SOCIATYPES() + '/' + ROUTES.SOCIATYPES_CARD);

    return Boolean(useMatch({ path: sociotypePath }));
};