import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './AspectsItem.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function AspectsItem() {
    const { aspectName } = useParams();

    const Content = React.lazy(() => import(`./Content/${aspectName}.tsx`));

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <React.Suspense>
                    <Content />
                </React.Suspense>
            </WhiteCard>
        </AppScrollbar>
    );
}
