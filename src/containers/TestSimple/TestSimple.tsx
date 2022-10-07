import React from 'react';
import styles from './TestSimple.module.scss';
import { TestVorobiev } from '../../components/TestVorobiev';
import { WhiteCard } from '../../components/WhiteCard';
import { PageTitle } from '../../components/PageTitle';

export default function TestSimple() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='TestSimple'>Тест Воробьева</PageTitle>
            <TestVorobiev />
        </WhiteCard>
    );
}