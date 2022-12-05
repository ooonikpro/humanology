import { useContext } from 'react';
import { AppContext } from '../components/App/AppContext';
import type { AppContextType } from '../components/App/AppContext';

export const useMenuCtx = () => {
    const { menu: { isOpen, toggle } } = useContext<AppContextType>(AppContext);

    return {
        isOpen,
        toggle,
    };
};
