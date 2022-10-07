import React from 'react';
import styles from './TestComplex.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { TestFilatova } from '../../components/TestFilatova';
import { PageTitle } from '../../components/PageTitle';

export default function TestSimple() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='TestComplex'>Тест Филатовой</PageTitle>
            <TestFilatova />
        </WhiteCard>
    );
}