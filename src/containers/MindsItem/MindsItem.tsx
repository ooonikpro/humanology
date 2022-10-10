import React from 'react';
import { useParams } from 'react-router-dom';
import { AppScrollbar } from '../../components/AppScrollbar';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './MindsItem.module.scss';


export default function MindsItem() {
    const { mindsetsName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${mindsetsName}.tsx`).default;

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <Content />
            </WhiteCard>
        </AppScrollbar>
    );
}
