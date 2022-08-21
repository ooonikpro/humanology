import React from 'react';
import { Route, Routes, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import styles from './AppHeader.module.scss';
import { Icon } from '../Icon';
import { MainTabs } from '../Tabs/MainTabs';
import { ROUTES } from 'src/constants/routes';
import { SociatypesTabs } from '../Tabs/SociatypesTabs';

export const AppHeader = () => {
    const goTo = useNavigate();
    const { pathname } = useResolvedPath(ROUTES.START);
    const isActiveRoute = useMatch({ path: pathname });

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
                    onClick={() => goTo('/')}
                >
                    <Icon name="Logo" color="accent" size={24} />
                </button>

                <button className={`${styles.btn} ${styles['btn-opacity-5']}`}>
                    <Icon name="UserSquare" color="accent" size={24} />
                </button>
            </div>

            <hr className={styles.hr}/>

            <nav className={styles['section-big']}>
                <div className={styles['horizontal-scrollbar']}>
                    <Routes>
                        <Route
                            path={`${ROUTES.SOCIATYPES()}/*`}
                            element={<SociatypesTabs />}
                        />
                        <Route path="*" element={<MainTabs />} />
                    </Routes>
                </div>
            </nav>
        </header>
    );
};
