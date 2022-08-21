import React from 'react';
import { useParams } from 'react-router-dom';
import { SocietyCard } from 'src/components/SocietyCard';
import { Text } from 'src/components/Text';
import { WhiteCard } from 'src/components/WhiteCard';
import { useIntertype } from 'src/hooks/useIntertype';
import { Humanology } from 'src/types';
import styles from './SociatypesDescription.module.scss';

export default function SociatypesDescription() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Humanology.Intertype;
    const { intertypeProps } = useIntertype(id);
    const Description = React.lazy(() => import(`./text/${id}.tsx`));

    return (
        <div className={styles.root}>
            <SocietyCard {...intertypeProps} mini />

            <WhiteCard>
                <Text tag="b" size="h4" className={styles.title}>Описание</Text>
                <div className={styles.text}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
            </WhiteCard>
        </div>
    );
}
