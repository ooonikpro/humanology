import React from 'react';
import styles from './AppContent.module.scss';

export const AppContent: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
    return (
        <main className={styles.root}>
            { children }
        </main>
    );
};
