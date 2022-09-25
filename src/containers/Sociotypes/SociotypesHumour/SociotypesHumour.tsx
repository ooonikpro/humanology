import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Text } from '../../../components/Text';
import { WhiteCard } from '../../../components/WhiteCard';
import { ROUTES } from '../../../constants/routes';
import { useIsActiveRoute } from '../../../hooks';
import { MiniTabsHumour } from '../../../components/Tabs/MiniTabsHumour/MiniTabsHumour';
import styles from './SociotypesHumour.module.scss';
import { EndPoint } from 'src/components/EndPoint';
import { PageTitle } from '../../../components/PageTitle';


export function SociotypesHumour() {

    const isActiveRoute = useIsActiveRoute(ROUTES.SOCIOTYPES_HUMOUR, true);
    const goTo = useNavigate();

    useEffect(() => {
        goTo(ROUTES.SOCIOTYPES_HUMOUR_LURKMORE);
    }, [isActiveRoute]);

    return (
        <WhiteCard color="white" className={styles.wrap}>
            <PageTitle iconName="EmojiSadSquare">Юмор</PageTitle>
            <div className={styles.warning}>
                <Text tag="p" size="body" color="accent" className={styles.text}>
                    Если вы не умеет воспринимать юмор, обидчивы или зависимы от мнений незнакомцев, пожалуйста, не читайте все что ниже.
                </Text>
                <hr className={styles.line} />
                <Text tag="p" size="body" color="accent" className={styles.text}>
                    Ненормативная лексика и сексуальные темы, оскорбление чувств всех причастных. Но весело и остроумно. Соблюдена авторская орфография и пунктуация.
                </Text>
            </div>
            <MiniTabsHumour />
            <Outlet />
            <EndPoint />
        </WhiteCard>
    );
}
