import React from 'react';
import styles from './AppContent.module.scss';
import { AppRouter } from '../../components/AppRouter';

export const AppContent: React.FC = () => {
    return (
        <main className={styles.root}>
            <div className={styles.container}>
                <AppRouter/>
            </div>
        </main> 
    );
};