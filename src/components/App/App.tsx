import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppHeader } from '../AppHeader';
import { AppContent } from '../AppContent';
import { AppRouter } from '../AppRouter';
import { AppMenu } from '../AppMenu';

export type AppContextType = {
    menu: {
        isOpen: boolean
        toggle: () => void
    }
}

export const AppContext = createContext({
    menu: {
        isOpen: false,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        toggle: () => { },
    }
});

export const App = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const ctxValue = {
        menu: {
            isOpen: menuIsOpen,
            toggle: () => setMenuIsOpen((prev: boolean) => !prev),
        }
    };

    return (
        <AppContext.Provider value={ctxValue}>
            <BrowserRouter>
                <AppHeader />
                <AppContent>
                    <AppRouter />
                </AppContent>
                <AppMenu />
            </BrowserRouter>
        </AppContext.Provider>
    );
};
