import React from 'react';
import styles from './SociotypesDevelopment.module.scss';
import { WhiteCard } from 'src/components/WhiteCard';
import { Text } from 'src/components/Text';
import { useParams } from 'react-router-dom';
import { Socionics } from 'src/types';


export default function SociotypesDevelopment() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    return (
        <div className={styles.wrap}>
            <WhiteCard color="white">
                <Text tag="h1" size="h4" color="accent" font="additional" className={styles.title}>
                    Как развиваться
                </Text>
                <div className={styles.text}>
                    <React.Suspense>
                        <Description />
                    </React.Suspense>
                </div>
            </WhiteCard>
        </div>
    );
}
