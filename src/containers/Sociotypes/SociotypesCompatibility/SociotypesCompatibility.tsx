import React, { useMemo } from 'react';
import styles from './SociotypesCompatibility.module.scss';
import { WhiteCard } from '../../../components/WhiteCard';
import { Text } from '../../../components/Text';
import { useSociotype } from '../../../hooks';
import { IntertypesCard } from '../../../components/IntertypesCard';
import { Socionics } from '../../../types';
import { EndPoint } from '../../../components/EndPoint';


export default function SociotypesCompatibility() {
    const { sociotypeProps: { intertypeRelations } } = useSociotype();

    const intertypes = useMemo(() => {
        return (Object.entries(intertypeRelations) as Array<[Socionics.IntertypeRelations, Socionics.SocionicsType]>).map(([intertype, id]) => (
            <IntertypesCard id={id} intertype={intertype} key={intertype} />
        ));
    }, [intertypeRelations]);

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Совместимость</Text>
                <div className={styles.intertypes}>
                    {intertypes}
                </div>
                <EndPoint />
            </WhiteCard>
        </div>
    );
}
