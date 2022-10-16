import React from 'react';
import { useParams } from 'react-router-dom';
import { AppScrollbar } from '../../components/AppScrollbar';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './MindsItem.module.scss';


export default function MindsItem() {
    const { mindsetsName } = useParams();

    const Content = React.lazy(() => import(`./Content/${mindsetsName}.tsx`));

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
