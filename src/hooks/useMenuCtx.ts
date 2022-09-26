import { useContext } from 'react';
import { AppContext, AppContextType } from 'src/components/App';

export const useMenuCtx = () => {
    const { menu: { isOpen, toggle } } = useContext<AppContextType>(AppContext);

    return {
        isOpen,
        toggle,
    };
};
