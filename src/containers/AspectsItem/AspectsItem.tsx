import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './AspectsItem.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function AspectsItem() {
    const { aspectName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${aspectName}.tsx`).default;

    return (
        <AppScrollbar>
            <WhiteCard color="white" className={styles.root}>
                <Content />
            </WhiteCard>
        </AppScrollbar>
    );
}