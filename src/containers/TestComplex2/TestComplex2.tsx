import React from 'react';
import styles from './TestComplex2.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { PageTitle } from '../../components/PageTitle';
import { AppScrollbar } from '../../components/AppScrollbar';
import { TestKeirsey } from '../../components/TestKeirsey';

export default function TestComplex2() {
    return (
        <AppScrollbar hideTabs>
            <WhiteCard color="white" className={styles.root}>
                <PageTitle back iconName='TestSimple'>Опросник Кейрси</PageTitle>
                <TestKeirsey/>
            </WhiteCard>
        </AppScrollbar>
    );
}