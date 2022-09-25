import React from 'react';
import { useParams } from 'react-router-dom';
import { WhiteCard } from 'src/components/WhiteCard';
import { Socionics } from 'src/types';
import { PageTitle } from '../../../components/PageTitle';
import styles from './SociotypesVideo.module.scss';

export default function SociotypesVideo() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.wrap}>
            <PageTitle iconName="PlaySquare">Видео</PageTitle>
            <div className={styles.text}>
                <React.Suspense>
                    <Description />
                </React.Suspense>
            </div>
        </WhiteCard>
    );
}
