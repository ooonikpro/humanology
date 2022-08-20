import React from 'react';
import { Route, Routes, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import styles from './AppHeader.module.scss';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { MainTabs } from './Tabs/MainTabs';
import { ROUTES } from 'src/constants/routes';
import { SociatypesTabs } from './Tabs/SociatypesTabs';

export const AppHeader = () => {
    const goTo = useNavigate();
    const { pathname } = useResolvedPath(ROUTES.MENU);
    const isActiveRoute = useMatch({ path: pathname });

    return (
        <header className={styles.root}>
            <div className={styles.section}>
                <button className={`${styles.btn} ${styles['btn-opacity-2']}`}>
                    <Icon name="Menu" size={24} />
                </button>

                <button
                    className={`${styles.btn} ${styles['btn-opacity-5']}`}
                    onClick={() => goTo('/')}
                >
                    <Icon name="Logo" size={24} />
                </button>

                <button className={`${styles.btn} ${styles['btn-opacity-2']}`}>
                    <Icon name="Profile" size={24} />
                </button>
            </div>

            <button className={`${styles.section} ${styles['section-white']}`}>
                <span className={styles['icon-wrap']}>
                    <Icon name="Book" size={16} />
                </span>

                <Text size="small" className={styles['section-name']}>
                    Соционика
                </Text>

                <span className={styles['icon-wrap']}>
                    <Icon name="Question" size={16} />
                </span>
            </button>

            <nav className={styles.section}>
                <button
                    className={[styles.menu, isActiveRoute ? styles.active : ''].join(' ')}
                    onClick={() => goTo(ROUTES.MENU)}
                >
                    <Icon name="More" size={16} />
                </button>

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
