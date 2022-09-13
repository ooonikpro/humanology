import React, { useEffect } from 'react';
import styles from './History.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { EndPoint } from '../../components/EndPoint';
import { MiniTabs } from '../../components/Tabs/MiniTabs/MiniTabs';
import { Outlet, useHref, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { ROUTES } from 'src/constants/routes';
import { useIsActiveRoute } from 'src/hooks';

export default function History() {
    const isActiveRoute = useIsActiveRoute(ROUTES.HISTORY, true);
    const goTo = useNavigate();

    useEffect(() => {
        goTo(ROUTES.HISTORY_CARL);
    }, [isActiveRoute]);

    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h4" size="h4" font="additional" className={styles.title}>
                    История
                </Text>
                <MiniTabs />
                <Outlet />
                <EndPoint />
            </WhiteCard>
        </div>
    );
}
