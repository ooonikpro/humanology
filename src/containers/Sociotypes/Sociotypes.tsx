import React, { useCallback, useEffect } from 'react';
import styles from './Sociotypes.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSociotype } from '../../hooks/useSociotype';
import { SocietyCard } from '../../components/SocietyCard';
import { SociotypeTabs } from '../../components/Tabs/SociotypeTabs';
import { WhiteCard } from '../../components/WhiteCard';
import { FunctionalCardGroup } from '../../components/FunctionalCardGroup';
import { useIsSociatypeCardRoute } from '../../hooks/useIsSociatypeCardRoute';
import { useIsSociatypeRoute } from '../../hooks/useIsSociatypeRoute';
import { ROUTES } from '../../constants/routes';
import { Modal } from '../../components/Modal';

export default function Sociotypes() {
    const { sociotypeProps: intertypeProps, styles: inlineStyles } = useSociotype();
    const isActiveRouteSociatypeCard = useIsSociatypeCardRoute();
    const isActiveRouteSociatypeRoute = useIsSociatypeRoute();

    const goTo = useNavigate();
    const goToHome = useCallback(() => goTo(ROUTES.HOME), [goTo, ROUTES.HOME]);

    useEffect(() => {
        document.documentElement.style.cssText=inlineStyles;
    }, [intertypeProps]);

    const Container = (
        <div className={styles.root}>
            <SocietyCard {...intertypeProps} mini={!isActiveRouteSociatypeCard}/>

            {
                isActiveRouteSociatypeCard &&
                    <WhiteCard className={styles.functionalBlock}>
                        <FunctionalCardGroup
                            element={intertypeProps.element}
                            intertype={intertypeProps.id}
                            {...intertypeProps.aspects}
                        />
                    </WhiteCard>
            }

            <SociotypeTabs />

            <Outlet />
        </div>
    );

    return <Modal isOpen={isActiveRouteSociatypeRoute} onClose={goToHome} render={() => Container}/>;
}
