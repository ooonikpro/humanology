import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MainTabs } from '../Tabs/MainTabs';
import styles from './AppScrollbar.module.scss';

interface Props {
    children: React.ReactChild | React.ReactChild[];
    hideTabs?: boolean;
    hideOutlet?: boolean;
    className?: string;
}

export const AppScrollbar: React.FC<Props> = ({ children, hideTabs = false, hideOutlet = false, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const scrollTop = () => {
        if (ref.current) {
            ref.current.scrollTop = 0;
        }
    };

    useEffect(scrollTop, []);
    useEffect(scrollTop, [location]);

    return (
        <div ref={ref} className={[styles.root, className].join(' ')}>
            {
                !hideTabs && (
                    <nav className={styles.nav}>
                        <MainTabs />
                    </nav>
                )
            }

            <div className={styles.pageContent}>
                {children}
            </div>
            {
                !hideOutlet && (
                    <Outlet />
                )
            }
        </div>
    );
};
