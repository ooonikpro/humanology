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
                <span className={styles['pair-icons']}>  
                    <button className={`${styles.btn} ${styles['btn-opacity-5']}`}>
                        <Icon name="Menu" color="accent" size={24} />
                    </button>

                    <button className={`${styles.btn} ${styles['btn-opacity-2']}`}>
                        <Icon name="Cone" color="accent" size={24} />
                    </button>
                </span>

                <button
                    className={`${styles.btn} ${styles['btn-opacity-2']}`}
                    onClick={() => goTo('/')}
                >
                    <Icon name="Logo" color="accent" size={24} />
                </button>

                <span className={styles['pair-icons']}>
                    <button className={`${styles.btn} ${styles['btn-opacity-2']}`}>
                        <Icon name="Bookmark" color="accent" size={24} />
                    </button>

                    <button className={`${styles.btn} ${styles['btn-opacity-2']}`}>
                        <Icon name="UserSquare" color="accent" size={24} />
                    </button>
                </span>
            </div>

            <hr className={styles.hr}/>

            <div className={`${styles.section} ${styles['section-small']}`}>
                <button 
                    className={[styles.menu, isActiveRoute ? styles.active : ''].join(' ')}
                    onClick={() => goTo(ROUTES.MENU)}
                >
                    <span className={styles['icon-wrap']}>
                        <Icon name="MenuSquare" color="accent" size={16} />
                    </span>

                    <Text size="small" color="accent">
                    Меню
                    </Text>
                </button>

                <button className={`${styles['pair-icon-text']} ${styles['btn-opacity-5']}`}>
                    <Text size="small" color="accent">
                    Соционика
                    </Text>
                    <span className={styles['icon-wrap']}>
                        <Icon name="FolderOpen" color="accent" size={16} />
                    </span>
                </button>
            </div>

            <nav className={styles.section}>


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
