import React from 'react';
import { useParams } from 'react-router-dom';
import { WhiteCard } from 'src/components/WhiteCard';
import { Socionics } from 'src/types';
import { PageTitle } from '../../../components/PageTitle';
import { AuthorLine } from '../../../components/AuthorLine';
import styles from './SociotypesStories.module.scss';
import { EndPoint } from '../../../components/EndPoint';

export default function SociotypesStories() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Description = require(`./text/${id}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.wrap}>
            <PageTitle iconName="Annotation">Истории</PageTitle>
            <AuthorLine text="Читать пока нечего" iconName="Unknown">Разные</AuthorLine>
            <div className={styles.text}>
                <React.Suspense>
                    <Description />
                </React.Suspense>
            </div>
            <EndPoint />
        </WhiteCard>
    );
}
