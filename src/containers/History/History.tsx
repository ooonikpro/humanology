import React, { useEffect } from 'react';
import styles from './History.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { EndPoint } from '../../components/EndPoint';
import { MiniTabsHistory } from '../../components/Tabs/MiniTabsHistory/MiniTabsHistory';
import { Outlet, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useIsActiveRoute } from '../../hooks';
import { PageTitle } from '../../components/PageTitle';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function History() {
    const isActiveRoute = useIsActiveRoute(ROUTES.HISTORY, true);
    const goTo = useNavigate();

    useEffect(() => {
        goTo(ROUTES.HISTORY_CARL);
    }, [isActiveRoute]);

    return (
        <AppScrollbar hideOutlet>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='SquareTime'>История</PageTitle>
                <div className={styles.minitabs}>
                    <MiniTabsHistory />
                </div>
                <Outlet />
                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}
