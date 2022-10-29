import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { EndPoint } from '../../../components/EndPoint';
import { WhiteCard } from '../../../components/WhiteCard';
import { PageTitle } from '../../../components/PageTitle';
import { MiniTabsDescription } from '../../../components/Tabs/MiniTabsDescription/MiniTabsDescription';
import styles from './SociotypesDescription.module.scss';
import { ROUTES } from '../../../constants/routes';
import { useIsActiveRoute } from '../../../hooks';
import { Text } from '../../../components/Text';

export default function SociotypesDescription() {

    const isActiveRoute = useIsActiveRoute(ROUTES.SOCIOTYPES_DESCRIPTION, true);
    const goTo = useNavigate();

    useEffect(() => {
        goTo(ROUTES.SOCIOTYPES_DESCRIPTION_MIKELSONE);
    }, [isActiveRoute]);

    return (
        <WhiteCard color="white" className={styles.wrap}>
            <PageTitle iconName="JustifyLeft">Описание</PageTitle>

            <div className={styles.warning}>

                <Text tag="p" color="accent" className={styles.text}>
                    Описания не должны обязательно совпадать со всеми чертами характера личности.
                </Text>

                <hr className={styles.line} />

                <Text tag="p" size="body" color="accent" className={styles.text}>
                    Идея как раз описать наблюдаемые у среднего представителя типа особенности поведения и обработки информации психикой.
                </Text>
            </div>

            <MiniTabsDescription />
            <Outlet />

            <EndPoint />
        </WhiteCard>
    );
}
