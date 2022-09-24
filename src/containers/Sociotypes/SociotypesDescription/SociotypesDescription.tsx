import React from 'react';
import { useParams } from 'react-router-dom';
import { EndPoint } from '../../../components/EndPoint';
import { Text } from '../../../components/Text';
import { WhiteCard } from '../../../components/WhiteCard';
import { Socionics } from '../../../types';
import styles from './SociotypesDescription.module.scss';

export default function SociotypesDescription() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Описание</Text>
                <div className={styles.text}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
                <EndPoint />
            </WhiteCard>
        </div>
    );
}
