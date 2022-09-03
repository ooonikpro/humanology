import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppHeader } from '../AppHeader';
import { AppContent } from '../AppContent';
import { AppRouter } from '../AppRouter';


export const App = () => {
    return (
        <BrowserRouter>
            <AppHeader />
            <AppContent>
                <AppRouter/>
            </AppContent>
        </BrowserRouter>
    );
};
