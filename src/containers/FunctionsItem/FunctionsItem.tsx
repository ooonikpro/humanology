import React from 'react';
import { useParams } from 'react-router-dom';
import { AppScrollbar } from '../../components/AppScrollbar';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './FunctionsItem.module.scss';


export default function FunctionsItem() {
    const { functionName } = useParams();

    const Content = React.lazy(() => import(`./Content/${functionName}.tsx`));

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
