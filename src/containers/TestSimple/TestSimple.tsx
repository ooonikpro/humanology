import React from 'react';
import styles from './TestSimple.module.scss';
import { TestVorobiev } from '../../components/TestVorobiev';
import { WhiteCard } from '../../components/WhiteCard';
import { PageTitle } from '../../components/PageTitle';
import { AppScrollbar } from '../../components/AppScrollbar';

export default function TestSimple() {
    return (
        <AppScrollbar hideTabs>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle iconName='TestSimple' back>Тест Воробьева</PageTitle>
                <TestVorobiev />
            </WhiteCard>
        </AppScrollbar>
    );
}