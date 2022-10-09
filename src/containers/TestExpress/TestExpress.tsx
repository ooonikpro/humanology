import React from 'react';
import styles from './TestExpress.module.scss';
import { TestMegedOvcharova } from '../../components/TestMegedOvcharova';
import { WhiteCard } from '../../components/WhiteCard';
import { PageTitle } from '../../components/PageTitle';

export default function TestExpress() {
    return (
        <WhiteCard color="white" className={styles.root}>
            <PageTitle iconName='TestSimple'>Экспресс-тест Мегедь-Овчарова</PageTitle>
            <TestMegedOvcharova />
        </WhiteCard>
    );
}