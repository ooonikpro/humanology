import React from 'react';
import styles from './History.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';
import { EndPoint } from '../../components/EndPoint';
import { MiniTabs } from '../../components/Tabs/MiniTabs/MiniTabs';
import { Outlet } from 'react-router-dom';

export default function History() {
    return (
        <div className={styles.root}>
            <WhiteCard color="white">
                <Text tag="h4" size="h4" font="additional" className={styles.title}>
                    История
                </Text>
                <MiniTabs />
                <Outlet />
                <EndPoint />
            </WhiteCard>
        </div>
    );
}