import React from 'react';
import { useParams } from 'react-router-dom';
import { Text } from 'src/components/Text';
import { WhiteCard } from 'src/components/WhiteCard';
import { Socionics } from 'src/types';
import styles from './SociotypesPeople.module.scss';

export default function SociotypesPeople() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Люди</Text>
                <div className={styles.text}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
            </WhiteCard>
        </div>
    );
}
