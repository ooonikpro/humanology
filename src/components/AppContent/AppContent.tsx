import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './AppContent.module.scss';

const appContent = document.querySelector('.app-content');


export const AppContent: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        if (appContent) {
            appContent.scrollTop = 0;
        }
    }, [location]);

    return (
        <main className={styles.root}>
            { children }
        </main>
    );
};
