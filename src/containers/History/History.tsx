import React from 'react';
import styles from './History.module.scss';
import { WhiteCard } from '../../components/WhiteCard';
import { Text } from '../../components/Text';

export default function History() {
    return (
        <div className={styles.root}>
            <WhiteCard>
                <Text tag="h3" size="h3" className={styles.title}>История</Text>

            </WhiteCard>
        </div>
    );
}