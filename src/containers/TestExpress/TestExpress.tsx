import React from 'react';
import styles from './TestExpress.module.scss';
import { TestMegedOvcharova } from '../../components/TestMegedOvcharova';
import { WhiteCard } from '../../components/WhiteCard';
import { PageTitle } from '../../components/PageTitle';
import { AppScrollbar } from 'src/components/AppScrollbar';

export default function TestExpress() {
    return (
        <AppScrollbar hideTabs>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle back iconName='TestSimple'>Экспресс-тест Мегедь-Овчарова</PageTitle>
                <TestMegedOvcharova />
            </WhiteCard>
        </AppScrollbar>
    );
}