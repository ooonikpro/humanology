import React from 'react';
import styles from './SociotypesDevelopment.module.scss';
import { WhiteCard } from '../../../components/WhiteCard';
import { useParams } from 'react-router-dom';
import { Socionics } from '../../../types';
import { PageTitle } from '../../../components/PageTitle';
import { EndPoint } from '../../../components/EndPoint';


export default function SociotypesDevelopment() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.wrap}>
            <PageTitle iconName="HappySquare">Развитие личности</PageTitle>
            <div className={styles.text}>
                <React.Suspense>
                    <Description />
                </React.Suspense>
            </div>
            <EndPoint />
        </WhiteCard>
    );
}
