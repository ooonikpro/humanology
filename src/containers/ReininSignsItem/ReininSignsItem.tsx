import React from 'react';
import { useParams } from 'react-router-dom';
import { AppScrollbar } from '../../components/AppScrollbar';
import { WhiteCard } from '../../components/WhiteCard';
import { EndPoint } from '../../components/EndPoint';
import styles from './ReininSignsItem.module.scss';


export default function ReininSignsItem() {
    const { reininSignName } = useParams();

    const Content = React.lazy(() => import(`./Content/${reininSignName}.tsx`));

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <React.Suspense>
                    <Content />
                </React.Suspense>
                <EndPoint />
            </WhiteCard>
        </AppScrollbar>
    );
}
