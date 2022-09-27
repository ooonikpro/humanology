import React from 'react';
import { useParams } from 'react-router-dom';
import { WhiteCard } from '../../components/WhiteCard';
import styles from './SuitsTarot.module.scss';


export default function SuitsTarot() {
    const { tarotName } = useParams();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Content = require(`./Content/${tarotName}.tsx`).default;

    return (
        <WhiteCard color="white" className={styles.root}>
            <Content />
        </WhiteCard>
    );
}
