import React from 'react';
import { useParams } from 'react-router-dom';
import { EndPoint } from '../../components/EndPoint';
import { AppScrollbar } from '../../components/AppScrollbar';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './DichotomiesYungItem.module.scss';


export default function DichotomiesYungItem() {
    const { yungDichotomyName } = useParams();

    const Content = React.lazy(() => import(`./Content/${yungDichotomyName}.tsx`));

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
