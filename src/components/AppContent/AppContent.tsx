import React from 'react';
import styles from './AppContent.module.scss';
import { EndPoint } from '../../components/EndPoint';

export const AppContent: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
    return (
        <main className={styles.root}>
            <div className={styles.container}>
                { children }
            </div>
            <EndPoint />
        </main>
    );
};
