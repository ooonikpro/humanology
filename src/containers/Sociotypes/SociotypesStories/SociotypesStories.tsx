import React from 'react';
import { useParams } from 'react-router-dom';
import { WhiteCard } from 'src/components/WhiteCard';
import { Socionics } from 'src/types';
import { PageTitle } from '../../../components/PageTitle';
import styles from './SociotypesStories.module.scss';

export default function SociotypesStories() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.wrap}>
            <PageTitle iconName="Annotation">Истории</PageTitle>
            <div className={styles.text}>
                <React.Suspense>
                    <Description />
                </React.Suspense>
            </div>
        </WhiteCard>
    );
}
