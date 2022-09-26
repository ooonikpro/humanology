import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AppHeader.module.scss';
import { Icon } from '../Icon';
import { ROUTES } from 'src/constants/routes';
import { MainTabs } from '../Tabs/MainTabs';
import { useIsActiveRoute } from 'src/hooks';
import { useMenuCtx } from 'src/hooks/useMenuCtx';

export const AppHeader = () => {
    const goTo = useNavigate();
    const isActiveHomeRoute = useIsActiveRoute(ROUTES.HOME);
    const { isOpen: menuIsOpen, toggle: toggleMenu } = useMenuCtx();

    return (
        <>
            <header className={styles.headerTop}>
                <button
                    className={[styles.menu, menuIsOpen ? styles.active : ''].join(' ')}
                    onClick={toggleMenu}
                >
                    <Icon name={menuIsOpen ? 'Close' : 'Menu'} color="accent" size={32} />
                </button>

                <button
                    className={[styles.home, isActiveHomeRoute ? styles.active : ''].join(' ')}
                    onClick={() => goTo(ROUTES.HOME)}
                >
                    <Icon name="Logo" color="accent" size={28} />
                </button>

                <button className={styles.profile}>
                    <Icon name="UserSquare" color="accent" size={32} />
                </button>
            </header>

            <nav className={styles.tabs}>
                <div className={styles.horizontalScrollbar}>
                    <MainTabs />
                </div>
            </nav>
        </>
    );
};
