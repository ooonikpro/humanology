import React from 'react';
import styles from './SociotypesBusiness.module.scss';
import { WhiteCard } from 'src/components/WhiteCard';
import { Text } from 'src/components/Text';
import { useParams } from 'react-router-dom';
import { Socionics } from 'src/types';


export default function SociotypesBusiness() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    const Description = React.lazy(() => import(`./text/${id}.tsx`));

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>Деловые качества</Text>
                <div className={styles.text}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
            </WhiteCard>
        </div>
    );
}