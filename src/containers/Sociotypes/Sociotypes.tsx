import React, { useEffect } from 'react';
import styles from './Sociotypes.module.scss';
import { Outlet } from 'react-router-dom';
import { useSociotype } from '../../hooks/useSociotype';
import { SocietyCard } from '../../components/SocietyCard';
import { SociotypeTabs } from '../../components/Tabs/SociotypeTabs';
import { WhiteCard } from '../../components/WhiteCard';
import { FunctionalCardGroup } from '../../components/FunctionalCardGroup';
import { useIsSociatypeCardRoute } from '../../hooks/useIsSociatypeCardRoute';

export default function Sociotypes() {
    const { sociotypeProps: intertypeProps, styles: inlineStyles } = useSociotype();
    const isActiveRouteSociatypeCard = useIsSociatypeCardRoute();

    useEffect(() => {
        document.documentElement.style.cssText=inlineStyles;
    }, [intertypeProps]);

    return (
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
}
