import React from 'react';
import { useParams } from 'react-router-dom';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './RingItem.module.scss';


export default function RingItem() {
    const { ringName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${ringName}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.root}>
            <Content />
        </WhiteCard>
    );
}
