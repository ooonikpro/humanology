import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppHeader } from '../AppHeader';
import { AppContent } from '../AppContent';


export const App = () => {
    return (
        <BrowserRouter>
            <AppHeader />
            <AppContent />
        </BrowserRouter>
    );
};
