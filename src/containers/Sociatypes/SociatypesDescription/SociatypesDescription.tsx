import React from 'react';
import { useParams } from 'react-router-dom';
import { Text } from 'src/components/Text';
import { WhiteCard } from 'src/components/WhiteCard';
import { Socionics } from 'src/types';
import styles from './SociatypesDescription.module.scss';

export default function SociatypesDescription() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    const Description = React.lazy(() => import(`./text/${id}.tsx`));

    return (
        <div className={styles.wrap}>
            <WhiteCard color="beige-title-big">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Описание</Text>
                <div className={styles.text}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
            </WhiteCard>
        </div>
    );
}
