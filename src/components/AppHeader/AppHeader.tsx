import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import styles from './AppHeader.module.scss';
import { Icon } from '../Icon';
import { MainTabs } from '../Tabs/MainTabs';
import { ROUTES } from 'src/constants/routes';

export const AppHeader = () => {
    const goTo = useNavigate();
    const { pathname } = useResolvedPath(ROUTES.MENU);
    const isActiveRoute = useMatch({ path: pathname });

    return (
        <header className={styles.root}>
            <div className={styles.section}>
                <button
                    className={[styles.menu, isActiveRoute ? styles.active : ''].join(' ')}
                    onClick={() => goTo(ROUTES.MENU)}
                >
                    <Icon name="Menu" color="accent" size={24} />
                </button>

                <button
                    className={`${styles.btn} ${styles['btn-opacity-5']}`}
                    onClick={() => goTo(ROUTES.HOME)}
                >
                    <Icon name="Logo" color="accent" size={24} />
                </button>

                <button className={`${styles.btn} ${styles['btn-opacity-2']}`}>
                    <Icon name="UserSquare" color="accent" size={24} />
                </button>
            </div>

            <hr className={styles.hr}/>

            <nav className={styles.tabs}>
                <div className={styles['horizontal-scrollbar']}>
                    <MainTabs />
                </div>
            </nav>
        </header>
    );
};
