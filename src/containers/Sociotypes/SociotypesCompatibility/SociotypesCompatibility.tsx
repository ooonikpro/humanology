import React, { useMemo } from 'react';
import styles from './SociotypesCompatibility.module.scss';
import { WhiteCard } from 'src/components/WhiteCard';
import { Text } from 'src/components/Text';
import { useSociotype } from 'src/hooks';
import { IntertypesCard } from 'src/components/IntertypesCard';
import { Socionics } from 'src/types';


export default function SociotypesCompatibility() {
    const { sociotypeProps: { id, intertypeRelations } } = useSociotype();
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    const intertypes = useMemo(() => {
        return (Object.entries(intertypeRelations) as Array<[Socionics.IntertypeRelations, Socionics.SocionicsType]>).map(([intertype, id]) => (
            <IntertypesCard id={id} intertype={intertype} key={intertype}/>
        ));
    }, [intertypeRelations]);

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Совместимость</Text>
                <div className={styles.text}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>

                <br />

                <div className={styles.intertypes}>
                    {intertypes}
                </div>
            </WhiteCard>
        </div>
    );
}
