import React from 'react';
import { useParams } from 'react-router-dom';
import { Socionics } from 'src/types';
import styles from '../SociotypesHumour.module.scss';

export default function HumourSelutin() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`../Content/${id}-Selutin.tsx`).default;

    return (
        <div className={styles.text}>
            <React.Suspense>
                <Content />
            </React.Suspense>
        </div>
    );
}