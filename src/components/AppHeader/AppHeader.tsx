import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AppHeader.module.scss';
import { Icon } from '../Icon';
import { ROUTES } from 'src/constants/routes';
import { MainTabs } from '../Tabs/MainTabs';
import { useIsActiveRoute } from 'src/hooks';

export const AppHeader: React.FC<{ isShowTabs?: boolean }> = ({ isShowTabs = true }) => {
    const goTo = useNavigate();
    const isActiveMenuRoute = useIsActiveRoute(ROUTES.MENU);

    return (
        <header className={styles.root}>
            <div className={styles.headerTop}>
                <button
                    className={[styles.menu, isActiveMenuRoute ? styles.active : ''].join(' ')}
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

            {
                isShowTabs && !isActiveMenuRoute && (
                    <nav className={styles.tabs}>
                        <div className={styles.horizontalScrollbar}>
                            <MainTabs />
                        </div>
                    </nav>
                )
            }
        </header>
    );
};
