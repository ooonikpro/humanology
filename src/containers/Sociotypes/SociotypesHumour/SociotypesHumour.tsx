import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Text } from '../../../components/Text';
import { WhiteCard } from '../../../components/WhiteCard';
import { ROUTES } from '../../../constants/routes';
import { useIsActiveRoute } from '../../../hooks';
import { MiniTabsHumour } from '../../../components/Tabs/MiniTabsHumour/MiniTabsHumour';
import styles from './SociotypesHumour.module.scss';
import { EndPoint } from 'src/components/EndPoint';

export function SociotypesHumour() {

    const isActiveRoute = useIsActiveRoute(ROUTES.SOCIOTYPES_HUMOUR, true);
    const goTo = useNavigate();

    useEffect(() => {
        goTo(ROUTES.SOCIOTYPES_HUMOUR_LURKMORE);
    }, [isActiveRoute]);

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Юмор</Text>
                <div className={styles.warning}>
                    <Text tag="span" size="body" color="accent">
                        Если вы не умеет воспринимать юмор, обидчивы или зависимы от мнений незнакомцев, пожалуйста, не читайте. Ненормативная лексика и сексуальные темы, оскорбление чувств всех причастных. Но весело и остроумно. Авторская орфография и пунктуация соблюдена.
                    </Text>
                </div>
                <MiniTabsHumour />
                <Outlet />
                <EndPoint />
            </WhiteCard>
        </div>
    );
}
