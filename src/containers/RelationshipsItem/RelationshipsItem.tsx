import React from 'react';
import { useParams } from 'react-router-dom';
import { AppScrollbar } from '../../components/AppScrollbar';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './RelationshipsItem.module.scss';


export default function RelationshipsItem() {
    const { relationshipsName } = useParams();

    const Content = React.lazy(() => import(`./Content/${relationshipsName}.tsx`));

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
