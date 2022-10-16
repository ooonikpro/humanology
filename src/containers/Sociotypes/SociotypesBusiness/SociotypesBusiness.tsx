import React from 'react';
import styles from './SociotypesBusiness.module.scss';
import { WhiteCard } from '../../../components/WhiteCard';
import { useParams } from 'react-router-dom';
import { Socionics } from '../../../types';
import { PageTitle } from '../../../components/PageTitle';
import { EndPoint } from '../../../components/EndPoint';


export default function SociotypesBusiness() {
    const params = useParams();
    const id = params.id?.toUpperCase() as Socionics.SocionicsType;
    const Description = React.lazy(() => import(`./text/${id}.tsx`));

    return (
        <WhiteCard color="white" className={styles.wrap}>
            <PageTitle iconName="BriefcaseAlt">Деловые качества</PageTitle>
            <div className={styles.text}>
                <React.Suspense>
                    <Description />
                </React.Suspense>
            </div>
            <EndPoint />
        </WhiteCard>
    );
}
