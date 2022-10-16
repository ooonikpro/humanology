import React from 'react';
import { useParams } from 'react-router-dom';
import { EndPoint } from '../../../components/EndPoint';
import { WhiteCard } from '../../../components/WhiteCard';
import { Socionics } from '../../../types';
import { PageTitle } from '../../../components/PageTitle';
import styles from './SociotypesDescription.module.scss';

export default function SociotypesDescription() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    const Description = React.lazy(() => import(`./text/${id}.tsx`));

    return (
        <WhiteCard color="white" className={styles.wrap}>
            <PageTitle iconName="JustifyLeft">Описание</PageTitle>
            <div className={styles.text}>
                <React.Suspense>
                    <Description />
                </React.Suspense>
            </div>
            <EndPoint />
        </WhiteCard>
    );
}
