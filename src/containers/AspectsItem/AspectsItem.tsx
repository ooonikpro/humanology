import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './AspectsItem.module.scss';
import { WhiteCard } from '../../components/WhiteCard';

export default function AspectsItem() {
    const { aspectName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${aspectName}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.root}>
            <Content />
        </WhiteCard>
    );
}