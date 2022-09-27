import React from 'react';
import { useParams } from 'react-router-dom';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './BlocksItem.module.scss';


export default function BlocksItem() {
    const { blockName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${blockName}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.root}>
            <Content />
        </WhiteCard>
    );
}
