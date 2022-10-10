import React from 'react';
import styles from './TestComplex.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { TestFilatova } from '../../components/TestFilatova';
import { PageTitle } from '../../components/PageTitle';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function TestSimple() {
    return (
        <AppScrollbar hideTabs>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='TestComplex' back>Тест Филатовой</PageTitle>
                <TestFilatova />
            </WhiteCard>
        </AppScrollbar>
    );
}