import React from 'react';
import { useParams } from 'react-router-dom';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './RelationshipsItem.module.scss';


export default function RelationshipsItem() {
    const { relationshipsName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${relationshipsName}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.root}>
            <Content />
        </WhiteCard>
    );
}
