import React from 'react';
import { Route, Routes, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import styles from './AppHeader.module.scss';
import { Icon } from '../Icon';
import { MainTabs } from '../Tabs/MainTabs';
import { ROUTES } from 'src/constants/routes';

export const AppHeader = () => {
    const goTo = useNavigate();
    const { pathname } = useResolvedPath(ROUTES.START);
    const isActiveRoute = useMatch({ path: pathname });
    
    const { pathname:sociotypePath } = useResolvedPath(ROUTES.SOCIATYPES() + '/' + ROUTES.SOCIATYPES_CARD);
    const isActiveRouteSociotype = useMatch({ path: sociotypePath });

    console.log(isActiveRouteSociotype);

    return (
        <header className={styles.root}>
            <div className={styles.section}>
                <button
                    className={[styles.menu, isActiveRoute ? styles.active : ''].join(' ')}
                    onClick={() => goTo(ROUTES.START)}
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
            {
                !isActiveRouteSociotype && 
                <>
                    <hr className={styles.hr}/>
                    <nav className={styles['section-big']}>
                        <div className={styles['horizontal-scrollbar']}>
                            <MainTabs />
                        </div>
                    </nav>
                </>
            }            
        </header>
    );
};
