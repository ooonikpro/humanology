import React from 'react';
import { useParams } from 'react-router-dom';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './FunctionsItem.module.scss';


export default function FunctionsItem() {
    const { functionName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${functionName}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.root}>
            <Content />
        </WhiteCard>
    );
}
