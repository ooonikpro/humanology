import React, { useMemo } from 'react';
import styles from './SociotypesCompatibility.module.scss';
import { WhiteCard } from '../../../components/WhiteCard';
import { useSociotype } from '../../../hooks';
import { IntertypesCard } from '../../../components/IntertypesCard';
import { Socionics } from '../../../types';
import { EndPoint } from '../../../components/EndPoint';
import { PageTitle } from '../../../components/PageTitle';


export default function SociotypesCompatibility() {
    const { sociotypeProps: { intertypeRelations } } = useSociotype();

    const intertypes = useMemo(() => {
        return (Object.entries(intertypeRelations) as Array<[Socionics.IntertypeRelations, Socionics.SocionicsType]>).map(([intertype, id]) => (
            <IntertypesCard id={id} intertype={intertype} key={intertype} />
        ));
    }, [intertypeRelations]);

    return (
        <WhiteCard color="white" className={styles.wrap}>
            <PageTitle iconName="Apps">Совместимость</PageTitle>
            <div className={styles.intertypes}>
                {intertypes}
            </div>
            <EndPoint />
        </WhiteCard>
    );
}
