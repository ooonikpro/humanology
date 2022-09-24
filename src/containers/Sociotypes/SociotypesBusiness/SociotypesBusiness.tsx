import React from 'react';
import styles from './SociotypesBusiness.module.scss';
import { WhiteCard } from '../../../components/WhiteCard';
import { Text } from '../../../components/Text';
import { useParams } from 'react-router-dom';
import { Socionics } from '../../../types';
import { EndPoint } from '../../../components/EndPoint';


export default function SociotypesBusiness() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Деловые качества</Text>
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
